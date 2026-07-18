import assert from "node:assert/strict";
import test from "node:test";
import { buildCadProject } from "../dist-mcp/lib/cad-engine.js";

test("CAD engine generates a valid enclosure with requested port", () => {
  const result = buildCadProject("Thiết kế vỏ Pico W có LCD và lỗ luồn ống nước 8 mm.");
  assert.equal(result.validation.passed, true);
  assert.ok(result.operations.some((operation) => operation.type === "add_cable_port" && operation.parameters.diameterMm === 8));
  assert.ok(result.scene.some((primitive) => primitive.id === "pico"));
  assert.deepEqual(result.metrics.dimensionsMm, [90, 65, 32]);
});

test("CAD engine blocks unsafe wall thickness", () => {
  const result = buildCadProject("Thiết kế vỏ Pico W có LCD và lỗ luồn dây 6 mm.", {
    maxSizeMm: [140, 100, 60],
    clearanceMm: 0.8,
    wallThicknessMm: 0.9,
    printer: "FDM",
  });
  assert.equal(result.validation.passed, false);
  assert.ok(result.validation.issues.some((issue) => issue.code === "WALL_TOO_THIN"));
});

test("CAD engine generates the Budget Mini UAV frame", () => {
  const result = buildCadProject();
  assert.equal(result.projectId, "budget-mini-uav");
  assert.equal(result.validation.passed, true);
  assert.deepEqual(result.metrics.dimensionsMm, [230, 230, 45]);
  assert.equal(result.scene.filter((primitive) => primitive.kind === "motor").length, 4);
  assert.equal(result.scene.filter((primitive) => primitive.id.startsWith("propeller-")).length, 4);
});
