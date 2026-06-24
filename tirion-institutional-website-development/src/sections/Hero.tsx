import { motion } from "framer-motion";
import Logo from "../components/Logo";
import StarField from "../components/StarField";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#2a1d52_0%,_#140e2b_45%,_#0c0820_100%)]" />
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#7c4dcf]/30 blur-[120px]" />
      <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-[#d97a2b]/25 blur-[120px]" />
      <StarField count={55} />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-8 w-fit"
          style={{ animation: "float-slow 5s ease-in-out infinite" }}
        >
          <Logo className="h-28 w-28" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif-display text-6xl font-semibold tracking-[0.3em] text-white sm:text-7xl md:text-8xl"
        >
          TIRION
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg font-light tracking-wide text-[#c4b3f0] sm:text-xl"
        >
          Inspirada pela história.{" "}
          <span className="text-[#e78b0a]">Movida pelo futuro.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400"
        >
          O coletor inteligente de resíduos que separa, recicla e recompensa —
          unindo a sabedoria comercial da antiga Tiro com a tecnologia do amanhã.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("solucao")}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#7c4dcf] to-[#d97a2b] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[#7c4dcf]/30 transition-transform hover:scale-105"
          >
            <span className="relative z-10">Conheça a Solução</span>
          </button>
          <button
            onClick={() => scrollTo("sobre")}
            className="rounded-full border border-white/15 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            Nossa História
          </button>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("sobre")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1 }, y: { duration: 1.8, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-zinc-500 hover:text-white"
        aria-label="Rolar para baixo"
      >
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>
    </section>
  );
}
