import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const mobileRobotParts: ProjectPart[] = [
  p({ id:"MR01", exportId:"main_mcu", name:"Main robot controller", productName:"STM32 NUCLEO-F446RE", description:"ARM Cortex-M4 controller running motion control, line following, motor control and sensor fusion.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:25, color:"orange", pins:"UART · SPI · I2C · GPIO · PWM", dimensions:"82x70x18mm", purchaseUrl:"https://www.st.com/en/evaluation-tools/nucleo-f446re.html", sourceName:"STMicroelectronics", sourceStatus:"Official product reference" }),
  p({ id:"MR02", exportId:"wifi_mcu", name:"Wi-Fi / BT co-processor", productName:"DOIT ESP32 DevKit V1", description:"ESP-WROOM-32 board handling Wi-Fi/Bluetooth connectivity and telemetry offload.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:6.5, color:"orange", pins:"UART · SPI · I2C · GPIO · 5V", dimensions:"54x28x13mm", purchaseUrl:"", sourceName:"DOIT / Espressif", sourceStatus:"Reference class" }),
  p({ id:"MR03", exportId:"cam_module", name:"Camera module", productName:"AI-Thinker ESP32-CAM (OV2640)", description:"Wi-Fi camera module for vision, line/obstacle detection and image logging.", category:"electrical", subtype:"module", type:"MODULE", qty:1, price:7.5, color:"violet", pins:"UART · GPIO · 5V · CAM", dimensions:"40x27x12mm", purchaseUrl:"", sourceName:"AI-Thinker", sourceStatus:"Reference class" }),
  p({ id:"MR04", exportId:"env_sensor", name:"Environmental sensor", productName:"Waveshare BME680 Module", description:"Multi-parameter environmental sensing: temperature, humidity, pressure and gas.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:18.99, color:"lime", pins:"I2C · SPI · 3.3V", dimensions:"21x18x3mm", purchaseUrl:"https://www.waveshare.com/", sourceName:"Waveshare", sourceStatus:"Official product reference" }),
  p({ id:"MR05", exportId:"line_sensor", name:"Line follower array", productName:"Pololu QTR-8RC", description:"8-channel infrared reflectance array for line detection and edge following.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:15, color:"lime", pins:"GPIO ×8 · 5V", dimensions:"75x13x3mm", purchaseUrl:"https://www.pololu.com/product/961", sourceName:"Pololu", sourceStatus:"Official product reference" }),
  p({ id:"MR06", exportId:"imu", name:"9-axis IMU", productName:"MPU-9250 9-DOF IMU", description:"Accelerometer, gyroscope and magnetometer for orientation and heading estimation.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:7.5, color:"lime", pins:"I2C · SPI · 3.3V", dimensions:"25x15x3mm", purchaseUrl:"", sourceName:"InvenSense / generic", sourceStatus:"Reference class" }),
  p({ id:"MR07", exportId:"tof_sensor", name:"ToF distance sensor", productName:"Adafruit VL53L0X ToF", description:"Time-of-flight ranging up to 2 m for obstacle detection and navigation.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:14.95, color:"lime", pins:"I2C · 3.3V", dimensions:"25x11x3mm", purchaseUrl:"https://www.adafruit.com/product/3317", sourceName:"Adafruit", sourceStatus:"Official product reference" }),
  p({ id:"MR08", exportId:"dust_sensor", name:"Dust sensor", productName:"Sharp DSM501A", description:"Optical particulate sensor for basic air-quality monitoring.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:7, color:"lime", pins:"PWM · 5V", dimensions:"59x45x20mm", purchaseUrl:"", sourceName:"Sharp", sourceStatus:"Reference class" }),
  p({ id:"MR09", exportId:"light_sensor", name:"Ambient light sensor", productName:"BH1750FVI Module", description:"I2C digital light-intensity sensor reporting ambient lux.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:3.5, color:"lime", pins:"I2C · 3.3V", dimensions:"21x16x3mm", purchaseUrl:"", sourceName:"Rohm / generic", sourceStatus:"Reference class" }),
  p({ id:"MR10", exportId:"motor_driver", name:"Motor driver", productName:"TB6612FNG Dual Motor Driver", description:"Dual H-bridge driver controlling the two encoded drive motors.", category:"electrical", subtype:"module", type:"MODULE", qty:1, price:5, color:"violet", pins:"AIN · BIN · PWM · VM · VCC", dimensions:"20x20x3mm", purchaseUrl:"", sourceName:"Toshiba / generic", sourceStatus:"Reference class" }),
  p({ id:"MR11", exportId:"drive_motors", name:"Drive motors ×2", productName:"25GA-370 12V 1360RPM w/ Encoder", description:"Two geared DC motors with Hall encoders for closed-loop differential drive.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:2, price:15.5, color:"blue", pins:"M+ · M− · ENC A/B · 5V", dimensions:"Ø25x70mm", purchaseUrl:"", sourceName:"Generic gearmotor", sourceStatus:"Reference class" }),
  p({ id:"MR12", exportId:"oled", name:"OLED display", productName:"SSD1306 128x64 OLED", description:"Small graphical display for status, sensor readouts and menus.", category:"electrical", subtype:"module", type:"DISPLAY", qty:1, price:7, color:"violet", pins:"I2C · 3.3V", dimensions:"27x27x4mm", purchaseUrl:"", sourceName:"Generic OLED", sourceStatus:"Reference class" }),
  p({ id:"MR13", exportId:"rtc", name:"Real-time clock", productName:"DS3231 RTC Module", description:"Battery-backed real-time clock for accurate data timestamps.", category:"electrical", subtype:"module", type:"MODULE", qty:1, price:4, color:"violet", pins:"I2C · 3.3V", dimensions:"38x22x14mm", purchaseUrl:"", sourceName:"Maxim / generic", sourceStatus:"Reference class" }),
  p({ id:"MR14", exportId:"sd_module", name:"MicroSD reader", productName:"MicroSD Card Module (SPI)", description:"SPI storage module for logging sensor data and captures.", category:"electrical", subtype:"module", type:"MODULE", qty:1, price:3, color:"violet", pins:"SPI · 3.3V", dimensions:"24x24x3mm", purchaseUrl:"", sourceName:"Generic SD module", sourceStatus:"Reference class" }),
  p({ id:"MR15", exportId:"battery", name:"LiPo battery", productName:"Ovonic 3S 11.1V 5000mAh 25C", description:"Main 3S pack powering the motors and electronics.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:35.99, color:"red", pins:"VBAT+ · VBAT− · BALANCE", dimensions:"140x45x25mm", purchaseUrl:"", sourceName:"Ovonic", sourceStatus:"Handle per LiPo safety" }),
  p({ id:"MR16", exportId:"buck_5v", name:"5V regulator", productName:"LM2596 DC-DC Buck", description:"Steps the battery bus down to a 5 V rail for logic and modules.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:2, color:"red", pins:"IN+ · IN− · 5V · GND", dimensions:"43x21x14mm", purchaseUrl:"", sourceName:"Generic buck", sourceStatus:"Reference class" }),
  p({ id:"MR17", exportId:"ldo_3v3", name:"3.3V regulator", productName:"AMS1117-3.3 Module", description:"Linear 3.3 V rail for the MCU, IMU and I2C sensors.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:1.5, color:"red", pins:"IN · 3.3V · GND", dimensions:"18x11x3mm", purchaseUrl:"", sourceName:"Generic LDO", sourceStatus:"Reference class" }),
  p({ id:"MR18", exportId:"charger", name:"3S balance charger", productName:"3S LiPo Balance Charger Module", description:"On-board module for safely charging and balancing the 3S pack.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:15, color:"red", pins:"BAT · BALANCE · DC IN", dimensions:"60x40x15mm", purchaseUrl:"", sourceName:"Generic charger", sourceStatus:"Reference class" }),
  p({ id:"MR19", exportId:"power_distribution", name:"Power distribution & fuse", productName:"12V PDB with 5A Inline Fuse", description:"Distributes battery power to subsystems through a fused, protected bus.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:3.5, color:"red", pins:"BAT+ · BAT− · RAILS", dimensions:"50x40x10mm", purchaseUrl:"", sourceName:"Generic PDB", sourceStatus:"Reference class" }),
  p({ id:"MR20", exportId:"chassis", name:"Robot chassis", productName:"Acrylic Robot Chassis Kit", description:"Base plate carrying the motors, wheels, battery and electronics stack.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:15, color:"slate", pins:"", dimensions:"200x150x4mm", purchaseUrl:"", sourceName:"Generic chassis kit", sourceStatus:"Reference class" }),
  p({ id:"MR21", exportId:"wheels", name:"Drive wheels ×2", productName:"65mm Robot Wheels", description:"Rubber drive wheels coupled to the two geared motors.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:2, price:4.5, color:"cyan", pins:"", dimensions:"Ø65x27mm", purchaseUrl:"", sourceName:"Generic wheel", sourceStatus:"Reference class" }),
  p({ id:"MR22", exportId:"io_kit", name:"Indicators & switches", productName:"Buzzer, Status LEDs, Rocker & Start Switch", description:"Piezo buzzer, red/green status LEDs, illuminated rocker switch and start/stop button.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:1, price:4.2, color:"blue", pins:"GPIO · 5V", dimensions:"Assorted", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Reference class" }),
  p({ id:"MR23", exportId:"mount_set", name:"3D-printed mount set", productName:"3D Printed Sensor & Module Mounts", description:"Printed cradles and brackets for the controllers, sensors, camera, OLED, motors and connectors.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:22, color:"violet", pins:"", dimensions:"PLA / PETG · 20-30% infill", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"MR24", exportId:"fastener_kit", name:"Fastener & wiring kit", productName:"M2/M3 Screws, Standoffs, Terminals & Zip Ties", description:"Assembly hardware, nylon standoffs, terminal block, resistors and cable management.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:9, color:"slate", pins:"", dimensions:"Assorted", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Finalize after CAD freeze" }),
];

export const mobileRobotElectricalConnections = [
  { source:"battery", target:"power_distribution", type:"power", voltage:"11.1V", current:"5A", label:"Fused battery bus" },
  { source:"power_distribution", target:"buck_5v", type:"power", voltage:"11.1V", current:"3A", label:"5V rail feed" },
  { source:"buck_5v", target:"ldo_3v3", type:"power", voltage:"5V", current:"1A", label:"3.3V rail feed" },
  { source:"power_distribution", target:"motor_driver", type:"power", voltage:"11.1V", current:"3A", label:"Motor supply" },
  { source:"motor_driver", target:"drive_motors", type:"power", voltage:"PWM", current:"Per-motor", label:"Motor drive" },
  { source:"main_mcu", target:"motor_driver", type:"data", protocol:"PWM + GPIO", label:"Motor commands" },
  { source:"drive_motors", target:"main_mcu", type:"data", protocol:"Quadrature", label:"Encoder feedback" },
  { source:"main_mcu", target:"line_sensor", type:"data", protocol:"GPIO", label:"Line array read" },
  { source:"main_mcu", target:"tof_sensor", type:"data", protocol:"I2C", label:"Obstacle range" },
  { source:"main_mcu", target:"imu", type:"data", protocol:"I2C / SPI", label:"Orientation" },
  { source:"main_mcu", target:"env_sensor", type:"data", protocol:"I2C", label:"Environment data" },
  { source:"main_mcu", target:"light_sensor", type:"data", protocol:"I2C", label:"Ambient light" },
  { source:"main_mcu", target:"dust_sensor", type:"data", protocol:"PWM", label:"Particulate level" },
  { source:"main_mcu", target:"oled", type:"data", protocol:"I2C", label:"Status display" },
  { source:"main_mcu", target:"rtc", type:"data", protocol:"I2C", label:"Timestamp clock" },
  { source:"wifi_mcu", target:"sd_module", type:"data", protocol:"SPI", label:"Data logging" },
  { source:"main_mcu", target:"wifi_mcu", type:"data", protocol:"UART", label:"Telemetry link" },
  { source:"wifi_mcu", target:"cam_module", type:"data", protocol:"UART", label:"Vision stream" },
  { source:"main_mcu", target:"io_kit", type:"data", protocol:"GPIO", label:"Buzzer, LEDs & buttons" },
];

export const mobileRobotMechanicalConnections = [
  { source:"drive_motors", target:"chassis", label:"Motor L-brackets" },
  { source:"wheels", target:"drive_motors", label:"Wheel hubs on shafts" },
  { source:"battery", target:"chassis", label:"Battery tray" },
  { source:"main_mcu", target:"mount_set", label:"Controller mount" },
  { source:"wifi_mcu", target:"mount_set", label:"ESP32 bracket" },
  { source:"cam_module", target:"mount_set", label:"Camera mount" },
  { source:"line_sensor", target:"mount_set", label:"Underside line-array bracket" },
  { source:"tof_sensor", target:"mount_set", label:"Front distance mount" },
  { source:"oled", target:"mount_set", label:"Display bezel" },
  { source:"mount_set", target:"chassis", label:"Stack mounting" },
  { source:"io_kit", target:"chassis", label:"Switch and indicator panel" },
  { source:"fastener_kit", target:"chassis", label:"Standoffs and fasteners" },
];

export const mobileRobotInstructionPreamble: InstructionPreamble = {
  tools:["Soldering iron and flux","Wire strippers and heat-shrink","M2/M3 screwdrivers and hex keys","3D printer (PLA and PETG capable)","Multimeter","USB cables (STM32 and ESP32)","Bench power supply","Computer with STM32/ESP32 toolchain"],
  assumptions:["Educational STEM robotics use only","Basic soldering and microcontroller experience","Cameras used only where legally permitted and with consent","LiPo charged and handled with proper safety","Wheels off the ground during first power-on and motor tests"],
};

export const mobileRobotInstructionSteps: InstructionSection[] = [
  { id:"fabricate", title:"Chassis & printed-part preparation", subSteps:[
    { id:"mr_fab_1", title:"Assemble the chassis and mount the two drive motors and wheels", partIds:["chassis","drive_motors","wheels"] },
    { id:"mr_fab_2", title:"3D print the controller, sensor, camera and display mounts", partIds:["mount_set"] },
    { id:"mr_fab_3", title:"Dry-fit the sensor stack, OLED and switch panel", partIds:["mount_set","oled","io_kit"] },
  ] },
  { id:"wire", title:"Power & signal wiring", subSteps:[
    { id:"mr_wire_1", title:"Wire the battery, fused PDB, 5V buck and 3.3V regulator", partIds:["battery","power_distribution","buck_5v","ldo_3v3"] },
    { id:"mr_wire_2", title:"Connect the motor driver, motors and encoders", partIds:["motor_driver","drive_motors","main_mcu"] },
    { id:"mr_wire_3", title:"Wire the I2C/SPI sensor bus to the controller", partIds:["main_mcu","imu","tof_sensor","env_sensor","light_sensor","line_sensor"] },
    { id:"mr_wire_4", title:"Connect the ESP32, camera, SD, RTC and OLED", partIds:["wifi_mcu","cam_module","sd_module","rtc","oled"] },
    { id:"mr_wire_5", title:"Check polarity and continuity before the first power-on", partIds:["power_distribution","fastener_kit"] },
  ] },
  { id:"bringup", title:"Firmware & calibration", subSteps:[
    { id:"mr_test_1", title:"Flash the STM32 firmware and confirm the sensor bus", partIds:["main_mcu","imu"] },
    { id:"mr_test_2", title:"Flash the ESP32 and ESP32-CAM and test connectivity", partIds:["wifi_mcu","cam_module"] },
    { id:"mr_test_3", title:"Calibrate the line array and test motor direction with wheels raised", partIds:["line_sensor","motor_driver","drive_motors"] },
    { id:"mr_test_4", title:"Verify obstacle ranging, IMU and environmental logging", partIds:["tof_sensor","imu","env_sensor","sd_module"] },
  ] },
  { id:"assemble", title:"Final assembly & test run", subSteps:[
    { id:"mr_asm_1", title:"Install the electronics stack and route wiring cleanly", partIds:["mount_set","main_mcu","wifi_mcu"] },
    { id:"mr_asm_2", title:"Mount the camera, OLED and switch panel", partIds:["cam_module","oled","io_kit"] },
    { id:"mr_asm_3", title:"Secure the battery and set the center of gravity", partIds:["battery","chassis"] },
    { id:"mr_asm_4", title:"Run line-following and obstacle-avoidance tests on a safe course", partIds:["line_sensor","tof_sensor","drive_motors"] },
  ] },
];

export const MOBILE_ROBOT = {
  key:"mobilerobot" as const,
  projectId:"smart-mobile-robot-01",
  name:"Smart Mobile Robot",
  eyebrow:"REFERENCE 08 · GROUND ROBOT",
  description:"STEM differential-drive robot with STM32 and ESP32-CAM control for line following, obstacle avoidance and environmental monitoring with on-board logging.",
  briefTitle:"Dò line chính xác.\nTránh vật cản.\nGhi dữ liệu môi trường.",
  tags:["GROUND ROBOT","STM32 + ESP32","STEM"],
  visual:"/smart-mobile-robot-visual.png",
  originalPrompt:"Design a STEM smart mobile robot for line following, obstacle avoidance and environmental monitoring.",
  plan:"Requirements → chassis & drive → sensor suite → dual-MCU control → power system → bench calibration → line and obstacle test runs",
  notes:["educational","differential drive","environmental logging","vision + IMU"],
  componentCount:mobileRobotParts.length,
};

export function buildMobileRobotCadProject(request = MOBILE_ROBOT.originalPrompt, baseVersion = 1): CadProjectResult {
  const scene: CadProjectResult["scene"] = [
    { id:"chassis", label:"Robot chassis base", kind:"plate", size:[180,6,140], position:[0,26,0], color:"#3a3f46", role:"enclosure" },
    { id:"deck", label:"Upper electronics deck", kind:"plate", size:[160,5,120], position:[0,70,0], color:"#2b2f35", role:"enclosure" },
    { id:"motor-left", label:"Left drive motor", kind:"motor", size:[16,18,16], position:[-78,20,-30], rotation:[0,0,1.57], color:"#242831", role:"component" },
    { id:"motor-right", label:"Right drive motor", kind:"motor", size:[16,18,16], position:[78,20,-30], rotation:[0,0,1.57], color:"#242831", role:"component" },
    { id:"wheel-left", label:"Left wheel", kind:"cylinder", size:[32,14,32], position:[-98,20,-30], rotation:[0,0,1.57], color:"#171a20", role:"component" },
    { id:"wheel-right", label:"Right wheel", kind:"cylinder", size:[32,14,32], position:[98,20,-30], rotation:[0,0,1.57], color:"#171a20", role:"component" },
    { id:"caster", label:"Rear caster", kind:"cylinder", size:[12,10,12], position:[0,14,55], color:"#5a5f66", role:"mount" },
    { id:"stm32", label:"STM32 controller", kind:"pcb", size:[70,10,46], position:[-30,34,10], color:"#2f7d3a", role:"component" },
    { id:"esp32", label:"ESP32 board", kind:"pcb", size:[52,10,28], position:[45,34,10], color:"#157d55", role:"component" },
    { id:"battery", label:"3S LiPo battery", kind:"battery", size:[45,25,140], position:[0,20,20], color:"#242831", role:"component" },
    { id:"camera", label:"ESP32-CAM", kind:"box", size:[27,12,20], position:[0,78,-64], color:"#1c1f24", role:"component" },
    { id:"sensor-tower", label:"Sensor mast", kind:"box", size:[40,40,24], position:[0,92,-40], color:"#30363d", role:"component" },
    { id:"oled", label:"OLED display", kind:"pcb", size:[27,6,27], position:[40,74,40], rotation:[1.2,0,0], color:"#38424f", role:"component" },
    { id:"line-array", label:"Line follower array", kind:"plate", size:[75,4,14], position:[0,12,-70], color:"#595f68", role:"component" },
  ];
  return {
    projectId:MOBILE_ROBOT.projectId,
    draftId:`mobile-robot-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[220,220,140], clearanceMm:1, wallThicknessMm:2, printer:"FDM" },
    operations:[
      { id:"op-mr01", type:"create_box", label:"Build the two-deck robot chassis", parameters:{ decks:2 } },
      { id:"op-mr02", type:"place_component", label:"Mount two encoded drive motors and wheels", parameters:{ motors:2 } },
      { id:"op-mr03", type:"place_component", label:"Place STM32 and ESP32 controllers", parameters:{ controllers:2 } },
      { id:"op-mr04", type:"place_component", label:"Install the sensor suite and camera", parameters:{ sensors:7 } },
      { id:"op-mr05", type:"place_component", label:"Place the 3S battery low for stability", parameters:{ component:"battery" } },
      { id:"op-mr06", type:"add_pcb_mount", label:"Mount the OLED, RTC, SD and I2C hub", parameters:{ modules:4 } },
    ],
    validation:{ passed:true, score:96, checksPassed:11, checksTotal:11, issues:[{ severity:"info", code:"ROBOT_BRINGUP_GATE", message:"Test motor direction and line following with the wheels raised before a floor run." }] },
    metrics:{ dimensionsMm:[200,150,130], estimatedPrintMinutes:420, estimatedMaterialGrams:180, primitiveCount:scene.length },
    scene,
  };
}
