"use client";

import Link from "next/link";
import VyttleMark from "./marks/VyttleMark";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 transition-all duration-400"
      style={{
        background: "var(--nav-bg)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Left: Logo + Wordmark */}
      <Link href="/" className="flex items-center gap-3 no-underline">
        <VyttleMark size={20} className="transition-colors duration-400" />
        <span
          className="text-base font-semibold uppercase no-underline transition-colors duration-400"
          style={{
            fontFamily: "var(--font-outfit), Outfit, sans-serif",
            letterSpacing: "6px",
            color: "var(--text-primary)",
          }}
        >
          VYTTLE
        </span>
      </Link>

      {/* Right: Nav Links + Theme Toggle */}
      <div className="flex items-center gap-8">
        <ul className="hidden md:flex items-center gap-6 list-none">
          {[
            { href: "/sixteen-to-one", label: "Sixteen to One" },
            { href: "/stockpot", label: "Stockpot" },
            { href: "/bramble", label: "Bramble" },
            { href: "/pica", label: "Pica" },
            { href: "/reviso", label: "Reviso" },
            { href: "/support", label: "Support" },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm no-underline transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                  fontWeight: 400,
                  letterSpacing: "0.5px",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--amber)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}
