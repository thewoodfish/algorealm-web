import { VideoScene } from "@/components/immersive/VideoScene";
import { WhatWeDo } from "@/components/immersive/WhatWeDo";
import { BookDemo } from "@/components/immersive/BookDemo";

export default function Home() {
  return (
    <main style={{ background: "#0b0d12" }}>
      <VideoScene />
      <WhatWeDo />
      <BookDemo />
    </main>
  );
}
