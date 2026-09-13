import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/LeadForm";
import { guides } from "@/lib/site";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/rehber/${guide.slug}` },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);
  if (!guide) notFound();

  return (
    <main>
      <section className="section">
        <div className="wrap narrow">
          <div className="eyebrow">{guide.eyebrow.toUpperCase()}</div>
          <h1 className="contentPageTitle">{guide.title}</h1>
          <p className="heroLead">{guide.description}</p>
        </div>
      </section>

      <section className="section muted">
        <div className="wrap narrow">
          <div className="articleSections">
            {guide.sections.map((section, index) => (
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
          <div className="sectionHead"><span>SIK SORULANLAR</span><h2>Satış öncesi temel sorular</h2></div>
          <div className="faqList">
            {guide.faq.map(([question, answer], index) => (
              <details key={question} open={index === 0}><summary>{question}</summary><p>{answer}</p></details>
            ))}
          </div>
          <div className="guideBack"><Link className="textLink" href="/">← Ana sayfa</Link></div>
        </div>
      </section>

      <section className="section muted">
        <div className="wrap narrow">
          <div className="sectionHead"><span>ÖN DEĞERLENDİRME</span><h2>Taşınmazınızın temel bilgilerini paylaşın.</h2></div>
          <div className="heroCard"><LeadForm locale="tr" /></div>
        </div>
      </section>
    </main>
  );
}
