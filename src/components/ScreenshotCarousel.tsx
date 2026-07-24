"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useState, useCallback, useEffect, useRef } from "react";

export interface Screenshot {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ScreenshotCarouselProps {
  screenshots?: Screenshot[];
  count?: number;
}

export default function ScreenshotCarousel({
  screenshots,
  count = 3,
}: ScreenshotCarouselProps) {
  const [activeImage, setActiveImage] = useState<Screenshot | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  // The lightbox portals to <body>. It has to: an ancestor here carries a
  // transform (the .fade-in reveal leaves an identity matrix behind), and a
  // transformed ancestor becomes the containing block for position:fixed — so
  // rendering in place sized the overlay to that wrapper instead of the
  // viewport, cutting the image off with body scroll locked behind it.
  // No mount guard needed: activeImage is null through SSR and hydration, and
  // only a click can set it, by which point document.body exists.

  const open = useCallback((shot: Screenshot, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setActiveImage(shot);
  }, []);

  const close = useCallback(() => {
    setActiveImage(null);
    triggerRef.current?.focus();
  }, []);

  // Move focus to the close button on open; close() returns it to the thumbnail.
  useEffect(() => {
    if (activeImage) closeButtonRef.current?.focus();
  }, [activeImage]);

  // Modal keyboard behavior: Escape closes; Tab is trapped on the sole
  // focusable element (the close button). Body scroll locks while open.
  useEffect(() => {
    if (!activeImage) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "Tab") {
        e.preventDefault();
        closeButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeImage, close]);

  if (screenshots && screenshots.length > 0) {
    return (
      <>
        <div className="mt-12 w-full">
          <div className="flex gap-4 justify-start md:justify-center overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide" style={{ WebkitOverflowScrolling: "touch" }}>
            {screenshots.map((shot) => (
              <div
                key={shot.src}
                className="snap-center shrink-0"
              >
                <button
                  onClick={(e) => open(shot, e.currentTarget)}
                  className="cursor-pointer bg-transparent border-none p-0 rounded-3xl focus-visible:[outline:2px_solid_var(--amber-accent)] focus-visible:[outline-offset:3px]"
                  aria-label={`View full size: ${shot.alt}`}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    loading="lazy"
                    className="rounded-3xl"
                    style={{
                      width: "180px",
                      height: "auto",
                      border: "1px solid var(--border)",
                    }}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {activeImage && createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.alt}
            onClick={close}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "var(--scrim)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              // Room for the close button above the image, safe-area aware.
              // overflow-y is the safety net: if a future image can't fit, it
              // scrolls rather than being clipped behind the body scroll lock.
              padding:
                "calc(64px + env(safe-area-inset-top)) max(20px, env(safe-area-inset-right)) max(20px, env(safe-area-inset-bottom)) max(20px, env(safe-area-inset-left))",
              overflowY: "auto",
              overscrollBehavior: "contain",
            }}
          >
            {/* Wrapper shrinks to the image so the close button can anchor to
                the image's own top-right corner instead of the viewport's. */}
            <div style={{ position: "relative", margin: "auto" }}>
              <button
                ref={closeButtonRef}
                onClick={(e) => {
                  e.stopPropagation();
                  close();
                }}
                aria-label="Close"
                className="flex items-center justify-center cursor-pointer focus-visible:[outline:2px_solid_var(--amber-accent)] focus-visible:[outline-offset:2px]"
                style={{
                  position: "absolute",
                  bottom: "calc(100% + 10px)",
                  right: 0,
                  width: "44px",
                  height: "44px",
                  borderRadius: "9999px",
                  background: "var(--surface-glass)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                width={activeImage.width}
                height={activeImage.height}
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: "block",
                  width: "auto",
                  height: "auto",
                  // Subtract the padding this dialog reserves, so the image
                  // always fits the viewport instead of running past it.
                  maxHeight: "calc(100vh - 84px - env(safe-area-inset-top) - env(safe-area-inset-bottom))",
                  maxWidth: "100%",
                  borderRadius: "16px",
                  cursor: "default",
                }}
              />
            </div>
          </div>,
          document.body
        )}
      </>
    );
  }

  return (
    <div className="mt-12 w-full">
      <div className="flex gap-4 justify-start md:justify-center overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide" style={{ WebkitOverflowScrolling: "touch" }}>
        {Array.from({ length: count }, (_, i) => (
          <div
            key={i}
            className="snap-center shrink-0"
          >
            <div
              className="w-[180px] h-[360px] rounded-3xl flex items-center justify-center"
              style={{
                border: "1px solid var(--border)",
                background: "var(--bg-card)",
              }}
            >
              <span
                className="text-[10px] font-light uppercase"
                style={{
                  fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                  letterSpacing: "2px",
                  color: "var(--text-tertiary)",
                  writingMode: "vertical-rl",
                }}
              >
                Screenshot
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
