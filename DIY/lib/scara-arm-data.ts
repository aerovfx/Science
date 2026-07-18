import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

export const scaraParts: ProjectPart[] = [
  p({ id:"SC01", exportId:"controller", name:"Main controller", productName:"ESP32-WROOM-32D Dev Board", description:"Controller running inverse kinematics, servo control and job sequencing.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:8, color:"orange", pins:"PWM · UART · GPIO · 3.3V", dimensions:"54x28x13mm", purchaseUrl:"", sourceName:"Espressif", sourceStatus:"Reference class" }),
  p({ id:"SC02", exportId:"joint_servos", name:"Joint servos ×3", productName:"TowerPro MG996R Digital Servo", description:"High-torque servos driving the base, shoulder and elbow joints.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:3, price:12, color:"blue", pins:"SIG · 5V · GND", dimensions:"40x19x43mm", purchaseUrl:"", sourceName:"TowerPro", sourceStatus:"Reference class" }),
  p({ id:"SC03", exportId:"gripper_servo", name:"Gripper servo", productName:"SG90 Micro Servo", description:"Micro servo actuating the two-finger gripper.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:1, price:3, color:"blue", pins:"SIG · 5V · GND", dimensions:"23x12x29mm", purchaseUrl:"", sourceName:"TowerPro", sourceStatus:"Reference class" }),
  p({ id:"SC04", exportId:"psu", name:"Main power supply", productName:"5V 10A DC Power Supply", description:"Provides stable 5 V for the controller and the servo bus.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:20, color:"red", pins:"5V · GND · AC IN", dimensions:"110x78x36mm", purchaseUrl:"", sourceName:"Generic PSU", sourceStatus:"Reference class" }),
  p({ id:"SC05", exportId:"pdb", name:"Power distribution", productName:"Terminal Block Distribution Board", description:"Distributes regulated power to the servos and electronics.", category:"electrical", subtype:"module", type:"MODULE", qty:1, price:5, color:"violet", pins:"IN · RAILS", dimensions:"60x40x15mm", purchaseUrl:"", sourceName:"Generic PDB", sourceStatus:"Reference class" }),
  p({ id:"SC06", exportId:"base_plate", name:"Base plate", productName:"Aluminium Base Plate", description:"Sturdy base providing stability and mounting for the first joint and electronics.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:15, color:"slate", pins:"", dimensions:"150x150x6mm", purchaseUrl:"", sourceName:"Metal stock", sourceStatus:"Reference class" }),
  p({ id:"SC07", exportId:"bearings", name:"Joint bearings ×2", productName:"608ZZ Ball Bearings", description:"Bearings for smooth rotation at the high-load base and shoulder pivots.", category:"mechanical", subtype:"mechanism", type:"MECHANISM", qty:2, price:1.5, color:"cyan", pins:"", dimensions:"Ø22x7mm", purchaseUrl:"", sourceName:"Bearing supplier", sourceStatus:"Reference class" }),
  p({ id:"SC08", exportId:"arm_links", name:"Arm links & wrist", productName:"3D Printed Shoulder/Elbow Links + Wrist", description:"Printed arm segment 1, segment 2 and the wrist plate forming the SCARA links.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:5, color:"violet", pins:"", dimensions:"PETG · 30% infill", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"SC09", exportId:"gripper", name:"Two-finger gripper", productName:"3D Printed Gripper Body & Fingers", description:"Printed gripper body and two fingers for light payload manipulation.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:1.8, color:"violet", pins:"", dimensions:"PETG · 20-25% infill", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"SC10", exportId:"mount_set", name:"Servo & board mounts", productName:"3D Printed Servo/Controller/PSU Mounts", description:"Base, shoulder, elbow and gripper servo mounts plus controller and PSU brackets.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:7, color:"violet", pins:"", dimensions:"PLA / PETG · 20-25% infill", purchaseUrl:"", sourceName:"In-house 3D print", sourceStatus:"Print from project files" }),
  p({ id:"SC11", exportId:"fastener_kit", name:"Fastener kit", productName:"M3 Screws & Nuts", description:"General assembly hardware for the printed parts and servos.", category:"mechanical", subtype:"misc", type:"HARDWARE", qty:1, price:1.4, color:"slate", pins:"", dimensions:"M3 assorted", purchaseUrl:"", sourceName:"Workshop stock", sourceStatus:"Finalize after CAD freeze" }),
];

export const scaraElectricalConnections = [
  { source:"psu", target:"pdb", type:"power", voltage:"5V", current:"10A", label:"Main power" },
  { source:"pdb", target:"joint_servos", type:"power", voltage:"5V", current:"High", label:"Joint servo power" },
  { source:"pdb", target:"gripper_servo", type:"power", voltage:"5V", current:"1A", label:"Gripper power" },
  { source:"pdb", target:"controller", type:"power", voltage:"5V", current:"1A", label:"Logic power" },
  { source:"controller", target:"joint_servos", type:"data", protocol:"PWM", label:"Joint commands" },
  { source:"controller", target:"gripper_servo", type:"data", protocol:"PWM", label:"Gripper command" },
];

export const scaraMechanicalConnections = [
  { source:"joint_servos", target:"mount_set", label:"Servo mounts" },
  { source:"mount_set", target:"base_plate", label:"Base servo mount" },
  { source:"bearings", target:"arm_links", label:"Joint pivots" },
  { source:"arm_links", target:"joint_servos", label:"Links on servo horns" },
  { source:"gripper", target:"arm_links", label:"Gripper on wrist plate" },
  { source:"gripper_servo", target:"gripper", label:"Gripper actuation" },
  { source:"controller", target:"base_plate", label:"Controller bracket" },
  { source:"psu", target:"base_plate", label:"PSU bracket" },
  { source:"fastener_kit", target:"base_plate", label:"Assembly fasteners" },
];

export const scaraInstructionPreamble: InstructionPreamble = {
  tools:["M3 hex drivers","Soldering iron and heat-shrink","3D printer (PETG and PLA capable)","Multimeter","Servo tester","Bench with the ESP32 toolchain","Calipers","Thread-locker"],
  assumptions:["Educational robotics use only","Keep hands clear of the arm's swept volume while powered","Servo power supply correctly rated and fused","Home the joints before running any automated sequence","Light payloads only within the gripper's rating"],
};

export const scaraInstructionSteps: InstructionSection[] = [
  { id:"fabricate", title:"Printed-part & base fabrication", subSteps:[
    { id:"sc_fab_1", title:"Prepare the aluminium base plate and press in the joint bearings", partIds:["base_plate","bearings"] },
    { id:"sc_fab_2", title:"Print the arm links, gripper and all mounts", partIds:["arm_links","gripper","mount_set"] },
    { id:"sc_fab_3", title:"Dry-fit the links and check the joint range of motion", partIds:["arm_links","joint_servos"] },
  ] },
  { id:"wire", title:"Power & servo wiring", subSteps:[
    { id:"sc_wire_1", title:"Wire the 5V supply through the distribution board", partIds:["psu","pdb"] },
    { id:"sc_wire_2", title:"Connect the three joint servos and the gripper servo", partIds:["pdb","joint_servos","gripper_servo"] },
    { id:"sc_wire_3", title:"Wire the ESP32 controller and servo signals", partIds:["controller","joint_servos","gripper_servo"] },
    { id:"sc_wire_4", title:"Verify servo power and signal before assembly", partIds:["pdb","controller"] },
  ] },
  { id:"bringup", title:"Firmware & calibration", subSteps:[
    { id:"sc_test_1", title:"Flash the controller and center all servos", partIds:["controller","joint_servos"] },
    { id:"sc_test_2", title:"Set joint zero positions and software limits", partIds:["joint_servos","arm_links"] },
    { id:"sc_test_3", title:"Calibrate the gripper open/close travel", partIds:["gripper_servo","gripper"] },
    { id:"sc_test_4", title:"Test a simple pick-and-place sequence at low speed", partIds:["controller","joint_servos","gripper"] },
  ] },
  { id:"assemble", title:"Final assembly & test run", subSteps:[
    { id:"sc_asm_1", title:"Mount the base servo and first link to the base plate", partIds:["mount_set","base_plate","arm_links"] },
    { id:"sc_asm_2", title:"Assemble the shoulder and elbow links and servos", partIds:["arm_links","joint_servos"] },
    { id:"sc_asm_3", title:"Fit the gripper to the wrist and route wiring", partIds:["gripper","gripper_servo","fastener_kit"] },
    { id:"sc_asm_4", title:"Run a supervised pick-and-place demo within the work envelope", partIds:["controller","joint_servos","gripper"] },
  ] },
];

export const SCARA_ARM = {
  key:"scara" as const,
  projectId:"scara-arm-robot-01",
  name:"SCARA Arm Robot",
  eyebrow:"REFERENCE 14 · SCARA ROBOT ARM",
  description:"Four-axis SCARA robot arm with base, shoulder, elbow and gripper servos for customizable desktop pick-and-place and manipulation tasks.",
  briefTitle:"Bốn trục linh hoạt.\nGắp đặt chính xác.\nĐiều khiển ESP32.",
  tags:["SCARA ARM","PICK & PLACE","STEM"],
  visual:"/scara-arm-robot-visual.png",
  originalPrompt:"Design a four-axis SCARA robot arm with servo joints and a two-finger gripper for desktop manipulation.",
  plan:"Requirements → arm kinematics → servo joints → gripper → power & control → calibration → supervised pick-and-place test",
  notes:["educational robot arm","4-axis SCARA","two-finger gripper","desktop scale"],
  componentCount:scaraParts.length,
};

export function buildScaraCadProject(request = SCARA_ARM.originalPrompt, baseVersion = 1): CadProjectResult {
  const scene: CadProjectResult["scene"] = [
    { id:"base-plate", label:"Base plate", kind:"plate", size:[150,8,150], position:[0,10,0], color:"#3a3f46", role:"enclosure" },
    { id:"base-servo", label:"Base rotary servo", kind:"motor", size:[18,22,18], position:[0,28,0], color:"#242831", role:"component" },
    { id:"column", label:"Base column", kind:"box", size:[34,60,34], position:[0,50,0], color:"#2b2f35", role:"component" },
    { id:"link1", label:"Shoulder link", kind:"box", size:[130,18,26], position:[55,86,0], color:"#4a4f56", role:"component" },
    { id:"shoulder-servo", label:"Shoulder servo", kind:"motor", size:[16,20,16], position:[118,86,0], color:"#242831", role:"component" },
    { id:"link2", label:"Elbow link", kind:"box", size:[110,16,22], position:[168,72,0], color:"#54595f", role:"component" },
    { id:"elbow-servo", label:"Elbow servo", kind:"motor", size:[14,18,14], position:[214,72,0], color:"#242831", role:"component" },
    { id:"wrist", label:"Wrist plate", kind:"plate", size:[30,10,30], position:[214,58,0], color:"#30363d", role:"component" },
    { id:"gripper", label:"Two-finger gripper", kind:"box", size:[24,26,16], position:[214,40,0], color:"#343940", role:"component" },
    { id:"finger-l", label:"Gripper finger L", kind:"box", size:[4,22,8], position:[207,22,0], color:"#5a5f66", role:"component" },
    { id:"finger-r", label:"Gripper finger R", kind:"box", size:[4,22,8], position:[221,22,0], color:"#5a5f66", role:"component" },
    { id:"controller", label:"ESP32 controller", kind:"pcb", size:[54,10,28], position:[-45,20,45], color:"#157d55", role:"component" },
    { id:"psu", label:"5V power supply", kind:"box", size:[70,36,44], position:[-40,30,-45], color:"#242831", role:"component" },
  ];
  return {
    projectId:SCARA_ARM.projectId,
    draftId:`scara-arm-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[300,220,180], clearanceMm:1, wallThicknessMm:2.4, printer:"FDM" },
    operations:[
      { id:"op-sc01", type:"create_box", label:"Build the base plate and column", parameters:{ base:1 } },
      { id:"op-sc02", type:"place_component", label:"Install base, shoulder and elbow servos", parameters:{ joints:3 } },
      { id:"op-sc03", type:"place_component", label:"Assemble the shoulder and elbow links", parameters:{ links:2 } },
      { id:"op-sc04", type:"add_pcb_mount", label:"Fit the two-finger gripper on the wrist", parameters:{ gripper:1 } },
      { id:"op-sc05", type:"place_component", label:"Place the ESP32 controller and 5V supply", parameters:{ electronics:2 } },
    ],
    validation:{ passed:true, score:95, checksPassed:9, checksTotal:9, issues:[{ severity:"info", code:"ARM_HOME_GATE", message:"Home the joints and set software limits before running an automated sequence." }] },
    metrics:{ dimensionsMm:[280,200,160], estimatedPrintMinutes:360, estimatedMaterialGrams:150, primitiveCount:scene.length },
    scene,
  };
}
