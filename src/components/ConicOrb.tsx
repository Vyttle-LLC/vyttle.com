"use client";

import { useEffect, useState } from "react";

export default function ConicOrb({ dim = false }: { dim?: boolean }) {
  const [isLight, setIsLight] = useState(false);
  // Animate the atmosphere only where it's free and wanted: desktop widths with
  // motion not reduced. Below `md` it renders static — same colors and blur,
  // minus the continuous full-screen compositing of eight blurred layers that
  // needlessly drains battery on the phones most visitors arrive on, and calmer
  // behind the policy pages they come to read. Reduced-motion always gets the
  // still field. This lives in JS, not the CSS reduced-motion block, because the
  // per-band `animation` is an inline style a stylesheet rule cannot override.
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsLight(document.documentElement.getAttribute("data-theme") === "light");
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setAnimate(desktop.matches && !reduced.matches);
    sync();
    desktop.addEventListener("change", sync);
    reduced.addEventListener("change", sync);
    return () => {
      desktop.removeEventListener("change", sync);
      reduced.removeEventListener("change", sync);
    };
  }, []);

  const bands = isLight
    ? [
        // Light mode — boosted opacity so colors are clearly visible on white
        { top: "5%", left: "-20%", w: "55%", h: "300px", bg: "radial-gradient(ellipse at center, rgba(124,77,255,0.45) 0%, rgba(74,111,224,0.25) 50%, transparent 80%)", anim: "aurora-seg-1 8s ease-in-out infinite" },
        { top: "12%", left: "15%", w: "50%", h: "260px", bg: "radial-gradient(ellipse at center, rgba(34,211,238,0.4) 0%, rgba(124,77,255,0.2) 60%, transparent 85%)", anim: "aurora-seg-2 6s ease-in-out infinite" },
        { top: "5%", left: "45%", w: "55%", h: "280px", bg: "radial-gradient(ellipse at center, rgba(74,111,224,0.4) 0%, rgba(34,211,238,0.22) 50%, transparent 80%)", anim: "aurora-seg-3 10s ease-in-out infinite" },
        { top: "45%", left: "-10%", w: "50%", h: "270px", bg: "radial-gradient(ellipse at center, rgba(124,77,255,0.4) 0%, rgba(196,149,106,0.2) 55%, transparent 80%)", anim: "aurora-seg-4 7s ease-in-out infinite" },
        { top: "50%", left: "20%", w: "55%", h: "250px", bg: "radial-gradient(ellipse at center, rgba(34,211,238,0.35) 0%, rgba(74,111,224,0.2) 60%, transparent 85%)", anim: "aurora-seg-5 9s ease-in-out infinite" },
        { top: "42%", left: "50%", w: "55%", h: "280px", bg: "radial-gradient(ellipse at center, rgba(196,149,106,0.35) 0%, rgba(124,77,255,0.2) 50%, transparent 80%)", anim: "aurora-seg-6 6s ease-in-out infinite" },
        { top: "20%", left: "5%", w: "40%", h: "220px", bg: "radial-gradient(ellipse at center, rgba(34,211,238,0.4) 0%, transparent 70%)", anim: "aurora-seg-7 5s ease-in-out infinite" },
        { top: "30%", left: "40%", w: "45%", h: "240px", bg: "radial-gradient(ellipse at center, rgba(124,77,255,0.38) 0%, rgba(34,211,238,0.2) 50%, transparent 75%)", anim: "aurora-seg-8 7s ease-in-out infinite" },
      ]
    : [
        // Dark mode — dialed back so bento cell accent colors aren't masked
        { top: "5%", left: "-20%", w: "55%", h: "300px", bg: "radial-gradient(ellipse at center, rgba(196,149,106,0.25) 0%, rgba(192,57,43,0.1) 50%, transparent 80%)", anim: "aurora-seg-1 8s ease-in-out infinite" },
        { top: "12%", left: "15%", w: "50%", h: "260px", bg: "radial-gradient(ellipse at center, rgba(192,57,43,0.2) 0%, rgba(196,149,106,0.08) 60%, transparent 85%)", anim: "aurora-seg-2 6s ease-in-out infinite" },
        { top: "5%", left: "45%", w: "55%", h: "280px", bg: "radial-gradient(ellipse at center, rgba(196,149,106,0.18) 0%, rgba(124,77,255,0.1) 50%, transparent 80%)", anim: "aurora-seg-3 10s ease-in-out infinite" },
        { top: "45%", left: "-10%", w: "50%", h: "270px", bg: "radial-gradient(ellipse at center, rgba(74,111,224,0.22) 0%, rgba(124,77,255,0.1) 55%, transparent 80%)", anim: "aurora-seg-4 7s ease-in-out infinite" },
        { top: "50%", left: "20%", w: "55%", h: "250px", bg: "radial-gradient(ellipse at center, rgba(124,77,255,0.2) 0%, rgba(74,111,224,0.08) 60%, transparent 85%)", anim: "aurora-seg-5 9s ease-in-out infinite" },
        { top: "42%", left: "50%", w: "55%", h: "280px", bg: "radial-gradient(ellipse at center, rgba(124,77,255,0.18) 0%, rgba(196,149,106,0.1) 50%, transparent 80%)", anim: "aurora-seg-6 6s ease-in-out infinite" },
        { top: "20%", left: "5%", w: "40%", h: "220px", bg: "radial-gradient(ellipse at center, rgba(34,211,238,0.2) 0%, transparent 70%)", anim: "aurora-seg-7 5s ease-in-out infinite" },
        { top: "30%", left: "40%", w: "45%", h: "240px", bg: "radial-gradient(ellipse at center, rgba(34,211,238,0.18) 0%, rgba(124,77,255,0.08) 50%, transparent 75%)", anim: "aurora-seg-8 7s ease-in-out infinite" },
      ];

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
      /* Reading pages pass dim: a negative z so static prose paints over the
         field without each page wrapping its content in a stacking context,
         and a theme-aware opacity that keeps it behind the reading. Light is
         held lower — its bands run ~2x alpha and body text sits at a tighter
         5.6:1, so the field must not dent legibility; dark has ~8.6:1 headroom. */
      style={dim ? { zIndex: -10, opacity: isLight ? 0.22 : 0.5 } : undefined}
    >
      {bands.map((b, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: b.top,
            left: b.left,
            width: b.w,
            height: b.h,
            background: b.bg,
            filter: "blur(70px)",
            borderRadius: "50%",
            animation: animate ? b.anim : undefined,
          }}
        />
      ))}
    </div>
  );
}
