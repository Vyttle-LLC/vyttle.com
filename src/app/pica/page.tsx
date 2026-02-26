import type { Metadata } from "next";
import AppPageLayout from "@/components/AppPageLayout";
import PicaMark from "@/components/marks/PicaMark";
import { getAppBySlug } from "@/lib/apps";

const app = getAppBySlug("pica")!;

export const metadata: Metadata = {
  title: `${app.name} — Vyttle`,
  description: app.description,
};

export default function PicaPage() {
  return (
    <AppPageLayout
      app={app}
      logomark={
        <PicaMark
          size={80}
          color={app.accent}
          className="transition-colors duration-400"
        />
      }
    >
      <p>
        Nonograms are logic puzzles where you fill cells in a grid to reveal a
        hidden picture. No guessing, no luck — just deduction. Pica gives you a
        clean, focused space to solve them.
      </p>
      <p>
        <strong style={{ color: "var(--text-primary)" }}>
          Pure logic, no hints.
        </strong>{" "}
        Every puzzle is solvable through deduction alone. Work the rows and
        columns, mark what you know, and watch the picture emerge cell by cell.
      </p>
      <p>
        <strong style={{ color: "var(--text-primary)" }}>
          Puzzles that fit your pace.
        </strong>{" "}
        Start with small grids and work your way up. Whether you have five
        minutes or an hour, there&apos;s a puzzle that fits.
      </p>
      <p>
        <strong style={{ color: "var(--text-primary)" }}>
          Designed to feel good.
        </strong>{" "}
        Satisfying fills, clean grid lines, and no clutter. Just you and the
        puzzle.
      </p>
    </AppPageLayout>
  );
}
