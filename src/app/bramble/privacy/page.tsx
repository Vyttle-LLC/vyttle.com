import type { Metadata } from "next";
import PrinterMarks from "@/components/PrinterMarks";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Bramble — Vyttle",
  description: "Bramble app privacy policy.",
};

export default function BramblePrivacyPage() {
  return (
    <main id="main" tabIndex={-1} className="page-x pt-36 focus:outline-none">
      <div className="max-w-[68ch] mx-auto prose">
        <div className="mb-10">
          <PrinterMarks>Vyttle · Privacy</PrinterMarks>
        </div>
        <h1>Bramble — Privacy Policy</h1>
        <p className="t-label" style={{ color: "var(--text-secondary)", marginBottom: "2.5rem" }}>
          Last updated: February 2026
        </p>

        <h2>The Short Version</h2>
        <p>
          <strong>Your contacts never leave your phone.</strong> All analysis
          and processing happens on your device. We never see your contacts,
          and we have no way to access them.
        </p>

        <h2>Data Storage</h2>
        <p>
          Bramble accesses your contacts using iOS&apos;s native Contacts
          framework. The app reads your contacts locally, performs duplicate
          detection on-device, stores analysis results locally, and never
          uploads contact data to any server.
        </p>

        <h2>Data Collection</h2>
        <p>Bramble does not collect:</p>
        <ul>
          <li>Contact information (names, phone numbers, emails, addresses)</li>
          <li>Personal information</li>
          <li>Usage analytics</li>
          <li>Crash reports (unless you opt in via Apple&apos;s system dialog)</li>
          <li>Advertising identifiers</li>
          <li>Location data</li>
        </ul>

        <h2>On-Device Processing</h2>
        <p>
          All duplicate detection, matching algorithms, and contact analysis
          happen entirely on your device. No contact data is sent to external
          servers for analysis.
        </p>

        <h2>Contacts Access</h2>
        <p>Bramble requests access to your contacts solely to:</p>
        <ul>
          <li>Scan for duplicate entries</li>
          <li>Identify contacts with missing information</li>
          <li>Suggest merge actions</li>
        </ul>
        <p>
          This access is granted through iOS&apos;s system permission dialog.
          You can revoke this permission at any time in Settings &rarr; Privacy
          &rarr; Contacts.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          Bramble does not integrate with any third-party analytics,
          advertising, or tracking services.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          Bramble does not knowingly collect information from children under
          13. The app does not collect personal information from any user
          regardless of age.
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
            href="/bramble"
            className="tap-target link-quiet text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            Back to Bramble
          </Link>
          <span
            aria-hidden="true"
            className="text-xs"
            style={{ color: "var(--text-tertiary)" }}
          >
            &middot;
          </span>
          <Link
            href="/support?app=bramble"
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
