import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Reviso — Vyttle",
  description: "Reviso privacy policy.",
};

export default function RevisoPrivacyPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto prose">
          <h1>Reviso — Privacy Policy</h1>
          <p
            className="text-xs font-light uppercase"
            style={{
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
              letterSpacing: "3px",
              color: "var(--text-tertiary)",
              marginBottom: "2rem",
            }}
          >
            Last updated: February 2026
          </p>

          <h2>The Short Version</h2>
          <p>
            <strong>Your code stays yours.</strong> Reviso runs on your GitHub
            runners using your own API keys. We never see, store, or process
            your source code.
          </p>

          <h2>How Reviso Works</h2>
          <p>
            Reviso is a GitHub Action that runs entirely within your GitHub
            environment. When a pull request is opened, the Action fetches the
            diff and file context on your runner, sends it to the AI provider
            you configured (using your API key), and posts the review comments
            back to GitHub. At no point does your code pass through Vyttle
            infrastructure.
          </p>

          <h2>What We Collect</h2>
          <p>
            For billing and license validation, Reviso collects the following
            minimal data:
          </p>
          <ul>
            <li>GitHub organization or user identifier</li>
            <li>Usage counts (number of PRs reviewed per billing period)</li>
            <li>License key validation requests</li>
          </ul>
          <p>We do not collect:</p>
          <ul>
            <li>Source code, diffs, or file contents</li>
            <li>Pull request titles, descriptions, or comments</li>
            <li>API keys or credentials</li>
            <li>Personal information beyond what GitHub provides for authentication</li>
          </ul>

          <h2>AI Provider Data</h2>
          <p>
            When Reviso sends your code to an AI provider for review, that
            request goes directly from your GitHub runner to the provider using
            your API key. The data handling is governed by your agreement with
            that provider (Google, Anthropic, or OpenAI). We recommend reviewing
            their respective privacy policies and data retention settings.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            Reviso uses Stripe for payment processing. Stripe collects billing
            information (email, payment method) under their own privacy policy.
            We do not store credit card numbers or payment details on our
            infrastructure.
          </p>

          <h2>Data Retention</h2>
          <p>
            Usage counts and license data are retained for the duration of your
            subscription plus 90 days. After cancellation and the retention
            period, all associated data is deleted.
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
              className="text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Back to Reviso
            </Link>
            <span style={{ color: "var(--border)" }}>&middot;</span>
            <Link
              href="/support?app=reviso"
              className="text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Support
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
