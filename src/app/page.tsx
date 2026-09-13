import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { copy } from "@/lib/i18n";

const c = copy.tr;
export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDescription,
  alternates: {
    canonical: "/",
    languages: {
      "tr-TR": "/",
      "de-DE": "/de",
      en: "/en",
      ru: "/ru",
      ar: "/ar",
      "x-default": "/",
    },
  },
  openGraph: { title: c.metaTitle, description: c.metaDescription, url: "/", locale: "tr_TR" },
};

export default function HomePage() {
  return <LandingPage locale="tr" />;
}
