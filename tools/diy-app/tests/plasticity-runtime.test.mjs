import assert from "node:assert/strict";
import test from "node:test";
import { createPlasticityPayload } from "../dist-mcp/lib/plasticity-runtime.js";
import { buildEmotoBikeCadProject, EMOTO_BIKE } from "../dist-mcp/lib/emoto-bike-data.js";

test("Plasticity adapter preserves typed CAD scene geometry", () => {
  const payload = createPlasticityPayload({
    projectId: "bike",
    draftId: "draft-1",
    request: "Off-road electric motorcycle",
    scene: [{ id: "battery", label: "72V battery", kind: "battery", size: [400, 250, 150], position: [0, 500, 0], color: "#222222", role: "component" }],
  });
  assert.equal(payload.apiVersion, 1);
  assert.equal(payload.units, "mm");
  assert.equal(payload.primitives[0].id, "battery");
});

test("Plasticity adapter rejects invalid scene geometry", () => {
  assert.throws(() => createPlasticityPayload({ projectId: "bad", draftId: "bad", request: "bad geometry", scene: [{ id: "bad", label: "bad", kind: "box", size: [0, 2, 3], position: [0, 0, 0], color: "#000", role: "component" }] }), /không hợp lệ/);
});

test("off-road motorcycle project includes rear hub BLDC and ESP32 CAD", () => {
  const project = buildEmotoBikeCadProject(EMOTO_BIKE.originalPrompt);
  assert.ok(project.scene.some((primitive) => primitive.id === "hub-motor"));
  assert.ok(project.scene.some((primitive) => primitive.id === "esp32"));
  assert.ok(project.scene.some((primitive) => primitive.id === "lcd"));
  assert.match(project.request, /rear hub BLDC/i);
});
