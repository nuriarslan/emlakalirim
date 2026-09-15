import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: "Emlak Alırım çerez ve benzeri teknolojiler politikası.",
  robots: { index: false, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <main>
      <section className="section">
        <div className="wrap narrow">
          <div className="eyebrow">ÇEREZ POLİTİKASI</div>
          <h1 className="contentPageTitle">Çerezler ve benzeri teknolojiler</h1>
          <p className="heroLead">Bu sitede gereksiz izleme yapmamayı tercih ediyoruz. Mevcut uygulama kodunda reklam, yeniden hedefleme veya davranışsal analiz amacıyla çalışan Google Analytics, Meta Pixel veya benzeri bir takip aracı bulunmamaktadır.</p>
        </div>
      </section>

      <section className="section muted">
        <div className="wrap narrow">
          <div className="articleSections">
            <article className="articleSection"><span>01</span><div><h2>Şu anda neden çerez onay bandı göstermiyoruz?</h2><p>KVKK uygulamasında, hizmetin çalışması için kesinlikle gerekli olmayan ve başka bir işleme şartına dayanmayan analitik/reklam çerezleri için kullanıcıdan önceden aktif onay alınması gerekir. Sitede şu anda bu tür opsiyonel takip çerezleri kullanılmadığı için kullanıcıya gerçekte olmayan tercihler sunan bir onay bandı göstermiyoruz.</p></div></article>
            <article className="articleSection"><span>02</span><div><h2>Zorunlu teknik işlemler</h2><p>Barındırma, güvenlik, ağ yönetimi ve kötüye kullanımın önlenmesi için sunucu ve altyapı seviyesinde teknik bağlantı kayıtları işlenebilir. Bunlar analitik veya reklam amacıyla kullanılmamalıdır. Barındırma sağlayıcısının kendi teknik uygulamaları ayrıca kendi sözleşme ve gizlilik şartlarına tabidir.</p></div></article>
            <article className="articleSection"><span>03</span><div><h2>Dış bağlantılar</h2><p>WhatsApp gibi üçüncü taraf bir bağlantıya tıklarsanız ilgili hizmetin kendi sitesi/uygulaması açılır. Bu andan itibaren o hizmetin çerez ve gizlilik uygulamaları geçerli olabilir. Üçüncü taraf hizmetini açmadan önce bağlantıya sizin aktif olarak tıklamanız gerekir.</p></div></article>
            <article className="articleSection"><span>04</span><div><h2>Gelecekte analiz veya reklam aracı eklenirse</h2><p>Analitik, reklam, kişiselleştirme veya benzeri zorunlu olmayan bir teknoloji eklenirse; bu teknoloji kullanıcı onayı verilmeden çalıştırılmayacak şekilde yapılandırılmalı, “kabul et”, “reddet” ve gerektiğinde “tercihler” seçenekleri eşit ve anlaşılır biçimde sunulmalı ve bu politika kullanılan çerez adı, sağlayıcısı, amacı ve süresiyle güncellenmelidir.</p></div></article>
          </div>
          <div className="guideBack"><Link className="textLink" href="/">← Ana sayfa</Link></div>
        </div>
      </section>
    </main>
  );
}
