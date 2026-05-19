"use client";
import { useState } from "react";
import { Reveal } from "./ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";

type SolutionId = "military" | "pipeline" | "towers" | "agriculture";

const solutions: Record<SolutionId, {
  label: string;
  title: string;
  desc: string;
  pains: string[];
  stats: { val: string; label: string }[];
  card: { header: string; status: string; alerts: { time: string; text: string; color: string }[]; question: string; answer: React.ReactNode };
}> = {
  military: {
    label: "Military",
    title: "Military & Security ISR",
    desc: "Persistent wide-area surveillance for forward operating bases and conflict-affected communities. Detect threats before they reach the perimeter. Give commanders the one thing they don't have today: time to respond.",
    pains: [
      "Security forces always respond after the fact — never before",
      "Existing UAVs require one trained operator per aircraft",
      "Coverage gaps when UAV is redeployed to another theater",
      "Foreign systems come with data-sharing conditions",
    ],
    stats: [
      { val: "8,000", label: "Deaths annually" },
      { val: "3+ hrs", label: "Average response lag" },
      { val: "$80M+", label: "Annual UAV spend" },
      { val: "0", label: "Indigenous systems" },
    ],
    card: {
      header: "Samaritan Sentinel · FOB Chibok",
      status: "Active",
      alerts: [
        { time: "01:34", text: "Perimeter breach — CTT-001 — Human — HIGH", color: "var(--red)" },
        { time: "01:33", text: "Human approaching perimeter from NW — escalated", color: "var(--amber)" },
        { time: "01:33", text: "Drone-6 → tracking CTT-001. Arcs redistributed.", color: "var(--purple)" },
        { time: "01:32", text: "CTT-002 detected — Vehicle — stationary 800m east", color: "var(--amber)" },
        { time: "01:30", text: "CTT-003 classified Animal — no dispatch", color: "var(--text-3)" },
      ],
      question: "— What should I watch tonight?",
      answer: <>The <em style={{ color: "var(--text)" }}>northwest corridor</em> is priority tonight. Activity is <strong style={{ color: "var(--gold)" }}>+340%</strong> above baseline. A vehicle matching CTT-002&apos;s profile has appeared on <em style={{ color: "var(--text)" }}>4 consecutive Tuesday nights</em> between 0130–0300. Tonight is Tuesday.</>,
    },
  },
  pipeline: {
    label: "Pipeline",
    title: "Pipeline & Infrastructure Security",
    desc: "Persistent corridor surveillance for oil and gas pipelines, flow stations, and manifolds. Detect bunkering operations before they begin. Protect assets and workers across hundreds of kilometres of difficult terrain.",
    pains: [
      "80,000–150,000 barrels stolen per day — $4.4B annually",
      "Helicopter patrols are scheduled — thieves work around them",
      "Spill remediation costs $1–5M per incident",
      "Field engineers cannot access sites without security confirmation",
    ],
    stats: [
      { val: "$4.4B", label: "Annual theft losses" },
      { val: "$5M", label: "Avg spill remediation" },
      { val: "43:1", label: "Samaritan ROI" },
      { val: "24/7", label: "Continuous coverage" },
    ],
    card: {
      header: "Samaritan Guard · Warri–Kaduna KP 23–67",
      status: "Patrol active",
      alerts: [
        { time: "02:14", text: "Vehicle group detected — 3 units — approaching KP 47", color: "var(--amber)" },
        { time: "02:11", text: "Drone-3 → tracking lead vehicle. Coverage maintained.", color: "var(--purple)" },
        { time: "02:08", text: "Unusual activity — 4 humans on foot — NW of KP 47", color: "var(--amber)" },
        { time: "01:55", text: "Routine maintenance team — KP 31 — confirmed clear", color: "var(--text-3)" },
      ],
      question: "— Has KP 47 been targeted before?",
      answer: <>KP 47 has been approached <em style={{ color: "var(--text)" }}>6 times in the last 30 days</em>. Activity clusters on <strong style={{ color: "var(--gold)" }}>Wednesday and Thursday nights</strong> between 0130–0330. The current vehicle group matches the thermal profile of the <em style={{ color: "var(--text)" }}>May 15 and May 22 incidents</em>.</>,
    },
  },
  towers: {
    label: "Towers",
    title: "Telecoms Tower Protection",
    desc: "Continuous surveillance of tower clusters across high-theft regions. Detect intrusions before batteries and equipment are removed. One Samaritan deployment protects 20–30 towers simultaneously — changing the economics of tower security entirely.",
    pains: [
      "3,000–5,000 theft incidents annually across the sector",
      "Guards at remote sites are frequently complicit",
      "CCTV detects aftermath — after the batteries are already gone",
      "Each incident: equipment + SLA penalty + engineer dispatch",
    ],
    stats: [
      { val: "$400M", label: "Annual sector losses" },
      { val: "30 sites", label: "Per deployment" },
      { val: "5 min", label: "Alert response time" },
      { val: "60%", label: "Theft reduction target" },
    ],
    card: {
      header: "Samaritan Watch · Kaduna Cluster KD-01 · 28 sites",
      status: "Night patrol",
      alerts: [
        { time: "02:03", text: "Perimeter breach — KD-0447 — 2 persons — HIGH", color: "var(--red)" },
        { time: "02:01", text: "Vehicle stopped 200m from KD-0447 — engine running", color: "var(--amber)" },
        { time: "01:58", text: "Unfamiliar vehicle — approaching KD-0447 sector", color: "var(--amber)" },
        { time: "00:44", text: "KD-0312 — perimeter clear — routine sweep complete", color: "var(--text-3)" },
      ],
      question: "— Has this vehicle been seen before?",
      answer: <>This vehicle has approached <em style={{ color: "var(--text)" }}>KD-0447 three times</em> — <strong style={{ color: "var(--gold)" }}>May 6, May 13, May 20</strong> — all Tuesday nights between 0130–0230. Previous visits resulted in battery theft on May 13. <em style={{ color: "var(--red)" }}>Recommend immediate security response.</em></>,
    },
  },
  agriculture: {
    label: "Agriculture",
    title: "Agricultural Security",
    desc: "Persistent perimeter surveillance for large commercial farms. Detect encroachments and armed groups before they reach workers and infrastructure. Enable safe farming operations in regions currently too dangerous to work.",
    pains: [
      "$13.7B in cumulative farmer-herder conflict losses since 2016",
      "Vast farmland stands idle — too dangerous to cultivate",
      "Workers attacked with no warning — no advance detection",
      "Harvest theft at scale — 10–20% of yield value lost annually",
    ],
    stats: [
      { val: "$13.7B", label: "Conflict losses (6yr)" },
      { val: "30 min", label: "Early warning window" },
      { val: "100km²", label: "Coverage per deployment" },
      { val: "24/7", label: "Continuous watch" },
    ],
    card: {
      header: "Samaritan Field · Nasarawa Estate · 4,200 ha",
      status: "Dawn patrol",
      alerts: [
        { time: "05:44", text: "Group detected — 8 individuals — approaching south boundary", color: "var(--amber)" },
        { time: "05:41", text: "Drone-4 → tracking group. Field coverage maintained.", color: "var(--purple)" },
        { time: "05:38", text: "Cattle movement detected — large herd — heading NE", color: "var(--amber)" },
        { time: "04:12", text: "Perimeter clear — no contacts — night watch complete", color: "var(--green)" },
      ],
      question: "— Is the south boundary safe for workers today?",
      answer: <>A group of <em style={{ color: "var(--text)" }}>8 individuals</em> was detected approaching the south boundary at 0544 — currently tracked by Drone-4. <strong style={{ color: "var(--red)" }}>Do not send workers to the south sector</strong> until the group is identified or has withdrawn. North and east sectors are clear.</>,
    },
  },
};

const ids = Object.keys(solutions) as SolutionId[];

export function Solutions() {
  const [active, setActive] = useState<SolutionId>("military");
  const sol = solutions[active];

  return (
    <section id="solutions" style={{ padding: "120px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* header */}
        <Reveal>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--gold)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 16 }}>
            Solutions
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24, marginBottom: 48 }}>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-.025em",
              color: "var(--text)",
            }}>
              One platform.<br />Every critical sector.
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
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
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
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "var(--border)" }}>
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
