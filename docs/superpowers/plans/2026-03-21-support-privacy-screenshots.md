# Sixteen to One: Privacy Update & Screenshots Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the Sixteen to One privacy policy date, add real app screenshots to the website, and document Netlify Forms email setup.

**Architecture:** Content updates to an existing Next.js static site. The `ScreenshotCarousel` component gets refactored to accept real image data while maintaining backward compatibility for other app pages. Screenshot images are added to `public/` for static serving.

**Tech Stack:** Next.js 16 (App Router), TypeScript, Tailwind CSS v4, static export to Netlify

**Spec:** `docs/superpowers/specs/2026-03-21-support-privacy-screenshots-design.md`

---

### Task 1: Update Sixteen to One Privacy Policy Date

**Files:**
- Modify: `src/app/sixteen-to-one/privacy/page.tsx:20-28`

- [ ] **Step 1: Update the date**

In `src/app/sixteen-to-one/privacy/page.tsx`, change line 28:

```tsx
// Before:
Last updated: February 2026

// After:
Last updated: March 2026
```

- [ ] **Step 2: Verify the build**

Run: `npm run build`
Expected: Build succeeds with no errors

- [ ] **Step 3: Commit**

```bash
git add src/app/sixteen-to-one/privacy/page.tsx
git commit -m "content: update Sixteen to One privacy policy date to March 2026"
```

---

### Task 2: Add Screenshot Image Assets

**Files:**
- Create: `public/screenshots/sixteen-to-one/light-drip.png`
- Create: `public/screenshots/sixteen-to-one/settings.png`
- Create: `public/screenshots/sixteen-to-one/dark-chemex.png`

- [ ] **Step 1: Create the directory**

```bash
mkdir -p public/screenshots/sixteen-to-one
```

- [ ] **Step 2: Copy screenshot files**

Copy the 3 simulator screenshots from the attachments directory, renaming them:

```bash
cp ".context/attachments/Simulator Screenshot - iPhone 17 Pro - 2026-03-21 at 14.01.30.png" public/screenshots/sixteen-to-one/light-drip.png
cp ".context/attachments/Simulator Screenshot - iPhone 17 Pro - 2026-03-21 at 14.01.34.png" public/screenshots/sixteen-to-one/settings.png
cp ".context/attachments/Simulator Screenshot - iPhone 17 Pro - 2026-03-21 at 14.01.07.png" public/screenshots/sixteen-to-one/dark-chemex.png
```

- [ ] **Step 3: Verify files exist**

```bash
ls -la public/screenshots/sixteen-to-one/
```

Expected: 3 PNG files listed

- [ ] **Step 4: Commit**

```bash
git add public/screenshots/sixteen-to-one/
git commit -m "assets: add Sixteen to One app screenshots"
```

---

### Task 3: Refactor ScreenshotCarousel to Support Real Images

**Files:**
- Modify: `src/components/ScreenshotCarousel.tsx`

- [ ] **Step 1: Refactor the component**

Replace the contents of `src/components/ScreenshotCarousel.tsx` with:

```tsx
interface Screenshot {
  src: string;
  alt: string;
}

interface ScreenshotCarouselProps {
  screenshots?: Screenshot[];
  count?: number;
}

export default function ScreenshotCarousel({
  screenshots,
  count = 3,
}: ScreenshotCarouselProps) {
  if (screenshots && screenshots.length > 0) {
    return (
      <div className="mt-12 w-full overflow-hidden -mx-6 md:-mx-12 px-6 md:px-12">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 no-scrollbar">
          {screenshots.map((shot, i) => (
            <div
              key={shot.src}
              className={`snap-center shrink-0 ${i === 0 ? "ml-auto" : ""} ${i === screenshots.length - 1 ? "mr-auto" : ""}`}
            >
              <img
                src={shot.src}
                alt={shot.alt}
                className="rounded-3xl"
                style={{
                  width: "180px",
                  height: "auto",
                  border: "1px solid var(--border)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12 w-full overflow-hidden -mx-6 md:-mx-12 px-6 md:px-12">
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 no-scrollbar">
        {Array.from({ length: count }, (_, i) => (
          <div
            key={i}
            className={`snap-center shrink-0 ${i === 0 ? "ml-auto" : ""} ${i === count - 1 ? "mr-auto" : ""}`}
          >
            <div
              className="w-[180px] h-[360px] rounded-3xl flex items-center justify-center"
              style={{
                border: "1px solid var(--border)",
                background: "var(--bg-card)",
              }}
            >
              <span
                className="text-[10px] font-light uppercase"
                style={{
                  fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                  letterSpacing: "2px",
                  color: "var(--text-tertiary)",
                  writingMode: "vertical-rl",
                }}
              >
                Screenshot
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify the build**

Run: `npm run build`
Expected: Build succeeds — no other pages break since `screenshots` is optional

- [ ] **Step 3: Commit**

```bash
git add src/components/ScreenshotCarousel.tsx
git commit -m "feat: support real images in ScreenshotCarousel"
```

---

### Task 4: Wire Screenshots into AppPageLayout and Sixteen to One Page

**Files:**
- Modify: `src/components/AppPageLayout.tsx:9-13,83`
- Modify: `src/app/sixteen-to-one/page.tsx`

- [ ] **Step 1: Add screenshots prop to AppPageLayout**

In `src/components/AppPageLayout.tsx`, update the interface and component:

```tsx
// Add to AppPageLayoutProps interface (around line 9):
interface AppPageLayoutProps {
  app: VyttleApp;
  logomark: ReactNode;
  children?: ReactNode;
  screenshots?: { src: string; alt: string }[];
}

// Update the component signature (around line 15):
export default function AppPageLayout({
  app,
  logomark,
  children,
  screenshots,
}: AppPageLayoutProps) {

// Update ScreenshotCarousel usage (around line 83):
<ScreenshotCarousel screenshots={screenshots} />
```

- [ ] **Step 2: Pass screenshots from Sixteen to One page**

In `src/app/sixteen-to-one/page.tsx`, add the screenshots array to the `AppPageLayout`:

```tsx
const screenshots = [
  { src: "/screenshots/sixteen-to-one/light-drip.png", alt: "Sixteen to One in light mode showing Drip method with dark roast settings" },
  { src: "/screenshots/sixteen-to-one/settings.png", alt: "Sixteen to One settings showing unit conversions and appearance options" },
  { src: "/screenshots/sixteen-to-one/dark-chemex.png", alt: "Sixteen to One in dark mode showing Chemex method with medium roast settings" },
];

// Then pass to AppPageLayout:
<AppPageLayout
  app={app}
  logomark={...}
  screenshots={screenshots}
>
```

- [ ] **Step 3: Verify the build**

Run: `npm run build`
Expected: Build succeeds with no errors

- [ ] **Step 4: Visual verification**

Run: `npm run dev`
Visit `http://localhost:3000/sixteen-to-one` — verify screenshots appear in the carousel
Visit `http://localhost:3000/stockpot` — verify placeholder boxes still appear

- [ ] **Step 5: Commit**

```bash
git add src/components/AppPageLayout.tsx src/app/sixteen-to-one/page.tsx
git commit -m "feat: add Sixteen to One screenshots to app page"
```

---

### Task 5: Final Build Verification

- [ ] **Step 1: Run lint**

```bash
npm run lint
```

Expected: No errors

- [ ] **Step 2: Run full build**

```bash
npm run build
```

Expected: Static export succeeds to `out/`

- [ ] **Step 3: Verify output**

```bash
ls out/sixteen-to-one/privacy/index.html
ls out/screenshots/sixteen-to-one/
```

Expected: Privacy page and screenshot assets present in build output
