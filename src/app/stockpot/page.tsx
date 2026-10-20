import type { Metadata } from "next";
import AppPageLayout from "@/components/AppPageLayout";
import { getAppBySlug } from "@/lib/apps";

const app = getAppBySlug("stockpot")!;

export const metadata: Metadata = {
  title: `${app.name} — Vyttle`,
  description: app.description,
};

export default function StockpotPage() {
  return (
    <AppPageLayout app={app}>
      <p>
        Your recipes deserve better than a bookmarks folder. Stockpot is the
        recipe manager that works how you cook — whether you&apos;re saving
        family favorites, scanning cookbook pages, or importing from your
        favorite food blogs.
      </p>
      <p>
        <strong>Import from anywhere.</strong>{" "}
        Paste a URL and we&apos;ll extract the recipe automatically. No more
        scrolling through ad-heavy blog posts while your hands are covered in
        flour.
      </p>
      <p>
        <strong>Scan your cookbooks.</strong>{" "}
        Use your camera to digitize recipes from physical cookbooks and
        handwritten recipe cards. Your grandmother&apos;s secret recipes,
        finally backed up.
      </p>
      <p>
        <strong>Share with family.</strong>{" "}
        Create shared collections and invite family members. Everyone gets the
        same recipes, synced through iCloud — no account, no server, no
        middleman.
      </p>
    </AppPageLayout>
  );
}
