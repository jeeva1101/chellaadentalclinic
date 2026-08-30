import { useEffect, useRef, useState } from "react";
import { Target, Eye, Heart, Sparkles, ShieldCheck, Award, Leaf, Users } from "lucide-react";
import clinicInterior from "../assets/clinic-interior.jpeg";
import treatmentRoom from "../assets/treatment-room.jpeg";
import clinic1 from "../assets/clinicimages/clinic1.jpeg";
import clinic2 from "../assets/clinicimages/clinic2.jpeg";
import clinic3 from "../assets/clinicimages/clinic3.jpeg";
import clinic4 from "../assets/clinicimages/clinic4.png";
import clinic5 from "../assets/clinicimages/clinic5.jpeg";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { clinic } from "../data/clinic";

const CAROUSEL_IMAGES = [
  { src: clinic1, alt: "Clinic reception area" },
  { src: clinic2, alt: "Dental treatment room" },
  { src: clinic3, alt: "Waiting lounge" },
  { src: clinic4, alt: "Clinic corridor" },
  { src: clinic5, alt: "Clinic interior view" },
];

/* Auto-scroll carousel — pure CSS infinite marquee */
function ClinicCarousel() {
  const slides = [...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES]; // duplicate for seamless loop

  return (
    <section className="section-y overflow-hidden">
      {/* Heading */}
      <div className="container-page mb-8 text-center">
        <span className="eyebrow">Our Space</span>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Designed for your <span className="text-gradient">comfort.</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Every corner of our clinic is crafted to feel calm, clean and welcoming — from the
          reception to the treatment chair.
        </p>
      </div>

      {/* Infinite scrolling strip */}
      <div className="relative w-full" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
        <div
          className="flex gap-5"
          style={{
            width: "max-content",
            animation: "clinic-scroll 28s linear infinite",
          }}
        >
          {slides.map((img, i) => (
            <div
              key={i}
              className="shrink-0 w-100 h-90 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <style>{`
          @keyframes clinic-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  );
}

export function AboutClinic() {
  useEffect(() => {
    document.title = `Our Clinic — ${clinic.name}`;
  }, []);

  return (
    <>
      <section className="hero-bg pt-32 md:pt-36 pb-10">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">Our Clinic</span>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            A quiet standard of care, in an unhurried space.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {clinic.name} was built on a belief that dentistry should feel calm, considered and
            deeply personal. From the moment you arrive, every detail is designed for comfort.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
              <img src={clinicInterior} alt="Reception at Chella Clinic" width={1600} height={1100} loading="lazy" className="w-full object-cover" />
            </div>
          </Reveal>
          <div className="grid gap-6">
            {[
              { icon: Target, title: "Our Mission", body: "Elevate everyday dentistry into an experience of comfort, artistry and lifelong trust." },
              { icon: Eye, title: "Our Vision", body: "To be the most loved dental practice for families across the city — one confident smile at a time." },
              { icon: Heart, title: "Our Story", body: `Founded in 9th March 2025, ${clinic.name} began as a quiet single-chair studio. Today, we welcome families from across Chennai — and beyond.` },
            ].map((it) => (
              <Reveal key={it.title}>
                <div className="card-lux flex gap-4 p-6">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                    <it.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{it.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clinic Photo Carousel ── */}
      <ClinicCarousel />

      <section className="section-y" style={{ background: "color-mix(in oklab, var(--primary-soft) 55%, white)" }}>
        <div className="container-page">
          <SectionHeading
            eyebrow="Facilities"
            title={<>A Modern Approach to Better Smiles.</>}
            description="Every treatment room is fully digital, individually ventilated and sterilised to Class-B standards."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Sparkles, title: "Airy interiors", body: "Warm palettes, natural light and soft acoustics for total calm." },
              { icon: ShieldCheck, title: "Standardised Sterilisation", body: "Advanced autoclaves and single-use instruments for absolute safety." },
              { icon: Leaf, title: "Digital Diagnostics", body: "Low-radiation X-rays and intraoral cameras for precise treatment planning." },
            ].map((f) => (
              <Reveal key={f.title}>
                <article className="card-lux h-full p-6">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-white text-primary">
                    <f.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      

      <section className="section-y">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Core Values"
              title={<>The principles behind every smile we treat.</>}
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Heart, title: "Compassion" },
                { icon: Award, title: "Excellence" },
                { icon: ShieldCheck, title: "Integrity" },
                { icon: Sparkles, title: "Craft" },
              ].map((v) => (
                <li key={v.title} className="card-lux flex items-center gap-3 p-4">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
                    <v.icon className="h-4 w-4" aria-hidden />
                  </div>
                  <span className="font-medium text-ink">{v.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
              <img src={treatmentRoom} alt="Treatment room at Chella Clinic" width={1400} height={1000} loading="lazy" className="w-full h-[26rem] object-cover" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

