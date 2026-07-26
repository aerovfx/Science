import type { CadProjectResult } from "./cad-engine.js";
import type { InstructionPreamble, InstructionSection, ProjectPart } from "./project-export.js";

const p = (part: ProjectPart) => part;

// Conceptual space-systems reference. This is NOT a buildable DIY project:
// it uses space-qualified, high-voltage and cryogenic hardware and is for
// advanced research reference and study only.
export const plasmaThrusterParts: ProjectPart[] = [
  p({ id:"PT01", exportId:"flight_computer", name:"Main flight computer", productName:"Rad-Hardened Quad-Core Processor (LEON3FT)", description:"Radiation-hardened flight computer running attitude, power and thruster control.", category:"electrical", subtype:"mcu", type:"MCU", qty:1, price:250000, color:"orange", pins:"SpaceWire · MIL-1553 · CAN · POWER", dimensions:"Avionics module", purchaseUrl:"", sourceName:"Aerospace supplier", sourceStatus:"Space-qualified · export-controlled" }),
  p({ id:"PT02", exportId:"sram", name:"Rad-hard SRAM ×4", productName:"Microsemi UT8MR8M32N0A100", description:"Radiation-hardened memory for flight-data buffering.", category:"electrical", subtype:"module", type:"MODULE", qty:4, price:8000, color:"violet", pins:"BUS · POWER", dimensions:"Space package", purchaseUrl:"", sourceName:"Microsemi", sourceStatus:"Space-qualified" }),
  p({ id:"PT03", exportId:"spectrometer", name:"Solar-wind spectrometer", productName:"Electrostatic Analyzer / Mass Spectrometer", description:"Measures ambient charged-particle flux for the plasma-capture concept.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:120000, color:"lime", pins:"HV · DATA", dimensions:"Instrument", purchaseUrl:"", sourceName:"Instrument integrator", sourceStatus:"Custom space instrument" }),
  p({ id:"PT04", exportId:"langmuir", name:"Langmuir probes ×4", productName:"Space-Qualified Langmuir Probe System", description:"Measures plasma density and temperature around the thruster.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:4, price:40000, color:"lime", pins:"BIAS · DATA", dimensions:"Probe + electronics", purchaseUrl:"", sourceName:"Instrument integrator", sourceStatus:"Space-qualified" }),
  p({ id:"PT05", exportId:"cryo_temp", name:"Cryo temperature sensors ×3", productName:"Cernox CX-1050-SD Cryogenic Sensor", description:"Monitors the superconducting coil temperature.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:3, price:500, color:"lime", pins:"4-wire", dimensions:"Cryo sensor", purchaseUrl:"", sourceName:"Lake Shore", sourceStatus:"Cryogenic-rated" }),
  p({ id:"PT06", exportId:"accel", name:"High-G accelerometer", productName:"Rad-Hard High-G Accelerometer (QA700)", description:"Measures pulsed-thrust impulse for performance characterization.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:8000, color:"lime", pins:"ANALOG · POWER", dimensions:"Sensor", purchaseUrl:"", sourceName:"Honeywell", sourceStatus:"Rad-hard" }),
  p({ id:"PT07", exportId:"plasma_flow", name:"Plasma flow sensor", productName:"Laser Doppler Anemometer (Plasma)", description:"Doppler-shift measurement of plasma exhaust velocity.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:1, price:60000, color:"lime", pins:"OPTICAL · DATA", dimensions:"Instrument", purchaseUrl:"", sourceName:"Instrument integrator", sourceStatus:"Custom diagnostic" }),
  p({ id:"PT08", exportId:"star_tracker", name:"Star trackers ×2", productName:"Star Tracker (ASTRO-class)", description:"Provides high-accuracy attitude determination.", category:"electrical", subtype:"sensor", type:"SENSOR", qty:2, price:150000, color:"lime", pins:"SpaceWire · POWER", dimensions:"Optical head + electronics", purchaseUrl:"", sourceName:"Jena-Optronik class", sourceStatus:"Space-qualified" }),
  p({ id:"PT09", exportId:"xenon_injector", name:"Xenon plasma injector", productName:"Xenon Feed System (Hall-effect class)", description:"Injects and ionizes xenon propellant into the magnetic nozzle.", category:"electrical", subtype:"actuator", type:"ACTUATOR", qty:1, price:400000, color:"blue", pins:"HV · GAS · POWER", dimensions:"Feed + injector", purchaseUrl:"", sourceName:"Propulsion integrator", sourceStatus:"Custom · hazardous gas handling" }),
  p({ id:"PT10", exportId:"coil_driver", name:"Superconducting coil driver", productName:"High-Current Pulsed Power Supply", description:"Drives the superconducting ring with high-current magnetic pulses.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:750000, color:"red", pins:"HV · HIGH-CURRENT", dimensions:"Power unit", purchaseUrl:"", sourceName:"Pulsed-power integrator", sourceStatus:"Extreme HV/current · specialist only" }),
  p({ id:"PT11", exportId:"injector_psu", name:"Injector power supply", productName:"High-Voltage Pulsed Power Supply", description:"High-voltage pulses for plasma injection and acceleration.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:300000, color:"red", pins:"HV · PULSE", dimensions:"Power unit", purchaseUrl:"", sourceName:"Pulsed-power integrator", sourceStatus:"Extreme HV · specialist only" }),
  p({ id:"PT12", exportId:"pdu", name:"Power distribution unit", productName:"Space-Rated PDU", description:"Central power distribution, regulation and overcurrent protection.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:80000, color:"red", pins:"28V IN · RAILS", dimensions:"Avionics module", purchaseUrl:"", sourceName:"Power integrator", sourceStatus:"Space-qualified" }),
  p({ id:"PT13", exportId:"dcdc_hi", name:"High-power DC-DC", productName:"Space-Rated 120V→400V Converter", description:"Steps the bus up for the coil driver.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:30000, color:"red", pins:"120V IN · 400V OUT", dimensions:"Converter", purchaseUrl:"", sourceName:"Power integrator", sourceStatus:"Space-qualified" }),
  p({ id:"PT14", exportId:"dcdc_lo", name:"Low-power DC-DC", productName:"Space-Rated 120V→28V/5V Converter", description:"Avionics rails for the flight computer and sensors.", category:"electrical", subtype:"power", type:"POWER", qty:1, price:15000, color:"red", pins:"120V IN · 28V/5V OUT", dimensions:"Converter", purchaseUrl:"", sourceName:"Power integrator", sourceStatus:"Space-qualified" }),
  p({ id:"PT15", exportId:"attitude_driver", name:"Attitude thruster driver", productName:"Quad-Channel Actuator Controller", description:"Drives the attitude-control thrusters for pointing.", category:"electrical", subtype:"module", type:"MODULE", qty:1, price:15000, color:"violet", pins:"PWM · POWER", dimensions:"Controller", purchaseUrl:"", sourceName:"Avionics integrator", sourceStatus:"Space-qualified" }),
  p({ id:"PT16", exportId:"cryo_controller", name:"Cryocooler controller", productName:"Precision Temperature Controller", description:"Regulates the cryocooler keeping the ring superconducting.", category:"electrical", subtype:"module", type:"MODULE", qty:1, price:25000, color:"violet", pins:"SENSE · DRIVE", dimensions:"Controller", purchaseUrl:"", sourceName:"Cryogenics integrator", sourceStatus:"Cryogenic-rated" }),
  p({ id:"PT17", exportId:"mag_controller", name:"Magnetometer DAQ", productName:"Multi-Channel Data Acquisition System", description:"Reads the magnetometer array around the ring.", category:"electrical", subtype:"module", type:"MODULE", qty:1, price:50000, color:"violet", pins:"DATA · POWER", dimensions:"DAQ", purchaseUrl:"", sourceName:"Instrument integrator", sourceStatus:"Space-qualified" }),
  p({ id:"PT18", exportId:"comms", name:"Communications transceiver", productName:"S-Band Space Transceiver", description:"Telemetry and command link to the ground segment.", category:"electrical", subtype:"communication", type:"MODULE", qty:1, price:75000, color:"violet", pins:"RF · DATA · POWER", dimensions:"Transceiver", purchaseUrl:"", sourceName:"Comms integrator", sourceStatus:"Space-qualified · licensed spectrum" }),
  p({ id:"PT19", exportId:"ring_frame", name:"Superconducting ring frame ×4", productName:"Aerospace Aluminium I-Beam Segments", description:"Curved segments forming the primary superconducting-ring support structure.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:4, price:15000, color:"slate", pins:"", dimensions:"Curved I-beam", purchaseUrl:"", sourceName:"Aerospace fabricator", sourceStatus:"Structural qualification required" }),
  p({ id:"PT20", exportId:"core_structure", name:"Central thruster core", productName:"Titanium Hexagonal Beam Core", description:"Central structure housing the magnetic nozzle and plasma-generation components.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:25000, color:"slate", pins:"", dimensions:"Core beam", purchaseUrl:"", sourceName:"Aerospace fabricator", sourceStatus:"High thermal/magnetic stress" }),
  p({ id:"PT21", exportId:"nozzle", name:"Magnetic plasma nozzle", productName:"Ceramic/Superalloy Nozzle & Plasma Conduits", description:"Refractory ceramic inner segments, superalloy outer casing and boron-nitride plasma diverter channels.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:17000, color:"slate", pins:"", dimensions:"Nozzle assembly", purchaseUrl:"", sourceName:"Aerospace fabricator", sourceStatus:"Extreme temperature · erosion-rated" }),
  p({ id:"PT22", exportId:"cryo_mount_frame", name:"Cryocooler mount frame", productName:"CFRP Cryocooler Mount Frame", description:"Rigid, thermally isolating frame for the cryocooler units.", category:"mechanical", subtype:"structural", type:"STRUCTURAL", qty:1, price:8000, color:"slate", pins:"", dimensions:"CFRP frame", purchaseUrl:"", sourceName:"Composite fabricator", sourceStatus:"Thermal isolation" }),
  p({ id:"PT23", exportId:"avionics_enclosure", name:"Avionics bay panels ×4", productName:"Aluminium Honeycomb Panels", description:"Radiation-shielding, thermally managed panels for the avionics bay.", category:"mechanical", subtype:"structural", type:"ENCLOSURE", qty:4, price:1200, color:"slate", pins:"", dimensions:"Honeycomb panel", purchaseUrl:"", sourceName:"Aerospace fabricator", sourceStatus:"Radiation shielding" }),
  p({ id:"PT24", exportId:"mount_hardware", name:"Mounts & fasteners", productName:"3D Printed Mounts, Clamps & Space Fasteners", description:"Instrument and electronics mounts, cryo-line clamps, conduit clips and titanium/stainless fasteners.", category:"mechanical", subtype:"3d_printed", type:"3D PRINTED", qty:1, price:600, color:"violet", pins:"", dimensions:"ABS / PETG + hardware", purchaseUrl:"", sourceName:"In-house + workshop stock", sourceStatus:"Ground-support / integration hardware" }),
];

export const plasmaThrusterElectricalConnections = [
  { source:"pdu", target:"dcdc_hi", type:"power", voltage:"120V", current:"High", label:"Bus to coil-driver converter" },
  { source:"pdu", target:"dcdc_lo", type:"power", voltage:"120V", current:"Moderate", label:"Bus to avionics converter" },
  { source:"dcdc_hi", target:"coil_driver", type:"power", voltage:"400V", current:"Pulsed", label:"Coil driver supply" },
  { source:"coil_driver", target:"ring_frame", type:"power", voltage:"HV pulse", current:"High", label:"Superconducting ring drive" },
  { source:"injector_psu", target:"xenon_injector", type:"power", voltage:"HV pulse", current:"Pulsed", label:"Plasma injection power" },
  { source:"dcdc_lo", target:"flight_computer", type:"power", voltage:"28V/5V", current:"Regulated", label:"Avionics power" },
  { source:"flight_computer", target:"coil_driver", type:"data", protocol:"SpaceWire", label:"Coil pulse timing" },
  { source:"flight_computer", target:"injector_psu", type:"data", protocol:"SpaceWire", label:"Injection timing" },
  { source:"flight_computer", target:"attitude_driver", type:"data", protocol:"CAN", label:"Attitude control" },
  { source:"flight_computer", target:"cryo_controller", type:"data", protocol:"Serial", label:"Cryocooler regulation" },
  { source:"flight_computer", target:"star_tracker", type:"data", protocol:"SpaceWire", label:"Attitude determination" },
  { source:"flight_computer", target:"mag_controller", type:"data", protocol:"Bus", label:"Magnetometer array" },
  { source:"spectrometer", target:"flight_computer", type:"data", protocol:"Bus", label:"Particle flux" },
  { source:"langmuir", target:"flight_computer", type:"data", protocol:"Bus", label:"Plasma density" },
  { source:"plasma_flow", target:"flight_computer", type:"data", protocol:"Bus", label:"Exhaust velocity" },
  { source:"flight_computer", target:"comms", type:"data", protocol:"S-Band", label:"Telemetry & command" },
  { source:"flight_computer", target:"sram", type:"data", protocol:"Bus", label:"Data buffering" },
  { source:"cryo_temp", target:"cryo_controller", type:"data", protocol:"4-wire", label:"Coil temperature" },
];

export const plasmaThrusterMechanicalConnections = [
  { source:"ring_frame", target:"core_structure", label:"Ring segments to central core" },
  { source:"nozzle", target:"core_structure", label:"Magnetic nozzle in core" },
  { source:"xenon_injector", target:"nozzle", label:"Injector aligned to nozzle" },
  { source:"cryo_mount_frame", target:"ring_frame", label:"Cryocooler on ring" },
  { source:"avionics_enclosure", target:"core_structure", label:"Avionics bay on core" },
  { source:"flight_computer", target:"avionics_enclosure", label:"Computer in bay" },
  { source:"pdu", target:"avionics_enclosure", label:"PDU in bay" },
  { source:"star_tracker", target:"mount_hardware", label:"Star tracker external mount" },
  { source:"spectrometer", target:"mount_hardware", label:"Spectrometer external mount" },
  { source:"comms", target:"mount_hardware", label:"Transceiver external mount" },
  { source:"mount_hardware", target:"core_structure", label:"Instrument and cryo-line mounts" },
];

export const plasmaThrusterInstructionPreamble: InstructionPreamble = {
  tools:["Cleanroom and ESD-safe handling","High-voltage-rated test equipment and interlocks","Cryogenic handling PPE and dewars","Vacuum chamber for plasma testing","Torque tools with calibration records","Thermal-vacuum and vibration test facility","Ground support equipment","Space-systems integration procedures"],
  assumptions:["Advanced research / space-systems reference only — NOT a home-buildable project","Extreme high-voltage, pulsed-power and cryogenic hazards require trained specialists and facilities","Xenon and plasma handling under proper vacuum and gas-safety controls","Export-control and licensing obligations apply to many components","All operations follow institutional safety review and interlocks"],
};

export const plasmaThrusterInstructionSteps: InstructionSection[] = [
  { id:"fabricate", title:"Structure & subsystem fabrication", subSteps:[
    { id:"pt_fab_1", title:"Fabricate and qualify the superconducting ring frame and central core", partIds:["ring_frame","core_structure"] },
    { id:"pt_fab_2", title:"Build the magnetic nozzle and plasma conduits", partIds:["nozzle","cryo_mount_frame"] },
    { id:"pt_fab_3", title:"Assemble the shielded avionics bay panels", partIds:["avionics_enclosure","mount_hardware"] },
  ] },
  { id:"wire", title:"Power & harness integration", subSteps:[
    { id:"pt_wire_1", title:"Integrate the PDU and the high- and low-power converters", partIds:["pdu","dcdc_hi","dcdc_lo"] },
    { id:"pt_wire_2", title:"Wire the pulsed coil and injector power supplies behind interlocks", partIds:["coil_driver","injector_psu"] },
    { id:"pt_wire_3", title:"Harness the flight computer, memory and communications", partIds:["flight_computer","sram","comms"] },
    { id:"pt_wire_4", title:"Connect the sensor suite and cryogenic instrumentation", partIds:["spectrometer","langmuir","cryo_temp","star_tracker"] },
    { id:"pt_wire_5", title:"Verify grounding, HV isolation and interlocks before energizing", partIds:["pdu","mount_hardware"] },
  ] },
  { id:"bringup", title:"Bring-up, cryo & vacuum tests", subSteps:[
    { id:"pt_test_1", title:"Bring up avionics and confirm all data buses", partIds:["flight_computer","mag_controller"] },
    { id:"pt_test_2", title:"Cool the ring and verify the superconducting transition", partIds:["cryo_controller","cryo_temp","ring_frame"] },
    { id:"pt_test_3", title:"Run low-energy pulsed-power checks with full interlocks", partIds:["coil_driver","injector_psu"] },
    { id:"pt_test_4", title:"Fire the thruster in a vacuum chamber and measure impulse", partIds:["xenon_injector","nozzle","accel","plasma_flow"] },
    { id:"pt_test_5", title:"Complete thermal-vacuum and vibration qualification", partIds:["core_structure","avionics_enclosure"] },
  ] },
  { id:"assemble", title:"Integration & review", subSteps:[
    { id:"pt_asm_1", title:"Integrate the ring, core, nozzle and injector", partIds:["ring_frame","core_structure","nozzle","xenon_injector"] },
    { id:"pt_asm_2", title:"Install and align the star trackers and external instruments", partIds:["star_tracker","spectrometer","comms"] },
    { id:"pt_asm_3", title:"Record mass properties, HV isolation and safe-to-mate reviews", partIds:["pdu","mount_hardware"] },
    { id:"pt_asm_4", title:"Complete a formal safety and readiness review before any operation", partIds:["flight_computer","coil_driver"] },
  ] },
];

export const PLASMA_THRUSTER = {
  key:"plasma" as const,
  projectId:"pulsed-plasma-thruster-01",
  name:"Pulsed Plasma Thruster",
  eyebrow:"REFERENCE 16 · SPACE PROPULSION",
  description:"Conceptual space-propulsion reference: a pulsed plasma thruster with a superconducting ring, xenon injector and magnetic nozzle. Advanced-research study reference — not a home-buildable project.",
  briefTitle:"Đẩy bằng plasma xung.\nVòng siêu dẫn.\nTham chiếu nghiên cứu.",
  tags:["SPACE PROPULSION","PULSED PLASMA","RESEARCH REFERENCE"],
  visual:"",
  originalPrompt:"Provide a conceptual pulsed plasma thruster reference with a superconducting ring, xenon injection and a magnetic nozzle.",
  plan:"Concept → structure & superconducting ring → pulsed power & injection → avionics & instrumentation → cryo/vacuum qualification → safety and readiness review",
  notes:["conceptual reference","space-qualified hardware","high-voltage + cryogenic hazards","specialists and facilities only"],
  componentCount:plasmaThrusterParts.length,
};

export function buildPlasmaThrusterCadProject(request = PLASMA_THRUSTER.originalPrompt, baseVersion = 1): CadProjectResult {
  const ringSegments = Array.from({ length: 24 }, (_, i) => {
    const ang = (i / 24) * Math.PI * 2;
    return { id:`ring-${i}`, label:i === 0 ? "Superconducting ring" : `Ring segment ${i}`, kind:"box" as const, size:[26,26,16] as [number, number, number], position:[Math.cos(ang)*130, 40+Math.sin(ang)*130, 0] as [number, number, number], rotation:[0, 0, ang] as [number, number, number], color:"#5a6270", role:"enclosure" as const };
  });
  const scene: CadProjectResult["scene"] = [
    ...ringSegments,
    { id:"core", label:"Central thruster core", kind:"box", size:[70,70,120], position:[0,40,0], color:"#3a3f46", role:"enclosure" },
    { id:"nozzle", label:"Magnetic plasma nozzle", kind:"cylinder", size:[24,60,40], position:[0,40,90], rotation:[1.57,0,0], color:"#7b8088", role:"component" },
    { id:"injector", label:"Xenon injector", kind:"cylinder", size:[16,40,16], position:[0,40,-10], rotation:[1.57,0,0], color:"#242831", role:"component" },
    { id:"avionics", label:"Avionics bay", kind:"box", size:[90,60,60], position:[0,40,-70], color:"#2b2f35", role:"mount" },
    { id:"flight-computer", label:"Flight computer", kind:"pcb", size:[50,14,40], position:[0,40,-70], color:"#e48435", role:"component" },
    { id:"coil-driver", label:"Coil driver", kind:"battery", size:[60,40,44], position:[0,-40,-40], color:"#343940", role:"component" },
    { id:"star-tracker-1", label:"Star tracker 1", kind:"box", size:[24,24,40], position:[70,40,-80], color:"#1c1f24", role:"component" },
    { id:"star-tracker-2", label:"Star tracker 2", kind:"box", size:[24,24,40], position:[-70,40,-80], color:"#1c1f24", role:"component" },
    { id:"spectrometer", label:"Solar-wind spectrometer", kind:"cylinder", size:[14,40,14], position:[60,120,-40], rotation:[0,0,0.6], color:"#38424f", role:"component" },
  ];
  return {
    projectId:PLASMA_THRUSTER.projectId,
    draftId:`plasma-thruster-v${baseVersion}`,
    baseVersion,
    request,
    constraints:{ maxSizeMm:[3000,3000,1200], clearanceMm:5, wallThicknessMm:8, printer:"NONE" },
    operations:[
      { id:"op-pt01", type:"create_box", label:"Fabricate the superconducting ring structure", parameters:{ segments:4 } },
      { id:"op-pt02", type:"create_box", label:"Build the titanium central core", parameters:{ core:1 } },
      { id:"op-pt03", type:"create_cylinder", label:"Install the magnetic plasma nozzle and injector", parameters:{ nozzle:1 } },
      { id:"op-pt04", type:"place_component", label:"Integrate pulsed coil and injector power supplies", parameters:{ pulsedPower:2 } },
      { id:"op-pt05", type:"place_component", label:"Install the shielded avionics bay and flight computer", parameters:{ avionics:1 } },
      { id:"op-pt06", type:"place_component", label:"Mount star trackers, spectrometer and instruments", parameters:{ instruments:4 } },
    ],
    validation:{ passed:true, score:80, checksPassed:12, checksTotal:16, issues:[{ severity:"info", code:"SPACE_SAFETY_REVIEW", message:"Conceptual reference only. Requires trained specialists, facilities, HV/cryogenic interlocks and a formal safety review before any operation." }] },
    metrics:{ dimensionsMm:[2600,2600,1000], estimatedPrintMinutes:0, estimatedMaterialGrams:0, primitiveCount:scene.length },
    scene,
  };
}
