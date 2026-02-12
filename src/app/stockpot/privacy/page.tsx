import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Stockpot — Vyttle",
  description: "Stockpot app privacy policy.",
};

export default function StockpotPrivacyPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto prose">
          <h1>Stockpot — Privacy Policy</h1>
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
            <strong>We don&apos;t collect any of your data.</strong> Your recipes
            are stored in your personal iCloud account. We never see them, and
            we have no way to access them.
          </p>

          <h2>Data Storage</h2>
          <p>
            Stockpot uses Apple&apos;s iCloud service to store and sync your
            recipes. This data is stored in your personal iCloud account,
            encrypted in transit and at rest by Apple, and never accessible to
            Vyttle LLC. We do not operate any servers that store your recipes or
            personal information.
          </p>

          <h2>Data Collection</h2>
          <p>Stockpot does not collect:</p>
          <ul>
            <li>Personal information</li>
            <li>Usage analytics</li>
            <li>Crash reports (unless you opt in via Apple&apos;s system dialog)</li>
            <li>Advertising identifiers</li>
            <li>Location data</li>
          </ul>

          <h2>Recipe Import</h2>
          <p>
            When you import a recipe from a URL, the app fetches that webpage
            directly from your device. We do not route this traffic through our
            servers, log which URLs you visit, or store the imported data on our
            servers.
          </p>

          <h2>Sharing</h2>
          <p>
            If you share a recipe collection with others, that sharing is handled
            by Apple&apos;s CloudKit Sharing. The shared data remains in iCloud
            and is not processed or stored by us.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            Stockpot does not integrate with any third-party analytics,
            advertising, or tracking services.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Stockpot does not knowingly collect information from children under
            13. The app does not collect personal information from any user
            regardless of age.
          </p>

          <h2>Data Retention</h2>
          <p>
            Since we do not collect or store your data, there is no retention
            period. Your recipes remain in your iCloud account until you delete
            them.
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
              href="/stockpot"
              className="text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Back to Stockpot
            </Link>
            <span style={{ color: "var(--border)" }}>&middot;</span>
            <Link
              href="/support?app=stockpot"
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
