import { Link } from "react-router-dom";
import {  Mail, Phone, MapPin } from "lucide-react";
import { clinic } from "../data/clinic";
import { navLinks } from "../data/nav";
import { services } from "../data/services";
import { ToothMark } from "./ToothMark";
import clinicIcon from "../assets/logo/icon.jpeg";

const STARTING_POPULAR_SLUGS = [
  "cyst-removal-surgery",
  "oral-cancer-diagnosis-management",
  "jaw-fracture-management",
  "orthognathic-surgery",
  "cleft-lip-palate-repair",
];

export function Footer() {
  const popularServices = [
    ...STARTING_POPULAR_SLUGS.map((slug) => services.find((s) => s.slug === slug)).filter(Boolean),
    ...services.filter((s) => !STARTING_POPULAR_SLUGS.includes(s.slug)).slice(0, 5),
  ];

  return (
    <footer className="relative mt-16 overflow-hidden border-t border-border bg-[color-mix(in_oklab,var(--primary-soft)_60%,white)]">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl border border-primary/20 bg-white overflow-hidden shrink-0 shadow-2xs">
              <img src={clinicIcon} alt={clinic.name} className="h-full w-full object-cover" />
            </div>
            <span className="font-display text-lg font-semibold tracking-tight text-ink">
              {clinic.name}
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {clinic.tagline}. A calm, modern practice designed around every patient's comfort.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-ink">
            Navigate
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {navLinks.map((l) =>
              l.children ? (
                l.children.map((child) => (
                  <li key={child.to}>
                    <Link to={child.to} className="transition-colors hover:text-primary">
                      {child.label}
                    </Link>
                  </li>
                ))
              ) : (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-ink">
            Popular Treatments
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {popularServices.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services#${s.slug}`}
                  className="transition-colors hover:text-primary"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-ink">
            Visit us
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <span>
                {clinic.contact.address.line1}
                <br />
                {clinic.contact.address.line2}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <a href={`tel:${clinic.contact.phoneDigits}`} className="hover:text-primary">
                {clinic.contact.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <a href={`mailto:${clinic.contact.email}`} className="hover:text-primary">
                {clinic.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </p>
          <p>Crafted with care for healthier smiles.</p>
        </div>
      </div>
    </footer>
  );
}
