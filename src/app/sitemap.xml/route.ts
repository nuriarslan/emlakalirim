import { sitemapIndex, xmlResponse } from "@/lib/sitemap-xml";

export function GET() {
  return xmlResponse(sitemapIndex([
    "/sitemaps/core.xml",
    "/sitemaps/regions.xml",
    "/sitemaps/guides.xml",
    "/sitemaps/international.xml",
  ]));
}
