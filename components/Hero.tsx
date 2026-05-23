"use client";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "120px 48px 80px",
        boxSizing: "border-box",
        backgroundImage: "url('/images/nigeria-threat-map.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* hero video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      >
        <source src="/videos/hero-vid.mp4" type="video/mp4" />
      </video>

      {/* dark overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "rgba(6, 8, 12, 0.55)",
        zIndex: 2,
      }} />

      {/* grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(26,37,53,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(26,37,53,.35) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        opacity: 0.4,
        pointerEvents: "none",
        zIndex: 3,
      }} />

      {/* content */}
      <div style={{ position: "relative", zIndex: 4, textAlign: "center", maxWidth: 860 }}>

        {/* headline */}
        <motion.h1 {...fadeUp(0.2)} style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(36px, 5.5vw, 72px)",
          fontWeight: 800,
          letterSpacing: "-.03em",
          lineHeight: 1.05,
          marginBottom: 28,
          textAlign: "center",
        }}>
          <span style={{ display: "block", color: "#fff" }}>Nobody was watching.</span>
          <span style={{ display: "block", color: "var(--gold)" }}>Until now.</span>
        </motion.h1>

        {/* sub */}
        <motion.p
          {...fadeUp(0.38)}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 17,
            color: "rgba(255,255,255,.75)",
            lineHeight: 1.6,
            maxWidth: 480,
            margin: "0 auto 40px",
            fontWeight: 300,
          }}
        >
          AI surveillance intelligence for Nigerian critical infrastructure.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.62)} style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#demo"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--gold)",
              color: "#0a0c12",
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 600,
              padding: "11px 24px",
              borderRadius: 4,
              textDecoration: "none",
              letterSpacing: ".04em",
              transition: "background .2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--gold-2)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--gold)")}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Watch demo
          </a>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "transparent",
              color: "#fff",
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 500,
              padding: "11px 24px",
              borderRadius: 4,
              border: ".5px solid rgba(255,255,255,.4)",
              textDecoration: "none",
              letterSpacing: ".04em",
              transition: "border-color .2s, color .2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#fff"; e.currentTarget.style.color = "var(--gold)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,.4)"; e.currentTarget.style.color = "#fff"; }}
          >
            Request briefing
          </a>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div
        {...fadeUp(1)}
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          zIndex: 4,
        }}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-3)", letterSpacing: ".14em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div style={{
          width: 1,
          height: 40,
          background: "linear-gradient(var(--border-2), transparent)",
        }} />
      </motion.div>
    </section>
  );
}
