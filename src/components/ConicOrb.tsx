export default function ConicOrb() {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top: "50%",
        left: "50%",
        width: "500px",
        height: "500px",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="w-full h-full rounded-full animate-conic-rotate"
        style={{
          background:
            "conic-gradient(from 220deg, rgba(212,147,61,0.1), transparent 25%, rgba(34,211,238,0.07), transparent 50%, rgba(124,77,255,0.07), transparent 75%, rgba(74,111,224,0.05), transparent 95%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}
