import type { Metadata } from "next";
import AppPageLayout from "@/components/AppPageLayout";
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
      actions={
        <a href={app.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
          Get Reviso on GitHub <span aria-hidden="true">↗</span>
        </a>
      }
    >
      <p>
        A good code review usually waits for a pull request. Reviso runs the
        review locally, on your branch plus any uncommitted work, so you can fix
        what it finds before anyone else sees it.
      </p>
      <p>
        <strong>It reviews for slop, too.</strong> Dead code, comments that
        restate the code, reinvented utilities, the same rule pasted across five
        call sites, three times the lines the job needed. Every finding is
        measured against how your own codebase is written.
      </p>
      <p>
        <strong>Three commands.</strong> <code>/reviso:review</code> is the
        quick single-pass review you run as often as you commit.{" "}
        <code>/reviso:audit</code> is the slower pre-PR gate, with parallel
        reviewers and evidence gathered for every finding.{" "}
        <code>/reviso:style</code> looks only at whether the change is clean.
      </p>
      <p>
        <strong>Nothing new to sign up for.</strong> Reviso runs in Claude Code
        or Codex on the account you already use. There is no Reviso account and
        no telemetry, and it only reports — it never edits your code.
      </p>
    </AppPageLayout>
  );
}
