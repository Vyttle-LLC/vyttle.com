"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import VyttleMark from "./marks/VyttleMark";
import VyttleWordmark from "./marks/VyttleWordmark";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

export const NAV_LINKS = [
  { href: "/#apps", label: "Apps" },
  { href: "/#open-source", label: "Open source" },
  { href: "/support", label: "Support" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // The mobile menu's scroll-lock is JS, not media-query — so if the viewport
  // crosses into desktop while it's open, close it or it would strand a
  // scroll-locked page behind a now-hidden (md:hidden) overlay.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <>
      <nav
        aria-label="Primary"
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: "var(--nav-bg)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div className="nav-gutter h-16 flex items-center justify-between">
          <Link href="/" className="tap-target gap-3 no-underline" style={{ color: "var(--text-primary)" }}>
            <VyttleMark size={18} />
            <VyttleWordmark height={13} />
          </Link>

          <div className="flex items-center gap-2 md:gap-6">
            <ul className="hidden md:flex items-center gap-7 list-none">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-quiet tap-target text-[15px]"
                    style={{ fontVariationSettings: '"wdth" 108', fontWeight: 560 }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeToggle />
            <button
              ref={menuButtonRef}
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden tap-target cursor-pointer bg-transparent border-none"
              style={{ color: "var(--text-primary)" }}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" aria-hidden="true">
                {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
              </svg>
            </button>
          </div>
        </div>
        <div className="perf-rule" aria-hidden="true" />
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} toggleRef={menuButtonRef} />
    </>
  );
}
