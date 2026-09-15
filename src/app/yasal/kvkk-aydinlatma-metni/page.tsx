import type { Metadata } from "next";
import Link from "next/link";
import { legalIdentity } from "@/lib/legal";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: "Emlak Alırım kişisel veri işleme aydınlatma metni.",
  robots: { index: false, follow: true },
};

export default function KvkkNoticePage() {
  return (
    <main>
      <section className="section">
        <div className="wrap narrow">
          <div className="eyebrow">KVKK AYDINLATMA METNİ</div>
          <h1 className="contentPageTitle">Kişisel verilerin işlenmesine ilişkin aydınlatma</h1>
          <p className="heroLead">6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında, bu sitedeki ön değerlendirme formu ve iletişim kanalları üzerinden paylaştığınız kişisel veriler hakkında aşağıdaki bilgileri sunuyoruz.</p>
        </div>
      </section>

      <section className="section muted">
        <div className="wrap narrow">
          <div className="articleSections">
            <article className="articleSection"><span>01</span><div><h2>Veri sorumlusu</h2><p>Veri sorumlusu: <strong>{legalIdentity.operatorName}</strong>. Güncel adres, e-posta, telefon, vergi/ticaret sicili ve varsa KEP bilgileri <Link href="/yasal/iletisim">İletişim ve Yasal Bilgiler</Link> sayfasında yayımlanır.</p></div></article>

            <article className="articleSection"><span>02</span><div><h2>Hangi verileri işliyoruz?</h2><p>Formu kullanmanız halinde ad-soyad, telefon/WhatsApp numarası, taşınmazın bölgesi, türü, yaklaşık büyüklüğü, ada/parsel bilgisi, fiyat beklentisi, tapu ve imar durumu, satış zamanlaması, malik/karar durumu, belirttiğiniz özel satış durumu ve serbest metin alanına yazdığınız bilgiler işlenebilir. Site güvenliği ve teknik işletim kapsamında IP adresi, istek zamanı ve benzeri bağlantı kayıtları barındırma altyapısında işlenebilir.</p><p>Lütfen T.C. kimlik numarası, pasaport, banka/kredi kartı bilgisi, sağlık verisi veya gerekmeyen başka hassas kişisel verileri ilk başvuruda göndermeyin.</p></div></article>

            <article className="articleSection"><span>03</span><div><h2>İşleme amaçları</h2><p>Veriler; taşınmazın yatırım/ön alım kriterlerine uygunluğunu değerlendirmek, sizinle başvurunuz hakkında iletişim kurmak, gerekli görülürse ek bilgi istemek, sahte/spam başvuruları önlemek, bilgi güvenliğini sağlamak, işlem öncesi hazırlık yapmak ve hukuki yükümlülükleri yerine getirmek amacıyla işlenir.</p></div></article>

            <article className="articleSection"><span>04</span><div><h2>Hukuki sebepler</h2><p>Kişisel veriler, KVKK’da yer alan sözleşmenin kurulması veya ifasıyla doğrudan ilgili olma, veri sorumlusunun hukuki yükümlülüğünü yerine getirmesi, bir hakkın tesisi/kullanılması/korunması ve ilgili kişinin temel haklarına zarar vermemek kaydıyla veri sorumlusunun meşru menfaati gibi uygulanabilir işleme şartlarına dayanılarak işlenebilir. Açık rızaya dayanılması gereken ayrı bir faaliyet varsa rıza ayrıca ve özgürce alınır.</p><p>Formdaki “aydınlatma metnini okudum” kutusu pazarlama izni veya genel açık rıza değildir; yalnızca bilgilendirmenin size sunulduğunu teyit eder.</p></div></article>

            <article className="articleSection"><span>05</span><div><h2>Kimlerle paylaşılabilir?</h2><p>Veriler, yalnızca amaçla sınırlı olmak üzere site işletmecisinin yetkili kişileri, barındırma/BT hizmet sağlayıcıları, başvuru aktarım altyapısı sağlayıcıları ve gerektiğinde hukuken yetkili kamu kurumları veya bağımsız profesyonel danışmanlarla paylaşılabilir. Bir taşınmaz dosyasının ilerlemesi halinde tapu, hukuk veya teknik inceleme için ayrıca bilgi ve belge talep edilmeden önce kapsam açıklanır.</p></div></article>

            <article className="articleSection"><span>06</span><div><h2>Yurt dışına veri aktarımı</h2><p>Site Vercel altyapısında barındırılmaktadır. Bu nedenle teknik bağlantı verileri ve sunucu tarafında işlenen başvuru verileri yurt dışındaki altyapıda işlenebilir. Yurt dışına kişisel veri aktarımı için KVKK’nın 9. maddesindeki yeterlilik kararı, uygun güvence (örneğin Kurul tarafından yayımlanan standart sözleşme) veya kanunda öngörülen sınırlı istisnalardan uygulanabilir olanın sağlanması gerekir. Kullanılan ek webhook/CRM sağlayıcısı yurt dışındaysa aynı değerlendirme ayrıca yapılır.</p></div></article>

            <article className="articleSection"><span>07</span><div><h2>Saklama süresi</h2><p>Başvuru verileri değerlendirme ve olası işlem ihtiyacı devam ettiği sürece; devam etmeyen başvurular ise uyuşmazlık, ispat ve hukuki yükümlülük ihtiyaçlarıyla ölçülü bir süre saklanır ve sonrasında silinir, yok edilir veya anonim hale getirilir. İşletmeci somut saklama sürelerini kullandığı sistemlere göre iç saklama/imha planında belirler.</p></div></article>

            <article className="articleSection"><span>08</span><div><h2>KVKK kapsamındaki haklarınız</h2><p>KVKK’nın 11. maddesi kapsamındaki şartlarla; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi isteme, amacına uygun kullanılıp kullanılmadığını öğrenme, aktarıldığı üçüncü kişileri bilme, eksik/yanlış verilerin düzeltilmesini isteme, silme/yok etme talep etme, düzeltme/silmenin aktarılan üçüncü kişilere bildirilmesini isteme, münhasıran otomatik sistemler sonucunda aleyhinize bir sonuca itiraz etme ve kanuna aykırı işleme nedeniyle zararın giderilmesini talep etme haklarına sahipsiniz.</p><p>Başvurularınızı <Link href="/yasal/iletisim">iletişim sayfasındaki</Link> güncel veri sorumlusu kanallarından iletebilirsiniz.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow">
          <div className="sectionHead"><span>INTERNATIONAL USERS</span><h2>Short privacy summary</h2><p>If you use the German, English, Russian or Arabic version, your contact and property information is used to review your property and reply to your request. Do not send ID, passport, bank or sensitive personal information in the first message. The site is hosted on Vercel infrastructure outside Türkiye, so cross-border data-transfer requirements under Turkish KVKK must be observed by the operator.</p></div>
          <div className="guideBack"><Link className="textLink" href="/">← Ana sayfa</Link></div>
        </div>
      </section>
    </main>
  );
}
