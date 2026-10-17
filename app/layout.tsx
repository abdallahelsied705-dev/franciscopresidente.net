import type { Metadata } from "next";
import { Manrope, Fraunces, Geist_Mono } from "next/font/google";
import "./globals.css";
import Motion from "./components/Motion";
import { SITE_URL } from "./lib/site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["600", "700", "900"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "IPTV Portugal | +50.000 Canais em 4K, Teste Grátis de 24 Horas",
    template: "%s — IPTV Portugal",
  },
  description:
    "Subscrição IPTV Portugal: mais de 50.000 canais em direto e 200.000 filmes e séries em até 4K pela sua internet. Funciona em Firestick, Smart TV, Android e iPhone. Sem contrato, teste grátis de 24 horas.",
  keywords: [
    "IPTV Portugal",
    "Portugal IPTV",
    "subscrição IPTV",
    "melhor IPTV Portugal",
    "IPTV Portugal teste grátis",
    "IPTV Firestick",
    "IPTV 4K",
    "box IPTV Portugal",
  ],
  authors: [{ name: "IPTV Portugal" }],
  creator: "IPTV Portugal",
  publisher: "IPTV Portugal",
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: BASE_URL,
    siteName: "IPTV Portugal",
    title: "IPTV Portugal | +50.000 Canais em 4K, Teste Grátis de 24 Horas",
    description:
      "Uma subscrição IPTV Portugal com mais de 50.000 canais em direto e 200.000 filmes e séries em até 4K. Sem antena, sem contrato, teste grátis de 24 horas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Portugal | +50.000 Canais em 4K, Teste Grátis de 24 Horas",
    description:
      "Uma subscrição IPTV Portugal com mais de 50.000 canais em direto e 200.000 filmes e séries em até 4K. Sem antena, sem contrato, teste grátis de 24 horas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-PT"
      className={`${manrope.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
        <Motion />
      </body>
    </html>
  );
}
