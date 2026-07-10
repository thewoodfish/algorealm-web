"use client";
import Image from "next/image";
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
      }}
    >
      {/* hero image */}
      <Image
        src="/agr-hero.webp"
        alt="Autonomous drone over a mining concession"
        fill
        priority
        style={{
          objectFit: "cover",
          zIndex: 1,
        }}
      />

      {/* bottom fade into next section */}
      <div style={{
        position: "absolute",
        bottom: 0, left: 0, right: 0,
        height: "25%",
        background: "linear-gradient(to bottom, transparent, #090c12)",
        zIndex: 5,
        pointerEvents: "none",
      }} />

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
          fontSize: "clamp(32px, 5vw, 72px)",
          fontWeight: 800,
          letterSpacing: "-.03em",
          lineHeight: 1.05,
          marginBottom: 24,
          textAlign: "center",
          color: "#fff",
        }}>
          Intelligent aerial security for remote African mines
        </motion.h1>

        {/* sub */}
        <motion.p
          {...fadeUp(0.35)}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 18,
            color: "rgba(255,255,255,.75)",
            lineHeight: 1.6,
            maxWidth: 620,
            margin: "0 auto 40px",
            fontWeight: 300,
          }}
        >
          Protect your people, stop illegal mining, and secure critical mining
          operations with autonomous aircraft that provide persistent
          operational awareness and early, actionable intelligence—even in
          remote, offline environments.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.62)} style={{ display: "flex", gap: 20, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
          <a
            href="#contact"
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
            Book a 10-Minute Virtual Demo
          </a>
          <a
            href="https://youtu.be/tCKMECph5PE"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "transparent",
              color: "rgba(255,255,255,.75)",
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 500,
              textDecoration: "none",
              letterSpacing: ".02em",
              borderBottom: "1px solid rgba(255,255,255,.25)",
              paddingBottom: 2,
              transition: "color .2s, border-color .2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderBottomColor = "rgba(255,255,255,.6)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = "rgba(255,255,255,.75)";
              e.currentTarget.style.borderBottomColor = "rgba(255,255,255,.25)";
            }}
          >
            ▶ Watch the Samaritan Core Demo Video
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
