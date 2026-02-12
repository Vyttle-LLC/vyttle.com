import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AppCard from "@/components/AppCard";
import VyttleMark from "@/components/marks/VyttleMark";
import SixteenToOneMark from "@/components/marks/SixteenToOneMark";
import StockpotMark from "@/components/marks/StockpotMark";
import BrambleMark from "@/components/marks/BrambleMark";
import RevisoMark from "@/components/marks/RevisoMark";
import { apps, getAppsByType } from "@/lib/apps";

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* ==================== HERO ==================== */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent)",
          }}
        />

        {/* Ambient glow */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full animate-glow-pulse pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(212, 147, 61, 0.06) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -55%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center flex flex-col items-center gap-0">
          {/* Floating diamond */}
          <div className="animate-float mb-10">
            <VyttleMark
              size={80}
              className="transition-all duration-400"
            />
          </div>

          <h1
            className="text-4xl md:text-[56px] font-semibold mb-5"
            style={{
              fontFamily: "var(--font-outfit), Outfit, sans-serif",
              letterSpacing: "2px",
              color: "var(--text-primary)",
              transition: "color 0.4s ease",
            }}
          >
            Small by{" "}
            <em className="not-italic" style={{ color: "var(--amber-accent)" }}>
              design
            </em>
            .
          </h1>

          <p
            className="text-lg font-light max-w-[480px] leading-relaxed"
            style={{
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
              color: "var(--text-secondary)",
              transition: "color 0.4s ease",
            }}
          >
            We build intentionally compact apps — focused tools that do one
            thing well, and nothing more.
          </p>
        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-10 left-1/2 flex flex-col items-center gap-2 animate-scroll-hint"
          style={{ transform: "translateX(-50%)" }}
        >
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
      </section>

      {/* ==================== OUR APPS ==================== */}
      <section className="pt-28 md:pt-32 pb-16 md:pb-20 px-6 md:px-12 max-w-[1200px] mx-auto">
        <div
          className="text-center mb-14"
          style={{
            fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
            fontWeight: 400,
            fontSize: "12px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "var(--text-tertiary)",
            transition: "color 0.4s ease",
          }}
        >
          Our Apps
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AppCard
            name={apps[0].name}
            nameHtml={apps[0].nameHtml}
            tagline={apps[0].tagline}
            href={`/${apps[0].slug}`}
            logomark={
              <SixteenToOneMark
                size={64}
                color={apps[0].accent}
                className="transition-colors duration-400"
              />
            }
            accentColor={apps[0].accent}
            badgeColor={apps[0].badgeVar}
            isSerif
          />
          <AppCard
            name={apps[1].name}
            tagline={apps[1].tagline}
            href={`/${apps[1].slug}`}
            logomark={
              <StockpotMark
                size={60}
                color={apps[1].accent}
                className="transition-colors duration-400"
              />
            }
            accentColor={apps[1].accent}
            badgeColor={apps[1].badgeVar}
          />
          <AppCard
            name={apps[2].name}
            tagline={apps[2].tagline}
            href={`/${apps[2].slug}`}
            logomark={
              <BrambleMark
                size={60}
                className="transition-colors duration-400"
              />
            }
            accentColor={apps[2].accent}
            badgeColor={apps[2].badgeVar}
          />
        </div>
      </section>

      {/* ==================== OUR PRODUCTS ==================== */}
      <section className="pb-28 md:pb-32 px-6 md:px-12 max-w-[1200px] mx-auto">
        <div
          className="text-center mb-14"
          style={{
            fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
            fontWeight: 400,
            fontSize: "12px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "var(--text-tertiary)",
            transition: "color 0.4s ease",
          }}
        >
          Our Products
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-[380px]">
            <AppCard
              name={apps[3].name}
              tagline={apps[3].tagline}
              href={`/${apps[3].slug}`}
              logomark={
                <RevisoMark
                  size={60}
                  className="transition-colors duration-400"
                />
              }
              accentColor={apps[3].accent}
              badgeColor={apps[3].badgeVar}
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
