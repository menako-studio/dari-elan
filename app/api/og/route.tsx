import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Extract custom parameters or set defaults
    const title = searchParams.get("title") || "SELECTED WORKS (2012–2026)";
    const category = searchParams.get("category") || "EXHIBITION ARCHIVE";
    const specs = searchParams.get("specs") || "LEICA M10-R • FUJIFILM GFX 100 II";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            backgroundColor: "#F9F9F8",
            padding: "80px 100px",
            fontFamily: "sans-serif",
            color: "#111111",
            border: "1px solid #E5E5E0",
          }}
        >
          {/* Header Brand */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              borderBottom: "1px solid #D4D4D0",
              paddingBottom: "30px",
            }}
          >
            <span
              style={{
                fontSize: 32,
                fontWeight: 600,
                letterSpacing: "0.25em",
                color: "#111111",
              }}
            >
              DARI ELAN
            </span>
            <span
              style={{
                fontSize: 16,
                letterSpacing: "0.2em",
                color: "#737373",
                textTransform: "uppercase",
              }}
            >
              {category}
            </span>
          </div>

          {/* Body Title */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          >
            <span
              style={{
                fontSize: 58,
                fontWeight: 300,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                color: "#111111",
                maxWidth: "900px",
              }}
            >
              {title}
            </span>
            <span
              style={{
                fontSize: 18,
                letterSpacing: "0.15em",
                color: "#A3A3A3",
                marginTop: "24px",
                textTransform: "uppercase",
              }}
            >
              ELAN BUDIKUSUMAH — BALI, INDONESIA
            </span>
          </div>

          {/* Footer EXIF & Spec bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              borderTop: "1px solid #D4D4D0",
              paddingTop: "30px",
              fontSize: 14,
              letterSpacing: "0.2em",
              color: "#737373",
              textTransform: "uppercase",
            }}
          >
            <span>{specs}</span>
            <span>DARIELAN.COM</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    const errorMsg = e instanceof Error ? e.message : "Unknown error";
    return new Response(`Failed to generate OG image: ${errorMsg}`, {
      status: 500,
    });
  }
}
