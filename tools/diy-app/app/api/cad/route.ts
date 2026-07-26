import { buildCadProject, DEFAULT_CAD_REQUEST, DEFAULT_CONSTRAINTS } from "@/lib/cad-engine";
import { z } from "zod";

const requestSchema = z.object({
  request: z.string().min(10).max(2000).default(DEFAULT_CAD_REQUEST),
  baseVersion: z.number().int().min(0).default(3),
  constraints: z.object({
    maxSizeMm: z.tuple([z.number().positive(), z.number().positive(), z.number().positive()]),
    clearanceMm: z.number().min(0.2).max(10),
    wallThicknessMm: z.number().min(0.8).max(12),
    printer: z.enum(["FDM", "SLA", "NONE"]),
  }).default(DEFAULT_CONSTRAINTS),
});

export async function POST(request: Request) {
  try {
    const input = requestSchema.parse(await request.json());
    return Response.json(buildCadProject(input.request, input.constraints, input.baseVersion));
  } catch (error) {
    const message = error instanceof Error ? error.message : "Yêu cầu CAD không hợp lệ.";
    return Response.json({ error: message }, { status: 400 });
  }
}
