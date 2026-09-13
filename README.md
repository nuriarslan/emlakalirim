# Emlak Alırım

Multilingual Next.js seller-lead site for `emlakalirim.com`, focused on direct investment screening rather than brokerage-style listings.

## Stack

- Next.js App Router
- TypeScript
- Server-rendered metadata
- Sitemap + robots
- Turkish primary content
- German, English, Russian and Arabic landing pages
- Regional SEO pages
- Seller-intent guides
- Lead API + optional webhook
- Multilingual WhatsApp CTA

## Local development

```bash
npm install
npm run dev
```

Build check:

```bash
npm run typecheck
npm run build
```

## Environment variables

Copy `.env.example` to `.env.local` for local development.

```env
NEXT_PUBLIC_SITE_NAME=Emlak Alırım
NEXT_PUBLIC_SITE_URL=https://emlakalirim.com
NEXT_PUBLIC_WHATSAPP_PHONE=905XXXXXXXXX
LEAD_WEBHOOK_URL=https://YOUR-WEBHOOK-URL
```

`NEXT_PUBLIC_WHATSAPP_PHONE` must be the international number without `+`, spaces or punctuation. Example: `905551234567`.

If no WhatsApp number is configured, the visible WhatsApp CTA falls back to the lead form instead of disappearing.

`LEAD_WEBHOOK_URL` is optional. When configured, submitted leads are POSTed as JSON to the webhook so Make, n8n, Zapier or a CRM can process them.

## Main routes

- `/` Turkish landing page
- `/de` German
- `/en` English
- `/ru` Russian
- `/ar` Arabic
- `/bolgeler` regional hub
- `/bolgeler/[slug]` regional seller landing pages
- `/rehber` seller guide hub
- `/rehber/[slug]` organic-search guides
- `/api/lead` lead submission endpoint
- `/sitemap.xml`
- `/robots.txt`

## Vercel

Import the GitHub repository `nuriarslan/emlakalirim` into Vercel and keep the project root at `/`.

Framework preset: **Next.js**

Required for the real WhatsApp link:

```env
NEXT_PUBLIC_WHATSAPP_PHONE=90...
```

Optional lead forwarding:

```env
LEAD_WEBHOOK_URL=https://...
```

After the first successful production deployment, add `emlakalirim.com` under **Project → Settings → Domains** and follow Vercel's DNS instructions.

## Positioning

The site intentionally presents Emlak Alırım as a selective direct-investment review, not as a generic classifieds portal. Copy should remain discreet and factual: location, title, zoning, ownership structure and transaction readiness are relevant; personal hardship is not used as a lead-quality score.
