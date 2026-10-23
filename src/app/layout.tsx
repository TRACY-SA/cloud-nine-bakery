import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";
import { LocalBusinessJsonLd } from "@/components/seo/local-business-json-ld";
import { metadataBaseUrl, siteConfig } from "@/lib/site-config";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
  fallback: ["Palatino Linotype", "Palatino", "Georgia", "serif"],
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm",
  display: "swap",
  fallback: ["Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
});

const title = "Cloud Nine Bakery | Cakes, Pastries & Desserts in Accra";

export const metadata: Metadata = {
  metadataBase: metadataBaseUrl(),
  title: {
    default: title,
    template: "%s | Cloud Nine Bakery",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_GH",
    siteName: siteConfig.name,
    title,
    description: siteConfig.description,
    images: [
      {
        url: "/images/white-floral-tiers.jpg",
        width: 1600,
        height: 2400,
        alt: "A three-tier white celebration cake decorated with white lilies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.description,
    images: ["/images/white-floral-tiers.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-cream font-sans text-espresso antialiased">
        <SkipLink />
        <AnnouncementBar />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <LocalBusinessJsonLd />
      </body>
    </html>
  );
}
