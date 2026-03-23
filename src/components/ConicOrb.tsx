export default function ConicOrb() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* === WARM AURORA (crema/tomato) === */}
      {/* Left segment */}
      <div
        className="absolute"
        style={{
          top: "8%",
          left: "-10%",
          width: "50%",
          height: "280px",
          background:
            "radial-gradient(ellipse at center, rgba(196,149,106,0.45) 0%, rgba(216,74,43,0.2) 50%, transparent 80%)",
          filter: "blur(70px)",
          borderRadius: "50%",
          animation: "aurora-seg-1 8s ease-in-out infinite",
        }}
      />
      {/* Center segment */}
      <div
        className="absolute"
        style={{
          top: "12%",
          left: "20%",
          width: "45%",
          height: "250px",
          background:
            "radial-gradient(ellipse at center, rgba(216,74,43,0.35) 0%, rgba(196,149,106,0.15) 60%, transparent 85%)",
          filter: "blur(65px)",
          borderRadius: "50%",
          animation: "aurora-seg-2 6s ease-in-out infinite",
        }}
      />
      {/* Right segment */}
      <div
        className="absolute"
        style={{
          top: "5%",
          left: "50%",
          width: "55%",
          height: "260px",
          background:
            "radial-gradient(ellipse at center, rgba(196,149,106,0.3) 0%, rgba(124,77,255,0.2) 50%, transparent 80%)",
          filter: "blur(75px)",
          borderRadius: "50%",
          animation: "aurora-seg-3 10s ease-in-out infinite",
        }}
      />

      {/* === COOL AURORA (bramble/cobalt) === */}
      {/* Left segment */}
      <div
        className="absolute"
        style={{
          top: "45%",
          left: "-5%",
          width: "45%",
          height: "260px",
          background:
            "radial-gradient(ellipse at center, rgba(74,111,224,0.4) 0%, rgba(124,77,255,0.2) 55%, transparent 80%)",
          filter: "blur(70px)",
          borderRadius: "50%",
          animation: "aurora-seg-4 7s ease-in-out infinite",
        }}
      />
      {/* Center segment */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "25%",
          width: "50%",
          height: "240px",
          background:
            "radial-gradient(ellipse at center, rgba(124,77,255,0.35) 0%, rgba(74,111,224,0.15) 60%, transparent 85%)",
          filter: "blur(65px)",
          borderRadius: "50%",
          animation: "aurora-seg-5 9s ease-in-out infinite",
        }}
      />
      {/* Right segment */}
      <div
        className="absolute"
        style={{
          top: "42%",
          left: "55%",
          width: "50%",
          height: "270px",
          background:
            "radial-gradient(ellipse at center, rgba(124,77,255,0.3) 0%, rgba(196,149,106,0.2) 50%, transparent 80%)",
          filter: "blur(75px)",
          borderRadius: "50%",
          animation: "aurora-seg-6 6s ease-in-out infinite",
        }}
      />

      {/* === ACCENT HIGHLIGHTS (cyan) === */}
      <div
        className="absolute"
        style={{
          top: "20%",
          left: "10%",
          width: "35%",
          height: "200px",
          background:
            "radial-gradient(ellipse at center, rgba(34,211,238,0.35) 0%, transparent 70%)",
          filter: "blur(60px)",
          borderRadius: "50%",
          animation: "aurora-seg-7 5s ease-in-out infinite",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "30%",
          left: "45%",
          width: "40%",
          height: "220px",
          background:
            "radial-gradient(ellipse at center, rgba(34,211,238,0.3) 0%, rgba(124,77,255,0.15) 50%, transparent 75%)",
          filter: "blur(65px)",
          borderRadius: "50%",
          animation: "aurora-seg-8 7s ease-in-out infinite",
        }}
      />
    </div>
  );
}
