import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

// CIVILIAN VERSION. The original Blueprint "Exoskeleton Suit" included a forearm
// pneumatic PROJECTILE LAUNCHER (barrel, 1500 PSI solenoid, CO2 regulator/canister,
// breech mechanism and "ballistic" armor). That weapon subsystem is intentionally
// REMOVED here. This template is a mobility-assist powered exoskeleton only.

const p = (part: ProjectPart) => part;

export const exoSuitParts: ProjectPart[] = [
  p({ id:"EX01", exportId:"mcu", name:"Main controller", productName:"ESP32-WROOM-32U Dev Board", description:"Sensor fusion, actuator control and HUD data with Wi-Fi/BLE.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:12, color:"orange", pins:"GPIO · I2C · UART", dimensions:"55x28mm", purchaseUrl:"", sourceName:"Espressif", sourceStatus:"Reference class" }),
  p({ id:"EX02", exportId:"thermal", name:"Thermal camera", productName:"FLIR Lepton 3.5 Radiometric", description:"Thermal imaging for environmental awareness in the HUD.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:350, color:"lime", pins:"SPI · I2C", dimensions:"Module", purchaseUrl:"", sourceName:"Teledyne FLIR", sourceStatus:"Official product reference" }),
  p({ id:"EX03", exportId:"air", name:"Air quality sensor", productName:"Adafruit SGP30", description:"TVOC and eCO2 sensing for wearer environmental awareness.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:15, color:"lime", pins:"I2C", dimensions:"Breakout", purchaseUrl:"", sourceName:"Adafruit", sourceStatus:"Reference class" }),
  p({ id:"EX04", exportId:"mics", name:"External microphones ×2", productName:"Adafruit MAX9814 AGC Mic", description:"Left/right amplified microphones for environmental audio.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:2, price:10, color:"lime", pins:"Analog", dimensions:"Breakout", purchaseUrl:"", sourceName:"Adafruit", sourceStatus:"Reference class" }),
  p({ id:"EX05", exportId:"insoles", name:"Foot pressure insoles ×2", productName:"Tactile Pressure Sensor Array Insole", description:"Multi-point pressure insoles providing intuitive gait/control input.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:2, price:80, color:"lime", pins:"Analog array", dimensions:"Insole", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"EX06", exportId:"switches", name:"Forearm control switches ×2", productName:"Custom Momentary Switch Array", description:"Left/right forearm switch arrays for direct control input.", category:"electrical", subtype:"input", type:"INPUT", qty:2, price:25, color:"lime", pins:"GPIO", dimensions:"Module", purchaseUrl:"", sourceName:"Custom", sourceStatus:"Reference class" }),
  p({ id:"EX07", exportId:"knee_actuators", name:"Knee actuators ×2", productName:"Progressive Automations PA-14 24V 200lb 6in", description:"High-torque linear actuators providing powered knee assistance.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:2, price:120, color:"blue", pins:"24V · limit", dimensions:"6in stroke", purchaseUrl:"", sourceName:"Progressive Automations", sourceStatus:"Official product reference" }),
  p({ id:"EX08", exportId:"elbow_actuators", name:"Elbow actuators ×2", productName:"Progressive Automations PA-14 24V 100lb 4in", description:"Linear actuators providing powered elbow assistance.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:2, price:100, color:"blue", pins:"24V · limit", dimensions:"4in stroke", purchaseUrl:"", sourceName:"Progressive Automations", sourceStatus:"Official product reference" }),
  p({ id:"EX09", exportId:"battery", name:"Main battery", productName:"24V 20Ah LiFePO4 Pack", description:"Backpack battery powering the actuators and electronics.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:300, color:"red", pins:"24V · BMS", dimensions:"Pack", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"EX10", exportId:"bms", name:"Battery management", productName:"8S 24V 60A LiFePO4 BMS", description:"Protects the pack from over-charge/discharge, over-current and shorts.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:40, color:"red", pins:"CELL · LOAD", dimensions:"Board", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"EX11", exportId:"hud", name:"HUD pico projector", productName:"AAXA P400 Smart Pico Projector", description:"Projects a heads-up display inside the helmet visor.", category:"electrical", subtype:"display", type:"DISPLAY", qty:1, price:250, color:"violet", pins:"HDMI · 5V", dimensions:"Pico", purchaseUrl:"", sourceName:"AAXA", sourceStatus:"Reference class" }),
  p({ id:"EX12", exportId:"frame", name:"Aluminium frame", productName:"6061 Angle Bar ×4 + Square Tube ×8", description:"Torso, arm and leg structural members carrying the actuator loads.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:192, color:"slate", pins:"", dimensions:"6061", purchaseUrl:"", sourceName:"Metal supplier", sourceStatus:"Cut to project lengths" }),
  p({ id:"EX13", exportId:"panels", name:"Protective panels", productName:"Polycarbonate Impact Panels ×10", description:"Impact-protective shell panels for the torso and limbs.", category:"mechanical", subtype:"enclosure", type:"ENCLOSURE", qty:1, price:450, color:"cyan", pins:"", dimensions:"Sheet", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"EX14", exportId:"helmet", name:"Helmet shell", productName:"Modular Motorcycle Helmet", description:"Head protection and HUD integration shell.", category:"mechanical", subtype:"enclosure", type:"ENCLOSURE", qty:1, price:150, color:"slate", pins:"", dimensions:"Helmet", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"EX15", exportId:"backpack", name:"Battery backpack", productName:"Battery Backpack Enclosure", description:"Rugged worn enclosure for the battery and BMS.", category:"mechanical", subtype:"enclosure", type:"ENCLOSURE", qty:1, price:35, color:"slate", pins:"", dimensions:"Backpack", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"EX16", exportId:"joints", name:"Joint set", productName:"Carbon-PETG Shoulder/Elbow/Hip/Knee Joints ×8", description:"Printed joints connecting the frame segments at each articulation.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:64, color:"orange", pins:"", dimensions:"Carbon-PETG", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"EX17", exportId:"mount_set", name:"Actuator & sensor mounts", productName:"Actuator, MCU, HUD & Sensor Mount Set", description:"Actuator mounts, MCU/BMS/thermal/air/mic/HUD mounts and forearm switch enclosures.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:30, color:"violet", pins:"", dimensions:"PETG", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"EX18", exportId:"fastener_kit", name:"Fastener kit", productName:"M3/M5 Screws, Nuts & Washers", description:"Structural and component fasteners throughout the suit.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:17, color:"slate", pins:"", dimensions:"M3/M5", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Finalize after CAD freeze" }),
];

export const exoSuitElectricalConnections = [
  { source:"battery", target:"bms", type:"power", voltage:"24V", current:"High", label:"Pack + BMS" },
  { source:"bms", target:"knee_actuators", type:"power", voltage:"24V", current:"High", label:"Knee assist" },
  { source:"bms", target:"elbow_actuators", type:"power", voltage:"24V", current:"Medium", label:"Elbow assist" },
  { source:"bms", target:"mcu", type:"power", voltage:"5V", current:"1A", label:"Logic power" },
  { source:"insoles", target:"mcu", type:"data", protocol:"Analog", label:"Gait input" },
  { source:"switches", target:"mcu", type:"data", protocol:"GPIO", label:"Control input" },
  { source:"mcu", target:"knee_actuators", type:"data", protocol:"PWM/DIR", label:"Knee command" },
  { source:"mcu", target:"elbow_actuators", type:"data", protocol:"PWM/DIR", label:"Elbow command" },
  { source:"thermal", target:"mcu", type:"data", protocol:"SPI", label:"Thermal feed" },
  { source:"air", target:"mcu", type:"data", protocol:"I2C", label:"Air quality" },
  { source:"mics", target:"mcu", type:"data", protocol:"Analog", label:"Audio" },
  { source:"mcu", target:"hud", type:"data", protocol:"HDMI", label:"HUD render" },
];

export const exoSuitMechanicalConnections = [
  { source:"knee_actuators", target:"joints", label:"Knee actuators on joints" },
  { source:"elbow_actuators", target:"joints", label:"Elbow actuators on joints" },
  { source:"joints", target:"frame", label:"Joints on frame" },
  { source:"panels", target:"frame", label:"Protective panels" },
  { source:"insoles", target:"frame", label:"Insoles in boots" },
  { source:"hud", target:"helmet", label:"HUD in helmet" },
  { source:"battery", target:"backpack", label:"Battery in backpack" },
  { source:"mount_set", target:"frame", label:"Mounts on frame" },
  { source:"fastener_kit", target:"frame", label:"Fasteners" },
];

export const exoSuitInstructionPreamble: InstructionPreamble = {
  tools:["Metric hex/socket set","Soldering iron","3D printer (carbon-fiber PETG capable)","Multimeter","Bench PSU for actuator testing","Computer for firmware"],
  assumptions:[
    "CIVILIAN mobility-assist powered exoskeleton — the original design's forearm projectile launcher and CO2 system are intentionally excluded.",
    "Powerful linear actuators can crush/pinch — bench-test motion limits and E-stop BEFORE wearing.",
    "Start with conservative force/speed limits and soft end-stops; always have a spotter.",
    "Wear over protective clothing; keep the wearer's joints within safe range of motion.",
  ],
};

export const exoSuitInstructionSteps: InstructionSection[] = [
  { id:"frame", title:"Frame & joints", subSteps:[
    { id:"ex_f_1", title:"Cut and assemble the aluminium torso, arm and leg frame", partIds:["frame","fastener_kit"] },
    { id:"ex_f_2", title:"Print and fit the shoulder/elbow/hip/knee joints", partIds:["joints"] },
    { id:"ex_f_3", title:"Mount the protective panels and helmet", partIds:["panels","helmet"] },
  ] },
  { id:"actuators", title:"Actuators & power", subSteps:[
    { id:"ex_a_1", title:"Install the knee and elbow linear actuators", partIds:["knee_actuators","elbow_actuators","mount_set"] },
    { id:"ex_a_2", title:"Fit the backpack battery and BMS", partIds:["battery","bms","backpack"] },
  ] },
  { id:"electronics", title:"Sensing, HUD & control", subSteps:[
    { id:"ex_e_1", title:"Wire the ESP32, insoles and forearm switches", partIds:["mcu","insoles","switches"] },
    { id:"ex_e_2", title:"Install the thermal camera, air/mic sensors and HUD", partIds:["thermal","air","mics","hud"] },
  ] },
  { id:"commission", title:"Safe bring-up", subSteps:[
    { id:"ex_c_1", title:"Bench-test actuator limits and E-stop UNWORN", partIds:["knee_actuators","elbow_actuators"] },
    { id:"ex_c_2", title:"Set conservative force/speed limits and soft end-stops", partIds:["mcu"] },
    { id:"ex_c_3", title:"First fitting with a spotter and gentle assisted motion", partIds:["insoles","switches"] },
  ] },
];

export const EXO_SUIT = {
  key:"exosuit" as const,
  projectId:"powered-exoskeleton-01",
  name:"Powered Exoskeleton (Assist)",
  eyebrow:"REFERENCE 33 · POWERED EXOSKELETON",
  description:"Civilian mobility-assist powered exoskeleton: aluminium frame, PA-14 knee/elbow linear actuators, foot-pressure control, 24V LiFePO4 power and a helmet HUD. Weapon subsystem removed.",
  briefTitle:"Khung trợ lực dân sự.\nActuator gối/khuỷu.\nĐã loại hệ vũ khí.",
  tags:["POWERED EXOSKELETON","PA-14 ASSIST","CIVILIAN · NO WEAPON"],
  visual:"",
  originalPrompt:"Design a civilian mobility-assist powered exoskeleton with an aluminium frame, PA-14 knee and elbow linear actuators, foot-pressure control input, 24V LiFePO4 power and a helmet HUD (no weapon systems).",
  plan:"Requirements (assist only) → aluminium frame & joints → knee/elbow actuators → 24V power & BMS → sensing, HUD & control → safe unworn bring-up → assisted fitting",
  notes:["mobility-assist exoskeleton","weaponized launcher removed (civilian)","powerful actuators — bench-test limits first","spotter and conservative limits"],
  componentCount:exoSuitParts.length,
};

export function buildExoSuitCadProject(request = EXO_SUIT.originalPrompt, baseVersion = 1): CadProjectResult {
  const scene: CadProjectResult["scene"] = [
    { id:"torso", label:"Torso frame", kind:"box", size:[46,64,26], position:[0,110,0], color:"#4a4f56", role:"enclosure" },
    { id:"chest", label:"Chest panel", kind:"plate", size:[42,54,6], position:[0,112,15], color:"#6aa8e8", opacity:0.6, role:"component" },
    { id:"helmet", label:"Helmet + HUD", kind:"cylinder", size:[16,20,16], position:[0,158,0], color:"#30363d", role:"component" },
    { id:"arm-l-up", label:"Left upper arm", kind:"box", size:[10,44,10], position:[-32,120,0], color:"#c7ccd3", role:"enclosure" },
    { id:"arm-r-up", label:"Right upper arm", kind:"box", size:[10,44,10], position:[32,120,0], color:"#c7ccd3", role:"enclosure" },
    { id:"arm-l-lo", label:"Left forearm", kind:"box", size:[9,40,9], position:[-32,80,6], color:"#c7ccd3", role:"enclosure" },
    { id:"arm-r-lo", label:"Right forearm", kind:"box", size:[9,40,9], position:[32,80,6], color:"#c7ccd3", role:"enclosure" },
    { id:"elbow-l", label:"Left elbow actuator", kind:"cylinder", size:[5,34,5], position:[-32,100,10], rotation:[0.3,0,0], color:"#242831", role:"component" },
    { id:"elbow-r", label:"Right elbow actuator", kind:"cylinder", size:[5,34,5], position:[32,100,10], rotation:[0.3,0,0], color:"#242831", role:"component" },
    { id:"leg-l-up", label:"Left thigh", kind:"box", size:[12,50,12], position:[-14,64,0], color:"#c7ccd3", role:"enclosure" },
    { id:"leg-r-up", label:"Right thigh", kind:"box", size:[12,50,12], position:[14,64,0], color:"#c7ccd3", role:"enclosure" },
    { id:"leg-l-lo", label:"Left shin", kind:"box", size:[11,48,11], position:[-14,20,0], color:"#c7ccd3", role:"enclosure" },
    { id:"leg-r-lo", label:"Right shin", kind:"box", size:[11,48,11], position:[14,20,0], color:"#c7ccd3", role:"enclosure" },
    { id:"knee-l", label:"Left knee actuator", kind:"cylinder", size:[6,40,6], position:[-14,42,10], rotation:[0.3,0,0], color:"#242831", role:"component" },
    { id:"knee-r", label:"Right knee actuator", kind:"cylinder", size:[6,40,6], position:[14,42,10], rotation:[0.3,0,0], color:"#242831", role:"component" },
    { id:"backpack", label:"Battery backpack", kind:"box", size:[34,44,16], position:[0,116,-20], color:"#c9403d", role:"component" },
    { id:"foot-l", label:"Left insole", kind:"plate", size:[14,4,30], position:[-14,-4,4], color:"#e08a2a", role:"component" },
    { id:"foot-r", label:"Right insole", kind:"plate", size:[14,4,30], position:[14,-4,4], color:"#e08a2a", role:"component" },
  ];
  return {
    projectId:EXO_SUIT.projectId,
    draftId:`exo-suit-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[700,1800,400], clearanceMm:2, wallThicknessMm:3, printer:"FDM" },
    operations:[
      { id:"op-ex01", type:"create_box", label:"Assemble the aluminium frame", parameters:{ segments:12 } },
      { id:"op-ex02", type:"place_component", label:"Fit the printed joints and panels", parameters:{ joints:8 } },
      { id:"op-ex03", type:"place_component", label:"Install knee and elbow actuators", parameters:{ actuators:4 } },
      { id:"op-ex04", type:"place_component", label:"Mount the battery, BMS and backpack", parameters:{ power:2 } },
      { id:"op-ex05", type:"place_component", label:"Wire sensing, control and HUD", parameters:{ electronics:6 } },
    ],
    validation:{ passed:true, score:86, checksPassed:11, checksTotal:13, issues:[{ severity:"warning", code:"WEARABLE_SAFETY_GATE", message:"Powered actuators: bench-test motion limits and E-stop unworn, set conservative force/speed limits, and use a spotter for first fittings. Weapon subsystem excluded (civilian assist suit)." }] },
    metrics:{ dimensionsMm:[680,1750,380], estimatedPrintMinutes:4800, estimatedMaterialGrams:2600, primitiveCount:scene.length },
    scene,
  };
}
