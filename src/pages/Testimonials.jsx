import { useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { testimonials } from "../data/testimonials";
import { Reveal } from "../components/Reveal";
import { clinic } from "../data/clinic";

export function Testimonials() {
  useEffect(() => {
    document.title = `Patient Reviews — ${clinic.name}`;
  }, []);

  return (
    <>
      <section className="hero-bg pt-32 md:pt-36 pb-10">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">Patient Reviews</span>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Stories that make us proud.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The kindness of our patients is the greatest measure of our work.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.04}>
              <article className="card-lux h-full p-7">
                <Quote className="h-6 w-6 text-primary" aria-hidden />
                <div className="mt-3 flex gap-1 text-[color:var(--gold)]" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                  ))}
                </div>
                <p className="mt-4 text-pretty leading-relaxed text-ink">"{t.quote}"</p>
                <div className="mt-6 text-sm">
                  <div className="font-semibold text-ink">{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
