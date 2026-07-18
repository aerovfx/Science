import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const smartHomeParts: ProjectPart[] = [
  p({ id:"SH01", exportId:"hub", name:"Central hub", productName:"Raspberry Pi 4 Model B (4GB)", description:"Runs the smart-home controller, automation logic and dashboard.", category:"electrical", subtype:"sbc", type:"SBC", qty:1, price:55, color:"orange", pins:"USB · GPIO · HDMI", dimensions:"85x56mm", purchaseUrl:"", sourceName:"Raspberry Pi", sourceStatus:"Official product reference" }),
  p({ id:"SH02", exportId:"nodes", name:"ESP32 sensor nodes ×3", productName:"ESP32-WROOM-32 Dev Board", description:"Room sensor/actuator nodes (living room, bedroom, kitchen) over Wi-Fi.", category:"electrical", subtype:"mcu", type:"MCU", qty:3, price:7, color:"orange", pins:"WiFi · GPIO", dimensions:"55x28mm", purchaseUrl:"", sourceName:"Espressif", sourceStatus:"Reference class" }),
  p({ id:"SH03", exportId:"pir", name:"PIR motion sensors ×2", productName:"HC-SR501 PIR Module", description:"Occupancy detection for automated lighting and HVAC.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:2, price:3, color:"lime", pins:"GPIO", dimensions:"32x24mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"SH04", exportId:"climate", name:"Temp/humidity sensors ×2", productName:"BME280 Digital Sensor", description:"Ambient temperature and humidity sensing per room.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:2, price:8, color:"lime", pins:"I2C", dimensions:"Module", purchaseUrl:"", sourceName:"Bosch", sourceStatus:"Reference class" }),
  p({ id:"SH05", exportId:"door", name:"Door contact sensors ×2", productName:"SW-420 Vibration/Contact Sensor", description:"Front and back door open/close detection.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:2, price:2, color:"lime", pins:"GPIO", dimensions:"Module", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"SH06", exportId:"light_sensor", name:"Ambient light sensor", productName:"BH1750FVI Digital Light Sensor", description:"I2C ambient-light sensing for adaptive lighting.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:4, color:"lime", pins:"I2C", dimensions:"Module", purchaseUrl:"", sourceName:"Rohm", sourceStatus:"Reference class" }),
  p({ id:"SH07", exportId:"smart_plugs", name:"Smart plugs ×2", productName:"ESPHome Smart Plug (Shelly Plug S)", description:"Wi-Fi switchable outlets for appliances.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:2, price:20, color:"blue", pins:"AC", dimensions:"Plug", purchaseUrl:"", sourceName:"Shelly", sourceStatus:"Reference class" }),
  p({ id:"SH08", exportId:"led_driver", name:"LED strip driver", productName:"SP108E WS2812B Controller", description:"Addressable LED strip controller for accent lighting.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:1, price:15, color:"blue", pins:"DATA · 5V", dimensions:"Module", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"SH09", exportId:"blind_servos", name:"Blind servos ×2", productName:"MG996R Digital Metal Gear Servo", description:"Motorised window-blind control in two bedrooms.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:2, price:10, color:"blue", pins:"PWM · 5V", dimensions:"40x20x43mm", purchaseUrl:"", sourceName:"TowerPro", sourceStatus:"Reference class" }),
  p({ id:"SH10", exportId:"zigbee", name:"Zigbee dongle", productName:"Sonoff Zigbee 3.0 USB Dongle Plus", description:"Bridges low-power Zigbee sensors and actuators to the hub.", category:"electrical", subtype:"module", type:"MODULE", qty:1, price:25, color:"violet", pins:"USB", dimensions:"USB", purchaseUrl:"", sourceName:"Sonoff", sourceStatus:"Reference class" }),
  p({ id:"SH11", exportId:"touchscreen", name:"Control touchscreen", productName:"Raspberry Pi 7\" Touchscreen", description:"Wall-mounted UI for monitoring and control.", category:"electrical", subtype:"display", type:"DISPLAY", qty:1, price:75, color:"violet", pins:"DSI · 5V", dimensions:"7 inch", purchaseUrl:"", sourceName:"Raspberry Pi", sourceStatus:"Official product reference" }),
  p({ id:"SH12", exportId:"power", name:"Power set", productName:"Pi PSU + USB Adapters + 12V Adapter + Buck", description:"5 V Pi supply, 5 V node adapters, a 12 V blind supply and an LM2596 buck.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:50, color:"red", pins:"AC · 5V · 12V", dimensions:"Assorted", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"SH13", exportId:"enclosures", name:"Enclosures & LED channel", productName:"Pi Enclosure + Junction Box + LED Channel", description:"Hub enclosure, mains junction box and aluminium LED diffuser channel.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:35, color:"slate", pins:"", dimensions:"Assorted", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"SH14", exportId:"printed_set", name:"3D printed mount set", productName:"Node/Sensor/Servo/Display Mounts", description:"Node enclosures, PIR and sensor mounts, servo brackets, blind adapters and the display wall mount.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:30, color:"orange", pins:"", dimensions:"PLA / PETG / ABS", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"SH15", exportId:"install_kit", name:"Cabling & fastener kit", productName:"Zip Ties, Clips, M3 Screws, Anchors & Inserts", description:"Cable management, drywall anchors, M3 fasteners and heat-set inserts.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:30, color:"slate", pins:"", dimensions:"Assorted", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Finalize after CAD freeze" }),
];

export const smartHomeElectricalConnections = [
  { source:"power", target:"hub", type:"power", voltage:"5V", current:"3A", label:"Hub power" },
  { source:"power", target:"nodes", type:"power", voltage:"5V", current:"1A", label:"Node power" },
  { source:"zigbee", target:"hub", type:"data", protocol:"USB", label:"Zigbee bridge" },
  { source:"touchscreen", target:"hub", type:"data", protocol:"DSI", label:"Dashboard" },
  { source:"pir", target:"nodes", type:"data", protocol:"GPIO", label:"Motion" },
  { source:"climate", target:"nodes", type:"data", protocol:"I2C", label:"Climate" },
  { source:"door", target:"nodes", type:"data", protocol:"GPIO", label:"Door contacts" },
  { source:"light_sensor", target:"nodes", type:"data", protocol:"I2C", label:"Light level" },
  { source:"nodes", target:"led_driver", type:"data", protocol:"GPIO", label:"LED control" },
  { source:"nodes", target:"blind_servos", type:"data", protocol:"PWM", label:"Blind control" },
  { source:"hub", target:"smart_plugs", type:"data", protocol:"WiFi", label:"Smart plugs" },
];

export const smartHomeMechanicalConnections = [
  { source:"hub", target:"enclosures", label:"Hub in enclosure" },
  { source:"nodes", target:"printed_set", label:"Nodes in enclosures" },
  { source:"pir", target:"printed_set", label:"Sensor mounts" },
  { source:"blind_servos", target:"printed_set", label:"Servo brackets" },
  { source:"led_driver", target:"enclosures", label:"LED channel" },
  { source:"install_kit", target:"enclosures", label:"Wall mounting" },
];

export const smartHomeInstructionPreamble: InstructionPreamble = {
  tools:["Screwdrivers and a drill for wall mounting","Soldering iron","3D printer","Multimeter","Wi-Fi network and a computer","Heat-set insert tip"],
  assumptions:["Educational DIY smart-home build","Mains wiring / smart plugs installed per local electrical code by a competent person","Low-voltage DC used for all custom nodes","Devices kept on a segregated IoT network"],
};

export const smartHomeInstructionSteps: InstructionSection[] = [
  { id:"hub", title:"Hub & network", subSteps:[
    { id:"sh_hub_1", title:"Set up the Raspberry Pi hub and touchscreen", partIds:["hub","touchscreen","power"] },
    { id:"sh_hub_2", title:"Install the Zigbee dongle and controller software", partIds:["zigbee"] },
  ] },
  { id:"nodes", title:"Sensor & actuator nodes", subSteps:[
    { id:"sh_node_1", title:"Flash and enclose the ESP32 room nodes", partIds:["nodes","printed_set"] },
    { id:"sh_node_2", title:"Wire the PIR, climate, door and light sensors", partIds:["pir","climate","door","light_sensor"] },
    { id:"sh_node_3", title:"Connect the LED driver, blind servos and smart plugs", partIds:["led_driver","blind_servos","smart_plugs"] },
  ] },
  { id:"install", title:"Installation & automations", subSteps:[
    { id:"sh_inst_1", title:"Mount enclosures, LED channel and cable-manage", partIds:["enclosures","install_kit"] },
    { id:"sh_inst_2", title:"Add rooms and devices in the controller UI", partIds:["hub"] },
    { id:"sh_inst_3", title:"Create and test occupancy and lighting automations", partIds:["pir","led_driver"] },
  ] },
];

export const SMART_HOME = {
  key:"smarthome" as const,
  projectId:"smart-home-blueprint-01",
  name:"Smart Home Blueprint",
  eyebrow:"REFERENCE 30 · SMART HOME SYSTEM",
  description:"Raspberry Pi smart-home hub with Zigbee, Wi-Fi ESP32 room nodes, motion/climate/door/light sensing, LED and blind control, and a touchscreen dashboard.",
  briefTitle:"Nhà thông minh.\nHub Pi + node ESP32.\nZigbee · cảm biến đa phòng.",
  tags:["SMART HOME","RASPBERRY PI · ESP32","ZIGBEE + WIFI"],
  visual:"",
  originalPrompt:"Design a smart-home system with a Raspberry Pi hub, a Zigbee dongle, Wi-Fi ESP32 room nodes, motion/climate/door/light sensors, LED and blind actuators and a touchscreen dashboard.",
  plan:"Requirements → Pi hub & Zigbee → ESP32 room nodes → sensors → LED/blind/plug actuators → touchscreen UI → automations",
  notes:["home automation","Zigbee + WiFi","multi-room sensing","segregated IoT network"],
  componentCount:smartHomeParts.length,
};

export function buildSmartHomeCadProject(request = SMART_HOME.originalPrompt, baseVersion = 1): CadProjectResult {
  const scene: CadProjectResult["scene"] = [
    { id:"wall", label:"Wall panel", kind:"plate", size:[220,140,8], position:[0,70,-20], color:"#e8e6e0", role:"enclosure" },
    { id:"hub", label:"Pi hub", kind:"pcb", size:[46,6,30], position:[-70,30,0], color:"#157d55", role:"component" },
    { id:"hub-case", label:"Hub enclosure", kind:"box", size:[54,20,38], position:[-70,30,0], color:"#38424f", opacity:0.4, role:"enclosure" },
    { id:"screen", label:"7\" touchscreen", kind:"pcb", size:[80,50,4], position:[0,80,-15], color:"#0f172a", role:"component" },
    { id:"node-1", label:"Living room node", kind:"box", size:[24,14,20], position:[70,40,0], color:"#f0842a", role:"component" },
    { id:"node-2", label:"Bedroom node", kind:"box", size:[24,14,20], position:[70,80,0], color:"#f0842a", role:"component" },
    { id:"node-3", label:"Kitchen node", kind:"box", size:[24,14,20], position:[70,110,0], color:"#f0842a", role:"component" },
    { id:"pir-1", label:"PIR sensor", kind:"cylinder", size:[10,8,10], position:[-40,110,0], rotation:[1.57,0,0], color:"#e0e4ea", role:"component" },
    { id:"led", label:"LED strip", kind:"box", size:[120,4,6], position:[0,130,0], color:"#6aa8e8", opacity:0.7, role:"component" },
    { id:"zigbee", label:"Zigbee dongle", kind:"box", size:[14,6,30], position:[-44,30,0], color:"#7c5cff", role:"component" },
    { id:"servo", label:"Blind servo", kind:"motor", size:[14,18,14], position:[40,80,0], color:"#242831", role:"component" },
    { id:"plug", label:"Smart plug", kind:"box", size:[18,26,18], position:[-70,90,0], color:"#2b2f36", role:"component" },
  ];
  return {
    projectId:SMART_HOME.projectId,
    draftId:`smart-home-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[400,300,120], clearanceMm:1, wallThicknessMm:2, printer:"FDM" },
    operations:[
      { id:"op-sh01", type:"place_component", label:"Install the Pi hub and Zigbee dongle", parameters:{ hub:1 } },
      { id:"op-sh02", type:"place_component", label:"Deploy the three ESP32 room nodes", parameters:{ nodes:3 } },
      { id:"op-sh03", type:"place_component", label:"Wire sensors and actuators", parameters:{ io:9 } },
      { id:"op-sh04", type:"place_component", label:"Mount the touchscreen dashboard", parameters:{ display:1 } },
      { id:"op-sh05", type:"create_box", label:"Print enclosures and mounts", parameters:{ printed:1 } },
    ],
    validation:{ passed:true, score:92, checksPassed:12, checksTotal:13, issues:[{ severity:"info", code:"IOT_NETWORK_NOTE", message:"Keep smart-home devices on a segregated IoT network and have mains-connected devices installed per local electrical code." }] },
    metrics:{ dimensionsMm:[380,280,110], estimatedPrintMinutes:600, estimatedMaterialGrams:180, primitiveCount:scene.length },
    scene,
  };
}
