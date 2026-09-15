import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ticari Elektronik İletiler",
  description: "Emlak Alırım iletişim ve ticari elektronik ileti yaklaşımı.",
  robots: { index: false, follow: true },
};

export default function CommercialMessagesPage() {
  return (
    <main>
      <section className="section">
        <div className="wrap narrow">
          <div className="eyebrow">İLETİŞİM TERCİHLERİ</div>
          <h1 className="contentPageTitle">Başvuru cevabı ile pazarlama mesajını ayırıyoruz</h1>
          <p className="heroLead">Form veya WhatsApp üzerinden bize yazmanız, başvurunuz hakkında sizinle iletişim kurabilmemizi sağlar; tek başına kampanya/reklam amaçlı sürekli ticari ileti izni değildir.</p>
        </div>
      </section>
      <section className="section muted">
        <div className="wrap narrow">
          <div className="articleSections">
            <article className="articleSection"><span>01</span><div><h2>Başvurunuza cevap</h2><p>Gönderdiğiniz taşınmaz başvurusunun incelenmesi, eksik bilgi sorulması, görüşme planlanması veya dosyanın uygun olup olmadığının bildirilmesi amacıyla verdiğiniz telefon/WhatsApp numarası kullanılabilir.</p></div></article>
            <article className="articleSection"><span>02</span><div><h2>Reklam ve kampanya mesajları</h2><p>Başvurudan bağımsız reklam, kampanya, toplu tanıtım veya yeniden pazarlama mesajları gönderilecekse, uygulanabilir mevzuat uyarınca gerekli onay ve İleti Yönetim Sistemi (İYS) süreçleri ayrıca işletilmelidir. Mevcut form bu amaçla pazarlama onayı toplamaz.</p></div></article>
            <article className="articleSection"><span>03</span><div><h2>Ret hakkı</h2><p>İleride ticari elektronik ileti izni verilmiş olsa dahi, mevzuatın tanıdığı ret hakkı kolay ve ücretsiz bir yöntemle kullanılabilmelidir. Başvuruya ilişkin zorunlu işlem iletişimleri ile pazarlama mesajları birbirinden ayrılır.</p></div></article>
          </div>
          <div className="guideBack"><Link className="textLink" href="/">← Ana sayfa</Link></div>
        </div>
      </section>
    </main>
  );
}
