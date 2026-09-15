import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nutzungsbedingungen",
  description: "Hinweise zur unverbindlichen Immobilien-Vorprüfung bei Emlak Alırım.",
  robots: { index: false, follow: true },
};

export default function GermanTermsPage() {
  return (
    <main>
      <section className="section"><div className="wrap narrow"><div className="eyebrow">NUTZUNGSBEDINGUNGEN</div><h1 className="contentPageTitle">Unverbindliche Vorprüfung – kein Kaufvertrag</h1><p className="heroLead">Die Website dient der ersten Prüfung, ob eine Immobilie grundsätzlich zu den Ankaufskriterien passen kann.</p></div></section>
      <section className="section muted"><div className="wrap narrow"><div className="articleSections">
        <article className="articleSection"><span>01</span><div><h2>Keine verbindliche Zusage</h2><p>Formular, WhatsApp-Nachricht oder Vorprüfung begründen weder eine Kaufzusage noch einen Grundstückskaufvertrag, Maklervertrag, Alleinauftrag, Vollmacht oder eine Reservierungs-/Anzahlungsvereinbarung.</p></div></article>
        <article className="articleSection"><span>02</span><div><h2>Prüfung der Angaben</h2><p>Erste Einschätzungen beruhen auf Ihren Angaben. Tapu/Grundbuch, Eigentümerstruktur, Planung/Baurecht, Belastungen und tatsächlicher Objektzustand können vor einem weiteren Schritt separat geprüft werden.</p></div></article>
        <article className="articleSection"><span>03</span><div><h2>Keine Rechts- oder Steuerberatung</h2><p>Informationen zu Erbe, Vollmacht, Miteigentum, Pfändung, Vermerken, Verfahren, Steuern oder Planung dienen nur der allgemeinen Verkaufsorientierung und ersetzen keine individuelle Rechts-, Steuer- oder Fachberatung.</p></div></article>
        <article className="articleSection"><span>04</span><div><h2>Direktankauf und Maklertätigkeit</h2><p>Die Vorprüfung ist als investorenbezogene Prüfung für einen möglichen Ankauf gedacht. Sollten künftig Vermittlungs- oder Maklerleistungen für Dritte angeboten werden, gelten dafür gesonderte gesetzliche Zulassungs- und Vertragsanforderungen.</p></div></article>
      </div><div className="guideBack"><Link className="textLink" href="/de">← Deutsche Startseite</Link></div></div></section>
    </main>
  );
}
