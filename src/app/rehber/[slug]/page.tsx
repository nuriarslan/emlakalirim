import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { leadGuides } from "@/lib/lead-guides";
import { seoGuides } from "@/lib/seo-guides";
import { guides as baseGuides, site } from "@/lib/site";

const guides = [...leadGuides, ...seoGuides, ...baseGuides];

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
    openGraph: { title: guide.title, description: guide.description, url: `/rehber/${guide.slug}`, type: "article" },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);
  if (!guide) notFound();

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faq.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    inLanguage: "tr-TR",
    mainEntityOfPage: `${site.url}/rehber/${guide.slug}`,
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };

  return (
    <main>
      <JsonLd data={faqLd} />
      <JsonLd data={articleLd} />
      <section className="section">
        <div className="wrap narrow">
          <div className="eyebrow">{guide.eyebrow.toUpperCase()}</div>
          <h1 className="contentPageTitle">{guide.title}</h1>
          <p className="heroLead">{guide.description}</p>
          <Link className="primaryButton" href="#form">Mülkümü değerlendirin →</Link>
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
          <div className="heroCard" style={{ marginTop: 28 }}>
            <div className="sectionHead">
              <span>ÖNEMLİ</span>
              <h2>Bu rehber hukuki danışmanlık değildir.</h2>
              <p>Tapu, miras, vekâlet, şerh, haciz, tedbir veya dava gibi konularda kesin işlem koşulları somut belgeye göre değişebilir. Emlak Alırım yalnızca taşınmazın satın alma ve yatırım açısından ön uygunluğunu değerlendirir; hukuki temsil veya uyuşmazlık çözümü sunmaz.</p>
            </div>
          </div>
          <div className="guideBack"><Link className="textLink" href="/rehber">← Tüm satış rehberleri</Link></div>
        </div>
      </section>

      <section className="section muted" id="form">
        <div className="wrap narrow">
          <div className="sectionHead"><span>ÖN DEĞERLENDİRME</span><h2>Taşınmazınızın temel bilgilerini paylaşın.</h2><p>Özel durum varsa formdaki ilgili seçeneği işaretleyin. İlk aşamada hassas dosyanın tamamını göndermeniz gerekmez.</p></div>
          <div className="heroCard"><LeadForm locale="tr" /></div>
        </div>
      </section>
    </main>
  );
}
