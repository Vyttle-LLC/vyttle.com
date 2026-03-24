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
  const accentColor = app.accentVar || app.accent;
  const badgeColor = app.badgeVar || accentColor;
  const typeLabel = app.type === "app" ? "Mobile" : "SaaS";
  const href = app.externalUrl || `/${app.slug}`;

  return (
    <Link
      href={href}
      className={`block no-underline ${className}`}
      style={{ color: "inherit" }}
      {...(app.externalUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <div
        className="relative rounded-xl p-8 flex flex-col gap-4 cursor-pointer transition-all duration-200 h-full overflow-hidden"
        style={{
          background: `color-mix(in srgb, ${app.accent} 4%, transparent)`,
          border: `1px solid color-mix(in srgb, ${app.accent} 10%, transparent)`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.02)";
          e.currentTarget.style.background = `color-mix(in srgb, ${app.accent} 12%, transparent)`;
          e.currentTarget.style.borderColor = `color-mix(in srgb, ${app.accent} 25%, transparent)`;
          e.currentTarget.style.boxShadow = `0 0 40px color-mix(in srgb, ${app.accent} 8%, transparent)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.background = `color-mix(in srgb, ${app.accent} 4%, transparent)`;
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
            color: `color-mix(in srgb, ${app.accent} 50%, transparent)`,
            border: `1px solid color-mix(in srgb, ${app.accent} 15%, transparent)`,
            padding: "3px 8px",
            borderRadius: "12px",
          }}
        >
          {typeLabel}
        </div>

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

        {/* Badge */}
        <div className="mt-auto pt-2">
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
            <ComingSoonBadge color={badgeColor} />
          )}
        </div>
      </div>
    </Link>
  );
}
