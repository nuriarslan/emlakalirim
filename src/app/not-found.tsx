import Link from "next/link";
export default function NotFound() { return <main className="notFound wrap"><span className="eyebrow">404</span><h1>Bu sayfa bulunamadı.</h1><p>Aradığınız sayfa taşınmış veya henüz yayınlanmamış olabilir.</p><Link className="primaryButton inline" href="/">Ana sayfaya dön →</Link></main>; }
