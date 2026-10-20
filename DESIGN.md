---
name: Vyttle
description: The Vyttle Issue — a modernist postage-stamp issue. One issuing studio, a sheet of products sharing one frame and one geometric grammar, each in its own colour.
colors:
  ink: "#0C0E1A"
  ground-dark: "#0C0E1A"
  ground-light: "#E4E6EC"
  paper: "#F7F7F4"
  fog: "#DDE0E8"
  silver: "#A8ADBD"
  slate: "#5B6178"
  slate-deep: "#454B60"
  amber: "#D4933D"
  amber-text-light: "#7E5414"
  field-sixteen: "#2A180E"
  field-pica: "#111C4A"
  field-stockpot: "#2E1513"
  field-bramble: "#1C1238"
  field-wiffletree: "#1A262D"
  field-reviso: "#08202A"
  crema: "#C4956A"
  cobalt: "#4A6FE0"
  tomato: "#C0392B"
  vivid-violet: "#7C4DFF"
  sea-glass: "#86C1BC"
  electric-cyan: "#22D3EE"
typography:
  display:
    fontFamily: "Archivo (wdth 125), Arial, sans-serif"
    fontSize: "clamp(3rem, 8.5vw, 6rem)"
    fontWeight: 760
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Archivo (wdth 118), Arial, sans-serif"
    fontSize: "clamp(2rem, 4.5vw, 3.25rem)"
    fontWeight: 720
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Archivo (wdth 112), Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 680
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Archivo (wdth 100), Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  stamp-label:
    fontFamily: "Archivo (wdth 112), Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 620
    lineHeight: 1.2
    letterSpacing: "0.14em"
  code:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "14px"
    fontWeight: 450
rounded:
  none: "0px"
  control: "6px"
  pill: "9999px" # lightbox close button only
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "64px"
  section: "clamp(96px, 14vw, 176px)"
components:
  stamp:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.none}"
  button-primary:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "14px 22px"
  button-secondary:
    textColor: "{colors.fog}"
    rounded: "{rounded.control}"
    padding: "14px 22px"
---

# Design System: Vyttle

## Overview

**Creative north star: "The Vyttle Issue."**

Vyttle is one issuing studio with a family of small products, and every product mark is built from the same grammar as the Vyttle diamond: a flat geometric body, a cut circle, one accent dot. That is exactly how a modernist stamp issue works — Wim Crouwel's Dutch PTT numerals, the Swiss PTT definitives — one authority, one frame, one construction system, a different colour per value.

So the site is a stamp issue. The lineup is a perforated sheet. Each product is a stamp printed in its own deep field with its mark at the centre and its accent as a printed band. A shipped app carries an amber postmark with its month of issue; everything else is honestly unissued. The pages around the sheet behave like the rest of the philatelic world: a catalogue that lists each issue with its number and status, a stockbook page that holds them, and the printed reverse of the sheet for the studio's principles.

The world is strictly modernist. No aged paper, no grunge, no sepia, no vintage cancellation texture. Flat ink, exact perforation, wide grotesk lettering, precise registration marks.

**Key characteristics**

- The stamp is the product's unit everywhere: hero sheet, catalogue entries, product pages, nav and menus (as a perforated chip).
- Colour lives in the stamps. Each stamp's field and accent band are saturated, so the sheet carries six colours at page scale while the ground stays neutral.
- Amber is the studio's ink: the diamond's dot, the postmark, the primary action.
- Type is one family, Archivo, used across its width axis — expanded for display, normal for reading, slightly wide for printed labels — like a postal lettering system.
- Motion is philatelic: a stamp lifts off the page when picked up; a postmark lands once.

## Colors

**Ground.** Dark mode is a stockbook page: Midnight `#0C0E1A`. Light mode is an album page: cool grey `#E4E6EC` with a faint quadrille grid. Neither is cream; never warm the ground.

**Paper** `#F7F7F4` is the stamp paper in both themes. Perforation holes are transparent and reveal the ground.

**Fields.** Each product prints on its own deep field, derived from its brand: Sixteen to One espresso, Pica blueprint, Stockpot dark tomato, Bramble deep violet, Wiffletree deep teal, Reviso cyan ink. Inside a field the marks always render with their dark-mode structural colours (the field scopes those variables), so a mark looks the same on every stamp in both themes.

**Accents** are the product accents from their brand kits. They appear as the printed band, the stamp's catalogue number (lifted toward paper so it clears 4.5:1 on every field), the square status marker, and the colour bar — never as body text on the ground. Bramble, Reviso and Wiffletree have theme-aware forms (`--bramble-accent`, `--reviso-accent`, `--wiffletree-accent`) for markers that sit on the light ground.

**Named rules**

- **The Studio Ink Rule.** Amber belongs to Vyttle: the diamond dot, the postmark, the primary button, focus rings. A product never uses amber, and amber never prints inside a product field except as the postmark that cancels it.
- **The Constant Star Rule.** The diamond's dot is `#D4933D` in every theme and size.
- **The Focus Rule.** Keyboard focus is a 2px `--focus-ring` outline: amber on the dark page, Amber Dark `#7E5414` on the grey page, where raw amber is only 2.1:1. The ring follows the surface, not the theme: Amber Dark on the paper panel in both themes (amber is 2.4:1 on paper), amber on ink plates in both themes.
- **The Two-Tone Text Rule.** Two text tones per theme. Dark: Fog primary, Silver secondary. Light: Ink primary, Slate Deep `#454B60` secondary (Slate fails AA on the grey ground). Hierarchy comes from size, width and weight.

## Typography

**Archivo** (variable, `wdth` 62–125, `wght` 100–900), self-hosted via `next/font`. One family across its width axis:

- **Display / headline** at `wdth` 118–125, weight 700–780, tight negative tracking (floor −0.04em). Sentence case. Max 6rem.
- **Body** at `wdth` 100, weight 400, 17px, line-height 1.6, measure ≤ 68ch.
- **Stamp label** at `wdth` 112, weight 600+, 11px uppercase, +0.14em tracking — the printed text on a stamp ("VYTTLE", issue lines, status). Used for printed matter only, not as an eyebrow over every section.

**JetBrains Mono** is for real commands only (install lines, slash commands). **Source Serif 4** remains only inside Sixteen to One's name, because its brand kit sets it so.

The VYTTLE wordmark is outlined artwork (`VyttleWordmark`), never live text.

## Layout

Single column, max content width 1240px, gutters 20px mobile / 40px tablet / 56px desktop. Reading measure ≤ 68ch.

- **Home:** hero (promise left, sheet right; stacked on mobile) → *Series A, The apps* catalogue → *Series B, Open source* → *The reverse* (principles, on a paper panel) → support close.
- **Product page:** a catalogue page — enlarged stamp beside the entry (number, status, name, tagline, actions), then screenshots, then prose and a details list.
- **Policy pages:** prose on the ground under the shared `PrinterMarks` strip (registration mark, printed label, colour bar). Same craft as the home page; these are the most-visited pages.

Vertical rhythm: section spacing `clamp(96px, 14vw, 176px)`; more space above a heading than below it.

## Elevation & Depth

Stamps are paper on a page. At rest a sheet sits flat with a soft two-layer `drop-shadow` (filter, so it follows the perforations). Picking a stamp up (hover / focus) lifts it 6px with a slight rotation and a deeper shadow.

Real photographic material casts a soft offset shadow as a print would: the Sixteen to One screens and the mounted Wiffletree screenshot. Nothing else casts shadows. The nav is the only translucent surface (a blurred bar over scrolling content).

## Shapes

Stamps and fields are square-cornered: printed matter has no radius. Perforation radius 4–5px, tile 3× radius. Controls (buttons, inputs, the command box) take a 6px radius. Status markers are small squares, not dots — printed, not glowing. Phone screenshots keep the device's own rounded corners.

## Components

- **Stamp** (`Stamp.tsx`): perforated paper → field → issuer line (VYTTLE + catalogue number) → mark → name → platform line → accent band. Sized with container units so one component works from 36px chips to 360px stamps. With `href` it is a link that lifts on hover; without one it is illustration (`aria-hidden`) beside the product's name.
- **Sheet** (`StampSheet.tsx`): stamps joined with zero gap so perforations meet; printer's marks above (registration cross, six-accent colour bar, sheet line).
- **Postmark** (`Postmark.tsx`): double-ring amber cancel with month of issue and wavy cancellation lines. Shipped apps only. It lands once on the hero sheet (the site's one authored motion moment); everywhere else it is simply printed. Static under reduced motion.
- **Printer's marks** (`PrinterMarks.tsx`): registration cross, a printed label, the six-accent colour bar. Above the hero sheet and at the top of every policy page.
- **Catalogue entry:** number, status, name, tagline, description, actions. Rows divided by hairlines, not cards.
- **Command box** (`CopyCommand.tsx`): mono line on an ink plate (`.ink-plate`, the same in both themes), faded at the right edge where it scrolls, with a copy button that announces success or tells the visitor to select and copy if the clipboard is unavailable.
- **Mounted print:** a real screenshot held by four paper photo corners — how the album holds an image.
- **Nav:** wordmark, Apps, Open source, Support, theme toggle; perforated bottom edge.
- **Buttons:** primary amber with ink text; secondary hairline with ground text. 6px radius, no pill.

### Implementation notes

- Component classes live in `globals.css` under `@layer components`, so Tailwind utilities (`md:hidden`, `grid-cols-*`) override them.
- Single-column grids carry `grid-cols-1` (a `minmax(0, 1fr)` track) so an unbreakable install command cannot widen the page on phones.

## Do's and Don'ts

**Do**

- Show every product as a stamp built by the one `Stamp` component.
- Keep status honest: postmark only for shipped apps; "Coming soon", "In development", "Planned", "Early release" as printed text.
- Use real screenshots only (Sixteen to One, Wiffletree). Other products are represented by their stamps.
- Honour `prefers-reduced-motion`: no lift rotation, no postmark landing.
- Keep the site free of analytics, pixels, embeds and runtime third-party requests.

**Don't**

- Don't age anything: no paper texture, sepia, coffee stains, torn edges or grunge cancels.
- Don't put a tracked uppercase eyebrow over every section. Printed stamp labels belong to printed things.
- Don't use cards with icon + heading + text as page structure; use catalogue rows.
- Don't use glass, gradients or glows as decoration.
- Don't print amber inside a product's stamp (its field) except as the postmark; don't use a product accent on Vyttle's own chrome.
- Don't fabricate social proof, prices, ship dates or user counts.
