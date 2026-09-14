export const publicBaseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.emlakalirim.com").replace(/\/$/, "");

function escapeXml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

export type SitemapUrl = {
  path: string;
  changefreq?: "daily" | "weekly" | "monthly" | "yearly";
  priority?: number;
};

export function urlset(entries: SitemapUrl[]) {
  const body = entries.map((entry) => {
    const loc = `${publicBaseUrl}${entry.path === "/" ? "" : entry.path}`;
    return [
      "  <url>",
      `    <loc>${escapeXml(loc)}</loc>`,
      entry.changefreq ? `    <changefreq>${entry.changefreq}</changefreq>` : "",
      typeof entry.priority === "number" ? `    <priority>${entry.priority.toFixed(1)}</priority>` : "",
      "  </url>",
    ].filter(Boolean).join("\n");
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`;
}

export function sitemapIndex(paths: string[]) {
  const body = paths.map((path) => `  <sitemap><loc>${escapeXml(`${publicBaseUrl}${path}`)}</loc></sitemap>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</sitemapindex>`;
}

export function xmlResponse(xml: string) {
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
