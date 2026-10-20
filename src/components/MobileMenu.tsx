"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { STATUS_LABEL, getAppsByKind, productHref, type ProductKind } from "@/lib/apps";
import Stamp from "./Stamp";

const MENU_GROUPS: { kind: ProductKind; label: string }[] = [
  { kind: "app", label: "Apps" },
  { kind: "tool", label: "Open source" },
];

/**
 * Full-viewport overlay that replaces the horizontal nav below `md`.
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

  // Being a disclosure rather than a modal settles the ARIA, not the occlusion:
  // this overlay is opaque, so everything under it must leave the tab order and
  // the accessibility tree too. Otherwise a keyboard user tabs into links they
  // cannot see and a screen reader reads the page out from behind the overlay.
  //
  // Scoped to the content landmarks on purpose. The nav bar is NOT inerted: it
  // holds both the ✕ that closes this and the panel itself, and inerting an
  // ancestor of the only exit would trap the user.
  useEffect(() => {
    if (!mounted) return;
    const occluded = [
      ...document.querySelectorAll<HTMLElement>("main, footer"),
      ...document.querySelectorAll<HTMLElement>('body > a[href="#main"]'),
    ];
    // Record prior state so we restore rather than clobber, in case something
    // else ever inerts one of these for its own reasons.
    const wasInert = occluded.map((el) => el.hasAttribute("inert"));
    occluded.forEach((el) => el.setAttribute("inert", ""));
    return () => {
      occluded.forEach((el, i) => {
        if (!wasInert[i]) el.removeAttribute("inert");
      });
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

  return (
    <div
      id="mobile-menu"
      className="fixed inset-0 z-40 md:hidden overflow-y-auto"
      onClick={onClose}
      style={{
        background: "var(--bg-primary)",
        opacity: entered ? 1 : 0,
        transition: reduce ? "none" : "opacity 200ms ease",
        paddingTop: "calc(70px + max(16px, env(safe-area-inset-top)))",
        paddingLeft: "max(20px, env(safe-area-inset-left))",
        paddingRight: "max(20px, env(safe-area-inset-right))",
        paddingBottom: "max(24px, env(safe-area-inset-bottom))",
      }}
    >
      <nav
        aria-label="Mobile"
        className="flex flex-col gap-8"
        style={{
          transform: entered || reduce ? "translateY(0)" : "translateY(8px)",
          transition: reduce ? "none" : "transform 200ms ease",
        }}
      >
        {MENU_GROUPS.map((group, groupIndex) => (
          <div key={group.kind} className="flex flex-col">
            <span className="t-label px-2 pb-2" style={{ color: "var(--text-secondary)" }}>
              {group.label}
            </span>
            {getAppsByKind(group.kind).map((app, i) => (
              <Link
                key={app.slug}
                ref={groupIndex === 0 && i === 0 ? firstLinkRef : undefined}
                href={productHref(app)}
                onClick={onClose}
                className="accent-row flex items-center gap-4 no-underline px-2 py-2"
                style={{ "--row-accent": app.accent, color: "var(--text-primary)", minHeight: 56 } as React.CSSProperties}
                {...(app.externalUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <Stamp app={app} chip className="w-9 shrink-0" />
                <span className="t-title" style={{ fontSize: 19 }}>
                  {app.name}
                </span>
                <span className="ml-auto t-label whitespace-nowrap" style={{ color: "var(--text-secondary)" }}>
                  {STATUS_LABEL[app.status]}
                </span>
              </Link>
            ))}
          </div>
        ))}

        <div className="perf-rule mx-2" aria-hidden="true" />

        <Link
          href="/support"
          onClick={onClose}
          className="accent-row flex items-center no-underline px-2 t-title"
          style={{ "--row-accent": "var(--amber)", color: "var(--text-primary)", minHeight: 56, fontSize: 20 } as React.CSSProperties}
        >
          Support
        </Link>
      </nav>
    </div>
  );
}
