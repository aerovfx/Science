import type { ProjectPart } from "./project-export.js";

export const UAV_COMPONENT_COUNT = 30;

const baseUavParts: ProjectPart[] = [
  { id: "E01", exportId: "flight_controller_esc", name: "Flight Controller w/ ESCs", productName: "F4 AIO Flight Controller w/ ESC", description: "Integrated flight controller and four ESC channels for the quadcopter.", category: "electrical", subtype: "mcu", type: "ELECTRICAL", qty: 1, price: 40, color: "lime", pins: "VBAT · M1 · M2 · M3 · M4 · UART", dimensions: "36x8x36mm", purchaseUrl: "" },
  { id: "E02", exportId: "brushless_motors", name: "Brushless Motors ×4", productName: "Brushless Motor 1104–1404", description: "Four lightweight high-RPM motors for 2.5 inch propellers.", category: "electrical", subtype: "actuator", type: "ELECTRICAL", qty: 4, price: 8, color: "blue", pins: "PHASE A · PHASE B · PHASE C", dimensions: "14x12x12mm", purchaseUrl: "" },
  { id: "E03", exportId: "lipo_battery", name: "LiPo Battery 2S/3S", productName: "2S/3S LiPo Battery 300–850mAh", description: "Main propulsion and avionics power source.", category: "electrical", subtype: "power", type: "ELECTRICAL", qty: 1, price: 15, color: "orange", pins: "VBAT+ · GND", dimensions: "50x15x25mm", purchaseUrl: "" },
  { id: "E04", exportId: "radio_receiver", name: "Radio Receiver", productName: "ExpressLRS EP1/EP2 or FrSky XM+", description: "Receives pilot commands and sends CRSF/SBUS data to the controller.", category: "electrical", subtype: "module", type: "ELECTRICAL", qty: 1, price: 15, color: "violet", pins: "5V · GND · TX · RX", dimensions: "20x5x12mm", purchaseUrl: "" },
  { id: "M01", exportId: "main_bottom_plate", name: "Main Bottom Plate", productName: "100–150mm Carbon Fiber Drone Frame Plate", description: "Primary structural base for mounting components.", category: "mechanical", subtype: "structural", type: "MECHANICAL", qty: 1, price: 3, color: "slate", pins: "", dimensions: "100x2x100mm", purchaseUrl: "" },
  { id: "M02", exportId: "main_top_plate", name: "Main Top Plate", productName: "Carbon Fiber Drone Frame Top Plate", description: "Protective upper plate for avionics and receiver.", category: "mechanical", subtype: "structural", type: "MECHANICAL", qty: 1, price: 2.5, color: "slate", pins: "", dimensions: "80x2x80mm", purchaseUrl: "" },
  { id: "M03", exportId: "drone_arms", name: "Carbon Fiber Arms ×4", productName: "Carbon Fiber Drone Arm", description: "Four structural arms connecting motors to the central frame.", category: "mechanical", subtype: "structural", type: "MECHANICAL", qty: 4, price: 1.5, color: "slate", pins: "", dimensions: "80x3x10mm", purchaseUrl: "" },
  { id: "M04", exportId: "propellers", name: "2.5 inch Propellers ×4", productName: "2.5 inch Bi-Blade Propeller", description: "Two CW and two CCW propellers matched to motor direction.", category: "mechanical", subtype: "mechanism", type: "MECHANICAL", qty: 4, price: 0.5, color: "violet", pins: "CW ×2 · CCW ×2", dimensions: "65x5x65mm", purchaseUrl: "" },
  { id: "M05", exportId: "motor_mounts", name: "Motor Mounts ×4", productName: "PETG 3D Printed Motor Mount", description: "Printed mounts fixing each motor to its carbon arm.", category: "mechanical", subtype: "3d_printed", type: "3D PRINTED", qty: 4, price: 0.1, color: "violet", pins: "", dimensions: "15x10x15mm", purchaseUrl: "" },
  { id: "M06", exportId: "flight_controller_standoffs", name: "FC Standoffs", productName: "M2x5mm Nylon Standoffs", description: "Vibration-isolating support for the flight controller.", category: "mechanical", subtype: "misc", type: "HARDWARE", qty: 4, price: 0.05, color: "slate", pins: "", dimensions: "5x5x5mm", purchaseUrl: "" },
  { id: "M07", exportId: "flight_controller_screws", name: "FC Mounting Screws", productName: "M2x5mm Nylon Screws", description: "Nylon screws securing the flight controller.", category: "mechanical", subtype: "misc", type: "HARDWARE", qty: 4, price: 0.03, color: "slate", pins: "", dimensions: "5x2x2mm", purchaseUrl: "" },
  { id: "M08", exportId: "frame_screws_short", name: "Frame Screws — Short", productName: "M2x6mm Steel Screws", description: "Eight screws attaching arms to the bottom plate.", category: "mechanical", subtype: "misc", type: "HARDWARE", qty: 8, price: 0.02, color: "slate", pins: "", dimensions: "6x2x2mm", purchaseUrl: "" },
  { id: "M09", exportId: "frame_screws_long", name: "Frame Screws — Long", productName: "M2x10mm Steel Screws", description: "Four screws securing the top plate and frame standoffs.", category: "mechanical", subtype: "misc", type: "HARDWARE", qty: 4, price: 0.03, color: "slate", pins: "", dimensions: "10x2x2mm", purchaseUrl: "" },
  { id: "M10", exportId: "frame_assembly_standoffs", name: "Frame Standoffs", productName: "M2x15mm Aluminum Standoffs", description: "Separates the upper and lower frame plates.", category: "mechanical", subtype: "misc", type: "HARDWARE", qty: 4, price: 0.1, color: "slate", pins: "", dimensions: "15x5x5mm", purchaseUrl: "" },
  { id: "M11", exportId: "battery_strap", name: "LiPo Battery Strap", productName: "150mm LiPo Battery Strap", description: "Velcro strap securing the LiPo battery to the frame.", category: "mechanical", subtype: "misc", type: "MECHANICAL", qty: 1, price: 0.8, color: "orange", pins: "", dimensions: "150x3x15mm", purchaseUrl: "" },
  { id: "M12", exportId: "battery_pad", name: "LiPo Battery Pad", productName: "Anti-slip LiPo Battery Pad", description: "Prevents battery movement during flight.", category: "mechanical", subtype: "misc", type: "MECHANICAL", qty: 1, price: 0.5, color: "orange", pins: "", dimensions: "50x2x25mm", purchaseUrl: "" },
  { id: "M13", exportId: "receiver_mount", name: "Receiver Mount", productName: "PLA 3D Printed Receiver Mount", description: "Small printed enclosure for the radio receiver.", category: "mechanical", subtype: "3d_printed", type: "3D PRINTED", qty: 1, price: 0.05, color: "violet", pins: "", dimensions: "20x8x15mm", purchaseUrl: "" },
  { id: "M14", exportId: "antenna_mount", name: "Antenna Mount", productName: "PLA 3D Printed Antenna Tube Mount", description: "Printed tube mount retaining the receiver antenna.", category: "mechanical", subtype: "3d_printed", type: "3D PRINTED", qty: 1, price: 0.03, color: "violet", pins: "", dimensions: "10x30x10mm", purchaseUrl: "" },
];

const checkedAt = "2026-07-16";
const carbonImage = "https://image.made-in-china.com/202f0j00JQBYWswIpAqd/OEM-High-Quality-Carbon-Fiber-Drone-Frame.webp";
const hardwareImage = "https://cdn11.bigcommerce.com/s-am5zt8xfow/images/stencil/1280x1280/products/1183/5702/4639600-1__85657.1583263227.jpg?c=2";

const partResearch: Record<string, Partial<ProjectPart>> = {
  E01: {
    productName: "BETAFPV F4 1S 5A AIO Brushless Flight Controller",
    price: 39.99,
    purchaseUrl: "https://betafpv.com/products/f4-1s-5a-aio-brushless-flight-controller-elrs-2-4g",
    imageUrl: "https://betafpv.com/cdn/shop/products/74b96dbb2d19db9758ba306fc55ad040_c4ea2654-223f-4b1c-8960-d44eba3840ca.jpg?v=1604547015",
    sourceName: "BETAFPV",
    priceCheckedAt: checkedAt,
    sourceStatus: "Official product · listed $39.99",
    specs: { Processor: "STM32F411", ESC: "4-in-1 5A", Firmware: "Betaflight", Weight: "3.92 g", Input: "1S; No-RX variant supports 2S" },
  },
  E02: {
    productName: "BETAFPV LAVA 1104 7200KV Brushless Motor",
    price: 12.99,
    purchaseUrl: "https://betafpv.com/products/lava-series-1104-brushless-motors",
    imageUrl: "https://betafpv.com/cdn/shop/files/74b96dbb2d19db9758ba306fc55ad040_c781690b-9b72-4c87-a386-e62abf1b99b7.jpg?v=1722392267",
    sourceName: "BETAFPV",
    priceCheckedAt: checkedAt,
    sourceStatus: "Official product · listed $12.99 each",
    specs: { KV: "7200KV", Weight: "5.3 g", "Max power": "122.5 W", "Max current": "10.2 A", Shaft: "Ø1.5 × 5 mm", Mounting: "4 × M2 on Ø9 mm" },
  },
  E03: {
    productName: "Tattu 850mAh 2S 95C LiPo with XT30",
    price: 10.99,
    purchaseUrl: "https://store.flitetest.com/tattu-850mah-2s-95c-battery-with-xt30-plug/",
    imageUrl: "https://cdn11.bigcommerce.com/s-x9hwh7on/images/stencil/1280x1280/products/3260/10440/_1__88459__47507.1748877149.png?c=2",
    sourceName: "Flite Test / Tattu",
    priceCheckedAt: checkedAt,
    sourceStatus: "Retail listing · $10.99",
    dimensions: "74.51x16.76x15.13mm",
    specs: { Capacity: "850 mAh", Configuration: "2S1P / 7.6 V", Discharge: "95C", Weight: "40 g", Connector: "XT30 + JST-XHR-3P" },
  },
  E04: {
    productName: "BETAFPV ELRS Lite Receiver V1.2",
    price: 8.99,
    purchaseUrl: "https://betafpv.com/products/elrs-lite-receiver",
    imageUrl: "https://betafpv.com/cdn/shop/files/ELRS_Lite_Receiver_Flat_Antenna_V1.2_side_view.jpg?v=1748601432",
    sourceName: "BETAFPV",
    priceCheckedAt: checkedAt,
    sourceStatus: "Official product · listed $8.99",
    dimensions: "11x10x3mm",
    specs: { Protocol: "ExpressLRS 2.4 GHz", MCU: "ESP8285", Weight: "0.46 g", Interface: "CRSF UART", Range: "Up to 1000 m at 50 mW" },
  },
  M01: { purchaseUrl: "https://sznova.en.made-in-china.com/product/HsJnlqYvHDhI/China-OEM-High-Quality-Carbon-Fiber-Drone-Frame.html", imageUrl: carbonImage, sourceName: "Nova Carbon CNC", priceCheckedAt: checkedAt, sourceStatus: "Fabrication estimate", specs: { Material: "3K carbon fiber", Thickness: "2.5 mm", Finish: "Matte twill", Process: "CNC cut" } },
  M02: { purchaseUrl: "https://sznova.en.made-in-china.com/product/HsJnlqYvHDhI/China-OEM-High-Quality-Carbon-Fiber-Drone-Frame.html", imageUrl: carbonImage, sourceName: "Nova Carbon CNC", priceCheckedAt: checkedAt, sourceStatus: "Fabrication estimate", specs: { Material: "3K carbon fiber", Thickness: "2.0 mm", Finish: "Matte twill", Process: "CNC cut" } },
  M03: { purchaseUrl: "https://sznova.en.made-in-china.com/product/HsJnlqYvHDhI/China-OEM-High-Quality-Carbon-Fiber-Drone-Frame.html", imageUrl: carbonImage, sourceName: "Nova Carbon CNC", priceCheckedAt: checkedAt, sourceStatus: "Fabrication estimate", specs: { Material: "3K carbon fiber", Length: "80–102 mm", Thickness: "3 mm", MotorPattern: "4 × M2" } },
  M04: {
    productName: "Gemfan 65mm Bi-Blade 2.5-inch Propeller",
    price: 0.44,
    purchaseUrl: "https://www.racedayquads.com/products/gemfan-65mm-bi-blade-2-5-prop-8-pack-1mm-shaft-choose-your-color",
    imageUrl: "https://www.racedayquads.com/cdn/shop/products/gemfan-gemfan-65mm-bi-blade-2-5-prop-8-pack-1mm-shaft-choose-your-color-grey-prop-12001518583921.jpg?v=1737333414&width=600",
    sourceName: "RaceDayQuads / Gemfan",
    priceCheckedAt: checkedAt,
    sourceStatus: "$3.49 per 8-pack · $0.44 each",
    specs: { Diameter: "65 mm / 2.5 in", Material: "Polycarbonate", Weight: "0.5 g each", Package: "4 CW + 4 CCW", Shaft: "1 mm" },
  },
  M05: { imageUrl: carbonImage, sourceName: "In-house 3D print", priceCheckedAt: checkedAt, sourceStatus: "PETG material estimate", specs: { Material: "PETG", Infill: "45%", Layer: "0.20 mm", Fastener: "M2" } },
  M06: { purchaseUrl: "https://www.pishop.ca/product/m2-nylon-hex-standoff-spacer-screw-nut-assortment-kit-160-pieces/", imageUrl: hardwareImage, sourceName: "PiShop", priceCheckedAt: checkedAt, sourceStatus: "$7.95 assortment · allocated unit cost", specs: { Thread: "M2", Material: "Nylon", Height: "5 mm", Function: "Vibration isolation" } },
  M07: { purchaseUrl: "https://www.pishop.ca/product/m2-nylon-hex-standoff-spacer-screw-nut-assortment-kit-160-pieces/", imageUrl: hardwareImage, sourceName: "PiShop", priceCheckedAt: checkedAt, sourceStatus: "$7.95 assortment · allocated unit cost", specs: { Thread: "M2", Material: "Nylon", Length: "5–6 mm", Head: "Phillips" } },
  M08: { purchaseUrl: "https://www.lacameraembarquee.fr/visserie-quincaillerie-fpv/15024-assortiment-de-vis-a-tete-cylindrique-et-ecrous-en-acier-noir-m2-lemonfpv.html", imageUrl: hardwareImage, sourceName: "LemonFPV", priceCheckedAt: checkedAt, sourceStatus: "Assortment allocated unit cost", specs: { Thread: "M2", Length: "6 mm", Material: "Black steel", Quantity: "8" } },
  M09: { purchaseUrl: "https://www.lacameraembarquee.fr/visserie-quincaillerie-fpv/15024-assortiment-de-vis-a-tete-cylindrique-et-ecrous-en-acier-noir-m2-lemonfpv.html", imageUrl: hardwareImage, sourceName: "LemonFPV", priceCheckedAt: checkedAt, sourceStatus: "Assortment allocated unit cost", specs: { Thread: "M2", Length: "10 mm", Material: "Black steel", Quantity: "4" } },
  M10: { purchaseUrl: "https://www.soundimports.eu/en/320-3290.html", imageUrl: "https://cdn.webshopapp.com/shops/188510/files/314700996/pc-board-m3-standoff-kit.jpg", sourceName: "SoundImports", priceCheckedAt: checkedAt, sourceStatus: "Comparable metal standoff kit", specs: { Thread: "M2", Height: "15 mm", Material: "Aluminum", Quantity: "4" } },
  M11: { price: 1.49, purchaseUrl: "https://www.racedayquads.com/products/armattan-micro-anti-slip-battery-strap", imageUrl: "https://www.racedayquads.com/cdn/shop/products/armattan-micro-anti-slip-battery-strap.jpg", sourceName: "RaceDayQuads / Armattan", priceCheckedAt: checkedAt, sourceStatus: "Retail listing · $1.49", specs: { Length: "150 mm", Material: "Anti-slip woven nylon", Buckle: "Polymer", Width: "15 mm" } },
  M12: { price: 1.98, purchaseUrl: "https://www.team-blacksheep.com/products/prod%3Agrip_pads", imageUrl: "https://www.team-blacksheep.com/img/gallery/PRODUCTS/grip_pads.jpg", sourceName: "Team BlackSheep", priceCheckedAt: checkedAt, sourceStatus: "$5.95 per 3-pack · $1.98 each", specs: { Size: "100 × 50 × 2.5 mm", Surface: "High-grip", Backing: "Self-adhesive", Trim: "Cut to fit" } },
  M13: { imageUrl: carbonImage, sourceName: "In-house 3D print", priceCheckedAt: checkedAt, sourceStatus: "PLA material estimate", specs: { Material: "PLA", Layer: "0.20 mm", Mounting: "M2", Fit: "ELRS Lite" } },
  M14: { imageUrl: carbonImage, sourceName: "In-house 3D print", priceCheckedAt: checkedAt, sourceStatus: "PLA material estimate", specs: { Material: "PLA", Layer: "0.20 mm", Feature: "Antenna strain relief", Mounting: "M2" } },
};

export const uavParts: ProjectPart[] = baseUavParts.map((part) => ({ ...part, ...partResearch[part.id] }));

export const uavElectricalConnections = [
  { source: "lipo_battery", target: "flight_controller_esc", type: "power", voltage: "VBAT", current: "20A", label: "Main Battery Power" },
  { source: "flight_controller_esc", target: "radio_receiver", type: "power", voltage: "5V", current: "100mA", label: "Receiver 5V Power" },
  { source: "radio_receiver", target: "flight_controller_esc", type: "data", protocol: "uart", sourcePin: "UART TX", targetPin: "UART RX (SBUS/CRSF)", label: "Receiver Data (CRSF/SBUS)" },
  { source: "flight_controller_esc", target: "motor_front_left", type: "data", protocol: "pwm", sourcePin: "M1", targetPin: "Phase A,B,C", label: "Motor 1 Signal & Power" },
  { source: "flight_controller_esc", target: "motor_front_right", type: "data", protocol: "pwm", sourcePin: "M2", targetPin: "Phase A,B,C", label: "Motor 2 Signal & Power" },
  { source: "flight_controller_esc", target: "motor_rear_left", type: "data", protocol: "pwm", sourcePin: "M3", targetPin: "Phase A,B,C", label: "Motor 3 Signal & Power" },
  { source: "flight_controller_esc", target: "motor_rear_right", type: "data", protocol: "pwm", sourcePin: "M4", targetPin: "Phase A,B,C", label: "Motor 4 Signal & Power" },
];

export const uavMechanicalConnections = [
  ...["front_left", "front_right", "rear_left", "rear_right"].map((position) => ({ source: "main_bottom_plate", target: `arm_${position}`, label: "M2 frame screws" })),
  { source: "main_top_plate", target: "frame_assembly_standoffs", label: "M2 screws" },
  { source: "main_bottom_plate", target: "frame_assembly_standoffs", label: "M2 screws" },
  { source: "frame_assembly_standoffs", target: "frame_screws_long", label: "M2 screws" },
  ...["fl", "fr", "rl", "rr"].map((position) => ({ source: `arm_${position}`, target: `motor_mount_${position}`, label: "M2 screws" })),
  ...["fl", "fr", "rl", "rr"].map((position) => ({ source: `motor_mount_${position}`, target: `motor_${position}`, label: "mount" })),
  ...["fl", "fr", "rl", "rr"].map((position) => ({ source: `motor_${position}`, target: `propeller_${position}`, label: "motor shaft / nut" })),
  { source: "main_bottom_plate", target: "flight_controller_standoffs", label: "M2 screws" },
  { source: "flight_controller_standoffs", target: "flight_controller_screws", label: "M2 screws" },
  { source: "flight_controller_standoffs", target: "flight_controller_esc", label: "mount" },
  { source: "flight_controller_screws", target: "flight_controller_esc", label: "mount" },
  { source: "main_bottom_plate", target: "battery_pad", label: "adhesive" },
  { source: "main_bottom_plate", target: "battery_strap", label: "strap slot" },
  { source: "battery_strap", target: "lipo_battery", label: "mount" },
  { source: "battery_pad", target: "lipo_battery", label: "mount" },
  { source: "main_top_plate", target: "receiver_mount", label: "M2 screws" },
  { source: "receiver_mount", target: "radio_receiver", label: "mount" },
  { source: "receiver_mount", target: "antenna_mount", label: "M2 screws" },
];

export const uavInstructionPreamble = {
  tools: ["Soldering iron with fine tip", "Wire strippers/cutters", "M3 hex key/screwdriver", "M2 screwdriver", "3D printer (PETG and PLA capable)", "Multimeter", "Hobby knife/flush cutters", "Tweezers", "Heat gun (optional, for heat shrink)"],
  assumptions: ["Basic soldering experience", "Access to a computer with internet connectivity", "USB cable for flight controller connection", "Familiarity with flight controller software (e.g., Betaflight Configurator)"],
};

export const uavInstructionSteps = [
  { id: "fabricate", title: "Fabricate", subSteps: [
    { id: "fabricate_1", title: "3D print all motor mounts (PETG) and clean supports", partIds: ["motor_mounts"] },
    { id: "fabricate_2", title: "3D print receiver mount and antenna mount (PLA) and clean supports", partIds: ["receiver_mount", "antenna_mount"] },
  ] },
  { id: "wire", title: "Wire", subSteps: [
    { id: "wire_1", title: "Solder LiPo Battery power leads to Flight Controller VBAT pads", partIds: ["lipo_battery", "flight_controller_esc"] },
    { id: "wire_2", title: "Solder Radio Receiver power (5V, GND) and UART data (TX, RX) to Flight Controller", partIds: ["radio_receiver", "flight_controller_esc"] },
    { id: "wire_3", title: "Solder Front Left Motor phase wires to Flight Controller M1 ESC pads", partIds: ["brushless_motors", "flight_controller_esc"] },
    { id: "wire_4", title: "Solder Front Right Motor phase wires to Flight Controller M2 ESC pads", partIds: ["brushless_motors", "flight_controller_esc"] },
    { id: "wire_5", title: "Solder Rear Left Motor phase wires to Flight Controller M3 ESC pads", partIds: ["brushless_motors", "flight_controller_esc"] },
    { id: "wire_6", title: "Solder Rear Right Motor phase wires to Flight Controller M4 ESC pads", partIds: ["brushless_motors", "flight_controller_esc"] },
    { id: "wire_7", title: "Perform continuity checks on all soldered power and signal lines", partIds: ["lipo_battery", "flight_controller_esc", "radio_receiver", "brushless_motors"] },
  ] },
  { id: "bringup", title: "Bring-up", subSteps: [
    { id: "bringup_1", title: "Connect Flight Controller to PC via USB and install drivers", partIds: ["flight_controller_esc"] },
    { id: "bringup_2", title: "Flash appropriate firmware to the Flight Controller", partIds: ["flight_controller_esc"] },
    { id: "bringup_3", title: "Configure basic flight controller settings and ESC protocol", partIds: ["flight_controller_esc"] },
    { id: "bringup_4", title: "Verify Radio Receiver communication and channel mapping", partIds: ["flight_controller_esc", "radio_receiver"] },
    { id: "bringup_5", title: "Test motor spin direction and functionality (without propellers)", partIds: ["brushless_motors"] },
    { id: "bringup_6", title: "Calibrate flight controller accelerometers and gyroscopes", partIds: ["flight_controller_esc"] },
  ] },
  { id: "assemble", title: "Assemble", subSteps: [
    { id: "assemble_1", title: "Attach all Arms to the Main Bottom Plate using M3 bolts/screws", partIds: ["main_bottom_plate", "drone_arms"] },
    { id: "assemble_2", title: "Mount Motors into 3D printed Motor Mounts and attach to Arms", partIds: ["motor_mounts", "brushless_motors", "drone_arms"] },
    { id: "assemble_3", title: "Install Flight Controller Standoffs on the Main Bottom Plate and mount Flight Controller", partIds: ["flight_controller_standoffs", "main_bottom_plate", "flight_controller_esc"] },
    { id: "assemble_4", title: "Attach Receiver Mount to Main Top Plate, then mount Radio Receiver and Antenna Mount", partIds: ["main_top_plate", "radio_receiver", "receiver_mount", "antenna_mount"] },
    { id: "assemble_5", title: "Install Frame Assembly Standoffs onto Main Bottom Plate, then secure Main Top Plate", partIds: ["frame_assembly_standoffs", "main_bottom_plate", "main_top_plate"] },
    { id: "assemble_6", title: "Adhere Battery Pad to Main Bottom Plate and secure Battery Strap", partIds: ["battery_pad", "main_bottom_plate", "battery_strap"] },
    { id: "assemble_7", title: "Attach Propellers to motors, ensuring correct rotation direction", partIds: ["propellers", "brushless_motors"] },
  ] },
];
