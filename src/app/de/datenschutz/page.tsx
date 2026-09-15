import type { Metadata } from "next";
import Link from "next/link";
import { legalIdentity } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzhinweise für deutschsprachige Nutzer von Emlak Alırım.",
  robots: { index: false, follow: true },
};

export default function GermanPrivacyPage() {
  return (
    <main>
      <section className="section">
        <div className="wrap narrow">
          <div className="eyebrow">DATENSCHUTZ</div>
          <h1 className="contentPageTitle">Datenschutzhinweise für Eigentümer im Ausland</h1>
          <p className="heroLead">Diese Hinweise ergänzen die türkische KVKK-Information für deutschsprachige Nutzer. Soweit die EU-Datenschutz-Grundverordnung (DSGVO) auf die konkrete Verarbeitung anwendbar ist, gelten zusätzlich die nachfolgenden Informationen.</p>
        </div>
      </section>
      <section className="section muted">
        <div className="wrap narrow">
          <div className="articleSections">
            <article className="articleSection"><span>01</span><div><h2>Verantwortlicher</h2><p><strong>{legalIdentity.operatorName}</strong>. Vollständige Anschrift und Kontaktangaben finden Sie im <Link href="/de/impressum">Impressum / Anbieterinformationen</Link>.</p></div></article>
            <article className="articleSection"><span>02</span><div><h2>Welche Daten werden verarbeitet?</h2><p>Bei einer Anfrage können Name, Telefon-/WhatsApp-Nummer, Region, Objektart, ungefähre Größe, Block-/Parzellenangaben, Preisvorstellung, Eigentums-/Planungsstatus, Verkaufszeitraum, Entscheidungssituation und freiwillige Zusatzangaben verarbeitet werden. Für Betrieb und Sicherheit können außerdem technische Verbindungsdaten wie IP-Adresse, Zeitpunkt und Request-Metadaten anfallen.</p><p>Bitte senden Sie beim Erstkontakt keine Ausweis-, Pass-, Bank-/Kartendaten, Gesundheitsdaten oder andere nicht erforderliche sensible Unterlagen.</p></div></article>
            <article className="articleSection"><span>03</span><div><h2>Zwecke und Rechtsgrundlagen</h2><p>Die Angaben werden verwendet, um die von Ihnen angefragte Vorprüfung durchzuführen, Rückfragen zu stellen und bei grundsätzlicher Passung einen möglichen weiteren Vorgang vorzubereiten. Soweit die DSGVO anwendbar ist, kommen insbesondere Art. 6 Abs. 1 lit. b DSGVO für vorvertragliche Maßnahmen auf Ihre Anfrage, Art. 6 Abs. 1 lit. c für gesetzliche Pflichten und Art. 6 Abs. 1 lit. f für IT-Sicherheit, Missbrauchsprävention und die Wahrung bzw. Verteidigung von Rechtsansprüchen in Betracht.</p></div></article>
            <article className="articleSection"><span>04</span><div><h2>Empfänger</h2><p>Zugriff erhalten nur Personen und Dienstleister, soweit dies für Prüfung, Betrieb, Sicherheit oder einen später konkretisierten Vorgang erforderlich ist. Dazu können Hosting-/IT-Dienstleister, der konfigurierte Lead-Empfänger sowie bei fortgeschrittenen Vorgängen gesondert beauftragte Fachleute gehören.</p></div></article>
            <article className="articleSection"><span>05</span><div><h2>Drittlandübermittlung</h2><p>Die Website wird über Vercel Inc. in einer international verteilten Cloud-Infrastruktur bereitgestellt. Dadurch können personenbezogene Daten außerhalb der Türkei bzw. des Europäischen Wirtschaftsraums verarbeitet werden. Soweit die DSGVO anwendbar ist, müssen für Drittlandübermittlungen die Voraussetzungen der Art. 44 ff. DSGVO eingehalten werden; nach türkischem Recht sind zusätzlich die Voraussetzungen des KVKK für Auslandsübermittlungen zu beachten. Welche zusätzliche Lead-/CRM-Infrastruktur eingesetzt wird, hängt von der produktiven Konfiguration ab.</p></div></article>
            <article className="articleSection"><span>06</span><div><h2>Speicherdauer</h2><p>Daten werden nur so lange gespeichert, wie sie für die Bearbeitung der Anfrage, einen möglichen Vorgang, gesetzliche Pflichten oder die Verteidigung von Rechtsansprüchen benötigt werden. Nicht weiterverfolgte Leads sollen nach einem dokumentierten Löschkonzept gelöscht oder anonymisiert werden.</p></div></article>
            <article className="articleSection"><span>07</span><div><h2>Ihre Rechte</h2><p>Soweit die DSGVO gilt, können je nach Voraussetzungen Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit sowie Widerspruch verlangt werden. Außerdem besteht das Recht, sich bei einer zuständigen Datenschutzaufsichtsbehörde zu beschweren. Rechte nach dem türkischen KVKK bleiben unberührt.</p></div></article>
            <article className="articleSection"><span>08</span><div><h2>Keine Werbeeinwilligung</h2><p>Das Absenden einer Immobilienanfrage und die Bestätigung, die Datenschutzhinweise gelesen zu haben, stellen keine Einwilligung in Newsletter, Kampagnen oder sonstige dauerhafte Direktwerbung dar.</p></div></article>
          </div>
          <div className="guideBack"><Link className="textLink" href="/de">← Deutsche Startseite</Link></div>
        </div>
      </section>
    </main>
  );
}
