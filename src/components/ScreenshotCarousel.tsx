"use client";

import { useState, useCallback, useEffect, useRef } from "react";

interface Screenshot {
  src: string;
  alt: string;
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
                  <img
                    src={shot.src}
                    alt={shot.alt}
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

        {activeImage && (
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
            }}
          >
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
                top: "max(16px, env(safe-area-inset-top))",
                right: "max(16px, env(safe-area-inset-right))",
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
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxHeight: "90vh",
                maxWidth: "90vw",
                borderRadius: "16px",
                cursor: "default",
              }}
            />
          </div>
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
