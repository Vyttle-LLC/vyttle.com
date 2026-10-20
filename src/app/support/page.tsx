import type { Metadata } from "next";
import SupportForm from "@/components/SupportForm";

export const metadata: Metadata = {
  title: "Support — Vyttle",
  description: "Get help with a Vyttle app or tool.",
};

export default function SupportPage() {
  return (
    <main id="main" tabIndex={-1} className="page-x pt-28 md:pt-36 focus:outline-none">
      <div className="page-width grid grid-cols-1 gap-14 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-20">
        <div>
          <h1 className="t-headline" style={{ fontSize: "clamp(2.5rem, 6vw, 4.25rem)" }}>
            How can we help?
          </h1>
          <p className="t-lede mt-6 max-w-[34ch]">
            Have a question or found a bug? Send a note and you&apos;ll hear back from the person who built the app.
          </p>
          <p className="t-body mt-8">
            For Wiffletree and Reviso, you can also{" "}
            <a href="https://github.com/Vyttle-LLC" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" style={{ color: "var(--text-primary)", textDecorationColor: "var(--amber-accent)" }}>
              open an issue on GitHub
            </a>
            .
          </p>
        </div>
        <SupportForm />
      </div>
    </main>
  );
}
