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
          top: "5%",
          left: "-20%",
          width: "140%",
          height: "300px",
          background:
            "linear-gradient(90deg, rgba(196,149,106,0.45) 0%, rgba(216,74,43,0.3) 25%, rgba(124,77,255,0.35) 55%, rgba(34,211,238,0.2) 85%, transparent 100%)",
          filter: "blur(80px)",
          borderRadius: "50%",
          animation: "aurora-drift-1 25s ease-in-out infinite",
        }}
      />

      {/* Aurora band 2 — cool (cobalt → bramble → crema → tomato) */}
      <div
        className="absolute"
        style={{
          top: "45%",
          left: "-15%",
          width: "130%",
          height: "280px",
          background:
            "linear-gradient(90deg, rgba(74,111,224,0.35) 0%, rgba(124,77,255,0.3) 30%, rgba(196,149,106,0.3) 60%, rgba(216,74,43,0.15) 90%, transparent 100%)",
          filter: "blur(75px)",
          borderRadius: "50%",
          animation: "aurora-drift-2 30s ease-in-out infinite",
        }}
      />

      {/* Aurora band 3 — accent highlight (fades in and out completely) */}
      <div
        className="absolute"
        style={{
          top: "20%",
          left: "5%",
          width: "90%",
          height: "250px",
          background:
            "linear-gradient(90deg, rgba(34,211,238,0.3) 0%, rgba(124,77,255,0.35) 50%, rgba(196,149,106,0.25) 100%)",
          filter: "blur(80px)",
          borderRadius: "50%",
          animation: "aurora-drift-3 20s ease-in-out infinite",
        }}
      />
    </div>
  );
}
