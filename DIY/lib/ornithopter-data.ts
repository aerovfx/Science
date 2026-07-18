import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const ornithopterParts: ProjectPart[] = [
  p({ id:"DF01", exportId:"flight_controller", name:"Main flight controller", productName:"Betaflight F4 Pro V2 AIO", description:"Compact all-in-one flight controller stabilizing the flapping-wing micro air vehicle.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:35, color:"orange", pins:"UART · PWM · I2C · VBAT", dimensions:"27x27x6mm", purchaseUrl:"", sourceName:"Generic AIO FC", sourceStatus:"Reference class" }),
  p({ id:"DF02", exportId:"fpv_camera", name:"FPV camera", productName:"Runcam Nano 3", description:"Tiny forward camera for real-time first-person-view flight of the ornithopter.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:22, color:"lime", pins:"VIDEO · 5V · GND", dimensions:"14x14x14mm", purchaseUrl:"https://runcam.com/", sourceName:"RunCam", sourceStatus:"Official product reference" }),
  p({ id:"DF03", exportId:"wing_escs", name:"Wing motor drivers ×2", productName:"Tiny 1S Brushless ESC 5A", description:"Two lightweight speed controllers driving the left and right wing motors.", category:"electrical", subtype:"power", type:"POWER", qty:2, price:10, color:"red", pins:"BAT+ · BAT− · SIG", dimensions:"12x8x3mm", purchaseUrl:"", sourceName:"Generic micro ESC", sourceStatus:"Reference class" }),
  p({ id:"DF04", exportId:"wing_motors", name:"Wing motors ×2", productName:"0703 15000KV Brushless Motor", description:"High-KV micro motors that drive the flapping mechanism for each wing.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:2, price:12, color:"blue", pins:"PHASE A · B · C", dimensions:"Ø7x15mm", purchaseUrl:"", sourceName:"Generic micro motor", sourceStatus:"Reference class" }),
  p({ id:"DF05", exportId:"flight_battery", name:"Flight battery", productName:"1S 300mAh LiPo Battery", description:"Single-cell lithium-polymer pack powering the whole micro air vehicle.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:7, color:"red", pins:"VBAT+ · VBAT−", dimensions:"30x11x6mm", purchaseUrl:"", sourceName:"Generic 1S LiPo", sourceStatus:"Handle per LiPo safety" }),
  p({ id:"DF06", exportId:"video_tx", name:"Video transmitter", productName:"Eachine Nano VTX 400mW", description:"Analog FPV video downlink from the camera to the pilot's goggles.", category:"electrical", subtype:"communication", type:"MODULE", qty:1, price:20, color:"violet", pins:"VIDEO · 5V · ANT", dimensions:"14x13x4mm", purchaseUrl:"", sourceName:"Eachine", sourceStatus:"Set legal power/band for your region" }),
  p({ id:"DF07", exportId:"rc_receiver", name:"RC receiver", productName:"FrSky XM+ Micro", description:"Ultra-light SBUS receiver providing reliable manual control of the micro flyer.", category:"electrical", subtype:"communication", type:"MODULE", qty:1, price:18, color:"violet", pins:"SBUS · 5V · GND", dimensions:"11x10x3mm", purchaseUrl:"https://www.frsky-rc.com/", sourceName:"FrSky", sourceStatus:"Official product reference" }),
  p({ id:"DF08", exportId:"chassis", name:"Main chassis frame", productName:"Micro Chassis Frame", description:"Lightweight central frame carrying the electronics and both wing mechanisms.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:0.5, color:"slate", pins:"", dimensions:"40x18x70mm", purchaseUrl:"", sourceName:"In-house fabrication", sourceStatus:"Build from project files" }),
  p({ id:"DF09", exportId:"wing_spars", name:"Wing spars ×4", productName:"Carbon Fiber Wing Spar", description:"Carbon spars forming the structural backbone of the left and right flapping wings.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:4, price:1.5, color:"slate", pins:"", dimensions:"Ø1.5x120mm", purchaseUrl:"", sourceName:"Carbon rod supplier", sourceStatus:"Reference class" }),
  p({ id:"DF10", exportId:"wing_membranes", name:"Wing membranes ×2", productName:"Ultralight Wing Membrane Film", description:"Ultra-lightweight polymer film forming the lifting surface of each wing.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:2, price:0.75, color:"slate", pins:"", dimensions:"95x55mm", purchaseUrl:"", sourceName:"Film supplier", sourceStatus:"Reference class" }),
  p({ id:"DF11", exportId:"flapping_linkage", name:"Flapping linkages ×2", productName:"Custom Flapping Linkage", description:"Linkage that converts each motor's rotary motion into flapping wing motion.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:2, price:0.3, color:"cyan", pins:"", dimensions:"Micro linkage", purchaseUrl:"", sourceName:"In-house fabrication", sourceStatus:"Build from project files" }),
  p({ id:"DF12", exportId:"bearings", name:"Micro ball bearings ×4", productName:"MR52ZZ Miniature Ball Bearings", description:"Low-friction bearings for the flapping-wing pivot points.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:4, price:1.2, color:"cyan", pins:"", dimensions:"Ø5x2mm", purchaseUrl:"", sourceName:"Bearing supplier", sourceStatus:"Reference class" }),
  p({ id:"DF13", exportId:"shaft_couplers", name:"Motor shaft couplers ×2", productName:"3D Printed Shaft Couplers", description:"Printed couplers linking each motor shaft to its flapping mechanism.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:2, price:0.05, color:"violet", pins:"", dimensions:"PETG · 100% infill", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"DF14", exportId:"mount_set", name:"Avionics mount set", productName:"3D Printed Micro Mounts", description:"Flight-controller, camera, VTX, receiver, motor-driver mounts and battery tray.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:1, color:"violet", pins:"", dimensions:"TPU / PETG · 20% infill", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"DF15", exportId:"tail", name:"Dragonfly tail assembly", productName:"3D Printed Tail Assembly", description:"Aerodynamic biomimetic tail that also routes the antenna toward the rear.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:0.25, color:"violet", pins:"", dimensions:"PETG · 15% infill", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"DF16", exportId:"fastener_kit", name:"Micro fastener kit", productName:"M1.2–M1.7 Micro Screws", description:"Tiny screws for mounting the micro components to the printed parts.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:0.9, color:"slate", pins:"", dimensions:"M1.2-M1.7 assorted", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Finalize after CAD freeze" }),
];

export const ornithopterElectricalConnections = [
  { source:"flight_battery", target:"wing_escs", type:"power", voltage:"3.7V", current:"5A", label:"Wing driver power" },
  { source:"flight_battery", target:"flight_controller", type:"power", voltage:"3.7V", current:"1A", label:"Avionics power" },
  { source:"wing_escs", target:"wing_motors", type:"power", voltage:"3-phase", current:"Per-wing", label:"Wing motor phases" },
  { source:"flight_controller", target:"wing_escs", type:"data", protocol:"PWM / DShot", sourcePin:"M1-M2", targetPin:"SIG", label:"Flapping commands" },
  { source:"flight_controller", target:"rc_receiver", type:"data", protocol:"SBUS", label:"Manual control input" },
  { source:"fpv_camera", target:"video_tx", type:"data", protocol:"Analog video", label:"FPV video downlink" },
  { source:"flight_controller", target:"fpv_camera", type:"power", voltage:"5V", current:"0.2A", label:"Camera power" },
];

export const ornithopterMechanicalConnections = [
  { source:"wing_spars", target:"chassis", label:"Wing root pivots" },
  { source:"wing_membranes", target:"wing_spars", label:"Membrane over spars" },
  { source:"flapping_linkage", target:"chassis", label:"Linkage pivots" },
  { source:"bearings", target:"flapping_linkage", label:"Low-friction pivots" },
  { source:"wing_motors", target:"chassis", label:"Motor bays" },
  { source:"shaft_couplers", target:"wing_motors", label:"Shaft to linkage" },
  { source:"flapping_linkage", target:"wing_spars", label:"Drive to wing" },
  { source:"mount_set", target:"chassis", label:"Avionics mounts" },
  { source:"flight_controller", target:"mount_set", label:"FC mount" },
  { source:"fpv_camera", target:"mount_set", label:"Camera mount" },
  { source:"flight_battery", target:"mount_set", label:"Battery tray" },
  { source:"tail", target:"chassis", label:"Rear tail mount" },
  { source:"fastener_kit", target:"chassis", label:"Micro fasteners" },
];

export const ornithopterInstructionPreamble: InstructionPreamble = {
  tools:["Fine-tip soldering iron","Precision tweezers and cutters","Micro screwdrivers (M1.2-M1.7)","3D printer (PETG and TPU capable)","Gram-accurate scale","Wing membrane heat iron","Low-voltage bench supply","RC transmitter and FPV goggles"],
  assumptions:["Educational and hobby flapping-wing research use only","No covert audio recording or people-tracking payloads","Camera and video link used only where legally permitted and with consent","Fly in open, permitted areas within line of sight","Keep hands clear of the flapping mechanism during power-on"],
};

export const ornithopterInstructionSteps: InstructionSection[] = [
  { id:"fabricate", title:"Airframe & wing fabrication", subSteps:[
    { id:"df_fab_1", title:"3D print the chassis mounts, couplers and tail assembly", partIds:["mount_set","shaft_couplers","tail"] },
    { id:"df_fab_2", title:"Build the wing frames from carbon spars and heat-bond the membranes", partIds:["wing_spars","wing_membranes"] },
    { id:"df_fab_3", title:"Assemble the flapping linkages with the micro ball bearings", partIds:["flapping_linkage","bearings"] },
  ] },
  { id:"wire", title:"Micro-electronics wiring", subSteps:[
    { id:"df_wire_1", title:"Solder the battery to the flight controller and the two wing drivers", partIds:["flight_battery","flight_controller","wing_escs"] },
    { id:"df_wire_2", title:"Connect the two wing motors to their drivers", partIds:["wing_escs","wing_motors"] },
    { id:"df_wire_3", title:"Wire the RC receiver, FPV camera and video transmitter", partIds:["rc_receiver","fpv_camera","video_tx"] },
    { id:"df_wire_4", title:"Check continuity and current draw on a low-voltage bench supply", partIds:["flight_controller","fastener_kit"] },
  ] },
  { id:"bringup", title:"Software & bench test", subSteps:[
    { id:"df_test_1", title:"Flash and configure the flight controller for a flapping-wing mix", partIds:["flight_controller"] },
    { id:"df_test_2", title:"Bind the receiver and verify control channels", partIds:["flight_controller","rc_receiver"] },
    { id:"df_test_3", title:"Run the wing motors slowly by hand and confirm symmetric flapping", partIds:["wing_motors","flapping_linkage"] },
    { id:"df_test_4", title:"Confirm the FPV video link and set legal transmit power", partIds:["fpv_camera","video_tx"] },
  ] },
  { id:"assemble", title:"Final assembly & flight trim", subSteps:[
    { id:"df_asm_1", title:"Mount the wing motors, couplers and linkages to the chassis", partIds:["wing_motors","shaft_couplers","flapping_linkage","chassis"] },
    { id:"df_asm_2", title:"Attach the wings and check flapping travel and clearance", partIds:["wing_spars","wing_membranes","chassis"] },
    { id:"df_asm_3", title:"Install the avionics, camera and battery, then balance the airframe", partIds:["mount_set","fpv_camera","flight_battery"] },
    { id:"df_asm_4", title:"Fit the tail, check center of gravity and hand-test glide before powered flight", partIds:["tail","flight_controller"] },
  ] },
];

export const ORNITHOPTER = {
  key:"ornithopter" as const,
  projectId:"dragonfly-ornithopter-01",
  name:"Dragonfly Ornithopter",
  eyebrow:"REFERENCE 07 · BIOMIMETIC MAV",
  description:"Educational biomimetic flapping-wing micro air vehicle with an FPV camera, built to explore ornithopter flight mechanics — no covert audio or tracking payloads.",
  briefTitle:"Vỗ cánh như côn trùng.\nBay bằng cơ cấu thật.\nHọc khí động vỗ cánh.",
  tags:["ORNITHOPTER","FLAPPING WING","STEM"],
  visual:"",
  originalPrompt:"Design an educational dragonfly-style flapping-wing micro air vehicle for STEM flight research.",
  plan:"Requirements → flapping mechanism design → micro airframe → propulsion + FPV → bench flapping test → CG trim → line-of-sight flight trials",
  notes:["educational","biomimetic flapping wing","FPV only","no covert payload"],
  componentCount:ornithopterParts.length,
};

export function buildOrnithopterCadProject(request = ORNITHOPTER.originalPrompt, baseVersion = 1): CadProjectResult {
  const scene: CadProjectResult["scene"] = [
    { id:"chassis", label:"Micro chassis frame", kind:"box", size:[40,16,72], position:[0,20,0], color:"#3a3f46", role:"enclosure" },
    { id:"left-wing", label:"Left flapping wing", kind:"plate", size:[96,2,56], position:[-58,32,-6], rotation:[0,0,0.22], color:"#9aa1a8", opacity:0.55, role:"enclosure" },
    { id:"right-wing", label:"Right flapping wing", kind:"plate", size:[96,2,56], position:[58,32,-6], rotation:[0,0,-0.22], color:"#9aa1a8", opacity:0.55, role:"enclosure" },
    { id:"left-hindwing", label:"Left hind wing", kind:"plate", size:[80,2,42], position:[-48,28,26], rotation:[0,0,0.18], color:"#9aa1a8", opacity:0.5, role:"enclosure" },
    { id:"right-hindwing", label:"Right hind wing", kind:"plate", size:[80,2,42], position:[48,28,26], rotation:[0,0,-0.18], color:"#9aa1a8", opacity:0.5, role:"enclosure" },
    { id:"left-motor", label:"Left wing motor", kind:"motor", size:[7,10,7], position:[-14,26,-8], color:"#242831", role:"component" },
    { id:"right-motor", label:"Right wing motor", kind:"motor", size:[7,10,7], position:[14,26,-8], color:"#242831", role:"component" },
    { id:"flight-controller", label:"AIO flight controller", kind:"pcb", size:[27,6,27], position:[0,30,0], color:"#e48435", role:"component" },
    { id:"camera", label:"FPV camera", kind:"box", size:[10,10,8], position:[0,24,-34], color:"#1c1f24", role:"component" },
    { id:"battery", label:"1S LiPo", kind:"battery", size:[12,8,30], position:[0,12,6], color:"#242831", role:"component" },
    { id:"tail", label:"Dragonfly tail", kind:"cylinder", size:[4,64,4], position:[0,22,64], rotation:[1.57,0,0], color:"#30363d", role:"component" },
  ];
  return {
    projectId:ORNITHOPTER.projectId,
    draftId:`dragonfly-ornithopter-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[220,220,140], clearanceMm:0.6, wallThicknessMm:0.8, printer:"FDM" },
    operations:[
      { id:"op-d01", type:"create_box", label:"Build the micro chassis frame", parameters:{ lengthMm:72 } },
      { id:"op-d02", type:"create_box", label:"Build twin flapping wing pairs", parameters:{ wings:4 } },
      { id:"op-d03", type:"place_component", label:"Install two wing motors and drivers", parameters:{ motors:2 } },
      { id:"op-d04", type:"add_pcb_mount", label:"Mount the flapping linkages on ball bearings", parameters:{ pivots:2 } },
      { id:"op-d05", type:"place_component", label:"Place the flight controller, receiver and camera", parameters:{ component:"avionics" } },
      { id:"op-d06", type:"place_component", label:"Place the 1S battery and biomimetic tail", parameters:{ component:"flight_battery" } },
    ],
    validation:{ passed:true, score:90, checksPassed:9, checksTotal:9, issues:[{ severity:"info", code:"MICRO_MAV_GATE", message:"Verify symmetric flapping, center of gravity and legal FPV use before line-of-sight flight." }] },
    metrics:{ dimensionsMm:[220,180,90], estimatedPrintMinutes:180, estimatedMaterialGrams:24, primitiveCount:scene.length },
    scene,
  };
}
