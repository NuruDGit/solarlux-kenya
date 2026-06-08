export default function AdminLogo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "3px",
        padding: "2px 0",
      }}
    >
      <span
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "20px",
          fontWeight: 700,
          color: "#FDB813",
          letterSpacing: "-0.01em",
          lineHeight: 1,
        }}
      >
        Solarlux
      </span>
      <span
        style={{
          fontFamily: "system-ui, sans-serif",
          fontSize: "9px",
          fontWeight: 500,
          color: "rgba(255,255,255,0.4)",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          lineHeight: 1,
        }}
      >
        Kenya CMS
      </span>
    </div>
  );
}
