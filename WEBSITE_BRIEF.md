# algorealm.tech — Claude Code Brief
# Website Modification Instructions

---

## Context

This is the Algorealm / Samaritan marketing website.
Live at: https://www.algorealm.tech/

The design system is established and must not change:
- Background: `#090c12`
- Gold accent: `#c9a84c` — Samaritan product elements only
- Text primary: `#dce8f5`
- Fonts: Syne (display), DM Sans (body), DM Mono (data)

**One brand rule being introduced in this update:**
Algorealm's own identity (logo, wordmark) is white and black only.
Gold is reserved exclusively for Samaritan product elements.

Execute changes in priority order as listed.
Do not change anything not explicitly listed below.

---

## Change 1 — Hero: Replace Radar Canvas With Nigeria Map Image
### Priority: 1 — Do this first

The current hero has a canvas-based radar sweep animation.
Replace it with the Nigeria threat overview map image.

**File:**
```
Source:  insurgency map.png (in root dir)
```

**Remove:**
```
- The <canvas id="radar-canvas"> element entirely
- The drawRadar() JavaScript function entirely
```

**Hero background:**
```css
.hero-terrain {
  background-image: url('/images/nigeria-threat-map.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```

**Dark overlay on top of image:**
```css
.hero-image-overlay {
  position: absolute;
  inset: 0;
  background: rgba(6, 8, 12, 0.55);
  z-index: 1;
}
```

**Z-index stack (bottom to top):**
```
1. nigeria-threat-map.png (background-image)
2. hero-image-overlay (rgba dark overlay, z-index: 1)
3. hero-grid (subtle grid lines, opacity: 0.4, z-index: 2)
4. hero-content (text + buttons, z-index: 3)
5. hero-scroll (scroll indicator, z-index: 3)
```

**Keep:**
- The `hero-grid` element — reduce opacity to 0.4
- The scanline `::after` CSS effect on the hero
- The vignette `::before` CSS effect on the hero

**Note:**
The ALGOREALM wordmark visible in the map image will be
partially visible beneath the overlay. This is intentional.
It creates depth. Do not remove or mask it further.

---

## Change 2 — Brand: Algorealm Identity to White/Black
### Priority: 2

**Change these specific elements to white:**
```
Nav logo text "ALGOREALM"          → #ffffff
Footer logo text "Algorealm"       → #ffffff
```

**Change this to muted:**
```
Nav logo sub "Samaritan Platform"  → #8a9bb0
```

**Keep gold on everything else:**
```
Section eyebrow labels             → keep --gold
Key numbers ($4.4B, 8,000, Zero)   → keep --gold
btn-primary buttons                → keep --gold
Nav CTA "Request Demo"             → keep --gold border + text
Map overlays and UI elements       → keep --gold
Intelligence screen accents        → keep --gold
All Samaritan product references   → keep --gold
```

---

## Change 3 — Hero Headline Copy
### Priority: 3

**Current:**
```
"You find out after it happens."
"Samaritan changes that."
```

**Replace with:**
```html
<h1 class="hero-headline">
  <span class="hero-headline-dim">Nigeria is losing billions</span>
  <span class="hero-headline-dim">to threats with detectable patterns.</span>
  <span class="hero-headline-gold">Nobody was watching. Until now.</span>
</h1>
```

Keep existing CSS classes. No style changes needed.

---

## Change 4 — Hero Sub Copy
### Priority: 3 (do with Change 3)

**Current:**
```
An AI-powered security system that monitors large areas
and critical infrastructure, learns the pattern of threats,
and tells you what is coming before it arrives.
```

**Replace with:**
```
Samaritan is an AI-powered surveillance intelligence platform
that deploys autonomous aircraft to monitor large areas, learn
threat patterns, and tell operators what is coming
before it arrives.
```

---

## Change 5 — Numbers Strip: Add Sector Labels
### Priority: 4

Add a small sector tag above each number value.
Insert as the first child inside each `.number-cell`.

**Cell 1:**
```html
<div class="number-sector">Oil &amp; Gas</div>
```

**Cell 2:**
```html
<div class="number-sector">Military / Security</div>
```

**Cell 3:**
```html
<div class="number-sector">Market gap</div>
```

**CSS:**
```css
.number-sector {
  font-family: var(--font-mono);
  font-size: 9px;
  color: var(--text-3);
  letter-spacing: .12em;
  text-transform: uppercase;
  margin-bottom: 10px;
}
```

---

## Change 6 — Company Section: Add Founder Bio
### Priority: 4

Insert this block after the `.principles` element and
before the `.company-right` closing paragraph.

**HTML:**
```html
<div class="founder-block">
  <div class="founder-label">Founder</div>
  <div class="founder-name">Deji</div>
  <div class="founder-bio">
    Started his first company at 16. Eight years of software
    development. Four writing professional Rust. Civil engineering
    background. Built SwarmNL — an open-source distributed
    networking library the Web3 Foundation paid $48,000 to sponsor.
    Built Samaritan alone. Nigerian. 23 years old.
  </div>
</div>
```

**CSS:**
```css
.founder-block {
  margin-top: 48px;
  padding: 28px;
  border: .5px solid var(--border);
  border-radius: 8px;
  background: var(--surface);
}

.founder-label {
  font-family: var(--font-mono);
  font-size: 9px;
  color: var(--text-3);
  letter-spacing: .12em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.founder-name {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 10px;
  letter-spacing: -.01em;
}

.founder-bio {
  font-size: 14px;
  color: var(--text-2);
  line-height: 1.7;
}
```

---

## Change 7 — Contact: Update Email Address
### Priority: 5

Update in two places:

**Place 1 — mailto link:**
```html
<!-- Current -->
<a href="mailto:hello@algorealm.tech" ...>

<!-- Replace with -->
<a href="mailto:hello@algorealm.ng" ...>
```

**Place 2 — display text:**
```
Current:  hello@algorealm.tech
Replace:  hello@algorealm.ng
```

---

## Change 8 — Footer: Update Copyright Line
### Priority: 5 (do with Change 7)

```
Current:  © 2026 Algorealm, Inc.
Replace:  © 2026 Algorealm Technologies · Lagos, Nigeria
```

---

## Change 9 — Demo Section: Improve Placeholder
### Priority: 6

The demo play button currently shows with no supporting copy.
Add supporting text beneath the play button inside
`.demo-placeholder`:

**HTML to add after `.demo-play-btn`:**
```html
<div class="demo-play-label mono" id="demo-play-label">
  Watch the demo
</div>
<div class="demo-placeholder-note">
  Full demonstration available on request.<br>
  20-minute briefing tailored to your sector.
</div>
<a href="#contact" class="btn-ghost"
   style="font-size:11px; padding:8px 18px; margin-top:8px">
  Request demonstration →
</a>
```

**CSS:**
```css
.demo-placeholder-note {
  font-size: 12px;
  color: var(--text-3);
  text-align: center;
  line-height: 1.6;
  max-width: 320px;
  margin-top: 8px;
}
```

---

## Change 10 — Meta Tags: SEO and Social Sharing
### Priority: 6

Replace the existing meta description and add open graph tags
in the `<head>` section:

```html
<meta name="description"
  content="Samaritan by Algorealm — AI-powered surveillance
  intelligence platform deploying autonomous aircraft to protect
  Nigerian critical infrastructure. Pipeline security, military ISR,
  tower protection. Built in Nigeria. Data never leaves the country.">

<meta property="og:title"
  content="Samaritan — Algorealm">

<meta property="og:description"
  content="Nigeria loses $8.3B annually to preventable threats.
  Samaritan is the intelligence layer that changes that.
  Built in Nigeria. Data never leaves the country.">

<meta property="og:image"
  content="https://www.algorealm.tech/images/nigeria-threat-map.png">

<meta property="og:url"
  content="https://www.algorealm.ng">

<meta property="og:type"
  content="website">

<meta name="twitter:card"
  content="summary_large_image">

<meta name="twitter:title"
  content="Samaritan — Algorealm">

<meta name="twitter:description"
  content="Nigeria loses $8.3B annually to preventable threats.
  Samaritan is the intelligence layer that changes that.">

<meta name="twitter:image"
  content="https://www.algorealm.tech/images/nigeria-threat-map.png">
```

---

## Change 11 — Specs Strip: Add Sovereignty Cell
### Priority: 7

Add one more cell to the `.specs-grid` after the existing 6 cells.
Update grid to accommodate 7 columns on desktop,
wrapping to 4+3 or 3+4 on smaller screens.

```html
<div class="spec-cell">
  <div class="spec-label mono">Sovereignty</div>
  <span class="spec-value">In-country</span>
  <div class="spec-note ok">Nigerian infrastructure only</div>
</div>
```

**CSS update:**
```css
/* Desktop: was repeat(6,1fr) — change to: */
.specs-grid {
  grid-template-columns: repeat(4, 1fr);
}

/* On larger screens: */
@media (min-width: 1200px) {
  .specs-grid {
    grid-template-columns: repeat(7, 1fr);
  }
}
```

---

## Do Not Change

```
The overall page structure and section order
The color system CSS variables
The solutions tabs and all their content
The intelligence screen mock UI and conversations
The how-it-works three steps content
The contact form structure and fields
All scroll reveal animation behavior
The scanline ::after CSS effect
The vignette ::before CSS effect
The hero-grid overlay element
The map SVG in the what-is-samaritan section
All btn-primary and btn-ghost styles
```

---

## Priority Order Summary

```
Priority 1   Change 1    Hero image replacement
Priority 2   Change 2    Brand color update
Priority 3   Change 3+4  Hero copy
Priority 4   Change 5+6  Numbers strip + founder bio
Priority 5   Change 7+8  Email + footer
Priority 6   Change 9+10 Demo placeholder + meta tags
Priority 7   Change 11   Specs strip addition
```

---

## Verification Checklist

After all changes, confirm:

```
□ Nigeria map image loads as hero background
□ Dark overlay visible — map readable but not overpowering
□ Radar canvas and drawRadar() function completely removed
□ ALGOREALM in nav is white not gold
□ Algorealm in footer is white not gold
□ All other gold usage unchanged
□ Hero headline reads new copy correctly
□ Sector tags visible above number cells
□ Founder bio block appears in company section
□ Email links go to hello@algorealm.ng
□ Footer shows "Algorealm Technologies · Lagos, Nigeria"
□ Meta tags present in page source
□ Sovereignty cell appears in specs strip
□ No existing content broken or missing
□ All scroll reveal animations still firing
□ Mobile layout not broken by any changes
```

---

*algorealm.tech · Algorealm Technologies · Lagos, Nigeria*
