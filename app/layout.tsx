import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
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
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${manrope.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
