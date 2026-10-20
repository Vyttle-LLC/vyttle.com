"use client";

import { useState } from "react";

type CopyState = "idle" | "copied" | "failed";

const BUTTON_TEXT: Record<CopyState, string> = { idle: "Copy", copied: "Copied", failed: "Select to copy" };
const ANNOUNCEMENT: Record<CopyState, string> = {
  idle: "",
  copied: "Command copied to clipboard",
  failed: "Couldn't copy automatically. Select the command and copy it.",
};

/** A shell command on an ink plate, with a copy button that says what it did. */
export default function CopyCommand({ command, label }: { command: string; label: string }) {
  const [state, setState] = useState<CopyState>("idle");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setState("copied");
    } catch {
      setState("failed");
    }
    setTimeout(() => setState("idle"), 2500);
  };

  return (
    <div className="ink-plate flex items-center gap-3 rounded-md pl-4 pr-1.5 py-1.5">
      <span aria-hidden="true" className="t-mono" style={{ color: "var(--amber)" }}>
        $
      </span>
      <code className="t-mono command-fade flex-1 min-w-0 overflow-x-auto whitespace-nowrap no-scrollbar py-2 pr-6">
        {command}
      </code>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy ${label}`}
        className="btn shrink-0"
        style={{ minHeight: 40, padding: "0 14px", background: "rgb(221 224 232 / 0.08)", color: "var(--fog)", border: "none" }}
      >
        {BUTTON_TEXT[state]}
      </button>
      <span className="sr-only" aria-live="polite">
        {ANNOUNCEMENT[state]}
      </span>
    </div>
  );
}
