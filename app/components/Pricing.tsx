"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const deviceOptions = [1, 2, 3, 4];

const plans = [
  {
    name: "1 Mês",
    slug: "1-mes-iptv-portugal",
    basePrice: 12.99,
    devicePrices: { 1: "12,99", 2: "19", 3: "25", 4: "31" },
    period: "pagamento único",
    description: "Experimente antes de se comprometer",
    highlight: false,
  },
  {
    name: "3 Meses",
    slug: "3-meses-iptv-portugal",
    basePrice: 29.99,
    devicePrices: { 1: "29,99", 2: "42", 3: "54", 4: "66" },
    period: "a cada 3 meses",
    description: "Uma temporada de desporto garantida",
    highlight: false,
  },
  {
    name: "6 Meses",
    slug: "6-meses-iptv-portugal",
    basePrice: 47.99,
    devicePrices: { 1: "47,99", 2: "66", 3: "84", 4: "102" },
    period: "a cada 6 meses",
    badge: "Popular",
    description: "O equilíbrio ideal entre preço e flexibilidade",
    highlight: true,
  },
  {
    name: "12 Meses",
    slug: "12-meses-iptv-portugal",
    basePrice: 79.99,
    devicePrices: { 1: "79,99", 2: "110", 3: "140", 4: "170" },
    period: "por ano",
    description: "O melhor preço por mês, num só pagamento",
    highlight: false,
  },
  {
    name: "24 Meses",
    slug: "24-meses-iptv-portugal",
    basePrice: 129,
    devicePrices: { 1: "129", 2: "175", 3: "220", 4: "265" },
    period: "a cada 2 anos",
    badge: "Melhor Valor",
    description: "Garanta o preço mais baixo e esqueça",
    highlight: false,
  },
];

const features = [
  "+50.000 Canais em Direto",
  "Qualidade 4K Ultra HD",
  "Gravação TV de 7 Dias",
  "Biblioteca VOD (200.000+ títulos)",
  "Suporte Prioritário 24/7",
  "Ajuda Grátis na Instalação",
];

const highlights = [
  { icon: "📱", label: "Veja em qualquer aparelho" },
  { icon: "❄️", label: "Tecnologia Anti-Bloqueio 9.8" },
  { icon: "🎬", label: "+200 mil Filmes e Séries (VOD)" },
  { icon: "📺", label: "+50.000 Canais Premium em Direto" },
  { icon: "🎥", label: "Qualidade 4K / HD / FHD / UHD" },
  { icon: "🔄", label: "Atualizações Grátis e Automáticas" },
  { icon: "📅", label: "Guia EPG Disponível" },
  { icon: "↩️", label: "Reembolso em 48 Horas" },
  { icon: "🎧", label: "Suporte Grátis 24/7" },
  { icon: "🔒", label: "Proteção de Privacidade e VPN integrada" },
];

export default function Pricing() {
  const [devices, setDevices] = useState<1 | 2 | 3 | 4>(1);

  return (
    <section id="pricing" className="relative overflow-hidden bg-ink-900 py-28">
      <div className="pointer-events-none absolute -left-40 top-40 h-[420px] w-[420px] rounded-full bg-brand-600/20 blur-[120px] animate-aurora" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-accent-600/15 blur-[120px] animate-aurora [animation-delay:-8s]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Preços"
          title={
            <>
              Preços simples e <span className="text-gradient">honestos</span>
            </>
          }
          subtitle="Um preço claro por plano. Sem taxas escondidas, sem contrato renovável e um teste grátis de 24 horas antes de decidir."
          className="mb-12!"
        />

        {/* Device selector */}
        <div className="reveal mb-14 flex flex-col items-center">
          <p className="mb-4 text-sm text-zinc-400">De quantos aparelhos precisa?</p>
          <div className="relative inline-grid grid-cols-4 rounded-full border border-white/10 bg-ink-800 p-1">
            {/* Sliding pill */}
            <span
              className="absolute inset-y-1 left-1 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 shadow-lg shadow-brand-600/40 transition-transform duration-300 ease-out"
              style={{ width: "calc((100% - 0.5rem) / 4)", transform: `translateX(${(devices - 1) * 100}%)` }}
            />
            {deviceOptions.map((d) => (
              <button
                key={d}
                onClick={() => setDevices(d as 1 | 2 | 3 | 4)}
                className={`relative z-10 whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold transition-colors sm:px-5 ${
                  devices === d ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {d} {d === 1 ? "Aparelho" : "Aparelhos"}
              </button>
            ))}
          </div>
        </div>

        {/* Plans grid */}
        <div className="mb-10 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {plans.map((plan, i) => {
            const price = plan.devicePrices[devices as keyof typeof plan.devicePrices];
            const href = `https://wa.me/212707711512?text=${encodeURIComponent(`IPTV Portugal - ${plan.name} / ${devices} ${devices === 1 ? "Aparelho" : "Aparelhos"} - ${price}€`)}`;

            const body = (
              <div
                className={`relative flex h-full flex-col rounded-[1.2rem] p-6 ${
                  plan.highlight ? "bg-gradient-to-b from-ink-700 to-ink-900" : ""
                }`}
              >
                {plan.badge && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-bold ${
                      plan.highlight
                        ? "bg-gradient-to-r from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-600/40"
                        : "bg-white text-brand-700"
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                <p className="mb-0.5 text-base font-bold text-white">{plan.name}</p>
                <p className="mb-5 text-xs text-zinc-500">{plan.description}</p>

                <div className="mb-1 flex items-start gap-1">
                  <span key={price} className="font-display text-5xl font-bold text-white animate-[pop_0.4s_ease-out]">
                    {price}
                  </span>
                  <span className="mt-1.5 text-lg font-semibold text-zinc-400">€</span>
                </div>
                <p className="mb-6 text-xs text-zinc-500">
                  {plan.period} · {devices} {devices === 1 ? "ligação" : "ligações"}
                </p>

                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group mt-auto flex items-center justify-center gap-1.5 rounded-full py-3 text-sm font-semibold transition-all ${
                    plan.highlight
                      ? "bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-600/40 hover:shadow-brand-500/60"
                      : "border border-white/15 bg-white/5 text-white hover:border-brand-500/60 hover:bg-brand-500/15"
                  }`}
                >
                  Subscrever Agora
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  href={`/product/${plan.slug}`}
                  className="mt-3 text-center text-xs text-zinc-400 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  Detalhes do plano {plan.name}
                </Link>
              </div>
            );

            return (
              <div
                key={plan.name}
                className="reveal"
                style={{ "--delay": `${i * 90}ms` } as React.CSSProperties}
              >
                {plan.highlight ? (
                  <div className="glow-border h-full lg:-my-4 lg:scale-105">{body}</div>
                ) : (
                  <div className="spotlight h-full rounded-[1.25rem] border border-white/10 bg-ink-800/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                    {body}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Features included in all plans */}
        <div className="reveal glass rounded-2xl p-7">
          <p className="mb-5 text-xs font-medium uppercase tracking-wider text-zinc-400">
            Incluído em todos os planos
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-2 text-sm text-zinc-300">
                <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/20">
                  <Check size={11} className="text-brand-300" />
                </span>
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* Highlights grid */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {highlights.map((h, i) => (
            <div
              key={h.label}
              className="reveal flex items-center gap-3 rounded-xl border border-white/[0.06] bg-ink-800/60 px-4 py-3 transition-colors hover:border-brand-500/30"
              style={{ "--delay": `${(i % 5) * 50}ms` } as React.CSSProperties}
            >
              <span className="flex-shrink-0 text-xl">{h.icon}</span>
              <span className="text-xs font-medium leading-snug text-zinc-300">{h.label}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-zinc-500">
          Todos os planos começam com um teste grátis de 24 horas. Envie-nos mensagem no WhatsApp para o ativar — sem dados de cartão.
        </p>
      </div>
    </section>
  );
}
