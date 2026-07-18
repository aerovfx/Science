import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const liftBootParts: ProjectPart[] = [
  p({ id:"LB01", exportId:"mcu", name:"Boot controller", productName:"ESP32-WROOM-32D Dev Board", description:"Reads the button and drives the heel/toe hydraulic pumps.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:10, color:"orange", pins:"GPIO · WiFi", dimensions:"55x28mm", purchaseUrl:"", sourceName:"Espressif", sourceStatus:"Reference class" }),
  p({ id:"LB02", exportId:"button", name:"Activation button", productName:"Tactile Push Button Switch", description:"Manual control input to raise/lower the lift.", category:"electrical", subtype:"input", type:"INPUT", qty:1, price:0.5, color:"lime", pins:"GPIO", dimensions:"12x12mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"LB03", exportId:"drivers", name:"Pump motor drivers ×2", productName:"DRV8871 H-Bridge Driver", description:"Drive the heel and toe hydraulic pump motors.", category:"electrical", subtype:"actuator", type:"DRIVER", qty:2, price:5, color:"blue", pins:"IN1 · IN2 · OUT", dimensions:"Module", purchaseUrl:"", sourceName:"Texas Instruments", sourceStatus:"Reference class" }),
  p({ id:"LB04", exportId:"pumps", name:"Hydraulic pumps ×2", productName:"Miniature DC Gear Pump (KPM14A)", description:"Heel and toe miniature DC hydraulic pumps.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:2, price:30, color:"blue", pins:"12V · GND", dimensions:"Gear pump", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"LB05", exportId:"battery", name:"LiPo battery", productName:"3S 12V LiPo (850mAh 75C)", description:"Portable pack for the pumps and electronics.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:25, color:"red", pins:"XT30 · balance", dimensions:"3S", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"LB06", exportId:"buck", name:"5V regulator", productName:"MP1584EN DC-DC Buck", description:"Steps 12 V down to 5 V for the ESP32 and sensors.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:2, color:"red", pins:"IN · OUT", dimensions:"22x17mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"LB07", exportId:"sole_plates", name:"Sole plates", productName:"Inner + Outer Sole Structural Plates", description:"Reinforced inner and outer sole plates carrying the hydraulic loads.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:30, color:"slate", pins:"", dimensions:"Sole", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"LB08", exportId:"soft_goods", name:"Foam & fabric", productName:"EVA Foam + Ripstop + Lining Fabric", description:"Sole cushioning, upper reinforcement and moisture-wicking lining.", category:"mechanical", subtype:"misc", type:"SOFT GOODS", qty:1, price:27, color:"cyan", pins:"", dimensions:"Assorted", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"LB09", exportId:"cylinders", name:"Hydraulic cylinders ×4", productName:"Miniature Hydraulic Cylinder 3\" stroke", description:"Two heel and two toe cylinders providing the lift.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:4, price:30, color:"cyan", pins:"", dimensions:"3in stroke", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"LB10", exportId:"plumbing", name:"Hydraulic plumbing", productName:"Reservoir, Tubing, Check Valves & Fittings", description:"Fluid reservoir, high-pressure tubing, four check valves and connectors.", category:"mechanical", subtype:"misc", type:"PLUMBING", qty:1, price:77, color:"cyan", pins:"", dimensions:"Assorted", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"LB11", exportId:"printed_set", name:"3D printed set", productName:"Manifolds, Pump/Cylinder Mounts & Enclosure", description:"Heel/toe manifolds, pump and cylinder mounts, electronics enclosure, battery holder and button housing.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:28, color:"orange", pins:"", dimensions:"PETG", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"LB12", exportId:"fastener_kit", name:"Fastener kit", productName:"M3 Screws, Nuts & Washers", description:"Assembly hardware for plates, mounts and enclosure.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:5, color:"slate", pins:"", dimensions:"M3", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Finalize after CAD freeze" }),
];

export const liftBootElectricalConnections = [
  { source:"battery", target:"buck", type:"power", voltage:"12V", current:"0.5A", label:"12V to 5V" },
  { source:"buck", target:"mcu", type:"power", voltage:"5V", current:"0.3A", label:"Logic power" },
  { source:"battery", target:"drivers", type:"power", voltage:"12V", current:"High", label:"Pump power" },
  { source:"mcu", target:"drivers", type:"data", protocol:"GPIO/PWM", label:"Pump control" },
  { source:"drivers", target:"pumps", type:"power", voltage:"12V", current:"Per-pump", label:"Pump drive" },
  { source:"button", target:"mcu", type:"data", protocol:"GPIO", label:"Activation input" },
];

export const liftBootMechanicalConnections = [
  { source:"cylinders", target:"sole_plates", label:"Cylinders between soles" },
  { source:"pumps", target:"printed_set", label:"Pumps on mounts" },
  { source:"plumbing", target:"cylinders", label:"Fluid lines to cylinders" },
  { source:"plumbing", target:"printed_set", label:"Manifolds & reservoir" },
  { source:"soft_goods", target:"sole_plates", label:"Foam & lining" },
  { source:"battery", target:"printed_set", label:"Battery holder" },
  { source:"fastener_kit", target:"sole_plates", label:"Fasteners" },
];

export const liftBootInstructionPreamble: InstructionPreamble = {
  tools:["Soldering iron","3D printer","Hydraulic fittings/crimp tools","Multimeter","Small screwdriver set","Computer for firmware"],
  assumptions:[
    "Experimental wearable — hydraulic pressure and moving cylinders create PINCH/CRUSH hazards; keep fingers clear.",
    "Bench-test the full stroke, end-stops and E-stop UNWORN before ever wearing the boot.",
    "Leak-test the hydraulic system before use; keep pressure within the cylinders' and tubing's rating.",
    "Wearer balance/stability is affected by the lift — test low and hold a support at first.",
  ],
};

export const liftBootInstructionSteps: InstructionSection[] = [
  { id:"fabricate", title:"Sole & hydraulics", subSteps:[
    { id:"lb_fab_1", title:"Assemble the inner/outer sole plates", partIds:["sole_plates","fastener_kit"] },
    { id:"lb_fab_2", title:"Mount the four cylinders, pumps and manifolds", partIds:["cylinders","pumps","printed_set"] },
    { id:"lb_fab_3", title:"Route tubing, reservoir and check valves; leak-test", partIds:["plumbing"] },
  ] },
  { id:"electronics", title:"Electronics", subSteps:[
    { id:"lb_e_1", title:"Wire the battery, buck, ESP32 and pump drivers", partIds:["battery","buck","mcu","drivers"] },
    { id:"lb_e_2", title:"Fit the activation button and enclosure", partIds:["button","printed_set"] },
  ] },
  { id:"bringup", title:"Safe bring-up", subSteps:[
    { id:"lb_t_1", title:"Bench-test full stroke, end-stops and E-stop unworn", partIds:["cylinders","pumps"] },
    { id:"lb_t_2", title:"Add soft goods and lining, then a low, supported wear test", partIds:["soft_goods","sole_plates"] },
  ] },
];

export const LIFT_BOOT = {
  key:"liftboot" as const,
  projectId:"hydraulic-lift-boot-01",
  name:"Hydraulic Lift Boot",
  eyebrow:"REFERENCE 34 · HYDRAULIC LIFT BOOT",
  description:"Experimental wearable boot with four miniature hydraulic cylinders in the sole (heel + toe), driven by ESP32-controlled DC pumps — pinch/pressure safety reference.",
  briefTitle:"Giày nâng thuỷ lực.\nBốn xi-lanh trong đế.\nCảnh báo kẹp/áp lực.",
  tags:["HYDRAULIC WEARABLE","ESP32 · DC PUMPS","PINCH SAFETY"],
  visual:"",
  originalPrompt:"Design an experimental hydraulic lift boot with four miniature hydraulic cylinders in the sole, ESP32-controlled DC gear pumps, a 3S battery and strong pinch/pressure safety framing.",
  plan:"Requirements & safety scope → sole plates → four cylinders + pumps + manifolds → hydraulic plumbing (leak-test) → ESP32 control → unworn stroke test → supported wear test",
  notes:["experimental hydraulic wearable","pinch/crush and pressure hazards","bench-test unworn first","affects wearer balance"],
  componentCount:liftBootParts.length,
};

export function buildLiftBootCadProject(request = LIFT_BOOT.originalPrompt, baseVersion = 1): CadProjectResult {
  const cyl = (id: string, x: number, z: number, ext: number): CadProjectResult["scene"][number] => ({ id, label:"Hydraulic cylinder", kind:"cylinder", size:[4,ext,4] as [number, number, number], position:[x, 10 + ext / 2, z] as [number, number, number], color:"#c7ccd3", role:"mount" });
  const scene: CadProjectResult["scene"] = [
    { id:"outer-sole", label:"Outer sole", kind:"plate", size:[80,10,200], position:[0,5,0], color:"#2b2f36", role:"enclosure" },
    { id:"inner-sole", label:"Inner sole", kind:"plate", size:[76,8,190], position:[0,34,0], color:"#3a3f46", role:"enclosure" },
    { id:"upper", label:"Boot upper", kind:"box", size:[74,70,90], position:[0,70,-40], color:"#1a1d22", opacity:0.55, role:"enclosure" },
    cyl("cyl-heel-l", -18, -60, 22),
    cyl("cyl-heel-r", 18, -60, 22),
    cyl("cyl-toe-l", -18, 60, 22),
    cyl("cyl-toe-r", 18, 60, 22),
    { id:"pump-heel", label:"Heel pump", kind:"motor", size:[9,14,9], position:[0,14,-70], rotation:[1.57,0,0], color:"#242831", role:"component" },
    { id:"pump-toe", label:"Toe pump", kind:"motor", size:[9,14,9], position:[0,14,70], rotation:[1.57,0,0], color:"#242831", role:"component" },
    { id:"reservoir", label:"Reservoir", kind:"lathe", size:[10,26,10], position:[0,16,0], profile:[[0.3,0],[1,0.1],[1,0.9],[0.3,1]] as [number, number][], color:"#6aa8e8", opacity:0.6, role:"component" },
    { id:"pcb", label:"ESP32 controller", kind:"pcb", size:[36,3,20], position:[0,16,30], color:"#157d55", role:"component" },
    { id:"battery", label:"3S LiPo", kind:"battery", size:[30,8,16], position:[0,14,-30], color:"#c9403d", role:"component" },
  ];
  return {
    projectId:LIFT_BOOT.projectId,
    draftId:`lift-boot-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[120,260,120], clearanceMm:0.5, wallThicknessMm:2, printer:"FDM" },
    operations:[
      { id:"op-lb01", type:"create_box", label:"Assemble the sole plates", parameters:{ plates:2 } },
      { id:"op-lb02", type:"place_component", label:"Fit four hydraulic cylinders", parameters:{ cylinders:4 } },
      { id:"op-lb03", type:"place_component", label:"Install pumps, manifolds and reservoir", parameters:{ pumps:2 } },
      { id:"op-lb04", type:"add_cable_port", label:"Wire ESP32 control and battery", parameters:{ electronics:4 } },
    ],
    validation:{ passed:true, score:85, checksPassed:10, checksTotal:12, issues:[{ severity:"warning", code:"WEARABLE_SAFETY_GATE", message:"Pinch/crush and hydraulic-pressure hazards: leak-test, bench-test full stroke and E-stop unworn, and do supported low-lift wear tests only." }] },
    metrics:{ dimensionsMm:[100,240,110], estimatedPrintMinutes:300, estimatedMaterialGrams:150, primitiveCount:scene.length },
    scene,
  };
}
