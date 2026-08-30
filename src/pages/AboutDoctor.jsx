import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Award,
  GraduationCap,
  Sparkles,
  Quote,
  ShieldCheck,
  Stethoscope,
  HeartPulse,
  CheckCircle2,
  Phone,
  Calendar,
  Star,
  Languages,
  Clock,
  Scissors,
} from "lucide-react";
import doctorPortrait from "../assets/doctor-portrait.jpg";
import heroDoctor from "../assets/hero-doctor.jpeg";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { clinic } from "../data/clinic";

export function AboutDoctor() {
  useEffect(() => {
    document.title = `${clinic.doctor.name} — ${clinic.name}`;
  }, []);

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="hero-bg pt-32 md:pt-36 pb-12">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="eyebrow flex items-center gap-1.5 text-primary mb-3">
              <Sparkles className="h-4 w-4" aria-hidden /> Meet the Founder &amp; Lead Surgeon
            </span>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl md:text-4xl">
              {clinic.doctor.name}
            </h1>
            <p className="mt-2.5 font-display text-lg font-semibold text-primary">
              {clinic.doctor.credentials}
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              An Oral &amp; Maxillofacial Surgeon, Implantologist, and Cosmetic Specialist with over{" "}
              <strong className="text-ink font-semibold">{clinic.doctor.experience}</strong> of dedicated clinical experience.{" "}
              {clinic.doctor.name} founded {clinic.name} with a simple conviction — that expert, specialized surgical dentistry can be delivered with warmth, gentleness, and complete patient comfort.
            </p>

            {/* Quick Badges */}
            <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary-soft/80 px-3.5 py-1.5 text-primary shadow-2xs">
                <Award className="h-3.5 w-3.5" aria-hidden /> 8+ Years Experience
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-ink shadow-2xs">
                <GraduationCap className="h-3.5 w-3.5 text-primary" aria-hidden /> MDS Specialist
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-ink shadow-2xs">
                <Languages className="h-3.5 w-3.5 text-primary" aria-hidden /> English &amp; Tamil
              </span>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="btn-primary flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-md shadow-primary/20 transition-transform hover:-translate-y-0.5"
              >
                <Calendar className="h-4 w-4" aria-hidden />
                <span>Book Consultation</span>
              </Link>
              <Link
                to="/services"
                className="btn-outline flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:border-primary hover:bg-primary-soft hover:text-primary"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>

          {/* Doctor Portrait Container */}
          <Reveal>
            <div className="relative mx-auto max-w-sm">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border bg-white shadow-[var(--shadow-elegant)] group">
                <img
                  src={doctorPortrait}
                  alt={`${clinic.doctor.name} portrait`}
                  width={1200}
                  height={1500}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  fetchPriority="high"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Key Clinical Stats Strip ── */}
      <section className="border-y border-border/80 bg-white py-8">
        <div className="container-page grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <span className="font-display text-3xl font-bold text-primary">8+ Years</span>
            <span className="mt-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Clinical Practice</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="font-display text-3xl font-bold text-ink">MDS Degree</span>
            <span className="mt-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Maxillofacial Surgery</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="font-display text-3xl font-bold text-primary">2,150+</span>
            <span className="mt-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Happy Patients</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="font-display text-3xl font-bold text-ink">100%</span>
            <span className="mt-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Painless Protocol</span>
          </div>
        </div>
      </section>

      {/* ── Areas of Clinical Expertise ── */}
      <section className="section-y bg-muted/30">
        <div className="container-page">
          <SectionHeading
            eyebrow="Specializations"
            title="Areas of Clinical Expertise"
            description="Combining advanced surgical training with delicate aesthetic craftsmanship for complete oral health."
            className="mb-12"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Reveal delay={0.05}>
              <div className="card-lux flex h-full flex-col p-6 rounded-2xl">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary mb-5">
                  <Scissors className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">Oral &amp; Maxillofacial Surgery</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">
                  Expert surgical management of wisdom teeth extractions, cyst removals, facial trauma, and jaw realignments.
                </p>
                <div className="mt-4 border-t border-border/60 pt-3 text-xs font-semibold text-primary">
                  Advanced Surgical Care
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card-lux flex h-full flex-col p-6 rounded-2xl">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary mb-5">
                  <ShieldCheck className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">Dental Implantology</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">
                  Digital 3D-guided placement of titanium implants to permanently restore missing teeth with natural strength and aesthetics.
                </p>
                <div className="mt-4 border-t border-border/60 pt-3 text-xs font-semibold text-primary">
                  Permanent Tooth Replacement
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="card-lux flex h-full flex-col p-6 rounded-2xl">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary mb-5">
                  <Sparkles className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">Cosmetic Smile Design</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">
                  Tailored porcelain veneers, teeth whitening, and complete smile redesign previewed digitally before treatment.
                </p>
                <div className="mt-4 border-t border-border/60 pt-3 text-xs font-semibold text-primary">
                  Aesthetic Restoration
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="card-lux flex h-full flex-col p-6 rounded-2xl">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary mb-5">
                  <Stethoscope className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">Pediatric &amp; Preventive Care</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">
                  Gentle, fear-free treatments designed specifically for children and families to build positive lifelong habits.
                </p>
                <div className="mt-4 border-t border-border/60 pt-3 text-xs font-semibold text-primary">
                  Family Health &amp; Prevention
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>


      {/* ── Doctor Banner — Split Layout ── */}
      <section className="relative overflow-hidden">
        <div className="flex min-h-[480px] sm:min-h-[560px] md:min-h-[520px]">
          {/* LEFT: Full-height image, exactly half the section width */}
          <div className="hidden md:block w-1/2 flex-shrink-0 relative overflow-hidden">
            <img
              src={heroDoctor}
              alt={`${clinic.doctor.name} — Oral & Maxillofacial Surgeon`}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>

          {/* RIGHT: Dark content panel in remaining half */}
          <div className="flex-1 flex flex-col justify-center bg-slate-900 px-8 py-14 sm:px-12 md:px-14">
            <Reveal>
              <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl leading-tight">
                Every Smile Has a Story.<br />
                <span className="text-primary">We Help Write the Best Chapter.</span>
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-300 max-w-md">
                With over {clinic.doctor.experience} of specialized surgical and cosmetic dental practice, {clinic.doctor.name} brings precision, patience, and genuine care to every patient — from the first consultation to the final smile.
              </p>

              {/* Mini stats row */}
              <div className="mt-10 flex flex-wrap gap-8">
                <div className="flex flex-col">
                  <span className="font-display text-3xl font-bold text-white">8+</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-0.5">Years Practice</span>
                </div>
                <div className="w-px bg-white/20 self-stretch" />
                <div className="flex flex-col">
                  <span className="font-display text-3xl font-bold text-white">2,150+</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-0.5">Patients Treated</span>
                </div>
                <div className="w-px bg-white/20 self-stretch" />
                <div className="flex flex-col">
                  <span className="font-display text-3xl font-bold text-white">100%</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-0.5">Painless Protocol</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Doctor's Core Treatment Philosophy ── */}
      <section className="section-y">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <SectionHeading
                eyebrow="Our Commitment"
                title="A Patient-Centered Treatment Philosophy"
                description="Healthcare should be honest, calm, and tailored to your individual needs."
              />
              <div className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink">Painless &amp; Gentle Approach</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Modern local anesthesia and micro-precision techniques ensure every procedure is comfortable and pain-free.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink">Transparent &amp; Honest Advice</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      We take the time to explain every diagnostic finding and present clear treatment options with zero rush.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink">Hospital-Grade Infection Control</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Strict sterilization protocols, pouch packaging, and autoclaving standards for absolute safety.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor Quote Card Banner */}
            <Reveal>
              <div
                className="relative rounded-3xl border border-primary/20 bg-white p-8 shadow-[var(--shadow-soft)] sm:p-10"
                style={{ backgroundImage: "var(--gradient-soft)" }}
              >
                <Quote className="h-10 w-10 text-primary/80" aria-hidden />
                <blockquote className="mt-4 font-display text-xl leading-relaxed sm:text-2xl font-medium">
                  "Every patient deserves a doctor who listens first. My promise is honest advice, art-level surgical detail, and a healthy smile you'll wear proudly for life."
                </blockquote>
                <div className="mt-8 flex items-center gap-4 border-t border-border/80 pt-6">
                  <div className="h-12 w-12 overflow-hidden rounded-full border border-primary/20">
                    <img src={doctorPortrait} alt={clinic.doctor.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold">{clinic.doctor.name}</div>
                    <div className="text-xs font-semibold text-primary">Founder &amp; Lead Surgeon</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Qualifications & Professional Bodies ── */}
      <section className="section-y bg-muted/40">
        <div className="container-page max-w-4xl">
          <SectionHeading
            eyebrow="Credentials"
            title="Education &amp; Professional Associations"
            description="Continuous learning and active membership in leading surgical and dental associations."
            align="center"
            className="mb-12"
          />

          <div className="grid gap-6 md:grid-cols-2">
            {/* Academic Degrees */}
            <div className="card-lux p-7 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">Academic Degrees</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong className="text-ink font-semibold">MDS — Oral &amp; Maxillofacial Surgery</strong>
                    <br />
                    Specialised Master's degree in complex surgical dentistry, jaw alignment, and facial trauma repair.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong className="text-ink font-semibold">BDS — Bachelor of Dental Surgery</strong>
                    <br />
                    Foundational medical degree in dental surgery and oral healthcare.
                  </span>
                </li>
              </ul>
            </div>

            {/* Professional Bodies */}
            <div className="card-lux p-7 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">Professional Bodies</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong className="text-ink font-semibold">IDA</strong> — Indian Dental Association
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong className="text-ink font-semibold">AOMSI</strong> — Association of Oral and Maxillofacial Surgeons of India
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
}
