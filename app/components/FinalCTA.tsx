import { ArrowRight } from "lucide-react";

const TRIAL_URL = "https://wa.me/212707711512?text=IPTV%20Portugal%20-%20Teste%20Gr%C3%A1tis%20de%2024%20Horas";

export default function FinalCTA() {
  return (
    <section className="relative bg-ink-950 px-4 pb-28 sm:px-6 lg:px-8">
      <div className="reveal relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-brand-700 via-brand-800 to-ink-900 px-6 py-16 text-center sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-accent-400/30 blur-[100px] animate-aurora" />
        <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-accent-500/30 blur-[100px] animate-aurora [animation-delay:-6s]" />
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" />

        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-4xl font-bold text-white sm:text-5xl">
            Veja com os seus olhos — 24 horas, grátis, sem compromisso.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-brand-100/80">
            Envie uma mensagem no WhatsApp e tratamos do seu teste enquanto espera. Sem cartão, sem formulário de registo, sem obrigações.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={TRIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-2xl shadow-black/30 transition-transform hover:scale-105"
            >
              Começar Teste Grátis
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              Ver Planos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
