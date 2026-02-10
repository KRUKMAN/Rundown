"use client";

import Script from "next/script";

export default function HubSpotTracking() {
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID ?? "147393350";

  return (
    <Script
      id="hs-script-loader"
      async
      defer
      src={`https://js-eu1.hs-scripts.com/${portalId}.js`}
      strategy="afterInteractive"
    />
  );
}
