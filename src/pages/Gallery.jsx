import { useEffect, useState } from "react";
import { X, ZoomIn, Sparkles, Images } from "lucide-react";
import { clinic } from "../data/clinic";
import { Reveal } from "../components/Reveal";

/* ── Clinic Images ── */
import clinic1 from "../assets/clinicimages/clinic1.jpeg";
import clinic2 from "../assets/clinicimages/clinic2.jpeg";
import clinic3 from "../assets/clinicimages/clinic3.jpeg";
import clinic4 from "../assets/clinicimages/clinic4.png";
import clinic5 from "../assets/clinicimages/clinic5.jpeg";
import clinic6 from "../assets/clinicimages/clinic6.jpeg";

/* ── Treatment / Before & After Images ── */
import ti1 from "../assets/treatmentimages/treatmentimage1.jpeg";
import ti2 from "../assets/treatmentimages/treatmentimage2.jpeg";
import ti3 from "../assets/treatmentimages/treatmentimage3.jpeg";
import ti4 from "../assets/treatmentimages/treatmentimage4.jpeg";
import ti5 from "../assets/treatmentimages/treatmentimage5.jpeg";
import ti6 from "../assets/treatmentimages/treatmentimage6.jpeg";
import ti7 from "../assets/treatmentimages/treatmentimage7.jpeg";
import ti8 from "../assets/treatmentimages/treatmentimage8.jpeg";

const BEFORE_AFTER = [
  { src: ti1, alt: "Smile transformation 1" },
  { src: ti2, alt: "Smile transformation 2" },
  { src: ti3, alt: "Smile transformation 3" },
  { src: ti4, alt: "Smile transformation 4" },
  { src: ti5, alt: "Smile transformation 5" },
  { src: ti6, alt: "Smile transformation 6" },
  { src: ti7, alt: "Smile transformation 7" },
  { src: ti8, alt: "Smile transformation 8" },
];

const CLINIC_GALLERY = [
  { src: clinic4, alt: "Clinic view 4" },
  { src: clinic5, alt: "Clinic view 5" },
  { src: clinic6, alt: "Clinic view 6" },
  { src: clinic1, alt: "Clinic view 1" },
  { src: clinic2, alt: "Clinic view 2" },
  { src: clinic3, alt: "Clinic view 3" },
];

/* Reusable image card */
function ImageCard({ img, onClick, aspectClass = "aspect-[4/3]", showBeforeAfter = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      aria-label={`View ${img.alt}`}
    >
      <div className={`${aspectClass} relative overflow-hidden`}>
        <img
          src={img.src}
          alt={img.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {showBeforeAfter && (
          <>
            <div className="absolute top-3 left-3 pointer-events-none z-10">
              <span className="rounded-full bg-slate-900/85 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md border border-white/20 shadow-sm">
                Before
              </span>
            </div>
            <div className="absolute top-1/2 left-3 -translate-y-1/2 pointer-events-none z-10">
              <span className="rounded-full bg-primary/95 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md border border-white/20 shadow-sm">
                After
              </span>
            </div>
          </>
        )}
      </div>
      {/* Hover zoom icon */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
        <div className="flex h-11 w-11 scale-75 items-center justify-center rounded-full bg-white/90 text-primary opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
          <ZoomIn className="h-5 w-5" aria-hidden />
        </div>
      </div>
    </button>
  );
}

export function Gallery() {
  /* lightbox: { images: [...], index: N } | null */
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    document.title = `Gallery — ${clinic.name}`;
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox]);

  const openLightbox = (images, index) => setLightbox({ images, index });
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((lb) => ({ ...lb, index: lb.index - 1 }));
  const next = () => setLightbox((lb) => ({ ...lb, index: lb.index + 1 }));

  const currentImg = lightbox ? lightbox.images[lightbox.index] : null;

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-bg pt-32 md:pt-36 pb-10">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">Gallery</span>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            A look inside our clinic &amp; real results.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Every space at {clinic.name} is designed to feel comfortable and reassuring —
            from our treatment corners to real smile transformations.
          </p>
        </div>
      </section>

      {/* ── Smile Transformations Section (Grid Layout with Before & After Badges) ── */}
      <section
        className="section-y"
        style={{ background: "color-mix(in oklab, var(--primary-soft) 45%, white)" }}
      >
        <div className="container-page">
          <div className="mb-10 flex items-start gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary shadow-[var(--shadow-soft)]">
              <Sparkles className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <span className="eyebrow">Smile Transformations</span>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Real Patient Results
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Our Before &amp; After transformations showcase real patient journeys — from initial dental concerns to beautifully restored, functional, and confident smiles.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BEFORE_AFTER.map((img, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <ImageCard img={img} onClick={() => openLightbox(BEFORE_AFTER, i)} showBeforeAfter />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clinic Gallery ── */}
      <section className="section-y">
        <div className="container-page">
          <div className="mb-10 flex items-start gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary shadow-[var(--shadow-soft)]">
              <Images className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <span className="eyebrow">Our Clinic</span>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Inside the Space
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                From the welcoming reception to every treatment corner — a clinic built for calm.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CLINIC_GALLERY.map((img, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <ImageCard img={img} onClick={() => openLightbox(CLINIC_GALLERY, i)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox && currentImg && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <div
            className="relative max-h-[90vh] max-w-4xl w-full overflow-hidden rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Teal accent bar */}
            <div
              className="absolute inset-x-0 top-0 h-1 z-10"
              style={{ background: "var(--gradient-primary)" }}
            />

            <img
              src={currentImg.src}
              alt={currentImg.alt}
              className="max-h-[85vh] w-full object-contain bg-black"
            />

            {/* Close */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink shadow-md transition hover:bg-white"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prev / Next */}
            <div className="absolute inset-x-3 bottom-4 flex justify-between pointer-events-none">
              {lightbox.index > 0 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink text-lg shadow-md transition hover:bg-white"
                  aria-label="Previous image"
                >
                  ‹
                </button>
              )}
              {lightbox.index < lightbox.images.length - 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  className="pointer-events-auto ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink text-lg shadow-md transition hover:bg-white"
                  aria-label="Next image"
                >
                  ›
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
