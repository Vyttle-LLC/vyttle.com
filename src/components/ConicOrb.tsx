export default function ConicOrb() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Aurora band 1 — warm (crema → tomato → bramble → cyan) */}
      <div
        className="absolute"
        style={{
          top: "10%",
          left: "-15%",
          width: "130%",
          height: "220px",
          background:
            "linear-gradient(90deg, rgba(196,149,106,0.22) 0%, rgba(216,74,43,0.14) 25%, rgba(124,77,255,0.18) 55%, rgba(34,211,238,0.1) 85%, transparent 100%)",
          filter: "blur(60px)",
          borderRadius: "50%",
          animation: "aurora-drift-1 25s ease-in-out infinite",
        }}
      />

      {/* Aurora band 2 — cool (cobalt → bramble → crema → tomato) */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "-10%",
          width: "120%",
          height: "200px",
          background:
            "linear-gradient(90deg, rgba(74,111,224,0.18) 0%, rgba(124,77,255,0.14) 30%, rgba(196,149,106,0.16) 60%, rgba(216,74,43,0.08) 90%, transparent 100%)",
          filter: "blur(55px)",
          borderRadius: "50%",
          animation: "aurora-drift-2 30s ease-in-out infinite",
        }}
      />

      {/* Aurora band 3 — accent highlight (fades in and out completely) */}
      <div
        className="absolute"
        style={{
          top: "25%",
          left: "10%",
          width: "80%",
          height: "160px",
          background:
            "linear-gradient(90deg, rgba(34,211,238,0.15) 0%, rgba(124,77,255,0.18) 50%, rgba(196,149,106,0.12) 100%)",
          filter: "blur(60px)",
          borderRadius: "50%",
          animation: "aurora-drift-3 20s ease-in-out infinite",
        }}
      />
    </div>
  );
}
