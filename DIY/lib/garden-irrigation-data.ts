import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const gardenParts: ProjectPart[] = [
  p({ id:"GI01", exportId:"controller", name:"Main controller", productName:"ESP32-WROOM-32D Dev Board", description:"Wi-Fi controller running the schedule, soil logic and the phone-app link.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:7.5, color:"orange", pins:"ADC · GPIO · I2C · 3.3V", dimensions:"54x28x13mm", purchaseUrl:"", sourceName:"Espressif", sourceStatus:"Reference class" }),
  p({ id:"GI02", exportId:"soil_sensors", name:"Soil moisture sensors ×3", productName:"Capacitive Soil Moisture Sensor v1.2", description:"Corrosion-resistant capacitive sensors, one per irrigation zone.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:3, price:3, color:"lime", pins:"AOUT · 3.3V · GND", dimensions:"98x23x4mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"GI03", exportId:"relay", name:"6-channel relay", productName:"SRD-05VDC 6-Channel Relay Module", description:"Switches the six 12 V solenoid valves and the pump.", category:"electrical", subtype:"module", type:"MODULE", qty:1, price:9, color:"violet", pins:"IN1-6 · VCC · GND", dimensions:"130x55x18mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"GI04", exportId:"valves", name:"Solenoid valves ×6", productName:"12V DC 3/4\" Solenoid Valve", description:"One valve per zone controlling water flow from the manifold.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:6, price:15, color:"blue", pins:"12V · GND", dimensions:"3/4 inch", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"GI05", exportId:"psu", name:"12V power supply", productName:"12V 5A AC-DC Adapter", description:"Primary supply for the valves, pump and electronics.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:18, color:"red", pins:"12V · GND · AC IN", dimensions:"Adapter", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"GI06", exportId:"pump", name:"Water pump", productName:"12V DC Diaphragm Water Pump", description:"Draws water from the source and pressurizes the manifold.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:1, price:30, color:"cyan", pins:"12V · GND", dimensions:"Diaphragm pump", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"GI07", exportId:"manifold", name:"Irrigation manifold", productName:"PVC Pipe Manifold", description:"Connects the pump to the six solenoid valves.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:12, color:"slate", pins:"", dimensions:"PVC manifold", purchaseUrl:"", sourceName:"Plumbing supplier", sourceStatus:"Reference class" }),
  p({ id:"GI08", exportId:"enclosure", name:"Weatherproof enclosure", productName:"IP65 Waterproof Junction Box", description:"Houses the electronics, protecting them from outdoor elements.", category:"mechanical", subtype:"structural", type:"ENCLOSURE", qty:1, price:15, color:"slate", pins:"", dimensions:"IP65 box", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"GI09", exportId:"tubing", name:"Drip tubing & emitters", productName:"1/2\" Tubing, Emitters & Fittings", description:"Main supply line, adjustable drip emitters and the fitting kit for all zones.", category:"mechanical", subtype:"misc", type:"MECHANISM", qty:1, price:48, color:"cyan", pins:"", dimensions:"1/2 inch drip", purchaseUrl:"", sourceName:"Irrigation supplier", sourceStatus:"Reference class" }),
  p({ id:"GI10", exportId:"plumbing_kit", name:"Plumbing & clamps", productName:"PVC Cement/Primer & Hose Clamps", description:"Adhesive, primer and stainless clamps for the manifold and tubing joints.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:16, color:"slate", pins:"", dimensions:"Assorted", purchaseUrl:"", sourceName:"Plumbing supplier", sourceStatus:"Reference class" }),
  p({ id:"GI11", exportId:"mount_set", name:"Mounts & sensor housings", productName:"3D Printed Plate, Mounts & Sensor Housings", description:"Electronics mounting plate, controller/relay/PSU brackets, soil-sensor housings and valve mounts.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:20, color:"violet", pins:"", dimensions:"PETG · 20-30% infill", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"GI12", exportId:"fastener_kit", name:"Fastener kit", productName:"M3 Screws, Self-Tapping Screws & Wall Lugs", description:"Enclosure and plate fasteners plus wall-mount brackets.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:9.8, color:"slate", pins:"", dimensions:"Assorted", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Finalize after CAD freeze" }),
];

export const gardenElectricalConnections = [
  { source:"psu", target:"relay", type:"power", voltage:"12V", current:"5A", label:"Valve/pump power" },
  { source:"psu", target:"controller", type:"power", voltage:"5V", current:"1A", label:"Logic power (regulated)" },
  { source:"controller", target:"relay", type:"data", protocol:"GPIO", label:"Zone switching" },
  { source:"relay", target:"valves", type:"power", voltage:"12V", current:"Per-zone", label:"Solenoid drive" },
  { source:"relay", target:"pump", type:"power", voltage:"12V", current:"2A", label:"Pump control" },
  { source:"controller", target:"soil_sensors", type:"data", protocol:"ADC", label:"Zone moisture" },
];

export const gardenMechanicalConnections = [
  { source:"pump", target:"manifold", label:"Pump to manifold" },
  { source:"manifold", target:"valves", label:"Manifold to six valves" },
  { source:"valves", target:"tubing", label:"Valves to zone tubing" },
  { source:"tubing", target:"soil_sensors", label:"Zone lines and sensors" },
  { source:"controller", target:"mount_set", label:"Controller on plate" },
  { source:"relay", target:"mount_set", label:"Relay on plate" },
  { source:"mount_set", target:"enclosure", label:"Plate in IP65 box" },
  { source:"pump", target:"plumbing_kit", label:"Clamped connections" },
  { source:"enclosure", target:"fastener_kit", label:"Wall-mount lugs" },
];

export const gardenInstructionPreamble: InstructionPreamble = {
  tools:["Soldering iron and heat-shrink","PVC saw and deburring tool","3D printer (PETG capable)","Multimeter","Wire ferrules and crimper","Teflon tape","Computer with the ESP32 toolchain","Bucket for a wet leak test"],
  assumptions:["Outdoor garden-automation hobby use only","Mains adapter and wiring kept dry and correctly rated","Keep low-voltage electronics sealed in the IP65 enclosure","Leak-test the plumbing before leaving the system unattended","Comply with local water-use rules"],
};

export const gardenInstructionSteps: InstructionSection[] = [
  { id:"fabricate", title:"Plumbing & enclosure fabrication", subSteps:[
    { id:"gi_fab_1", title:"Build the PVC manifold and mount the six valves", partIds:["manifold","valves","plumbing_kit"] },
    { id:"gi_fab_2", title:"Print the mounting plate, brackets and sensor housings", partIds:["mount_set"] },
    { id:"gi_fab_3", title:"Fit the electronics plate inside the IP65 enclosure", partIds:["enclosure","mount_set"] },
  ] },
  { id:"wire", title:"Power & control wiring", subSteps:[
    { id:"gi_wire_1", title:"Wire the 12V supply, relay board and controller", partIds:["psu","relay","controller"] },
    { id:"gi_wire_2", title:"Connect the pump and six solenoid valves to the relay", partIds:["relay","pump","valves"] },
    { id:"gi_wire_3", title:"Wire the three soil-moisture sensors to the controller", partIds:["controller","soil_sensors"] },
    { id:"gi_wire_4", title:"Seal cable entries and verify polarity before power-on", partIds:["enclosure","fastener_kit"] },
  ] },
  { id:"bringup", title:"Firmware & leak test", subSteps:[
    { id:"gi_test_1", title:"Flash the ESP32 and connect the phone app", partIds:["controller"] },
    { id:"gi_test_2", title:"Test each valve and the pump for correct switching", partIds:["relay","valves","pump"] },
    { id:"gi_test_3", title:"Calibrate the soil sensors dry and wet", partIds:["soil_sensors"] },
    { id:"gi_test_4", title:"Run a wet leak test on the manifold and tubing", partIds:["manifold","tubing"] },
  ] },
  { id:"assemble", title:"Install & schedule", subSteps:[
    { id:"gi_asm_1", title:"Mount the enclosure and route the manifold outdoors", partIds:["enclosure","manifold","fastener_kit"] },
    { id:"gi_asm_2", title:"Lay the drip tubing and emitters to each zone", partIds:["tubing"] },
    { id:"gi_asm_3", title:"Insert the soil sensors and set watering schedules", partIds:["soil_sensors","controller"] },
    { id:"gi_asm_4", title:"Run a supervised full irrigation cycle across all zones", partIds:["pump","valves","tubing"] },
  ] },
];

export const GARDEN_IRRIGATION = {
  key:"garden" as const,
  projectId:"smart-garden-irrigation-01",
  name:"Smart Garden Irrigation",
  eyebrow:"REFERENCE 18 · IRRIGATION IOT",
  description:"Outdoor automatic irrigation controller with an ESP32, capacitive soil sensing and six zone valves driven from a pumped PVC manifold, controlled from a phone app.",
  briefTitle:"Tưới đúng lúc.\nĐúng độ ẩm.\nĐiều khiển qua app.",
  tags:["IRRIGATION IOT","6 ZONES","ESP32"],
  visual:"",
  originalPrompt:"Design an ESP32 smart garden irrigation system with soil sensing, six zone valves and a pump, controlled by a phone app.",
  plan:"Requirements → plumbing & manifold → valves & pump → ESP32 control + soil sensing → sealed enclosure → leak test → scheduled cycle",
  notes:["outdoor IoT","six irrigation zones","capacitive soil sensing","app-controlled"],
  componentCount:gardenParts.length,
};

export function buildGardenCadProject(request = GARDEN_IRRIGATION.originalPrompt, baseVersion = 1): CadProjectResult {
  const valves = Array.from({ length: 6 }, (_, i) => ({ id:`valve-${i}`, label:`Solenoid valve ${i+1}`, kind:"cylinder" as const, size:[10,26,10] as [number, number, number], position:[(-75 + i*30), 40, 40] as [number, number, number], rotation:[1.57,0,0] as [number, number, number], color:"#6aa8e8", role:"component" as const }));
  const scene: CadProjectResult["scene"] = [
    { id:"enclosure", label:"IP65 enclosure", kind:"box", size:[150,90,60], position:[0,80,-40], color:"#3a3f46", role:"enclosure" },
    { id:"plate", label:"Electronics plate", kind:"plate", size:[130,4,50], position:[0,80,-40], color:"#2b2f35", role:"enclosure" },
    { id:"controller", label:"ESP32 controller", kind:"pcb", size:[54,10,28], position:[-40,86,-40], color:"#157d55", role:"component" },
    { id:"relay", label:"6-channel relay", kind:"pcb", size:[70,12,30], position:[40,86,-40], color:"#38424f", role:"component" },
    { id:"manifold", label:"PVC manifold", kind:"box", size:[180,20,20], position:[0,30,55], color:"#e4e4e7", role:"component" },
    ...valves,
    { id:"pump", label:"12V water pump", kind:"motor", size:[24,30,24], position:[-100,30,55], rotation:[1.57,0,0], color:"#242831", role:"component" },
    { id:"soil-1", label:"Soil sensor zone 1", kind:"box", size:[6,60,10], position:[-60,-6,90], color:"#54c69a", role:"component" },
    { id:"soil-2", label:"Soil sensor zone 2", kind:"box", size:[6,60,10], position:[0,-6,90], color:"#54c69a", role:"component" },
    { id:"soil-3", label:"Soil sensor zone 3", kind:"box", size:[6,60,10], position:[60,-6,90], color:"#54c69a", role:"component" },
  ];
  return {
    projectId:GARDEN_IRRIGATION.projectId,
    draftId:`garden-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[400,200,220], clearanceMm:1, wallThicknessMm:2, printer:"FDM" },
    operations:[
      { id:"op-gi01", type:"create_box", label:"Build the PVC manifold with six ports", parameters:{ zones:6 } },
      { id:"op-gi02", type:"place_component", label:"Install six solenoid valves and the pump", parameters:{ valves:6 } },
      { id:"op-gi03", type:"place_component", label:"Mount the ESP32 and relay in the IP65 box", parameters:{ sealed:true } },
      { id:"op-gi04", type:"place_component", label:"Place three capacitive soil sensors", parameters:{ sensors:3 } },
      { id:"op-gi05", type:"add_pcb_mount", label:"Route drip tubing and emitters per zone", parameters:{ tubing:true } },
    ],
    validation:{ passed:true, score:95, checksPassed:10, checksTotal:11, issues:[{ severity:"info", code:"IRRIGATION_LEAK_GATE", message:"Leak-test the plumbing and keep electronics sealed before unattended operation." }] },
    metrics:{ dimensionsMm:[380,180,200], estimatedPrintMinutes:280, estimatedMaterialGrams:130, primitiveCount:scene.length },
    scene,
  };
}
