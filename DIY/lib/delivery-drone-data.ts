import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const deliveryDroneParts: ProjectPart[] = [
  p({ id:"AD01", exportId:"flight_controller", name:"Flight controller", productName:"Holybro Pixhawk 4 Mini", description:"Autopilot for autonomous waypoint delivery missions, position hold and safe return-to-home.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:120, color:"orange", pins:"CAN · UART · PWM · I2C · POWER", dimensions:"38x55x15mm", purchaseUrl:"https://holybro.com/", sourceName:"Holybro", sourceStatus:"Official product reference" }),
  p({ id:"AD02", exportId:"gps", name:"GPS / compass", productName:"Holybro M8N GPS Module", description:"Positioning and compass for navigation and return-to-home.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:40, color:"lime", pins:"UART · I2C · 5V", dimensions:"50x50x16mm", purchaseUrl:"https://holybro.com/", sourceName:"Holybro", sourceStatus:"Official product reference" }),
  p({ id:"AD03", exportId:"motors", name:"Brushless motors ×4", productName:"EMAX ECO II 2306 1700KV", description:"Efficient motors for a stable delivery quad.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:4, price:15, color:"blue", pins:"PHASE A · B · C", dimensions:"Ø28x32mm", purchaseUrl:"", sourceName:"EMAX", sourceStatus:"Reference class" }),
  p({ id:"AD04", exportId:"escs", name:"ESCs ×4", productName:"Holybro Tekko32 F4", description:"Speed controllers, one per motor.", category:"electrical", subtype:"power", type:"POWER", qty:4, price:18, color:"red", pins:"BAT± · SIG · 3-phase", dimensions:"27x15x6mm", purchaseUrl:"https://holybro.com/", sourceName:"Holybro", sourceStatus:"Official product reference" }),
  p({ id:"AD05", exportId:"battery", name:"Flight battery", productName:"Tattu R-Line 4S 1550mAh 120C", description:"4S pack for agile delivery flight.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:45, color:"red", pins:"VBAT+ · VBAT− · BALANCE", dimensions:"76x35x30mm", purchaseUrl:"", sourceName:"Tattu / Gens Ace", sourceStatus:"Handle per LiPo safety" }),
  p({ id:"AD06", exportId:"pdb", name:"Power distribution", productName:"Matek PDB-XT60", description:"Distributes battery power and provides 5 V and 12 V rails.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:10, color:"red", pins:"BAT · 5V · 12V · ESC", dimensions:"36x50x4mm", purchaseUrl:"https://www.mateksys.com/", sourceName:"Matek Systems", sourceStatus:"Official product reference" }),
  p({ id:"AD07", exportId:"telemetry", name:"Telemetry radio", productName:"Holybro 433MHz Telemetry V3", description:"Command-and-telemetry link to the ground station for supervised autonomy.", category:"electrical", subtype:"communication", type:"MODULE", qty:1, price:50, color:"violet", pins:"UART · 5V · ANT", dimensions:"27x55x14mm", purchaseUrl:"https://holybro.com/", sourceName:"Holybro", sourceStatus:"Civil ISM band · check local rules" }),
  p({ id:"AD08", exportId:"receiver", name:"RC receiver", productName:"FrSky XM+ Micro", description:"Manual control link for takeoff, landing and override.", category:"electrical", subtype:"communication", type:"MODULE", qty:1, price:20, color:"violet", pins:"SBUS · 5V · GND", dimensions:"16x11x5mm", purchaseUrl:"", sourceName:"FrSky", sourceStatus:"Reference class" }),
  p({ id:"AD09", exportId:"fpv_camera", name:"FPV camera", productName:"RunCam Nano 3", description:"Camera for live monitoring of the delivery flight.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:25, color:"lime", pins:"VIDEO · 5V · GND", dimensions:"14x14x14mm", purchaseUrl:"https://runcam.com/", sourceName:"RunCam", sourceStatus:"Official product reference" }),
  p({ id:"AD10", exportId:"vtx", name:"Video transmitter", productName:"RushFPV Rush Tank Mini", description:"5.8 GHz downlink for live monitoring.", category:"electrical", subtype:"communication", type:"MODULE", qty:1, price:35, color:"violet", pins:"VIDEO · 5V · ANT", dimensions:"30x30x6mm", purchaseUrl:"https://www.rushfpv.com/", sourceName:"RushFPV", sourceStatus:"Set legal power/band for your region" }),
  p({ id:"AD11", exportId:"frame", name:"Carbon frame", productName:"Carbon Quad Plates + Arms", description:"Top/bottom carbon plates and four carbon arms.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:61, color:"slate", pins:"", dimensions:"Quad frame", purchaseUrl:"", sourceName:"Carbon frame supplier", sourceStatus:"Reference class" }),
  p({ id:"AD12", exportId:"landing_gear", name:"Landing gear ×4", productName:"Quadcopter Landing Skids", description:"Landing skids providing ground clearance for the package bay.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:4, price:3, color:"slate", pins:"", dimensions:"Per-arm skid", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"AD13", exportId:"props", name:"Propellers ×4", productName:"6040 Propellers", description:"Two CW and two CCW 6-inch propellers.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:4, price:2, color:"cyan", pins:"", dimensions:"6x4", purchaseUrl:"", sourceName:"Generic", sourceStatus:"2 CW + 2 CCW" }),
  p({ id:"AD14", exportId:"delivery_mech", name:"Package drop mechanism", productName:"Servo-Actuated Drop Mechanism (<1kg)", description:"Printed servo release for dropping small packages under operator supervision.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:1, price:5, color:"cyan", pins:"SIG · 5V", dimensions:"PETG · 30% infill", purchaseUrl:"", sourceName:"In-house 3D print + servo", sourceStatus:"Operator-supervised release" }),
  p({ id:"AD15", exportId:"mount_set", name:"Mount & enclosure set", productName:"3D Printed Motor/ESC/Avionics Mounts", description:"Motor and ESC mounts, FC enclosure, GPS mast, camera/VTX/RX mounts and battery tray.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:20, color:"violet", pins:"", dimensions:"PLA / PETG", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"AD16", exportId:"hardware", name:"Hardware & dampers", productName:"Standoffs, Screws & Vibration Dampers", description:"Aluminium standoffs, screws and anti-vibration flight-controller dampers.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:10, color:"slate", pins:"", dimensions:"Assorted", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Finalize after CAD freeze" }),
];

export const deliveryDroneElectricalConnections = [
  { source:"battery", target:"pdb", type:"power", voltage:"14.8V", current:"Peak", label:"Main power bus" },
  { source:"pdb", target:"escs", type:"power", voltage:"14.8V", current:"Per-motor", label:"ESC power" },
  { source:"escs", target:"motors", type:"power", voltage:"3-phase", current:"Controlled", label:"Motor phases" },
  { source:"pdb", target:"flight_controller", type:"power", voltage:"5V", current:"3A", label:"Avionics power" },
  { source:"flight_controller", target:"escs", type:"data", protocol:"PWM / DShot", label:"Motor commands" },
  { source:"flight_controller", target:"gps", type:"data", protocol:"UART + I2C", label:"Position & heading" },
  { source:"flight_controller", target:"telemetry", type:"data", protocol:"UART", label:"Ground-station link" },
  { source:"flight_controller", target:"receiver", type:"data", protocol:"SBUS", label:"Manual override" },
  { source:"fpv_camera", target:"vtx", type:"data", protocol:"Analog video", label:"Monitoring downlink" },
  { source:"flight_controller", target:"delivery_mech", type:"data", protocol:"PWM", label:"Supervised package release" },
];

export const deliveryDroneMechanicalConnections = [
  { source:"motors", target:"mount_set", label:"Motor mounts" },
  { source:"mount_set", target:"frame", label:"Mounts on arms" },
  { source:"props", target:"motors", label:"Props on shafts" },
  { source:"escs", target:"mount_set", label:"ESC mounts" },
  { source:"landing_gear", target:"frame", label:"Skids on arms" },
  { source:"flight_controller", target:"hardware", label:"Damped FC mount" },
  { source:"gps", target:"mount_set", label:"GPS mast" },
  { source:"battery", target:"mount_set", label:"Battery tray" },
  { source:"delivery_mech", target:"frame", label:"Drop mechanism under frame" },
  { source:"hardware", target:"frame", label:"Standoffs and fasteners" },
];

export const deliveryDroneInstructionPreamble: InstructionPreamble = {
  tools:["Soldering iron and solder","Hex drivers and prop tool","3D printer (PLA and PETG capable)","Smoke stopper for first power-on","Multimeter","LiPo-safe charger and bag","Ground-control station","Radio and goggles"],
  assumptions:["Civil, supervised package-transport experiments only","Fly only where permitted with the required approvals and Remote ID","Package release only under direct operator supervision over a safe area","Props off during all bench and configuration work","GPS lock, geofence and failsafe verified before autonomous flight"],
};

export const deliveryDroneInstructionSteps: InstructionSection[] = [
  { id:"fabricate", title:"Frame build & printing", subSteps:[
    { id:"ad_fab_1", title:"Assemble the carbon quad frame and landing gear", partIds:["frame","landing_gear","hardware"] },
    { id:"ad_fab_2", title:"Print the motor/ESC/avionics mounts and the drop mechanism", partIds:["mount_set","delivery_mech"] },
    { id:"ad_fab_3", title:"Dry-fit the avionics stack and package bay clearance", partIds:["frame","flight_controller","delivery_mech"] },
  ] },
  { id:"wire", title:"Power & avionics wiring", subSteps:[
    { id:"ad_wire_1", title:"Wire the battery, PDB and four ESCs", partIds:["battery","pdb","escs"] },
    { id:"ad_wire_2", title:"Connect the four motors to their ESCs", partIds:["escs","motors"] },
    { id:"ad_wire_3", title:"Wire the flight controller, GPS, telemetry and receiver", partIds:["flight_controller","gps","telemetry","receiver"] },
    { id:"ad_wire_4", title:"Connect the FPV camera, VTX and the drop servo", partIds:["fpv_camera","vtx","delivery_mech"] },
    { id:"ad_wire_5", title:"Check polarity and continuity before first power-on", partIds:["pdb","hardware"] },
  ] },
  { id:"bringup", title:"Software & safety setup", subSteps:[
    { id:"ad_test_1", title:"Bring up the autopilot and calibrate sensors and radio", partIds:["flight_controller","gps"] },
    { id:"ad_test_2", title:"Configure geofence, Remote ID, failsafe and return-to-home", partIds:["flight_controller","telemetry"] },
    { id:"ad_test_3", title:"Verify motor order and direction with props off", partIds:["escs","motors"] },
    { id:"ad_test_4", title:"Test the supervised package-release logic on the bench", partIds:["delivery_mech","flight_controller"] },
  ] },
  { id:"assemble", title:"Final assembly & approved test", subSteps:[
    { id:"ad_asm_1", title:"Mount motors, ESCs and the damped flight controller", partIds:["motors","escs","flight_controller"] },
    { id:"ad_asm_2", title:"Fit the GPS mast, camera and telemetry", partIds:["gps","fpv_camera","telemetry"] },
    { id:"ad_asm_3", title:"Install the battery and balance the center of gravity", partIds:["battery","mount_set"] },
    { id:"ad_asm_4", title:"Fit props last and run an approved supervised delivery test", partIds:["props","delivery_mech"] },
  ] },
];

export const DELIVERY_DRONE = {
  key:"deliverydrone" as const,
  projectId:"autonomous-delivery-drone-01",
  name:"Autonomous Delivery Drone",
  eyebrow:"REFERENCE 23 · DELIVERY DRONE",
  description:"GPS-guided quadcopter with a Pixhawk autopilot, telemetry and FPV monitoring, and a supervised servo drop mechanism for small (<1 kg) automated package transport.",
  briefTitle:"Giao hàng tự hành.\nĐịnh vị GPS.\nThả gói có giám sát.",
  tags:["DELIVERY DRONE","PIXHAWK · GPS","SUPERVISED DROP"],
  visual:"",
  originalPrompt:"Design an autonomous GPS delivery quadcopter with a Pixhawk autopilot, telemetry, FPV and a supervised package drop mechanism.",
  plan:"Requirements → frame & propulsion → autopilot, GPS & telemetry → supervised drop mechanism → power → safety setup → approved delivery test",
  notes:["delivery drone","GPS autonomy","supervised package drop","operator override"],
  componentCount:deliveryDroneParts.length,
};

export function buildDeliveryDroneCadProject(request = DELIVERY_DRONE.originalPrompt, baseVersion = 1): CadProjectResult {
  const corners: Array<[string, number, number]> = [
    ["fl", -95, -95],
    ["fr", 95, -95],
    ["rl", -95, 95],
    ["rr", 95, 95],
  ];
  const scene: CadProjectResult["scene"] = [
    { id:"bottom-plate", label:"Bottom plate", kind:"plate", size:[110,5,110], position:[0,26,0], color:"#242625", role:"enclosure" },
    { id:"top-plate", label:"Top plate", kind:"plate", size:[100,4,100], position:[0,50,0], color:"#303231", role:"enclosure" },
    ...corners.flatMap(([tag, x, z]) => [
      { id:`arm-${tag}`, label:`Arm ${tag.toUpperCase()}`, kind:"box" as const, size:[135,5,16] as [number, number, number], position:[x/2, 26, z/2] as [number, number, number], rotation:[0, Math.atan2(z, x), 0] as [number, number, number], color:"#1c1e1d", role:"enclosure" as const },
      { id:`motor-${tag}`, label:`Motor ${tag.toUpperCase()}`, kind:"motor" as const, size:[15,16,15] as [number, number, number], position:[x, 32, z] as [number, number, number], color:"#242831", role:"component" as const },
      { id:`prop-${tag}`, label:`Prop ${tag.toUpperCase()}`, kind:"propeller" as const, size:[150,4,16] as [number, number, number], position:[x, 44, z] as [number, number, number], color:"#303231", opacity:0.9, role:"component" as const },
      { id:`gear-${tag}`, label:`Landing gear ${tag.toUpperCase()}`, kind:"box" as const, size:[8,40,8] as [number, number, number], position:[x*0.9, 4, z*0.9] as [number, number, number], color:"#30363d", role:"component" as const },
    ]),
    { id:"fc", label:"Pixhawk 4 Mini", kind:"pcb", size:[38,14,55], position:[0,38,0], color:"#e48435", role:"component" },
    { id:"battery", label:"4S LiPo", kind:"battery", size:[35,30,76], position:[0,12,0], color:"#242322", role:"component" },
    { id:"gps", label:"GPS module", kind:"pcb", size:[45,10,45], position:[0,64,35], color:"#38424f", role:"component" },
    { id:"camera", label:"FPV camera", kind:"box", size:[14,14,10], position:[0,40,-56], color:"#1c1f24", role:"component" },
    { id:"package", label:"Package drop bay", kind:"box", size:[50,30,50], position:[0,-6,0], color:"#54c69a", opacity:0.8, role:"component" },
  ];
  return {
    projectId:DELIVERY_DRONE.projectId,
    draftId:`delivery-drone-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[300,300,180], clearanceMm:1, wallThicknessMm:2, printer:"FDM" },
    operations:[
      { id:"op-ad01", type:"create_box", label:"Build the carbon quad frame", parameters:{ arms:4 } },
      { id:"op-ad02", type:"place_component", label:"Install four motors and ESCs", parameters:{ motors:4 } },
      { id:"op-ad03", type:"place_component", label:"Place the Pixhawk, GPS and telemetry", parameters:{ avionics:3 } },
      { id:"op-ad04", type:"place_component", label:"Fit the 4S battery and monitoring camera", parameters:{ component:"battery" } },
      { id:"op-ad05", type:"add_cutout", label:"Add the supervised package drop bay", parameters:{ payloadKg:1 } },
    ],
    validation:{ passed:true, score:93, checksPassed:12, checksTotal:13, issues:[{ severity:"info", code:"DELIVERY_SAFETY_GATE", message:"Release packages only under direct operator supervision over a safe area, with geofence and failsafe verified." }] },
    metrics:{ dimensionsMm:[280,280,170], estimatedPrintMinutes:300, estimatedMaterialGrams:120, primitiveCount:scene.length },
    scene,
  };
}
