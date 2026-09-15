import type { Metadata } from "next";
import Link from "next/link";
import { hostingProvider, legalIdentity, legalIdentityComplete } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Impressum / Anbieterinformationen",
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
          <h1 className="contentPageTitle">Impressum / Anbieterinformationen</h1>
          <p className="heroLead">Angaben zum Betreiber des deutschsprachigen Angebots sowie zur technischen Bereitstellung der Website.</p>
          {!legalIdentityComplete && <div className="heroCard" style={{ marginTop: 28 }}><h2>Betreiberdaten noch unvollständig</h2><p>Vor dem produktiven Betrieb müssen vollständiger Name bzw. Firmenname, ladungsfähige Anschrift, E-Mail, Telefon und die anwendbaren Register-/Steuerangaben eingetragen werden.</p></div>}
        </div>
      </section>
      <section className="section muted">
        <div className="wrap narrow">
          <div className="articleSections">
            <article className="articleSection"><span>01</span><div><h2>Anbieter</h2><Row label="Name / Firma" value={legalIdentity.operatorName} /><Row label="Rechtsform" value={legalIdentity.legalForm} /><Row label="Anschrift" value={legalIdentity.address} /><Row label="E-Mail" value={legalIdentity.email} /><Row label="Telefon" value={legalIdentity.phone} /><Row label="Steuer-ID / Steuernummer" value={legalIdentity.taxId} /><Row label="MERSİS" value={legalIdentity.mersis} /><Row label="Handelsregister" value={legalIdentity.tradeRegistry} /><Row label="KEP" value={legalIdentity.kep} /><Row label="Kammer" value={legalIdentity.chamber} /><Row label="Aufsichtsbehörde" value={legalIdentity.authority} /></div></article>
            <article className="articleSection"><span>02</span><div><h2>Hosting</h2><p><strong>{hostingProvider.name}</strong><br />{hostingProvider.address}<br />{hostingProvider.privacyEmail}</p></div></article>
            <article className="articleSection"><span>03</span><div><h2>Art des Angebots</h2><p>Die Website nimmt unverbindliche Anfragen von Immobilieneigentümern zur investorenbezogenen Vorprüfung entgegen. Über die Website wird kein Grundstückskaufvertrag geschlossen und keine Eigentumsübertragung durchgeführt. Eine Anfrage ist weder Kaufzusage noch Makler-, Vollmachts- oder Verkaufsvertrag.</p></div></article>
          </div>
          <div className="guideBack"><Link className="textLink" href="/de">← Deutsche Startseite</Link></div>
        </div>
      </section>
    </main>
  );
}
