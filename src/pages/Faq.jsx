import { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "../data/faq";
import { clinic } from "../data/clinic";

export function Faq() {
  const [open, setOpen] = useState(0);

  useEffect(() => {
    document.title = `FAQ — ${clinic.name}`;
  }, []);

  return (
    <>
      <section className="hero-bg pt-32 md:pt-36 pb-10">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">FAQ</span>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Answers to help you feel at ease.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            If your question isn't here, our team is a call, message or WhatsApp away.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page max-w-3xl">
          <ul className="divide-y divide-border rounded-3xl border border-border bg-white shadow-[var(--shadow-soft)]">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-semibold text-ink sm:text-lg">{f.q}</span>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                      {isOpen ? <Minus className="h-4 w-4" aria-hidden /> : <Plus className="h-4 w-4" aria-hidden />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-muted-foreground">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
