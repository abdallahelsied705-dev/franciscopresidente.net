import { Tv2, Wifi, MonitorPlay, Globe, Clock, HeadphonesIcon } from "lucide-react";
import SectionHeader from "./SectionHeader";

const features = [
  {
    icon: Tv2,
    title: "+50.000 Canais em Direto",
    description:
      "Canais portugueses e premium a par de desporto, notícias, infantil e milhares de opções internacionais — uma só biblioteca com todos os géneros e regiões.",
    span: "lg:col-span-2",
    tint: "from-brand-500/25",
  },
  {
    icon: MonitorPlay,
    title: "Imagem até 4K",
    description:
      "Transmissão em SD, HD, Full HD e 4K com áudio de qualidade Dolby, ajustada automaticamente ao que a sua ligação conseguir suportar.",
    tint: "from-accent-500/20",
  },
  {
    icon: Wifi,
    title: "Estável nas Noites de Pico",
    description:
      "Servidores com balanceamento de carga e entrega anti-bloqueio mantêm a imagem estável no desporto de sábado à noite, não só às 3 da manhã.",
    tint: "from-sky-500/20",
  },
  {
    icon: Globe,
    title: "Qualquer Aparelho Que Tenha",
    description:
      "Firestick, Smart TV, Android, iPhone, iPad, box MAG, Windows ou Mac — se corre uma app de IPTV, corre o nosso serviço.",
    tint: "from-brand-500/20",
  },
  {
    icon: Clock,
    title: "Gravação de 7 Dias",
    description:
      "Perdeu o jogo ou o episódio de ontem? Recue até sete dias nos canais compatíveis e veja quando lhe der mais jeito.",
    tint: "from-violet-500/20",
  },
  {
    icon: HeadphonesIcon,
    title: "Pessoas Reais no WhatsApp",
    description:
      "Ajuda na instalação e resolução de problemas com uma pessoa a sério, a qualquer hora do dia, no mesmo número de WhatsApp com que subscreve.",
    span: "lg:col-span-3",
    tint: "from-emerald-500/15",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-ink-950 py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Porquê Escolher-nos"
          title={
            <>
              Tudo o que precisa, <span className="text-gradient">nada do que não precisa</span>
            </>
          }
          subtitle="Feito para quem está farto do cabo caro e de ofertas com letras pequenas. Um preço que não muda, sem cobranças-surpresa e sem jargão."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description, span, tint }, i) => (
            <div
              key={title}
              className={`reveal from-scale spotlight group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-ink-900 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/40 ${span ?? ""}`}
              style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <div className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${tint} to-transparent blur-2xl transition-transform duration-700 group-hover:scale-150`} />
              <div className="relative">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-brand-500/30 to-brand-700/10 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                  <Icon size={22} className="text-brand-300" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
                <p className="max-w-md text-sm leading-relaxed text-zinc-400">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
