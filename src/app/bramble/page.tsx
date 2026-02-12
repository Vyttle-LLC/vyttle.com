import type { Metadata } from "next";
import AppPageLayout from "@/components/AppPageLayout";
import BrambleMark from "@/components/marks/BrambleMark";
import { getAppBySlug } from "@/lib/apps";

const app = getAppBySlug("bramble")!;

export const metadata: Metadata = {
  title: `${app.name} — Vyttle`,
  description: app.description,
};

export default function BramblePage() {
  return (
    <AppPageLayout
      app={app}
      logomark={
        <BrambleMark
          size={80}
          className="transition-colors duration-400"
        />
      }
    >
      <p>
        Your address book is a mess — and Apple&apos;s Contacts app won&apos;t
        help you fix it. Bramble scans your contacts, finds the problems, and
        gives you the tools to clean everything up.
      </p>
      <p>
        <strong style={{ color: "var(--text-primary)" }}>
          Find duplicates instantly.
        </strong>{" "}
        Bramble detects duplicate entries by name, phone number, and email.
        Review suggested merges one by one, or batch-process them all at once.
      </p>
      <p>
        <strong style={{ color: "var(--text-primary)" }}>
          Surface missing info.
        </strong>{" "}
        See which contacts are missing phone numbers, email addresses,
        birthdays, or photos. Fill in the gaps to make your address book
        actually useful.
      </p>
      <p>
        <strong style={{ color: "var(--text-primary)" }}>
          Everything stays on your phone.
        </strong>{" "}
        All processing happens on-device using iOS&apos;s native Contacts
        framework. Your contacts never leave your phone — no cloud uploads, no
        account required.
      </p>
    </AppPageLayout>
  );
}
