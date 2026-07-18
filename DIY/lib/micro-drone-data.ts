import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const microDroneParts: ProjectPart[] = [
  p({ id:"MD01", exportId:"fc", name:"Flight controller", productName:"ESP32-C3 Super Mini", description:"Tiny Wi-Fi MCU running the flight-control loop and motor mixing.", category:"electrical", subtype:"mcu", type:"FLIGHT CONTROLLER", qty:1, price:4, color:"orange", pins:"WiFi · GPIO · I2C", dimensions:"22x18mm", purchaseUrl:"", sourceName:"Espressif", sourceStatus:"Reference class" }),
  p({ id:"MD02", exportId:"imu", name:"IMU", productName:"MPU6050 Module", description:"6-axis gyro/accelerometer for flight stabilization.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:2, color:"lime", pins:"I2C", dimensions:"21x16mm", purchaseUrl:"", sourceName:"InvenSense", sourceStatus:"Reference class" }),
  p({ id:"MD03", exportId:"motors", name:"Brushed motors ×4", productName:"7x16mm Coreless Brushed Motor", description:"Coreless DC motors for the four propellers.", category:"electrical", subtype:"actuator", type:"MOTOR", qty:4, price:3, color:"blue", pins:"2-wire", dimensions:"7x16mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"MD04", exportId:"mosfets", name:"MOSFET ESCs ×4", productName:"SI2302 N-Channel MOSFET", description:"Low-side PWM switches acting as simple ESCs for each motor.", category:"electrical", subtype:"actuator", type:"ESC", qty:4, price:0.5, color:"blue", pins:"Gate · Drain · Source", dimensions:"SOT-23", purchaseUrl:"", sourceName:"Vishay", sourceStatus:"Reference class" }),
  p({ id:"MD05", exportId:"battery", name:"LiPo battery", productName:"1S 3.7V LiPo Battery", description:"Single-cell pack powering the whole drone.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:5, color:"red", pins:"B+ · B−", dimensions:"1S", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"MD06", exportId:"props", name:"Propellers ×4", productName:"40mm 0.8mm Shaft Props (2 CW + 2 CCW)", description:"Two clockwise and two counter-clockwise props.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:4, price:0.5, color:"cyan", pins:"", dimensions:"40mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"MD07", exportId:"frame", name:"Printed frame", productName:"Main Drone Frame (3D printed)", description:"Lightweight frame integrating arms, FC mount, battery tray and ESC points.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:1, color:"orange", pins:"", dimensions:"PLA", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"MD08", exportId:"fastener_kit", name:"Fasteners & strap", productName:"M2 Self-Tapping Screws + Velcro Strap", description:"Mounting screws and a battery Velcro strap.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:2.2, color:"slate", pins:"", dimensions:"M2", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Finalize after CAD freeze" }),
];

export const microDroneElectricalConnections = [
  { source:"battery", target:"fc", type:"power", voltage:"3.7V", current:"0.2A", label:"Logic power" },
  { source:"battery", target:"mosfets", type:"power", voltage:"3.7V", current:"High", label:"Motor power" },
  { source:"fc", target:"mosfets", type:"data", protocol:"PWM", label:"Motor PWM" },
  { source:"mosfets", target:"motors", type:"power", voltage:"Switched", current:"Per-motor", label:"Motor drive" },
  { source:"imu", target:"fc", type:"data", protocol:"I2C", label:"Attitude" },
];

export const microDroneMechanicalConnections = [
  { source:"fc", target:"frame", label:"FC on frame" },
  { source:"motors", target:"frame", label:"Motors in arms" },
  { source:"props", target:"motors", label:"Props on motors" },
  { source:"battery", target:"frame", label:"Battery in tray" },
  { source:"fastener_kit", target:"frame", label:"Fasteners & strap" },
];

export const microDroneInstructionPreamble: InstructionPreamble = {
  tools:["Fine soldering iron","3D printer","Small screwdriver","1S LiPo charger","Computer/phone for tuning"],
  assumptions:["Ultra-cheap educational micro-quad build","Fly indoors or in a safe open area, away from people","Remove props during bench testing","Use a proper 1S LiPo charger"],
};

export const microDroneInstructionSteps: InstructionSection[] = [
  { id:"build", title:"Frame & motors", subSteps:[
    { id:"md_b_1", title:"Print the frame and press in the motors", partIds:["frame","motors"] },
    { id:"md_b_2", title:"Fit the CW/CCW props in the correct positions", partIds:["props"] },
  ] },
  { id:"wire", title:"Electronics", subSteps:[
    { id:"md_w_1", title:"Solder the ESP32-C3, IMU and MOSFET ESCs", partIds:["fc","imu","mosfets"] },
    { id:"md_w_2", title:"Wire the motors and 1S battery lead", partIds:["motors","battery"] },
  ] },
  { id:"tune", title:"Flash & fly", subSteps:[
    { id:"md_t_1", title:"Flash the firmware and calibrate the IMU", partIds:["fc","imu"] },
    { id:"md_t_2", title:"Bench-test motor directions with props off", partIds:["motors","mosfets"] },
    { id:"md_t_3", title:"Strap the battery and do a gentle hover test", partIds:["battery","fastener_kit"] },
  ] },
];

export const MICRO_DRONE = {
  key:"microdrone" as const,
  projectId:"cost-effective-drone-01",
  name:"Cost-Effective Drone",
  eyebrow:"REFERENCE 32 · COST-EFFECTIVE MICRO DRONE",
  description:"Ultra-low-cost DIY micro quadcopter built around an ESP32-C3 Super Mini flight controller, an MPU6050 IMU, coreless brushed motors and a printed frame — about $30 total.",
  briefTitle:"Drone siêu rẻ.\nESP32-C3 · MPU6050.\nKhung in 3D ~ $30.",
  tags:["MICRO QUAD","ESP32-C3 · MPU6050","~$30 BUILD"],
  visual:"",
  originalPrompt:"Design an ultra-low-cost DIY micro quadcopter using an ESP32-C3 Super Mini flight controller, an MPU6050 IMU, coreless brushed motors, MOSFET ESCs and a 3D-printed frame.",
  plan:"Requirements → printed frame → coreless motors + MOSFET ESCs → ESP32-C3 + MPU6050 → 1S power → flash & hover test",
  notes:["ultra-cheap micro drone","brushed motors","Wi-Fi flight controller","indoor / safe-area flying"],
  componentCount:microDroneParts.length,
};

export function buildMicroDroneCadProject(request = MICRO_DRONE.originalPrompt, baseVersion = 1): CadProjectResult {
  const motors = [[1, 1], [1, -1], [-1, 1], [-1, -1]].map(([sx, sz], i) => ({ id:`motor-${i}`, label:`Motor ${i+1}`, kind:"motor" as const, size:[7,16,7] as [number, number, number], position:[sx*32, 10, sz*32] as [number, number, number], color:"#242831" as string, role:"component" as const }));
  const props = [[1, 1], [1, -1], [-1, 1], [-1, -1]].map(([sx, sz], i) => ({ id:`prop-${i}`, label:`Propeller ${i+1}`, kind:"propeller" as const, size:[40,2,6] as [number, number, number], position:[sx*32, 20, sz*32] as [number, number, number], color:"#6aa8e8" as string, opacity:0.6, role:"component" as const }));
  const arms = [[1, 1], [1, -1], [-1, 1], [-1, -1]].map(([sx, sz], i) => ({ id:`arm-${i}`, label:`Arm ${i+1}`, kind:"box" as const, size:[46,4,6] as [number, number, number], position:[sx*18, 6, sz*18] as [number, number, number], rotation:[0, sx*sz > 0 ? 0.785 : -0.785, 0] as [number, number, number], color:"#e08a2a" as string, role:"enclosure" as const }));
  const scene: CadProjectResult["scene"] = [
    ...arms, ...motors, ...props,
    { id:"center", label:"Center hub", kind:"box", size:[24,8,24], position:[0,8,0], color:"#f0842a", role:"enclosure" },
    { id:"fc", label:"ESP32-C3", kind:"pcb", size:[20,3,16], position:[0,13,0], color:"#157d55", role:"component" },
    { id:"battery", label:"1S LiPo", kind:"battery", size:[20,6,12], position:[0,3,0], color:"#c9403d", role:"component" },
    { id:"imu", label:"MPU6050", kind:"box", size:[8,2,6], position:[6,15,0], color:"#38424f", role:"component" },
  ];
  return {
    projectId:MICRO_DRONE.projectId,
    draftId:`micro-drone-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[110,110,40], clearanceMm:0.5, wallThicknessMm:1.5, printer:"FDM" },
    operations:[
      { id:"op-md01", type:"create_box", label:"Print the micro frame", parameters:{ frame:1 } },
      { id:"op-md02", type:"place_component", label:"Press in four coreless motors", parameters:{ motors:4 } },
      { id:"op-md03", type:"place_component", label:"Solder the ESP32-C3, IMU and MOSFETs", parameters:{ electronics:3 } },
      { id:"op-md04", type:"place_component", label:"Fit the 1S battery and props", parameters:{ power:1 } },
    ],
    validation:{ passed:true, score:90, checksPassed:10, checksTotal:11, issues:[{ severity:"info", code:"HOBBY_SAFETY_NOTE", message:"Remove props during bench tests and fly indoors or in a safe open area away from people." }] },
    metrics:{ dimensionsMm:[100,100,35], estimatedPrintMinutes:60, estimatedMaterialGrams:12, primitiveCount:scene.length },
    scene,
  };
}
