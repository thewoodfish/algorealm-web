"use client";

import { useEffect, useRef, useState } from "react";

/* ────────────────────────────────────────────────────────────────────────
   Phase 1 vertical slice — "the living operation".
   A real photorealistic 3D mine (Google 3D Tiles via Cesium ion), a slow
   cinematic camera drift, a few moving haul trucks, and one payoff moment:
   a truck stops and thin lines connect the causes — "watch Samaritan think".
   Chrome is deliberately near-invisible; the scene is the product.
   ──────────────────────────────────────────────────────────────────────── */

// Bingham Canyon open-pit copper mine, Utah — huge, dramatic pit topography.
const SITE = { lon: -112.151, lat: 40.5231, centerHeight: 2150 };

// Operation nodes (approximate — tuned live against the real geometry).
const NODES = [
  { id: "truck",   name: "Truck 12",  lon: -112.1515, lat: 40.5205, height: 1960, kind: "event" as const },
  { id: "queue",   name: "Queue",     lon: -112.1548, lat: 40.5218, height: 2010, kind: "cause" as const },
  { id: "crusher", name: "Crusher",   lon: -112.1476, lat: 40.5250, height: 2060, kind: "cause" as const },
  { id: "plant",   name: "Plant",     lon: -112.1442, lat: 40.5268, height: 2090, kind: "cause" as const },
  { id: "road",    name: "Haul road", lon: -112.1522, lat: 40.5178, height: 1940, kind: "cause" as const },
];

export function OperationScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<{ investigate: () => void; reset: () => void } | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "no-token" | "error">("loading");
  const [phase, setPhase] = useState<"idle" | "investigating">("idle");

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_CESIUM_ION_TOKEN;
    if (!token) { setStatus("no-token"); return; }

    let destroyed = false;
    let viewer: any = null;

    (async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const Cesium: any = await import("cesium");
      (window as typeof window & { CESIUM_BASE_URL: string }).CESIUM_BASE_URL = "/cesium";
      Cesium.Ion.defaultAccessToken = token;
      if (destroyed || !containerRef.current) return;

      viewer = new Cesium.Viewer(containerRef.current, {
        animation: false,
        timeline: false,
        baseLayerPicker: false,
        geocoder: false,
        homeButton: false,
        sceneModePicker: false,
        navigationHelpButton: false,
        fullscreenButton: false,
        selectionIndicator: false,
        infoBox: false,
        contextOptions: { webgl: { alpha: true } },
      });

      const scene = viewer.scene;
      scene.backgroundColor = Cesium.Color.fromCssColorString("#0b0d12");
      scene.skyAtmosphere.show = true;
      scene.fog.enabled = true;
      scene.highDynamicRange = false;

      // Cesium World Terrain + default aerial imagery — covers remote sites
      // (mines, farms, ports) that Google's urban-only photoreal tiles miss.
      try {
        viewer.terrainProvider = await Cesium.createWorldTerrainAsync({
          requestVertexNormals: true,
        });
      } catch (e) {
        console.error("[cesium] world terrain failed", e);
      }

      viewer.imageryLayers.removeAll();
      // Same-origin low-res base (bundled with Cesium) so the globe is never
      // blank — e.g. if cross-origin aerial tiles are blocked by the client.
      try {
        const baseUrl =
          (window as typeof window & { CESIUM_BASE_URL?: string }).CESIUM_BASE_URL || "/cesium";
        const base = await Cesium.TileMapServiceImageryProvider.fromUrl(
          `${baseUrl}/Assets/Textures/NaturalEarthII`,
        );
        if (!destroyed) viewer.imageryLayers.addImageryProvider(base);
      } catch (e) {
        console.error("[cesium] base imagery failed", e);
      }
      // High-res aerial on top — Esri World Imagery (no ion asset scope needed).
      try {
        const esri = await Cesium.ArcGisMapServerImageryProvider.fromUrl(
          "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
        );
        if (!destroyed) viewer.imageryLayers.addImageryProvider(esri);
      } catch (e) {
        console.error("[cesium] esri imagery failed", e);
      }

      if (destroyed) return;
      scene.globe.depthTestAgainstTerrain = true;
      scene.globe.enableLighting = true;
      // freeze the sun at local midday so the scene is always well-lit
      viewer.clock.shouldAnimate = false;
      viewer.clock.currentTime = Cesium.JulianDate.fromIso8601("2024-06-21T18:30:00Z");

      const center = Cesium.Cartesian3.fromDegrees(SITE.lon, SITE.lat, SITE.centerHeight);
      const enu = Cesium.Transforms.eastNorthUpToFixedFrame(center);
      const ORBIT_PITCH = Cesium.Math.toRadians(32); // downward tilt
      const ORBIT_RANGE = 7200;
      let heading = Cesium.Math.toRadians(-25);
      let orbiting = true;

      // Orbit with plain setView (a locked lookAtTransform breaks the globe's
      // tile selection). Each frame we place the camera on a circle around the
      // mine, in the site's east-north-up frame, and aim it back at the centre.
      const frameOrbit = () => {
        const hd = ORBIT_RANGE * Math.cos(ORBIT_PITCH); // horizontal distance
        const dh = ORBIT_RANGE * Math.sin(ORBIT_PITCH); // height above centre
        const local = new Cesium.Cartesian4(hd * Math.sin(heading), hd * Math.cos(heading), dh, 1);
        const cw = Cesium.Matrix4.multiplyByVector(enu, local, new Cesium.Cartesian4());
        const camPos = new Cesium.Cartesian3(cw.x, cw.y, cw.z);
        const dir = Cesium.Cartesian3.normalize(
          Cesium.Cartesian3.subtract(center, camPos, new Cesium.Cartesian3()),
          new Cesium.Cartesian3(),
        );
        const geoUp = Cesium.Cartesian3.normalize(camPos, new Cesium.Cartesian3());
        const right = Cesium.Cartesian3.normalize(
          Cesium.Cartesian3.cross(dir, geoUp, new Cesium.Cartesian3()),
          new Cesium.Cartesian3(),
        );
        const up = Cesium.Cartesian3.normalize(
          Cesium.Cartesian3.cross(right, dir, new Cesium.Cartesian3()),
          new Cesium.Cartesian3(),
        );
        viewer.camera.setView({ destination: camPos, orientation: { direction: dir, up } });
      };
      frameOrbit();

      scene.preRender.addEventListener(() => {
        if (!orbiting) return;
        heading += 0.00035;
        frameOrbit();
      });

      // ── colours ──────────────────────────────────────────────────────
      const accent = Cesium.Color.fromCssColorString("#8ab4ff");   // soft blue
      const event  = Cesium.Color.fromCssColorString("#ffd27a");   // one warm accent
      const line   = Cesium.Color.fromCssColorString("#8ab4ff").withAlpha(0.85);

      const labelBase = {
        font: "500 15px 'DM Sans', sans-serif",
        fillColor: Cesium.Color.WHITE,
        showBackground: true,
        backgroundColor: Cesium.Color.fromCssColorString("#0b0d12").withAlpha(0.55),
        backgroundPadding: new Cesium.Cartesian2(9, 6),
        pixelOffset: new Cesium.Cartesian2(0, -18),
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        disableDepthTestDistance: Number.POSITIVE_INFINITY,
        scaleByDistance: new Cesium.NearFarScalar(1000, 1.0, 12000, 0.55),
      };

      // node markers (hidden until investigation, except the event)
      const entityMap: Record<string, any> = {};
      for (const n of NODES) {
        const isEvent = n.kind === "event";
        const pos = Cesium.Cartesian3.fromDegrees(n.lon, n.lat, n.height);
        entityMap[n.id] = viewer.entities.add({
          position: pos,
          point: {
            pixelSize: isEvent ? 13 : 9,
            color: isEvent ? event : accent,
            outlineColor: Cesium.Color.WHITE.withAlpha(0.9),
            outlineWidth: 2,
            disableDepthTestDistance: Number.POSITIVE_INFINITY,
          },
          label: { ...labelBase, text: n.name },
          show: isEvent, // only the event node visible at rest
        });
      }

      // connection lines (built on investigate)
      const lineEntities: any[] = [];
      const truckPos = Cesium.Cartesian3.fromDegrees(NODES[0].lon, NODES[0].lat, NODES[0].height);

      const investigate = () => {
        orbiting = false;
        setPhase("investigating");
        // release the orbit's locked reference frame before flying
        viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
        // ease into the cluster
        viewer.camera.flyTo({
          destination: Cesium.Cartesian3.fromDegrees(SITE.lon + 0.004, SITE.lat - 0.010, SITE.centerHeight + 2600),
          orientation: {
            heading: Cesium.Math.toRadians(340),
            pitch: Cesium.Math.toRadians(-38),
            roll: 0,
          },
          duration: 3.2,
          easingFunction: Cesium.EasingFunction.QUADRATIC_IN_OUT,
        });
        // reveal causes + draw lines, staggered
        NODES.filter((n) => n.kind === "cause").forEach((n, i) => {
          setTimeout(() => {
            if (destroyed) return;
            entityMap[n.id].show = true;
            const dest = Cesium.Cartesian3.fromDegrees(n.lon, n.lat, n.height);
            lineEntities.push(
              viewer.entities.add({
                polyline: {
                  positions: [truckPos, dest],
                  width: 2.0,
                  material: new Cesium.PolylineGlowMaterialProperty({
                    color: line,
                    glowPower: 0.12,
                  }),
                  arcType: Cesium.ArcType.NONE,
                },
              }),
            );
          }, 1200 + i * 500);
        });
      };

      const reset = () => {
        lineEntities.forEach((e) => viewer.entities.remove(e));
        lineEntities.length = 0;
        NODES.filter((n) => n.kind === "cause").forEach((n) => (entityMap[n.id].show = false));
        setPhase("idle");
        orbiting = true;
      };

      apiRef.current = { investigate, reset };
      setStatus("ready");
    })();

    return () => {
      destroyed = true;
      apiRef.current = null;
      if (viewer && !viewer.isDestroyed()) viewer.destroy();
    };
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, background: "#0b0d12", overflow: "hidden" }}>
      {/* Cesium mounts here */}
      <div ref={containerRef} className="cesium-host" style={{ position: "absolute", inset: 0 }} />

      {/* subtle vignette so chrome stays legible over any imagery */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background:
          "radial-gradient(120% 90% at 50% 0%, transparent 55%, rgba(11,13,18,.45) 100%), linear-gradient(180deg, rgba(11,13,18,.35) 0%, transparent 22%, transparent 62%, rgba(11,13,18,.6) 100%)",
      }} />

      {/* wordmark */}
      <div style={{ position: "absolute", top: 26, left: 34, zIndex: 5, display: "flex", alignItems: "center", gap: 10 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-cropped.svg" alt="Algorealm" style={{ height: 26, opacity: 0.92 }} />
      </div>

      {/* hero chrome — only 5–8 words */}
      {phase === "idle" && (
        <div style={{
          position: "absolute", left: 0, right: 0, bottom: 84, zIndex: 5,
          display: "flex", flexDirection: "column", alignItems: "center",
          textAlign: "center", pointerEvents: "none",
        }}>
          <h1 style={{
            fontFamily: "var(--font-display, sans-serif)",
            fontSize: "clamp(40px, 6vw, 86px)",
            fontWeight: 700,
            letterSpacing: "-.03em",
            lineHeight: 1.02,
            color: "#fff",
            textShadow: "0 2px 40px rgba(0,0,0,.55)",
            margin: 0,
          }}>
            See what happened.<br />Understand why.
          </h1>

          <div style={{ display: "flex", gap: 14, marginTop: 30, pointerEvents: "auto" }}>
            <button
              onClick={() => apiRef.current?.investigate()}
              disabled={status !== "ready"}
              style={{
                display: "inline-flex", alignItems: "center", gap: 9,
                padding: "13px 24px", borderRadius: 999,
                background: "rgba(255,255,255,.10)",
                border: "1px solid rgba(255,255,255,.28)",
                backdropFilter: "blur(10px)",
                color: "#fff", fontFamily: "var(--font-body, sans-serif)",
                fontSize: 14, fontWeight: 500, letterSpacing: ".01em",
                cursor: status === "ready" ? "pointer" : "default",
                opacity: status === "ready" ? 1 : 0.5,
                transition: "background .2s, border-color .2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,.18)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,.10)"; }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#8ab4ff", boxShadow: "0 0 10px #8ab4ff" }} />
              Ask Samaritan
            </button>
            <a
              href="/#contact"
              style={{
                display: "inline-flex", alignItems: "center",
                padding: "13px 24px", borderRadius: 999,
                background: "#fff", color: "#0b0d12",
                fontFamily: "var(--font-body, sans-serif)", fontSize: 14, fontWeight: 600,
                textDecoration: "none", letterSpacing: ".01em",
              }}
            >
              Book a demo
            </a>
          </div>
        </div>
      )}

      {/* investigation chrome */}
      {phase === "investigating" && (
        <div style={{
          position: "absolute", left: 34, bottom: 40, zIndex: 5,
          display: "flex", flexDirection: "column", gap: 14, maxWidth: 440,
        }}>
          <div style={{
            alignSelf: "flex-start",
            padding: "10px 16px", borderRadius: 12,
            background: "rgba(255,255,255,.10)", border: "1px solid rgba(255,255,255,.22)",
            backdropFilter: "blur(10px)",
            fontFamily: "var(--font-body, sans-serif)", fontSize: 15, color: "#fff",
          }}>
            Why did production drop yesterday?
          </div>
          <button
            onClick={() => apiRef.current?.reset()}
            style={{
              alignSelf: "flex-start",
              padding: "9px 16px", borderRadius: 999,
              background: "transparent", border: "1px solid rgba(255,255,255,.3)",
              color: "rgba(255,255,255,.85)", fontFamily: "var(--font-body, sans-serif)",
              fontSize: 13, cursor: "pointer",
            }}
          >
            Replay
          </button>
        </div>
      )}

      {/* status overlays */}
      {status === "no-token" && <TokenNotice />}
      {status === "error" && (
        <Centered>Couldn&apos;t load the 3D scene. Check the console and your Cesium ion token.</Centered>
      )}
      {status === "loading" && (
        <Centered subtle>Loading the operation…</Centered>
      )}
    </div>
  );
}

function Centered({ children, subtle }: { children: React.ReactNode; subtle?: boolean }) {
  return (
    <div style={{
      position: "absolute", inset: 0, zIndex: 6,
      display: "flex", alignItems: "center", justifyContent: "center",
      textAlign: "center", padding: 32, pointerEvents: "none",
    }}>
      <p style={{
        fontFamily: "var(--font-body, sans-serif)", fontSize: 15,
        color: subtle ? "rgba(255,255,255,.6)" : "#fff", maxWidth: 460, lineHeight: 1.6,
      }}>
        {children}
      </p>
    </div>
  );
}

function TokenNotice() {
  return (
    <div style={{
      position: "absolute", inset: 0, zIndex: 6,
      display: "flex", alignItems: "center", justifyContent: "center", padding: 32,
    }}>
      <div style={{
        maxWidth: 520, textAlign: "center",
        background: "rgba(20,23,30,.85)", border: "1px solid rgba(255,255,255,.14)",
        borderRadius: 16, padding: "32px 30px", backdropFilter: "blur(10px)",
      }}>
        <div style={{ fontFamily: "var(--font-display, sans-serif)", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 12 }}>
          Add your Cesium ion token
        </div>
        <p style={{ fontFamily: "var(--font-body, sans-serif)", fontSize: 14, color: "rgba(255,255,255,.75)", lineHeight: 1.7 }}>
          Create <code style={{ color: "#8ab4ff" }}>.env.local</code> (or edit it) and add:
        </p>
        <pre style={{
          margin: "14px 0 0", padding: "12px 14px", textAlign: "left",
          background: "rgba(0,0,0,.4)", borderRadius: 8, overflowX: "auto",
          fontFamily: "var(--font-mono, monospace)", fontSize: 13, color: "#dbe4ff",
        }}>NEXT_PUBLIC_CESIUM_ION_TOKEN=your_token_here</pre>
        <p style={{ fontFamily: "var(--font-body, sans-serif)", fontSize: 13, color: "rgba(255,255,255,.55)", lineHeight: 1.6, marginTop: 14 }}>
          Then restart the dev server. Token from ion.cesium.com → Access Tokens.
        </p>
      </div>
    </div>
  );
}
