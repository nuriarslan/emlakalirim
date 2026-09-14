import { localeMeta, localizedLocales } from "@/lib/i18n";
import { urlset, xmlResponse } from "@/lib/sitemap-xml";

export function GET() {
  const localeEntries = localizedLocales.map((locale) => ({
    path: localeMeta[locale].path || "/",
    changefreq: "weekly" as const,
    priority: locale === "tr" ? 1 : 0.9,
  }));

  return xmlResponse(urlset([
    ...localeEntries,
    { path: "/bolgeler", changefreq: "weekly", priority: 0.9 },
    { path: "/rehber", changefreq: "weekly", priority: 0.9 },
  ]));
}
