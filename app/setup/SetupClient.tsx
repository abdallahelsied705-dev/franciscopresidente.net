"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, CheckCircle2, ExternalLink } from "lucide-react";

type Step = { title: string; body: string; tip?: string };

type Device = {
  id: string;
  name: string;
  subtitle: string;
  appName: string;
  appUrl: string;
  steps: Step[];
};

const devices: Device[] = [
  {
    id: "firestick",
    name: "Amazon Firestick",
    subtitle: "Fire TV Stick / Cube / 4K",
    appName: "IPTV Smarters Pro",
    appUrl: "https://www.amazon.com/",
    steps: [
      {
        title: "Ativar Apps de Fontes Desconhecidas",
        body: 'Vá a Definições → O Meu Fire TV → Opções de Programador e ative "Apps de Fontes Desconhecidas" e "Depuração ADB".',
        tip: "Isto só precisa de ser feito uma vez.",
      },
      {
        title: "Instalar o Downloader",
        body: 'Procure "Downloader" na Amazon App Store e instale-o. Permite-lhe instalar qualquer APK no seu Firestick.',
      },
      {
        title: "Transferir o IPTV Smarters Pro",
        body: 'Abra o Downloader e introduza o URL do APK do IPTV Smarters Pro. Em alternativa, procure "IPTV Smarters" diretamente na App Store, se estiver disponível na sua região.',
      },
      {
        title: "Abrir o IPTV Smarters e Adicionar a Lista",
        body: 'Abra a app, toque em "Add User" → "Load Your Playlist or File/URL". Selecione "M3U URL", cole o seu link M3U e dê um nome à sua lista.',
        tip: "O seu link M3U é-lhe enviado após a compra por email ou WhatsApp.",
      },
      {
        title: "Começar a Ver",
        body: "Os seus canais carregam automaticamente. Navegue por categoria, procure um canal ou vá a TV em Direto. Bom entretenimento!",
      },
    ],
  },
  {
    id: "smarttv",
    name: "Smart TV",
    subtitle: "Samsung, LG, Sony e outras",
    appName: "Smart IPTV / SSIPTV",
    appUrl: "https://samsung.com/",
    steps: [
      {
        title: "Instalar o Smart IPTV da Loja de Apps",
        body: "Abra a loja de apps da sua TV (Samsung Smart Hub / LG Content Store) e procure 'Smart IPTV' ou 'SSIPTV'. Instale gratuitamente.",
        tip: "Se não aparecer na loja, use uma pen USB para instalar a app.",
      },
      {
        title: "Anotar o Endereço MAC da sua TV",
        body: "Abra o Smart IPTV — no ecrã inicial verá um endereço MAC. Anote-o, vai precisar dele para registar a sua lista.",
      },
      {
        title: "Registar o seu M3U no Website",
        body: "Visite siptv.eu (para o Smart IPTV) num navegador, introduza o endereço MAC da TV e cole o seu URL M3U, depois clique em Enviar.",
      },
      {
        title: "Recarregar a App na sua TV",
        body: "Volte à sua TV e recarregue a app Smart IPTV. Os seus canais devem agora aparecer. Prima o botão de menu para alternar entre Direto, Filmes e Séries.",
        tip: "Se os canais não aparecerem, mantenha premido o botão voltar para recarregar a lista.",
      },
    ],
  },
  {
    id: "android",
    name: "Aparelho Android",
    subtitle: "Telemóvel, tablet e box Android TV",
    appName: "TiviMate",
    appUrl: "https://play.google.com/",
    steps: [
      {
        title: "Instalar o TiviMate da Play Store",
        body: "Abra a Google Play Store, procure 'TiviMate IPTV Player' e instale. É gratuito com atualização premium opcional.",
      },
      {
        title: "Abrir o TiviMate e Adicionar a Lista",
        body: 'Abra o TiviMate, toque em "Add Playlist" e depois em "M3U Playlist". Introduza o seu URL M3U e toque em "Next".',
        tip: "Para Xtream Codes, escolha 'Xtream Codes API' e introduza o URL do portal, utilizador e palavra-passe.",
      },
      {
        title: "Dar um Nome à Lista",
        body: "Dê um nome à sua lista (por exemplo, IPTV Portugal) e toque em 'Add'. O TiviMate transfere todos os seus canais — pode demorar um minuto.",
      },
      {
        title: "Navegar e Ver",
        body: "Use a barra lateral para navegar entre TV em Direto, Filmes e Séries. Pode marcar canais favoritos, configurar o guia de programação (EPG) e personalizar o layout.",
      },
    ],
  },
  {
    id: "ios",
    name: "iPhone e iPad",
    subtitle: "iOS 14 e superior",
    appName: "GSE Smart IPTV",
    appUrl: "https://apps.apple.com/",
    steps: [
      {
        title: "Transferir o GSE Smart IPTV",
        body: "Abra a App Store, procure 'GSE Smart IPTV' e instale. É gratuito com atualização pro opcional.",
      },
      {
        title: "Adicionar a sua Lista M3U",
        body: "Abra a app e toque no menu (≡) → Remote Playlists → ícone '+' → 'Add M3U URL'. Introduza um nome e cole o seu link M3U.",
        tip: "Em alternativa, use 'Add Xtream Codes API' se tiver credenciais de portal.",
      },
      {
        title: "Carregar a Lista",
        body: "Toque em 'Add' e a app vai buscar os seus canais. Pode demorar 30 a 60 segundos consoante a sua ligação.",
      },
      {
        title: "Ver os seus Canais",
        body: "Toque num grupo de canais e selecione um canal para começar a transmissão. Use o botão EPG para ver o guia de programação.",
      },
    ],
  },
  {
    id: "mag",
    name: "Box MAG",
    subtitle: "MAG 250, 254, 322, 410 e outras",
    appName: "Portal Integrado",
    appUrl: "",
    steps: [
      {
        title: "Encontrar o Endereço MAC da Box MAG",
        body: "Ligue a sua box MAG. No ecrã inicial ou em Definições → Informação do Sistema encontra o endereço MAC (formato: AA:BB:CC:DD:EE:FF).",
        tip: "Envie-nos este endereço MAC ao encomendar para registarmos a sua subscrição.",
      },
      {
        title: "Introduzir o URL do Portal",
        body: "Vá a Definições → Definições do Sistema → Servidores → Portais. Em 'Portal 1 URL' introduza o URL do portal que lhe fornecemos após a compra.",
      },
      {
        title: "Guardar e Reiniciar",
        body: "Guarde as definições e reinicie a box MAG. Vai ligar-se automaticamente ao nosso portal no arranque.",
      },
      {
        title: "Navegar pelos Canais",
        body: "Use o comando para navegar na lista de canais. Prima OK para ver um canal. Use o botão EPG para o guia de programação.",
        tip: "Se vir 'Incorrect STB subscription', contacte o suporte — o seu endereço MAC pode precisar de novo registo.",
      },
    ],
  },
  {
    id: "windows",
    name: "PC Windows",
    subtitle: "Windows 10 e 11",
    appName: "VLC ou IPTV Smarters",
    appUrl: "https://www.videolan.org/",
    steps: [
      {
        title: "Transferir o VLC Media Player",
        body: "Transfira e instale o VLC a partir de videolan.org se ainda não o tiver. É gratuito e suporta listas M3U nativamente.",
      },
      {
        title: "Abrir Transmissão de Rede",
        body: "No VLC, vá a Média → Abrir Transmissão de Rede (Ctrl+N). Cole o seu URL M3U e clique em 'Reproduzir'.",
        tip: "O VLC carrega todos os canais como uma lista. É o método mais rápido.",
      },
      {
        title: "Em Alternativa: Usar o IPTV Smarters para Windows",
        body: "Transfira o IPTV Smarters do site oficial para uma experiência IPTV completa com EPG, gravação e navegação VOD.",
      },
      {
        title: "Adicionar as suas Credenciais",
        body: "No IPTV Smarters, clique em 'Add User' e escolha M3U URL ou Xtream Codes. Introduza os dados da sua subscrição e carregue os canais.",
      },
    ],
  },
];

function StepItem({ step, index, total }: { step: Step; index: number; total: number }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
          {index + 1}
        </div>
        {index < total - 1 && <div className="w-px flex-1 bg-white/10 mt-2" />}
      </div>
      <div className={`pb-8 ${index === total - 1 ? "pb-0" : ""}`}>
        <h3 className="text-white font-semibold mb-1">{step.title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{step.body}</p>
        {step.tip && (
          <p className="mt-2 text-xs text-yellow-400/80 bg-yellow-400/10 border border-yellow-400/20 rounded-lg px-3 py-2">
            💡 {step.tip}
          </p>
        )}
      </div>
    </div>
  );
}

export default function SetupClient() {
  const [activeId, setActiveId] = useState(devices[0].id);

  // Deep links: /setup#smarttv opens that guide.
  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.slice(1);
      if (devices.some((d) => d.id === id)) setActiveId(id);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const select = (id: string) => {
    setActiveId(id);
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className="bg-ink-950 text-white">
      {/* Header */}
      <div className="bg-ink-900 border-b border-white/5 pt-32 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-1 text-zinc-500 hover:text-white text-sm mb-6 transition-colors">
            <ChevronLeft size={14} /> Voltar ao Início
          </Link>
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Guia de Instalação
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            Guia de instalação de IPTV para todos os aparelhos
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Instruções passo a passo para pôr o IPTV Portugal a funcionar em Amazon Firestick, Smart TV, Android,
            iPhone e iPad, boxes MAG e Windows em menos de 5 minutos. Não são precisos conhecimentos técnicos.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Device selector sidebar */}
          <aside className="lg:w-56 flex-shrink-0">
            <p className="text-zinc-500 text-xs uppercase tracking-wider font-medium mb-3">
              Selecionar Aparelho
            </p>
            <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
              {devices.map((d) => (
                <a
                  key={d.id}
                  href={`#${d.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    select(d.id);
                  }}
                  aria-current={activeId === d.id ? "true" : undefined}
                  className={`flex-shrink-0 text-left px-4 py-3 rounded-xl text-sm transition-all ${
                    activeId === d.id
                      ? "bg-brand-600 text-white font-semibold"
                      : "bg-ink-800 text-zinc-400 hover:text-white hover:bg-ink-700"
                  }`}
                >
                  <span className="block font-medium">{d.name}</span>
                  <span className={`text-xs ${activeId === d.id ? "text-brand-100" : "text-zinc-600"}`}>
                    {d.subtitle}
                  </span>
                </a>
              ))}
            </nav>
          </aside>

          {/* Guide content */}
          <div className="flex-1 min-w-0">
            {devices.map((device) => (
            <section
              key={device.id}
              id={device.id}
              hidden={device.id !== activeId}
              aria-labelledby={`${device.id}-title`}
              className="scroll-mt-32 bg-ink-800 border border-white/5 rounded-2xl p-6 sm:p-8"
            >
              {/* Device header */}
              <div className="flex items-start justify-between gap-4 mb-8">
                <div>
                  <h2 id={`${device.id}-title`} className="text-2xl font-bold text-white">
                    Como configurar IPTV em {device.name}
                  </h2>
                  <p className="text-zinc-400 text-sm mt-0.5">{device.subtitle}</p>
                </div>
                <div className="flex items-center gap-2 bg-live-500/10 border border-live-500/20 text-live-400 text-xs font-medium px-3 py-1.5 rounded-full flex-shrink-0">
                  <CheckCircle2 size={13} />
                  Compatível
                </div>
              </div>

              {/* Recommended app */}
              <div className="bg-ink-700 border border-white/5 rounded-xl p-4 flex items-center justify-between gap-4 mb-8">
                <div>
                  <p className="text-zinc-500 text-xs mb-0.5">App Recomendada</p>
                  <p className="text-white font-semibold">{device.appName}</p>
                </div>
                {device.appUrl && (
                  <a
                    href={device.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-brand-400 hover:text-brand-300 text-sm font-medium transition-colors flex-shrink-0"
                  >
                    Transferir <ExternalLink size={13} />
                  </a>
                )}
              </div>

              {/* Steps */}
              <div>
                {device.steps.map((step, i) => (
                  <StepItem key={i} step={step} index={i} total={device.steps.length} />
                ))}
              </div>

              {/* Nav buttons */}
              <div className="flex justify-between mt-10 pt-6 border-t border-white/5">
                <button
                  onClick={() => {
                    const idx = devices.findIndex((d) => d.id === device.id);
                    if (idx > 0) select(devices[idx - 1].id);
                  }}
                  disabled={devices[0].id === device.id}
                  className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={16} /> Anterior
                </button>
                <button
                  onClick={() => {
                    const idx = devices.findIndex((d) => d.id === device.id);
                    if (idx < devices.length - 1) select(devices[idx + 1].id);
                  }}
                  disabled={devices[devices.length - 1].id === device.id}
                  className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  Seguinte <ChevronRight size={16} />
                </button>
              </div>
            </section>
            ))}

            {/* Still stuck CTA */}
            <div className="mt-6 bg-ink-800 border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-white font-semibold">Ainda precisa de ajuda?</p>
                <p className="text-zinc-400 text-sm">A nossa equipa configura por si — gratuitamente.</p>
              </div>
              <a
                href="https://wa.me/212707711512?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20para%20configurar%20o%20meu%20IPTV"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 bg-[#0e7a52] hover:bg-[#0b6a47] text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
              >
                Suporte WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
