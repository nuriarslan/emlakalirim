import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { copy, localeHref, localeMeta, type Locale } from "@/lib/i18n";
import { guides, regions } from "@/lib/site";

export function LandingPage({ locale = "tr" }: { locale?: Locale }) {
  const c = copy[locale];
  const dir = localeMeta[locale].dir;

  return (
    <main dir={dir}>
      <section className="hero">
        <div className="wrap heroGrid">
          <div className="heroCopy">
            <div className="eyebrow">{c.eyebrow}</div>
            <h1>{c.heroTitle}<br/><span>{c.heroEmphasis}</span></h1>
            <p className="heroLead">{c.heroLead}</p>
            <div className="heroActions">
              <Link className="primaryButton" href={localeHref(locale, "#form")}>{c.finalButton} →</Link>
              <Link className="textLink" href={localeHref(locale, "#bolgeler")}>{c.nav.regions}</Link>
            </div>
            <div className="trustGrid">{c.trust.map((item:string)=><div key={item}>✓ {item}</div>)}</div>
          </div>
          <div className="heroCard" id="form">
            <div className="cardHead"><span>01</span><div><h2>{c.formTitle}</h2><p>{c.formIntro}</p></div></div>
            <LeadForm compact locale={locale} />
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="wrap">
          <div className="sectionHead"><span>NASIL ÇALIŞIR?</span><h2>{c.howTitle}</h2></div>
          <div className="steps">{c.how.map(([n,t,d]:string[])=><article key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div>
        </div>
      </section>

      <section className="section" id="bolgeler">
        <div className="wrap">
          <div className="sectionHead"><span>İSTANBUL</span><h2>{c.regionsTitle}</h2></div>
          <div className="regionGrid">
            {locale === "tr" ? regions.map((region)=><Link className="regionCard" key={region.slug} href={`/bolgeler/${region.slug}`}><h3>{region.name}</h3><p>{region.description}</p><small>{region.places.join(" • ")}</small></Link>) : c.regions.map(([name,places,desc]:string[])=><article className="regionCard" key={name}><h3>{name}</h3><p>{desc}</p><small>{places}</small></article>)}
          </div>
        </div>
      </section>

      <section className="section dark" id="yatirim-kriterleri">
        <div className="wrap twoCol">
          <div><div className="sectionHead light"><span>SEÇİCİ DEĞERLENDİRME</span><h2>{c.criteriaTitle}</h2></div><div className="pillList">{c.criteria.map((item:string)=><span key={item}>{item}</span>)}</div></div>
          <div><div className="sectionHead light"><span>SATIŞ DURUMLARI</span><h2>{c.situationsTitle}</h2></div><div className="pillList">{c.situations.map((item:string)=><span key={item}>{item}</span>)}</div></div>
        </div>
      </section>

      {locale === "tr" && <section className="section" id="rehber"><div className="wrap"><div className="sectionHead"><span>ORGANİK REHBERLER</span><h2>Satıştan önce bilmeniz gerekenler</h2></div><div className="guideGrid">{guides.map((g)=><Link className="guideCard" key={g.slug} href={`/rehber/${g.slug}`}><small>{g.eyebrow}</small><h3>{g.title}</h3><p>{g.description}</p><span>Devamını oku →</span></Link>)}</div></div></section>}

      <section className="section muted" id="faq"><div className="wrap narrow"><div className="sectionHead"><span>FAQ</span><h2>{c.faqTitle}</h2></div><div className="faqList">{c.faq.map(([q,a]:string[])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>

      <section className="section finalCta"><div className="wrap narrow"><h2>{c.finalTitle}</h2><Link className="primaryButton" href={localeHref(locale,"#form")}>{c.finalButton} →</Link></div></section>

      <section className="privacy" id="privacy"><div className="wrap narrow"><h2>{c.privacyTitle}</h2><p>{c.privacyText}</p></div></section>
    </main>
  );
}
