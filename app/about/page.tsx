import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, Tv, Users, Globe, Shield } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import JsonLd from "../components/JsonLd";
import { SITE_URL } from "../lib/site";

const BASE_URL = SITE_URL;

export const metadata: Metadata = {
  title: { absolute: "Sobre o IPTV Portugal — A Nossa Abordagem ao Streaming" },
  description:
    "Quem somos: um serviço de IPTV Portugal assente em preços honestos, uma transmissão estável e suporte real por WhatsApp. Mais de 50.000 canais em direto em até 4K, sem contratos.",
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: "Sobre o IPTV Portugal — Serviço Premium de IPTV",
    description: "Um serviço de IPTV Portugal com mais de 50.000 canais em direto, streaming 4K e suporte 24/7 por WhatsApp.",
    url: `${BASE_URL}/about`,
  },
};

const stats = [
  { icon: Users, value: "24/7", label: "Suporte WhatsApp" },
  { icon: Tv, value: "50.000+", label: "Canais em Direto" },
  { icon: Globe, value: "Mundo inteiro", label: "Disponível" },
  { icon: Shield, value: "99,9%", label: "Disponibilidade" },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Sobre o IPTV Portugal",
  url: `${BASE_URL}/about`,
  description:
    "IPTV Portugal é um serviço de IPTV assente em preços honestos, uma transmissão estável e suporte real — mais de 50.000 canais em direto e 200.000+ títulos a pedido em até 4K.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ink-950 text-white">
      <JsonLd data={aboutSchema} />
      <Navbar />

      <div className="bg-ink-900 border-b border-white/5 pt-24 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-white text-sm mb-6 transition-colors">
            <ChevronLeft size={14} /> Voltar ao Início
          </Link>
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">Sobre Nós</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Uma forma mais simples de ver televisão em Portugal
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            O IPTV Portugal existe para dar aos espetadores uma alternativa mais barata e menos complicada ao satélite e ao cabo — um preço claro, uma transmissão estável e uma pessoa a sério no WhatsApp quando precisar.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="bg-ink-800 border border-white/5 rounded-2xl p-6 text-center">
              <Icon size={22} className="text-brand-400 mx-auto mb-3" />
              <p className="text-white font-bold text-2xl mb-1">{value}</p>
              <p className="text-zinc-400 text-xs">{label}</p>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Porque criámos isto</h2>
          <p className="text-zinc-300 leading-8">
            A televisão em Portugal tem seguido há anos numa só direção: faturas mensais mais altas, fidelizações mais longas, boxes extra para alugar e canais agrupados de forma a pagar por imenso que nunca vê. Achámos que os espetadores mereciam o oposto — os programas e o desporto em direto que as pessoas realmente querem, entregues diretamente pela internet que já pagam, a um preço que não foi desenhado para subir a cada renovação.
          </p>
          <p className="text-zinc-300 leading-8">
            Por isso o IPTV Portugal é propositadamente simples. Escolhe a duração que quer e de quantos aparelhos precisa, paga uma vez sem contrato renovável, e transmite mais de 50.000 canais em direto e 200.000+ títulos a pedido em até 4K através de uma app de IPTV normal no equipamento que já tem. Sem antena, sem técnico, sem letras pequenas.
          </p>
          <p className="text-zinc-300 leading-8">
            Preferimos merecer a próxima renovação do que prendê-lo a ela, e isso molda a forma como gerimos o serviço: uma transmissão afinada para se manter estável no desporto das horas de pico, novos canais e títulos adicionados sem custo extra, e ajuda na instalação por uma pessoa no WhatsApp em vez de uma fila de tickets.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-ink-800 border border-white/5 rounded-2xl p-8 space-y-4">
          <h2 className="text-2xl font-bold text-white">A Nossa Missão</h2>
          <p className="text-zinc-300 leading-8">
            Tornar a boa televisão em Portugal acessível e sem complicações para qualquer casa — preços justos, sem contratos, sem taxas escondidas e sem quebra de qualidade. A boa TV não devia estar reservada a quem está disposto a assinar um pacote de satélite caro.
          </p>
        </div>

        {/* Why us */}
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-white">Porque os Clientes Nos Escolhem</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ["Feito para se manter estável", "Os nossos servidores têm balanceamento de carga e estão afinados para as horas de pico em Portugal, por isso a imagem aguenta-se num jogo de domingo à tarde, não só a altas horas."],
              ["Uma pessoa a sério no WhatsApp", "A sua mensagem é respondida por uma pessoa, não por um bot nem por uma fila de tickets — o mesmo número de WhatsApp com que subscreve, a qualquer hora do dia."],
              ["Sem contratos longos", "De um mês a dois anos, à sua escolha, pago uma vez e sem nada a renovar em segundo plano. Sem fidelização, sem penalização de saída."],
              ["Só fica melhor", "Novos canais e títulos a pedido são adicionados sem custo extra, e agimos com base no que os clientes realmente nos pedem."],
            ].map(([title, desc]) => (
              <div key={title} className="bg-ink-800 border border-white/5 rounded-xl p-5">
                <p className="text-white font-semibold mb-2">{title}</p>
                <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-brand-950/40 to-ink-800 border border-brand-900/30 rounded-2xl p-10 text-center">
          <h3 className="text-white font-bold text-2xl mb-3">Pronto para se juntar a nós?</h3>
          <p className="text-zinc-400 mb-7 max-w-md mx-auto">
            Teste o serviço grátis durante 24 horas — sem dados de cartão. Veja primeiro como fica na sua própria TV.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/212707711512?text=IPTV%20Portugal%20-%20Teste%20Gr%C3%A1tis%20de%2024%20Horas"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-500 hover:bg-brand-400 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-colors"
            >
              Começar Teste Grátis
            </a>
            <Link href="/contact" className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-colors">
              Contactar-nos
            </Link>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
