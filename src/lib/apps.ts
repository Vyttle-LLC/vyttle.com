export type AppStatus = "coming-soon" | "available" | "beta";
export type ProductType = "app" | "product";

export interface VyttleApp {
  slug: string;
  name: string;
  nameHtml?: string;
  tagline: string;
  description: string;
  status: AppStatus;
  type: ProductType;
  featured?: boolean;
  /** True when this product ships its own policy route at `/<slug>/privacy`.
   *  Products still in development don't have one — there is no data-collection
   *  story to document yet — so `privacyHref()` sends them to the site-wide
   *  `/privacy`, which says so. Add the route file and set this in one commit. */
  hasPrivacyPolicy?: boolean;
  appStoreUrl?: string;
  playStoreUrl?: string;
  externalUrl?: string;
  /** The vivid accent. Correct for solid fills, low-alpha tints, borders and
   *  glows — anything that is not a word. */
  accent: string;
  /** Theme-aware form of `accent`, where the product needs one. */
  accentVar?: string;
  /** The accent as TEXT: darkened on light until it clears the text contrast
   *  bars, hue preserved. Any accent-colored word uses this, never `accent`. */
  accentTextVar?: string;
  accentLight: string;
  darkBg: string;
  lightBg: string;
  mark: string;
}

export const apps: VyttleApp[] = [
  {
    slug: "sixteen-to-one",
    name: "Sixteen to One",
    nameHtml: 'Sixteen <em style="font-weight:300;opacity:0.55;font-size:0.88em">to</em> One',
    tagline: "The ratio, perfected.",
    description:
      "A coffee ratio calculator that does one thing and does it well. Dial in your brew with precision — water, coffee, ratio, done.",
    status: "available",
    type: "app",
    featured: true,
    hasPrivacyPolicy: true,
    appStoreUrl: "https://apps.apple.com/us/app/sixteen-to-one/id6760734071",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.vyttle.sixteentoone",
    accent: "#C4956A",
    accentTextVar: "var(--accent-text-crema)",
    accentLight: "#DFC5A8",
    darkBg: "#1C1008",
    lightBg: "#F8F4EE",
    mark: "SixteenToOneMark",
  },
  {
    slug: "stockpot",
    name: "Stockpot",
    tagline: "Your recipes. Your kitchen.",
    description:
      "A recipe app that keeps your collection local and private. Organize, cook, and share — all synced through iCloud, nothing in the cloud you don't control.",
    status: "coming-soon",
    type: "app",
    hasPrivacyPolicy: true,
    accent: "#C0392B",
    accentTextVar: "var(--accent-text-stockpot)",
    accentLight: "#D4756A",
    darkBg: "#1A1816",
    lightBg: "#F4F3F1",
    mark: "StockpotMark",
  },
  {
    slug: "bramble",
    name: "Bramble",
    tagline: "Contacts, untangled.",
    description:
      "A lightweight contact manager that helps you clean up, organize, and actually maintain your address book. Local-first with iCloud sync.",
    status: "coming-soon",
    type: "app",
    hasPrivacyPolicy: true,
    accent: "#7C4DFF",
    accentVar: "var(--bramble-accent)",
    accentTextVar: "var(--accent-text-bramble)",
    accentLight: "#B89DD4",
    darkBg: "#100F14",
    lightBg: "#F6F4F8",
    mark: "BrambleMark",
  },
  {
    slug: "pica",
    name: "Pica",
    tagline: "Puzzles, one cell at a time.",
    description:
      "A nonogram puzzle app where you fill cells in a grid to reveal hidden pictures. Logic, precision, and the satisfaction of solving — no hints required.",
    status: "coming-soon",
    type: "app",
    accent: "#4A6FE0",
    accentTextVar: "var(--accent-text-pica)",
    accentLight: "#8AA4F0",
    darkBg: "#0A0E1C",
    lightBg: "#EDF0FB",
    mark: "PicaMark",
  },
  {
    slug: "reviso",
    name: "Reviso",
    tagline: "AI code reviews that don't suck.",
    description:
      "A GitHub Action that provides intelligent, inline AI-powered code reviews on pull requests. Bring your own API key, pay per org — not per seat.",
    status: "coming-soon",
    type: "product",
    hasPrivacyPolicy: true,
    accent: "#22D3EE",
    accentVar: "var(--reviso-accent)",
    accentTextVar: "var(--accent-text-reviso)",
    accentLight: "#A5F3FC",
    darkBg: "#0A1019",
    lightBg: "#E8F6FA",
    mark: "RevisoMark",
  },
];

export function getAppBySlug(slug: string): VyttleApp | undefined {
  return apps.find((app) => app.slug === slug);
}

export function getAppsByType(type: ProductType): VyttleApp[] {
  return apps.filter((app) => app.type === type);
}

/** Where a product's "Privacy Policy" link points. A product without its own
 *  policy falls back to the site-wide one rather than 404ing — these are
 *  store-required URLs, and a dead one is the worst thing to show someone who
 *  came specifically to check whether the studio is legitimate. */
export function privacyHref(app: VyttleApp): string {
  return app.hasPrivacyPolicy ? `/${app.slug}/privacy` : "/privacy";
}

/** The products that publish their own policy, for the index on /privacy.
 *  Derived rather than hand-listed: the hand-listed copy is how Pica went
 *  missing from that page while still being linked from its own. */
export function appsWithPrivacyPolicy(): VyttleApp[] {
  return apps.filter((app) => app.hasPrivacyPolicy);
}
