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
            Product · Samaritan
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
            The operational investigation platform.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-2)", lineHeight: 1.75, fontWeight: 300, marginBottom: 16 }}>
            Samaritan is our first product. It investigates your operation —
            explaining what happened, uncovering why, and supporting the
            decisions that follow.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-2)", lineHeight: 1.75, fontWeight: 300, marginBottom: 16 }}>
            Ask it a question in plain language — why production dropped, why
            trucks are waiting, what happened before an incident — and it
            works back through the events across your site to give you a
            grounded answer, not another feed to watch.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-2)", lineHeight: 1.75, fontWeight: 300, marginBottom: 36 }}>
            It works with the cameras, sensors, and systems you already have.
            Where a site has ground it cannot watch, Algorealm&apos;s
            autonomous aircraft add coverage — one more source of observation
            feeding the same understanding.
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
              alt="Aerial operational overview with coverage overlay"
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
