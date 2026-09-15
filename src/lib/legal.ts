export const legalIdentity = {
  operatorName: process.env.LEGAL_OPERATOR_NAME?.trim() || "Emlak Alırım",
  legalForm: process.env.LEGAL_ENTITY_TYPE?.trim() || "",
  address: process.env.LEGAL_ADDRESS?.trim() || "",
  email: process.env.LEGAL_EMAIL?.trim() || "",
  phone: process.env.LEGAL_PHONE?.trim() || "",
  taxId: process.env.LEGAL_TAX_ID?.trim() || "",
  mersis: process.env.LEGAL_MERSIS?.trim() || "",
  tradeRegistry: process.env.LEGAL_TRADE_REGISTRY?.trim() || "",
  kep: process.env.LEGAL_KEP?.trim() || "",
  chamber: process.env.LEGAL_CHAMBER?.trim() || "",
  authority: process.env.LEGAL_AUTHORITY?.trim() || "",
};

export const legalIdentityComplete = Boolean(
  process.env.LEGAL_OPERATOR_NAME?.trim() &&
  process.env.LEGAL_ADDRESS?.trim() &&
  process.env.LEGAL_EMAIL?.trim() &&
  process.env.LEGAL_PHONE?.trim() &&
  (process.env.LEGAL_TAX_ID?.trim() || process.env.LEGAL_MERSIS?.trim() || process.env.LEGAL_TRADE_REGISTRY?.trim())
);

export const hostingProvider = {
  name: "Vercel Inc.",
  address: "440 N Barranca Avenue #4133, Covina, CA 91723, United States",
  privacyEmail: "privacy@vercel.com",
  website: "https://vercel.com",
};
