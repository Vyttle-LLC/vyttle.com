import type { Metadata } from "next";
import AppPageLayout from "@/components/AppPageLayout";
import RevisoMark from "@/components/marks/RevisoMark";
import { getAppBySlug } from "@/lib/apps";

const app = getAppBySlug("reviso")!;

export const metadata: Metadata = {
  title: `${app.name} — Vyttle`,
  description: app.description,
};

export default function RevisoPage() {
  return (
    <AppPageLayout
      app={app}
      logomark={
        <RevisoMark
          size={80}
          className="transition-colors duration-400"
        />
      }
    >
      <p>
        Code reviews shouldn&apos;t be noisy, expensive, or ignored. Reviso is a
        GitHub Action that delivers intelligent, inline AI-powered reviews
        directly on your pull requests — comments on the exact lines that matter,
        with actionable suggestions.
      </p>
      <p>
        <strong style={{ color: "var(--text-primary)" }}>
          Bring your own key.
        </strong>{" "}
        Reviso uses your AI provider API key, running entirely on your GitHub
        runners. You choose the model, you control the cost. No middleman, no
        surprise bills.
      </p>
      <p>
        <strong style={{ color: "var(--text-primary)" }}>
          Pay per org, not per seat.
        </strong>{" "}
        A 10-person team and a 50-person team pay the same price. Usage-based
        pricing that scales with your work, not your headcount.
      </p>
      <p>
        <strong style={{ color: "var(--text-primary)" }}>
          Quality over noise.
        </strong>{" "}
        Reviso feeds full file context — not just diffs — to reduce false
        positives. Configurable focus areas, severity scoring, and confidence
        thresholds mean you only see comments worth reading.
      </p>
    </AppPageLayout>
  );
}
