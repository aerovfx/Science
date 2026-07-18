"use client";

import { CadViewport } from "@/app/components/CadViewport";
import { buildCadProject, DEFAULT_CAD_REQUEST, type CadProjectResult } from "@/lib/cad-engine";
import { analyzeAerodynamics, type CfdAnalysisResult } from "@/lib/cfd-engine";
import { buildProjectZip, type ExportConnection, type InstructionPreamble, type InstructionSection, type ProjectPart } from "@/lib/project-export";
import { LONG_RANGE_UAV, buildLongRangeCadProject, longRangeElectricalConnections, longRangeInstructionPreamble, longRangeInstructionSteps, longRangeMechanicalConnections, longRangeParts } from "@/lib/long-range-uav-data";
import { MOTHER_UAV, buildMotherUavCadProject, motherUavElectricalConnections, motherUavInstructionPreamble, motherUavInstructionSteps, motherUavMechanicalConnections, motherUavParts } from "@/lib/mother-uav-data";
import { USV_PROJECT, buildUsvCadProject, usvElectricalConnections, usvInstructionPreamble, usvInstructionSteps, usvMechanicalConnections, usvParts } from "@/lib/usv-data";
import { VTOL_DRONE, buildVtolCadProject, vtolElectricalConnections, vtolInstructionPreamble, vtolInstructionSteps, vtolMechanicalConnections, vtolParts } from "@/lib/vtol-drone-data";
import { OBSERVER_MULTIROTOR, buildObserverCadProject, observerElectricalConnections, observerInstructionPreamble, observerInstructionSteps, observerMechanicalConnections, observerParts } from "@/lib/observer-multirotor-data";
import { ORNITHOPTER, buildOrnithopterCadProject, ornithopterElectricalConnections, ornithopterInstructionPreamble, ornithopterInstructionSteps, ornithopterMechanicalConnections, ornithopterParts } from "@/lib/ornithopter-data";
import { MOBILE_ROBOT, buildMobileRobotCadProject, mobileRobotElectricalConnections, mobileRobotInstructionPreamble, mobileRobotInstructionSteps, mobileRobotMechanicalConnections, mobileRobotParts } from "@/lib/mobile-robot-data";
import { HUMANOID_ROBOT, buildHumanoidCadProject, humanoidElectricalConnections, humanoidInstructionPreamble, humanoidInstructionSteps, humanoidMechanicalConnections, humanoidParts } from "@/lib/humanoid-robot-data";
import { ROBODOG, buildRobodogCadProject, robodogElectricalConnections, robodogInstructionPreamble, robodogInstructionSteps, robodogMechanicalConnections, robodogParts } from "@/lib/robodog-data";
import { SUBMARINE, buildSubmarineCadProject, submarineElectricalConnections, submarineInstructionPreamble, submarineInstructionSteps, submarineMechanicalConnections, submarineParts } from "@/lib/submarine-data";
import { RC_BOAT, buildRcBoatCadProject, rcBoatElectricalConnections, rcBoatInstructionPreamble, rcBoatInstructionSteps, rcBoatMechanicalConnections, rcBoatParts } from "@/lib/rc-boat-data";
import { WIND_HARVESTER, buildWindHarvesterCadProject, windHarvesterElectricalConnections, windHarvesterInstructionPreamble, windHarvesterInstructionSteps, windHarvesterMechanicalConnections, windHarvesterParts } from "@/lib/wind-harvester-data";
import { SCARA_ARM, buildScaraCadProject, scaraElectricalConnections, scaraInstructionPreamble, scaraInstructionSteps, scaraMechanicalConnections, scaraParts } from "@/lib/scara-arm-data";
import { FPV_RACER, buildFpvRacerCadProject, fpvRacerElectricalConnections, fpvRacerInstructionPreamble, fpvRacerInstructionSteps, fpvRacerMechanicalConnections, fpvRacerParts } from "@/lib/fpv-racer-data";
import { PLASMA_THRUSTER, buildPlasmaThrusterCadProject, plasmaThrusterElectricalConnections, plasmaThrusterInstructionPreamble, plasmaThrusterInstructionSteps, plasmaThrusterMechanicalConnections, plasmaThrusterParts } from "@/lib/plasma-thruster-data";
import { WALLE_ROBOT, buildWalleCadProject, walleElectricalConnections, walleInstructionPreamble, walleInstructionSteps, walleMechanicalConnections, walleParts } from "@/lib/walle-robot-data";
import { GARDEN_IRRIGATION, buildGardenCadProject, gardenElectricalConnections, gardenInstructionPreamble, gardenInstructionSteps, gardenMechanicalConnections, gardenParts } from "@/lib/garden-irrigation-data";
import { FILMING_DRONE, buildFilmingDroneCadProject, filmingDroneElectricalConnections, filmingDroneInstructionPreamble, filmingDroneInstructionSteps, filmingDroneMechanicalConnections, filmingDroneParts } from "@/lib/filming-drone-data";
import { COMPANION_BOT, buildCompanionCadProject, companionElectricalConnections, companionInstructionPreamble, companionInstructionSteps, companionMechanicalConnections, companionParts } from "@/lib/companion-bot-data";
import { AR_GLASSES, buildArGlassesCadProject, arGlassesElectricalConnections, arGlassesInstructionPreamble, arGlassesInstructionSteps, arGlassesMechanicalConnections, arGlassesParts } from "@/lib/ar-glasses-data";
import { PRINTER_3D, buildPrinter3dCadProject, printer3dElectricalConnections, printer3dInstructionPreamble, printer3dInstructionSteps, printer3dMechanicalConnections, printer3dParts } from "@/lib/printer-3d-data";
import { DELIVERY_DRONE, buildDeliveryDroneCadProject, deliveryDroneElectricalConnections, deliveryDroneInstructionPreamble, deliveryDroneInstructionSteps, deliveryDroneMechanicalConnections, deliveryDroneParts } from "@/lib/delivery-drone-data";
import { ENDURANCE_DRONE, buildEnduranceCadProject, enduranceElectricalConnections, enduranceInstructionPreamble, enduranceInstructionSteps, enduranceMechanicalConnections, enduranceParts } from "@/lib/endurance-drone-data";
import { CNC_MILL, buildCncMillCadProject, cncMillElectricalConnections, cncMillInstructionPreamble, cncMillInstructionSteps, cncMillMechanicalConnections, cncMillParts } from "@/lib/cnc-mill-data";
import { LARGE_PRINTER, buildLargePrinterCadProject, largePrinterElectricalConnections, largePrinterInstructionPreamble, largePrinterInstructionSteps, largePrinterMechanicalConnections, largePrinterParts } from "@/lib/large-printer-data";
import { CYBER_MULTITOOL, buildCyberMultitoolCadProject, cyberMultitoolElectricalConnections, cyberMultitoolInstructionPreamble, cyberMultitoolInstructionSteps, cyberMultitoolMechanicalConnections, cyberMultitoolParts } from "@/lib/cyber-multitool-data";
import { UAV_COMPONENT_COUNT, uavElectricalConnections, uavInstructionPreamble, uavInstructionSteps, uavMechanicalConnections, uavParts } from "@/lib/uav-data";
import { useMemo, useRef, useState } from "react";

type Tab = "INFO" | "PARTS" | "WIRING" | "MECH" | "INSTRUCTIONS";
type PartView = "cards" | "table";

const tabs: Array<{ id: Tab; icon: string; label: string }> = [
  { id: "INFO", icon: "▧", label: "INFO" },
  { id: "PARTS", icon: "☷", label: "PARTS" },
  { id: "WIRING", icon: "⌁", label: "WIRING" },
  { id: "MECH", icon: "◇", label: "MECH" },
  { id: "INSTRUCTIONS", icon: "▤", label: "INSTRUCTIONS" },
];

type ProjectMode = "mini" | "long-range" | "mother" | "usv" | "vtol" | "observer" | "ornithopter" | "mobilerobot" | "humanoid" | "robodog" | "submarine" | "rcboat" | "windharvester" | "scara" | "fpvracer" | "plasma" | "walle" | "garden" | "filmingdrone" | "companion" | "arglasses" | "printer3d" | "deliverydrone" | "endurance" | "cncmill" | "largeprinter" | "cybertool";

const miniProject = {
  key: "mini" as const,
  projectId: "20efe778-7a96-4260-89d3-ed1c57b45a98",
  name: "Budget Mini UAV",
  eyebrow: "PROJECT 20 · MINI QUADCOPTER",
  description: "UAV mini một khối với flight controller tích hợp ESC, bốn động cơ, pin LiPo và bộ thu radio trên khung carbon đơn giản.",
  briefTitle: "Nhỏ gọn.\nBay được.\nGiá hợp lý.",
  tags: ["CHEAP PRICE", "SINGLE UNIT", "UAV DESIGN"],
  visual: "",
  originalPrompt: DEFAULT_CAD_REQUEST,
  plan: "Frame fabrication → power and signal wiring → firmware bring-up → motor test → final assembly",
  notes: ["cheap price", "single unit", "UAV design"],
  componentCount: UAV_COMPONENT_COUNT,
};

const initialToolRuns = [
  { name: "cad.generate_feature_tree", state: "DONE", time: "1.2s" },
  { name: "cad.validate_design", state: "PASSED", time: "0.4s" },
  { name: "cad.render_preview", state: "DONE", time: "0.8s" },
  { name: "simulation.preflight_analysis", state: "PASSED", time: "0.7s" },
];

const designStages = [
  { phase: "PHASE 0", label: "Define requirements", detail: "Chốt mục tiêu, BOM sơ bộ, ngân sách trần và phân bổ theo hạng mục.", output: "Project brief · BOM v0 · Budget baseline" },
  { phase: "PHASE 1", label: "Research sourcing", detail: "Tìm 2–3 nguồn cho mỗi item, so sánh giá, vận chuyển và rủi ro seller.", output: "Source matrix · Lead-time · Risk flags" },
  { phase: "PHASE 2", label: "Plan purchasing", detail: "Chọn nguồn cuối và xếp thứ tự đặt hàng theo lead-time, độ tin cậy, chi phí.", output: "Purchase plan · Order priority" },
  { phase: "PHASE 3", label: "Track procurement", detail: "Theo dõi đã đặt/đang giao/đã nhận và cảnh báo chi tiêu vượt ngân sách.", output: "Order tracker · Budget variance" },
  { phase: "PHASE 4", label: "Inspect received parts", detail: "Đối chiếu BOM, đánh dấu thiếu/lỗi và test nhanh linh kiện điện tử.", output: "Receiving checklist · Test results" },
  { phase: "PHASE 5", label: "Simulate & assemble", detail: "Mô phỏng CAD, wiring, nguồn/tải và dòng khí/nước; chỉ lắp ráp sau khi vượt qua các test gate.", output: "CAD + wiring + flow simulation · Build checklist" },
  { phase: "PHASE 6", label: "Create user guide", detail: "Soạn vận hành, bảo trì, xử lý lỗi; tái sử dụng ảnh và ghi chú lắp ráp.", output: "Web guide · PDF/video-ready content" },
  { phase: "PHASE 7", label: "Review & improve", detail: "Tổng hợp vấn đề từ mua hàng đến vận hành, cập nhật BOM và quy trình bản sau.", output: "Lessons learned · BOM/process revision" },
];

export default function Home() {
  const [projectMode, setProjectMode] = useState<ProjectMode>("mini");
  const [projectMenuOpen, setProjectMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("INFO");
  const [selectedPart, setSelectedPart] = useState<ProjectPart>(uavParts[0]);
  const [partDetailOpen, setPartDetailOpen] = useState(false);
  const [partView, setPartView] = useState<PartView>("table");
  const [partSearch, setPartSearch] = useState("");
  const [partCategory, setPartCategory] = useState("ALL");
  const [chatCollapsed, setChatCollapsed] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [activity, setActivity] = useState("Đã dựng khung UAV, bố trí hệ động lực và kiểm tra khoảng hở cánh quạt.");
  const [version, setVersion] = useState(3);
  const [committed, setCommitted] = useState(false);
  const [cadProject, setCadProject] = useState<CadProjectResult>(() => buildCadProject());
  const [toolRuns, setToolRuns] = useState(initialToolRuns);
  const [cadBusy, setCadBusy] = useState(false);
  const [processStage, setProcessStage] = useState(designStages.length);
  const [processError, setProcessError] = useState(false);
  const [lastRequest, setLastRequest] = useState("Design one UAV at a cheap price: lightweight, single-unit and suitable for a practical STEM build.");
  const [budgetCap, setBudgetCap] = useState(150);
  const [optimization, setOptimization] = useState("balanced");
  const [sourcingMarket, setSourcingMarket] = useState("vn-global");
  const processRun = useRef(0);
  const [exportBusy, setExportBusy] = useState(false);
  const project = projectMode === "cncmill" ? CNC_MILL : projectMode === "largeprinter" ? LARGE_PRINTER : projectMode === "cybertool" ? CYBER_MULTITOOL : projectMode === "endurance" ? ENDURANCE_DRONE : projectMode === "deliverydrone" ? DELIVERY_DRONE : projectMode === "printer3d" ? PRINTER_3D : projectMode === "arglasses" ? AR_GLASSES : projectMode === "companion" ? COMPANION_BOT : projectMode === "filmingdrone" ? FILMING_DRONE : projectMode === "garden" ? GARDEN_IRRIGATION : projectMode === "walle" ? WALLE_ROBOT : projectMode === "plasma" ? PLASMA_THRUSTER : projectMode === "fpvracer" ? FPV_RACER : projectMode === "scara" ? SCARA_ARM : projectMode === "windharvester" ? WIND_HARVESTER : projectMode === "rcboat" ? RC_BOAT : projectMode === "submarine" ? SUBMARINE : projectMode === "robodog" ? ROBODOG : projectMode === "humanoid" ? HUMANOID_ROBOT : projectMode === "mobilerobot" ? MOBILE_ROBOT : projectMode === "ornithopter" ? ORNITHOPTER : projectMode === "observer" ? OBSERVER_MULTIROTOR : projectMode === "vtol" ? VTOL_DRONE : projectMode === "usv" ? USV_PROJECT : projectMode === "mother" ? MOTHER_UAV : projectMode === "long-range" ? LONG_RANGE_UAV : miniProject;
  const parts = projectMode === "cncmill" ? cncMillParts : projectMode === "largeprinter" ? largePrinterParts : projectMode === "cybertool" ? cyberMultitoolParts : projectMode === "endurance" ? enduranceParts : projectMode === "deliverydrone" ? deliveryDroneParts : projectMode === "printer3d" ? printer3dParts : projectMode === "arglasses" ? arGlassesParts : projectMode === "companion" ? companionParts : projectMode === "filmingdrone" ? filmingDroneParts : projectMode === "garden" ? gardenParts : projectMode === "walle" ? walleParts : projectMode === "plasma" ? plasmaThrusterParts : projectMode === "fpvracer" ? fpvRacerParts : projectMode === "scara" ? scaraParts : projectMode === "windharvester" ? windHarvesterParts : projectMode === "rcboat" ? rcBoatParts : projectMode === "submarine" ? submarineParts : projectMode === "robodog" ? robodogParts : projectMode === "humanoid" ? humanoidParts : projectMode === "mobilerobot" ? mobileRobotParts : projectMode === "ornithopter" ? ornithopterParts : projectMode === "observer" ? observerParts : projectMode === "vtol" ? vtolParts : projectMode === "usv" ? usvParts : projectMode === "mother" ? motherUavParts : projectMode === "long-range" ? longRangeParts : uavParts;
  const electricalConnections: ExportConnection[] = projectMode === "cncmill" ? cncMillElectricalConnections : projectMode === "largeprinter" ? largePrinterElectricalConnections : projectMode === "cybertool" ? cyberMultitoolElectricalConnections : projectMode === "endurance" ? enduranceElectricalConnections : projectMode === "deliverydrone" ? deliveryDroneElectricalConnections : projectMode === "printer3d" ? printer3dElectricalConnections : projectMode === "arglasses" ? arGlassesElectricalConnections : projectMode === "companion" ? companionElectricalConnections : projectMode === "filmingdrone" ? filmingDroneElectricalConnections : projectMode === "garden" ? gardenElectricalConnections : projectMode === "walle" ? walleElectricalConnections : projectMode === "plasma" ? plasmaThrusterElectricalConnections : projectMode === "fpvracer" ? fpvRacerElectricalConnections : projectMode === "scara" ? scaraElectricalConnections : projectMode === "windharvester" ? windHarvesterElectricalConnections : projectMode === "rcboat" ? rcBoatElectricalConnections : projectMode === "submarine" ? submarineElectricalConnections : projectMode === "robodog" ? robodogElectricalConnections : projectMode === "humanoid" ? humanoidElectricalConnections : projectMode === "mobilerobot" ? mobileRobotElectricalConnections : projectMode === "ornithopter" ? ornithopterElectricalConnections : projectMode === "observer" ? observerElectricalConnections : projectMode === "vtol" ? vtolElectricalConnections : projectMode === "usv" ? usvElectricalConnections : projectMode === "mother" ? motherUavElectricalConnections : projectMode === "long-range" ? longRangeElectricalConnections : uavElectricalConnections;
  const mechanicalConnections: ExportConnection[] = projectMode === "cncmill" ? cncMillMechanicalConnections : projectMode === "largeprinter" ? largePrinterMechanicalConnections : projectMode === "cybertool" ? cyberMultitoolMechanicalConnections : projectMode === "endurance" ? enduranceMechanicalConnections : projectMode === "deliverydrone" ? deliveryDroneMechanicalConnections : projectMode === "printer3d" ? printer3dMechanicalConnections : projectMode === "arglasses" ? arGlassesMechanicalConnections : projectMode === "companion" ? companionMechanicalConnections : projectMode === "filmingdrone" ? filmingDroneMechanicalConnections : projectMode === "garden" ? gardenMechanicalConnections : projectMode === "walle" ? walleMechanicalConnections : projectMode === "plasma" ? plasmaThrusterMechanicalConnections : projectMode === "fpvracer" ? fpvRacerMechanicalConnections : projectMode === "scara" ? scaraMechanicalConnections : projectMode === "windharvester" ? windHarvesterMechanicalConnections : projectMode === "rcboat" ? rcBoatMechanicalConnections : projectMode === "submarine" ? submarineMechanicalConnections : projectMode === "robodog" ? robodogMechanicalConnections : projectMode === "humanoid" ? humanoidMechanicalConnections : projectMode === "mobilerobot" ? mobileRobotMechanicalConnections : projectMode === "ornithopter" ? ornithopterMechanicalConnections : projectMode === "observer" ? observerMechanicalConnections : projectMode === "vtol" ? vtolMechanicalConnections : projectMode === "usv" ? usvMechanicalConnections : projectMode === "mother" ? motherUavMechanicalConnections : projectMode === "long-range" ? longRangeMechanicalConnections : uavMechanicalConnections;
  const instructionPreamble: InstructionPreamble = projectMode === "cncmill" ? cncMillInstructionPreamble : projectMode === "largeprinter" ? largePrinterInstructionPreamble : projectMode === "cybertool" ? cyberMultitoolInstructionPreamble : projectMode === "endurance" ? enduranceInstructionPreamble : projectMode === "deliverydrone" ? deliveryDroneInstructionPreamble : projectMode === "printer3d" ? printer3dInstructionPreamble : projectMode === "arglasses" ? arGlassesInstructionPreamble : projectMode === "companion" ? companionInstructionPreamble : projectMode === "filmingdrone" ? filmingDroneInstructionPreamble : projectMode === "garden" ? gardenInstructionPreamble : projectMode === "walle" ? walleInstructionPreamble : projectMode === "plasma" ? plasmaThrusterInstructionPreamble : projectMode === "fpvracer" ? fpvRacerInstructionPreamble : projectMode === "scara" ? scaraInstructionPreamble : projectMode === "windharvester" ? windHarvesterInstructionPreamble : projectMode === "rcboat" ? rcBoatInstructionPreamble : projectMode === "submarine" ? submarineInstructionPreamble : projectMode === "robodog" ? robodogInstructionPreamble : projectMode === "humanoid" ? humanoidInstructionPreamble : projectMode === "mobilerobot" ? mobileRobotInstructionPreamble : projectMode === "ornithopter" ? ornithopterInstructionPreamble : projectMode === "observer" ? observerInstructionPreamble : projectMode === "vtol" ? vtolInstructionPreamble : projectMode === "usv" ? usvInstructionPreamble : projectMode === "mother" ? motherUavInstructionPreamble : projectMode === "long-range" ? longRangeInstructionPreamble : uavInstructionPreamble;
  const instructionSteps: InstructionSection[] = projectMode === "cncmill" ? cncMillInstructionSteps : projectMode === "largeprinter" ? largePrinterInstructionSteps : projectMode === "cybertool" ? cyberMultitoolInstructionSteps : projectMode === "endurance" ? enduranceInstructionSteps : projectMode === "deliverydrone" ? deliveryDroneInstructionSteps : projectMode === "printer3d" ? printer3dInstructionSteps : projectMode === "arglasses" ? arGlassesInstructionSteps : projectMode === "companion" ? companionInstructionSteps : projectMode === "filmingdrone" ? filmingDroneInstructionSteps : projectMode === "garden" ? gardenInstructionSteps : projectMode === "walle" ? walleInstructionSteps : projectMode === "plasma" ? plasmaThrusterInstructionSteps : projectMode === "fpvracer" ? fpvRacerInstructionSteps : projectMode === "scara" ? scaraInstructionSteps : projectMode === "windharvester" ? windHarvesterInstructionSteps : projectMode === "rcboat" ? rcBoatInstructionSteps : projectMode === "submarine" ? submarineInstructionSteps : projectMode === "robodog" ? robodogInstructionSteps : projectMode === "humanoid" ? humanoidInstructionSteps : projectMode === "mobilerobot" ? mobileRobotInstructionSteps : projectMode === "ornithopter" ? ornithopterInstructionSteps : projectMode === "observer" ? observerInstructionSteps : projectMode === "vtol" ? vtolInstructionSteps : projectMode === "usv" ? usvInstructionSteps : projectMode === "mother" ? motherUavInstructionSteps : projectMode === "long-range" ? longRangeInstructionSteps : uavInstructionSteps;
  const total = useMemo(() => parts.reduce((sum, part) => sum + part.qty * part.price, 0), [parts]);
  const cfdAnalysis = useMemo(() => analyzeAerodynamics(cadProject), [cadProject]);

  function selectProject(mode: ProjectMode) {
    const nextParts = mode === "cncmill" ? cncMillParts : mode === "largeprinter" ? largePrinterParts : mode === "cybertool" ? cyberMultitoolParts : mode === "endurance" ? enduranceParts : mode === "deliverydrone" ? deliveryDroneParts : mode === "printer3d" ? printer3dParts : mode === "arglasses" ? arGlassesParts : mode === "companion" ? companionParts : mode === "filmingdrone" ? filmingDroneParts : mode === "garden" ? gardenParts : mode === "walle" ? walleParts : mode === "plasma" ? plasmaThrusterParts : mode === "fpvracer" ? fpvRacerParts : mode === "scara" ? scaraParts : mode === "windharvester" ? windHarvesterParts : mode === "rcboat" ? rcBoatParts : mode === "submarine" ? submarineParts : mode === "robodog" ? robodogParts : mode === "humanoid" ? humanoidParts : mode === "mobilerobot" ? mobileRobotParts : mode === "ornithopter" ? ornithopterParts : mode === "observer" ? observerParts : mode === "vtol" ? vtolParts : mode === "usv" ? usvParts : mode === "mother" ? motherUavParts : mode === "long-range" ? longRangeParts : uavParts;
    setProjectMode(mode);
    setSelectedPart(nextParts[0]);
    setCadProject(mode === "cncmill" ? buildCncMillCadProject() : mode === "largeprinter" ? buildLargePrinterCadProject() : mode === "cybertool" ? buildCyberMultitoolCadProject() : mode === "endurance" ? buildEnduranceCadProject() : mode === "deliverydrone" ? buildDeliveryDroneCadProject() : mode === "printer3d" ? buildPrinter3dCadProject() : mode === "arglasses" ? buildArGlassesCadProject() : mode === "companion" ? buildCompanionCadProject() : mode === "filmingdrone" ? buildFilmingDroneCadProject() : mode === "garden" ? buildGardenCadProject() : mode === "walle" ? buildWalleCadProject() : mode === "plasma" ? buildPlasmaThrusterCadProject() : mode === "fpvracer" ? buildFpvRacerCadProject() : mode === "scara" ? buildScaraCadProject() : mode === "windharvester" ? buildWindHarvesterCadProject() : mode === "rcboat" ? buildRcBoatCadProject() : mode === "submarine" ? buildSubmarineCadProject() : mode === "robodog" ? buildRobodogCadProject() : mode === "humanoid" ? buildHumanoidCadProject() : mode === "mobilerobot" ? buildMobileRobotCadProject() : mode === "ornithopter" ? buildOrnithopterCadProject() : mode === "observer" ? buildObserverCadProject() : mode === "vtol" ? buildVtolCadProject() : mode === "usv" ? buildUsvCadProject() : mode === "mother" ? buildMotherUavCadProject() : mode === "long-range" ? buildLongRangeCadProject() : buildCadProject());
    setVersion(mode === "mini" ? 3 : 1);
    setBudgetCap(mode === "cncmill" ? 680 : mode === "largeprinter" ? 900 : mode === "cybertool" ? 170 : mode === "endurance" ? 1250 : mode === "deliverydrone" ? 650 : mode === "printer3d" ? 330 : mode === "arglasses" ? 150 : mode === "companion" ? 80 : mode === "filmingdrone" ? 1200 : mode === "garden" ? 320 : mode === "walle" ? 350 : mode === "plasma" ? 2900000 : mode === "fpvracer" ? 650 : mode === "scara" ? 130 : mode === "windharvester" ? 250 : mode === "rcboat" ? 350 : mode === "submarine" ? 850 : mode === "robodog" ? 2300 : mode === "humanoid" ? 5500 : mode === "mobilerobot" ? 300 : mode === "ornithopter" ? 200 : mode === "observer" ? 1600 : mode === "vtol" ? 2000 : mode === "usv" ? 46000 : mode === "mother" ? 15000 : mode === "long-range" ? 1700 : 150);
    setLastRequest(mode === "cncmill" ? CNC_MILL.originalPrompt : mode === "largeprinter" ? LARGE_PRINTER.originalPrompt : mode === "cybertool" ? CYBER_MULTITOOL.originalPrompt : mode === "endurance" ? "Design a long-range blended-wing-body UAV with twin tractor motors on 8S, an H7 autopilot and GPS, LiDAR and mmWave sensing." : mode === "deliverydrone" ? "Design an autonomous GPS delivery quadcopter with a Pixhawk autopilot, telemetry, FPV and a supervised package drop mechanism." : mode === "printer3d" ? "Design a budget-friendly DIY Cartesian FDM 3D printer with Arduino Mega + RAMPS, NEMA 17 motion and a heated bed." : mode === "arglasses" ? "Design ESP32-S3 AR smart glasses with a magnified OLED overlay, camera, microphone, IMU head tracking and audio." : mode === "companion" ? "Design a desktop companion bot with an ESP32-S3, a 2.4-inch display and motion and environment sensors in a cute enclosure." : mode === "filmingdrone" ? "Design a 7-inch deadcat 6S carbon filming drone with an H7 flight controller, GPS, FPV and a vibration-damped GoPro mount." : mode === "garden" ? "Design an ESP32 smart garden irrigation system with soil sensing, six zone valves and a pump, controlled by a phone app." : mode === "walle" ? "Design an autonomous Wall-E companion robot with vision, voice, obstacle avoidance and expressive head and arms." : mode === "plasma" ? "Provide a conceptual pulsed plasma thruster reference with a superconducting ring, xenon injection and a magnetic nozzle." : mode === "fpvracer" ? "Design a 5-inch 6S carbon FPV racing drone with an H7 flight controller, analog FPV and GPS." : mode === "scara" ? "Design a four-axis SCARA robot arm with servo joints and a two-finger gripper for desktop manipulation." : mode === "windharvester" ? "Design a modular ESP32 wind harvester with a BLDC generator, MPPT converter and supercapacitor storage." : mode === "rcboat" ? "Design an RC boat with brushless propulsion and a winch-deployed tethered underwater camera pod." : mode === "submarine" ? "Design a compact waterproof mini submarine ROV for underwater exploration and observation." : mode === "robodog" ? "Design a pet-scale quadruped robot with 3 DOF per leg driven by twelve BLDC joint motors over CAN." : mode === "humanoid" ? "Design a research humanoid robot with AI compute, Dynamixel joints, RGB-D perception and balance sensing." : mode === "mobilerobot" ? "Design a STEM smart mobile robot for line following, obstacle avoidance and environmental monitoring." : mode === "ornithopter" ? "Design an educational dragonfly-style flapping-wing micro air vehicle for STEM flight research." : mode === "observer" ? "Design a civil long-endurance camera multirotor for inspection, monitoring and mapping." : mode === "vtol" ? "Design a civil carbon-fiber VTOL survey drone for autonomous mapping and inspection." : mode === "usv" ? "Design a civil autonomous surface vessel for environmental monitoring and hydrographic mapping." : mode === "mother" ? "Design a peaceful civil Mother UAV carrier for six inspection micro-UAVs." : mode === "long-range" ? "Design a long-range fixed-wing UAV for autonomous missions." : "Design one UAV at a cheap price: lightweight, single-unit and suitable for a practical STEM build.");
    setActivity(mode === "cncmill" ? "Đã nạp mẫu Desktop CNC Mill: khung 2040, Arduino + GRBL, ba NEMA 17 và spindle 500W." : mode === "largeprinter" ? "Đã nạp mẫu Large 3D Printer: SKR 2, TMC2209 êm ái, dual-Z, BLTouch và bàn nhiệt 300mm." : mode === "cybertool" ? "Đã nạp Cyber Multi-tool: công cụ nghiên cứu bảo mật sub-GHz/NFC/RFID/IR — chỉ dùng hợp pháp trên thiết bị của bạn." : mode === "endurance" ? "Đã nạp mẫu Endurance Drone: blended wing carbon 8S, hai tractor motor, LiDAR và mmWave." : mode === "deliverydrone" ? "Đã nạp mẫu Autonomous Delivery Drone: Pixhawk, GPS, telemetry và cơ cấu thả gói có giám sát." : mode === "printer3d" ? "Đã nạp mẫu 3D Printer Budget: khung 2020, Arduino Mega + RAMPS, hotend MK8 và bàn nhiệt." : mode === "arglasses" ? "Đã nạp mẫu AR Smart Glasses: ESP32-S3, ESP32-CAM, OLED phóng đại, mic và head tracking." : mode === "companion" ? "Đã nạp mẫu Desktop Companion Bot: ESP32-S3, màn TFT 2.4\", cảm biến chuyển động và môi trường." : mode === "filmingdrone" ? "Đã nạp mẫu Professional Filming Drone: khung 7-inch deadcat, GoPro chống rung, 6S." : mode === "garden" ? "Đã nạp mẫu Smart Garden Irrigation: ESP32, cảm biến ẩm đất, sáu van và bơm." : mode === "walle" ? "Đã nạp mẫu Autonomous Wall-E: RPi 5 + ESP32, thị giác, giọng nói và đầu/tay biểu cảm." : mode === "plasma" ? "Đã nạp tham chiếu Pulsed Plasma Thruster: động cơ đẩy vũ trụ khái niệm (cảnh báo HV/cryogenic)." : mode === "fpvracer" ? "Đã nạp mẫu FPV Racing Drone: quad 5-inch 6S carbon, FC H7, FPV analog và GPS." : mode === "scara" ? "Đã nạp mẫu SCARA Arm: cánh tay 4 trục với gripper 2 ngón, điều khiển ESP32." : mode === "windharvester" ? "Đã nạp mẫu Modular Wind Harvester: turbine gió, MPPT và bank siêu tụ." : mode === "rcboat" ? "Đã nạp mẫu RC Submersible Boat: thuyền RC có camera thả bằng tời và FPV." : mode === "submarine" ? "Đã nạp mẫu Mini Submarine ROV: sáu thruster, cảm biến độ sâu và thân acrylic kín nước." : mode === "robodog" ? "Đã nạp mẫu Robodog: bốn chân 3 DOF, mười hai khớp BLDC trên bus CAN." : mode === "humanoid" ? "Đã nạp mẫu Humanoid Robot: khung nhôm, khớp Dynamixel, tri giác RGB-D và cân bằng." : mode === "mobilerobot" ? "Đã nạp mẫu Smart Mobile Robot: dò line, tránh vật cản và giám sát môi trường." : mode === "ornithopter" ? "Đã nạp mẫu Dragonfly Ornithopter STEM: máy bay vỗ cánh mô phỏng sinh học, FPV, không payload do thám." : mode === "observer" ? "Đã nạp mẫu quadcopter quan sát dân sự với gimbal 2 trục, telemetry tầm xa và camera thiếu sáng." : mode === "vtol" ? "Đã nạp mẫu VTOL quadplane dân sự: cất/hạ cánh thẳng đứng, bay cruise bằng cánh, payload khảo sát." : mode === "usv" ? "Đã nạp mẫu USV khảo sát dân sự với sonar, đầu dò nước và hai waterjet điện." : mode === "mother" ? "Đã nạp mẫu Mother UAV dân sự với sáu khoang sạc và UAV khảo sát con." : mode === "long-range" ? "Đã nạp mẫu fixed-wing: 39 linh kiện, 14 kết nối điện và 25 bước chế tạo." : "Đã nạp mẫu Budget Mini UAV.");
    setPartDetailOpen(false);
    setCommitted(false);
    setProjectMenuOpen(false);
    setActiveTab("INFO");
  }

  async function submitPrompt() {
    const value = prompt.trim();
    if (!value) return;
    const runId = ++processRun.current;
    setCadBusy(true);
    setProcessError(false);
    setProcessStage(-1);
    setLastRequest(value);
    setActivity(`AI đang tối ưu BOM, mua sắm, mô phỏng và lắp ráp cho yêu cầu: “${value}”`);
    setToolRuns(initialToolRuns.map((tool) => ({ ...tool, state: "RUNNING", time: "…" })));
    setPrompt("");
    setCommitted(false);
    const started = performance.now();
    try {
      const request = projectMode === "cncmill" ? Promise.resolve(new Response(JSON.stringify(buildCncMillCadProject(value, version)), { status: 200, headers: { "content-type": "application/json" } })) : projectMode === "largeprinter" ? Promise.resolve(new Response(JSON.stringify(buildLargePrinterCadProject(value, version)), { status: 200, headers: { "content-type": "application/json" } })) : projectMode === "cybertool" ? Promise.resolve(new Response(JSON.stringify(buildCyberMultitoolCadProject(value, version)), { status: 200, headers: { "content-type": "application/json" } })) : projectMode === "endurance" ? Promise.resolve(new Response(JSON.stringify(buildEnduranceCadProject(value, version)), { status: 200, headers: { "content-type": "application/json" } })) : projectMode === "deliverydrone" ? Promise.resolve(new Response(JSON.stringify(buildDeliveryDroneCadProject(value, version)), { status: 200, headers: { "content-type": "application/json" } })) : projectMode === "printer3d" ? Promise.resolve(new Response(JSON.stringify(buildPrinter3dCadProject(value, version)), { status: 200, headers: { "content-type": "application/json" } })) : projectMode === "arglasses" ? Promise.resolve(new Response(JSON.stringify(buildArGlassesCadProject(value, version)), { status: 200, headers: { "content-type": "application/json" } })) : projectMode === "companion" ? Promise.resolve(new Response(JSON.stringify(buildCompanionCadProject(value, version)), { status: 200, headers: { "content-type": "application/json" } })) : projectMode === "filmingdrone" ? Promise.resolve(new Response(JSON.stringify(buildFilmingDroneCadProject(value, version)), { status: 200, headers: { "content-type": "application/json" } })) : projectMode === "garden" ? Promise.resolve(new Response(JSON.stringify(buildGardenCadProject(value, version)), { status: 200, headers: { "content-type": "application/json" } })) : projectMode === "walle" ? Promise.resolve(new Response(JSON.stringify(buildWalleCadProject(value, version)), { status: 200, headers: { "content-type": "application/json" } })) : projectMode === "plasma" ? Promise.resolve(new Response(JSON.stringify(buildPlasmaThrusterCadProject(value, version)), { status: 200, headers: { "content-type": "application/json" } })) : projectMode === "fpvracer" ? Promise.resolve(new Response(JSON.stringify(buildFpvRacerCadProject(value, version)), { status: 200, headers: { "content-type": "application/json" } })) : projectMode === "scara" ? Promise.resolve(new Response(JSON.stringify(buildScaraCadProject(value, version)), { status: 200, headers: { "content-type": "application/json" } })) : projectMode === "windharvester" ? Promise.resolve(new Response(JSON.stringify(buildWindHarvesterCadProject(value, version)), { status: 200, headers: { "content-type": "application/json" } })) : projectMode === "rcboat" ? Promise.resolve(new Response(JSON.stringify(buildRcBoatCadProject(value, version)), { status: 200, headers: { "content-type": "application/json" } })) : projectMode === "submarine" ? Promise.resolve(new Response(JSON.stringify(buildSubmarineCadProject(value, version)), { status: 200, headers: { "content-type": "application/json" } })) : projectMode === "robodog" ? Promise.resolve(new Response(JSON.stringify(buildRobodogCadProject(value, version)), { status: 200, headers: { "content-type": "application/json" } })) : projectMode === "humanoid" ? Promise.resolve(new Response(JSON.stringify(buildHumanoidCadProject(value, version)), { status: 200, headers: { "content-type": "application/json" } })) : projectMode === "mobilerobot" ? Promise.resolve(new Response(JSON.stringify(buildMobileRobotCadProject(value, version)), { status: 200, headers: { "content-type": "application/json" } })) : projectMode === "ornithopter" ? Promise.resolve(new Response(JSON.stringify(buildOrnithopterCadProject(value, version)), { status: 200, headers: { "content-type": "application/json" } })) : projectMode === "observer" ? Promise.resolve(new Response(JSON.stringify(buildObserverCadProject(value, version)), { status: 200, headers: { "content-type": "application/json" } })) : projectMode === "vtol" ? Promise.resolve(new Response(JSON.stringify(buildVtolCadProject(value, version)), { status: 200, headers: { "content-type": "application/json" } })) : projectMode === "usv" ? Promise.resolve(new Response(JSON.stringify(buildUsvCadProject(value, version)), { status: 200, headers: { "content-type": "application/json" } })) : projectMode === "mother" ? Promise.resolve(new Response(JSON.stringify(buildMotherUavCadProject(value, version)), { status: 200, headers: { "content-type": "application/json" } })) : projectMode === "long-range" ? Promise.resolve(new Response(JSON.stringify(buildLongRangeCadProject(value, version)), { status: 200, headers: { "content-type": "application/json" } })) : fetch("/api/cad", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ request: `${project.name}: ${value}. Budget ceiling USD ${budgetCap}. Optimize for ${optimization}. Sourcing market ${sourcingMarket}.`, baseVersion: version, constraints: cadProject.constraints }),
      });
      const progress = (async () => {
        await new Promise((resolve) => window.setTimeout(resolve, 260));
        for (let index = 0; index < designStages.length; index += 1) {
          if (processRun.current !== runId) return;
          setProcessStage(index);
          await new Promise((resolve) => window.setTimeout(resolve, 360));
        }
      })();
      const [response] = await Promise.all([request, progress]);
      if (!response.ok) throw new Error("CAD API rejected the request");
      const result = await response.json() as CadProjectResult;
      const cfdResult = analyzeAerodynamics(result);
      const elapsed = Math.max(0.1, (performance.now() - started) / 1000);
      setCadProject(result);
      setToolRuns([
        { name: "cad.generate_feature_tree", state: "DONE", time: `${(elapsed * 0.32).toFixed(1)}s` },
        { name: "cad.validate_design", state: result.validation.passed ? "PASSED" : "REVIEW", time: `${(elapsed * 0.18).toFixed(1)}s` },
        { name: "cad.render_preview", state: "DONE", time: `${(elapsed * 0.22).toFixed(1)}s` },
        { name: `${cfdResult.mode.toLowerCase()}.preflight_analysis`, state: cfdResult.passed ? "PASSED" : "REVIEW", time: `${(elapsed * 0.28).toFixed(1)}s` },
      ]);
      setActivity(result.validation.passed
        ? `Bản nháp ${result.draftId} đạt ${result.validation.checksPassed}/${result.validation.checksTotal} kiểm tra CAD; ${cfdResult.mode} ${cfdResult.score}/100.`
        : `Bản nháp ${result.draftId} cần xử lý lỗi trước khi xác nhận.`);
      setProcessStage(designStages.length);
      setActiveTab("MECH");
    } catch {
      processRun.current += 1;
      setProcessError(true);
      setToolRuns(initialToolRuns.map((tool) => ({ ...tool, state: "ERROR", time: "—" })));
      setActivity("Không thể hoàn tất yêu cầu CAD. Hãy kiểm tra lại ràng buộc và thử lại.");
    } finally {
      setCadBusy(false);
    }
  }

  async function exportProject() {
    setExportBusy(true);
    setActivity("Đang tạo gói cấu hình, BOM, kết nối, hướng dẫn và ảnh tổng quan…");
    try {
      const archive = await buildProjectZip({
        projectName: project.name,
        projectId: cadProject.projectId,
        version,
        status: committed ? "committed" : "draft",
        originalPrompt: project.originalPrompt,
        projectDescription: project.description,
        parts,
        cad: cadProject,
        mcp: toolRuns,
        totalBudget: total,
        componentCount: project.componentCount,
        extraParts: [],
        expandPartIds: projectMode === "mini" ? ["brushless_motors", "drone_arms", "propellers", "motor_mounts"] : [],
        electricalConnections,
        mechanicalConnections,
        instructionPreamble,
        instructionSteps,
        imageTags: project.tags,
        plan: project.plan,
        notes: project.notes,
        checklist: projectMode === "usv" ? ["Hull compartments pass the leak test", "48V insulation and emergency disconnect pass", "AIS, GNSS, radar and recovery beacon are operational", "Twin waterjets respond correctly during restrained testing", "Trim and reserve buoyancy are recorded", "HYDRO-LITE resistance, propulsion symmetry and sensor-clearance checks pass before water trials"] : ["Continuity test passes before battery connection", "Receiver failsafe is configured", "Motor direction is verified without propellers", "Propellers are installed in the correct positions", "Center of gravity is within the approved range", "CFD-LITE clearance, symmetry and reference drag checks pass before physical assembly"],
      });
      const blob = new Blob([archive.bytes as BlobPart], { type: "application/zip" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = archive.filename;
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      setActivity("Đã xuất ZIP hoàn chỉnh với 6 tệp dự án.");
    } catch {
      setActivity("Không thể tạo gói ZIP. Hãy tải lại dự án và thử lần nữa.");
    } finally {
      setExportBusy(false);
    }
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <button className="brand" aria-label="Chọn dự án DIY STEM" onClick={() => setProjectMenuOpen((value) => !value)}>
          <span className="brand-mark">D↗</span><span>{project.name}</span><i>⌄</i>
        </button>
        {projectMenuOpen && <div className="project-menu"><span>PROJECT TEMPLATES</span><button className={projectMode === "mini" ? "active" : ""} onClick={() => selectProject("mini")}><b>BUDGET MINI UAV</b><small>30 components · quadcopter</small></button><button className={projectMode === "long-range" ? "active" : ""} onClick={() => selectProject("long-range")}><b>LONG RANGE UAV</b><small>39 components · fixed-wing</small></button><button className={projectMode === "mother" ? "active" : ""} onClick={() => selectProject("mother")}><b>MOTHER UAV CARRIER</b><small>6 micro-UAV docks · civil research</small></button><button className={projectMode === "usv" ? "active" : ""} onClick={() => selectProject("usv")}><b>AUTONOMOUS SURVEY USV</b><small>hydrography · water quality</small></button><button className={projectMode === "vtol" ? "active" : ""} onClick={() => selectProject("vtol")}><b>VTOL SURVEY DRONE</b><small>26 components · quadplane</small></button><button className={projectMode === "observer" ? "active" : ""} onClick={() => selectProject("observer")}><b>AERIAL OBSERVATION MULTIROTOR</b><small>camera quad · inspection</small></button><button className={projectMode === "ornithopter" ? "active" : ""} onClick={() => selectProject("ornithopter")}><b>DRAGONFLY ORNITHOPTER</b><small>flapping-wing MAV · STEM</small></button><button className={projectMode === "mobilerobot" ? "active" : ""} onClick={() => selectProject("mobilerobot")}><b>SMART MOBILE ROBOT</b><small>STM32 + ESP32-CAM · ground</small></button><button className={projectMode === "humanoid" ? "active" : ""} onClick={() => selectProject("humanoid")}><b>HUMANOID ROBOT</b><small>Jetson Orin · Dynamixel</small></button><button className={projectMode === "robodog" ? "active" : ""} onClick={() => selectProject("robodog")}><b>ROBODOG PROJECT</b><small>quadruped · 12× BLDC</small></button><button className={projectMode === "submarine" ? "active" : ""} onClick={() => selectProject("submarine")}><b>MINI SUBMARINE DRONE</b><small>underwater ROV · 6 thrusters</small></button><button className={projectMode === "rcboat" ? "active" : ""} onClick={() => selectProject("rcboat")}><b>RC SUBMERSIBLE BOAT</b><small>RC boat · tethered camera</small></button><button className={projectMode === "windharvester" ? "active" : ""} onClick={() => selectProject("windharvester")}><b>MODULAR WIND HARVESTER</b><small>wind energy · MPPT + supercap</small></button><button className={projectMode === "scara" ? "active" : ""} onClick={() => selectProject("scara")}><b>SCARA ARM ROBOT</b><small>4-axis arm · gripper</small></button><button className={projectMode === "fpvracer" ? "active" : ""} onClick={() => selectProject("fpvracer")}><b>FPV RACING DRONE</b><small>5-inch 6S · carbon</small></button><button className={projectMode === "walle" ? "active" : ""} onClick={() => selectProject("walle")}><b>AUTONOMOUS WALL-E ROBOT</b><small>tracked · vision + voice</small></button><button className={projectMode === "garden" ? "active" : ""} onClick={() => selectProject("garden")}><b>SMART GARDEN IRRIGATION</b><small>6 zones · ESP32</small></button><button className={projectMode === "plasma" ? "active" : ""} onClick={() => selectProject("plasma")}><b>PULSED PLASMA THRUSTER</b><small>space propulsion · reference</small></button><button className={projectMode === "filmingdrone" ? "active" : ""} onClick={() => selectProject("filmingdrone")}><b>PROFESSIONAL FILMING DRONE</b><small>7-inch · GoPro payload</small></button><button className={projectMode === "companion" ? "active" : ""} onClick={() => selectProject("companion")}><b>DESKTOP COMPANION BOT</b><small>ESP32-S3 · TFT</small></button><button className={projectMode === "arglasses" ? "active" : ""} onClick={() => selectProject("arglasses")}><b>AR SMART GLASSES</b><small>ESP32-S3 · OLED overlay</small></button><button className={projectMode === "printer3d" ? "active" : ""} onClick={() => selectProject("printer3d")}><b>3D PRINTER BUDGET</b><small>2020 frame · RAMPS</small></button><button className={projectMode === "deliverydrone" ? "active" : ""} onClick={() => selectProject("deliverydrone")}><b>AUTONOMOUS DELIVERY DRONE</b><small>Pixhawk · supervised drop</small></button><button className={projectMode === "endurance" ? "active" : ""} onClick={() => selectProject("endurance")}><b>ENDURANCE DRONE</b><small>blended wing · 8S</small></button><button className={projectMode === "cncmill" ? "active" : ""} onClick={() => selectProject("cncmill")}><b>DESKTOP CNC MILL</b><small>GRBL · 3-axis · spindle</small></button><button className={projectMode === "largeprinter" ? "active" : ""} onClick={() => selectProject("largeprinter")}><b>LARGE 3D PRINTER</b><small>SKR 2 · TMC2209 · 300mm</small></button><button className={projectMode === "cybertool" ? "active" : ""} onClick={() => selectProject("cybertool")}><b>CYBER MULTI-TOOL</b><small>security research · legal use</small></button></div>}
        <nav className="top-tabs" aria-label="Các phần của dự án">
          {tabs.map((tab) => <button key={tab.id} className={activeTab === tab.id ? "active" : ""} onClick={() => { setActiveTab(tab.id); if (tab.id !== "PARTS") setPartDetailOpen(false); }}><span>{tab.icon}</span>{tab.label}</button>)}
        </nav>
        <div className="top-actions"><button className="download-button" disabled={exportBusy} onClick={exportProject}><span>⇩</span>{exportBusy ? "PACKING…" : "DOWNLOAD"}</button><span className="published-badge">◎ PUBLISHED</span></div>
      </header>

      <div className={`workbench ${chatCollapsed ? "chat-collapsed" : ""}`}>
        <aside className="studio-chat">
          <div className="chat-head"><b>▱ CHAT</b><button onClick={() => setChatCollapsed(true)} aria-label="Thu gọn chat">◫</button></div>
          <div className="chat-scroll">
            <p className="chat-intro">Đặt câu hỏi hoặc chỉnh sửa thiết kế của bạn.</p>
            <div className="chat-message user-message">
              <span>GIÁO VIÊN · 09:14</span>
              <p>{lastRequest}</p>
            </div>
            <div className="chat-message ai-message">
              <span><i>AI</i> DIY ENGINE · 09:15</span>
              <p>{cadBusy ? "Đang phân tích yêu cầu và đồng bộ thiết kế điện, cơ khí, CAD…" : processError ? "Quá trình tạo thiết kế bị gián đoạn. Hãy điều chỉnh yêu cầu và thử lại." : `Đã nạp ${project.name} với ${project.componentCount} thành phần, mô hình CAD, wiring và quy trình chế tạo.`}</p>
              <ul><li>{parts.filter((part) => part.category === "electrical").length} nhóm linh kiện điện</li><li>{parts.filter((part) => part.category === "mechanical").length} nhóm linh kiện cơ khí</li><li>Tổng dự toán · ${total.toFixed(2)}</li></ul>
            </div>
            <DesignProcess parts={parts} busy={cadBusy} stage={processStage} error={processError} score={cadProject.validation.score} budgetCap={budgetCap} optimization={optimization} cfd={cfdAnalysis} onOpenPart={(part) => { setSelectedPart(part); setPartDetailOpen(true); setActiveTab("PARTS"); }} />
            <div className="activity-card"><span>HOẠT ĐỘNG MỚI NHẤT</span><p>{activity}</p></div>
          </div>
          <div className="chat-compose">
            <div className="quick-actions">{projectMode === "cncmill" ? <><button onClick={() => setPrompt("Improve the gantry rigidity and reduce backlash for more accurate cuts")}>+ STIFFEN GANTRY</button><button onClick={() => setPrompt("Tune the GRBL acceleration and feed rates for cleaner finishes")}>+ TUNE FEEDS</button></> : projectMode === "largeprinter" ? <><button onClick={() => setPrompt("Sync the dual-Z axes and square the frame to remove layer shifts")}>+ SYNC DUAL-Z</button><button onClick={() => setPrompt("Tune the part-cooling ducts for cleaner overhangs on large prints")}>+ TUNE COOLING</button></> : projectMode === "cybertool" ? <><button onClick={() => setPrompt("Improve the RF antenna layout and shielding for cleaner reception on my own devices")}>+ TUNE ANTENNAS</button><button onClick={() => setPrompt("Summarize the authorized/legal-use checklist and safe RF power limits")}>+ LEGAL CHECKLIST</button></> : projectMode === "endurance" ? <><button onClick={() => setPrompt("Optimize the blended wing for lower drag and longer endurance")}>+ TUNE WING</button><button onClick={() => setPrompt("Rebalance the 8S battery tray for the correct cruise center of gravity")}>+ BALANCE CG</button></> : projectMode === "deliverydrone" ? <><button onClick={() => setPrompt("Improve the supervised package drop mechanism for reliable release")}>+ TUNE DROP</button><button onClick={() => setPrompt("Tighten the geofence and failsafe behavior for safer autonomy")}>+ HARDEN SAFETY</button></> : projectMode === "printer3d" ? <><button onClick={() => setPrompt("Improve belt tensioning and frame rigidity to reduce print artifacts")}>+ TUNE MOTION</button><button onClick={() => setPrompt("Optimize the cooling ducts for cleaner overhangs and bridges")}>+ TUNE COOLING</button></> : projectMode === "arglasses" ? <><button onClick={() => setPrompt("Align the magnifier optic for a sharper, comfortable virtual image")}>+ TUNE OPTICS</button><button onClick={() => setPrompt("Rebalance the temples so the glasses sit comfortably and evenly")}>+ BALANCE FIT</button></> : projectMode === "companion" ? <><button onClick={() => setPrompt("Add more expressive faces and idle animations to the display")}>+ ADD FACES</button><button onClick={() => setPrompt("Improve the enclosure layout for easier assembly and cable routing")}>+ TIDY LAYOUT</button></> : projectMode === "filmingdrone" ? <><button onClick={() => setPrompt("Improve the GoPro anti-vibration mount for smoother cinematic footage")}>+ TUNE DAMPING</button><button onClick={() => setPrompt("Rebalance the battery and payload for a neutral center of gravity")}>+ BALANCE CG</button></> : projectMode === "garden" ? <><button onClick={() => setPrompt("Tune the per-zone watering schedule from the soil-moisture thresholds")}>+ TUNE ZONES</button><button onClick={() => setPrompt("Improve the enclosure sealing and cable glands for wet weather")}>+ SEAL BOX</button></> : projectMode === "walle" ? <><button onClick={() => setPrompt("Tune the obstacle-avoidance behavior for smoother navigation")}>+ TUNE AVOIDANCE</button><button onClick={() => setPrompt("Add more expressive head and arm animations for interactions")}>+ ADD EXPRESSIONS</button></> : projectMode === "plasma" ? <><button onClick={() => setPrompt("Summarize the high-voltage and cryogenic safety interlocks for the test plan")}>+ SAFETY REVIEW</button><button onClick={() => setPrompt("Outline the thermal-vacuum and vibration qualification sequence")}>+ QUAL PLAN</button></> : projectMode === "fpvracer" ? <><button onClick={() => setPrompt("Tune the PID and filtering for smooth, locked-in freestyle flight")}>+ TUNE PID</button><button onClick={() => setPrompt("Rebalance the stack and battery for a neutral center of gravity")}>+ BALANCE CG</button></> : projectMode === "scara" ? <><button onClick={() => setPrompt("Improve the joint stiffness and backlash for more repeatable placement")}>+ TIGHTEN JOINTS</button><button onClick={() => setPrompt("Optimize the gripper fingers for a more secure hold on small parts")}>+ TUNE GRIPPER</button></> : projectMode === "windharvester" ? <><button onClick={() => setPrompt("Optimize the blade pitch and balance for more output in light wind")}>+ TUNE BLADES</button><button onClick={() => setPrompt("Improve the MPPT tracking for faster supercapacitor charging")}>+ TUNE MPPT</button></> : projectMode === "rcboat" ? <><button onClick={() => setPrompt("Improve the deck hatch and shaft seals to keep the hull watertight")}>+ SEAL HULL</button><button onClick={() => setPrompt("Tune the camera pod ballast and winch for smooth deployment")}>+ TUNE POD</button></> : projectMode === "submarine" ? <><button onClick={() => setPrompt("Rebalance the ballast for neutral buoyancy and level trim")}>+ TRIM BALLAST</button><button onClick={() => setPrompt("Improve the end-cap seals and cable glands for deeper dives")}>+ SEAL HULL</button></> : projectMode === "robodog" ? <><button onClick={() => setPrompt("Tune the walking gait for stability on uneven ground")}>+ TUNE GAIT</button><button onClick={() => setPrompt("Rebalance the body around the battery for a lower center of gravity")}>+ BALANCE BODY</button></> : projectMode === "humanoid" ? <><button onClick={() => setPrompt("Improve the standing balance controller using the foot pressure arrays")}>+ TUNE BALANCE</button><button onClick={() => setPrompt("Reduce upper-body mass to lower the center of gravity")}>+ TRIM MASS</button></> : projectMode === "mobilerobot" ? <><button onClick={() => setPrompt("Tune the line-following PID for smoother tracking at higher speed")}>+ TUNE LINE PID</button><button onClick={() => setPrompt("Reorganize the sensor stack to reduce I2C noise and wiring clutter")}>+ TIDY SENSORS</button></> : projectMode === "ornithopter" ? <><button onClick={() => setPrompt("Tune the flapping linkage for symmetric left/right wing travel")}>+ TUNE FLAPPING</button><button onClick={() => setPrompt("Reduce airframe weight while keeping the wing spars stiff enough")}>+ TRIM WEIGHT</button></> : projectMode === "observer" ? <><button onClick={() => setPrompt("Optimize the gimbal mount to reduce vibration in the camera footage")}>+ STEADY GIMBAL</button><button onClick={() => setPrompt("Rebalance the battery tray for level hover and longer endurance")}>+ BALANCE CG</button></> : projectMode === "vtol" ? <><button onClick={() => setPrompt("Optimize the VTOL transition schedule for a smoother hover-to-cruise handoff")}>+ TUNE TRANSITION</button><button onClick={() => setPrompt("Rebalance the battery tray for the correct center of gravity in cruise")}>+ BALANCE CG</button></> : projectMode === "usv" ? <><button onClick={() => setPrompt("Optimize the sonar gondola for lower hydrodynamic drag and easier servicing")}>+ OPTIMIZE SONAR</button><button onClick={() => setPrompt("Rebalance the battery bank for neutral trim and reserve buoyancy")}>+ BALANCE HULL</button></> : projectMode === "mother" ? <><button onClick={() => setPrompt("Optimize the six docking cells for faster ground servicing and safer charging")}>+ OPTIMIZE DOCKS</button><button onClick={() => setPrompt("Rebalance the carrier around the battery enclosure and service rack")}>+ BALANCE CARRIER</button></> : <><button onClick={() => setPrompt("Add removable propeller guards and keep the project under budget")}>+ PROP GUARDS</button><button onClick={() => setPrompt("Move the LiPo for better center of gravity and update the assembly guide")}>+ BALANCE LIPO</button></>}</div>
            <div className="compose-box">
              <textarea value={prompt} onChange={(event) => setPrompt(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); submitPrompt(); } }} placeholder="Mô tả sản phẩm, mục tiêu, ngân sách và thời hạn…" aria-label="Mô tả yêu cầu sản phẩm" />
              <div className="planner-inputs">
                <label><span>BUDGET USD</span><input type="number" min="20" step="10" value={budgetCap} onChange={(event) => setBudgetCap(Math.max(20, Number(event.target.value) || 20))} /></label>
                <label><span>PRIORITY</span><select value={optimization} onChange={(event) => setOptimization(event.target.value)}><option value="balanced">BALANCED</option><option value="lowest-cost">LOWEST COST</option><option value="fastest">FASTEST</option><option value="reliable">RELIABLE</option></select></label>
                <label><span>MARKET</span><select value={sourcingMarket} onChange={(event) => setSourcingMarket(event.target.value)}><option value="vn-global">VN + GLOBAL</option><option value="vn-only">VN ONLY</option><option value="global">GLOBAL</option></select></label>
              </div>
              <div><button className="model-button">MCP CAD⌄</button><button className="send-button" onClick={submitPrompt} disabled={!prompt.trim() || cadBusy} aria-label="Gửi yêu cầu">{cadBusy ? "…" : "↗"}</button></div>
            </div>
          </div>
        </aside>

        {chatCollapsed && <button className="chat-restore" onClick={() => setChatCollapsed(false)} aria-label="Mở chat">▱</button>}

        <section className="project-stage">
          {activeTab === "INFO" && <InfoView project={project} cadProject={cadProject} total={total} version={version} committed={committed} toolRuns={toolRuns} electricalCount={electricalConnections.length} onOpenMech={() => setActiveTab("MECH")} />}
          {activeTab === "PARTS" && <PartsView projectName={project.name} parts={parts} componentCount={project.componentCount} connections={{ electrical: electricalConnections, mechanical: mechanicalConnections }} selectedPart={selectedPart} onSelect={(part) => { setSelectedPart(part); setPartDetailOpen(true); }} detailOpen={partDetailOpen} onBack={() => setPartDetailOpen(false)} total={total} view={partView} onView={setPartView} search={partSearch} onSearch={setPartSearch} category={partCategory} onCategory={setPartCategory} />}
          {activeTab === "WIRING" && (projectMode !== "mini" ? <LongRangeWiringView projectName={project.name} parts={parts} connections={electricalConnections} onOpenPart={(part) => { setSelectedPart(part); setPartDetailOpen(true); setActiveTab("PARTS"); }} /> : <WiringView parts={parts} onOpenPart={(part) => { setSelectedPart(part); setPartDetailOpen(true); setActiveTab("PARTS"); }} />)}
          {activeTab === "MECH" && <MechView version={version} cadProject={cadProject} committed={committed} onCommit={() => { setCommitted(true); setVersion((value) => value + 1); setActivity("Phiên bản CAD đã được xác nhận và khóa lịch sử chỉnh sửa."); }} />}
          {activeTab === "INSTRUCTIONS" && <Instructions parts={parts} preamble={instructionPreamble} steps={instructionSteps} mechanicalCount={mechanicalConnections.length} onOpenPart={(part) => { setSelectedPart(part); setPartDetailOpen(true); setActiveTab("PARTS"); }} />}
        </section>
      </div>
    </main>
  );
}

function DesignProcess({ parts, busy, stage, error, score, budgetCap, optimization, cfd, onOpenPart }: { parts: ProjectPart[]; busy: boolean; stage: number; error: boolean; score: number; budgetCap: number; optimization: string; cfd: CfdAnalysisResult; onOpenPart: (part: ProjectPart) => void }) {
  const [expanded, setExpanded] = useState(true);
  const completed = error ? Math.max(0, stage) : busy ? Math.max(0, stage) : designStages.length;
  return <section className={`design-process ${busy ? "running" : error ? "failed" : "ready"}`} aria-live="polite">
    <div className="design-queue">
      <span>{busy ? stage < 0 ? "WAITING IN QUEUE" : "AI PRODUCT WORKFLOW" : error ? "DESIGN NEEDS ATTENTION" : "OPTIMIZED PRODUCT PLAN"}</span>
      <button onClick={() => setExpanded((value) => !value)} aria-label={expanded ? "Thu gọn quy trình" : "Mở quy trình"}>{busy ? `${completed}/${designStages.length}` : error ? "RETRY" : `${score}/100`} {expanded ? "−" : "+"}</button>
    </div>
    {expanded && <><div className="design-stage-list">
      {designStages.map((item, index) => {
        const state = error && index === stage ? "error" : (!busy && !error) || index < stage ? "done" : busy && index === stage ? "active" : "pending";
        return <div className={`design-stage ${state}`} key={item.label}>
          <span className="stage-state">{state === "done" ? "✓" : state === "active" ? "◷" : state === "error" ? "!" : "○"}</span>
          <div><b><i>{item.phase}</i> · {item.label}{state === "active" ? "…" : ""}</b><small>{item.detail}</small><em>OUTPUT · {item.output}</em></div>
        </div>;
      })}
    </div>
    {!busy && !error && <div className="decision-summary">
      <span>OPTIMIZATION SUMMARY · {optimization.replace("-", " ").toUpperCase()}</span>
      <div className="budget-allocation"><span><b>${(budgetCap * .55).toFixed(0)}</b><small>ELECTRONICS · 55%</small></span><span><b>${(budgetCap * .25).toFixed(0)}</b><small>MECHANICAL · 25%</small></span><span><b>${(budgetCap * .12).toFixed(0)}</b><small>MATERIALS · 12%</small></span><span><b>${(budgetCap * .08).toFixed(0)}</b><small>BUFFER · 8%</small></span></div>
      <p><b>Purchase order</b> — Đặt bộ điều khiển, hệ động lực và liên lạc trước; vật liệu cơ khí mua sau khi chốt CAD.</p>
      <p><b>Simulation gate</b> — Chỉ chế tạo thật sau khi wiring, nguồn/tải, bố trí khối lượng và {cfd.domain === "marine" ? "thủy động lực" : "khí động học"} đều đạt.</p>
      <div className="workflow-deliverables"><span>✓ BOM + SOURCES</span><span>✓ PURCHASE TRACKER</span><span>✓ CAD/WIRING SIM</span><span>✓ {cfd.mode} PREFLIGHT</span><span>✓ BUILD GUIDE</span><span>✓ USER GUIDE</span></div>
      <section className={`cfd-gate ${cfd.passed ? "pass" : "review"}`}>
        <header><span>{cfd.mode} · {cfd.domain === "marine" ? "HYDRODYNAMIC" : "AERODYNAMIC"} TEST GATE</span><b>{cfd.passed ? "PASS" : "REVIEW"} · {cfd.score}/100</b></header>
        <div className="cfd-flow-preview" aria-hidden="true"><i /><i /><i /><i /><b>{cfd.domain === "marine" ? "USV" : "UAV"}</b></div>
        <div className="cfd-check-grid">{cfd.checks.map((check) => <div key={check.id}><span>{check.passed ? "✓" : "!"}</span><p><b>{check.label}</b><small>{check.note}</small></p><strong>{check.value}</strong></div>)}</div>
        <p className="cfd-disclaimer">{cfd.disclaimer}</p>
      </section>
      <div className="suggested-parts"><small>SUGGESTED CORE PARTS</small>{parts.slice(0, 4).map((part) => <button key={part.id} onClick={() => onOpenPart(part)}><span><b>{part.productName}</b><em>{part.sourceName ?? "Project estimate"}</em></span><strong>${part.price.toFixed(2)} →</strong></button>)}</div>
    </div>}</>}
  </section>;
}

function PageTitle({ eyebrow, title, meta }: { eyebrow: string; title: string; meta?: string }) {
  return <div className="page-title"><div><span>{eyebrow}</span><h1>{title}</h1></div>{meta && <p>{meta}</p>}</div>;
}

function InfoView({ project, cadProject, total, version, committed, toolRuns, electricalCount, onOpenMech }: { project: typeof miniProject | typeof LONG_RANGE_UAV | typeof MOTHER_UAV | typeof USV_PROJECT | typeof VTOL_DRONE | typeof OBSERVER_MULTIROTOR | typeof ORNITHOPTER | typeof MOBILE_ROBOT | typeof HUMANOID_ROBOT | typeof ROBODOG | typeof SUBMARINE | typeof RC_BOAT | typeof WIND_HARVESTER | typeof SCARA_ARM | typeof FPV_RACER | typeof PLASMA_THRUSTER | typeof WALLE_ROBOT | typeof GARDEN_IRRIGATION | typeof FILMING_DRONE | typeof COMPANION_BOT | typeof AR_GLASSES | typeof PRINTER_3D | typeof DELIVERY_DRONE | typeof ENDURANCE_DRONE | typeof CNC_MILL | typeof LARGE_PRINTER | typeof CYBER_MULTITOOL; cadProject: CadProjectResult; total: number; version: number; committed: boolean; toolRuns: typeof initialToolRuns; electricalCount: number; onOpenMech: () => void }) {
  const outputs = project.key === "cncmill" ? ["Arduino Uno + GRBL shield và ba driver A4988", "Ba NEMA 17 dẫn động trục vít, spindle 500W", "Khung 2040, ray tuyến tính MGN12 và công tắc hành trình"] : project.key === "largeprinter" ? ["BigTreeTech SKR 2 và năm driver TMC2209 êm ái", "Chuyển động dual-Z, BLTouch và bàn nhiệt 300mm", "Khung 2040/2020, ray MGN12 và cấp nguồn 24V Mean Well"] : project.key === "cybertool" ? ["STM32WB55, LCD 128x64 và touch/nút điều hướng", "Sub-GHz, NFC, RFID 125kHz và IR học/phát lại", "Pin LiPo 2000mAh, sạc USB-C — chỉ dùng hợp pháp trên thiết bị của bạn"] : project.key === "endurance" ? ["Thân cánh liền khối và hai tractor motor 8S", "FC H7, GPS và quản lý năng lượng tầm xa", "LiDAR, mmWave radar và điều hướng ngày/đêm"] : project.key === "deliverydrone" ? ["Pixhawk, GPS và telemetry 433MHz", "Bốn motor + ESC và giám sát FPV", "Cơ cấu thả gói servo có giám sát (<1kg)"] : project.key === "printer3d" ? ["Arduino Mega + RAMPS và bốn driver A4988", "Bốn NEMA 17, hotend MK8 và bàn nhiệt", "Khung 2020, chuyển động GT2 và kính in"] : project.key === "arglasses" ? ["ESP32-S3, ESP32-CAM và OLED phóng đại", "Head tracking IMU, mic và loa", "Nguồn Li-ion, boost và khung đeo"] : project.key === "companion" ? ["ESP32-S3 và màn TFT 2.4 inch", "Cảm biến chuyển động và môi trường", "Vỏ in 3D với tai mèo và đuôi"] : project.key === "filmingdrone" ? ["Bốn F80 + ESC 4-in-1 trên khung 7-inch", "FC H7, GPS và FPV analog", "GoPro Hero 11 trên mount chống rung"] : project.key === "garden" ? ["ESP32, relay 6 kênh và sáu van điện", "Cảm biến ẩm đất theo từng vùng", "Bơm, manifold PVC và tưới nhỏ giọt"] : project.key === "walle" ? ["RPi 5 + ESP32, thị giác và giọng nói", "Dẫn động xích và tránh vật cản", "Đầu/tay servo biểu cảm sinh động"] : project.key === "plasma" ? ["Vòng siêu dẫn và nguồn xung công suất lớn", "Xenon injector và nozzle từ tính", "Avionics rad-hard, star tracker và cảnh báo HV/cryo"] : project.key === "fpvracer" ? ["Bốn motor + ESC DShot trên khung carbon 5-inch", "FC H7 tích hợp IMU/baro/mag và GPS", "FPV analog, VTX và bố trí CG cho pin 6S"] : project.key === "scara" ? ["Ba khớp servo (base/shoulder/elbow) + gripper", "Động học SCARA và bố trí tầm với", "ESP32, nguồn 5V và trình tự gắp đặt"] : project.key === "windharvester" ? ["Generator BLDC qua chỉnh lưu 3 pha", "MPPT nạp vào bank siêu tụ", "ESP32, cảm biến công suất và anemometer"] : project.key === "rcboat" ? ["Động cơ brushless, chân vịt và bánh lái servo", "Tời servo thả/thu camera trên dây tether", "ESP32, RC receiver và FPV video link"] : project.key === "submarine" ? ["Sáu thruster: bốn ngang, hai đứng", "Cảm biến độ sâu Bar30, IMU và camera", "Thân acrylic kín nước và trim ballast"] : project.key === "robodog" ? ["Mười hai khớp BLDC (3 DOF mỗi chân) trên CAN", "RPi + ESP32 điều khiển cấp cao và thời gian thực", "Khung nhôm V-slot, chân TPU và IMU cân bằng"] : project.key === "humanoid" ? ["Khung nhôm 170cm với khớp Dynamixel", "Jetson Orin Nano, RGB-D, IMU và cảm biến xúc giác", "Hệ biểu cảm khuôn mặt và cảm biến áp lực bàn chân"] : project.key === "mobilerobot" ? ["STM32 + ESP32-CAM, hai motor có encoder", "Dò line, ToF tránh vật cản và IMU", "Cảm biến môi trường, OLED, RTC và log thẻ SD"] : project.key === "ornithopter" ? ["Cơ cấu vỗ cánh mô phỏng dragonfly, hai motor micro", "Airframe siêu nhẹ với spar carbon và màng cánh", "FPV camera, receiver và trim tâm trọng lực"] : project.key === "observer" ? ["Bốn ESC telemetry và bố trí động cơ cân bằng", "Gimbal 2 trục ổn định cho camera quan sát", "Pixhawk, GPS, telemetry 900MHz và video link"] : project.key === "vtol" ? ["Hệ động lực lai: bốn rotor lift và một motor cruise", "Bố trí CG cho pin 6S và chuyển tiếp hover ↔ cruise", "Pixhawk, SBC tự hành, GPS, camera và lidar khảo sát"] : project.key === "usv" ? ["Nguồn 48V cách ly, solar MPPT và hai waterjet điện", "RTK, radar, AIS, lidar và COLREG-aware navigation", "Sonar đa tia, chất lượng nước và thử nghiệm thủy động lực"] : project.key === "mother" ? ["Nguồn cách ly cho động cơ, avionics và sáu dock sạc", "Cân bằng tàu mẹ với rack UAV con và pin 12S", "Geofence, Remote ID, failsafe và kiểm thử docking an toàn"] : project.key === "long-range" ? ["Hệ động lực fixed-wing và quản lý năng lượng tầm xa", "Bố trí CG cho pin Li-ion dung lượng lớn", "ArduPilot, GPS, airspeed và radio telemetry"] : ["Phân phối nguồn LiPo và điều khiển bốn ESC", "Cân bằng khối lượng và bố trí tâm trọng lực", "Cấu hình failsafe và kiểm thử động cơ an toàn"];
  return <div className="info-page">
    <PageTitle eyebrow={project.eyebrow} title={project.name.toUpperCase()} meta={`V${version} · ${committed ? "COMMITTED" : "DRAFT"}`} />
    <div className="info-grid">
      <section className="project-visual">
        <div className="visual-label"><span>DESIGN PREVIEW</span><button onClick={onOpenMech}>OPEN 3D ↗</button></div>
        <div className={`info-cad ${project.visual ? "reference-render" : ""}`}>{project.visual ? <img src={project.visual} alt={`${project.name} reference render`} /> : <CadViewport sceneSpec={cadProject.scene} view="iso" exploded={false} resetToken={0} />}</div>
        <div className="visual-caption"><span>{project.key === "cncmill" ? "DESKTOP CNC / GRBL 3-AXIS" : project.key === "largeprinter" ? "LARGE FDM / SKR 2 · TMC2209" : project.key === "cybertool" ? "SECURITY TOOL / STM32WB55" : project.key === "endurance" ? "BLENDED WING / 8S TWIN MOTOR" : project.key === "deliverydrone" ? "DELIVERY QUAD / PIXHAWK" : project.key === "printer3d" ? "DIY 3D PRINTER / RAMPS 1.4" : project.key === "arglasses" ? "AR WEARABLE / ESP32-S3" : project.key === "companion" ? "DESK GADGET / ESP32-S3 + TFT" : project.key === "filmingdrone" ? "7-INCH CINE / KAKUTE H7" : project.key === "garden" ? "IRRIGATION IOT / 6 ZONES" : project.key === "walle" ? "TRACKED ROBOT / RPi 5 + ESP32" : project.key === "plasma" ? "SPACE PROPULSION / CONCEPT" : project.key === "fpvracer" ? "5-INCH FPV RACER / KAKUTE H7" : project.key === "scara" ? "4-AXIS SCARA / ESP32" : project.key === "windharvester" ? "WIND TURBINE / MPPT + SUPERCAP" : project.key === "rcboat" ? "RC BOAT / TETHERED CAMERA" : project.key === "submarine" ? "UNDERWATER ROV / 6 THRUSTERS" : project.key === "robodog" ? "QUADRUPED / 12× BLDC · CAN" : project.key === "humanoid" ? "170CM HUMANOID / JETSON ORIN" : project.key === "mobilerobot" ? "GROUND ROBOT / STM32 + ESP32" : project.key === "ornithopter" ? "DRAGONFLY ORNITHOPTER / MICRO AIO" : project.key === "observer" ? "450MM CAMERA QUAD / CUBE ORANGE" : project.key === "vtol" ? "VTOL QUADPLANE / PIXHAWK 6C" : project.key === "usv" ? "5.2M SURVEY USV / TWIN WATERJET" : project.key === "mother" ? "6-CELL CIVIL UAV CARRIER" : project.key === "long-range" ? "FIXED-WING / PIXHAWK 6C" : "CARBON FRAME / F4 AIO"}</span><span>{cadProject.metrics.dimensionsMm.join(" × ")} MM</span></div>
      </section>
      <section className="project-summary">
        <span className="section-kicker">PROJECT BRIEF</span>
        <h2>{project.briefTitle.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h2>
        <p>{project.description}</p>
        <div className="summary-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className="metric-grid"><div><small>PARTS</small><b>{project.componentCount}</b></div><div><small>BUDGET</small><b>${total.toFixed(2)}</b></div><div><small>WIRING</small><b>{electricalCount}</b></div><div><small>CONFIDENCE</small><b>{cadProject.validation.score}%</b></div></div>
      </section>
      <section className="validation-panel">
        <div className="validation-head"><span>BUILD VALIDATION</span><b>{cadProject.validation.score}<small>/100</small></b></div>
        <div className="validation-bar"><i style={{ width: `${cadProject.validation.score}%` }} /></div>
        {toolRuns.map((tool, index) => <div className="tool-row" key={tool.name}><span>0{index + 1}</span><b>{tool.name}</b><small>{tool.time}</small><em>{tool.state}</em></div>)}
      </section>
      <section className="learning-panel"><span className="section-kicker">ENGINEERING OUTPUTS</span>{outputs.map((output, index) => <div key={output}><b>0{index + 1}</b><p>{output}</p></div>)}</section>
    </div>
  </div>;
}

function PartsView({ projectName, parts, componentCount, connections, selectedPart, onSelect, detailOpen, onBack, total, view, onView, search, onSearch, category, onCategory }: { projectName: string; parts: ProjectPart[]; componentCount: number; connections: { electrical: ExportConnection[]; mechanical: ExportConnection[] }; selectedPart: ProjectPart; onSelect: (part: ProjectPart) => void; detailOpen: boolean; onBack: () => void; total: number; view: PartView; onView: (view: PartView) => void; search: string; onSearch: (value: string) => void; category: string; onCategory: (value: string) => void }) {
  const [hiddenPartIds, setHiddenPartIds] = useState<string[]>([]);
  const [refreshingPart, setRefreshingPart] = useState("");
  const categoryLabel = (part: ProjectPart) => part.id === "E01" ? "MCU" : part.id === "E02" ? "ACTUATOR" : part.id === "E03" ? "POWER" : part.id === "E04" ? "MODULE" : ["M01", "M02", "M03"].includes(part.id) ? "STRUCTURAL" : part.id === "M04" ? "MECHANISM" : part.subtype === "3d_printed" ? "3D PRINT" : ({ mcu: "MCU", power: "POWER", actuator: "ACTUATOR", sensor: "SENSOR", communication: "MODULE", structural: "STRUCTURAL", mechanism: "MECHANISM", misc: "MISC" }[part.subtype] || part.type || "MISC");
  const visible = parts.filter((part) => !hiddenPartIds.includes(part.id));
  const filtered = visible.filter((part) => (category === "ALL" || categoryLabel(part) === category) && `${part.name} ${part.productName} ${part.description}`.toLocaleLowerCase("vi").includes(search.toLocaleLowerCase("vi")));
  const categories = Array.from(new Set(parts.map(categoryLabel)));
  const removedCount = parts.filter((part) => hiddenPartIds.includes(part.id)).reduce((sum, part) => sum + part.qty, 0);
  const visibleCount = Math.max(0, componentCount - removedCount);
  const visibleTotal = visible.reduce((sum, part) => sum + part.qty * part.price, 0);
  const refreshSources = (partId: string) => { setRefreshingPart(partId); setTimeout(() => setRefreshingPart(""), 650); };
  if (detailOpen) return <PartDetail projectName={projectName} parts={parts} connections={connections} part={selectedPart} onBack={onBack} onSelect={onSelect} />;
  return <div className="parts-page">
    <div className="parts-toolbar">
      <label className="parts-search"><span>⌕</span><input value={search} onChange={(event) => onSearch(event.target.value)} placeholder="Search for parts" /></label>
      <label className="category-select"><span>CATEGORY:</span><select value={category} onChange={(event) => onCategory(event.target.value)}><option value="ALL">ALL · {visibleCount}</option>{categories.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
      <div className="view-switch"><button className={view === "table" ? "active" : ""} onClick={() => onView("table")} aria-label="Table view">☷</button><button className={view === "cards" ? "active" : ""} onClick={() => onView("cards")} aria-label="Card view">▦</button></div>
    </div>
    <p className="parts-note">Search online for any part and add it to your project. · Researched prices checked 16/07/2026.</p>
    {view === "cards" ? <div className="part-card-grid">{filtered.map((part) => <div role="button" tabIndex={0} key={part.id} className={`part-card ${selectedPart.id === part.id ? "selected" : ""}`} onClick={() => onSelect(part)} onKeyDown={(event) => { if (event.key === "Enter") onSelect(part); }}>
      <PartImage part={part} className="part-art" />
      <span className={`part-type-badge type-${categoryLabel(part).toLowerCase().replace(" ", "-")}`}>{categoryLabel(part)}</span>
      <div className="part-copy"><h2>{part.productName}</h2><p>{part.name}</p><em>{part.description}</em></div>
      <div className="part-facts"><span><small>QTY</small><b>{part.qty}</b></span><span><small>UNIT</small><b>~${part.price.toFixed(2)}</b></span><div className="part-actions"><button aria-label={`Delete ${part.name}`} onClick={(event) => { event.stopPropagation(); setHiddenPartIds((ids) => [...ids, part.id]); }}>⌫</button><button aria-label={`Search alternatives for ${part.name}`} className={refreshingPart === part.id ? "refreshing" : ""} onClick={(event) => { event.stopPropagation(); refreshSources(part.id); }}>↻</button></div></div>
      <SourceLinks part={part} compact />
    </div>)}</div> : <div className="parts-table"><div className="parts-row parts-row-head"><span>PART</span><span>QTY</span><span>UNIT</span><span>SOURCE</span><span>SUBTOTAL</span></div>{filtered.map((part) => <div role="button" tabIndex={0} className={`parts-row ${selectedPart.id === part.id ? "selected" : ""}`} key={part.id} onClick={() => onSelect(part)} onKeyDown={(event) => { if (event.key === "Enter") onSelect(part); }}><div className="table-part-cell"><span className="table-actions"><button aria-label={`Delete ${part.name}`} onClick={(event) => { event.stopPropagation(); setHiddenPartIds((ids) => [...ids, part.id]); }}>⌫</button><button aria-label={`Search alternatives for ${part.name}`} className={refreshingPart === part.id ? "refreshing" : ""} onClick={(event) => { event.stopPropagation(); refreshSources(part.id); }}>↻</button></span><PartImage part={part} /><span><b>{part.productName}</b><small>{part.name}</small><em>{part.description}</em><i>{categoryLabel(part)}</i></span></div><span>{part.qty}</span><span>~${part.price.toFixed(2)}</span><SourceLinks part={part} /><span><b>~${(part.qty * part.price).toFixed(2)}</b></span></div>)}</div>}
    <div className="parts-total"><span>TOTAL ESTIMATED COST</span><b>~${visibleTotal.toFixed(2)}</b></div>
  </div>;
}

function SourceLinks({ part, compact = false }: { part: ProjectPart; compact?: boolean }) {
  const query = encodeURIComponent(part.productName);
  const sources = [
    { name: "OFFICIAL", url: part.purchaseUrl, className: "official", verified: Boolean(part.purchaseUrl) },
    { name: "amazon", url: part.amazonUrl || `https://www.amazon.com/s?k=${query}`, className: "amazon", verified: Boolean(part.amazonUrl) },
    { name: "AliExpress", url: part.aliexpressUrl || `https://www.aliexpress.com/wholesale?SearchText=${query}`, className: "aliexpress", verified: Boolean(part.aliexpressUrl) },
    { name: "eBay", url: part.ebayUrl || `https://www.ebay.com/sch/i.html?_nkw=${query}`, className: "ebay", verified: Boolean(part.ebayUrl) },
  ].filter((source) => Boolean(source.url));
  return <span className={`source-links ${compact ? "compact" : ""}`}>{sources.map((source) => <a key={source.name} href={source.url} target="_blank" rel="noreferrer" className={source.className} onClick={(event) => event.stopPropagation()}>{source.name}{source.verified && <i>✓</i>}</a>)}</span>;
}

function PartImage({ part, className = "" }: { part: ProjectPart; className?: string }) {
  const [failed, setFailed] = useState(false);
  return <div className={`${className} part-photo ${part.color}`}>{part.imageUrl && !failed ? <img src={part.imageUrl} alt={part.productName} loading="lazy" onError={() => setFailed(true)} /> : <div className="part-photo-fallback"><b>{part.id}</b><span>{part.type}</span></div>}</div>;
}

function PartDetail({ projectName, parts, connections: projectConnections, part, onBack, onSelect }: { projectName: string; parts: ProjectPart[]; connections: { electrical: ExportConnection[]; mechanical: ExportConnection[] }; part: ProjectPart; onBack: () => void; onSelect: (part: ProjectPart) => void }) {
  const related = parts.filter((item) => item.category === part.category && item.id !== part.id).slice(0, 3);
  const aliases: Record<string, string[]> = {
    E02: ["Front Left Motor", "Front Right Motor", "Rear Left Motor", "Rear Right Motor"],
    M03: ["Front Left Arm", "Front Right Arm", "Rear Left Arm", "Rear Right Arm"],
    M05: ["FL Motor Mount", "FR Motor Mount", "RL Motor Mount", "RR Motor Mount"],
    M04: ["Front Left Propeller", "Front Right Propeller", "Rear Left Propeller", "Rear Right Propeller"],
  };
  const expandedIds = part.id === "E02" ? ["motor_front_left", "motor_front_right", "motor_rear_left", "motor_rear_right"] : [part.exportId];
  const resolvePart = (id: string) => {
    if (id.startsWith("motor_") && !id.startsWith("motor_mount")) return parts.find((item) => item.id === "E02");
    if (id.startsWith("propeller_")) return parts.find((item) => item.id === "M04");
    if (id.startsWith("arm_")) return parts.find((item) => item.id === "M03");
    if (id.startsWith("motor_mount_")) return parts.find((item) => item.id === "M05");
    return parts.find((item) => item.exportId === id);
  };
  const electricalRows = projectConnections.electrical.filter((connection) => expandedIds.includes(String(connection.source)) || expandedIds.includes(String(connection.target))).map((connection) => ({ source: resolvePart(String(connection.source)), target: resolvePart(String(connection.target)), label: String(connection.label || connection.type || "Electrical"), detail: `${connection.sourcePin ?? connection.voltage ?? ""} → ${connection.targetPin ?? connection.current ?? ""}` }));
  const mechanicalRows = projectConnections.mechanical.filter((connection) => expandedIds.includes(String(connection.source)) || expandedIds.includes(String(connection.target))).map((connection) => ({ source: resolvePart(String(connection.source)), target: resolvePart(String(connection.target)), label: String(connection.label || "Mechanical"), detail: "Mechanical" }));
  const connections = [...electricalRows, ...mechanicalRows].slice(0, 8);
  const documentation = part.id === "E01" ? [{ title: "Betaflight Flight Controller Documentation", url: "https://betaflight.com/docs/" }, { title: "BETAFPV F4 AIO Product Reference", url: part.purchaseUrl }] : part.id === "E04" ? [{ title: "ExpressLRS Receiver Documentation", url: "https://www.expresslrs.org/" }, { title: "BETAFPV ELRS Lite Reference", url: part.purchaseUrl }] : [{ title: `${part.productName} Product Reference`, url: part.purchaseUrl }, { title: "Budget Mini UAV Build Guide", url: "#build-guide" }];
  return <div className="part-detail">
    <div className="part-detail-toolbar"><button onClick={onBack}>← BACK TO PARTS</button><span>COMPONENT ID · {part.exportId}</span></div>
    <section className="part-detail-hero">
      <PartImage part={part} className="part-detail-image" />
      <div className="part-detail-copy"><span>{part.type}</span><h1>{part.productName}</h1><p className="part-alias">{part.name}</p>{aliases[part.id] && <div className="part-also"><small>ALSO:</small>{aliases[part.id].map((alias) => <button key={alias}>{alias}</button>)}</div>}<p>{part.description}</p><div className="part-price"><b>${part.price.toFixed(2)}</b><small>USD / unit · {part.sourceStatus}</small></div>{part.purchaseUrl && <a href={part.purchaseUrl} target="_blank" rel="noreferrer">VIEW SOURCE ↗</a>}</div>
    </section>
    <section className="part-detail-section"><div className="detail-section-head"><h2>TECHNICAL SPECIFICATIONS</h2><span>RESEARCHED {part.priceCheckedAt}</span></div><div className="spec-grid">{Object.entries(part.specs ?? { Dimensions: part.dimensions, Interface: part.pins || "Mechanical" }).map(([label, value]) => <div key={label}><small>{label}</small><b>{value}</b></div>)}</div></section>
    <section className="part-detail-section"><div className="detail-section-head"><h2>SOURCING OPTIONS</h2><span>PRICE MAY CHANGE</span></div><div className="source-grid"><a className="source-card" href={part.purchaseUrl || "#"} target={part.purchaseUrl ? "_blank" : undefined} rel="noreferrer"><div><b>{part.sourceName ?? "In-house fabrication"}</b><p>{part.sourceStatus ?? "Build locally from the project files"}</p></div><strong>${part.price.toFixed(2)}</strong></a><div className="source-card"><div><b>PROJECT ESTIMATE</b><p>{part.qty} × ${part.price.toFixed(2)} for this build</p></div><strong>${(part.qty * part.price).toFixed(2)}</strong></div></div></section>
    <section className="part-detail-section"><div className="detail-section-head"><h2>RELATED PARTS</h2><span>{part.category.toUpperCase()}</span></div><div className="related-parts">{related.map((item) => <button key={item.id} onClick={() => onSelect(item)}><PartImage part={item} /><span><b>{item.name}</b><small>{item.productName}</small></span></button>)}</div></section>
    <section className="part-detail-section" id="connections"><div className="detail-section-head"><h2>CONNECTIONS</h2><span>{connections.length} RELATED</span></div>{connections.length ? <div className="connection-table">{connections.map((connection, index) => <div className="connection-row" key={`${connection.label}-${index}`}><button disabled={!connection.source} onClick={() => connection.source && onSelect(connection.source)}>{connection.source?.name ?? "Project assembly"}<small>{connection.source?.productName ?? "Mechanical node"}</small></button><span><b>{connection.label}</b><small>{connection.detail}</small></span><button disabled={!connection.target} onClick={() => connection.target && onSelect(connection.target)}>{connection.target?.name ?? "Project assembly"}<small>{connection.target?.productName ?? "Mechanical node"}</small></button></div>)}</div> : <p className="empty-detail">No direct electrical connection. This component is included in the mechanical assembly.</p>}</section>
    <section className="part-detail-section"><div className="detail-section-head"><h2>DOCUMENTATION &amp; LIBRARIES</h2><span>ENGINEERING REFERENCES</span></div><div className="resource-grid">{documentation.map((resource) => resource.url ? <a key={resource.title} href={resource.url} target={resource.url.startsWith("http") ? "_blank" : undefined} rel="noreferrer"><span>▤</span><b>{resource.title}</b><em>OPEN REFERENCE →</em></a> : null)}</div></section>
    <section className="part-detail-section" id="build-guide"><div className="detail-section-head"><h2>EXAMPLE PROJECTS</h2><span>STEM APPLICATIONS</span></div><div className="example-grid"><article><span>01</span><b>{projectName}</b><p>Use this component in the active reference build and follow its project-specific assembly guide.</p></article><article><span>02</span><b>Flight-control Bench Rig</b><p>Test power, communication, motor direction and failsafe safely before installing propellers.</p></article><article><span>03</span><b>STEM Systems Lab</b><p>Measure voltage, current, thermal behavior and system response with repeatable procedures.</p></article></div></section>
    <section className="part-detail-section"><div className="detail-section-head"><h2>CAD / 3D FILES</h2><span>INCLUDED IN PROJECT ZIP</span></div><div className="cad-file-grid"><div><span>◇</span><b>Component Envelope</b><p>{part.dimensions}</p><em>Parametric reference</em></div><div><span>▦</span><b>Assembly Placement</b><p>{part.exportId}</p><em>{projectName} CAD</em></div><div><span>⇩</span><b>Project Export</b><p>STEP / STL / configuration</p><em>Use the DOWNLOAD button</em></div></div></section>
    <footer className="component-id"><span>COMPONENT ID</span><b>{part.exportId}</b></footer>
  </div>;
}

function WiringView({ parts, onOpenPart }: { parts: ProjectPart[]; onOpenPart: (part: ProjectPart) => void }) {
  const [netFilter, setNetFilter] = useState<"all" | "data" | "power">("all");
  const [zoom, setZoom] = useState(.92);
  const [legendOpen, setLegendOpen] = useState(true);
  const [enriched, setEnriched] = useState(false);
  const [selectedNode, setSelectedNode] = useState("flight");
  const flight = parts.find((part) => part.id === "E01")!;
  const motor = parts.find((part) => part.id === "E02")!;
  const battery = parts.find((part) => part.id === "E03")!;
  const receiver = parts.find((part) => part.id === "E04")!;
  const nodes = [
    { id: "flight", group: "MCU", className: "node-flight", type: "MCU", name: "Flight Controller w/ ESCs", product: flight.productName, pins: ["VBAT", "M1–M4", "UART RX", "5V/GND"], part: flight },
    { id: "motor-fl", group: "ACTUATOR", className: "node-motor-fl", type: "ACTUATOR · M1", name: "Front Left Motor", product: motor.productName, pins: ["Phase A", "Phase B", "Phase C"], part: motor },
    { id: "motor-fr", group: "ACTUATOR", className: "node-motor-fr", type: "ACTUATOR · M2", name: "Front Right Motor", product: motor.productName, pins: ["Phase A", "Phase B", "Phase C"], part: motor },
    { id: "motor-rl", group: "ACTUATOR", className: "node-motor-rl", type: "ACTUATOR · M3", name: "Rear Left Motor", product: motor.productName, pins: ["Phase A", "Phase B", "Phase C"], part: motor },
    { id: "motor-rr", group: "ACTUATOR", className: "node-motor-rr", type: "ACTUATOR · M4", name: "Rear Right Motor", product: motor.productName, pins: ["Phase A", "Phase B", "Phase C"], part: motor },
    { id: "battery", group: "POWER", className: "node-battery", type: "POWER", name: "LiPo Battery 2S", product: battery.productName, pins: ["XT30/VBAT", "JST-XH/GND"], part: battery },
    { id: "receiver", group: "MODULE", className: "node-receiver", type: "MODULE", name: "Radio Receiver", product: receiver.productName, pins: ["5V", "GND", "UART TX", "UART RX"], part: receiver },
  ];
  const groups = ["MCU", "ACTUATOR", "POWER", "MODULE"];
  return <div className="wiring-page">
    <PageTitle eyebrow="SYSTEM CONNECTIONS" title="WIRING" meta={`${uavElectricalConnections.length} CONNECTIONS`} />
    <div className="wiring-toolbar"><span>SCHEMATIC · POWER + FLIGHT CONTROL</span><div className="wire-filters"><button className={netFilter === "all" ? "active" : ""} onClick={() => setNetFilter("all")}>ALL NETS</button><button className={netFilter === "power" ? "active" : ""} onClick={() => setNetFilter("power")}>POWER</button><button className={netFilter === "data" ? "active" : ""} onClick={() => setNetFilter("data")}>DATA / ESC</button></div></div>
    <div className={`wiring-canvas blueprint-wiring filter-${netFilter}`}>
      <div className="wire-board" style={{ transform: `scale(${zoom})` }}>
        <div className="wire-link battery-link power"><b>VBAT · 20A</b></div>
        <div className="wire-link receiver-power-link power"><b>5V / GND</b></div>
        <div className="wire-link receiver-data-link data"><b>CRSF UART</b></div>
        <div className="wire-link motor-trunk data" />
        <div className="wire-link motor-bus data" />
        {["M1", "M2", "M3", "M4"].map((label, index) => <div className={`wire-link motor-branch branch-${index + 1} data`} key={label}><b>{label}</b></div>)}
        <div className="wire-link common-ground ground"><b>COMMON GND</b></div>
        {nodes.map((node) => <WireNode key={node.id} {...node} enriched={enriched} selected={selectedNode === node.id} onSelect={() => { setSelectedNode(node.id); onOpenPart(node.part); }} />)}
      </div>
      <aside className={`schematic-panel ${legendOpen ? "open" : "collapsed"}`}>
        <button className="schematic-head" onClick={() => setLegendOpen((value) => !value)}><span>⌘ SCHEMATIC</span><b>{legendOpen ? "⌃" : "⌄"}</b></button>
        {legendOpen && <div className="schematic-body"><span className="node-types-title">NODE TYPES</span>{groups.map((group) => { const grouped = nodes.filter((node) => node.group === group); return <details open key={group}><summary><i className={group.toLowerCase()} />{group} ({grouped.length})</summary>{grouped.map((node) => <button className={selectedNode === node.id ? "selected" : ""} onClick={() => setSelectedNode(node.id)} key={node.id}>⊙ {node.name}</button>)}</details>; })}<div className="net-legend"><span><i className="data" />DATA</span><span><i className="power" />POWER</span><span><i className="ground" />GROUND</span></div></div>}
      </aside>
      <button className={`enrich-wiring ${enriched ? "active" : ""}`} onClick={() => setEnriched((value) => !value)}>{enriched ? "✓ WIRING ENRICHED" : "⌗ ENRICH WIRING"}</button>
      <div className="wiring-controls" aria-label="Điều khiển sơ đồ"><button aria-label="Phóng to" onClick={() => setZoom((value) => Math.min(1.15, value + .08))}>＋</button><button aria-label="Thu nhỏ" onClick={() => setZoom((value) => Math.max(.68, value - .08))}>−</button><button aria-label="Vừa màn hình" onClick={() => setZoom(.92)}>⌗</button></div>
      <div className="wire-selection"><span>SELECTED NODE</span><b>{nodes.find((node) => node.id === selectedNode)?.name}</b><small>{enriched ? "Pinout and electrical limits verified" : "Click Enrich Wiring for pin details"}</small></div>
    </div>
  </div>;
}

function WireNode({ className, type, name, product, pins, part, enriched, selected, onSelect }: { className: string; type: string; name: string; product: string; pins: string[]; part: ProjectPart; enriched: boolean; selected: boolean; onSelect: () => void }) {
  return <button className={`wire-node ${className} ${selected ? "selected" : ""}`} onClick={onSelect}><span className="wire-node-type">{type}</span><div className="wire-node-main"><PartImage part={part} /><span><b>{name}</b><small>{product}</small></span></div><div className="wire-pins">{pins.map((pin) => <span key={pin}>{pin}</span>)}</div>{enriched && <em>{part.specs ? Object.values(part.specs)[0] : part.dimensions}</em>}<i className="port left" /><i className="port right" /></button>;
}

function LongRangeWiringView({ projectName, parts, connections, onOpenPart }: { projectName: string; parts: ProjectPart[]; connections: ExportConnection[]; onOpenPart: (part: ProjectPart) => void }) {
  const [filter, setFilter] = useState("all");
  const resolve = (id: unknown) => parts.find((part) => part.exportId === String(id));
  const filtered = connections.filter((connection) => filter === "all" || connection.type === filter);
  const flightController = parts.find((part) => part.exportId === "marine_autopilot") ?? parts.find((part) => part.exportId === "carrier_flight_controller") ?? parts.find((part) => part.exportId === "flight_controller");
  return <div className="wiring-page long-range-wiring">
    <PageTitle eyebrow={`SYSTEM CONNECTIONS · ${projectName.toUpperCase()}`} title="WIRING" meta={`${connections.length} CONNECTIONS`} />
    <div className="wiring-toolbar"><span>{flightController?.productName.toUpperCase()} · POWER + SIGNAL HARNESS</span><div className="wire-filters"><button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>ALL NETS</button><button className={filter === "power" ? "active" : ""} onClick={() => setFilter("power")}>POWER</button><button className={filter === "data" ? "active" : ""} onClick={() => setFilter("data")}>DATA / SIGNAL</button></div></div>
    <section className="lr-wiring-overview">
      <div className="lr-controller-card">{flightController && <button onClick={() => onOpenPart(flightController)}><PartImage part={flightController} /><span><small>FLIGHT CONTROLLER</small><b>{flightController.productName}</b><em>{flightController.pins}</em></span></button>}<i>PRIMARY AVIONICS BUS</i></div>
      <div className="lr-wire-list">{filtered.map((connection, index) => {
        const sourcePart = resolve(connection.source);
        const targetPart = resolve(connection.target);
        return <article key={`${connection.source}-${connection.target}-${index}`} className={`lr-wire-row ${connection.type || "signal"}`}>
          <button disabled={!sourcePart} onClick={() => sourcePart && onOpenPart(sourcePart)}>{sourcePart ? <PartImage part={sourcePart} /> : <span className="wire-fallback">SRC</span>}<span><b>{sourcePart?.name || String(connection.source)}</b><small>{connection.sourcePin || connection.voltage || "SYSTEM"}</small></span></button>
          <div><span>{String(connection.type || "signal").toUpperCase()}</span><b>{String(connection.label || "Connection")}</b><small>{[connection.voltage, connection.current, connection.protocol].filter(Boolean).join(" · ")}</small></div>
          <button disabled={!targetPart} onClick={() => targetPart && onOpenPart(targetPart)}>{targetPart ? <PartImage part={targetPart} /> : <span className="wire-fallback">DST</span>}<span><b>{targetPart?.name || String(connection.target)}</b><small>{connection.targetPin || connection.current || "SYSTEM"}</small></span></button>
        </article>;
      })}</div>
    </section>
  </div>;
}

function MechView({ version, cadProject, committed, onCommit }: { version: number; cadProject: CadProjectResult; committed: boolean; onCommit: () => void }) {
  const [view, setView] = useState<"iso" | "top" | "front">("iso");
  const [exploded, setExploded] = useState(false);
  const [resetToken, setResetToken] = useState(0);
  return <div className="mech-page"><PageTitle eyebrow="PARAMETRIC ENCLOSURE" title="MECH" meta={`${cadProject.metrics.primitiveCount} PRIMITIVES`} /><div className="mech-toolbar"><div><button className={view === "iso" ? "active" : ""} onClick={() => setView("iso")}>ISO</button><button className={view === "top" ? "active" : ""} onClick={() => setView("top")}>TOP</button><button className={view === "front" ? "active" : ""} onClick={() => setView("front")}>FRONT</button></div><span>{cadProject.draftId.toUpperCase()} / V{version}</span><div><button className={exploded ? "active" : ""} onClick={() => setExploded((value) => !value)}>EXPLODE</button><button onClick={() => setResetToken((value) => value + 1)}>RESET</button></div></div><div className="mech-workspace">
    <div className="cad-stage"><CadViewport sceneSpec={cadProject.scene} view={view} exploded={exploded} resetToken={resetToken} /><div className="cad-runtime-badge"><i /> THREE.JS / WEBGL2 <b>{cadProject.metrics.dimensionsMm.join(" × ")} MM</b></div><div className="dimension dim-width">{cadProject.metrics.dimensionsMm[0].toFixed(1)} MM</div></div>
    <aside className="feature-tree"><div className="feature-head"><span>FEATURE TREE</span><b>{cadProject.operations.length}</b></div>{cadProject.operations.map((operation, index) => <div className="feature" key={operation.id}><span>{String(index + 1).padStart(2, "0")}</span><i>◇</i><b>{operation.label}</b></div>)}<div className="mech-validation"><span>BUILD CONFIDENCE</span><b>{cadProject.validation.score}/100</b><div><i style={{ width: `${cadProject.validation.score}%` }} /></div><p>{cadProject.validation.checksPassed}/{cadProject.validation.checksTotal} checks passed</p></div><button className="commit-button" disabled={committed || !cadProject.validation.passed} onClick={onCommit}>{committed ? "CAD COMMITTED ✓" : "COMMIT CAD"}</button></aside>
  </div></div>;
}

function Instructions({ parts, preamble, steps, mechanicalCount, onOpenPart }: { parts: ProjectPart[]; preamble: InstructionPreamble; steps: InstructionSection[]; mechanicalCount: number; onOpenPart: (part: ProjectPart) => void }) {
  const stepCount = steps.reduce((sum, section) => sum + section.subSteps.length, 0);
  const [completed, setCompleted] = useState<Record<string, boolean>>({ fabricate_1: true });
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [expandedDetails, setExpandedDetails] = useState<Record<string, boolean>>({});
  const [loadingDetail, setLoadingDetail] = useState("");
  const completedCount = Object.values(completed).filter(Boolean).length;
  const toolsets: Record<string, string[]> = {
    fabricate: ["M3 hex key/screwdriver", "M2 screwdriver", "3D printer (PETG and PLA capable)"],
    wire: ["Soldering iron with fine tip", "Wire strippers/cutters", "Hobby knife/flush cutters", "Heat gun (optional, for heat shrink)"],
    bringup: ["Multimeter"],
    assemble: ["M3 hex key/screwdriver", "M2 screwdriver"],
  };
  const groupIcons: Record<string, string> = { fabricate: "🔨", wire: "⌁", bringup: "⚙", assemble: "◇" };
  const aliases: Record<string, string[]> = {
    E02: ["Front Left Motor", "Front Right Motor", "Rear Left Motor", "Rear Right Motor"],
    M03: ["Front Left Arm", "Front Right Arm", "Rear Left Arm", "Rear Right Arm"],
    M04: ["Front Left Propeller", "Front Right Propeller", "Rear Left Propeller", "Rear Right Propeller"],
    M05: ["FL Motor Mount", "FR Motor Mount", "RL Motor Mount", "RR Motor Mount"],
  };
  const detailCopy: Record<string, { procedure: string; check: string; safety: string }> = {
    fabricate: { procedure: "Print with the specified material, remove supports and clean every fastener hole before test fitting.", check: "Confirm the four mounts are identical, flat and free from cracks or loose layers.", safety: "Let the print bed and nozzle cool before handling parts or removing supports." },
    wire: { procedure: "Tin both pads and wires, make the shortest practical connection, then insulate any exposed conductor.", check: "Inspect each joint under good light and verify continuity plus absence of shorts with a multimeter.", safety: "Keep the LiPo disconnected and all propellers removed during soldering and electrical checks." },
    bringup: { procedure: "Complete this configuration with USB power first and save a backup before changing firmware settings.", check: "Verify the expected device, channels and sensor readings before moving to the next step.", safety: "Remove all propellers and secure the airframe before any motor output test." },
    assemble: { procedure: "Dry-fit the listed parts, align them without forcing, then tighten fasteners gradually in a cross pattern.", check: "Check alignment, clearance, cable strain relief and fastener security after assembly.", safety: "Do not install or connect the LiPo until the airframe and wiring inspection are complete." },
  };

  function partCards(stepTitle: string, partIds: string[]) {
    return partIds.flatMap((id) => {
      const part = parts.find((item) => item.exportId === id);
      if (!part) return [];
      const positionNames = aliases[part.id];
      if (!positionNames) return [{ part, label: part.name }];
      const directMatch = positionNames.find((label) => stepTitle.toLowerCase().includes(label.toLowerCase()));
      return (directMatch ? [directMatch] : positionNames).map((label) => ({ part, label }));
    });
  }

  function toggleDetails(stepId: string) {
    if (expandedDetails[stepId]) {
      setExpandedDetails((state) => ({ ...state, [stepId]: false }));
      return;
    }
    setLoadingDetail(stepId);
    window.setTimeout(() => {
      setLoadingDetail("");
      setExpandedDetails((state) => ({ ...state, [stepId]: true }));
    }, 360);
  }

  return <div className="instructions-page">
    <div className="instruction-topbar">
      <div className="instruction-title"><span>▤</span><b>INSTRUCTIONS</b></div>
      <span className="instruction-count">{completedCount}/{stepCount} DONE</span>
      <button disabled={Boolean(loadingDetail)} onClick={() => { setCompleted({}); setExpandedDetails({}); setCollapsed({}); }}>↻ REGENERATE</button>
    </div>
    <div className="instructions-body">
      <section className="tools-assumptions">
        <header>🔧 TOOLS &amp; ASSUMPTIONS</header>
        <div className="tools-assumptions-body">
          <div><h2>TOOLS</h2><ul>{preamble.tools.map((tool) => <li key={tool}><span>{tool.includes("printer") ? "▣" : tool.includes("cut") || tool.includes("strippers") ? "✂" : tool.includes("Solder") ? "⌁" : "⌕"}</span>{tool}</li>)}</ul></div>
          <div><h2>ASSUMPTIONS</h2><ul>{preamble.assumptions.map((item) => <li key={item}><span>–</span>{item}</li>)}</ul></div>
        </div>
      </section>
      <section className="instruction-groups">
        {steps.map((section, sectionIndex) => {
          const sectionDone = section.subSteps.filter((step) => completed[step.id]).length;
          return <article className="instruction-group" key={section.id}>
            <header className="instruction-group-head"><span>{sectionIndex + 1}.</span><i>{groupIcons[section.id]}</i><h2>{section.title}</h2><b>{sectionDone}/{section.subSteps.length}</b><button aria-label={`${collapsed[section.id] ? "Mở" : "Thu gọn"} nhóm ${section.title}`} onClick={() => setCollapsed((state) => ({ ...state, [section.id]: !state[section.id] }))}>{collapsed[section.id] ? "+" : "−"}</button></header>
            {!collapsed[section.id] && <div className="instruction-step-list">
              {section.subSteps.map((step, stepIndex) => {
                const stepParts = partCards(step.title, step.partIds);
                const tools = section.id === "wire" && stepIndex === section.subSteps.length - 1 ? ["Multimeter"] : section.id === "assemble" && stepIndex === 1 ? [...toolsets.assemble, "3D printer (PETG and PLA capable)"] : toolsets[section.id] ?? [];
                const detail = detailCopy[section.id];
                return <div className={`instruction-step ${completed[step.id] ? "done" : ""}`} key={step.id}>
                  <div className="step-index"><span>{sectionIndex + 1}.{stepIndex + 1}</span><button className="step-check" aria-label={`Đánh dấu bước ${sectionIndex + 1}.${stepIndex + 1}`} onClick={() => setCompleted((state) => ({ ...state, [step.id]: !state[step.id] }))}>{completed[step.id] ? "✓" : ""}</button></div>
                  <div className="step-main">
                    <h3>{step.title}</h3>
                    <div className="step-tools">{tools.map((tool) => <span key={tool}>⌁ {tool}</span>)}</div>
                    {stepParts.length > 0 && <div className="step-parts">{stepParts.map(({ part, label }) => <button className="step-part-card" key={`${part.id}-${label}`} onClick={() => onOpenPart(part)}>
                      {part.subtype === "3d_printed" ? <div className="step-print-icon"><span>▣</span><small>3D PRINT</small></div> : <PartImage part={part} />}
                      <span><b>{part.productName}</b><em>{label}</em><small>{part.id} · QTY {label === part.name ? part.qty : 1}</small></span>
                    </button>)}</div>}
                    <button className="step-more" disabled={loadingDetail === step.id} onClick={() => toggleDetails(step.id)}>{loadingDetail === step.id ? "LOADING DETAILS…" : expandedDetails[step.id] ? "HIDE DETAILS" : "MORE DETAILS"} <span>{expandedDetails[step.id] ? "↑" : "→"}</span></button>
                    {expandedDetails[step.id] && <div className="step-detail-panel"><div><b>PROCEDURE</b><p>{detail.procedure}</p></div><div><b>QUALITY CHECK</b><p>{detail.check}</p></div><div><b>SAFETY</b><p>{detail.safety}</p></div></div>}
                  </div>
                </div>;
              })}
            </div>}
          </article>;
        })}
      </section>
      <div className="mechanical-count">{mechanicalCount} MECHANICAL CONNECTIONS INCLUDED IN DOWNLOAD</div>
    </div>
  </div>;
}
