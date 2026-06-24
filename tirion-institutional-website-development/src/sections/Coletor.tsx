import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../utils/cn";

const TABS = {
  hardware: {
    label: "Hardware",
    items: [
      { k: "Estrutura", v: "Gabinete robusto de ~1,80 m de altura, projetado para uso urbano e resistente ao tempo." },
      { k: "Compartimentos", v: "Múltiplas câmaras internas para separação de plástico, metal, papel e vidro." },
      { k: "Sensores", v: "Sensores de proximidade, peso e capacitivos que detectam e classificam cada resíduo." },
      { k: "Câmera + Visão", v: "Câmera integrada para reconhecimento de materiais por imagem em tempo real." },
    ],
  },
  software: {
    label: "Software & IA",
    items: [
      { k: "Controlador", v: "ESP32 e Raspberry Pi gerenciando sensores, atuadores e conectividade." },
      { k: "Inteligência Artificial", v: "Modelo de visão computacional que identifica o tipo de material com alta precisão." },
      { k: "Cashback", v: "Aplicação que credita recompensas ao usuário a cada descarte correto." },
      { k: "Telemetria", v: "Dados de enchimento e uso enviados à nuvem para otimizar a coleta e a logística." },
    ],
  },
} as const;

type TabKey = keyof typeof TABS;

export default function Coletor() {
  const [tab, setTab] = useState<TabKey>("hardware");

  return (
    <section id="coletor" className="relative overflow-hidden bg-[#0a0617] py-24 lg:py-32">
      <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-[#7c4dcf]/15 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto flex h-[420px] w-full max-w-sm items-center justify-center"
        >
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-[#7c4dcf]/20 to-[#d97a2b]/20 blur-2xl" />
          {/* stylized collector */}
          <div className="relative flex h-full w-60 flex-col overflow-hidden rounded-[2.5rem] border border-white/15 bg-gradient-to-b from-[#1d1440] to-[#120c2a] shadow-2xl">
            <div className="flex items-center justify-center gap-1.5 pt-5">
              <span className="h-2 w-2 rounded-full bg-[#d97a2b]" />
              <span className="h-2 w-2 rounded-full bg-[#7c4dcf]" />
              <span className="h-2 w-2 rounded-full bg-zinc-600" />
            </div>
            <div className="mx-5 mt-5 flex-1 rounded-2xl border border-white/10 bg-black/30 p-4">
              <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                <span className="text-5xl">♻️</span>
                <p className="text-xs uppercase tracking-widest text-[#a78bfa]">IA ativa</p>
                <p className="text-sm text-zinc-400">Analisando material…</p>
                <div className="h-1.5 w-32 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-2/3 animate-pulse rounded-full bg-gradient-to-r from-[#7c4dcf] to-[#d97a2b]" />
                </div>
              </div>
            </div>
            <div className="m-5 rounded-xl bg-gradient-to-r from-[#7c4dcf] to-[#d97a2b] py-2 text-center text-sm font-semibold text-white">
              Descarte aqui
            </div>
          </div>
        </motion.div>

        {/* content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold tracking-[0.25em] text-zinc-300">
            A CONSTRUÇÃO
          </span>
          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Tecnologia por dentro do coletor
          </h2>
          <p className="mt-5 text-lg text-zinc-400">
            Engenharia, sensores e inteligência artificial integrados em um único
            equipamento pronto para a cidade.
          </p>

          {/* tabs */}
          <div className="mt-8 inline-flex rounded-full border border-white/10 bg-white/5 p-1">
            {(Object.keys(TABS) as TabKey[]).map((k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={cn(
                  "rounded-full px-6 py-2.5 text-sm font-semibold transition-colors",
                  tab === k ? "bg-gradient-to-r from-[#7c4dcf] to-[#d97a2b] text-white" : "text-zinc-400 hover:text-white"
                )}
              >
                {TABS[k].label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.ul
              key={tab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="mt-7 space-y-4"
            >
              {TABS[tab].items.map((item) => (
                <li key={item.k} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-[#7c4dcf] to-[#d97a2b]" />
                  <div>
                    <p className="font-semibold text-white">{item.k}</p>
                    <p className="mt-0.5 text-sm text-zinc-400">{item.v}</p>
                  </div>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
