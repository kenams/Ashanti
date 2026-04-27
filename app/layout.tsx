import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";
import { KahWatermark } from "@/components/kah-watermark";
import { siteConfig } from "@/lib/site";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  weight: ["400", "500", "600", "700"]
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ashanti-beauty.fr"),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "institut de beauté Balma",
    "soins beauté Balma",
    "ongles Balma",
    "soin visage Balma",
    "massage Balma",
    "Ashanti Beauty"
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "https://ashanti-beauty.fr",
    siteName: siteConfig.name,
    locale: "fr_FR",
    type: "website"
  },
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${bodoni.variable} ${manrope.variable}`}>
      <body suppressHydrationWarning>
        {children}
        <KahWatermark />
      </body>
    </html>
  );
}
