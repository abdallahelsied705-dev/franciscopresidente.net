import { Star, Quote } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ClientClones from "./ClientClones";

const reviews = [
  {
    name: "João T.",
    location: "Lisboa",
    avatar: "JT",
    rating: 5,
    title: "Cortei o cabo e nunca olhei para trás",
    body: "Pagava quase 45€ por mês de TV por cabo e mal via metade. Isto dá-me muito mais canais, o 4K fica mais nítido na minha TV e sai a poucos euros por mês ao longo do ano. Estável desde que mudei.",
    plan: "Plano 12 Meses",
  },
  {
    name: "Sofia M.",
    location: "Porto",
    avatar: "SM",
    rating: 5,
    title: "Pensei que fosse complicado — não foi",
    body: "Não percebo nada de tecnologia, mas o guia do Firestick explicou tudo e em cerca de dez minutos já estava a ver. O desporto em direto era o mais importante para mim e está lá tudo em HD.",
    plan: "Plano 3 Meses",
  },
  {
    name: "David K.",
    location: "Braga",
    avatar: "DK",
    rating: 5,
    title: "O mais estável que já usei",
    body: "Já andei por alguns serviços de IPTV e este é o primeiro que não falha num domingo à tarde de jogos. Quando contactei o suporte responderam mesmo depressa. A gravação é o que fecha o negócio para mim.",
    plan: "Plano 12 Meses",
  },
  {
    name: "Inês R.",
    location: "Coimbra",
    avatar: "IR",
    rating: 5,
    title: "Resolveu a casa toda",
    body: "Com quatro ligações ninguém discute o comando — os miúdos têm os desenhos, o meu marido tem o jogo, eu vejo as minhas séries, tudo ao mesmo tempo. Sinceramente, uma pechincha pelo que faz.",
    plan: "Plano 12 Meses",
  },
  {
    name: "Rui H.",
    location: "Faro",
    avatar: "RH",
    rating: 5,
    title: "A oferta internacional é o melhor",
    body: "Ando entre canais portugueses e imensos canais brasileiros e europeus, e a imagem aguenta-se tão bem nesses como nos principais. A variedade surpreendeu-me mesmo.",
    plan: "Plano 3 Meses",
  },
  {
    name: "Carolina W.",
    location: "Aveiro",
    avatar: "CW",
    rating: 4,
    title: "Poder simplesmente mandar mensagem é ótimo",
    body: "Mandei mensagem numa noite com uma dúvida simples de instalação e tive resposta em minutos. Isso não se tem com os grandes operadores. Está estável há quatro meses.",
    plan: "Plano 1 Mês",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "fill-yellow-400 text-yellow-400" : "text-zinc-600"}
        />
      ))}
    </div>
  );
}

function Avatar({ initials }: { initials: string }) {
  const colors: Record<string, string> = {
    JT: "from-brand-500 to-brand-700",
    SM: "from-accent-400 to-accent-600",
    DK: "from-violet-500 to-violet-700",
    IR: "from-emerald-500 to-emerald-700",
    RH: "from-sky-400 to-sky-600",
    CW: "from-rose-500 to-rose-700",
  };
  return (
    <div
      className={`w-10 h-10 rounded-full bg-gradient-to-br ${colors[initials] ?? "from-brand-500 to-brand-700"} ring-2 ring-white/10 flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
    >
      {initials}
    </div>
  );
}

function ReviewCard({ r }: { r: (typeof reviews)[number] }) {
  return (
    <div className="spotlight relative w-[340px] shrink-0 rounded-3xl border border-white/[0.07] bg-ink-900/90 p-6 transition-colors hover:border-brand-500/30 sm:w-[380px]">
      <Quote size={36} className="absolute right-5 top-5 text-white/[0.05]" />
      <div className="mb-4 flex items-center gap-3">
        <Avatar initials={r.avatar} />
        <div>
          <p className="text-sm font-semibold text-white">{r.name}</p>
          <p className="text-xs text-zinc-500">{r.location}</p>
        </div>
        <span className="ml-auto whitespace-nowrap rounded-full bg-brand-500/15 px-2.5 py-1 text-xs font-medium text-brand-300">
          {r.plan}
        </span>
      </div>
      <Stars count={r.rating} />
      <h3 className="mb-2 mt-3 text-sm font-semibold text-white">{r.title}</h3>
      <p className="text-sm leading-relaxed text-zinc-400">{r.body}</p>
    </div>
  );
}

export default function Testimonials() {
  const half = Math.ceil(reviews.length / 2);
  const rows = [reviews.slice(0, half), reviews.slice(half)];

  return (
    <section id="reviews" className="relative overflow-hidden bg-ink-900 py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-500/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Avaliações de Clientes"
          title={
            <>
              O que dizem os <span className="text-gradient">espetadores em Portugal</span>
            </>
          }
          className="mb-10!"
        />

        <p className="reveal -mt-4 mb-14 text-center text-zinc-400">
          Não acredite só na palavra deles —{" "}
          <a href="#pricing" className="text-brand-300 underline underline-offset-4 hover:text-brand-200">
            experimente grátis durante 24 horas
          </a>
          .
        </p>
      </div>

      <div className="reveal flex flex-col gap-5">
        {rows.map((row, idx) => (
          <div key={idx} className="mask-x pause-on-hover flex overflow-hidden">
            <div
              className={`flex shrink-0 gap-5 pr-5 ${idx % 2 ? "animate-marquee-reverse" : "animate-marquee"} [animation-duration:60s]`}
            >
              {row.map((r) => (
                <ReviewCard key={r.name} r={r} />
              ))}
              <ClientClones count={3}>
                {row.map((r) => (
                  <ReviewCard key={r.name} r={r} />
                ))}
              </ClientClones>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
