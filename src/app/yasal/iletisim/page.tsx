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
          <p className="heroLead">Emlak Alırım, üçüncü kişiler adına emlak aracılığı yapmak için değil, site işletmecisinin kendi adına ve kendi hesabına değerlendirebileceği gayrimenkul alım fırsatlarına ulaşmak amacıyla kullanılmaktadır.</p>

          {!legalIdentityComplete && (
            <div className="heroCard" style={{ marginTop: 28 }}>
              <h2>İşletmeci iletişim bilgileri henüz tamamlanmadı</h2>
              <p>Gerçek kişi site işletmecisinin adı-soyadı, yerleşim/tebligat adresi, e-posta adresi ve telefon numarası eklenmelidir. MERSİS, ticaret sicili, meslek odası, KEP veya vergi numarası yalnızca işletmecinin hukuki statüsü ve faaliyeti bakımından gerçekten uygulanıyorsa gösterilir; mevcut olmayan kayıtlar oluşturulmaz veya varmış gibi yayımlanmaz.</p>
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
                <Row label="Ad soyad" value={legalIdentity.operatorName} />
                <Row label="Statü" value={legalIdentity.legalForm} />
                <Row label="Yerleşim / tebligat adresi" value={legalIdentity.address} />
                <Row label="E-posta" value={legalIdentity.email} />
                <Row label="Telefon" value={legalIdentity.phone} />
                <Row label="Vergi kimlik numarası (uygulanıyorsa)" value={legalIdentity.taxId} />
                <Row label="MERSİS numarası (uygulanıyorsa)" value={legalIdentity.mersis} />
                <Row label="Ticaret sicili (uygulanıyorsa)" value={legalIdentity.tradeRegistry} />
                <Row label="KEP adresi (uygulanıyorsa)" value={legalIdentity.kep} />
                <Row label="Meslek odası (uygulanıyorsa)" value={legalIdentity.chamber} />
                <Row label="Yetkili / denetleyici merci (uygulanıyorsa)" value={legalIdentity.authority} />
              </div>
            </article>

            <article className="articleSection">
              <span>02</span>
              <div>
                <h2>Faaliyetin niteliği</h2>
                <p>Site işletmecisi, kendi adına ve kendi hesabına satın alma olasılığını değerlendiren alıcıdır. Site üçüncü kişiler adına satışa aracılık etmez, satıcıdan komisyon talep eden bir emlak aracılık hizmeti sunmaz ve satıcı adına pazarlama yapmaz.</p>
                <p>Form üzerinden yapılan başvuru yalnızca bağlayıcı olmayan bir ön inceleme talebidir. Başvuru; satış sözleşmesi, satış vaadi, vekâlet, aracılık sözleşmesi veya satın alma taahhüdü oluşturmaz.</p>
              </div>
            </article>

            <article className="articleSection">
              <span>03</span>
              <div>
                <h2>Yer sağlayıcı / hosting</h2>
                <p><strong>{hostingProvider.name}</strong><br />{hostingProvider.address}<br />{hostingProvider.privacyEmail}</p>
                <p>Web sitesi Vercel altyapısı üzerinden sunulmaktadır. Alan adı emlakalirim.com’dur.</p>
              </div>
            </article>

            <article className="articleSection">
              <span>04</span>
              <div>
                <h2>Faaliyet değişirse bilgiler de değişir</h2>
                <p>İşletmeci ileride düzenli biçimde ticari gayrimenkul alım-satım faaliyeti yürütür, üçüncü kişiler adına aracılık hizmeti sunar veya şirket/esnaf statüsüne geçerse vergi, ticaret sicili, mesleki izin ve diğer yükümlülükler yeniden değerlendirilir ve bu sayfa buna göre güncellenir.</p>
              </div>
            </article>
          </div>
          <div className="guideBack"><Link className="textLink" href="/">← Ana sayfa</Link></div>
        </div>
      </section>
    </main>
  );
}
