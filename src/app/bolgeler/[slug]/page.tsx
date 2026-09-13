import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/LeadForm";
import { regions } from "@/lib/site";

export function generateStaticParams() { return regions.map((r)=>({ slug:r.slug })); }

export async function generateMetadata({ params }:{ params:Promise<{slug:string}> }):Promise<Metadata>{
  const {slug}=await params; const region=regions.find((r)=>r.slug===slug); if(!region) return {};
  return { title: region.title, description: region.description, alternates:{canonical:`/bolgeler/${region.slug}`} };
}

export default async function RegionPage({ params }:{ params:Promise<{slug:string}> }){
  const {slug}=await params; const region=regions.find((r)=>r.slug===slug); if(!region) notFound();
  return <main>
    <section className="hero"><div className="wrap heroGrid"><div className="heroCopy"><div className="eyebrow">{region.name.toUpperCase()} • GAYRİMENKUL</div><h1>{region.title}</h1><p className="heroLead">{region.description}</p><div className="pillList">{region.places.map((p)=><span key={p}>{p}</span>)}</div><p className="heroLead">İlk aşamada açık ilan gerekmez. Konum, mülk tipi, yaklaşık büyüklük ve tapu bilgisiyle ön değerlendirmeye başlayabiliriz.</p><Link className="textLink" href="/">← Ana sayfa</Link></div><div className="heroCard"><div className="cardHead"><span>01</span><div><h2>Mülkünüzü değerlendirelim</h2><p>Bağlayıcı olmayan ilk inceleme için temel bilgileri paylaşın.</p></div></div><LeadForm compact locale="tr"/></div></div></section>
    <section className="section muted"><div className="wrap narrow"><div className="sectionHead"><span>NEYE BAKIYORUZ?</span><h2>{region.name} için tek bir m² fiyatından fazlası önemli.</h2></div><div className="faqList"><details open><summary>Tapu ve malik yapısı</summary><p>Müstakil veya hisseli tapu, arsa payı ve satış kararını verebilen malik yapısı birlikte değerlendirilir.</p></details><details><summary>İmar ve parsel niteliği</summary><p>İmar durumu, yol bağlantısı, parsel şekli ve kullanım imkânı yatırım kararını etkiler.</p></details><details><summary>Fiyat ve zamanlama</summary><p>Beklenti ile bölgenin gerçek işlem potansiyeli arasındaki uyum ve satış takvimi ön incelemenin önemli parçasıdır.</p></details></div></div></section>
  </main>;
}
