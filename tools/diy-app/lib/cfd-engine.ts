import type { CadProjectResult, ScenePrimitive } from "./cad-engine.js";

export type CfdCheck = {
  id: string;
  label: string;
  value: string;
  passed: boolean;
  note: string;
};

export type CfdAnalysisResult = {
  mode: "CFD-LITE" | "HYDRO-LITE";
  domain: "aerial" | "marine";
  fidelity: "preliminary";
  passed: boolean;
  score: number;
  testVelocityMs: number;
  dragCoefficient: number;
  estimatedDragN: number;
  rotorClearanceMm: number;
  flowSymmetryPct: number;
  checks: CfdCheck[];
  disclaimer: string;
};

const round = (value: number, digits = 1) => Number(value.toFixed(digits));

function rotorClearance(propellers: ScenePrimitive[], scene: ScenePrimitive[]) {
  if (propellers.length === 1) {
    const propeller = propellers[0];
    const fuselage = scene.find((primitive) => primitive.id === "fuselage") ?? scene.find((primitive) => primitive.role === "enclosure");
    return fuselage ? Math.max(0, propeller.size[0] / 2 - fuselage.size[0] / 2) : propeller.size[0] / 3;
  }
  if (propellers.length < 2) return 0;
  let minimum = Number.POSITIVE_INFINITY;
  for (let left = 0; left < propellers.length; left += 1) {
    for (let right = left + 1; right < propellers.length; right += 1) {
      const a = propellers[left];
      const b = propellers[right];
      const centerDistance = Math.hypot(a.position[0] - b.position[0], a.position[2] - b.position[2]);
      const combinedRadius = (a.size[0] + b.size[0]) / 2;
      minimum = Math.min(minimum, centerDistance - combinedRadius);
    }
  }
  return Math.max(0, minimum);
}

function rotorSymmetry(propellers: ScenePrimitive[]) {
  if (propellers.length === 0) return 0;
  if (propellers.length === 1) return 100;
  const centerX = propellers.reduce((sum, propeller) => sum + propeller.position[0], 0) / propellers.length;
  const centerZ = propellers.reduce((sum, propeller) => sum + propeller.position[2], 0) / propellers.length;
  const radii = propellers.map((propeller) => Math.hypot(propeller.position[0] - centerX, propeller.position[2] - centerZ));
  const mean = radii.reduce((sum, radius) => sum + radius, 0) / radii.length;
  if (mean === 0) return 0;
  const maximumDeviation = Math.max(...radii.map((radius) => Math.abs(radius - mean)));
  return Math.max(0, 100 - (maximumDeviation / mean) * 100);
}

function analyzeHydrodynamics(project: CadProjectResult): CfdAnalysisResult {
  const hull = project.scene.find((primitive) => primitive.id === "hull");
  const jets = project.scene.filter((primitive) => primitive.id.startsWith("jet-"));
  const sonar = project.scene.find((primitive) => primitive.id === "sonar");
  const battery = project.scene.find((primitive) => primitive.id === "battery");
  const lengthMm = project.metrics.dimensionsMm[0];
  const beamMm = project.metrics.dimensionsMm[1];
  const slenderness = round(lengthMm / beamMm, 2);
  const jetClearanceMm = jets.length === 2 ? round(Math.abs(jets[0].position[0] - jets[1].position[0]) - (jets[0].size[0] + jets[1].size[0]) / 2, 1) : 0;
  const sensorClearanceMm = hull && sonar ? round(Math.max(0, Math.abs(sonar.position[1]) - hull.size[1] / 2), 1) : 0;
  const trimOffsetMm = battery ? round(Math.abs(battery.position[0]), 1) : 999;
  const testVelocityMs = 4;
  const wettedAreaM2 = (lengthMm / 1000) * (beamMm / 1000) * 0.45;
  const dragCoefficient = 0.08;
  const estimatedDragN = round(0.5 * 1025 * testVelocityMs ** 2 * dragCoefficient * wettedAreaM2, 0);
  const checks: CfdCheck[] = [
    { id:"hull-slenderness", label:"Hull slenderness", value:`L/B ${slenderness}`, passed:slenderness >= 2.5, note:"Tỷ số chiều dài/rộng sơ bộ cho hành trình khảo sát hiệu quả." },
    { id:"jet-clearance", label:"Twin waterjet clearance", value:`${jetClearanceMm} mm`, passed:jetClearanceMm >= 250, note:"Khoảng cách giữa hai vùng hút/đẩy của waterjet." },
    { id:"sensor-clearance", label:"Sonar keel clearance", value:`${sensorClearanceMm} mm`, passed:sensorClearanceMm >= 80, note:"Khoảng tách đầu sonar khỏi đáy thân để hạn chế nhiễu dòng." },
    { id:"static-trim", label:"Static trim proxy", value:`${trimOffsetMm} mm`, passed:trimOffsetMm <= 80, note:"Độ lệch ngang của khối pin so với mặt phẳng dọc tâm." },
  ];
  const passedCount = checks.filter((check) => check.passed).length;
  return {
    mode:"HYDRO-LITE",
    domain:"marine",
    fidelity:"preliminary",
    passed:passedCount === checks.length,
    score:Math.round((passedCount / checks.length) * 100),
    testVelocityMs,
    dragCoefficient,
    estimatedDragN,
    rotorClearanceMm:jetClearanceMm,
    flowSymmetryPct:trimOffsetMm <= 80 ? 100 : 80,
    checks,
    disclaimer:`HYDRO-LITE ước lượng lực cản ${estimatedDragN} N ở ${testVelocityMs} m/s từ hình học sơ bộ; cần mô hình thủy tĩnh, CFD nước và thử bể kéo để xác nhận kỹ thuật cuối cùng.`,
  };
}

export function analyzeAerodynamics(project: CadProjectResult): CfdAnalysisResult {
  if (project.projectId.startsWith("usv-")) return analyzeHydrodynamics(project);
  const propellers = project.scene.filter((primitive) => primitive.kind === "propeller");
  const fuselage = project.scene.find((primitive) => primitive.id === "fuselage");
  const fixedWing = Boolean(fuselage) && propellers.length <= 2;
  const testVelocityMs = 15;
  const averageRotorDiameterMm = propellers.length > 0 ? propellers.reduce((sum, propeller) => sum + propeller.size[0], 0) / propellers.length : 0;
  const rotorDiskAreaM2 = propellers.length * Math.PI * (averageRotorDiameterMm / 2000) ** 2;
  const frontalAreaM2 = fixedWing && fuselage ? (fuselage.size[0] * project.metrics.dimensionsMm[2]) / 1_000_000 : (project.metrics.dimensionsMm[0] * project.metrics.dimensionsMm[2]) / 1_000_000;
  const blockageRatio = rotorDiskAreaM2 > 0 ? frontalAreaM2 / rotorDiskAreaM2 : 1;
  const dragCoefficient = round(fixedWing ? 0.18 + Math.min(0.12, blockageRatio * 0.04) : 0.64 + Math.min(0.22, blockageRatio * 0.14), 2);
  const estimatedDragN = round(0.5 * 1.225 * testVelocityMs ** 2 * dragCoefficient * frontalAreaM2, 2);
  const clearanceMm = round(rotorClearance(propellers, project.scene), 1);
  const symmetryPct = round(rotorSymmetry(propellers), 1);
  const dragLimitN = fixedWing ? Math.max(2, frontalAreaM2 * 25) : 1.5;

  const checks: CfdCheck[] = [
    { id: "rotor-clearance", label: fixedWing ? "Propeller / fuselage clearance" : "Rotor wake clearance", value: `${clearanceMm} mm`, passed: clearanceMm >= 20, note: fixedWing ? "Khoảng hở hình học từ đầu cánh quạt đến thân máy bay." : "Khoảng cách tối thiểu giữa hai đĩa cánh quạt." },
    { id: "flow-symmetry", label: fixedWing ? "Airframe symmetry" : "Flow symmetry", value: `${symmetryPct}%`, passed: symmetryPct >= 95, note: fixedWing ? "Độ đối xứng bố trí động cơ đẩy quanh trục dọc thân." : "Độ đối xứng hình học của bốn vùng dòng khí rotor." },
    { id: "drag-coefficient", label: "Estimated drag coefficient", value: `Cd ${dragCoefficient}`, passed: dragCoefficient <= 0.9, note: "Ước lượng sơ bộ từ diện tích cản trước và tổng diện tích đĩa rotor." },
    { id: "crosswind-drag", label: `Drag at ${testVelocityMs} m/s`, value: `${estimatedDragN} N`, passed: estimatedDragN <= dragLimitN, note: "Tải cản tham chiếu trong luồng khí đều ở mực nước biển." },
  ];
  const passedCount = checks.filter((check) => check.passed).length;

  return {
    mode: "CFD-LITE",
    domain: "aerial",
    fidelity: "preliminary",
    passed: passedCount === checks.length && [1, 2, 4].includes(propellers.length),
    score: Math.round((passedCount / checks.length) * 100),
    testVelocityMs,
    dragCoefficient,
    estimatedDragN,
    rotorClearanceMm: clearanceMm,
    flowSymmetryPct: symmetryPct,
    checks,
    disclaimer: "CFD-LITE là cổng sàng lọc khí động học từ hình học CAD; cần solver CFD có mesh và điều kiện biên cho xác nhận kỹ thuật cuối cùng.",
  };
}
