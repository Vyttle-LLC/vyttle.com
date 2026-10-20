# vyttle.com

The website for [Vyttle](https://vyttle.com) — an independent software studio making small, private apps for iPhone and Android, and open-source tools for developers who work with coding agents. The visual system is "The Vyttle Issue" (see [`DESIGN.md`](./DESIGN.md)); product truth lives in [`PRODUCT.md`](./PRODUCT.md).

## Apps & Products

- **Sixteen to One** — coffee ratio calculator
- **Pica** — nonogram puzzle app
- **Stockpot** — local-first recipe app
- **Bramble** — contact manager & address book cleaner
- **Wiffletree** — open-source Mac workspace for Claude and Codex coding agents (its own site is [wiffletree.dev](https://wiffletree.dev))
- **Reviso** — open-source pre-PR code review plugin for Claude Code and Codex

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16 (App Router, static export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 + CSS custom properties
- **Content**: MDX for policy/legal pages
- **Fonts**: Archivo, JetBrains Mono, Source Serif 4 (self-hosted via `next/font`)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Static export to `out/` |
| `npm run lint` | Run ESLint |

## Deployment

The site is deployed on **Netlify** as a static export.

- **Build command**: `npm run build`
- **Publish directory**: `out/`
- **Node version**: 24

Pushes to `main` trigger automatic deploys. See [`netlify.toml`](./netlify.toml) for config.

## Project Structure

```
src/
├── app/                  # Pages (App Router)
│   ├── page.tsx          # Homepage
│   ├── globals.css       # Theme variables & base styles
│   ├── sixteen-to-one/   # Sixteen to One app page + privacy policy
│   ├── pica/             # Pica app page
│   ├── stockpot/         # Stockpot app page + privacy policy
│   ├── bramble/          # Bramble app page + privacy policy
│   ├── reviso/           # Reviso product page + privacy policy
│   ├── privacy/          # Privacy policy
│   ├── terms/            # Terms of service
│   └── support/          # Support page
├── components/
│   ├── home/             # Home page sections
│   ├── marks/            # SVG logomarks and the VYTTLE wordmark
│   ├── Stamp.tsx         # A product as a perforated stamp
│   ├── StampSheet.tsx    # The hero sheet of every stamp
│   ├── AppPageLayout.tsx # Shared product page layout
│   ├── Nav.tsx           # Navigation
│   └── Footer.tsx        # Footer
└── lib/
    └── apps.ts           # Product registry (status, accents, fields, store links)
```
