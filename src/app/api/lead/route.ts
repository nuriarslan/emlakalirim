import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (body?.website) return NextResponse.json({ ok: true });

    const required = ["area", "type", "size", "titleStatus", "timing", "decisionStatus", "name", "phone"];
    const missing = required.filter((key) => !String(body?.[key] ?? "").trim());
    if (missing.length) return NextResponse.json({ message: "Lütfen zorunlu alanları doldurun." }, { status: 400 });

    const lead = {
      ...body,
      createdAt: new Date().toISOString(),
      source: "emlakalirim.com",
    };

    const webhook = process.env.LEAD_WEBHOOK_URL;
    if (webhook) {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
        cache: "no-store",
      });
      if (!response.ok) console.error("Lead webhook failed", response.status);
    } else {
      console.log("Lead received", { area: lead.area, type: lead.type, createdAt: lead.createdAt });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead endpoint error", error);
    return NextResponse.json({ message: "Başvuru şu anda gönderilemedi." }, { status: 500 });
  }
}
