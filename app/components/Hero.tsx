import { ArrowRight, Play, ShieldCheck, Sparkles, Zap, Radio } from "lucide-react";
import CountUp from "./CountUp";

const TRIAL_URL = "https://wa.me/212707711512?text=IPTV%20Portugal%20-%20Teste%20Gr%C3%A1tis%20de%2024%20Horas";

const stats = [
  { to: 50000, suffix: "+", label: "Canais em direto" },
  { to: 200000, suffix: "+", label: "Filmes e séries" },
  { to: 99.9, decimals: 1, suffix: "%", label: "Disponibilidade" },
  { to: 24, suffix: "/7", label: "Suporte WhatsApp" },
];

const guide = [
  { ch: "101", name: "Desporto 1 UHD", show: "Futebol em Direto", live: true },
  { ch: "102", name: "Cinema Estreia", show: "Noite de Cinema" },
  { ch: "103", name: "Entretenimento HD", show: "Horário Nobre" },
  { ch: "104", name: "Notícias 24", show: "Cobertura Nacional" },
];

const ribbon = [
  "⚽ Desporto em Direto",
  "🎬 200 mil+ Filmes",
  "📺 50.000+ Canais",
  "⚡ 4K Ultra HD",
  "📰 Notícias 24/7",
  "👶 Infantil",
  "🌍 Internacional",
  "↩️ Gravação 7 Dias",
  "🇵🇹 Canais Portugueses",
  "🎵 Música",
];

// Rising particle field — purely decorative, each dot drifts up and fades.
const particles = [
  { left: "8%", delay: "0s", dur: "7s", size: 4 },
  { left: "22%", delay: "2.4s", dur: "8.5s", size: 3 },
  { left: "37%", delay: "4.1s", dur: "6.5s", size: 5 },
  { left: "54%", delay: "1.2s", dur: "9s", size: 3 },
  { left: "68%", delay: "3.3s", dur: "7.5s", size: 4 },
  { left: "81%", delay: "5s", dur: "8s", size: 3 },
  { left: "93%", delay: "2s", dur: "6.8s", size: 4 },
];

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as React.CSSProperties;

function ScreenStack() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* Spinning conic ring behind the screen */}
      <div className="conic-ring absolute left-1/2 top-1/2 -z-10 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] opacity-30 blur-md" />

      <div className="animate-float">
        <div className="glow-border rounded-[1.6rem]">
          <div className="relative rounded-[1.5rem] bg-ink-900 p-3">
            {/* Screen */}
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-brand-900 via-ink-800 to-ink-950">
              {/* Sunset wash */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(242,92,35,0.40),transparent_62%)]" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 origin-bottom bg-[repeating-linear-gradient(90deg,rgba(242,92,35,0.12)_0_40px,rgba(242,92,35,0.04)_40px_80px)] [transform:perspective(400px)_rotateX(55deg)]" />
              <div className="absolute bottom-[18%] left-1/2 h-16 w-16 -translate-x-1/2 rounded-full border border-white/20 [transform:perspective(400px)_rotateX(55deg)]" />

              {/* Scan line */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-transparent via-white/[0.06] to-transparent animate-scan" />

              {/* Top HUD */}
              <div className="absolute left-3 top-3 flex items-center gap-2">
                <span className="flex items-center gap-1.5 rounded-md bg-live-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                  Direto
                </span>
                <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur">
                  4K UHD
                </span>
              </div>
              <div className="absolute right-3 top-3 flex h-4 items-end gap-0.5">
                {[0, 150, 300, 450, 600].map((d) => (
                  <span
                    key={d}
                    className="h-full w-1 origin-bottom rounded-sm bg-brand-300 animate-eq"
                    style={{ animationDelay: `${d}ms` }}
                  />
                ))}
              </div>

              {/* Scoreboard */}
              <div className="glass absolute left-1/2 top-[38%] flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-xl px-3 py-1.5 text-white sm:gap-3 sm:px-4 sm:py-2">
                <span className="text-xs font-semibold text-zinc-300">CASA</span>
                <span className="font-mono text-base font-bold sm:text-lg">2 – 1</span>
                <span className="text-xs font-semibold text-zinc-300">FORA</span>
                <span className="ml-1 rounded bg-brand-500/30 px-1.5 text-[10px] font-semibold text-brand-200">2.ª parte</span>
              </div>

              {/* Progress bar */}
              <div className="absolute inset-x-3 bottom-3">
                <div className="h-1 overflow-hidden rounded-full bg-white/15">
                  <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-brand-400 to-accent-500" />
                </div>
              </div>
            </div>

            {/* Mini guide */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              {guide.map((g) => (
                <div
                  key={g.ch}
                  className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-left transition-colors ${
                    g.live ? "bg-brand-500/15 ring-1 ring-brand-500/40" : "bg-white/[0.03] hover:bg-white/[0.06]"
                  }`}
                >
                  <span className="font-mono text-[10px] text-zinc-500">{g.ch}</span>
                  <div className="min-w-0">
                    <p className="truncate text-[11px] font-semibold text-white">{g.name}</p>
                    <p className="truncate text-[10px] text-zinc-400">{g.show}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <div className="glass absolute -left-6 top-1/4 hidden items-center gap-2 rounded-xl px-3 py-2 shadow-2xl shadow-black/40 animate-bob [animation-delay:-2s] sm:flex">
        <Zap size={14} className="text-brand-300" />
        <span className="text-xs font-semibold text-white">0 buffering</span>
      </div>
      <div className="glass absolute -right-4 bottom-24 hidden items-center gap-2 rounded-xl px-3 py-2 shadow-2xl shadow-black/40 animate-bob [animation-delay:-4s] sm:flex">
        <span className="text-sm leading-none">🇵🇹</span>
        <span className="text-xs font-semibold text-white">Canais portugueses</span>
      </div>
      <div className="glass absolute -right-6 top-6 hidden items-center gap-2 rounded-xl px-3 py-2 shadow-2xl shadow-black/40 animate-bob [animation-delay:-1s] md:flex">
        <ShieldCheck size={14} className="text-accent-400" />
        <span className="text-xs font-semibold text-white">VPN integrada</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-16 pt-36 sm:pt-44">
      {/* Animated sunset + mesh background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="anim-gradient absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 60% at 15% 10%, rgba(242,92,35,0.24), transparent 60%), radial-gradient(55% 55% at 85% 20%, rgba(240,168,31,0.16), transparent 60%), radial-gradient(60% 60% at 50% 100%, rgba(255,157,114,0.18), transparent 60%)",
          }}
        />
        <div className="absolute -top-40 left-[-10%] h-[520px] w-[620px] bg-brand-600/30 blur-[120px] animate-blob" />
        <div className="absolute right-[-10%] top-16 h-[460px] w-[520px] bg-accent-500/15 blur-[120px] animate-blob [animation-delay:-5s]" />
        <div className="absolute bottom-[-20%] left-1/3 h-[420px] w-[520px] bg-brand-400/15 blur-[120px] animate-aurora [animation-delay:-12s]" />
        <div className="bg-grid absolute inset-0" />

        {/* Rising particles */}
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute bottom-24 rounded-full bg-brand-300/70 animate-rise"
            style={{ left: p.left, width: p.size, height: p.size, animationDelay: p.delay, animationDuration: p.dur }}
          />
        ))}

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <div className="hero-in inline-flex items-center gap-2 rounded-full border border-brand-500/25 bg-brand-500/10 px-4 py-1.5 text-xs font-medium text-brand-100 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-live-500" />
            </span>
            A transmitir em direto por todo o Portugal
            <span className="leading-none">🇵🇹</span>
          </div>

          <h1 className="mt-7 text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            <span className="text-gradient">IPTV Portugal</span>
            <span className="mt-2 block text-white">feito de forma honesta</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl lg:mx-0">
            Uma subscrição de IPTV Portugal com mais de 50.000 canais em direto e 200.000 filmes e séries em até 4K,
            entregues diretamente pela sua internet. Sem antena parabólica, sem contrato de dois anos e sem buffering
            numa ligação estável — apenas streaming fiável nos aparelhos que já tem.
          </p>

          <div
            className="hero-in mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            style={delay(240)}
          >
            <a
              href={TRIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-600 to-brand-400 px-8 py-4 text-base font-semibold text-ink-950 shadow-[0_10px_40px_-10px_rgba(242,92,35,0.9)] transition-transform hover:scale-[1.03] sm:w-auto"
            >
              Começar Teste Grátis
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#pricing"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base text-zinc-200 backdrop-blur transition-colors hover:border-brand-400/50 hover:text-white sm:w-auto"
            >
              <Play size={16} className="fill-current" />
              Ver Planos
            </a>
          </div>

          <p className="hero-in mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-zinc-500 lg:justify-start" style={delay(320)}>
            <span className="inline-flex items-center gap-1.5"><Sparkles size={14} className="text-accent-400" /> Teste grátis de 24 horas</span>
            <span className="inline-flex items-center gap-1.5"><Radio size={14} className="text-brand-300" /> Sem dados de cartão</span>
            <span className="inline-flex items-center gap-1.5"><Zap size={14} className="text-brand-300" /> Pronto em minutos</span>
          </p>
        </div>

        {/* Visual */}
        <div className="hero-in animate-tilt" style={delay(200)}>
          <ScreenStack />
        </div>
      </div>

      {/* Scrolling category ribbon */}
      <div className="relative z-10 mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mask-x pause-on-hover flex overflow-hidden rounded-2xl border border-white/10 bg-ink-900/60 py-3 backdrop-blur">
          <div className="flex shrink-0 animate-marquee items-center gap-3 pr-3 [animation-duration:45s]">
            {[...ribbon, ...ribbon].map((r, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm font-medium text-zinc-300"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 mx-auto mt-14 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="reveal grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="group bg-ink-900/90 px-6 py-6 text-center backdrop-blur transition-colors hover:bg-ink-800/90">
              <p className="font-display text-3xl font-bold text-white">
                <CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500 transition-colors group-hover:text-brand-300">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
