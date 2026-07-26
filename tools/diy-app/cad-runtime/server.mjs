#!/usr/bin/env node
import { createReadStream, existsSync } from "node:fs";
import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import { createServer } from "node:http";
import { spawn } from "node:child_process";
import { randomUUID } from "node:crypto";
import { dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const runtimeDir = dirname(fileURLToPath(import.meta.url));
const artifactsRoot = resolve(process.env.DIY_CAD_ARTIFACTS_DIR || join(runtimeDir, "artifacts"));
const host = "127.0.0.1";
const port = Number(process.env.DIY_CAD_PORT || 44045);
const maxBytes = 2 * 1024 * 1024;
const workerPath = join(runtimeDir, "freecad_worker.py");
const configuredOrigins = new Set((process.env.DIY_CAD_ALLOWED_ORIGINS || "").split(",").map((item) => item.trim()).filter(Boolean));

const commonCommands = [
  process.env.FREECAD_CMD,
  "/Applications/FreeCAD.app/Contents/Resources/bin/FreeCADCmd",
  "/usr/local/bin/FreeCADCmd",
  "/opt/homebrew/bin/FreeCADCmd",
  "FreeCADCmd",
].filter(Boolean);

function isPayload(value) {
  if (!value || value.apiVersion !== 1 || value.units !== "mm" || value.coordinateSystem !== "diy-y-up") return false;
  if (!Array.isArray(value.primitives) || value.primitives.length < 1 || value.primitives.length > 250) return false;
  return value.primitives.every((primitive) =>
    primitive && typeof primitive.id === "string" && typeof primitive.label === "string" &&
    ["box", "cylinder", "plate", "motor", "propeller", "pcb", "battery", "wire", "screw", "sphere", "cone", "tube", "lathe", "wing"].includes(primitive.kind) &&
    Array.isArray(primitive.size) && primitive.size.length === 3 && primitive.size.every((item) => Number.isFinite(item) && item > 0) &&
    Array.isArray(primitive.position) && primitive.position.length === 3 && primitive.position.every(Number.isFinite));
}

function isAllowedOrigin(origin) {
  if (!origin) return true;
  if (configuredOrigins.has(origin)) return true;
  try {
    const url = new URL(origin);
    return ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname) && ["http:", "https:"].includes(url.protocol);
  } catch {
    return false;
  }
}

function cors(request, response) {
  const origin = request.headers.origin;
  if (origin && isAllowedOrigin(origin)) response.setHeader("access-control-allow-origin", origin);
  response.setHeader("access-control-allow-methods", "GET, POST, OPTIONS");
  response.setHeader("access-control-allow-headers", "content-type");
  response.setHeader("access-control-allow-private-network", "true");
  response.setHeader("vary", "origin");
}

function json(request, response, status, value) {
  cors(request, response);
  response.writeHead(status, { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" });
  response.end(JSON.stringify(value));
}

async function readJson(request) {
  let size = 0;
  const chunks = [];
  for await (const chunk of request) {
    size += chunk.length;
    if (size > maxBytes) throw new Error("Payload exceeds 2 MB");
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

async function findFreeCad() {
  for (const command of commonCommands) {
    if (command.includes("/") && !existsSync(command)) continue;
    const usable = await new Promise((done) => {
      const child = spawn(command, ["--version"], { stdio: "ignore" });
      child.once("error", () => done(false));
      child.once("exit", (code) => done(code === 0));
    });
    if (usable) return command;
  }
  return null;
}

function runWorker(command, inputPath, outputDir) {
  return new Promise((done, reject) => {
    const child = spawn(command, [workerPath], {
      stdio: ["ignore", "pipe", "pipe"],
      env: { ...process.env, DIY_CAD_INPUT: inputPath, DIY_CAD_OUTPUT: outputDir },
    });
    let stdout = "";
    let stderr = "";
    const timer = setTimeout(() => {
      child.kill("SIGKILL");
      reject(new Error("FreeCAD job exceeded the 120 second limit"));
    }, 120_000);
    child.stdout.on("data", (chunk) => { stdout += chunk; });
    child.stderr.on("data", (chunk) => { stderr += chunk; });
    child.once("error", (error) => { clearTimeout(timer); reject(error); });
    child.once("exit", (code) => {
      clearTimeout(timer);
      if (code === 0) done(stdout);
      else reject(new Error((stderr || stdout || `FreeCADCmd exited with ${code}`).slice(-2000)));
    });
  });
}

async function build(payload) {
  const command = await findFreeCad();
  if (!command) throw new Error("FreeCADCmd chưa được cài đặt. Đặt FREECAD_CMD hoặc cài FreeCAD để bật CAD kernel.");
  const jobId = randomUUID();
  const outputDir = join(artifactsRoot, jobId);
  await mkdir(outputDir, { recursive: true });
  const inputPath = join(outputDir, "input.json");
  await writeFile(inputPath, JSON.stringify(payload), { mode: 0o600 });
  await runWorker(command, inputPath, outputDir);
  const manifest = JSON.parse(await readFile(join(outputDir, "manifest.json"), "utf8"));
  const files = await readdir(outputDir);
  const artifacts = [];
  for (const name of files.filter((name) => /\.(FCStd|step|stl|json)$/i.test(name) && name !== "input.json")) {
    const info = await stat(join(outputDir, name));
    const extension = extname(name).toLowerCase();
    artifacts.push({
      kind: extension === ".fcstd" ? "fcstd" : extension === ".step" ? "step" : extension === ".stl" ? "stl" : "manifest",
      name,
      url: `http://${host}:${port}/artifacts/${jobId}/${encodeURIComponent(name)}`,
      bytes: info.size,
    });
  }
  return { accepted: true, jobId, engine: manifest.engine, primitiveCount: manifest.primitiveCount, artifacts };
}

await mkdir(artifactsRoot, { recursive: true });
createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://${host}:${port}`);
    if (!isAllowedOrigin(request.headers.origin)) return json(request, response, 403, { error: "Origin is not allowed" });
    if (request.method === "OPTIONS") return json(request, response, 204, {});
    if (request.method === "GET" && url.pathname === "/health") {
      const command = await findFreeCad();
      return json(request, response, command ? 200 : 503, { status: command ? "ready" : "unavailable", engine: "FreeCAD/OpenCascade", command });
    }
    if (request.method === "POST" && url.pathname === "/v1/build") {
      const payload = await readJson(request);
      if (!isPayload(payload)) return json(request, response, 400, { error: "CAD payload không hợp lệ hoặc vượt quá 250 primitive." });
      return json(request, response, 200, await build(payload));
    }
    const match = url.pathname.match(/^\/artifacts\/([0-9a-f-]{36})\/([^/]+)$/i);
    if (request.method === "GET" && match) {
      const filePath = join(artifactsRoot, match[1], decodeURIComponent(match[2]));
      if (!filePath.startsWith(`${join(artifactsRoot, match[1])}/`) || !existsSync(filePath)) return json(request, response, 404, { error: "Artifact not found" });
      cors(request, response);
      response.writeHead(200, { "content-type": "application/octet-stream", "content-disposition": `attachment; filename=\"${match[2].replaceAll('"', '')}\"` });
      return createReadStream(filePath).pipe(response);
    }
    return json(request, response, 404, { error: "Not found" });
  } catch (error) {
    return json(request, response, 500, { error: error instanceof Error ? error.message : "CAD runtime failed" });
  }
}).listen(port, host, () => {
  console.log(`DIY CAD runtime listening on http://${host}:${port}`);
});
