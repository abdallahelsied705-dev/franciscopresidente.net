import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, Mail, MessageCircle, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import { SITE_URL } from "../lib/site";

const BASE_URL = SITE_URL;

export const metadata: Metadata = {
  title: { absolute: "Contactar o Suporte IPTV Portugal — WhatsApp e Email 24/7" },
  description:
    "Obtenha ajuda imediata do suporte IPTV Portugal. Disponível 24/7 por WhatsApp ou email para instalação, pagamentos e questões técnicas. Resposta habitual: menos de 5 minutos.",
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: "Contactar o IPTV Portugal — Suporte 24/7",
    description: "Fale com a nossa equipa de suporte de imediato por WhatsApp ou email.",
    url: `${BASE_URL}/contact`,
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contactar o IPTV Portugal",
  url: `${BASE_URL}/contact`,
  description: "Contacte o suporte IPTV Portugal por WhatsApp ou email.",
};

const channels = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "A forma mais rápida de nos contactar. Resposta em minutos, de dia ou de noite.",
    action: "Falar no WhatsApp",
    href: "https://wa.me/212707711512?text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20com%20o%20IPTV%20Portugal",
    highlight: true,
    detail: "+212 707 711 512",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Para questões de pagamento, pedidos de reembolso ou problemas técnicos detalhados.",
    action: "Enviar Email",
    href: "mailto:goldengateiptv@gmail.com",
    highlight: false,
    detail: "goldengateiptv@gmail.com",
  },
];

const faqs = [
  { q: "Como obtenho o meu teste grátis?", a: "Envie-nos mensagem no WhatsApp — ativamos o seu teste em minutos." },
  { q: "Esqueci-me dos meus dados de acesso.", a: "Contacte-nos por WhatsApp ou email e recuperamos as suas credenciais." },
  { q: "As minhas transmissões estão a fazer buffering.", a: "Consulte o nosso guia de instalação e, se o problema persistir, contacte o suporte." },
  { q: "Como renovo a minha subscrição?", a: "Contacte-nos antes de a subscrição expirar e tratamos da renovação." },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-ink-950 text-white">
      <JsonLd data={contactSchema} />
      <Navbar />

      <div className="bg-ink-900 border-b border-white/5 pt-24 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-white text-sm mb-6 transition-colors">
            <ChevronLeft size={14} /> Voltar ao Início
          </Link>
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">Contacto</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Estamos aqui para ajudar</h1>
          <p className="text-zinc-400 text-lg max-w-xl">
            Suporte real de pessoas a sério — disponível 24 horas por dia, 7 dias por semana.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-14">
        {/* Availability banner */}
        <div className="flex items-center gap-3 bg-live-500/10 border border-live-500/20 rounded-xl px-5 py-3.5">
          <Clock size={16} className="text-live-400 flex-shrink-0" />
          <p className="text-live-300 text-sm">
            <span className="font-semibold">O suporte está disponível neste momento.</span>{" "}
            Tempo médio de resposta: menos de 5 minutos no WhatsApp.
          </p>
          <span className="ml-auto w-2 h-2 rounded-full bg-live-400 animate-pulse flex-shrink-0" />
        </div>

        {/* Contact channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {channels.map((ch) => (
            <div key={ch.title} className={`rounded-2xl p-7 border flex flex-col gap-4 ${ch.highlight ? "bg-[#25D366]/10 border-[#25D366]/30" : "bg-ink-800 border-white/5"}`}>
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${ch.highlight ? "bg-[#25D366]/20" : "bg-ink-700"}`}>
                <ch.icon size={20} className={ch.highlight ? "text-[#25D366]" : "text-brand-400"} />
              </div>
              <div>
                <h2 className="text-white font-bold text-lg mb-1">{ch.title}</h2>
                <p className="text-zinc-400 text-sm leading-relaxed mb-1">{ch.description}</p>
                <p className="text-zinc-500 text-xs">{ch.detail}</p>
              </div>
              <a
                href={ch.href}
                target={ch.href.startsWith("http") ? "_blank" : undefined}
                rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`mt-auto self-start font-semibold text-sm px-5 py-2.5 rounded-full transition-colors ${ch.highlight ? "bg-[#0e7a52] hover:bg-[#0b6a47] text-white" : "bg-brand-500 hover:bg-brand-400 text-white"}`}
              >
                {ch.action}
              </a>
            </div>
          ))}
        </div>

        {/* Common questions */}
        <div>
          <h2 className="text-xl font-bold text-white mb-6">Respostas Rápidas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-ink-800 border border-white/5 rounded-xl p-5">
                <p className="text-white font-semibold text-sm mb-2">{faq.q}</p>
                <p className="text-zinc-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
          <p className="text-zinc-500 text-sm mt-5">
            Mais perguntas?{" "}
            <Link href="/#faq" className="text-brand-400 hover:text-brand-300 transition-colors">Veja o nosso FAQ completo</Link>
            {" "}ou{" "}
            <Link href="/setup" className="text-brand-400 hover:text-brand-300 transition-colors">visite o guia de instalação</Link>.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
