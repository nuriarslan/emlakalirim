import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gayrimenkul Satış Rehberi",
  description: "Ev, arsa, hisseli tapu, miras ve yurt dışından gayrimenkul satışı hakkında pratik rehberler.",
  alternates: { canonical: "/rehber" },
};

export default function GuideHubPage() {
  return (
    <main>
      <section className="section">
        <div className="wrap">
          <div className="sectionHead wideHead">
            <span>EMLAK ALIRIM REHBER</span>
            <h1 className="contentPageTitle">Gayrimenkul satmayı düşünenler için rehberler</h1>
            <p>İlan vermeden önce tapu, malik yapısı, arsa niteliği, miras ve satış zamanlaması gibi konuları daha iyi anlamanıza yardımcı olacak kısa ve pratik içerikler.</p>
          </div>
          <div className="guideGrid">
            {guides.map((guide) => (
              <Link className="guideCard" key={guide.slug} href={`/rehber/${guide.slug}`}>
                <small>{guide.eyebrow}</small>
                <h2>{guide.title}</h2>
                <p>{guide.description}</p>
                <span>Rehberi oku →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section muted">
        <div className="wrap narrow">
          <div className="sectionHead"><span>ÖN DEĞERLENDİRME</span><h2>Satış fikriniz varsa mülkünüzü de değerlendirebiliriz.</h2><p>Açık ilan zorunlu değildir. Temel bilgilerle başlayabilirsiniz.</p></div>
          <Link className="primaryButton" href="/#form">Mülkümü değerlendirin →</Link>
        </div>
      </section>
    </main>
  );
}
