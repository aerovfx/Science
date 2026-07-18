import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const cncMillParts: ProjectPart[] = [
  p({ id:"CN01", exportId:"controller", name:"GRBL controller", productName:"Arduino Uno R3", description:"Runs GRBL firmware, interpreting G-code into stepper motion and spindle control.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:25, color:"orange", pins:"GPIO · USB", dimensions:"69x53x15mm", purchaseUrl:"", sourceName:"Arduino / generic", sourceStatus:"Reference class" }),
  p({ id:"CN02", exportId:"shield", name:"CNC shield", productName:"GRBL CNC Shield V3", description:"Carries the stepper drivers, motor headers, limit switches and spindle output.", category:"electrical", subtype:"module", type:"MODULE", qty:1, price:10, color:"violet", pins:"STEP · DIR · LIMIT · SPINDLE", dimensions:"69x53x20mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"CN03", exportId:"drivers", name:"Stepper drivers ×3", productName:"A4988 Stepper Driver", description:"Microstepping drivers for the X, Y and Z steppers.", category:"electrical", subtype:"module", type:"MODULE", qty:3, price:3, color:"violet", pins:"STEP · DIR · EN", dimensions:"20x15x10mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"CN04", exportId:"steppers", name:"Stepper motors ×3", productName:"NEMA 17 1.7A", description:"Motors driving the X, Y and Z leadscrews.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:3, price:15, color:"blue", pins:"A+ · A− · B+ · B−", dimensions:"42x42x40mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"CN05", exportId:"spindle", name:"Spindle motor", productName:"500W DC Spindle ER11", description:"High-speed spindle for milling and engraving.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:1, price:40, color:"blue", pins:"V+ · V−", dimensions:"Ø52x208mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"CN06", exportId:"psu", name:"Power supply", productName:"24V 10A DC PSU", description:"Powers the drivers, motors and spindle controller.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:30, color:"red", pins:"AC IN · 24V · GND", dimensions:"200x110x50mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"CN07", exportId:"limit_switches", name:"Limit switches ×3", productName:"Micro Limit Switch NO/NC", description:"Home/limit switches for the X, Y and Z axes.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:3, price:1.5, color:"lime", pins:"COM · NO · NC", dimensions:"20x10x6mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"CN08", exportId:"frame", name:"Frame & brackets", productName:"2040 Extrusion + Corner Plates", description:"Seven 2040 extrusions and ten 90-degree corner plates forming the rigid base and gantry.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:120, color:"slate", pins:"", dimensions:"2040 profile", purchaseUrl:"", sourceName:"Extrusion supplier", sourceStatus:"Cut to project lengths" }),
  p({ id:"CN09", exportId:"spoil_board", name:"Spoil board", productName:"MDF Spoil Board", description:"Sacrificial work surface for clamping stock.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:15, color:"slate", pins:"", dimensions:"Work area", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"CN10", exportId:"linear_rails", name:"Linear rails & blocks", productName:"MGN12 Rails ×4 + Blocks ×6", description:"Linear guide rails and carriages for smooth, rigid XYZ motion.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:1, price:160, color:"cyan", pins:"", dimensions:"MGN12", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"CN11", exportId:"lead_screws", name:"Lead screws & couplers", productName:"T8 Lead Screws ×3 + Nuts + Couplers", description:"Anti-backlash T8 leadscrews with couplers linking each axis motor.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:1, price:63, color:"cyan", pins:"", dimensions:"T8", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"CN12", exportId:"bearings", name:"Bearing blocks ×6", productName:"KF12 Bearing Blocks", description:"End-support bearing blocks for the three leadscrews.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:6, price:8, color:"cyan", pins:"", dimensions:"KF12", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"CN13", exportId:"drag_chains", name:"Cable drag chains ×3", productName:"10x15mm Cable Drag Chain", description:"Manages cabling for each moving axis.", category:"mechanical", subtype:"misc", type:"MISC", qty:3, price:10, color:"slate", pins:"", dimensions:"10x15mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"CN14", exportId:"mount_set", name:"Printed mount set", productName:"3D Printed Motor/Spindle/Limit Mounts + Control Box", description:"Stepper, spindle and limit-switch mounts, driver mounts and the control-box enclosure.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:25, color:"violet", pins:"", dimensions:"PLA / PETG", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"CN15", exportId:"fastener_kit", name:"Fastener kit", productName:"M5 T-Nuts & Bolts", description:"T-slot nuts and bolts for the extrusion frame assembly.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:12.5, color:"slate", pins:"", dimensions:"M5 assorted", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Finalize after CAD freeze" }),
];

export const cncMillElectricalConnections = [
  { source:"psu", target:"shield", type:"power", voltage:"24V", current:"10A", label:"Main power to shield" },
  { source:"shield", target:"controller", type:"data", protocol:"Shield bus", label:"GRBL controller" },
  { source:"shield", target:"drivers", type:"data", protocol:"STEP/DIR", label:"Driver sockets" },
  { source:"drivers", target:"steppers", type:"power", voltage:"Chopped", current:"Per-axis", label:"Stepper drive" },
  { source:"shield", target:"spindle", type:"power", voltage:"PWM/relay", current:"Spindle", label:"Spindle control" },
  { source:"limit_switches", target:"shield", type:"data", protocol:"GPIO", label:"Homing switches" },
];

export const cncMillMechanicalConnections = [
  { source:"steppers", target:"mount_set", label:"Stepper mounts" },
  { source:"mount_set", target:"frame", label:"Mounts on extrusion" },
  { source:"linear_rails", target:"frame", label:"Rails on axes" },
  { source:"lead_screws", target:"steppers", label:"Couplers on motors" },
  { source:"bearings", target:"lead_screws", label:"Leadscrew end supports" },
  { source:"spindle", target:"mount_set", label:"Spindle on Z carriage" },
  { source:"spoil_board", target:"frame", label:"Spoil board on bed" },
  { source:"limit_switches", target:"mount_set", label:"Switch brackets" },
  { source:"fastener_kit", target:"frame", label:"Frame fasteners" },
];

export const cncMillInstructionPreamble: InstructionPreamble = {
  tools:["Hex drivers for 2040 and M5","Soldering iron and ferrule crimper","3D printer (PLA and PETG capable)","Multimeter","Square, calipers and dial indicator","Wire strippers","Safety glasses, hearing and dust protection","Computer with a GRBL sender"],
  assumptions:["Educational DIY CNC build","Mains PSU wired and earthed by a competent person","Spindle guarded; eye, ear and dust protection worn","Frame squared and axes trammed before cutting","Feeds/speeds appropriate to the material; work securely clamped"],
};

export const cncMillInstructionSteps: InstructionSection[] = [
  { id:"fabricate", title:"Frame & motion assembly", subSteps:[
    { id:"cn_fab_1", title:"Square and bolt the 2040 base and gantry", partIds:["frame","fastener_kit"] },
    { id:"cn_fab_2", title:"Install the linear rails, leadscrews and bearing blocks", partIds:["linear_rails","lead_screws","bearings"] },
    { id:"cn_fab_3", title:"Mount the steppers, spindle and spoil board", partIds:["steppers","spindle","spoil_board","mount_set"] },
  ] },
  { id:"wire", title:"Electronics wiring", subSteps:[
    { id:"cn_wire_1", title:"Wire the 24V PSU to the CNC shield and Arduino", partIds:["psu","shield","controller"] },
    { id:"cn_wire_2", title:"Seat the three drivers and connect the motors", partIds:["drivers","steppers"] },
    { id:"cn_wire_3", title:"Wire the spindle control and the limit switches", partIds:["spindle","limit_switches"] },
    { id:"cn_wire_4", title:"Route cables in the drag chains and check polarity", partIds:["drag_chains","shield"] },
  ] },
  { id:"bringup", title:"GRBL setup & calibration", subSteps:[
    { id:"cn_test_1", title:"Flash GRBL and set steps/mm and travel limits", partIds:["controller"] },
    { id:"cn_test_2", title:"Verify axis directions and homing", partIds:["steppers","limit_switches"] },
    { id:"cn_test_3", title:"Tram the gantry and surface the spoil board", partIds:["spindle","spoil_board"] },
    { id:"cn_test_4", title:"Run an air-cut then a light test cut", partIds:["spindle","steppers"] },
  ] },
  { id:"assemble", title:"Enclosure & first job", subSteps:[
    { id:"cn_asm_1", title:"Fit the control-box enclosure and manage cabling", partIds:["mount_set","drag_chains"] },
    { id:"cn_asm_2", title:"Clamp stock and set the work origin", partIds:["spoil_board","spindle"] },
    { id:"cn_asm_3", title:"Run a calibration cut and verify dimensions", partIds:["steppers","spindle"] },
  ] },
];

export const CNC_MILL = {
  key:"cncmill" as const,
  projectId:"desktop-cnc-mill-01",
  name:"Desktop CNC Mill",
  eyebrow:"REFERENCE 25 · DESKTOP CNC",
  description:"Desktop CNC milling machine with a ~300x400 mm work area, an Arduino GRBL controller, NEMA 17 motion on linear rails and leadscrews, and a 500 W spindle.",
  briefTitle:"Phay CNC để bàn.\nKhung 2040 cứng cáp.\nĐiều khiển GRBL.",
  tags:["DESKTOP CNC","GRBL · NEMA 17","500W SPINDLE"],
  visual:"",
  originalPrompt:"Design a desktop CNC milling machine with an Arduino GRBL controller, NEMA 17 motion on linear rails and a 500W spindle.",
  plan:"Requirements → rigid frame → linear motion → GRBL control → spindle → calibration → test cut",
  notes:["DIY CNC","GRBL control","linear-rail motion","500W spindle"],
  componentCount:cncMillParts.length,
};

export function buildCncMillCadProject(request = CNC_MILL.originalPrompt, baseVersion = 1): CadProjectResult {
  const scene: CadProjectResult["scene"] = [
    { id:"base-l", label:"Base left", kind:"box", size:[24,24,300], position:[-150,20,0], color:"#4a4f56", role:"enclosure" },
    { id:"base-r", label:"Base right", kind:"box", size:[24,24,300], position:[150,20,0], color:"#4a4f56", role:"enclosure" },
    { id:"base-f", label:"Base front", kind:"box", size:[324,24,24], position:[0,20,-150], color:"#3a3f46", role:"enclosure" },
    { id:"base-b", label:"Base back", kind:"box", size:[324,24,24], position:[0,20,150], color:"#3a3f46", role:"enclosure" },
    { id:"bed", label:"Spoil board", kind:"plate", size:[280,10,260], position:[0,34,0], color:"#8a6a3a", role:"component" },
    { id:"upright-l", label:"Gantry left", kind:"box", size:[24,150,24], position:[-150,95,-90], color:"#4a4f56", role:"enclosure" },
    { id:"upright-r", label:"Gantry right", kind:"box", size:[24,150,24], position:[150,95,-90], color:"#4a4f56", role:"enclosure" },
    { id:"gantry", label:"Gantry beam", kind:"box", size:[324,26,26], position:[0,165,-90], color:"#5a5f66", role:"enclosure" },
    { id:"z-carriage", label:"Z carriage", kind:"box", size:[50,60,40], position:[0,140,-70], color:"#30363d", role:"component" },
    { id:"spindle", label:"500W spindle", kind:"cylinder", size:[16,90,16], position:[0,110,-60], color:"#242831", role:"component" },
    { id:"stepper-x", label:"X stepper", kind:"motor", size:[20,22,20], position:[150,165,-90], rotation:[0,1.57,0], color:"#242831", role:"component" },
    { id:"stepper-y", label:"Y stepper", kind:"motor", size:[20,22,20], position:[-150,34,150], rotation:[1.57,0,0], color:"#242831", role:"component" },
    { id:"control-box", label:"Control box", kind:"box", size:[80,50,60], position:[-140,50,120], color:"#343940", role:"mount" },
    { id:"arduino", label:"Arduino + CNC shield", kind:"pcb", size:[60,14,44], position:[-140,52,120], color:"#157d55", role:"component" },
  ];
  return {
    projectId:CNC_MILL.projectId,
    draftId:`cnc-mill-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[500,400,450], clearanceMm:1, wallThicknessMm:2, printer:"FDM" },
    operations:[
      { id:"op-cn01", type:"create_box", label:"Build the 2040 base and gantry", parameters:{ profile:"2040" } },
      { id:"op-cn02", type:"place_component", label:"Install linear rails and leadscrews on XYZ", parameters:{ axes:3 } },
      { id:"op-cn03", type:"place_component", label:"Mount three NEMA 17 steppers", parameters:{ steppers:3 } },
      { id:"op-cn04", type:"place_component", label:"Fit the 500W spindle on the Z carriage", parameters:{ spindle:1 } },
      { id:"op-cn05", type:"place_component", label:"Wire the Arduino GRBL control box", parameters:{ controller:1 } },
    ],
    validation:{ passed:true, score:92, checksPassed:11, checksTotal:12, issues:[{ severity:"info", code:"CNC_SAFETY_GATE", message:"Guard the spindle, tram the axes and run an air-cut before any material cut." }] },
    metrics:{ dimensionsMm:[420,320,400], estimatedPrintMinutes:600, estimatedMaterialGrams:250, primitiveCount:scene.length },
    scene,
  };
}
