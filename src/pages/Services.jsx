import { useEffect } from "react";
import { services } from "../data/services";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { clinic } from "../data/clinic";

/* ── Service Images for Specialised Treatments ── */
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

/* Slugs of the 14 primary featured services requested by user */
const PRIMARY_SLUGS = [
  "cyst-removal-surgery",
  "oral-cancer-diagnosis-management",
  "jaw-fracture-management",
  "orthognathic-surgery",
  "root-canal",
  "cleft-lip-palate-repair",
  "dental-implants",
  "smile-makeover",
  "pediatric-dentistry",
  "fracture-tooth-restoration",
  "braces-aligners",
  "wisdom-tooth-removal",
  "tooth-extraction",
  "fixed-partial-denture",
];

export function Services() {
  useEffect(() => {
    document.title = `Dental Services — ${clinic.name}`;
  }, []);

  const primaryServices = PRIMARY_SLUGS.map((slug) => services.find((s) => s.slug === slug)).filter(Boolean);
  const otherServices = services.filter((s) => !PRIMARY_SLUGS.includes(s.slug));

  const renderServiceCard = (s, i, isSpecialised = false) => {
    const serviceImg = isSpecialised ? SERVICE_IMAGES[s.slug] : null;

    return (
      <Reveal key={s.slug} delay={i * 0.03}>
        <article
          id={s.slug}
          className="card-lux flex h-full flex-col overflow-hidden scroll-mt-36 md:scroll-mt-40"
        >
          {/* Specialised card image header */}
          {serviceImg && (
            <div className="aspect-[4/3] w-full overflow-hidden border-b border-border bg-muted">
              <img
                src={serviceImg}
                alt={s.title}
                className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-102"
                loading="lazy"
              />
            </div>
          )}

          <div className="flex flex-col flex-1 p-6 sm:p-7">
            {/* Other services icon (only for non-specialised) */}
            {!isSpecialised && s.icon && (
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary mb-5">
                <s.icon className="h-6 w-6" aria-hidden />
              </div>
            )}

            <h2 className="font-display text-xl font-semibold text-ink">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>

            <div className="mt-5 space-y-3 text-sm flex-1">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-primary">Benefits</div>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-primary">Procedure</div>
                <ol className="mt-2 grid grid-cols-2 gap-1 text-muted-foreground">
                  {s.procedure.map((p, idx) => (
                    <li key={p} className="text-xs">
                      <span className="font-semibold text-ink">{idx + 1}.</span> {p}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </article>
      </Reveal>
    );
  };

  return (
    <>
      {/* Hero */}
      <section className="hero-bg pt-32 md:pt-36 pb-10">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">Services</span>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Every treatment your family will ever need.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From gentle first visits to complex surgical and maxillofacial procedures — delivered with digital
            precision and unhurried care.
          </p>
        </div>
      </section>

      {/* Main Specialised Services */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Specialised Treatments"
            title="Advanced Dental & Surgical Procedures"
            description="Our primary clinical procedures designed for oral health, smile transformation, and complex jaw restoration."
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {primaryServices.map((s, i) => renderServiceCard(s, i, true))}
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section
        className="section-y"
        style={{ background: "color-mix(in oklab, var(--primary-soft) 45%, white)" }}
      >
        <div className="container-page">
          <SectionHeading
            eyebrow="Comprehensive Care"
            title="Other Dental Services"
            description="Additional preventive, restorative, and hygiene treatments to keep your smile healthy and bright."
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s, i) => renderServiceCard(s, i, false))}
          </div>
        </div>
      </section>
    </>
  );
}
