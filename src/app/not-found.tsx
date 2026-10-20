import type { Metadata } from "next";
import Link from "next/link";
import { apps, productHref } from "@/lib/apps";
import Stamp from "@/components/Stamp";

export const metadata: Metadata = {
  title: "Page not found — Vyttle",
  description: "That page doesn't exist. Vyttle's products, privacy policy, and support are linked here.",
};

const SITE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/privacy", label: "Privacy policy" },
  { href: "/support", label: "Support" },
];

/**
 * The most likely way someone lands here is a stale or mistyped store link to a
 * policy page — so this is a directory, not an apology: every product and every
 * studio page, one tap away.
 */
export default function NotFound() {
  return (
    <main id="main" tabIndex={-1} className="page-x pt-28 md:pt-36 focus:outline-none">
      <div className="page-width grid grid-cols-1 gap-14 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-20">
        <div>
          <p className="t-label" style={{ color: "var(--text-secondary)" }}>
            Error 404
          </p>
          <h1 className="t-headline mt-5" style={{ fontSize: "clamp(2.5rem, 6vw, 4.25rem)" }}>
            This page isn&apos;t here.
          </h1>
          <p className="t-lede mt-6 max-w-[34ch]">
            The link may be out of date, or the address slightly off. Everything Vyttle publishes is listed here.
          </p>
        </div>

        <nav aria-label="Site directory" className="flex flex-col gap-10">
          <ul className="list-none flex flex-col">
            {apps.map((app) => (
              <li key={app.slug} style={{ borderTop: "1px solid var(--border)" }}>
                <Link
                  href={productHref(app)}
                  className="accent-row flex items-center gap-4 px-2 py-3 no-underline"
                  style={{ "--row-accent": app.accent, color: "var(--text-primary)" } as React.CSSProperties}
                  {...(app.externalUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <Stamp app={app} chip className="w-9 shrink-0" />
                  <span className="t-title" style={{ fontSize: 19 }}>
                    {app.name}
                  </span>
                  <span className="ml-auto t-label" style={{ color: "var(--text-secondary)" }}>
                    {app.platforms}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="list-none flex flex-wrap gap-x-8">
            {SITE_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="link-arrow">
                  {link.label} <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
