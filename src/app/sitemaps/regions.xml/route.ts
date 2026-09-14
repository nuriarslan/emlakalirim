import { regions } from "@/lib/site";
import { urlset, xmlResponse } from "@/lib/sitemap-xml";

export function GET() {
  return xmlResponse(urlset(regions.map((region) => ({
    path: `/bolgeler/${region.slug}`,
    changefreq: "monthly" as const,
    priority: 0.8,
  }))));
}
