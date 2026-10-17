import Link from "next/link";
import { Check, Minus } from "lucide-react";

// Answer-first content for the "IPTV Portugal" query: short, quotable passages and
// tables that search engines and AI answers can lift directly.

const facts = [
  { label: "Canais em direto", value: "50.000+" },
  { label: "Filmes e séries", value: "200.000+" },
  { label: "Preço desde", value: "5,38€ / mês" },
  { label: "Teste grátis", value: "24 horas" },
  { label: "Qualidade de imagem", value: "Até 4K" },
  { label: "Tempo de instalação", value: "Menos de 5 min" },
];

const plans = [
  { plan: "1 mês", price: 12.99, months: 1, slug: "1-mes-iptv-portugal" },
  { plan: "3 meses", price: 29.99, months: 3, slug: "3-meses-iptv-portugal" },
  { plan: "6 meses", price: 47.99, months: 6, slug: "6-meses-iptv-portugal" },
  { plan: "12 meses", price: 79.99, months: 12, slug: "12-meses-iptv-portugal" },
  { plan: "24 meses", price: 129, months: 24, slug: "24-meses-iptv-portugal" },
];

const eur = (n: number) => `${n.toFixed(2).replace(".", ",")}€`;

const comparison: { feature: string; iptv: string | boolean; satellite: string | boolean; cable: string | boolean }[] = [
  { feature: "Custo mensal", iptv: "Desde 5,38€", satellite: "35€–60€", cable: "30€–50€" },
  { feature: "Contrato", iptv: "Nenhum", satellite: "12–24 meses", cable: "12 meses" },
  { feature: "Antena ou visita de técnico", iptv: false, satellite: true, cable: true },
  { feature: "Canais em direto", iptv: "50.000+", satellite: "150–400", cable: "~200" },
  { feature: "Ver no telemóvel, tablet e TV", iptv: true, satellite: "Custo extra", cable: "Custo extra" },
  { feature: "Funciona no estrangeiro", iptv: true, satellite: false, cable: false },
];

function Cell({ value, good }: { value: string | boolean; good?: boolean }) {
  if (value === true)
    return <Check size={18} className={good ? "mx-auto text-live-400" : "mx-auto text-zinc-400"} aria-label="Sim" />;
  if (value === false) return <Minus size={18} className="mx-auto text-zinc-600" aria-label="Não" />;
  return <span className={good ? "font-semibold text-white" : "text-zinc-400"}>{value}</span>;
}

export default function IptvUkGuide() {
  return (
    <section id="o-que-e-iptv-portugal" className="relative bg-ink-950 py-24" aria-labelledby="o-que-e-iptv-portugal-title">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        {/* Definition */}
        <div className="reveal lg:col-span-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            IPTV Portugal explicado
          </span>
          <h2 id="o-que-e-iptv-portugal-title" className="mt-5 text-3xl font-bold text-white sm:text-4xl">
            O que é o IPTV Portugal?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-300">
            <strong className="text-white">IPTV Portugal</strong> significa ver televisão em Portugal pela internet
            (Internet Protocol Television) em vez de através de uma antena parabólica, antena normal ou box de cabo. Os seus
            canais em direto, desporto, filmes e séries chegam pela sua ligação de internet, por isso só precisa de uma
            subscrição, de uma app de IPTV na sua Smart TV, Firestick ou telemóvel, e de uma ligação estável — sem técnico,
            sem cablagem, sem contrato de dois anos.{" "}
            <Link href="/blog/o-que-e-iptv-guia-completo" className="text-brand-300 underline-offset-4 hover:underline">
              Leia o guia completo de IPTV para principiantes
            </Link>
            .
          </p>
          <p className="mt-4 leading-relaxed text-zinc-400">
            A nossa subscrição de <strong className="text-zinc-200">IPTV Portugal</strong> inclui mais de 50.000 canais em
            direto e 200.000 filmes e séries a pedido. Os preços vão desde 12,99€ por um único mês até ao equivalente a
            cerca de 5,38€ por mês no plano de 24 meses, e todas as opções incluem gravação de 7 dias, um guia eletrónico
            de programação (EPG) completo e suporte por WhatsApp a toda a hora.
          </p>

          <h3 className="mt-10 text-xl font-semibold text-white">Como funciona o IPTV em Portugal?</h3>
          <ol className="mt-4 space-y-3">
            {[
              "Escolha um plano e em quantos aparelhos quer ver — ou experimente primeiro o teste grátis de 24 horas.",
              "Enviamos o seu link M3U ou os dados Xtream Codes por WhatsApp, normalmente em poucos minutos.",
              "Cole esses dados numa app de IPTV como o TiviMate ou o IPTV Smarters Pro e os canais carregam.",
            ].map((step, i) => (
              <li key={step} className="flex gap-4 text-zinc-300">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-sm font-bold text-brand-300">
                  {i + 1}
                </span>
                <span className="pt-0.5 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-zinc-500">
            Precisa de pelo menos 10 Mbps de internet para HD e 25 Mbps para 4K.{" "}
            <Link href="/setup" className="text-brand-300 underline-offset-4 hover:underline">
              Veja os guias de instalação por aparelho
            </Link>
            , compare fornecedores no nosso{" "}
            <Link href="/blog/melhor-iptv-portugal" className="text-brand-300 underline-offset-4 hover:underline">
              guia do melhor IPTV Portugal 2026
            </Link>
            , ou leia o guia completo da{" "}
            <Link href="/blog/subscricao-iptv-portugal" className="text-brand-300 underline-offset-4 hover:underline">
              subscrição de IPTV em Portugal
            </Link>
            .
          </p>
        </div>

        {/* Facts + prices */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          <div className="reveal glass rounded-3xl p-6" style={{ "--delay": "100ms" } as React.CSSProperties}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">IPTV Portugal em números</h3>
            <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-5">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-xs text-zinc-500">{f.label}</dt>
                  <dd className="font-display text-xl font-bold text-white">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="reveal overflow-hidden rounded-3xl border border-white/[0.07] bg-ink-900" style={{ "--delay": "180ms" } as React.CSSProperties}>
            <h3 className="px-6 pt-6 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Quanto custa o IPTV em Portugal?
            </h3>
            <table className="mt-3 w-full text-sm">
              <caption className="sr-only">Preços da subscrição de IPTV Portugal para um aparelho</caption>
              <thead>
                <tr className="text-left text-xs text-zinc-500">
                  <th scope="col" className="px-6 py-2 font-medium">Plano</th>
                  <th scope="col" className="px-6 py-2 text-right font-medium">Preço</th>
                  <th scope="col" className="px-6 py-2 text-right font-medium">Por mês</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((p) => (
                  <tr key={p.plan} className="border-t border-white/5">
                    <th scope="row" className="px-6 py-3 text-left font-medium text-zinc-200">
                      <Link href={`/product/${p.slug}`} className="underline-offset-4 hover:text-white hover:underline">
                        {p.plan}
                      </Link>
                    </th>
                    <td className="px-6 py-3 text-right font-semibold text-white">{eur(p.price)}</td>
                    <td className="px-6 py-3 text-right text-brand-300">{eur(p.price / p.months)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="px-6 py-4 text-xs text-zinc-500">Preços para 1 aparelho. Sem taxa de instalação, sem contrato.</p>
          </div>
        </div>

        {/* Comparison */}
        <div className="reveal lg:col-span-5">
          <h3 className="text-2xl font-bold text-white">IPTV Portugal vs TV por satélite e cabo</h3>
          <div className="mt-6 overflow-x-auto rounded-3xl border border-white/[0.07] bg-ink-900">
            <table className="w-full min-w-[560px] text-sm">
              <caption className="sr-only">Comparação entre IPTV Portugal, TV por satélite e TV por cabo</caption>
              <thead>
                <tr className="text-xs uppercase tracking-wider text-zinc-500">
                  <th scope="col" className="px-6 py-4 text-left font-medium">Característica</th>
                  <th scope="col" className="bg-brand-500/10 px-6 py-4 text-center font-semibold text-brand-300">IPTV Portugal</th>
                  <th scope="col" className="px-6 py-4 text-center font-medium">TV Satélite</th>
                  <th scope="col" className="px-6 py-4 text-center font-medium">TV Cabo</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-t border-white/5">
                    <th scope="row" className="px-6 py-4 text-left font-medium text-zinc-300">{row.feature}</th>
                    <td className="bg-brand-500/[0.06] px-6 py-4 text-center"><Cell value={row.iptv} good /></td>
                    <td className="px-6 py-4 text-center"><Cell value={row.satellite} /></td>
                    <td className="px-6 py-4 text-center"><Cell value={row.cable} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
