import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the DIY STEM workspace", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Budget Mini UAV — DIY STEM Hardware Studio/);
  assert.match(html, /BUDGET MINI UAV/);
  assert.match(html, /BUILD VALIDATION/);
  assert.match(html, /DOWNLOAD/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("CAD API returns a validated feature tree", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("api-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const response = await worker.fetch(
    new Request("http://localhost/api/cad", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ request: "Thiết kế vỏ Pico W có LCD và lỗ luồn ống nước 8 mm." }),
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  assert.equal(response.status, 200);
  const result = await response.json();
  assert.equal(result.validation.passed, true);
  assert.ok(result.operations.length >= 8);
  assert.ok(result.scene.length >= 10);
});
