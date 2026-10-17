import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Warm "Lisbon terracotta" home-screen icon.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(120px 120px at 30% 20%, #b03a0e, #140a11)",
        }}
      >
        <div
          style={{
            width: 104,
            height: 88,
            borderRadius: 16,
            border: "7px solid #f25c23",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: "16px solid transparent",
              borderBottom: "16px solid transparent",
              borderLeft: "26px solid #ff9d72",
              marginLeft: 6,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
