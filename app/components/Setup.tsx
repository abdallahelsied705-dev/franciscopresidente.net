import { CreditCard, Download, Tv2, MessageCircle } from "lucide-react";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    number: "01",
    icon: CreditCard,
    title: "Escolha um Plano (ou Teste)",
    description:
      "Escolha a duração e o número de aparelhos que lhe convêm, de um mês a dois anos — ou comece primeiro pelo teste grátis de 24 horas. Não são precisos dados de cartão para experimentar.",
    detail: "Ativado assim que paga",
  },
  {
    number: "02",
    icon: Download,
    title: "Instale uma App Gratuita",
    description:
      "Instale qualquer app de IPTV no seu aparelho — TiviMate, IPTV Smarters Pro ou GSE Smart IPTV funcionam todas. Indicamos-lhe a mais indicada para o seu equipamento.",
    detail: "Guias para cada aparelho",
  },
  {
    number: "03",
    icon: Tv2,
    title: "Cole os Dados e Veja",
    description:
      "Introduza o link M3U ou os dados Xtream Codes que lhe enviamos e a sua grelha completa, gravação e biblioteca a pedido carregam de imediato.",
    detail: "A ver em menos de 5 minutos",
  },
];

export default function Setup() {
  return (
    <section id="setup" className="relative overflow-hidden bg-ink-950 py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Instalação Fácil"
          title={
            <>
              Pronto a usar em <span className="text-gradient">3 passos simples</span>
            </>
          }
          subtitle="Não são precisos conhecimentos técnicos. Se consegue instalar uma app, consegue pôr isto a funcionar."
        />

        <div className="relative">
          {/* Connector line (desktop) with travelling pulse */}
          <div className="absolute left-[calc(16.66%+2.5rem)] right-[calc(16.66%+2.5rem)] top-10 hidden h-px overflow-hidden bg-white/10 lg:block">
            <div className="h-full w-1/3 animate-[sweep_3.5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-brand-400 to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {steps.map(({ number, icon: Icon, title, description, detail }, i) => (
              <div
                key={number}
                className="reveal group relative flex flex-col items-center text-center"
                style={{ "--delay": `${i * 150}ms` } as React.CSSProperties}
              >
                <div className="relative mb-8">
                  <div className="absolute inset-0 rounded-full bg-brand-500/40 blur-xl transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 ring-8 ring-ink-950 transition-transform duration-500 group-hover:scale-110">
                    <Icon size={30} className="text-white" />
                  </div>
                  <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-accent-500 to-accent-600 text-xs font-bold text-white ring-4 ring-ink-950">
                    {number.slice(1)}
                  </span>
                </div>

                <div className="spotlight w-full rounded-3xl border border-white/[0.07] bg-ink-900/80 p-7 transition-colors duration-300 group-hover:border-brand-500/30">
                  <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
                  <p className="mx-auto mb-5 max-w-xs text-sm leading-relaxed text-zinc-400">{description}</p>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-live-500/20 bg-live-500/10 px-3 py-1.5 text-xs font-medium text-live-400">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-live-400" />
                    {detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <div className="reveal relative mt-16 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-brand-900/60 via-ink-800 to-ink-800 p-8 sm:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#25D366]/15 blur-3xl" />
          <div className="relative flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="mb-1 text-xl font-semibold text-white">Precisa de ajuda para começar?</p>
              <p className="text-sm text-zinc-400">A nossa equipa de suporte configura tudo por si — gratuitamente.</p>
            </div>
            <a
              href="https://wa.me/212707711512?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20para%20configurar%20o%20meu%20IPTV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-[#0e7a52] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/20 transition-transform hover:scale-105"
            >
              <MessageCircle size={16} />
              Ajuda Grátis na Instalação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
