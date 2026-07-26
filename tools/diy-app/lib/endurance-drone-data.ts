import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const enduranceParts: ProjectPart[] = [
  p({ id:"EN01", exportId:"flight_controller", name:"Flight controller", productName:"HolyBro Kakute H7 V2", description:"H7 autopilot for long-range autonomous navigation, position hold and return-to-home.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:75, color:"orange", pins:"UART · I2C · PWM · VBAT", dimensions:"30x30x8mm", purchaseUrl:"https://holybro.com/", sourceName:"Holybro", sourceStatus:"Official product reference" }),
  p({ id:"EN02", exportId:"gps", name:"GPS / compass", productName:"Matek M8Q-5883", description:"GPS + compass for accurate positioning and waypoint navigation.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:30, color:"lime", pins:"UART · I2C · 5V", dimensions:"20x20x8mm", purchaseUrl:"https://www.mateksys.com/", sourceName:"Matek Systems", sourceStatus:"Official product reference" }),
  p({ id:"EN03", exportId:"fpv_camera", name:"FPV camera", productName:"Caddx Ratel 2", description:"Camera for visual piloting and survey monitoring.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:25, color:"lime", pins:"VIDEO · 5V · GND", dimensions:"19x19x19mm", purchaseUrl:"", sourceName:"Caddx", sourceStatus:"Reference class" }),
  p({ id:"EN04", exportId:"lidar", name:"LiDAR sensor", productName:"Benewake TFmini Plus", description:"Lightweight LiDAR for altitude and obstacle awareness.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:35, color:"lime", pins:"UART · I2C · 5V", dimensions:"35x21x15mm", purchaseUrl:"", sourceName:"Benewake", sourceStatus:"Reference class" }),
  p({ id:"EN05", exportId:"radar", name:"mmWave radar", productName:"mmWave Radar Sensor", description:"Millimetre-wave radar for distance and object detection, including at night.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:35, color:"lime", pins:"UART · 5V", dimensions:"30x25x5mm", purchaseUrl:"", sourceName:"DFRobot / generic", sourceStatus:"Reference class" }),
  p({ id:"EN06", exportId:"motors", name:"Tractor motors ×2", productName:"T-Motor AT3520 KV650", description:"Twin wing tractor motors for efficient high-speed cruise.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:2, price:70, color:"blue", pins:"PHASE A · B · C", dimensions:"Ø42x30mm", purchaseUrl:"https://store.tmotor.com/", sourceName:"T-Motor", sourceStatus:"Official product reference" }),
  p({ id:"EN07", exportId:"escs", name:"ESCs ×2", productName:"Hobbywing Platinum HV 100A", description:"High-voltage speed controllers for the twin tractor motors.", category:"electrical", subtype:"power", type:"POWER", qty:2, price:80, color:"red", pins:"BAT± · PWM · 3-phase", dimensions:"85x35x14mm", purchaseUrl:"https://www.hobbywing.com/", sourceName:"Hobbywing", sourceStatus:"Official product reference" }),
  p({ id:"EN08", exportId:"battery", name:"Flight battery", productName:"8S 5000mAh LiPo", description:"High-voltage pack for long-range, high-speed endurance missions.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:150, color:"red", pins:"VBAT+ · VBAT− · BALANCE", dimensions:"160x50x50mm", purchaseUrl:"", sourceName:"Generic 8S", sourceStatus:"Handle per LiPo safety" }),
  p({ id:"EN09", exportId:"receiver", name:"RC receiver", productName:"FrSky R-XSR", description:"Full-range receiver for manual control and override.", category:"electrical", subtype:"communication", type:"MODULE", qty:1, price:25, color:"violet", pins:"SBUS · 5V · GND", dimensions:"16x11x5mm", purchaseUrl:"", sourceName:"FrSky", sourceStatus:"Reference class" }),
  p({ id:"EN10", exportId:"vtx", name:"Video transmitter", productName:"TBS Unify Pro32 HV", description:"5.8 GHz FPV downlink.", category:"electrical", subtype:"communication", type:"MODULE", qty:1, price:60, color:"violet", pins:"VIDEO · 5V · ANT", dimensions:"30x30x6mm", purchaseUrl:"", sourceName:"Team BlackSheep", sourceStatus:"Set legal power/band for your region" }),
  p({ id:"EN11", exportId:"airframe", name:"Blended wing airframe", productName:"Carbon Fiber Blended Wing Body", description:"Aerodynamic carbon blended-wing-body airframe housing all systems for long endurance.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:350, color:"slate", pins:"", dimensions:"Blended wing", purchaseUrl:"", sourceName:"Composite fabricator", sourceStatus:"Requires structural validation" }),
  p({ id:"EN12", exportId:"battery_tray", name:"Battery tray & straps", productName:"Carbon Battery Tray + Velcro", description:"Internal carbon tray and straps holding the 8S pack at the CG.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:18, color:"slate", pins:"", dimensions:"Internal tray", purchaseUrl:"", sourceName:"Composite fabricator", sourceStatus:"Reference class" }),
  p({ id:"EN13", exportId:"nacelles", name:"Motor nacelles & adapters", productName:"3D Printed Nacelles + Prop Adapters", description:"Aerodynamic twin motor nacelles and the prop adapters.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:20, color:"violet", pins:"", dimensions:"PETG · 30% infill", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"EN14", exportId:"mount_set", name:"Avionics & cooling mounts", productName:"3D Printed Mounts, Ducts & Access Hatch", description:"FC, GPS, camera, VTX, RX, ESC, LiDAR and radar mounts, cooling ducts and the access hatch.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:22, color:"violet", pins:"", dimensions:"PETG / TPU", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"EN15", exportId:"fastener_kit", name:"Fastener kit", productName:"M3 Standoffs, Screws & Nuts", description:"Nylon standoffs and stainless hardware for the internal assembly.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:4, color:"slate", pins:"", dimensions:"M3 assorted", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Finalize after CAD freeze" }),
];

export const enduranceElectricalConnections = [
  { source:"battery", target:"escs", type:"power", voltage:"29.6V", current:"100A/ch", label:"Twin motor power" },
  { source:"escs", target:"motors", type:"power", voltage:"3-phase", current:"Controlled", label:"Tractor motor phases" },
  { source:"battery", target:"flight_controller", type:"power", voltage:"5V (BEC)", current:"3A", label:"Avionics power" },
  { source:"flight_controller", target:"escs", type:"data", protocol:"PWM", label:"Throttle commands" },
  { source:"flight_controller", target:"gps", type:"data", protocol:"UART + I2C", label:"Position & heading" },
  { source:"flight_controller", target:"lidar", type:"data", protocol:"UART", label:"Altitude / obstacle" },
  { source:"flight_controller", target:"radar", type:"data", protocol:"UART", label:"Night obstacle sensing" },
  { source:"flight_controller", target:"receiver", type:"data", protocol:"SBUS", label:"Manual override" },
  { source:"fpv_camera", target:"vtx", type:"data", protocol:"Analog video", label:"FPV downlink" },
];

export const enduranceMechanicalConnections = [
  { source:"motors", target:"nacelles", label:"Motors in nacelles" },
  { source:"nacelles", target:"airframe", label:"Nacelles on the wings" },
  { source:"escs", target:"mount_set", label:"ESC mounts in nacelles" },
  { source:"flight_controller", target:"mount_set", label:"Damped FC mount" },
  { source:"mount_set", target:"airframe", label:"Avionics in the fuselage" },
  { source:"gps", target:"mount_set", label:"GPS mast" },
  { source:"fpv_camera", target:"airframe", label:"Camera in the nose" },
  { source:"battery", target:"battery_tray", label:"8S on the CG tray" },
  { source:"battery_tray", target:"airframe", label:"Tray in the fuselage" },
  { source:"fastener_kit", target:"airframe", label:"Internal fasteners" },
];

export const enduranceInstructionPreamble: InstructionPreamble = {
  tools:["Soldering iron for high-current joints","Hex drivers and prop tools","3D printer (PETG and TPU capable)","Smoke stopper for first power-on","Multimeter and watt meter","LiPo-safe charger and bag","Ground-control station","Aircraft scales and CG fixture"],
  assumptions:["Civil survey, mapping or long-range research use only","No weapons or hazardous payloads","Fly only with the required approvals, Remote ID and within visual/BVLOS rules","High-voltage 8S handled with proper safety and fusing","GPS lock, geofence, failsafe and CG verified before flight"],
};

export const enduranceInstructionSteps: InstructionSection[] = [
  { id:"fabricate", title:"Airframe & nacelle fabrication", subSteps:[
    { id:"en_fab_1", title:"Prepare and inspect the blended-wing airframe", partIds:["airframe","battery_tray"] },
    { id:"en_fab_2", title:"Print the motor nacelles, mounts and access hatch", partIds:["nacelles","mount_set"] },
    { id:"en_fab_3", title:"Dry-fit the twin nacelles and check thrust-line alignment", partIds:["nacelles","motors"] },
  ] },
  { id:"wire", title:"Power & avionics wiring", subSteps:[
    { id:"en_wire_1", title:"Wire the 8S battery to the twin high-current ESCs", partIds:["battery","escs"] },
    { id:"en_wire_2", title:"Connect the tractor motors to their ESCs", partIds:["escs","motors"] },
    { id:"en_wire_3", title:"Wire the flight controller, GPS, LiDAR, radar and receiver", partIds:["flight_controller","gps","lidar","radar","receiver"] },
    { id:"en_wire_4", title:"Connect the FPV camera and video transmitter", partIds:["fpv_camera","vtx"] },
    { id:"en_wire_5", title:"Verify HV isolation, polarity and fusing before power-on", partIds:["battery","fastener_kit"] },
  ] },
  { id:"bringup", title:"Software & sensor setup", subSteps:[
    { id:"en_test_1", title:"Bring up the autopilot and calibrate sensors and radio", partIds:["flight_controller","gps"] },
    { id:"en_test_2", title:"Configure geofence, Remote ID, failsafe and return-to-home", partIds:["flight_controller","vtx"] },
    { id:"en_test_3", title:"Verify motor direction and thrust with props off", partIds:["escs","motors"] },
    { id:"en_test_4", title:"Test the LiDAR and radar navigation aids", partIds:["lidar","radar"] },
  ] },
  { id:"assemble", title:"Final assembly & approved flight", subSteps:[
    { id:"en_asm_1", title:"Install the nacelles, motors and ESCs on the wings", partIds:["nacelles","motors","escs"] },
    { id:"en_asm_2", title:"Fit the avionics, GPS and camera in the airframe", partIds:["mount_set","gps","fpv_camera"] },
    { id:"en_asm_3", title:"Install the 8S battery and verify the center of gravity", partIds:["battery","battery_tray"] },
    { id:"en_asm_4", title:"Fit props last and complete an approved incremental flight-test program", partIds:["motors","flight_controller"] },
  ] },
];

export const ENDURANCE_DRONE = {
  key:"endurance" as const,
  projectId:"endurance-drone-01",
  name:"Endurance Drone",
  eyebrow:"REFERENCE 24 · BLENDED-WING UAV",
  description:"Long-range blended-wing-body UAV with twin tractor motors on 8S, an H7 autopilot and GPS, LiDAR and mmWave sensing for efficient day-and-night survey missions.",
  briefTitle:"Thân cánh liền khối.\nHai động cơ kéo.\nBay xa cả ngày lẫn đêm.",
  tags:["BLENDED WING","8S TWIN MOTOR","LIDAR + RADAR"],
  visual:"",
  originalPrompt:"Design a long-range blended-wing-body UAV with twin tractor motors on 8S, an H7 autopilot and GPS, LiDAR and mmWave sensing.",
  plan:"Requirements → blended-wing airframe → twin propulsion → autopilot & navigation sensors → HV power → CG & safety setup → approved incremental flight tests",
  notes:["long-range UAV","blended wing body","twin tractor 8S","LiDAR + radar navigation"],
  componentCount:enduranceParts.length,
};

export function buildEnduranceCadProject(request = ENDURANCE_DRONE.originalPrompt, baseVersion = 1): CadProjectResult {
  const scene: CadProjectResult["scene"] = [
    { id:"center-body", label:"Blended center body", kind:"box", size:[220,60,320], position:[0,80,0], color:"#6b7078", role:"enclosure" },
    { id:"left-wing", label:"Left wing", kind:"plate", size:[420,26,300], position:[-300,84,20], rotation:[0,0,0.05], color:"#7b8088", role:"enclosure" },
    { id:"right-wing", label:"Right wing", kind:"plate", size:[420,26,300], position:[300,84,20], rotation:[0,0,-0.05], color:"#7b8088", role:"enclosure" },
    { id:"winglet-left", label:"Left winglet", kind:"plate", size:[20,90,140], position:[-505,120,20], color:"#646a73", role:"enclosure" },
    { id:"winglet-right", label:"Right winglet", kind:"plate", size:[20,90,140], position:[505,120,20], color:"#646a73", role:"enclosure" },
    { id:"nacelle-left", label:"Left motor nacelle", kind:"cylinder", size:[36,90,36], position:[-150,96,-140], rotation:[1.57,0,0], color:"#30363d", role:"component" },
    { id:"nacelle-right", label:"Right motor nacelle", kind:"cylinder", size:[36,90,36], position:[150,96,-140], rotation:[1.57,0,0], color:"#30363d", role:"component" },
    { id:"motor-left", label:"Left tractor motor", kind:"motor", size:[28,34,28], position:[-150,96,-185], rotation:[1.57,0,0], color:"#242831", role:"component" },
    { id:"motor-right", label:"Right tractor motor", kind:"motor", size:[28,34,28], position:[150,96,-185], rotation:[1.57,0,0], color:"#242831", role:"component" },
    { id:"prop-left", label:"Left propeller", kind:"propeller", size:[240,10,30], position:[-150,96,-210], rotation:[1.57,0,0], color:"#171a20", opacity:0.9, role:"component" },
    { id:"prop-right", label:"Right propeller", kind:"propeller", size:[240,10,30], position:[150,96,-210], rotation:[1.57,0,0], color:"#171a20", opacity:0.9, role:"component" },
    { id:"fc", label:"Kakute H7 FC", kind:"pcb", size:[40,16,40], position:[0,96,-20], color:"#248c5b", role:"component" },
    { id:"battery", label:"8S LiPo", kind:"battery", size:[70,50,160], position:[0,60,40], color:"#242322", role:"component" },
    { id:"gps", label:"GPS module", kind:"pcb", size:[36,10,36], position:[0,118,60], color:"#38424f", role:"component" },
    { id:"camera", label:"FPV camera + sensors", kind:"box", size:[40,26,26], position:[0,80,-150], color:"#1c1f24", role:"component" },
  ];
  // Author at true proportions, then scale into the shared viewport's fit range.
  const viewScale = 0.5;
  const scaledScene: CadProjectResult["scene"] = scene.map((primitive) => ({
    ...primitive,
    size:[primitive.size[0]*viewScale, primitive.size[1]*viewScale, primitive.size[2]*viewScale] as [number, number, number],
    position:[primitive.position[0]*viewScale, primitive.position[1]*viewScale, primitive.position[2]*viewScale] as [number, number, number],
  }));
  return {
    projectId:ENDURANCE_DRONE.projectId,
    draftId:`endurance-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[1100,400,500], clearanceMm:2, wallThicknessMm:3, printer:"FDM" },
    operations:[
      { id:"op-en01", type:"create_box", label:"Build the blended-wing-body airframe", parameters:{ wingspanMm:1050 } },
      { id:"op-en02", type:"place_component", label:"Install twin wing tractor motors and nacelles", parameters:{ motors:2 } },
      { id:"op-en03", type:"place_component", label:"Place the H7 autopilot and GPS", parameters:{ avionics:2 } },
      { id:"op-en04", type:"place_component", label:"Fit LiDAR, mmWave radar and FPV camera", parameters:{ sensors:3 } },
      { id:"op-en05", type:"place_component", label:"Install the 8S battery on the CG tray", parameters:{ component:"battery" } },
    ],
    validation:{ passed:true, score:92, checksPassed:13, checksTotal:14, issues:[{ severity:"info", code:"FIXED_WING_PREFLIGHT", message:"Verify center of gravity, control direction, HV isolation and failsafe before flight." }] },
    metrics:{ dimensionsMm:[1050,320,500], estimatedPrintMinutes:1400, estimatedMaterialGrams:520, primitiveCount:scene.length },
    scene:scaledScene,
  };
}
