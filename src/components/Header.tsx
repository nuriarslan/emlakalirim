"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { copy, localeFromPath, localeHref, localeMeta, locales } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const c = copy[locale];
  const dir = localeMeta[locale].dir;

  return (
    <>
      <div className="topbar" dir={dir}>{c.topbar}</div>
      <header className="siteHeader" dir={dir}>
        <div className="wrap navRow">
          <Link className="brand" href={localeMeta[locale].path} aria-label={`${site.name} home`}>
            Emlak <span>Alırım</span>
          </Link>
          <nav className="desktopNav" aria-label="Main navigation">
            <Link href={localeHref(locale, "#bolgeler")}>{c.nav.regions}</Link>
            <Link href={localeHref(locale, "#yatirim-kriterleri")}>{c.nav.criteria}</Link>
            {locale === "tr" ? <Link href="/#rehber">{c.nav.guide}</Link> : <Link href={localeHref(locale, "#faq")}>{c.nav.guide}</Link>}
          </nav>
          <div className="headerActions">
            <details className="languageMenu">
              <summary aria-label="Language">{localeMeta[locale].short}</summary>
              <div className="languagePopover" dir="ltr">
                {locales.map((item) => <Link key={item} className={item === locale ? "active" : ""} href={localeMeta[item].path}>{localeMeta[item].short}<span>{localeMeta[item].label}</span></Link>)}
              </div>
            </details>
            <Link className="navCta" href={localeHref(locale, "#form")}>{c.nav.cta} <span aria-hidden>→</span></Link>
          </div>
        </div>
      </header>
    </>
  );
}
