# CLAUDE.md

## Project

Marketing website for **Vyttle** — a software studio building privacy-first mobile apps and developer tools. Showcases apps (Sixteen to One, Stockpot, Bramble, Pica) and products (Reviso).

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 + CSS custom properties for theming
- **Content:** MDX for legal/policy pages
- **Fonts:** Outfit, DM Sans, Source Serif 4 (via `next/font/google`)
- **Deployment:** Netlify (static site, publish dir: `out/`)

## Commands

- `npm run dev` — start dev server
- `npm run build` — static export to `out/`
- `npm run lint` — run ESLint
- No test suite configured

## Project Structure

- `src/app/` — Next.js App Router pages (one dir per app/product)
- `src/components/` — shared components (AppPageLayout, Nav, Footer, etc.)
- `src/components/marks/` — SVG logomark components
- `src/lib/apps.ts` — central app metadata registry (`VyttleApp[]`)

## Coding Conventions

- **Components:** `export default function` pattern, inline prop types
- **Server/Client:** server components by default; `"use client"` only when needed
- **Path alias:** `@/*` → `src/*`
- **Colors:** use CSS custom properties (`var(--text-primary)`) via inline `style`, not Tailwind color utilities
- **Dark mode:** default theme; light mode via `data-theme="light"` on `<html>`
- **Hover effects:** `onMouseEnter`/`onMouseLeave` with inline style mutations
- **App data:** import from `@/lib/apps.ts`, not hardcoded per page
