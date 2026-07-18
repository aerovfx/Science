import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const windHarvesterParts: ProjectPart[] = [
  p({ id:"WH01", exportId:"controller", name:"Power monitor controller", productName:"ESP32-WROOM-32D Dev Board", description:"MCU for data logging, Wi-Fi telemetry and managing the power and wind sensors.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:8.5, color:"orange", pins:"I2C · ADC · GPIO · 3.3V", dimensions:"54x28x13mm", purchaseUrl:"", sourceName:"Espressif", sourceStatus:"Reference class" }),
  p({ id:"WH02", exportId:"power_sensor", name:"Bus power sensor", productName:"INA219 DC Current Sensor", description:"Measures bus voltage and current to track generation efficiency.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:9.95, color:"lime", pins:"I2C · VIN± · 3.3V", dimensions:"26x18x3mm", purchaseUrl:"", sourceName:"TI / generic", sourceStatus:"Reference class" }),
  p({ id:"WH03", exportId:"wind_sensor", name:"Wind speed sensor", productName:"JL-FS2 Anemometer", description:"Analog anemometer measuring air-flow speed to estimate available power.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:35, color:"lime", pins:"ANALOG · 12V · GND", dimensions:"Cup anemometer", purchaseUrl:"", sourceName:"Generic anemometer", sourceStatus:"Reference class" }),
  p({ id:"WH04", exportId:"generator", name:"Turbine generator", productName:"3-Phase BLDC Wind Generator", description:"Permanent-magnet BLDC motor used as the generator for the horizontal-axis turbine.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:1, price:22, color:"blue", pins:"PHASE A · B · C", dimensions:"Ø50x60mm", purchaseUrl:"", sourceName:"Generic BLDC", sourceStatus:"Reference class" }),
  p({ id:"WH05", exportId:"mppt", name:"MPPT converter", productName:"LTC3780 Buck-Boost Module", description:"Regulates the fluctuating turbine voltage to a stable charging voltage for the storage bank.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:14, color:"red", pins:"IN± · OUT± · SENSE", dimensions:"66x47x25mm", purchaseUrl:"", sourceName:"Generic buck-boost", sourceStatus:"Reference class" }),
  p({ id:"WH06", exportId:"supercap", name:"Energy storage bank", productName:"16V 83F Supercapacitor Module", description:"High-capacity supercapacitor bank absorbing intermittent generation spikes.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:45, color:"red", pins:"V+ · V− · BALANCE", dimensions:"90x60x40mm", purchaseUrl:"", sourceName:"Generic supercap", sourceStatus:"Reference class" }),
  p({ id:"WH07", exportId:"rectifier", name:"3-phase rectifier", productName:"SQL20A 1000V Bridge Rectifier", description:"Converts the generator's 3-phase AC output into DC.", category:"electrical", subtype:"module", type:"MODULE", qty:1, price:6.5, color:"violet", pins:"AC ×3 · DC±", dimensions:"40x40x15mm", purchaseUrl:"", sourceName:"Generic rectifier", sourceStatus:"Reference class" }),
  p({ id:"WH08", exportId:"oled", name:"Status display", productName:"SSD1306 0.96\" OLED", description:"Displays live wattage and storage level.", category:"electrical", subtype:"module", type:"DISPLAY", qty:1, price:5.5, color:"violet", pins:"I2C · 3.3V", dimensions:"27x27x4mm", purchaseUrl:"", sourceName:"Generic OLED", sourceStatus:"Reference class" }),
  p({ id:"WH09", exportId:"frame", name:"Base frame rails ×3", productName:"2020 T-Slot Aluminium Extrusion", description:"Modular structural rails for the turbine base and mast.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:3, price:5, color:"slate", pins:"", dimensions:"20x20mm profile", purchaseUrl:"", sourceName:"Extrusion supplier", sourceStatus:"Cut to project lengths" }),
  p({ id:"WH10", exportId:"main_bearing", name:"Main bearing", productName:"KP08 Pillow Block Bearing", description:"Self-aligning bearing for the main horizontal turbine shaft.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:1, price:4.25, color:"cyan", pins:"", dimensions:"Ø8 bore", purchaseUrl:"", sourceName:"Bearing supplier", sourceStatus:"Reference class" }),
  p({ id:"WH11", exportId:"shaft", name:"Drive shaft", productName:"8mm Linear Motion Shaft", description:"Main rotating shaft connecting the blades to the generator.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:1, price:8, color:"cyan", pins:"", dimensions:"Ø8x200mm", purchaseUrl:"", sourceName:"Shaft supplier", sourceStatus:"Reference class" }),
  p({ id:"WH12", exportId:"blades", name:"Turbine blades ×3", productName:"3D Printed Airfoil Blades", description:"High-efficiency airfoil blades for the horizontal-axis rotor.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:3, price:2, color:"violet", pins:"", dimensions:"PETG · 30% gyroid", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"WH13", exportId:"iso_mounts", name:"Generator mount & isolators", productName:"Motor Cradle + Anti-Vibration Mounts", description:"Vibration-damping cradle for the generator and rubber isolators.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:9, color:"violet", pins:"", dimensions:"PETG · 100% infill", purchaseUrl:"", sourceName:"In-house 3D print + parts", sourceStatus:"Print from project files" }),
  p({ id:"WH14", exportId:"mount_set", name:"Electronics mount set", productName:"3D Printed Cases & Brackets", description:"ESP32 case, rectifier clip, buck housing, sensor bracket, anemometer arm and OLED bezel.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:7, color:"violet", pins:"", dimensions:"PLA / PETG", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"WH15", exportId:"fastener_kit", name:"Fastener kit", productName:"M5 Screws, T-Nuts & M3 Hardware", description:"Frame fasteners, T-slot nuts and small hardware for the assembly.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:4.5, color:"slate", pins:"", dimensions:"Assorted", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Finalize after CAD freeze" }),
];

export const windHarvesterElectricalConnections = [
  { source:"generator", target:"rectifier", type:"power", voltage:"3-phase AC", current:"Variable", label:"Generator output" },
  { source:"rectifier", target:"mppt", type:"power", voltage:"Rectified DC", current:"Variable", label:"DC to MPPT" },
  { source:"mppt", target:"supercap", type:"power", voltage:"Regulated", current:"Charge", label:"Storage charging" },
  { source:"supercap", target:"power_sensor", type:"power", voltage:"Bus", current:"Load", label:"Monitored bus" },
  { source:"power_sensor", target:"controller", type:"data", protocol:"I2C", label:"Voltage & current" },
  { source:"controller", target:"wind_sensor", type:"data", protocol:"ADC", label:"Wind speed" },
  { source:"controller", target:"oled", type:"data", protocol:"I2C", label:"Power statistics" },
  { source:"supercap", target:"controller", type:"power", voltage:"5V", current:"0.5A", label:"Logic power" },
];

export const windHarvesterMechanicalConnections = [
  { source:"blades", target:"shaft", label:"Rotor hub on shaft" },
  { source:"shaft", target:"main_bearing", label:"Shaft in pillow block" },
  { source:"main_bearing", target:"frame", label:"Bearing on mast" },
  { source:"generator", target:"iso_mounts", label:"Generator cradle" },
  { source:"shaft", target:"generator", label:"Shaft to generator" },
  { source:"iso_mounts", target:"frame", label:"Cradle on frame" },
  { source:"mount_set", target:"frame", label:"Electronics on frame" },
  { source:"wind_sensor", target:"mount_set", label:"Anemometer arm" },
  { source:"fastener_kit", target:"frame", label:"Frame fasteners" },
];

export const windHarvesterInstructionPreamble: InstructionPreamble = {
  tools:["Hex drivers for 2020 extrusion","Soldering iron and heat-shrink","3D printer (PETG and PLA capable)","Multimeter","Balancing stand for the rotor","Bench with the ESP32 toolchain","Wire ferrules and crimper","Safety glasses"],
  assumptions:["Educational renewable-energy STEM use only","Mount the turbine securely and clear of people during spin-up","Supercapacitor bank charged and handled with proper safety","Balance the rotor before high-wind operation","Bring the bus down safely before servicing"],
};

export const windHarvesterInstructionSteps: InstructionSection[] = [
  { id:"fabricate", title:"Frame & rotor fabrication", subSteps:[
    { id:"wh_fab_1", title:"Assemble the 2020 base frame and mast", partIds:["frame","fastener_kit"] },
    { id:"wh_fab_2", title:"Print and balance the three airfoil blades on the hub", partIds:["blades","shaft"] },
    { id:"wh_fab_3", title:"Fit the pillow-block bearing and generator cradle", partIds:["main_bearing","iso_mounts","generator"] },
  ] },
  { id:"wire", title:"Generation & storage wiring", subSteps:[
    { id:"wh_wire_1", title:"Wire the generator through the 3-phase rectifier", partIds:["generator","rectifier"] },
    { id:"wh_wire_2", title:"Connect the rectifier to the MPPT converter and supercapacitor bank", partIds:["rectifier","mppt","supercap"] },
    { id:"wh_wire_3", title:"Wire the power sensor, controller and OLED", partIds:["power_sensor","controller","oled"] },
    { id:"wh_wire_4", title:"Add the anemometer and verify polarity before spin-up", partIds:["wind_sensor","controller"] },
  ] },
  { id:"bringup", title:"Firmware & bench test", subSteps:[
    { id:"wh_test_1", title:"Flash the ESP32 and confirm the sensor readings", partIds:["controller","power_sensor"] },
    { id:"wh_test_2", title:"Spin the generator by hand and verify charging into the bank", partIds:["generator","mppt","supercap"] },
    { id:"wh_test_3", title:"Calibrate the anemometer and power telemetry", partIds:["wind_sensor","oled"] },
  ] },
  { id:"assemble", title:"Final assembly & wind test", subSteps:[
    { id:"wh_asm_1", title:"Mount the rotor, generator and shaft on the frame", partIds:["blades","generator","shaft","frame"] },
    { id:"wh_asm_2", title:"Install the electronics, storage bank and display", partIds:["mount_set","supercap","oled"] },
    { id:"wh_asm_3", title:"Secure all fasteners and route wiring cleanly", partIds:["fastener_kit","iso_mounts"] },
    { id:"wh_asm_4", title:"Run a supervised outdoor wind test and log power output", partIds:["wind_sensor","power_sensor"] },
  ] },
];

export const WIND_HARVESTER = {
  key:"windharvester" as const,
  projectId:"modular-wind-harvester-01",
  name:"Modular Wind Harvester",
  eyebrow:"REFERENCE 13 · WIND ENERGY",
  description:"ESP32-controlled horizontal-axis wind turbine that rectifies a BLDC generator through an MPPT converter into a supercapacitor bank, with live power telemetry.",
  briefTitle:"Đón gió.\nPhát điện sạch.\nGiám sát công suất.",
  tags:["WIND ENERGY","MPPT + SUPERCAP","STEM"],
  visual:"/modular-wind-harvester-visual.png",
  originalPrompt:"Design a modular ESP32 wind harvester with a BLDC generator, MPPT converter and supercapacitor storage.",
  plan:"Requirements → rotor & frame → generator & rectifier → MPPT + supercapacitor storage → telemetry → bench charge test → supervised wind test",
  notes:["renewable energy","MPPT charging","supercapacitor storage","power telemetry"],
  componentCount:windHarvesterParts.length,
};

export function buildWindHarvesterCadProject(request = WIND_HARVESTER.originalPrompt, baseVersion = 1): CadProjectResult {
  const scene: CadProjectResult["scene"] = [
    { id:"base", label:"Base frame", kind:"box", size:[160,10,160], position:[0,-40,0], color:"#3a3f46", role:"enclosure" },
    { id:"mast", label:"Mast", kind:"box", size:[26,190,26], position:[0,60,20], color:"#2b2f35", role:"enclosure" },
    { id:"nacelle", label:"Generator nacelle", kind:"box", size:[46,44,90], position:[0,150,-10], color:"#30363d", role:"component" },
    { id:"generator", label:"BLDC generator", kind:"motor", size:[22,30,22], position:[0,150,-40], rotation:[1.57,0,0], color:"#242831", role:"component" },
    { id:"hub", label:"Rotor hub", kind:"cylinder", size:[14,16,14], position:[0,150,-58], rotation:[1.57,0,0], color:"#171a20", role:"component" },
    ...[0, 2.094, 4.188].map((ang, i) => ({ id:`blade-${i}`, label:`Turbine blade ${i+1}`, kind:"plate" as const, size:[24,4,150] as [number, number, number], position:[Math.sin(ang)*70, 150+Math.cos(ang)*70, -64] as [number, number, number], rotation:[0, 0, ang] as [number, number, number], color:"#9aa1a8", role:"component" as const })),
    { id:"ebox", label:"Electronics box", kind:"box", size:[80,60,44], position:[0,-6,55], color:"#343940", role:"mount" },
    { id:"supercap", label:"Supercapacitor bank", kind:"battery", size:[70,44,40], position:[0,-8,55], color:"#242831", role:"component" },
    { id:"oled", label:"Status OLED", kind:"pcb", size:[27,6,27], position:[0,26,78], rotation:[1.2,0,0], color:"#38424f", role:"component" },
    { id:"anemometer", label:"Anemometer", kind:"cylinder", size:[6,50,6], position:[70,90,20], color:"#c7ccd3", role:"component" },
  ];
  return {
    projectId:WIND_HARVESTER.projectId,
    draftId:`wind-harvester-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[400,500,300], clearanceMm:2, wallThicknessMm:2.5, printer:"FDM" },
    operations:[
      { id:"op-wh01", type:"create_box", label:"Build the 2020 base frame and mast", parameters:{ profile:"2020" } },
      { id:"op-wh02", type:"create_cylinder", label:"Print and balance the three-blade rotor", parameters:{ blades:3 } },
      { id:"op-wh03", type:"place_component", label:"Install the BLDC generator and bearing", parameters:{ generator:1 } },
      { id:"op-wh04", type:"place_component", label:"Wire the rectifier, MPPT and supercapacitor bank", parameters:{ storage:"supercap" } },
      { id:"op-wh05", type:"place_component", label:"Add the ESP32 monitor, power sensor and OLED", parameters:{ telemetry:true } },
      { id:"op-wh06", type:"add_pcb_mount", label:"Fit the anemometer on an offset arm", parameters:{ sensors:1 } },
    ],
    validation:{ passed:true, score:94, checksPassed:10, checksTotal:11, issues:[{ severity:"info", code:"WIND_BALANCE_GATE", message:"Balance the rotor and secure the turbine before any high-wind operation." }] },
    metrics:{ dimensionsMm:[300,480,260], estimatedPrintMinutes:520, estimatedMaterialGrams:240, primitiveCount:scene.length },
    scene,
  };
}
