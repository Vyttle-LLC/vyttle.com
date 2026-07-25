"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import VyttleMark from "./marks/VyttleMark";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import { apps } from "@/lib/apps";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const productsButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    // Escape closes and returns focus to the trigger; focus leaving the
    // dropdown (Tab past it) closes it too, so it never lingers unseen.
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        productsButtonRef.current?.focus();
      }
    };
    const handleFocusOut = (e: FocusEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.relatedTarget as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    const node = dropdownRef.current;
    node?.addEventListener("focusout", handleFocusOut);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
      node?.removeEventListener("focusout", handleFocusOut);
    };
  }, [open]);

  // The mobile menu's scroll-lock is JS, not media-query — so if the viewport
  // crosses into desktop while it's open, close it or it would silently strand
  // a scrollable page behind a now-hidden (md:hidden) overlay.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const linkStyle = {
    fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
    fontWeight: 400,
    letterSpacing: "0.5px",
    color: "var(--text-secondary)",
  };

  return (
    <>
    <nav
      aria-label="Primary"
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
          {/* Products dropdown */}
          <li ref={dropdownRef} className="relative">
            <button
              ref={productsButtonRef}
              onClick={() => setOpen(!open)}
              className="tap-target text-sm items-center gap-1 transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
              style={linkStyle}
              aria-expanded={open}
              aria-controls="products-menu"
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--amber-text)")
              }
              onMouseLeave={(e) => {
                if (!open) e.currentTarget.style.color = "var(--text-secondary)";
              }}
            >
              Products
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200"
                style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {open && (
              <div
                id="products-menu"
                className="absolute top-full mt-3 right-0 rounded-xl py-2 min-w-[200px]"
                style={{
                  background: "var(--nav-bg)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid var(--border)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                }}
              >
                {apps.map((app) => (
                  <Link
                    key={app.slug}
                    href={app.externalUrl || `/${app.slug}`}
                    className="flex items-center gap-3 px-4 py-2.5 no-underline transition-colors duration-150"
                    style={{ color: "var(--text-secondary)" }}
                    onClick={() => setOpen(false)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `color-mix(in srgb, ${app.accent} 8%, transparent)`;
                      e.currentTarget.style.color = "var(--text-primary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "var(--text-secondary)";
                    }}
                    {...(app.externalUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: app.accent }}
                    />
                    <span
                      className="text-sm"
                      style={{
                        fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      {app.name}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li>
            <Link
              href="/support"
              className="tap-target text-sm no-underline transition-colors duration-200"
              style={linkStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--amber-text)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
            >
              Support
            </Link>
          </li>
        </ul>
        <ThemeToggle />

        {/* Mobile menu toggle — replaces the horizontal links below md */}
        <button
          ref={menuButtonRef}
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex items-center justify-center cursor-pointer bg-transparent border-none"
          style={{ width: "44px", height: "44px", color: "var(--text-primary)" }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              <path d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
      </div>
    </nav>

    <MobileMenu
      open={menuOpen}
      onClose={() => setMenuOpen(false)}
      toggleRef={menuButtonRef}
    />
    </>
  );
}
