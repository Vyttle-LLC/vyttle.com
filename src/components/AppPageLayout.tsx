import { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import ComingSoonBadge from "./ComingSoonBadge";
import ScreenshotCarousel from "./ScreenshotCarousel";
import Link from "next/link";
import { VyttleApp } from "@/lib/apps";
import ConicOrb from "./ConicOrb";

interface AppPageLayoutProps {
  app: VyttleApp;
  logomark: ReactNode;
  children?: ReactNode;
  screenshots?: { src: string; alt: string }[];
}

export default function AppPageLayout({
  app,
  logomark,
  children,
  screenshots,
}: AppPageLayoutProps) {
  const accentColor = app.accentVar || app.accent;
  const badgeColor = app.badgeVar || accentColor;

  return (
    <>
      {/* Fixed aurora background */}
      <ConicOrb />

      <div className="relative z-10">
        <Nav />

        <main className="pt-32 pb-16 px-6 md:px-12">
          <div className="max-w-[1200px] mx-auto">
            {/* Hero */}
            <div
              className="flex flex-col items-center text-center gap-6 py-20 px-6 md:px-12 rounded-3xl relative overflow-hidden"
              style={{
                border: `1.5px solid ${app.accent}`,
                borderRadius: "24px",
                background: `color-mix(in srgb, ${app.accent} 6%, var(--bg-primary))`,
              }}
            >
              {/* Logomark with glow halo */}
              <div
                className="w-24 h-24 flex items-center justify-center fade-in"
                style={{
                  animationDelay: "0ms",
                  filter: `drop-shadow(0 0 20px color-mix(in srgb, ${app.accent} 25%, transparent))`,
                }}
              >
                {logomark}
              </div>

              {/* App Name */}
              {app.nameHtml ? (
                <h1
                  className="text-4xl md:text-[40px] fade-in"
                  style={{
                    fontFamily:
                      "var(--font-source-serif), 'Source Serif 4', serif",
                    fontWeight: 400,
                    letterSpacing: "1px",
                    color: accentColor,
                    animationDelay: "200ms",
                  }}
                  dangerouslySetInnerHTML={{ __html: app.nameHtml }}
                />
              ) : (
                <h1
                  className="text-4xl md:text-[36px] font-semibold uppercase fade-in"
                  style={{
                    fontFamily: "var(--font-outfit), Outfit, sans-serif",
                    letterSpacing: "6px",
                    color: accentColor,
                    animationDelay: "200ms",
                  }}
                >
                  {app.name}
                </h1>
              )}

              {/* Description */}
              <p
                className="text-base font-normal max-w-md leading-relaxed fade-in"
                style={{
                  fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                  color: "var(--text-secondary)",
                  animationDelay: "400ms",
                }}
              >
                {app.description}
              </p>

              {/* Status badge */}
              <div className="fade-in" style={{ animationDelay: "500ms" }}>
                {app.status === "available" && app.appStoreUrl ? (
                  <a
                    href={app.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium no-underline hover:opacity-85 transition-opacity duration-200"
                    style={{
                      fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                      background: accentColor,
                      color: app.darkBg,
                    }}
                  >
                    Download on the App Store
                  </a>
                ) : (
                  <ComingSoonBadge color={badgeColor} />
                )}
              </div>

              {/* Screenshot Carousel */}
              <div className="fade-in w-full" style={{ animationDelay: "600ms" }}>
                <ScreenshotCarousel screenshots={screenshots} />
              </div>

              {/* Divider */}
              <div
                className="w-full mt-8"
                style={{ borderTop: `1px solid color-mix(in srgb, ${app.accent} 15%, transparent)` }}
              />

              {/* About Section */}
              <div className="max-w-2xl mx-auto mt-8 mb-4 text-left">
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

              {/* Divider */}
              <div
                className="w-full mt-8"
                style={{ borderTop: `1px solid color-mix(in srgb, ${app.accent} 15%, transparent)` }}
              />

              {/* Page footer links */}
              <div className="flex justify-center items-center gap-6 pt-4">
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
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
