import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algorealm — A living operation",
  description: "Watch Samaritan think.",
};

export default function ImmersiveLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Cesium widget styles */}
      <link rel="stylesheet" href="/cesium/Widgets/widgets.css" />
      <style>{`
        .cesium-host .cesium-viewer,
        .cesium-host .cesium-widget,
        .cesium-host .cesium-widget canvas { width: 100% !important; height: 100% !important; }
        .cesium-viewer-bottom { bottom: 6px; right: 10px; }
        .cesium-credit-container, .cesium-widget-credits { font-size: 10px !important; opacity: .5; }
        .cesium-credit-logoContainer img { height: 20px !important; }
      `}</style>
      {children}
    </>
  );
}
