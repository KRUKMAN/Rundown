/**
 * Legal business details, used in the privacy policy, terms and footer.
 * Source: CEIDG entry (sole proprietorship, active since 2022-07-02). Anything in [brackets] is a placeholder.
 */
export const business = {
  legalName: "Jakub Krukowski The Rundown",
  address: "ul. Reduty Ordona 75A lok. 7, 71-180 Szczecin",
  nip: "8952243688",
  regon: "522417180",
  email: "jake@rundown.digital",
  /** HubSpot portal data region. The tracking script loads from js-eu1, which suggests the EU data centre: confirm in HubSpot settings. */
  hubspotRegion: "EU",
  /** How long correspondence is kept after the last message when no contract follows. Confirm. */
  retentionMonths: 12,
  policyUpdated: "2026-11-01",
};

export const hasPlaceholders = Object.values(business).some((v) => typeof v === "string" && v.includes("["));
