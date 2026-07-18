#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import * as z from "zod/v4";
import { buildCadProject, DEFAULT_CAD_REQUEST, DEFAULT_CONSTRAINTS } from "../lib/cad-engine.js";

const constraintsShape = {
  maxSizeMm: z.tuple([z.number().positive(), z.number().positive(), z.number().positive()]).default(DEFAULT_CONSTRAINTS.maxSizeMm),
  clearanceMm: z.number().min(0.2).max(10).default(DEFAULT_CONSTRAINTS.clearanceMm),
  wallThicknessMm: z.number().min(0.8).max(12).default(DEFAULT_CONSTRAINTS.wallThicknessMm),
  printer: z.enum(["FDM", "SLA", "NONE"]).default(DEFAULT_CONSTRAINTS.printer),
};

const server = new McpServer(
  { name: "diy-cad", version: "0.2.0" },
  {
    instructions:
      "Luôn gọi cad.generate_feature_tree trước cad.validate_design. Chỉ render preview khi validation không có lỗi. Không tự động commit, export hoặc gửi sản xuất.",
    capabilities: { logging: {} },
  },
);

server.registerTool(
  "cad.generate_feature_tree",
  {
    title: "Generate CAD Feature Tree",
    description: "Chuyển yêu cầu STEM thành feature tree CAD có thể kiểm tra và phát lại.",
    inputSchema: {
      request: z.string().min(10).max(2000).default(DEFAULT_CAD_REQUEST),
      baseVersion: z.number().int().min(0).default(3),
      components: z.array(z.string()).max(50).default([]),
      constraints: z.object(constraintsShape).default(DEFAULT_CONSTRAINTS),
    },
    outputSchema: {
      projectId: z.string(),
      draftId: z.string(),
      baseVersion: z.number(),
      operations: z.array(z.unknown()),
      metrics: z.record(z.string(), z.unknown()),
    },
    annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true },
  },
  async ({ request, baseVersion, constraints }) => {
    const result = buildCadProject(request, constraints, baseVersion);
    const structuredContent = {
      projectId: result.projectId,
      draftId: result.draftId,
      baseVersion: result.baseVersion,
      operations: result.operations,
      metrics: result.metrics,
    };
    return { content: [{ type: "text", text: JSON.stringify(structuredContent, null, 2) }], structuredContent };
  },
);

server.registerTool(
  "cad.validate_design",
  {
    title: "Validate CAD Design",
    description: "Kiểm tra kích thước, thành vỏ, khoảng hở, điểm gá và khả năng thi công.",
    inputSchema: {
      request: z.string().min(10).max(2000).default(DEFAULT_CAD_REQUEST),
      baseVersion: z.number().int().min(0).default(3),
      constraints: z.object(constraintsShape).default(DEFAULT_CONSTRAINTS),
    },
    outputSchema: {
      passed: z.boolean(),
      score: z.number(),
      checksPassed: z.number(),
      checksTotal: z.number(),
      issues: z.array(z.unknown()),
    },
    annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true },
  },
  async ({ request, baseVersion, constraints }) => {
    const structuredContent = buildCadProject(request, constraints, baseVersion).validation;
    return { content: [{ type: "text", text: JSON.stringify(structuredContent, null, 2) }], structuredContent };
  },
);

server.registerTool(
  "cad.render_preview",
  {
    title: "Render CAD Preview",
    description: "Trả scene specification có kiểu dữ liệu để Three.js dựng preview CAD tương tác.",
    inputSchema: {
      request: z.string().min(10).max(2000).default(DEFAULT_CAD_REQUEST),
      baseVersion: z.number().int().min(0).default(3),
      constraints: z.object(constraintsShape).default(DEFAULT_CONSTRAINTS),
      camera: z.enum(["iso", "top", "front"]).default("iso"),
    },
    outputSchema: {
      draftId: z.string(),
      mimeType: z.string(),
      camera: z.string(),
      scene: z.array(z.unknown()),
    },
    annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true },
  },
  async ({ request, baseVersion, constraints, camera }) => {
    const result = buildCadProject(request, constraints, baseVersion);
    const structuredContent = {
      draftId: result.draftId,
      mimeType: "application/vnd.diy.cad-scene+json",
      camera,
      scene: result.scene,
    };
    return { content: [{ type: "text", text: JSON.stringify(structuredContent, null, 2) }], structuredContent };
  },
);

server.registerResource(
  "default-budget-mini-uav-project",
  "cad://projects/budget-mini-uav",
  { title: "DIY Budget Mini UAV CAD Project", mimeType: "application/json" },
  async (uri) => ({ contents: [{ uri: uri.href, mimeType: "application/json", text: JSON.stringify(buildCadProject(), null, 2) }] }),
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("DIY CAD MCP server running on stdio");
}

process.on("SIGINT", async () => {
  await server.close();
  process.exit(0);
});

main().catch((error) => {
  console.error("DIY CAD MCP server failed:", error);
  process.exit(1);
});
