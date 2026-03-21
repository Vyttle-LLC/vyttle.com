# Sixteen to One: Privacy Update, Screenshots, and Netlify Forms Setup

**Date:** 2026-03-21

## Summary

Three changes to vyttle.com for the Sixteen to One app launch:

1. Update the Sixteen to One privacy policy date to March 2026
2. Add real screenshots to the Sixteen to One app page (replacing placeholders)
3. Document Netlify Forms email notification setup (manual dashboard step)

## 1. Privacy Policy Update

**File:** `src/app/sixteen-to-one/privacy/page.tsx`

- Change "Last updated: February 2026" → "Last updated: March 2026"
- No other content changes — the user-facing text already matches the latest policy from the iOS repo
- Apple App Store-specific sections (Privacy Nutrition Label, Data Categories, etc.) are intentionally excluded from the website

## 2. Screenshot Integration

### Image Assets

Copy 3 screenshots from the iOS simulator to `public/screenshots/sixteen-to-one/`:

| File | Source | Description |
|------|--------|-------------|
| `light-drip.png` | 14.01.30 screenshot | Light mode, Drip method, Dark roast, full calculator UI |
| `settings.png` | 14.01.34 screenshot | Light mode, Settings sheet with conversions and appearance |
| `dark-chemex.png` | 14.01.07 screenshot | Dark mode, Chemex method, Medium roast |

### Apple App Store Screenshots (not a code change)

Submit 4 screenshots to Apple in this order:

1. Dark mode splash screen (14.23.55)
2. Light mode — Drip / Dark roast (14.01.30)
3. Light mode — Settings (14.01.34)
4. Dark mode — Chemex / Medium roast (14.01.07)

### ScreenshotCarousel Component

**File:** `src/components/ScreenshotCarousel.tsx`

Refactor to accept an optional array of image objects:

```typescript
interface Screenshot {
  src: string;
  alt: string;
}

interface ScreenshotCarouselProps {
  screenshots?: Screenshot[];
  count?: number; // fallback for placeholder mode
}
```

- When `screenshots` is provided: render `<img>` tags in the horizontal scroll carousel
- When `screenshots` is not provided: keep existing placeholder behavior (other app pages still use this)
- Image sizing: maintain iPhone aspect ratio (~180×390px) at the existing scale

### AppPageLayout

**File:** `src/components/AppPageLayout.tsx`

- Add optional `screenshots` prop to `AppPageLayoutProps`
- Pass through to `<ScreenshotCarousel screenshots={screenshots} />`

### Sixteen to One Page

**File:** `src/app/sixteen-to-one/page.tsx`

- Pass the 3 screenshots to `AppPageLayout` in order: light-drip, settings, dark-chemex

## 3. Netlify Forms Email Setup

No code changes needed — the form infrastructure is already in place:

- `data-netlify="true"` on the form
- Hidden form declaration in root `layout.tsx` for static build detection
- Honeypot spam protection
- `?app=` URL parameter pre-fills the app dropdown

**Manual steps after deploy:**

1. Go to Netlify dashboard → **Site → Forms** — verify "support" form is detected
2. Go to **Forms → Form notifications → Add notification → Email notification**
3. Set destination email (e.g. support@vyttle.com)

## Files Changed

| File | Change |
|------|--------|
| `src/app/sixteen-to-one/privacy/page.tsx` | Update date to March 2026 |
| `src/components/ScreenshotCarousel.tsx` | Accept `screenshots` array, render real images |
| `src/components/AppPageLayout.tsx` | Add `screenshots` prop, pass to carousel |
| `src/app/sixteen-to-one/page.tsx` | Pass screenshot data to layout |
| `public/screenshots/sixteen-to-one/*.png` | 3 new image assets |
| `.gitignore` | Add `.superpowers/` |

## Out of Scope

- Support form code changes (already working)
- Other app pages (keep placeholder screenshots)
- Apple App Store submission (manual process, documented above)
- Light mode splash screenshot (E) — not used on website or App Store
