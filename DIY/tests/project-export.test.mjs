import assert from "node:assert/strict";
import test from "node:test";
import { strFromU8, unzipSync } from "fflate";
import { buildCadProject } from "../dist-mcp/lib/cad-engine.js";
import { buildProjectTextFiles, buildProjectZip } from "../dist-mcp/lib/project-export.js";
import { UAV_COMPONENT_COUNT, uavElectricalConnections, uavInstructionPreamble, uavInstructionSteps, uavMechanicalConnections, uavParts } from "../dist-mcp/lib/uav-data.js";

const input = {
  projectName: "Nhà kính thông minh Pico W",
  projectId: "greenhouse-pico-w",
  version: 4,
  status: "draft",
  originalPrompt: "Thiết kế nhà kính mini",
  projectDescription: "Nhà kính STEM tự động tưới.",
  parts: [{
    id: "P01",
    exportId: "raspberry_pi_pico_w",
    name: "Raspberry Pi Pico W",
    productName: "Raspberry Pi Pico W RP2040",
    description: "Vi điều khiển trung tâm.",
    category: "electrical",
    subtype: "mcu",
    type: "MCU",
    qty: 1,
    price: 8.2,
    color: "lime",
    pins: "3V3 · GP14 · GND",
    dimensions: "51x2x21mm",
    purchaseUrl: "",
  }],
  cad: buildCadProject("Thiết kế vỏ Pico W có LCD và lỗ luồn ống nước 8 mm."),
  mcp: [{ name: "cad.validate_design", state: "PASSED", time: "0.2s" }],
  totalBudget: 8.2,
};

test("project export mirrors the six-file Blueprint package", async () => {
  const { prefix, files } = buildProjectTextFiles(input);
  assert.equal(prefix, "nha_kinh_thong_minh_pico_w");
  assert.equal(Object.keys(files).length, 5);

  const archive = await buildProjectZip(input, new Uint8Array([137, 80, 78, 71]));
  const extracted = unzipSync(archive.bytes);
  const names = Object.keys(extracted).sort();
  assert.equal(names.length, 6);
  assert.ok(names.includes(`${prefix}_CONFIG.json`));
  assert.ok(names.includes(`${prefix}_PARTS.csv`));
  assert.ok(names.includes(`${prefix}_ELECTRICAL_CONNECTIONS.json`));
  assert.ok(names.includes(`${prefix}_MECHANICAL_CONNECTIONS.json`));
  assert.ok(names.includes(`${prefix}_GUIDE.md`));
  assert.ok(names.includes(`${prefix}_VISUAL.png`));

  const config = JSON.parse(strFromU8(extracted[`${prefix}_CONFIG.json`]));
  assert.equal(config.projectId, "greenhouse-pico-w");
  assert.equal(config.nodes.length, 7);
  assert.equal(config.electricalConnections.length, 12);
  assert.equal(config.nodes[0].position3d.x, -17);
  assert.match(strFromU8(extracted[`${prefix}_GUIDE.md`]), /Checklist nghiệm thu/);
});

test("Budget Mini UAV export preserves the researched project totals", async () => {
  const uavInput = {
    projectName: "Budget Mini UAV",
    projectId: "budget-mini-uav",
    version: 4,
    status: "draft",
    originalPrompt: "design 1 UAV cheap price",
    projectDescription: "A single-unit budget mini UAV.",
    parts: uavParts,
    cad: buildCadProject(),
    mcp: [],
    totalBudget: 130.14,
    componentCount: UAV_COMPONENT_COUNT,
    extraParts: [],
    expandPartIds: ["brushless_motors", "drone_arms", "propellers", "motor_mounts"],
    electricalConnections: uavElectricalConnections,
    mechanicalConnections: uavMechanicalConnections,
    instructionPreamble: uavInstructionPreamble,
    instructionSteps: uavInstructionSteps,
    imageTags: ["cheap price", "single unit", "UAV design"],
  };
  const archive = await buildProjectZip(uavInput, new Uint8Array([137, 80, 78, 71]));
  const extracted = unzipSync(archive.bytes);
  const config = JSON.parse(strFromU8(extracted["budget_mini_uav_CONFIG.json"]));
  assert.equal(Object.keys(extracted).length, 6);
  assert.equal(config.nodes.length, 30);
  assert.equal(config.electricalConnections.length, 7);
  assert.equal(config.mechanicalConnections.length, 30);
  assert.equal(config.budget.completePackage, 130.14);
});
