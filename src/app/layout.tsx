import type { Metadata } from "next";
import "./globals.css";
import "./premium.css";
import "./content.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { JsonLd } from "@/components/JsonLd";
import { publicBaseUrl } from "@/lib/sitemap-xml";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(publicBaseUrl),
  title: { default: `${site.name} | İstanbul Gayrimenkul Ön Değerlendirme`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  openGraph: { type: "website", siteName: site.name, title: site.name, description: site.description, url: publicBaseUrl },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${publicBaseUrl}/#website`,
      url: publicBaseUrl,
      name: site.name,
      inLanguage: ["tr-TR", "de-DE", "en", "ru", "ar"],
    },
    {
      "@type": "Organization",
      "@id": `${publicBaseUrl}/#organization`,
      name: site.name,
      url: publicBaseUrl,
      description: site.description,
      areaServed: { "@type": "City", name: "İstanbul" },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>
        <JsonLd data={structuredData} />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
