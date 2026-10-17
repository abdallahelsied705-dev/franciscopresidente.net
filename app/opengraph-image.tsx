import { ImageResponse } from "next/og";

export const alt = "IPTV Portugal – mais de 50.000 canais em direto em até 4K, desde 5,38€/mês";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Code-generated social preview so the brand/colours match the site (warm
// "Lisbon terracotta" theme), not the inherited artwork.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background:
            "radial-gradient(900px 500px at 15% 0%, #b03a0e 0%, transparent 55%), radial-gradient(800px 500px at 100% 100%, #8a2f10 0%, transparent 55%), #140a11",
          color: "#f6e9e4",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 26,
            fontWeight: 700,
            color: "#ff9d72",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 16, height: 16, borderRadius: 16, background: "#16a34a" }} />
          A transmitir em direto por todo o Portugal
        </div>

        <div style={{ display: "flex", marginTop: 26, fontSize: 112, fontWeight: 800, lineHeight: 1.02 }}>
          <span style={{ color: "#ff7a45" }}>IPTV</span>
          <span style={{ color: "#ffffff", marginLeft: 24 }}>Portugal</span>
        </div>

        <div style={{ display: "flex", marginTop: 18, fontSize: 38, color: "#e6cfc5", fontWeight: 600 }}>
          +50.000 Canais em Direto · Até 4K · Sem Contrato
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 44 }}>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              fontWeight: 700,
              color: "#140a11",
              background: "linear-gradient(90deg,#ff9d72,#f25c23)",
              padding: "16px 34px",
              borderRadius: 999,
            }}
          >
            Desde 5,38€ / mês
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#fbc25a", fontWeight: 700 }}>
            Teste grátis de 24 horas
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
