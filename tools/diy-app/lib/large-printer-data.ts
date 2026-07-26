import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const largePrinterParts: ProjectPart[] = [
  p({ id:"LP01", exportId:"controller", name:"Main controller", productName:"BigTreeTech SKR 2", description:"32-bit board handling kinematics, motion, heating and sensors.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:50, color:"orange", pins:"STEP · HEAT · THERM · ENDSTOP", dimensions:"110x85x20mm", purchaseUrl:"", sourceName:"BigTreeTech", sourceStatus:"Reference class" }),
  p({ id:"LP02", exportId:"drivers", name:"Stepper drivers ×5", productName:"TMC2209 Stepper Driver", description:"Silent drivers for X, Y, dual-Z and extruder.", category:"electrical", subtype:"module", type:"MODULE", qty:5, price:8, color:"violet", pins:"STEP · DIR · UART", dimensions:"20x15x10mm", purchaseUrl:"", sourceName:"BigTreeTech", sourceStatus:"Reference class" }),
  p({ id:"LP03", exportId:"display", name:"Touchscreen display", productName:"BIGTREETECH TFT35 E3 V3.0", description:"Touchscreen for local control and status.", category:"electrical", subtype:"module", type:"DISPLAY", qty:1, price:35, color:"violet", pins:"UART · 5V", dimensions:"98x62x12mm", purchaseUrl:"", sourceName:"BigTreeTech", sourceStatus:"Reference class" }),
  p({ id:"LP04", exportId:"steppers", name:"Stepper motors ×5", productName:"NEMA 17 1.7A 59Ncm", description:"Motors for X, Y, two Z and the extruder.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:5, price:18, color:"blue", pins:"A+ · A− · B+ · B−", dimensions:"42x42x48mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"LP05", exportId:"thermistors", name:"Thermistors ×2", productName:"NTC 100K Thermistor", description:"Hotend and heated-bed temperature sensing.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:2, price:3, color:"lime", pins:"2-wire", dimensions:"Glass bead", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"LP06", exportId:"endstops", name:"Endstops ×2", productName:"Mechanical Endstop Module", description:"X and Y homing endstops.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:2, price:2, color:"lime", pins:"COM · NO · NC", dimensions:"33x16x10mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"LP07", exportId:"bltouch", name:"Auto bed leveling", productName:"BLTouch Sensor", description:"Automatic bed-leveling probe for a precise first layer.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:40, color:"lime", pins:"SIG · PWM · 5V", dimensions:"Ø11x40mm", purchaseUrl:"", sourceName:"ANTCLABS / generic", sourceStatus:"Reference class" }),
  p({ id:"LP08", exportId:"heater", name:"Hotend heater", productName:"24V 60W Heater Cartridge", description:"Heats the hotend nozzle.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:1, price:5, color:"blue", pins:"2-wire", dimensions:"Ø6x20mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"LP09", exportId:"bed_heater", name:"Bed heater", productName:"Silicone Heater Pad 300x300 24V", description:"Heats the large build platform for adhesion.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:1, price:30, color:"blue", pins:"HEAT · THERM", dimensions:"300x300mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"LP10", exportId:"fans", name:"Cooling fans", productName:"5015 Part + 4010 Hotend Fans (24V)", description:"Part-cooling blower and hotend heat-break fan.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:1, price:12, color:"blue", pins:"24V · GND", dimensions:"50/40mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"LP11", exportId:"psu", name:"Power supply", productName:"Mean Well LRS-350-24", description:"24 V 14.6 A supply for the whole machine.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:40, color:"red", pins:"AC IN · 24V · GND", dimensions:"215x115x30mm", purchaseUrl:"", sourceName:"Mean Well", sourceStatus:"Official product reference" }),
  p({ id:"LP12", exportId:"frame", name:"Extrusion frame", productName:"2040 ×4 + 2020 ×8 + Corner Brackets", description:"Vertical 2040 and horizontal 2020 extrusions with corner brackets forming the large frame.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:134, color:"slate", pins:"", dimensions:"2040/2020", purchaseUrl:"", sourceName:"Extrusion supplier", sourceStatus:"Cut to project lengths" }),
  p({ id:"LP13", exportId:"bed_plate", name:"Bed plate & PEI", productName:"330x330 Aluminium Plate + PEI Sheet", description:"Flat aluminium bed plate with a flexible PEI print surface.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:40, color:"slate", pins:"", dimensions:"330x330mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"LP14", exportId:"linear_rails", name:"Linear rails & blocks", productName:"MGN12 Rails ×3 + Blocks ×6", description:"Linear guides for X and Y motion.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:1, price:150, color:"cyan", pins:"", dimensions:"MGN12", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"LP15", exportId:"z_motion", name:"Z motion set", productName:"Smooth Rods, Bearings, T8 Screws & Couplers", description:"Dual-Z smooth rods, LM8UU bearings, T8 leadscrews, brass nuts and couplers.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:1, price:62, color:"cyan", pins:"", dimensions:"Ø8 / T8", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"LP16", exportId:"belt_kit", name:"Belt & pulley kit", productName:"GT2 Belt, Pulleys & Idlers", description:"GT2 belt with drive and idler pulleys for XY motion.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:1, price:27, color:"cyan", pins:"", dimensions:"GT2 6mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"LP17", exportId:"extruder_bits", name:"Bowden & fittings", productName:"Capricorn PTFE + PC4 Fittings", description:"Low-friction Bowden tube and pneumatic couplers.", category:"mechanical", subtype:"misc", type:"MECHANISM", qty:1, price:11, color:"cyan", pins:"", dimensions:"PTFE 2x4", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"LP18", exportId:"mount_set", name:"Printed mount set", productName:"3D Printed Mounts, Carriage, Ducts & Cable Chain", description:"Motor mounts, hotend carriage, endstop/fan mounts, tensioners, spool holder, display mount and printable cable chain.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:55, color:"violet", pins:"", dimensions:"PLA / PETG", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"LP19", exportId:"fastener_kit", name:"Fastener kit", productName:"M5/M4/M3 Screws, Nuts & Heat-Set Inserts", description:"Frame and component fasteners with brass inserts.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:27, color:"slate", pins:"", dimensions:"Assorted", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Finalize after CAD freeze" }),
];

export const largePrinterElectricalConnections = [
  { source:"psu", target:"controller", type:"power", voltage:"24V", current:"14.6A", label:"Main power" },
  { source:"controller", target:"drivers", type:"data", protocol:"STEP/DIR + UART", label:"Stepper drivers" },
  { source:"drivers", target:"steppers", type:"power", voltage:"Chopped", current:"Per-axis", label:"Stepper drive" },
  { source:"controller", target:"heater", type:"power", voltage:"24V", current:"2.5A", label:"Hotend heater" },
  { source:"controller", target:"bed_heater", type:"power", voltage:"24V", current:"High", label:"Bed heater" },
  { source:"thermistors", target:"controller", type:"data", protocol:"Analog", label:"Temperature feedback" },
  { source:"endstops", target:"controller", type:"data", protocol:"GPIO", label:"Homing" },
  { source:"bltouch", target:"controller", type:"data", protocol:"PWM", label:"Auto bed leveling" },
  { source:"controller", target:"fans", type:"power", voltage:"24V", current:"0.5A", label:"Part & hotend cooling" },
  { source:"controller", target:"display", type:"data", protocol:"UART", label:"Touchscreen UI" },
];

export const largePrinterMechanicalConnections = [
  { source:"steppers", target:"mount_set", label:"Stepper mounts" },
  { source:"mount_set", target:"frame", label:"Mounts on extrusion" },
  { source:"linear_rails", target:"frame", label:"XY rails" },
  { source:"z_motion", target:"frame", label:"Dual-Z leadscrews and rods" },
  { source:"belt_kit", target:"steppers", label:"Belts on pulleys" },
  { source:"bed_plate", target:"bed_heater", label:"PEI on heated bed" },
  { source:"bed_plate", target:"frame", label:"Bed on Y carriage" },
  { source:"extruder_bits", target:"mount_set", label:"Bowden to hotend carriage" },
  { source:"psu", target:"frame", label:"PSU bracket" },
  { source:"fastener_kit", target:"frame", label:"Frame fasteners" },
];

export const largePrinterInstructionPreamble: InstructionPreamble = {
  tools:["Hex drivers for 2020/2040 and M3","Soldering iron and ferrule crimper","3D printer for the printed parts","Multimeter","Square, calipers and feeler gauges","Belt tension gauge","Heat-set insert tip","Computer with Marlin/Klipper"],
  assumptions:["Educational DIY large-format printer build","Mains PSU wired and earthed by a competent person","Hotend and bed reach burn temperatures — handle with care","Frame squared, dual-Z aligned and belts tensioned before printing","Thermal-runaway protection enabled in firmware"],
};

export const largePrinterInstructionSteps: InstructionSection[] = [
  { id:"fabricate", title:"Frame & motion assembly", subSteps:[
    { id:"lp_fab_1", title:"Square and bolt the large 2040/2020 frame", partIds:["frame","fastener_kit"] },
    { id:"lp_fab_2", title:"Install XY rails, dual-Z leadscrews and rods", partIds:["linear_rails","z_motion"] },
    { id:"lp_fab_3", title:"Fit the steppers, belts, hotend carriage and bed", partIds:["steppers","belt_kit","mount_set","bed_plate"] },
  ] },
  { id:"wire", title:"Electronics & heaters wiring", subSteps:[
    { id:"lp_wire_1", title:"Wire the Mean Well PSU to the SKR 2 board", partIds:["psu","controller"] },
    { id:"lp_wire_2", title:"Seat the five TMC2209 drivers and connect motors", partIds:["drivers","steppers"] },
    { id:"lp_wire_3", title:"Wire the hotend, bed, thermistors, endstops and BLTouch", partIds:["heater","bed_heater","thermistors","endstops","bltouch"] },
    { id:"lp_wire_4", title:"Connect the fans and the touchscreen display", partIds:["fans","display"] },
  ] },
  { id:"bringup", title:"Firmware & calibration", subSteps:[
    { id:"lp_test_1", title:"Flash firmware and enable thermal-runaway protection", partIds:["controller"] },
    { id:"lp_test_2", title:"Check motor directions, dual-Z sync and homing", partIds:["steppers","endstops"] },
    { id:"lp_test_3", title:"PID-tune the hotend and bed and calibrate BLTouch", partIds:["heater","bed_heater","bltouch"] },
    { id:"lp_test_4", title:"Calibrate steps/mm, extrusion and mesh level the bed", partIds:["extruder_bits","bed_plate"] },
  ] },
  { id:"assemble", title:"Enclosure & first print", subSteps:[
    { id:"lp_asm_1", title:"Install electronics, PSU and spool holder", partIds:["mount_set","psu"] },
    { id:"lp_asm_2", title:"Fit the PEI surface and mesh-tram the large bed", partIds:["bed_plate","bltouch"] },
    { id:"lp_asm_3", title:"Load filament and tune the first layer", partIds:["extruder_bits","heater"] },
    { id:"lp_asm_4", title:"Run a large calibration print and check accuracy", partIds:["steppers","heater"] },
  ] },
];

export const LARGE_PRINTER = {
  key:"largeprinter" as const,
  projectId:"large-3d-printer-01",
  name:"Large 3D Printer",
  eyebrow:"REFERENCE 26 · LARGE 3D PRINTER",
  description:"Large-format FDM 3D printer with a BigTreeTech SKR 2 controller, silent TMC2209 drivers, dual-Z motion, BLTouch leveling and a 300x300 mm heated bed.",
  briefTitle:"In khổ lớn.\nTMC2209 êm ái.\nDual-Z và BLTouch.",
  tags:["LARGE 3D PRINTER","SKR 2 · TMC2209","300MM BED"],
  visual:"",
  originalPrompt:"Design a large-format FDM 3D printer with a BigTreeTech SKR 2, TMC2209 drivers, dual-Z motion, BLTouch and a 300x300mm heated bed.",
  plan:"Requirements → large frame → XY + dual-Z motion → SKR 2 control → hotend & 300mm heated bed → firmware & mesh leveling → large calibration print",
  notes:["large-format printer","dual-Z","silent drivers","BLTouch mesh leveling"],
  componentCount:largePrinterParts.length,
};

export function buildLargePrinterCadProject(request = LARGE_PRINTER.originalPrompt, baseVersion = 1): CadProjectResult {
  const uprights = [[-130, -130], [130, -130], [-130, 130], [130, 130]].map(([x, z], i) => ({ id:`upright-${i}`, label:`Frame upright ${i+1}`, kind:"box" as const, size:[24,260,24] as [number, number, number], position:[x, 130, z] as [number, number, number], color:"#4a4f56" as string, role:"enclosure" as const }));
  const scene: CadProjectResult["scene"] = [
    ...uprights,
    { id:"base-f", label:"Base front", kind:"box", size:[284,24,24], position:[0,0,-130], color:"#3a3f46", role:"enclosure" },
    { id:"base-b", label:"Base back", kind:"box", size:[284,24,24], position:[0,0,130], color:"#3a3f46", role:"enclosure" },
    { id:"top-f", label:"Top front", kind:"box", size:[284,24,24], position:[0,260,-130], color:"#3a3f46", role:"enclosure" },
    { id:"top-b", label:"Top back", kind:"box", size:[284,24,24], position:[0,260,130], color:"#3a3f46", role:"enclosure" },
    { id:"bed", label:"300mm heated bed", kind:"plate", size:[200,12,200], position:[0,60,0], color:"#c9403d", role:"component" },
    { id:"x-gantry", label:"X gantry", kind:"box", size:[284,18,22], position:[0,150,0], color:"#5a5f66", role:"component" },
    { id:"carriage", label:"Hotend carriage", kind:"box", size:[36,34,34], position:[0,146,0], color:"#30363d", role:"component" },
    { id:"hotend", label:"Hotend", kind:"cylinder", size:[10,26,10], position:[0,126,0], color:"#242831", role:"component" },
    { id:"z-screw-l", label:"Left Z leadscrew", kind:"cylinder", size:[5,250,5], position:[-130,130,0], color:"#c7ccd3", role:"mount" },
    { id:"z-screw-r", label:"Right Z leadscrew", kind:"cylinder", size:[5,250,5], position:[130,130,0], color:"#c7ccd3", role:"mount" },
    { id:"stepper-x", label:"X stepper", kind:"motor", size:[22,24,22], position:[140,150,0], rotation:[0,0,1.57], color:"#242831", role:"component" },
    { id:"controller", label:"SKR 2 board", kind:"pcb", size:[110,14,85], position:[0,14,110], color:"#157d55", role:"component" },
    { id:"display", label:"TFT35 display", kind:"pcb", size:[80,8,50], position:[110,60,-120], rotation:[1.2,0,0], color:"#38424f", role:"component" },
    { id:"spool", label:"Filament spool", kind:"cylinder", size:[55,22,55], position:[0,260,120], rotation:[1.57,0,0], color:"#6aa8e8", opacity:0.7, role:"mount" },
  ];
  return {
    projectId:LARGE_PRINTER.projectId,
    draftId:`large-printer-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[500,550,500], clearanceMm:1, wallThicknessMm:2, printer:"FDM" },
    operations:[
      { id:"op-lp01", type:"create_box", label:"Build the large 2040/2020 frame", parameters:{ profile:"2040/2020" } },
      { id:"op-lp02", type:"place_component", label:"Install XY rails and dual-Z leadscrews", parameters:{ axes:4 } },
      { id:"op-lp03", type:"place_component", label:"Fit five NEMA 17 steppers and TMC2209 drivers", parameters:{ steppers:5 } },
      { id:"op-lp04", type:"place_component", label:"Mount the hotend carriage and 300mm heated bed", parameters:{ hotend:1 } },
      { id:"op-lp05", type:"place_component", label:"Install SKR 2, touchscreen and BLTouch", parameters:{ electronics:3 } },
    ],
    validation:{ passed:true, score:93, checksPassed:12, checksTotal:13, issues:[{ severity:"info", code:"PRINTER_SAFETY_GATE", message:"Enable thermal-runaway protection, sync dual-Z and mesh-level before the first print." }] },
    metrics:{ dimensionsMm:[450,550,450], estimatedPrintMinutes:1200, estimatedMaterialGrams:600, primitiveCount:scene.length },
    scene,
  };
}
