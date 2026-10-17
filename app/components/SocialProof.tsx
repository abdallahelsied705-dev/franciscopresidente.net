"use client";

import { useEffect, useState } from "react";

const notifications = [
  { flag: "🇵🇹", name: "João", city: "Lisboa", plan: "12 Meses" },
  { flag: "🇵🇹", name: "Ana", city: "Porto", plan: "6 Meses" },
  { flag: "🇵🇹", name: "Miguel", city: "Braga", plan: "24 Meses" },
  { flag: "🇵🇹", name: "Sofia", city: "Coimbra", plan: "3 Meses" },
  { flag: "🇵🇹", name: "Rui", city: "Faro", plan: "12 Meses" },
  { flag: "🇵🇹", name: "Beatriz", city: "Aveiro", plan: "6 Meses" },
  { flag: "🇵🇹", name: "Tiago", city: "Setúbal", plan: "24 Meses" },
  { flag: "🇵🇹", name: "Carolina", city: "Funchal", plan: "12 Meses" },
  { flag: "🇵🇹", name: "Pedro", city: "Leiria", plan: "3 Meses" },
  { flag: "🇵🇹", name: "Inês", city: "Guimarães", plan: "6 Meses" },
  { flag: "🇵🇹", name: "André", city: "Viseu", plan: "12 Meses" },
  { flag: "🇵🇹", name: "Mariana", city: "Cascais", plan: "24 Meses" },
  { flag: "🇵🇹", name: "Luís", city: "Évora", plan: "12 Meses" },
  { flag: "🇵🇹", name: "Catarina", city: "Ponta Delgada", plan: "6 Meses" },
  { flag: "🇵🇹", name: "Diogo", city: "Portimão", plan: "24 Meses" },
  { flag: "🇵🇹", name: "Marta", city: "Sintra", plan: "12 Meses" },
  { flag: "🇵🇹", name: "Ricardo", city: "Viana do Castelo", plan: "6 Meses" },
  { flag: "🇵🇹", name: "Filipa", city: "Santarém", plan: "12 Meses" },
];

function getMinutesAgo() {
  const options = [1, 2, 3, 5, 7, 10, 12, 15];
  return options[Math.floor(Math.random() * options.length)];
}

export default function SocialProof() {
  const [current, setCurrent] = useState<(typeof notifications)[0] | null>(null);
  const [visible, setVisible] = useState(false);
  const [minutesAgo, setMinutesAgo] = useState(3);

  useEffect(() => {
    let index = Math.floor(Math.random() * notifications.length);

    function showNext() {
      index = (index + 1) % notifications.length;
      setMinutesAgo(getMinutesAgo());
      setCurrent(notifications[index]);
      setVisible(true);

      // Hide after 4 seconds
      setTimeout(() => setVisible(false), 4000);
    }

    // First one after 5 seconds
    const first = setTimeout(showNext, 5000);

    // Then every 9 seconds
    const interval = setInterval(showNext, 9000);

    return () => {
      clearTimeout(first);
      clearInterval(interval);
    };
  }, []);

  if (!current) return null;

  return (
    <div
      className={`fixed bottom-24 left-4 z-50 hidden md:block transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-ink-800 border border-brand-500/20 rounded-2xl px-4 py-3 shadow-2xl shadow-black/60 flex items-center gap-3 max-w-[260px]">
        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-brand-500/15 border border-brand-500/30 flex items-center justify-center text-lg flex-shrink-0">
          {current.flag}
        </div>

        <div className="min-w-0">
          <p className="text-white text-xs font-semibold leading-snug">
            {current.name} de {current.city}
          </p>
          <p className="text-brand-400 text-[11px] font-medium">
            subscreveu o plano {current.plan}
          </p>
          <p className="text-zinc-500 text-[10px] mt-0.5">há {minutesAgo} min</p>
        </div>

        {/* Pulse dot */}
        <span className="w-2 h-2 rounded-full bg-live-400 animate-pulse flex-shrink-0 ml-auto" />
      </div>
    </div>
  );
}
