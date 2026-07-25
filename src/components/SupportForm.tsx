"use client";

import { useState, useEffect, useRef } from "react";
import { apps } from "@/lib/apps";

export default function SupportForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    app: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  // Not a boolean: the two ways this can fail need to name different problems
  // and offer different recoveries. Emailing instead is the answer to "we
  // couldn't send it"; it is not the answer to "you left a field blank."
  const [error, setError] = useState<{
    message: string;
    offerEmail: boolean;
  } | null>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const appParam = params.get("app");
    if (appParam) {
      setFormData((prev) => ({ ...prev, app: appParam }));
    }
  }, []);

  // On success the form is replaced by the confirmation; move focus to its
  // heading so screen-reader and keyboard users learn the message went
  // through, not only sighted ones.
  useEffect(() => {
    if (submitted) successHeadingRef.current?.focus();
  }, [submitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // `required` accepts a field of spaces, which sends a ticket with nothing
    // in it and no way to follow up beyond the address.
    const trimmed = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      app: formData.app,
      message: formData.message.trim(),
    };

    const firstBlank = (["name", "email", "message"] as const).find(
      (field) => !trimmed[field],
    );

    if (firstBlank) {
      setError({
        message: "Name, email, and message can't be blank.",
        offerEmail: false,
      });
      // Announcing the problem isn't enough when the alert sits below the
      // fields — put the cursor on the one that needs fixing.
      document.getElementById(firstBlank)?.focus();
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "support",
          ...trimmed,
        }).toString(),
      });

      // Netlify answers an unregistered form with a 404 or 405 rather than a
      // rejected promise. Without this, a message that was never delivered
      // still renders the confirmation — the user waits for a reply that is
      // not coming, and nothing surfaces the failure on either end.
      if (!res.ok) {
        throw new Error(`Form endpoint responded ${res.status}`);
      }

      setSubmitted(true);
    } catch {
      setError({
        message: "We couldn't send your message. Please try again.",
        offerEmail: true,
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    // Echo the two things the sender can't otherwise verify: which product the
    // message was filed against, and the address the reply goes to — a typo
    // there is the one failure neither side can see. No reply window: the
    // studio is one person and an invented SLA would be a promise, not a fact.
    const product =
      formData.app === "general"
        ? null
        : apps.find((a) => a.slug === formData.app)?.name ?? null;

    return (
      <div className="max-w-lg mx-auto text-center py-16">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: "rgba(212, 147, 61, 0.15)" }}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="var(--amber)"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2
          ref={successHeadingRef}
          tabIndex={-1}
          className="text-2xl font-medium mb-4 focus:outline-none"
          style={{
            fontFamily: "var(--font-outfit), Outfit, sans-serif",
            color: "var(--text-primary)",
          }}
        >
          Thanks for reaching out!
        </h2>
        <p
          className="text-base font-light mb-8"
          style={{
            fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
            color: "var(--text-secondary)",
          }}
        >
          We&apos;ve got your message{product ? ` about ${product}` : ""} and
          will reply to{" "}
          <span
            style={{
              color: "var(--text-primary)",
              overflowWrap: "anywhere",
            }}
          >
            {formData.email.trim()}
          </span>{" "}
          as soon as we can.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", app: "", message: "" });
          }}
          className="text-sm cursor-pointer bg-transparent border-none"
          style={{
            fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
            color: "var(--amber-text)",
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  // One treatment for both inline support-email links. --amber-text keeps the
  // accent identity while clearing 4.5:1 as text in both themes.
  const mailtoStyle = {
    color: "var(--amber-text)",
    textDecoration: "underline",
    textUnderlineOffset: "2px",
  };

  const inputStyle = {
    fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
    fontWeight: 300,
    // 16px minimum: iOS Safari zooms the viewport on focus below this.
    fontSize: "16px",
    padding: "12px 16px",
    borderRadius: "10px",
    border: "1px solid var(--border)",
    background: "var(--bg-card)",
    color: "var(--text-primary)",
    width: "100%",
    transition: "all 0.2s ease",
  };

  return (
    <form
      name="support"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      aria-busy={submitting}
      className="max-w-lg mx-auto flex flex-col gap-5"
    >
      <input type="hidden" name="form-name" value="support" />
      <div hidden>
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </div>

      <p
        className="text-xs"
        style={{
          fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
          fontWeight: 300,
          color: "var(--text-tertiary)",
        }}
      >
        All fields are required.
      </p>

      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="name"
          className="text-xs"
          style={{
            fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
            fontWeight: 400,
            letterSpacing: "1px",
            color: "var(--text-secondary)",
          }}
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="field-input"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
          style={inputStyle}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="email"
          className="text-xs"
          style={{
            fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
            fontWeight: 400,
            letterSpacing: "1px",
            color: "var(--text-secondary)",
          }}
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="field-input"
          placeholder="you@example.com"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          style={inputStyle}
        />
      </div>

      {/* App */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="app"
          className="text-xs"
          style={{
            fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
            fontWeight: 400,
            letterSpacing: "1px",
            color: "var(--text-secondary)",
          }}
        >
          Product
        </label>
        <select
          className="field-input"
          id="app"
          name="app"
          required
          value={formData.app}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, app: e.target.value }))
          }
          style={inputStyle}
        >
          <option value="">Select a product…</option>
          {apps.map((a) => (
            <option key={a.slug} value={a.slug}>
              {a.name}
            </option>
          ))}
          <option value="general">General / Other</option>
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-xs"
          style={{
            fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
            fontWeight: 400,
            letterSpacing: "1px",
            color: "var(--text-secondary)",
          }}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="field-input"
          placeholder="Tell us what's going on…"
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
          style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
        />
      </div>

      {error && (
        <div
          role="alert"
          className="text-sm"
          style={{
            fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
            fontWeight: 300,
            lineHeight: 1.5,
            color: "var(--text-primary)",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "10px",
            padding: "12px 16px",
          }}
        >
          {error.message}
          {error.offerEmail && (
            <>
              {" "}
              Or email{" "}
              <a href="mailto:support@vyttle.com" style={mailtoStyle}>
                support@vyttle.com
              </a>
              .
            </>
          )}
        </div>
      )}

      {/* Submit, with the reassurance that belongs at the moment someone
          actually hands over their name and email — a compression of what
          /privacy already commits to, plus the plain-email alternative for
          people who would rather not use a form at all. */}
      <div className="flex flex-col items-start gap-3">
        <button
          type="submit"
          disabled={submitting}
          className="text-sm font-medium py-3.5 px-8 rounded-[10px] border-none cursor-pointer transition-all duration-200"
          style={{
            fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
            letterSpacing: "1px",
            background: "var(--amber)",
            color: "var(--midnight)",
            opacity: submitting ? 0.5 : 1,
          }}
        >
          {submitting ? "Sending…" : "Send message"}
        </button>

        <p
          className="text-xs"
          style={{
            fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
            fontWeight: 300,
            lineHeight: 1.6,
            color: "var(--text-tertiary)",
          }}
        >
          Used only to reply, never shared, and deleted once your issue is
          resolved. Prefer plain email?{" "}
          <a href="mailto:support@vyttle.com" style={mailtoStyle}>
            support@vyttle.com
          </a>
        </p>
      </div>
    </form>
  );
}
