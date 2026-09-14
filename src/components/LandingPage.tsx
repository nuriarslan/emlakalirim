import Link from "next/link";
import { ComplexSaleCases } from "@/components/ComplexSaleCases";
import { LeadForm } from "@/components/LeadForm";
import { copy, localeHref, localeMeta, type Locale } from "@/lib/i18n";
import { leadGuides } from "@/lib/lead-guides";
import { guides, regions } from "@/lib/site";
import { regionVisuals, visuals } from "@/lib/visuals";

const allGuides = [...leadGuides, ...guides];

const featured = [
  { name: "Beykoz", note: "Boğaz • yeşil doku • seçili mülkler", image: visuals.hero, href: "/bolgeler/beykoz" },
  { name: "Riva", note: "Kıyı • villa • arsa", image: visuals.riva, href: "/bolgeler/riva" },
  { name: "Şile", note: "Karadeniz • arsa • ikinci konut", image: visuals.sile, href: "/bolgeler/sile" },
];

const extra = {
  tr: {
    introEyebrow: "SATIŞ KARARI ÖNCESİ",
    introTitle: "Her mülk için aynı satış yolu doğru değildir.",
    introLead: "Bazı sahipler açık ilan yerine önce doğrudan ve gizli bir değerlendirme ister. Özellikle arsa, villa, eski yapı, miras veya hisseli tapu gibi dosyalarda önce yapıyı anlamak daha sağlıklıdır.",
    cards: [
      ["İlan vermeden başlayın", "Mülkünüzü önce açık piyasaya çıkarmadan, temel bilgilerle ön değerlendirmeye gönderebilirsiniz."],
      ["Miras ve hisseli tapu", "Malik yapısı, pay oranı ve tapu niteliği birlikte incelenir. Karmaşık dosyaları baştan elemek yerine önce anlamaya çalışırız."],
      ["Yurt dışından satış", "Türkiye dışında yaşıyorsanız ilk görüşme, belge paylaşımı ve ön inceleme uzaktan başlayabilir."],
    ],
    typesEyebrow: "NELERİ İNCELİYORUZ?",
    typesTitle: "Sadece kusursuz gayrimenkuller değil, doğru potansiyeli olan dosyalar.",
    types: ["Arsa ve büyük parsel", "Villa ve müstakil ev", "Eski bina / güçlü arsa payı", "Hisseli tapu", "Miras kalan gayrimenkul", "Boş veya yenileme isteyen mülk"],
    abroadEyebrow: "YURT DIŞINDAKİ MALİKLER",
    abroadTitle: "İstanbul’daki mülkünüz için Türkiye’ye gelmeden ilk adımı atın.",
    abroadText: "Almanya, Avrupa, Rusya, Körfez ülkeleri veya başka bir ülkede yaşıyorsanız konum, tapu ve temel mülk bilgilerini paylaşmanız ilk değerlendirme için yeterlidir. Uygun bulunursa sonraki adımlar ve gerekli belgeler birlikte netleştirilir.",
    waTitle: "Kısa bilgiyle başlamak ister misiniz?",
    waText: "Mahalle, mülk tipi ve yaklaşık m² bilgisini WhatsApp üzerinden gönderin. Uygunsa detayları oradan devam ettirebiliriz.",
    waButton: "WhatsApp’tan yazın",
  },
  de: {
    introEyebrow: "VOR DER VERKAUFSENTSCHEIDUNG",
    introTitle: "Nicht jede Immobilie braucht denselben Verkaufsweg.",
    introLead: "Viele Eigentümer möchten zunächst eine diskrete Direktprüfung, bevor sie öffentlich inserieren. Besonders bei Grundstücken, Villen, älteren Gebäuden, Erbschaften oder Miteigentum lohnt sich eine strukturierte Vorprüfung.",
    cards: [
      ["Ohne öffentliches Inserat starten", "Sie können Lage und Eckdaten zunächst vertraulich übermitteln, ohne die Immobilie öffentlich anzubieten."],
      ["Erbe und Miteigentum", "Eigentümerstruktur, Anteile und Grundbuchsituation werden gemeinsam betrachtet."],
      ["Verkauf aus dem Ausland", "Wenn Sie in Deutschland oder anderswo leben, kann die erste Prüfung vollständig aus der Ferne beginnen."],
    ],
    typesEyebrow: "WAS WIR PRÜFEN",
    typesTitle: "Nicht nur perfekte Objekte – sondern Immobilien mit nachvollziehbarem Potenzial.",
    types: ["Grundstücke und größere Parzellen", "Villen und Einfamilienhäuser", "Ältere Gebäude mit Grundstückswert", "Miteigentum", "Geerbte Immobilien", "Leerstehende oder renovierungsbedürftige Objekte"],
    abroadEyebrow: "EIGENTÜMER IM AUSLAND",
    abroadTitle: "Starten Sie die Prüfung Ihrer Immobilie in Istanbul, ohne zunächst anzureisen.",
    abroadText: "Standort, Grundbuchdaten und die wichtigsten Eckdaten reichen für den Anfang. Wenn das Objekt zu unseren Kriterien passt, stimmen wir die nächsten Schritte direkt mit Ihnen ab.",
    waTitle: "Lieber kurz per WhatsApp starten?",
    waText: "Schicken Sie Stadtteil, Objektart und ungefähre Größe. Wenn es grundsätzlich passt, können wir die Details dort besprechen.",
    waButton: "Per WhatsApp schreiben",
  },
  en: {
    introEyebrow: "BEFORE YOU LIST",
    introTitle: "Not every property needs the same sales process.",
    introLead: "Some owners prefer a private direct review before going to the open market. This can be especially useful for land, villas, older buildings, inherited property or shared ownership.",
    cards: [
      ["Start without a public listing", "Share the basic facts privately before deciding whether a public listing makes sense."],
      ["Inheritance and shared title", "Ownership structure, shares and title details can be reviewed together."],
      ["Sell from abroad", "If you live outside Turkey, the initial review can start remotely."],
    ],
    typesEyebrow: "WHAT WE REVIEW",
    typesTitle: "Not only perfect properties, but opportunities with clear underlying potential.",
    types: ["Land and larger plots", "Villas and detached homes", "Older buildings with land value", "Shared-title property", "Inherited real estate", "Vacant or renovation properties"],
    abroadEyebrow: "OWNERS ABROAD",
    abroadTitle: "Start reviewing your Istanbul property without travelling first.",
    abroadText: "Location, title information and key property facts are enough to begin. If the property matches our criteria, the next steps can be coordinated directly with you.",
    waTitle: "Prefer to start on WhatsApp?",
    waText: "Send the area, property type and approximate size. If it is potentially relevant, we can continue there.",
    waButton: "Message on WhatsApp",
  },
  ru: {
    introEyebrow: "ПЕРЕД ПРОДАЖЕЙ",
    introTitle: "Не каждому объекту нужен одинаковый способ продажи.",
    introLead: "Многие собственники сначала хотят конфиденциальную оценку без публичного объявления. Это особенно актуально для земли, вилл, старых зданий, наследства и долевой собственности.",
    cards: [
      ["Начните без объявления", "Можно сначала отправить основные данные объекта конфиденциально."],
      ["Наследство и долевая собственность", "Структура собственников, доли и данные Tapu рассматриваются вместе."],
      ["Продажа из-за границы", "Если вы живёте за пределами Турции, первичная оценка может начаться дистанционно."],
    ],
    typesEyebrow: "ЧТО МЫ РАССМАТРИВАЕМ",
    typesTitle: "Не только идеальные объекты, но и недвижимость с понятным потенциалом.",
    types: ["Земля и крупные участки", "Виллы и отдельные дома", "Старые здания с ценностью земли", "Долевая собственность", "Наследственная недвижимость", "Пустующие объекты и ремонт"],
    abroadEyebrow: "СОБСТВЕННИКИ ЗА РУБЕЖОМ",
    abroadTitle: "Начните оценку недвижимости в Стамбуле без поездки в Турцию.",
    abroadText: "Для начала достаточно района, данных Tapu и основных характеристик. Если объект подходит по критериям, следующие шаги можно согласовать дистанционно.",
    waTitle: "Удобнее начать в WhatsApp?",
    waText: "Отправьте район, тип объекта и примерную площадь. Если объект подходит, продолжим обсуждение там.",
    waButton: "Написать в WhatsApp",
  },
  ar: {
    introEyebrow: "قبل قرار البيع",
    introTitle: "ليست كل العقارات بحاجة إلى نفس طريقة البيع.",
    introLead: "يفضل بعض الملاك إجراء تقييم مباشر وسري قبل عرض العقار بشكل علني، خاصة للأراضي والفلل والمباني القديمة والميراث والملكية المشتركة.",
    cards: [
      ["ابدأ دون إعلان عام", "يمكنك إرسال الموقع والمعلومات الأساسية بشكل سري أولاً."],
      ["الميراث والملكية المشتركة", "نراجع هيكل الملكية ونسب الحصص وبيانات سند الملكية معاً."],
      ["البيع من خارج تركيا", "إذا كنت تعيش خارج تركيا، يمكن أن يبدأ التقييم الأولي عن بُعد."],
    ],
    typesEyebrow: "ما الذي نراجعه؟",
    typesTitle: "ليست العقارات المثالية فقط، بل أيضاً العقارات ذات الإمكانات الواضحة.",
    types: ["الأراضي والقطع الكبيرة", "الفلل والمنازل المستقلة", "المباني القديمة ذات قيمة الأرض", "الملكية المشتركة", "العقارات الموروثة", "العقارات الخالية أو المحتاجة للتجديد"],
    abroadEyebrow: "الملاك خارج تركيا",
    abroadTitle: "ابدأ تقييم عقارك في إسطنبول دون الحاجة إلى السفر أولاً.",
    abroadText: "يكفي في البداية إرسال الموقع وبيانات سند الملكية والمعلومات الأساسية. وإذا كان العقار مناسباً لمعاييرنا يمكن تنسيق الخطوات التالية مباشرة معك.",
    waTitle: "هل تفضل البدء عبر واتساب؟",
    waText: "أرسل المنطقة ونوع العقار والمساحة التقريبية، وإذا كان مناسباً نكمل التفاصيل عبر واتساب.",
    waButton: "تواصل عبر واتساب",
  },
} as const;

export function LandingPage({ locale = "tr" }: { locale?: Locale }) {
  const c = copy[locale];
  const x = extra[locale];
  const dir = localeMeta[locale].dir;
  const phone = (process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "").replace(/\D/g, "");
  const whatsappHref = phone
    ? `https://wa.me/${phone}?text=${encodeURIComponent(locale === "tr" ? "Merhaba, İstanbul'daki gayrimenkulüm için ön değerlendirme almak istiyorum." : x.waText)}`
    : localeHref(locale, "#form");

  return (
    <main dir={dir}>
      <section className="hero heroPhoto" style={{ backgroundImage: `url(${visuals.hero})` }}>
        <div className="heroOverlay" />
        <div className="wrap heroGrid heroGridPhoto">
          <div className="heroCopy heroCopyPhoto">
            <div className="heroBadge">İSTANBUL • DOĞRUDAN ÖN DEĞERLENDİRME</div>
            <div className="eyebrow">{c.eyebrow}</div>
            <h1>{c.heroTitle}<br/><span>{c.heroEmphasis}</span></h1>
            <p className="heroLead">{c.heroLead}</p>
            <div className="heroActions">
              <Link className="primaryButton primaryLight" href={localeHref(locale, "#form")}>{c.finalButton} →</Link>
              <Link className="ghostButton" href={localeHref(locale, "#bolgeler")}>{c.nav.regions}</Link>
            </div>
            <div className="trustGrid trustGridPhoto">{c.trust.map((item:string)=><div key={item}><span>✓</span>{item}</div>)}</div>
          </div>
          <div className="heroCard heroCardGlass" id="form">
            <div className="cardHead"><span>01</span><div><h2>{c.formTitle}</h2><p>{c.formIntro}</p></div></div>
            <LeadForm compact locale={locale} />
          </div>
        </div>
      </section>

      <section className="visualBand">
        <div className="wrap visualBandGrid">
          {featured.map((item) => {
            const content = <>
              <div className="visualCardShade" />
              <div className="visualCardText"><small>İSTANBUL</small><h3>{item.name}</h3><p>{item.note}</p><span>Keşfet →</span></div>
            </>;
            return locale === "tr" ? (
              <Link key={item.name} className="visualCard" href={item.href} style={{ backgroundImage: `url(${item.image})` }}>{content}</Link>
            ) : (
              <article key={item.name} className="visualCard" style={{ backgroundImage: `url(${item.image})` }}>{content}</article>
            );
          })}
        </div>
      </section>

      <section className="section sellerIntro">
        <div className="wrap">
          <div className="sectionHead wideHead"><span>{x.introEyebrow}</span><h2>{x.introTitle}</h2><p>{x.introLead}</p></div>
          <div className="sellerCards">{x.cards.map(([title,text])=><article key={title}><div className="sellerIcon">✓</div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section muted softSection">
        <div className="wrap">
          <div className="sectionHead"><span>NASIL ÇALIŞIR?</span><h2>{c.howTitle}</h2></div>
          <div className="steps">{c.how.map(([n,t,d]:string[])=><article key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div>
        </div>
      </section>

      <section className="section propertyTypes">
        <div className="wrap">
          <div className="sectionHead wideHead"><span>{x.typesEyebrow}</span><h2>{x.typesTitle}</h2></div>
          <div className="typeGrid">{x.types.map((item,index)=><article key={item}><span>0{index+1}</span><h3>{item}</h3></article>)}</div>
        </div>
      </section>

      <section className="section" id="bolgeler">
        <div className="wrap">
          <div className="sectionHead regionSectionHead"><div><span>İSTANBUL</span><h2>{c.regionsTitle}</h2></div><p>Her bölgeyi aynı gözle değerlendirmiyoruz. Konum, tapu, imar, erişim, yapı kalitesi ve gerçek satış kabiliyeti birlikte ele alınır.</p></div>
          <div className="regionGrid regionImageGrid">
            {locale === "tr" ? regions.map((region)=><Link className="regionCard regionImageCard" key={region.slug} href={`/bolgeler/${region.slug}`} style={{backgroundImage:`url(${regionVisuals[region.slug] || visuals.land})`}}><div className="regionShade"/><div className="regionContent"><small>{region.places.join(" • ")}</small><h3>{region.name}</h3><p>{region.description}</p><span>Detayları gör →</span></div></Link>) : c.regions.map(([name,places,desc]:string[], index:number)=><article className="regionCard regionImageCard" key={name} style={{backgroundImage:`url(${[visuals.hero, visuals.sile, visuals.land][index % 3]})`}}><div className="regionShade"/><div className="regionContent"><small>{places}</small><h3>{name}</h3><p>{desc}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="section abroadSection">
        <div className="wrap abroadGrid">
          <div className="abroadPhoto" style={{backgroundImage:`url(${visuals.agva})`}}><span>{x.abroadEyebrow}</span></div>
          <div className="abroadCopy"><div className="eyebrow">{x.abroadEyebrow}</div><h2>{x.abroadTitle}</h2><p>{x.abroadText}</p><Link className="primaryButton" href={localeHref(locale,"#form")}>{c.finalButton} →</Link></div>
        </div>
      </section>

      <ComplexSaleCases locale={locale} />

      <section className="section dark imageDarkSection" id="yatirim-kriterleri">
        <div className="imageDarkBackdrop" style={{backgroundImage:`url(${visuals.land})`}} />
        <div className="wrap twoCol darkContent">
          <div><div className="sectionHead light"><span>SEÇİCİ DEĞERLENDİRME</span><h2>{c.criteriaTitle}</h2></div><div className="pillList">{c.criteria.map((item:string)=><span key={item}>{item}</span>)}</div></div>
          <div><div className="sectionHead light"><span>SATIŞ DURUMLARI</span><h2>{c.situationsTitle}</h2></div><div className="pillList">{c.situations.map((item:string)=><span key={item}>{item}</span>)}</div></div>
        </div>
      </section>

      <section className="whatsappSection">
        <div className="wrap whatsappPanel">
          <div><span className="eyebrow">WHATSAPP</span><h2>{x.waTitle}</h2><p>{x.waText}</p></div>
          <a className="whatsappLarge" href={whatsappHref} target={phone ? "_blank" : undefined} rel={phone ? "noopener noreferrer" : undefined}>
            <span className="waDot">●</span>{x.waButton} →
          </a>
        </div>
      </section>

      {locale === "tr" && <section className="section guideSection" id="rehber"><div className="wrap"><div className="sectionHead"><span>ORGANİK REHBERLER</span><h2>Satıştan önce bilmeniz gerekenler</h2></div><div className="guideGrid">{allGuides.map((g)=><Link className="guideCard" key={g.slug} href={`/rehber/${g.slug}`}><small>{g.eyebrow}</small><h3>{g.title}</h3><p>{g.description}</p><span>Devamını oku →</span></Link>)}</div></div></section>}

      <section className="section muted" id="faq"><div className="wrap narrow"><div className="sectionHead"><span>FAQ</span><h2>{c.faqTitle}</h2></div><div className="faqList">{c.faq.map(([q,a]:string[])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>

      <section className="section finalCta finalCtaPhoto" style={{backgroundImage:`url(${visuals.agva})`}}><div className="finalCtaShade"/><div className="wrap narrow finalCtaContent"><span className="eyebrow">GİZLİ • BAĞLAYICI DEĞİL</span><h2>{c.finalTitle}</h2><Link className="primaryButton primaryLight" href={localeHref(locale,"#form")}>{c.finalButton} →</Link></div></section>

      <section className="privacy" id="privacy"><div className="wrap narrow"><h2>{c.privacyTitle}</h2><p>{c.privacyText}</p></div></section>
    </main>
  );
}
