import { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import ComingSoonBadge from "./ComingSoonBadge";
import ScreenshotCarousel from "./ScreenshotCarousel";
import Link from "next/link";
import { VyttleApp } from "@/lib/apps";

interface AppPageLayoutProps {
  app: VyttleApp;
  logomark: ReactNode;
  children?: ReactNode;
}

export default function AppPageLayout({
  app,
  logomark,
  children,
}: AppPageLayoutProps) {
  const accentColor = app.accentVar || app.accent;
  const badgeColor = app.badgeVar || accentColor;

  return (
    <>
      <Nav />

      <main className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          {/* Hero */}
          <div
            className="flex flex-col items-center text-center gap-6 py-20 px-6 md:px-12 rounded-3xl relative overflow-hidden"
            style={{
              border: "1px solid var(--card-border)",
              borderRadius: "24px",
            }}
          >
            {/* Logomark */}
            <div className="w-24 h-24 flex items-center justify-center">
              {logomark}
            </div>

            {/* App Name */}
            {app.nameHtml ? (
              <h1
                className="text-4xl md:text-[40px]"
                style={{
                  fontFamily:
                    "var(--font-source-serif), 'Source Serif 4', serif",
                  fontWeight: 400,
                  letterSpacing: "1px",
                  color: accentColor,
                }}
                dangerouslySetInnerHTML={{ __html: app.nameHtml }}
              />
            ) : (
              <h1
                className="text-4xl md:text-[36px] font-semibold uppercase"
                style={{
                  fontFamily: "var(--font-outfit), Outfit, sans-serif",
                  letterSpacing: "6px",
                  color: accentColor,
                }}
              >
                {app.name}
              </h1>
            )}

            {/* Description */}
            <p
              className="text-base font-normal max-w-md leading-relaxed"
              style={{
                fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                color: "var(--text-secondary)",
              }}
            >
              {app.description}
            </p>

            {/* Coming Soon */}
            <ComingSoonBadge color={badgeColor} />

            {/* Screenshot Carousel */}
            <ScreenshotCarousel />
          </div>

          {/* About Section */}
          <div className="max-w-2xl mx-auto mt-20 mb-16">
            <h2
              className="text-2xl font-medium mb-8 text-center"
              style={{
                fontFamily: "var(--font-outfit), Outfit, sans-serif",
                letterSpacing: "1px",
                color: "var(--text-primary)",
              }}
            >
              About {app.name}
            </h2>
            <div
              className="space-y-4 text-base leading-relaxed"
              style={{
                fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                color: "var(--text-secondary)",
              }}
            >
              {children}
            </div>
          </div>

          {/* Page footer links */}
          <div
            className="flex justify-center items-center gap-6 pt-8"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <Link
              href={`/${app.slug}/privacy`}
              className="text-sm font-light no-underline transition-colors duration-200"
              style={{
                fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                color: "var(--text-secondary)",
              }}
            >
              Privacy Policy
            </Link>
            <span style={{ color: "var(--border)" }}>&middot;</span>
            <Link
              href="/"
              className="text-sm font-light no-underline transition-colors duration-200"
              style={{
                fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                color: "var(--text-secondary)",
              }}
            >
              Back to Vyttle
            </Link>
            <span style={{ color: "var(--border)" }}>&middot;</span>
            <Link
              href={`/support?app=${app.slug}`}
              className="text-sm font-light no-underline transition-colors duration-200"
              style={{
                fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                color: "var(--text-secondary)",
              }}
            >
              Support
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
