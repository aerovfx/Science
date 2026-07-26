import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const robodogParts: ProjectPart[] = [
  p({ id:"RD01", exportId:"main_controller", name:"Main controller", productName:"Raspberry Pi 4 Model B", description:"High-level controller for gait planning, perception and networking.", category:"electrical", subtype:"mcu", type:"COMPUTE", qty:1, price:55, color:"orange", pins:"USB · ETH · GPIO · CSI · 5V", dimensions:"85x56x17mm", purchaseUrl:"https://www.raspberrypi.com/products/raspberry-pi-4-model-b/", sourceName:"Raspberry Pi", sourceStatus:"Official product reference" }),
  p({ id:"RD02", exportId:"motor_mcu", name:"Motor control MCU", productName:"ESP32-WROOM-32D Module", description:"Real-time low-level controller bridging the high-level computer to the CAN motor bus.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:8, color:"orange", pins:"SPI · UART · GPIO · 3.3V", dimensions:"25x18x3mm", purchaseUrl:"", sourceName:"Espressif", sourceStatus:"Reference class" }),
  p({ id:"RD03", exportId:"imu", name:"Body IMU", productName:"BNO055 Absolute Orientation Sensor", description:"9-DOF absolute orientation for balance and pose estimation.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:25, color:"lime", pins:"I2C · 3.3V", dimensions:"20x27x3mm", purchaseUrl:"", sourceName:"Bosch / generic", sourceStatus:"Reference class" }),
  p({ id:"RD04", exportId:"leg_motors", name:"Leg joint motors ×12", productName:"Integrated BLDC Servo w/ Gearbox", description:"Twelve BLDC actuators (3 per leg) with integrated driver, encoder and planetary gearbox.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:12, price:150, color:"blue", pins:"CAN · POWER", dimensions:"Ø60x40mm", purchaseUrl:"", sourceName:"Integrated servo supplier", sourceStatus:"Reference class · confirm torque rating" }),
  p({ id:"RD05", exportId:"battery", name:"Main battery", productName:"4S 5000mAh LiPo (14.8V)", description:"Primary pack powering the twelve joint motors and electronics.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:60, color:"red", pins:"VBAT+ · VBAT− · BALANCE", dimensions:"140x45x30mm", purchaseUrl:"", sourceName:"Generic 4S LiPo", sourceStatus:"Handle per LiPo safety" }),
  p({ id:"RD06", exportId:"buck_rpi", name:"5V buck (compute)", productName:"LM2596 DC-DC Buck", description:"Steps the battery bus down to 5 V for the Raspberry Pi.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:3, color:"red", pins:"IN+ · IN− · 5V · GND", dimensions:"43x21x14mm", purchaseUrl:"", sourceName:"Generic buck", sourceStatus:"Reference class" }),
  p({ id:"RD07", exportId:"buck_esp", name:"5V buck (logic)", productName:"MP1584EN DC-DC Buck", description:"Compact 5 V rail for the ESP32 and IMU.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:2, color:"red", pins:"IN+ · IN− · 5V · GND", dimensions:"22x17x4mm", purchaseUrl:"", sourceName:"Generic buck", sourceStatus:"Reference class" }),
  p({ id:"RD08", exportId:"can_module", name:"CAN transceiver", productName:"MCP2515 CAN Bus Module", description:"SPI-to-CAN bridge carrying commands and telemetry to the joint motors.", category:"electrical", subtype:"module", type:"MODULE", qty:1, price:5, color:"violet", pins:"SPI · CANH · CANL", dimensions:"40x28x15mm", purchaseUrl:"", sourceName:"Microchip / generic", sourceStatus:"Reference class" }),
  p({ id:"RD09", exportId:"bms", name:"Battery management", productName:"4S LiPo BMS Module (30A)", description:"Charge/discharge protection and cell balancing for the 4S pack.", category:"electrical", subtype:"module", type:"MODULE", qty:1, price:15, color:"violet", pins:"B+ · B− · P+ · P− · BALANCE", dimensions:"50x40x6mm", purchaseUrl:"", sourceName:"Generic BMS", sourceStatus:"Reference class" }),
  p({ id:"RD10", exportId:"frame", name:"Body frame extrusion ×4", productName:"20x20 V-Slot Aluminium Extrusion", description:"Structural extrusion forming the main body, cut to project lengths.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:4, price:7, color:"slate", pins:"", dimensions:"20x20mm profile", purchaseUrl:"", sourceName:"Extrusion supplier", sourceStatus:"Cut to project lengths" }),
  p({ id:"RD11", exportId:"linkages", name:"Leg linkages ×12", productName:"Aluminium Flat-Bar Linkages", description:"Machined aluminium bars forming the hip, thigh and shin linkages.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:12, price:4, color:"slate", pins:"", dimensions:"Custom bar", purchaseUrl:"", sourceName:"Machined stock", sourceStatus:"Machine from project drawings" }),
  p({ id:"RD12", exportId:"bearings", name:"Joint bearings ×12", productName:"688ZZ Ball Bearings", description:"Miniature bearings for smooth rotation at the leg joints.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:12, price:1.5, color:"cyan", pins:"", dimensions:"Ø16x5mm", purchaseUrl:"", sourceName:"Bearing supplier", sourceStatus:"Reference class" }),
  p({ id:"RD13", exportId:"motor_mounts", name:"Motor mount set ×12", productName:"3D Printed BLDC Motor Mounts", description:"Printed mounts adapting each joint motor to the frame and linkages.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:24, color:"violet", pins:"", dimensions:"PETG · 40% infill", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"RD14", exportId:"enclosures", name:"Body enclosures", productName:"3D Printed Covers & Enclosures", description:"Splash-resistant top/bottom covers and Pi, ESP/CAN and battery enclosures.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:28, color:"violet", pins:"", dimensions:"PETG · 20-30% infill", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"RD15", exportId:"foot_paws", name:"Foot paws ×4", productName:"3D Printed TPU Foot Pads", description:"Flexible TPU paws providing grip and impact absorption on each leg.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:4, price:1.5, color:"violet", pins:"", dimensions:"TPU · 100% infill", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"RD16", exportId:"fastener_kit", name:"Fastener & sealing kit", productName:"M3/M4 Screws, Heat-Set Inserts, Brackets, Gasket & Clips", description:"Frame fasteners, heat-set inserts, corner brackets, silicone gasket and cable clips.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:30, color:"slate", pins:"", dimensions:"Assorted", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Finalize after CAD freeze" }),
];

export const robodogElectricalConnections = [
  { source:"battery", target:"bms", type:"power", voltage:"14.8V", current:"30A", label:"Protected battery bus" },
  { source:"bms", target:"leg_motors", type:"power", voltage:"14.8V", current:"High", label:"Joint motor power" },
  { source:"bms", target:"buck_rpi", type:"power", voltage:"14.8V", current:"3A", label:"Compute 5V feed" },
  { source:"bms", target:"buck_esp", type:"power", voltage:"14.8V", current:"1A", label:"Logic 5V feed" },
  { source:"buck_rpi", target:"main_controller", type:"power", voltage:"5V", current:"3A", label:"Raspberry Pi power" },
  { source:"buck_esp", target:"motor_mcu", type:"power", voltage:"5V", current:"1A", label:"ESP32 power" },
  { source:"main_controller", target:"motor_mcu", type:"data", protocol:"UART", label:"High-level commands" },
  { source:"motor_mcu", target:"can_module", type:"data", protocol:"SPI", label:"CAN bridge" },
  { source:"can_module", target:"leg_motors", type:"data", protocol:"CAN", label:"Joint control & telemetry" },
  { source:"motor_mcu", target:"imu", type:"data", protocol:"I2C", label:"Body orientation" },
];

export const robodogMechanicalConnections = [
  { source:"frame", target:"enclosures", label:"Body covers to frame" },
  { source:"leg_motors", target:"motor_mounts", label:"Motor mounts" },
  { source:"motor_mounts", target:"frame", label:"Hip mounts to body" },
  { source:"linkages", target:"leg_motors", label:"Thigh/shin linkages" },
  { source:"bearings", target:"linkages", label:"Joint pivots" },
  { source:"foot_paws", target:"linkages", label:"Paws on shins" },
  { source:"main_controller", target:"enclosures", label:"Pi enclosure" },
  { source:"battery", target:"enclosures", label:"Battery enclosure" },
  { source:"imu", target:"frame", label:"IMU mount on body" },
  { source:"fastener_kit", target:"frame", label:"Frame fasteners and seals" },
];

export const robodogInstructionPreamble: InstructionPreamble = {
  tools:["Hex drivers for M3/M4 and V-slot","Soldering iron and heat-set insert tip","3D printer (PETG and TPU capable)","CAN bus diagnostic interface","Bench power supply and multimeter","Torque wrench","Robot support stand","Computer with the robot's control stack"],
  assumptions:["Educational and research quadruped robotics use only","No weapons or hazardous payloads","High-current LiPo handled with proper safety and BMS","Robot supported on a stand during first joint and gait tests","Keep clear of the legs while torque is enabled"],
};

export const robodogInstructionSteps: InstructionSection[] = [
  { id:"fabricate", title:"Frame & leg fabrication", subSteps:[
    { id:"rd_fab_1", title:"Cut and square the V-slot body frame", partIds:["frame","fastener_kit"] },
    { id:"rd_fab_2", title:"Machine the leg linkages and press in the joint bearings", partIds:["linkages","bearings"] },
    { id:"rd_fab_3", title:"3D print the motor mounts, enclosures and TPU foot paws", partIds:["motor_mounts","enclosures","foot_paws"] },
  ] },
  { id:"wire", title:"Power & CAN wiring", subSteps:[
    { id:"rd_wire_1", title:"Wire the battery, BMS and the two buck converters", partIds:["battery","bms","buck_rpi","buck_esp"] },
    { id:"rd_wire_2", title:"Set up the CAN bus from the ESP32 to all twelve motors", partIds:["motor_mcu","can_module","leg_motors"] },
    { id:"rd_wire_3", title:"Connect the Raspberry Pi and IMU", partIds:["main_controller","imu"] },
    { id:"rd_wire_4", title:"Verify motor IDs, bus voltages and fusing before enabling torque", partIds:["can_module","bms"] },
  ] },
  { id:"bringup", title:"Software & calibration", subSteps:[
    { id:"rd_test_1", title:"Boot the controllers and enumerate all twelve joints on the CAN bus", partIds:["main_controller","motor_mcu","leg_motors"] },
    { id:"rd_test_2", title:"Calibrate joint zeros and limits with the robot on a stand", partIds:["leg_motors","linkages"] },
    { id:"rd_test_3", title:"Calibrate the IMU and test a standing balance controller", partIds:["imu","leg_motors"] },
    { id:"rd_test_4", title:"Tune a slow walking gait with the robot supported", partIds:["leg_motors","main_controller"] },
  ] },
  { id:"assemble", title:"Final assembly & supported trials", subSteps:[
    { id:"rd_asm_1", title:"Assemble the four legs onto the body frame", partIds:["frame","motor_mounts","linkages"] },
    { id:"rd_asm_2", title:"Install electronics, battery and seal the enclosures", partIds:["main_controller","battery","enclosures"] },
    { id:"rd_asm_3", title:"Fit the foot paws and route cabling along the legs", partIds:["foot_paws","fastener_kit"] },
    { id:"rd_asm_4", title:"Run supported stand, balance and slow-walk trials", partIds:["leg_motors","imu"] },
  ] },
];

export const ROBODOG = {
  key:"robodog" as const,
  projectId:"robodog-quadruped-01",
  name:"Robodog Project",
  eyebrow:"REFERENCE 10 · QUADRUPED ROBOT",
  description:"Pet-scale quadruped robot with 3 degrees of freedom per leg, twelve integrated BLDC joint motors on a CAN bus, and Raspberry Pi + ESP32 control.",
  briefTitle:"Bốn chân linh hoạt.\nMười hai khớp BLDC.\nDáng đi ổn định.",
  tags:["QUADRUPED","12× BLDC · CAN","RESEARCH"],
  visual:"/robodog-visual.png",
  originalPrompt:"Design a pet-scale quadruped robot with 3 DOF per leg driven by twelve BLDC joint motors over CAN.",
  plan:"Requirements → body & leg kinematics → BLDC joint actuation → CAN control → power & BMS → supported calibration → balance and gait trials",
  notes:["research quadruped","3 DOF per leg","CAN joint bus","supported testing"],
  componentCount:robodogParts.length,
};

export function buildRobodogCadProject(request = ROBODOG.originalPrompt, baseVersion = 1): CadProjectResult {
  const legs: Array<[string, number, number]> = [
    ["fl", -70, -90],
    ["fr", 70, -90],
    ["rl", -70, 90],
    ["rr", 70, 90],
  ];
  const scene: CadProjectResult["scene"] = [
    { id:"body", label:"Body frame", kind:"box", size:[150,44,240], position:[0,110,0], color:"#3a3f46", role:"enclosure" },
    { id:"top-cover", label:"Top cover", kind:"plate", size:[150,6,240], position:[0,136,0], color:"#2b2f35", role:"enclosure" },
    ...legs.flatMap(([tag, x, z]) => [
      { id:`hip-${tag}`, label:`Hip motor ${tag.toUpperCase()}`, kind:"motor" as const, size:[20,22,20] as [number, number, number], position:[x, 108, z] as [number, number, number], rotation:[0,0,1.57] as [number, number, number], color:"#242831", role:"component" as const },
      { id:`thigh-${tag}`, label:`Thigh ${tag.toUpperCase()}`, kind:"box" as const, size:[14,60,18] as [number, number, number], position:[x, 74, z] as [number, number, number], color:"#4a4f56", role:"component" as const },
      { id:`shin-${tag}`, label:`Shin ${tag.toUpperCase()}`, kind:"box" as const, size:[12,58,14] as [number, number, number], position:[x, 24, z] as [number, number, number], color:"#30363d", role:"component" as const },
      { id:`paw-${tag}`, label:`Paw ${tag.toUpperCase()}`, kind:"cylinder" as const, size:[12,8,12] as [number, number, number], position:[x, -6, z] as [number, number, number], color:"#171a20", role:"component" as const },
    ]),
    { id:"rpi", label:"Raspberry Pi 4", kind:"pcb", size:[85,12,56], position:[0,120,-40], color:"#2f7d3a", role:"component" },
    { id:"esp32", label:"ESP32 + CAN", kind:"pcb", size:[40,10,28], position:[0,120,40], color:"#157d55", role:"component" },
    { id:"battery", label:"4S LiPo battery", kind:"battery", size:[45,28,140], position:[0,96,0], color:"#242831", role:"component" },
  ];
  return {
    projectId:ROBODOG.projectId,
    draftId:`robodog-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[400,320,360], clearanceMm:1.5, wallThicknessMm:2.5, printer:"FDM" },
    operations:[
      { id:"op-rd01", type:"create_box", label:"Build the V-slot body frame", parameters:{ profile:"20x20" } },
      { id:"op-rd02", type:"place_component", label:"Install twelve BLDC joint motors (3 per leg)", parameters:{ joints:12 } },
      { id:"op-rd03", type:"place_component", label:"Assemble four 3-DOF legs with linkages and bearings", parameters:{ legs:4 } },
      { id:"op-rd04", type:"place_component", label:"Place Raspberry Pi, ESP32 and CAN bus", parameters:{ controllers:2 } },
      { id:"op-rd05", type:"place_component", label:"Fit the 4S battery and BMS low in the body", parameters:{ component:"battery" } },
      { id:"op-rd06", type:"add_pcb_mount", label:"Print and fit TPU foot paws", parameters:{ paws:4 } },
    ],
    validation:{ passed:true, score:91, checksPassed:12, checksTotal:13, issues:[{ severity:"info", code:"QUADRUPED_SAFETY_GATE", message:"Calibrate joints and run first gait tests with the robot supported on a stand." }] },
    metrics:{ dimensionsMm:[340,300,240], estimatedPrintMinutes:1600, estimatedMaterialGrams:900, primitiveCount:scene.length },
    scene,
  };
}
