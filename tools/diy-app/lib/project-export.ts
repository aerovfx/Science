import type { CadProjectResult } from "./cad-engine.js";

export type ProjectPart = {
  id: string;
  exportId: string;
  name: string;
  productName: string;
  description: string;
  category: "electrical" | "mechanical";
  subtype: string;
  type: string;
  qty: number;
  price: number;
  color: string;
  pins: string;
  dimensions: string;
  purchaseUrl: string;
  imageUrl?: string;
  amazonUrl?: string;
  aliexpressUrl?: string;
  ebayUrl?: string;
  sourceName?: string;
  priceCheckedAt?: string;
  sourceStatus?: string;
  specs?: Record<string, string>;
};

export type ToolRun = { name: string; state: string; time: string };
export type ExportConnection = Record<string, string | number | undefined>;
export type InstructionSection = { id: string; title: string; subSteps: Array<{ id: string; title: string; partIds: string[] }> };
export type InstructionPreamble = { tools: string[]; assumptions: string[] };

export type ProjectExportInput = {
  projectName: string;
  projectId: string;
  version: number;
  status: "draft" | "committed";
  originalPrompt: string;
  projectDescription: string;
  parts: ProjectPart[];
  cad: CadProjectResult;
  mcp: ToolRun[];
  totalBudget: number;
  componentCount?: number;
  extraParts?: ProjectPart[];
  expandPartIds?: string[];
  electricalConnections?: ExportConnection[];
  mechanicalConnections?: ExportConnection[];
  instructionPreamble?: InstructionPreamble;
  instructionSteps?: InstructionSection[];
  plan?: string;
  notes?: string[];
  imageTags?: string[];
  checklist?: string[];
};

const fabricationParts: ProjectPart[] = [
  { id: "E01", exportId: "flyback_diode", name: "Diode flyback", productName: "1N4007 Rectifier Diode", description: "Bảo vệ mạch khỏi điện áp ngược khi ngắt bơm DC.", category: "electrical", subtype: "protection", type: "BẢO VỆ", qty: 1, price: 0.1, color: "orange", pins: "ANODE · CATHODE", dimensions: "10x3x3mm", purchaseUrl: "" },
  { id: "E02", exportId: "power_supply_5v", name: "Nguồn bơm 5V", productName: "5V 2A DC Power Supply", description: "Nguồn riêng cho relay và bơm, tách khỏi logic Pico W.", category: "electrical", subtype: "power", type: "NGUỒN", qty: 1, price: 4.5, color: "orange", pins: "+5V · GND", dimensions: "70x45x30mm", purchaseUrl: "" },
  { id: "M01", exportId: "enclosure_base", name: "Thân vỏ", productName: "3D Printed Electronics Enclosure Base", description: "Thân vỏ PETG chứa Pico W, relay và các điểm bắt vít.", category: "mechanical", subtype: "3d_printed", type: "IN 3D", qty: 1, price: 1.5, color: "lime", pins: "", dimensions: "90x32x65mm", purchaseUrl: "" },
  { id: "M02", exportId: "enclosure_lid", name: "Nắp vỏ", productName: "3D Printed Electronics Enclosure Lid", description: "Nắp PETG có cửa sổ LCD và thành chồng mí chống nước bắn.", category: "mechanical", subtype: "3d_printed", type: "IN 3D", qty: 1, price: 1.0, color: "lime", pins: "", dimensions: "90x4x65mm", purchaseUrl: "" },
  { id: "M03", exportId: "m2_fasteners", name: "Bộ vít M2", productName: "M2 Nylon Screw and Standoff Set", description: "Vít và chân đỡ cách điện để cố định PCB và LCD.", category: "mechanical", subtype: "misc", type: "CƠ KHÍ", qty: 8, price: 0.04, color: "lime", pins: "", dimensions: "6x2x2mm", purchaseUrl: "" },
  { id: "M04", exportId: "water_tube", name: "Ống nước silicone", productName: "4 mm ID Silicone Water Tube", description: "Dẫn nước từ bơm tới chậu cây trong mô hình.", category: "mechanical", subtype: "mechanism", type: "CƠ KHÍ", qty: 1, price: 0.8, color: "blue", pins: "", dimensions: "500x6x6mm", purchaseUrl: "" },
];

export const electricalConnections = [
  { source: "raspberry_pi_pico_w", target: "dht11", type: "power", voltage: "3.3V", current: "2.5mA", sourcePin: "3V3", targetPin: "VCC", label: "Nguồn cảm biến nhiệt ẩm" },
  { source: "dht11", target: "raspberry_pi_pico_w", type: "data", protocol: "gpio", sourcePin: "DATA", targetPin: "GP15", label: "Dữ liệu nhiệt độ và độ ẩm" },
  { source: "raspberry_pi_pico_w", target: "soil_moisture", type: "power", voltage: "3.3V", current: "20mA", sourcePin: "3V3", targetPin: "VCC", label: "Nguồn cảm biến đất" },
  { source: "soil_moisture", target: "raspberry_pi_pico_w", type: "data", protocol: "adc", sourcePin: "AO", targetPin: "ADC0/GP26", label: "Độ ẩm đất analog" },
  { source: "raspberry_pi_pico_w", target: "lcd1602_i2c", type: "power", voltage: "5V", current: "30mA", sourcePin: "VBUS", targetPin: "VCC", label: "Nguồn LCD" },
  { source: "raspberry_pi_pico_w", target: "lcd1602_i2c", type: "data", protocol: "i2c", sourcePin: "GP4/SDA", targetPin: "SDA", label: "I2C SDA" },
  { source: "raspberry_pi_pico_w", target: "lcd1602_i2c", type: "data", protocol: "i2c", sourcePin: "GP5/SCL", targetPin: "SCL", label: "I2C SCL" },
  { source: "raspberry_pi_pico_w", target: "relay_1_channel", type: "data", protocol: "gpio", sourcePin: "GP14", targetPin: "IN", label: "Điều khiển relay" },
  { source: "raspberry_pi_pico_w", target: "relay_1_channel", type: "power", voltage: "5V", current: "70mA", sourcePin: "VBUS", targetPin: "VCC", label: "Nguồn cuộn relay" },
  { source: "relay_1_channel", target: "mini_pump_5v", type: "power", voltage: "5V", current: "500mA", sourcePin: "NO/COM", targetPin: "+5V/GND", label: "Nguồn bơm được đóng cắt" },
  { source: "raspberry_pi_pico_w", target: "system_ground", type: "ground", sourcePin: "GND", targetPin: "COMMON GND", label: "Mass chung logic" },
  { source: "mini_pump_5v", target: "flyback_diode", type: "protection", sourcePin: "+/-", targetPin: "Cathode/Anode", label: "Diode chống điện áp ngược" },
];

export const mechanicalConnections = [
  { source: "enclosure_base", target: "raspberry_pi_pico_w", label: "4 × chân đỡ và vít M2" },
  { source: "enclosure_base", target: "relay_1_channel", label: "2 × chân đỡ và vít M2" },
  { source: "enclosure_front", target: "lcd1602_i2c", label: "Cửa sổ 72 × 26 mm + 4 vít M2" },
  { source: "enclosure_side", target: "dht11", label: "Ngàm trượt có mái che thông gió" },
  { source: "enclosure_side", target: "soil_moisture", label: "Lỗ cáp Ø6 mm + gioăng" },
  { source: "enclosure_side", target: "mini_pump_5v", label: "Lỗ ống Ø6 mm + kẹp chống kéo" },
  { source: "enclosure_base", target: "enclosure_lid", label: "4 × vít M3, thành chồng mí 0.8 mm" },
  { source: "mini_pump_5v", target: "water_tube", label: "Ống silicone trong Ø4 mm" },
];

export const instructionPreamble = {
  tools: [
    "Máy tính cài Thonny và MicroPython",
    "Cáp USB dữ liệu",
    "Breadboard và dây jumper",
    "Đồng hồ vạn năng",
    "Mỏ hàn đầu nhỏ và thiếc hàn",
    "Tua vít M2/M3",
    "Máy in 3D FDM và nhựa PETG/PLA",
    "Kính bảo hộ và khay chống tràn nước",
  ],
  assumptions: [
    "Học sinh đã biết biến, điều kiện và vòng lặp Python cơ bản",
    "Giáo viên kiểm tra mạch nguồn trước khi cấp điện cho bơm",
    "Không thao tác nước khi cáp USB hoặc nguồn đang hở",
    "Bơm 5V dùng nguồn riêng và được điều khiển qua relay",
  ],
};

export const instructionSteps = [
  { id: "fabricate", title: "Chế tạo", subSteps: [
    { id: "fabricate_1", title: "In vỏ, nắp và mái che DHT11; làm sạch support", partIds: ["enclosure_base", "enclosure_lid", "dht11"] },
    { id: "fabricate_2", title: "Kiểm tra cửa sổ LCD, lỗ cáp và khoảng hở 0.8 mm", partIds: ["lcd1602_i2c", "soil_moisture", "mini_pump_5v"] },
  ] },
  { id: "wire", title: "Đấu dây", subSteps: [
    { id: "wire_1", title: "Nối DHT11 DATA vào GP15 và cảm biến đất AO vào ADC0/GP26", partIds: ["raspberry_pi_pico_w", "dht11", "soil_moisture"] },
    { id: "wire_2", title: "Nối LCD1602 theo I2C: SDA GP4, SCL GP5", partIds: ["raspberry_pi_pico_w", "lcd1602_i2c"] },
    { id: "wire_3", title: "Nối relay IN vào GP14; đấu bơm qua NO/COM bằng nguồn 5V riêng", partIds: ["raspberry_pi_pico_w", "relay_1_channel", "mini_pump_5v"] },
    { id: "wire_4", title: "Đo thông mạch, kiểm tra chập nguồn và gắn diode flyback", partIds: ["relay_1_channel", "mini_pump_5v"] },
  ] },
  { id: "bringup", title: "Lập trình và chạy thử", subSteps: [
    { id: "bringup_1", title: "Nạp MicroPython và chạy thử từng cảm biến riêng lẻ", partIds: ["raspberry_pi_pico_w", "dht11", "soil_moisture"] },
    { id: "bringup_2", title: "Hiệu chuẩn ngưỡng khô/ẩm bằng ba mẫu đất", partIds: ["soil_moisture"] },
    { id: "bringup_3", title: "Kiểm tra relay không tải, sau đó chạy bơm tối đa 3 giây", partIds: ["relay_1_channel", "mini_pump_5v"] },
    { id: "bringup_4", title: "Hiển thị dữ liệu và trạng thái tưới trên LCD", partIds: ["lcd1602_i2c", "raspberry_pi_pico_w"] },
  ] },
  { id: "assemble", title: "Lắp ráp và đánh giá", subSteps: [
    { id: "assemble_1", title: "Cố định Pico W, relay và LCD vào vỏ bằng vít M2", partIds: ["raspberry_pi_pico_w", "relay_1_channel", "lcd1602_i2c"] },
    { id: "assemble_2", title: "Luồn dây cảm biến, ống nước và lắp chi tiết chống kéo", partIds: ["soil_moisture", "mini_pump_5v"] },
    { id: "assemble_3", title: "Chạy checklist rò nước, quá dòng, dữ liệu và cơ cấu chấp hành", partIds: ["raspberry_pi_pico_w", "mini_pump_5v"] },
  ] },
];

function slugify(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D")
    .toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
}

function hash(value: string) {
  let result = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    result ^= value.charCodeAt(index);
    result = Math.imul(result, 16777619);
  }
  return (result >>> 0).toString(16).padStart(8, "0");
}

function csvCell(value: string | number) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function buildGuide(input: ProjectExportInput) {
  const preamble = input.instructionPreamble ?? instructionPreamble;
  const steps = input.instructionSteps ?? instructionSteps;
  const checklist = input.checklist ?? ["Không chập nguồn và GND", "Cơ cấu chấp hành hoạt động đúng", "Đã hoàn tất kiểm tra an toàn", "Học sinh giải thích được nguyên lý hệ thống"];
  const sections = steps.map((section, sectionIndex) => {
    const subSteps = section.subSteps.map((step, stepIndex) =>
      `### ${sectionIndex + 1}.${stepIndex + 1} ${step.title}\n\nLinh kiện: ${step.partIds.join(", ")}\n`,
    ).join("\n");
    return `## ${sectionIndex + 1}. ${section.title}\n\n${subSteps}`;
  }).join("\n");

  return `# ${input.projectName}\n\n${input.projectDescription}\n\n` +
    `- Phiên bản: ${input.version}\n- Trạng thái: ${input.status}\n- Dự toán: ${input.totalBudget.toFixed(2)} USD\n- CAD confidence: ${input.cad.validation.score}/100\n\n` +
    `## Dụng cụ\n\n${preamble.tools.map((tool) => `- ${tool}`).join("\n")}\n\n` +
    `## Giả định và an toàn\n\n${preamble.assumptions.map((item) => `- ${item}`).join("\n")}\n\n` + sections +
    `\n## Checklist nghiệm thu\n\n${checklist.map((item) => `- [ ] ${item}`).join("\n")}\n`;
}

export function buildProjectTextFiles(input: ProjectExportInput) {
  const prefix = slugify(input.projectName);
  const extraParts = input.extraParts ?? fabricationParts;
  const positionLabels = ["Front Left", "Front Right", "Rear Left", "Rear Right"];
  const expandedParts = input.parts.flatMap((part) => {
    if (!input.expandPartIds?.includes(part.exportId) || part.qty !== 4) return [part];
    const singularNames: Record<string, string> = { brushless_motors: "Motor", drone_arms: "Arm", propellers: "Propeller", motor_mounts: "Motor Mount" };
    const singularName = singularNames[part.exportId] ?? part.name.replace(" ×4", "").replace("Four ", "");
    return positionLabels.map((position, index) => ({ ...part, id: `${part.id}-${index + 1}`, exportId: `${part.exportId}_${position.toLowerCase().replaceAll(" ", "_")}`, name: `${position} ${singularName}`, qty: 1 }));
  });
  const allParts = [...expandedParts, ...extraParts];
  const projectElectricalConnections = input.electricalConnections ?? electricalConnections;
  const projectMechanicalConnections = input.mechanicalConnections ?? mechanicalConnections;
  const projectInstructionPreamble = input.instructionPreamble ?? instructionPreamble;
  const projectInstructionSteps = input.instructionSteps ?? instructionSteps;
  const nodes = allParts.map((part, index) => {
    const position = input.cad.scene.find((item) => item.label.toLowerCase().includes(part.name.split(" ")[0].toLowerCase()))?.position ?? [index * 12 - 30, 5, 0];
    return {
    id: part.exportId,
    name: part.name,
    productName: part.productName,
    description: part.description,
    category: part.category,
    type: part.subtype,
    pins: part.pins.split(" · "),
    dimensions: part.dimensions,
    quantity: part.qty,
    estimatedCost: part.price,
    purchaseUrl: part.purchaseUrl || null,
    boundingBox: (() => {
      const [width, height, depth] = part.dimensions.replace("mm", "").split("x").map(Number);
      return { width, height, depth };
    })(),
    position3d: { x: position[0], y: position[1], z: position[2] },
  }; });
  const mechLayoutHash = hash(`${JSON.stringify(input.cad.scene)}:${JSON.stringify(projectMechanicalConnections)}`);
  const config = {
    projectName: input.projectName,
    nodes,
    electricalConnections: projectElectricalConnections,
    mechanicalConnections: projectMechanicalConnections,
    projectDescription: input.projectDescription,
    imagePromptSnapshot: {
      description: `${input.projectDescription}\n\nLinh kiện: ${input.parts.map((part) => part.name).join(", ")}\n\nCAD: ${input.cad.metrics.dimensionsMm.join(" × ")} mm, ${input.cad.metrics.primitiveCount} primitives.`,
      tags: input.imageTags ?? ["Raspberry Pi Pico W", "STEM lớp 10", "nhà kính thông minh", "MicroPython"],
    },
    originalPrompt: input.originalPrompt,
    plan: input.plan ?? "Thiết kế → kiểm tra an toàn → chế tạo → đấu dây → lập trình → đánh giá",
    notes: input.notes ?? ["Thời lượng 90 phút", "Thiết kế dành cho giáo dục STEM", "Kiểm tra nguồn trước khi vận hành"],
    projectId: input.projectId,
    componentCount: input.componentCount ?? allParts.length,
    version: input.version,
    status: input.status,
    budget: {
      electronicsAndModules: Number(input.totalBudget.toFixed(2)),
      completePackage: Number(allParts.reduce((sum, part) => sum + part.qty * part.price, 0).toFixed(2)),
      currency: "USD",
    },
    mechLayoutHash,
    cad: input.cad,
    mcp: input.mcp,
    instructionPreamble: projectInstructionPreamble,
    instructionSteps: projectInstructionSteps,
  };
  const csvHeader = ["Name", "Product Name", "Description", "Category", "Type", "Quantity", "Estimated Cost", "Total Cost", "URL"];
  const csvRows = allParts.map((part) => [part.name, part.productName, part.description, part.category, part.subtype, part.qty, part.price.toFixed(2), (part.qty * part.price).toFixed(2), part.purchaseUrl]);
  return {
    prefix,
    files: {
      [`${prefix}_CONFIG.json`]: JSON.stringify(config, null, 2),
      [`${prefix}_PARTS.csv`]: "\uFEFF" + [csvHeader, ...csvRows].map((row) => row.map(csvCell).join(",")).join("\n"),
      [`${prefix}_ELECTRICAL_CONNECTIONS.json`]: JSON.stringify(projectElectricalConnections, null, 2),
      [`${prefix}_MECHANICAL_CONNECTIONS.json`]: JSON.stringify(projectMechanicalConnections, null, 2),
      [`${prefix}_GUIDE.md`]: buildGuide(input),
    },
  };
}

async function createVisualPng(input: ProjectExportInput) {
  const projectElectricalConnections = input.electricalConnections ?? electricalConnections;
  const projectMechanicalConnections = input.mechanicalConnections ?? mechanicalConnections;
  const isUav = input.projectId === "budget-mini-uav";
  const canvas = document.createElement("canvas");
  canvas.width = 1344;
  canvas.height = 768;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas is unavailable");

  context.fillStyle = "#101713";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.strokeStyle = "#25312a";
  context.lineWidth = 1;
  for (let x = 0; x < canvas.width; x += 32) { context.beginPath(); context.moveTo(x, 0); context.lineTo(x, canvas.height); context.stroke(); }
  for (let y = 0; y < canvas.height; y += 32) { context.beginPath(); context.moveTo(0, y); context.lineTo(canvas.width, y); context.stroke(); }

  context.fillStyle = "#c8ff35";
  context.font = "700 20px ui-monospace, monospace";
  context.fillText("DIY / STEM HARDWARE PACKAGE", 70, 64);
  context.fillStyle = "#f1f5ef";
  context.font = "700 50px system-ui, sans-serif";
  context.fillText(input.projectName.toUpperCase(), 70, 126);
  context.fillStyle = "#aab7ae";
  context.font = "22px system-ui, sans-serif";
  context.fillText(`${isUav ? "F4 AIO QUADCOPTER" : "PICO W"} · VERSION ${input.version} · ${input.status.toUpperCase()} · ${input.totalBudget.toFixed(2)} USD`, 72, 166);

  const cards = [
    { x: 72, y: 232, w: 270, h: 390, title: "PROJECT DATA" },
    { x: 374, y: 232, w: 590, h: 390, title: "SYSTEM ARCHITECTURE" },
    { x: 996, y: 232, w: 276, h: 390, title: "VALIDATION" },
  ];
  cards.forEach((card) => { context.fillStyle = "#18211c"; context.fillRect(card.x, card.y, card.w, card.h); context.strokeStyle = "#405047"; context.strokeRect(card.x, card.y, card.w, card.h); context.fillStyle = "#c8ff35"; context.font = "700 16px ui-monospace, monospace"; context.fillText(card.title, card.x + 22, card.y + 34); });

  context.fillStyle = "#f1f5ef";
  context.font = "700 42px ui-monospace, monospace";
  context.fillText(String(input.componentCount ?? input.parts.length).padStart(2, "0"), 94, 330);
  context.fillText(String(projectElectricalConnections.length).padStart(2, "0"), 94, 430);
  context.fillText(String(projectMechanicalConnections.length).padStart(2, "0"), 94, 530);
  context.fillStyle = "#91a097";
  context.font = "16px system-ui, sans-serif";
  context.fillText("LINH KIỆN", 168, 315);
  context.fillText("KẾT NỐI ĐIỆN", 168, 415);
  context.fillText("LIÊN KẾT CƠ KHÍ", 168, 515);

  const boxes = isUav ? [
    { x: 574, y: 312, w: 184, h: 88, label: "FLIGHT CTRL", sub: "F4 AIO + 4 ESC", color: "#c8ff35" },
    { x: 410, y: 470, w: 142, h: 70, label: "MOTORS ×4", sub: "M1–M4", color: "#49a8e8" },
    { x: 590, y: 470, w: 142, h: 70, label: "RECEIVER", sub: "CRSF / SBUS", color: "#8c79e8" },
    { x: 770, y: 470, w: 150, h: 70, label: "LIPO BATTERY", sub: "2S / 3S", color: "#e67b37" },
  ] : [
    { x: 574, y: 312, w: 184, h: 88, label: "RASPBERRY PI", sub: "PICO W", color: "#c8ff35" },
    { x: 410, y: 470, w: 142, h: 70, label: "DHT11", sub: "GP15", color: "#49a8e8" },
    { x: 590, y: 470, w: 142, h: 70, label: "LCD1602", sub: "I2C", color: "#8c79e8" },
    { x: 770, y: 470, w: 150, h: 70, label: "RELAY + PUMP", sub: "GP14 / 5V", color: "#e67b37" },
  ];
  context.lineWidth = 3;
  boxes.slice(1).forEach((box) => { context.strokeStyle = box.color; context.beginPath(); context.moveTo(666, 400); context.lineTo(box.x + box.w / 2, box.y); context.stroke(); });
  boxes.forEach((box) => { context.fillStyle = "#111713"; context.fillRect(box.x, box.y, box.w, box.h); context.strokeStyle = box.color; context.strokeRect(box.x, box.y, box.w, box.h); context.fillStyle = "#f1f5ef"; context.font = "700 16px system-ui, sans-serif"; context.fillText(box.label, box.x + 14, box.y + 31); context.fillStyle = box.color; context.font = "14px ui-monospace, monospace"; context.fillText(box.sub, box.x + 14, box.y + 56); });

  context.fillStyle = input.cad.validation.passed ? "#c8ff35" : "#ff6d5e";
  context.font = "700 76px ui-monospace, monospace";
  context.fillText(String(input.cad.validation.score), 1018, 350);
  context.fillStyle = "#f1f5ef";
  context.font = "700 18px system-ui, sans-serif";
  context.fillText("BUILD CONFIDENCE", 1020, 386);
  context.fillStyle = "#91a097";
  context.font = "16px system-ui, sans-serif";
  context.fillText(`${input.cad.validation.checksPassed}/${input.cad.validation.checksTotal} kiểm tra đạt`, 1020, 438);
  context.fillText(`${input.cad.metrics.dimensionsMm.join(" × ")} mm`, 1020, 476);
  context.fillText(`${input.cad.metrics.estimatedMaterialGrams.toFixed(0)} g vật liệu`, 1020, 514);
  context.fillText(`${input.cad.metrics.estimatedPrintMinutes} phút in`, 1020, 552);

  context.fillStyle = "#718078";
  context.font = "14px ui-monospace, monospace";
  context.fillText("CONFIG · PARTS · ELECTRICAL · MECHANICAL · GUIDE · VISUAL", 72, 702);

  const blob = await new Promise<Blob>((resolve, reject) => canvas.toBlob((value) => value ? resolve(value) : reject(new Error("PNG export failed")), "image/png"));
  return new Uint8Array(await blob.arrayBuffer());
}

export async function buildProjectZip(input: ProjectExportInput, visualPng?: Uint8Array) {
  const { zipSync, strToU8 } = await import("fflate");
  const { prefix, files } = buildProjectTextFiles(input);
  const archiveFiles: Record<string, Uint8Array> = {};
  Object.entries(files).forEach(([name, content]) => { archiveFiles[name] = strToU8(content); });
  archiveFiles[`${prefix}_VISUAL.png`] = visualPng ?? await createVisualPng(input);
  return { filename: `${prefix}_files.zip`, bytes: zipSync(archiveFiles, { level: 6 }) };
}
