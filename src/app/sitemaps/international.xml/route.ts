import { internationalSeoPages } from "@/lib/international-seo";
import { urlset, xmlResponse } from "@/lib/sitemap-xml";

export function GET() {
  return xmlResponse(urlset(internationalSeoPages.map((page) => ({
    path: `/${page.locale}/${page.slug}`,
    changefreq: "monthly" as const,
    priority: page.locale === "de" ? 0.9 : 0.8,
  }))));
}
