import type { Metadata } from "next";
import Link from "next/link";
import { leadGuides } from "@/lib/lead-guides";
import { seoGuides } from "@/lib/seo-guides";
import { guides as baseGuides } from "@/lib/site";

const guides = [...leadGuides, ...seoGuides, ...baseGuides];

export const metadata: Metadata = {
  title: "Gayrimenkul Satış Rehberi | Ev, Arsa, Hisse, Miras ve Yurt Dışı",
  description: "Evimi satmak istiyorum, arsamı satmak istiyorum, hisseli tapu, miras, vekâlet, yurt dışından satış, komple bina, tarla ve ilan vermeden satış için pratik rehberler.",
  alternates: { canonical: "/rehber" },
};

const intentLinks = [
  ["Evimi satmak istiyorum", "/rehber/evimi-satmak-istiyorum"],
  ["Arsamı satmak istiyorum", "/rehber/arsami-satmak-istiyorum"],
  ["Hissemi satmak istiyorum", "/rehber/hissemi-satmak-istiyorum"],
  ["Miras kalan gayrimenkul", "/rehber/miras-kalan-gayrimenkul-satisi"],
  ["Yurt dışından satış", "/rehber/yurtdisinda-yasayan-malik-gayrimenkul-satisi"],
  ["Vekâletle satış", "/rehber/vekaletle-gayrimenkul-satisi"],
  ["Komple bina satışı", "/rehber/komple-bina-satisi"],
  ["Tarla satışı", "/rehber/tarla-satmak-istiyorum"],
  ["İlan vermeden satış", "/rehber/ilan-vermeden-gayrimenkul-satmak"],
  ["Kısa satış takvimi", "/rehber/gayrimenkulu-hizli-satmak"],
] as const;

export default function GuideHubPage() {
  return (
    <main>
      <section className="section">
        <div className="wrap">
          <div className="sectionHead wideHead">
            <span>EMLAK ALIRIM REHBER</span>
            <h1 className="contentPageTitle">Gayrimenkul satmayı düşünenler için satış rehberleri</h1>
            <p>Ev, arsa, tarla, komple bina, hisseli tapu, miras, vekâlet ve yurt dışından satış gibi gerçek satıcı niyetlerine göre hazırlanmış içerikler. Amaç genel bilgi vermek değil, satışa uygun dosyaların doğru bilgilerle hızlı biçimde ön değerlendirmeye gelmesini sağlamaktır.</p>
          </div>
          <div className="pillList" style={{ marginBottom: 32 }}>
            {intentLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
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
