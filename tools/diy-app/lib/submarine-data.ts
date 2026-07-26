import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const submarineParts: ProjectPart[] = [
  p({ id:"SB01", exportId:"main_mcu", name:"Main control MCU", productName:"ESP32-WROOM-32D Dev Board", description:"Controller for thruster mixing, depth hold, sensor processing and the wireless link.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:8, color:"orange", pins:"SPI · I2C · UART · GPIO · 3.3V", dimensions:"54x28x13mm", purchaseUrl:"", sourceName:"Espressif", sourceStatus:"Reference class" }),
  p({ id:"SB02", exportId:"depth_sensor", name:"Depth sensor", productName:"BlueRobotics Bar30 Pressure/Depth", description:"High-resolution pressure sensor for accurate depth measurement and hold.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:39, color:"lime", pins:"I2C · 3.3V", dimensions:"Ø25x12mm", purchaseUrl:"https://bluerobotics.com/store/sensors-cameras/sensors/bar30-sensor-r1/", sourceName:"Blue Robotics", sourceStatus:"Official product reference" }),
  p({ id:"SB03", exportId:"imu", name:"IMU", productName:"GY-86 (MPU6050 + HMC5883L + BMP)", description:"Inertial and magnetic sensing for attitude and heading underwater.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:12, color:"lime", pins:"I2C · 3.3V", dimensions:"21x17x3mm", purchaseUrl:"", sourceName:"Generic IMU", sourceStatus:"Reference class" }),
  p({ id:"SB04", exportId:"camera", name:"Camera module", productName:"OV2640 Mini Camera Module", description:"Optical camera for visual feedback and navigation behind the front cap.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:15, color:"lime", pins:"DVP · 3.3V", dimensions:"25x24x9mm", purchaseUrl:"", sourceName:"Generic camera", sourceStatus:"Reference class" }),
  p({ id:"SB05", exportId:"thrusters", name:"Thrusters ×6", productName:"BlueRobotics T100 Thruster", description:"Six brushless underwater thrusters for propulsion, steering and depth control.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:6, price:75, color:"blue", pins:"3-phase", dimensions:"Ø65x100mm", purchaseUrl:"https://bluerobotics.com/", sourceName:"Blue Robotics", sourceStatus:"Official product reference" }),
  p({ id:"SB06", exportId:"escs", name:"Thruster ESCs ×6", productName:"BlueRobotics Basic ESC 30A", description:"Waterproofable speed controllers, one per thruster.", category:"electrical", subtype:"power", type:"POWER", qty:6, price:15, color:"red", pins:"BAT+ · BAT− · PWM · 3-phase", dimensions:"55x25x9mm", purchaseUrl:"https://bluerobotics.com/", sourceName:"Blue Robotics", sourceStatus:"Official product reference" }),
  p({ id:"SB07", exportId:"led", name:"Front LED light", productName:"Waterproof White LED Strip", description:"Forward illumination for the camera in low-light water.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:1, price:3, color:"blue", pins:"12V · GND", dimensions:"50mm segment", purchaseUrl:"", sourceName:"Generic LED", sourceStatus:"Reference class" }),
  p({ id:"SB08", exportId:"battery", name:"Main battery", productName:"4S 5000mAh 14.8V LiPo", description:"High-capacity pack powering thrusters and electronics for extended dives.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:45, color:"red", pins:"VBAT+ · VBAT− · BALANCE", dimensions:"140x45x30mm", purchaseUrl:"", sourceName:"Generic 4S LiPo", sourceStatus:"Handle per LiPo safety" }),
  p({ id:"SB09", exportId:"power_distribution", name:"Power distribution", productName:"PDB XT60 with 5V & 12V BEC", description:"Distributes 12 V to the thruster ESCs and provides regulated 5 V for logic.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:10, color:"red", pins:"BAT · 12V · 5V · GND", dimensions:"50x50x4mm", purchaseUrl:"", sourceName:"Generic PDB", sourceStatus:"Reference class" }),
  p({ id:"SB10", exportId:"rf_module", name:"Wireless module", productName:"NRF24L01+ PA/LNA", description:"2.4 GHz link for surface control signals when the antenna is above water.", category:"electrical", subtype:"module", type:"MODULE", qty:1, price:5, color:"violet", pins:"SPI · 3.3V · ANT", dimensions:"41x16x15mm", purchaseUrl:"", sourceName:"Nordic / generic", sourceStatus:"Reference class · surface link only" }),
  p({ id:"SB11", exportId:"hull", name:"Main hull tube", productName:"Acrylic Tube 75mm OD", description:"Transparent watertight enclosure housing the electronics stack.", category:"mechanical", subtype:"structural", type:"ENCLOSURE", qty:1, price:15, color:"slate", pins:"", dimensions:"Ø75x220mm", purchaseUrl:"", sourceName:"Acrylic supplier", sourceStatus:"Pressure-test before diving" }),
  p({ id:"SB12", exportId:"end_caps", name:"End caps & seals", productName:"3D Printed End Caps, O-Rings & Cable Glands", description:"Front and rear watertight caps, O-rings and M8 cable glands for the thruster wires.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:20, color:"violet", pins:"", dimensions:"PETG · 100% infill + seals", purchaseUrl:"", sourceName:"In-house 3D print + parts", sourceStatus:"Print and seal from project files" }),
  p({ id:"SB13", exportId:"internal_frame", name:"Internal frame & trays", productName:"3D Printed Internal Chassis & Mounts", description:"Internal frame with MCU, sensor, battery and power/RF mounting trays.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:7, color:"violet", pins:"", dimensions:"PETG · 20-30% infill", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"SB14", exportId:"thruster_mounts", name:"Thruster & ESC mounts", productName:"3D Printed Thruster Brackets (6+6)", description:"External brackets for the six thrusters and their integrated ESC pockets.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:8, color:"violet", pins:"", dimensions:"PETG · 60% infill", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"SB15", exportId:"ballast", name:"Ballast weights", productName:"Lead Ballast Weights + Holder", description:"Trimmable lead weights and a printed holder for neutral buoyancy tuning.", category:"mechanical", subtype:"misc", type:"MECHANISM", qty:1, price:3, color:"cyan", pins:"", dimensions:"Assorted", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Tune in a test tank" }),
  p({ id:"SB16", exportId:"fastener_kit", name:"Fastener kit", productName:"M3 Stainless Screws & Heat-Set Inserts", description:"Corrosion-resistant fasteners and brass inserts for the internal assembly.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:5, color:"slate", pins:"", dimensions:"Assorted", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Finalize after CAD freeze" }),
];

export const submarineElectricalConnections = [
  { source:"battery", target:"power_distribution", type:"power", voltage:"14.8V", current:"40A peak", label:"Main power bus" },
  { source:"power_distribution", target:"escs", type:"power", voltage:"14.8V", current:"Per-thruster", label:"Thruster ESC power" },
  { source:"escs", target:"thrusters", type:"power", voltage:"3-phase", current:"Controlled", label:"Thruster drive" },
  { source:"power_distribution", target:"main_mcu", type:"power", voltage:"5V", current:"2A", label:"Logic power" },
  { source:"main_mcu", target:"escs", type:"data", protocol:"PWM", label:"Thruster commands" },
  { source:"main_mcu", target:"depth_sensor", type:"data", protocol:"I2C", label:"Depth reading" },
  { source:"main_mcu", target:"imu", type:"data", protocol:"I2C", label:"Attitude & heading" },
  { source:"main_mcu", target:"camera", type:"data", protocol:"DVP", label:"Vision feed" },
  { source:"main_mcu", target:"rf_module", type:"data", protocol:"SPI", label:"Surface control link" },
  { source:"power_distribution", target:"led", type:"power", voltage:"12V", current:"0.5A", label:"Front light" },
];

export const submarineMechanicalConnections = [
  { source:"end_caps", target:"hull", label:"O-ring sealed caps" },
  { source:"internal_frame", target:"hull", label:"Internal chassis slide" },
  { source:"main_mcu", target:"internal_frame", label:"MCU tray" },
  { source:"battery", target:"internal_frame", label:"Battery tray" },
  { source:"depth_sensor", target:"end_caps", label:"Through-hull sensor port" },
  { source:"camera", target:"end_caps", label:"Front cap camera window" },
  { source:"led", target:"end_caps", label:"Front cap light" },
  { source:"thruster_mounts", target:"hull", label:"External thruster brackets" },
  { source:"thrusters", target:"thruster_mounts", label:"Thrusters on brackets" },
  { source:"ballast", target:"hull", label:"Buoyancy trim" },
  { source:"fastener_kit", target:"internal_frame", label:"Internal fasteners" },
];

export const submarineInstructionPreamble: InstructionPreamble = {
  tools:["Soldering iron and marine heat-shrink","M3 drivers and heat-set insert tip","3D printer (PETG capable)","O-ring grease and sealant","Multimeter and bench supply","Test tank or bucket for leak checks","Dielectric grease for connectors","Computer with the ROV control stack"],
  assumptions:["Educational and hobby underwater ROV use only","No covert or people-tracking payloads","Cameras used only where legally permitted and with consent","LiPo charged and handled with proper safety","Sealed and pressure-tested before every dive, tethered on first dives"],
};

export const submarineInstructionSteps: InstructionSection[] = [
  { id:"fabricate", title:"Hull & printed-part fabrication", subSteps:[
    { id:"sb_fab_1", title:"Cut the acrylic hull and print the end caps and internal frame", partIds:["hull","end_caps","internal_frame"] },
    { id:"sb_fab_2", title:"Print the thruster and ESC brackets", partIds:["thruster_mounts"] },
    { id:"sb_fab_3", title:"Fit O-rings, cable glands and dry-check the seals", partIds:["end_caps","fastener_kit"] },
  ] },
  { id:"wire", title:"Power & thruster wiring", subSteps:[
    { id:"sb_wire_1", title:"Wire the battery, power distribution board and 5V rail", partIds:["battery","power_distribution"] },
    { id:"sb_wire_2", title:"Connect the six ESCs and thrusters through the cable glands", partIds:["escs","thrusters","end_caps"] },
    { id:"sb_wire_3", title:"Wire the MCU, depth sensor, IMU, camera and RF module", partIds:["main_mcu","depth_sensor","imu","camera","rf_module"] },
    { id:"sb_wire_4", title:"Waterproof all external joints and verify continuity", partIds:["thrusters","fastener_kit"] },
  ] },
  { id:"bringup", title:"Software & leak test", subSteps:[
    { id:"sb_test_1", title:"Flash the ESP32 and confirm sensors and the RF link", partIds:["main_mcu","depth_sensor","rf_module"] },
    { id:"sb_test_2", title:"Test thruster order and direction in air (props clear)", partIds:["escs","thrusters"] },
    { id:"sb_test_3", title:"Seal the hull and run a weighted leak test in a tank", partIds:["hull","end_caps","ballast"] },
    { id:"sb_test_4", title:"Tune neutral buoyancy and depth-hold in shallow water", partIds:["ballast","depth_sensor"] },
  ] },
  { id:"assemble", title:"Final assembly & tethered dive", subSteps:[
    { id:"sb_asm_1", title:"Install the electronics stack and battery in the hull", partIds:["internal_frame","main_mcu","battery"] },
    { id:"sb_asm_2", title:"Mount the six thrusters and route sealed wiring", partIds:["thruster_mounts","thrusters"] },
    { id:"sb_asm_3", title:"Fit the camera, light and close the sealed end caps", partIds:["camera","led","end_caps"] },
    { id:"sb_asm_4", title:"Perform a shallow tethered dive and check all systems", partIds:["thrusters","depth_sensor","camera"] },
  ] },
];

export const SUBMARINE = {
  key:"submarine" as const,
  projectId:"mini-submarine-rov-01",
  name:"Mini Submarine Drone",
  eyebrow:"REFERENCE 11 · UNDERWATER ROV",
  description:"Compact waterproof underwater ROV with six thrusters, depth and inertial sensing and a camera in a sealed acrylic hull for exploration and observation.",
  briefTitle:"Lặn sâu.\nSáu thruster linh hoạt.\nQuan sát dưới nước.",
  tags:["UNDERWATER ROV","6 THRUSTERS","EXPLORATION"],
  visual:"/mini-submarine-visual.png",
  originalPrompt:"Design a compact waterproof mini submarine ROV for underwater exploration and observation.",
  plan:"Requirements → sealed hull design → six-thruster layout → depth/inertial sensing → power system → tank leak test → tethered shallow dives",
  notes:["hobby ROV","six thrusters","sealed acrylic hull","tethered testing"],
  componentCount:submarineParts.length,
};

export function buildSubmarineCadProject(request = SUBMARINE.originalPrompt, baseVersion = 1): CadProjectResult {
  const scene: CadProjectResult["scene"] = [
    { id:"hull", label:"Watertight hull tube", kind:"cylinder", size:[38,220,38], position:[0,60,0], rotation:[1.57,0,0], color:"#8fa3ad", opacity:0.5, role:"enclosure" },
    { id:"front-cap", label:"Front end cap", kind:"cylinder", size:[38,14,38], position:[0,60,-112], rotation:[1.57,0,0], color:"#30363d", role:"enclosure" },
    { id:"rear-cap", label:"Rear end cap", kind:"cylinder", size:[38,14,38], position:[0,60,112], rotation:[1.57,0,0], color:"#30363d", role:"enclosure" },
    { id:"camera", label:"Front camera", kind:"box", size:[16,16,10], position:[0,60,-124], color:"#1c1f24", role:"component" },
    { id:"led", label:"Front light", kind:"cylinder", size:[8,6,8], position:[18,60,-122], rotation:[1.57,0,0], color:"#e8e4c8", role:"component" },
    { id:"battery", label:"4S LiPo battery", kind:"battery", size:[40,26,120], position:[0,54,10], color:"#242831", role:"component" },
    { id:"mcu", label:"ESP32 controller", kind:"pcb", size:[46,10,26], position:[0,78,-30], color:"#157d55", role:"component" },
    { id:"thruster-fl", label:"Front-left thruster", kind:"motor", size:[16,30,16], position:[-52,60,-70], rotation:[1.57,0,0], color:"#242831", role:"component" },
    { id:"thruster-fr", label:"Front-right thruster", kind:"motor", size:[16,30,16], position:[52,60,-70], rotation:[1.57,0,0], color:"#242831", role:"component" },
    { id:"thruster-rl", label:"Rear-left thruster", kind:"motor", size:[16,30,16], position:[-52,60,70], rotation:[1.57,0,0], color:"#242831", role:"component" },
    { id:"thruster-rr", label:"Rear-right thruster", kind:"motor", size:[16,30,16], position:[52,60,70], rotation:[1.57,0,0], color:"#242831", role:"component" },
    { id:"thruster-v1", label:"Vertical thruster 1", kind:"motor", size:[16,26,16], position:[-30,96,0], color:"#242831", role:"component" },
    { id:"thruster-v2", label:"Vertical thruster 2", kind:"motor", size:[16,26,16], position:[30,96,0], color:"#242831", role:"component" },
  ];
  return {
    projectId:SUBMARINE.projectId,
    draftId:`submarine-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[220,180,300], clearanceMm:1, wallThicknessMm:3, printer:"FDM" },
    operations:[
      { id:"op-sb01", type:"create_cylinder", label:"Build the sealed acrylic hull", parameters:{ odMm:75 } },
      { id:"op-sb02", type:"add_cutout", label:"Fit O-ring sealed front and rear end caps", parameters:{ caps:2 } },
      { id:"op-sb03", type:"place_component", label:"Mount six thrusters (4 horizontal, 2 vertical)", parameters:{ thrusters:6 } },
      { id:"op-sb04", type:"place_component", label:"Place depth sensor, IMU and camera", parameters:{ sensors:3 } },
      { id:"op-sb05", type:"place_component", label:"Install the 4S battery and power distribution", parameters:{ component:"battery" } },
      { id:"op-sb06", type:"add_pcb_mount", label:"Add ballast holder for neutral buoyancy", parameters:{ ballast:true } },
    ],
    validation:{ passed:true, score:92, checksPassed:11, checksTotal:12, issues:[{ severity:"info", code:"ROV_SEAL_GATE", message:"Pressure-test the sealed hull and run a weighted leak test before any dive." }] },
    metrics:{ dimensionsMm:[200,150,260], estimatedPrintMinutes:520, estimatedMaterialGrams:240, primitiveCount:scene.length },
    scene,
  };
}
