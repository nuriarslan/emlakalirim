import type { MetadataRoute } from "next";
import { publicBaseUrl } from "@/lib/sitemap-xml";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: `${publicBaseUrl}/sitemap.xml`,
    host: publicBaseUrl,
  };
}
