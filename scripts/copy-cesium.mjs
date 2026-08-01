// Copies Cesium's static runtime assets (Workers, Assets, Widgets, ThirdParty)
// from node_modules into public/cesium so the app can serve them via
// window.CESIUM_BASE_URL = "/cesium". Runs on postinstall.
import { cpSync, existsSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const src = resolve(root, "node_modules/cesium/Build/Cesium");
const dest = resolve(root, "public/cesium");

if (!existsSync(src)) {
  console.warn("[copy-cesium] Cesium build assets not found — skipping.");
  process.exit(0);
}

rmSync(dest, { recursive: true, force: true });
cpSync(src, dest, { recursive: true });
console.log("[copy-cesium] Cesium assets copied to public/cesium");
