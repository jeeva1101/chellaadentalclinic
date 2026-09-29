import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  HeartPulse,
  Award,
  Phone,
  Calendar,
  MessageCircle,
  Star,
  MapPin,
  Clock,
  ChevronRight,
} from "lucide-react";

import heroDoctor from "../assets/hero-doctor.jpeg";
import clinicInterior from "../assets/clinic-interior.jpeg";
import technology from "../assets/technology.jpg";
import happyFamily from "../assets/happy-family.jpg";
import clinicVideo from "../assets/clinicvideo.mp4";

/* ── Service Images ── */
import imgRCT from "../assets/serviceimages/01_root_canal_treatment.png";
import imgImplants from "../assets/serviceimages/02_dental_implants.png";
import imgSmile from "../assets/serviceimages/03_smile_designing.png";
import imgOrthodontics from "../assets/serviceimages/04_orthodontics.png";
import imgPediatric from "../assets/serviceimages/05_pediatric_dentistry.png";
import imgFracture from "../assets/serviceimages/06_fracture_tooth_restoration.png";
import imgWisdom from "../assets/serviceimages/07_wisdom_tooth_removal.png";
import imgExtraction from "../assets/serviceimages/08_painless_tooth_extraction.png";
import imgFPD from "../assets/serviceimages/09_fixed_partial_denture.png";
import imgCyst from "../assets/serviceimages/11_cyst_removeal.png";
import imgOralCancer from "../assets/serviceimages/10_oral_cancer.png";
import imgFaceJaw from "../assets/serviceimages/12_face_and_jaw_fracture_management.png";
import imgOrthognathic from "../assets/serviceimages/13_orthognathic_surgery.jpeg";
import imgCleftLip from "../assets/serviceimages/14_cleft_lip_and_palate_repair.png";

const SERVICE_IMAGES = {
  "root-canal": imgRCT,
  "dental-implants": imgImplants,
  "smile-makeover": imgSmile,
  "braces-aligners": imgOrthodontics,
  "pediatric-dentistry": imgPediatric,
  "fracture-tooth-restoration": imgFracture,
  "wisdom-tooth-removal": imgWisdom,
  "tooth-extraction": imgExtraction,
  "fixed-partial-denture": imgFPD,
  "cyst-removal-surgery": imgCyst,
  "oral-cancer-diagnosis-management": imgOralCancer,
  "jaw-fracture-management": imgFaceJaw,
  "orthognathic-surgery": imgOrthognathic,
  "cleft-lip-palate-repair": imgCleftLip,
};

import { clinic } from "../data/clinic";
import { services } from "../data/services";
import { testimonials } from "../data/testimonials";
import { faqs } from "../data/faq";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { CountUp } from "../components/CountUp";

export function Home() {
  useEffect(() => {
    document.title = `${clinic.name} — ${clinic.tagline}`;
  }, []);

  return (
    <>
      <Hero />
      <TrustBar />
      <Stats />
      <ClinicVideo />
      <FeaturedTreatments />
      <WhyUs />
      <Technology />
      <Journey />
      <TestimonialsPreview />
      <FAQPreview />
      <MapCTA />
    </>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="hero-bg relative overflow-hidden pt-32 sm:pt-36 md:pt-40">
      <div className="blob left-[-8%] top-24 h-72 w-72" />
      <div className="blob right-[-6%] top-40 h-96 w-96" />

      <div className="container-page grid gap-10 pb-14 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:pb-20">
        <div className="relative z-10">
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden /> Gentle & Advanced Dental Care
          </motion.span>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]"
          >
            A calmer, brighter way to <span className="text-gradient">love your smile</span>
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground"
          >
            {clinic.name} is a Professional dental clinic led by {clinic.doctor.name}. From gentle
            check-ups to complete smile makeovers — we design care around you.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link to="/contact" className="btn-primary">
              <Calendar className="h-4 w-4" aria-hidden /> Book Appointment
            </Link>
            <a href={`tel:${clinic.contact.phoneDigits}`} className="btn-outline">
              <Phone className="h-4 w-4" aria-hidden /> {clinic.contact.phone}
            </a>
            <a
              href={`https://wa.me/${clinic.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
            </a>
          </motion.div>

          <motion.ul
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
          >
            <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" aria-hidden /> Standard sterilisation</li>
            <li className="flex items-center gap-2"><Award className="h-4 w-4 text-primary" aria-hidden /> certified dentist</li>
            <li className="flex items-center gap-2"><HeartPulse className="h-4 w-4 text-primary" aria-hidden /> Painless techniques</li>
          </motion.ul>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[4/4.6] w-full max-w-sm max-h-[400px] overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-elegant)]">
            <img
              src={heroDoctor}
              alt={`${clinic.doctor.name} at ${clinic.name}`}
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = ["0% EMI Available", "Same-day Emergency", "Digital X-Rays"];
  return (
    <div className="border-y border-border/70 bg-white/60 backdrop-blur">
      <div className="container-page flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {items.map((i) => (
          <span key={i}>{i}</span>
        ))}
      </div>
    </div>
  );
}

function WhyUs() {
  const items = [
    { icon: Sparkles, title: "Bespoke care", body: "Every plan is personal. We listen, design, then treat — never the other way around." },
    { icon: ShieldCheck, title: "Uncompromising safety", body: "standard sterilisation and single-use disposables for every visit." },
    { icon: HeartPulse, title: "Painless techniques", body: "Advanced anaesthesia, magnification and rotary tools — comfort you can feel." },
    { icon: Award, title: "Our Dental Specialists", body: "Led by a decorated female dentist with 8 years of specialist experience." },
  ];
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Chella"
          title={<>Care that feels as good as it looks.</>}
          description="A practice designed around your comfort — from the moment you arrive, through every treatment, to your smile in the mirror."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.05}>
              <article className="card-lux h-full p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                  <it.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="relative py-12">
      <div className="container-page">
        <div
          className="grid gap-8 rounded-3xl border border-border bg-white p-8 shadow-[var(--shadow-soft)] sm:grid-cols-2 lg:grid-cols-4 lg:p-12"
          style={{ backgroundImage: "var(--gradient-soft)" }}
        >
          {clinic.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                <CountUp end={s.value} decimals={s.decimals ?? 0} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClinicVideo() {
  return (
    <section className="section-y">
      <div className="container-page">
        {/* Header */}
        <div className="mb-8 text-center">
          <span className="eyebrow">Inside Our Clinic</span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
            A space built for calm,{" "}
            <span className="text-gradient">crafted for care.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Take a peek inside — our clinic is designed so every corner feels welcoming,
            quiet, and deeply comfortable.
          </p>
        </div>

        {/* Video wrapper */}
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-elegant)]">
              {/* Teal gradient top accent bar */}
              <div
                className="absolute inset-x-0 top-0 h-1 z-10"
                style={{ background: "var(--gradient-primary)" }}
              />
              <video
                src={clinicVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full max-h-[340px] object-cover"
                aria-label="Tour of Chella Dental Clinic interior"
              />
              {/* Subtle bottom fade overlay */}
              <div
                className="absolute inset-x-0 bottom-0 h-16 z-10"
                style={{
                  background:
                    "linear-gradient(to top, rgba(255,255,255,0.55), transparent)",
                }}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FeaturedTreatments() {
  const featured = [services[3], services[1], ...services.slice(-4)];
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Signature Treatments"
            title={<>Craft, technology and gentle hands.</>}
            description="A curated menu of treatments — every one delivered with the same standard of precision and comfort."
          />
          <Link to="/services" className="btn-outline text-sm">
            View all <ChevronRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((s, i) => {
            const img = SERVICE_IMAGES[s.slug];
            return (
              <Reveal key={s.slug} delay={i * 0.04}>
                <Link to={`/services#${s.slug}`} className="card-lux group flex h-full flex-col overflow-hidden">
                  {img && (
                    <div className="aspect-[2/1] w-full overflow-hidden border-b border-border bg-muted">
                      <img
                        src={img}
                        alt={s.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
                      <s.icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">{s.short}</p>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Learn more <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section className="section-y">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Technology"
            title={<>Advanced Dental Curing Technology.</>}
            description="High-performance LED curing technology designed for fast, reliable and efficient polymerization of light-cured dental materials."
          />
          <ul className="mt-8 space-y-4">
            {[
              "High-intensity LED light for efficient composite curing",
              "Ergonomic cordless handheld design",
              "Digital display for easy operation and monitoring",
              "Multiple curing modes for different clinical applications",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <span className="text-ink">{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-[var(--shadow-soft)]">
            <img
              src={technology}
              alt="Advanced Dental Curing Technology"
              width={1200}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Journey() {
  const steps = [
    { n: "01", title: "Book", body: "Reach us on call, WhatsApp or the form. We reply within an hour." },
    { n: "02", title: "Consult", body: "A relaxed 45-min consult, digital imaging and a plan you understand." },
    { n: "03", title: "Preview", body: "See your outcome digitally — approve before we begin." },
    { n: "04", title: "Care", body: "Gentle, precise treatment with follow-up support built in." },
  ];
  return (
    <section className="section-y" style={{ background: "color-mix(in oklab, var(--primary-soft) 55%, white)" }}>
      <div className="container-page">
        <SectionHeading
          eyebrow="Patient Journey"
          title={<>A calm, predictable path to your best smile.</>}
          description="Four gentle steps designed to remove uncertainty and keep you comfortable at every stage."
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <div className="card-lux h-full p-7">
                <div className="font-display text-4xl font-semibold text-gradient">{s.n}</div>
                <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsPreview() {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Kind Words"
          title={<>Loved by families across Tamilnadu.</>}
          description="Stories from patients who trusted us with their smiles."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <article className="card-lux h-full p-7">
                <div className="flex gap-1 text-[color:var(--gold)]" aria-label={`${t.rating} out of 5 stars`}>
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
        <div className="mt-10 flex justify-center">
          <Link to="/testimonials" className="btn-outline">
            Read more reviews <ChevronRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FAQPreview() {
  return (
    <section className="section-y">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title={<>Answers before you even ask.</>}
            description="A few quick answers — the full list lives on our FAQ page."
          />
          <div className="mt-8 overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
            <img src={happyFamily} alt="A happy family" width={1400} height={1000} loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
        <div>
          <ul className="divide-y divide-border rounded-3xl border border-border bg-white">
            {faqs.slice(0, 4).map((f) => (
              <li key={f.q} className="p-6">
                <h3 className="font-display text-lg font-semibold">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Link to="/faq" className="btn-outline text-sm">
              All questions <ChevronRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function MapCTA() {
  return (
    <section className="section-y">
      <div className="container-page grid gap-10 rounded-3xl border border-border bg-white p-6 shadow-[var(--shadow-soft)] md:p-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="overflow-hidden rounded-2xl border border-border">
          <img src={clinicInterior} alt={`${clinic.name} reception interior`} width={1600} height={1100} loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="eyebrow">Visit us</span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
            Warm hospitality, in the heart of the city.
          </h2>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden /> <span>{clinic.contact.address.line1}, {clinic.contact.address.line2}</span></li>
            <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden /> <a className="hover:text-primary" href={`tel:${clinic.contact.phoneDigits}`}>{clinic.contact.phone}</a></li>
            <li className="flex gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden /> <span>Mon – Sat, 9AM – 9PM</span></li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">Book Appointment</Link>
            <a href={`https://wa.me/${clinic.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
