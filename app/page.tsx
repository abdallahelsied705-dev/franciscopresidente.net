import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IptvUkGuide from "./components/IptvUkGuide";
import Features from "./components/Features";
import Devices from "./components/Devices";
import Setup from "./components/Setup";
import Channels from "./components/Channels";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import StickyBar from "./components/StickyBar";
import JsonLd from "./components/JsonLd";
import OfferBanner from "./components/OfferBanner";
import SocialProof from "./components/SocialProof";
import FinalCTA from "./components/FinalCTA";
import { homeFaqs } from "./lib/faqs";
import { SITE_URL } from "./lib/site";

const BASE_URL = SITE_URL;

const TITLE = "IPTV Portugal 2026 — +50.000 Canais em Direto e Subscrição 4K";
const DESCRIPTION =
  "Uma subscrição de IPTV Portugal com mais de 50.000 canais em direto e 200.000 filmes e séries em até 4K, transmitidos pela sua internet. Funciona em Firestick, Smart TV, Android e iPhone. Planos desde 12,99€, teste grátis de 24 horas.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: BASE_URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: BASE_URL },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const plans = [
  { name: "Plano IPTV Portugal 1 Mês", slug: "1-mes-iptv-portugal", price: "12.99" },
  { name: "Plano IPTV Portugal 3 Meses", slug: "3-meses-iptv-portugal", price: "29.99" },
  { name: "Plano IPTV Portugal 6 Meses", slug: "6-meses-iptv-portugal", price: "47.99" },
  { name: "Plano IPTV Portugal 12 Meses", slug: "12-meses-iptv-portugal", price: "79.99" },
  { name: "Plano IPTV Portugal 24 Meses", slug: "24-meses-iptv-portugal", price: "129" },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "IPTV Portugal",
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/favicon.svg`, width: 512, height: 512 },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "goldengateiptv@gmail.com",
        telephone: "+212707711512",
        availableLanguage: "Portuguese",
        areaServed: "PT",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "IPTV Portugal",
      inLanguage: "pt-PT",
      publisher: { "@id": `${BASE_URL}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "pt-PT",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#product` },
      primaryImageOfPage: { "@type": "ImageObject", url: `${BASE_URL}/opengraph-image` },
    },
    {
      "@type": "Product",
      "@id": `${BASE_URL}/#product`,
      name: "Subscrição IPTV Portugal",
      description:
        "Uma subscrição de IPTV Portugal com mais de 50.000 canais em direto e 200.000 filmes e séries a pedido em até 4K, com gravação de 7 dias, um EPG completo e suporte por WhatsApp a toda a hora.",
      image: `${BASE_URL}/opengraph-image`,
      brand: { "@type": "Brand", name: "IPTV Portugal" },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        lowPrice: "12.99",
        highPrice: "129",
        offerCount: plans.length,
        offers: plans.map((p) => ({
          "@type": "Offer",
          name: p.name,
          price: p.price,
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2026-12-31",
          url: `${BASE_URL}/product/${p.slug}`,
          seller: { "@id": `${BASE_URL}/#organization` },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      mainEntity: homeFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={schema} />
      <OfferBanner />
      <Navbar withBanner />
      <main>
        <Hero />
        <IptvUkGuide />
        <Features />
        <Pricing />
        <Devices />
        <Setup />
        <Channels />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyBar />
      <SocialProof />
    </>
  );
}
