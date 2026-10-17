"use client";

import { useState } from "react";
import { X } from "lucide-react";

const TRIAL_URL = "https://wa.me/212707711512?text=IPTV%20Portugal%20-%20Teste%20Gr%C3%A1tis%20de%2024%20Horas";

// Promotional strip above the navbar (home page only). Every claim here must be
// a standing fact of the offer — no countdowns or invented deadlines.
export default function OfferBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-[60] overflow-hidden bg-gradient-to-r from-brand-700 via-brand-600 to-accent-600 text-white">
      {/* Shimmer sweep */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-[sweep_5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="relative mx-auto flex h-[42px] max-w-7xl items-center justify-center gap-2 px-8 text-center sm:gap-3 sm:px-10">
        <span className="hidden rounded-full bg-white px-2.5 py-1 text-[11px] font-black uppercase tracking-widest text-brand-700 md:inline-flex">
          Teste Grátis
        </span>

        <p className="whitespace-nowrap text-xs font-bold sm:text-sm">
          <span className="hidden sm:inline">📺 Experimente IPTV Portugal grátis durante 24 horas — sem cartão · Planos desde apenas 5,38€/mês</span>
          <span className="sm:hidden">📺 Teste grátis 24 horas · Sem cartão</span>
        </p>

        <a
          href={TRIAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-700 transition-transform hover:scale-105 sm:px-4 sm:py-1.5"
        >
          Começar Teste
        </a>

        <button
          onClick={() => setDismissed(true)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 transition-colors hover:text-white"
          aria-label="Fechar"
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
}
