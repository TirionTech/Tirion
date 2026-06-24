import { motion } from "framer-motion";
import Counter from "../components/Counter";

const CONSEQUENCES = [
  {
    icon: "🌍",
    title: "Meio ambiente degradado",
    text: "Resíduos mal descartados poluem solos, rios e oceanos, ameaçando ecossistemas inteiros.",
  },
  {
    icon: "♻️",
    title: "Desperdício de materiais",
    text: "Toneladas de materiais recicláveis vão para aterros em vez de retornarem à cadeia produtiva.",
  },
  {
    icon: "🏙️",
    title: "Danos urbanos",
    text: "Acúmulo de lixo entope bueiros, agrava enchentes e prejudica a saúde pública das cidades.",
  },
  {
    icon: "💸",
    title: "Custos elevados",
    text: "Municípios gastam fortunas com coleta e disposição ineficiente de resíduos a cada ano.",
  },
];

const STATS = [
  { prefix: "R$ ", value: 38, suffix: " bi", label: "perdidos por ano enterrando materiais recicláveis no Brasil", decimals: 0 },
  { value: 90, suffix: "%", label: "de todo o lixo reciclável é desperdiçado anualmente", decimals: 0 },
  { prefix: "< ", value: 8, suffix: "%", label: "do total produzido é efetivamente reciclado pela indústria", decimals: 0 },
];

export default function Problem() {
  return (
    <section id="problema" className="relative overflow-hidden bg-[#0a0617] py-24 lg:py-32">
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#d97a2b]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full border border-[#d97a2b]/30 bg-[#d97a2b]/10 px-5 py-2 text-xs font-semibold tracking-[0.25em] text-[#e78b0a]">
            O PROBLEMA
          </span>
          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            O descarte impróprio de lixo{" "}
            <span className="text-[#e78b0a]">custa caro</span> para todos
          </h2>
          <p className="mt-5 text-lg text-zinc-400">
            A forma como lidamos com nossos resíduos hoje é insustentável — e as
            consequências se acumulam a cada dia.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONSEQUENCES.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-[#d97a2b]/40 hover:bg-white/[0.06]"
            >
              <div className="text-4xl transition-transform group-hover:scale-110">{c.icon}</div>
              <h3 className="mt-4 text-lg font-bold text-white">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{c.text}</p>
            </motion.div>
          ))}
        </div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1138] to-[#0c0820] p-8 sm:grid-cols-3 sm:p-12"
        >
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="bg-gradient-to-r from-[#a78bfa] to-[#e78b0a] bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl">
                {s.prefix}
                <Counter to={s.value} suffix={s.suffix} decimals={s.decimals} />
              </p>
              <p className="mx-auto mt-3 max-w-[220px] text-sm text-zinc-400">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 text-center text-xs text-zinc-600"
        >
          Fontes: Abrema (Panorama dos Resíduos Sólidos no Brasil) e SNIS /
          Ministério das Cidades. O Brasil gera de 80 a 90 milhões de toneladas
          de resíduos sólidos urbanos por ano — cerca de 33% a 40% são
          recicláveis secos, mas apenas 1,82% são oficialmente recuperados pelo
          poder público.
        </motion.p>
      </div>
    </section>
  );
}
