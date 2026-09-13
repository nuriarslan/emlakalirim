import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/LandingPage";
import { copy, localeMeta, localizedLocales, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return localizedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!localizedLocales.includes(raw as Locale)) return {};
  const locale = raw as Locale;
  const c = copy[locale];
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: localeMeta[locale].path,
      languages: { "tr-TR": "/", "de-DE": "/de", en: "/en", ru: "/ru", ar: "/ar", "x-default": "/" },
    },
  };
}

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!localizedLocales.includes(raw as Locale)) notFound();
  return <LandingPage locale={raw as Locale} />;
}
