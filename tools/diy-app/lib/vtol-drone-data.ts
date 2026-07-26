import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const vtolParts: ProjectPart[] = [
  p({ id:"VT01", exportId:"flight_controller", name:"Main flight controller", productName:"Holybro Pixhawk 6C Standard", description:"Autopilot for stabilization, GPS waypoint navigation and the VTOL transition between hover and forward flight.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:299.99, color:"orange", pins:"CAN · UART · PWM · I2C · POWER", dimensions:"84x44x20mm", purchaseUrl:"https://holybro.com/products/pixhawk-6c", sourceName:"Holybro", sourceStatus:"Official product reference" }),
  p({ id:"VT02", exportId:"companion_computer", name:"Autonomous control SBC", productName:"Raspberry Pi 4 Model B 4GB", description:"Companion computer running mapping, autonomous mission logic and image capture without flight-critical authority.", category:"electrical", subtype:"mcu", type:"COMPUTE", qty:1, price:55, color:"orange", pins:"ETH · USB · UART · GPIO · 5V", dimensions:"85x56x17mm", purchaseUrl:"https://www.raspberrypi.com/products/raspberry-pi-4-model-b/", sourceName:"Raspberry Pi", sourceStatus:"Official product reference" }),
  p({ id:"VT03", exportId:"gnss_compass", name:"GPS / compass module", productName:"Holybro M9N GPS", description:"High-precision GNSS with integrated compass for navigation, position hold and safe return-to-home.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:64.99, color:"lime", pins:"UART · I2C · 5V", dimensions:"31x31x14mm", purchaseUrl:"https://holybro.com/products/m9n-gps", sourceName:"Holybro", sourceStatus:"Official product reference" }),
  p({ id:"VT04", exportId:"survey_camera", name:"Front vision camera", productName:"Raspberry Pi Camera Module V2", description:"8MP camera for survey imagery, visual logging and forward situational awareness.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:30, color:"lime", pins:"CSI-2 · 3.3V", dimensions:"25x24x9mm", purchaseUrl:"https://www.raspberrypi.com/products/camera-module-v2/", sourceName:"Raspberry Pi", sourceStatus:"Official product reference" }),
  p({ id:"VT05", exportId:"lidar_altimeter", name:"Lidar altimeter", productName:"Garmin LIDAR-Lite v3HP", description:"Compact laser rangefinder for precise altitude hold, terrain following and gentle automated landings.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:149.99, color:"lime", pins:"I2C · 5V", dimensions:"20x48x40mm", purchaseUrl:"https://www.garmin.com/en-US/p/578152", sourceName:"Garmin", sourceStatus:"Official product reference" }),
  p({ id:"VT06", exportId:"lift_motors", name:"Lift motors ×4", productName:"T-Motor F60 Pro IV 2500KV", description:"Four brushless motors driving the vertical lift rotors for hover, takeoff and landing.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:4, price:25, color:"blue", pins:"PHASE A · B · C", dimensions:"27.9x27.9x33mm", purchaseUrl:"https://store.tmotor.com/", sourceName:"T-Motor", sourceStatus:"Reference class · confirm on thrust bench" }),
  p({ id:"VT07", exportId:"cruise_motor", name:"Forward cruise motor", productName:"T-Motor U8 II KV170", description:"Efficient brushless motor providing forward thrust during winged cruise flight.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:1, price:120, color:"blue", pins:"PHASE A · B · C", dimensions:"Ø96x38mm", purchaseUrl:"https://store.tmotor.com/", sourceName:"T-Motor", sourceStatus:"Reference class · match to cruise prop" }),
  p({ id:"VT08", exportId:"lift_esc", name:"Lift ESC (4-in-1)", productName:"Hobbywing XRotor Micro 60A 4-in-1", description:"Four-channel electronic speed controller commanding the vertical lift rotors.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:79.99, color:"red", pins:"BAT+ · BAT− · S1-S4 · GND", dimensions:"45x40x9mm", purchaseUrl:"https://www.hobbywing.com/", sourceName:"Hobbywing", sourceStatus:"Official product reference" }),
  p({ id:"VT09", exportId:"cruise_esc", name:"Cruise ESC", productName:"Hobbywing Platinum HV 120A V4", description:"High-voltage (up to 6S+) speed controller for the forward cruise motor.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:150, color:"red", pins:"BAT+ · BAT− · PWM · BEC", dimensions:"85x35x14mm", purchaseUrl:"https://www.hobbywing.com/", sourceName:"Hobbywing", sourceStatus:"Official product reference" }),
  p({ id:"VT10", exportId:"power_distribution", name:"Power distribution board", productName:"Matek PDB-FCHUB-6S", description:"Distributes main battery power to the ESCs and regulators with current sensing.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:19.99, color:"red", pins:"BAT+ · BAT− · ESC OUT · 5V/12V", dimensions:"36x36x4mm", purchaseUrl:"https://www.mateksys.com/", sourceName:"Matek Systems", sourceStatus:"Official product reference" }),
  p({ id:"VT11", exportId:"flight_battery", name:"Main flight battery", productName:"Tattu 6S 22000mAh 25C LiPo", description:"High-capacity 6S pack for extended hover and cruise endurance under survey payload.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:350, color:"red", pins:"VBAT+ · VBAT− · BALANCE", dimensions:"215x76x60mm", purchaseUrl:"https://www.gensace.de/", sourceName:"Tattu / Gens Ace", sourceStatus:"Retail listing · handle per LiPo safety" }),
  p({ id:"VT12", exportId:"reg_12v", name:"12V step-down regulator", productName:"UBEC 12V 5A", description:"Regulated 12V rail for the SBC, camera and higher-draw peripherals.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:15, color:"red", pins:"IN+ · IN− · 12V · GND", dimensions:"45x25x12mm", purchaseUrl:"", sourceName:"Generic UBEC", sourceStatus:"Reference class" }),
  p({ id:"VT13", exportId:"reg_5v", name:"5V step-down regulator", productName:"UBEC 5V 5A", description:"Regulated 5V rail for the flight controller, GPS and logic peripherals.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:15, color:"red", pins:"IN+ · IN− · 5V · GND", dimensions:"45x25x12mm", purchaseUrl:"", sourceName:"Generic UBEC", sourceStatus:"Reference class" }),
  p({ id:"VT14", exportId:"lte_modem", name:"Cellular telemetry modem", productName:"Quectel EC25-E Mini PCIe (4G LTE)", description:"LTE data link for beyond-line-of-sight mission telemetry and map offload on licensed civil networks.", category:"electrical", subtype:"communication", type:"MODULE", qty:1, price:60, color:"violet", pins:"USB · UART · SIM · ANT", dimensions:"51x30x4.9mm", purchaseUrl:"https://www.quectel.com/product/lte-ec25-mini-pcie-series/", sourceName:"Quectel", sourceStatus:"Civil network subscription required" }),
  p({ id:"VT15", exportId:"pcie_usb_adapter", name:"Mini PCIe to USB adapter", productName:"Mini PCI-E to USB Adapter", description:"Carrier that connects the LTE modem to the SBC over USB.", category:"electrical", subtype:"communication", type:"MODULE", qty:1, price:10, color:"violet", pins:"USB · MINI PCIe · SIM", dimensions:"50x30x10mm", purchaseUrl:"", sourceName:"Generic adapter", sourceStatus:"Reference class" }),
  p({ id:"VT16", exportId:"wifi_link", name:"Wi-Fi ground link", productName:"TP-Link AC600 USB Wi-Fi Adapter", description:"Short-range Wi-Fi link for ground-station setup, log download and pre-flight checks.", category:"electrical", subtype:"communication", type:"MODULE", qty:1, price:15, color:"violet", pins:"USB · ANT", dimensions:"39x15x8mm", purchaseUrl:"https://www.tp-link.com/", sourceName:"TP-Link", sourceStatus:"Official product reference" }),
  p({ id:"VT17", exportId:"control_servos", name:"Control-surface servos ×4", productName:"Digital Metal-Gear Servo (control surfaces)", description:"Servos actuating the aileron and tail control surfaces for stable winged flight.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:4, price:8, color:"blue", pins:"SIG · 5V · GND", dimensions:"23x12x24mm", purchaseUrl:"", sourceName:"Reference estimate", sourceStatus:"Select for hinge-moment margin" }),
  p({ id:"VT18", exportId:"body_frame", name:"Main body frame plates ×3", productName:"Carbon Fiber Plate Set", description:"Top, middle and bottom structural plates that carry the avionics stack and wing/boom joints.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:3, price:25, color:"slate", pins:"", dimensions:"260x180x2.5mm", purchaseUrl:"", sourceName:"Carbon CNC fabricator", sourceStatus:"CNC cut from project CAD" }),
  p({ id:"VT19", exportId:"wing_set", name:"Front wing sections ×2", productName:"Carbon Fiber Wing Set", description:"Left and right lifting wings providing efficient cruise flight and lift-motor attachment points.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:2, price:35, color:"slate", pins:"", dimensions:"720x270x40mm", purchaseUrl:"", sourceName:"Composite fabricator", sourceStatus:"Requires structural validation" }),
  p({ id:"VT20", exportId:"tail_booms", name:"Rear booms ×2", productName:"Carbon Fiber Tube", description:"Twin tail booms that carry the rear lift rotors and rear control surfaces.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:2, price:12, color:"slate", pins:"", dimensions:"Ø22x900mm", purchaseUrl:"", sourceName:"Carbon tube supplier", sourceStatus:"Reference class" }),
  p({ id:"VT21", exportId:"main_spars", name:"Main spars ×4", productName:"Carbon Fiber Rod", description:"Internal spars adding bending stiffness to the wings and frame.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:4, price:4, color:"slate", pins:"", dimensions:"Ø8x700mm", purchaseUrl:"", sourceName:"Carbon rod supplier", sourceStatus:"Reference class" }),
  p({ id:"VT22", exportId:"landing_gear", name:"Landing gear set", productName:"3D Printed Landing Gear (FL / FR / rear)", description:"Printed legs providing stable ground clearance for rotors, camera and lidar.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:7, color:"violet", pins:"", dimensions:"PETG · 40% infill", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"VT23", exportId:"motor_mounts", name:"Motor mount set", productName:"3D Printed Motor Mounts (5)", description:"Four lift-rotor mounts plus one forward-motor mount fixing motors to wings and booms.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:16, color:"violet", pins:"", dimensions:"PETG · 30-40% infill", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"VT24", exportId:"avionics_mounts", name:"Avionics mount set", productName:"3D Printed Enclosures & Mounts", description:"Flight-controller enclosure, GPS mast, SBC tray, camera/lidar mounts, ESC and regulator brackets.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:20, color:"violet", pins:"", dimensions:"PETG / PLA · 15-25% infill", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"VT25", exportId:"battery_tray", name:"Battery tray & straps", productName:"3D Printed LiPo Tray + Velcro Straps", description:"Sliding battery tray with strap slots for center-of-gravity tuning and secure retention.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:7, color:"violet", pins:"", dimensions:"PETG · 30% infill", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"VT26", exportId:"fastener_kit", name:"Fastener & cable kit", productName:"M3 Screws, Standoffs, Lock Nuts, Zip Ties", description:"General assembly hardware and cable management for the full airframe.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:6, color:"slate", pins:"", dimensions:"Assorted", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Finalize after CAD freeze" }),
];

export const vtolElectricalConnections = [
  { source:"flight_battery", target:"power_distribution", type:"power", voltage:"22.2V", current:"120A peak", label:"Main battery bus" },
  { source:"power_distribution", target:"lift_esc", type:"power", voltage:"22.2V", current:"60A", label:"Lift rotor power" },
  { source:"power_distribution", target:"cruise_esc", type:"power", voltage:"22.2V", current:"120A", label:"Cruise motor power" },
  { source:"power_distribution", target:"reg_12v", type:"power", voltage:"22.2V", current:"5A", label:"12V rail feed" },
  { source:"power_distribution", target:"reg_5v", type:"power", voltage:"22.2V", current:"5A", label:"5V rail feed" },
  { source:"lift_esc", target:"lift_motors", type:"power", voltage:"3-phase", current:"Per-rotor", label:"Lift motor phases" },
  { source:"cruise_esc", target:"cruise_motor", type:"power", voltage:"3-phase", current:"FOC controlled", label:"Cruise motor phases" },
  { source:"reg_5v", target:"flight_controller", type:"power", voltage:"5V", current:"3A", label:"Autopilot power" },
  { source:"reg_12v", target:"companion_computer", type:"power", voltage:"12V", current:"3A", label:"SBC power" },
  { source:"flight_controller", target:"lift_esc", type:"data", protocol:"PWM / DShot", sourcePin:"AUX1-4", targetPin:"S1-S4", label:"Lift rotor commands" },
  { source:"flight_controller", target:"cruise_esc", type:"data", protocol:"PWM", sourcePin:"MAIN1", targetPin:"PWM", label:"Cruise throttle command" },
  { source:"flight_controller", target:"control_servos", type:"data", protocol:"PWM", sourcePin:"MAIN2-5", targetPin:"SIG", label:"Control-surface commands" },
  { source:"flight_controller", target:"gnss_compass", type:"data", protocol:"UART + I2C", label:"Position and heading" },
  { source:"flight_controller", target:"lidar_altimeter", type:"data", protocol:"I2C", label:"Altitude above ground" },
  { source:"flight_controller", target:"companion_computer", type:"data", protocol:"MAVLink / UART", label:"Supervised mission interface" },
  { source:"companion_computer", target:"survey_camera", type:"data", protocol:"CSI-2", label:"Survey image capture" },
  { source:"companion_computer", target:"pcie_usb_adapter", type:"data", protocol:"USB", label:"Modem carrier link" },
  { source:"pcie_usb_adapter", target:"lte_modem", type:"data", protocol:"USB / Mini PCIe", label:"LTE telemetry link" },
  { source:"companion_computer", target:"wifi_link", type:"data", protocol:"USB", label:"Ground-station Wi-Fi" },
];

export const vtolMechanicalConnections = [
  { source:"wing_set", target:"body_frame", label:"Wing root spar joint" },
  { source:"main_spars", target:"wing_set", label:"Internal spar reinforcement" },
  { source:"tail_booms", target:"wing_set", label:"Boom-to-wing clamps" },
  { source:"motor_mounts", target:"wing_set", label:"Front lift-rotor mounts" },
  { source:"motor_mounts", target:"tail_booms", label:"Rear lift-rotor mounts" },
  { source:"lift_motors", target:"motor_mounts", label:"M3 motor screws" },
  { source:"cruise_motor", target:"motor_mounts", label:"Forward motor mount" },
  { source:"control_servos", target:"wing_set", label:"Control-surface servo bays" },
  { source:"avionics_mounts", target:"body_frame", label:"Avionics stack mounting" },
  { source:"flight_controller", target:"avionics_mounts", label:"Vibration-isolated FC bay" },
  { source:"companion_computer", target:"avionics_mounts", label:"SBC tray" },
  { source:"gnss_compass", target:"avionics_mounts", label:"Elevated GPS mast" },
  { source:"survey_camera", target:"avionics_mounts", label:"Forward camera mount" },
  { source:"lidar_altimeter", target:"avionics_mounts", label:"Downward lidar bracket" },
  { source:"battery_tray", target:"body_frame", label:"Sliding CG tray" },
  { source:"flight_battery", target:"battery_tray", label:"Velcro strap retention" },
  { source:"landing_gear", target:"body_frame", label:"Landing gear hard points" },
  { source:"fastener_kit", target:"body_frame", label:"Frame fasteners and cable ties" },
];

export const vtolInstructionPreamble: InstructionPreamble = {
  tools:["Soldering iron and flux","Wire strippers and heat-shrink","M3 hex keys and drivers","3D printer (PETG and PLA capable)","Multimeter and low-voltage bench supply","Propeller balancer","Digital scale and CG fixture","Ground-control station with geofence data"],
  assumptions:["Civil STEM, survey, mapping or inspection use only","No jamming, spoofing, weapons or hazardous payloads","Radios and cameras used only on legally permitted bands and areas","Operation requires local aviation approval and Remote ID where mandated","Propellers stay removed during all electrical and software bring-up"],
};

export const vtolInstructionSteps: InstructionSection[] = [
  { id:"fabricate", title:"Airframe fabrication & printing", subSteps:[
    { id:"vtol_fab_1", title:"Cut or inspect the carbon body plates, wings, booms and spars", partIds:["body_frame","wing_set","tail_booms","main_spars"] },
    { id:"vtol_fab_2", title:"3D print motor mounts, avionics enclosures, battery tray and landing gear", partIds:["motor_mounts","avionics_mounts","battery_tray","landing_gear"] },
    { id:"vtol_fab_3", title:"Dry-fit wings and booms to the frame and check rotor and control-surface clearance", partIds:["wing_set","tail_booms","body_frame","control_servos"] },
  ] },
  { id:"wire", title:"Power & avionics wiring", subSteps:[
    { id:"vtol_wire_1", title:"Wire the battery, power distribution board and the 12V/5V regulators", partIds:["flight_battery","power_distribution","reg_12v","reg_5v"] },
    { id:"vtol_wire_2", title:"Connect the lift 4-in-1 ESC and the cruise ESC to their motors", partIds:["lift_esc","cruise_esc","lift_motors","cruise_motor"] },
    { id:"vtol_wire_3", title:"Wire the flight controller to ESCs, servos, GPS and lidar", partIds:["flight_controller","lift_esc","cruise_esc","control_servos","gnss_compass","lidar_altimeter"] },
    { id:"vtol_wire_4", title:"Connect the SBC, camera, LTE modem and Wi-Fi link", partIds:["companion_computer","survey_camera","lte_modem","pcie_usb_adapter","wifi_link"] },
    { id:"vtol_wire_5", title:"Verify polarity, continuity and isolation before connecting the battery", partIds:["power_distribution","fastener_kit"] },
  ] },
  { id:"bringup", title:"Software & VTOL configuration", subSteps:[
    { id:"vtol_test_1", title:"Bring up the autopilot on bench power with propellers removed", partIds:["flight_controller","companion_computer"] },
    { id:"vtol_test_2", title:"Calibrate sensors, radio, GPS and set the VTOL quadplane airframe", partIds:["flight_controller","gnss_compass"] },
    { id:"vtol_test_3", title:"Configure geofence, altitude limits, Remote ID and return-to-home", partIds:["flight_controller","lte_modem"] },
    { id:"vtol_test_4", title:"Verify lift-rotor order, direction and the hover-to-cruise transition logic", partIds:["lift_esc","lift_motors","cruise_esc","cruise_motor"] },
    { id:"vtol_test_5", title:"Run mass-properties, symmetry and CFD aerodynamic gates in simulation", partIds:["wing_set","flight_battery","cruise_motor"] },
  ] },
  { id:"assemble", title:"Final assembly & approved flight test", subSteps:[
    { id:"vtol_asm_1", title:"Mount motors, ESCs and control servos to wings and booms", partIds:["lift_motors","cruise_motor","lift_esc","control_servos","motor_mounts"] },
    { id:"vtol_asm_2", title:"Install the avionics stack, GPS mast, camera and lidar", partIds:["avionics_mounts","flight_controller","companion_computer","gnss_compass","survey_camera","lidar_altimeter"] },
    { id:"vtol_asm_3", title:"Fit the battery tray, set center of gravity and record mass properties", partIds:["battery_tray","flight_battery"] },
    { id:"vtol_asm_4", title:"Install landing gear, tidy wiring and torque all primary fasteners", partIds:["landing_gear","fastener_kit"] },
    { id:"vtol_asm_5", title:"Fit propellers last and complete an approved, incremental flight-test program", partIds:["lift_motors","cruise_motor"] },
  ] },
];

export const VTOL_DRONE = {
  key:"vtol" as const,
  projectId:"vtol-survey-quadplane-01",
  name:"VTOL Survey Drone",
  eyebrow:"REFERENCE 05 · VTOL QUADPLANE",
  description:"Non-weaponized carbon-fiber VTOL quadplane that takes off vertically and cruises on wings for autonomous mapping, survey and infrastructure inspection.",
  briefTitle:"Cất cánh thẳng đứng.\nBay xa bằng cánh.\nKhảo sát tự hành.",
  tags:["VTOL QUADPLANE","AUTONOMOUS SURVEY","NON-WEAPONIZED"],
  visual:"",
  originalPrompt:"Design a civil carbon-fiber VTOL survey drone for autonomous mapping and inspection.",
  plan:"Requirements → quadplane sizing → carbon airframe → hybrid lift/cruise propulsion → autopilot + survey payload → digital twin → CFD and bench gates → approved incremental flight tests",
  notes:["civil survey","vertical takeoff + winged cruise","non-weaponized","operator supervised"],
  componentCount:vtolParts.length,
};

export function buildVtolCadProject(request = VTOL_DRONE.originalPrompt, baseVersion = 1): CadProjectResult {
  const liftPositions: Array<[number, number, number]> = [
    [-360, 150, -330],
    [360, 150, -330],
    [-360, 150, 410],
    [360, 150, 410],
  ];
  const scene: CadProjectResult["scene"] = [
    { id:"body-frame", label:"Carbon body frame", kind:"box", size:[150,55,720], position:[0,120,0], color:"#3a3f46", role:"enclosure" },
    { id:"left-wing", label:"Left wing section", kind:"plate", size:[720,18,270], position:[-470,132,-70], color:"#54595f", role:"enclosure" },
    { id:"right-wing", label:"Right wing section", kind:"plate", size:[720,18,270], position:[470,132,-70], color:"#54595f", role:"enclosure" },
    { id:"left-boom", label:"Left rear boom", kind:"box", size:[24,24,900], position:[-360,120,40], color:"#2b2f35", role:"component" },
    { id:"right-boom", label:"Right rear boom", kind:"box", size:[24,24,900], position:[360,120,40], color:"#2b2f35", role:"component" },
    ...liftPositions.flatMap((pos, index) => {
      const tag = ["fl", "fr", "rl", "rr"][index];
      return [
        { id:`lift-motor-${tag}`, label:`Lift motor ${tag.toUpperCase()}`, kind:"motor" as const, size:[38,44,38] as [number, number, number], position:pos, color:"#242831", role:"component" as const },
        { id:`lift-prop-${tag}`, label:`Lift rotor ${tag.toUpperCase()}`, kind:"propeller" as const, size:[300,8,30] as [number, number, number], position:[pos[0], pos[1]+26, pos[2]] as [number, number, number], color:"#171a20", opacity:0.9, role:"component" as const },
      ];
    }),
    { id:"cruise-motor", label:"Forward cruise motor", kind:"motor", size:[44,50,44], position:[0,150,-400], rotation:[1.57,0,0], color:"#242831", role:"component" },
    { id:"cruise-prop", label:"Cruise propeller", kind:"propeller", size:[260,8,28], position:[0,150,-455], rotation:[1.57,0,0], color:"#171a20", opacity:0.9, role:"component" },
    { id:"pixhawk", label:"Holybro Pixhawk 6C", kind:"pcb", size:[84,22,57], position:[0,150,-30], color:"#157d55", role:"component" },
    { id:"sbc", label:"Raspberry Pi 4 SBC", kind:"pcb", size:[86,20,56], position:[0,150,70], color:"#2f7d3a", role:"component" },
    { id:"gps", label:"Holybro M9N GPS", kind:"pcb", size:[50,15,50], position:[0,185,-190], color:"#38424f", role:"component" },
    { id:"battery", label:"6S 22000mAh LiPo", kind:"battery", size:[80,60,215], position:[0,92,90], color:"#242831", role:"component" },
    { id:"camera", label:"Front vision camera", kind:"box", size:[28,28,20], position:[0,110,-350], color:"#1c1f24", role:"component" },
    { id:"lidar", label:"Lidar altimeter", kind:"cylinder", size:[16,26,16], position:[0,86,-250], rotation:[1.57,0,0], color:"#c7ccd3", role:"component" },
    { id:"gear-left", label:"Landing gear FL", kind:"box", size:[14,90,14], position:[-360,55,-330], color:"#30363d", role:"component" },
    { id:"gear-right", label:"Landing gear FR", kind:"box", size:[14,90,14], position:[360,55,-330], color:"#30363d", role:"component" },
    { id:"gear-rear", label:"Landing gear rear", kind:"box", size:[14,90,14], position:[0,55,430], color:"#30363d", role:"component" },
  ];
  // Author the scene at true proportions, then scale to the viewport's fit range
  // (the shared CadViewport frames small scenes; the real dimensions stay in metrics).
  const viewScale = 0.24;
  const scaledScene: CadProjectResult["scene"] = scene.map((primitive) => ({
    ...primitive,
    size:[primitive.size[0]*viewScale, primitive.size[1]*viewScale, primitive.size[2]*viewScale] as [number, number, number],
    position:[primitive.position[0]*viewScale, primitive.position[1]*viewScale, primitive.position[2]*viewScale] as [number, number, number],
  }));
  return {
    projectId:VTOL_DRONE.projectId,
    draftId:`vtol-survey-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[1700,1100,400], clearanceMm:1.5, wallThicknessMm:2.4, printer:"FDM" },
    operations:[
      { id:"op-v01", type:"create_box", label:"Size 1.66 m carbon quadplane airframe", parameters:{ wingspanMm:1660 } },
      { id:"op-v02", type:"create_box", label:"Create body frame plate stack", parameters:{ plates:3 } },
      { id:"op-v03", type:"place_component", label:"Place autopilot and companion SBC at the CG", parameters:{ component:"avionics" } },
      { id:"op-v04", type:"place_component", label:"Install four lift rotors on wings and booms", parameters:{ liftRotors:4 } },
      { id:"op-v05", type:"place_component", label:"Install forward cruise motor and pusher prop", parameters:{ cruiseMotors:1 } },
      { id:"op-v06", type:"place_component", label:"Place 6S battery on the adjustable CG tray", parameters:{ component:"flight_battery" } },
      { id:"op-v07", type:"place_component", label:"Place GPS mast, survey camera and lidar altimeter", parameters:{ payload:"survey" } },
      { id:"op-v08", type:"add_pcb_mount", label:"Install four control-surface servos", parameters:{ count:4 } },
    ],
    validation:{ passed:true, score:93, checksPassed:13, checksTotal:13, issues:[{ severity:"info", code:"VTOL_TRANSITION_GATE", message:"Verify center of gravity, lift-rotor order, hover-to-cruise transition and failsafe before any flight." }] },
    metrics:{ dimensionsMm:[1660,1000,300], estimatedPrintMinutes:1100, estimatedMaterialGrams:520, primitiveCount:scene.length },
    scene:scaledScene,
  };
}
