import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Air Temp Air Conditioning And Heating – Ontario, CA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #0e2050 0%, #1a3a8c 60%, #0a1a40 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Red accent bar top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "#cc1f1f",
          }}
        />

        {/* Red accent bar bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "#cc1f1f",
          }}
        />

        {/* Subtle glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(204,31,31,0.15), transparent 70%)",
          }}
        />

        {/* Company name */}
        <div
          style={{
            fontSize: "80px",
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-2px",
            lineHeight: 1,
            textAlign: "center",
            marginBottom: "12px",
          }}
        >
          AirTemp
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "rgba(255,255,255,0.85)",
            letterSpacing: "6px",
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: "36px",
          }}
        >
          Air Conditioning &amp; Heating
        </div>

        {/* Divider */}
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "#cc1f1f",
            borderRadius: "2px",
            marginBottom: "36px",
          }}
        />

        {/* Service pills */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          {["Sales", "Service", "Installation"].map((s) => (
            <div
              key={s}
              style={{
                border: "2px solid rgba(255,255,255,0.25)",
                borderRadius: "999px",
                padding: "10px 28px",
                fontSize: "20px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.9)",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              {s}
            </div>
          ))}
        </div>

        {/* Phone + location */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <div
            style={{
              fontSize: "32px",
              fontWeight: 800,
              color: "#ffffff",
            }}
          >
            (909) 957-3938
          </div>
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#cc1f1f",
            }}
          />
          <div
            style={{
              fontSize: "22px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Ontario, CA · Lic. #B51912
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
