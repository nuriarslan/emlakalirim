import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kommunikationspräferenzen",
  description: "Hinweise zur Kontaktaufnahme und zu Werbenachrichten bei Emlak Alırım.",
  robots: { index: false, follow: true },
};

export default function GermanCommunicationPage() {
  return (
    <main>
      <section className="section"><div className="wrap narrow"><div className="eyebrow">KONTAKT & WERBUNG</div><h1 className="contentPageTitle">Ihre Immobilienanfrage ist keine Werbeeinwilligung</h1><p className="heroLead">Wenn Sie uns wegen einer Immobilie kontaktieren, verwenden wir Ihre Kontaktdaten zur Bearbeitung dieser Anfrage. Das ist getrennt von Newsletter-, Kampagnen- oder sonstiger dauerhafter Direktwerbung.</p></div></section>
      <section className="section muted"><div className="wrap narrow"><div className="articleSections">
        <article className="articleSection"><span>01</span><div><h2>Antwort auf Ihre Anfrage</h2><p>Wir dürfen Sie zur von Ihnen angestoßenen Vorprüfung kontaktieren, Rückfragen stellen und Ihnen mitteilen, ob ein weiterer Austausch sinnvoll ist.</p></div></article>
        <article className="articleSection"><span>02</span><div><h2>Keine automatische Marketingfreigabe</h2><p>Das Formular enthält bewusst keine vorangekreuzte oder gekoppelte Werbeeinwilligung. Werbliche Seriennachrichten würden – soweit rechtlich erforderlich – eine gesonderte Einwilligung und eine einfache Abmeldemöglichkeit voraussetzen.</p></div></article>
        <article className="articleSection"><span>03</span><div><h2>WhatsApp</h2><p>Wenn Sie WhatsApp aktiv öffnen und dort eine Nachricht senden, nutzen Sie einen Dienst eines externen Anbieters. Für diese Nutzung gelten zusätzlich dessen Datenschutzbedingungen.</p></div></article>
      </div><div className="guideBack"><Link className="textLink" href="/de">← Deutsche Startseite</Link></div></div></section>
    </main>
  );
}
