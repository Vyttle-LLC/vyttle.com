"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Client-only mount guard: render a placeholder until mounted, then read the
    // persisted theme once. setState-on-mount is the SSR-hydration idiom here —
    // a single extra render, not the cascading loop this rule targets.
    /* eslint-disable react-hooks/set-state-in-effect */
    setMounted(true);
    const saved = localStorage.getItem("vyttle-theme") as
      | "light"
      | "dark"
      | null;
    if (saved) setTheme(saved);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("vyttle-theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  if (!mounted) return <div className="w-11 h-11" />;

  return (
    // 44x44 hit area around a 36px visual circle: the mark stays the size the
    // design calls for while the target meets the 44px touch minimum.
    <button
      onClick={toggle}
      className="w-11 h-11 rounded-full flex items-center justify-center bg-transparent border-none p-0 cursor-pointer"
      style={{ color: "var(--text-secondary)" }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <span
        className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200"
        style={{ borderColor: "var(--border)" }}
      >
      {theme === "dark" ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
      </span>
    </button>
  );
}
