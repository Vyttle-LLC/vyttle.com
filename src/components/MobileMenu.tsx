"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { apps } from "@/lib/apps";

/**
 * Full-viewport glass overlay that replaces the horizontal nav below `md`.
 * A disclosure region — not a modal: the toggle that controls it lives in the
 * nav bar, above this overlay, so it stays reachable. The bar keeps its own
 * z-50; this sits at z-40 so the toggle (now an ✕) stays on top and clickable.
 */
export default function MobileMenu({
  open,
  onClose,
  toggleRef,
}: {
  open: boolean;
  onClose: () => void;
  toggleRef: React.RefObject<HTMLButtonElement | null>;
}) {
  // mounted keeps the node in the DOM through the exit transition;
  // entered drives the fade/slide. Split so open→close can animate out.
  const [mounted, setMounted] = useState(false);
  const [entered, setEntered] = useState(false);
  const [reduce, setReduce] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduce(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Enter / exit lifecycle. Drives the mount-then-animate sequence off `open`;
  // setState in this effect is the mechanism, not an accidental cascade.
  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    if (open) {
      setMounted(true);
      const id = requestAnimationFrame(() => setEntered(true));
      return () => cancelAnimationFrame(id);
    }
    if (mounted) {
      setEntered(false);
      const t = setTimeout(() => setMounted(false), reduce ? 0 : 200);
      return () => clearTimeout(t);
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [open, mounted, reduce]);

  // Lock body scroll while the overlay covers the page.
  useEffect(() => {
    if (!mounted) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mounted]);

  // Move focus to the first link once the panel is actually mounted; Escape
  // closes and returns focus to the toggle. Keyed on `mounted` because on the
  // render where `open` flips true the panel is still unmounted (returns null
  // below), so firstLinkRef isn't attached yet — focusing it there is a no-op,
  // and this effect wouldn't re-run on the later mount since `open` is unchanged.
  useEffect(() => {
    if (!open || !mounted) return;
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, mounted, onClose, toggleRef]);

  if (!mounted) return null;

  const rowStyle = {
    fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    color: "var(--text-primary)",
    minHeight: "48px",
  };

  return (
    <div
      id="mobile-menu"
      className="fixed inset-0 z-40 md:hidden"
      onClick={onClose}
      style={{
        background: "var(--surface-glass)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        opacity: entered ? 1 : 0,
        transition: reduce ? "none" : "opacity 200ms ease",
        paddingTop: "calc(64px + max(24px, env(safe-area-inset-top)))",
        paddingLeft: "max(24px, env(safe-area-inset-left))",
        paddingRight: "max(24px, env(safe-area-inset-right))",
        paddingBottom: "max(24px, env(safe-area-inset-bottom))",
      }}
    >
      <nav
        aria-label="Mobile"
        className="flex flex-col"
        style={{
          transform: entered || reduce ? "translateY(0)" : "translateY(8px)",
          transition: reduce ? "none" : "transform 200ms ease",
        }}
      >
        <span
          className="uppercase"
          style={{
            fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "4px",
            color: "var(--text-tertiary)",
            padding: "0 8px 8px",
          }}
        >
          Products
        </span>

        {apps.map((app, i) => (
          <Link
            key={app.slug}
            ref={i === 0 ? firstLinkRef : undefined}
            href={app.externalUrl || `/${app.slug}`}
            onClick={onClose}
            className="flex items-center gap-3 no-underline rounded-lg transition-colors duration-200"
            style={{ ...rowStyle, padding: "0 8px" }}
            {...(app.externalUrl
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `color-mix(in srgb, ${app.accent} 10%, transparent)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ background: app.accent }}
            />
            {app.name}
          </Link>
        ))}

        <div
          style={{
            borderTop: "1px solid var(--border)",
            margin: "12px 8px",
          }}
        />

        <Link
          href="/support"
          onClick={onClose}
          className="flex items-center no-underline rounded-lg transition-colors duration-200"
          style={{ ...rowStyle, padding: "0 8px" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--amber)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--text-primary)";
          }}
        >
          Support
        </Link>
      </nav>
    </div>
  );
}
