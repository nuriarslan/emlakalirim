import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie-Hinweise",
  description: "Informationen zu Cookies und Tracking auf Emlak Alırım.",
  robots: { index: false, follow: true },
};

export default function GermanCookiesPage() {
  return (
    <main>
      <section className="section">
        <div className="wrap narrow">
          <div className="eyebrow">COOKIES / TRACKING</div>
          <h1 className="contentPageTitle">Derzeit kein optionales Analyse- oder Werbetracking</h1>
          <p className="heroLead">Im aktuellen Anwendungscode sind weder Google Analytics noch Meta Pixel oder vergleichbare Werbe-/Verhaltensanalyse-Tools eingebunden.</p>
        </div>
      </section>
      <section className="section muted">
        <div className="wrap narrow">
          <div className="articleSections">
            <article className="articleSection"><span>01</span><div><h2>Warum kein Cookie-Banner?</h2><p>Ein Einwilligungsbanner soll eine echte Wahl ermöglichen. Solange keine einwilligungspflichtigen Analyse-, Marketing- oder Personalisierungs-Technologien eingesetzt werden, zeigen wir keinen rein dekorativen Banner.</p></div></article>
            <article className="articleSection"><span>02</span><div><h2>Technisch notwendige Verarbeitung</h2><p>Für Auslieferung, Sicherheit und Missbrauchsschutz können Hosting- und Netzwerkinfrastrukturen technisch erforderliche Verbindungsdaten verarbeiten. Solche Vorgänge dürfen nicht ohne Weiteres für Werbung oder Nutzerprofile zweckentfremdet werden.</p></div></article>
            <article className="articleSection"><span>03</span><div><h2>Externe Links</h2><p>Wenn Sie aktiv einen externen Dienst wie WhatsApp öffnen, gelten dort die Datenschutz- und Cookie-Regeln des jeweiligen Anbieters.</p></div></article>
            <article className="articleSection"><span>04</span><div><h2>Wenn später Analytics hinzukommt</h2><p>Vor der Aktivierung optionaler Tracking-Technologien muss die Website entsprechend angepasst werden: standardmäßig deaktiviert, Einwilligung vor Aktivierung und eine ebenso einfache Ablehnung bzw. Änderung der Auswahl. Diese Seite ist dann um Anbieter, Zweck und Speicherdauer zu ergänzen.</p></div></article>
          </div>
          <div className="guideBack"><Link className="textLink" href="/de">← Deutsche Startseite</Link></div>
        </div>
      </section>
    </main>
  );
}
