import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { internationalSeoPages, findInternationalSeoPage } from "@/lib/international-seo";
import { localizedLocales, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return internationalSeoPages.map((page) => ({ locale: page.locale, slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const page = findInternationalSeoPage(locale, slug);
  if (!page) return {};
  const path = `/${page.locale}/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: path },
    openGraph: { title: page.title, description: page.description, url: path, type: "article" },
  };
}

export default async function InternationalSellerPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!localizedLocales.includes(locale as Locale) || locale === "tr") notFound();
  const page = findInternationalSeoPage(locale, slug);
  if (!page) notFound();

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    inLanguage: page.locale,
    mainEntityOfPage: `${site.url}/${page.locale}/${page.slug}`,
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };

  return (
    <main dir={page.locale === "ar" ? "rtl" : "ltr"}>
      <JsonLd data={faqLd} />
      <JsonLd data={articleLd} />
      <section className="section">
        <div className="wrap narrow">
          <div className="eyebrow">{page.eyebrow}</div>
          <h1 className="contentPageTitle">{page.title}</h1>
          <p className="heroLead">{page.intro}</p>
          <Link className="primaryButton" href={`/${page.locale}#form`}>{page.cta} →</Link>
        </div>
      </section>

      <section className="section muted">
        <div className="wrap narrow">
          <div className="articleSections">
            {page.sections.map((section, index) => (
              <article key={section.title} className="articleSection">
                <span>0{index + 1}</span>
                <div><h2>{section.title}</h2><p>{section.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow">
          <div className="sectionHead"><span>FAQ</span><h2>{page.locale === "de" ? "Häufige Fragen" : page.locale === "en" ? "Common questions" : page.locale === "ru" ? "Частые вопросы" : "أسئلة شائعة"}</h2></div>
          <div className="faqList">
            {page.faq.map(([question, answer], index) => (
              <details key={question} open={index === 0}><summary>{question}</summary><p>{answer}</p></details>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted" id="form">
        <div className="wrap narrow">
          <div className="sectionHead"><span>{page.eyebrow}</span><h2>{page.cta}</h2><p>{page.description}</p></div>
          <div className="heroCard"><LeadForm locale={page.locale} /></div>
        </div>
      </section>
    </main>
  );
}
