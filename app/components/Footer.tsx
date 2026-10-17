import Link from "next/link";
import { Tv, Mail } from "lucide-react";

const links: Record<string, { label: string; href: string }[]> = {
  Produto: [
    { label: "Visão Geral", href: "/product" },
    { label: "Funcionalidades", href: "/#features" },
    { label: "Canais", href: "/#channels" },
    { label: "Preços", href: "/#pricing" },
    { label: "Melhor IPTV Portugal 2026", href: "/blog/melhor-iptv-portugal" },
    { label: "Subscrição IPTV Portugal", href: "/blog/subscricao-iptv-portugal" },
    { label: "Blog", href: "/blog" },
    { label: "Guia de Instalação", href: "/setup" },
    { label: "Teste Grátis", href: "/#pricing" },
  ],
  Empresa: [
    { label: "Sobre Nós", href: "/about" },
    { label: "Contactos", href: "/contact" },
    { label: "FAQ", href: "/#faq" },
  ],
  Legal: [
    { label: "Política de Privacidade", href: "/privacy-policy" },
    { label: "Termos de Serviço", href: "/terms-of-service" },
    { label: "Política de Reembolso", href: "/refund-policy" },
    { label: "DMCA", href: "/dmca" },
  ],
};

const WHATSAPP = "https://wa.me/212707711512";
const EMAIL = "goldengateiptv@gmail.com";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[800px] -translate-x-1/2 rounded-full bg-brand-700/15 blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2.5 text-lg font-bold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500">
                <Tv className="text-white" size={18} />
              </span>
              <span className="font-display">
                IPTV<span className="text-brand-400"> Portugal</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Uma subscrição de IPTV Portugal simples e direta — mais de 50.000 canais em direto e 200.000 filmes e séries em até 4K, entregues pela sua internet com suporte no WhatsApp.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/212707711512?text=IPTV%20Portugal%20-%20Teste%20Gr%C3%A1tis%20de%2024%20Horas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-brand-600/30 transition-transform hover:scale-105"
              >
                Teste Grátis
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white text-xs transition-colors"
              >
                WhatsApp: +212 707 711 512
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-1.5 text-zinc-400 hover:text-white text-xs transition-colors"
              >
                <Mail size={12} />
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="text-white font-semibold text-sm mb-4">{group}</p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-zinc-400 transition-all hover:pl-1 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-xs">
            &copy; {new Date().getFullYear()} IPTV Portugal. Todos os direitos reservados.
          </p>
          <p className="text-zinc-600 text-xs">
            Para fins de entretenimento. Por favor, cumpra a legislação local.
          </p>
        </div>
      </div>
    </footer>
  );
}
