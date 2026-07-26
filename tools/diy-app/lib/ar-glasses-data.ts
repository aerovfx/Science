import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const arGlassesParts: ProjectPart[] = [
  p({ id:"AR01", exportId:"controller", name:"Main controller", productName:"ESP32-S3 Dev Board", description:"Wi-Fi/Bluetooth controller processing sensors and driving the display overlay.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:10, color:"orange", pins:"SPI · I2C · I2S · GPIO · 3.3V", dimensions:"45x25x5mm", purchaseUrl:"", sourceName:"Espressif", sourceStatus:"Reference class" }),
  p({ id:"AR02", exportId:"camera", name:"Camera module", productName:"ESP32-CAM Module", description:"Integrated camera for image capture and streaming.", category:"electrical", subtype:"module", type:"MODULE", qty:1, price:12, color:"violet", pins:"UART · GPIO · CAM", dimensions:"40x27x12mm", purchaseUrl:"", sourceName:"AI-Thinker", sourceStatus:"Reference class" }),
  p({ id:"AR03", exportId:"mic", name:"Digital microphone", productName:"INMP441 I2S Mic", description:"Clear I2S microphone for voice input.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:3, color:"lime", pins:"I2S · 3.3V", dimensions:"14x10x3mm", purchaseUrl:"", sourceName:"InvenSense", sourceStatus:"Reference class" }),
  p({ id:"AR04", exportId:"imu", name:"Head-tracking IMU", productName:"6-Axis IMU Sensor", description:"Accelerometer + gyroscope for head tracking and orientation.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:5, color:"lime", pins:"I2C · 3.3V", dimensions:"20x16x3mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"AR05", exportId:"oled", name:"Micro-display", productName:"OLED Display", description:"Compact OLED whose image is magnified into the AR overlay.", category:"electrical", subtype:"module", type:"DISPLAY", qty:1, price:15, color:"violet", pins:"SPI / I2C · 3.3V", dimensions:"Micro OLED", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"AR06", exportId:"magnifier", name:"Magnifying optic", productName:"Magnifying Sheet / Lens", description:"Optical element magnifying the OLED for the eye.", category:"mechanical", subtype:"mechanism", type:"MISC", qty:1, price:3, color:"cyan", pins:"", dimensions:"Fresnel / lens", purchaseUrl:"", sourceName:"Optics supplier", sourceStatus:"Reference class" }),
  p({ id:"AR07", exportId:"speaker", name:"Speaker", productName:"8 Ohm Miniature Speaker", description:"Audio output for alerts and voice responses.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:1, price:4, color:"blue", pins:"SPK+ · SPK−", dimensions:"Ø15mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"AR08", exportId:"amp", name:"Audio amplifier", productName:"PAM8403 Mini", description:"Miniature amplifier driving the speaker.", category:"electrical", subtype:"module", type:"MODULE", qty:1, price:2, color:"violet", pins:"IN · SPK · 5V", dimensions:"18x10x3mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"AR09", exportId:"sd", name:"microSD storage", productName:"Micro SD Card Module", description:"Expandable storage for logging and media.", category:"electrical", subtype:"module", type:"MODULE", qty:1, price:5, color:"violet", pins:"SPI · 3.3V", dimensions:"24x24x3mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"AR10", exportId:"battery", name:"Battery", productName:"Li-Ion Battery (3.7V)", description:"Rechargeable pack powering the glasses.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:10, color:"red", pins:"VBAT+ · VBAT−", dimensions:"Flat cell", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Handle per Li-ion safety" }),
  p({ id:"AR11", exportId:"power_kit", name:"Power management", productName:"LDO + Boost + Protection Board", description:"3.3 V LDO, step-up boost and LiPo protection for the wearable.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:8.5, color:"red", pins:"BAT · 3.3V · 5V", dimensions:"Assorted", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"AR12", exportId:"pcb", name:"Custom PCB", productName:"Custom PCB Board", description:"Routing board tying the modules together compactly.", category:"electrical", subtype:"module", type:"MODULE", qty:1, price:5, color:"violet", pins:"", dimensions:"Custom", purchaseUrl:"", sourceName:"PCB fab", sourceStatus:"Fabricate from project files" }),
  p({ id:"AR13", exportId:"frame", name:"Glasses frame", productName:"AR Front + Temple Frames", description:"Front frame and temple arms housing the electronics and optics.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:35, color:"slate", pins:"", dimensions:"Eyewear frame", purchaseUrl:"", sourceName:"3D print / supplier", sourceStatus:"Print or source frame" }),
  p({ id:"AR14", exportId:"small_parts", name:"Switches & thermal", productName:"Button, Toggle Switch & Thermal Tape", description:"User button, power toggle and thermal tape for heat spreading.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:3.5, color:"slate", pins:"", dimensions:"Assorted", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Finalize after CAD freeze" }),
];

export const arGlassesElectricalConnections = [
  { source:"battery", target:"power_kit", type:"power", voltage:"3.7V", current:"1A", label:"Protected battery" },
  { source:"power_kit", target:"controller", type:"power", voltage:"3.3V", current:"0.5A", label:"Logic power" },
  { source:"controller", target:"oled", type:"data", protocol:"SPI / I2C", label:"AR overlay" },
  { source:"controller", target:"camera", type:"data", protocol:"UART", label:"Image capture" },
  { source:"controller", target:"imu", type:"data", protocol:"I2C", label:"Head tracking" },
  { source:"controller", target:"mic", type:"data", protocol:"I2S", label:"Voice input" },
  { source:"controller", target:"amp", type:"data", protocol:"I2S / analog", label:"Audio out" },
  { source:"amp", target:"speaker", type:"data", protocol:"Analog audio", label:"Speaker drive" },
  { source:"controller", target:"sd", type:"data", protocol:"SPI", label:"Storage" },
];

export const arGlassesMechanicalConnections = [
  { source:"oled", target:"frame", label:"Display in front frame" },
  { source:"magnifier", target:"oled", label:"Magnifier over display" },
  { source:"pcb", target:"frame", label:"PCB in temple" },
  { source:"controller", target:"pcb", label:"Controller on PCB" },
  { source:"camera", target:"frame", label:"Camera in front frame" },
  { source:"battery", target:"frame", label:"Battery in temple arm" },
  { source:"speaker", target:"frame", label:"Speaker near ear" },
  { source:"small_parts", target:"frame", label:"Switches and thermal tape" },
];

export const arGlassesInstructionPreamble: InstructionPreamble = {
  tools:["Fine-tip soldering iron","Precision tweezers and cutters","3D printer (for the frame)","Multimeter","Optical alignment jig","Small screwdrivers","Kapton / thermal tape","Computer with the ESP32 toolchain"],
  assumptions:["Educational and hobby wearable use only","Camera and microphone used only where legally permitted and with clear consent","Li-ion handled with proper protection and safety","Keep display brightness safe for the eye","Do not wear while driving or where situational awareness is required"],
};

export const arGlassesInstructionSteps: InstructionSection[] = [
  { id:"fabricate", title:"Frame & optics fabrication", subSteps:[
    { id:"ar_fab_1", title:"Print or prepare the front and temple frames", partIds:["frame","small_parts"] },
    { id:"ar_fab_2", title:"Fit the OLED and align the magnifying optic", partIds:["oled","magnifier"] },
    { id:"ar_fab_3", title:"Lay out the modules on the custom PCB", partIds:["pcb","controller"] },
  ] },
  { id:"wire", title:"Electronics wiring", subSteps:[
    { id:"ar_wire_1", title:"Wire the battery, protection, boost and LDO", partIds:["battery","power_kit"] },
    { id:"ar_wire_2", title:"Connect the controller, camera and OLED", partIds:["controller","camera","oled"] },
    { id:"ar_wire_3", title:"Wire the microphone, amplifier, speaker and SD", partIds:["mic","amp","speaker","sd"] },
    { id:"ar_wire_4", title:"Add the IMU and verify all rails before assembly", partIds:["imu","power_kit"] },
  ] },
  { id:"bringup", title:"Firmware & optics test", subSteps:[
    { id:"ar_test_1", title:"Flash the ESP32-S3 and bring up the OLED overlay", partIds:["controller","oled"] },
    { id:"ar_test_2", title:"Focus and align the magnifier for a clear virtual image", partIds:["magnifier","oled"] },
    { id:"ar_test_3", title:"Test head tracking, camera, mic and audio", partIds:["imu","camera","mic","speaker"] },
  ] },
  { id:"assemble", title:"Final assembly & fit", subSteps:[
    { id:"ar_asm_1", title:"Install the PCB, controller and battery in the temples", partIds:["pcb","controller","battery"] },
    { id:"ar_asm_2", title:"Mount the display, optic and camera in the front frame", partIds:["oled","magnifier","camera"] },
    { id:"ar_asm_3", title:"Fit the speaker, switches and thermal tape", partIds:["speaker","small_parts"] },
    { id:"ar_asm_4", title:"Check comfort, balance and the overlay while worn", partIds:["frame","oled"] },
  ] },
];

export const AR_GLASSES = {
  key:"arglasses" as const,
  projectId:"ar-smart-glasses-01",
  name:"AR Smart Glasses",
  eyebrow:"REFERENCE 21 · AR WEARABLE",
  description:"ESP32-S3 AR glasses that overlay navigation, weather and translation on a magnified OLED, with a camera, microphone, IMU head tracking and audio out.",
  briefTitle:"Lớp phủ AR.\nCamera và giọng nói.\nĐeo gọn nhẹ.",
  tags:["AR WEARABLE","ESP32-S3","OLED OVERLAY"],
  visual:"",
  originalPrompt:"Design ESP32-S3 AR smart glasses with a magnified OLED overlay, camera, microphone, IMU head tracking and audio.",
  plan:"Requirements → frame & optics → ESP32-S3 + camera + OLED → audio & sensors → power → optics alignment → wear test",
  notes:["AR wearable","magnified OLED overlay","camera + voice","head tracking"],
  componentCount:arGlassesParts.length,
};

export function buildArGlassesCadProject(request = AR_GLASSES.originalPrompt, baseVersion = 1): CadProjectResult {
  const scene: CadProjectResult["scene"] = [
    { id:"front-frame", label:"Front frame", kind:"box", size:[150,40,14], position:[0,40,0], color:"#3a3f46", role:"enclosure" },
    { id:"lens-left", label:"Left lens", kind:"cylinder", size:[26,6,26], position:[-38,40,8], rotation:[1.57,0,0], color:"#8fa3ad", opacity:0.4, role:"enclosure" },
    { id:"lens-right", label:"Right lens", kind:"cylinder", size:[26,6,26], position:[38,40,8], rotation:[1.57,0,0], color:"#8fa3ad", opacity:0.4, role:"enclosure" },
    { id:"bridge", label:"Bridge", kind:"box", size:[24,10,10], position:[0,44,6], color:"#2b2f35", role:"component" },
    { id:"temple-left", label:"Left temple", kind:"box", size:[12,10,110], position:[-72,42,55], color:"#2b2f35", role:"enclosure" },
    { id:"temple-right", label:"Right temple", kind:"box", size:[12,10,110], position:[72,42,55], color:"#2b2f35", role:"enclosure" },
    { id:"oled", label:"OLED micro-display", kind:"pcb", size:[18,16,4], position:[38,40,-6], rotation:[1.57,0,0], color:"#1c1f24", role:"component" },
    { id:"camera", label:"Camera", kind:"box", size:[14,12,10], position:[0,52,-4], color:"#1c1f24", role:"component" },
    { id:"pcb", label:"Controller PCB", kind:"pcb", size:[10,8,60], position:[-72,42,60], color:"#157d55", role:"component" },
    { id:"battery", label:"Li-Ion battery", kind:"battery", size:[10,8,50], position:[72,42,60], color:"#242831", role:"component" },
    { id:"speaker", label:"Speaker", kind:"cylinder", size:[7,6,7], position:[-72,42,105], rotation:[1.57,0,0], color:"#4a4f56", role:"component" },
  ];
  return {
    projectId:AR_GLASSES.projectId,
    draftId:`ar-glasses-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[160,60,160], clearanceMm:0.6, wallThicknessMm:1.6, printer:"FDM" },
    operations:[
      { id:"op-ar01", type:"create_box", label:"Build the front and temple frames", parameters:{ frame:1 } },
      { id:"op-ar02", type:"place_component", label:"Fit the OLED and magnifying optic", parameters:{ display:1 } },
      { id:"op-ar03", type:"place_component", label:"Place the ESP32-S3, camera and PCB", parameters:{ electronics:3 } },
      { id:"op-ar04", type:"add_pcb_mount", label:"Add the IMU, mic, amplifier and speaker", parameters:{ audio:true } },
      { id:"op-ar05", type:"place_component", label:"Install the battery and power management in a temple", parameters:{ component:"battery" } },
    ],
    validation:{ passed:true, score:90, checksPassed:9, checksTotal:10, issues:[{ severity:"info", code:"WEARABLE_OPTICS_GATE", message:"Align the optic for a clear image and keep display brightness eye-safe; use only with consent." }] },
    metrics:{ dimensionsMm:[150,55,120], estimatedPrintMinutes:150, estimatedMaterialGrams:45, primitiveCount:scene.length },
    scene,
  };
}
