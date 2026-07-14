# CLAUDE.md — Remove "data sovereignty / zero-bandwidth" claims from algorealm.tech

## Context

Algorealm's architecture has changed. Previously the pitch was "100% offline,
nothing ever leaves the site" (data sovereignty as the core differentiator).

That claim is no longer true. The new architecture:

- **Local / real-time layer** (detection, alerting, drone coordination) —
  stays fully on-site, on the local radio mesh, no internet dependency.
  This part of the old claim is STILL TRUE and should not be weakened.
- **Cloud AI / "understanding" layer** (cross-site correlation, pattern
  learning, the system getting smarter over time) — connects to the
  internet. This is the new moat: AI that compounds across every
  deployment instead of resetting to zero at each new site.

**The task:** find every place on the site that claims data/maps/logs
"never leave the site," "stay completely offline," or "stay completely
private," and rewrite it to reflect the split architecture — local
detection is still offline and real-time; the intelligence layer syncs
over the internet.

Do NOT remove offline/no-internet-dependency language that refers
specifically to detection, alerting, or drone operation — that part of
the story is still accurate and is still a real differentiator (most
competitors assume reliable connectivity; Algorealm doesn't).

Only remove/rewrite the specific claims that assert **zero data ever
leaves the site** or **zero internet connectivity, full stop**.

---

## Task 1 — Meta descriptions (3 instances: `meta-og:description`,
`meta-twitter:description`, and the general `meta-description` tag)

**Find (appears verbatim or near-verbatim in multiple meta tags):**
```
Samaritan is the aerial intelligence layer that catches it before it happens — completely offline.
```

**Replace with:**
```
Samaritan is the aerial intelligence layer that catches it before it happens — built for mines with no reliable internet connection.
```

Apply this same fix everywhere "completely offline" appears in a
standalone marketing sentence describing the whole product (not the
specific local-detection feature bullet — see Task 3).

---

## Task 2 — "The landscape" section, third gap card ("Data Leaks")

This card needs to be **replaced entirely**, not reworded. It currently
states the exact claim we're killing, in the most exposed, top-of-page
position on the site.

**Find:**
```
Security gap

Data Leaks

Sending your proprietary mine maps, concession layouts, and high-value transport schedules to foreign cloud servers leaves your business vulnerable to corporate espionage.
```

**Replace with:**
```
Memory gap

No Institutional Memory

Every incident is treated like the first time. Without a system that learns your site's specific patterns over time, your team re-learns the same lessons after every breach.
```

This reframes the third gap around what the new cloud AI layer actually
solves (pattern memory / correlation), instead of a claim the product
no longer makes.

---

## Task 3 — "Five simple reasons it works" — Pillar 02

This is the most detailed, most exposed version of the old claim.
Full rewrite of both the heading and body copy.

**Find:**
```
02

100% Offline (Zero-Bandwidth)

Samaritan works completely without the internet. Every byte of security data is processed right at the mine site on local, rugged hardware you control. Your high-value maps and vulnerability logs stay completely private and offline.
```

**Replace with:**
```
02

Real-Time Detection, Fully Local

Every drone, every alert, every second-by-second decision happens on hardware at the mine site — detection and response never depend on a live internet connection. The intelligence layer that gets sharper over time syncs securely when connectivity allows.
```

---

## Task 4 — Hero subhead (minor, optional precision fix)

**Find:**
```
...even in remote, offline environments.
```

**Replace with:**
```
...even where there's no reliable connection.
```

Low priority — this line doesn't make a data-sovereignty claim, it's
describing operating conditions, which is still accurate. Fix only for
consistency of language across the page.

---

## What NOT to touch

These claims remain true under the new architecture and should be left
as-is:

- "Cloud-dependent cameras and standard commercial drones stop working
  the moment local cellular or internet networks drop out in the bush."
  (still true — competitors' products still fail this way)
- "The drones fly as a team and communicate natively with each other
  via an encrypted, peer-to-peer local radio network." (still true —
  this is the local mesh, unaffected by the cloud AI layer)
- "<5 min / Alert to dispatch" stat and similar real-time performance
  claims (still true — local detection path is unchanged)
- Any language about the drone swarm, patrol randomization, or hardware
  ruggedness (unaffected by this change)

---

## Verification checklist after edits

- [ ] Search the full site source for the string "offline" and confirm
      every remaining instance refers to *connectivity/detection*, not
      *data storage/privacy*.
- [ ] Search for "private," "never leave," "stays on," "foreign cloud,"
      and "espionage" — confirm none of these describe the whole
      product anymore, only (if applicable) the local detection layer.
- [ ] Confirm the three "landscape" gap cards still read as three
      distinct, non-overlapping problems after the Task 2 replacement.
- [ ] Re-read Pillar 02 next to Pillar 03 ("Drones That Work Together")
      to make sure the local-mesh language isn't now duplicated between
      them.
- [ ] Do a final pass on OG/Twitter meta tags specifically — these are
      what gets pulled into link previews on LinkedIn/Twitter and are
      easy to miss since they're not visible on the rendered page.