"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { copy, localeFromPath, localeHref, localeMeta, locales } from "@/lib/i18n";
import { leadGuides } from "@/lib/lead-guides";
import { seoGuides } from "@/lib/seo-guides";
import { regions, guides as baseGuides, site } from "@/lib/site";

const footerText = {
  tr: { intro: "İstanbul ve çevresinde arsa, ev, villa, bina ve seçili taşınmazları yatırım kriterlerimiz açısından ön değerlendirmeye alıyoruz.", areas: "Bölgeler", guides: "Satış rehberleri", info: "İletişim / Yasal", form: "Ön değerlendirme", contact: "İletişim ve yasal bilgiler", privacy: "KVKK aydınlatma", cookies: "Çerez politikası", terms: "Kullanım koşulları", messages: "İletişim tercihleri", note: "Başvuru satın alma taahhüdü veya pazarlama izni değildir." },
  de: { intro: "Wir prüfen ausgewählte Grundstücke, Häuser, Villen und Gebäude in Istanbul aus Investorensicht – auch für Eigentümer im Ausland.", areas: "Regionen", guides: "Verkaufen in der Türkei", info: "Kontakt / Rechtliches", form: "Vorprüfung", contact: "Betreiber & Kontakt", privacy: "KVKK-Datenschutz", cookies: "Cookie-Richtlinie", terms: "Nutzungsbedingungen", messages: "Kommunikationspräferenzen", note: "Eine Anfrage ist keine Kaufzusage oder Werbeeinwilligung." },
  en: { intro: "We review selected land, houses, villas and buildings in Istanbul from an investment perspective, including owners living abroad.", areas: "Areas", guides: "Sell in Turkey", info: "Contact / Legal", form: "Initial review", contact: "Operator & contact", privacy: "KVKK privacy notice", cookies: "Cookie policy", terms: "Terms of use", messages: "Communication preferences", note: "An enquiry is not a purchase commitment or marketing consent." },
  ru: { intro: "Мы рассматриваем выбранные участки, дома, виллы и здания в Стамбуле с инвестиционной точки зрения, в том числе для владельцев за рубежом.", areas: "Районы", guides: "Продажа в Турции", info: "Контакты / Правовая информация", form: "Оценка", contact: "Оператор и контакты", privacy: "Уведомление KVKK", cookies: "Политика cookies", terms: "Условия использования", messages: "Настройки связи", note: "Заявка не является обязательством купить или согласием на рекламу." },
  ar: { intro: "نراجع أراضي ومنازل وفللاً ومبانٍ مختارة في إسطنبول من منظور استثماري، بما في ذلك الملاك خارج تركيا.", areas: "المناطق", guides: "البيع في تركيا", info: "التواصل / معلومات قانونية", form: "تقييم أولي", contact: "المشغّل وبيانات التواصل", privacy: "إشعار الخصوصية KVKK", cookies: "سياسة ملفات الارتباط", terms: "شروط الاستخدام", messages: "تفضيلات التواصل", note: "إرسال الطلب لا يشكل التزاماً بالشراء أو موافقة على التسويق." },
} as const;

const internationalSellerLinks = {
  de: [
    ["Immobilie in der Türkei verkaufen", "/de/immobilie-tuerkei-verkaufen"],
    ["Geerbte Immobilie verkaufen", "/de/geerbte-immobilie-tuerkei-verkaufen"],
    ["Verkauf mit Vollmacht", "/de/vollmacht-immobilienverkauf-tuerkei"],
  ],
  en: [["Sell property in Turkey", "/en/sell-property-turkey"]],
  ru: [["Продать недвижимость в Турции", "/ru/prodat-nedvizhimost-v-turtsii"]],
  ar: [["بيع عقار في تركيا", "/ar/sell-property-turkey"]],
} as const;

const turkishGuideLinks = [...leadGuides, ...seoGuides, ...baseGuides].slice(0, 10);

export function Footer() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const t = footerText[locale];
  const c = copy[locale];

  return (
    <footer className="footer" dir={localeMeta[locale].dir}>
      <div className="wrap footerGrid">
        <div>
          <Link className="brand footerBrand" href={localeMeta[locale].path}>Emlak <span>Alırım</span></Link>
          <p>{t.intro}</p>
          <div className="footerLanguages">{locales.map((item) => <Link key={item} href={localeMeta[item].path}>{localeMeta[item].short}</Link>)}</div>
        </div>
        <div>
          <strong>{t.areas}</strong>
          {locale === "tr" ? regions.slice(0, 5).map((region) => <Link key={region.slug} href={`/bolgeler/${region.slug}`}>{region.name}</Link>) : c.regions.slice(0, 5).map(([name]: string[]) => <Link key={name} href={localeHref(locale, "#bolgeler")}>{name}</Link>)}
        </div>
        <div>
          <strong>{t.guides}</strong>
          {locale === "tr" ? <>
            {turkishGuideLinks.map((guide) => <Link key={guide.slug} href={`/rehber/${guide.slug}`}>{guide.eyebrow}</Link>)}
            <Link href="/rehber">Tüm rehberler →</Link>
          </> : <>
            {internationalSellerLinks[locale].map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
            <Link href={localeHref(locale, "#form")}>{c.finalButton}</Link>
          </>}
        </div>
        <div>
          <strong>{t.info}</strong>
          <Link href={localeHref(locale, "#form")}>{t.form}</Link>
          <Link href="/yasal/iletisim">{t.contact}</Link>
          <Link href="/yasal/kvkk-aydinlatma-metni">{t.privacy}</Link>
          <Link href="/yasal/cerez-politikasi">{t.cookies}</Link>
          <Link href="/yasal/kullanim-kosullari">{t.terms}</Link>
          <Link href="/yasal/ticari-elektronik-ileti">{t.messages}</Link>
          <span className="footerNote">{t.note}</span>
          <a href={site.url}>emlakalirim.com</a>
        </div>
      </div>
      <div className="wrap footerBottom">© {new Date().getFullYear()} {site.name}</div>
    </footer>
  );
}
