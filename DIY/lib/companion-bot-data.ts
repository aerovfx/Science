import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const companionParts: ProjectPart[] = [
  p({ id:"DC01", exportId:"controller", name:"Main controller", productName:"ESP32-S3-DevKitC-1", description:"ESP32-S3 board running the UI, sensor logic and interactive behaviors.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:12, color:"orange", pins:"SPI · I2C · GPIO · USB · 3.3V", dimensions:"70x26x10mm", purchaseUrl:"", sourceName:"Espressif", sourceStatus:"Official product reference" }),
  p({ id:"DC02", exportId:"imu", name:"Motion sensor", productName:"MPU-6050 IMU", description:"6-axis accelerometer and gyroscope for tilt, tap and motion interactions.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:5, color:"lime", pins:"I2C · 3.3V", dimensions:"20x16x3mm", purchaseUrl:"", sourceName:"InvenSense / generic", sourceStatus:"Reference class" }),
  p({ id:"DC03", exportId:"th_sensor", name:"Temp/humidity sensor", productName:"SHT31-D Module", description:"Accurate ambient temperature and humidity sensing.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:8, color:"lime", pins:"I2C · 3.3V", dimensions:"20x16x3mm", purchaseUrl:"", sourceName:"Sensirion", sourceStatus:"Reference class" }),
  p({ id:"DC04", exportId:"charger", name:"LiPo charger & boost", productName:"TP4056 with 5V Boost", description:"Charges the LiPo over USB and boosts to a stable 5 V rail.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:4, color:"red", pins:"IN · BAT · 5V OUT", dimensions:"26x18x5mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"DC05", exportId:"battery", name:"Battery", productName:"3.7V 1000mAh LiPo", description:"Rechargeable pack powering the desk companion.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:8, color:"red", pins:"VBAT+ · VBAT−", dimensions:"50x30x6mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Handle per LiPo safety" }),
  p({ id:"DC06", exportId:"lcd", name:"TFT display", productName:"2.4\" SPI TFT LCD (ILI9341)", description:"240x320 display for faces, menus and status screens.", category:"electrical", subtype:"module", type:"DISPLAY", qty:1, price:15, color:"violet", pins:"SPI · 3.3V", dimensions:"50x69x4mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"DC07", exportId:"enclosure", name:"Enclosure & bezel", productName:"3D Printed Body + LCD Bezel", description:"Printed cuboid shell with internal mounts and a snug LCD bezel frame.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:3.3, color:"violet", pins:"", dimensions:"PETG · 25% infill", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"DC08", exportId:"decor", name:"Character decor", productName:"3D Printed Cat Ears & Tail", description:"Decorative cat ears and tail giving the bot its personality.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:2, color:"violet", pins:"", dimensions:"PLA / PETG", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"DC09", exportId:"mount_set", name:"Internal mounts", productName:"3D Printed Board & Battery Mounts", description:"ESP32-S3, charger, battery and sensor mounting brackets.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:1.5, color:"violet", pins:"", dimensions:"PLA · 20% infill", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"DC10", exportId:"fastener_kit", name:"Fastener kit", productName:"M2/M3 Standoffs, Screws & Inserts", description:"Brass standoffs, screws and heat-set inserts for the enclosure.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:2.3, color:"slate", pins:"", dimensions:"Assorted", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Finalize after CAD freeze" }),
];

export const companionElectricalConnections = [
  { source:"battery", target:"charger", type:"power", voltage:"3.7V", current:"1A", label:"Battery to charger/boost" },
  { source:"charger", target:"controller", type:"power", voltage:"5V", current:"1A", label:"Regulated 5V rail" },
  { source:"controller", target:"lcd", type:"data", protocol:"SPI", label:"Display" },
  { source:"controller", target:"imu", type:"data", protocol:"I2C", label:"Motion & tilt" },
  { source:"controller", target:"th_sensor", type:"data", protocol:"I2C", label:"Temp & humidity" },
];

export const companionMechanicalConnections = [
  { source:"controller", target:"mount_set", label:"Controller mount" },
  { source:"charger", target:"mount_set", label:"Charger mount" },
  { source:"battery", target:"mount_set", label:"Battery tray" },
  { source:"lcd", target:"enclosure", label:"LCD in bezel" },
  { source:"mount_set", target:"enclosure", label:"Mounts in body" },
  { source:"decor", target:"enclosure", label:"Ears and tail" },
  { source:"fastener_kit", target:"enclosure", label:"Enclosure fasteners" },
];

export const companionInstructionPreamble: InstructionPreamble = {
  tools:["Soldering iron and fine tip","Heat-set insert tip","3D printer (PLA and PETG capable)","M2/M3 drivers","Multimeter","USB cable","Tweezers","Computer with the ESP32 toolchain"],
  assumptions:["Educational and hobby desktop-gadget use only","LiPo charged and handled with proper safety","Sensors used for ambient sensing only","Keep the enclosure ventilated","Basic soldering experience"],
};

export const companionInstructionSteps: InstructionSection[] = [
  { id:"fabricate", title:"Enclosure & printing", subSteps:[
    { id:"dc_fab_1", title:"Print the enclosure body, LCD bezel and character decor", partIds:["enclosure","decor"] },
    { id:"dc_fab_2", title:"Print the internal board and battery mounts", partIds:["mount_set"] },
    { id:"dc_fab_3", title:"Install heat-set inserts and dry-fit the components", partIds:["enclosure","fastener_kit"] },
  ] },
  { id:"wire", title:"Power & sensor wiring", subSteps:[
    { id:"dc_wire_1", title:"Wire the battery, TP4056 charger and 5V boost", partIds:["battery","charger"] },
    { id:"dc_wire_2", title:"Connect the ESP32-S3 to the TFT display over SPI", partIds:["controller","lcd"] },
    { id:"dc_wire_3", title:"Wire the IMU and temp/humidity sensors on the I2C bus", partIds:["controller","imu","th_sensor"] },
    { id:"dc_wire_4", title:"Verify power and continuity before assembly", partIds:["charger","controller"] },
  ] },
  { id:"bringup", title:"Firmware & UI", subSteps:[
    { id:"dc_test_1", title:"Flash the ESP32-S3 and bring up the display", partIds:["controller","lcd"] },
    { id:"dc_test_2", title:"Calibrate the IMU and read the environment sensor", partIds:["imu","th_sensor"] },
    { id:"dc_test_3", title:"Test the interactive UI, faces and gestures", partIds:["controller","lcd","imu"] },
  ] },
  { id:"assemble", title:"Final assembly", subSteps:[
    { id:"dc_asm_1", title:"Mount the controller, charger and battery in the body", partIds:["mount_set","controller","battery"] },
    { id:"dc_asm_2", title:"Fit the LCD into the bezel and close the enclosure", partIds:["lcd","enclosure"] },
    { id:"dc_asm_3", title:"Attach the cat ears and tail", partIds:["decor","fastener_kit"] },
    { id:"dc_asm_4", title:"Charge fully and run the companion behaviors on the desk", partIds:["battery","controller"] },
  ] },
];

export const COMPANION_BOT = {
  key:"companion" as const,
  projectId:"desktop-companion-bot-01",
  name:"Desktop Companion Bot",
  eyebrow:"REFERENCE 20 · DESKTOP GADGET",
  description:"Palm-sized desk companion with an ESP32-S3, a 2.4-inch color display and motion and environment sensors in a printed cat-eared enclosure for interactive desktop presence.",
  briefTitle:"Nhỏ gọn trên bàn.\nMàn hình biểu cảm.\nTương tác dễ thương.",
  tags:["DESKTOP GADGET","ESP32-S3 + TFT","INTERACTIVE"],
  visual:"",
  originalPrompt:"Design a desktop companion bot with an ESP32-S3, a 2.4-inch display and motion and environment sensors in a cute enclosure.",
  plan:"Requirements → enclosure & display → ESP32-S3 control → motion & environment sensing → power → UI behaviors → desk test",
  notes:["desktop gadget","color display","motion + environment sensing","interactive UI"],
  componentCount:companionParts.length,
};

export function buildCompanionCadProject(request = COMPANION_BOT.originalPrompt, baseVersion = 1): CadProjectResult {
  const scene: CadProjectResult["scene"] = [
    { id:"body", label:"Enclosure body", kind:"box", size:[80,90,60], position:[0,55,0], color:"#3a3f46", role:"enclosure" },
    { id:"bezel", label:"LCD bezel", kind:"plate", size:[70,80,6], position:[0,58,-30], color:"#2b2f35", role:"enclosure" },
    { id:"lcd", label:"2.4\" TFT display", kind:"pcb", size:[52,70,4], position:[0,58,-33], rotation:[1.57,0,0], color:"#1c1f24", role:"component" },
    { id:"ear-left", label:"Left cat ear", kind:"box", size:[18,26,10], position:[-26,104,0], rotation:[0,0,0.3], color:"#4a4f56", role:"component" },
    { id:"ear-right", label:"Right cat ear", kind:"box", size:[18,26,10], position:[26,104,0], rotation:[0,0,-0.3], color:"#4a4f56", role:"component" },
    { id:"tail", label:"Tail", kind:"cylinder", size:[6,60,6], position:[46,40,30], rotation:[0.6,0,0.4], color:"#4a4f56", role:"component" },
    { id:"controller", label:"ESP32-S3", kind:"pcb", size:[52,10,26], position:[0,40,10], color:"#157d55", role:"component" },
    { id:"battery", label:"LiPo battery", kind:"battery", size:[46,10,30], position:[0,22,10], color:"#242831", role:"component" },
    { id:"imu", label:"IMU + T/H sensors", kind:"pcb", size:[36,6,18], position:[0,54,25], color:"#38424f", role:"component" },
  ];
  return {
    projectId:COMPANION_BOT.projectId,
    draftId:`companion-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[120,140,90], clearanceMm:0.8, wallThicknessMm:2, printer:"FDM" },
    operations:[
      { id:"op-dc01", type:"create_box", label:"Build the cuboid enclosure and bezel", parameters:{ body:1 } },
      { id:"op-dc02", type:"place_component", label:"Fit the 2.4-inch TFT display", parameters:{ display:1 } },
      { id:"op-dc03", type:"place_component", label:"Place the ESP32-S3, charger and battery", parameters:{ electronics:3 } },
      { id:"op-dc04", type:"add_pcb_mount", label:"Add the IMU and environment sensors", parameters:{ sensors:2 } },
      { id:"op-dc05", type:"place_component", label:"Attach the cat ears and tail", parameters:{ decor:3 } },
    ],
    validation:{ passed:true, score:96, checksPassed:9, checksTotal:9, issues:[{ severity:"info", code:"GADGET_BRINGUP_GATE", message:"Charge fully and verify sensors and display before closing the enclosure." }] },
    metrics:{ dimensionsMm:[80,110,80], estimatedPrintMinutes:180, estimatedMaterialGrams:70, primitiveCount:scene.length },
    scene,
  };
}
