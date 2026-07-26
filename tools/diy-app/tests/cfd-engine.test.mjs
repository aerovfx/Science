import assert from "node:assert/strict";
import test from "node:test";
import { buildCadProject } from "../dist-mcp/lib/cad-engine.js";
import { analyzeAerodynamics } from "../dist-mcp/lib/cfd-engine.js";

test("CFD preflight passes the symmetric Budget Mini UAV geometry", () => {
  const result = analyzeAerodynamics(buildCadProject());
  assert.equal(result.mode, "CFD-LITE");
  assert.equal(result.passed, true);
  assert.equal(result.flowSymmetryPct, 100);
  assert.ok(result.rotorClearanceMm >= 20);
  assert.equal(result.checks.length, 4);
});

test("CFD preflight detects asymmetric rotor placement", () => {
  const project = buildCadProject();
  const propeller = project.scene.find((primitive) => primitive.id === "propeller-fl");
  assert.ok(propeller);
  propeller.position = [-25, propeller.position[1], -25];
  const result = analyzeAerodynamics(project);
  assert.equal(result.passed, false);
  assert.ok(result.flowSymmetryPct < 95 || result.rotorClearanceMm < 20);
});
