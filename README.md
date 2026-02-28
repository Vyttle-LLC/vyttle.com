# vyttle.com

The marketing website for [Vyttle](https://vyttle.com) — a family of intentionally compact apps and products.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16 (App Router, static export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 + CSS custom properties
- **Content**: MDX for policy/legal pages
- **Fonts**: Outfit, DM Sans, Source Serif 4 (Google Fonts)

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
- **Node version**: 20

Pushes to `main` trigger automatic deploys. See [`netlify.toml`](./netlify.toml) for config.

## Project Structure

```
src/
├── app/                  # Pages (App Router)
│   ├── page.tsx          # Homepage
│   ├── globals.css       # Theme variables & base styles
│   ├── sixteen-to-one/   # Sixteen to One app page
│   ├── stockpot/         # Stockpot app page
│   ├── bramble/          # Bramble app page
│   ├── pica/             # Pica app page
│   ├── reviso/           # Reviso product page
│   ├── privacy/          # Privacy policy
│   ├── terms/            # Terms of service
│   └── support/          # Support page
├── components/
│   ├── marks/            # SVG logomark components per app
│   ├── AppPageLayout.tsx # Shared app page layout
│   ├── AppCard.tsx       # App card for homepage grid
│   ├── Nav.tsx           # Navigation
│   └── Footer.tsx        # Footer
└── lib/
    └── apps.ts           # App metadata (colors, slugs, descriptions)
```
