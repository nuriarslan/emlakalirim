import type { Metadata } from "next";
import Link from "next/link";
import { leadGuides } from "@/lib/lead-guides";
import { guides as baseGuides } from "@/lib/site";

const guides = [...leadGuides, ...baseGuides];

export const metadata: Metadata = {
  title: "Gayrimenkul Satış Rehberi",
  description: "Ev, arsa, hisseli tapu, miras, vekâlet, yurt dışından satış ve karmaşık tapu durumları hakkında pratik rehberler.",
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
            <p>Tapu, malik yapısı, arsa niteliği, miras, vekâlet, hisseli mülkiyet ve yurt dışından satış gibi konuları satışa başlamadan önce daha net anlamanıza yardımcı olacak içerikler.</p>
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
          <div className="sectionHead"><span>ÖN DEĞERLENDİRME</span><h2>Satış niyetiniz varsa dosyanızı doğrudan paylaşın.</h2><p>Açık ilan zorunlu değildir. Vekâlet, miras, hisseli tapu veya hukuki kayıt varsa ilk aşamada yalnızca durumun türünü ve temel mülk bilgilerini belirtmeniz yeterlidir.</p></div>
          <Link className="primaryButton" href="/#form">Mülkümü değerlendirin →</Link>
        </div>
      </section>
    </main>
  );
}
