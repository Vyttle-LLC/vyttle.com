import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ConicOrb from "@/components/ConicOrb";
import VyttleMark from "@/components/marks/VyttleMark";
import { apps } from "@/lib/apps";

export const metadata: Metadata = {
  title: "Page not found — Vyttle",
  description:
    "That page doesn't exist. Vyttle's products, privacy policy, and support are linked here.",
};

const siteLinks = [
  { href: "/", label: "Home" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/support", label: "Support" },
];

const eyebrowStyle = {
  fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
  fontSize: "11px",
  fontWeight: 400,
  letterSpacing: "4px",
  color: "var(--text-tertiary)",
};

const rowStyle = {
  fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
  fontSize: "16px",
  fontWeight: 300,
  color: "var(--text-primary)",
  minHeight: "48px",
  padding: "0 8px",
};

/**
 * The most likely way someone lands here is a stale or mistyped store link to a
 * policy page — so this is a directory, not an apology. The atmosphere is dimmed
 * like the other front doors, and recovery is two labeled groups rather than a
 * lone "go home" button.
 */
export default function NotFound() {
  return (
    <>
      <ConicOrb dim />

      <div className="relative z-10">
        <Nav />

        <main
          id="main"
          tabIndex={-1}
          className="pt-32 pb-16 px-6 md:px-12 focus:outline-none"
        >
          <div className="max-w-lg mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="fade-in mb-8" style={{ animationDelay: "0ms" }}>
                <VyttleMark size={56} />
              </div>

              <span
                className="uppercase fade-in mb-4"
                style={{ ...eyebrowStyle, animationDelay: "100ms" }}
              >
                404
              </span>

              <h1
                className="text-4xl md:text-[40px] fade-in mb-4"
                style={{
                  fontFamily: "var(--font-outfit), Outfit, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  lineHeight: 1.2,
                  color: "var(--text-primary)",
                  animationDelay: "200ms",
                }}
              >
                This page isn&apos;t here.
              </h1>

              <p
                className="text-base font-light leading-relaxed fade-in"
                style={{
                  fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                  color: "var(--text-secondary)",
                  animationDelay: "300ms",
                }}
              >
                The link may be out of date, or the address slightly off.
                Everything Vyttle publishes is below.
              </p>
            </div>

            {/* Glass panel rather than a bare list: it groups eight links into
                two labeled sets, and it makes the switch from a centered header
                to a left-aligned directory read as a deliberate second object
                instead of drift. Same treatment as the nav dropdown it echoes —
                tint and hairline, no shadow at rest. */}
            <nav
              aria-label="Site directory"
              className="fade-in mt-12 flex flex-col"
              style={{
                animationDelay: "400ms",
                background: "var(--surface-glass)",
                backdropFilter: "blur(8px)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "24px 16px",
              }}
            >
              <span className="uppercase" style={{ ...eyebrowStyle, padding: "0 8px 8px" }}>
                Products
              </span>

              {apps.map((app) => (
                <Link
                  key={app.slug}
                  href={app.externalUrl || `/${app.slug}`}
                  className="accent-row flex items-center gap-3 no-underline rounded-lg"
                  style={
                    {
                      ...rowStyle,
                      "--row-accent": app.accent,
                    } as React.CSSProperties
                  }
                  {...(app.externalUrl
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: app.accent }}
                  />
                  {app.name}
                </Link>
              ))}

              <div
                style={{ borderTop: "1px solid var(--border)", margin: "12px 8px" }}
              />

              <span className="uppercase" style={{ ...eyebrowStyle, padding: "0 8px 8px" }}>
                Vyttle
              </span>

              {siteLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="accent-row flex items-center no-underline rounded-lg"
                  style={
                    {
                      ...rowStyle,
                      "--row-accent": "var(--amber-accent)",
                    } as React.CSSProperties
                  }
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
