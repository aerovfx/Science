import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const walleParts: ProjectPart[] = [
  p({ id:"WE01", exportId:"main_controller", name:"Main controller", productName:"Raspberry Pi 5", description:"High-level compute for AI vision, face/object tracking and voice processing.", category:"electrical", subtype:"mcu", type:"COMPUTE", qty:1, price:60, color:"orange", pins:"USB · CSI · GPIO · I2C · 5V", dimensions:"85x56x17mm", purchaseUrl:"https://www.raspberrypi.com/products/raspberry-pi-5/", sourceName:"Raspberry Pi", sourceStatus:"Official product reference" }),
  p({ id:"WE02", exportId:"motor_mcu", name:"Motor/sensor MCU", productName:"ESP32-WROOM-32D Dev Board", description:"Real-time controller for track motors, servos and sensor acquisition.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:8, color:"orange", pins:"I2C · PWM · GPIO · 3.3V", dimensions:"54x28x13mm", purchaseUrl:"", sourceName:"Espressif", sourceStatus:"Reference class" }),
  p({ id:"WE03", exportId:"ultrasonic", name:"Ultrasonic sensors ×3", productName:"HC-SR04 Ultrasonic Sensor", description:"Front and side obstacle detection.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:3, price:3, color:"lime", pins:"TRIG · ECHO · 5V", dimensions:"45x20x15mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"WE04", exportId:"ir_sensors", name:"IR distance sensors ×2", productName:"Sharp GP2Y0A21YK0F", description:"Short-range obstacle and cliff detection.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:2, price:7, color:"lime", pins:"VO · 5V · GND", dimensions:"29x13x14mm", purchaseUrl:"", sourceName:"Sharp", sourceStatus:"Reference class" }),
  p({ id:"WE05", exportId:"camera", name:"Main camera", productName:"Raspberry Pi Camera Module 3 Wide", description:"Wide-angle camera for face and object tracking behind the eyes.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:35, color:"lime", pins:"CSI · 3.3V", dimensions:"25x24x12mm", purchaseUrl:"https://www.raspberrypi.com/products/camera-module-3/", sourceName:"Raspberry Pi", sourceStatus:"Official product reference" }),
  p({ id:"WE06", exportId:"mic_array", name:"Microphone array", productName:"ReSpeaker 2-Mic Pi HAT", description:"Dual-mic array for voice recognition and localization.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:25, color:"lime", pins:"I2S · I2C · 3.3V", dimensions:"65x30x10mm", purchaseUrl:"", sourceName:"Seeed", sourceStatus:"Reference class" }),
  p({ id:"WE07", exportId:"servos", name:"Servos ×6", productName:"SG90 Micro Servo", description:"Head pan/tilt and left/right arm articulation servos.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:6, price:2, color:"blue", pins:"SIG · 5V · GND", dimensions:"23x12x29mm", purchaseUrl:"", sourceName:"TowerPro", sourceStatus:"Reference class" }),
  p({ id:"WE08", exportId:"track_motors", name:"Track motors ×2", productName:"JGA25-370 DC Gear Motor w/ Encoder", description:"Encoded drive motors for the left and right tracks.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:2, price:15, color:"blue", pins:"M+ · M− · ENC · 5V", dimensions:"Ø25x70mm", purchaseUrl:"", sourceName:"Generic gearmotor", sourceStatus:"Reference class" }),
  p({ id:"WE09", exportId:"speaker", name:"Speaker & amp", productName:"PAM8403 Amplifier + Speaker", description:"Audio feedback and voice responses.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:1, price:10, color:"blue", pins:"IN · SPK · 5V", dimensions:"Ø40mm speaker", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"WE10", exportId:"battery", name:"Main battery pack", productName:"3S 18650 Li-ion Pack (11.1V)", description:"Powers the whole robot.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:30, color:"red", pins:"VBAT+ · VBAT− · BALANCE", dimensions:"3S pack", purchaseUrl:"", sourceName:"Generic 3S", sourceStatus:"Handle per Li-ion safety" }),
  p({ id:"WE11", exportId:"bms", name:"Battery management", productName:"3S LiPo BMS Module", description:"Overcharge/discharge/current protection and balancing.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:10, color:"red", pins:"B+ · B− · P+ · P− · BALANCE", dimensions:"50x40x6mm", purchaseUrl:"", sourceName:"Generic BMS", sourceStatus:"Reference class" }),
  p({ id:"WE12", exportId:"buck_5v", name:"5V converter", productName:"LM2596 DC-DC Buck", description:"5 V rail for the Pi, servos and 5 V modules.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:5, color:"red", pins:"IN± · 5V · GND", dimensions:"43x21x14mm", purchaseUrl:"", sourceName:"Generic buck", sourceStatus:"Reference class" }),
  p({ id:"WE13", exportId:"buck_3v3", name:"3.3V converter", productName:"AMS1117-3.3 Module", description:"3.3 V rail for the ESP32 and logic sensors.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:5, color:"red", pins:"IN · 3.3V · GND", dimensions:"18x11x3mm", purchaseUrl:"", sourceName:"Generic LDO", sourceStatus:"Reference class" }),
  p({ id:"WE14", exportId:"motor_driver", name:"Track motor driver", productName:"L298N Dual H-Bridge", description:"Controls direction and speed of the two track motors.", category:"electrical", subtype:"module", type:"MODULE", qty:1, price:5, color:"violet", pins:"IN1-4 · ENA/B · OUT", dimensions:"43x43x27mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"WE15", exportId:"servo_driver", name:"Servo driver", productName:"PCA9685 16-Channel PWM", description:"Offloads the six servos from the MCU over I2C.", category:"electrical", subtype:"module", type:"MODULE", qty:1, price:8, color:"violet", pins:"I2C · PWM ×16 · 5V", dimensions:"62x25x3mm", purchaseUrl:"", sourceName:"Generic", sourceStatus:"Reference class" }),
  p({ id:"WE16", exportId:"chassis", name:"Chassis base plate", productName:"Custom Chassis Base Plate", description:"Base for mounting the track drive and forming the core structure.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:8.5, color:"slate", pins:"", dimensions:"Custom plate", purchaseUrl:"", sourceName:"Fabrication", sourceStatus:"Cut or print from files" }),
  p({ id:"WE17", exportId:"shell", name:"Wall-E body shell", productName:"Wall-E Toy Shell", description:"Retail toy shell reused as the robot body; internal space houses the electronics.", category:"mechanical", subtype:"structural", type:"ENCLOSURE", qty:1, price:0, color:"slate", pins:"", dimensions:"Toy shell", purchaseUrl:"", sourceName:"Retail toy", sourceStatus:"Reuse existing shell" }),
  p({ id:"WE18", exportId:"tracks", name:"Track drivetrain", productName:"Rubber Tracks, Sprockets & Idlers", description:"Left/right rubber tracks with printed drive sprockets and idler wheels.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:1, price:27, color:"cyan", pins:"", dimensions:"Twin track set", purchaseUrl:"", sourceName:"Retail + 3D print", sourceStatus:"Reference class" }),
  p({ id:"WE19", exportId:"mount_set", name:"Internal mounts & linkages", productName:"3D Printed Trays, Mounts & Arm Linkages", description:"Component tray, board/sensor/servo mounts and the arm linkages inside the shell.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:15, color:"violet", pins:"", dimensions:"PLA / PETG", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"WE20", exportId:"fastener_kit", name:"Fastener kit", productName:"M2/M3 Bolts, Nuts & Standoffs", description:"General assembly hardware and PCB standoffs.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:7.2, color:"slate", pins:"", dimensions:"Assorted", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Finalize after CAD freeze" }),
];

export const walleElectricalConnections = [
  { source:"battery", target:"bms", type:"power", voltage:"11.1V", current:"5A", label:"Protected battery bus" },
  { source:"bms", target:"buck_5v", type:"power", voltage:"11.1V", current:"3A", label:"5V rail feed" },
  { source:"buck_5v", target:"buck_3v3", type:"power", voltage:"5V", current:"1A", label:"3.3V rail feed" },
  { source:"bms", target:"motor_driver", type:"power", voltage:"11.1V", current:"3A", label:"Track motor power" },
  { source:"motor_driver", target:"track_motors", type:"power", voltage:"PWM", current:"Per-track", label:"Track drive" },
  { source:"motor_mcu", target:"motor_driver", type:"data", protocol:"GPIO + PWM", label:"Drive commands" },
  { source:"motor_mcu", target:"servo_driver", type:"data", protocol:"I2C", label:"Servo commands" },
  { source:"servo_driver", target:"servos", type:"data", protocol:"PWM", label:"Head & arm motion" },
  { source:"motor_mcu", target:"ultrasonic", type:"data", protocol:"GPIO", label:"Obstacle ranging" },
  { source:"motor_mcu", target:"ir_sensors", type:"data", protocol:"ADC", label:"Cliff / near range" },
  { source:"main_controller", target:"camera", type:"data", protocol:"CSI", label:"Vision & tracking" },
  { source:"main_controller", target:"mic_array", type:"data", protocol:"I2S", label:"Voice input" },
  { source:"main_controller", target:"speaker", type:"data", protocol:"Audio", label:"Voice output" },
  { source:"main_controller", target:"motor_mcu", type:"data", protocol:"UART", label:"High-level to real-time" },
];

export const walleMechanicalConnections = [
  { source:"track_motors", target:"chassis", label:"Motor mounts" },
  { source:"tracks", target:"chassis", label:"Tracks, sprockets and idlers" },
  { source:"track_motors", target:"tracks", label:"Sprocket drive" },
  { source:"chassis", target:"shell", label:"Chassis inside shell" },
  { source:"mount_set", target:"shell", label:"Internal component tray" },
  { source:"main_controller", target:"mount_set", label:"Pi mount" },
  { source:"servos", target:"mount_set", label:"Head and arm servo mounts" },
  { source:"camera", target:"shell", label:"Camera in the eyes" },
  { source:"battery", target:"mount_set", label:"Battery holder" },
  { source:"fastener_kit", target:"chassis", label:"Assembly fasteners" },
];

export const walleInstructionPreamble: InstructionPreamble = {
  tools:["Soldering iron and heat-shrink","M2/M3 drivers","3D printer (PLA and PETG capable)","Multimeter","microSD card and Pi imager","Servo tester","Hot glue / adhesive","Computer with the robot software stack"],
  assumptions:["Educational and hobby companion-robot use only","Cameras and microphones used only where legally permitted and with consent","Li-ion pack charged and handled with proper safety and BMS","Tracks raised during first drive and servo tests","Keep fingers clear of the track drivetrain while powered"],
};

export const walleInstructionSteps: InstructionSection[] = [
  { id:"fabricate", title:"Chassis & printed-part fabrication", subSteps:[
    { id:"we_fab_1", title:"Assemble the chassis, track motors, sprockets and tracks", partIds:["chassis","track_motors","tracks"] },
    { id:"we_fab_2", title:"Print the component tray, mounts and arm linkages", partIds:["mount_set"] },
    { id:"we_fab_3", title:"Prepare the shell and dry-fit the internal tray", partIds:["shell","mount_set"] },
  ] },
  { id:"wire", title:"Power & control wiring", subSteps:[
    { id:"we_wire_1", title:"Wire the battery, BMS and the 5V/3.3V converters", partIds:["battery","bms","buck_5v","buck_3v3"] },
    { id:"we_wire_2", title:"Connect the track driver, motors and servo driver", partIds:["motor_driver","track_motors","servo_driver","servos"] },
    { id:"we_wire_3", title:"Wire the sensors, camera, mic array and speaker", partIds:["ultrasonic","ir_sensors","camera","mic_array","speaker"] },
    { id:"we_wire_4", title:"Link the Raspberry Pi and ESP32 and verify power", partIds:["main_controller","motor_mcu"] },
  ] },
  { id:"bringup", title:"Software & behavior test", subSteps:[
    { id:"we_test_1", title:"Image the Pi, bring up the ESP32 and confirm the bus", partIds:["main_controller","motor_mcu"] },
    { id:"we_test_2", title:"Test track direction and servos with the robot raised", partIds:["motor_driver","track_motors","servos"] },
    { id:"we_test_3", title:"Calibrate obstacle sensors and cliff detection", partIds:["ultrasonic","ir_sensors"] },
    { id:"we_test_4", title:"Test vision tracking, voice recognition and speech", partIds:["camera","mic_array","speaker"] },
  ] },
  { id:"assemble", title:"Final assembly & test run", subSteps:[
    { id:"we_asm_1", title:"Install the electronics tray and battery in the shell", partIds:["mount_set","main_controller","battery"] },
    { id:"we_asm_2", title:"Fit the head servos, camera and arm linkages", partIds:["servos","camera"] },
    { id:"we_asm_3", title:"Close the shell and route wiring cleanly", partIds:["shell","fastener_kit"] },
    { id:"we_asm_4", title:"Run obstacle-avoidance and expressive-behavior tests", partIds:["ultrasonic","track_motors","servos"] },
  ] },
];

export const WALLE_ROBOT = {
  key:"walle" as const,
  projectId:"autonomous-walle-robot-01",
  name:"Autonomous Wall-E Robot",
  eyebrow:"REFERENCE 17 · COMPANION ROBOT",
  description:"Tracked companion robot with Raspberry Pi 5 + ESP32, vision and voice, obstacle avoidance and an expressive servo-actuated head and arms in a Wall-E shell.",
  briefTitle:"Bò trên xích.\nNhận diện và nói.\nBiểu cảm sinh động.",
  tags:["COMPANION ROBOT","RPi 5 + ESP32","VISION + VOICE"],
  visual:"",
  originalPrompt:"Design an autonomous Wall-E companion robot with vision, voice, obstacle avoidance and expressive head and arms.",
  plan:"Requirements → tracked chassis → dual-MCU control → vision/voice → power → behavior tuning → obstacle and expression tests",
  notes:["companion robot","tracked drive","vision + voice","expressive servos"],
  componentCount:walleParts.length,
};

export function buildWalleCadProject(request = WALLE_ROBOT.originalPrompt, baseVersion = 1): CadProjectResult {
  const scene: CadProjectResult["scene"] = [
    { id:"body", label:"Body", kind:"box", size:[120,110,90], position:[0,60,0], color:"#c9a12b", role:"enclosure" },
    { id:"chassis", label:"Chassis base", kind:"plate", size:[130,8,110], position:[0,10,0], color:"#3a3f46", role:"enclosure" },
    { id:"track-left", label:"Left track", kind:"box", size:[26,60,130], position:[-78,30,0], color:"#2b2f35", role:"component" },
    { id:"track-right", label:"Right track", kind:"box", size:[26,60,130], position:[78,30,0], color:"#2b2f35", role:"component" },
    { id:"motor-left", label:"Left track motor", kind:"motor", size:[16,18,16], position:[-52,30,-40], rotation:[0,0,1.57], color:"#242831", role:"component" },
    { id:"motor-right", label:"Right track motor", kind:"motor", size:[16,18,16], position:[52,30,-40], rotation:[0,0,1.57], color:"#242831", role:"component" },
    { id:"neck", label:"Neck", kind:"cylinder", size:[10,40,10], position:[0,130,-10], color:"#4a4f56", role:"component" },
    { id:"head", label:"Head", kind:"box", size:[70,40,50], position:[0,158,-6], color:"#b8941f", role:"component" },
    { id:"eye-left", label:"Left eye / camera", kind:"cylinder", size:[16,20,16], position:[-16,164,-30], rotation:[1.57,0,0], color:"#1c1f24", role:"component" },
    { id:"eye-right", label:"Right eye", kind:"cylinder", size:[16,20,16], position:[16,164,-30], rotation:[1.57,0,0], color:"#1c1f24", role:"component" },
    { id:"arm-left", label:"Left arm", kind:"box", size:[14,70,14], position:[-70,70,10], color:"#a8861c", role:"component" },
    { id:"arm-right", label:"Right arm", kind:"box", size:[14,70,14], position:[70,70,10], color:"#a8861c", role:"component" },
    { id:"pi", label:"Raspberry Pi 5", kind:"pcb", size:[80,12,52], position:[0,50,10], color:"#2f7d3a", role:"component" },
    { id:"battery", label:"3S battery pack", kind:"battery", size:[70,30,40], position:[0,26,20], color:"#242831", role:"component" },
  ];
  return {
    projectId:WALLE_ROBOT.projectId,
    draftId:`walle-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[240,300,220], clearanceMm:1, wallThicknessMm:2, printer:"FDM" },
    operations:[
      { id:"op-we01", type:"create_box", label:"Build the tracked chassis", parameters:{ tracks:2 } },
      { id:"op-we02", type:"place_component", label:"Install track motors and the driver", parameters:{ motors:2 } },
      { id:"op-we03", type:"place_component", label:"Place the Raspberry Pi 5 and ESP32", parameters:{ controllers:2 } },
      { id:"op-we04", type:"place_component", label:"Fit the head servos, camera and mic array", parameters:{ headServos:2 } },
      { id:"op-we05", type:"add_pcb_mount", label:"Add arm servos and linkages", parameters:{ armServos:2 } },
      { id:"op-we06", type:"place_component", label:"Install the 3S battery and BMS low in the body", parameters:{ component:"battery" } },
    ],
    validation:{ passed:true, score:93, checksPassed:12, checksTotal:13, issues:[{ severity:"info", code:"ROBOT_BRINGUP_GATE", message:"Test tracks and servos with the robot raised before a floor run." }] },
    metrics:{ dimensionsMm:[200,300,200], estimatedPrintMinutes:900, estimatedMaterialGrams:420, primitiveCount:scene.length },
    scene,
  };
}
