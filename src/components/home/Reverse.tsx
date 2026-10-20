import Link from "next/link";

const PRINCIPLES = [
  { title: "No accounts.", body: "Open the app and it works. There is nothing to sign up for and no password to forget." },
  { title: "No tracking.", body: "No analytics or advertising SDKs. What you do in an app is not the business model." },
  { title: "Your data stays yours.", body: "It lives on your device, and syncs through your own iCloud where an app offers sync." },
  { title: "Small on purpose.", body: "Each app does one job and does it properly. One person makes them all, so nothing ships unconsidered." },
];

/** The printed reverse of the sheet: what every Vyttle issue promises. */
export default function Reverse() {
  return (
    <section className="page-x section-y" aria-labelledby="reverse-heading">
      <div className="page-width paper-panel px-6 py-16 md:px-14 md:py-20">
        <h2 id="reverse-heading" className="t-headline max-w-[18ch]">
          How Vyttle makes things
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((principle) => (
            <div key={principle.title}>
              <span aria-hidden="true" className="block w-3 h-3 mb-5" style={{ background: "var(--amber)" }} />
              <h3 className="t-title" style={{ fontSize: "1.25rem" }}>
                {principle.title}
              </h3>
              <p className="mt-2" style={{ color: "var(--slate-deep)" }}>
                {principle.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-14 pt-6 max-w-[68ch]" style={{ borderTop: "1px solid rgb(12 14 26 / 0.14)", color: "var(--slate-deep)" }}>
          This website works the same way: no analytics, no ad trackers, no social pixels.{" "}
          <Link href="/privacy" className="underline underline-offset-4" style={{ color: "var(--ink)", textDecorationColor: "var(--amber)" }}>
            Read the privacy policy
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
