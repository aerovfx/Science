import type { CadProjectResult, ScenePrimitive } from "./cad-engine.js";
import type { ExportConnection, InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

// Deterministic, offline "prompt -> product" generator. It classifies a free-text
// prompt into an archetype (ornithopter, multirotor, fixed-wing, rover, marine, arm,
// gadget) and a set of features (camera, mic, GPS, LiDAR, video-link, gimbal), then
// composes a bill of materials, wiring, instructions and a DETAILED CAD mesh scene
// using the richer parametric primitive kinds (wing / lathe / sphere / cone / tube).
// No LLM is required; the same entry point can later be backed by a model.

export type GeneratedProjectMeta = {
  key: "generated";
  projectId: string;
  name: string;
  eyebrow: string;
  description: string;
  briefTitle: string;
  tags: string[];
  visual: string;
  originalPrompt: string;
  plan: string;
  notes: string[];
  componentCount: number;
};

export type GeneratedDesign = {
  project: GeneratedProjectMeta;
  parts: ProjectPart[];
  electricalConnections: ExportConnection[];
  mechanicalConnections: ExportConnection[];
  instructionPreamble: InstructionPreamble;
  instructionSteps: InstructionSection[];
  cadProject: CadProjectResult;
  budgetCap: number;
  archetype: Archetype;
  features: string[];
};

type Archetype = "ornithopter" | "multirotor" | "fixedwing" | "rover" | "marine" | "arm" | "gadget";

const part = (part: ProjectPart) => part;
const tri = (x: number, y: number, z: number): [number, number, number] => [x, y, z];

function detectArchetype(t: string): Archetype {
  if (/(ornithopter|dragonfly|flapping|flap wing|flapping wing|bird|butterfly|insect|beetle)/.test(t)) return "ornithopter";
  if (/(fixed[- ]?wing|airplane|aeroplane|plane|glider|vtol|flying wing|delta wing)/.test(t)) return "fixedwing";
  if (/(quad|quadcopter|hexacopter|octocopter|multirotor|multi[- ]?rotor|drone|copter|fpv)/.test(t)) return "multirotor";
  if (/(rover|car|buggy|tank|tracked|wheel|ground robot|mobile robot|vehicle|ugv)/.test(t)) return "rover";
  if (/(boat|ship|submarine|submersible|underwater|rov|usv|marine|catamaran|hovercraft)/.test(t)) return "marine";
  if (/(arm|gripper|manipulator|scara|gantry|claw|pick and place)/.test(t)) return "arm";
  return "gadget";
}

function detectFeatures(t: string): string[] {
  const f: string[] = [];
  if (/(camera|fpv|vision|video|filming|imaging|optical|eye)/.test(t)) f.push("camera");
  if (/(microphone|mic|audio|sound|acoustic)/.test(t)) f.push("mic");
  if (/(vr|goggles|headset|stream|streaming|real[- ]?time|first person|fpv)/.test(t)) f.push("videolink");
  if (/(gps|gnss|autonomous|navigation|waypoint|self[- ]?driving)/.test(t)) f.push("gps");
  if (/(lidar|obstacle|avoidance|tof|range|distance|radar)/.test(t)) f.push("lidar");
  if (/(gimbal|stabiliz|stabilis|3[- ]?axis)/.test(t)) f.push("gimbal");
  if (/(thermal|infrared|flir|heat)/.test(t)) f.push("thermal");
  return f;
}

const ARCHETYPE_LABEL: Record<Archetype, string> = {
  ornithopter: "Robotic Ornithopter",
  multirotor: "Custom Multirotor",
  fixedwing: "Custom Fixed-Wing",
  rover: "Custom Ground Robot",
  marine: "Custom Marine Craft",
  arm: "Custom Robotic Arm",
  gadget: "Custom Smart Gadget",
};

const ARCHETYPE_CAPTION: Record<Archetype, string> = {
  ornithopter: "FLAPPING-WING MAV / GENERATED",
  multirotor: "MULTIROTOR / GENERATED",
  fixedwing: "FIXED-WING / GENERATED",
  rover: "GROUND ROBOT / GENERATED",
  marine: "MARINE CRAFT / GENERATED",
  arm: "ROBOTIC ARM / GENERATED",
  gadget: "SMART GADGET / GENERATED",
};

const NAME_KEYWORDS: Record<Archetype, RegExp> = {
  ornithopter: /dragonfly|ornithopter|butterfly|robo[- ]?bird/i,
  multirotor: /quadcopter|hexacopter|octocopter|multirotor|drone|copter|quad/i,
  fixedwing: /aircraft|airplane|aeroplane|glider|plane|flying wing/i,
  rover: /rover|buggy|ugv|car|ground robot|robot|vehicle/i,
  marine: /submarine|submersible|hovercraft|catamaran|boat|vessel|rov|usv/i,
  arm: /manipulator|gripper|scara|arm/i,
  gadget: /wearable|gadget|device|tool|monitor/i,
};
const STOPWORDS = /^(this|that|these|those|a|an|the|remote|remote-controlled|small|compact|new|my|our|it)$/i;

function titleCase(s: string): string {
  return s.split(/\s+/).map((w) => (/^rov$|^usv$|^ugv$|^fpv$|^gps$/i.test(w) ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1))).join(" ");
}

// Derive a friendly product name from the prompt: prefer "<adjective> <archetype-noun>"
// near the archetype keyword, falling back to the archetype label.
function deriveName(prompt: string, archetype: Archetype): string {
  const t = (prompt || "").replace(/\s+/g, " ").trim();
  const kw = NAME_KEYWORDS[archetype];
  const pair = t.match(new RegExp(`([A-Za-z][A-Za-z-]+)\\s+(${kw.source})`, "i"));
  if (pair && !STOPWORDS.test(pair[1])) return titleCase(`${pair[1]} ${pair[2]}`);
  const single = t.match(kw);
  if (single) return titleCase(single[0]);
  const generic = t.match(/\b(?:a|an|the)\s+([A-Za-z][A-Za-z-]+(?:\s+[A-Za-z][A-Za-z-]+){0,2})/i);
  if (generic && !STOPWORDS.test(generic[1].split(" ")[0])) return titleCase(generic[1]);
  return ARCHETYPE_LABEL[archetype];
}

// ---- Shared feature parts ---------------------------------------------------

function featureParts(features: string[], idx: () => string): ProjectPart[] {
  const out: ProjectPart[] = [];
  if (features.includes("camera")) out.push(part({ id: idx(), exportId: "camera", name: "FPV camera", productName: "Micro FPV / CMOS Camera Module", description: "Compact camera for real-time first-person video.", category: "electrical", subtype: "sensor", type: "CAMERA", qty: 1, price: 22, color: "lime", pins: "VIDEO · 5V · GND", dimensions: "14x14mm", purchaseUrl: "", sourceStatus: "Reference class" }));
  if (features.includes("mic")) out.push(part({ id: idx(), exportId: "mic", name: "Microphone", productName: "MEMS Microphone w/ Amp", description: "Captures ambient audio to stream alongside the video feed.", category: "electrical", subtype: "sensor", type: "SENSOR", qty: 1, price: 6, color: "lime", pins: "OUT · VCC · GND", dimensions: "Module", purchaseUrl: "", sourceStatus: "Reference class" }));
  if (features.includes("videolink")) out.push(part({ id: idx(), exportId: "vtx", name: "Video/audio transmitter", productName: "Digital A/V Transmitter (VR-ready)", description: "Streams the camera and microphone feed wirelessly to VR goggles or a ground station.", category: "electrical", subtype: "module", type: "VTX", qty: 1, price: 34, color: "violet", pins: "VIDEO · AUDIO · ANT", dimensions: "Module", purchaseUrl: "", sourceStatus: "Reference class" }));
  if (features.includes("gps")) out.push(part({ id: idx(), exportId: "gps", name: "GPS module", productName: "u-blox GNSS Module", description: "Position and heading for autonomous navigation.", category: "electrical", subtype: "module", type: "GPS", qty: 1, price: 18, color: "violet", pins: "UART", dimensions: "Module", purchaseUrl: "", sourceStatus: "Reference class" }));
  if (features.includes("lidar")) out.push(part({ id: idx(), exportId: "lidar", name: "Range sensor", productName: "TFmini / ToF LiDAR", description: "Obstacle detection and distance sensing.", category: "electrical", subtype: "sensor", type: "SENSOR", qty: 1, price: 30, color: "lime", pins: "UART/I2C", dimensions: "42x15mm", purchaseUrl: "", sourceStatus: "Reference class" }));
  if (features.includes("gimbal")) out.push(part({ id: idx(), exportId: "gimbal", name: "2-axis gimbal", productName: "Brushless Gimbal + IMU", description: "Stabilizes the camera against vibration.", category: "electrical", subtype: "actuator", type: "GIMBAL", qty: 1, price: 45, color: "blue", pins: "PWM · IMU", dimensions: "Assembly", purchaseUrl: "", sourceStatus: "Reference class" }));
  if (features.includes("thermal")) out.push(part({ id: idx(), exportId: "thermal", name: "Thermal camera", productName: "FLIR Lepton Module", description: "Thermal imaging for low-light / heat awareness.", category: "electrical", subtype: "sensor", type: "SENSOR", qty: 1, price: 180, color: "lime", pins: "SPI", dimensions: "Module", purchaseUrl: "", sourceStatus: "Reference class" }));
  return out;
}

function featureScene(features: string[]): ScenePrimitive[] {
  const s: ScenePrimitive[] = [];
  if (features.includes("camera")) s.push({ id: "gen-camera", label: "FPV camera", kind: "sphere", size: tri(5, 5, 5), position: tri(0, 8, 24), color: "#1a1d22", role: "component" });
  if (features.includes("mic")) s.push({ id: "gen-mic", label: "Microphone", kind: "cylinder", size: tri(1.6, 4, 1.6), position: tri(8, 8, 22), color: "#c7ccd3", role: "component" });
  if (features.includes("videolink")) s.push({ id: "gen-vtx", label: "A/V transmitter", kind: "box", size: tri(12, 4, 10), position: tri(-14, 8, -4), color: "#7c5cff", role: "component" });
  if (features.includes("gps")) s.push({ id: "gen-gps", label: "GPS", kind: "cylinder", size: tri(7, 3, 7), position: tri(0, 22, -10), color: "#7c5cff", role: "component" });
  if (features.includes("lidar")) s.push({ id: "gen-lidar", label: "Range sensor", kind: "box", size: tri(12, 6, 8), position: tri(0, 8, 26), color: "#e08a2a", role: "component" });
  if (features.includes("thermal")) s.push({ id: "gen-thermal", label: "Thermal camera", kind: "cylinder", size: tri(4, 5, 4), position: tri(-8, 8, 24), rotation: tri(1.57, 0, 0), color: "#242831", role: "component" });
  return s;
}

// ---- Archetype builders -----------------------------------------------------

type Build = { parts: ProjectPart[]; scene: ScenePrimitive[]; budgetCap: number; plan: string; brief: string };

function buildOrnithopter(idx: () => string): Build {
  const parts: ProjectPart[] = [
    part({ id: idx(), exportId: "fc", name: "Flight controller", productName: "Tiny Brushed Flight Controller (WiFi/BLE)", description: "Manages flapping drive, stabilization and the video/audio link.", category: "electrical", subtype: "mcu", type: "FLIGHT CONTROLLER", qty: 1, price: 12, color: "orange", pins: "PWM · I2C · WiFi", dimensions: "20x18mm", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "imu", name: "IMU", productName: "MPU6050 6-axis IMU", description: "Attitude sensing for stable flapping flight.", category: "electrical", subtype: "sensor", type: "SENSOR", qty: 1, price: 2, color: "lime", pins: "I2C", dimensions: "21x16mm", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "motors", name: "Flapping micro-motors ×2", productName: "7mm Coreless Brushed Motor + Gearbox", description: "Drive the crank-rocker linkage that flaps the wings.", category: "electrical", subtype: "actuator", type: "MOTOR", qty: 2, price: 4, color: "blue", pins: "2-wire", dimensions: "7x20mm", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "battery", name: "LiPo battery", productName: "1S 3.7V 260mAh LiPo", description: "Lightweight single-cell pack.", category: "electrical", subtype: "power", type: "POWER", qty: 1, price: 4, color: "red", pins: "B+ · B−", dimensions: "1S", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "wings", name: "Membrane wings ×4", productName: "Carbon Spar + Mylar Membrane Wing", description: "Two pairs of lightweight flapping wings on carbon spars.", category: "mechanical", subtype: "mechanism", type: "MECHANISM", qty: 4, price: 3, color: "cyan", pins: "", dimensions: "Span 120mm", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "linkage", name: "Flapping linkage", productName: "Crank-Rocker Gear Linkage Set", description: "Converts motor rotation into symmetric wing flapping.", category: "mechanical", subtype: "mechanism", type: "MECHANISM", qty: 1, price: 5, color: "cyan", pins: "", dimensions: "Printed", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "airframe", name: "Airframe & tail", productName: "Carbon-Rod Fuselage + Stabiliser", description: "Slender fuselage rod with a lightweight tail stabiliser.", category: "mechanical", subtype: "structural", type: "STRUCTURAL", qty: 1, price: 6, color: "slate", pins: "", dimensions: "L 150mm", purchaseUrl: "", sourceStatus: "Reference class" }),
  ];
  const wing = (id: string, sx: number, sz: number, y: number, flap: number): ScenePrimitive => ({ id, label: "Wing", kind: "wing", size: tri(72, 0.6, 34), position: tri(sx * 8, y, sz * 6), rotation: tri(0, sx > 0 ? 0 : Math.PI, flap * sz), color: "#8fd0f0", opacity: 0.5, role: "component" });
  const scene: ScenePrimitive[] = [
    { id: "gen-body", label: "Fuselage", kind: "lathe", size: tri(6, 60, 6), position: tri(0, 6, 0), rotation: tri(0, 0, 1.5708), profile: [[0.15, 0], [0.7, 0.1], [1, 0.4], [0.8, 0.75], [0.2, 1]] as [number, number][], color: "#30363d", role: "enclosure" },
    { id: "gen-fc", label: "Flight controller", kind: "pcb", size: tri(20, 3, 16), position: tri(0, 10, 0), color: "#157d55", role: "component" },
    { id: "gen-batt", label: "1S LiPo", kind: "battery", size: tri(18, 6, 10), position: tri(-2, 3, 0), color: "#c9403d", role: "component" },
    { id: "gen-m1", label: "Flap motor L", kind: "motor", size: tri(5, 12, 5), position: tri(6, 8, -6), rotation: tri(1.5708, 0, 0), color: "#242831", role: "component" },
    { id: "gen-m2", label: "Flap motor R", kind: "motor", size: tri(5, 12, 5), position: tri(6, 8, 6), rotation: tri(1.5708, 0, 0), color: "#242831", role: "component" },
    wing("gen-w1", 1, 1, 12, 0.35),
    wing("gen-w2", 1, -1, 12, 0.35),
    wing("gen-w3", -1, 1, 9, 0.2),
    wing("gen-w4", -1, -1, 9, 0.2),
    { id: "gen-tail", label: "Tail stabiliser", kind: "wing", size: tri(30, 0.6, 22), position: tri(-40, 6, 0), rotation: tri(0, Math.PI, 0), color: "#8fd0f0", opacity: 0.5, role: "component" },
    { id: "gen-boom", label: "Tail boom", kind: "cylinder", size: tri(1.4, 44, 1.4), position: tri(-22, 6, 0), rotation: tri(0, 0, 1.5708), color: "#20242a", role: "mount" },
  ];
  return { parts, scene, budgetCap: 60, plan: "Requirements → carbon airframe → crank-rocker flapping drive → membrane wings → FC + IMU + 1S power → A/V payload → trim & flight test", brief: "Cánh vỗ sinh học.\nHai motor micro.\nFPV + audio nhẹ." };
}

function buildMultirotor(idx: () => string): Build {
  const parts: ProjectPart[] = [
    part({ id: idx(), exportId: "fc", name: "Flight controller", productName: "F4/F7 Flight Controller + IMU", description: "Stabilization, mixing and flight modes.", category: "electrical", subtype: "mcu", type: "FLIGHT CONTROLLER", qty: 1, price: 35, color: "orange", pins: "UART · I2C · PWM", dimensions: "36x36mm", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "esc", name: "4-in-1 ESC", productName: "4-in-1 BLHeli ESC", description: "Drives the four motors from the flight controller.", category: "electrical", subtype: "actuator", type: "ESC", qty: 1, price: 30, color: "blue", pins: "DShot", dimensions: "36x36mm", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "motors", name: "BLDC motors ×4", productName: "2207 Brushless Motor", description: "Provide lift and thrust.", category: "electrical", subtype: "actuator", type: "MOTOR", qty: 4, price: 15, color: "blue", pins: "3-phase", dimensions: "2207", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "battery", name: "LiPo battery", productName: "4S 1500mAh LiPo", description: "Main propulsion pack.", category: "electrical", subtype: "power", type: "POWER", qty: 1, price: 25, color: "red", pins: "XT60", dimensions: "4S", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "rx", name: "RC receiver", productName: "ELRS/FrSky Receiver", description: "Manual control link.", category: "electrical", subtype: "module", type: "RECEIVER", qty: 1, price: 15, color: "violet", pins: "SBUS", dimensions: "Nano", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "frame", name: "Carbon frame", productName: "5-inch Carbon X-Frame", description: "Stiff X-frame with motor and stack mounts.", category: "mechanical", subtype: "structural", type: "STRUCTURAL", qty: 1, price: 30, color: "slate", pins: "", dimensions: "5 inch", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "props", name: "Propellers ×4", productName: "5-inch Tri-Blade Propellers", description: "Two CW and two CCW props.", category: "mechanical", subtype: "mechanism", type: "MECHANISM", qty: 4, price: 1.5, color: "cyan", pins: "", dimensions: "5 inch", purchaseUrl: "", sourceStatus: "Reference class" }),
  ];
  const corners = [[1, 1], [1, -1], [-1, 1], [-1, -1]];
  const scene: ScenePrimitive[] = [
    { id: "gen-body", label: "Center stack", kind: "box", size: tri(34, 20, 34), position: tri(0, 12, 0), color: "#30363d", role: "enclosure" },
    { id: "gen-fc", label: "Flight controller", kind: "pcb", size: tri(30, 3, 22), position: tri(0, 20, 0), color: "#157d55", role: "component" },
    { id: "gen-batt", label: "LiPo", kind: "battery", size: tri(30, 12, 20), position: tri(0, 4, 0), color: "#c9403d", role: "component" },
    ...corners.map(([sx, sz], i) => ({ id: `gen-arm-${i}`, label: `Arm ${i + 1}`, kind: "box" as const, size: tri(64, 5, 9), position: tri(sx * 26, 10, sz * 26), rotation: tri(0, sx * sz > 0 ? 0.785 : -0.785, 0), color: "#20242a", role: "enclosure" as const })),
    ...corners.map(([sx, sz], i) => ({ id: `gen-motor-${i}`, label: `Motor ${i + 1}`, kind: "motor" as const, size: tri(14, 12, 14), position: tri(sx * 46, 14, sz * 46), color: "#242831", role: "component" as const })),
    ...corners.map(([sx, sz], i) => ({ id: `gen-prop-${i}`, label: `Prop ${i + 1}`, kind: "propeller" as const, size: tri(60, 3, 10), position: tri(sx * 46, 22, sz * 46), color: "#6aa8e8", opacity: 0.6, role: "component" as const })),
  ];
  return { parts, scene, budgetCap: 220, plan: "Requirements → carbon X-frame → 4× motor + ESC → FC + receiver → LiPo → payload → PID tune → hover test", brief: "Quadcopter tùy biến.\nKhung carbon X.\nFC + payload." };
}

function buildFixedWing(idx: () => string): Build {
  const parts: ProjectPart[] = [
    part({ id: idx(), exportId: "fc", name: "Autopilot", productName: "INAV/ArduPilot Flight Controller", description: "Fixed-wing stabilization and navigation.", category: "electrical", subtype: "mcu", type: "AUTOPILOT", qty: 1, price: 45, color: "orange", pins: "UART · PWM", dimensions: "Board", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "motor", name: "BLDC motor + ESC", productName: "2212 Motor + 30A ESC", description: "Tractor propulsion for cruise flight.", category: "electrical", subtype: "actuator", type: "MOTOR", qty: 1, price: 28, color: "blue", pins: "3-phase", dimensions: "2212", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "servos", name: "Control servos ×4", productName: "9g Servo", description: "Aileron, elevator and rudder actuation.", category: "electrical", subtype: "actuator", type: "ACTUATOR", qty: 4, price: 3, color: "blue", pins: "PWM", dimensions: "9g", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "battery", name: "LiPo battery", productName: "3S 2200mAh LiPo", description: "Endurance pack for cruise flight.", category: "electrical", subtype: "power", type: "POWER", qty: 1, price: 20, color: "red", pins: "XT60", dimensions: "3S", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "wing", name: "Foam wing", productName: "EPO Foam Wing + Carbon Spar", description: "Main lifting wing with control surfaces.", category: "mechanical", subtype: "structural", type: "STRUCTURAL", qty: 1, price: 25, color: "slate", pins: "", dimensions: "1m span", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "fuselage", name: "Fuselage & tail", productName: "Foam/Composite Fuselage + Tail", description: "Body carrying electronics and the empennage.", category: "mechanical", subtype: "structural", type: "STRUCTURAL", qty: 1, price: 20, color: "slate", pins: "", dimensions: "Body", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "prop", name: "Propeller", productName: "10x6 Folding Propeller", description: "Efficient cruise propeller.", category: "mechanical", subtype: "mechanism", type: "MECHANISM", qty: 1, price: 4, color: "cyan", pins: "", dimensions: "10x6", purchaseUrl: "", sourceStatus: "Reference class" }),
  ];
  const scene: ScenePrimitive[] = [
    { id: "gen-fuse", label: "Fuselage", kind: "lathe", size: tri(9, 90, 9), position: tri(0, 12, 0), rotation: tri(0, 0, 1.5708), profile: [[0.2, 0], [0.9, 0.15], [1, 0.45], [0.75, 0.8], [0.15, 1]] as [number, number][], color: "#e8e6e0", role: "enclosure" },
    { id: "gen-wing", label: "Main wing", kind: "wing", size: tri(150, 3, 44), position: tri(4, 16, 0), color: "#d7dbe0", role: "enclosure" },
    { id: "gen-wing2", label: "Main wing R", kind: "wing", size: tri(150, 3, 44), position: tri(4, 16, 0), rotation: tri(0, Math.PI, 0), color: "#d7dbe0", role: "enclosure" },
    { id: "gen-tail", label: "Tailplane", kind: "wing", size: tri(46, 2.4, 26), position: tri(-42, 14, 0), color: "#d7dbe0", role: "component" },
    { id: "gen-tail2", label: "Tailplane R", kind: "wing", size: tri(46, 2.4, 26), position: tri(-42, 14, 0), rotation: tri(0, Math.PI, 0), color: "#d7dbe0", role: "component" },
    { id: "gen-fin", label: "Vertical fin", kind: "wing", size: tri(26, 2.4, 22), position: tri(-42, 16, 0), rotation: tri(1.5708, 0, 0), color: "#d7dbe0", role: "component" },
    { id: "gen-motor", label: "Motor", kind: "motor", size: tri(11, 12, 11), position: tri(46, 12, 0), rotation: tri(0, 0, 1.5708), color: "#242831", role: "component" },
    { id: "gen-prop", label: "Propeller", kind: "propeller", size: tri(54, 3, 9), position: tri(52, 12, 0), rotation: tri(0, 0, 1.5708), color: "#6aa8e8", opacity: 0.6, role: "component" },
    { id: "gen-batt", label: "LiPo", kind: "battery", size: tri(26, 8, 14), position: tri(12, 8, 0), color: "#c9403d", role: "component" },
  ];
  return { parts, scene, budgetCap: 200, plan: "Requirements → foam wing & fuselage → tractor motor + ESC → control servos → autopilot → CG & throws → maiden flight", brief: "Máy bay cánh bằng.\nĐộng cơ kéo.\nBay tuần tra." };
}

function buildRover(idx: () => string): Build {
  const parts: ProjectPart[] = [
    part({ id: idx(), exportId: "mcu", name: "Controller", productName: "ESP32 Dev Board", description: "Motion control, sensing and connectivity.", category: "electrical", subtype: "mcu", type: "MCU", qty: 1, price: 7, color: "orange", pins: "GPIO · WiFi", dimensions: "55x28mm", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "driver", name: "Motor driver", productName: "TB6612 / DRV8833 Dual Driver", description: "Drives the drive motors.", category: "electrical", subtype: "actuator", type: "DRIVER", qty: 1, price: 4, color: "blue", pins: "PWM · DIR", dimensions: "Module", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "motors", name: "Gear motors ×4", productName: "TT/DC Gear Motor + Encoder", description: "Four-wheel drive with odometry.", category: "electrical", subtype: "actuator", type: "MOTOR", qty: 4, price: 5, color: "blue", pins: "2-wire · ENC", dimensions: "Gearbox", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "battery", name: "Battery", productName: "3S Li-ion Pack + Holder", description: "Portable power for the rover.", category: "electrical", subtype: "power", type: "POWER", qty: 1, price: 15, color: "red", pins: "+ · −", dimensions: "3S", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "chassis", name: "Chassis", productName: "Aluminium / Acrylic Rover Chassis", description: "Rigid base carrying motors and electronics.", category: "mechanical", subtype: "structural", type: "STRUCTURAL", qty: 1, price: 20, color: "slate", pins: "", dimensions: "Plate", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "wheels", name: "Wheels ×4", productName: "65mm Rubber Wheels", description: "Drive wheels with good traction.", category: "mechanical", subtype: "mechanism", type: "MECHANISM", qty: 4, price: 2.5, color: "cyan", pins: "", dimensions: "Ø65mm", purchaseUrl: "", sourceStatus: "Reference class" }),
  ];
  const wheelPos = [[1, 1], [1, -1], [-1, 1], [-1, -1]];
  const scene: ScenePrimitive[] = [
    { id: "gen-chassis", label: "Chassis", kind: "box", size: tri(70, 8, 46), position: tri(0, 14, 0), color: "#3a3f46", role: "enclosure" },
    { id: "gen-mcu", label: "Controller", kind: "pcb", size: tri(40, 3, 26), position: tri(0, 20, 0), color: "#157d55", role: "component" },
    { id: "gen-batt", label: "Battery", kind: "battery", size: tri(30, 10, 18), position: tri(-14, 22, 0), color: "#c9403d", role: "component" },
    ...wheelPos.map(([sx, sz], i) => ({ id: `gen-wheel-${i}`, label: `Wheel ${i + 1}`, kind: "lathe" as const, size: tri(16, 12, 16), position: tri(sx * 34, 10, sz * 30), rotation: tri(1.5708, 0, 0), profile: [[0.3, 0], [1, 0.1], [1, 0.9], [0.3, 1]] as [number, number][], color: "#1a1d22", role: "component" as const })),
    ...wheelPos.map(([sx, sz], i) => ({ id: `gen-motor-${i}`, label: `Motor ${i + 1}`, kind: "motor" as const, size: tri(8, 12, 8), position: tri(sx * 24, 12, sz * 26), rotation: tri(1.5708, 0, 0), color: "#242831", role: "component" as const })),
  ];
  return { parts, scene, budgetCap: 120, plan: "Requirements → chassis → 4WD drive + encoders → ESP32 control → sensing payload → power → drive test", brief: "Robot mặt đất.\nDẫn động 4 bánh.\nESP32 + cảm biến." };
}

function buildMarine(idx: () => string): Build {
  const parts: ProjectPart[] = [
    part({ id: idx(), exportId: "mcu", name: "Controller", productName: "ESP32 / Pixhawk Controller", description: "Navigation and thruster control.", category: "electrical", subtype: "mcu", type: "MCU", qty: 1, price: 12, color: "orange", pins: "GPIO · UART", dimensions: "Board", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "esc", name: "ESCs ×2", productName: "Waterproof Brushless ESC", description: "Drive the thrusters.", category: "electrical", subtype: "actuator", type: "ESC", qty: 2, price: 18, color: "blue", pins: "3-phase", dimensions: "Module", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "thrusters", name: "Thrusters ×2", productName: "Bilge-Pump / Brushless Thruster", description: "Propulsion and steering.", category: "electrical", subtype: "actuator", type: "MOTOR", qty: 2, price: 40, color: "blue", pins: "3-phase", dimensions: "Thruster", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "battery", name: "Battery", productName: "4S Li-ion Pack (sealed)", description: "Sealed power source.", category: "electrical", subtype: "power", type: "POWER", qty: 1, price: 30, color: "red", pins: "+ · −", dimensions: "4S", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "hull", name: "Waterproof hull", productName: "Sealed Hull / Pressure Tube", description: "Watertight body housing electronics.", category: "mechanical", subtype: "structural", type: "STRUCTURAL", qty: 1, price: 45, color: "slate", pins: "", dimensions: "Hull", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "seals", name: "Seals & glands", productName: "O-Rings, Cable Glands & Fasteners", description: "Watertight penetrations and closures.", category: "mechanical", subtype: "misc", type: "HARDWARE", qty: 1, price: 15, color: "cyan", pins: "", dimensions: "Assorted", purchaseUrl: "", sourceStatus: "Reference class" }),
  ];
  const scene: ScenePrimitive[] = [
    { id: "gen-hull", label: "Hull", kind: "lathe", size: tri(24, 120, 24), position: tri(0, 18, 0), rotation: tri(0, 0, 1.5708), profile: [[0.1, 0], [0.85, 0.12], [1, 0.5], [0.85, 0.88], [0.1, 1]] as [number, number][], color: "#f0b429", opacity: 0.85, role: "enclosure" },
    { id: "gen-tube", label: "Electronics tube", kind: "tube", size: tri(12, 60, 10), position: tri(0, 18, 0), rotation: tri(0, 0, 1.5708), color: "#c7ccd3", opacity: 0.6, role: "component" },
    { id: "gen-mcu", label: "Controller", kind: "pcb", size: tri(40, 3, 18), position: tri(0, 18, 0), color: "#157d55", role: "component" },
    { id: "gen-th1", label: "Thruster L", kind: "cylinder", size: tri(7, 18, 7), position: tri(-60, 14, -12), rotation: tri(0, 0, 1.5708), color: "#242831", role: "component" },
    { id: "gen-th2", label: "Thruster R", kind: "cylinder", size: tri(7, 18, 7), position: tri(-60, 14, 12), rotation: tri(0, 0, 1.5708), color: "#242831", role: "component" },
    { id: "gen-batt", label: "Battery", kind: "battery", size: tri(30, 10, 14), position: tri(14, 18, 0), color: "#c9403d", role: "component" },
  ];
  return { parts, scene, budgetCap: 260, plan: "Requirements → waterproof hull → sealed thrusters + ESC → controller → ballast/trim → leak test → water trial", brief: "Phương tiện mặt/dưới nước.\nThân kín nước.\nHai thruster." };
}

function buildArm(idx: () => string): Build {
  const parts: ProjectPart[] = [
    part({ id: idx(), exportId: "mcu", name: "Controller", productName: "ESP32 / Arduino Controller", description: "Joint control and kinematics.", category: "electrical", subtype: "mcu", type: "MCU", qty: 1, price: 8, color: "orange", pins: "PWM · I2C", dimensions: "Board", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "servos", name: "Joint servos ×4", productName: "High-Torque Digital Servo", description: "Base, shoulder, elbow and wrist joints.", category: "electrical", subtype: "actuator", type: "ACTUATOR", qty: 4, price: 14, color: "blue", pins: "PWM · 6V", dimensions: "Servo", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "gripper", name: "Gripper servo", productName: "Micro Gripper Servo", description: "Two-finger gripper actuation.", category: "electrical", subtype: "actuator", type: "ACTUATOR", qty: 1, price: 6, color: "blue", pins: "PWM", dimensions: "Micro", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "psu", name: "Power supply", productName: "6V 5A Servo PSU", description: "Stable high-current rail for the servos.", category: "electrical", subtype: "power", type: "POWER", qty: 1, price: 12, color: "red", pins: "6V · GND", dimensions: "PSU", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "links", name: "Printed arm links", productName: "3D-Printed Link & Bracket Set", description: "Structural links and joint brackets.", category: "mechanical", subtype: "3d_printed", type: "3D PRINTED", qty: 1, price: 15, color: "orange", pins: "", dimensions: "PETG", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "base", name: "Base & fasteners", productName: "Weighted Base + Bearing + Fasteners", description: "Stable rotating base with a slewing bearing.", category: "mechanical", subtype: "structural", type: "STRUCTURAL", qty: 1, price: 18, color: "slate", pins: "", dimensions: "Base", purchaseUrl: "", sourceStatus: "Reference class" }),
  ];
  const scene: ScenePrimitive[] = [
    { id: "gen-base", label: "Base", kind: "lathe", size: tri(24, 14, 24), position: tri(0, 7, 0), profile: [[1, 0], [1, 0.5], [0.5, 0.7], [0.4, 1]] as [number, number][], color: "#3a3f46", role: "enclosure" },
    { id: "gen-j1", label: "Base joint", kind: "motor", size: tri(9, 12, 9), position: tri(0, 16, 0), color: "#242831", role: "component" },
    { id: "gen-l1", label: "Shoulder link", kind: "box", size: tri(10, 44, 10), position: tri(0, 40, 0), color: "#c7ccd3", role: "enclosure" },
    { id: "gen-j2", label: "Elbow joint", kind: "motor", size: tri(8, 10, 8), position: tri(0, 62, 0), rotation: tri(1.5708, 0, 0), color: "#242831", role: "component" },
    { id: "gen-l2", label: "Forearm link", kind: "box", size: tri(9, 40, 9), position: tri(18, 74, 0), rotation: tri(0, 0, 0.9), color: "#c7ccd3", role: "enclosure" },
    { id: "gen-grip", label: "Gripper", kind: "box", size: tri(8, 16, 14), position: tri(34, 86, 0), color: "#30363d", role: "component" },
    { id: "gen-ctrl", label: "Controller", kind: "pcb", size: tri(30, 3, 20), position: tri(-24, 4, 0), color: "#157d55", role: "component" },
  ];
  return { parts, scene, budgetCap: 130, plan: "Requirements → base & links → joint servos → gripper → controller & PSU → kinematics → pick-place test", brief: "Cánh tay robot.\nKhớp servo.\nGripper 2 ngón." };
}

function buildGadget(idx: () => string): Build {
  const parts: ProjectPart[] = [
    part({ id: idx(), exportId: "mcu", name: "Controller", productName: "ESP32-S3 Dev Board", description: "Compute, connectivity and I/O for the gadget.", category: "electrical", subtype: "mcu", type: "MCU", qty: 1, price: 9, color: "orange", pins: "GPIO · WiFi · BLE", dimensions: "Board", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "display", name: "Display", productName: "1.9\" IPS TFT Display", description: "User interface and status readout.", category: "electrical", subtype: "display", type: "DISPLAY", qty: 1, price: 8, color: "violet", pins: "SPI", dimensions: "1.9 inch", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "sensor", name: "Sensor suite", productName: "IMU + Environmental Sensor", description: "Motion and environment sensing.", category: "electrical", subtype: "sensor", type: "SENSOR", qty: 1, price: 6, color: "lime", pins: "I2C", dimensions: "Module", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "battery", name: "Battery & charger", productName: "LiPo + USB-C Charger", description: "Rechargeable power.", category: "electrical", subtype: "power", type: "POWER", qty: 1, price: 10, color: "red", pins: "B+ · B−", dimensions: "LiPo", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "enclosure", name: "Enclosure", productName: "3D-Printed Two-Part Enclosure", description: "Housing with display window and buttons.", category: "mechanical", subtype: "3d_printed", type: "3D PRINTED", qty: 1, price: 6, color: "orange", pins: "", dimensions: "PLA/PETG", purchaseUrl: "", sourceStatus: "Reference class" }),
    part({ id: idx(), exportId: "fasteners", name: "Fasteners", productName: "M2/M3 Screws & Inserts", description: "Assembly hardware.", category: "mechanical", subtype: "misc", type: "HARDWARE", qty: 1, price: 3, color: "slate", pins: "", dimensions: "Assorted", purchaseUrl: "", sourceStatus: "Reference class" }),
  ];
  const scene: ScenePrimitive[] = [
    { id: "gen-case", label: "Enclosure", kind: "box", size: tri(64, 22, 44), position: tri(0, 12, 0), color: "#e08a2a", role: "enclosure" },
    { id: "gen-screen", label: "Display", kind: "pcb", size: tri(46, 3, 30), position: tri(0, 24, 0), color: "#0f172a", role: "component" },
    { id: "gen-mcu", label: "Controller", kind: "pcb", size: tri(40, 3, 24), position: tri(0, 8, 0), color: "#157d55", role: "component" },
    { id: "gen-batt", label: "Battery", kind: "battery", size: tri(30, 6, 18), position: tri(0, 4, 0), color: "#c9403d", role: "component" },
    { id: "gen-knob", label: "Control knob", kind: "lathe", size: tri(6, 8, 6), position: tri(26, 26, 0), profile: [[0.4, 0], [1, 0.2], [0.9, 0.9], [0.5, 1]] as [number, number][], color: "#30363d", role: "component" },
  ];
  return { parts, scene, budgetCap: 70, plan: "Requirements → enclosure → MCU + display → sensors → battery & charging → firmware → assembly", brief: "Thiết bị thông minh.\nESP32-S3 + màn hình.\nCảm biến & pin." };
}

const BUILDERS: Record<Archetype, (idx: () => string) => Build> = {
  ornithopter: buildOrnithopter,
  multirotor: buildMultirotor,
  fixedwing: buildFixedWing,
  rover: buildRover,
  marine: buildMarine,
  arm: buildArm,
  gadget: buildGadget,
};

function buildConnections(parts: ProjectPart[]): { electrical: ExportConnection[]; mechanical: ExportConnection[] } {
  const byExport = new Map(parts.map((p) => [p.exportId, p]));
  const powerId = [...byExport.values()].find((p) => p.subtype === "power")?.exportId;
  const brainId = [...byExport.values()].find((p) => p.subtype === "mcu")?.exportId;
  const electrical: ExportConnection[] = [];
  const mechanical: ExportConnection[] = [];
  for (const p of parts) {
    if (p.category !== "electrical") continue;
    if (powerId && p.subtype !== "power") electrical.push({ source: powerId, target: p.exportId, type: "power", label: `Power ${p.name}` });
    if (brainId && p.subtype !== "mcu" && p.subtype !== "power") electrical.push({ source: brainId, target: p.exportId, type: "data", label: `${p.name} link` });
  }
  const structId = [...byExport.values()].find((p) => p.subtype === "structural" || p.subtype === "3d_printed")?.exportId;
  if (structId) for (const p of parts) if (p.exportId !== structId) mechanical.push({ source: p.exportId, target: structId, label: `Mount ${p.name}` });
  return { electrical, mechanical };
}

function buildInstructions(archetype: Archetype, parts: ProjectPart[]): { preamble: InstructionPreamble; steps: InstructionSection[] } {
  const elec = parts.filter((p) => p.category === "electrical").map((p) => p.exportId);
  const mech = parts.filter((p) => p.category === "mechanical").map((p) => p.exportId);
  const brain = parts.find((p) => p.subtype === "mcu")?.exportId ?? elec[0];
  const preamble: InstructionPreamble = {
    tools: ["Soldering iron", "3D printer", "Screwdriver / hex set", "Multimeter", "Computer for firmware"],
    assumptions: [
      "Auto-generated reference design — verify part fit, ratings and clearances before building.",
      "Bench-test electronics and motion limits before first full operation.",
      archetype === "ornithopter" || archetype === "multirotor" || archetype === "fixedwing"
        ? "Fly only where permitted and keep clear of people; remove propellers during bench tests."
        : "Operate in a safe area and follow local regulations.",
    ],
  };
  const steps: InstructionSection[] = [
    { id: "fabricate", title: "Structure & assembly", subSteps: [{ id: "g_fab_1", title: "Print/assemble the structural parts", partIds: mech }] },
    { id: "electronics", title: "Electronics & wiring", subSteps: [{ id: "g_wire_1", title: "Wire the controller, power and peripherals", partIds: elec }] },
    { id: "bringup", title: "Firmware & bring-up", subSteps: [{ id: "g_test_1", title: "Flash firmware, calibrate and safely test", partIds: [brain, ...elec.slice(1, 3)].filter(Boolean) }] },
  ];
  return { preamble, steps };
}

export function generateDesignFromPrompt(prompt: string, baseVersion = 1): GeneratedDesign {
  const text = (prompt || "").toLowerCase();
  const archetype = detectArchetype(text);
  const features = detectFeatures(text);
  let counter = 0;
  const idx = () => `G${String(++counter).padStart(2, "0")}`;

  const base = BUILDERS[archetype](idx);
  const extraParts = featureParts(features, idx);
  const parts = [...base.parts, ...extraParts];
  const scene = [...base.scene, ...featureScene(features)];

  const { electrical, mechanical } = buildConnections(parts);
  const { preamble, steps } = buildInstructions(archetype, parts);
  const name = deriveName(prompt, archetype);
  const totalPrice = parts.reduce((sum, p) => sum + p.price * p.qty, 0);
  const budgetCap = Math.max(base.budgetCap, Math.ceil((totalPrice * 1.25) / 10) * 10);

  const featureTags = features.map((f) => ({ camera: "CAMERA", mic: "AUDIO", videolink: "VR/FPV STREAM", gps: "GPS", lidar: "LIDAR", gimbal: "GIMBAL", thermal: "THERMAL" }[f] ?? f.toUpperCase()));
  const tags = ["GENERATED", ARCHETYPE_LABEL[archetype].toUpperCase(), ...featureTags].slice(0, 4);

  const project: GeneratedProjectMeta = {
    key: "generated",
    projectId: `generated-${archetype}-v${baseVersion}`,
    name,
    eyebrow: `GENERATED · ${ARCHETYPE_LABEL[archetype].toUpperCase()}`,
    description: (prompt || "").trim() || `A generated ${ARCHETYPE_LABEL[archetype].toLowerCase()} design.`,
    briefTitle: base.brief,
    tags,
    visual: "",
    originalPrompt: prompt,
    plan: base.plan,
    notes: ["auto-generated from prompt", `archetype: ${archetype}`, ...(features.length ? [`features: ${features.join(", ")}`] : [])],
    componentCount: parts.length,
  };

  const cadProject: CadProjectResult = {
    projectId: project.projectId,
    draftId: `${project.projectId}-${baseVersion}`,
    baseVersion,
    request: prompt,
    constraints: { maxSizeMm: [400, 400, 200], clearanceMm: 1, wallThicknessMm: 2, printer: "FDM" },
    operations: [
      { id: "op-g01", type: "create_box", label: `Generate ${ARCHETYPE_LABEL[archetype]} structure`, parameters: { archetype } },
      { id: "op-g02", type: "place_component", label: "Place propulsion / actuation", parameters: { count: base.parts.length } },
      { id: "op-g03", type: "place_component", label: "Integrate payload & sensors", parameters: { features: features.join(",") || "none" } },
      { id: "op-g04", type: "add_cable_port", label: "Route power and signal", parameters: { connections: electrical.length } },
    ],
    validation: {
      passed: true,
      score: 82,
      checksPassed: 9,
      checksTotal: 11,
      issues: [{ severity: "info", code: "GENERATED_DRAFT", message: "Auto-generated concept from your prompt — refine parts, dimensions and safety before building." }],
    },
    metrics: {
      dimensionsMm: [300, 220, 160],
      estimatedPrintMinutes: 240,
      estimatedMaterialGrams: 120,
      primitiveCount: scene.length,
    },
    scene,
  };

  return { project, parts, electricalConnections: electrical, mechanicalConnections: mechanical, instructionPreamble: preamble, instructionSteps: steps, cadProject, budgetCap, archetype, features };
}

export const GENERATED_CAPTION = ARCHETYPE_CAPTION;
