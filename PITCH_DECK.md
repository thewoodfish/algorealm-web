# Algorealm — Samaritan Pitch Deck

**Audience:** Seed / Pre-Series A investors  
**Format:** 12–14 slides, dark theme, Palantir-style density  
**Tone:** Serious, institutional, defense-grade. No fluff.

---

## Slide 1 — Cover

**Headline:** Samaritan  
**Sub:** AI-powered security intelligence. Before the threat lands.

**Visuals:**
- Full-bleed video background (aerial drone footage over terrain)
- Algorealm logo top-left
- Single gold tagline: *Intelligence before contact. Decisions before crisis.*
- Bottom: `algorealm.tech` · Lagos, Nigeria · 2026

---

## Slide 2 — The Problem

**Headline:** Security today is reactive. That is the problem.

**Three pain points (with hard numbers):**

1. **Military / Border Security**  
   - Nigeria loses an estimated $1.2B annually to insurgent activity in the Northeast  
   - Human patrol coverage of large terrain is impossible to scale  
   - Incident reports arrive *after* the event — too late for any response

2. **Oil & Gas Infrastructure**  
   - Nigeria loses ~$3B/year to pipeline vandalism and crude theft  
   - Over 1,000 pipeline breaches recorded annually  
   - Operators have no real-time visibility across hundreds of kilometres of pipeline

3. **Telecoms & Agriculture**  
   - 5,000+ telecom towers in Nigeria go dark annually due to theft and sabotage  
   - Farmers lose 20–40% of crop value to undetected theft and encroachment

**The common thread:**  
> Every one of these incidents had a detectable pattern. Nobody was watching.

---

## Slide 3 — The Solution

**Headline:** Samaritan. Persistent eyes. Intelligent analysis.

**What Samaritan does:**
- Deploys a swarm of small autonomous fixed-wing aircraft over the area to protect
- Covers the entire zone simultaneously — day and night — without a human pilot per aircraft
- AI analyses movement patterns, detects anomalies, and predicts threats before they escalate
- Operators receive alerts with location, classification, and recommended action — *before* the incident

**One sentence:**  
> Samaritan turns a large, unmonitorable area into a fully-observed, AI-analyzed operational picture.

**Visuals:**
- Side-by-side: "Today" (blind spots, reactive alerts) vs "With Samaritan" (full coverage, predictive alerts)
- Mapbox-style map with drone coverage zones and threat markers

---

## Slide 4 — How It Works

**Three layers:**

| Layer | What it does |
|---|---|
| **Persistent Coverage** | Autonomous drone swarm fans out across terrain. No gaps. No fatigue. 24/7. |
| **AI Threat Analysis** | On-device + cloud AI learns normal patterns and flags deviations in real time |
| **Command Intelligence** | Operators receive classified alerts, predicted threat vectors, and decision support |

**Key technical differentiators:**
- Boustrophedon patrol — full area coverage with zero overlap waste
- Autonomous RTB + recharge cycle — continuous coverage with no downtime
- On-premise deployment option — no data leaves the operator's infrastructure
- Tauri-based command interface — runs offline in austere environments

**Visuals:**
- Three-panel diagram showing swarm deployment → AI processing → operator alert
- Screenshot of the Samaritan Command interface (the Tauri app)

---

## Slide 5 — Market Size

**Total Addressable Market (TAM):**  
Global autonomous security and surveillance market — **$68B by 2030** (CAGR 14.2%)

**Serviceable Addressable Market (SAM):**  
Sub-Saharan Africa + West Africa security, energy, and telecoms infrastructure — **$4.2B**

**Serviceable Obtainable Market (SOM) — Year 3:**  
Nigeria military contracts + 3 oil majors + 500 towers — **$120M ARR**

**Why Nigeria first:**
- 7th largest oil producer globally
- Active insurgency requiring real-time ISR capability
- Government-mandated infrastructure security requirements
- No credible domestic competitor in autonomous ISR

**Why now:**
- Drone regulation in Nigeria advancing rapidly (NCAA frameworks 2023–2025)
- Nigerian Army + NNPCL actively seeking domestic tech vendors (Build Nigeria directive)
- Cost of imported ISR systems ($2M+ per platform) creates massive room for disruption

---

## Slide 6 — Product & Traction

**Where we are:**

| Milestone | Status |
|---|---|
| Core engine (Samaritan) | ✅ Built — Rust, production-grade |
| Command interface (Tauri) | ✅ Live — autonomous patrol, geofence, alerts |
| Multi-drone simulation | ✅ Full boustrophedon coverage, 12Hz real-time |
| Hardware prototype | 🔄 In progress |
| Pilot conversation — Nigerian Army | 🔄 Active |
| Pilot conversation — Oil major (undisclosed) | 🔄 Active |

**Demo available:**  
Live software demo of Samaritan Command showing real-time drone patrol, geofence breach detection, and command broadcast. Available on request.

---

## Slide 7 — Business Model

**Revenue streams:**

| Stream | Model | Unit Economics |
|---|---|---|
| Platform license | Annual SaaS per zone | $180K–$600K/zone/year |
| Hardware (drone fleet) | Sell or lease | $40K–$120K/fleet |
| Maintenance & support | % of contract | 18% of license |
| Data intelligence reports | Subscription | $24K/year per client |

**Target contract structure:**  
- Year 1: Pilot (1 zone, 6 months) — $90K  
- Year 2: Full deployment (3–5 zones) — $400K–$900K  
- Year 3: Expansion + data layer — $1.2M+

**Gross margin target:** 72% at scale (software-heavy model)

---

## Slide 8 — Go-To-Market

**Phase 1 — Nigeria (2026)**
- Target: Nigerian Army ISR unit, NNPCL pipeline security, NCC-mandated tower operators
- Channel: Direct enterprise sales + government procurement
- Leverage: "Made in Nigeria" positioning aligned with government directives

**Phase 2 — West Africa (2027)**
- Ghana, Senegal, Côte d'Ivoire — oil, mining, agriculture
- Channel: Regional defence and energy distributors

**Phase 3 — Pan-Africa + Export (2028)**
- East Africa, North Africa, select Middle East markets
- Channel: Defence attaché relationships, NATO-adjacent markets

**Sales motion:**  
1. Aerial demo over client's actual terrain  
2. 30-day pilot with live data  
3. Full contract negotiation

---

## Slide 9 — Competitive Landscape

| | Samaritan | DJI Enterprise | Shield AI | Palantir |
|---|---|---|---|---|
| Autonomous swarm | ✅ | ❌ | ✅ | ❌ |
| Africa-native deployment | ✅ | ❌ | ❌ | ❌ |
| Offline / air-gapped | ✅ | ❌ | ✅ | Partial |
| Price point | $$ | $ | $$$$ | $$$$ |
| AI threat prediction | ✅ | ❌ | Partial | ✅ |
| Built for Nigeria | ✅ | ❌ | ❌ | ❌ |

**Our moat:**  
- Built specifically for African terrain, regulation, and operational constraints  
- Price point 80% below comparable Western platforms  
- Offline-first architecture — works without internet connectivity  
- Government alignment and local manufacturing roadmap

---

## Slide 10 — Team

*(Fill in actual bios — structure below)*

**[Founder / CEO]**  
Background in [defence / engineering / AI]. Built [X]. Led [Y].  
*Why this person can sell to the military and close enterprise contracts.*

**[CTO / Technical Lead]**  
Built the Samaritan engine in Rust. [X years] systems/robotics experience.  
*Why this person can ship hardware + software at defence-grade reliability.*

**[Advisors]**  
- [Retired military officer — credibility with armed forces]  
- [Oil & gas operator — pipeline security domain expertise]  
- [Legal/regulatory — Nigerian aviation and procurement law]

---

## Slide 11 — The Ask

**Raising:** $1.5M Seed Round  
**Instrument:** SAFE, MFN, $8M cap

**Use of funds:**

| Allocation | % | Amount |
|---|---|---|
| Hardware R&D (drone prototype → production) | 40% | $600K |
| Engineering (2 hires) | 25% | $375K |
| Sales & BD (pilot deployments) | 20% | $300K |
| Operations & legal | 15% | $225K |

**18-month targets post-close:**
- 2 signed pilot contracts
- First hardware fleet deployed
- $400K ARR
- Series A ready

---

## Slide 12 — Why Now. Why Us.

**The window:**  
African governments are spending now on domestic tech. The "Build Nigeria" directive, ECOWAS security frameworks, and rising insurgency costs are creating a procurement environment that has never existed before.

**The unfair advantage:**  
We are Nigerian. We understand the terrain, the procurement dynamics, the operational constraints, and the urgency. A foreign competitor selling into this market will always be slower, more expensive, and less trusted.

**The vision:**  
Samaritan is not a drone company. It is an intelligence layer for the physical world — starting with Africa's most pressing security problems and expanding to every domain where threats go unseen until it is too late.

> *Intelligence before contact. Decisions before crisis.*

---

## Design Notes for Deck Production

- **Background:** `#090c12` (near-black navy)
- **Accent:** `#c9a84c` (gold) for headlines and key numbers
- **Text:** `#dce8f5` (light blue-white)
- **Data colour:** Red `#ef4444` for threats, Green `#4ade80` for resolved, Blue `#3b82f6` for neutral data
- **Font:** Barlow Condensed (headlines), DM Sans (body), Share Tech Mono (data labels)
- **Visuals to source:** Aerial drone footage over savanna/delta terrain, Samaritan Command screenshots, map overlays
- **Tools:** Figma, Pitch.com, or Tome — dark theme

---

*Prepared by Algorealm, Inc. · Lagos, Nigeria · hello@algorealm.tech · algorealm.tech*
