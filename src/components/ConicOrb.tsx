"use client";

import { useEffect, useState } from "react";

export default function ConicOrb() {
  const [isLight, setIsLight] = useState(false);

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

  // Vibrant, saturated colors for light mode; warm muted for dark
  const bands = isLight
    ? [
        // Light mode — saturated, cooler tones that pop on white
        { top: "5%", left: "-20%", w: "55%", h: "300px", bg: "radial-gradient(ellipse at center, rgba(124,77,255,0.25) 0%, rgba(74,111,224,0.12) 50%, transparent 80%)", anim: "aurora-seg-1 8s ease-in-out infinite" },
        { top: "12%", left: "15%", w: "50%", h: "260px", bg: "radial-gradient(ellipse at center, rgba(34,211,238,0.2) 0%, rgba(124,77,255,0.1) 60%, transparent 85%)", anim: "aurora-seg-2 6s ease-in-out infinite" },
        { top: "5%", left: "45%", w: "55%", h: "280px", bg: "radial-gradient(ellipse at center, rgba(74,111,224,0.2) 0%, rgba(34,211,238,0.12) 50%, transparent 80%)", anim: "aurora-seg-3 10s ease-in-out infinite" },
        { top: "45%", left: "-10%", w: "50%", h: "270px", bg: "radial-gradient(ellipse at center, rgba(124,77,255,0.2) 0%, rgba(196,149,106,0.1) 55%, transparent 80%)", anim: "aurora-seg-4 7s ease-in-out infinite" },
        { top: "50%", left: "20%", w: "55%", h: "250px", bg: "radial-gradient(ellipse at center, rgba(34,211,238,0.18) 0%, rgba(74,111,224,0.1) 60%, transparent 85%)", anim: "aurora-seg-5 9s ease-in-out infinite" },
        { top: "42%", left: "50%", w: "55%", h: "280px", bg: "radial-gradient(ellipse at center, rgba(196,149,106,0.18) 0%, rgba(124,77,255,0.1) 50%, transparent 80%)", anim: "aurora-seg-6 6s ease-in-out infinite" },
        { top: "20%", left: "5%", w: "40%", h: "220px", bg: "radial-gradient(ellipse at center, rgba(34,211,238,0.22) 0%, transparent 70%)", anim: "aurora-seg-7 5s ease-in-out infinite" },
        { top: "30%", left: "40%", w: "45%", h: "240px", bg: "radial-gradient(ellipse at center, rgba(124,77,255,0.2) 0%, rgba(34,211,238,0.1) 50%, transparent 75%)", anim: "aurora-seg-8 7s ease-in-out infinite" },
      ]
    : [
        // Dark mode — warm, rich aurora
        { top: "5%", left: "-20%", w: "55%", h: "300px", bg: "radial-gradient(ellipse at center, rgba(196,149,106,0.45) 0%, rgba(216,74,43,0.2) 50%, transparent 80%)", anim: "aurora-seg-1 8s ease-in-out infinite" },
        { top: "12%", left: "15%", w: "50%", h: "260px", bg: "radial-gradient(ellipse at center, rgba(216,74,43,0.35) 0%, rgba(196,149,106,0.15) 60%, transparent 85%)", anim: "aurora-seg-2 6s ease-in-out infinite" },
        { top: "5%", left: "45%", w: "55%", h: "280px", bg: "radial-gradient(ellipse at center, rgba(196,149,106,0.3) 0%, rgba(124,77,255,0.2) 50%, transparent 80%)", anim: "aurora-seg-3 10s ease-in-out infinite" },
        { top: "45%", left: "-10%", w: "50%", h: "270px", bg: "radial-gradient(ellipse at center, rgba(74,111,224,0.4) 0%, rgba(124,77,255,0.2) 55%, transparent 80%)", anim: "aurora-seg-4 7s ease-in-out infinite" },
        { top: "50%", left: "20%", w: "55%", h: "250px", bg: "radial-gradient(ellipse at center, rgba(124,77,255,0.35) 0%, rgba(74,111,224,0.15) 60%, transparent 85%)", anim: "aurora-seg-5 9s ease-in-out infinite" },
        { top: "42%", left: "50%", w: "55%", h: "280px", bg: "radial-gradient(ellipse at center, rgba(124,77,255,0.3) 0%, rgba(196,149,106,0.2) 50%, transparent 80%)", anim: "aurora-seg-6 6s ease-in-out infinite" },
        { top: "20%", left: "5%", w: "40%", h: "220px", bg: "radial-gradient(ellipse at center, rgba(34,211,238,0.35) 0%, transparent 70%)", anim: "aurora-seg-7 5s ease-in-out infinite" },
        { top: "30%", left: "40%", w: "45%", h: "240px", bg: "radial-gradient(ellipse at center, rgba(34,211,238,0.3) 0%, rgba(124,77,255,0.15) 50%, transparent 75%)", anim: "aurora-seg-8 7s ease-in-out infinite" },
      ];

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
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
            animation: b.anim,
          }}
        />
      ))}
    </div>
  );
}
