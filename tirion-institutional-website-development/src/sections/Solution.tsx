import { motion } from "framer-motion";

const BENEFITS = [
  {
    icon: "🤖",
    title: "Separação automática",
    text: "Sensores e visão computacional identificam e separam cada tipo de material no momento do descarte.",
    accent: "from-[#7c4dcf] to-[#9a6fd9]",
  },
  {
    icon: "🪙",
    title: "Cashback & incentivo",
    text: "Quem recicla é recompensado. Cada descarte correto gera créditos e estimula bons hábitos.",
    accent: "from-[#d97a2b] to-[#e78b0a]",
  },
  {
    icon: "📉",
    title: "Redução de custos",
    text: "Coleta otimizada e materiais já separados reduzem drasticamente os custos operacionais.",
    accent: "from-[#7c4dcf] to-[#d97a2b]",
  },
  {
    icon: "🔄",
    title: "Logística reversa",
    text: "Resíduos retornam à cadeia produtiva de forma rastreável, fechando o ciclo da economia circular.",
    accent: "from-[#9a6fd9] to-[#e78b0a]",
  },
];

export default function Solution() {
  return (
    <section id="solucao" className="relative overflow-hidden bg-[#0c0820] py-24 lg:py-32">
      <div className="absolute left-1/3 top-0 h-80 w-80 rounded-full bg-[#7c4dcf]/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full border border-[#7c4dcf]/30 bg-[#7c4dcf]/10 px-5 py-2 text-xs font-semibold tracking-[0.25em] text-[#a78bfa]">
            A SOLUÇÃO
          </span>
          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Nosso <span className="bg-gradient-to-r from-[#a78bfa] to-[#e78b0a] bg-clip-text text-transparent">Coletor Inteligente</span>
          </h2>
          <p className="mt-5 text-lg text-zinc-400">
            Automação, inteligência artificial e recompensas trabalhando juntas
            para transformar resíduos em recursos.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all hover:-translate-y-1 hover:border-white/20"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${b.accent} text-3xl shadow-lg transition-transform group-hover:scale-110`}
              >
                {b.icon}
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">{b.title}</h3>
              <p className="mt-3 leading-relaxed text-zinc-400">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
