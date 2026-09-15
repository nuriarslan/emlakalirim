import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description: "Emlak Alırım internet sitesi kullanım koşulları ve ön değerlendirme açıklamaları.",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <main>
      <section className="section">
        <div className="wrap narrow">
          <div className="eyebrow">KULLANIM KOŞULLARI</div>
          <h1 className="contentPageTitle">Ön değerlendirme, teklif ve içerik hakkında</h1>
          <p className="heroLead">Bu site gayrimenkul sahiplerinin temel bilgileri paylaşarak yatırım odaklı bir ön değerlendirme talep edebilmesi için hazırlanmıştır.</p>
        </div>
      </section>

      <section className="section muted">
        <div className="wrap narrow">
          <div className="articleSections">
            <article className="articleSection"><span>01</span><div><h2>Bağlayıcı teklif değildir</h2><p>Form, WhatsApp veya başka bir iletişim kanalı üzerinden yapılan başvuru; satın alma taahhüdü, satış vaadi, kapora sözleşmesi, yetkilendirme sözleşmesi, aracılık sözleşmesi veya vekâlet oluşturmaz. Bağlayıcı bir işlem ancak tarafların ayrıca ve usulüne uygun şekilde yaptığı resmi/yazılı işlemle doğabilir.</p></div></article>
            <article className="articleSection"><span>02</span><div><h2>Bilgilerin doğruluğu</h2><p>Ön değerlendirme, başvuru sahibinin sağladığı bilgilere dayanır. Tapu, imar, malik yapısı, hukuki kayıtlar ve fiziksel durum gibi hususlar işlem ilerlediğinde ayrıca doğrulanabilir. Eksik veya yanlış bilgi nedeniyle yapılan ilk değerlendirme nihai kabul edilmez.</p></div></article>
            <article className="articleSection"><span>03</span><div><h2>Hukuki, vergi veya yatırım danışmanlığı değildir</h2><p>Sitedeki rehberler genel bilgilendirme ve satış hazırlığı amacı taşır. Miras, vekâlet, hisseli tapu, haciz, şerh, tedbir, dava, vergi veya imar konularında bağlayıcı hukuki görüş verilmez. Somut işlem öncesi gerekli uzman incelemesi ayrıca yapılmalıdır.</p></div></article>
            <article className="articleSection"><span>04</span><div><h2>Aracılık hakkında</h2><p>Sitedeki ön değerlendirme hizmeti tek başına taşınmaz aracılığı hizmeti anlamına gelmez. Başkasına ait taşınmazların satışına aracılık, komisyon karşılığı pazarlama veya yetkilendirme sözleşmesine dayalı emlakçılık faaliyeti yürütülecekse ilgili taşınmaz ticareti mevzuatındaki yetki ve sözleşme şartları ayrıca sağlanmalıdır.</p></div></article>
            <article className="articleSection"><span>05</span><div><h2>Fiyat ve satın alma kararı</h2><p>Sitedeki içerik veya ön görüşme, belirli bir piyasa değeri garantisi vermez. Nihai ilgi, fiyat ve işlem koşulları; resmi belgeler, konum, taşınmazın fiziki/hukuki durumu, malik yapısı ve yatırım kriterlerine göre değişebilir.</p></div></article>
          </div>
          <div className="guideBack"><Link className="textLink" href="/">← Ana sayfa</Link></div>
        </div>
      </section>
    </main>
  );
}
