import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SupportForm from "@/components/SupportForm";

export const metadata: Metadata = {
  title: "Support — Vyttle",
  description: "Get help with Vyttle apps.",
};

export default function SupportPage() {
  return (
    <>
      <Nav />

      <main id="main" tabIndex={-1} className="pt-32 pb-16 px-6 md:px-12 focus:outline-none">
        <div className="max-w-[1200px] mx-auto">
          {/* Section label */}
          <div
            className="text-center mb-14"
            style={{
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
              fontWeight: 300,
              fontSize: "11px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "var(--text-tertiary)",
            }}
          >
            Support
          </div>

          <h1
            className="text-4xl md:text-5xl font-semibold text-center mb-4"
            style={{
              fontFamily: "var(--font-outfit), Outfit, sans-serif",
              letterSpacing: "2px",
              color: "var(--text-primary)",
            }}
          >
            How can we help?
          </h1>

          <p
            className="text-base font-light text-center mb-16 max-w-md mx-auto"
            style={{
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
              color: "var(--text-secondary)",
            }}
          >
            Have a question or found a bug? We&apos;d love to hear from you.
          </p>

          <SupportForm />
        </div>
      </main>

      <Footer />
    </>
  );
}
