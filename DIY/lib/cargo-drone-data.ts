import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const cargoDroneParts: ProjectPart[] = [
  p({ id:"CD01", exportId:"fc", name:"Flight controller", productName:"Pixhawk 4 Mini", description:"Autopilot handling stabilization, navigation and autonomous flight modes.", category:"electrical", subtype:"mcu", type:"FLIGHT CONTROLLER", qty:1, price:120, color:"orange", pins:"UART · I2C · PWM · CAN", dimensions:"38x55mm", purchaseUrl:"", sourceName:"Holybro", sourceStatus:"Official product reference" }),
  p({ id:"CD02", exportId:"fpv_cam", name:"FPV camera", productName:"Foxeer Predator Mini V5", description:"Low-latency analog camera for first-person-view flying.", category:"electrical", subtype:"sensor", type:"CAMERA", qty:1, price:40, color:"lime", pins:"Video · 5V", dimensions:"19x19mm", purchaseUrl:"", sourceName:"Foxeer", sourceStatus:"Reference class" }),
  p({ id:"CD03", exportId:"lidar", name:"LiDAR sensors ×4", productName:"TFmini-S Micro LiDAR", description:"Front/rear/side obstacle detection and distance for autonomy.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:4, price:40, color:"lime", pins:"UART/I2C", dimensions:"42x15x16mm", purchaseUrl:"", sourceName:"Benewake", sourceStatus:"Reference class" }),
  p({ id:"CD04", exportId:"esc", name:"ESCs ×4", productName:"T-Motor F55A Pro II 55A", description:"Electronic speed controllers driving the four motors.", category:"electrical", subtype:"actuator", type:"ESC", qty:4, price:25, color:"blue", pins:"DShot · 3-phase", dimensions:"55A", purchaseUrl:"", sourceName:"T-Motor", sourceStatus:"Reference class" }),
  p({ id:"CD05", exportId:"motors", name:"BLDC motors ×4", productName:"T-Motor F80 Pro 2207 1900KV", description:"Brushless motors providing lift and thrust for payload flight.", category:"electrical", subtype:"actuator", type:"MOTOR", qty:4, price:28, color:"blue", pins:"3-phase", dimensions:"2207", purchaseUrl:"", sourceName:"T-Motor", sourceStatus:"Reference class" }),
  p({ id:"CD06", exportId:"battery", name:"LiPo battery", productName:"Tattu R-Line 6S 1300mAh 120C", description:"High-discharge 6S pack powering the propulsion system.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:70, color:"red", pins:"XT60 · balance", dimensions:"6S 1300mAh", purchaseUrl:"", sourceName:"Tattu", sourceStatus:"Reference class" }),
  p({ id:"CD07", exportId:"pdb", name:"Power module", productName:"Pixhawk PM07 Power Management Board", description:"Distributes pack power to ESCs and provides regulated, monitored FC power.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:35, color:"red", pins:"XT60 · 5V · CURRENT", dimensions:"Board", purchaseUrl:"", sourceName:"Holybro", sourceStatus:"Reference class" }),
  p({ id:"CD08", exportId:"gps", name:"GPS & compass", productName:"Here3 GNSS GPS Module", description:"Precise position and heading for autonomous navigation.", category:"electrical", subtype:"module", type:"GPS", qty:1, price:80, color:"violet", pins:"CAN", dimensions:"Ø68mm", purchaseUrl:"", sourceName:"CubePilot", sourceStatus:"Reference class" }),
  p({ id:"CD09", exportId:"rx", name:"RC receiver", productName:"FrSky R-XSR ACCST", description:"Receives manual control input from the transmitter.", category:"electrical", subtype:"module", type:"RECEIVER", qty:1, price:20, color:"violet", pins:"SBUS", dimensions:"16x11mm", purchaseUrl:"", sourceName:"FrSky", sourceStatus:"Reference class" }),
  p({ id:"CD10", exportId:"vtx", name:"Video transmitter", productName:"TBS Unify Pro32 Nano", description:"Transmits the FPV video feed to the ground station.", category:"electrical", subtype:"module", type:"VTX", qty:1, price:45, color:"violet", pins:"Video · SmartAudio", dimensions:"Nano", purchaseUrl:"", sourceName:"TBS", sourceStatus:"Reference class" }),
  p({ id:"CD11", exportId:"frame", name:"Carbon X-frame", productName:"iFlight DC5 V1.2 FPV Frame Kit", description:"Strong 5-inch carbon-fiber X-frame with motor and electronics mounts.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:50, color:"slate", pins:"", dimensions:"5 inch", purchaseUrl:"", sourceName:"iFlight", sourceStatus:"Reference class" }),
  p({ id:"CD12", exportId:"props", name:"Propellers ×4", productName:"T-Motor Pacer 5x4.3x3", description:"Two CW and two CCW propellers tuned for payload efficiency.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:4, price:2.5, color:"cyan", pins:"", dimensions:"5x4.3", purchaseUrl:"", sourceName:"T-Motor", sourceStatus:"Reference class" }),
  p({ id:"CD13", exportId:"printed_set", name:"3D printed mount set", productName:"GPS Mast, Camera, Sensor & Antenna Mounts", description:"GPS mast, FPV camera mount, LiDAR brackets, antenna mounts and battery guards.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:24, color:"orange", pins:"", dimensions:"PETG", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"CD14", exportId:"fastener_kit", name:"Fastener kit", productName:"M3 Screws, Lock Nuts, Standoffs & Zip Ties", description:"Frame and electronics fasteners plus cable management.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:2.5, color:"slate", pins:"", dimensions:"M3", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Finalize after CAD freeze" }),
];

export const cargoDroneElectricalConnections = [
  { source:"battery", target:"pdb", type:"power", voltage:"22.2V", current:"High", label:"Main power" },
  { source:"pdb", target:"esc", type:"power", voltage:"22.2V", current:"Per-motor", label:"ESC power" },
  { source:"esc", target:"motors", type:"power", voltage:"3-phase", current:"Per-motor", label:"Motor drive" },
  { source:"pdb", target:"fc", type:"power", voltage:"5V", current:"2A", label:"FC power" },
  { source:"fc", target:"esc", type:"data", protocol:"DShot", label:"Motor commands" },
  { source:"gps", target:"fc", type:"data", protocol:"CAN", label:"GPS & compass" },
  { source:"lidar", target:"fc", type:"data", protocol:"UART/I2C", label:"Obstacle sensing" },
  { source:"rx", target:"fc", type:"data", protocol:"SBUS", label:"RC input" },
  { source:"fpv_cam", target:"vtx", type:"data", protocol:"Analog", label:"FPV video" },
];

export const cargoDroneMechanicalConnections = [
  { source:"motors", target:"frame", label:"Motors on arms" },
  { source:"props", target:"motors", label:"Props on motors" },
  { source:"fc", target:"frame", label:"FC on frame" },
  { source:"battery", target:"frame", label:"Battery on frame" },
  { source:"gps", target:"printed_set", label:"GPS on mast" },
  { source:"fpv_cam", target:"printed_set", label:"Camera mount" },
  { source:"lidar", target:"printed_set", label:"LiDAR brackets" },
  { source:"fastener_kit", target:"frame", label:"Fasteners" },
];

export const cargoDroneInstructionPreamble: InstructionPreamble = {
  tools:["Hex driver set","Soldering iron","3D printer","Smoke stopper for first power-up","LiPo charger","Computer with the ground-station software"],
  assumptions:["Autonomous multirotor for civil transport/inspection under a supervised, legal payload","Fly only where permitted; register and follow local drone rules","Configure geofence, RTL and failsafes before autonomous missions","Payload kept within the drone's rated capacity"],
};

export const cargoDroneInstructionSteps: InstructionSection[] = [
  { id:"build", title:"Airframe & propulsion", subSteps:[
    { id:"cd_b_1", title:"Assemble the carbon X-frame", partIds:["frame","fastener_kit"] },
    { id:"cd_b_2", title:"Mount the four motors and ESCs", partIds:["motors","esc"] },
    { id:"cd_b_3", title:"Fit propellers (remove for bench tests)", partIds:["props"] },
  ] },
  { id:"avionics", title:"Avionics & power", subSteps:[
    { id:"cd_a_1", title:"Wire the PM07 power module and battery lead", partIds:["pdb","battery"] },
    { id:"cd_a_2", title:"Mount the Pixhawk, GPS mast and receiver", partIds:["fc","gps","rx","printed_set"] },
    { id:"cd_a_3", title:"Install the LiDAR ring, FPV camera and VTX", partIds:["lidar","fpv_cam","vtx"] },
  ] },
  { id:"setup", title:"Setup & safe flight", subSteps:[
    { id:"cd_s_1", title:"Calibrate sensors, ESCs and set motor order", partIds:["fc","esc"] },
    { id:"cd_s_2", title:"Configure geofence, RTL and failsafes", partIds:["fc","gps"] },
    { id:"cd_s_3", title:"Hover test unloaded, then verify payload trim", partIds:["motors","battery"] },
  ] },
];

export const CARGO_DRONE = {
  key:"cargodrone" as const,
  projectId:"autonomous-cargo-drone-01",
  name:"Autonomous Cargo Drone",
  eyebrow:"REFERENCE 31 · AUTONOMOUS CARGO DRONE",
  description:"Carbon X-frame autonomous cargo quadcopter with a Pixhawk 4 Mini, Here3 GPS, a four-sensor LiDAR obstacle ring, 6S propulsion and FPV — for supervised civil transport.",
  briefTitle:"Drone chở hàng tự hành.\nPixhawk · GPS · LiDAR.\n6S · khung carbon.",
  tags:["CARGO QUAD","PIXHAWK · HERE3","LIDAR OBSTACLE RING"],
  visual:"",
  originalPrompt:"Design an autonomous cargo quadcopter on a carbon X-frame with a Pixhawk 4 Mini, Here3 GPS, a four-sensor LiDAR obstacle ring, 6S propulsion and FPV, for supervised civil transport.",
  plan:"Requirements → carbon X-frame → 6S propulsion → Pixhawk avionics + GPS → LiDAR obstacle ring & FPV → failsafe setup → supervised payload flight",
  notes:["autonomous cargo multirotor","obstacle-aware navigation","supervised civil payload","geofence & failsafe required"],
  componentCount:cargoDroneParts.length,
};

export function buildCargoDroneCadProject(request = CARGO_DRONE.originalPrompt, baseVersion = 1): CadProjectResult {
  const arms = [[1, 1], [1, -1], [-1, 1], [-1, -1]].map(([sx, sz], i) => ({ id:`arm-${i}`, label:`Arm ${i+1}`, kind:"box" as const, size:[70,6,10] as [number, number, number], position:[sx*30, 20, sz*30] as [number, number, number], rotation:[0, sx*sz > 0 ? 0.785 : -0.785, 0] as [number, number, number], color:"#2b2f36" as string, role:"enclosure" as const }));
  const motors = [[1, 1], [1, -1], [-1, 1], [-1, -1]].map(([sx, sz], i) => ({ id:`motor-${i}`, label:`Motor ${i+1}`, kind:"motor" as const, size:[16,14,16] as [number, number, number], position:[sx*52, 26, sz*52] as [number, number, number], color:"#242831" as string, role:"component" as const }));
  const props = [[1, 1], [1, -1], [-1, 1], [-1, -1]].map(([sx, sz], i) => ({ id:`prop-${i}`, label:`Propeller ${i+1}`, kind:"propeller" as const, size:[64,3,10] as [number, number, number], position:[sx*52, 34, sz*52] as [number, number, number], color:"#6aa8e8" as string, opacity:0.6, role:"component" as const }));
  const scene: CadProjectResult["scene"] = [
    ...arms, ...motors, ...props,
    { id:"body", label:"Center stack", kind:"box", size:[44,26,44], position:[0,24,0], color:"#30363d", role:"enclosure" },
    { id:"fc", label:"Pixhawk 4 Mini", kind:"pcb", size:[34,4,24], position:[0,32,0], color:"#157d55", role:"component" },
    { id:"battery", label:"6S LiPo", kind:"battery", size:[36,16,22], position:[0,12,0], color:"#c9403d", role:"component" },
    { id:"gps", label:"Here3 GPS", kind:"cylinder", size:[16,6,16], position:[0,60,0], color:"#7c5cff", role:"component" },
    { id:"gps-mast", label:"GPS mast", kind:"cylinder", size:[3,32,3], position:[0,44,0], color:"#c7ccd3", role:"mount" },
    { id:"cam", label:"FPV camera", kind:"box", size:[16,16,12], position:[26,30,0], color:"#1a1d22", role:"component" },
    { id:"lidar-f", label:"LiDAR front", kind:"box", size:[14,6,8], position:[34,22,0], color:"#e08a2a", role:"component" },
    { id:"lidar-b", label:"LiDAR rear", kind:"box", size:[14,6,8], position:[-34,22,0], color:"#e08a2a", role:"component" },
  ];
  return {
    projectId:CARGO_DRONE.projectId,
    draftId:`cargo-drone-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[350,350,180], clearanceMm:1, wallThicknessMm:2, printer:"FDM" },
    operations:[
      { id:"op-cd01", type:"create_box", label:"Assemble the carbon X-frame", parameters:{ arms:4 } },
      { id:"op-cd02", type:"place_component", label:"Mount motors, ESCs and propellers", parameters:{ motors:4 } },
      { id:"op-cd03", type:"place_component", label:"Install Pixhawk, PM07 and 6S pack", parameters:{ avionics:3 } },
      { id:"op-cd04", type:"place_component", label:"Add the GPS mast, LiDAR ring and FPV", parameters:{ sensors:6 } },
      { id:"op-cd05", type:"place_component", label:"Configure failsafes and geofence", parameters:{ safety:1 } },
    ],
    validation:{ passed:true, score:90, checksPassed:12, checksTotal:13, issues:[{ severity:"warning", code:"AUTONOMY_SAFETY_GATE", message:"Set geofence, RTL and failsafes, keep payload within rating, and fly only where legally permitted with a supervising operator." }] },
    metrics:{ dimensionsMm:[330,330,170], estimatedPrintMinutes:420, estimatedMaterialGrams:120, primitiveCount:scene.length },
    scene,
  };
}
