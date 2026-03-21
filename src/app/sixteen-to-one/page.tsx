import type { Metadata } from "next";
import AppPageLayout from "@/components/AppPageLayout";
import SixteenToOneMark from "@/components/marks/SixteenToOneMark";
import { getAppBySlug } from "@/lib/apps";

const app = getAppBySlug("sixteen-to-one")!;

export const metadata: Metadata = {
  title: `${app.name} — Vyttle`,
  description: app.description,
};

const screenshots = [
  { src: "/screenshots/sixteen-to-one/light-drip.png", alt: "Sixteen to One in light mode showing Drip method with dark roast settings" },
  { src: "/screenshots/sixteen-to-one/settings.png", alt: "Sixteen to One settings showing unit conversions and appearance options" },
  { src: "/screenshots/sixteen-to-one/dark-chemex.png", alt: "Sixteen to One in dark mode showing Chemex method with medium roast settings" },
];

export default function SixteenToOnePage() {
  return (
    <AppPageLayout
      app={app}
      logomark={
        <SixteenToOneMark
          size={80}
          color={app.accent}
          className="transition-colors duration-400"
        />
      }
      screenshots={screenshots}
    >
      <p>
        Stop guessing your coffee ratios. Whether you&apos;re making pour-over,
        French press, or cold brew, Sixteen to One gives you the perfect
        coffee-to-water ratio in seconds.
      </p>
      <p>
        <strong style={{ color: "var(--text-primary)" }}>
          Input what you have.
        </strong>{" "}
        Got 30 grams of coffee? We&apos;ll tell you how much water. Have 500ml
        of water? We&apos;ll tell you how much coffee. Most calculators only
        work one way — ours works both ways.
      </p>
      <p>
        <strong style={{ color: "var(--text-primary)" }}>
          Real measurements.
        </strong>{" "}
        See results in grams, milliliters, ounces, and cups — all at once. No
        more mental math or unit conversions.
      </p>
      <p>
        <strong style={{ color: "var(--text-primary)" }}>
          Dial in your strength.
        </strong>{" "}
        Slide between light (1:18) and strong (1:13) to find your perfect brew.
        Presets for every method, from AeroPress to cold brew.
      </p>
    </AppPageLayout>
  );
}
