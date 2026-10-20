export type AppStatus = "available" | "early" | "coming-soon" | "in-development" | "planned";
export type ProductKind = "app" | "tool";

export interface Screenshot {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface VyttleApp {
  slug: string;
  name: string;
  nameHtml?: string;
  tagline: string;
  description: string;
  status: AppStatus;
  kind: ProductKind;
  /** Where it runs, as a visitor would say it: "iPhone & Android", "macOS". */
  platforms: string;
  /** True when this product ships its own policy route at `/<slug>/privacy`.
   *  Products still in development don't have one — there is no data-collection
   *  story to document yet — so `privacyHref()` sends them to the site-wide
   *  `/privacy`, which says so. Add the route file and set this in one commit. */
  hasPrivacyPolicy?: boolean;
  appStoreUrl?: string;
  playStoreUrl?: string;
  /** A product with its own site has no page here; every link goes there. */
  externalUrl?: string;
  repoUrl?: string;
  license?: string;
  /** The vivid accent. Correct for solid fills, low-alpha tints, borders and
   *  glows — anything that is not a word. */
  accent: string;
  /** Theme-aware form of `accent`, where the product needs one. */
  accentVar?: string;
  /** The deep tone its stamp prints on, derived from the product's brand. */
  field: string;
  /** Month of issue, for shipped products: carried on the stamp's postmark. */
  issued?: string;
  /** Real product screenshots only — never mockups. */
  screenshots?: Screenshot[];
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
    issued: "Apr 2026",
    kind: "app",
    platforms: "iPhone & Android",
    hasPrivacyPolicy: true,
    appStoreUrl: "https://apps.apple.com/us/app/sixteen-to-one/id6760734071",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.vyttle.sixteentoone",
    screenshots: [
      { src: "/screenshots/sixteen-to-one/light-drip.png", alt: "Sixteen to One in light mode showing Drip method with dark roast settings", width: 1206, height: 2622 },
      { src: "/screenshots/sixteen-to-one/dark-chemex.png", alt: "Sixteen to One in dark mode showing Chemex method with medium roast settings", width: 1206, height: 2622 },
      { src: "/screenshots/sixteen-to-one/settings.png", alt: "Sixteen to One settings showing unit conversions and appearance options", width: 1206, height: 2622 },
    ],
    accent: "#C4956A",
    field: "#2A180E",
  },
  {
    slug: "pica",
    name: "Pica",
    tagline: "Puzzles, one cell at a time.",
    description:
      "A nonogram puzzle app where you fill cells in a grid to reveal hidden pictures. Logic, precision, and the satisfaction of solving — no hints required.",
    status: "coming-soon",
    kind: "app",
    platforms: "iPhone & Android",
    accent: "#4A6FE0",
    field: "#111C4A",
  },
  {
    slug: "stockpot",
    name: "Stockpot",
    tagline: "Your recipes. Your kitchen.",
    description:
      "A recipe app that keeps your collection local and private. Organize, cook, and share — all synced through iCloud, nothing in the cloud you don't control.",
    status: "in-development",
    kind: "app",
    platforms: "iPhone",
    hasPrivacyPolicy: true,
    accent: "#C0392B",
    field: "#2E1513",
  },
  {
    slug: "bramble",
    name: "Bramble",
    tagline: "Contacts, untangled.",
    description:
      "A lightweight contact manager that helps you clean up, organize, and actually maintain your address book. Local-first with iCloud sync.",
    status: "planned",
    kind: "app",
    platforms: "iPhone",
    hasPrivacyPolicy: true,
    accent: "#7C4DFF",
    field: "#1C1238",
    accentVar: "var(--bramble-accent)",
  },
  {
    slug: "wiffletree",
    name: "Wiffletree",
    tagline: "A team lead for your coding agents.",
    description:
      "A native Mac workspace where Claude and Codex agents work as a team. You talk to one coordinator; it plans the tickets, assigns the agents, and has every change tested and reviewed by a different agent. Merging stays with you.",
    status: "early",
    kind: "tool",
    platforms: "macOS",
    externalUrl: "https://wiffletree.dev",
    screenshots: [
      { src: "/screenshots/wiffletree/coordinator.png", alt: "Wiffletree's coordinator view: a project's tickets and agents in the sidebar, and the coordinator reporting a ticket that passed testing and review", width: 1280, height: 820 },
    ],
    repoUrl: "https://github.com/Vyttle-LLC/wiffletree",
    license: "MIT",
    accent: "#86C1BC",
    field: "#1A262D",
    accentVar: "var(--wiffletree-accent)",
  },
  {
    slug: "reviso",
    name: "Reviso",
    tagline: "Code review that catches the slop.",
    description:
      "A local, pre-PR code review for Claude Code and Codex. It reviews your branch before the pull request exists — and flags the AI slop other reviews let through.",
    status: "early",
    kind: "tool",
    platforms: "Claude Code & Codex",
    hasPrivacyPolicy: true,
    repoUrl: "https://github.com/Vyttle-LLC/reviso",
    license: "Apache-2.0",
    accent: "#22D3EE",
    field: "#08202A",
    accentVar: "var(--reviso-accent)",
  },
];

export const STATUS_LABEL: Record<AppStatus, string> = {
  available: "Available now",
  early: "Early release",
  "coming-soon": "Coming soon",
  "in-development": "In development",
  planned: "Planned",
};

export function getAppBySlug(slug: string): VyttleApp | undefined {
  return apps.find((app) => app.slug === slug);
}

export function getAppsByKind(kind: ProductKind): VyttleApp[] {
  return apps.filter((app) => app.kind === kind);
}

/** Its number in the issue — position in the lineup, two digits. */
export function issueNumber(app: VyttleApp): string {
  return String(apps.indexOf(app) + 1).padStart(2, "0");
}

/** Where a product's name links: its page here, or its own site. */
export function productHref(app: VyttleApp): string {
  return app.externalUrl ?? `/${app.slug}`;
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
