import type { Metadata } from "next";
import AppPageLayout from "@/components/AppPageLayout";
import { getAppBySlug } from "@/lib/apps";

const app = getAppBySlug("sixteen-to-one")!;

export const metadata: Metadata = {
  title: `${app.name} — Vyttle`,
  description: app.description,
};

export default function SixteenToOnePage() {
  return (
    <AppPageLayout app={app}>
      <p>
        Stop guessing your coffee ratios. Whether you&apos;re making pour-over,
        French press, or cold brew, Sixteen to One gives you the perfect
        coffee-to-water ratio in seconds.
      </p>
      <p>
        <strong>Input what you have.</strong>{" "}
        Got 30 grams of coffee? We&apos;ll tell you how much water. Have 500ml
        of water? We&apos;ll tell you how much coffee. Most calculators only
        work one way — ours works both ways.
      </p>
      <p>
        <strong>Real measurements.</strong>{" "}
        See results in grams, milliliters, ounces, and cups — all at once. No
        more mental math or unit conversions.
      </p>
      <p>
        <strong>Dial in your strength.</strong>{" "}
        Slide between light (18:1) and strong (13:1) to find your perfect brew.
        Presets for every method, from AeroPress to cold brew.
      </p>
    </AppPageLayout>
  );
}
