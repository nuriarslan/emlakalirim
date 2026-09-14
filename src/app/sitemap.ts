import type { MetadataRoute } from "next";
import { localizedLocales, localeMeta } from "@/lib/i18n";
import { leadGuides } from "@/lib/lead-guides";
import { guides as baseGuides, regions, site } from "@/lib/site";

const guides = [...leadGuides, ...baseGuides];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/bolgeler`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/rehber`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ...localizedLocales.map((locale) => ({ url: `${site.url}${localeMeta[locale].path}`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 })),
    ...regions.map((region) => ({ url: `${site.url}/bolgeler/${region.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.82 })),
    ...guides.map((guide) => ({ url: `${site.url}/rehber/${guide.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
