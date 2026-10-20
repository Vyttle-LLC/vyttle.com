# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three real arrival paths, all confirmed. They differ by where they came from, not by demographic.

1. **Store trust-checkers (highest real volume).** Someone found a Vyttle app in the App Store or Google Play and tapped the developer, support, or privacy link. Their job is to confirm a tiny unknown studio is real and safe — or to get help, or to read the policy the store required. They usually arrive deep-linked on a phone, on a page like `/sixteen-to-one/privacy`, not on the homepage.
2. **App discoverers.** They arrive by search, word of mouth, or a shared link, browse the lineup, and leave for a store to install. The site is the top of their funnel.
3. **Developers evaluating the open-source tools.** Engineers who work with Claude Code or Codex, arriving from GitHub, wiffletree.dev or a shared link to see what Wiffletree and Reviso are and how to install them — a different job from the consumer apps.

## Product Purpose

vyttle.com is the public face of Vyttle and its store-compliance surface. App Store and Google Play require reachable privacy and support URLs; this site satisfies that obligation and does it exceptionally well, so the required pages read as the work of a deliberate studio rather than as a compliance formality.

**Success is the obligation done beautifully.** Store clickthroughs and installs of the open-source tools are welcome side effects, not the measure. The bar is that someone who came only to verify a privacy policy leaves with a better opinion of the studio than they arrived with.

## Positioning

Vyttle is a one-person studio shipping intentionally small, privacy-first apps: no accounts, no tracking, no servers, on-device processing, and iCloud that means *the user's own* iCloud. Payments are App Store IAP only — the 15% Small Business Program fee is what buys the "no account" positioning and sidesteps tax and refund complexity.

The website's own differentiator is that it **runs the way the apps run**. No analytics, no cookies, no consent banner, no third-party runtime requests, no server. A neighboring studio site could copy the claim; it could not copy a site that is already built as the proof.

## Operating Context

- **Most arrivals are mobile and deep-linked**, coming from a store listing rather than the homepage. Policy and support pages are entry points, not terminal pages.
- **Support runs on Netlify Forms**, with a honeypot (`bot-field`) and required-field validation. Submissions land in the Netlify dashboard; replies come from Proton on the domain (`support@vyttle.com`, plus `michael@`, `hello@`, `privacy@`).
- **The portfolio is mostly pre-launch.** One app shipped, three apps in progress, and two open-source developer tools in early release. The site has to present unreleased work honestly and repeatedly.
- **Product truth lives in the second brain** at `~/dev/vyttle/vyttle-docs/` — per-product notes under `second-brain/notes/`, brand kits under `brand-kit/` and `products/<product>/brand-kit/`. That repo, not this one, is the source of truth for status and brand assets.

## Capabilities and Constraints

**Technical**

- Next.js 16 (App Router) with **static export** to `out/`, deployed on Netlify. No server runtime, no API routes, no ISR, no middleware.
- **Netlify Forms is the only backend.** The support form posts to it; a hidden detection form in `layout.tsx` exists so the static build registers it.
- Fonts load through `next/font/google` (self-hosted at build time — no runtime request to Google). MDX is available for legal and policy pages.
- Theming: dark is default, light via `data-theme` on `<html>`, persisted in `localStorage` under `vyttle-theme` by an inline pre-hydration script.
- The product catalog is centralized in `src/lib/apps.ts` — status, accents, marks, store URLs. Pages read from it rather than hardcoding.

**Product status (as of October 2026)**

| Product | Status |
|---|---|
| Sixteen to One | Shipped on iOS and Android (April 2026). Free with an optional tip jar. |
| Pica | iOS feature-complete; Android port in progress. Launch is gated on the port. |
| Stockpot | In development (iOS). |
| Bramble | Planning. MVP scope settled: local-only, free, no IAP; enrichment deferred to v1.1. |
| Wiffletree | Early release. Open-source (MIT) native macOS app that coordinates Claude and Codex coding agents. Its own site is wiffletree.dev; vyttle.com features it and links there rather than duplicating it. |
| Reviso | Early release. Open-source (Apache-2.0) local pre-PR code review plugin for Claude Code and Codex, installable from GitHub. It is only the open-source repo: there is no hosted or paid Reviso, and none is planned. |

**Explicitly undecided — must not be published as committed**

- **Paid offerings.** Stockpot subscription pricing is planning-level. No prices appear on this site.
- **No ship dates are committed** for any coming-soon product.
- **Reviso's privacy policy** (`/reviso/privacy`, rewritten October 2026 for the open-source plugin) commits to deleting feedback issues a year after filing, or sooner on request to privacy@vyttle.com. That yearly deletion is a manual job until it is automated.

## Brand Commitments

- **Name and entity:** Vyttle, Vyttle LLC (Florida, February 2026). Tagline: **"Small by design."**
- **The brand kit is binding:** `~/dev/vyttle/vyttle-docs/brand-kit/vyttle-brand-guidelines.md`, with per-product kits under `products/<product>/brand-kit/`.
- **Amber `#D4933D` is always the accent** and always the logomark's center dot, constant across light and dark. The diamond's structural fill is theme-aware (Cool Warm Fog `#DDD8CC` on dark, Navy `#1A1E35` on light). Never place the logo on an amber or gold background; never swap the amber and neutral roles.
- **The marks are one family.** Every product mark shares the Vyttle diamond's construction — flat geometry, a cut circle, one accent dot — and Michael values that continuity. Wiffletree's Interlock mark comes from its own brand kit and is the exception.
- **Type on this site** is set by DESIGN.md (Archivo, October 2026 redesign). Product brand kits keep their own faces inside their apps; Sixteen to One's name keeps its Source Serif 4 here too. The VYTTLE wordmark is outlined artwork, never live text.
- **One accent and one logomark per product**, and accents must stay distinguishable across the lineup. Precedent: Stockpot's coral moved to a true red because it sat too close to Amber and Crema.
- **"We" is voice, not headcount.** Vyttle is Mike Hohlios alone. No team pages, no headshots, no "our engineers," no invented staff.
- **Zero tracking is a promise, not a preference.** `/privacy` states no cookies, analytics, ad trackers, social pixels, session tracking, or fingerprinting. Nothing may ever add analytics, pixels, embeds, or third-party runtime requests to this site.
- **Never describe the studio as iOS-only.** Sixteen to One already ships on Google Play and Pica launches on both platforms simultaneously. The studio-level line is "small, private apps for iPhone and Android, and open-source tools for developers who work with coding agents" — it covers both platforms and the tools, which are not apps at all. Per-app copy may still name a platform when that app genuinely is single-platform (Bramble is iOS-only today).

## Evidence on Hand

**Real, usable**

- Three Sixteen to One product screenshots — `public/screenshots/sixteen-to-one/` (light Drip, dark Chemex, settings).
- Wiffletree app screenshot — `public/screenshots/wiffletree/coordinator.png`, from the wiffletree-website repo.
- Google Play badge asset — `public/badges/google-play.png`.
- Live store listings: App Store `id6760734071`, Google Play `com.vyttle.sixteentoone`.
- Complete logo sets for every product in `vyttle-docs` — primary, horizontal, wordmark, logomark, in dark and light, SVG and PNG. Pica additionally has 24 achievement badges.
- Company facts: Vyttle LLC formation documents, EIN, © 2026, `support@vyttle.com`.

**Absent — must never be fabricated**

- No testimonials, reviews, star ratings, user counts, press mentions, case studies, download numbers, or revenue figures exist. Sixteen to One shipped quietly to roughly five users with no marketing push; nothing on this site may imply traction it does not have.
- No screenshots or product imagery exist for Stockpot, Bramble, Pica, or Reviso. They are represented by their stamps.
- No customer logos, no "trusted by," no awards.

## Product Principles

1. **The site must earn the claim it makes.** Every technical decision is subject to the privacy promise. The implementation is the argument — a tracking-free site is the only credible way to say "we don't track you."
2. **The obligation pages are the front door.** Privacy, support, and per-app policy pages carry more real traffic than the homepage and deserve equal craft. Nothing here is a back room.
3. **Honesty about stage beats the appearance of scale.** One shipped app and four in progress is the truth; say it plainly rather than dressing a solo studio as a company.
4. **Restraint is the signature.** "Small by design" governs the site as much as the apps — confidence shows in what is left out.
5. **One family, distinct products.** A shared skeleton and shared type system, with a single unmistakable accent and mark per product.

## Accessibility & Inclusion

- **WCAG AA (4.5:1 for normal text) is the held standard**, in *both* themes. A prior audit drove the theme-aware color fixes now in `globals.css`; that bar is a commitment, not a one-time cleanup.
- **Light and dark are both first-class.** Dark is the default, but neither mode is an afterthought — brand assets and per-product accents already ship theme-aware variants.
- **Mobile-first is a usage fact, not a preference** — the majority of visitors arrive on a phone from a store listing.
- **English only for now**, expanding based on download geography.
