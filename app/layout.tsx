import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HubSpotTracking from "./ai-automation/components/hubspot-tracking";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n/config";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rundown.digital"),
};

export default async function RootLayout(props: Readonly<{
  children: React.ReactNode;
  params?: Promise<{ locale?: Locale }>;
}>) {
  const { children, params } = props;

  const resolvedParams = params ? await params : undefined;
  const locale = isLocale(resolvedParams?.locale) ? resolvedParams?.locale : defaultLocale;

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HubSpotTracking />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
