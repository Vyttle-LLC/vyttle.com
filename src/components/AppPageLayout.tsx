import { ReactNode } from "react";
import Link from "next/link";
import { STATUS_LABEL, issueNumber, privacyHref, type VyttleApp } from "@/lib/apps";
import Stamp from "./Stamp";
import IssueLine from "./IssueLine";
import ProductName from "./ProductName";
import StoreBadges from "./StoreBadges";
import ScreenshotCarousel from "./ScreenshotCarousel";

interface AppPageLayoutProps {
  app: VyttleApp;
  /** Primary actions for a product that is not in a store, e.g. install links. */
  actions?: ReactNode;
  children?: ReactNode;
}

/** A product's catalogue page: the enlarged stamp beside its entry, then
 *  screenshots (real ones only), the long description and the particulars. */
export default function AppPageLayout({ app, actions, children }: AppPageLayoutProps) {
  const details = [
    { term: "Catalogue no.", value: issueNumber(app) },
    { term: "Status", value: app.issued ? `${STATUS_LABEL[app.status]} · issued ${app.issued}` : STATUS_LABEL[app.status] },
    { term: "Platforms", value: app.platforms },
    ...(app.license ? [{ term: "License", value: app.license }] : []),
  ];

  return (
    <main id="main" tabIndex={-1} className="page-x pt-28 md:pt-36 focus:outline-none">
      <div className="page-width">
        <Link href={`/#${app.slug}`} className="link-quiet tap-target -ml-1 gap-2 text-[15px]">
          <span aria-hidden="true">←</span> All Vyttle {app.kind === "app" ? "apps" : "tools"}
        </Link>

        <header className="mt-8 grid grid-cols-1 items-center gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
          <div className="fade-in w-full max-w-[240px] sm:max-w-[300px] md:max-w-[360px] justify-self-center md:justify-self-start">
            <Stamp app={app} />
          </div>
          <div>
            <IssueLine app={app} />
            <h1 className="mt-6" style={{ fontSize: "clamp(2.75rem, 7vw, 5rem)", lineHeight: 0.98 }}>
              <ProductName app={app} />
            </h1>
            <p className="t-title mt-4" style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.625rem)" }}>
              {app.tagline}
            </p>
            <p className="t-body mt-5">{app.description}</p>
            <div className="mt-9">
              {app.appStoreUrl || app.playStoreUrl ? (
                <StoreBadges app={app} />
              ) : (
                actions ?? (
                  <p className="t-label inline-flex items-center gap-3" style={{ color: "var(--text-primary)" }}>
                    <span aria-hidden="true" className="inline-block w-2 h-2" style={{ background: app.accentVar ?? app.accent }} />
                    {STATUS_LABEL[app.status]} — no date announced yet
                  </p>
                )
              )}
            </div>
          </div>
        </header>

        {app.screenshots && (
          <section aria-label={`${app.name} screenshots`} className="mt-20">
            <ScreenshotCarousel screenshots={app.screenshots} />
          </section>
        )}

        <div className="section-y grid grid-cols-1 gap-14 md:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] md:gap-20">
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="t-headline" style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.5rem)" }}>
              About {app.name}
            </h2>
            <div className="prose mt-8">{children}</div>
          </section>

          <aside aria-label="Particulars">
            <dl className="flex flex-col">
              {details.map(({ term, value }) => (
                <div key={term} className="flex items-baseline justify-between gap-6 py-4" style={{ borderTop: "1px solid var(--border)" }}>
                  <dt className="t-label" style={{ color: "var(--text-secondary)" }}>
                    {term}
                  </dt>
                  <dd className="text-right">{value}</dd>
                </div>
              ))}
            </dl>
            <ul className="list-none mt-6 flex flex-col">
              <li>
                <Link href={privacyHref(app)} className="link-arrow">
                  Privacy policy <span aria-hidden="true">→</span>
                </Link>
              </li>
              <li>
                <Link href={`/support?app=${app.slug}`} className="link-arrow">
                  Get support <span aria-hidden="true">→</span>
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </main>
  );
}
