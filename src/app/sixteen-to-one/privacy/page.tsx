import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ConicOrb from "@/components/ConicOrb";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Sixteen to One — Vyttle",
  description: "Sixteen to One app privacy policy.",
};

export default function SixteenToOnePrivacyPage() {
  return (
    <>
      <ConicOrb dim />
      <Nav />
      <main id="main" tabIndex={-1} className="pt-32 pb-16 px-6 md:px-12 focus:outline-none">
        <div className="max-w-3xl mx-auto prose">
          <h1>Sixteen to One — Privacy Policy</h1>
          <p
            className="text-xs font-light uppercase"
            style={{
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
              letterSpacing: "3px",
              color: "var(--text-tertiary)",
              marginBottom: "2rem",
            }}
          >
            Last updated: March 2026
          </p>

          <h2>The Short Version</h2>
          <p>
            <strong>We don&apos;t collect any of your data.</strong> Sixteen to
            One stores your preferences locally on your device. We never see
            them, and we have no way to access them.
          </p>

          <h2>Data Storage</h2>
          <p>
            Sixteen to One stores your ratio preferences and settings locally on
            your device using iOS&apos;s UserDefaults. This data never leaves
            your device, is not synced to iCloud, is not accessible to us, and
            is automatically deleted if you uninstall the app.
          </p>

          <h2>Data Collection</h2>
          <p>Sixteen to One does not collect:</p>
          <ul>
            <li>Personal information</li>
            <li>Usage analytics</li>
            <li>Crash reports (unless you opt in via Apple&apos;s system dialog)</li>
            <li>Advertising identifiers</li>
            <li>Location data</li>
            <li>Any other personal or device data</li>
          </ul>

          <h2>Calculations</h2>
          <p>
            All coffee-to-water ratio calculations happen locally on your device.
            We do not send calculation data to servers, log what ratios you use,
            or track your brewing habits.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            Sixteen to One does not integrate with any third-party analytics,
            advertising, or tracking services.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Sixteen to One does not knowingly collect information from children
            under 13. The app does not collect personal information from any user
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
              href="/sixteen-to-one"
              className="tap-target link-quiet text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Back to Sixteen to One
            </Link>
            <span
              aria-hidden="true"
              className="text-xs"
              style={{ color: "var(--text-tertiary)" }}
            >
              &middot;
            </span>
            <Link
              href="/support?app=sixteen-to-one"
              className="tap-target link-quiet text-sm"
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
