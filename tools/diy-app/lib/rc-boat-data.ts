import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const rcBoatParts: ProjectPart[] = [
  p({ id:"RB01", exportId:"main_mcu", name:"Main controller", productName:"ESP32-WROOM-32D", description:"Controller handling RC input, propulsion, steering, the camera winch and video.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:5, color:"orange", pins:"UART · PWM · GPIO · 3.3V", dimensions:"54x28x13mm", purchaseUrl:"", sourceName:"Espressif", sourceStatus:"Reference class" }),
  p({ id:"RB02", exportId:"camera", name:"Underwater camera", productName:"OV2640 Camera Module", description:"Camera in a sealed pod, lowered on a tether to view below the surface.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:10, color:"lime", pins:"DVP · 3.3V", dimensions:"25x24x9mm", purchaseUrl:"", sourceName:"Generic camera", sourceStatus:"Reference class" }),
  p({ id:"RB03", exportId:"esc", name:"Propulsion ESC", productName:"Waterproof 30A Brushless ESC", description:"Speed controller for the main propulsion motor.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:20, color:"red", pins:"BAT+ · BAT− · PWM · 3-phase", dimensions:"55x25x9mm", purchaseUrl:"", sourceName:"Generic marine ESC", sourceStatus:"Reference class" }),
  p({ id:"RB04", exportId:"motor", name:"Propulsion motor", productName:"Brushless DC Motor 2212", description:"Drives the single propeller through the stern tube.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:1, price:15, color:"blue", pins:"PHASE A · B · C", dimensions:"Ø28x30mm", purchaseUrl:"", sourceName:"Generic BLDC", sourceStatus:"Reference class" }),
  p({ id:"RB05", exportId:"rudder_servo", name:"Rudder servo", productName:"Waterproof Micro Servo MG90S", description:"Steers the rudder via a push-pull linkage.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:1, price:8, color:"blue", pins:"SIG · 5V · GND", dimensions:"23x12x29mm", purchaseUrl:"", sourceName:"TowerPro / generic", sourceStatus:"Reference class" }),
  p({ id:"RB06", exportId:"winch_servo", name:"Camera winch servo", productName:"MG996R High-Torque Servo", description:"Drives the winch that deploys and retracts the tethered camera pod.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:1, price:9, color:"blue", pins:"SIG · 5V · GND", dimensions:"40x19x43mm", purchaseUrl:"", sourceName:"TowerPro", sourceStatus:"Reference class" }),
  p({ id:"RB07", exportId:"battery", name:"Main battery", productName:"3S 5000mAh LiPo", description:"Main pack powering the propulsion and electronics.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:40, color:"red", pins:"VBAT+ · VBAT− · BALANCE", dimensions:"140x45x25mm", purchaseUrl:"", sourceName:"Generic 3S LiPo", sourceStatus:"Handle per LiPo safety" }),
  p({ id:"RB08", exportId:"buck_5v", name:"5V regulator", productName:"LM2596 DC-DC Buck", description:"5 V rail for the MCU, servos and receiver.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:2, color:"red", pins:"IN+ · IN− · 5V · GND", dimensions:"43x21x14mm", purchaseUrl:"", sourceName:"Generic buck", sourceStatus:"Reference class" }),
  p({ id:"RB09", exportId:"receiver", name:"RC receiver", productName:"Flysky FS-iA6B", description:"Long-range receiver for surface remote-control commands.", category:"electrical", subtype:"module", type:"MODULE", qty:1, price:15, color:"violet", pins:"PPM/SBUS · 5V · ANT", dimensions:"47x27x14mm", purchaseUrl:"", sourceName:"Flysky", sourceStatus:"Reference class" }),
  p({ id:"RB10", exportId:"fpv_tx", name:"FPV video transmitter", productName:"5.8GHz FPV Transmitter", description:"Sends live analog video from the camera to the operator's screen or goggles.", category:"electrical", subtype:"module", type:"MODULE", qty:1, price:25, color:"violet", pins:"VIDEO · 5V · ANT", dimensions:"36x36x5mm", purchaseUrl:"", sourceName:"Generic VTX", sourceStatus:"Set legal power/band for your region" }),
  p({ id:"RB11", exportId:"hull", name:"Boat hull", productName:"RC Boat Hull (ABS)", description:"Watertight main body providing buoyancy and mounting for all systems.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:50, color:"slate", pins:"", dimensions:"~600mm hull", purchaseUrl:"", sourceName:"RC hull supplier", sourceStatus:"Reference class" }),
  p({ id:"RB12", exportId:"driveline", name:"Driveline", productName:"Prop Shaft, Stern Tube, Coupling & Propeller", description:"Stainless shaft, sealed stern tube, flexible coupling and propeller for propulsion.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:1, price:19, color:"cyan", pins:"", dimensions:"Ø3mm shaft", purchaseUrl:"", sourceName:"RC parts supplier", sourceStatus:"Reference class" }),
  p({ id:"RB13", exportId:"rudder", name:"Rudder assembly", productName:"Rudder Post & Push-Pull Linkage", description:"Rudder post and linkage rod connecting the rudder blade to the servo.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:1, price:3.5, color:"cyan", pins:"", dimensions:"Ø3mm rod", purchaseUrl:"", sourceName:"RC parts supplier", sourceStatus:"Reference class" }),
  p({ id:"RB14", exportId:"camera_pod", name:"Tethered camera pod", productName:"Acrylic Dome Port, Tether Cable & Ballast", description:"Sealed camera pod with acrylic lens port, 10 m 4-conductor tether and sink weights.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:1, price:25, color:"cyan", pins:"", dimensions:"Pod + 10m tether", purchaseUrl:"", sourceName:"Assembly", sourceStatus:"Seal and ballast per project files" }),
  p({ id:"RB15", exportId:"printed_parts", name:"Printed hull parts", productName:"3D Printed Deck Hatch, Pod & Propeller Set", description:"Watertight deck hatch, camera-pod shell, propeller and internal brackets.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:40, color:"violet", pins:"", dimensions:"PETG · 20% infill, watertight", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"RB16", exportId:"seals_fasteners", name:"Seals & fasteners", productName:"O-Ring Kit, M3 Stainless Hardware & Strap", description:"Nitrile O-ring set, stainless fasteners and battery strap for a watertight build.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:15, color:"slate", pins:"", dimensions:"Assorted", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Finalize after CAD freeze" }),
];

export const rcBoatElectricalConnections = [
  { source:"battery", target:"esc", type:"power", voltage:"11.1V", current:"30A", label:"Propulsion power" },
  { source:"battery", target:"buck_5v", type:"power", voltage:"11.1V", current:"3A", label:"5V rail feed" },
  { source:"esc", target:"motor", type:"power", voltage:"3-phase", current:"Controlled", label:"Motor drive" },
  { source:"buck_5v", target:"main_mcu", type:"power", voltage:"5V", current:"1A", label:"Logic power" },
  { source:"main_mcu", target:"esc", type:"data", protocol:"PWM", label:"Throttle command" },
  { source:"main_mcu", target:"rudder_servo", type:"data", protocol:"PWM", label:"Steering" },
  { source:"main_mcu", target:"winch_servo", type:"data", protocol:"PWM", label:"Camera deploy/retract" },
  { source:"receiver", target:"main_mcu", type:"data", protocol:"PPM/SBUS", label:"RC control input" },
  { source:"camera", target:"main_mcu", type:"data", protocol:"DVP / tether", label:"Video feed over tether" },
  { source:"main_mcu", target:"fpv_tx", type:"data", protocol:"Composite video", label:"FPV downlink" },
];

export const rcBoatMechanicalConnections = [
  { source:"driveline", target:"hull", label:"Stern tube through transom" },
  { source:"motor", target:"driveline", label:"Flexible coupling" },
  { source:"rudder", target:"hull", label:"Rudder post through hull" },
  { source:"rudder_servo", target:"rudder", label:"Push-pull linkage" },
  { source:"winch_servo", target:"camera_pod", label:"Winch drum and tether" },
  { source:"camera_pod", target:"hull", label:"Pod stows in hull well" },
  { source:"camera", target:"camera_pod", label:"Camera in sealed pod" },
  { source:"battery", target:"hull", label:"Battery tray and strap" },
  { source:"printed_parts", target:"hull", label:"Deck hatch and brackets" },
  { source:"seals_fasteners", target:"hull", label:"O-rings and fasteners" },
];

export const rcBoatInstructionPreamble: InstructionPreamble = {
  tools:["Soldering iron and marine heat-shrink","M3 drivers and hex keys","3D printer (PETG capable)","Marine sealant and O-ring grease","Multimeter","Test tank or calm shallow water","RC transmitter","Computer with the ESP32 toolchain"],
  assumptions:["Educational and hobby RC boating use only","No covert recording or people-tracking payloads","Camera and FPV used only where legally permitted and with consent","LiPo charged and handled with proper safety","Sealed and float-tested before operating on open water"],
};

export const rcBoatInstructionSteps: InstructionSection[] = [
  { id:"fabricate", title:"Hull & driveline preparation", subSteps:[
    { id:"rb_fab_1", title:"Prepare the hull and install the stern tube and rudder post", partIds:["hull","driveline","rudder"] },
    { id:"rb_fab_2", title:"3D print the deck hatch, camera pod and propeller", partIds:["printed_parts"] },
    { id:"rb_fab_3", title:"Fit O-rings and seal the shaft, rudder and hatch", partIds:["seals_fasteners","driveline"] },
  ] },
  { id:"wire", title:"Power & control wiring", subSteps:[
    { id:"rb_wire_1", title:"Wire the battery, ESC and 5V regulator", partIds:["battery","esc","buck_5v"] },
    { id:"rb_wire_2", title:"Connect the propulsion motor, rudder and winch servos", partIds:["esc","motor","rudder_servo","winch_servo"] },
    { id:"rb_wire_3", title:"Wire the receiver, camera tether and FPV transmitter", partIds:["receiver","camera","fpv_tx","main_mcu"] },
    { id:"rb_wire_4", title:"Verify polarity and continuity before the first power-on", partIds:["main_mcu","seals_fasteners"] },
  ] },
  { id:"bringup", title:"Software & float test", subSteps:[
    { id:"rb_test_1", title:"Flash the ESP32 and bind the RC receiver", partIds:["main_mcu","receiver"] },
    { id:"rb_test_2", title:"Test motor, rudder and winch travel on the bench", partIds:["motor","rudder_servo","winch_servo"] },
    { id:"rb_test_3", title:"Seal the hull and run a float and leak test", partIds:["hull","seals_fasteners"] },
    { id:"rb_test_4", title:"Confirm the camera video and FPV link with the pod lowered", partIds:["camera","fpv_tx","camera_pod"] },
  ] },
  { id:"assemble", title:"Final assembly & first sail", subSteps:[
    { id:"rb_asm_1", title:"Install the electronics tray, battery and receiver", partIds:["main_mcu","battery","receiver"] },
    { id:"rb_asm_2", title:"Fit the winch, camera pod and tether management", partIds:["winch_servo","camera_pod"] },
    { id:"rb_asm_3", title:"Close and seal the deck hatch", partIds:["printed_parts","seals_fasteners"] },
    { id:"rb_asm_4", title:"Sail on calm shallow water and test camera deployment", partIds:["motor","rudder_servo","camera_pod"] },
  ] },
];

export const RC_BOAT = {
  key:"rcboat" as const,
  projectId:"rc-submersible-boat-01",
  name:"RC Submersible Boat",
  eyebrow:"REFERENCE 12 · RC SUBMERSIBLE BOAT",
  description:"Remote-controlled surface boat with brushless propulsion, rudder steering and a winch-deployed tethered camera pod for live underwater viewing.",
  briefTitle:"Chạy trên mặt nước.\nThả camera bằng tời.\nXem trực tiếp dưới nước.",
  tags:["RC BOAT","TETHERED CAMERA","HOBBY"],
  visual:"/rc-boat-visual.png",
  originalPrompt:"Design an RC boat with brushless propulsion and a winch-deployed tethered underwater camera pod.",
  plan:"Requirements → hull & driveline → propulsion & steering → tethered camera winch → RC + FPV link → float and leak test → calm-water sail",
  notes:["hobby RC boat","tethered camera pod","watertight hull","calm-water testing"],
  componentCount:rcBoatParts.length,
};

export function buildRcBoatCadProject(request = RC_BOAT.originalPrompt, baseVersion = 1): CadProjectResult {
  const scene: CadProjectResult["scene"] = [
    { id:"hull", label:"Boat hull", kind:"box", size:[110,44,300], position:[0,44,0], color:"#54595f", role:"enclosure" },
    { id:"deck", label:"Deck hatch", kind:"plate", size:[100,5,220], position:[0,68,0], color:"#3a3f46", role:"enclosure" },
    { id:"bow", label:"Bow", kind:"box", size:[70,36,60], position:[0,42,-170], rotation:[0.25,0,0], color:"#5a5f66", role:"enclosure" },
    { id:"motor", label:"Propulsion motor", kind:"motor", size:[16,26,16], position:[0,42,120], rotation:[1.57,0,0], color:"#242831", role:"component" },
    { id:"shaft", label:"Prop shaft & stern tube", kind:"cylinder", size:[4,70,4], position:[0,32,158], rotation:[1.4,0,0], color:"#c7ccd3", role:"component" },
    { id:"prop", label:"Propeller", kind:"propeller", size:[46,6,14], position:[0,26,178], rotation:[1.57,0,0], color:"#171a20", role:"component" },
    { id:"rudder", label:"Rudder", kind:"plate", size:[6,44,34], position:[0,20,150], color:"#30363d", role:"component" },
    { id:"mcu", label:"ESP32 controller", kind:"pcb", size:[46,10,26], position:[0,54,-30], color:"#157d55", role:"component" },
    { id:"battery", label:"3S LiPo battery", kind:"battery", size:[45,24,140], position:[0,40,20], color:"#242831", role:"component" },
    { id:"receiver", label:"RC receiver", kind:"pcb", size:[40,8,24], position:[34,56,-70], color:"#38424f", role:"component" },
    { id:"vtx", label:"FPV transmitter", kind:"pcb", size:[30,6,30], position:[-34,58,-70], color:"#4a4f56", role:"component" },
    { id:"winch", label:"Camera winch servo", kind:"box", size:[24,26,18], position:[0,54,60], color:"#3a3f46", role:"component" },
    { id:"pod", label:"Tethered camera pod", kind:"cylinder", size:[14,34,14], position:[0,-4,80], rotation:[1.57,0,0], color:"#1c1f24", role:"component" },
  ];
  return {
    projectId:RC_BOAT.projectId,
    draftId:`rc-boat-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[130,140,340], clearanceMm:1, wallThicknessMm:2.5, printer:"FDM" },
    operations:[
      { id:"op-rb01", type:"create_box", label:"Build the watertight ABS hull", parameters:{ lengthMm:600 } },
      { id:"op-rb02", type:"place_component", label:"Install propulsion motor, shaft and rudder", parameters:{ driveline:1 } },
      { id:"op-rb03", type:"place_component", label:"Fit the camera winch and tethered pod", parameters:{ winch:1 } },
      { id:"op-rb04", type:"place_component", label:"Place the ESP32, receiver and FPV transmitter", parameters:{ electronics:3 } },
      { id:"op-rb05", type:"place_component", label:"Install the 3S battery and 5V regulator", parameters:{ component:"battery" } },
      { id:"op-rb06", type:"add_cutout", label:"Seal the deck hatch and shaft with O-rings", parameters:{ seals:true } },
    ],
    validation:{ passed:true, score:93, checksPassed:10, checksTotal:11, issues:[{ severity:"info", code:"BOAT_SEAL_GATE", message:"Float-test and leak-check the sealed hull before operating on open water." }] },
    metrics:{ dimensionsMm:[110,120,600], estimatedPrintMinutes:480, estimatedMaterialGrams:260, primitiveCount:scene.length },
    scene,
  };
}
