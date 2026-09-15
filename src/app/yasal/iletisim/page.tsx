import type { Metadata } from "next";
import Link from "next/link";
import { hostingProvider, legalIdentity, legalIdentityComplete } from "@/lib/legal";

export const metadata: Metadata = {
  title: "İletişim ve Yasal Bilgiler",
  description: "Emlak Alırım internet sitesi işletmeci, iletişim ve yer sağlayıcı bilgileri.",
  robots: { index: false, follow: true },
};

function Row({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return <p><strong>{label}:</strong> {value}</p>;
}

export default function LegalContactPage() {
  return (
    <main>
      <section className="section">
        <div className="wrap narrow">
          <div className="eyebrow">İLETİŞİM / YASAL BİLGİLER</div>
          <h1 className="contentPageTitle">Site işletmecisi ve iletişim bilgileri</h1>
          <p className="heroLead">Bu sayfa 5651 sayılı Kanun kapsamındaki tanıtıcı bilgi yükümlülüğü ile ilgili iletişim bilgilerini tek yerde sunmak amacıyla hazırlanmıştır.</p>

          {!legalIdentityComplete && (
            <div className="heroCard" style={{ marginTop: 28 }}>
              <h2>İşletmeci bilgileri tamamlanmalıdır</h2>
              <p>Site teknik olarak yayında olsa da işletmecinin tam unvan/ad-soyad, adres, e-posta, telefon ve vergi/ticaret sicili bilgisinin bu sayfada eksiksiz yayımlanması gerekir. Bu alanlar Vercel ortam değişkenleri üzerinden doldurulacak şekilde hazırlanmıştır.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section muted">
        <div className="wrap narrow">
          <div className="articleSections">
            <article className="articleSection">
              <span>01</span>
              <div>
                <h2>İşletmeci / içerik sağlayıcı</h2>
                <Row label="Ad / ticaret unvanı" value={legalIdentity.operatorName} />
                <Row label="Hukuki statü" value={legalIdentity.legalForm} />
                <Row label="Merkez / yerleşim adresi" value={legalIdentity.address} />
                <Row label="E-posta" value={legalIdentity.email} />
                <Row label="Telefon" value={legalIdentity.phone} />
                <Row label="Vergi kimlik numarası" value={legalIdentity.taxId} />
                <Row label="MERSİS numarası" value={legalIdentity.mersis} />
                <Row label="Ticaret sicili" value={legalIdentity.tradeRegistry} />
                <Row label="KEP adresi" value={legalIdentity.kep} />
                <Row label="Meslek odası" value={legalIdentity.chamber} />
                <Row label="Yetkili / denetleyici merci" value={legalIdentity.authority} />
              </div>
            </article>

            <article className="articleSection">
              <span>02</span>
              <div>
                <h2>Yer sağlayıcı / hosting</h2>
                <p><strong>{hostingProvider.name}</strong><br />{hostingProvider.address}<br />{hostingProvider.privacyEmail}</p>
                <p>Web sitesi Vercel altyapısı üzerinden sunulmaktadır. Alan adı emlakalirim.com’dur.</p>
              </div>
            </article>

            <article className="articleSection">
              <span>03</span>
              <div>
                <h2>Faaliyetin niteliği</h2>
                <p>Site, gayrimenkul sahiplerinden bağlayıcı olmayan ön değerlendirme talepleri toplar. Site üzerinden tapu devri, satış sözleşmesi, ödeme veya çevrim içi sipariş işlemi yapılmaz. Ön değerlendirme; satış vaadi, aracılık sözleşmesi, vekâlet veya satın alma taahhüdü oluşturmaz.</p>
              </div>
            </article>
          </div>
          <div className="guideBack"><Link className="textLink" href="/">← Ana sayfa</Link></div>
        </div>
      </section>
    </main>
  );
}
