export type CadOperationType =
  | "create_box"
  | "create_cylinder"
  | "shell"
  | "add_pcb_mount"
  | "add_cutout"
  | "add_cable_port"
  | "fillet"
  | "place_component";

export type CadOperation = {
  id: string;
  type: CadOperationType;
  label: string;
  parameters: Record<string, string | number | number[] | boolean>;
};

export type CadConstraints = {
  maxSizeMm: [number, number, number];
  clearanceMm: number;
  wallThicknessMm: number;
  printer: "FDM" | "SLA" | "NONE";
};

export type ValidationIssue = {
  severity: "info" | "warning" | "error";
  code: string;
  message: string;
};

export type ScenePrimitive = {
  id: string;
  label: string;
  kind: "box" | "cylinder" | "plate" | "motor" | "propeller" | "pcb" | "battery" | "wire" | "screw";
  size: [number, number, number];
  position: [number, number, number];
  rotation?: [number, number, number];
  points?: Array<[number, number, number]>;
  color: string;
  opacity?: number;
  role: "enclosure" | "component" | "mount" | "cutout";
};

export type CadProjectResult = {
  projectId: string;
  draftId: string;
  baseVersion: number;
  request: string;
  constraints: CadConstraints;
  operations: CadOperation[];
  validation: {
    passed: boolean;
    score: number;
    checksPassed: number;
    checksTotal: number;
    issues: ValidationIssue[];
  };
  metrics: {
    dimensionsMm: [number, number, number];
    estimatedPrintMinutes: number;
    estimatedMaterialGrams: number;
    primitiveCount: number;
  };
  scene: ScenePrimitive[];
};

export const DEFAULT_CAD_REQUEST =
  "Design a budget mini UAV with an F4 AIO flight controller, four 1104 motors, 2.5 inch propellers, LiPo battery and radio receiver.";

export const DEFAULT_CONSTRAINTS: CadConstraints = {
  maxSizeMm: [260, 260, 80],
  clearanceMm: 0.8,
  wallThicknessMm: 2.4,
  printer: "FDM",
};

function stableHash(value: string) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16).padStart(8, "0");
}

function requestedDiameter(request: string) {
  const match = request.match(/(\d+(?:[.,]\d+)?)\s*mm/i);
  return match ? Number(match[1].replace(",", ".")) : 6;
}

function isUavRequest(request: string) {
  const lower = request.toLowerCase();
  return lower.includes("uav") || lower.includes("drone") || lower.includes("quadcopter");
}

function generateUavFeatureTree(request: string, constraints: CadConstraints): CadOperation[] {
  const operations: CadOperation[] = [
    { id: "op-01-drone-frame", type: "create_box", label: "Carbon bottom plate 100 × 100 × 1.5", parameters: { sizeMm: [100, 100, 1.5], material: "carbon-fiber" } },
    { id: "op-02-arms", type: "create_box", label: "Four carbon arms / 95 mm", parameters: { count: 4, lengthMm: 95, widthMm: 11 } },
    { id: "op-03-fc-mount", type: "add_pcb_mount", label: "F4 AIO mount / M2 × 4", parameters: { component: "flight-controller-esc", screw: "M2", points: 4, clearanceMm: constraints.clearanceMm } },
    { id: "op-04-flight-controller", type: "place_component", label: "Place F4 AIO flight controller", parameters: { component: "flight-controller-esc", positionMm: [0, 10, 0] } },
    { id: "op-05-motors", type: "create_cylinder", label: "Four 1104–1404 brushless motors", parameters: { count: 4, diameterMm: 14, heightMm: 12 } },
    { id: "op-06-propellers", type: "create_cylinder", label: "2.5 inch propellers / 2 CW + 2 CCW", parameters: { count: 4, diameterMm: 65, thicknessMm: 2 } },
    { id: "op-07-battery", type: "place_component", label: "Place 2S/3S LiPo battery", parameters: { component: "lipo-battery", positionMm: [0, 13, 34] } },
    { id: "op-08-receiver", type: "place_component", label: "Place radio receiver + antenna", parameters: { component: "radio-receiver", positionMm: [0, 18, -30] } },
    { id: "op-09-top-plate", type: "create_box", label: "Carbon top plate 80 × 80 × 1.5", parameters: { sizeMm: [80, 80, 1.5], heightMm: 22 } },
  ];
  const lower = request.toLowerCase();
  if (lower.includes("guard") || lower.includes("bảo vệ cánh")) {
    operations.push({ id: "op-10-prop-guards", type: "create_cylinder", label: "Add four removable propeller guards", parameters: { count: 4, diameterMm: 74, wallThicknessMm: 2 } });
  }
  return operations;
}

export function generateFeatureTree(
  request = DEFAULT_CAD_REQUEST,
  constraints: CadConstraints = DEFAULT_CONSTRAINTS,
): CadOperation[] {
  if (isUavRequest(request)) return generateUavFeatureTree(request, constraints);
  const lower = request.toLocaleLowerCase("vi");
  const operations: CadOperation[] = [
    {
      id: "op-01-enclosure",
      type: "create_box",
      label: "Enclosure / Box 90 × 65 × 32",
      parameters: { sizeMm: [90, 65, 32], centered: true },
    },
    {
      id: "op-02-shell",
      type: "shell",
      label: `Shell ${constraints.wallThicknessMm} mm`,
      parameters: { target: "op-01-enclosure", thicknessMm: constraints.wallThicknessMm, openFace: "top" },
    },
    {
      id: "op-03-fillet",
      type: "fillet",
      label: "Corner fillet R4",
      parameters: { target: "op-01-enclosure", radiusMm: 4 },
    },
    {
      id: "op-04-pico-mount",
      type: "add_pcb_mount",
      label: "Pico W mount / M2 × 4",
      parameters: { component: "raspberry-pi-pico-w", screw: "M2", points: 4, clearanceMm: constraints.clearanceMm },
    },
    {
      id: "op-05-lcd-cutout",
      type: "add_cutout",
      label: "LCD cutout 72 × 26",
      parameters: { component: "lcd1602-i2c", face: "front", sizeMm: [72, 26] },
    },
    {
      id: "op-06-pico",
      type: "place_component",
      label: "Place Raspberry Pi Pico W",
      parameters: { component: "raspberry-pi-pico-w", positionMm: [-18, 5, 1] },
    },
    {
      id: "op-07-lcd",
      type: "place_component",
      label: "Place LCD1602 I2C",
      parameters: { component: "lcd1602-i2c", positionMm: [18, 5, -7] },
    },
    {
      id: "op-08-relay",
      type: "place_component",
      label: "Place relay module",
      parameters: { component: "relay-1-channel", positionMm: [24, 5, 19] },
    },
  ];

  if (lower.includes("ống") || lower.includes("cable") || lower.includes("dây")) {
    const diameterMm = requestedDiameter(request);
    operations.push({
      id: "op-09-cable-port",
      type: "add_cable_port",
      label: `Cable / tube port Ø${diameterMm}`,
      parameters: { face: "right", diameterMm },
    });
  }

  if (lower.includes("mái che") || lower.includes("hood")) {
    operations.push({
      id: "op-10-sensor-hood",
      type: "create_box",
      label: "DHT11 ventilation hood",
      parameters: { sizeMm: [28, 18, 14], wallThicknessMm: 1.6, positionMm: [-26, 25, -21] },
    });
  }

  return operations;
}

export function validateDesign(
  operations: CadOperation[],
  constraints: CadConstraints = DEFAULT_CONSTRAINTS,
) {
  const isUav = operations.some((operation) => operation.id === "op-01-drone-frame");
  if (isUav) {
    const issues: ValidationIssue[] = [];
    const [width, depth, height] = [230, 230, 45];
    const [maxWidth, maxDepth, maxHeight] = constraints.maxSizeMm;
    if (width > maxWidth || depth > maxDepth || height > maxHeight) issues.push({ severity: "error", code: "SIZE_LIMIT", message: "UAV frame exceeds the configured build envelope." });
    if (constraints.clearanceMm < 0.4) issues.push({ severity: "error", code: "CLEARANCE_LOW", message: "Assembly clearance below 0.4 mm may bind printed motor mounts." });
    if (!operations.some((operation) => operation.id === "op-03-fc-mount")) issues.push({ severity: "error", code: "FC_UNMOUNTED", message: "Flight controller requires four isolated mounting points." });
    if (!operations.some((operation) => operation.id === "op-05-motors")) issues.push({ severity: "error", code: "MOTOR_COUNT", message: "Quadcopter requires four matched motors." });
    if (!operations.some((operation) => operation.id === "op-06-propellers")) issues.push({ severity: "error", code: "PROPELLER_SET", message: "CW/CCW propeller set is missing." });
    issues.push({ severity: "info", code: "PROP_SAFETY", message: "Remove propellers during firmware setup and motor-direction testing." });
    const errorCount = issues.filter((issue) => issue.severity === "error").length;
    const checksTotal = 10;
    return { passed: errorCount === 0, score: Math.max(0, 98 - errorCount * 20), checksPassed: Math.max(0, checksTotal - errorCount), checksTotal, issues };
  }
  const issues: ValidationIssue[] = [];
  const [width, depth, height] = [90, 65, 32];
  const [maxWidth, maxDepth, maxHeight] = constraints.maxSizeMm;

  if (width > maxWidth || depth > maxDepth || height > maxHeight) {
    issues.push({ severity: "error", code: "SIZE_LIMIT", message: "Kích thước vỏ vượt giới hạn không gian cho phép." });
  }
  if (constraints.wallThicknessMm < 1.2) {
    issues.push({ severity: "error", code: "WALL_TOO_THIN", message: "Thành vỏ dưới 1.2 mm không phù hợp cho bản in FDM lớp học." });
  } else if (constraints.wallThicknessMm < 2) {
    issues.push({ severity: "warning", code: "WALL_REVIEW", message: "Nên tăng thành vỏ lên tối thiểu 2 mm để chịu va đập tốt hơn." });
  }
  if (constraints.clearanceMm < 0.4) {
    issues.push({ severity: "error", code: "CLEARANCE_LOW", message: "Khoảng hở lắp ráp dưới 0.4 mm có nguy cơ kẹt linh kiện." });
  }
  if (!operations.some((operation) => operation.type === "add_pcb_mount")) {
    issues.push({ severity: "error", code: "PCB_UNMOUNTED", message: "PCB chưa có điểm bắt vít hoặc chân đỡ." });
  }
  if (!operations.some((operation) => operation.type === "add_cable_port")) {
    issues.push({ severity: "warning", code: "NO_CABLE_PORT", message: "Chưa có lỗ luồn dây hoặc ống nước." });
  }
  if (operations.some((operation) => operation.type === "add_cable_port")) {
    const port = operations.find((operation) => operation.type === "add_cable_port");
    const diameter = Number(port?.parameters.diameterMm ?? 0);
    if (diameter < 4) issues.push({ severity: "warning", code: "PORT_SMALL", message: "Lỗ luồn nhỏ hơn 4 mm có thể khó thi công." });
  }

  issues.push({ severity: "info", code: "PUMP_DIODE", message: "Khuyến nghị bổ sung diode flyback ở tải bơm DC." });

  const errorCount = issues.filter((issue) => issue.severity === "error").length;
  const warningCount = issues.filter((issue) => issue.severity === "warning").length;
  const score = Math.max(0, 100 - errorCount * 20 - warningCount * 6 - 2);
  const checksTotal = 8;
  const checksPassed = Math.max(0, checksTotal - errorCount - warningCount);
  return { passed: errorCount === 0, score, checksPassed, checksTotal, issues };
}

export function buildScene(operations: CadOperation[]): ScenePrimitive[] {
  if (operations.some((operation) => operation.id === "op-01-drone-frame")) {
    const scene: ScenePrimitive[] = [
      { id: "bottom-plate", label: "2.5 mm Carbon Bottom Plate", kind: "plate", size: [94, 2.5, 82], position: [0, 5, 0], color: "#242625", role: "enclosure" },
      { id: "top-plate", label: "2.0 mm Carbon Top Plate", kind: "plate", size: [92, 2, 80], position: [0, 36, 0], color: "#303231", role: "enclosure" },
      { id: "arm-fl", label: "Front Left Carbon Arm", kind: "box", size: [102, 3.5, 13], position: [-48, 5, -43], rotation: [0, -Math.PI / 4, 0], color: "#252726", role: "enclosure" },
      { id: "arm-fr", label: "Front Right Carbon Arm", kind: "box", size: [102, 3.5, 13], position: [48, 5, -43], rotation: [0, Math.PI / 4, 0], color: "#252726", role: "enclosure" },
      { id: "arm-rl", label: "Rear Left Carbon Arm", kind: "box", size: [102, 3.5, 13], position: [-48, 5, 43], rotation: [0, Math.PI / 4, 0], color: "#252726", role: "enclosure" },
      { id: "arm-rr", label: "Rear Right Carbon Arm", kind: "box", size: [102, 3.5, 13], position: [48, 5, 43], rotation: [0, -Math.PI / 4, 0], color: "#252726", role: "enclosure" },
      { id: "flight-controller", label: "F4 AIO Flight Controller + ESC", kind: "pcb", size: [44, 5, 44], position: [0, 16, 0], color: "#248c5b", role: "component" },
      { id: "battery", label: "2S 850 mAh LiPo Battery", kind: "battery", size: [54, 18, 30], position: [0, 4, 34], color: "#222322", role: "component" },
      { id: "receiver", label: "2.4 GHz Radio Receiver", kind: "pcb", size: [24, 4, 13], position: [15, 15, 31], color: "#305d43", role: "component" },
    ];
    const corners: Array<{ id: string; position: [number, number, number] }> = [
      { id: "fl", position: [-95, 10, -95] }, { id: "fr", position: [95, 10, -95] },
      { id: "rl", position: [-95, 10, 95] }, { id: "rr", position: [95, 10, 95] },
    ];
    corners.forEach(({ id, position }) => {
      scene.push({ id: `mount-${id}`, label: `${id.toUpperCase()} Motor Mount`, kind: "cylinder", size: [14, 2.5, 14], position: [position[0], 6, position[2]], color: "#252726", role: "mount" });
      scene.push({ id: `motor-${id}`, label: `${id.toUpperCase()} 1104 Brushless Motor`, kind: "motor", size: [11, 15, 11], position: [position[0], 14, position[2]], color: "#252625", role: "component" });
      scene.push({ id: `propeller-${id}`, label: `${id.toUpperCase()} 2.5 inch Propeller`, kind: "propeller", size: [70, 2, 10], position: [position[0], 26, position[2]], rotation: [0, id === "fl" || id === "rr" ? 0.25 : -0.25, 0], color: "#303231", role: "component" });
      scene.push({ id: `motor-screw-${id}`, label: `${id.toUpperCase()} Motor Shaft`, kind: "screw", size: [2.2, 26, 2.2], position: [position[0], 9, position[2]], color: "#c8cac8", role: "mount" });
      if (operations.some((operation) => operation.id === "op-10-prop-guards")) scene.push({ id: `guard-${id}`, label: `${id.toUpperCase()} Propeller Guard`, kind: "cylinder", size: [38, 2, 38], position: [position[0], 16, position[2]], color: "#b7a6ea", opacity: 0.18, role: "mount" });
    });
    [[-31, 21, -28], [31, 21, -28], [-31, 21, 28], [31, 21, 28]].forEach((position, index) => {
      scene.push({ id: `frame-standoff-${index + 1}`, label: `Aluminium Standoff ${index + 1}`, kind: "screw", size: [2.2, 31, 2.2], position: position as [number, number, number], color: "#c9ccca", role: "mount" });
      scene.push({ id: `top-fastener-${index + 1}`, label: `Top Plate M2 Fastener ${index + 1}`, kind: "screw", size: [2.2, 7, 2.2], position: [position[0], 38, position[2]], color: "#dadcda", role: "mount" });
    });
    [[-19, 11, -19], [19, 11, -19], [-19, 11, 19], [19, 11, 19]].forEach((position, index) => scene.push({ id: `fc-standoff-${index + 1}`, label: `FC Isolation Mount ${index + 1}`, kind: "cylinder", size: [2.3, 8, 2.3], position: position as [number, number, number], color: "#a7aaa7", role: "mount" }));
    corners.forEach(({ id, position }, index) => {
      const fcPoint: [number, number, number] = [index % 2 === 0 ? -17 : 17, 13, index < 2 ? -15 : 15];
      scene.push({ id: `wire-red-${id}`, label: `${id.toUpperCase()} Motor Power +`, kind: "wire", size: [1.1, 1.1, 1.1], position: [0, 0, 0], points: [[position[0], 8, position[2]], [(position[0] + fcPoint[0]) / 2, 8, (position[2] + fcPoint[2]) / 2], fcPoint], color: "#d83c37", role: "component" });
      scene.push({ id: `wire-black-${id}`, label: `${id.toUpperCase()} Motor Power -`, kind: "wire", size: [1.1, 1.1, 1.1], position: [0, 0, 0], points: [[position[0], 7, position[2] + 2], [(position[0] + fcPoint[0]) / 2, 7, (position[2] + fcPoint[2]) / 2 + 2], [fcPoint[0], 12, fcPoint[2] + 2]], color: "#171717", role: "component" });
    });
    scene.push({ id: "battery-lead-red", label: "LiPo Positive Lead", kind: "wire", size: [1.4, 1.4, 1.4], position: [0, 0, 0], points: [[-12, 10, 29], [-17, 13, 20], [-14, 15, 13]], color: "#dc3b35", role: "component" });
    scene.push({ id: "battery-lead-black", label: "LiPo Ground Lead", kind: "wire", size: [1.4, 1.4, 1.4], position: [0, 0, 0], points: [[-7, 10, 29], [-11, 12, 20], [-10, 14, 13]], color: "#171717", role: "component" });
    return scene;
  }
  const scene: ScenePrimitive[] = [
    { id: "floor", label: "Enclosure floor", kind: "box", size: [90, 3, 65], position: [0, 0, 0], color: "#5c675e", opacity: 0.72, role: "enclosure" },
    { id: "wall-back", label: "Back wall", kind: "box", size: [90, 25, 2.4], position: [0, 12.5, -31.3], color: "#748077", opacity: 0.62, role: "enclosure" },
    { id: "wall-left", label: "Left wall", kind: "box", size: [2.4, 25, 65], position: [-43.8, 12.5, 0], color: "#748077", opacity: 0.62, role: "enclosure" },
    { id: "wall-right", label: "Right wall", kind: "box", size: [2.4, 25, 65], position: [43.8, 12.5, 0], color: "#748077", opacity: 0.34, role: "enclosure" },
    { id: "pico", label: "Raspberry Pi Pico W", kind: "box", size: [51, 2.2, 21], position: [-17, 5, 3], color: "#1f9d61", role: "component" },
    { id: "lcd", label: "LCD1602", kind: "box", size: [55, 4, 24], position: [15, 6, -16], color: "#256da8", role: "component" },
    { id: "relay", label: "Relay", kind: "box", size: [22, 10, 28], position: [27, 8, 18], color: "#e26e2c", role: "component" },
    { id: "dht", label: "DHT11", kind: "box", size: [15, 9, 12], position: [-32, 9, 21], color: "#4ea5e8", role: "component" },
  ];

  const mounts: Array<[number, number, number]> = [[-38, 5, -25], [-5, 5, -25], [-38, 5, 25], [-5, 5, 25]];
  mounts.forEach((position, index) => scene.push({ id: `mount-${index + 1}`, label: `M2 mount ${index + 1}`, kind: "cylinder", size: [4, 5, 4], position, color: "#c8ff35", role: "mount" }));

  if (operations.some((operation) => operation.id === "op-10-sensor-hood")) {
    scene.push({ id: "sensor-hood", label: "DHT11 hood", kind: "box", size: [28, 14, 18], position: [-28, 24, 19], color: "#a4b0a7", opacity: 0.48, role: "enclosure" });
  }
  return scene;
}

export function buildCadProject(
  request = DEFAULT_CAD_REQUEST,
  constraints: CadConstraints = DEFAULT_CONSTRAINTS,
  baseVersion = 3,
): CadProjectResult {
  const operations = generateFeatureTree(request, constraints);
  const validation = validateDesign(operations, constraints);
  const scene = buildScene(operations);
  const isUav = isUavRequest(request);
  return {
    projectId: isUav ? "budget-mini-uav" : "greenhouse-pico-w",
    draftId: `draft-${stableHash(`${request}:${baseVersion}:${JSON.stringify(constraints)}`)}`,
    baseVersion,
    request,
    constraints,
    operations,
    validation,
    metrics: {
      dimensionsMm: isUav ? [230, 230, 45] : [90, 65, 32],
      estimatedPrintMinutes: isUav ? 185 + operations.length * 4 : 148 + operations.length * 3,
      estimatedMaterialGrams: isUav ? 42 + operations.length * 0.6 : 58 + operations.length * 0.8,
      primitiveCount: scene.length,
    },
    scene,
  };
}
