# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server at localhost:3000
npm run build     # production build
npm run lint      # run ESLint
```

No test suite is configured.

## Architecture

This is a **Next.js 16 (App Router) marketing site** for Algorealm's "Samaritan" AI security platform. It is a single-page site — `app/page.tsx` composes all sections top-to-bottom.

**Section order in `app/page.tsx`:**
`Nav → Hero → Numbers → What → How → Solutions → Intelligence → Company → Contact → Footer`

Each section is its own component in `components/`. All sections are client components (`"use client"`) because they use Framer Motion or browser APIs.

**Styling approach:** Tailwind v4 is installed but barely used. Virtually all styles are written as inline `style` objects. Design tokens are CSS custom properties defined in `app/globals.css`:
- Colors: `--bg`, `--surface`, `--surface-2`, `--border`, `--border-2`, `--gold`, `--gold-2`, `--gold-dim`, `--gold-glow`, `--text`, `--text-2`, `--text-3`, status colors (`--red`, `--green`, `--amber`, `--blue`, `--purple`)
- Fonts: `--font-display` (Syne), `--font-body` (DM Sans), `--font-mono` (DM Mono)

**`components/ui/Reveal.tsx`** — the only shared primitive. A scroll-triggered fade-up wrapper using Framer Motion's `useInView`. Wrap any section content with `<Reveal>` to animate it in on scroll.

**`components/Hero.tsx`** — contains a custom `RadarCanvas` component (vanilla Canvas 2D animation with a rotating sweep, contact blips, and decay). The hero uses a background video (`/videos/vid-1.mp4`) sourced from `public/videos/`.

**`components/Solutions.tsx`** — tabbed interface (Military / Pipeline / Towers / Agriculture). All data is defined inline as a typed `Record<SolutionId, ...>`. No external data source.

**Fonts** are loaded via `next/font/google` in `layout.tsx` and exposed as CSS variables applied to `<html>`.

**`public/videos/`** — served as static assets. The hero video is referenced as `/videos/vid-1.mp4`.
