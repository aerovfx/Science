#!/usr/bin/env python3
"""Build deterministic FreeCAD documents from DIY's whitelisted CAD scene JSON."""

import json
import math
import os
import re
from pathlib import Path

import FreeCAD as App
import Mesh
import Part

ALLOWED_KINDS = {"box", "cylinder", "plate", "motor", "propeller", "pcb", "battery", "wire", "screw", "sphere", "cone", "tube", "lathe", "wing"}


def safe_name(value):
    name = re.sub(r"[^A-Za-z0-9_]", "_", str(value))[:64].strip("_")
    return name or "Primitive"


def diy_point(value):
    """DIY/Three.js is Y-up; FreeCAD is Z-up."""
    return App.Vector(float(value[0]), float(value[2]), float(value[1]))


def diy_rotation(value):
    rx, ry, rz = (list(value or [0, 0, 0]) + [0, 0, 0])[:3]
    rotation = App.Rotation()
    rotation = App.Rotation(App.Vector(1, 0, 0), math.degrees(float(rx))).multiply(rotation)
    rotation = App.Rotation(App.Vector(0, 0, 1), math.degrees(float(ry))).multiply(rotation)
    rotation = App.Rotation(App.Vector(0, 1, 0), -math.degrees(float(rz))).multiply(rotation)
    return rotation


def centered_box(size):
    width, height, depth = map(float, size)
    shape = Part.makeBox(width, depth, height)
    shape.translate(App.Vector(-width / 2, -depth / 2, -height / 2))
    return shape


def centered_cylinder(size):
    width, height, depth = map(float, size)
    radius = max(0.05, max(width, depth) / 2)
    length = max(0.1, height)
    shape = Part.makeCylinder(radius, length, App.Vector(0, 0, -length / 2), App.Vector(0, 0, 1))
    return shape


def wire_shape(points, diameter):
    converted = [diy_point(point) for point in points]
    if len(converted) < 2:
        return centered_cylinder([diameter, diameter, diameter])
    edges = [Part.makeLine(converted[index], converted[index + 1]) for index in range(len(converted) - 1)]
    return Part.makeCompound(edges)


def primitive_shape(primitive):
    kind = primitive["kind"]
    if kind not in ALLOWED_KINDS:
        raise ValueError(f"Unsupported primitive kind: {kind}")
    if kind == "wire":
        shape = wire_shape(primitive.get("points", []), min(map(float, primitive["size"])))
        return shape
    if kind == "sphere":
        radius = max(0.05, float(primitive["size"][0]))
        shape = Part.makeSphere(radius)
    elif kind == "cone":
        radius = max(0.05, float(primitive["size"][0]))
        height = max(0.1, float(primitive["size"][1]))
        shape = Part.makeCone(radius, 0.05, height, App.Vector(0, 0, -height / 2), App.Vector(0, 0, 1))
    elif kind in {"cylinder", "motor", "propeller", "screw", "tube", "lathe"}:
        # tube/lathe are approximated as solid cylinders in the native B-rep export.
        shape = centered_cylinder(primitive["size"])
    else:
        # box, plate, pcb, battery, wing -> centered box approximation.
        shape = centered_box(primitive["size"])
    shape.Placement = App.Placement(diy_point(primitive["position"]), diy_rotation(primitive.get("rotation")))
    return shape


def add_metadata(obj, primitive):
    obj.Label = str(primitive["label"])[:120]
    obj.addProperty("App::PropertyString", "DiyId", "DIY", "Stable DIY primitive identifier")
    obj.addProperty("App::PropertyString", "DiyKind", "DIY", "Source primitive type")
    obj.addProperty("App::PropertyString", "DiyRole", "DIY", "Assembly role")
    obj.addProperty("App::PropertyString", "DiyColor", "DIY", "Source display color")
    obj.DiyId = str(primitive["id"])
    obj.DiyKind = str(primitive["kind"])
    obj.DiyRole = str(primitive["role"])
    obj.DiyColor = str(primitive["color"])


def main():
    input_value = os.environ.get("DIY_CAD_INPUT")
    output_value = os.environ.get("DIY_CAD_OUTPUT")
    if not input_value or not output_value:
        raise SystemExit("DIY_CAD_INPUT and DIY_CAD_OUTPUT are required")
    input_path = Path(input_value).resolve()
    output_dir = Path(output_value).resolve()
    output_dir.mkdir(parents=True, exist_ok=True)
    payload = json.loads(input_path.read_text(encoding="utf-8"))
    doc = App.newDocument(safe_name(payload.get("draftId", "DIY_CAD")))
    objects = []
    errors = []
    for primitive in payload["primitives"]:
        try:
            obj = doc.addObject("Part::Feature", safe_name(primitive["id"]))
            obj.Shape = primitive_shape(primitive)
            add_metadata(obj, primitive)
            objects.append(obj)
        except Exception as error:
            errors.append({"id": primitive.get("id", "unknown"), "error": str(error)})
    if not objects:
        raise RuntimeError("No valid CAD primitives were produced")
    doc.recompute()
    base_name = safe_name(payload.get("draftId", "diy-cad")).lower()
    fcstd_path = output_dir / f"{base_name}.FCStd"
    step_path = output_dir / f"{base_name}.step"
    stl_path = output_dir / f"{base_name}.stl"
    doc.saveAs(str(fcstd_path))
    Part.export(objects, str(step_path))
    Mesh.export(objects, str(stl_path))
    manifest = {
        "engine": "FreeCAD/OpenCascade",
        "projectId": payload["projectId"],
        "draftId": payload["draftId"],
        "primitiveCount": len(objects),
        "errors": errors,
        "files": [fcstd_path.name, step_path.name, stl_path.name],
    }
    (output_dir / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    App.closeDocument(doc.Name)
    print(json.dumps(manifest, ensure_ascii=False))


# FreeCADCmd loads .py files as modules when possible, rather than as __main__.
# This file is an executable worker, not an importable FreeCAD workbench module.
main()
