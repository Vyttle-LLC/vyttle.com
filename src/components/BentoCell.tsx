"use client";

import Link from "next/link";
import { VyttleApp } from "@/lib/apps";
import { ReactNode } from "react";
import ComingSoonBadge from "./ComingSoonBadge";

export default function BentoCell({
  app,
  logomark,
  className = "",
}: {
  app: VyttleApp;
  logomark: ReactNode;
  className?: string;
}) {
  // Fill vs word: the "Available Now" chip is a solid accent background carrying
  // dark text, so it wants the vivid accent; the Coming Soon label *is* accent
  // text and wants the darkened-on-light one.
  const accentColor = app.accentVar || app.accent;
  const accentText = app.accentTextVar || accentColor;
  const typeLabel = app.type === "app" ? "Mobile" : "SaaS";
  const href = app.externalUrl || `/${app.slug}`;
  const featured = app.featured;

  return (
    <Link
      href={href}
      className={`block no-underline ${className}`}
      style={{ color: "inherit" }}
      {...(app.externalUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <div
        className={`relative rounded-xl p-8 cursor-pointer transition-all duration-200 h-full overflow-hidden ${
          featured
            ? "flex flex-col md:flex-row md:items-center gap-6 md:gap-10"
            : "flex flex-col gap-4"
        }`}
        style={{
          background: `color-mix(in srgb, ${app.accent} 4%, var(--surface-glass))`,
          border: `1px solid color-mix(in srgb, ${app.accent} 10%, transparent)`,
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.02)";
          e.currentTarget.style.background = `color-mix(in srgb, ${app.accent} 12%, var(--surface-glass))`;
          e.currentTarget.style.borderColor = `color-mix(in srgb, ${app.accent} 25%, transparent)`;
          e.currentTarget.style.boxShadow = `0 0 40px color-mix(in srgb, ${app.accent} 8%, transparent)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.background = `color-mix(in srgb, ${app.accent} 4%, var(--surface-glass))`;
          e.currentTarget.style.borderColor = `color-mix(in srgb, ${app.accent} 10%, transparent)`;
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* Type badge */}
        <div
          className="absolute top-6 right-6 text-xs uppercase"
          style={{
            fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
            fontSize: "10px",
            letterSpacing: "1.5px",
            // Neutral, not accent: at 50% alpha this measured 1.3-3.4:1.
            // The chip is a category label, not product identity — the
            // mark, tint, border and badge already carry the accent.
            color: "var(--text-tertiary)",
            border: `1px solid color-mix(in srgb, ${app.accent} 25%, transparent)`,
            padding: "3px 8px",
            borderRadius: "12px",
          }}
        >
          {typeLabel}
        </div>

        {/* Identity block — its own left column when featured, otherwise it
            flows directly in the cell's flex-col via `contents`. */}
        <div className={featured ? "flex flex-col gap-4 md:basis-2/5 md:shrink-0" : "contents"}>
          {/* Logomark */}
          <div className="w-12 h-12 flex items-center justify-center">
            {logomark}
          </div>

          {/* Name */}
          {app.nameHtml ? (
            <div
              className="text-lg"
              style={{
                fontFamily: "var(--font-source-serif), 'Source Serif 4', serif",
                fontWeight: 400,
                letterSpacing: "0.5px",
                color: "var(--text-primary)",
                transition: "color 0.4s ease",
              }}
              dangerouslySetInnerHTML={{ __html: app.nameHtml }}
            />
          ) : (
            <div
              className="text-base font-medium"
              style={{
                fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                color: "var(--text-primary)",
                transition: "color 0.4s ease",
              }}
            >
              {app.name}
            </div>
          )}

          {/* Tagline */}
          <p
            className="text-sm leading-relaxed"
            style={{
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
              color: "var(--text-secondary)",
              transition: "color 0.4s ease",
            }}
          >
            {app.tagline}
          </p>

          {/* Badge — pinned to the cell bottom in the narrow stack so the row
              of cells aligns; in the featured row it follows the tagline. */}
          <div className={`${featured ? "" : "mt-auto"} pt-2`}>
            {app.status === "available" ? (
              <div
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-normal uppercase"
                style={{
                  fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                  letterSpacing: "2px",
                  background: accentColor,
                  color: app.darkBg,
                }}
              >
                Available Now
              </div>
            ) : (
              <ComingSoonBadge color={accentText} />
            )}
          </div>
        </div>

        {/* Featured product earns its fuller description in the freed second
            column; the wide featured cell was otherwise ~half empty on desktop.
            Hidden on the mobile stack, where there is no dead space to fill. */}
        {featured && (
          <p
            className="hidden md:block md:flex-1 md:pl-10 md:border-l text-sm leading-relaxed"
            style={{
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
              color: "var(--text-secondary)",
              borderColor: "var(--border)",
              transition: "color 0.4s ease",
            }}
          >
            {app.description}
          </p>
        )}
      </div>
    </Link>
  );
}
