import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/LeadForm";
import { regions } from "@/lib/site";
import { regionVisuals, visuals } from "@/lib/visuals";

export function generateStaticParams() {
  return regions.map((region) => ({ slug: region.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const region = regions.find((item) => item.slug === slug);
  if (!region) return {};
  return {
    title: region.title,
    description: region.description,
    alternates: { canonical: `/bolgeler/${region.slug}` },
    openGraph: { title: region.title, description: region.description, url: `/bolgeler/${region.slug}` },
  };
}

export default async function RegionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const region = regions.find((item) => item.slug === slug);
  if (!region) notFound();
  const image = regionVisuals[region.slug] || visuals.land;

  return (
    <main>
      <section className="regionPageHero" style={{ backgroundImage: `url(${image})` }}>
        <div className="heroOverlay" />
        <div className="wrap regionPageHeroInner">
          <div className="regionPageCopy">
            <div className="eyebrow">{region.name.toUpperCase()} • İSTANBUL</div>
            <h1>{region.title}</h1>
            <p>{region.description}</p>
            <div className="regionPlacePills">{region.places.map((place) => <span key={place}>{place}</span>)}</div>
            <Link className="primaryButton primaryLight" href="#form">Ön değerlendirme iste →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap regionDetailGrid">
          <div>
            <div className="sectionHead"><span>BÖLGEYE ÖZEL BAKIŞ</span><h2>{region.name} için yalnızca m² fiyatına bakmıyoruz.</h2></div>
            <p className="regionLeadText">{region.localNote}</p>
            <div className="regionFocusGrid">
              {region.focusPoints.map((point, index) => <article key={point}><span>0{index + 1}</span><h3>{point}</h3></article>)}
            </div>
          </div>
          <aside className="regionSideCard">
            <span className="eyebrow">KİMLER BAŞVURABİLİR?</span>
            <h2>Satış fikriniz henüz kesinleşmemiş olsa da başlayabilirsiniz.</h2>
            <ul>{region.sellerFit.map((item) => <li key={item}>{item}</li>)}</ul>
          </aside>
        </div>
      </section>

      <section className="section muted">
        <div className="wrap narrow">
          <div className="sectionHead"><span>ÖN KONTROL</span><h2>İlk incelemede hangi bilgiler önemlidir?</h2></div>
          <div className="faqList">
            <details open><summary>Tapu ve malik yapısı</summary><p>Müstakil veya hisseli tapu, arsa payı ve satış kararını verebilen malik yapısı birlikte değerlendirilir.</p></details>
            <details><summary>İmar ve parsel niteliği</summary><p>İmar durumu, yol bağlantısı, parsel şekli ve kullanım imkânı yatırım kararını etkiler.</p></details>
            <details><summary>Fiyat ve zamanlama</summary><p>Fiyat beklentisi ile bölgenin gerçek işlem potansiyeli arasındaki uyum ve satış takvimi ilk incelemenin önemli parçasıdır.</p></details>
          </div>
        </div>
      </section>

      <section className="section" id="form">
        <div className="wrap narrow">
          <div className="sectionHead"><span>{region.name.toUpperCase()}</span><h2>Mülkünüzü gizli biçimde ön değerlendirmeye gönderin.</h2><p>Açık ilan gerekmez. Konum, mülk tipi ve temel tapu bilgileriyle başlayabilirsiniz.</p></div>
          <div className="heroCard"><LeadForm locale="tr" /></div>
          <div className="guideBack"><Link className="textLink" href="/">← Ana sayfa</Link></div>
        </div>
      </section>
    </main>
  );
}
