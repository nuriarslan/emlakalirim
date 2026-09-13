import type { Metadata } from "next";
import Link from "next/link";
import { regions } from "@/lib/site";
import { regionVisuals, visuals } from "@/lib/visuals";

export const metadata: Metadata = {
  title: "İstanbul Gayrimenkul Değerlendirme Bölgeleri",
  description: "Beykoz, Riva, Şile, Ömerli, Arnavutköy, Çatalca ve seçili İstanbul bölgelerinde arsa ve gayrimenkul ön değerlendirmesi.",
  alternates: { canonical: "/bolgeler" },
};

export default function RegionsHubPage() {
  return (
    <main>
      <section className="section">
        <div className="wrap">
          <div className="sectionHead wideHead">
            <span>İSTANBUL</span>
            <h1 className="contentPageTitle">Odaklandığımız bölgeler</h1>
            <p>Her bölgenin dinamiği farklıdır. Arsa, villa, eski bina ve müstakil taşınmazları konum, tapu, imar ve gerçek satış kabiliyetiyle birlikte değerlendiriyoruz.</p>
          </div>
          <div className="regionGrid regionImageGrid">
            {regions.map((region) => (
              <Link className="regionCard regionImageCard" key={region.slug} href={`/bolgeler/${region.slug}`} style={{ backgroundImage: `url(${regionVisuals[region.slug] || visuals.land})` }}>
                <div className="regionShade" />
                <div className="regionContent">
                  <small>{region.places.join(" • ")}</small>
                  <h2>{region.name}</h2>
                  <p>{region.description}</p>
                  <span>Bölgeyi incele →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section muted">
        <div className="wrap narrow">
          <div className="sectionHead"><span>BAŞVURU</span><h2>Bölgeniz listede olmasa da gönderebilirsiniz.</h2><p>İstanbul ve yakın çevresindeki seçili fırsatlar dosya bazında değerlendirilebilir.</p></div>
          <Link className="primaryButton" href="/#form">Ön değerlendirme iste →</Link>
        </div>
      </section>
    </main>
  );
}
