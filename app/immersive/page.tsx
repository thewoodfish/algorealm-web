"use client";

import dynamic from "next/dynamic";

// Cesium is client-only and heavy — never render it on the server.
const OperationScene = dynamic(
  () => import("@/components/immersive/OperationScene").then((m) => m.OperationScene),
  { ssr: false },
);

export default function ImmersivePage() {
  return <OperationScene />;
}
