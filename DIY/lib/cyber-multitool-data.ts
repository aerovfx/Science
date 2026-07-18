import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const cyberMultitoolParts: ProjectPart[] = [
  p({ id:"CM01", exportId:"mcu", name:"Main microcontroller", productName:"STM32WB55RGV6", description:"Wireless dual-core MCU running the tool firmware and BLE stack.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:7.5, color:"orange", pins:"SPI · I2C · GPIO · BLE", dimensions:"QFN68", purchaseUrl:"", sourceName:"STMicroelectronics", sourceStatus:"Official product reference" }),
  p({ id:"CM02", exportId:"display", name:"Monochrome LCD", productName:"ST7567 128x64 LCD", description:"Menu and status display.", category:"electrical", subtype:"module", type:"DISPLAY", qty:1, price:15, color:"violet", pins:"SPI · RST · DC", dimensions:"45x40mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"CM03", exportId:"touch", name:"Capacitive touch panel", productName:"Capacitive Touch Overlay", description:"Front-panel touch input.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:8, color:"lime", pins:"I2C · INT", dimensions:"45x40mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"CM04", exportId:"buttons", name:"Navigation buttons", productName:"Tactile Buttons ×5", description:"D-pad and select buttons for menu navigation.", category:"electrical", subtype:"input", type:"INPUT", qty:5, price:0.2, color:"lime", pins:"GPIO", dimensions:"6x6mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"CM05", exportId:"subghz", name:"Sub-GHz transceiver", productName:"CC1101 Sub-GHz Module", description:"Sub-GHz radio for testing your own 315/433/868/915 MHz devices.", category:"electrical", subtype:"module", type:"RADIO", qty:1, price:7, color:"violet", pins:"SPI · GDO", dimensions:"18x18mm", purchaseUrl:"", sourceName:"Texas Instruments", sourceStatus:"Authorized bench testing only" }),
  p({ id:"CM06", exportId:"rfid", name:"125 kHz RFID module", productName:"RDM6300 RFID Reader", description:"Low-frequency RFID reader for your own access cards.", category:"electrical", subtype:"module", type:"RADIO", qty:1, price:12, color:"violet", pins:"UART", dimensions:"39x33mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Authorized bench testing only" }),
  p({ id:"CM07", exportId:"nfc", name:"13.56 MHz NFC module", productName:"PN5180 NFC Frontend", description:"High-frequency NFC reader/writer for your own tags.", category:"electrical", subtype:"module", type:"RADIO", qty:1, price:20, color:"violet", pins:"SPI · IRQ", dimensions:"35x25mm", purchaseUrl:"", sourceName:"NXP", sourceStatus:"Authorized bench testing only" }),
  p({ id:"CM08", exportId:"ir", name:"IR transceiver", productName:"IR LED + TSOP Receiver", description:"Learn and replay infrared codes for your own remotes.", category:"electrical", subtype:"module", type:"IR", qty:1, price:4, color:"violet", pins:"GPIO · PWM", dimensions:"5mm LED", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"CM09", exportId:"sd", name:"microSD slot", productName:"microSD Card Socket", description:"Storage for firmware, logs and captured signal libraries.", category:"electrical", subtype:"storage", type:"STORAGE", qty:1, price:1.5, color:"violet", pins:"SPI", dimensions:"15x12mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"CM10", exportId:"battery", name:"LiPo battery", productName:"2000mAh LiPo 3.7V", description:"Rechargeable single-cell power source.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:10, color:"red", pins:"B+ · B−", dimensions:"55x35x8mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"CM11", exportId:"charger", name:"Charger & regulator", productName:"BQ25890 Charger + LDO", description:"USB-C charging and regulated rails.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:4, color:"red", pins:"VBUS · VBAT · 3V3", dimensions:"12x10mm", purchaseUrl:"", sourceName:"Texas Instruments", sourceStatus:"Reference class" }),
  p({ id:"CM12", exportId:"usbc", name:"USB-C port", productName:"USB-C Receptacle", description:"Charging and firmware/data over USB-C.", category:"electrical", subtype:"connector", type:"CONNECTOR", qty:1, price:0.5, color:"slate", pins:"VBUS · D+ · D− · CC", dimensions:"9x7mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"CM13", exportId:"antenna", name:"Antennas", productName:"Sub-GHz + NFC Antennas", description:"Whip antenna for sub-GHz and PCB coil for NFC.", category:"electrical", subtype:"antenna", type:"ANTENNA", qty:1, price:2, color:"slate", pins:"RF", dimensions:"Assorted", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"CM14", exportId:"enclosure", name:"Enclosure set", productName:"3D Printed Case ×6 parts", description:"Two-tone printed shell, buttons, light pipe and battery tray.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:6, price:8, color:"orange", pins:"", dimensions:"100x40x20mm", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"CM15", exportId:"fastener_kit", name:"Fastener kit", productName:"M2 Screws & Heat-Set Inserts", description:"Case screws and brass inserts.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:2.58, color:"slate", pins:"", dimensions:"M2", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Finalize after CAD freeze" }),
];

export const cyberMultitoolElectricalConnections = [
  { source:"battery", target:"charger", type:"power", voltage:"3.7V", current:"1A", label:"Battery to charger" },
  { source:"charger", target:"mcu", type:"power", voltage:"3.3V", current:"0.3A", label:"Regulated rail" },
  { source:"usbc", target:"charger", type:"power", voltage:"5V", current:"1.5A", label:"USB-C charging" },
  { source:"mcu", target:"subghz", type:"data", protocol:"SPI", label:"Sub-GHz radio" },
  { source:"mcu", target:"nfc", type:"data", protocol:"SPI", label:"NFC frontend" },
  { source:"mcu", target:"rfid", type:"data", protocol:"UART", label:"125kHz RFID" },
  { source:"mcu", target:"ir", type:"data", protocol:"GPIO/PWM", label:"IR transceiver" },
  { source:"mcu", target:"sd", type:"data", protocol:"SPI", label:"microSD storage" },
  { source:"mcu", target:"display", type:"data", protocol:"SPI", label:"LCD" },
  { source:"touch", target:"mcu", type:"data", protocol:"I2C", label:"Touch input" },
  { source:"buttons", target:"mcu", type:"data", protocol:"GPIO", label:"Buttons" },
  { source:"antenna", target:"subghz", type:"rf", protocol:"RF", label:"Sub-GHz antenna" },
];

export const cyberMultitoolMechanicalConnections = [
  { source:"mcu", target:"enclosure", label:"Mainboard in case" },
  { source:"display", target:"enclosure", label:"LCD window" },
  { source:"touch", target:"enclosure", label:"Touch overlay" },
  { source:"battery", target:"enclosure", label:"Battery tray" },
  { source:"antenna", target:"enclosure", label:"Antenna routing" },
  { source:"fastener_kit", target:"enclosure", label:"Case screws" },
];

export const cyberMultitoolInstructionPreamble: InstructionPreamble = {
  tools:["Fine-tip soldering iron and hot air","Solder paste and stencil for QFN/QFN68","3D printer","Multimeter","USB-C cable","Computer with the STM32 toolchain","Heat-set insert tip"],
  assumptions:[
    "AUTHORIZED, LEGAL USE ONLY — a personal security-research and learning tool.",
    "Operate ONLY on devices, cards, tags and remotes that you own or are explicitly permitted to test.",
    "Radio use must respect local RF regulations, licensed bands and power limits in your jurisdiction.",
    "No use for unauthorized access, interference, cloning of others' credentials, or bypassing security you do not own.",
    "SMT/QFN soldering and RF bring-up require intermediate electronics experience.",
  ],
};

export const cyberMultitoolInstructionSteps: InstructionSection[] = [
  { id:"fabricate", title:"Mainboard fabrication", subSteps:[
    { id:"cm_fab_1", title:"Reflow the STM32WB55 MCU and support ICs", partIds:["mcu","charger"] },
    { id:"cm_fab_2", title:"Solder the radio modules, IR and microSD", partIds:["subghz","nfc","rfid","ir","sd"] },
    { id:"cm_fab_3", title:"Fit the USB-C port, buttons and display header", partIds:["usbc","buttons","display"] },
  ] },
  { id:"print", title:"Enclosure & assembly", subSteps:[
    { id:"cm_print_1", title:"Print the enclosure and install heat-set inserts", partIds:["enclosure","fastener_kit"] },
    { id:"cm_print_2", title:"Mount the LCD, touch overlay and light pipe", partIds:["display","touch"] },
    { id:"cm_print_3", title:"Install the battery, antennas and mainboard", partIds:["battery","antenna","mcu"] },
  ] },
  { id:"bringup", title:"Firmware & authorized bring-up", subSteps:[
    { id:"cm_test_1", title:"Flash firmware over USB-C and verify power rails", partIds:["mcu","charger","usbc"] },
    { id:"cm_test_2", title:"Test the display, touch panel and buttons", partIds:["display","touch","buttons"] },
    { id:"cm_test_3", title:"Bench-test each radio on YOUR OWN tags/remotes only", partIds:["subghz","nfc","rfid","ir"] },
    { id:"cm_test_4", title:"Confirm charging, battery runtime and storage", partIds:["battery","sd"] },
  ] },
];

export const CYBER_MULTITOOL = {
  key:"cybertool" as const,
  projectId:"cyber-multitool-01",
  name:"Cyber Multi-tool",
  eyebrow:"REFERENCE 27 · SECURITY RESEARCH TOOL",
  description:"Handheld security-research and learning tool with sub-GHz, NFC, RFID and IR — for authorized, legal use on your own devices only. STM32WB55 core, LCD/touch UI, LiPo power.",
  briefTitle:"Công cụ nghiên cứu bảo mật.\nSub-GHz · NFC · RFID · IR.\nChỉ dùng hợp pháp trên thiết bị của bạn.",
  tags:["SECURITY RESEARCH","STM32WB55 · MULTI-RADIO","AUTHORIZED USE ONLY"],
  visual:"",
  originalPrompt:"Design a handheld multi-radio security-research learning tool (sub-GHz, NFC, RFID, IR) built around an STM32WB55, LCD/touch UI and a LiPo battery, for authorized and legal use only.",
  plan:"Requirements & legal scope → STM32WB55 mainboard → multi-radio front-ends → LCD/touch UI → LiPo power & USB-C → enclosure → authorized bench bring-up",
  notes:["security-research learning tool","authorized/legal use only","own devices and credentials only","respect local RF regulations"],
  componentCount:cyberMultitoolParts.length,
};

export function buildCyberMultitoolCadProject(request = CYBER_MULTITOOL.originalPrompt, baseVersion = 1): CadProjectResult {
  const scene: CadProjectResult["scene"] = [
    { id:"case", label:"Enclosure", kind:"box", size:[100,20,44], position:[0,10,0], color:"#e08a2a", role:"enclosure" },
    { id:"case-top", label:"Top shell", kind:"box", size:[100,4,44], position:[0,22,0], color:"#2b2f36", opacity:0.9, role:"enclosure" },
    { id:"lcd", label:"128x64 LCD", kind:"pcb", size:[46,3,40], position:[-18,24,0], color:"#0f172a", role:"component" },
    { id:"mainboard", label:"STM32WB55 mainboard", kind:"pcb", size:[92,3,38], position:[0,8,0], color:"#157d55", role:"component" },
    { id:"mcu", label:"STM32WB55", kind:"box", size:[9,3,9], position:[10,10,0], color:"#f0842a", role:"component" },
    { id:"subghz", label:"CC1101", kind:"box", size:[16,4,16], position:[28,11,-8], color:"#7c5cff", role:"component" },
    { id:"nfc", label:"PN5180 + coil", kind:"box", size:[20,3,18], position:[28,10,10], color:"#7c5cff", role:"component" },
    { id:"battery", label:"2000mAh LiPo", kind:"battery", size:[50,7,32], position:[-20,6,0], color:"#c9403d", role:"component" },
    { id:"antenna", label:"Sub-GHz antenna", kind:"cylinder", size:[2,60,2], position:[46,44,-14], color:"#c7ccd3", role:"mount" },
    { id:"usbc", label:"USB-C", kind:"box", size:[9,4,7], position:[-50,8,0], rotation:[0,1.57,0], color:"#38424f", role:"component" },
    { id:"dpad", label:"Buttons", kind:"box", size:[24,3,20], position:[30,24,0], color:"#2b2f36", role:"component" },
  ];
  return {
    projectId:CYBER_MULTITOOL.projectId,
    draftId:`cyber-multitool-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[110,50,55], clearanceMm:0.5, wallThicknessMm:2, printer:"FDM" },
    operations:[
      { id:"op-cm01", type:"place_component", label:"Reflow the STM32WB55 mainboard", parameters:{ mcu:1 } },
      { id:"op-cm02", type:"place_component", label:"Add sub-GHz, NFC, RFID and IR front-ends", parameters:{ radios:4 } },
      { id:"op-cm03", type:"place_component", label:"Fit the LCD, touch panel and buttons", parameters:{ ui:3 } },
      { id:"op-cm04", type:"place_component", label:"Install the LiPo, charger and USB-C", parameters:{ power:3 } },
      { id:"op-cm05", type:"create_box", label:"Print and assemble the enclosure", parameters:{ parts:6 } },
    ],
    validation:{ passed:true, score:90, checksPassed:11, checksTotal:12, issues:[{ severity:"warning", code:"LEGAL_USE_GATE", message:"Authorized/legal use only: operate solely on devices, cards and remotes you own or are permitted to test, and respect local RF regulations." }] },
    metrics:{ dimensionsMm:[100,45,44], estimatedPrintMinutes:240, estimatedMaterialGrams:90, primitiveCount:scene.length },
    scene,
  };
}
