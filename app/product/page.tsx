import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import JsonLd from "../components/JsonLd";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { products } from "../lib/products";
import { SITE_URL } from "../lib/site";

const BASE_URL = SITE_URL;

export const metadata: Metadata = {
  title: { absolute: "Planos e Preços IPTV Portugal – Desde 12,99€ | IPTV Portugal" },
  description:
    "Compare os planos de IPTV Portugal desde 12,99€: 1, 3, 6, 12 ou 24 meses com mais de 50.000 canais, 4K Ultra HD e gravação de 7 dias. Sem contrato, ativação imediata.",
  alternates: { canonical: `${BASE_URL}/product` },
  openGraph: {
    title: "Planos e Preços IPTV Portugal – Desde 12,99€ | IPTV Portugal",
    description:
      "Mais de 50.000 canais, streaming 4K, gravação de 7 dias. Planos desde 12,99€. Compare subscrições de IPTV Portugal de 1, 3, 6, 12 e 24 meses.",
    url: `${BASE_URL}/product`,
  },
};

const catalogSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Subscrição IPTV Portugal",
  description:
    "Subscrição premium de IPTV Portugal com mais de 50.000 canais em direto, 200.000+ VOD, qualidade 4K Ultra HD, gravação de 7 dias e suporte 24/7.",
  image: `${BASE_URL}/opengraph-image`,
  brand: { "@type": "Brand", name: "IPTV Portugal" },
  offers: products.map((p) => ({
    "@type": "Offer",
    name: p.name,
    price: p.price.toString(),
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    priceValidUntil: "2026-12-31",
    url: `${BASE_URL}/product/${p.slug}`,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Planos", item: `${BASE_URL}/product` },
  ],
};

const TRIAL_LINK = "https://wa.me/212707711512?text=IPTV%20Portugal%20-%20Teste%20Gr%C3%A1tis%20de%2024%20Horas";

const planFeatures = [
  "+50.000 Canais em Direto",
  "Streaming 4K Ultra HD",
  "Gravação TV de 7 Dias",
  "Suporte 24/7",
];

const trustPoints = [
  {
    icon: "📡",
    title: "+50.000 Canais em Direto",
    description:
      "Canais portugueses, desporto, notícias, infantil e internacionais — tudo numa só subscrição. Entretenimento, desporto, filmes e milhares mais.",
  },
  {
    icon: "⚡",
    title: "Tecnologia Anti-Bloqueio",
    description:
      "A nossa infraestrutura CDN com classificação 9.8 entrega streaming suave e sem buffering mesmo nos maiores eventos em direto e nas horas de pico.",
  },
  {
    icon: "🔒",
    title: "Garantia de Reembolso em 48 Horas",
    description:
      "Se o serviço não funcionar como descrito, peça reembolso nas 48 horas após a compra. Falhas que não conseguirmos resolver em 72 horas têm reembolso proporcional.",
  },
  {
    icon: "🌍",
    title: "Funciona em Todo o Lado",
    description:
      "Use a sua subscrição em qualquer parte do mundo. Perfeito para quem viaja ou está longe de casa. Sem necessidade de VPN.",
  },
];

const monthlyEquivalents: Record<string, string> = {
  "1-mes-iptv-portugal": "12,99€/mês",
  "3-meses-iptv-portugal": "9,99€/mês",
  "6-meses-iptv-portugal": "8,00€/mês",
  "12-meses-iptv-portugal": "6,67€/mês",
  "24-meses-iptv-portugal": "5,38€/mês",
};

const devicesBySlug: Record<string, string> = {
  "1-mes-iptv-portugal": "Até 4",
  "3-meses-iptv-portugal": "Até 4",
  "6-meses-iptv-portugal": "Até 4",
  "12-meses-iptv-portugal": "Até 4",
  "24-meses-iptv-portugal": "Até 4",
};

// Prices per number of simultaneous connections (matches components/Pricing.tsx).
const devicePriceRows = [
  { plan: "1 mês", prices: ["12,99", "19", "25", "31"] },
  { plan: "3 meses", prices: ["29,99", "42", "54", "66"] },
  { plan: "6 meses", prices: ["47,99", "66", "84", "102"] },
  { plan: "12 meses", prices: ["79,99", "110", "140", "170"] },
  { plan: "24 meses", prices: ["129", "175", "220", "265"] },
];

const planChooser = [
  { who: "Experimentar IPTV pela primeira vez", plan: "1 mês — 12,99€", why: "O menor compromisso. Teste o serviço na sua própria TV e internet durante um mês inteiro depois do teste grátis." },
  { who: "Ver uma temporada ou estadia curta", plan: "3 ou 6 meses — 29,99€ / 47,99€", why: "Cobre meia época de desporto ou uns meses fora, a cerca de 8€–9,99€ por mês." },
  { who: "Substituir o cabo ou satélite de vez", plan: "12 meses — 79,99€", why: "Cerca de 6,67€ por mês — o melhor equilíbrio entre preço e flexibilidade para uma casa que vê TV todos os dias." },
  { who: "Configurar e esquecer", plan: "24 meses — 129€", why: "O preço mensal mais baixo (cerca de 5,38€) e sem renovações durante dois anos." },
];

const planFaqs = [
  { q: "Qual é a diferença entre os planos de IPTV Portugal?", a: "Nada além da duração e do preço. Todos os planos incluem os mesmos mais de 50.000 canais em direto, 200.000+ filmes e séries, qualidade 4K, gravação de 7 dias, EPG e suporte 24/7 por WhatsApp." },
  { q: "Quantos aparelhos posso usar?", a: "Escolhe 1, 2, 3 ou 4 ligações simultâneas ao subscrever. Cada aparelho extra acrescenta ao preço — veja a tabela acima — e cada ligação pode transmitir numa TV, telemóvel ou tablet diferente ao mesmo tempo." },
  { q: "Há contrato?", a: "Não. Não existe contrato mínimo — paga pela duração do plano que escolher e pode parar no fim de qualquer plano." },
  { q: "Em quanto tempo é ativada a minha subscrição?", a: "Normalmente em poucos minutos após o pagamento. Enviamos o seu link M3U ou login Xtream Codes no WhatsApp, e os nossos guias de instalação cobrem todos os aparelhos." },
  { q: "Posso experimentar antes de comprar?", a: "Sim. Todos os planos podem ser testados primeiro com um teste grátis de 24 horas — sem cartão de crédito. Envie-nos mensagem no WhatsApp para começar." },
  { q: "Qual é a vossa política de reembolso?", a: "Se o serviço não funcionar como descrito, pode pedir reembolso nas 48 horas após a compra. Falhas técnicas que não consigamos resolver em 72 horas após o reporte têm direito a reembolso proporcional. Os detalhes completos estão na nossa política de reembolso." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: planFaqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function ProductCatalogPage() {
  return (
    <>
      <JsonLd data={catalogSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />

      <main className="bg-ink-900 pt-[100px]">

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
          <nav className="text-zinc-500 text-sm flex items-center gap-1.5">
            <Link href="/" className="hover:text-white transition-colors">Início</Link>
            <span>/</span>
            <span className="text-zinc-300">Planos</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="py-16 text-center px-4">
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Planos e Preços
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Escolha o Seu Plano de IPTV Portugal
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
            Todos os planos incluem as mesmas funcionalidades premium — mais de 50.000 canais, qualidade 4K, gravação de 7 dias. A única diferença é a duração da subscrição e quanto poupa.
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap text-sm text-zinc-400">
            <span>⭐ Teste grátis de 24 horas</span>
            <span className="text-zinc-700">|</span>
            <span>✅ Sem contratos</span>
            <span className="text-zinc-700">|</span>
            <span>🔒 Reembolso em 48 horas</span>
          </div>
        </section>

        {/* Product Cards Grid */}
        <section className="py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => {
                const waLink = `https://wa.me/212707711512?text=${encodeURIComponent(product.whatsappMessage)}`;
                return (
                  <div
                    key={product.slug}
                    className={`relative rounded-2xl border p-7 flex flex-col transition-all duration-300 ${
                      product.highlight
                        ? "bg-gradient-to-br from-brand-500 to-brand-600 border-brand-400 shadow-lg shadow-brand-500/20"
                        : "bg-ink-800 border-white/5 hover:border-brand-500/30"
                    }`}
                  >
                    {product.badge && (
                      <span
                        className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold px-3 py-0.5 rounded-full whitespace-nowrap ${
                          product.highlight ? "bg-white text-brand-600" : "bg-brand-500 text-white"
                        }`}
                      >
                        {product.badge}
                      </span>
                    )}

                    <div className="mb-6">
                      <h2 className="text-lg font-bold mb-1 text-white">{product.name}</h2>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-extrabold text-white">
                          {product.price.toLocaleString("pt-PT")}€
                        </span>
                        <span className={`text-sm ${product.highlight ? "text-brand-100" : "text-zinc-400"}`}>
                          {product.period}
                        </span>
                      </div>
                      <p className={`text-xs mt-1 font-medium ${product.highlight ? "text-brand-100" : "text-brand-400"}`}>
                        {monthlyEquivalents[product.slug]}
                      </p>
                    </div>

                    <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                      {planFeatures.map((feat) => (
                        <li key={feat} className="flex items-center gap-2.5 text-sm">
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${product.highlight ? "bg-white/25" : "bg-brand-500/15"}`}>
                            <Check size={11} className={product.highlight ? "text-white" : "text-brand-400"} />
                          </span>
                          <span className={product.highlight ? "text-brand-50" : "text-zinc-300"}>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col gap-2.5">
                      <Link
                        href={`/product/${product.slug}`}
                        className={`text-center text-sm font-semibold px-5 py-2.5 rounded-full transition-colors ${product.highlight ? "bg-white text-brand-600 hover:bg-brand-50" : "bg-brand-500 hover:bg-brand-400 text-white"}`}
                      >
                        Ver Plano
                      </Link>
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-center text-sm font-medium px-5 py-2.5 rounded-full transition-colors ${product.highlight ? "bg-white/20 hover:bg-white/30 text-white border border-white/30" : "border border-white/10 hover:border-brand-500/40 text-zinc-300 hover:text-white"}`}
                      >
                        Subscrever Agora
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 px-4 bg-ink-950 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">Comparar Planos</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Todos os planos, lado a lado</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-zinc-400 text-sm font-medium py-3 pr-6 w-1/3">Característica</th>
                    {products.map((p) => (
                      <th key={p.slug} className={`text-center text-sm font-semibold py-3 px-3 ${p.highlight ? "text-brand-400" : "text-white"}`}>
                        {p.badge && (
                          <span className="block text-[10px] text-brand-400 font-bold uppercase mb-0.5">{p.badge}</span>
                        )}
                        {p.name.replace(" IPTV Portugal", "")}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="py-3.5 pr-6 text-zinc-400 text-sm">Preço</td>
                    {products.map((p) => (
                      <td key={p.slug} className={`text-center text-sm font-bold py-3.5 px-3 ${p.highlight ? "text-brand-400" : "text-white"}`}>
                        {p.price.toLocaleString("pt-PT")}€
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-6 text-zinc-400 text-sm">Duração</td>
                    {products.map((p) => (
                      <td key={p.slug} className="text-center text-sm text-zinc-300 py-3.5 px-3">
                        {p.name.split(" ").slice(0, 2).join(" ")}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-6 text-zinc-400 text-sm">Equivalente mensal</td>
                    {products.map((p) => (
                      <td key={p.slug} className="text-center text-sm font-semibold py-3.5 px-3 text-brand-300">
                        {monthlyEquivalents[p.slug]}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-6 text-zinc-400 text-sm">Aparelhos</td>
                    {products.map((p) => (
                      <td key={p.slug} className="text-center text-sm text-zinc-300 py-3.5 px-3">
                        {devicesBySlug[p.slug]}
                      </td>
                    ))}
                  </tr>
                  {[
                    "+50.000 Canais",
                    "4K Ultra HD",
                    "Gravação 7 Dias",
                    "200.000+ VOD",
                    "Guia EPG",
                    "Suporte 24/7",
                  ].map((feature) => (
                    <tr key={feature}>
                      <td className="py-3.5 pr-6 text-zinc-400 text-sm">{feature}</td>
                      {products.map((p) => (
                        <td key={p.slug} className="text-center py-3.5 px-3">
                          <span className="inline-flex items-center justify-center w-5 h-5 bg-brand-500/15 rounded-full">
                            <Check size={11} className="text-brand-400" />
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why IPTV Portugal */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">Porquê Nós</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Porquê IPTV Portugal?</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustPoints.map((point) => (
                <div key={point.title} className="bg-ink-800 border border-white/5 hover:border-brand-500/20 rounded-2xl p-7 transition-all">
                  <div className="text-3xl mb-4">{point.icon}</div>
                  <h3 className="text-white font-semibold text-base mb-2">{point.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Which plan */}
        <section className="py-20 px-4 bg-ink-950 border-y border-white/5" aria-labelledby="choose-plan">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">Guia de planos</p>
              <h2 id="choose-plan" className="text-3xl sm:text-4xl font-bold text-white">
                Que plano de IPTV Portugal devo escolher?
              </h2>
              <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
                Todos os planos incluem exatamente os mesmos canais e funcionalidades. Os planos mais longos custam simplesmente menos por mês — comece curto se é novo no IPTV e passe a um plano mais longo quando estiver satisfeito.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {planChooser.map((c) => (
                <div key={c.who} className="bg-ink-800 border border-white/5 rounded-2xl p-6">
                  <p className="text-zinc-400 text-sm">{c.who}</p>
                  <h3 className="text-white font-bold text-lg mt-1">{c.plan}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mt-2">{c.why}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-16 mb-6 text-center">Preços de IPTV Portugal por número de aparelhos</h2>
            <div className="overflow-x-auto rounded-2xl border border-white/[0.07] bg-ink-900">
              <table className="w-full min-w-[520px] text-sm">
                <caption className="sr-only">Preços de IPTV Portugal por duração do plano e número de aparelhos simultâneos</caption>
                <thead>
                  <tr className="text-xs uppercase tracking-wider text-zinc-400">
                    <th scope="col" className="px-5 py-4 text-left font-medium">Plano</th>
                    {[1, 2, 3, 4].map((d) => (
                      <th key={d} scope="col" className="px-5 py-4 text-right font-medium">
                        {d} {d === 1 ? "aparelho" : "aparelhos"}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {devicePriceRows.map((r) => (
                    <tr key={r.plan} className="border-t border-white/5">
                      <th scope="row" className="px-5 py-3.5 text-left font-medium text-zinc-200">{r.plan}</th>
                      {r.prices.map((p, i) => (
                        <td key={i} className="px-5 py-3.5 text-right text-white">{p}€</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-zinc-400 text-xs mt-3 text-center">Sem contrato e sem taxa de instalação.</p>

            <h2 className="text-2xl font-bold text-white mt-16 mb-6 text-center">Perguntas sobre os planos</h2>
            <div className="space-y-3">
              {planFaqs.map((f) => (
                <details key={f.q} className="group bg-ink-800 border border-white/5 rounded-2xl px-6 py-5 open:border-brand-500/30">
                  <summary className="cursor-pointer list-none font-medium text-white flex justify-between gap-4">
                    {f.q}
                    <span className="text-brand-300 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="text-zinc-400 text-sm leading-relaxed mt-3">{f.a}</p>
                </details>
              ))}
            </div>
            <p className="text-zinc-400 text-sm mt-6 text-center">
              Leia a <Link href="/refund-policy" className="text-brand-300 underline underline-offset-2">política de reembolso</Link> completa ou o{" "}
              <Link href="/blog/subscricao-iptv-portugal" className="text-brand-300 underline underline-offset-2">guia da subscrição de IPTV</Link>.
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 px-4 bg-gradient-to-b from-ink-950 to-ink-900 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-4">Ainda com dúvidas?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Experimente IPTV Portugal grátis durante 24 horas</h2>
            <p className="text-zinc-400 text-lg mb-8">
              Sem cartão de crédito. Sem compromisso. Basta enviar-nos mensagem no WhatsApp e ativamos o seu teste grátis em minutos.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={TRIAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-500 hover:bg-brand-400 text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-sm w-full sm:w-auto text-center"
              >
                Começar Teste Grátis de 24 Horas
              </a>
              <Link
                href="/product/6-meses-iptv-portugal"
                className="border border-white/15 hover:border-brand-500/40 text-zinc-300 hover:text-white font-medium px-8 py-3.5 rounded-full transition-colors text-sm w-full sm:w-auto text-center"
              >
                Ver Plano Mais Popular
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
