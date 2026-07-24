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
        src="/hero-wireframe.webp"
        alt="Aerial view of a large industrial operation"
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
        background: "linear-gradient(to bottom, transparent, #000000)",
        zIndex: 5,
        pointerEvents: "none",
      }} />

      {/* dark overlay for text contrast */}
      <div style={{
        position: "absolute", inset: 0,
        background: "rgba(0, 0, 0, 0.35)",
        zIndex: 2,
      }} />

      {/* vignette focused behind the headline/copy */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 640px 420px at 50% 46%, rgba(0,0,0,.65), transparent 70%)",
        zIndex: 3,
        pointerEvents: "none",
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
          Understand what&apos;s happening.<br />Know why. Decide faster.
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
          A big operation is hard to keep track of. Algorealm helps you see
          what&apos;s happening across yours, understand why problems happen,
          and decide what to do — without waiting hours for an answer.
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
              color: "#000000",
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
            Request a Demo
          </a>
          <a
            href="#how"
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
            See how it works
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
