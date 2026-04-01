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

              {/* Status badge / store links */}
              <div className="fade-in flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: "500ms" }}>
                {app.status === "available" && (app.appStoreUrl || app.playStoreUrl) ? (
                  <>
                    {app.appStoreUrl && (
                      <a
                        href={app.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block hover:opacity-85 transition-opacity duration-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40" width="150" height="50" role="img" aria-label="Download on the App Store">
                          <title>Download on the App Store</title>
                          <g>
                            <path d="M110.135 0H9.535c-.367 0-.73 0-1.095.002-.306.003-.61.01-.921.02A13.215 13.215 0 0 0 5.517.19a6.665 6.665 0 0 0-1.9.627 6.438 6.438 0 0 0-1.62 1.18 6.258 6.258 0 0 0-1.178 1.614c-.28.6-.468 1.24-.557 1.9a13.4 13.4 0 0 0-.175 2.002c-.012.31-.015.62-.02.93V31.56c.005.31.008.613.02.922a13.4 13.4 0 0 0 .175 2.002 6.27 6.27 0 0 0 .557 1.9 6.188 6.188 0 0 0 1.178 1.614 6.195 6.195 0 0 0 1.62 1.18 6.58 6.58 0 0 0 1.9.63 13.455 13.455 0 0 0 2.002.168c.311.012.615.018.921.02.366.002.728.002 1.095.002h100.6c.36 0 .727 0 1.088-.002.305-.002.617-.008.922-.02a13.13 13.13 0 0 0 2-.17 6.726 6.726 0 0 0 1.908-.63 6.309 6.309 0 0 0 2.8-2.792 6.658 6.658 0 0 0 .557-1.9 13.787 13.787 0 0 0 .176-2.002c.01-.31.01-.613.01-.922.008-.36.008-.725.008-1.094V9.536c0-.366 0-.73-.008-1.092 0-.31 0-.62-.01-.93a13.787 13.787 0 0 0-.176-2.002 6.645 6.645 0 0 0-.557-1.9 6.31 6.31 0 0 0-2.8-2.794 6.81 6.81 0 0 0-1.908-.627 13.044 13.044 0 0 0-2-.17c-.305-.01-.617-.017-.922-.02C110.863 0 110.497 0 110.135 0z" fill="#a6a6a6"/>
                            <path d="M8.445 39.125c-.305 0-.602-.006-.904-.018a12.687 12.687 0 0 1-1.87-.164 5.884 5.884 0 0 1-1.656-.548 5.406 5.406 0 0 1-1.397-1.016 5.32 5.32 0 0 1-1.02-1.397 5.722 5.722 0 0 1-.544-1.657 12.41 12.41 0 0 1-.166-1.875c-.008-.21-.018-.913-.018-.913V8.445s.01-.692.018-.895a12.37 12.37 0 0 1 .165-1.872 5.755 5.755 0 0 1 .544-1.662 5.373 5.373 0 0 1 1.015-1.398 5.565 5.565 0 0 1 1.402-1.023 5.823 5.823 0 0 1 1.653-.544A12.58 12.58 0 0 1 7.543.887l.902-.017h103.11l.913.018a12.385 12.385 0 0 1 1.858.162 5.938 5.938 0 0 1 1.67.548 5.594 5.594 0 0 1 2.415 2.42 5.763 5.763 0 0 1 .535 1.649 12.995 12.995 0 0 1 .174 1.887c.003.283.003.588.003.89.008.375.008.732.008 1.092v20.93c0 .363 0 .718-.008 1.075 0 .325 0 .623-.004.93a12.731 12.731 0 0 1-.17 1.853 5.739 5.739 0 0 1-.54 1.67 5.48 5.48 0 0 1-1.016 1.386 5.413 5.413 0 0 1-1.4 1.022 5.862 5.862 0 0 1-1.668.55 12.542 12.542 0 0 1-1.869.163c-.293.012-.598.018-.893.018l-1.088.002z" fill="#000"/>
                          </g>
                          <g fill="#fff">
                            <path d="M24.769 20.3a4.949 4.949 0 0 1 2.356-4.151 5.066 5.066 0 0 0-3.99-2.158c-1.68-.176-3.308 1.005-4.164 1.005-.872 0-2.19-.988-3.608-.958a5.315 5.315 0 0 0-4.473 2.728c-1.934 3.348-.491 8.269 1.361 10.976.927 1.325 2.01 2.805 3.428 2.753 1.387-.058 1.905-.885 3.58-.885 1.658 0 2.144.885 3.59.852 1.489-.025 2.426-1.332 3.32-2.67a10.962 10.962 0 0 0 1.52-3.092 4.782 4.782 0 0 1-2.92-4.4zM22.037 12.21a4.872 4.872 0 0 0 1.115-3.49 4.957 4.957 0 0 0-3.208 1.66 4.636 4.636 0 0 0-1.144 3.36 4.1 4.1 0 0 0 3.237-1.53z"/>
                            <path d="M42.302 27.14H37.57l-1.137 3.356h-2.005l4.484-12.418h2.083l4.484 12.418h-2.039zm-4.243-1.55h3.752l-1.85-5.446h-.05zM55.16 25.97c0 2.813-1.506 4.62-3.779 4.62a3.07 3.07 0 0 1-2.848-1.583h-.043v4.484H46.63V21.442h1.8v1.506h.033a3.212 3.212 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.622zm-1.91 0c0-1.833-.948-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.393-1.197 2.393-3.046zM65.125 25.97c0 2.813-1.506 4.62-3.779 4.62a3.07 3.07 0 0 1-2.848-1.583h-.043v4.484H56.6V21.442h1.8v1.506h.034a3.212 3.212 0 0 1 2.882-1.6c2.298 0 3.81 1.816 3.81 4.622zm-1.91 0c0-1.833-.948-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.392-1.197 2.392-3.046zM71.71 27.036c.138 1.232 1.334 2.04 2.97 2.04 1.566 0 2.693-.808 2.693-1.919 0-.964-.68-1.54-2.29-1.936l-1.609-.39c-2.28-.55-3.339-1.617-3.339-3.348 0-2.142 1.867-3.614 4.519-3.614 2.624 0 4.423 1.472 4.483 3.614h-1.876c-.112-1.239-1.136-1.987-2.634-1.987s-2.521.757-2.521 1.858c0 .878.654 1.395 2.255 1.79l1.368.336c2.548.603 3.606 1.626 3.606 3.443 0 2.323-1.85 3.778-4.793 3.778-2.754 0-4.614-1.42-4.734-3.667h1.902zM83.346 19.3v2.142h1.722v1.472h-1.722v4.991c0 .776.345 1.137 1.102 1.137a5.808 5.808 0 0 0 .611-.043v1.463a5.104 5.104 0 0 1-1.032.086c-1.833 0-2.548-.689-2.548-2.444v-5.19h-1.316v-1.472h1.316V19.3zM86.065 25.97c0-2.849 1.678-4.639 4.294-4.639 2.625 0 4.295 1.79 4.295 4.639 0 2.856-1.661 4.638-4.295 4.638-2.633 0-4.294-1.782-4.294-4.638zm6.695 0c0-1.954-.895-3.108-2.401-3.108s-2.4 1.162-2.4 3.108c0 1.962.894 3.106 2.4 3.106s2.401-1.144 2.401-3.106zM96.186 21.442h1.773v1.541h.043a2.16 2.16 0 0 1 2.178-1.635 2.866 2.866 0 0 1 .637.069v1.738a2.598 2.598 0 0 0-.835-.112 1.873 1.873 0 0 0-1.937 2.083v5.37h-1.86zM109.384 27.837c-.25 1.643-1.85 2.771-3.898 2.771-2.634 0-4.269-1.764-4.269-4.595 0-2.84 1.644-4.682 4.19-4.682 2.505 0 4.08 1.72 4.08 4.466v.637h-6.394v.112a2.358 2.358 0 0 0 2.436 2.564 2.048 2.048 0 0 0 2.09-1.273zm-6.282-2.702h4.526a2.177 2.177 0 0 0-2.22-2.298 2.292 2.292 0 0 0-2.306 2.298z"/>
                          </g>
                          <g fill="#fff">
                            <path d="M37.826 8.731a2.64 2.64 0 0 1 2.808 2.965c0 1.906-1.03 3.002-2.808 3.002h-2.155V8.731zm-1.228 5.123h1.125a1.876 1.876 0 0 0 1.967-2.146 1.881 1.881 0 0 0-1.967-2.134h-1.125zM41.68 12.444a2.133 2.133 0 1 1 4.248 0 2.134 2.134 0 1 1-4.248 0zm3.334 0c0-.976-.439-1.546-1.208-1.546-.773 0-1.207.57-1.207 1.546 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zM51.573 14.698h-.922l-.93-3.317h-.07l-.927 3.317h-.913l-1.242-4.503h.902l.806 3.436h.067l.926-3.436h.852l.926 3.436h.07l.803-3.436h.889zM53.854 10.195h.855v.715h.066a1.348 1.348 0 0 1 1.344-.802 1.465 1.465 0 0 1 1.559 1.675v3h-.89v-2.79c0-.724-.314-1.084-.972-1.084a1.033 1.033 0 0 0-1.075 1.141v2.733h-.889zM59.094 8.437h.888v6.26h-.888zM61.218 12.444a2.133 2.133 0 1 1 4.247 0 2.134 2.134 0 1 1-4.247 0zm3.333 0c0-.976-.438-1.546-1.208-1.546-.773 0-1.207.57-1.207 1.546 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zM66.4 13.424c0-.81.604-1.278 1.676-1.344l1.22-.07v-.389c0-.476-.315-.744-.922-.744-.497 0-.84.182-.94.498h-.86c.09-.773.818-1.27 1.84-1.27 1.128 0 1.765.563 1.765 1.514v3.078h-.856v-.633h-.07a1.515 1.515 0 0 1-1.353.707 1.36 1.36 0 0 1-1.5-1.347zm2.895-.384v-.377l-1.1.07c-.62.042-.9.253-.9.65 0 .405.351.641.834.641a1.062 1.062 0 0 0 1.166-.984zM71.348 12.444c0-1.423.732-2.324 1.87-2.324a1.484 1.484 0 0 1 1.38.79h.067V8.437h.888v6.26h-.851v-.71h-.07a1.563 1.563 0 0 1-1.415.785c-1.145 0-1.869-.901-1.869-2.328zm.918 0c0 .955.45 1.53 1.203 1.53.75 0 1.212-.583 1.212-1.526 0-.938-.468-1.53-1.212-1.53-.748 0-1.203.58-1.203 1.526zM79.23 12.444a2.133 2.133 0 1 1 4.247 0 2.134 2.134 0 1 1-4.248 0zm3.333 0c0-.976-.438-1.546-1.208-1.546-.773 0-1.207.57-1.207 1.546 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zM84.67 10.195h.855v.715h.066a1.348 1.348 0 0 1 1.344-.802 1.465 1.465 0 0 1 1.559 1.675v3h-.89v-2.79c0-.724-.314-1.084-.972-1.084a1.033 1.033 0 0 0-1.075 1.141v2.733h-.889zM93.515 9.074v1.141h.976v.749h-.976v2.315c0 .472.194.679.637.679a2.967 2.967 0 0 0 .339-.021v.74a2.916 2.916 0 0 1-.484.046c-.988 0-1.381-.348-1.381-1.216v-2.543h-.715v-.749h.715V9.074zM95.705 8.437h.88v2.481h.07a1.386 1.386 0 0 1 1.374-.806 1.483 1.483 0 0 1 1.55 1.679v2.907h-.889V12.01c0-.72-.335-1.084-.963-1.084a1.052 1.052 0 0 0-1.134 1.142v2.63h-.888zM104.761 13.482a1.828 1.828 0 0 1-1.95 1.303 2.045 2.045 0 0 1-2.081-2.325 2.077 2.077 0 0 1 2.076-2.352c1.253 0 2.009.856 2.009 2.27v.31h-3.18v.05a1.19 1.19 0 0 0 1.2 1.29 1.08 1.08 0 0 0 1.07-.546zm-3.126-1.451h2.275a1.086 1.086 0 0 0-1.109-1.167 1.152 1.152 0 0 0-1.166 1.167z"/>
                          </g>
                        </svg>
                      </a>
                    )}
                    {app.playStoreUrl && (
                      <a
                        href={app.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center overflow-hidden hover:opacity-85 transition-opacity duration-200"
                        style={{ height: 50 }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/badges/google-play.png"
                          alt="Get it on Google Play"
                          style={{ height: 74, margin: '0 -10px' }}
                        />
                      </a>
                    )}
                  </>
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
