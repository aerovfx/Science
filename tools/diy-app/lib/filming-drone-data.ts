import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const filmingDroneParts: ProjectPart[] = [
  p({ id:"PF01", exportId:"flight_controller", name:"Flight controller", productName:"Holybro Kakute H7 V2", description:"H7 flight controller with integrated IMU/baro for stable cinematic flight (Betaflight/ArduPilot).", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:75, color:"orange", pins:"UART · I2C · DShot · VBAT", dimensions:"30x30x8mm", purchaseUrl:"https://holybro.com/", sourceName:"Holybro", sourceStatus:"Official product reference" }),
  p({ id:"PF02", exportId:"fpv_camera", name:"FPV piloting camera", productName:"RunCam Phoenix 2", description:"Low-latency analog camera for the piloting feed.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:25, color:"lime", pins:"VIDEO · 5V · GND", dimensions:"19x19x19mm", purchaseUrl:"https://runcam.com/", sourceName:"RunCam", sourceStatus:"Official product reference" }),
  p({ id:"PF03", exportId:"gps", name:"GPS / compass", productName:"M80 PRO GPS Module", description:"GPS and compass for position hold and Return-to-Home.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:30, color:"lime", pins:"UART · I2C · 5V", dimensions:"30x30x10mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"PF04", exportId:"esc", name:"4-in-1 ESC", productName:"Hobbywing XRotor G2 60A 4in1", description:"Single-board ESC driving all four motors on 6S (BLHeli32).", category:"electrical", subtype:"power", type:"POWER", qty:1, price:100, color:"red", pins:"BAT± · S1-S4 · 3-phase", dimensions:"45x40x9mm", purchaseUrl:"https://www.hobbywing.com/", sourceName:"Hobbywing", sourceStatus:"Official product reference" }),
  p({ id:"PF05", exportId:"motors", name:"Brushless motors ×4", productName:"T-Motor F80 Pro II 2806.5 1300KV", description:"Efficient motors sized for 7-inch propellers.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:4, price:40, color:"blue", pins:"PHASE A · B · C", dimensions:"Ø33x25mm", purchaseUrl:"https://store.tmotor.com/", sourceName:"T-Motor", sourceStatus:"Official product reference" }),
  p({ id:"PF06", exportId:"battery", name:"Flight battery", productName:"Tattu R-Line 6S 4000mAh 120C", description:"High-capacity 6S pack for long cinematic flights.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:120, color:"red", pins:"VBAT+ · VBAT− · BALANCE", dimensions:"140x45x50mm", purchaseUrl:"", sourceName:"Tattu / Gens Ace", sourceStatus:"Handle per LiPo safety" }),
  p({ id:"PF07", exportId:"vtx", name:"Video transmitter", productName:"TBS Unify Pro32 HV", description:"High-power analog VTX for a robust FPV downlink.", category:"electrical", subtype:"communication", type:"MODULE", qty:1, price:50, color:"violet", pins:"VIDEO · 5V · ANT", dimensions:"30x30x6mm", purchaseUrl:"", sourceName:"Team BlackSheep", sourceStatus:"Set legal power/band for your region" }),
  p({ id:"PF08", exportId:"payload_camera", name:"Filming camera", productName:"GoPro Hero 11 Black", description:"Action camera payload recording the high-quality footage.", category:"electrical", subtype:"sensor", type:"MODULE", qty:1, price:350, color:"lime", pins:"Standalone", dimensions:"71x51x34mm", purchaseUrl:"https://gopro.com/", sourceName:"GoPro", sourceStatus:"Official product reference" }),
  p({ id:"PF09", exportId:"receiver", name:"RC receiver", productName:"ExpressLRS ELRS EP1", description:"Compact long-range control receiver.", category:"electrical", subtype:"communication", type:"MODULE", qty:1, price:20, color:"violet", pins:"CRSF · 5V · GND", dimensions:"11x10x3mm", purchaseUrl:"", sourceName:"ExpressLRS", sourceStatus:"Reference class" }),
  p({ id:"PF10", exportId:"frame", name:"7-inch carbon frame", productName:"iFlight Chimera7 Pro V2 Frame Kit", description:"7-inch deadcat carbon frame with integrated camera mounts for stable cinematic footage.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:79.99, color:"slate", pins:"", dimensions:"7-inch deadcat", purchaseUrl:"https://shop.iflight.com/", sourceName:"iFlight", sourceStatus:"Official product reference" }),
  p({ id:"PF11", exportId:"props", name:"Propellers ×4", productName:"Gemfan Flash 7040", description:"Two CW and two CCW 7-inch propellers.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:4, price:2.5, color:"cyan", pins:"", dimensions:"7x4", purchaseUrl:"", sourceName:"Gemfan", sourceStatus:"2 CW + 2 CCW" }),
  p({ id:"PF12", exportId:"gopro_mount", name:"Vibration-damped GoPro mount", productName:"TPU Anti-Vibration GoPro Mount", description:"Printed TPU mount isolating the GoPro from frame vibration for smooth footage.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:5, color:"violet", pins:"", dimensions:"TPU · 50% infill", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"PF13", exportId:"mount_set", name:"Mount set", productName:"3D Printed FPV/GPS/Antenna & Buzzer Mounts", description:"FPV camera mount, GPS mast, VTX/RX antenna mounts and buzzer bracket.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:6, color:"violet", pins:"", dimensions:"TPU / PETG", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"PF14", exportId:"buzzer", name:"Lost-model buzzer", productName:"Active 5V Buzzer", description:"Audible locator and status alarm.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:1, price:3, color:"blue", pins:"SIG · 5V", dimensions:"Ø12mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"PF15", exportId:"hardware", name:"Hardware & straps", productName:"Standoffs, Screw Kits, Straps & Pads", description:"Aluminium standoffs, M2/M3 screw kits, battery straps and anti-slip pads.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:37, color:"slate", pins:"", dimensions:"Assorted", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Finalize after CAD freeze" }),
];

export const filmingDroneElectricalConnections = [
  { source:"battery", target:"esc", type:"power", voltage:"22.2V", current:"Per-motor", label:"Main power bus" },
  { source:"esc", target:"motors", type:"power", voltage:"3-phase", current:"BLHeli32", label:"Motor phases" },
  { source:"esc", target:"flight_controller", type:"data", protocol:"DShot", label:"Motor commands" },
  { source:"flight_controller", target:"receiver", type:"data", protocol:"CRSF", label:"Control input" },
  { source:"flight_controller", target:"fpv_camera", type:"data", protocol:"Analog video", label:"Piloting feed" },
  { source:"fpv_camera", target:"vtx", type:"data", protocol:"Analog video", label:"FPV downlink" },
  { source:"flight_controller", target:"gps", type:"data", protocol:"UART + I2C", label:"Position & heading" },
  { source:"flight_controller", target:"buzzer", type:"data", protocol:"GPIO", label:"Locator alarm" },
];

export const filmingDroneMechanicalConnections = [
  { source:"motors", target:"frame", label:"Motors on carbon arms" },
  { source:"props", target:"motors", label:"7-inch props on shafts" },
  { source:"esc", target:"frame", label:"ESC in the stack" },
  { source:"flight_controller", target:"frame", label:"FC on soft-mount standoffs" },
  { source:"payload_camera", target:"gopro_mount", label:"GoPro on damped mount" },
  { source:"gopro_mount", target:"frame", label:"Damped mount on top plate" },
  { source:"fpv_camera", target:"mount_set", label:"FPV camera mount" },
  { source:"gps", target:"mount_set", label:"GPS mast" },
  { source:"battery", target:"frame", label:"Strapped underneath" },
  { source:"hardware", target:"frame", label:"Standoffs and fasteners" },
];

export const filmingDroneInstructionPreamble: InstructionPreamble = {
  tools:["Soldering iron and quality solder","Hex drivers and prop tool","3D printer (TPU and PETG capable)","Smoke stopper for first power-on","Multimeter","LiPo-safe charger and bag","Betaflight/ArduPilot ground station","Goggles and radio"],
  assumptions:["Hobby/professional cinematography use only","Fly only at permitted areas and set legal VTX power/band","Props off during all bench and configuration work","LiPo charged and handled with proper safety","Arm/disarm, GPS lock and failsafe verified before flight"],
};

export const filmingDroneInstructionSteps: InstructionSection[] = [
  { id:"fabricate", title:"Frame build & printing", subSteps:[
    { id:"pf_fab_1", title:"Assemble the 7-inch deadcat carbon frame", partIds:["frame","hardware"] },
    { id:"pf_fab_2", title:"Print the damped GoPro mount, FPV/GPS and antenna mounts", partIds:["gopro_mount","mount_set"] },
    { id:"pf_fab_3", title:"Dry-fit the stack and check GoPro clearance", partIds:["frame","flight_controller","esc"] },
  ] },
  { id:"wire", title:"Power & signal wiring", subSteps:[
    { id:"pf_wire_1", title:"Solder the battery lead and the 4-in-1 ESC", partIds:["battery","esc"] },
    { id:"pf_wire_2", title:"Solder the four motors to the ESC", partIds:["esc","motors"] },
    { id:"pf_wire_3", title:"Wire the FC, FPV camera, VTX, receiver, GPS and buzzer", partIds:["flight_controller","fpv_camera","vtx","receiver","gps","buzzer"] },
    { id:"pf_wire_4", title:"Check for shorts with a smoke stopper before first power-on", partIds:["battery","flight_controller"] },
  ] },
  { id:"bringup", title:"Setup & tuning", subSteps:[
    { id:"pf_test_1", title:"Configure the flight stack, ports, modes and GPS rescue", partIds:["flight_controller","gps"] },
    { id:"pf_test_2", title:"Bind the receiver and set failsafe", partIds:["flight_controller","receiver"] },
    { id:"pf_test_3", title:"Check motor order and direction with props off", partIds:["esc","motors"] },
    { id:"pf_test_4", title:"Confirm the FPV feed and set legal VTX power", partIds:["fpv_camera","vtx"] },
  ] },
  { id:"assemble", title:"Final assembly & maiden", subSteps:[
    { id:"pf_asm_1", title:"Mount motors, ESC and the FC on soft mounts", partIds:["motors","esc","flight_controller"] },
    { id:"pf_asm_2", title:"Fit the GoPro on the damped mount and balance", partIds:["payload_camera","gopro_mount"] },
    { id:"pf_asm_3", title:"Strap the battery and set the center of gravity", partIds:["battery","hardware"] },
    { id:"pf_asm_4", title:"Fit props last and fly a careful GPS-locked maiden", partIds:["props","motors"] },
  ] },
];

export const FILMING_DRONE = {
  key:"filmingdrone" as const,
  projectId:"professional-filming-drone-01",
  name:"Professional Filming Drone",
  eyebrow:"REFERENCE 19 · CINEMATIC DRONE",
  description:"7-inch deadcat carbon drone on 6S with an H7 flight controller, GPS, analog FPV for piloting and a vibration-damped GoPro payload for smooth cinematic footage.",
  briefTitle:"Khung 7-inch deadcat.\nGoPro chống rung.\nQuay phim mượt mà.",
  tags:["CINEMATIC DRONE","7-INCH 6S","GOPRO PAYLOAD"],
  visual:"",
  originalPrompt:"Design a 7-inch deadcat 6S carbon filming drone with an H7 flight controller, GPS, FPV and a vibration-damped GoPro mount.",
  plan:"Requirements → 7-inch frame & propulsion → flight controller, GPS & FPV → damped GoPro payload → tuning → bench checks → GPS-locked maiden",
  notes:["cinematic drone","7-inch deadcat","GoPro payload","GPS rescue"],
  componentCount:filmingDroneParts.length,
};

export function buildFilmingDroneCadProject(request = FILMING_DRONE.originalPrompt, baseVersion = 1): CadProjectResult {
  const corners: Array<[string, number, number]> = [
    ["fl", -110, -120],
    ["fr", 110, -120],
    ["rl", -95, 120],
    ["rr", 95, 120],
  ];
  const scene: CadProjectResult["scene"] = [
    { id:"bottom-plate", label:"Bottom plate", kind:"plate", size:[150,6,150], position:[0,24,0], color:"#242625", role:"enclosure" },
    { id:"top-plate", label:"Top plate", kind:"plate", size:[130,4,110], position:[0,52,0], color:"#303231", role:"enclosure" },
    ...corners.flatMap(([tag, x, z]) => [
      { id:`arm-${tag}`, label:`Arm ${tag.toUpperCase()}`, kind:"box" as const, size:[170,6,18] as [number, number, number], position:[x/2, 24, z/2] as [number, number, number], rotation:[0, Math.atan2(z, x), 0] as [number, number, number], color:"#1c1e1d", role:"enclosure" as const },
      { id:`motor-${tag}`, label:`Motor ${tag.toUpperCase()}`, kind:"motor" as const, size:[18,18,18] as [number, number, number], position:[x, 32, z] as [number, number, number], color:"#242831", role:"component" as const },
      { id:`prop-${tag}`, label:`Prop ${tag.toUpperCase()}`, kind:"propeller" as const, size:[178,4,18] as [number, number, number], position:[x, 46, z] as [number, number, number], color:"#303231", opacity:0.9, role:"component" as const },
    ]),
    { id:"fc", label:"Kakute H7 FC", kind:"pcb", size:[32,12,32], position:[0,36,0], color:"#248c5b", role:"component" },
    { id:"battery", label:"6S 4000mAh LiPo", kind:"battery", size:[46,32,120], position:[0,10,0], color:"#242322", role:"component" },
    { id:"gopro", label:"GoPro Hero 11", kind:"box", size:[52,38,26], position:[0,80,-30], color:"#1c1f24", role:"component" },
    { id:"fpv-camera", label:"FPV camera", kind:"box", size:[19,19,14], position:[0,40,-64], color:"#30363d", role:"component" },
    { id:"gps", label:"GPS module", kind:"pcb", size:[28,8,28], position:[0,64,45], color:"#38424f", role:"component" },
    { id:"vtx-ant", label:"VTX antenna", kind:"cylinder", size:[4,44,4], position:[0,64,66], color:"#c7ccd3", role:"component" },
  ];
  return {
    projectId:FILMING_DRONE.projectId,
    draftId:`filming-drone-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[340,340,140], clearanceMm:1, wallThicknessMm:2, printer:"FDM" },
    operations:[
      { id:"op-pf01", type:"create_box", label:"Build the 7-inch deadcat carbon frame", parameters:{ armClass:7 } },
      { id:"op-pf02", type:"place_component", label:"Install four motors and the 4-in-1 ESC", parameters:{ motors:4 } },
      { id:"op-pf03", type:"place_component", label:"Soft-mount the H7 flight controller", parameters:{ fc:1 } },
      { id:"op-pf04", type:"place_component", label:"Fit the FPV camera, VTX and GPS", parameters:{ fpv:true } },
      { id:"op-pf05", type:"add_pcb_mount", label:"Mount the vibration-damped GoPro payload", parameters:{ payload:"gopro" } },
    ],
    validation:{ passed:true, score:94, checksPassed:12, checksTotal:13, issues:[{ severity:"info", code:"CINE_ARM_GATE", message:"Verify GPS lock, motor direction, failsafe and legal VTX power with props off before flight." }] },
    metrics:{ dimensionsMm:[300,300,130], estimatedPrintMinutes:220, estimatedMaterialGrams:80, primitiveCount:scene.length },
    scene,
  };
}
