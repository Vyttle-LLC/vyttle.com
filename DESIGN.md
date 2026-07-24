---
name: Vyttle
description: A dark observatory for five small, precise products — atmosphere behind glass, one fixed amber star.
colors:
  midnight: "#0C0E1A"
  navy: "#1A1E35"
  slate: "#5B6178"
  silver: "#A8ADBD"
  fog: "#DDE0E8"
  cool-warm-fog: "#DDD8CC"
  white: "#F4F5F7"
  amber: "#D4933D"
  gold: "#F0D48A"
  crema: "#C4956A"
  latte: "#DFC5A8"
  espresso: "#1C1008"
  tomato: "#C0392B"
  blush: "#D4756A"
  pewter: "#8A8580"
  vivid-violet: "#7C4DFF"
  lavender: "#E8E5ED"
  haze: "#736C80"
  cobalt: "#4A6FE0"
  cobalt-light: "#8AA4F0"
  electric-cyan: "#22D3EE"
  cyan-deep: "#06B6D4"
  cyan-light: "#A5F3FC"
typography:
  display:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(2.25rem, 5vw, 3rem)"
    fontWeight: 300
    lineHeight: 1.15
    letterSpacing: "1px"
  wordmark:
    fontFamily: "Outfit, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "6px"
  headline:
    fontFamily: "Outfit, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.02em"
  title:
    fontFamily: "Outfit, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.01em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: "normal"
  field:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 300
    lineHeight: 1.4
    letterSpacing: "normal"
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "3px"
  micro:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "10px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "2px"
rounded:
  sm: "10px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  page-top: "128px"
components:
  button-primary:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.midnight}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "14px 32px"
  button-primary-disabled:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.midnight}"
    rounded: "{rounded.sm}"
    padding: "14px 32px"
  bento-cell:
    rounded: "{rounded.md}"
    padding: "32px"
  bento-cell-hover:
    rounded: "{rounded.md}"
    padding: "32px"
  badge-available:
    textColor: "{colors.espresso}"
    rounded: "{rounded.pill}"
    padding: "6px 16px"
  badge-coming-soon:
    rounded: "{rounded.pill}"
    padding: "6px 16px"
  badge-type:
    rounded: "{rounded.pill}"
    padding: "3px 8px"
  input-field:
    textColor: "{colors.fog}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
    width: "100%"
  nav:
    height: "64px"
    padding: "0 48px"
  theme-toggle:
    rounded: "{rounded.pill}"
    height: "36px"
    width: "36px"
---

# Design System: Vyttle

## Overview

**Creative North Star: "The Observatory"**

A dark room built for watching small, precise things. The page is a near-black field with a slow aurora drifting far behind it; the content sits forward on glass, flat and exact. Nothing in this system competes for attention, because an observatory that glares at you is a failed observatory. The atmosphere moves on 6–10 second cycles and never resolves into a shape you can name. You look *through* it, not *at* it.

The instruments are the logomarks: hard geometry, even-odd cutouts, no flourish, no gradient, no bevel. The Vyttle diamond is a solid form with a circular hole punched through it and a single amber dot suspended in the gap. That amber dot is the fixed star — it is `#D4933D` in dark mode and `#D4933D` in light mode, in every size, forever. Every other color in this system is theme-aware. That one is not, and its constancy is the whole idea.

Five products share this sky, and each owns exactly one accent. Their colors never mix and never fill; they arrive as *light* — a 4% tint, a 10% border, a 40px glow on hover. Restraint here is measured, not vibed: a bento cell at rest is barely present, and hovering it roughly triples its presence. That 3× jump is the personality of the entire system.

**Key Characteristics:**
- Two planes only: a fixed, blurred atmosphere and a flat content layer on glass
- One accent per product, always emitted as light, never used as a large fill
- Amber belongs to the studio alone and is constant across both themes
- Geometric display type set in wide uppercase; humanist body type set light
- Motion is ambient and slow; state changes are 200ms and never bounce
- Dark is the default; both themes are fully designed, not inverted

## Colors

A cool near-black foundation carrying one warm studio accent, with five product accents that appear only as light against it.

### Primary

- **Amber** (`#D4933D`): The studio's own voice. It appears on the logomark dot, prose links, the support form's submit button, and nav hover — and essentially nowhere else. In light mode, interactive amber deepens to `#B8802E` for contrast, but the logomark dot never does.
- **Gold** (`#F0D48A`): Amber's hover state in prose links. A highlight, never a fill.

### Secondary

The five product accents. Each belongs to exactly one product and is inherited from that product's own brand kit, so the color on this site matches the color on its app icon and store listing.

- **Crema** (`#C4956A`) — Sixteen to One. Coffee-derived warm tan. Supported by **Latte** (`#DFC5A8`) as the mark's structural tone on dark and **Espresso** (`#1C1008`) on light.
- **Tomato** (`#C0392B`) — Stockpot. A true red, deliberately moved off coral so it cannot be confused with Amber or Crema. **Blush** (`#D4756A`) carries the coming-soon badge on dark; **Pewter** (`#8A8580`) is the pot mark's structural fill.
- **Vivid Violet** (`#7C4DFF`) — Bramble. The one accent identical in both themes. **Lavender** (`#E8E5ED`) and **Haze** (`#736C80`) carry the node network's structure.
- **Cobalt** (`#4A6FE0`) — Pica. Blueprint blue. **Cobalt Light** (`#8AA4F0`) carries the badge on dark.
- **Electric Cyan** (`#22D3EE`) — Reviso. The only developer-facing product and the only cool-bright accent. **Cyan Deep** (`#06B6D4`) replaces it on light backgrounds where the bright cyan would fail.

### Neutral

- **Midnight** (`#0C0E1A`): The primary dark background and the text color on light. The field everything else is measured against.
- **Navy** (`#1A1E35`): Secondary dark surface and the logomark's structural fill on light backgrounds.
- **Slate** (`#5B6178`): Secondary text in light mode, and the source of the 20%-alpha border used throughout dark mode.
- **Silver** (`#A8ADBD`): Secondary and tertiary text in dark mode. Both roles resolve to the same value on purpose — see The Two-Tone Text Rule.
- **Fog** (`#DDE0E8`): Primary text on dark. Also light-mode borders and dividers.
- **Cool Warm Fog** (`#DDD8CC`): The logomark's structural fill on dark. Distinct from Fog — it is deliberately warmer, so the diamond reads as an object rather than as text.
- **White** (`#F4F5F7`): The primary light background. Never pure `#FFFFFF`.

### Surfaces

Two composited surface tokens, both built from Midnight rather than pure black:

- **`--surface-glass`** (`rgba(12,14,26,0.92)` dark / `rgba(244,245,247,0.92)` light): The base any content surface composites onto when it sits over the atmosphere. See The Glass-Not-Clear Rule.
- **`--scrim`** (`rgba(12,14,26,0.88)`): The lightbox overlay. Deliberately **not** theme-aware — a screenshot reads best against a dark surround in either theme — and deliberately Midnight rather than pure black, so the overlay belongs to this palette.

### Named Rules

**The One Voice Rule.** Amber is the studio's color, not a product's. A product page uses that product's accent for every accent role; it never borrows amber. Conversely, no product accent may appear on the homepage hero, the footer, or the wordmark. Nothing on this site uses two accents at once.

**The Constant Star Rule.** The amber dot at the center of the Vyttle diamond is `#D4933D` in every theme, every size, and every export. It is the only color in the system exempt from theming. If a mark's dot changes with the theme, the mark is wrong.

**The Emitted Color Rule.** Product accents arrive as light, not as paint: a 4% background tint, a 10% border, a 25% border and 40px glow on hover, a 1.5px hero outline. There are exactly two sanctioned solid fills in the system — the "Available Now" badge and the primary button — and both follow the same inversion: solid accent, dark text. For the badge that means the product's own dark background color; for the button it means Midnight. That inversion is what marks a shipped product as different from a promised one, and it is also what keeps the fills accessible.

**The Dark-On-Accent Rule.** Any solid accent fill sets its text dark, never white. Every accent in this palette is mid-to-high lightness, so white-on-accent fails WCAG AA — amber measures 2.6:1 against white and 7.3:1 against Midnight. If a new component needs a solid accent background, the text is Midnight or that product's dark tone; if the design seems to demand white text, the fill is the wrong color.

**The Two-Tone Text Rule.** There are exactly two text tones per theme, not three. `--text-secondary` and `--text-tertiary` resolve to the same value (Silver on dark, Slate on light) because a third, fainter tone failed WCAG AA at the sizes this site uses it. Do not reintroduce a dimmer tier to create hierarchy; use size, weight, and tracking instead.

## Typography

**Display Font:** Source Serif 4 (with Georgia, serif)
**Body Font:** DM Sans (with system sans-serif)
**Structural Font:** Outfit (with system sans-serif)

**Character:** Three faces doing three jobs that never overlap. Outfit is geometric and constructed — it handles anything that behaves like a label or a structure: the wordmark, section headings, uppercase micro-labels. DM Sans is humanist and set light; it carries everything a person actually reads. Source Serif 4 appears twice in the entire site, at weight 300, and its rarity is what gives it weight.

### Hierarchy

- **Display** (Source Serif 4, 300, `clamp(2.25rem, 5vw, 3rem)`, +1px): The homepage promise, "Small by design," and Sixteen to One's name. Nowhere else.
- **Wordmark** (Outfit, 600, 16px, +6px, uppercase): "VYTTLE" in the nav. The footer sets the same treatment at 14px / +5px.
- **Headline** (Outfit, 600, 2.5rem, +0.02em): Page titles in prose and policy pages. App page titles set uppercase at +6px in the product's accent.
- **Title** (Outfit, 500, 1.5rem, +0.01em): Section headings — "About [App]", "Thanks for reaching out!"
- **Body** (DM Sans, 400, 1rem, line-height 1.8): All reading copy. Prose columns cap at `max-w-3xl`; app-page copy at `max-w-2xl`. Taglines and support copy set at 300.
- **Label** (DM Sans, 300–400, 11px, +3px to +4px, uppercase): Section eyebrows and the scroll cue. The most-used voice on the site.
- **Micro** (DM Sans, 400, 10px, +1.5px to +2px, uppercase): Status badges and type chips. The smallest type in the system, and therefore the tier where contrast has to be checked rather than assumed — every measured contrast failure this system has had was at this size.

### Named Rules

**The Wide Uppercase Rule.** Uppercase text never sets below +2px tracking, and the smaller it gets, the wider it tracks: badges at 10px take +2px, section eyebrows at 11px take +4px, the wordmark at 16px takes +6px. Uppercase at default tracking is a bug in this system.

**The Serif Exception Rule.** Source Serif 4 is not a general display face. It appears in exactly two places: the homepage promise and Sixteen to One's name (which inherits it from that product's own brand kit). Adding a third use dilutes both. Every other heading is Outfit.

**The Light-Weight Rule.** Nothing on this site sets above 600, and body copy that wants to feel calm sets at 300. Weight is not how this system creates emphasis — color and tracking are.

## Layout

A single centered column, `max-width: 1200px`, with page padding stepping from 24px on mobile to 48px from the `md` breakpoint up. Prose narrows further — `max-w-3xl` for policy pages, `max-w-2xl` for app-page copy, `max-w-lg` for the support form — because reading measure matters more than filling the container.

The homepage is two movements. First a full `min-h-screen` hero holding only the floating mark, the promise, and a scroll cue — deliberately almost empty, since the whole site's argument is restraint. Then the bento grid: a 2-column grid at `md` and above collapsing to a single column below, with 24px gutters. The featured product spans both columns; everything else takes one cell. Cell membership comes from `apps.ts`, so the grid's composition is data, not markup.

Interior pages start at 128px of top padding to clear the 64px fixed nav with air to spare. App pages wrap their entire contents — hero, screenshots, prose, footer links — inside one large accent-outlined container at 24px radius, which is what makes a product page read as a single object rather than a stack of sections.

Vertical rhythm runs on an 8px base: 8 / 16 / 24 / 32 / 48. Bento cells hold 32px of internal padding at every breakpoint; crowding them is the fastest way to break the system's character.

**The 1200 Rule.** Content never exceeds 1200px, and text never exceeds its own narrower measure inside that. A full-width element on this site is always atmosphere, never content.

## Elevation & Depth

This system has **no elevation scale**. There are exactly two planes, and depth is a question of which one you are on.

The **atmosphere plane** (`z-0`) is a fixed, full-viewport field of eight blurred radial gradients, each drifting on its own 5–10 second cycle with independent opacity keyframes. It is `blur(70px)`, `pointer-events: none`, and `aria-hidden="true"` — decorative in the strict sense, invisible to assistive technology, and untouchable by the cursor.

The **content plane** (`z-10`) is flat. No cards are lifted, no surfaces stack, nothing casts a shadow at rest. Separation comes from tonal tint (`color-mix` of the product accent at 4%) and hairline borders, not from shadow. The nav sits at `z-50` on `backdrop-filter: blur(20px)` over a translucent background — glass over the atmosphere, still part of the content plane.

The only true shadows in the system are state or structure, never rest: a 40px accent glow on bento-cell hover, a 20px accent drop-shadow halo behind app-page logomarks, and `0 8px 32px rgba(0,0,0,0.3)` under the nav's Products dropdown — the sole real drop shadow, justified because a floating menu must separate from arbitrary content beneath it.

### Shadow Vocabulary

- **Accent glow** (`box-shadow: 0 0 40px color-mix(in srgb, {accent} 8%, transparent)`): Bento cell hover only. Emitted, not cast — no offset.
- **Mark halo** (`filter: drop-shadow(0 0 20px color-mix(in srgb, {accent} 25%, transparent))`): App-page hero logomarks at rest. Makes the mark read as lit rather than printed.
- **Menu shadow** (`box-shadow: 0 8px 32px rgba(0,0,0,0.3)`): The nav dropdown. The one exception to the flat rule.

### Named Rules

**The Two-Plane Rule.** There are exactly two planes: the atmosphere (fixed, blurred, `aria-hidden`) and the content (flat, on glass). Nothing lives between them. A new element that wants to feel "raised" is asking the wrong question — it belongs on the content plane, flat, and it distinguishes itself with tint and border.

**The Perceptual Parity Rule.** The atmosphere is tuned by eye, not by number. Light mode carries roughly twice the alpha of dark mode (0.35–0.45 versus 0.18–0.25) because color on white needs it to register at all. These numbers are *supposed* to disagree — matching them would destroy the parity they create. Dark is additionally dialed back so the bento cells' own accents are not masked by the field behind them.

**The Look-Through Rule.** The atmosphere must never become the subject. If a visitor notices the background before the words, it is too loud. It has no hard edges, resolves into no recognizable shape, and every band stays under `blur(70px)`.

**The Glass-Not-Clear Rule.** A content surface sitting over the atmosphere composites onto `--surface-glass` (0.92 alpha), never onto `transparent`. The atmosphere belongs behind *content*, not behind *text*. A 96%-clear surface lets the aurora through the words themselves, and because the aurora animates, the effective contrast becomes a moving target — 10px labels measured as low as 1.3:1 against a light-mode band at peak. 0.90 is the measured floor; 0.92 is the token. Pair it with a backdrop blur so the surface reads as glass rather than as a panel.

## Shapes

Radius scales with the surface it wraps. Inputs and buttons take 10px; bento cells take 12px; screenshots, lightboxes, and the app-page container take 24px; badges and the theme toggle are fully round. Nothing on this site has square corners, and nothing has a radius the eye would call "soft" — every value is small enough to read as machined rather than pillowy.

Borders are hairlines: 1px everywhere, at low alpha (`rgba(91,97,120,0.2)` on dark, `rgba(221,224,232,0.8)` on light) or as a `color-mix` of the product accent at 10–15%. The one heavier stroke in the system is the app-page hero's 1.5px solid accent outline, which is what declares "this page belongs to this product."

The recurring geometry is the **cut circle**: a solid form with a circular cutout revealing an accent dot suspended in the gap. Vyttle's diamond does it, Stockpot's pot does it, Sixteen to One's ratio mark plays the same figure as circle-and-dot. All marks are even-odd paths, solid fills, full opacity — no strokes, no gradients, no shadows inside the mark itself.

**The Softer-As-It-Grows Rule.** Radius is proportional to surface: 10px for controls, 12px for cells, 24px for containers, pill for badges. A 24px radius on a button, or a 10px radius on a page-level container, breaks the scale.

## Components

Character: **precise and unhurried**. An instrument responds accurately; it does not perform. Transitions run 200ms for state and 400ms for theme, with no bounce, no spring, and no overshoot anywhere in the system.

### Buttons

- **Shape:** Gently machined corners (10px radius)
- **Primary:** Solid amber (`#D4933D`) with Midnight text, 14px vertical / 32px horizontal padding, DM Sans 500 at +1px tracking. Used only for the support form's submit. Dark-on-accent is not a stylistic preference — white on amber measures 2.6:1 and fails WCAG AA, while Midnight on amber measures 7.3:1.
- **Disabled / submitting:** Same fill at 50% opacity, label swaps to "Sending…"
- **Ghost / text:** Bare amber text on transparent, no border, no padding — used for "Send another message" and prose links. Prose links underline at 2px offset and shift to Gold on hover.

### Badges

Two states, deliberately inverted from each other.

- **Coming Soon:** Outlined — 1px accent border, accent text, transparent fill, with a 5px accent dot pulsing on a 2s opacity cycle (0.4 → 1). Pill radius, 10px uppercase at +2px.
- **Available Now:** Filled — solid accent background with text set in that product's own dark background color. The inversion is the signal; a shipped product looks materially different from a promised one.
- **Type chip:** "Mobile" / "SaaS", absolutely positioned top-right of each bento cell. 10px uppercase at +1.5px, **neutral text** (`--text-tertiary`) inside a 25% accent border, pill radius. The text is deliberately not accent-colored: the chip states a category, not an identity, and the mark, tint, border and status badge already carry the accent four times over in the same cell. Accent text here previously ran at 50% alpha and measured 1.3–3.4:1.

### Bento Cells

- **Corner Style:** 12px radius
- **Background:** The product's accent at 4% over `--surface-glass` (`color-mix(in srgb, {accent} 4%, var(--surface-glass))`), with `backdrop-filter: blur(8px)`. Composited over the glass token, never over `transparent` — see The Glass-Not-Clear Rule.
- **Border:** 1px of the same accent at 10%
- **Internal Padding:** 32px, uniform, at every breakpoint
- **Hover:** Tint to 12%, border to 25%, `scale(1.02)`, and a 40px accent glow — all on a 200ms transition. Roughly a 3× jump in presence, and the single most characteristic interaction in the system.
- **Content order:** type chip, 48px logomark, name, tagline, then the status badge pinned to the bottom with `mt-auto` so badges align across a row regardless of copy length.

### Inputs / Fields

- **Style:** Translucent card background, 1px hairline border, 10px radius, 12px/16px padding, DM Sans 300 at 16px
- **Label:** 12px DM Sans 400 at +1px tracking in secondary text, stacked above the field with 6px of space
- **Textarea:** Same treatment, `resize: vertical`, 120px minimum height
- **Focus:** Mouse and touch focus stay quiet; keyboard focus draws a 2px amber outline at 2px offset plus an amber border, via `.field-input:focus-visible` in `globals.css`. A real `outline` rather than a `box-shadow` so the ring survives forced-colors mode. Note that the focus treatment must live in CSS, not the inline `inputStyle` object — inline styles outrank any class rule, so an inline `outline: none` would silently kill it.

### Navigation

- **Style:** Fixed, 64px tall, translucent background under `backdrop-filter: blur(20px)`, 1px bottom hairline
- **Left:** 20px Vyttle diamond and the wordmark at +6px tracking
- **Links:** DM Sans 400 at 14px in secondary text, shifting to amber on hover
- **Products dropdown:** Same glass treatment, 12px radius, and the one component in the system with a real drop shadow. Each row carries a 8px accent dot and tints to that accent at 8% on hover.
- **Mobile (below `md`):** The horizontal links collapse into a hamburger toggle; the wordmark and theme toggle stay in the bar. Tapping the toggle opens the mobile menu. Both the toggle and the menu belong to the content plane, not a new one.

### Mobile menu (signature component)

Below `md`, the primary nav becomes a full-viewport glass overlay rather than a scaled-down bar — one calm surface showing one set of choices at a time, matching the spacious hero.

- **Surface:** `--surface-glass` with `backdrop-filter: blur(24px)`, so it reads as glass over the atmosphere rather than an opaque panel — the aurora still whispers through. Sits at `z-40`, below the nav bar's `z-50`, so the toggle (now an ✕) stays on top and reachable. Padding respects `env(safe-area-inset-*)` via `max()`.
- **Content:** the five products as flat rows (8px accent dot + name, echoing the desktop dropdown) under a "Products" eyebrow, a hairline divider, then Support. The desktop dropdown is deliberately *not* re-nested inside the menu — a disclosure-within-a-disclosure for five short items is friction, not progressive disclosure.
- **Semantics:** a disclosure, not a modal. The toggle carries `aria-expanded` and `aria-controls`; the panel is a labeled region, not `role="dialog"`. Claiming `aria-modal` would be false, since the control that closes it lives outside it in the bar.
- **Behavior:** rows are ≥48px tall; body scroll locks while open; Escape closes and returns focus to the toggle; opening moves focus to the first link. It auto-closes if the viewport crosses into desktop, so its JS scroll-lock can never strand a `md:hidden` overlay.
- **Motion:** one authored moment — a 200ms fade with an 8px upward slide, and a symmetric exit. Reduced-motion snaps with no slide, per The Instrument Rule.

### The Atmosphere (signature component)

Eight absolutely-positioned radial-gradient ellipses in a fixed, full-viewport, `aria-hidden` container. Each has its own size, position, keyframe, and duration (5–10s), so the field never visibly loops. All are `blur(70px)` with `border-radius: 50%`. Dark and light carry separate band arrays — different colors and roughly 2× the alpha in light — rather than one array with an opacity multiplier. It is re-evaluated on theme change via a `MutationObserver` on `data-theme`.

### The Marks (signature component)

Each product renders as an inline SVG component driven by CSS custom properties rather than hardcoded fills, which is what lets a single mark be theme-aware without duplicate assets. `--mark-neutral` carries the structural fill (Cool Warm Fog on dark, Navy on light); per-product variables like `--sixteen-structural` and `--bramble-node` do the same for product marks. Accent dots are hardcoded precisely because they must not respond to theme.

## Do's and Don'ts

### Do:
- **Do** treat the atmosphere as something to look through. Keep it behind glass, `aria-hidden`, `pointer-events: none`, and under `blur(70px)`.
- **Do** give each product exactly one accent, inherited from that product's own brand kit, so the color matches its app icon and store listing.
- **Do** express accents as light — 4% tint, 10% border, hover glow — and reserve solid accent fills for the "Available Now" badge alone.
- **Do** keep the amber dot at `#D4933D` in both themes, at every size, in every export.
- **Do** track uppercase wide: +2px minimum, +4px for 11px eyebrows, +6px for the wordmark.
- **Do** design light mode as its own composition. Both themes are first-class; light is not an inversion, and its atmosphere is legitimately ~2× the alpha of dark's.
- **Do** hold 32px of internal padding in bento cells and 1200px maximum content width.
- **Do** keep transitions at 200ms for state and 400ms for theme, with no easing that overshoots.
- **Do** honor `prefers-reduced-motion` for every new animation, matching the existing block that disables fades, reveals, and decorative motion.
- **Do** give policy, support, and per-app legal pages the same craft as the homepage — they carry more real traffic.

### Don't:
- **Don't** let this read as a generic AI-era SaaS landing page. The aurora is one wrong move from that cliché; what saves it is that it stays behind glass and never becomes the subject. No gradient blob behind a centered CTA, no testimonial wall, no "Trusted by" logo strip, no pricing table.
- **Don't** let it read as an Apple product-page clone. No scroll-jacking, no parallax device reveals, no full-bleed hero screenshots, no spec-sheet drama.
- **Don't** let a legal or support page read as a compliance page. No unstyled prose, no default blue links, no bare `<h1>` on white.
- **Don't** let it read as an indie-maximalist portfolio. No brutalist type, no chaotic grids, no novelty cursors. Personality here comes from precision, not volume.
- **Don't** add a shadow to a resting surface. If something needs to come forward, it glows in its own accent or it moves to the nav's glass — those are the only two answers.
- **Don't** introduce a third text tone to create hierarchy. Two tones per theme; use size, weight, and tracking instead.
- **Don't** use amber on a product page or a product accent on the homepage hero, footer, or wordmark.
- **Don't** set Source Serif 4 anywhere beyond the homepage promise and Sixteen to One's name.
- **Don't** set any weight above 600.
- **Don't** add analytics, embeds, remote fonts, or any third-party runtime request. The site's tracking-free implementation is the argument for its privacy claim.
- **Don't** fabricate social proof. No testimonials, ratings, user counts, or download numbers exist — see PRODUCT.md.

---

<!--
Known deltas at time of writing (2026-07-23), recorded rather than silently applied:

1. `--midnight` in src/app/globals.css is `#08090E`. Canonical Midnight is `#0C0E1A`,
   verified in pica-ios PicaTheme.swift, pica-android PicaColors.kt and themes.xml,
   the Vyttle wordmark SVGs vendored into both app repos, and the company brand kit.
   vyttle.com is the only surface company-wide carrying `#08090E`.

2. `--badge-reviso` light mode is `#0E7490`. Reviso's kit specifies Cyan Dark `#0891B2`
   for text-on-white where WCAG AA contrast is required.

3. Inputs set `outline: none` with no replacement focus indicator (SupportForm.tsx).
   Accessibility gap, not a design rule.

Verified as NOT drift: Bramble `#7C4DFF` and Stockpot `#C0392B` match their current
brand kits and shipped logomark SVGs. The older `#7B5EA7` / `#A63D2F` values appear
only in the superseded pre-build vyttle-docs/products/website/DESIGN-SPEC.md.
-->
