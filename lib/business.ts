/**
 * Legal business details, used in the privacy policy, terms and footer.
 * FILL THESE IN BEFORE MERGING TO PRODUCTION. Anything in [brackets] is a placeholder.
 */
export const business = {
  legalName: "[Legal business name, e.g. Jakub Krukowski The Rundown]",
  address: "[Street and number, postcode, city, Poland]",
  nip: "[NIP]",
  email: "jake@rundown.digital",
  /** HubSpot portal data region. The tracking script loads from js-eu1, which suggests the EU data centre: confirm in HubSpot settings. */
  hubspotRegion: "EU",
  /** How long correspondence is kept after the last message when no contract follows. Confirm. */
  retentionMonths: 12,
  policyUpdated: "2026-11-01",
};

export const hasPlaceholders = Object.values(business).some((v) => typeof v === "string" && v.includes("["));
