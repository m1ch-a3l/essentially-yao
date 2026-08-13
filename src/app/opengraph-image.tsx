import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = readFileSync(join(process.cwd(), "public/images/logo.png")).toString("base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "#0d0d0c",
          color: "#f6f5f2",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#d9d6cb",
          }}
        >
          <div style={{ width: 32, height: 2, background: "#d9d6cb" }} />
          Trade &middot; Merchant Services &middot; Payments &middot; Advisory
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 28 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`data:image/png;base64,${logo}`}
            width={64}
            height={75}
            alt=""
            style={{ objectFit: "contain" }}
          />
          <div style={{ display: "flex", fontSize: 76, fontWeight: 600 }}>
            Essentially<span style={{ color: "#d9d6cb" }}>Yao</span>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 30, marginTop: 20, color: "#f6f5f2cc", maxWidth: 820 }}>
          Connecting Markets. Creating Opportunities.
        </div>
      </div>
    ),
    { ...size }
  );
}
