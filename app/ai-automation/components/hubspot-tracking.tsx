"use client";

import Script from "next/script";

export default function HubSpotTracking() {
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;

  if (!portalId) return null;

  return (
    <Script
      id="hs-script-loader"
      async
      defer
      src={`//js.hs-scripts.com/${portalId}.js`}
      strategy="afterInteractive"
    />
  );
}
