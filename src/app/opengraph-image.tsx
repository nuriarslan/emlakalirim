import { ImageResponse } from "next/og";

export const alt = "Emlak Alırım";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f3efe5", color: "#13231d", padding: 68 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, fontWeight: 800 }}><span>Emlak Alırım</span><span style={{ color: "#24634c" }}>Arsa • Ev • Bina</span></div>
      <div><div style={{ fontSize: 72, lineHeight: 1.02, letterSpacing: -3, fontWeight: 800, maxWidth: 940 }}>Arsanız, eviniz veya binanız için doğrudan yatırım değerlendirmesi.</div><div style={{ marginTop: 26, fontSize: 28, color: "#55645d" }}>Beykoz ana odağımız • İstanbul’un seçili gelişim bölgeleri</div></div>
      <div style={{ display: "flex", gap: 18, fontSize: 23 }}><span>2–3 dakikada başvuru</span><span>•</span><span>Karar zorunluluğu yok</span></div>
    </div>,
    size,
  );
}
