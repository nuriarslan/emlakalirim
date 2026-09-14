import { leadGuides } from "@/lib/lead-guides";
import { seoGuides } from "@/lib/seo-guides";
import { guides as baseGuides } from "@/lib/site";
import { urlset, xmlResponse } from "@/lib/sitemap-xml";

export function GET() {
  const guides = [...leadGuides, ...seoGuides, ...baseGuides];
  return xmlResponse(urlset(guides.map((guide) => ({
    path: `/rehber/${guide.slug}`,
    changefreq: "monthly" as const,
    priority: 0.8,
  }))));
}
