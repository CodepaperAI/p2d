import type { Metadata } from "next";
import { Manrope, Rajdhani } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import {
  getLocalBusinessJsonLd,
  getRouteMetadata,
  getWebSiteJsonLd,
  siteConfig,
} from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  ...getRouteMetadata("/"),
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "P2D Refinishing | Kitchen & Bathroom Cabinet Refinishing Toronto",
    template: "%s | P2D Refinishing",
  },
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${rajdhani.variable}`}>
      <body>
        <JsonLd data={[getWebSiteJsonLd(), getLocalBusinessJsonLd()]} />
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
