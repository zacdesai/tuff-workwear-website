import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "@/app/globals.css";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { EnquiryProvider } from "@/lib/enquiry-context";
import { siteConfig } from "@/lib/site";

const archivo = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Tuff Workwear · Conti suits, boots and workwear from Durban",
    template: "%s · Tuff Workwear",
  },
  description:
    "Tuff Workwear is Taurus Workwear's Durban base. Conti suits from R149, safety boots, hi-viz and branded workwear. WhatsApp 083 474 4343 for stock and pricing.",
  openGraph: {
    title: "Tuff Workwear",
    description: "Built Tough. Priced Right.",
    url: siteConfig.url,
    siteName: "Tuff Workwear",
    locale: "en_ZA",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <body className={`${archivo.variable} ${inter.variable} font-sans`}>
        <EnquiryProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </EnquiryProvider>
        <Analytics />
      </body>
    </html>
  );
}
