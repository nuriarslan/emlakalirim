import Link from "next/link";
import { localeHref, type Locale } from "@/lib/i18n";

const content = {
  tr: {
    eyebrow: "KARMAŞIK SATIŞ DURUMLARI",
    title: "Vekâlet, miras, ortak mülkiyet veya hukuki kayıt varsa yine de başvurabilirsiniz.",
    lead: "Her karmaşık dosya satın almaya uygun değildir. Ama gerçek satış niyeti, bilinen bir tapu durumu ve uygulanabilir bir devir yolu varsa önce dosyayı anlamak çoğu zaman doğru ilk adımdır.",
    cards: [
      { title: "Yurt dışı + vekâlet", text: "Türkiye dışında yaşıyorsanız ilk inceleme uzaktan başlar. Resmi işlem için vekâlet gerekirse bunun kullanılabilirliği ayrıca doğrulanır.", href: "/rehber/vekaletle-gayrimenkul-satisi" },
      { title: "Miras + intikal", text: "İntikal henüz tamamlanmamış olsa bile taşınmazın yatırım açısından ön incelemesi yapılabilir. Satış aşamasında resmi malik yapısı netleşmelidir.", href: "/rehber/yurtdisindaki-mirascilar-icin-gayrimenkul-satisi" },
      { title: "Hisseli / ortak mülkiyet", text: "Tek bir hisse veya tüm taşınmaz değerlendirilebilir. Pay oranı, diğer maliklerin yaklaşımı ve gerçek karar durumu ilk görüşmede önemlidir.", href: "/rehber/hisseli-tapu-satisi" },
      { title: "Şerh, haciz, tedbir veya dava", text: "Aktif hukuki kayıtlar otomatik ret anlamına gelmez; fakat devir yolunun hukuken netleşebilir olması gerekir. Uyuşmazlık çözümü veya dava takibi yapmıyoruz.", href: "/rehber/tapu-serh-haciz-dava-olan-gayrimenkul-satisi" },
    ],
    qualifyTitle: "Hangi dosyalar bize uygundur?",
    qualifyText: "Satma niyetiniz gerçekse, mülkü veya hissenizi tanıyorsanız ve mevcut tapu/hukuki durumu dürüstçe paylaşabiliyorsanız başvurun. Sadece aile içi anlaşmazlığı çözmek, dava yürütmek veya hukuki görüş almak istiyorsanız bu site doğru adres değildir.",
    cta: "Durumumu paylaşayım",
  },
  de: {
    eyebrow: "KOMPLEXERE VERKAUFSSITUATIONEN",
    title: "Vollmacht, Erbe, Miteigentum oder rechtliche Einträge müssen nicht automatisch das Ende sein.",
    lead: "Nicht jeder komplizierte Fall ist ankaufbar. Wenn aber ein echter Verkaufswunsch besteht und sich ein rechtlich umsetzbarer Übertragungsweg klären lässt, lohnt sich eine strukturierte Vorprüfung.",
    cards: [
      { title: "Ausland + Vollmacht", text: "Die erste Prüfung kann aus Deutschland oder einem anderen Land starten. Falls später eine Vollmacht nötig ist, muss ihre Verwendbarkeit für den konkreten Vorgang separat geprüft werden." },
      { title: "Erbe + Umschreibung", text: "Auch vor Abschluss der Umschreibung kann eine erste Einschätzung erfolgen. Für einen verbindlichen Verkauf muss die Eigentümerlage geklärt sein." },
      { title: "Miteigentum", text: "Ein einzelner Anteil oder die gesamte Immobilie kann geprüft werden. Entscheidend sind Anteil, Eigentümerstruktur und tatsächliche Verkaufsbereitschaft." },
      { title: "Vermerk, Pfändung oder Rechtsstreit", text: "Solche Einträge bedeuten nicht automatisch Ablehnung. Voraussetzung ist aber, dass sich ein rechtlich gangbarer Übertragungsweg feststellen lässt. Wir übernehmen keine Prozessvertretung." },
    ],
    qualifyTitle: "Wann lohnt sich eine Anfrage?",
    qualifyText: "Wenn Sie wirklich verkaufen möchten, die Immobilie bzw. Ihren Anteil kennen und die aktuelle Grundbuch- oder Rechtssituation offen benennen können. Für reine Streitbeilegung oder Rechtsberatung sind wir nicht der richtige Ansprechpartner.",
    cta: "Situation prüfen lassen",
  },
  en: {
    eyebrow: "COMPLEX SALE SITUATIONS",
    title: "Power of attorney, inheritance, co-ownership or legal entries do not always end the conversation.",
    lead: "Not every complex file is suitable for acquisition. But where there is genuine intent to sell and a workable transfer path can be established, an initial review can still be worthwhile.",
    cards: [
      { title: "Abroad + power of attorney", text: "The initial review can start remotely. If a power of attorney is later needed, its suitability for the specific transaction must be checked separately." },
      { title: "Inheritance + transfer", text: "A preliminary review may start before inheritance registration is complete, but ownership must be clear before a binding sale." },
      { title: "Shared ownership", text: "A single share or the whole property can be reviewed. The key issues are share ratio, owner structure and real decision readiness." },
      { title: "Lien, annotation or dispute", text: "Legal entries do not automatically mean rejection, but a legally workable transfer route must be identifiable. We do not provide litigation services." },
    ],
    qualifyTitle: "When should you contact us?",
    qualifyText: "If you genuinely intend to sell, know the property or your share, and can describe the current title or legal situation accurately. We are not a law firm and do not resolve family disputes or conduct litigation.",
    cta: "Share my situation",
  },
  ru: {
    eyebrow: "СЛОЖНЫЕ СИТУАЦИИ ПРИ ПРОДАЖЕ",
    title: "Доверенность, наследство, долевая собственность или юридические записи не всегда исключают сделку.",
    lead: "Не каждый сложный объект подходит для покупки. Но при реальном намерении продать и понятном пути передачи права собственности предварительная проверка может иметь смысл.",
    cards: [
      { title: "За границей + доверенность", text: "Первичная проверка может начаться дистанционно. Если для сделки понадобится доверенность, её пригодность для конкретной операции проверяется отдельно." },
      { title: "Наследство", text: "Предварительная оценка возможна до завершения оформления наследства, но к моменту сделки структура собственности должна быть ясна." },
      { title: "Долевая собственность", text: "Можно рассмотреть отдельную долю или объект целиком. Важны размер доли, структура собственников и реальная готовность к продаже." },
      { title: "Обременение или спор", text: "Наличие записи не означает автоматический отказ, однако должен существовать юридически возможный путь передачи права. Мы не ведём судебные дела." },
    ],
    qualifyTitle: "Когда стоит обратиться?",
    qualifyText: "Если вы действительно хотите продать и можете честно описать текущую ситуацию с Tapu и собственниками. Для судебного представительства или разрешения семейного конфликта мы не подходим.",
    cta: "Описать ситуацию",
  },
  ar: {
    eyebrow: "حالات بيع أكثر تعقيداً",
    title: "الوكالة أو الإرث أو الملكية المشتركة أو القيود القانونية لا تعني دائماً استبعاد العقار.",
    lead: "ليست كل حالة معقدة مناسبة للشراء. لكن إذا كانت هناك نية بيع حقيقية ويمكن تحديد طريق قانوني قابل للتنفيذ لنقل الملكية، فقد يكون التقييم الأولي مفيداً.",
    cards: [
      { title: "خارج تركيا + وكالة", text: "يمكن أن يبدأ التقييم عن بُعد. وإذا لزم استخدام وكالة في المرحلة الرسمية فيجب التحقق من صلاحيتها للعملية المحددة." },
      { title: "إرث + نقل ملكية", text: "يمكن بدء التقييم قبل اكتمال نقل الإرث، لكن يجب أن تصبح الملكية واضحة قبل البيع الملزم." },
      { title: "ملكية مشتركة", text: "يمكن تقييم حصة واحدة أو العقار بالكامل. المهم هو نسبة الحصة وهيكل الملاك والاستعداد الحقيقي للبيع." },
      { title: "حجز أو قيد أو نزاع", text: "وجود قيد قانوني لا يعني الرفض تلقائياً، لكن يجب أن يكون هناك مسار قانوني واضح لنقل الملكية. نحن لا نقدم خدمات التقاضي." },
    ],
    qualifyTitle: "متى يكون التواصل مناسباً؟",
    qualifyText: "إذا كانت لديك نية حقيقية للبيع ويمكنك شرح وضع الملكية أو السجل القانوني بوضوح. نحن لسنا مكتب محاماة ولا نتولى حل النزاعات العائلية أو القضايا القضائية.",
    cta: "أرسل وضعي",
  },
} as const;

export function ComplexSaleCases({ locale }: { locale: Locale }) {
  const t = content[locale];
  return (
    <section className="section muted">
      <div className="wrap">
        <div className="sectionHead wideHead">
          <span>{t.eyebrow}</span>
          <h2>{t.title}</h2>
          <p>{t.lead}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 18 }}>
          {t.cards.map((card) => {
            const body = <><small>{t.eyebrow}</small><h3>{card.title}</h3><p>{card.text}</p>{locale === "tr" && "href" in card ? <span>Detayları oku →</span> : null}</>;
            return locale === "tr" && "href" in card ? <Link className="guideCard" key={card.title} href={card.href}>{body}</Link> : <article className="guideCard" key={card.title}>{body}</article>;
          })}
        </div>
        <div className="heroCard" style={{ marginTop: 24 }}>
          <div className="sectionHead"><span>LEAD FİLTRESİ</span><h2>{t.qualifyTitle}</h2><p>{t.qualifyText}</p></div>
          <Link className="primaryButton" href={localeHref(locale, "#form")}>{t.cta} →</Link>
        </div>
      </div>
    </section>
  );
}
