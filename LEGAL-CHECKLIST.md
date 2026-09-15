# Emlak Alırım — Türkiye legal/compliance checklist

This file is an operational checklist, not legal advice. Website text alone cannot complete compliance where contracts, registrations or real operator details are required.

## Before accepting production leads

- [ ] Fill the Vercel environment variables `LEGAL_OPERATOR_NAME`, `LEGAL_ADDRESS`, `LEGAL_EMAIL`, `LEGAL_PHONE` and the applicable tax/trade-registry fields so `/yasal/iletisim` contains the real and current operator information.
- [ ] Set a real `NEXT_PUBLIC_WHATSAPP_PHONE`.
- [ ] Configure `LEAD_WEBHOOK_URL` to a real HTTPS destination. The API intentionally does not pretend a lead was stored when this is missing.
- [ ] Document who can access leads and apply least-privilege access.
- [ ] Define a written retention/deletion schedule for rejected, inactive and completed leads.

## KVKK and cross-border processing

The application is hosted by Vercel Inc. in foreign infrastructure. The selected webhook/CRM may also be abroad.

- [ ] Map every processor/subprocessor receiving lead or visitor data (Vercel, webhook/CRM, messaging provider, etc.).
- [ ] Determine and document the lawful basis under KVKK Article 9 for each cross-border transfer.
- [ ] If a Turkish KVKK standard contract is used as the appropriate safeguard, execute the correct controller/processor module and submit the required notification to the Personal Data Protection Authority within the statutory period.
- [ ] Verify the contractual processor terms for the actual Vercel plan. Vercel's current public DPA states that its processor DPA applies to Pro and Enterprise customers; do not assume a Hobby account alone provides the required processor contract.
- [ ] Review the webhook/CRM provider's DPA, location and subprocessors before enabling production lead transfer.

## VERBİS

- [ ] Determine whether the actual operator is exempt from or subject to VERBİS registration. This depends on entity/accounting status, annual employee count, annual balance sheet thresholds and whether the principal activity involves special-category personal data.
- [ ] If registration is required, complete it before the applicable deadline and align the inventory with the website processing.

## Cookies and tracking

- [x] No Google Analytics, Meta Pixel, behavioural advertising or similar optional tracking is currently included in the application code.
- [x] A cookie policy explains the current setup.
- [ ] If optional analytics/advertising technology is added later, block it by default until valid opt-in consent and provide clear accept/reject/preferences controls. Update the cookie table/policy before deployment.

## Commercial electronic communications

- [x] The current property enquiry is separated from marketing consent.
- [ ] If promotional/campaign messages are sent later, implement the applicable consent, identification, refusal and IYS workflow separately. Do not reuse the property-enquiry checkbox as marketing consent.

## Real-estate activity model

- [ ] Keep the factual business model clear: direct acquisition/on-own-account investor review versus brokerage/agency services for third parties.
- [ ] If the operator starts intermediating third-party sales, taking brokerage commissions, advertising under an authorization agreement or providing regulated real-estate brokerage services, assess and obtain the required Taşınmaz Ticareti authorization and comply with the authorization-agreement rules before offering those services.

## External assets

- [ ] The current visual configuration loads images from `images.unsplash.com`. For stricter privacy/data-minimisation, replace these with locally hosted licensed/AI-generated images so visitors do not make unnecessary third-party image requests.

## Periodic review

- [ ] Re-check these pages whenever the business model, lead destination, analytics, hosting, WhatsApp flow, or operator identity changes:
  - `/yasal/iletisim`
  - `/yasal/kvkk-aydinlatma-metni`
  - `/yasal/cerez-politikasi`
  - `/yasal/kullanim-kosullari`
  - `/yasal/ticari-elektronik-ileti`
