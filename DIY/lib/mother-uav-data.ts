import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const motherUavParts: ProjectPart[] = [
  p({ id:"MU01", exportId:"carrier_flight_controller", name:"Carrier flight controller", productName:"Cube Orange+ Autopilot", description:"Redundant carrier autopilot for navigation, geofencing and safe return-to-home.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:349, color:"orange", pins:"CAN · UART · PWM · I2C · POWER", dimensions:"80x80x37mm", purchaseUrl:"https://www.cubepilot.org/", sourceName:"CubePilot", sourceStatus:"Reference configuration" }),
  p({ id:"MU02", exportId:"mission_computer", name:"Mission computer", productName:"Raspberry Pi Compute Module 4", description:"Runs fleet scheduling, mapping workloads and docking supervision without flight-critical authority.", category:"electrical", subtype:"mcu", type:"COMPUTE", qty:1, price:95, color:"orange", pins:"ETH · USB · UART · GPIO · 5V", dimensions:"55x40x4.7mm", purchaseUrl:"https://www.raspberrypi.com/products/compute-module-4/", sourceName:"Raspberry Pi", sourceStatus:"Official product reference" }),
  p({ id:"MU03", exportId:"carrier_motor", name:"Twin propulsion motors", productName:"Industrial 12S Electric Pusher Motor", description:"Matched electric propulsion pair sized for low-noise survey flight and single-motor recovery.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:2, price:420, color:"blue", pins:"PHASE A · B · C", dimensions:"110x110x95mm", purchaseUrl:"", sourceName:"Engineering estimate", sourceStatus:"Select after thrust-bench validation" }),
  p({ id:"MU04", exportId:"carrier_esc", name:"High-voltage ESC", productName:"120A 12S Opto ESC with telemetry", description:"Telemetry-enabled motor controllers with temperature and current monitoring.", category:"electrical", subtype:"power", type:"POWER", qty:2, price:185, color:"red", pins:"BAT+ · BAT− · PWM · TELEMETRY", dimensions:"105x48x28mm", purchaseUrl:"", sourceName:"Engineering estimate", sourceStatus:"Reference class" }),
  p({ id:"MU05", exportId:"carrier_battery", name:"Carrier energy pack", productName:"12S 60Ah Smart Li-ion Battery", description:"Serviceable battery module with BMS, temperature sensing and fire-resistant enclosure.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:1800, color:"red", pins:"HV+ · HV− · CAN · SERVICE", dimensions:"520x220x180mm", purchaseUrl:"", sourceName:"Custom battery integrator", sourceStatus:"Professional assembly required" }),
  p({ id:"MU06", exportId:"power_distribution", name:"Power management", productName:"Dual-bus HV Power Distribution Unit", description:"Isolates propulsion, avionics and dock charging buses with current sensing and contactors.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:420, color:"red", pins:"HV IN · MOTOR L/R · 24V · 12V · 5V · CAN", dimensions:"240x150x55mm", purchaseUrl:"", sourceName:"Engineering estimate", sourceStatus:"Custom integration" }),
  p({ id:"MU07", exportId:"rtk_gnss", name:"RTK navigation", productName:"Dual-band RTK GNSS + Compass", description:"High-integrity navigation and time synchronization for carrier and micro-UAV fleet.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:2, price:260, color:"lime", pins:"CAN · UART · 5V", dimensions:"75x75x25mm", purchaseUrl:"", sourceName:"Reference estimate", sourceStatus:"Dual-antenna configuration" }),
  p({ id:"MU08", exportId:"adsb_safety", name:"Airspace awareness", productName:"ADS-B In / Remote ID Safety Module", description:"Cooperative airspace awareness and compliant identification for approved civil operations.", category:"electrical", subtype:"communication", type:"SAFETY", qty:1, price:390, color:"violet", pins:"CAN · UART · 5V", dimensions:"90x55x20mm", purchaseUrl:"", sourceName:"Reference estimate", sourceStatus:"Regulatory fit depends on location" }),
  p({ id:"MU09", exportId:"telemetry_link", name:"Long-range telemetry", productName:"Encrypted LTE / ISM Telemetry Gateway", description:"Mission data link with encrypted command channel and automatic loss-of-link behavior.", category:"electrical", subtype:"communication", type:"MODULE", qty:1, price:480, color:"violet", pins:"ETH · UART · CAN · 12V", dimensions:"150x100x35mm", purchaseUrl:"", sourceName:"Reference estimate", sourceStatus:"Civil spectrum configuration" }),
  p({ id:"MU10", exportId:"mapping_camera", name:"Mapping payload", productName:"20MP Stabilized Survey Camera", description:"Nadir mapping camera for disaster assessment, agriculture and environmental monitoring.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:650, color:"lime", pins:"ETH · TRIGGER · 12V", dimensions:"120x95x110mm", purchaseUrl:"", sourceName:"Reference estimate", sourceStatus:"Non-weaponized imaging payload" }),
  p({ id:"MU11", exportId:"weather_sensor", name:"Weather sensing", productName:"Compact Air-data and Weather Module", description:"Measures airspeed, pressure, temperature and wind trend for safe launch decisions.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:175, color:"lime", pins:"CAN · I2C · 5V", dimensions:"95x45x35mm", purchaseUrl:"", sourceName:"Reference estimate", sourceStatus:"Calibrate before operation" }),
  p({ id:"MU12", exportId:"dock_controller", name:"Dock supervisor", productName:"Six-bay Docking Safety Controller", description:"Controls door interlocks, charging contacts, identification and health checks for six micro-UAVs.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:240, color:"orange", pins:"CAN · ETH · 6x DOCK I/O · 24V", dimensions:"180x120x32mm", purchaseUrl:"", sourceName:"Custom controller", sourceStatus:"Project-specific PCB" }),
  p({ id:"MU13", exportId:"charging_dock", name:"Smart docking cells", productName:"Micro-UAV Charging and Retention Dock", description:"Padded service cell with keyed contacts, presence sensing and mechanical restraint.", category:"electrical", subtype:"power", type:"DOCK", qty:6, price:115, color:"cyan", pins:"24V · CAN · PRESENCE · LOCK", dimensions:"330x240x150mm", purchaseUrl:"", sourceName:"In-house fabrication", sourceStatus:"Build from project CAD" }),
  p({ id:"MU14", exportId:"micro_uav", name:"Micro-UAV fleet", productName:"Foldable Civil Inspection Quadcopter", description:"Camera-only micro-UAV with propeller guards, Remote ID and independent return-to-home.", category:"electrical", subtype:"actuator", type:"FLEET", qty:6, price:480, color:"blue", pins:"DOCK+ · DOCK− · CAN · USB", dimensions:"300x240x105mm", purchaseUrl:"", sourceName:"Reference estimate", sourceStatus:"Non-weaponized inspection configuration" }),
  p({ id:"MU15", exportId:"recovery_beacon", name:"Recovery beacon", productName:"Independent GNSS / LTE Recovery Beacon", description:"Separate battery-backed beacon for locating the aircraft after an emergency landing.", category:"electrical", subtype:"communication", type:"SAFETY", qty:1, price:120, color:"violet", pins:"12V · BACKUP CELL", dimensions:"80x45x22mm", purchaseUrl:"", sourceName:"Reference estimate", sourceStatus:"Independent safety channel" }),
  p({ id:"MU16", exportId:"main_wing", name:"High-aspect-ratio wing", productName:"Composite Carrier Wing Set", description:"Modular carbon-spar wing optimized for endurance and field transport.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:1800, color:"slate", pins:"", dimensions:"4800x1000x95mm", purchaseUrl:"", sourceName:"In-house composite fabrication", sourceStatus:"Requires structural validation" }),
  p({ id:"MU17", exportId:"carrier_fuselage", name:"Carrier fuselage", productName:"Composite Mother UAV Fuselage", description:"Central fuselage housing avionics, energy pack and six-cell service bay.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:1300, color:"slate", pins:"", dimensions:"3100x800x950mm", purchaseUrl:"", sourceName:"In-house composite fabrication", sourceStatus:"Project CAD reference" }),
  p({ id:"MU18", exportId:"cargo_rack", name:"Six-cell bay rack", productName:"Modular Micro-UAV Service Rack", description:"Fire-separated rack that supports retention, charging and maintenance access.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:1, price:520, color:"cyan", pins:"", dimensions:"1500x650x500mm", purchaseUrl:"", sourceName:"In-house fabrication", sourceStatus:"Build from project CAD" }),
  p({ id:"MU19", exportId:"bay_doors", name:"Interlocked service doors", productName:"Dual Cargo-bay Access Door System", description:"Ground-service doors with mechanical latches and position sensors; no in-flight release mode.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:2, price:160, color:"cyan", pins:"", dimensions:"1500x440x35mm", purchaseUrl:"", sourceName:"In-house fabrication", sourceStatus:"Ground access only" }),
  p({ id:"MU20", exportId:"landing_gear", name:"Landing gear", productName:"Wide-track Composite Landing Gear", description:"Stable ground handling with energy-absorbing wheels for prepared-field operation.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:460, color:"slate", pins:"", dimensions:"1600x520x580mm", purchaseUrl:"", sourceName:"Reference estimate", sourceStatus:"Select for final mass" }),
  p({ id:"MU21", exportId:"fire_containment", name:"Battery containment", productName:"Vented Fire-resistant Battery Enclosure", description:"Thermal monitoring, pressure venting and electrical isolation around the carrier battery.", category:"mechanical", subtype:"structural", type:"SAFETY", qty:1, price:340, color:"slate", pins:"", dimensions:"620x300x240mm", purchaseUrl:"", sourceName:"In-house fabrication", sourceStatus:"Professional review required" }),
  p({ id:"MU22", exportId:"carrier_propeller", name:"Low-noise propellers", productName:"Matched 22-inch Composite Pusher Propeller", description:"Balanced low-noise propeller pair for the carrier propulsion system.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:2, price:95, color:"cyan", pins:"", dimensions:"560x560x35mm", purchaseUrl:"", sourceName:"Reference estimate", sourceStatus:"Match to motor test data" }),
  p({ id:"MU23", exportId:"service_hardware", name:"Service hardware", productName:"Aviation Fasteners, Harnesses and Labels", description:"Locking fasteners, strain relief, high-voltage labels and keyed service connectors.", category:"mechanical", subtype:"misc", type:"MISC", qty:1, price:280, color:"slate", pins:"", dimensions:"Assorted", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Final quantity after CAD freeze" }),
];

export const motherUavElectricalConnections = [
  { source:"carrier_battery", target:"power_distribution", type:"power", voltage:"44.4V", current:"160A peak", label:"Protected HV battery bus" },
  { source:"power_distribution", target:"carrier_esc", type:"power", voltage:"44.4V", current:"120A/channel", label:"Twin propulsion feeds" },
  { source:"carrier_esc", target:"carrier_motor", type:"power", voltage:"3-phase", current:"Telemetry monitored", label:"Motor phase connection" },
  { source:"carrier_flight_controller", target:"carrier_esc", type:"data", protocol:"PWM + UART", label:"Throttle command and ESC telemetry" },
  { source:"power_distribution", target:"carrier_flight_controller", type:"power", voltage:"5V redundant", current:"3A", label:"Redundant avionics power" },
  { source:"carrier_flight_controller", target:"mission_computer", type:"data", protocol:"MAVLink / Ethernet", label:"Supervised mission interface" },
  { source:"carrier_flight_controller", target:"rtk_gnss", type:"data", protocol:"CAN", label:"Dual GNSS navigation" },
  { source:"carrier_flight_controller", target:"adsb_safety", type:"data", protocol:"UART", label:"Airspace awareness" },
  { source:"mission_computer", target:"telemetry_link", type:"data", protocol:"Ethernet", label:"Encrypted mission telemetry" },
  { source:"mission_computer", target:"mapping_camera", type:"data", protocol:"Ethernet + trigger", label:"Survey image capture" },
  { source:"carrier_flight_controller", target:"weather_sensor", type:"data", protocol:"CAN", label:"Air-data input" },
  { source:"mission_computer", target:"dock_controller", type:"data", protocol:"CAN + Ethernet", label:"Fleet and dock supervision" },
  { source:"power_distribution", target:"dock_controller", type:"power", voltage:"24V", current:"40A max", label:"Isolated dock power" },
  { source:"dock_controller", target:"charging_dock", type:"power", voltage:"24V", current:"6A/cell", label:"Current-limited dock charging" },
  { source:"dock_controller", target:"charging_dock", type:"data", protocol:"CAN", label:"Presence, lock and battery health" },
  { source:"charging_dock", target:"micro_uav", type:"power", voltage:"Dock regulated", current:"Per-UAV BMS limit", label:"Keyed charging contact" },
  { source:"charging_dock", target:"micro_uav", type:"data", protocol:"CAN", label:"Identity and readiness check" },
  { source:"power_distribution", target:"recovery_beacon", type:"power", voltage:"12V", current:"Backup charged", label:"Independent recovery channel" },
];

export const motherUavMechanicalConnections = [
  { source:"main_wing", target:"carrier_fuselage", label:"Four-point spar carry-through" },
  { source:"carrier_motor", target:"main_wing", label:"Twin vibration-isolated nacelles" },
  { source:"carrier_propeller", target:"carrier_motor", label:"Matched keyed propeller hubs" },
  { source:"cargo_rack", target:"carrier_fuselage", label:"Six-point crash-load frame" },
  { source:"charging_dock", target:"cargo_rack", label:"Six removable service cells" },
  { source:"micro_uav", target:"charging_dock", label:"Padded restraint and keyed contacts" },
  { source:"bay_doors", target:"carrier_fuselage", label:"Ground-service hinge and safety latch" },
  { source:"carrier_battery", target:"fire_containment", label:"Sliding insulated battery tray" },
  { source:"fire_containment", target:"carrier_fuselage", label:"Vented structural cradle" },
  { source:"landing_gear", target:"carrier_fuselage", label:"Energy-absorbing hard points" },
  { source:"mapping_camera", target:"carrier_fuselage", label:"Nadir vibration-isolated gimbal" },
  { source:"rtk_gnss", target:"carrier_fuselage", label:"Separated dorsal antenna mounts" },
  { source:"weather_sensor", target:"carrier_fuselage", label:"Clean-air mast and pitot bracket" },
  { source:"recovery_beacon", target:"carrier_fuselage", label:"Externally accessible safety bay" },
];

export const motherUavInstructionPreamble: InstructionPreamble = {
  tools:["Composite fabrication tools and PPE","Calibrated torque tools","HV-rated multimeter and insulation tester","CAN / UART diagnostic interface","Battery-safe workbench and fire containment","Propulsion thrust stand","Aircraft scales and CG fixture","Ground-control station with approved geofence data"],
  assumptions:["Civil STEM, research, mapping or search-and-rescue use only","No weapons or hazardous payloads","All micro-UAV doors are ground-service only","Operations require local aviation approval and a documented safety case","Propellers remain removed during all electrical and software bring-up"],
};

export const motherUavInstructionSteps: InstructionSection[] = [
  { id:"fabricate", title:"Airframe & service-bay fabrication", subSteps:[
    { id:"mother_fab_1", title:"Fabricate and inspect the composite wing carry-through and fuselage shells", partIds:["main_wing","carrier_fuselage"] },
    { id:"mother_fab_2", title:"Build the fire-separated six-cell rack and verify service access", partIds:["cargo_rack","fire_containment"] },
    { id:"mother_fab_3", title:"Install ground-service doors, latches and mechanical position stops", partIds:["bay_doors","carrier_fuselage"] },
    { id:"mother_fab_4", title:"Dry-fit landing gear, propulsion nacelles and sensor mounts", partIds:["landing_gear","carrier_motor","rtk_gnss","weather_sensor"] },
  ] },
  { id:"wire", title:"Power, avionics & dock wiring", subSteps:[
    { id:"mother_wire_1", title:"Install the isolated HV, avionics and dock power buses", partIds:["carrier_battery","power_distribution","fire_containment"] },
    { id:"mother_wire_2", title:"Connect twin ESCs and motors with current and temperature telemetry", partIds:["carrier_esc","carrier_motor"] },
    { id:"mother_wire_3", title:"Wire autopilot, mission computer, GNSS, air-data and airspace modules", partIds:["carrier_flight_controller","mission_computer","rtk_gnss","weather_sensor","adsb_safety"] },
    { id:"mother_wire_4", title:"Connect the docking supervisor to six current-limited service cells", partIds:["dock_controller","charging_dock"] },
    { id:"mother_wire_5", title:"Verify insulation, bonding, polarity and emergency isolation before energizing", partIds:["power_distribution","service_hardware"] },
  ] },
  { id:"bringup", title:"Software, simulation & safety gates", subSteps:[
    { id:"mother_test_1", title:"Bring up avionics on current-limited bench power with propulsion disconnected", partIds:["carrier_flight_controller","mission_computer"] },
    { id:"mother_test_2", title:"Configure geofence, return-to-home, Remote ID and loss-of-link behavior", partIds:["carrier_flight_controller","adsb_safety","telemetry_link"] },
    { id:"mother_test_3", title:"Validate each docking cell using an instrumented dummy load", partIds:["dock_controller","charging_dock"] },
    { id:"mother_test_4", title:"Register six micro-UAV identities and confirm independent return-to-home", partIds:["micro_uav","dock_controller"] },
    { id:"mother_test_5", title:"Run structural, thermal, electrical and CFD simulation gates", partIds:["main_wing","carrier_battery","carrier_motor"] },
    { id:"mother_test_6", title:"Complete restrained propulsion and electromagnetic-compatibility tests", partIds:["carrier_motor","carrier_esc","rtk_gnss"] },
  ] },
  { id:"assemble", title:"Final assembly & approved field trial", subSteps:[
    { id:"mother_asm_1", title:"Join wing and fuselage, then torque and witness-mark every primary fastener", partIds:["main_wing","carrier_fuselage","service_hardware"] },
    { id:"mother_asm_2", title:"Install battery enclosure, verify CG and record mass properties", partIds:["carrier_battery","fire_containment"] },
    { id:"mother_asm_3", title:"Load six inspection UAVs and complete dock retention checks on the ground", partIds:["micro_uav","charging_dock","bay_doors"] },
    { id:"mother_asm_4", title:"Perform low-speed taxi, single-system fault and recovery-beacon tests", partIds:["landing_gear","recovery_beacon"] },
    { id:"mother_asm_5", title:"Conduct an approved incremental flight-test program without in-flight deployment", partIds:["carrier_flight_controller","mapping_camera"] },
  ] },
];

export const MOTHER_UAV = {
  key:"mother" as const,
  projectId:"mother-uav-civil-carrier-01",
  name:"Mother UAV Carrier",
  eyebrow:"REFERENCE 03 · MULTI-UAV CARRIER",
  description:"Non-weaponized electric carrier for transporting, charging and servicing six camera-equipped micro-UAVs used in mapping, environmental monitoring and search-and-rescue.",
  briefTitle:"Một tàu mẹ.\nSáu UAV con.\nMột nhiệm vụ an toàn.",
  tags:["SEARCH & RESCUE","6-DRONE DOCK","NON-WEAPONIZED"],
  visual:"/mother-uav-visual.png",
  originalPrompt:"Design a peaceful civil Mother UAV carrier for six inspection micro-UAVs.",
  plan:"Safety case → airframe sizing → isolated power architecture → six-cell docking rack → digital twin → ground tests → incremental approved flight tests",
  notes:["civil research","six service docks","ground-service doors only","non-weaponized"],
  componentCount:motherUavParts.length,
};

export function buildMotherUavCadProject(request = MOTHER_UAV.originalPrompt, baseVersion = 1): CadProjectResult {
  const scene: CadProjectResult["scene"] = [
    { id:"fuselage", label:"Composite carrier fuselage", kind:"box", size:[800,700,3100], position:[0,330,0], color:"#e7e9eb", role:"enclosure" },
    { id:"main-wing", label:"High-aspect-ratio main wing", kind:"plate", size:[4800,80,1000], position:[0,560,-150], color:"#e3e6e8", role:"enclosure" },
    { id:"tailplane", label:"Twin-tail horizontal stabilizer", kind:"plate", size:[2100,55,540], position:[0,620,1250], color:"#d8dcdf", role:"enclosure" },
    { id:"tail-left", label:"Left vertical stabilizer", kind:"plate", size:[55,680,480], position:[-760,870,1270], color:"#ccd2d6", role:"enclosure" },
    { id:"tail-right", label:"Right vertical stabilizer", kind:"plate", size:[55,680,480], position:[760,870,1270], color:"#ccd2d6", role:"enclosure" },
    { id:"motor-left", label:"Left electric pusher motor", kind:"motor", size:[110,130,110], position:[-1400,650,300], rotation:[1.57,0,0], color:"#252a30", role:"component" },
    { id:"motor-right", label:"Right electric pusher motor", kind:"motor", size:[110,130,110], position:[1400,650,300], rotation:[1.57,0,0], color:"#252a30", role:"component" },
    { id:"prop-left", label:"Left low-noise propeller", kind:"propeller", size:[560,12,45], position:[-1400,670,420], color:"#24272b", role:"component" },
    { id:"prop-right", label:"Right low-noise propeller", kind:"propeller", size:[560,12,45], position:[1400,670,420], color:"#24272b", role:"component" },
    { id:"cargo-rack", label:"Six-cell service rack", kind:"box", size:[650,470,1500], position:[0,260,220], color:"#30363d", opacity:.92, role:"mount" },
    { id:"autopilot", label:"Carrier autopilot", kind:"pcb", size:[80,37,80], position:[0,650,-520], color:"#e48435", role:"component" },
    { id:"battery", label:"12S smart battery enclosure", kind:"battery", size:[520,180,220], position:[0,115,930], color:"#343940", role:"component" },
    { id:"camera", label:"Survey camera gimbal", kind:"cylinder", size:[120,120,120], position:[0,-40,-1180], color:"#22262c", role:"component" },
    ...Array.from({ length:6 }, (_, index) => ({ id:`micro-uav-${index+1}`, label:`Inspection micro-UAV ${index+1}`, kind:"box" as const, size:[250,90,210] as [number,number,number], position:[index%2===0?-175:175, index<2?390:index<4?100:-190, 120+(index%3)*390] as [number,number,number], color:"#f1f3f4", role:"component" as const })),
  ];
  return {
    projectId:MOTHER_UAV.projectId,
    draftId:`mother-carrier-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[5000,3400,1200], clearanceMm:2, wallThicknessMm:3, printer:"FDM" },
    operations:[
      { id:"op-m01", type:"create_box", label:"Size 4.8 m composite carrier airframe", parameters:{ wingspanMm:4800 } },
      { id:"op-m02", type:"create_box", label:"Create six-cell fire-separated service bay", parameters:{ cells:6 } },
      { id:"op-m03", type:"place_component", label:"Place redundant autopilot and mission computer", parameters:{ redundancy:"supervised" } },
      { id:"op-m04", type:"place_component", label:"Place isolated 12S propulsion and 24V dock buses", parameters:{ isolation:true } },
      { id:"op-m05", type:"create_cylinder", label:"Install twin electric pusher propulsion", parameters:{ count:2 } },
      { id:"op-m06", type:"add_pcb_mount", label:"Install six keyed smart docking cells", parameters:{ count:6 } },
      { id:"op-m07", type:"add_cutout", label:"Add ground-service bay doors and interlocks", parameters:{ inFlightRelease:false } },
      { id:"op-m08", type:"place_component", label:"Place RTK, ADS-B, Remote ID and recovery beacon", parameters:{ safetySystems:4 } },
    ],
    validation:{ passed:true, score:94, checksPassed:15, checksTotal:15, issues:[{ severity:"info", code:"CIVIL_SAFETY_CASE", message:"Final operation requires structural substantiation, aviation approval and an incremental flight-test program." }] },
    metrics:{ dimensionsMm:[4800,3100,950], estimatedPrintMinutes:1800, estimatedMaterialGrams:1250, primitiveCount:scene.length },
    scene,
  };
}
