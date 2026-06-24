import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 3500);
  };

  return (
    <section id="contato" className="relative overflow-hidden bg-[#0c0820] py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#1a1138_0%,_#0c0820_70%)]" />
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#7c4dcf]/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold tracking-[0.25em] text-zinc-300">
            CONTATO
          </span>
          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Vamos construir o futuro juntos
          </h2>
          <p className="mt-5 text-lg text-zinc-400">
            Tem interesse no coletor TIRION ou quer saber mais? Fale conosco.
          </p>
          <a
            href="mailto:contato@tirion.com.br"
            className="mt-4 inline-block text-[#e78b0a] hover:underline"
          >
            contato@tirion.com.br
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur sm:p-10"
        >
          <form onSubmit={submit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                id="name"
                label="Nome"
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
              />
              <Field
                id="email"
                label="E-mail"
                type="email"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-300">
                Mensagem
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors focus:border-[#7c4dcf]"
                placeholder="Conte como podemos ajudar…"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-[#7c4dcf] to-[#d97a2b] py-3.5 font-semibold text-white shadow-lg shadow-[#7c4dcf]/25 transition-transform hover:scale-[1.02]"
            >
              Enviar mensagem
            </button>
          </form>

          <AnimatePresence>
            {sent && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-[#120c2a]/95 backdrop-blur"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl"
                >
                  🎉
                </motion.div>
                <p className="mt-4 text-2xl font-bold text-white">Obrigado!</p>
                <p className="mt-1 text-zinc-400">Recebemos sua mensagem.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-zinc-300">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors focus:border-[#7c4dcf]"
      />
    </div>
  );
}
