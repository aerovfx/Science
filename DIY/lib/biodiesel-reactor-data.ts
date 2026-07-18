import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const biodieselParts: ProjectPart[] = [
  p({ id:"BD01", exportId:"controller", name:"Main controller", productName:"Arduino Mega 2560 R3", description:"Handles process control, sequencing and data acquisition.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:18, color:"orange", pins:"I2C · 1-Wire · GPIO", dimensions:"101x53mm", purchaseUrl:"", sourceName:"Arduino", sourceStatus:"Reference class" }),
  p({ id:"BD02", exportId:"ph_sensor", name:"pH sensor", productName:"Analog pH Sensor Module BNC", description:"Monitors reaction pH to track transesterification progress.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:18, color:"lime", pins:"Analog", dimensions:"BNC probe", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"BD03", exportId:"temp_sensors", name:"Temperature sensors ×3", productName:"DS18B20 Waterproof Temp Sensor", description:"Reaction, oil-inlet and methanol-inlet temperatures over 1-Wire.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:3, price:6, color:"lime", pins:"1-Wire", dimensions:"Probe", purchaseUrl:"", sourceName:"Maxim / generic", sourceStatus:"Reference class" }),
  p({ id:"BD04", exportId:"flow_sensors", name:"Flow sensors", productName:"YF-S201 ×2 + G1/4 Hall Low-Flow", description:"Oil, methanol and catalyst flow measurement.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:31, color:"lime", pins:"Pulse", dimensions:"G1/4", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"BD05", exportId:"level_switches", name:"Float level switches ×6", productName:"Float Switch Liquid Level Sensor", description:"High/low level detection on the oil, methanol, catalyst, reaction, glycerol and biodiesel vessels.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:6, price:4, color:"lime", pins:"Switch", dimensions:"Float", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"BD06", exportId:"heaters", name:"Cartridge heaters", productName:"24V 150W + 24V 100W Cartridge Heaters", description:"Reaction heating and oil preheating elements.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:1, price:27, color:"blue", pins:"2-wire", dimensions:"Cartridge", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"BD07", exportId:"peristaltic_pumps", name:"Peristaltic pumps ×5", productName:"24V DC Peristaltic Pump", description:"Circulation and metered transfer of reaction fluids.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:5, price:30, color:"blue", pins:"24V · GND", dimensions:"Peristaltic", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"BD08", exportId:"diaphragm_pumps", name:"Diaphragm pumps ×2", productName:"24V DC Diaphragm Pump", description:"Oil-in and biodiesel-out transfer pumps.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:2, price:25, color:"blue", pins:"24V · GND", dimensions:"Diaphragm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"BD09", exportId:"catalyst_pump", name:"Micro peristaltic pump", productName:"24V DC Micro Peristaltic Pump", description:"Precise catalyst-solution metering.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:1, price:25, color:"blue", pins:"24V · GND", dimensions:"Micro", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"BD10", exportId:"solenoids", name:"Solenoid valves ×8", productName:"24V DC Solenoid Valve NC", description:"Normally-closed valves gating oil, methanol, catalyst and product paths.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:8, price:10, color:"blue", pins:"24V · GND", dimensions:"1/4\"", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"BD11", exportId:"psu", name:"Power supply", productName:"24V 10A Switching Power Supply", description:"Main 24 V supply for pumps, valves and heaters (via SSR).", category:"electrical", subtype:"power", type:"POWER", qty:1, price:25, color:"red", pins:"AC IN · 24V", dimensions:"200x110x50mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"BD12", exportId:"buck", name:"5V buck converter", productName:"LM2596 DC-DC Buck Converter", description:"Steps 24 V down to 5 V for the Arduino and logic.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:5, color:"red", pins:"IN · OUT", dimensions:"43x21mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"BD13", exportId:"relay", name:"16-channel relay", productName:"16 Channel 5V Relay Module", description:"Switches pumps and valves under Arduino control.", category:"electrical", subtype:"module", type:"MODULE", qty:1, price:15, color:"violet", pins:"GPIO", dimensions:"140x55mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"BD14", exportId:"ssr", name:"Solid-state relays ×2", productName:"Fotek SSR-40 DA", description:"Switch the high-power reaction and preheat heating elements.", category:"electrical", subtype:"module", type:"MODULE", qty:2, price:12, color:"violet", pins:"DC IN · LOAD", dimensions:"SSR-40", purchaseUrl:"", sourceName:"Fotek", sourceStatus:"Reference class" }),
  p({ id:"BD15", exportId:"wifi", name:"WiFi module", productName:"ESP8266 ESP-01S", description:"Remote monitoring and control over Wi-Fi.", category:"electrical", subtype:"module", type:"MODULE", qty:1, price:5, color:"violet", pins:"UART", dimensions:"25x15mm", purchaseUrl:"", sourceName:"Espressif", sourceStatus:"Reference class" }),
  p({ id:"BD16", exportId:"lcd", name:"Status LCD", productName:"LCD2004 20x4 I2C", description:"Local status and user feedback display.", category:"electrical", subtype:"display", type:"DISPLAY", qty:1, price:10, color:"violet", pins:"I2C", dimensions:"98x60mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"BD17", exportId:"frame", name:"Extrusion frame & base", productName:"20x20 Aluminium Extrusion ×8 + Acrylic Base", description:"Modular aluminium frame on an acrylic base plate.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:71, color:"slate", pins:"", dimensions:"2020", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Cut to project lengths" }),
  p({ id:"BD18", exportId:"reactor", name:"Reaction vessel", productName:"3 Liter Stainless Steel Beaker", description:"Primary stainless vessel for the transesterification reaction.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:1, price:40, color:"cyan", pins:"", dimensions:"3 L", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"BD19", exportId:"tanks", name:"Storage tanks", productName:"HDPE Bottles 2L ×2 / 1L ×2 / 500ml", description:"Chemical-resistant HDPE tanks for oil, methanol, catalyst, glycerol and biodiesel.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:1, price:36, color:"cyan", pins:"", dimensions:"HDPE", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"BD20", exportId:"mixer", name:"Mixer shaft & impellers", productName:"6mm SS Rod + Impeller Paddles + Gear Motor", description:"Stainless mixing shaft, impellers and a small DC gear motor for agitation.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:1, price:35, color:"cyan", pins:"", dimensions:"Ø6mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"BD21", exportId:"plumbing", name:"Chemical-resistant plumbing", productName:"Viton Tubing, Barbs, Clamps & Ball Valves", description:"Viton tubing, barb fittings, hose clamps and manual ball valves rated for methanol and lye.", category:"mechanical", subtype:"misc", type:"PLUMBING", qty:1, price:93, color:"cyan", pins:"", dimensions:"8mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Chemical-compatible only" }),
  p({ id:"BD22", exportId:"frame_hardware", name:"Frame hardware", productName:"Corner Brackets, T-Nuts & M5 Screws", description:"Brackets and fasteners to assemble the extrusion frame.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:29, color:"slate", pins:"", dimensions:"2020 / M5", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"BD23", exportId:"printed_set", name:"3D printed mount set", productName:"Enclosure, Pump/Sensor/Valve Mounts", description:"Control-panel enclosure, pump mounts, sensor holders and solenoid-valve brackets.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:42, color:"orange", pins:"", dimensions:"PETG", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
];

export const biodieselElectricalConnections = [
  { source:"psu", target:"buck", type:"power", voltage:"24V", current:"1A", label:"24V to 5V" },
  { source:"buck", target:"controller", type:"power", voltage:"5V", current:"0.5A", label:"Logic power" },
  { source:"controller", target:"relay", type:"data", protocol:"GPIO", label:"Pump/valve control" },
  { source:"controller", target:"ssr", type:"data", protocol:"GPIO", label:"Heater control" },
  { source:"psu", target:"peristaltic_pumps", type:"power", voltage:"24V", current:"High", label:"Pumps" },
  { source:"psu", target:"solenoids", type:"power", voltage:"24V", current:"Medium", label:"Valves" },
  { source:"ssr", target:"heaters", type:"power", voltage:"24V", current:"High", label:"Heaters" },
  { source:"temp_sensors", target:"controller", type:"data", protocol:"1-Wire", label:"Temperatures" },
  { source:"ph_sensor", target:"controller", type:"data", protocol:"Analog", label:"pH" },
  { source:"flow_sensors", target:"controller", type:"data", protocol:"Pulse", label:"Flow" },
  { source:"level_switches", target:"controller", type:"data", protocol:"Switch", label:"Levels" },
  { source:"controller", target:"lcd", type:"data", protocol:"I2C", label:"Status LCD" },
  { source:"controller", target:"wifi", type:"data", protocol:"UART", label:"Remote monitoring" },
];

export const biodieselMechanicalConnections = [
  { source:"reactor", target:"frame", label:"Vessel on frame" },
  { source:"tanks", target:"frame", label:"Tanks on frame" },
  { source:"mixer", target:"reactor", label:"Mixer in vessel" },
  { source:"plumbing", target:"tanks", label:"Fluid lines" },
  { source:"plumbing", target:"reactor", label:"Vessel plumbing" },
  { source:"printed_set", target:"frame", label:"Mounts & enclosure" },
  { source:"frame_hardware", target:"frame", label:"Frame fasteners" },
  { source:"heaters", target:"reactor", label:"Heaters in vessel" },
];

export const biodieselInstructionPreamble: InstructionPreamble = {
  tools:["Hex drivers for 2020 extrusion","Chemical-resistant gloves, goggles and apron","Fume extraction / well-ventilated area","Multimeter","3D printer","Fire extinguisher rated for flammable liquids","Laptop for Arduino firmware"],
  assumptions:[
    "EDUCATIONAL PROCESS-AUTOMATION REFERENCE — biodiesel transesterification uses METHANOL (highly flammable, toxic) and a LYE catalyst (strongly caustic).",
    "Chemical handling by a trained adult only, in a ventilated area away from all ignition sources; wear full PPE.",
    "Comply with local regulations on fuel production, storage quantities and hazardous-waste (glycerol) disposal.",
    "Build and leak-test the fluid system with water before introducing any chemicals.",
    "This template covers the control/mechanical rig only — it is NOT a turnkey guide to producing fuel.",
  ],
};

export const biodieselInstructionSteps: InstructionSection[] = [
  { id:"fabricate", title:"Frame & vessels", subSteps:[
    { id:"bd_fab_1", title:"Assemble the 2020 frame and acrylic base", partIds:["frame","frame_hardware"] },
    { id:"bd_fab_2", title:"Mount the reaction vessel, tanks and mixer", partIds:["reactor","tanks","mixer"] },
    { id:"bd_fab_3", title:"Print and fit the enclosure, pump and valve mounts", partIds:["printed_set"] },
  ] },
  { id:"plumb", title:"Plumbing (water leak-test first)", subSteps:[
    { id:"bd_pl_1", title:"Route Viton tubing, barbs, clamps and ball valves", partIds:["plumbing"] },
    { id:"bd_pl_2", title:"Install the pumps and solenoid valves", partIds:["peristaltic_pumps","diaphragm_pumps","catalyst_pump","solenoids"] },
    { id:"bd_pl_3", title:"Leak-test the whole fluid path with WATER only", partIds:["plumbing","reactor"] },
  ] },
  { id:"wire", title:"Electronics & sensors", subSteps:[
    { id:"bd_wire_1", title:"Wire the PSU, buck, Arduino, relays and SSRs", partIds:["psu","buck","controller","relay","ssr"] },
    { id:"bd_wire_2", title:"Install the heaters, temperature, pH, flow and level sensors", partIds:["heaters","temp_sensors","ph_sensor","flow_sensors","level_switches"] },
    { id:"bd_wire_3", title:"Connect the LCD and WiFi module", partIds:["lcd","wifi"] },
  ] },
  { id:"commission", title:"Safe commissioning", subSteps:[
    { id:"bd_cm_1", title:"Dry-run pumps, valves and heater PID with water", partIds:["peristaltic_pumps","heaters"] },
    { id:"bd_cm_2", title:"Verify level and flow interlocks and E-stop behaviour", partIds:["level_switches","flow_sensors"] },
    { id:"bd_cm_3", title:"Review the full chemical-safety checklist before any live use", partIds:["controller"] },
  ] },
];

export const BIODIESEL_REACTOR = {
  key:"biodiesel" as const,
  projectId:"automated-biodiesel-reactor-01",
  name:"Automated Biodiesel Reactor",
  eyebrow:"REFERENCE 29 · PROCESS-AUTOMATION REFERENCE",
  description:"Educational Arduino-controlled biodiesel transesterification rig with metered pumps, heated stainless vessel, and pH/temp/flow/level sensing — chemical-safety reference only.",
  briefTitle:"Rig tự động hoá quá trình.\nArduino · bơm định lượng.\nCảnh báo methanol / lye.",
  tags:["PROCESS AUTOMATION","ARDUINO MEGA","CHEMICAL SAFETY"],
  visual:"",
  originalPrompt:"Design an educational Arduino-controlled biodiesel transesterification reactor rig with metered pumps, a heated stainless vessel and pH/temperature/flow/level sensing, with strong chemical-safety framing.",
  plan:"Requirements & chemical-safety scope → frame & vessels → chemical-resistant plumbing → Arduino control, heaters & sensors → water leak-test → safe commissioning",
  notes:["educational process-automation reference","methanol flammable/toxic + caustic lye","full PPE and ventilation required","leak-test with water first"],
  componentCount:biodieselParts.length,
};

export function buildBiodieselCadProject(request = BIODIESEL_REACTOR.originalPrompt, baseVersion = 1): CadProjectResult {
  const posts = [[-90, -50], [90, -50], [-90, 50], [90, 50]].map(([x, z], i) => ({ id:`post-${i}`, label:`Frame post ${i+1}`, kind:"box" as const, size:[16,170,16] as [number, number, number], position:[x, 85, z] as [number, number, number], color:"#4a4f56" as string, role:"enclosure" as const }));
  const scene: CadProjectResult["scene"] = [
    ...posts,
    { id:"base", label:"Acrylic base", kind:"plate", size:[210,10,130], position:[0,0,0], color:"#1a1d22", role:"enclosure" },
    { id:"reactor", label:"3L reaction vessel", kind:"cylinder", size:[46,80,46], position:[0,70,0], color:"#c7ccd3", role:"component" },
    { id:"reactor-lid", label:"Vessel lid", kind:"cylinder", size:[48,8,48], position:[0,112,0], color:"#9aa0a8", role:"component" },
    { id:"mixer", label:"Mixer motor", kind:"motor", size:[20,24,20], position:[0,130,0], color:"#242831", role:"component" },
    { id:"shaft", label:"Mixing shaft", kind:"cylinder", size:[3,70,3], position:[0,80,0], color:"#e0e4ea", role:"mount" },
    { id:"tank-oil", label:"Oil tank", kind:"box", size:[34,60,34], position:[-70,40,-40], color:"#e0b64a", opacity:0.55, role:"component" },
    { id:"tank-meoh", label:"Methanol tank", kind:"box", size:[26,50,26], position:[-70,35,40], color:"#6aa8e8", opacity:0.55, role:"component" },
    { id:"tank-cat", label:"Catalyst tank", kind:"box", size:[22,36,22], position:[70,28,40], color:"#c9403d", opacity:0.55, role:"component" },
    { id:"tank-bio", label:"Biodiesel tank", kind:"box", size:[34,60,34], position:[70,40,-40], color:"#7ac77a", opacity:0.55, role:"component" },
    { id:"enclosure", label:"Control enclosure", kind:"box", size:[70,44,26], position:[0,150,-52], color:"#38424f", role:"component" },
    { id:"lcd", label:"LCD 20x4", kind:"pcb", size:[40,4,22], position:[0,150,-38], rotation:[1.1,0,0], color:"#157d55", role:"component" },
    { id:"pump-1", label:"Peristaltic pump", kind:"box", size:[24,24,20], position:[-60,20,0], color:"#2b2f36", role:"component" },
    { id:"pump-2", label:"Diaphragm pump", kind:"box", size:[26,20,20], position:[60,18,0], color:"#2b2f36", role:"component" },
  ];
  return {
    projectId:BIODIESEL_REACTOR.projectId,
    draftId:`biodiesel-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[500,400,350], clearanceMm:1, wallThicknessMm:2, printer:"FDM" },
    operations:[
      { id:"op-bd01", type:"create_box", label:"Assemble the 2020 frame and base", parameters:{ profile:"2020" } },
      { id:"op-bd02", type:"place_component", label:"Mount the vessel, tanks and mixer", parameters:{ vessels:5 } },
      { id:"op-bd03", type:"place_component", label:"Route chemical-resistant plumbing", parameters:{ pumps:8 } },
      { id:"op-bd04", type:"place_component", label:"Install Arduino control, heaters and sensors", parameters:{ electronics:6 } },
      { id:"op-bd05", type:"place_component", label:"Fit the control enclosure and LCD", parameters:{ panel:1 } },
    ],
    validation:{ passed:true, score:87, checksPassed:11, checksTotal:13, issues:[{ severity:"warning", code:"CHEMICAL_SAFETY_GATE", message:"Methanol (flammable/toxic) and caustic lye: full PPE, ventilation, no ignition sources, water leak-test first, and comply with local fuel/waste regulations. Educational rig reference only." }] },
    metrics:{ dimensionsMm:[450,380,320], estimatedPrintMinutes:900, estimatedMaterialGrams:400, primitiveCount:scene.length },
    scene,
  };
}
