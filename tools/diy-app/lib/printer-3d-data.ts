import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const printer3dParts: ProjectPart[] = [
  p({ id:"PR01", exportId:"controller", name:"Main controller", productName:"Arduino Mega 2560 R3", description:"ATmega2560 board driving the printer motion, heaters and sensors via the RAMPS shield.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:15, color:"orange", pins:"GPIO · SPI · UART", dimensions:"101x53x15mm", purchaseUrl:"", sourceName:"Arduino / generic", sourceStatus:"Reference class" }),
  p({ id:"PR02", exportId:"ramps", name:"RAMPS control shield", productName:"RAMPS 1.4 Control Board", description:"Interface board carrying the stepper drivers, heater MOSFETs and endstops.", category:"electrical", subtype:"module", type:"MODULE", qty:1, price:10, color:"violet", pins:"STEPPER · HEATER · ENDSTOP", dimensions:"100x60x15mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"PR03", exportId:"drivers", name:"Stepper drivers ×4", productName:"A4988 Stepper Driver", description:"Microstepping drivers for the X, Y, Z and extruder steppers.", category:"electrical", subtype:"module", type:"MODULE", qty:4, price:2, color:"violet", pins:"STEP · DIR · EN", dimensions:"20x15x10mm", purchaseUrl:"", sourceName:"Allegro / generic", sourceStatus:"Reference class" }),
  p({ id:"PR04", exportId:"steppers", name:"Stepper motors ×4", productName:"NEMA 17 17HS4401", description:"Stepper motors for X, Y, Z and extruder motion.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:4, price:12, color:"blue", pins:"A+ · A− · B+ · B−", dimensions:"42x42x40mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"PR05", exportId:"thermistors", name:"Thermistors ×2", productName:"NTC 3950 100K Thermistor", description:"Temperature sensing for the hotend and heated bed.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:2, price:1.5, color:"lime", pins:"2-wire", dimensions:"Glass bead", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"PR06", exportId:"endstops", name:"Endstop switches ×3", productName:"Mechanical Endstop Switch", description:"Limit switches for X, Y and Z homing.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:3, price:1.5, color:"lime", pins:"COM · NO · NC", dimensions:"33x16x10mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"PR07", exportId:"heater", name:"Hotend heater", productName:"12V 40W Heater Cartridge", description:"Heats the hotend to melt filament.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:1, price:3, color:"blue", pins:"2-wire", dimensions:"Ø6x20mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"PR08", exportId:"heated_bed", name:"Heated print bed", productName:"MK3 Aluminium Heated Bed 12V", description:"Heats the build surface for part adhesion.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:1, price:20, color:"blue", pins:"HEAT · THERM", dimensions:"214x214x2mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"PR09", exportId:"psu", name:"Power supply", productName:"12V 30A Switching PSU", description:"Provides stable 12 V to the whole printer.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:25, color:"red", pins:"AC IN · 12V · GND", dimensions:"200x100x50mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"PR10", exportId:"hotend", name:"Hotend assembly", productName:"MK8 Extruder Hotend", description:"Nozzle, heater block and heatsink assembly.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:1, price:15, color:"cyan", pins:"", dimensions:"MK8", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"PR11", exportId:"extruder", name:"Extruder & PTFE", productName:"MK8 Bowden Extruder + PTFE Tube", description:"Bowden extruder feeding filament through PTFE tubing to the hotend.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:1, price:11, color:"cyan", pins:"", dimensions:"MK8 Bowden", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"PR12", exportId:"frame", name:"Frame & bed plate", productName:"2020 Extrusion Frame + Bed Plate", description:"Seven 2020 aluminium extrusions and the aluminium bed plate.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:41.5, color:"slate", pins:"", dimensions:"2020 profile", purchaseUrl:"", sourceName:"Extrusion supplier", sourceStatus:"Cut to project lengths" }),
  p({ id:"PR13", exportId:"motion", name:"Motion hardware", productName:"Smooth Rods, Lead Screw, Coupler & Bearings", description:"Y-axis smooth rods, Z lead screw, flexible coupler and LM8UU linear bearings.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:1, price:27, color:"cyan", pins:"", dimensions:"Ø8 rods / T8 screw", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"PR14", exportId:"belt_kit", name:"Belt & pulley kit", productName:"GT2 Belt, Pulleys & Idlers", description:"GT2 timing belt with drive and idler pulleys for X/Y motion.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:1, price:13, color:"cyan", pins:"", dimensions:"GT2 6mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"PR15", exportId:"glass_bed", name:"Glass surface & springs", productName:"Borosilicate Glass 220mm + Bed Springs", description:"Flat glass print surface with leveling springs.", category:"mechanical", subtype:"misc", type:"MISC", qty:1, price:10, color:"slate", pins:"", dimensions:"220x220mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"PR16", exportId:"fans", name:"Cooling fans", productName:"Hotend + Part Cooling Fans (12V)", description:"3010 hotend heatsink fan and 4010 part-cooling blower.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:1, price:7, color:"blue", pins:"12V · GND", dimensions:"30/40mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"PR17", exportId:"mount_set", name:"Printed mount set", productName:"3D Printed Mounts, Carriage & Ducts", description:"Motor/driver/endstop mounts, hotend carriage, bed-frame parts, fan ducts and spool holder.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:32, color:"violet", pins:"", dimensions:"PLA / PETG", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"PR18", exportId:"fastener_kit", name:"Fastener kit", productName:"M3/M4/M5 Screws, Nuts, Washers & T-Nuts", description:"General assembly hardware and 2020 T-slot nuts.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:8, color:"slate", pins:"", dimensions:"Assorted", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Finalize after CAD freeze" }),
];

export const printer3dElectricalConnections = [
  { source:"psu", target:"ramps", type:"power", voltage:"12V", current:"30A", label:"Main power to board" },
  { source:"ramps", target:"controller", type:"data", protocol:"Shield bus", label:"Controller shield" },
  { source:"ramps", target:"drivers", type:"data", protocol:"STEP/DIR", label:"Stepper driver sockets" },
  { source:"drivers", target:"steppers", type:"power", voltage:"Chopped", current:"Per-axis", label:"Stepper drive" },
  { source:"ramps", target:"heater", type:"power", voltage:"12V", current:"3.5A", label:"Hotend heater" },
  { source:"ramps", target:"heated_bed", type:"power", voltage:"12V", current:"11A", label:"Bed heater" },
  { source:"thermistors", target:"ramps", type:"data", protocol:"Analog", label:"Temperature feedback" },
  { source:"endstops", target:"ramps", type:"data", protocol:"GPIO", label:"Homing switches" },
  { source:"ramps", target:"fans", type:"power", voltage:"12V", current:"0.3A", label:"Hotend & part cooling" },
];

export const printer3dMechanicalConnections = [
  { source:"steppers", target:"mount_set", label:"Stepper mounts" },
  { source:"mount_set", target:"frame", label:"Mounts on extrusion" },
  { source:"motion", target:"frame", label:"Rods and lead screw" },
  { source:"belt_kit", target:"steppers", label:"Belts on pulleys" },
  { source:"hotend", target:"mount_set", label:"Hotend on X carriage" },
  { source:"extruder", target:"hotend", label:"Bowden to hotend" },
  { source:"heated_bed", target:"glass_bed", label:"Glass on heated bed" },
  { source:"glass_bed", target:"frame", label:"Bed on Y carriage" },
  { source:"psu", target:"frame", label:"PSU bracket" },
  { source:"fastener_kit", target:"frame", label:"Frame fasteners" },
];

export const printer3dInstructionPreamble: InstructionPreamble = {
  tools:["Hex drivers for 2020 and M3","Soldering iron and ferrule crimper","3D printer (PLA and PETG capable) for the printed parts","Multimeter","Square and calipers","Belt tension gauge","Feeler gauges for leveling","Computer with Marlin/Arduino"],
  assumptions:["Educational DIY 3D-printer build","Mains PSU wired and earthed correctly by a competent person","Hotend and bed reach burn temperatures — handle with care","Frame squared and belts tensioned before printing","Thermal runaway protection enabled in firmware"],
};

export const printer3dInstructionSteps: InstructionSection[] = [
  { id:"fabricate", title:"Frame & motion assembly", subSteps:[
    { id:"pr_fab_1", title:"Square and bolt together the 2020 frame", partIds:["frame","fastener_kit"] },
    { id:"pr_fab_2", title:"Install the smooth rods, lead screw and bearings", partIds:["motion","mount_set"] },
    { id:"pr_fab_3", title:"Fit the steppers, belts and the hotend carriage", partIds:["steppers","belt_kit","hotend"] },
  ] },
  { id:"wire", title:"Electronics & heaters wiring", subSteps:[
    { id:"pr_wire_1", title:"Wire the PSU to the RAMPS board and controller", partIds:["psu","ramps","controller"] },
    { id:"pr_wire_2", title:"Seat the four stepper drivers and connect the motors", partIds:["drivers","steppers"] },
    { id:"pr_wire_3", title:"Wire the hotend, bed, thermistors and endstops", partIds:["heater","heated_bed","thermistors","endstops"] },
    { id:"pr_wire_4", title:"Connect the cooling fans and check all polarity", partIds:["fans","ramps"] },
  ] },
  { id:"bringup", title:"Firmware & calibration", subSteps:[
    { id:"pr_test_1", title:"Flash Marlin and enable thermal-runaway protection", partIds:["controller"] },
    { id:"pr_test_2", title:"Check motor directions and endstop homing", partIds:["steppers","endstops"] },
    { id:"pr_test_3", title:"PID-tune the hotend and bed and verify temperatures", partIds:["heater","heated_bed","thermistors"] },
    { id:"pr_test_4", title:"Calibrate steps/mm, extrusion and level the bed", partIds:["extruder","glass_bed"] },
  ] },
  { id:"assemble", title:"Final assembly & first print", subSteps:[
    { id:"pr_asm_1", title:"Mount the electronics, PSU and spool holder", partIds:["mount_set","psu"] },
    { id:"pr_asm_2", title:"Fit the glass surface and tram the bed", partIds:["glass_bed","heated_bed"] },
    { id:"pr_asm_3", title:"Load filament and tune the first-layer height", partIds:["extruder","hotend"] },
    { id:"pr_asm_4", title:"Run a calibration print and check dimensional accuracy", partIds:["steppers","hotend"] },
  ] },
];

export const PRINTER_3D = {
  key:"printer3d" as const,
  projectId:"3d-printer-budget-01",
  name:"3D Printer Budget",
  eyebrow:"REFERENCE 22 · DIY 3D PRINTER",
  description:"Budget Cartesian FDM 3D printer on a 2020 frame with an Arduino Mega + RAMPS 1.4 controller, NEMA 17 motion, MK8 hotend and a heated glass bed.",
  briefTitle:"In 3D giá rẻ.\nKhung 2020 chắc chắn.\nBàn nhiệt và MK8.",
  tags:["DIY 3D PRINTER","RAMPS 1.4","FDM"],
  visual:"",
  originalPrompt:"Design a budget-friendly DIY Cartesian FDM 3D printer with Arduino Mega + RAMPS, NEMA 17 motion and a heated bed.",
  plan:"Requirements → 2020 frame & motion → controller & drivers → hotend & heated bed → firmware & PID → calibration → first print",
  notes:["DIY 3D printer","2020 Cartesian","RAMPS + Marlin","heated glass bed"],
  componentCount:printer3dParts.length,
};

export function buildPrinter3dCadProject(request = PRINTER_3D.originalPrompt, baseVersion = 1): CadProjectResult {
  const uprights = [[-100, -100], [100, -100], [-100, 100], [100, 100]].map(([x, z], i) => ({ id:`upright-${i}`, label:`Frame upright ${i+1}`, kind:"box" as const, size:[20,200,20] as [number, number, number], position:[x, 100, z] as [number, number, number], color:"#4a4f56" as string, role:"enclosure" as const }));
  const scene: CadProjectResult["scene"] = [
    ...uprights,
    { id:"base-front", label:"Base front", kind:"box", size:[220,20,20], position:[0,0,-100], color:"#3a3f46", role:"enclosure" },
    { id:"base-back", label:"Base back", kind:"box", size:[220,20,20], position:[0,0,100], color:"#3a3f46", role:"enclosure" },
    { id:"top-front", label:"Top front", kind:"box", size:[220,20,20], position:[0,200,-100], color:"#3a3f46", role:"enclosure" },
    { id:"top-back", label:"Top back", kind:"box", size:[220,20,20], position:[0,200,100], color:"#3a3f46", role:"enclosure" },
    { id:"bed", label:"Heated print bed", kind:"plate", size:[150,10,150], position:[0,50,0], color:"#c9403d", role:"component" },
    { id:"x-gantry", label:"X gantry", kind:"box", size:[220,16,20], position:[0,120,0], color:"#5a5f66", role:"component" },
    { id:"carriage", label:"Hotend carriage", kind:"box", size:[30,30,30], position:[0,116,0], color:"#30363d", role:"component" },
    { id:"hotend", label:"MK8 hotend", kind:"cylinder", size:[10,24,10], position:[0,98,0], color:"#242831", role:"component" },
    { id:"z-screw", label:"Z lead screw", kind:"cylinder", size:[5,190,5], position:[-100,105,0], color:"#c7ccd3", role:"mount" },
    { id:"stepper-x", label:"X stepper", kind:"motor", size:[20,22,20], position:[105,120,0], rotation:[0,0,1.57], color:"#242831", role:"component" },
    { id:"ramps", label:"Arduino + RAMPS", kind:"pcb", size:[100,14,60], position:[0,10,90], color:"#157d55", role:"component" },
    { id:"psu", label:"12V PSU", kind:"box", size:[70,50,100], position:[-120,40,60], color:"#343940", role:"component" },
    { id:"spool", label:"Filament spool", kind:"cylinder", size:[50,20,50], position:[0,200,90], rotation:[1.57,0,0], color:"#6aa8e8", opacity:0.7, role:"mount" },
  ];
  return {
    projectId:PRINTER_3D.projectId,
    draftId:`printer3d-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[400,450,400], clearanceMm:1, wallThicknessMm:2, printer:"FDM" },
    operations:[
      { id:"op-pr01", type:"create_box", label:"Build the 2020 Cartesian frame", parameters:{ profile:"2020" } },
      { id:"op-pr02", type:"place_component", label:"Install X/Y/Z and extruder steppers", parameters:{ steppers:4 } },
      { id:"op-pr03", type:"place_component", label:"Fit the hotend carriage and heated bed", parameters:{ hotend:1 } },
      { id:"op-pr04", type:"place_component", label:"Mount the Arduino Mega + RAMPS and PSU", parameters:{ electronics:2 } },
      { id:"op-pr05", type:"add_pcb_mount", label:"Route belts, endstops and cooling fans", parameters:{ motion:true } },
    ],
    validation:{ passed:true, score:93, checksPassed:11, checksTotal:12, issues:[{ severity:"info", code:"PRINTER_SAFETY_GATE", message:"Enable thermal-runaway protection and level the bed before the first print." }] },
    metrics:{ dimensionsMm:[400,450,400], estimatedPrintMinutes:600, estimatedMaterialGrams:300, primitiveCount:scene.length },
    scene,
  };
}
