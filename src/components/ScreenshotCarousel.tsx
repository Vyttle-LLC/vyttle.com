"use client";

import { useState, useCallback, useEffect } from "react";

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

  const close = useCallback(() => setActiveImage(null), []);

  useEffect(() => {
    if (!activeImage) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
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
                  onClick={() => setActiveImage(shot)}
                  className="cursor-pointer bg-transparent border-none p-0"
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
