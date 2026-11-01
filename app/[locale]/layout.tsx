import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import HubSpotTracking from "@/components/hubspot-tracking";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n/config";

const archivo = localFont({
  src: "../fonts/archivo.woff2",
  variable: "--font-archivo",
  weight: "400 800",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "62% 100%" }],
});

const newsreader = localFont({
  src: "../fonts/newsreader-italic.woff2",
  variable: "--font-newsreader",
  weight: "400 500",
  style: "italic",
  display: "swap",
});

const jetbrains = localFont({
  src: "../fonts/jetbrains-mono.woff2",
  variable: "--font-jetbrains",
  weight: "400 700",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rundown.digital"),
};

export const viewport: Viewport = {
  themeColor: "#f6f4ee",
};

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
  }>
) {
  const { children, params } = props;
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;

  return (
    <html lang={locale} className={`${archivo.variable} ${newsreader.variable} ${jetbrains.variable}`}>
      <body className="antialiased">
        <HubSpotTracking />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
