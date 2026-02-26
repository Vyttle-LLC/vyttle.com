interface ScreenshotCarouselProps {
  count?: number;
}

export default function ScreenshotCarousel({
  count = 3,
}: ScreenshotCarouselProps) {
  return (
    <div className="mt-12 w-full overflow-hidden -mx-6 md:-mx-12 px-6 md:px-12">
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 no-scrollbar">
        {Array.from({ length: count }, (_, i) => (
          <div key={i} className={`snap-center shrink-0 ${i === 0 ? "ml-auto" : ""} ${i === count - 1 ? "mr-auto" : ""}`}>
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
