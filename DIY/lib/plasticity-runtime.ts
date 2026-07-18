import type { CadProjectResult, ScenePrimitive } from "./cad-engine.js";

export const DEFAULT_PLASTICITY_BRIDGE_URL = "http://127.0.0.1:44044";

export type PlasticityCadPayload = {
  apiVersion: 1;
  projectId: string;
  draftId: string;
  title: string;
  units: "mm";
  primitives: ScenePrimitive[];
};

export type PlasticityBridgeResult = {
  accepted: boolean;
  requestId: string;
  primitiveCount: number;
};

export function createPlasticityPayload(project: Pick<CadProjectResult, "projectId" | "draftId" | "request" | "scene">): PlasticityCadPayload {
  if (!project.scene.length) throw new Error("Dự án chưa có hình học CAD để gửi sang Plasticity.");
  if (project.scene.length > 250) throw new Error("Plasticity bridge hỗ trợ tối đa 250 primitive mỗi lần.");
  for (const primitive of project.scene) {
    const values = [...primitive.size, ...primitive.position, ...(primitive.rotation ?? [])];
    if (values.some((value) => !Number.isFinite(value)) || primitive.size.some((value) => value <= 0)) {
      throw new Error(`Primitive ${primitive.id} có kích thước hoặc vị trí không hợp lệ.`);
    }
  }
  return { apiVersion: 1, projectId: project.projectId, draftId: project.draftId, title: project.request.slice(0, 160), units: "mm", primitives: project.scene };
}

export async function sendProjectToPlasticity(project: CadProjectResult, bridgeUrl = DEFAULT_PLASTICITY_BRIDGE_URL): Promise<PlasticityBridgeResult> {
  const controller = new AbortController();
  const timeout = globalThis.setTimeout(() => controller.abort(), 5000);
  try {
    const response = await fetch(`${bridgeUrl}/v1/cad/import`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(createPlasticityPayload(project)),
      signal: controller.signal,
    });
    const body = await response.json().catch(() => ({})) as Partial<PlasticityBridgeResult> & { error?: string };
    if (!response.ok || !body.accepted || !body.requestId) throw new Error(body.error || `Plasticity bridge trả về HTTP ${response.status}.`);
    return body as PlasticityBridgeResult;
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") throw new Error("Plasticity không phản hồi trong 5 giây.");
    if (error instanceof TypeError) throw new Error("Không tìm thấy Plasticity bridge tại 127.0.0.1:44044. Hãy mở bản Plasticity đã tích hợp bridge.");
    throw error;
  } finally {
    globalThis.clearTimeout(timeout);
  }
}
