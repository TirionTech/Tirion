import { motion } from "framer-motion";
import StarField from "../components/StarField";

const TIMELINE = [
  {
    tag: "~2750 A.C.",
    tagColor: "text-[#a78bfa]",
    dot: "bg-[#7c4dcf]",
    title: "A Cidade de Tiro",
    text: "Uma das mais importantes cidades da antiga Fenícia, centro do comércio marítimo no Mediterrâneo.",
  },
  {
    tag: "CORANTE TÍRIO",
    tagColor: "text-[#e78b0a]",
    dot: "bg-[#d97a2b]",
    title: "O Roxo Real",
    text: "Famosa pelo corante roxo — tão valioso quanto ouro — que inspirou as cores da nossa marca.",
  },
  {
    tag: "CONCEITO",
    tagColor: "text-[#e78b0a]",
    dot: "bg-[#d97a2b]",
    title: "Coletar & Transformar",
    text: "Tiro prosperou coletando, processando e redistribuindo recursos de forma eficiente.",
  },
  {
    tag: "HOJE",
    tagColor: "text-[#e78b0a]",
    dot: "bg-[#d97a2b]",
    title: "Nasce a TIRION",
    text: "Uma representação moderna do mesmo conceito: coletar, separar e transformar resíduos em recursos.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-[#0c0820] py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a1138_0%,_#0c0820_70%)]" />
      <StarField count={45} />
      <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-[#7c4dcf]/15 blur-[120px]" />
      <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-[#d97a2b]/12 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* LEFT — narrative */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold tracking-[0.25em] text-zinc-300 backdrop-blur">
            NOSSA ORIGEM
          </span>

          <h2 className="mt-7 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Da antiga{" "}
            <span className="bg-gradient-to-r from-[#a78bfa] via-[#c4a3e8] to-[#e78b0a] bg-clip-text text-transparent">
              Fenícia
            </span>{" "}
            ao futuro sustentável
          </h2>

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-zinc-400">
            Pensamos em cidades históricas, impérios e civilizações que mudaram o
            mundo. E encontramos <span className="font-semibold text-white">Tiro</span> — uma
            das cidades mais importantes da Antiguidade.
          </p>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-zinc-400">
            Assim como Tiro{" "}
            <span className="text-[#a78bfa]">coletava, processava e redistribuía</span>{" "}
            recursos pelo Mediterrâneo, nosso coletor inteligente é a
            representação moderna desse mesmo conceito.
          </p>

          {/* quote box */}
          <div className="mt-10 max-w-lg rounded-2xl bg-gradient-to-r from-[#7c4dcf] to-[#d97a2b] p-[1.5px] shadow-xl shadow-[#7c4dcf]/20">
            <div className="rounded-2xl bg-[#140d2c] px-8 py-6 text-center">
              <p className="font-serif-display text-xl italic text-white">
                “Built to last. <span className="text-[#e78b0a]">Ahead of time.</span>”
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — timeline */}
        <div className="relative pl-8">
          {/* vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[#7c4dcf] via-[#9a6fd9] to-[#d97a2b]" />

          <ul className="space-y-11">
            {TIMELINE.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                <span
                  className={`absolute -left-8 top-1 h-3.5 w-3.5 rounded-full ${item.dot} ring-4 ring-[#0c0820]`}
                />
                <p className={`text-xs font-bold tracking-[0.2em] ${item.tagColor}`}>
                  {item.tag}
                </p>
                <h3 className="mt-1.5 text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 max-w-md leading-relaxed text-zinc-400">
                  {item.text}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Significado do nome */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto mt-20 max-w-5xl px-6 lg:px-8"
      >
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur sm:p-12">
          <p className="text-center text-xs font-bold tracking-[0.3em] text-[#a78bfa]">
            O SIGNIFICADO DO NOME
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4 text-center sm:gap-6">
            <NamePart big="TIRO" small="A cidade fenícia" />
            <span className="text-3xl font-light text-[#e78b0a]">+</span>
            <NamePart big="ION" small="Sufixo de movimento e energia" />
            <span className="text-3xl font-light text-zinc-500">=</span>
            <div className="rounded-2xl bg-gradient-to-r from-[#7c4dcf] to-[#d97a2b] px-7 py-4">
              <p className="font-serif-display text-3xl font-bold tracking-[0.2em] text-white">
                TIRION
              </p>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center leading-relaxed text-zinc-400">
            <span className="font-semibold text-white">TIRION</span> une o legado
            comercial e a célebre púrpura real de Tiro à energia da inovação. Um
            nome que carrega história e propósito: transformar o que é descartado
            em valor.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

function NamePart({ big, small }: { big: string; small: string }) {
  return (
    <div className="min-w-[120px]">
      <p className="font-serif-display text-3xl font-bold tracking-[0.15em] text-white">
        {big}
      </p>
      <p className="mt-1 text-sm text-zinc-500">{small}</p>
    </div>
  );
}
