import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Allow dev tooling (inline/eval/ws/blob) in development to unblock Next/Turbopack
      isDev
        ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://js.hs-scripts.com https://js.hs-analytics.net https://js.hs-banner.com"
        : "script-src 'self' 'unsafe-inline' https://js.hs-scripts.com https://js.hs-analytics.net https://js.hs-banner.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https://track.hubspot.com https://forms.hubspot.com",
      "font-src 'self'",
      "connect-src 'self' ws: wss: https://api.hubspot.com https://forms.hubspot.com https://api.hsforms.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
    ].join("; "),
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
