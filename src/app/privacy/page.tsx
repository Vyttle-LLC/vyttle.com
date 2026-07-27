import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ConicOrb from "@/components/ConicOrb";
import Footer from "@/components/Footer";
import Link from "next/link";
import { appsWithPrivacyPolicy } from "@/lib/apps";

export const metadata: Metadata = {
  title: "Privacy Policy — Vyttle",
  description: "Vyttle website privacy policy.",
};

export default function PrivacyPage() {
  return (
    <>
      <ConicOrb dim />
      <Nav />
      <main id="main" tabIndex={-1} className="pt-32 pb-16 px-6 md:px-12 focus:outline-none">
        <div className="max-w-3xl mx-auto prose">
          <h1>Privacy Policy</h1>
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
            <strong>This website doesn&apos;t collect any personal data.</strong>{" "}
            No cookies, no analytics, no tracking. The only data we collect is
            what you choose to send us through our support form.
          </p>

          <h2>Website Data Collection</h2>
          <p>This website (vyttle.com) does not use:</p>
          <ul>
            <li>Analytics services</li>
            <li>Advertising trackers</li>
            <li>Social media pixels</li>
            <li>Cookies</li>
            <li>Session tracking</li>
            <li>Fingerprinting techniques</li>
          </ul>

          <h2>Support Form</h2>
          <p>
            When you submit a message through our support form, we collect your
            name, email address, which app you&apos;re asking about, and your
            message. This information is stored securely, used only to respond to
            your inquiry, never shared with third parties, and deleted after your
            issue is resolved.
          </p>

          <h2>App &amp; Product Privacy</h2>
          <p>
            These products publish their own privacy policy describing how they
            handle your data:
          </p>
          {/* Derived from apps.ts, not hand-listed — a hand-listed copy is how
              a product ends up linked from its own page but missing here. */}
          <ul>
            {appsWithPrivacyPolicy().map((app) => (
              <li key={app.slug}>
                <Link href={`/${app.slug}/privacy`}>
                  {app.name} Privacy Policy
                </Link>
              </li>
            ))}
          </ul>
          <p>
            Products still in development don&apos;t have their own policy yet,
            because there is nothing yet to describe. Until one ships, this
            policy is the one that applies.
          </p>

          <h2>Hosting</h2>
          <p>
            This website is hosted on Netlify. Netlify may collect basic server
            logs (IP addresses, timestamps) for security and performance
            purposes.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We do not integrate with any third-party analytics, advertising, or
            tracking services.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our website does not knowingly collect information from children
            under 13. If you believe a child has submitted information through
            our support form, please contact us.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            If we make changes to this privacy policy, we will update the
            &quot;Last updated&quot; date above.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this privacy policy? Contact us at{" "}
            <a href="mailto:privacy@vyttle.com">privacy@vyttle.com</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
