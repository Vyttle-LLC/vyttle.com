# CLAUDE.md

## Project

Marketing website for **Vyttle** — a software studio building privacy-first mobile apps and open-source developer tools. Showcases apps (Sixteen to One, Pica, Stockpot, Bramble) and tools (Wiffletree, Reviso). Visual system: "The Vyttle Issue" — see `DESIGN.md`; product truth: `PRODUCT.md`.

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 + CSS custom properties for theming
- **Content:** MDX for legal/policy pages
- **Fonts:** Archivo (variable width), JetBrains Mono, Source Serif 4 (via `next/font/google`)
- **Deployment:** Netlify (static site, publish dir: `out/`)

## Commands

- `npm run dev` — start dev server
- `npm run build` — static export to `out/` (locally on Node 24 the TypeScript step can be SIGKILLed; run `npx tsc --noEmit`, then `npx next build --experimental-build-mode=compile` and `--experimental-build-mode=generate`)
- `npm run lint` — run ESLint
- No test suite configured

## Project Structure

- `src/app/` — Next.js App Router pages (one dir per app/product)
- `src/components/` — shared components (Stamp, StampSheet, AppPageLayout, Nav, Footer, etc.)
- `src/components/home/` — home page sections
- `src/components/marks/` — SVG logomark components (`ProductMark` looks one up by slug)
- `src/lib/apps.ts` — central app metadata registry (`VyttleApp[]`)

## Coding Conventions

- **Components:** `export default function` pattern, inline prop types
- **Server/Client:** server components by default; `"use client"` only when needed
- **Path alias:** `@/*` → `src/*`
- **Colors:** use CSS custom properties (`var(--text-primary)`), not Tailwind color utilities
- **Component styles:** reusable classes live in `globals.css` inside `@layer components` (so Tailwind utilities like `md:hidden` still win); Tailwind handles layout
- **Dark mode:** default theme; light mode via `data-theme="light"` on `<html>`
- **Hover effects:** CSS `:hover` rules, not JS style mutation
- **Grids:** give single-column grids `grid-cols-1` so long unbreakable content (commands, URLs) can't widen the page
- **App data:** import from `@/lib/apps.ts`, not hardcoded per page
