"use client";
import Image from "next/image";
import { Reveal } from "./ui/Reveal";

export function What() {
  return (
    <section id="samaritan" className="section-pad" style={{}}>

      <div className="two-col" style={{
        maxWidth: 1200,
        margin: "0 auto",
        gap: 80,
        alignItems: "center",
      }}>
        {/* copy */}
        <Reveal>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--gold)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 20 }}>
            Samaritan · First application
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(30px, 3.5vw, 46px)",
            fontWeight: 700,
            letterSpacing: "-.025em",
            lineHeight: 1.1,
            marginBottom: 24,
            color: "var(--text)",
          }}>
            Warnings before the breach.<br />Not footage after it is.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-2)", lineHeight: 1.75, fontWeight: 300, marginBottom: 16 }}>
            Samaritan is the first operational application built on
            Algorealm&apos;s intelligence platform.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-2)", lineHeight: 1.75, fontWeight: 300, marginBottom: 16 }}>
            It is an AI-powered operational intelligence system that watches
            your site and perimeter around the clock — no human has to sit
            and stare at camera feeds.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-2)", lineHeight: 1.75, fontWeight: 300, marginBottom: 16 }}>
            Built for remote sites where cellular and internet coverage
            cannot be relied on, Samaritan transforms streams of thermal and
            optical sensor data into actionable intelligence — giving your
            security team the awareness needed to intervene before a breach
            or incident ever reaches your operation.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-2)", lineHeight: 1.75, fontWeight: 300, marginBottom: 36 }}>
            To create persistent situational awareness over a large
            operational area, Samaritan deploys a coordinated swarm of
            autonomous aircraft that share information, maintain coverage,
            and operate continuously without requiring a human pilot for
            every aircraft.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            {["How it works", "See industries"].map((label, i) => (
              <a
                key={label}
                href={i === 0 ? "#how" : "#industries"}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "var(--text-2)",
                  padding: "9px 18px",
                  border: ".5px solid var(--border-2)",
                  borderRadius: 4,
                  textDecoration: "none",
                  transition: "color .2s, border-color .2s",
                  letterSpacing: ".04em",
                }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--gold)"; e.currentTarget.style.borderColor = "var(--gold-dim)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--text-2)"; e.currentTarget.style.borderColor = "var(--border-2)"; }}
              >
                {label}
              </a>
            ))}
          </div>
        </Reveal>

        {/* visual */}
        <Reveal delay={0.15}>
          <div style={{
            position: "relative",
            border: ".5px solid var(--border)",
            borderRadius: 4,
            overflow: "hidden",
            maxWidth: 460,
          }}>
            <Image
              src="/images/perimeter-hud.webp"
              alt="Perimeter surveillance overview with patrol coverage overlay"
              width={1254}
              height={1254}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
