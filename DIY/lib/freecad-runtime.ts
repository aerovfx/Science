import type { CadProjectResult, ScenePrimitive } from "./cad-engine.js";

export const DEFAULT_DIY_CAD_RUNTIME_URL = "http://127.0.0.1:44045";

export type DiyCadPayload = {
  apiVersion: 1;
  projectId: string;
  draftId: string;
  title: string;
  units: "mm";
  coordinateSystem: "diy-y-up";
  primitives: ScenePrimitive[];
};

export type DiyCadArtifact = {
  kind: "fcstd" | "step" | "stl" | "manifest";
  name: string;
  url: string;
  bytes: number;
};

export type DiyCadBuildResult = {
  accepted: true;
  jobId: string;
  engine: "FreeCAD/OpenCascade";
  primitiveCount: number;
  artifacts: DiyCadArtifact[];
};

export function createDiyCadPayload(project: Pick<CadProjectResult, "projectId" | "draftId" | "request" | "scene">): DiyCadPayload {
  if (!project.scene.length) throw new Error("Dự án chưa có hình học CAD để build.");
  if (project.scene.length > 250) throw new Error("DIY CAD runtime hỗ trợ tối đa 250 primitive mỗi job.");
  for (const primitive of project.scene) {
    const values = [...primitive.size, ...primitive.position, ...(primitive.rotation ?? []), ...(primitive.points?.flat() ?? [])];
    if (values.some((value) => !Number.isFinite(value)) || primitive.size.some((value) => value <= 0)) {
      throw new Error(`Primitive ${primitive.id} có kích thước hoặc vị trí không hợp lệ.`);
    }
  }
  return {
    apiVersion: 1,
    projectId: project.projectId,
    draftId: project.draftId,
    title: project.request.slice(0, 160),
    units: "mm",
    coordinateSystem: "diy-y-up",
    primitives: project.scene,
  };
}

export async function buildNativeCadArtifacts(project: CadProjectResult, runtimeUrl = DEFAULT_DIY_CAD_RUNTIME_URL): Promise<DiyCadBuildResult> {
  const controller = new AbortController();
  const timeout = globalThis.setTimeout(() => controller.abort(), 120_000);
  try {
    const response = await fetch(`${runtimeUrl}/v1/build`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(createDiyCadPayload(project)),
      signal: controller.signal,
    });
    const body = await response.json().catch(() => ({})) as Partial<DiyCadBuildResult> & { error?: string };
    if (!response.ok || !body.accepted || !body.jobId || !Array.isArray(body.artifacts)) {
      throw new Error(body.error || `DIY CAD runtime trả về HTTP ${response.status}.`);
    }
    return body as DiyCadBuildResult;
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") throw new Error("DIY CAD runtime không hoàn tất trong 120 giây.");
    if (error instanceof TypeError) throw new Error("Không tìm thấy DIY CAD runtime tại 127.0.0.1:44045. Hãy chạy npm run cad:runtime.");
    throw error;
  } finally {
    globalThis.clearTimeout(timeout);
  }
}
