import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const emotoBikeParts: ProjectPart[] = [
  p({ id:"EB01", exportId:"bms", name:"72V battery management system", productName:"JK Smart BMS 24S 200A", description:"Monitors cell voltage and temperature, balances the 72V pack and opens the protection path on a fault.", category:"electrical", subtype:"mcu", type:"BMS", qty:1, price:190, color:"orange", pins:"CELL TAPS · TEMP · UART · DISCHARGE", dimensions:"162x102x22mm", purchaseUrl:"", sourceName:"JK BMS", sourceStatus:"Reference class" }),
  p({ id:"EB02", exportId:"controller", name:"Rear hub BLDC motor controller", productName:"Votol EM-150 72V Controller", description:"High-current three-phase inverter driving the rear hub BLDC motor with throttle, brake and Hall inputs.", category:"electrical", subtype:"controller", type:"CONTROLLER", qty:1, price:430, color:"violet", pins:"U/V/W · HALL · THROTTLE · BRAKE · UART", dimensions:"210x150x60mm", purchaseUrl:"", sourceName:"Votol", sourceStatus:"Reference class" }),
  p({ id:"EB03", exportId:"battery", name:"High-voltage battery pack", productName:"Custom 72V 40Ah Li-ion Pack (Samsung 40T)", description:"72 V high-capacity lithium pack powering the traction system.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:2000, color:"red", pins:"HV+ · HV− · BMS", dimensions:"400x250x150mm", purchaseUrl:"", sourceName:"Custom build", sourceStatus:"Reference class" }),
  p({ id:"EB04", exportId:"dcdc", name:"12V DC-DC converter", productName:"Victron Orion 72V→12V 30A Isolated", description:"Steps HV down to a regulated 12 V rail for lights and accessories.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:200, color:"red", pins:"HV IN · 12V OUT", dimensions:"120x90x50mm", purchaseUrl:"", sourceName:"Victron Energy", sourceStatus:"Official product reference" }),
  p({ id:"EB05", exportId:"throttle", name:"Throttle sensor", productName:"Honeywell RTY360LVEAA Hall Throttle", description:"Contactless Hall-effect throttle position sensor.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:40, color:"lime", pins:"5V · SIG · GND", dimensions:"Twist grip", purchaseUrl:"", sourceName:"Honeywell", sourceStatus:"Official product reference" }),
  p({ id:"EB06", exportId:"brake_switches", name:"Brake light switches ×2", productName:"Universal Hydraulic Brake Switch M10x1.25", description:"Front and rear hydraulic brake-pressure switches for the brake light.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:2, price:10, color:"lime", pins:"2-wire", dimensions:"M10x1.25", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"EB07", exportId:"switches", name:"Ignition & kill switches", productName:"Motorcycle Ignition Switch + ProTaper Kill Switch", description:"Keyed ignition switch and handlebar emergency kill switch.", category:"electrical", subtype:"input", type:"MODULE", qty:1, price:35, color:"lime", pins:"4-wire", dimensions:"Assorted", purchaseUrl:"", sourceName:"Generic / ProTaper", sourceStatus:"Reference class" }),
  p({ id:"EB08", exportId:"dash", name:"LCD rider display", productName:"5-inch UART Sunlight-readable LCD", description:"Displays speed, 72V battery state, controller temperature, brake state and lighting status from the ESP32.", category:"electrical", subtype:"display", type:"DISPLAY", qty:1, price:95, color:"violet", pins:"12V · UART · GND", dimensions:"128x82x18mm", purchaseUrl:"", sourceName:"Generic industrial display", sourceStatus:"Reference class" }),
  p({ id:"EB09", exportId:"lights", name:"LED lighting set", productName:"7\" LED Headlight + LED Taillight", description:"Off-road LED headlight and taillight modules.", category:"electrical", subtype:"lighting", type:"DISPLAY", qty:1, price:75, color:"violet", pins:"12V · GND", dimensions:"Ø7\" + tail", purchaseUrl:"", sourceName:"Auxbeam / Wolo", sourceStatus:"Reference class" }),
  p({ id:"EB10", exportId:"frame", name:"Steel dirt-bike frame", productName:"Dirt Bike Frame Kit", description:"High-strength tubular steel frame forming the primary structure.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:400, color:"slate", pins:"", dimensions:"Full-size MX", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"EB11", exportId:"suspension", name:"Suspension set", productName:"Front Forks + Rear Shock Absorber", description:"Adjustable-damping front forks and rear monoshock for off-road terrain.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:1, price:430, color:"cyan", pins:"", dimensions:"MX travel", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"EB12", exportId:"front_wheel", name:"Front wheel & tire", productName:"21\" Off-Road Wheel + 80/100-21 Knobby", description:"21-inch spoked front wheel with an aggressive knobby tire.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:1, price:210, color:"cyan", pins:"", dimensions:"21 inch", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"EB13", exportId:"rear_wheel", name:"Rear wheel & tire", productName:"18\" Off-Road Wheel + 110/100-18 Knobby", description:"18-inch spoked rear wheel with a high-traction knobby tire.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:1, price:260, color:"cyan", pins:"", dimensions:"18 inch", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"EB14", exportId:"brakes", name:"Hydraulic brake set", productName:"2× Calipers + Front/Rear Discs", description:"Hydraulic disc brakes front and rear with stainless rotors.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:1, price:148, color:"cyan", pins:"", dimensions:"Disc", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"EB15", exportId:"drive", name:"Rear hub BLDC traction motor", productName:"QS 273 72V Hub Motor", description:"Sealed rear-wheel hub BLDC motor removes the chain drive and provides high low-speed torque for off-road use.", category:"mechanical", subtype:"mechanism", type:"ACTUATOR", qty:1, price:780, color:"cyan", pins:"U/V/W · HALL", dimensions:"Ø273x120mm", purchaseUrl:"", sourceName:"QS Motor", sourceStatus:"Reference class" }),
  p({ id:"EB16", exportId:"ergonomics", name:"Controls & seat", productName:"Handlebars + Footpegs ×2 + Seat", description:"Off-road handlebars, footpegs and seat for riding ergonomics.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:160, color:"slate", pins:"", dimensions:"MX", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"EB17", exportId:"printed_set", name:"3D printed body & mounts", productName:"Fairings, Fenders, Housings & Mounts", description:"Motor mount, controller housing, battery tray, front/side fairings, rear fender, chain guard, light/dash/switch housings and cable clips.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:140, color:"orange", pins:"", dimensions:"ABS / PETG / PLA", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"EB18", exportId:"fastener_kit", name:"Fastener kit", productName:"M6 Hex Bolts & Nylon Lock Nuts", description:"Vibration-resistant M6 fasteners for structural mounting.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:11, color:"slate", pins:"", dimensions:"M6", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Finalize after CAD freeze" }),
  p({ id:"EB19", exportId:"esp32", name:"Vehicle control module", productName:"ESP32-S3 Industrial Controller", description:"Processes throttle, brake and wheel-speed inputs, drives the LCD data link and supervises rugged LED lighting.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:55, color:"orange", pins:"ADC · GPIO · UART · CAN · 12V", dimensions:"100x70x25mm", purchaseUrl:"", sourceName:"ESP32-S3 reference design", sourceStatus:"Reference class" }),
  p({ id:"EB20", exportId:"speed_sensor", name:"Wheel speed sensor", productName:"IP67 Hall Wheel-speed Sensor", description:"Reads rear-wheel rotation for the ESP32 speed and trip calculations.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:24, color:"lime", pins:"5V · PULSE · GND", dimensions:"M12 sensor", purchaseUrl:"", sourceName:"Generic industrial sensor", sourceStatus:"Reference class" }),
];

export const emotoBikeElectricalConnections = [
  { source:"battery", target:"bms", type:"power", voltage:"72V", current:"High", label:"HV pack + BMS" },
  { source:"bms", target:"controller", type:"power", voltage:"72V", current:"High", label:"HV to inverter" },
  { source:"controller", target:"dcdc", type:"power", voltage:"72V", current:"Low", label:"HV to DC-DC" },
  { source:"controller", target:"drive", type:"power", voltage:"72V 3-phase", current:"High", label:"U/V/W to rear hub BLDC" },
  { source:"throttle", target:"esp32", type:"data", protocol:"Analog", label:"Throttle demand" },
  { source:"brake_switches", target:"esp32", type:"data", protocol:"Digital", label:"Brake cut-off" },
  { source:"speed_sensor", target:"esp32", type:"data", protocol:"Pulse", label:"Wheel speed" },
  { source:"esp32", target:"controller", type:"data", protocol:"UART/CAN", label:"Torque request + telemetry" },
  { source:"esp32", target:"dash", type:"data", protocol:"UART", label:"Rider telemetry" },
  { source:"esp32", target:"lights", type:"data", protocol:"GPIO/MOSFET", label:"Lighting control" },
  { source:"dcdc", target:"dash", type:"power", voltage:"12V", current:"0.5A", label:"12V accessories" },
  { source:"dcdc", target:"lights", type:"power", voltage:"12V", current:"3A", label:"Lighting" },
  { source:"brake_switches", target:"lights", type:"data", protocol:"Switch", label:"Brake light" },
  { source:"switches", target:"bms", type:"data", protocol:"Switch", label:"Ignition & kill" },
];

export const emotoBikeMechanicalConnections = [
  { source:"controller", target:"frame", label:"Powertrain on frame" },
  { source:"battery", target:"frame", label:"Battery in tray" },
  { source:"suspension", target:"frame", label:"Forks & shock" },
  { source:"front_wheel", target:"suspension", label:"Front wheel on forks" },
  { source:"rear_wheel", target:"frame", label:"Rear wheel on swingarm" },
  { source:"drive", target:"rear_wheel", label:"Hub motor integrated in rear wheel" },
  { source:"brakes", target:"front_wheel", label:"Brakes on wheels" },
  { source:"ergonomics", target:"frame", label:"Bars, pegs, seat" },
  { source:"printed_set", target:"frame", label:"Body & mounts" },
  { source:"fastener_kit", target:"frame", label:"Fasteners" },
];

export const emotoBikeInstructionPreamble: InstructionPreamble = {
  tools:["Metric spanner and hex/torque wrench set","Insulated HV gloves and tools","Multimeter with HV rating","Chain breaker and tools","3D printer for body and mounts","Battery charger and CAN configuration laptop"],
  assumptions:[
    "High-voltage EV build (72 V) — HV work by a competent person only, pack disconnected during assembly.",
    "Off-road / closed-course use; road-legal registration is the builder's responsibility.",
    "Always wear proper riding protective gear.",
    "Configure BMS and motor-controller limits, then verify ESP32 input plausibility, brake cut-off and kill switch before the first ride.",
  ],
};

export const emotoBikeInstructionSteps: InstructionSection[] = [
  { id:"fabricate", title:"Chassis & running gear", subSteps:[
    { id:"eb_fab_1", title:"Assemble the steel frame and install suspension", partIds:["frame","suspension","fastener_kit"] },
    { id:"eb_fab_2", title:"Fit both wheels, brakes and the chain drive", partIds:["front_wheel","rear_wheel","brakes","drive"] },
    { id:"eb_fab_3", title:"Mount the handlebars, footpegs and seat", partIds:["ergonomics"] },
  ] },
  { id:"powertrain", title:"HV powertrain install", subSteps:[
    { id:"eb_pw_1", title:"Mount the battery tray and secure the HV pack", partIds:["battery","printed_set"] },
    { id:"eb_pw_2", title:"Install the Votol controller and rear hub BLDC motor", partIds:["controller","drive"] },
    { id:"eb_pw_3", title:"Wire the smart BMS, main protection path and DC-DC converter", partIds:["bms","dcdc"] },
  ] },
  { id:"controls", title:"Controls & lighting", subSteps:[
    { id:"eb_ct_1", title:"Fit the throttle, ignition and kill switches", partIds:["throttle","switches"] },
    { id:"eb_ct_2", title:"Install ESP32, LCD, wheel-speed sensor, LED lights and brake switches", partIds:["esp32","dash","speed_sensor","lights","brake_switches"] },
  ] },
  { id:"commission", title:"Commissioning", subSteps:[
    { id:"eb_cm_1", title:"Configure BMS, Votol current limits and ESP32 input plausibility checks", partIds:["bms","controller","esp32"] },
    { id:"eb_cm_2", title:"Verify the kill switch and brake cut-off before riding", partIds:["switches","brake_switches"] },
    { id:"eb_cm_3", title:"Low-speed test on a closed course and check chain tension", partIds:["drive","throttle"] },
  ] },
];

export const EMOTO_BIKE = {
  key:"emotobike" as const,
  projectId:"electric-motocross-bike-01",
  name:"Electric Motocross Bike",
  eyebrow:"REFERENCE 28 · ELECTRIC MOTOCROSS BIKE",
  description:"Rugged off-road electric motorcycle with a rear hub BLDC motor, 72V smart-BMS battery, ESP32 vehicle controller, LCD telemetry and supervised LED lighting.",
  briefTitle:"Cào cào điện.\nHub BLDC · pin 72V.\nESP32 + LCD.",
  tags:["ELECTRIC MOTOCROSS","72V · REAR HUB BLDC","ESP32 CONTROL"],
  visual:"",
  originalPrompt:"An off-road electric motorcycle with a robust frame, powered by a rear hub BLDC motor and a 72V battery managed by a BMS. An ESP32 controller processes throttle, brake, and speed sensor inputs, displaying data on an LCD, and managing LED lighting for rugged recreational use.",
  plan:"Requirements → steel frame → suspension & wheels → 72V pack + BMS → rear hub BLDC → ESP32 controls/LCD/LED → closed-course commissioning",
  notes:["electric off-road motorcycle","high-voltage EV build","closed-course / off-road use","wear protective gear"],
  componentCount:emotoBikeParts.length,
};

export function buildEmotoBikeCadProject(request = EMOTO_BIKE.originalPrompt, baseVersion = 1): CadProjectResult {
  const scene: CadProjectResult["scene"] = [
    { id:"frame", label:"Steel frame", kind:"box", size:[120,24,18], position:[0,60,0], rotation:[0,0,0.15], color:"#c23b3b", role:"enclosure" },
    { id:"downtube", label:"Down tube", kind:"cylinder", size:[5,70,5], position:[30,45,0], rotation:[0,0,0.6], color:"#c23b3b", role:"enclosure" },
    { id:"battery", label:"72V battery pack", kind:"battery", size:[70,55,26], position:[0,55,0], color:"#2b2f36", role:"component" },
    { id:"controller", label:"Votol 72V BLDC controller", kind:"box", size:[30,26,16], position:[-24,42,0], color:"#7c5cff", role:"component" },
    { id:"bms", label:"72V smart BMS", kind:"box", size:[24,12,5], position:[14,43,0], color:"#e28b35", role:"component" },
    { id:"esp32", label:"ESP32-S3 vehicle controller", kind:"pcb", size:[20,3,14], position:[34,65,0], color:"#16835f", role:"component" },
    { id:"hub-motor", label:"Rear hub BLDC motor", kind:"motor", size:[24,18,24], position:[-70,32,0], rotation:[1.57,0,0], color:"#242831", role:"component" },
    { id:"rear-wheel", label:"Rear wheel 18\"", kind:"cylinder", size:[46,16,46], position:[-70,32,0], rotation:[1.57,0,0], color:"#1a1d22", role:"component" },
    { id:"front-wheel", label:"Front wheel 21\"", kind:"cylinder", size:[52,16,52], position:[78,34,0], rotation:[1.57,0,0], color:"#1a1d22", role:"component" },
    { id:"forks", label:"Front forks", kind:"cylinder", size:[5,80,5], position:[70,60,0], rotation:[0,0,-0.5], color:"#c7ccd3", role:"mount" },
    { id:"shock", label:"Rear shock", kind:"cylinder", size:[6,44,6], position:[-40,55,0], rotation:[0,0,0.5], color:"#e08a2a", role:"mount" },
    { id:"seat", label:"Seat", kind:"box", size:[46,10,20], position:[-20,80,0], rotation:[0,0,0.08], color:"#2b2f36", role:"component" },
    { id:"tank", label:"Front fairing", kind:"box", size:[28,26,20], position:[24,78,0], color:"#38424f", role:"component" },
    { id:"bars", label:"Handlebars", kind:"cylinder", size:[3,44,3], position:[66,92,0], rotation:[1.57,0,0], color:"#1a1d22", role:"component" },
    { id:"headlight", label:"LED headlight", kind:"cylinder", size:[12,8,12], position:[80,80,0], rotation:[0,1.57,0], color:"#f0f4ff", opacity:0.8, role:"component" },
    { id:"lcd", label:"Rider LCD", kind:"box", size:[22,12,4], position:[62,98,0], rotation:[0,0,-0.12], color:"#2a6faa", role:"component" },
    { id:"speed-sensor", label:"Rear wheel speed sensor", kind:"screw", size:[2,10,2], position:[-58,31,0], rotation:[0,0,1.57], color:"#58a975", role:"mount" },
  ];
  return {
    projectId:EMOTO_BIKE.projectId,
    draftId:`emoto-bike-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[2100,1200,800], clearanceMm:2, wallThicknessMm:3, printer:"FDM" },
    operations:[
      { id:"op-eb01", type:"create_box", label:"Assemble the steel frame", parameters:{ material:"steel" } },
      { id:"op-eb02", type:"place_component", label:"Install suspension and wheels", parameters:{ wheels:2 } },
      { id:"op-eb03", type:"place_component", label:"Fit the 72V pack, smart BMS, Votol controller and rear hub BLDC", parameters:{ hv:4 } },
      { id:"op-eb04", type:"place_component", label:"Wire ESP32 throttle/brake/speed inputs, LCD and LED lighting", parameters:{ electrical:8 } },
      { id:"op-eb05", type:"place_component", label:"Install the 3D-printed body kit", parameters:{ body:1 } },
    ],
    validation:{ passed:true, score:88, checksPassed:11, checksTotal:13, issues:[{ severity:"warning", code:"HV_SAFETY_GATE", message:"72V HV build: disconnect the pack during assembly, configure BMS/controller limits and verify ESP32 brake cut-off plus the kill switch before riding. Off-road / closed-course use." }] },
    metrics:{ dimensionsMm:[2050,1150,760], estimatedPrintMinutes:3600, estimatedMaterialGrams:2200, primitiveCount:scene.length },
    scene,
  };
}
