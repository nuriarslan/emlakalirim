import { NextResponse } from "next/server";

const limits: Record<string, number> = {
  area: 120,
  type: 80,
  size: 40,
  parcel: 60,
  askingPrice: 60,
  titleStatus: 100,
  zoning: 100,
  timing: 80,
  decisionStatus: 120,
  caseType: 120,
  name: 100,
  phone: 40,
  note: 1200,
  locale: 5,
  sourcePath: 240,
};

function clean(value: unknown, max: number) {
  return String(value ?? "").trim().slice(0, max);
}

function json(data: object, init?: ResponseInit) {
  const response = NextResponse.json(data, init);
  response.headers.set("Cache-Control", "no-store, max-age=0");
  return response;
}

export async function POST(request: Request) {
  try {
    const length = Number(request.headers.get("content-length") || 0);
    if (length > 25_000) return json({ message: "Başvuru çok büyük." }, { status: 413 });
    if (!request.headers.get("content-type")?.includes("application/json")) {
      return json({ message: "Geçersiz istek." }, { status: 415 });
    }

    const body = await request.json();
    if (body?.website) return json({ ok: true });

    if (body?.noticeRead !== "yes") {
      return json({ message: "KVKK aydınlatma metnini okuyup onay kutusunu işaretleyin." }, { status: 400 });
    }

    const lead = Object.fromEntries(
      Object.entries(limits).map(([key, max]) => [key, clean(body?.[key], max)]),
    ) as Record<string, string>;

    const required = ["area", "type", "size", "titleStatus", "timing", "decisionStatus", "name", "phone"];
    const missing = required.filter((key) => !lead[key]);
    if (missing.length) return json({ message: "Lütfen zorunlu alanları doldurun." }, { status: 400 });

    const payload = {
      ...lead,
      noticeRead: true,
      privacyNoticeVersion: "2026-09-15",
      createdAt: new Date().toISOString(),
      source: "www.emlakalirim.com",
    };

    const webhook = process.env.LEAD_WEBHOOK_URL?.trim();
    if (!webhook) {
      console.error("LEAD_WEBHOOK_URL is not configured");
      return json({ message: "Başvuru kanalı şu anda yapılandırılıyor. Lütfen WhatsApp üzerinden iletişime geçin." }, { status: 503 });
    }
    if (!webhook.startsWith("https://")) {
      console.error("LEAD_WEBHOOK_URL must use HTTPS");
      return json({ message: "Başvuru kanalı şu anda kullanılamıyor. Lütfen WhatsApp üzerinden iletişime geçin." }, { status: 503 });
    }

    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      console.error("Lead webhook failed", response.status);
      return json({ message: "Başvuru şu anda iletilemedi. Lütfen WhatsApp üzerinden iletişime geçin." }, { status: 502 });
    }

    return json({ ok: true });
  } catch (error) {
    console.error("Lead endpoint error", error instanceof Error ? error.message : "unknown");
    return json({ message: "Başvuru şu anda gönderilemedi. Lütfen WhatsApp üzerinden iletişime geçin." }, { status: 500 });
  }
}
