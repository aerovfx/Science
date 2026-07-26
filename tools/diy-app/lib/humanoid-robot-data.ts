import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const humanoidParts: ProjectPart[] = [
  p({ id:"HR01", exportId:"ai_controller", name:"Main AI controller", productName:"NVIDIA Jetson Orin Nano Dev Kit", description:"On-board AI computer running perception, motion planning and high-level behavior.", category:"electrical", subtype:"mcu", type:"COMPUTE", qty:1, price:299, color:"orange", pins:"USB · CSI · GPIO · ETH · 5V", dimensions:"100x79x21mm", purchaseUrl:"https://developer.nvidia.com/embedded/jetson-orin-nano-devkit", sourceName:"NVIDIA", sourceStatus:"Official product reference" }),
  p({ id:"HR02", exportId:"depth_cameras", name:"RGB-D cameras ×3", productName:"Intel RealSense D435i", description:"Depth cameras for environmental perception, obstacle awareness and object recognition.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:3, price:170, color:"lime", pins:"USB-C · 5V", dimensions:"90x25x25mm", purchaseUrl:"https://www.intelrealsense.com/depth-camera-d435i/", sourceName:"Intel", sourceStatus:"Official product reference" }),
  p({ id:"HR03", exportId:"body_imus", name:"Body IMUs ×4", productName:"Adafruit BNO055 IMU", description:"Absolute-orientation IMUs on the body, head and limbs for balance and posture.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:4, price:25, color:"lime", pins:"I2C · 3.3V", dimensions:"20x27x3mm", purchaseUrl:"https://www.adafruit.com/product/2472", sourceName:"Adafruit", sourceStatus:"Official product reference" }),
  p({ id:"HR04", exportId:"hand_tactile", name:"Hand tactile arrays ×2", productName:"Interlink FSR 406 Array", description:"Fingertip pressure-sensor arrays giving the hands tactile feedback for grasping.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:2, price:50, color:"lime", pins:"ADC · 3.3V", dimensions:"Per-hand array", purchaseUrl:"", sourceName:"Interlink Electronics", sourceStatus:"Reference class" }),
  p({ id:"HR05", exportId:"foot_pressure", name:"Foot pressure arrays ×2", productName:"Force-Sensitive Resistor Matrix", description:"Sole pressure arrays for balance, weight distribution and gait analysis.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:2, price:75, color:"lime", pins:"ADC · 3.3V", dimensions:"Per-foot array", purchaseUrl:"", sourceName:"Generic FSR matrix", sourceStatus:"Reference class" }),
  p({ id:"HR06", exportId:"audio_module", name:"Audio / mic module", productName:"WM8960 Dual Microphone Module", description:"Dual-microphone I2S audio module with noise cancellation for voice input.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:16, color:"lime", pins:"I2S · I2C · 3.3V", dimensions:"40x30x6mm", purchaseUrl:"", sourceName:"Generic WM8960", sourceStatus:"Reference class" }),
  p({ id:"HR07", exportId:"major_servos", name:"Major joint servos ×17", productName:"Dynamixel XM430-W350-R", description:"High-torque smart servos for neck, shoulders, arms, hips and knees with position feedback.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:17, price:150, color:"blue", pins:"TTL/RS485 · 12V", dimensions:"28.5x46.5x34mm", purchaseUrl:"https://www.robotis.us/dynamixel-xm430-w350-r/", sourceName:"ROBOTIS", sourceStatus:"Official product reference" }),
  p({ id:"HR08", exportId:"ankle_servos", name:"Ankle servos ×4", productName:"Dynamixel XL430-W250-T", description:"Smart servos for ankle roll/pitch, providing lateral stability during standing and walking.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:4, price:45, color:"blue", pins:"TTL · 12V", dimensions:"28.5x46.5x34mm", purchaseUrl:"https://www.robotis.us/dynamixel-xl430-w250-t/", sourceName:"ROBOTIS", sourceStatus:"Official product reference" }),
  p({ id:"HR09", exportId:"finger_servos", name:"Finger servos ×6", productName:"TowerPro SG90 Micro Servo", description:"Micro servos actuating the fingers for basic grasping and gestures.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:6, price:2.5, color:"blue", pins:"SIG · 5V · GND", dimensions:"23x12x29mm", purchaseUrl:"", sourceName:"TowerPro", sourceStatus:"Reference class" }),
  p({ id:"HR10", exportId:"face_servos", name:"Facial servos ×8", productName:"SG90 Micro Servo (eyes/expression)", description:"Micro servos driving eye movement and facial expression via the servo driver.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:8, price:4.5, color:"blue", pins:"SIG · 5V · GND", dimensions:"23x12x29mm", purchaseUrl:"", sourceName:"Generic SG90", sourceStatus:"Reference class" }),
  p({ id:"HR11", exportId:"jaw_servo", name:"Jaw servo", productName:"MG996R Digital High-Torque Servo", description:"High-torque servo articulating the jaw for speech-like motion.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:1, price:13.99, color:"blue", pins:"SIG · 5V · GND", dimensions:"40x19x43mm", purchaseUrl:"", sourceName:"TowerPro", sourceStatus:"Reference class" }),
  p({ id:"HR12", exportId:"servo_driver", name:"Facial servo driver", productName:"Adafruit PCA9685 16-Channel", description:"16-channel PWM driver controlling the facial-expression servos over I2C.", category:"electrical", subtype:"module", type:"MODULE", qty:1, price:9.99, color:"violet", pins:"I2C · PWM ×16 · 5V", dimensions:"62x25x3mm", purchaseUrl:"https://www.adafruit.com/product/815", sourceName:"Adafruit", sourceStatus:"Official product reference" }),
  p({ id:"HR13", exportId:"speaker", name:"Voice speaker", productName:"8Ω 2W Micro Speaker", description:"Small speaker driven by the audio module for voice output.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:1, price:6, color:"blue", pins:"SPK+ · SPK−", dimensions:"Ø28x6mm", purchaseUrl:"", sourceName:"Generic speaker", sourceStatus:"Reference class" }),
  p({ id:"HR14", exportId:"cooling_fan", name:"Compute cooling fan", productName:"Jetson Orin Nano Cooling Fan", description:"Active fan preventing thermal throttling of the AI controller under load.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:1, price:15, color:"blue", pins:"PWM · 5V", dimensions:"40x40x10mm", purchaseUrl:"", sourceName:"NVIDIA / generic", sourceStatus:"Reference class" }),
  p({ id:"HR15", exportId:"battery", name:"Main battery", productName:"Turnigy 10S 4000mAh 12C LiPo", description:"37 V nominal high-capacity pack powering the whole robot.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:90, color:"red", pins:"VBAT+ · VBAT− · BALANCE", dimensions:"160x50x50mm", purchaseUrl:"", sourceName:"Turnigy", sourceStatus:"Handle per LiPo safety" }),
  p({ id:"HR16", exportId:"buck_12v", name:"12V regulator", productName:"Buck Converter 24V-12V 20A", description:"High-current 12 V rail for the Dynamixel servo bus.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:30, color:"red", pins:"IN+ · IN− · 12V · GND", dimensions:"65x55x25mm", purchaseUrl:"", sourceName:"Generic buck", sourceStatus:"Reference class" }),
  p({ id:"HR17", exportId:"buck_5v", name:"5V regulator", productName:"Buck Converter 12V-5V 5A", description:"5 V rail for the compute, sensors and micro servos.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:15, color:"red", pins:"IN+ · IN− · 5V · GND", dimensions:"45x30x15mm", purchaseUrl:"", sourceName:"Generic buck", sourceStatus:"Reference class" }),
  p({ id:"HR18", exportId:"frame", name:"Aluminium frame ×8", productName:"2020 Aluminium Extrusion Segments", description:"2020 T-slot extrusion segments forming the 170 cm skeleton.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:8, price:19, color:"slate", pins:"", dimensions:"Various lengths", purchaseUrl:"", sourceName:"Extrusion supplier", sourceStatus:"Cut to project lengths" }),
  p({ id:"HR19", exportId:"silicone_skin", name:"Full-body skin", productName:"170cm Full-Body Silicone Skin", description:"Custom-molded silicone skin over the frame for a lifelike exterior.", category:"mechanical", subtype:"structural", type:"ENCLOSURE", qty:1, price:360, color:"slate", pins:"", dimensions:"170 cm", purchaseUrl:"", sourceName:"Custom mold", sourceStatus:"Custom fabrication" }),
  p({ id:"HR20", exportId:"head_face", name:"Head & face assembly", productName:"Head Structure + Eyes, Eyelids, Lips & Linkages", description:"Printed head/skull with the acrylic eyes, silicone eyelids/lips, eye mechanism and jaw linkage.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:108, color:"violet", pins:"", dimensions:"1:1 head", purchaseUrl:"", sourceName:"In-house 3D print + parts", sourceStatus:"Print and assemble from project files" }),
  p({ id:"HR21", exportId:"joint_bearings", name:"Joint bearings ×36", productName:"608ZZ Ball Bearings", description:"Deep-groove bearings for smooth articulation in the major joints.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:36, price:3.2, color:"cyan", pins:"", dimensions:"Ø22x7mm", purchaseUrl:"", sourceName:"Bearing supplier", sourceStatus:"Reference class" }),
  p({ id:"HR22", exportId:"servo_mounts", name:"Servo & limb bracket set", productName:"3D Printed Servo Mounts & Extension Brackets", description:"Dynamixel mounts, limb-extension brackets, neck adapter, camera and sensor housings.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:215, color:"violet", pins:"", dimensions:"PETG / ASA / TPU", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"HR23", exportId:"fastener_kit", name:"Fastener & power hardware", productName:"M3 Hardware, T-Slot Nuts, Switch, Fuse & Cable Clips", description:"Frame fasteners, T-slot nuts, main power switch, fuse holder and cable management.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:70, color:"slate", pins:"", dimensions:"Assorted", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Finalize after CAD freeze" }),
];

export const humanoidElectricalConnections = [
  { source:"battery", target:"buck_12v", type:"power", voltage:"37V", current:"20A", label:"Servo-bus regulator feed" },
  { source:"battery", target:"buck_5v", type:"power", voltage:"37V", current:"5A", label:"Logic regulator feed" },
  { source:"buck_12v", target:"major_servos", type:"power", voltage:"12V", current:"High", label:"Major servo power" },
  { source:"buck_12v", target:"ankle_servos", type:"power", voltage:"12V", current:"Moderate", label:"Ankle servo power" },
  { source:"buck_5v", target:"ai_controller", type:"power", voltage:"5V", current:"4A", label:"Compute power" },
  { source:"ai_controller", target:"major_servos", type:"data", protocol:"TTL / RS485", label:"Joint servo bus" },
  { source:"ai_controller", target:"ankle_servos", type:"data", protocol:"TTL", label:"Ankle servo bus" },
  { source:"ai_controller", target:"servo_driver", type:"data", protocol:"I2C", label:"Facial servo commands" },
  { source:"servo_driver", target:"face_servos", type:"data", protocol:"PWM", label:"Expression control" },
  { source:"servo_driver", target:"finger_servos", type:"data", protocol:"PWM", label:"Finger control" },
  { source:"servo_driver", target:"jaw_servo", type:"data", protocol:"PWM", label:"Jaw control" },
  { source:"ai_controller", target:"depth_cameras", type:"data", protocol:"USB", label:"Depth perception" },
  { source:"ai_controller", target:"body_imus", type:"data", protocol:"I2C", label:"Balance & posture" },
  { source:"ai_controller", target:"hand_tactile", type:"data", protocol:"ADC", label:"Tactile feedback" },
  { source:"ai_controller", target:"foot_pressure", type:"data", protocol:"ADC", label:"Gait sensing" },
  { source:"ai_controller", target:"audio_module", type:"data", protocol:"I2S", label:"Voice input" },
  { source:"audio_module", target:"speaker", type:"data", protocol:"Analog audio", label:"Voice output" },
  { source:"buck_5v", target:"cooling_fan", type:"power", voltage:"5V", current:"0.3A", label:"Compute cooling" },
];

export const humanoidMechanicalConnections = [
  { source:"frame", target:"silicone_skin", label:"Skin over skeleton" },
  { source:"major_servos", target:"servo_mounts", label:"Servo brackets" },
  { source:"ankle_servos", target:"servo_mounts", label:"Ankle brackets" },
  { source:"servo_mounts", target:"frame", label:"Brackets to extrusion" },
  { source:"joint_bearings", target:"frame", label:"Joint pivots" },
  { source:"head_face", target:"frame", label:"Neck to head" },
  { source:"face_servos", target:"head_face", label:"Eye/expression mechanism" },
  { source:"jaw_servo", target:"head_face", label:"Jaw linkage" },
  { source:"depth_cameras", target:"servo_mounts", label:"Camera housings" },
  { source:"body_imus", target:"servo_mounts", label:"IMU mounts" },
  { source:"finger_servos", target:"servo_mounts", label:"Hand servo mounts" },
  { source:"ai_controller", target:"frame", label:"Torso compute bay" },
  { source:"battery", target:"frame", label:"Battery compartment" },
  { source:"fastener_kit", target:"frame", label:"Frame fasteners" },
];

export const humanoidInstructionPreamble: InstructionPreamble = {
  tools:["Hex driver set for 2020 extrusion","M3 hardware tools and thread-locker","3D printer (PETG, ASA, TPU capable)","Dynamixel U2D2 interface","Bench power supply and multimeter","Silicone mold and casting tools","Torque wrench","Workstation with the robot's software stack"],
  assumptions:["Educational and research humanoid robotics use only","No weapons or hazardous payloads","Cameras and microphones used only where legally permitted and with consent","High-current LiPo handled with proper safety and fusing","Robot supported in a rig during all first joint and balance tests"],
};

export const humanoidInstructionSteps: InstructionSection[] = [
  { id:"fabricate", title:"Skeleton & printed-part fabrication", subSteps:[
    { id:"hr_fab_1", title:"Cut and square the 2020 aluminium skeleton segments", partIds:["frame","fastener_kit"] },
    { id:"hr_fab_2", title:"Print the servo mounts, limb brackets and head structure", partIds:["servo_mounts","head_face"] },
    { id:"hr_fab_3", title:"Fit the joint bearings and dry-assemble the limbs", partIds:["joint_bearings","frame"] },
  ] },
  { id:"wire", title:"Power & actuation wiring", subSteps:[
    { id:"hr_wire_1", title:"Install the fused battery, 12V and 5V regulators", partIds:["battery","buck_12v","buck_5v"] },
    { id:"hr_wire_2", title:"Chain the Dynamixel servo bus for body and ankles", partIds:["major_servos","ankle_servos","ai_controller"] },
    { id:"hr_wire_3", title:"Wire the facial servo driver, eye, finger and jaw servos", partIds:["servo_driver","face_servos","finger_servos","jaw_servo"] },
    { id:"hr_wire_4", title:"Connect the AI controller, cameras, IMUs, tactile and audio", partIds:["ai_controller","depth_cameras","body_imus","hand_tactile","audio_module"] },
    { id:"hr_wire_5", title:"Verify bus voltages, IDs and fusing before enabling torque", partIds:["buck_12v","fastener_kit"] },
  ] },
  { id:"bringup", title:"Software & calibration", subSteps:[
    { id:"hr_test_1", title:"Boot the AI controller and scan the servo bus for all IDs", partIds:["ai_controller","major_servos"] },
    { id:"hr_test_2", title:"Calibrate joint zeros and limits with the robot supported", partIds:["major_servos","ankle_servos"] },
    { id:"hr_test_3", title:"Calibrate cameras, IMUs and foot pressure for balance", partIds:["depth_cameras","body_imus","foot_pressure"] },
    { id:"hr_test_4", title:"Tune facial expression, eye tracking and speech output", partIds:["servo_driver","face_servos","audio_module","speaker"] },
  ] },
  { id:"assemble", title:"Final assembly & supported trials", subSteps:[
    { id:"hr_asm_1", title:"Assemble limbs, torso and head onto the skeleton", partIds:["frame","head_face","servo_mounts"] },
    { id:"hr_asm_2", title:"Install the compute, battery and cooling in the torso", partIds:["ai_controller","battery","cooling_fan"] },
    { id:"hr_asm_3", title:"Fit the silicone skin and route cabling cleanly", partIds:["silicone_skin","fastener_kit"] },
    { id:"hr_asm_4", title:"Run supported balance and gait trials in a safety rig", partIds:["ankle_servos","foot_pressure","major_servos"] },
  ] },
];

export const HUMANOID_ROBOT = {
  key:"humanoid" as const,
  projectId:"humanoid-robot-01",
  name:"Humanoid Robot",
  eyebrow:"REFERENCE 09 · HUMANOID ROBOT",
  description:"Research humanoid on a 2020 aluminium skeleton with Jetson Orin Nano, Dynamixel joints, RGB-D perception, tactile and balance sensing and an expressive head.",
  briefTitle:"Khung nhôm 170cm.\nKhớp Dynamixel.\nTri giác và cân bằng.",
  tags:["HUMANOID","JETSON ORIN","RESEARCH"],
  visual:"/humanoid-robot-visual.png",
  originalPrompt:"Design a research humanoid robot with AI compute, Dynamixel joints, RGB-D perception and balance sensing.",
  plan:"Requirements → skeleton sizing → joint actuation → perception & balance sensing → compute & power → supported calibration → rigged balance and gait trials",
  notes:["research humanoid","Dynamixel joints","RGB-D + IMU + tactile","supported testing"],
  componentCount:humanoidParts.length,
};

export function buildHumanoidCadProject(request = HUMANOID_ROBOT.originalPrompt, baseVersion = 1): CadProjectResult {
  const scene: CadProjectResult["scene"] = [
    { id:"pelvis", label:"Pelvis", kind:"box", size:[64,34,40], position:[0,86,0], color:"#3a3f46", role:"enclosure" },
    { id:"torso", label:"Torso frame", kind:"box", size:[70,90,44], position:[0,150,0], color:"#2b2f35", role:"enclosure" },
    { id:"neck", label:"Neck", kind:"cylinder", size:[10,18,10], position:[0,204,0], color:"#4a4f56", role:"component" },
    { id:"head", label:"Head & face assembly", kind:"box", size:[38,44,40], position:[0,228,2], color:"#c9b8a8", role:"component" },
    { id:"shoulder-l", label:"Left shoulder servo", kind:"motor", size:[16,20,16], position:[-46,188,0], rotation:[0,0,1.57], color:"#242831", role:"component" },
    { id:"shoulder-r", label:"Right shoulder servo", kind:"motor", size:[16,20,16], position:[46,188,0], rotation:[0,0,1.57], color:"#242831", role:"component" },
    { id:"arm-l", label:"Left arm", kind:"box", size:[16,110,16], position:[-58,150,0], color:"#3a3f46", role:"component" },
    { id:"arm-r", label:"Right arm", kind:"box", size:[16,110,16], position:[58,150,0], color:"#3a3f46", role:"component" },
    { id:"hand-l", label:"Left hand", kind:"box", size:[16,26,12], position:[-58,86,0], color:"#c9b8a8", role:"component" },
    { id:"hand-r", label:"Right hand", kind:"box", size:[16,26,12], position:[58,86,0], color:"#c9b8a8", role:"component" },
    { id:"thigh-l", label:"Left thigh", kind:"box", size:[22,82,24], position:[-18,44,0], color:"#3a3f46", role:"component" },
    { id:"thigh-r", label:"Right thigh", kind:"box", size:[22,82,24], position:[18,44,0], color:"#3a3f46", role:"component" },
    { id:"shin-l", label:"Left shin", kind:"box", size:[20,70,22], position:[-18,-30,0], color:"#2b2f35", role:"component" },
    { id:"shin-r", label:"Right shin", kind:"box", size:[20,70,22], position:[18,-30,0], color:"#2b2f35", role:"component" },
    { id:"foot-l", label:"Left foot", kind:"box", size:[26,10,50], position:[-18,-68,10], color:"#30363d", role:"component" },
    { id:"foot-r", label:"Right foot", kind:"box", size:[26,10,50], position:[18,-68,10], color:"#30363d", role:"component" },
    { id:"jetson", label:"Jetson Orin Nano", kind:"pcb", size:[46,12,40], position:[0,150,20], color:"#2f7d3a", role:"component" },
    { id:"cam", label:"RGB-D camera", kind:"box", size:[36,12,12], position:[0,214,22], color:"#1c1f24", role:"component" },
  ];
  return {
    projectId:HUMANOID_ROBOT.projectId,
    draftId:`humanoid-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[700,1750,400], clearanceMm:2, wallThicknessMm:3, printer:"FDM" },
    operations:[
      { id:"op-hr01", type:"create_box", label:"Build the 170 cm 2020 aluminium skeleton", parameters:{ heightCm:170 } },
      { id:"op-hr02", type:"place_component", label:"Install 21 Dynamixel joint servos", parameters:{ servos:21 } },
      { id:"op-hr03", type:"place_component", label:"Place the Jetson Orin Nano and power stack", parameters:{ compute:1 } },
      { id:"op-hr04", type:"place_component", label:"Mount RGB-D cameras, IMUs and tactile sensors", parameters:{ sensors:11 } },
      { id:"op-hr05", type:"add_pcb_mount", label:"Assemble the expressive head and eye mechanism", parameters:{ faceServos:9 } },
      { id:"op-hr06", type:"place_component", label:"Fit the 10S battery in the torso compartment", parameters:{ component:"battery" } },
    ],
    validation:{ passed:true, score:88, checksPassed:14, checksTotal:16, issues:[{ severity:"info", code:"HUMANOID_SAFETY_GATE", message:"Perform first joint, balance and gait tests with the robot supported in a safety rig." }] },
    metrics:{ dimensionsMm:[560,1700,320], estimatedPrintMinutes:5200, estimatedMaterialGrams:2600, primitiveCount:scene.length },
    scene,
  };
}
