import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "32px",
          height: "32px",
          background: "#0e2050",
          borderRadius: "6px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Red top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "#cc1f1f",
          }}
        />
        <div
          style={{
            fontSize: "15px",
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-0.5px",
            lineHeight: 1,
          }}
        >
          AT
        </div>
      </div>
    ),
    { ...size }
  );
}
