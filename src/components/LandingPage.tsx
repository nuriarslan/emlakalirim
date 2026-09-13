import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { copy, localeHref, localeMeta, type Locale } from "@/lib/i18n";
import { guides, regions } from "@/lib/site";
import { regionVisuals, visuals } from "@/lib/visuals";

const featured = [
  { name: "Beykoz", note: "Boğaz • yeşil doku • seçili mülkler", image: visuals.hero, href: "/bolgeler/beykoz" },
  { name: "Riva", note: "Kıyı • villa • arsa", image: visuals.riva, href: "/bolgeler/riva" },
  { name: "Şile", note: "Karadeniz • arsa • ikinci konut", image: visuals.sile, href: "/bolgeler/sile" },
];

export function LandingPage({ locale = "tr" }: { locale?: Locale }) {
  const c = copy[locale];
  const dir = localeMeta[locale].dir;

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

      <section className="section muted softSection">
        <div className="wrap">
          <div className="sectionHead"><span>NASIL ÇALIŞIR?</span><h2>{c.howTitle}</h2></div>
          <div className="steps">{c.how.map(([n,t,d]:string[])=><article key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div>
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

      <section className="section dark imageDarkSection" id="yatirim-kriterleri">
        <div className="imageDarkBackdrop" style={{backgroundImage:`url(${visuals.land})`}} />
        <div className="wrap twoCol darkContent">
          <div><div className="sectionHead light"><span>SEÇİCİ DEĞERLENDİRME</span><h2>{c.criteriaTitle}</h2></div><div className="pillList">{c.criteria.map((item:string)=><span key={item}>{item}</span>)}</div></div>
          <div><div className="sectionHead light"><span>SATIŞ DURUMLARI</span><h2>{c.situationsTitle}</h2></div><div className="pillList">{c.situations.map((item:string)=><span key={item}>{item}</span>)}</div></div>
        </div>
      </section>

      {locale === "tr" && <section className="section guideSection" id="rehber"><div className="wrap"><div className="sectionHead"><span>ORGANİK REHBERLER</span><h2>Satıştan önce bilmeniz gerekenler</h2></div><div className="guideGrid">{guides.map((g)=><Link className="guideCard" key={g.slug} href={`/rehber/${g.slug}`}><small>{g.eyebrow}</small><h3>{g.title}</h3><p>{g.description}</p><span>Devamını oku →</span></Link>)}</div></div></section>}

      <section className="section muted" id="faq"><div className="wrap narrow"><div className="sectionHead"><span>FAQ</span><h2>{c.faqTitle}</h2></div><div className="faqList">{c.faq.map(([q,a]:string[])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>

      <section className="section finalCta finalCtaPhoto" style={{backgroundImage:`url(${visuals.agva})`}}><div className="finalCtaShade"/><div className="wrap narrow finalCtaContent"><span className="eyebrow">GİZLİ • BAĞLAYICI DEĞİL</span><h2>{c.finalTitle}</h2><Link className="primaryButton primaryLight" href={localeHref(locale,"#form")}>{c.finalButton} →</Link></div></section>

      <section className="privacy" id="privacy"><div className="wrap narrow"><h2>{c.privacyTitle}</h2><p>{c.privacyText}</p></div></section>
    </main>
  );
}
