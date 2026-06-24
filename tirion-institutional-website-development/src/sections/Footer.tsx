import Logo from "../components/Logo";

const NAV = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "problema", label: "O Problema" },
  { id: "solucao", label: "Solução" },
  { id: "coletor", label: "Coletor" },
  { id: "contato", label: "Contato" },
];

export default function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0a0617]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7c4dcf]/60 to-transparent" />
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#7c4dcf]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* brand */}
          <div className="lg:col-span-5">
            <button
              onClick={() => go("inicio")}
              className="flex items-center gap-3"
              aria-label="Ir para o início"
            >
              <Logo className="h-11 w-11" />
              <span className="text-2xl font-semibold tracking-[0.25em] text-white">
                TIRION
              </span>
            </button>
            <p className="mt-5 max-w-sm leading-relaxed text-zinc-400">
              Coletor inteligente de resíduos — inspirado pela história comercial
              de Tiro, movido pela tecnologia do futuro. Coletar, separar e
              transformar resíduos em recursos.
            </p>
            <p className="mt-5 font-serif-display text-sm italic text-[#c4b3f0]">
              “Built to last. <span className="text-[#e78b0a]">Ahead of time.</span>”
            </p>
          </div>

          {/* navigation */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-[0.2em] text-white">
              NAVEGAÇÃO
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-1">
              {NAV.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="text-zinc-400 transition-colors hover:text-[#e78b0a]"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold tracking-[0.2em] text-white">
              CONTATO
            </h3>
            <ul className="mt-5 space-y-3 text-zinc-400">
              <li>
                <a
                  href="mailto:contato@tirion.com.br"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#e78b0a]"
                >
                  <span aria-hidden>✉️</span> contato@tirion.com.br
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <span aria-hidden>📍</span> Brasil
              </li>
            </ul>
            <button
              onClick={() => go("contato")}
              className="mt-6 rounded-full bg-gradient-to-r from-[#7c4dcf] to-[#d97a2b] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#7c4dcf]/25 transition-transform hover:scale-105"
            >
              Fale Conosco
            </button>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 border-t border-white/10 pt-8 text-sm text-zinc-500 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} TIRION. Todos os direitos reservados.</p>
          <p>Inspirada pela história. Movida pelo futuro.</p>
        </div>
      </div>
    </footer>
  );
}
