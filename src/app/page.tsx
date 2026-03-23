import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import VyttleMark from "@/components/marks/VyttleMark";
import ConicOrb from "@/components/ConicOrb";
import BentoGrid from "@/components/BentoGrid";

export default function HomePage() {
  return (
    <>
      {/* Fixed aurora background */}
      <ConicOrb />

      <div className="relative z-10">
        <Nav />

        {/* ==================== HERO ==================== */}
        <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
          {/* Content */}
          <div className="text-center flex flex-col items-center">
            {/* Floating mark */}
            <div className="animate-float mb-10 fade-in" style={{ animationDelay: "0ms" }}>
              <VyttleMark
                size={80}
                className="transition-all duration-400"
              />
            </div>

            <h1
              className="text-4xl md:text-[48px] mb-5 fade-in"
              style={{
                fontFamily: "var(--font-source-serif), 'Source Serif 4', serif",
                fontWeight: 300,
                letterSpacing: "1px",
                color: "var(--text-primary)",
                transition: "color 0.4s ease",
                animationDelay: "200ms",
              }}
            >
              Small by design
            </h1>

            <p
              className="text-base font-light max-w-[480px] leading-relaxed fade-in"
              style={{
                fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                color: "var(--text-secondary)",
                transition: "color 0.4s ease",
                animationDelay: "400ms",
              }}
            >
              Mobile applications &amp; developer tools from Vyttle
            </p>
          </div>

          {/* Scroll cue */}
          <div
            className="absolute bottom-10 left-1/2 fade-in"
            style={{ transform: "translateX(-50%)", animationDelay: "600ms" }}
          >
            <div className="flex flex-col items-center gap-2 animate-scroll-hint">
              <span
                className="text-xs font-normal uppercase"
                style={{
                  fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                  letterSpacing: "3px",
                  color: "var(--text-tertiary)",
                }}
              >
                Explore
              </span>
              <div
                className="w-px h-8"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--text-tertiary), transparent)",
                }}
              />
            </div>
          </div>
        </section>

        {/* ==================== BENTO GRID ==================== */}
        <section
          id="work"
          className="pt-16 md:pt-24 pb-28 md:pb-32 px-6 md:px-12 max-w-[1200px] mx-auto"
        >
          <BentoGrid />
        </section>

        <Footer />
      </div>
    </>
  );
}
