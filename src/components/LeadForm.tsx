"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { formCopy, formOptions } from "@/lib/form-i18n";

export function LeadForm({ compact = false, locale = "tr" }: { compact?: boolean; locale?: Locale }) {
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");
  const [message, setMessage] = useState("");
  const t = formCopy[locale];
  const o = formOptions[locale];
  const privacyHref = locale === "de" ? "/de/datenschutz" : "/yasal/kvkk-aydinlatma-metni";

  async function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault(); setStatus("sending"); setMessage("");
    const form=e.currentTarget; const data=Object.fromEntries(new FormData(form).entries());
    data.locale=locale; data.sourcePath=window.location.pathname;
    try{
      const r=await fetch("/api/lead",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
      const body=await r.json().catch(()=>({})); if(!r.ok) throw new Error(body?.message||"Form could not be sent.");
      form.reset(); setStatus("success"); setMessage(t.success);
    }catch(err){setStatus("error");setMessage(err instanceof Error?err.message:"Form could not be sent.");}
  }

  return <form className={compact?"leadForm compact":"leadForm"} onSubmit={submit}>
    <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" />
    <div className="formGrid two">
      <label><span>{t.area}</span><input name="area" placeholder="Riva, Ortaçeşme, Ömerli…" maxLength={120} required /></label>
      <label><span>{t.type}</span><select name="type" required defaultValue=""><option value="" disabled>{t.choose}</option>{o.types.map(([v,l]:string[])=><option key={v} value={v}>{l}</option>)}</select></label>
    </div>
    <div className="formGrid two">
      <label><span>{t.size}</span><input name="size" placeholder="850 m² / 140 m²" maxLength={40} required /></label>
      <label><span>{t.parcel}</span><input name="parcel" placeholder="123 / 45" maxLength={60} /></label>
    </div>
    <label><span>{t.price}</span><input name="askingPrice" placeholder="12.500.000 TL" maxLength={60} /></label>
    <div className="formGrid two">
      <label><span>{t.title}</span><select name="titleStatus" required defaultValue=""><option value="" disabled>{t.choose}</option>{o.titles.map(([v,l]:string[])=><option key={v} value={v}>{l}</option>)}</select></label>
      <label><span>{t.zoning}</span><select name="zoning" defaultValue="Bilmiyorum">{o.zoning.map(([v,l]:string[])=><option key={v} value={v}>{l}</option>)}</select></label>
    </div>
    <div className="formGrid two">
      <label><span>{t.timing}</span><select name="timing" required defaultValue=""><option value="" disabled>{t.choose}</option>{o.timing.map(([v,l]:string[])=><option key={v} value={v}>{l}</option>)}</select></label>
      <label><span>{t.decision}</span><select name="decisionStatus" required defaultValue=""><option value="" disabled>{t.choose}</option>{o.decision.map(([v,l]:string[])=><option key={v} value={v}>{l}</option>)}</select></label>
    </div>
    <label><span>{t.caseType}</span><select name="caseType" defaultValue="">{o.cases.map(([v,l]:string[])=><option key={`${v}-${l}`} value={v}>{l}</option>)}</select></label>
    <div className="formGrid two">
      <label><span>{t.name}</span><input name="name" autoComplete="name" maxLength={100} required /></label>
      <label><span>{t.phone}</span><input name="phone" autoComplete="tel" inputMode="tel" maxLength={40} required /></label>
    </div>
    <label><span>{t.note}</span><textarea name="note" placeholder="Yol, bina yaşı, kiracı, özel durum…" maxLength={1200} /></label>
    <p className="formFine">{t.sensitiveNote}</p>
    <label className="consent"><input type="checkbox" name="noticeRead" value="yes" required /><span><Link href={privacyHref}>{t.consent}</Link></span></label>
    <button className="primaryButton" type="submit" disabled={status==="sending"}>{status==="sending"?t.sending:t.submit} →</button>
    <p className="formFine">{t.fine}</p>{message&&<div className={`formMessage ${status}`}>{message}</div>}
  </form>;
}
