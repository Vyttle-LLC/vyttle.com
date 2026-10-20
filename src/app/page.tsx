/*
 * THESIS: Vyttle is one issuing studio and its products are one stamp issue —
 * a shared frame and geometric grammar, a colour per value. Refuses the dark
 * SaaS hero-plus-bento grid the old site (and the category) ships.
 * OWN-WORLD: perforated paper stamps with deep product fields and printed
 * accent bands, on a stockbook-black or quadrille-grey page; amber postmark;
 * Archivo across its width axis; registration marks and colour bars.
 * STORY: a visitor sees the whole lineup at once, learns what is out and what
 * is coming, tears off a stamp to its catalogue entry, and installs or reads on.
 * FIRST VIEWPORT: "Small by design." at display scale on the left with two
 * actions (apps / open source); the six-stamp sheet on the right with printer's
 * marks; Sixteen to One carries the postmark that lands once on load.
 * FORM: modernist postal issue, #7 of the grounded list, staged as a sheet
 * then a catalogue; seed 4139d6c3.
 */
import Link from "next/link";
import { getAppBySlug, getAppsByKind } from "@/lib/apps";
import StampSheet from "@/components/StampSheet";
import FeaturedApp from "@/components/home/FeaturedApp";
import CatalogueRow from "@/components/home/CatalogueRow";
import OpenSource from "@/components/home/OpenSource";
import Reverse from "@/components/home/Reverse";
import VyttleMark from "@/components/marks/VyttleMark";

export default function HomePage() {
  const [featured, ...upcoming] = getAppsByKind("app");

  return (
    <main id="main" tabIndex={-1} className="focus:outline-none">
      <section className="page-x pt-24 md:pt-36" aria-labelledby="hero-heading">
        <div className="page-width grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
          <div className="fade-in">
            <p className="t-label inline-flex items-center gap-3 mb-6 md:mb-8" style={{ color: "var(--text-secondary)" }}>
              <VyttleMark size={14} />
              Independent software studio
            </p>
            <h1 id="hero-heading" className="t-display">
              Small by design.
            </h1>
            <p className="t-lede mt-5 md:mt-7 max-w-[36ch]">
              Vyttle makes small, private apps for iPhone and Android — and open-source tools for developers who
              work with coding agents.
            </p>
            <div className="mt-8 md:mt-10 flex flex-wrap gap-3">
              <Link href="#apps" className="btn btn--primary">
                See the apps
              </Link>
              <Link href="#open-source" className="btn btn--secondary">
                Open-source tools
              </Link>
            </div>
          </div>
          <div className="w-full max-w-[640px] justify-self-center lg:justify-self-end">
            <StampSheet />
          </div>
        </div>
      </section>

      <section id="apps" className="page-x section-y scroll-mt-16" aria-labelledby="apps-heading">
        <div className="page-width">
          <header className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end mb-16">
            <h2 id="apps-heading" className="t-headline">
              Apps that do one thing well.
            </h2>
            <p className="t-body md:justify-self-end md:max-w-[44ch]">
              For iPhone and Android. Nothing to sign up for and nothing tracking you — open the app and it works.
            </p>
          </header>

          <FeaturedApp app={featured} />

          <ul className="list-none mt-20">
            {upcoming.map((app) => (
              <CatalogueRow key={app.slug} app={app} />
            ))}
          </ul>
        </div>
      </section>

      <OpenSource wiffletree={getAppBySlug("wiffletree")!} reviso={getAppBySlug("reviso")!} />

      <Reverse />

      <section className="page-x section-y" aria-labelledby="help-heading">
        <div className="page-width flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 id="help-heading" className="t-headline">
              Need a hand?
            </h2>
            <p className="t-body mt-4 max-w-[46ch]">
              Questions, bugs, or ideas about any Vyttle app or tool. You&apos;ll hear back from the person who
              built it.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/support" className="btn btn--primary">
              Contact support
            </Link>
            <a href="mailto:support@vyttle.com" className="btn btn--secondary">
              support@vyttle.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
