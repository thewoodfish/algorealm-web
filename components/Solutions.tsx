"use client";
import { useState } from "react";
import { Reveal } from "./ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";

type SolutionId = "pit" | "convoy";

const solutions: Record<SolutionId, {
  label: string;
  title: string;
  desc: string;
  pains: string[];
  stats: { val: string; label: string }[];
  card: { header: string; status: string; alerts: { time: string; text: string; color: string }[]; question: string; answer: React.ReactNode };
}> = {
  pit: {
    label: "🏗️ Mine Pit & Perimeter",
    title: "Guarding the Mine Pit & Perimeter",
    desc: "Automated drone flights scan your concession boundaries, waste piles, and tailings management facilities day and night. The system catches illegal artisanal mining encampments, equipment sabotage, and perimeter trespassing before illegal extraction can scale.",
    pains: [
      "Concession boundaries stretch across 100km² — too vast for fences or foot patrols",
      "Illegal artisanal mining encampments appear and vanish before guards ever arrive",
      "Waste piles and tailings facilities sit unmonitored through the night",
      "By the time equipment sabotage is discovered, the crew is already gone",
    ],
    stats: [
      { val: "100km²", label: "Coverage per deployment" },
      { val: "24/7", label: "Continuous patrol" },
      { val: "0", label: "Cellular dependency" },
      { val: "<5 min", label: "Alert to dispatch" },
    ],
    card: {
      header: "Samaritan Guard · Concession Perimeter, Sector 4",
      status: "Patrol active",
      alerts: [
        { time: "02:14", text: "Illegal pit encampment — 6 persons — SW boundary", color: "var(--red)" },
        { time: "02:11", text: "Drone-2 → tracking encampment. Coverage redistributed.", color: "var(--purple)" },
        { time: "01:47", text: "Perimeter fence disturbance detected — east line", color: "var(--amber)" },
        { time: "00:52", text: "Tailings facility sweep — no contacts — clear", color: "var(--text-3)" },
      ],
      question: "— Is the south pit safe to leave unguarded tonight?",
      answer: <>An unregistered encampment of <em style={{ color: "var(--text)" }}>6 persons</em> has been detected on the SW boundary, <strong style={{ color: "var(--gold)" }}>consistent with 3 prior artisanal mining incidents</strong> in this sector. <em style={{ color: "var(--red)" }}>Recommend immediate ground response</em> before extraction equipment is moved in.</>,
    },
  },
  convoy: {
    label: "🚛 Cargo Convoys",
    title: "Escorting Cargo Convoys",
    desc: "We mount automated drone launch boxes directly onto your security escort trucks. The drones automatically fly 5 to 10 kilometers ahead of your gold doré or lithium dump truck fleets to spot roadblocks, illegal checkpoints, or staged ambushes — giving your drivers plenty of time to halt and reverse safely.",
    pains: [
      "Ambush points along haul roads are scouted for weeks before a hit",
      "Roadblocks and staged checkpoints appear with no warning to drivers",
      "A single hijacked doré or lithium shipment can cost more than a year of security spend",
      "Radio-only convoys have no eyes beyond the next bend",
    ],
    stats: [
      { val: "5–10km", label: "Lookahead range" },
      { val: "0", label: "Internet required" },
      { val: "Real-time", label: "Route hazard alerts" },
      { val: "100%", label: "Convoy coverage" },
    ],
    card: {
      header: "Samaritan Escort · Haul Route HR-04",
      status: "Escort active",
      alerts: [
        { time: "05:22", text: "Staged roadblock detected — 8km ahead — HIGH", color: "var(--red)" },
        { time: "05:20", text: "Drone-1 → holding overwatch. Convoy notified.", color: "var(--purple)" },
        { time: "05:14", text: "Vehicle stopped roadside — 6km ahead — monitoring", color: "var(--amber)" },
        { time: "04:40", text: "Route KM 0–20 swept — clear — convoy cleared to move", color: "var(--green)" },
      ],
      question: "— Is the route ahead clear for the convoy?",
      answer: <>A <em style={{ color: "var(--text)" }}>staged roadblock</em> has been detected 8km ahead of the convoy — vehicle positioning matches <strong style={{ color: "var(--gold)" }}>2 previous ambush attempts</strong> on this route. <em style={{ color: "var(--red)" }}>Recommend the convoy halt and reverse now.</em> Alternate route via HR-06 is clear.</>,
    },
  },
};

const ids = Object.keys(solutions) as SolutionId[];

export function Solutions() {
  const [active, setActive] = useState<SolutionId>("pit");
  const sol = solutions[active];

  return (
    <section id="solutions" className="section-pad" style={{}}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* header */}
        <Reveal>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--gold)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 16 }}>
            Operational workflows
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24, marginBottom: 48 }}>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-.025em",
              color: "var(--text)",
            }}>
              Built for two main jobs.
            </h2>

            {/* tabs */}
            <div style={{ display: "flex", gap: 4 }}>
              {ids.map((id) => (
                <button
                  key={id}
                  onClick={() => setActive(id)}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    padding: "7px 16px",
                    borderRadius: 3,
                    border: `.5px solid ${active === id ? "var(--gold-dim)" : "var(--border)"}`,
                    background: active === id ? "var(--gold-glow)" : "transparent",
                    color: active === id ? "var(--gold)" : "var(--text-2)",
                    cursor: "pointer",
                    transition: "all .2s",
                  }}
                >
                  {solutions[id].label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="two-col"
            style={{
              gap: 64,
              alignItems: "start",
            }}
          >
            {/* left: content */}
            <div>
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: 24,
                fontWeight: 700,
                color: "var(--text)",
                letterSpacing: "-.01em",
                marginBottom: 16,
              }}>
                {sol.title}
              </h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-2)", lineHeight: 1.75, fontWeight: 300, marginBottom: 28 }}>
                {sol.desc}
              </p>

              {/* pain points */}
              <ul style={{ listStyle: "none", marginBottom: 36 }}>
                {sol.pains.map((p) => (
                  <li key={p} style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                    padding: "10px 0",
                    borderBottom: ".5px solid var(--border)",
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    color: "var(--text-2)",
                    lineHeight: 1.5,
                  }}>
                    <span style={{ color: "var(--red)", marginTop: 2, flexShrink: 0 }}>—</span>
                    {p}
                  </li>
                ))}
              </ul>

              {/* stats */}
              <div className="solutions-stats four-col" style={{ gap: 1, background: "var(--border)" }}>
                {sol.stats.map((s) => (
                  <div key={s.label} style={{
                    background: "var(--surface)",
                    padding: "20px 16px",
                    textAlign: "center",
                  }}>
                    <div style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 22,
                      fontWeight: 800,
                      color: "var(--gold)",
                      letterSpacing: "-.02em",
                      marginBottom: 4,
                    }}>
                      {s.val}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 9,
                      color: "var(--text-3)",
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                    }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* right: card */}
            <div style={{
              background: "var(--surface)",
              border: ".5px solid var(--border)",
              borderRadius: 4,
              overflow: "hidden",
            }}>
              {/* card header */}
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 20px",
                borderBottom: ".5px solid var(--border)",
                background: "var(--surface-2)",
              }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-2)", letterSpacing: ".06em" }}>
                  {sol.card.header}
                </span>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  color: "var(--green)",
                  background: "rgba(74,222,128,.08)",
                  border: ".5px solid rgba(74,222,128,.2)",
                  padding: "3px 8px",
                  borderRadius: 2,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                }}>
                  {sol.card.status}
                </span>
              </div>

              {/* alert feed */}
              <div style={{ padding: "12px 0" }}>
                {sol.card.alerts.map((a, i) => (
                  <div key={i} style={{
                    display: "grid",
                    gridTemplateColumns: "52px 1fr",
                    gap: 12,
                    padding: "9px 20px",
                    borderBottom: ".5px solid var(--border)",
                  }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-3)" }}>{a.time}</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: a.color, lineHeight: 1.4 }}>{a.text}</span>
                  </div>
                ))}
              </div>

              {/* intel box */}
              <div style={{
                margin: "16px",
                background: "var(--bg)",
                border: ".5px solid var(--border)",
                borderRadius: 3,
                padding: "16px",
              }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-3)", marginBottom: 10, letterSpacing: ".06em" }}>
                  {sol.card.question}
                </div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-2)", lineHeight: 1.7 }}>
                  {sol.card.answer}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
