import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const observerParts: ProjectPart[] = [
  p({ id:"OB01", exportId:"flight_controller", name:"Main flight controller", productName:"Pixhawk Cube Orange", description:"High-performance autopilot with redundant IMUs for stable autonomous flight, waypoint missions and position hold.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:300, color:"orange", pins:"CAN · UART · PWM · I2C · POWER", dimensions:"38x38x22mm", purchaseUrl:"https://www.cubepilot.org/", sourceName:"CubePilot", sourceStatus:"Official product reference" }),
  p({ id:"OB02", exportId:"gnss_compass", name:"GPS / compass module", productName:"Here3 CAN GPS Module", description:"Precise GNSS positioning and heading over CAN for waypoint navigation and reliable position hold.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:150, color:"lime", pins:"CAN · 5V", dimensions:"Ø65x18mm", purchaseUrl:"https://www.cubepilot.org/", sourceName:"CubePilot", sourceStatus:"Official product reference" }),
  p({ id:"OB03", exportId:"observation_camera", name:"Low-light observation camera", productName:"RunCam Night Eagle 3", description:"High-sensitivity camera for dawn/dusk inspection, monitoring and documentation in low light.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:50, color:"lime", pins:"VIDEO · 5V · GND", dimensions:"19x19x19mm", purchaseUrl:"https://runcam.com/", sourceName:"RunCam", sourceStatus:"Official product reference · civil imaging" }),
  p({ id:"OB04", exportId:"power_sensor", name:"Current / voltage sensor", productName:"Mauch PL-100 Sensor", description:"Precision power monitoring for battery state, range estimation and safe return-to-home triggers.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:50, color:"lime", pins:"HALL · ADC · POWER", dimensions:"35x15x12mm", purchaseUrl:"https://www.mauch-electronic.com/", sourceName:"Mauch Electronic", sourceStatus:"Official product reference" }),
  p({ id:"OB05", exportId:"motors", name:"Propulsion motors ×4", productName:"T-Motor MN3110 470KV", description:"Efficient brushless motors sized for a stable, long-endurance camera platform.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:4, price:60, color:"blue", pins:"PHASE A · B · C", dimensions:"Ø41x27mm", purchaseUrl:"https://store.tmotor.com/", sourceName:"T-Motor", sourceStatus:"Official product reference" }),
  p({ id:"OB06", exportId:"escs", name:"ESCs ×4", productName:"Holybro Tekko32 65A", description:"Telemetry-capable speed controllers, one per motor, with smooth low-noise throttle response.", category:"electrical", subtype:"power", type:"POWER", qty:4, price:25, color:"red", pins:"BAT+ · BAT− · PWM · TLM", dimensions:"45x20x9mm", purchaseUrl:"https://holybro.com/", sourceName:"Holybro", sourceStatus:"Official product reference" }),
  p({ id:"OB07", exportId:"flight_battery", name:"Main flight battery", productName:"Tattu 6S 10000mAh LiPo", description:"High-capacity 6S pack for extended hover endurance under the camera payload.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:160, color:"red", pins:"VBAT+ · VBAT− · BALANCE", dimensions:"170x69x47mm", purchaseUrl:"https://www.gensace.de/", sourceName:"Tattu / Gens Ace", sourceStatus:"Retail listing · handle per LiPo safety" }),
  p({ id:"OB08", exportId:"telemetry_modem", name:"Long-range telemetry", productName:"RFD900x 900MHz Modem", description:"Robust long-range command-and-telemetry link on licensed civil ISM spectrum.", category:"electrical", subtype:"communication", type:"MODULE", qty:1, price:120, color:"violet", pins:"UART · 5V · ANT", dimensions:"30x57x13mm", purchaseUrl:"https://rfdesign.com.au/", sourceName:"RFDesign", sourceStatus:"Civil ISM band · check local rules" }),
  p({ id:"OB09", exportId:"video_tx", name:"Video transmitter", productName:"Rush Tank Solo VTX", description:"Analog FPV video downlink for live piloting and framing of the camera view.", category:"electrical", subtype:"communication", type:"MODULE", qty:1, price:40, color:"violet", pins:"VIDEO · 5V · ANT", dimensions:"30x30x8mm", purchaseUrl:"https://www.rushfpv.com/", sourceName:"RushFPV", sourceStatus:"Set legal power/band for your region" }),
  p({ id:"OB10", exportId:"camera_gimbal", name:"2-axis camera gimbal", productName:"Tarot T-2D Brushless Gimbal", description:"Stabilizes the observation camera for steady inspection footage and mapping stills.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:1, price:130, color:"blue", pins:"PWM · POWER", dimensions:"120x110x95mm", purchaseUrl:"https://www.tarot-rc.com/", sourceName:"Tarot", sourceStatus:"Official product reference" }),
  p({ id:"OB11", exportId:"frame", name:"Carbon quad frame", productName:"Readytosky 450mm Carbon Frame Kit", description:"Lightweight rigid 450 mm quad frame with integrated arms and power routing.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:35.99, color:"slate", pins:"", dimensions:"450mm diagonal", purchaseUrl:"https://www.readytosky.com/", sourceName:"Readytosky", sourceStatus:"Official product reference" }),
  p({ id:"OB12", exportId:"gps_mast", name:"Folding GPS mast", productName:"Aluminum Folding GPS Mount", description:"Elevates the GNSS module above the power electronics to reduce interference.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:1, price:7.99, color:"cyan", pins:"", dimensions:"Ø20x150mm", purchaseUrl:"", sourceName:"Generic mast", sourceStatus:"Reference class" }),
  p({ id:"OB13", exportId:"fc_damper", name:"FC anti-vibration mount", productName:"Pixhawk Anti-Vibration Plate", description:"Isolates the flight controller from motor vibration for clean IMU data.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:5.5, color:"slate", pins:"", dimensions:"45x45x14mm", purchaseUrl:"", sourceName:"Generic damper", sourceStatus:"Reference class" }),
  p({ id:"OB14", exportId:"battery_straps", name:"Battery straps ×2", productName:"Kevlar LiPo Battery Strap 250mm", description:"Heavy-duty straps securing the high-capacity flight battery to the tray.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:2, price:1.5, color:"orange", pins:"", dimensions:"250x20mm", purchaseUrl:"", sourceName:"Generic strap", sourceStatus:"Reference class" }),
  p({ id:"OB15", exportId:"canopy", name:"Aerodynamic canopy", productName:"3D Printed Aerodynamic Canopy", description:"Printed top canopy that protects the electronics stack and reduces drag.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:2.5, color:"violet", pins:"", dimensions:"PETG · 15% gyroid infill", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"OB16", exportId:"mount_set", name:"Mount & bracket set", productName:"3D Printed Mounts (gimbal, ESC, motor, antenna)", description:"Gimbal mount, four ESC and motor brackets and telemetry/VTX antenna brackets.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:18, color:"violet", pins:"", dimensions:"PETG / TPU · 30-100% infill", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"OB17", exportId:"fastener_kit", name:"Fastener kit", productName:"M3 Socket Head Screws & Hardware", description:"General assembly hardware for mounts, arms and frame plates.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:1.2, color:"slate", pins:"", dimensions:"M3x12mm assorted", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Finalize after CAD freeze" }),
];

export const observerElectricalConnections = [
  { source:"flight_battery", target:"power_sensor", type:"power", voltage:"22.2V", current:"80A peak", label:"Battery through power sensor" },
  { source:"power_sensor", target:"escs", type:"power", voltage:"22.2V", current:"65A/ch", label:"Motor power bus" },
  { source:"escs", target:"motors", type:"power", voltage:"3-phase", current:"Per-motor", label:"Motor phases" },
  { source:"power_sensor", target:"flight_controller", type:"data", protocol:"ADC", label:"Battery voltage & current" },
  { source:"flight_controller", target:"escs", type:"data", protocol:"PWM / DShot", sourcePin:"M1-M4", targetPin:"SIG", label:"Motor commands" },
  { source:"flight_controller", target:"gnss_compass", type:"data", protocol:"CAN", label:"Position & heading" },
  { source:"flight_controller", target:"telemetry_modem", type:"data", protocol:"UART", label:"Command & telemetry link" },
  { source:"flight_controller", target:"camera_gimbal", type:"data", protocol:"PWM", label:"Gimbal stabilization" },
  { source:"camera_gimbal", target:"observation_camera", type:"data", protocol:"Mount + power", label:"Stabilized camera" },
  { source:"observation_camera", target:"video_tx", type:"data", protocol:"Analog video", label:"FPV video downlink" },
];

export const observerMechanicalConnections = [
  { source:"motors", target:"frame", label:"Motor mounts on arms" },
  { source:"escs", target:"frame", label:"ESC brackets under arms" },
  { source:"flight_controller", target:"fc_damper", label:"Anti-vibration plate" },
  { source:"fc_damper", target:"frame", label:"Center-plate mounting" },
  { source:"gnss_compass", target:"gps_mast", label:"Elevated GNSS mast" },
  { source:"gps_mast", target:"frame", label:"Folding mast base" },
  { source:"camera_gimbal", target:"frame", label:"Forward gimbal mount" },
  { source:"observation_camera", target:"camera_gimbal", label:"Camera cradle" },
  { source:"flight_battery", target:"battery_straps", label:"Kevlar strap retention" },
  { source:"battery_straps", target:"frame", label:"Battery tray slots" },
  { source:"canopy", target:"frame", label:"Snap-fit canopy" },
  { source:"mount_set", target:"frame", label:"ESC/motor/antenna brackets" },
  { source:"fastener_kit", target:"frame", label:"Frame fasteners" },
];

export const observerInstructionPreamble: InstructionPreamble = {
  tools:["Soldering iron and flux","Wire strippers and heat-shrink","M3 hex keys and drivers","3D printer (PETG and TPU capable)","Multimeter and low-voltage bench supply","Propeller balancer","Digital scale and CG fixture","Ground-control station with geofence data"],
  assumptions:["Civil inspection, monitoring, mapping or photography use only","No weapons, jamming or covert-tracking payloads","Cameras and radios used only where legally permitted and with consent","Operation requires local aviation approval and Remote ID where mandated","Propellers stay removed during all electrical and software bring-up"],
};

export const observerInstructionSteps: InstructionSection[] = [
  { id:"fabricate", title:"Frame & printed-part preparation", subSteps:[
    { id:"ob_fab_1", title:"Assemble the carbon quad frame and check arm alignment", partIds:["frame","fastener_kit"] },
    { id:"ob_fab_2", title:"3D print the canopy, gimbal, ESC, motor and antenna mounts", partIds:["canopy","mount_set"] },
    { id:"ob_fab_3", title:"Dry-fit the GPS mast, gimbal and battery tray for clearance", partIds:["gps_mast","camera_gimbal","battery_straps"] },
  ] },
  { id:"wire", title:"Power & avionics wiring", subSteps:[
    { id:"ob_wire_1", title:"Wire the battery, power sensor and four ESCs", partIds:["flight_battery","power_sensor","escs"] },
    { id:"ob_wire_2", title:"Connect the four motors to their ESCs", partIds:["escs","motors"] },
    { id:"ob_wire_3", title:"Wire the flight controller to ESCs, GPS and telemetry modem", partIds:["flight_controller","escs","gnss_compass","telemetry_modem"] },
    { id:"ob_wire_4", title:"Connect the gimbal, camera and video transmitter", partIds:["camera_gimbal","observation_camera","video_tx"] },
    { id:"ob_wire_5", title:"Verify polarity, continuity and isolation before the first battery connection", partIds:["power_sensor","fastener_kit"] },
  ] },
  { id:"bringup", title:"Software & calibration", subSteps:[
    { id:"ob_test_1", title:"Bring up the autopilot on bench power with propellers removed", partIds:["flight_controller"] },
    { id:"ob_test_2", title:"Calibrate sensors, radio, GPS and the power module", partIds:["flight_controller","gnss_compass","power_sensor"] },
    { id:"ob_test_3", title:"Configure geofence, altitude limits, Remote ID and return-to-home", partIds:["flight_controller","telemetry_modem"] },
    { id:"ob_test_4", title:"Verify motor order and direction, then tune the gimbal", partIds:["escs","motors","camera_gimbal"] },
    { id:"ob_test_5", title:"Run mass-properties, symmetry and CFD aerodynamic gates in simulation", partIds:["frame","flight_battery","motors"] },
  ] },
  { id:"assemble", title:"Final assembly & approved flight test", subSteps:[
    { id:"ob_asm_1", title:"Mount motors and ESCs to the arms and route wiring", partIds:["motors","escs","frame"] },
    { id:"ob_asm_2", title:"Install the flight controller on its damper and fit the GPS mast", partIds:["flight_controller","fc_damper","gps_mast"] },
    { id:"ob_asm_3", title:"Fit the gimbal and camera, then set the video link", partIds:["camera_gimbal","observation_camera","video_tx"] },
    { id:"ob_asm_4", title:"Secure the battery, set center of gravity and record mass", partIds:["flight_battery","battery_straps"] },
    { id:"ob_asm_5", title:"Fit the canopy and propellers last, then complete an approved flight test", partIds:["canopy","motors"] },
  ] },
];

export const OBSERVER_MULTIROTOR = {
  key:"observer" as const,
  projectId:"observer-multirotor-civil-01",
  name:"Aerial Observation Multirotor",
  eyebrow:"REFERENCE 06 · CAMERA MULTIROTOR",
  description:"Non-weaponized long-endurance camera quadcopter with a stabilized gimbal for civil inspection, monitoring, mapping and aerial photography.",
  briefTitle:"Bay ổn định.\nQuan sát rõ nét.\nGiám sát hạ tầng.",
  tags:["CAMERA MULTIROTOR","INSPECTION","NON-WEAPONIZED"],
  visual:"",
  originalPrompt:"Design a civil long-endurance camera multirotor for inspection, monitoring and mapping.",
  plan:"Requirements → frame sizing → propulsion → autopilot + stabilized camera payload → digital twin → CFD and bench gates → approved incremental flight tests",
  notes:["civil inspection","stabilized camera","non-weaponized","operator supervised"],
  componentCount:observerParts.length,
};

export function buildObserverCadProject(request = OBSERVER_MULTIROTOR.originalPrompt, baseVersion = 1): CadProjectResult {
  const corners: Array<[string, number, number]> = [
    ["fl", -100, -100],
    ["fr", 100, -100],
    ["rl", -100, 100],
    ["rr", 100, 100],
  ];
  const scene: CadProjectResult["scene"] = [
    { id:"bottom-plate", label:"Center bottom plate", kind:"plate", size:[150,4,150], position:[0,20,0], color:"#2b2f35", role:"enclosure" },
    { id:"canopy", label:"Aerodynamic canopy", kind:"box", size:[92,30,120], position:[0,44,0], color:"#3a3f46", role:"enclosure" },
    ...corners.flatMap(([tag, x, z]) => [
      { id:`arm-${tag}`, label:`Arm ${tag.toUpperCase()}`, kind:"box" as const, size:[150,5,16] as [number, number, number], position:[x/2, 20, z/2] as [number, number, number], rotation:[0, Math.atan2(z, x), 0] as [number, number, number], color:"#24272b", role:"enclosure" as const },
      { id:`motor-${tag}`, label:`Motor ${tag.toUpperCase()}`, kind:"motor" as const, size:[16,20,16] as [number, number, number], position:[x, 28, z] as [number, number, number], color:"#242831", role:"component" as const },
      { id:`prop-${tag}`, label:`Propeller ${tag.toUpperCase()}`, kind:"propeller" as const, size:[120,4,16] as [number, number, number], position:[x, 42, z] as [number, number, number], color:"#171a20", opacity:0.9, role:"component" as const },
    ]),
    { id:"flight-controller", label:"Pixhawk Cube Orange", kind:"pcb", size:[40,20,40], position:[0,34,-6], color:"#e48435", role:"component" },
    { id:"gps-mast", label:"GPS mast", kind:"cylinder", size:[4,60,4], position:[-40,52,44], color:"#8a9099", role:"mount" },
    { id:"gps", label:"Here3 GPS", kind:"pcb", size:[34,10,34], position:[-40,86,44], color:"#38424f", role:"component" },
    { id:"battery", label:"6S 10000mAh LiPo", kind:"battery", size:[69,30,150], position:[0,10,20], color:"#242831", role:"component" },
    { id:"gimbal", label:"2-axis camera gimbal", kind:"box", size:[60,44,44], position:[0,-6,-96], color:"#30363d", role:"component" },
    { id:"camera", label:"Low-light camera", kind:"cylinder", size:[12,20,12], position:[0,-6,-120], rotation:[1.57,0,0], color:"#1c1f24", role:"component" },
  ];
  return {
    projectId:OBSERVER_MULTIROTOR.projectId,
    draftId:`observer-multirotor-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[560,560,260], clearanceMm:1.5, wallThicknessMm:2.4, printer:"FDM" },
    operations:[
      { id:"op-o01", type:"create_box", label:"Size 450 mm carbon quad frame", parameters:{ diagonalMm:450 } },
      { id:"op-o02", type:"place_component", label:"Place autopilot on anti-vibration plate at CG", parameters:{ component:"flight_controller" } },
      { id:"op-o03", type:"place_component", label:"Install four motors and telemetry ESCs", parameters:{ motors:4 } },
      { id:"op-o04", type:"place_component", label:"Place 6S battery on the tray", parameters:{ component:"flight_battery" } },
      { id:"op-o05", type:"place_component", label:"Mount GPS mast, telemetry and video links", parameters:{ payload:"navigation" } },
      { id:"op-o06", type:"add_pcb_mount", label:"Install the 2-axis stabilized camera gimbal", parameters:{ axes:2 } },
      { id:"op-o07", type:"place_component", label:"Fit the aerodynamic canopy over the stack", parameters:{ component:"canopy" } },
    ],
    validation:{ passed:true, score:95, checksPassed:12, checksTotal:12, issues:[{ severity:"info", code:"CIVIL_FLIGHT_GATE", message:"Verify center of gravity, motor direction, failsafe and legal camera/telemetry use before flight." }] },
    metrics:{ dimensionsMm:[450,450,220], estimatedPrintMinutes:640, estimatedMaterialGrams:210, primitiveCount:scene.length },
    scene,
  };
}
