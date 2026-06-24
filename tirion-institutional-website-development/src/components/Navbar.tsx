import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { cn } from "../utils/cn";

const LINKS = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "problema", label: "O Problema" },
  { id: "solucao", label: "Solução" },
  { id: "coletor", label: "Coletor" },
  { id: "contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // active-section highlight
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // close menu on Escape + lock body scroll while open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    // small timeout so the menu collapse + scroll-lock release don't fight the scroll
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 60);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-white/5 bg-[#0c0820]/90 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <button
          onClick={() => go("inicio")}
          className="flex items-center gap-2.5"
          aria-label="Ir para o início"
        >
          <Logo className="h-9 w-9" />
          <span className="text-xl font-semibold tracking-[0.25em] text-white">
            TIRION
          </span>
        </button>

        {/* desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active === l.id
                    ? "bg-white/10 text-white"
                    : "text-zinc-400 hover:text-white"
                )}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => go("contato")}
          className="hidden rounded-full bg-gradient-to-r from-[#7c4dcf] to-[#d97a2b] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#7c4dcf]/25 transition-transform hover:scale-105 lg:block"
        >
          Fale Conosco
        </button>

        {/* hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="relative block h-4 w-6">
            <span
              className={cn(
                "absolute left-0 block h-0.5 w-6 rounded-full bg-white transition-all duration-300",
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 rounded-full bg-white transition-all duration-300",
                open ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={cn(
                "absolute left-0 block h-0.5 w-6 rounded-full bg-white transition-all duration-300",
                open ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0"
              )}
            />
          </span>
        </button>
      </nav>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/5 bg-[#0c0820]/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="space-y-1 px-5 py-4">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className={cn(
                      "block w-full rounded-lg px-4 py-3 text-left transition-colors",
                      active === l.id
                        ? "bg-white/10 text-white"
                        : "text-zinc-300 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => go("contato")}
                  className="mt-2 block w-full rounded-full bg-gradient-to-r from-[#7c4dcf] to-[#d97a2b] px-6 py-3 font-semibold text-white"
                >
                  Fale Conosco
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
