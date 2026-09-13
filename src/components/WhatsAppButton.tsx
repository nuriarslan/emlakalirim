"use client";

import { usePathname } from "next/navigation";
import { localeFromPath, type Locale } from "@/lib/i18n";

const labels: Record<Locale, { label: string; text: string }> = {
  tr: { label: "WhatsApp'tan yazın", text: "Merhaba, İstanbul'daki gayrimenkulüm için ön değerlendirme almak istiyorum." },
  de: { label: "Per WhatsApp schreiben", text: "Hallo, ich möchte eine erste Einschätzung zu meiner Immobilie in Istanbul erhalten." },
  en: { label: "Message on WhatsApp", text: "Hello, I would like an initial review of my property in Istanbul." },
  ru: { label: "Написать в WhatsApp", text: "Здравствуйте, я хотел(а) бы получить предварительную оценку моей недвижимости в Стамбуле." },
  ar: { label: "تواصل عبر واتساب", text: "مرحباً، أود الحصول على تقييم أولي لعقاري في إسطنبول." },
};

export function WhatsAppButton() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const phone = (process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "").replace(/\D/g, "");
  if (!phone) return null;
  const content = labels[locale];
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(content.text)}`;

  return (
    <a className="whatsappButton" href={href} target="_blank" rel="noopener noreferrer" aria-label={content.label} title={content.label}>
      <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.04 4C9.42 4 4.05 9.24 4.05 15.7c0 2.27.67 4.48 1.94 6.36L4 28l6.13-1.95a12.2 12.2 0 0 0 5.9 1.51h.01c6.61 0 11.99-5.24 11.99-11.7C28.03 9.4 22.65 4 16.04 4Zm0 21.59h-.01a10.2 10.2 0 0 1-5.18-1.42l-.37-.21-3.64 1.16 1.19-3.46-.24-.36a9.56 9.56 0 0 1-1.58-5.6c0-5.37 4.42-9.73 9.84-9.73 5.42 0 9.83 4.36 9.83 9.73 0 5.37-4.41 9.89-9.84 9.89Zm5.4-7.4c-.3-.15-1.75-.85-2.02-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.14-.17.2-.35.22-.64.08-.3-.15-1.25-.45-2.38-1.44a8.9 8.9 0 0 1-1.65-2.02c-.17-.29-.02-.45.13-.59.13-.13.3-.34.44-.51.15-.17.2-.29.3-.49.1-.19.05-.36-.03-.51-.07-.15-.67-1.58-.91-2.16-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.36-.27.29-1.04 1-1.04 2.45 0 1.44 1.07 2.84 1.21 3.03.15.2 2.1 3.15 5.09 4.42.71.3 1.27.48 1.7.61.71.22 1.36.19 1.87.12.57-.08 1.75-.7 2-1.38.25-.68.25-1.26.17-1.38-.07-.12-.27-.19-.56-.34Z"/></svg>
      <span>{content.label}</span>
    </a>
  );
}
