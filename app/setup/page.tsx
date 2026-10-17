import type { Metadata } from "next";
import SetupClient from "./SetupClient";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import JsonLd from "../components/JsonLd";
import { SITE_URL } from "../lib/site";

const TITLE = "Guia de Instalação IPTV: Firestick, Smart TV e Mais | IPTV Portugal";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description:
    "Configure o IPTV Portugal em 5 minutos. Guias passo a passo para Amazon Firestick, Smart TV, Android, iPhone, iPad, Box MAG e Windows, além de ajuda grátis na instalação.",
  alternates: { canonical: `${SITE_URL}/setup` },
  openGraph: {
    title: TITLE,
    description: "Ponha o seu IPTV a funcionar em minutos em qualquer aparelho com os nossos guias passo a passo.",
    url: `${SITE_URL}/setup`,
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/setup#webpage`,
      url: `${SITE_URL}/setup`,
      name: TITLE,
      inLanguage: "pt-PT",
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Guia de Instalação", item: `${SITE_URL}/setup` },
      ],
    },
  ],
};

export default function SetupPage() {
  return (
    <>
      <JsonLd data={schema} />
      <Navbar />
      <main>
        <SetupClient />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
