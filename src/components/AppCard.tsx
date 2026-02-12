"use client";

import Link from "next/link";
import { ReactNode } from "react";
import ComingSoonBadge from "./ComingSoonBadge";

interface AppCardProps {
  name: string;
  nameHtml?: string;
  tagline: string;
  href: string;
  logomark: ReactNode;
  accentColor: string;
  badgeColor?: string;
  isSerif?: boolean;
}

export default function AppCard({
  name,
  nameHtml,
  tagline,
  href,
  logomark,
  accentColor,
  badgeColor,
  isSerif = false,
}: AppCardProps) {
  return (
    <Link href={href} className="block no-underline" style={{ color: "inherit" }}>
      <div
        className="relative rounded-[20px] p-12 pb-10 flex flex-col items-center text-center gap-5 cursor-pointer transition-all duration-300 overflow-hidden"
        style={{
          border: "1px solid var(--card-border)",
          background: "var(--bg-card)",
          backdropFilter: "blur(10px)",
          // Accent line at top (hidden by default)
          boxShadow: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.borderColor = accentColor;
          e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.15), 0 0 40px ${accentColor}12`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.borderColor = "var(--card-border)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* Accent line at top */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] opacity-0 transition-opacity duration-300"
          style={{ background: accentColor }}
        />

        {/* Logomark */}
        <div className="w-[72px] h-[72px] flex items-center justify-center mb-1">
          {logomark}
        </div>

        {/* App Name */}
        {isSerif && nameHtml ? (
          <div
            className="text-[22px]"
            style={{
              fontFamily:
                "var(--font-source-serif), 'Source Serif 4', serif",
              fontWeight: 400,
              letterSpacing: "0.5px",
              color: "var(--text-primary)",
              transition: "color 0.4s ease",
            }}
            dangerouslySetInnerHTML={{ __html: nameHtml }}
          />
        ) : (
          <div
            className="text-xl font-semibold uppercase"
            style={{
              fontFamily: "var(--font-outfit), Outfit, sans-serif",
              letterSpacing: "3px",
              color: "var(--text-primary)",
              transition: "color 0.4s ease",
            }}
          >
            {name}
          </div>
        )}

        {/* Tagline */}
        <div
          className="text-sm font-normal leading-relaxed"
          style={{
            fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
            color: "var(--text-secondary)",
            transition: "color 0.4s ease",
          }}
        >
          {tagline}
        </div>

        {/* Badge */}
        <div className="mt-1">
          <ComingSoonBadge color={badgeColor || accentColor} />
        </div>
      </div>
    </Link>
  );
}
