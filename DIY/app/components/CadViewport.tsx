"use client";

import type { ScenePrimitive } from "@/lib/cad-engine";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

type CadViewportProps = {
  sceneSpec: ScenePrimitive[];
  view: "iso" | "top" | "front";
  exploded: boolean;
  resetToken: number;
};

function addEdges(mesh: THREE.Mesh, color = 0xb9c1b8) {
  const edges = new THREE.EdgesGeometry(mesh.geometry);
  const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.72 }));
  mesh.add(line);
}

function material(color: THREE.ColorRepresentation, opacity = 1, metalness = 0.08, roughness = 0.52, map?: THREE.Texture) {
  const options: THREE.MeshStandardMaterialParameters = { color, opacity, transparent: opacity < 1, metalness, roughness, fog: false };
  if (map) options.map = map;
  return new THREE.MeshStandardMaterial(options);
}

function carbonTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const context = canvas.getContext("2d");
  if (!context) return undefined;
  context.fillStyle = "#242625";
  context.fillRect(0, 0, 64, 64);
  context.lineWidth = 2;
  for (let offset = -64; offset < 128; offset += 8) {
    context.strokeStyle = "rgba(255,255,255,.055)";
    context.beginPath();
    context.moveTo(offset, 0);
    context.lineTo(offset + 64, 64);
    context.stroke();
    context.strokeStyle = "rgba(0,0,0,.18)";
    context.beginPath();
    context.moveTo(offset + 4, 0);
    context.lineTo(offset - 60, 64);
    context.stroke();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4, 4);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function plateGeometry(size: [number, number, number]) {
  const [width, thickness, depth] = size;
  const shape = new THREE.Shape();
  shape.moveTo(-width * 0.34, -depth * 0.5);
  shape.bezierCurveTo(-width * 0.47, -depth * 0.5, -width * 0.5, -depth * 0.38, -width * 0.47, -depth * 0.28);
  shape.lineTo(-width * 0.39, -depth * 0.08);
  shape.bezierCurveTo(-width * 0.37, -depth * 0.03, -width * 0.37, depth * 0.03, -width * 0.39, depth * 0.08);
  shape.lineTo(-width * 0.47, depth * 0.28);
  shape.bezierCurveTo(-width * 0.5, depth * 0.38, -width * 0.47, depth * 0.5, -width * 0.34, depth * 0.5);
  shape.lineTo(width * 0.34, depth * 0.5);
  shape.bezierCurveTo(width * 0.47, depth * 0.5, width * 0.5, depth * 0.38, width * 0.47, depth * 0.28);
  shape.lineTo(width * 0.39, depth * 0.08);
  shape.bezierCurveTo(width * 0.37, depth * 0.03, width * 0.37, -depth * 0.03, width * 0.39, -depth * 0.08);
  shape.lineTo(width * 0.47, -depth * 0.28);
  shape.bezierCurveTo(width * 0.5, -depth * 0.38, width * 0.47, -depth * 0.5, width * 0.34, -depth * 0.5);
  shape.closePath();
  const geometry = new THREE.ExtrudeGeometry(shape, { depth: thickness, bevelEnabled: true, bevelSegments: 2, bevelSize: 0.7, bevelThickness: 0.45, curveSegments: 16 });
  geometry.rotateX(Math.PI / 2);
  geometry.translate(0, thickness / 2, 0);
  return geometry;
}

function roundedBox(size: [number, number, number], radius = 1.2) {
  return new RoundedBoxGeometry(size[0], size[1], size[2], 4, Math.min(radius, size[0] / 4, size[1] / 4, size[2] / 4));
}

function makePropeller(primitive: ScenePrimitive) {
  const group = new THREE.Group();
  const length = primitive.size[0] / 2;
  const bladeShape = new THREE.Shape();
  bladeShape.moveTo(0, -2.2);
  bladeShape.bezierCurveTo(length * 0.28, -5.2, length * 0.72, -6.1, length, -1.2);
  bladeShape.bezierCurveTo(length * 0.72, 1.8, length * 0.26, 3.8, 0, 2.2);
  bladeShape.closePath();
  const bladeGeometry = new THREE.ExtrudeGeometry(bladeShape, { depth: 1.2, bevelEnabled: true, bevelSize: 0.35, bevelThickness: 0.25, bevelSegments: 2, curveSegments: 12 });
  bladeGeometry.rotateX(Math.PI / 2);
  bladeGeometry.translate(0, 0.6, 0);
  [0, Math.PI].forEach((angle) => {
    const blade = new THREE.Mesh(bladeGeometry, material(primitive.color, 1, 0.15, 0.48));
    blade.rotation.y = angle;
    blade.castShadow = true;
    group.add(blade);
  });
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(5, 5.5, 2.8, 32), material("#262827", 1, 0.4, 0.3));
  hub.position.y = 0.7;
  hub.castShadow = true;
  group.add(hub);
  const nut = new THREE.Mesh(new THREE.CylinderGeometry(2.3, 2.3, 3.4, 6), material("#d2d4d2", 1, 0.88, 0.2));
  nut.position.y = 3;
  group.add(nut);
  return group;
}

function makeMotor(primitive: ScenePrimitive) {
  const group = new THREE.Group();
  const radius = primitive.size[0];
  const base = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius * 1.06, 4.2, 32), material("#202221", 1, 0.55, 0.28));
  base.position.y = -primitive.size[1] * 0.3;
  group.add(base);
  const stator = new THREE.Mesh(new THREE.TorusGeometry(radius * 0.62, 1.25, 8, 32), material("#b96b32", 1, 0.62, 0.32));
  stator.rotation.x = Math.PI / 2;
  stator.position.y = 0.4;
  group.add(stator);
  for (let index = 0; index < 12; index += 1) {
    const angle = index / 12 * Math.PI * 2;
    const coil = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 3.6, 8), material(index % 2 ? "#d68741" : "#a9572a", 1, 0.5, 0.35));
    coil.position.set(Math.cos(angle) * radius * 0.62, 0.2, Math.sin(angle) * radius * 0.62);
    coil.rotation.z = Math.PI / 2;
    coil.rotation.y = -angle;
    group.add(coil);
  }
  const bell = new THREE.Mesh(new THREE.CylinderGeometry(radius * 0.72, radius * 0.82, 7.5, 32, 1, true), material("#313332", 1, 0.68, 0.22));
  bell.position.y = 2.5;
  group.add(bell);
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(1.7, 1.7, 10, 20), material("#d7d9d7", 1, 0.9, 0.16));
  shaft.position.y = 5.6;
  group.add(shaft);
  group.traverse((child) => { if (child instanceof THREE.Mesh) child.castShadow = true; });
  return group;
}

function makePcb(primitive: ScenePrimitive) {
  const group = new THREE.Group();
  const board = new THREE.Mesh(roundedBox(primitive.size, 1.6), material(primitive.color, 1, 0.05, 0.55));
  board.castShadow = true;
  group.add(board);
  const top = primitive.size[1] / 2;
  const chipSizes: Array<[number, number, number, number]> = [[0, 0, 12, 10], [-12, 8, 7, 5], [12, -7, 8, 6], [10, 10, 5, 4]];
  chipSizes.forEach(([x, z, width, depth], index) => {
    const chip = new THREE.Mesh(roundedBox([width, 2.2 + index * 0.2, depth], 0.5), material(index === 3 ? "#c6c8c4" : "#171918", 1, index === 3 ? 0.65 : 0.12, 0.34));
    chip.position.set(x * primitive.size[0] / 44, top + 1.4, z * primitive.size[2] / 44);
    chip.castShadow = true;
    group.add(chip);
  });
  for (let index = 0; index < 12; index += 1) {
    const pad = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.5, 3.2), material("#d2b36c", 1, 0.75, 0.28));
    const side = index < 6 ? -1 : 1;
    pad.position.set(side * (primitive.size[0] / 2 - 2.4), top + 0.45, ((index % 6) - 2.5) * primitive.size[2] / 7);
    group.add(pad);
  }
  return group;
}

function makeBattery(primitive: ScenePrimitive) {
  const group = new THREE.Group();
  for (let index = -1; index <= 1; index += 1) {
    const cell = new THREE.Mesh(roundedBox([primitive.size[0] / 3 - 1, primitive.size[1], primitive.size[2]], 2.2), material("#1f2020", 1, 0.08, 0.72));
    cell.position.x = index * primitive.size[0] / 3;
    cell.castShadow = true;
    group.add(cell);
    const marker = new THREE.Mesh(new THREE.BoxGeometry(primitive.size[0] / 3 - 4, primitive.size[1] * 0.58, 0.8), material("#d9403d", 1, 0.05, 0.5));
    marker.position.set(index * primitive.size[0] / 3, 0, primitive.size[2] / 2 + 0.45);
    group.add(marker);
  }
  const strap = new THREE.Mesh(new THREE.BoxGeometry(9, primitive.size[1] + 1.5, primitive.size[2] + 2), material("#101111", 1, 0.04, 0.84));
  strap.rotation.z = Math.PI / 2;
  group.add(strap);
  return group;
}

function makeScrew(primitive: ScenePrimitive) {
  const group = new THREE.Group();
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(primitive.size[0] * 0.52, primitive.size[0] * 0.52, primitive.size[1], 16), material(primitive.color, 1, 0.9, 0.18));
  group.add(shaft);
  const head = new THREE.Mesh(new THREE.CylinderGeometry(primitive.size[0] * 1.25, primitive.size[0] * 1.25, 2.4, 6), material("#d9dbd9", 1, 0.92, 0.16));
  head.position.y = primitive.size[1] / 2 + 1.2;
  group.add(head);
  return group;
}

function makePrimitive(primitive: ScenePrimitive, carbon?: THREE.Texture) {
  if (primitive.kind === "motor") return makeMotor(primitive);
  if (primitive.kind === "propeller") return makePropeller(primitive);
  if (primitive.kind === "pcb") return makePcb(primitive);
  if (primitive.kind === "battery") return makeBattery(primitive);
  if (primitive.kind === "screw") return makeScrew(primitive);
  if (primitive.kind === "wire" && primitive.points) {
    const curve = new THREE.CatmullRomCurve3(primitive.points.map((point) => new THREE.Vector3(...point)));
    const wire = new THREE.Mesh(new THREE.TubeGeometry(curve, 32, primitive.size[0], 8, false), material(primitive.color, 1, 0.05, 0.62));
    wire.castShadow = true;
    return wire;
  }
  const geometry = primitive.kind === "plate"
    ? plateGeometry(primitive.size)
    : primitive.kind === "box"
      ? roundedBox(primitive.size, primitive.role === "enclosure" ? 1.1 : 0.8)
      : new THREE.CylinderGeometry(primitive.size[0], primitive.size[2], primitive.size[1], 32);
  const mesh = new THREE.Mesh(geometry, material(primitive.color, primitive.opacity ?? 1, primitive.role === "mount" ? 0.72 : 0.18, primitive.role === "enclosure" ? 0.34 : 0.5, primitive.role === "enclosure" ? carbon : undefined));
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  addEdges(mesh, primitive.role === "mount" ? 0x707572 : 0x4f5351);
  return mesh;
}

export function CadViewport({ sceneSpec, view, exploded, resetToken }: CadViewportProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xd9dad8);
    scene.fog = new THREE.FogExp2(0xd9dad8, 0.00055);

    const maxExtent = sceneSpec.reduce((max, primitive) => Math.max(max, Math.abs(primitive.position[0]) + primitive.size[0] / 2, Math.abs(primitive.position[2]) + primitive.size[2] / 2), 100);
    const cameraScale = Math.max(1, maxExtent / 64);
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 1200);
    const cameraPositions = {
      iso: new THREE.Vector3(120 * cameraScale, 68 * cameraScale, 135 * cameraScale),
      top: new THREE.Vector3(0, 175 * cameraScale, 0.01),
      front: new THREE.Vector3(0, 55 * cameraScale, 175 * cameraScale),
    };
    camera.position.copy(cameraPositions[view]);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.domElement.setAttribute("aria-label", "Viewport CAD 3D tương tác");
    mount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.075;
    controls.target.set(0, 12, 0);
    controls.minDistance = 65 * cameraScale;
    controls.maxDistance = 300 * cameraScale;
    controls.maxPolarAngle = Math.PI * 0.82;

    scene.add(new THREE.AmbientLight(0xffffff, 1.1));
    scene.add(new THREE.HemisphereLight(0xf8faf8, 0x666a67, 2.2));
    const keyLight = new THREE.DirectionalLight(0xffffff, 4.2);
    keyLight.position.set(-90, 150, 120);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    scene.add(keyLight);
    const fillLight = new THREE.DirectionalLight(0xdde7ff, 2.4);
    fillLight.position.set(110, 70, -90);
    scene.add(fillLight);

    const gridSize = Math.max(260, Math.ceil(maxExtent * 2.4 / 20) * 20);
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(gridSize, gridSize), new THREE.ShadowMaterial({ color: 0x747774, opacity: 0.2 }));
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -9;
    floor.receiveShadow = true;
    scene.add(floor);

    const assembly = new THREE.Group();
    scene.add(assembly);
    const carbon = carbonTexture();
    sceneSpec.forEach((primitive, index) => {
      const object = makePrimitive(primitive, carbon);
      const [x, y, z] = primitive.position;
      const explodeFactor = exploded && primitive.role === "component" ? 1.7 : 1;
      object.position.set(primitive.kind === "wire" ? 0 : x * explodeFactor, primitive.kind === "wire" ? 0 : y + (exploded && primitive.role === "component" ? 22 + index * 2 : 0), primitive.kind === "wire" ? 0 : z * explodeFactor);
      if (primitive.rotation) object.rotation.set(...primitive.rotation);
      object.userData = { id: primitive.id, label: primitive.label };
      assembly.add(object);
    });

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(mount);
    resize();

    let frame = 0;
    const animate = () => {
      frame = window.requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      controls.dispose();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => material.dispose());
        }
        if (object instanceof THREE.LineSegments) {
          object.geometry.dispose();
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
      carbon?.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [sceneSpec, view, exploded, resetToken]);

  return <div className="three-viewport" ref={mountRef} />;
}
