import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const usvParts: ProjectPart[] = [
  p({ id:"US01", exportId:"marine_autopilot", name:"Marine autopilot", productName:"Pixhawk 6X Marine Autopilot", description:"Redundant navigation controller for heading, route following, geofence and safe return-to-home.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:520, color:"orange", pins:"CAN · UART · PWM · I2C · POWER", dimensions:"84x44x20mm", purchaseUrl:"https://holybro.com/products/pixhawk-6x", sourceName:"Holybro", sourceStatus:"Official product reference" }),
  p({ id:"US02", exportId:"mission_computer", name:"Mission computer", productName:"Raspberry Pi Compute Module 4 Marine Carrier", description:"Processes mapping, sensor logging, obstacle awareness and remote mission supervision.", category:"electrical", subtype:"mcu", type:"COMPUTE", qty:1, price:180, color:"orange", pins:"ETH · USB · UART · CAN · 5V", dimensions:"120x85x32mm", purchaseUrl:"https://www.raspberrypi.com/products/compute-module-4/", sourceName:"Raspberry Pi", sourceStatus:"Marine carrier estimate" }),
  p({ id:"US03", exportId:"electric_motor", name:"Twin electric propulsion", productName:"48V 12kW Marine BLDC Motor", description:"Matched water-cooled propulsion pair for efficient low-speed surveying and redundancy.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:2, price:1650, color:"blue", pins:"U · V · W · TEMP · COOLING", dimensions:"320x220x220mm", purchaseUrl:"", sourceName:"Marine integrator estimate", sourceStatus:"Select after resistance model test" }),
  p({ id:"US04", exportId:"motor_controller", name:"Marine motor controller", productName:"48V 300A FOC Marine Controller", description:"Sealed field-oriented motor control with CAN telemetry and thermal protection.", category:"electrical", subtype:"power", type:"POWER", qty:2, price:780, color:"red", pins:"48V+ · 48V− · U/V/W · CAN", dimensions:"280x180x75mm", purchaseUrl:"", sourceName:"Marine integrator estimate", sourceStatus:"IP67 class reference" }),
  p({ id:"US05", exportId:"battery_bank", name:"Main battery bank", productName:"48V 400Ah LiFePO4 Marine Battery", description:"Serviceable energy bank with marine BMS, isolation monitoring and fused disconnect.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:5200, color:"red", pins:"48V+ · 48V− · CAN · SERVICE", dimensions:"950x520x320mm", purchaseUrl:"", sourceName:"Professional battery integrator", sourceStatus:"Certified assembly required" }),
  p({ id:"US06", exportId:"power_distribution", name:"Marine power distribution", productName:"48V/24V/12V Isolated Marine PDU", description:"Fused and monitored distribution for propulsion, avionics, sensors and deck equipment.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:680, color:"red", pins:"48V IN · MOTOR L/R · 24V · 12V · 5V · CAN", dimensions:"360x240x90mm", purchaseUrl:"", sourceName:"Engineering estimate", sourceStatus:"Custom sealed enclosure" }),
  p({ id:"US07", exportId:"solar_mppt", name:"Solar charging", productName:"1.2kW Marine Solar Array + MPPT", description:"Deck-integrated solar charging extends sensor endurance while stationary or drifting.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:1450, color:"red", pins:"PV+ · PV− · 48V · CAN", dimensions:"Deck array", purchaseUrl:"", sourceName:"Marine solar estimate", sourceStatus:"Final area after deck CAD" }),
  p({ id:"US08", exportId:"rtk_gnss", name:"RTK navigation", productName:"Dual-antenna RTK GNSS Heading System", description:"Centimeter-class positioning, time sync and heading without relying on vessel motion.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:780, color:"lime", pins:"CAN · UART · PPS · 12V", dimensions:"Dual 150mm antennas", purchaseUrl:"", sourceName:"Survey-grade estimate", sourceStatus:"Calibrated baseline required" }),
  p({ id:"US09", exportId:"marine_radar", name:"Marine radar", productName:"Solid-state 24-inch FMCW Radar", description:"Detects vessels, shorelines and weather returns for supervised collision avoidance.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:1850, color:"lime", pins:"ETH · 24V", dimensions:"610x610x220mm", purchaseUrl:"", sourceName:"Marine electronics estimate", sourceStatus:"Civil navigation sensor" }),
  p({ id:"US10", exportId:"ais_remote_id", name:"AIS safety transceiver", productName:"Class B+ AIS Transceiver", description:"Broadcasts vessel identity and receives cooperative traffic information.", category:"electrical", subtype:"communication", type:"SAFETY", qty:1, price:890, color:"violet", pins:"NMEA 2000 · GPS · VHF · 12V", dimensions:"180x120x55mm", purchaseUrl:"", sourceName:"Marine safety estimate", sourceStatus:"Registration depends on jurisdiction" }),
  p({ id:"US11", exportId:"optical_camera", name:"Optical situational awareness", productName:"360° Marine PTZ Camera", description:"Day/night observation for remote supervision, documentation and search support.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:1250, color:"lime", pins:"ETH · 24V", dimensions:"170x170x230mm", purchaseUrl:"", sourceName:"Marine camera estimate", sourceStatus:"Non-weaponized imaging only" }),
  p({ id:"US12", exportId:"obstacle_lidar", name:"Forward obstacle lidar", productName:"IP67 3D Marine Lidar", description:"Near-field obstacle detection around docks, debris and low-profile objects.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:2100, color:"lime", pins:"ETH · PTP · 24V", dimensions:"120x100x85mm", purchaseUrl:"", sourceName:"Industrial sensor estimate", sourceStatus:"Salt-spray protection required" }),
  p({ id:"US13", exportId:"multibeam_sonar", name:"Hydrographic sonar", productName:"Compact Multibeam Echo Sounder", description:"Maps bathymetry and underwater structures for scientific and infrastructure surveys.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:5800, color:"lime", pins:"ETH · PPS · 24V", dimensions:"240x180x160mm", purchaseUrl:"", sourceName:"Survey equipment estimate", sourceStatus:"Professional calibration required" }),
  p({ id:"US14", exportId:"water_probe", name:"Water-quality sonde", productName:"Multiparameter Water Quality Probe", description:"Measures temperature, conductivity, pH, dissolved oxygen and turbidity.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:3200, color:"lime", pins:"RS485 · 12V", dimensions:"Ø75x520mm", purchaseUrl:"", sourceName:"Environmental sensor estimate", sourceStatus:"Serviceable probe cartridge" }),
  p({ id:"US15", exportId:"telemetry_gateway", name:"Remote communications", productName:"LTE / Satellite Marine Telemetry Gateway", description:"Encrypted mission telemetry with automatic bandwidth and loss-of-link management.", category:"electrical", subtype:"communication", type:"MODULE", qty:1, price:1450, color:"violet", pins:"ETH · CAN · LTE · SAT · 12V", dimensions:"220x150x60mm", purchaseUrl:"", sourceName:"Communications estimate", sourceStatus:"Civil service subscription required" }),
  p({ id:"US16", exportId:"safety_beacon", name:"Emergency beacon", productName:"Independent GNSS/AIS Recovery Beacon", description:"Battery-backed position beacon and strobe for recovery after propulsion or power failure.", category:"electrical", subtype:"communication", type:"SAFETY", qty:1, price:320, color:"violet", pins:"12V · BACKUP CELL", dimensions:"110x70x45mm", purchaseUrl:"", sourceName:"Marine safety estimate", sourceStatus:"Independent safety channel" }),
  p({ id:"US17", exportId:"composite_hull", name:"Composite hull", productName:"5.2m Deep-V Autonomous Survey Hull", description:"Unsinkable compartmentalized hull with foam reserve buoyancy and full perimeter fender.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:8200, color:"slate", pins:"", dimensions:"5200x1900x1250mm", purchaseUrl:"", sourceName:"Marine composite fabricator", sourceStatus:"Naval-architecture validation required" }),
  p({ id:"US18", exportId:"waterjet", name:"Twin waterjets", productName:"Shrouded Electric Waterjet Unit", description:"Protected propulsion and steering units suited to shallow water and debris-aware operation.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:2, price:1750, color:"cyan", pins:"", dimensions:"520x380x320mm", purchaseUrl:"", sourceName:"Marine propulsion estimate", sourceStatus:"Match to motor and hull resistance" }),
  p({ id:"US19", exportId:"sensor_mast", name:"Sensor mast", productName:"Folding Marine Sensor Mast", description:"Corrosion-resistant folding mast for radar, GNSS, AIS, camera and safety lights.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:920, color:"slate", pins:"", dimensions:"900x620x1450mm", purchaseUrl:"", sourceName:"In-house fabrication", sourceStatus:"Project CAD reference" }),
  p({ id:"US20", exportId:"sonar_fairing", name:"Sonar fairing", productName:"Hydrodynamic Sensor Gondola", description:"Removable low-drag fairing aligns sonar, sound-speed sensor and water probe below the hull.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:1, price:650, color:"cyan", pins:"", dimensions:"720x260x240mm", purchaseUrl:"", sourceName:"In-house fabrication", sourceStatus:"Tune using hydrodynamic simulation" }),
  p({ id:"US21", exportId:"rescue_pod", name:"Rescue flotation pod", productName:"Remote-release Flotation and Marker Pod", description:"High-visibility flotation aid for emergency support; remotely released only under operator supervision.", category:"mechanical", subtype:"mechanism", type:"RESCUE", qty:1, price:480, color:"cyan", pins:"", dimensions:"1200x330x280mm", purchaseUrl:"", sourceName:"Marine safety estimate", sourceStatus:"Non-hazardous rescue payload" }),
  p({ id:"US22", exportId:"marine_hardware", name:"Marine service hardware", productName:"316L Fasteners, Seals, Harnesses and Bonding Kit", description:"Salt-resistant fasteners, cable glands, bonding straps, seals and service labels.", category:"mechanical", subtype:"misc", type:"MISC", qty:1, price:780, color:"slate", pins:"", dimensions:"Assorted", purchaseUrl:"", sourceName:"Marine workshop stock", sourceStatus:"Finalize after CAD freeze" }),
];

export const usvElectricalConnections = [
  { source:"battery_bank", target:"power_distribution", type:"power", voltage:"48V", current:"500A peak", label:"Protected battery bus" },
  { source:"solar_mppt", target:"battery_bank", type:"power", voltage:"48V charge", current:"25A", label:"Solar charging bus" },
  { source:"power_distribution", target:"motor_controller", type:"power", voltage:"48V", current:"300A/channel", label:"Twin propulsion feeds" },
  { source:"motor_controller", target:"electric_motor", type:"power", voltage:"3-phase", current:"FOC controlled", label:"Motor phase and thermal wiring" },
  { source:"marine_autopilot", target:"motor_controller", type:"data", protocol:"CAN + PWM", label:"Thrust and steering commands" },
  { source:"power_distribution", target:"marine_autopilot", type:"power", voltage:"5V redundant", current:"3A", label:"Redundant navigation power" },
  { source:"marine_autopilot", target:"mission_computer", type:"data", protocol:"MAVLink / Ethernet", label:"Supervised mission interface" },
  { source:"marine_autopilot", target:"rtk_gnss", type:"data", protocol:"CAN + PPS", label:"Position, heading and time" },
  { source:"mission_computer", target:"marine_radar", type:"data", protocol:"Ethernet", label:"Radar target stream" },
  { source:"mission_computer", target:"ais_remote_id", type:"data", protocol:"NMEA 2000", label:"Cooperative traffic feed" },
  { source:"mission_computer", target:"optical_camera", type:"data", protocol:"Ethernet", label:"360-degree video" },
  { source:"mission_computer", target:"obstacle_lidar", type:"data", protocol:"Ethernet + PTP", label:"Near-field obstacle cloud" },
  { source:"mission_computer", target:"multibeam_sonar", type:"data", protocol:"Ethernet + PPS", label:"Bathymetry data" },
  { source:"mission_computer", target:"water_probe", type:"data", protocol:"RS485", label:"Water-quality measurements" },
  { source:"mission_computer", target:"telemetry_gateway", type:"data", protocol:"Ethernet", label:"Encrypted remote telemetry" },
  { source:"marine_autopilot", target:"ais_remote_id", type:"data", protocol:"NMEA 2000", label:"Navigation safety status" },
  { source:"power_distribution", target:"safety_beacon", type:"power", voltage:"12V", current:"Backup charged", label:"Independent recovery channel" },
  { source:"power_distribution", target:"rescue_pod", type:"data", protocol:"Interlocked GPIO", label:"Operator-supervised rescue release" },
];

export const usvMechanicalConnections = [
  { source:"electric_motor", target:"waterjet", label:"Flexible coupling and thrust bearing" },
  { source:"waterjet", target:"composite_hull", label:"Twin sealed transom mounts" },
  { source:"battery_bank", target:"composite_hull", label:"Low-CG fire-separated battery cradle" },
  { source:"sensor_mast", target:"composite_hull", label:"Folding deck hard points" },
  { source:"marine_radar", target:"sensor_mast", label:"Vibration-isolated radar platform" },
  { source:"rtk_gnss", target:"sensor_mast", label:"Calibrated dual-antenna baseline" },
  { source:"optical_camera", target:"sensor_mast", label:"360-degree optical mount" },
  { source:"obstacle_lidar", target:"sensor_mast", label:"Forward clean-view bracket" },
  { source:"multibeam_sonar", target:"sonar_fairing", label:"Acoustically clear precision cradle" },
  { source:"water_probe", target:"sonar_fairing", label:"Retractable service cartridge" },
  { source:"sonar_fairing", target:"composite_hull", label:"Removable low-drag gondola" },
  { source:"solar_mppt", target:"composite_hull", label:"Bonded anti-slip solar deck" },
  { source:"rescue_pod", target:"composite_hull", label:"Supervised side cradle and retention pin" },
  { source:"safety_beacon", target:"composite_hull", label:"Externally accessible emergency mount" },
];

export const usvInstructionPreamble: InstructionPreamble = {
  tools:["Marine composite fabrication tools and PPE","48V insulated electrical tools","Insulation resistance tester and marine multimeter","NMEA 2000 / CAN diagnostic interface","Pressure and leak-test kit","Survey-grade GNSS and sonar calibration tools","Tow tank or controlled-water test area","Recovery boat, PFDs and documented launch checklist"],
  assumptions:["Civil environmental, hydrographic or search-and-rescue support use only","No weapons or hazardous payloads","Remote operator maintains supervision and a defined abort route","Local maritime authority approval and collision regulations are followed","All high-current work uses lockout, fuse isolation and dry conditions"],
};

export const usvInstructionSteps: InstructionSection[] = [
  { id:"fabricate", title:"Hull & marine structures", subSteps:[
    { id:"usv_fab_1", title:"Fabricate the compartmentalized deep-V hull and inspect primary laminates", partIds:["composite_hull"] },
    { id:"usv_fab_2", title:"Build sealed battery, avionics and propulsion compartments", partIds:["composite_hull","battery_bank","power_distribution"] },
    { id:"usv_fab_3", title:"Fabricate folding mast, sonar gondola and rescue-pod cradle", partIds:["sensor_mast","sonar_fairing","rescue_pod"] },
    { id:"usv_fab_4", title:"Dry-fit waterjets and verify shaft alignment plus service access", partIds:["waterjet","electric_motor"] },
  ] },
  { id:"wire", title:"Power, navigation & survey wiring", subSteps:[
    { id:"usv_wire_1", title:"Install fused 48V propulsion and isolated low-voltage buses", partIds:["battery_bank","power_distribution","motor_controller"] },
    { id:"usv_wire_2", title:"Connect twin motors and water-cooled controllers with CAN telemetry", partIds:["motor_controller","electric_motor"] },
    { id:"usv_wire_3", title:"Wire autopilot, mission computer, RTK GNSS, AIS and communications", partIds:["marine_autopilot","mission_computer","rtk_gnss","ais_remote_id","telemetry_gateway"] },
    { id:"usv_wire_4", title:"Connect radar, optical camera, lidar, sonar and water probe", partIds:["marine_radar","optical_camera","obstacle_lidar","multibeam_sonar","water_probe"] },
    { id:"usv_wire_5", title:"Verify bonding, insulation, cable glands and emergency disconnect", partIds:["marine_hardware","safety_beacon"] },
  ] },
  { id:"bringup", title:"Software, hydro simulation & bench tests", subSteps:[
    { id:"usv_test_1", title:"Bring up navigation and compute systems from a current-limited supply", partIds:["marine_autopilot","mission_computer"] },
    { id:"usv_test_2", title:"Configure geofence, COLREG-aware behaviors and loss-of-link return", partIds:["marine_autopilot","ais_remote_id","marine_radar"] },
    { id:"usv_test_3", title:"Calibrate dual-antenna heading, radar alignment and optical coverage", partIds:["rtk_gnss","marine_radar","optical_camera"] },
    { id:"usv_test_4", title:"Bench-test sonar timing and water-probe sampling without propulsion", partIds:["multibeam_sonar","water_probe"] },
    { id:"usv_test_5", title:"Run hydrostatic, hydrodynamic, thermal and electrical simulation gates", partIds:["composite_hull","sonar_fairing","battery_bank"] },
    { id:"usv_test_6", title:"Complete leak, insulation and restrained waterjet tests", partIds:["waterjet","motor_controller","composite_hull"] },
  ] },
  { id:"assemble", title:"Launch & incremental water trials", subSteps:[
    { id:"usv_asm_1", title:"Install propulsion, mast and sensor gondola using sealed fasteners", partIds:["waterjet","sensor_mast","sonar_fairing","marine_hardware"] },
    { id:"usv_asm_2", title:"Load battery, verify displacement, trim and reserve buoyancy", partIds:["battery_bank","composite_hull"] },
    { id:"usv_asm_3", title:"Perform dockside communications, beacon and emergency-stop checks", partIds:["telemetry_gateway","safety_beacon","marine_autopilot"] },
    { id:"usv_asm_4", title:"Conduct tethered low-speed maneuver and obstacle-detection trials", partIds:["waterjet","marine_radar","obstacle_lidar"] },
    { id:"usv_asm_5", title:"Run an approved incremental survey mission with a recovery boat", partIds:["multibeam_sonar","water_probe","rescue_pod"] },
  ] },
];

export const USV_PROJECT = {
  key:"usv" as const,
  projectId:"usv-civil-survey-01",
  name:"Autonomous Survey USV",
  eyebrow:"REFERENCE 04 · CIVIL MARINE ROBOT",
  description:"Non-weaponized electric-hybrid surface vessel for bathymetric mapping, water-quality monitoring, infrastructure inspection and supervised search-and-rescue support.",
  briefTitle:"Tự hành trên nước.\nĐo đạc chính xác.\nVận hành an toàn.",
  tags:["HYDROGRAPHY","WATER QUALITY","SEARCH & RESCUE"],
  visual:"/usv-visual.png",
  originalPrompt:"Design a civil autonomous surface vessel for environmental monitoring and hydrographic mapping.",
  plan:"Requirements → naval architecture → sealed power system → navigation/survey sensors → digital twin → hydrostatic and hydrodynamic gates → controlled water trials",
  notes:["civil survey","non-weaponized","operator supervised","COLREG-aware"],
  componentCount:usvParts.length,
};

export function buildUsvCadProject(request = USV_PROJECT.originalPrompt, baseVersion = 1): CadProjectResult {
  const scene: CadProjectResult["scene"] = [
    { id:"hull", label:"Deep-V composite hull", kind:"box", size:[1900,850,5200], position:[0,240,0], color:"#e7e9eb", role:"enclosure" },
    { id:"deck", label:"Solar service deck", kind:"plate", size:[1750,70,3900], position:[0,720,-100], color:"#39434d", role:"enclosure" },
    { id:"cabin", label:"Sealed avionics cabin", kind:"box", size:[1250,540,1700], position:[0,970,100], color:"#f1f3f4", role:"enclosure" },
    { id:"mast", label:"Folding survey mast", kind:"cylinder", size:[95,1200,95], position:[0,1750,150], color:"#8e989f", role:"mount" },
    { id:"radar", label:"Solid-state marine radar", kind:"cylinder", size:[610,180,610], position:[0,2320,150], color:"#e9ecee", role:"component" },
    { id:"camera", label:"360-degree optical camera", kind:"cylinder", size:[170,230,170], position:[260,1570,-120], color:"#22272d", role:"component" },
    { id:"gnss-left", label:"RTK GNSS antenna A", kind:"cylinder", size:[150,90,150], position:[-420,1450,250], color:"#f4f5f6", role:"component" },
    { id:"gnss-right", label:"RTK GNSS antenna B", kind:"cylinder", size:[150,90,150], position:[420,1450,250], color:"#f4f5f6", role:"component" },
    { id:"jet-left", label:"Left shrouded waterjet", kind:"cylinder", size:[380,520,380], position:[-430,40,2450], rotation:[1.57,0,0], color:"#20262c", role:"component" },
    { id:"jet-right", label:"Right shrouded waterjet", kind:"cylinder", size:[380,520,380], position:[430,40,2450], rotation:[1.57,0,0], color:"#20262c", role:"component" },
    { id:"battery", label:"48V LiFePO4 battery bank", kind:"battery", size:[950,320,520], position:[0,-40,500], color:"#30363d", role:"component" },
    { id:"sonar", label:"Multibeam sonar gondola", kind:"cylinder", size:[260,240,720], position:[0,-520,-200], rotation:[1.57,0,0], color:"#3b4852", role:"component" },
    { id:"water-probe", label:"Water-quality probe", kind:"cylinder", size:[75,520,75], position:[280,-580,-100], color:"#93a46b", role:"component" },
    { id:"rescue-pod", label:"Rescue flotation pod", kind:"cylinder", size:[330,1200,330], position:[-1080,380,500], rotation:[1.57,0,0], color:"#f97316", role:"component" },
  ];
  return {
    projectId:USV_PROJECT.projectId,
    draftId:`survey-usv-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[5600,2300,2700], clearanceMm:3, wallThicknessMm:4, printer:"NONE" },
    operations:[
      { id:"op-usv-01", type:"create_box", label:"Model 5.2 m compartmentalized deep-V hull", parameters:{ lengthMm:5200, beamMm:1900 } },
      { id:"op-usv-02", type:"shell", label:"Create sealed propulsion, battery and avionics zones", parameters:{ compartments:6 } },
      { id:"op-usv-03", type:"place_component", label:"Place 48V battery at low center of gravity", parameters:{ component:"battery_bank" } },
      { id:"op-usv-04", type:"create_cylinder", label:"Install twin shrouded electric waterjets", parameters:{ count:2 } },
      { id:"op-usv-05", type:"place_component", label:"Place autopilot, mission compute and safety beacon", parameters:{ redundancy:"supervised" } },
      { id:"op-usv-06", type:"add_pcb_mount", label:"Install folding RTK/radar/AIS sensor mast", parameters:{ corrosionClass:"marine" } },
      { id:"op-usv-07", type:"add_cutout", label:"Integrate removable sonar and water-probe gondola", parameters:{ serviceable:true } },
      { id:"op-usv-08", type:"place_component", label:"Add solar deck and supervised rescue pod", parameters:{ nonHazardousPayload:true } },
    ],
    validation:{ passed:true, score:95, checksPassed:16, checksTotal:16, issues:[{ severity:"info", code:"MARINE_TRIALS", message:"Final vessel requires naval-architecture review, leak testing, maritime approval and incremental supervised water trials." }] },
    metrics:{ dimensionsMm:[5200,1900,2450], estimatedPrintMinutes:0, estimatedMaterialGrams:0, primitiveCount:scene.length },
    scene,
  };
}
