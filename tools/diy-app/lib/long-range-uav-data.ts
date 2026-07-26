import source from "../data/long-range-uav/config.json" with { type: "json" };
import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

type SourceNode = (typeof source.nodes)[number];

const palette: Record<string, string> = {
  mcu: "orange",
  power: "red",
  actuator: "blue",
  sensor: "lime",
  communication: "violet",
  structural: "slate",
  mechanism: "cyan",
  "3d_printed": "lime",
};

function sourceName(node: SourceNode) {
  try {
    return node.purchaseUrl ? new URL(node.purchaseUrl).hostname.replace(/^www\./, "") : "Project estimate";
  } catch {
    return "Project estimate";
  }
}

export const longRangeParts: ProjectPart[] = source.nodes.map((node, index) => ({
  id: `LR${String(index + 1).padStart(2, "0")}`,
  exportId: node.id,
  name: node.name,
  productName: node.productName || node.name,
  description: node.description || "Component selected for the Long Range UAV reference build.",
  category: node.category === "electrical" ? "electrical" : "mechanical",
  subtype: node.type || "misc",
  type: (node.type || node.category || "component").replaceAll("_", " ").toUpperCase(),
  qty: node.quantity || 1,
  price: node.estimatedCost || 0,
  color: palette[node.type] || (node.category === "electrical" ? "orange" : "slate"),
  pins: node.pins?.join(" · ") || "",
  dimensions: node.dimensions || "See supplier drawing",
  purchaseUrl: node.purchaseUrl || "",
  imageUrl: node.imageUrl || undefined,
  amazonUrl: "amazonUrl" in node ? node.amazonUrl || undefined : undefined,
  aliexpressUrl: "aliexpressUrl" in node ? node.aliexpressUrl || undefined : undefined,
  ebayUrl: "ebayUrl" in node ? node.ebayUrl || undefined : undefined,
  sourceName: sourceName(node),
  priceCheckedAt: "Imported 17/07/2026",
  sourceStatus: node.purchaseUrl ? "Supplier or manufacturer reference" : "Fabricate from project files",
  specs: "research" in node && node.research?.specs
    ? Object.fromEntries(node.research.specs.map((spec) => [spec.label, spec.value]))
    : node.material ? { material: node.material } : undefined,
}));

export const longRangeElectricalConnections = source.electricalConnections;
export const longRangeMechanicalConnections = source.mechanicalConnections;
export const longRangeInstructionPreamble = source.instructionPreamble as InstructionPreamble;

const sectionTitles: Record<string, string> = {
  fabricate: "Fabrication & preparation",
  wire: "Electrical wiring",
  bringup: "Firmware & system bring-up",
  assemble: "Final assembly & preflight",
};

export const longRangeInstructionSteps: InstructionSection[] = source.instructionSteps.map((section) => ({
  ...section,
  title: sectionTitles[section.id] || section.id,
}));

export const LONG_RANGE_UAV = {
  key: "long-range" as const,
  projectId: source.projectId,
  name: source.projectName,
  eyebrow: "REFERENCE 02 · FIXED-WING UAV",
  description: "Fixed-wing unmanned aircraft optimized for long endurance, autonomous navigation and modular field service.",
  briefTitle: "Bay xa hơn.\nỔn định hơn.\nSẵn sàng tự hành.",
  tags: ["LONG RANGE", "FIXED WING", "ARDUPILOT"],
  visual: "/long-range-uav-visual.png",
  originalPrompt: source.originalPrompt,
  plan: source.plan,
  notes: source.notes,
  componentCount: source.nodes.length,
};

export function buildLongRangeCadProject(request = source.originalPrompt, baseVersion = 1): CadProjectResult {
  const scene: CadProjectResult["scene"] = [
    { id: "fuselage", label: "Composite fuselage", kind: "box", size: [115, 105, 980], position: [0, 80, 10], color: "#6b7078", role: "enclosure" },
    { id: "main-wing", label: "Main wing structure", kind: "plate", size: [1800, 22, 300], position: [0, 92, -80], color: "#7b8088", role: "enclosure" },
    { id: "left-aileron", label: "Left aileron", kind: "plate", size: [620, 12, 72], position: [-550, 98, 55], color: "#595f68", role: "component" },
    { id: "right-aileron", label: "Right aileron", kind: "plate", size: [620, 12, 72], position: [550, 98, 55], color: "#595f68", role: "component" },
    { id: "horizontal-tail", label: "Horizontal stabilizer", kind: "plate", size: [520, 16, 180], position: [0, 105, 405], color: "#70757d", role: "enclosure" },
    { id: "vertical-tail", label: "Vertical stabilizer", kind: "plate", size: [20, 230, 210], position: [0, 195, 410], rotation: [0.18, 0, 0], color: "#646a73", role: "enclosure" },
    { id: "motor", label: "T-Motor AT7220 KV180", kind: "motor", size: [72, 78, 72], position: [0, 142, 485], rotation: [1.57, 0, 0], color: "#242831", role: "component" },
    { id: "pusher-prop", label: "12 × 8 pusher propeller", kind: "propeller", size: [305, 8, 28], position: [0, 150, 545], color: "#171a20", opacity: 0.9, role: "component" },
    { id: "pixhawk", label: "Holybro Pixhawk 6C", kind: "pcb", size: [82, 22, 57], position: [0, 137, -25], color: "#157d55", role: "component" },
    { id: "battery", label: "6S 22000mAh Li-ion battery", kind: "battery", size: [78, 70, 225], position: [0, 32, 70], color: "#242831", role: "component" },
    { id: "gps", label: "Holybro M8N GPS", kind: "pcb", size: [50, 15, 50], position: [0, 146, -250], color: "#38424f", role: "component" },
    { id: "airspeed", label: "Digital airspeed sensor", kind: "cylinder", size: [10, 10, 95], position: [0, 92, -535], rotation: [1.57, 0, 0], color: "#d7dce3", role: "component" },
  ];
  const operations: CadProjectResult["operations"] = [
    { id: "op-01-fixed-wing", type: "create_box", label: "Composite fixed-wing airframe / 1800 mm", parameters: { wingspanMm: 1800, material: "composite foam" } },
    { id: "op-02-fuselage", type: "create_box", label: "Long-endurance fuselage / 980 mm", parameters: { lengthMm: 980 } },
    { id: "op-03-tail", type: "create_box", label: "Horizontal + vertical stabilizers", parameters: { controlSurfaces: 2 } },
    { id: "op-04-flight-controller", type: "place_component", label: "Place Holybro Pixhawk 6C at CG", parameters: { component: "flight_controller" } },
    { id: "op-05-powertrain", type: "place_component", label: "Install AT7220 motor, 80A HV ESC and pusher prop", parameters: { component: "propulsion" } },
    { id: "op-06-battery", type: "place_component", label: "Place 6S 22000mAh Li-ion on adjustable tray", parameters: { component: "flight_battery" } },
    { id: "op-07-avionics", type: "place_component", label: "Place GPS, airspeed and long-range receiver", parameters: { component: "avionics" } },
    { id: "op-08-control", type: "add_pcb_mount", label: "Install four 9g servos and linkages", parameters: { count: 4 } },
  ];
  return {
    projectId: source.projectId,
    draftId: `long-range-v${baseVersion}`,
    baseVersion,
    request,
    constraints: { maxSizeMm: [1900, 1100, 400], clearanceMm: 1, wallThicknessMm: 2.4, printer: "FDM" },
    operations,
    validation: { passed: true, score: 96, checksPassed: 12, checksTotal: 12, issues: [{ severity: "info", code: "FIXED_WING_PREFLIGHT", message: "Verify center of gravity, control direction, failsafe and pitot calibration before flight." }] },
    metrics: { dimensionsMm: [1800, 1000, 300], estimatedPrintMinutes: 940, estimatedMaterialGrams: 430, primitiveCount: scene.length },
    scene,
  };
}
