"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface ScreenshotCarouselProps {
  count?: number;
}

export default function ScreenshotCarousel({
  count = 3,
}: ScreenshotCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setActiveIndex(Math.min(index, count - 1));
  }, [count]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: el.clientWidth * index, behavior: "smooth" });
  };

  const Card = () => (
    <div
      className="w-[200px] h-[400px] md:w-[180px] md:h-[360px] rounded-3xl flex items-center justify-center"
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
  );

  return (
    <div className="mt-12 w-full">
      {/* Desktop: normal flex row */}
      <div className="hidden md:flex gap-6 justify-center">
        {Array.from({ length: count }, (_, i) => (
          <Card key={i} />
        ))}
      </div>

      {/* Mobile: swipeable carousel */}
      <div className="md:hidden">
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory overflow-x-auto"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {Array.from({ length: count }, (_, i) => (
            <div
              key={i}
              className="w-full shrink-0 snap-center flex justify-center"
            >
              <Card />
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to screenshot ${i + 1}`}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                background:
                  i === activeIndex
                    ? "var(--text-tertiary)"
                    : "var(--border)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Hide scrollbar for WebKit */}
      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
