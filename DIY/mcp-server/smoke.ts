import assert from "node:assert/strict";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const transport = new StdioClientTransport({
  command: process.execPath,
  args: ["dist-mcp/mcp-server/index.js"],
});
const client = new Client({ name: "diy-cad-smoke-test", version: "0.2.0" });

await client.connect(transport);
const tools = await client.listTools();
assert.deepEqual(
  tools.tools.map((tool) => tool.name).sort(),
  ["cad.generate_feature_tree", "cad.render_preview", "cad.validate_design"],
);

const generated = await client.callTool({
  name: "cad.generate_feature_tree",
  arguments: { request: "Thiết kế vỏ Pico W có LCD và lỗ luồn ống nước 8 mm." },
});
assert.equal(generated.isError, undefined);
assert.ok(generated.structuredContent);

const validated = await client.callTool({
  name: "cad.validate_design",
  arguments: { request: "Thiết kế vỏ Pico W có LCD và lỗ luồn ống nước 8 mm." },
});
assert.equal(validated.isError, undefined);
assert.equal((validated.structuredContent as { passed: boolean }).passed, true);

await client.close();
console.log("MCP smoke test passed: 3 tools discovered, generation and validation succeeded.");
