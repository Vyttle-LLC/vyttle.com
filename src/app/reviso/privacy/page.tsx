import type { Metadata } from "next";
import PrinterMarks from "@/components/PrinterMarks";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Reviso — Vyttle",
  description: "Reviso privacy policy.",
};

export default function RevisoPrivacyPage() {
  return (
    <main id="main" tabIndex={-1} className="page-x pt-36 focus:outline-none">
      <div className="max-w-[68ch] mx-auto prose">
        <div className="mb-10">
          <PrinterMarks>Vyttle · Privacy</PrinterMarks>
        </div>
        <h1>Reviso — Privacy Policy</h1>
        <p className="t-label" style={{ color: "var(--text-secondary)", marginBottom: "2.5rem" }}>
          Last updated: October 2026
        </p>

        <p>
          This policy covers Reviso, the open-source (Apache-2.0) code review
          plugin for Claude Code and Codex, installed from{" "}
          <a href="https://github.com/Vyttle-LLC/reviso">
            github.com/Vyttle-LLC/reviso
          </a>
          .
        </p>

        <h2>The Short Version</h2>
        <p>
          <strong>Vyttle collects nothing automatically.</strong> Reviso runs
          on your machine, inside Claude Code or Codex, on your own account.
          There is no Reviso account, no signup, and no telemetry. Your code
          never passes through Vyttle LLC infrastructure. The only thing that
          reaches us is a feedback report you choose to file.
        </p>

        <h2>How Reviso Works</h2>
        <p>
          Reviso is a set of review commands that run inside your AI coding
          host. It reads your branch&apos;s changes from your local git
          repository and reviews them through the Claude Code or Codex
          session you are already using. It reports findings and never edits
          your files.
        </p>

        <h2>What We Collect</h2>
        <p>
          Nothing automatically. Reviso has no servers of its own and sends
          no usage data, analytics, or &quot;anonymous&quot; metrics. Its only
          outbound write is a feedback report you approve, filed as a GitHub
          issue (see Feedback Reports below).
        </p>

        <h2>AI Provider Data</h2>
        <p>
          The review itself is done by your AI host, so the code it reads is
          handled the same way as anything else you do in Claude Code or
          Codex. That handling is governed by your agreement with Anthropic or
          OpenAI. We recommend reviewing their privacy policies and data
          retention settings.
        </p>

        <h2>Web Lookups (Opt-In)</h2>
        <p>
          One feature reads the public web: the best-practices lens, which
          runs only when you add <code>--web</code> to a style review. No
          repository file, environment variable, or setting can turn it on.
          When it runs:
        </p>
        <ul>
          <li>
            A search contains only ecosystem facts: the language, framework,
            library names and versions, and the names of third-party symbols
            on changed lines.
          </li>
          <li>
            A search never contains your code, diff text, your own
            identifiers, file paths, commit messages, branch names, or ticket
            IDs.
          </li>
          <li>
            Each run is capped at twelve searches. Every finding cites its
            source, and <code>--explain</code> prints every query and URL.
          </li>
          <li>Nothing fetched is stored.</li>
        </ul>
        <p>
          Searches go through your AI host&apos;s web tools, not through
          Vyttle. The full rules are in the{" "}
          <a href="https://github.com/Vyttle-LLC/reviso/blob/main/skills/reviso/references/contracts/web.md">
            web lookup contract
          </a>
          .
        </p>

        <h2>Feedback Reports</h2>
        <p>
          After a review, Reviso can offer to report a wrong finding. Nothing
          is ever sent automatically: a report exists only because you said
          yes to that report.
        </p>
        <ul>
          <li>
            <strong>Metadata report (default).</strong> A script builds it
            from a fixed list of fields: which lens or detector produced the
            finding, its severity and confidence bucket, why you judged it
            wrong (chosen from a fixed list), the command, the plugin version,
            and the model. It never includes file paths, code, finding text,
            branch names, or free text. You see the exact payload before it is
            sent.
          </li>
          <li>
            <strong>Code-context report (optional).</strong> Reviso opens a
            prefilled issue form in your browser. You add, edit, or redact
            anything and submit it yourself.
          </li>
        </ul>
        <p>
          Both are filed as public GitHub issues on the Reviso repository,
          from your own GitHub account, so your GitHub identity is attached
          just as it is for any issue you file by hand. GitHub&apos;s privacy
          statement governs that data. The full rules are in the{" "}
          <a href="https://github.com/Vyttle-LLC/reviso/blob/main/skills/reviso/references/contracts/feedback.md">
            feedback contract
          </a>
          .
        </p>
        <p>
          Feedback issues stay open until we have looked at them, then they
          are closed. We delete feedback issues a year after they are filed.
          If you want one deleted sooner, email{" "}
          <a href="mailto:privacy@vyttle.com">privacy@vyttle.com</a> with a
          link to the issue and we will delete it. Because these issues are
          public, copies made before deletion, such as search-engine caches or
          GitHub notification emails, may remain outside our control.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          Reviso is installed and updated from GitHub, so GitHub&apos;s
          privacy statement applies to those downloads. Reviso has no other
          third-party services.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          If we make changes, we will update the &quot;Last updated&quot; date
          above.
        </p>

        <h2>Contact</h2>
        <p>
          Questions? Contact us at{" "}
          <a href="mailto:privacy@vyttle.com">privacy@vyttle.com</a>
        </p>

        <div
          className="flex justify-center items-center gap-4 pt-8 mt-12"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <Link
            href="/reviso"
            className="tap-target link-quiet text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            Back to Reviso
          </Link>
          <span
            aria-hidden="true"
            className="text-xs"
            style={{ color: "var(--text-tertiary)" }}
          >
            &middot;
          </span>
          <Link
            href="/support?app=reviso"
            className="tap-target link-quiet text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            Support
          </Link>
        </div>
      </div>
    </main>
  );
}
