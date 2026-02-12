import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use — Vyttle",
  description: "Vyttle terms of use.",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto prose">
          <h1>Terms of Use</h1>
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

          <h2>Acceptance of Terms</h2>
          <p>
            By accessing vyttle.com or using any Vyttle apps, you agree to be
            bound by these Terms of Use. If you do not agree to these terms,
            please do not use our website or apps.
          </p>

          <h2>Use of Services</h2>
          <p>
            You may use Vyttle apps for personal, non-commercial purposes. You
            agree not to reverse engineer, decompile, or disassemble the apps;
            use the apps for any illegal purpose; attempt to gain unauthorized
            access to our systems; or remove or modify any proprietary notices.
          </p>

          <h2>App Store Terms</h2>
          <p>
            Vyttle apps distributed through the Apple App Store are also subject
            to Apple&apos;s Licensed Application End User License Agreement.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content, features, and functionality of Vyttle apps and this
            website are owned by Vyttle LLC and protected by copyright, trademark,
            and other intellectual property laws.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p>
            Vyttle apps and this website are provided &quot;as is&quot; without
            warranties of any kind, either express or implied, including but not
            limited to warranties of merchantability, fitness for a particular
            purpose, or non-infringement.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            Vyttle LLC shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages resulting from your use of or
            inability to use our apps or website.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will
            notify users of material changes by updating the &quot;Last
            updated&quot; date above.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? Contact us at{" "}
            <a href="mailto:support@vyttle.com">support@vyttle.com</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
