import assert from "node:assert/strict";
import test from "node:test";
import { createDiyCadPayload } from "../dist-mcp/lib/freecad-runtime.js";
import { buildEmotoBikeCadProject, EMOTO_BIKE } from "../dist-mcp/lib/emoto-bike-data.js";

test("DIY CAD payload preserves the validated electric motorcycle scene", () => {
  const project = buildEmotoBikeCadProject(EMOTO_BIKE.originalPrompt);
  const payload = createDiyCadPayload(project);
  assert.equal(payload.coordinateSystem, "diy-y-up");
  assert.equal(payload.units, "mm");
  assert.equal(payload.primitives.length, 17);
  assert.equal(payload.primitives.find((item) => item.id === "hub-motor")?.kind, "motor");
});

test("DIY CAD payload rejects non-positive dimensions", () => {
  assert.throws(() => createDiyCadPayload({
    projectId: "bad",
    draftId: "bad",
    request: "bad native CAD geometry",
    scene: [{ id: "bad", label: "bad", kind: "box", size: [-1, 2, 3], position: [0, 0, 0], color: "#000", role: "component" }],
  }), /không hợp lệ/);
});
