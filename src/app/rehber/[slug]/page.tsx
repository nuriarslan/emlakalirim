import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/LeadForm";
import { guides } from "@/lib/site";

export function generateStaticParams(){ return guides.map((g)=>({slug:g.slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{ const {slug}=await params; const guide=guides.find((g)=>g.slug===slug); if(!guide) return {}; return {title:guide.title,description:guide.description,alternates:{canonical:`/rehber/${guide.slug}`}}; }

export default async function GuidePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const guide=guides.find((g)=>g.slug===slug); if(!guide) notFound();
  return <main><section className="section"><div className="wrap narrow"><div className="eyebrow">{guide.eyebrow.toUpperCase()}</div><h1 style={{fontSize:"clamp(40px,6vw,70px)",letterSpacing:"-.05em",lineHeight:1,margin:"16px 0 24px"}}>{guide.title}</h1><p className="heroLead">{guide.description}</p><div className="faqList" style={{marginTop:32}}><details open><summary>İlk olarak hangi bilgileri hazırlamalıyım?</summary><p>Tapu bilgisi, konum, yaklaşık m², mevcut kullanım, varsa ada/parsel ve fiyat beklentisi ilk görüşmeyi hızlandırır.</p></details><details><summary>İlan vermeden değerlendirme mümkün mü?</summary><p>Evet. İlk değerlendirme için taşınmazın herkese açık biçimde ilan edilmiş olması gerekmez.</p></details><details><summary>Hisseli veya miras kalan taşınmazlar değerlendirilebilir mi?</summary><p>Evet; ancak malik yapısı, intikal ve karar yetkisi ayrıca incelenir.</p></details></div><div style={{marginTop:30}}><Link className="textLink" href="/">← Ana sayfa</Link></div></div></section><section className="section muted"><div className="wrap narrow"><div className="sectionHead"><span>ÖN DEĞERLENDİRME</span><h2>Taşınmazınızın temel bilgilerini paylaşın.</h2></div><div className="heroCard"><LeadForm locale="tr"/></div></div></section></main>;
}
