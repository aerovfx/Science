import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const fpvRacerParts: ProjectPart[] = [
  p({ id:"FR01", exportId:"flight_controller", name:"Flight controller", productName:"HolyBro Kakute H7 Mini V2", description:"H7 flight controller with integrated IMU, barometer and magnetometer running the flight stack.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:60, color:"orange", pins:"UART · I2C · DShot · VBAT", dimensions:"20x20x6mm", purchaseUrl:"https://holybro.com/", sourceName:"Holybro", sourceStatus:"Official product reference" }),
  p({ id:"FR02", exportId:"fpv_camera", name:"FPV camera", productName:"RunCam Phoenix 2 SE", description:"Analog FPV camera with strong low-light performance for freestyle and racing.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:35, color:"lime", pins:"VIDEO · 5V · GND", dimensions:"19x19x19mm", purchaseUrl:"https://runcam.com/", sourceName:"RunCam", sourceStatus:"Official product reference" }),
  p({ id:"FR03", exportId:"gps", name:"GPS / compass", productName:"HolyBro M8Q-5883", description:"GPS + compass for telemetry, position and Return-to-Home.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:25, color:"lime", pins:"UART · I2C · 5V", dimensions:"25x25x8mm", purchaseUrl:"https://holybro.com/", sourceName:"Holybro", sourceStatus:"Official product reference" }),
  p({ id:"FR04", exportId:"escs", name:"ESCs ×4", productName:"HolyBro Tekko32 F4 65A", description:"Four DShot speed controllers, one per motor.", category:"electrical", subtype:"power", type:"POWER", qty:4, price:30, color:"red", pins:"BAT+ · BAT− · SIG · 3-phase", dimensions:"27x15x6mm", purchaseUrl:"https://holybro.com/", sourceName:"Holybro", sourceStatus:"Official product reference" }),
  p({ id:"FR05", exportId:"motors", name:"Brushless motors ×4", productName:"T-Motor F60 Pro IV 2207 1950KV", description:"High-KV motors for high-speed 6S flight.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:4, price:25, color:"blue", pins:"PHASE A · B · C", dimensions:"27.9x27.9x33mm", purchaseUrl:"https://store.tmotor.com/", sourceName:"T-Motor", sourceStatus:"Official product reference" }),
  p({ id:"FR06", exportId:"battery", name:"Flight battery", productName:"Tattu R-Line 6S 1300mAh 120C", description:"High-discharge 6S race pack.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:60, color:"red", pins:"VBAT+ · VBAT− · BALANCE", dimensions:"72x35x35mm", purchaseUrl:"", sourceName:"Tattu / Gens Ace", sourceStatus:"Handle per LiPo safety" }),
  p({ id:"FR07", exportId:"cap", name:"Low-ESR capacitor", productName:"Rubycon ZLH 35V 1000uF", description:"Smooths the main power input to the ESCs.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:3, color:"red", pins:"+ · −", dimensions:"Ø10x20mm", purchaseUrl:"", sourceName:"Rubycon", sourceStatus:"Reference class" }),
  p({ id:"FR08", exportId:"receiver", name:"RC receiver", productName:"FrSky R-XSR", description:"Full-range receiver for the control link.", category:"electrical", subtype:"communication", type:"MODULE", qty:1, price:25, color:"violet", pins:"SBUS · 5V · GND", dimensions:"16x11x5mm", purchaseUrl:"", sourceName:"FrSky", sourceStatus:"Official product reference" }),
  p({ id:"FR09", exportId:"vtx", name:"Video transmitter", productName:"RushFPV Rush Tank Solo VTX", description:"5.8 GHz analog video downlink to the goggles.", category:"electrical", subtype:"communication", type:"MODULE", qty:1, price:40, color:"violet", pins:"VIDEO · 5V · ANT", dimensions:"30x30x8mm", purchaseUrl:"https://www.rushfpv.com/", sourceName:"RushFPV", sourceStatus:"Set legal power/band for your region" }),
  p({ id:"FR10", exportId:"frame", name:"Carbon frame set", productName:"5\" Carbon Frame (Plates + Arms)", description:"5 mm bottom plate, 2 mm top plate and four 5 mm carbon arms.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:38, color:"slate", pins:"", dimensions:"5-inch class", purchaseUrl:"", sourceName:"Carbon frame supplier", sourceStatus:"Reference class" }),
  p({ id:"FR11", exportId:"props", name:"Propellers ×4", productName:"5-inch 3-Blade Propeller", description:"Two CW and two CCW race propellers.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:4, price:1.2, color:"cyan", pins:"", dimensions:"5x3-blade", purchaseUrl:"", sourceName:"Prop supplier", sourceStatus:"2 CW + 2 CCW" }),
  p({ id:"FR12", exportId:"mount_set", name:"Mount & landing set", productName:"3D Printed Camera/GPS/Antenna Mounts + Landing Pads", description:"Camera and GPS mounts, VTX/RX antenna mounts and four TPU landing pads.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:11, color:"violet", pins:"", dimensions:"PETG / TPU", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"FR13", exportId:"hardware", name:"Hardware & straps", productName:"Standoffs, Screws, LiPo Strap & Pads", description:"Nylon and aluminium standoffs, frame/motor screws, battery straps, pads and ESC dampers.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:35, color:"slate", pins:"", dimensions:"Assorted", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Finalize after CAD freeze" }),
];

export const fpvRacerElectricalConnections = [
  { source:"battery", target:"cap", type:"power", voltage:"22.2V", current:"Bulk", label:"Filtered main power" },
  { source:"battery", target:"escs", type:"power", voltage:"22.2V", current:"Per-motor", label:"ESC power bus" },
  { source:"escs", target:"motors", type:"power", voltage:"3-phase", current:"DShot controlled", label:"Motor phases" },
  { source:"escs", target:"flight_controller", type:"data", protocol:"DShot", label:"Motor commands" },
  { source:"flight_controller", target:"receiver", type:"data", protocol:"SBUS", label:"Control input" },
  { source:"flight_controller", target:"fpv_camera", type:"data", protocol:"Analog video", label:"Camera feed" },
  { source:"fpv_camera", target:"vtx", type:"data", protocol:"Analog video", label:"FPV downlink" },
  { source:"flight_controller", target:"gps", type:"data", protocol:"UART + I2C", label:"Position & heading" },
];

export const fpvRacerMechanicalConnections = [
  { source:"motors", target:"frame", label:"Motors on carbon arms" },
  { source:"props", target:"motors", label:"Props on motor shafts" },
  { source:"escs", target:"frame", label:"ESCs on arms" },
  { source:"flight_controller", target:"frame", label:"FC on soft-mount standoffs" },
  { source:"fpv_camera", target:"mount_set", label:"Camera mount" },
  { source:"gps", target:"mount_set", label:"GPS mast" },
  { source:"battery", target:"frame", label:"Strapped to top plate" },
  { source:"mount_set", target:"frame", label:"Antenna and landing mounts" },
  { source:"hardware", target:"frame", label:"Standoffs and fasteners" },
];

export const fpvRacerInstructionPreamble: InstructionPreamble = {
  tools:["Soldering iron and quality solder","Hex drivers and prop tool","3D printer (PETG and TPU capable)","Smoke stopper for first power-on","Multimeter","LiPo-safe charger and bag","Betaflight Configurator","Goggles and radio"],
  assumptions:["Hobby FPV racing/freestyle use only","Fly only at permitted fields and set legal VTX power/band","Props off during all bench and configuration work","LiPo charged and handled with proper safety","Arm/disarm and failsafe verified before flight"],
};

export const fpvRacerInstructionSteps: InstructionSection[] = [
  { id:"fabricate", title:"Frame build & printing", subSteps:[
    { id:"fr_fab_1", title:"Assemble the carbon frame with arms and standoffs", partIds:["frame","hardware"] },
    { id:"fr_fab_2", title:"3D print the camera, GPS and antenna mounts and landing pads", partIds:["mount_set"] },
    { id:"fr_fab_3", title:"Dry-fit the electronics stack and check clearances", partIds:["frame","flight_controller","escs"] },
  ] },
  { id:"wire", title:"Power & signal wiring", subSteps:[
    { id:"fr_wire_1", title:"Solder the battery lead, capacitor and four ESCs", partIds:["battery","cap","escs"] },
    { id:"fr_wire_2", title:"Solder the four motors to their ESCs", partIds:["escs","motors"] },
    { id:"fr_wire_3", title:"Wire the flight controller, camera, VTX, receiver and GPS", partIds:["flight_controller","fpv_camera","vtx","receiver","gps"] },
    { id:"fr_wire_4", title:"Check for shorts with a smoke stopper before first power-on", partIds:["battery","flight_controller"] },
  ] },
  { id:"bringup", title:"Betaflight setup", subSteps:[
    { id:"fr_test_1", title:"Flash and configure Betaflight, set ports and modes", partIds:["flight_controller"] },
    { id:"fr_test_2", title:"Bind the receiver and set failsafe", partIds:["flight_controller","receiver"] },
    { id:"fr_test_3", title:"Check motor order and direction with props off", partIds:["escs","motors"] },
    { id:"fr_test_4", title:"Confirm the FPV feed and set legal VTX power", partIds:["fpv_camera","vtx"] },
  ] },
  { id:"assemble", title:"Final assembly & maiden", subSteps:[
    { id:"fr_asm_1", title:"Mount motors, ESCs and the FC on soft mounts", partIds:["motors","escs","flight_controller"] },
    { id:"fr_asm_2", title:"Fit the camera, GPS and antennas", partIds:["fpv_camera","gps","mount_set"] },
    { id:"fr_asm_3", title:"Strap the battery and balance the center of gravity", partIds:["battery","hardware"] },
    { id:"fr_asm_4", title:"Fit props last and fly a careful maiden at a permitted field", partIds:["props","motors"] },
  ] },
];

export const FPV_RACER = {
  key:"fpvracer" as const,
  projectId:"fpv-racing-drone-01",
  name:"FPV Racing Drone",
  eyebrow:"REFERENCE 15 · FPV RACING DRONE",
  description:"5-inch carbon-fiber FPV racing quad on 6S with an H7 flight controller, brushless power system, analog FPV and GPS for agile high-speed flight.",
  briefTitle:"Nhẹ và cứng.\nTốc độ cao.\nFPV thời gian thực.",
  tags:["FPV RACING","6S CARBON","HOBBY"],
  visual:"/fpv-racing-drone-visual.png",
  originalPrompt:"Design a 5-inch 6S carbon FPV racing drone with an H7 flight controller, analog FPV and GPS.",
  plan:"Requirements → frame & propulsion → flight controller & FPV → power system → Betaflight tuning → bench checks → maiden flight",
  notes:["hobby FPV","5-inch 6S","analog FPV + GPS","field flying"],
  componentCount:fpvRacerParts.length,
};

export function buildFpvRacerCadProject(request = FPV_RACER.originalPrompt, baseVersion = 1): CadProjectResult {
  const corners: Array<[string, number, number]> = [
    ["fl", -90, -90],
    ["fr", 90, -90],
    ["rl", -90, 90],
    ["rr", 90, 90],
  ];
  const scene: CadProjectResult["scene"] = [
    { id:"bottom-plate", label:"Bottom plate", kind:"plate", size:[120,5,120], position:[0,20,0], color:"#242625", role:"enclosure" },
    { id:"top-plate", label:"Top plate", kind:"plate", size:[110,4,90], position:[0,44,0], color:"#303231", role:"enclosure" },
    ...corners.flatMap(([tag, x, z]) => [
      { id:`arm-${tag}`, label:`Arm ${tag.toUpperCase()}`, kind:"box" as const, size:[130,5,16] as [number, number, number], position:[x/2, 20, z/2] as [number, number, number], rotation:[0, Math.atan2(z, x), 0] as [number, number, number], color:"#1c1e1d", role:"enclosure" as const },
      { id:`motor-${tag}`, label:`Motor ${tag.toUpperCase()}`, kind:"motor" as const, size:[14,16,14] as [number, number, number], position:[x, 26, z] as [number, number, number], color:"#242831", role:"component" as const },
      { id:`prop-${tag}`, label:`Prop ${tag.toUpperCase()}`, kind:"propeller" as const, size:[126,3,14] as [number, number, number], position:[x, 38, z] as [number, number, number], color:"#303231", opacity:0.9, role:"component" as const },
    ]),
    { id:"fc", label:"Kakute H7 FC", kind:"pcb", size:[30,10,30], position:[0,30,0], color:"#248c5b", role:"component" },
    { id:"battery", label:"6S LiPo", kind:"battery", size:[35,30,72], position:[0,58,0], color:"#242322", role:"component" },
    { id:"camera", label:"FPV camera", kind:"box", size:[19,19,14], position:[0,34,-58], color:"#1c1f24", role:"component" },
    { id:"vtx-ant", label:"VTX antenna", kind:"cylinder", size:[4,40,4], position:[0,60,58], color:"#c7ccd3", role:"component" },
    { id:"gps", label:"GPS module", kind:"pcb", size:[25,8,25], position:[0,50,40], color:"#38424f", role:"component" },
  ];
  return {
    projectId:FPV_RACER.projectId,
    draftId:`fpv-racer-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[260,260,120], clearanceMm:1, wallThicknessMm:2, printer:"FDM" },
    operations:[
      { id:"op-fr01", type:"create_box", label:"Build the 5-inch carbon X-frame", parameters:{ armClass:5 } },
      { id:"op-fr02", type:"place_component", label:"Install four motors and DShot ESCs", parameters:{ motors:4 } },
      { id:"op-fr03", type:"place_component", label:"Soft-mount the H7 flight controller", parameters:{ fc:1 } },
      { id:"op-fr04", type:"place_component", label:"Fit the FPV camera, VTX and GPS", parameters:{ fpv:true } },
      { id:"op-fr05", type:"place_component", label:"Strap the 6S battery on the top plate", parameters:{ component:"battery" } },
    ],
    validation:{ passed:true, score:94, checksPassed:11, checksTotal:12, issues:[{ severity:"info", code:"FPV_ARM_GATE", message:"Verify motor direction, failsafe and legal VTX power with props off before flight." }] },
    metrics:{ dimensionsMm:[220,220,110], estimatedPrintMinutes:180, estimatedMaterialGrams:60, primitiveCount:scene.length },
    scene,
  };
}
