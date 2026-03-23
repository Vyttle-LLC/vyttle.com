export default function ConicOrb() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Aurora band 1 — warm (crema → tomato → bramble → cyan) */}
      <div
        className="absolute"
        style={{
          top: "15%",
          left: "-10%",
          width: "120%",
          height: "180px",
          background:
            "linear-gradient(90deg, rgba(196,149,106,0.22) 0%, rgba(216,74,43,0.14) 25%, rgba(124,77,255,0.18) 55%, rgba(34,211,238,0.1) 85%, transparent 100%)",
          filter: "blur(50px)",
          borderRadius: "50%",
          animation: "aurora-drift-1 15s ease-in-out infinite",
        }}
      />

      {/* Aurora band 2 — cool (cobalt → bramble → crema → tomato) */}
      <div
        className="absolute"
        style={{
          top: "45%",
          left: "-5%",
          width: "110%",
          height: "150px",
          background:
            "linear-gradient(90deg, rgba(74,111,224,0.18) 0%, rgba(124,77,255,0.14) 30%, rgba(196,149,106,0.16) 60%, rgba(216,74,43,0.08) 90%, transparent 100%)",
          filter: "blur(45px)",
          borderRadius: "50%",
          animation: "aurora-drift-2 18s ease-in-out infinite",
        }}
      />

      {/* Aurora band 3 — accent highlight */}
      <div
        className="absolute"
        style={{
          top: "30%",
          left: "20%",
          width: "60%",
          height: "120px",
          background:
            "linear-gradient(90deg, rgba(34,211,238,0.12) 0%, rgba(124,77,255,0.15) 50%, rgba(196,149,106,0.1) 100%)",
          filter: "blur(55px)",
          borderRadius: "50%",
          animation: "aurora-drift-3 12s ease-in-out infinite",
        }}
      />
    </div>
  );
}
