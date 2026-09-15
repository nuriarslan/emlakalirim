import type { Metadata } from "next";
import Link from "next/link";
import { hostingProvider, legalIdentity, legalIdentityComplete } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Anbieter- und Kontaktinformationen",
  description: "Anbieter-, Kontakt- und Hostinginformationen von Emlak Alırım.",
  robots: { index: false, follow: true },
};

function Row({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return <p><strong>{label}:</strong> {value}</p>;
}

export default function GermanImprintPage() {
  return (
    <main>
      <section className="section">
        <div className="wrap narrow">
          <div className="eyebrow">ANBIETER & KONTAKT</div>
          <h1 className="contentPageTitle">Anbieter- und Kontaktinformationen</h1>
          <p className="heroLead">Emlak Alırım dient dem Ankauf von Immobilien im eigenen Namen und auf eigene Rechnung. Es wird keine Makler- oder Vermittlungsleistung für Dritte angeboten.</p>
          {!legalIdentityComplete && <div className="heroCard" style={{ marginTop: 28 }}><h2>Kontaktdaten des Betreibers noch unvollständig</h2><p>Erforderlich sind zunächst der vollständige Name der natürlichen Person, eine ladungsfähige Anschrift, E-Mail-Adresse und Telefonnummer. MERSİS, Handelsregister, Kammer, KEP oder eine türkische Steuernummer werden nur angegeben, wenn sie für den Betreiber tatsächlich bestehen oder aufgrund einer späteren gewerblichen Einordnung erforderlich werden.</p></div>}
        </div>
      </section>
      <section className="section muted">
        <div className="wrap narrow">
          <div className="articleSections">
            <article className="articleSection"><span>01</span><div><h2>Betreiber</h2><Row label="Name" value={legalIdentity.operatorName} /><Row label="Status" value={legalIdentity.legalForm} /><Row label="Anschrift" value={legalIdentity.address} /><Row label="E-Mail" value={legalIdentity.email} /><Row label="Telefon" value={legalIdentity.phone} /><Row label="Steuerangabe, soweit anwendbar" value={legalIdentity.taxId} /><Row label="MERSİS, soweit anwendbar" value={legalIdentity.mersis} /><Row label="Handelsregister, soweit anwendbar" value={legalIdentity.tradeRegistry} /><Row label="KEP, soweit anwendbar" value={legalIdentity.kep} /><Row label="Kammer, soweit anwendbar" value={legalIdentity.chamber} /><Row label="Aufsichtsbehörde, soweit anwendbar" value={legalIdentity.authority} /></div></article>
            <article className="articleSection"><span>02</span><div><h2>Art des Angebots</h2><p>Der Betreiber prüft Immobilien ausschließlich als möglicher Käufer für den eigenen Erwerb. Er vermarktet keine Immobilie im Namen des Verkäufers, vermittelt nicht zwischen Verkäufer und Drittkäufern und verlangt vom Verkäufer keine Maklerprovision.</p><p>Eine Anfrage über diese Website ist unverbindlich und stellt weder Kaufzusage noch Makler-, Vollmachts- oder Grundstückskaufvertrag dar.</p></div></article>
            <article className="articleSection"><span>03</span><div><h2>Hosting</h2><p><strong>{hostingProvider.name}</strong><br />{hostingProvider.address}<br />{hostingProvider.privacyEmail}</p></div></article>
            <article className="articleSection"><span>04</span><div><h2>Änderung des Tätigkeitsmodells</h2><p>Sollte die Tätigkeit später als dauerhaft gewerblicher Immobilienhandel organisiert werden, eine Gesellschaft gegründet oder eine Vermittlung für Dritte aufgenommen werden, müssen steuerliche, registerrechtliche und gegebenenfalls berufsrechtliche Pflichten neu geprüft und diese Angaben aktualisiert werden.</p></div></article>
          </div>
          <div className="guideBack"><Link className="textLink" href="/de">← Deutsche Startseite</Link></div>
        </div>
      </section>
    </main>
  );
}
