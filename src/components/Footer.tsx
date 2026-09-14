"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { copy, localeFromPath, localeHref, localeMeta, locales } from "@/lib/i18n";
import { leadGuides } from "@/lib/lead-guides";
import { seoGuides } from "@/lib/seo-guides";
import { regions, guides as baseGuides, site } from "@/lib/site";

const footerText = {
  tr: { intro: "İstanbul ve çevresinde arsa, ev, villa, bina ve seçili taşınmazları yatırım kriterlerimiz açısından ön değerlendirmeye alıyoruz.", areas: "Bölgeler", guides: "Satış rehberleri", info: "Bilgi", form: "Ön değerlendirme", privacy: "KVKK / Gizlilik", note: "Başvuru satın alma taahhüdü değildir." },
  de: { intro: "Wir prüfen ausgewählte Grundstücke, Häuser, Villen und Gebäude in Istanbul aus Investorensicht – auch für Eigentümer im Ausland.", areas: "Regionen", guides: "Verkaufen in der Türkei", info: "Information", form: "Vorprüfung", privacy: "Datenschutz", note: "Eine Anfrage ist keine Kaufzusage." },
  en: { intro: "We review selected land, houses, villas and buildings in Istanbul from an investment perspective, including owners living abroad.", areas: "Areas", guides: "Sell in Turkey", info: "Information", form: "Initial review", privacy: "Privacy", note: "An enquiry is not a commitment to purchase." },
  ru: { intro: "Мы рассматриваем выбранные участки, дома, виллы и здания в Стамбуле с инвестиционной точки зрения, в том числе для владельцев за рубежом.", areas: "Районы", guides: "Продажа в Турции", info: "Информация", form: "Оценка", privacy: "Конфиденциальность", note: "Заявка не является обязательством купить." },
  ar: { intro: "نراجع أراضي ومنازل وفللاً ومبانٍ مختارة في إسطنبول من منظور استثماري، بما في ذلك الملاك خارج تركيا.", areas: "المناطق", guides: "البيع في تركيا", info: "معلومات", form: "تقييم أولي", privacy: "الخصوصية", note: "إرسال الطلب لا يشكل التزاماً بالشراء." },
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
          <Link href={localeHref(locale, "#privacy")}>{t.privacy}</Link>
          <span className="footerNote">{t.note}</span>
          <a href={site.url}>emlakalirim.com</a>
        </div>
      </div>
      <div className="wrap footerBottom">© {new Date().getFullYear()} {site.name}</div>
    </footer>
  );
}
