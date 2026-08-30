import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone, ChevronDown, MapPin, Clock, Sparkles, Calendar, ChevronRight } from "lucide-react";
import { navLinks } from "../data/nav";
import { clinic } from "../data/clinic";
import { ToothMark } from "./ToothMark";
import clinicIcon from "../assets/logo/icon.jpeg";

/* ── Desktop dropdown for "For Patients" style items ── */
function DropdownItem({ item }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();

  // close on route change
  useEffect(() => setOpen(false), [location]);

  // close when clicking outside
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const isChildActive = item.children.some((c) => location.pathname === c.to);

  return (
    <li className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
          isChildActive
            ? "bg-white text-primary font-semibold shadow-xs border border-border/80"
            : "text-muted-foreground hover:text-ink hover:bg-white/60"
        }`}
      >
        <span>{item.label}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180 text-primary" : ""}`}
          aria-hidden
        />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute left-1/2 top-full mt-2.5 w-48 -translate-x-1/2 rounded-2xl border border-primary/15 bg-white/95 p-1.5 shadow-[0_20px_50px_-12px_rgba(30,58,138,0.2)] backdrop-blur-2xl transition-all">
          <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {item.label}
          </div>
          <div className="h-px bg-border/60 mb-1" />
          {item.children.map((child) => (
            <NavLink
              key={child.to}
              to={child.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-primary-soft text-primary font-semibold"
                    : "text-muted-foreground hover:text-ink hover:bg-muted/80"
                }`
              }
            >
              <span>{child.label}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary/40" aria-hidden />
            </NavLink>
          ))}
        </div>
      )}
    </li>
  );
}

/* ── Desktop dropdown for Services with wider panel & View All ── */
function ServicesDropdownItem({ item }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => setOpen(false), [location]);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const isActive = location.pathname === "/services";

  return (
    <li className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
          isActive
            ? "bg-white text-primary font-semibold shadow-xs border border-border/80"
            : "text-muted-foreground hover:text-ink hover:bg-white/60"
        }`}
      >
        <span>{item.label}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180 text-primary" : ""}`}
          aria-hidden
        />
      </button>

      {/* Wide Services Dropdown panel */}
      {open && (
        <div className="absolute left-1/2 top-full mt-2.5 w-72 -translate-x-1/2 rounded-2xl border border-primary/15 bg-white/97 p-2 shadow-[0_20px_50px_-12px_rgba(30,58,138,0.25)] backdrop-blur-2xl">
          <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Our Treatments
          </div>
          <div className="h-px bg-border/60 mb-1.5" />
          <div className="grid gap-0.5">
            {item.children.map((child) => (
              <Link
                key={child.to}
                to={child.to}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:bg-primary-soft hover:text-primary group"
              >
                <span>{child.label}</span>
                <ChevronRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" aria-hidden />
              </Link>
            ))}
          </div>
          {/* View All button */}
          <div className="mt-2 border-t border-border/60 pt-2">
            <Link
              to="/services"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20"
            >
              <span>View All Services</span>
              <ChevronRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      )}
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobilePatientOpen, setMobilePatientOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      {/* Top Announcement / Quick Info Bar */}
      <div
        className={`hidden border-b border-border/40 bg-slate-900/90 text-white/90 backdrop-blur-md transition-all duration-300 md:block ${
          scrolled ? "h-0 overflow-hidden py-0 border-none opacity-0" : "py-2 opacity-100"
        }`}
      >
        <div className="container-page flex items-center justify-between text-xs tracking-wide font-medium">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-white/80">
              <MapPin className="h-3.5 w-3.5 text-blue-300" />
              {clinic.contact.address.line1}, Chinnalapatti
            </span>
            <span className="flex items-center gap-1.5 text-white/80">
              <Clock className="h-3.5 w-3.5 text-blue-300" />
              Mon – Sat: 9:00 AM – 9:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-blue-300 font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              Painless Dental &amp; Maxillofacial Care
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-2xl border-b border-border/80 shadow-[0_10px_35px_-15px_rgba(15,23,42,0.12)] py-2.5"
            : "bg-white/75 backdrop-blur-lg py-3.5"
        }`}
      >
        <div className="container-page flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <div className="flex min-w-0 items-center">
            <Link
              to="/"
              className="group flex min-w-0 items-center gap-3 transition-transform hover:scale-[1.01]"
              aria-label={`${clinic.name} home`}
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-primary/20 bg-white overflow-hidden shadow-xs transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
                <img src={clinicIcon} alt={clinic.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold leading-tight tracking-tight text-ink sm:text-xl group-hover:text-primary transition-colors">
                  Chellaa Dental
                </span>
                <span className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
                  &amp; Maxillofacial Clinic
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Pill Container */}
          <nav aria-label="Primary" className="hidden lg:flex items-center justify-center">
            <ul className="flex items-center gap-3 rounded-full border border-border/80 bg-muted/60 p-1 backdrop-blur-md shadow-xs">
              {navLinks.map((l) =>
                l.isServices ? (
                  <ServicesDropdownItem key={l.label} item={l} />
                ) : l.children ? (
                  <DropdownItem key={l.label} item={l} />
                ) : (
                  <li key={l.to}>
                    <NavLink
                      to={l.to}
                      end={l.to === "/"}
                      className={({ isActive }) =>
                        `flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                          isActive
                            ? "bg-white text-primary font-semibold shadow-xs border border-border/80"
                            : "text-muted-foreground hover:text-ink hover:bg-white/60"
                        }`
                      }
                    >
                      {l.label}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden flex-1 items-center justify-end gap-3 lg:flex">
            <a
              href={`tel:${clinic.contact.phoneDigits}`}
              className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold text-primary transition-all hover:bg-primary/10 hover:shadow-xs whitespace-nowrap"
              aria-label={`Call ${clinic.name}`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <Phone className="h-3.5 w-3.5" aria-hidden />
              {clinic.contact.phone}
            </a>

            <Link
              to="/contact"
              className="btn-primary flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold shadow-md shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 whitespace-nowrap"
            >
              <Calendar className="h-3.5 w-3.5" aria-hidden />
              <span>Book Visit</span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="ml-auto grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-border bg-white text-ink shadow-xs transition-all hover:bg-muted active:scale-95 lg:hidden"
          >
            {open ? <X className="h-5 w-5 text-primary" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? "block" : "hidden"} border-t border-border/80 bg-white/98 backdrop-blur-2xl shadow-xl transition-all`}
      >
        <nav aria-label="Mobile" className="container-page py-6">
          <ul className="flex flex-col gap-1.5">
            {navLinks.map((l) =>
              l.isServices ? (
                <li key={l.label}>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-ink hover:bg-muted/80 transition-colors"
                  >
                    <span>{l.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-primary transition-transform duration-200 ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                  {mobileServicesOpen && (
                    <ul className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-primary/30 pl-3">
                      {l.children.map((child) => (
                        <li key={child.to}>
                          <Link
                            to={child.to}
                            onClick={() => {
                              setOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className="block rounded-lg px-3.5 py-2.5 text-sm font-medium text-muted-foreground hover:text-ink hover:bg-muted transition-colors"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                      {/* View All button in mobile */}
                      <li>
                        <Link
                          to="/services"
                          onClick={() => {
                            setOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className="mt-1 flex items-center gap-2 rounded-lg bg-primary/10 px-3.5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
                        >
                          <span>View All Services</span>
                          <ChevronRight className="h-4 w-4" aria-hidden />
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              ) : l.children ? (
                <li key={l.label}>
                  <button
                    type="button"
                    onClick={() => setMobilePatientOpen((v) => !v)}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-ink hover:bg-muted/80 transition-colors"
                  >
                    <span>{l.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-primary transition-transform duration-200 ${
                        mobilePatientOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                  {mobilePatientOpen && (
                    <ul className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-primary/30 pl-3">
                      {l.children.map((child) => (
                        <li key={child.to}>
                          <NavLink
                            to={child.to}
                            onClick={() => {
                              setOpen(false);
                              setMobilePatientOpen(false);
                            }}
                            className={({ isActive }) =>
                              `block rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
                                isActive
                                  ? "bg-primary-soft text-primary font-semibold"
                                  : "text-muted-foreground hover:text-ink hover:bg-muted"
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                        isActive
                          ? "bg-primary-soft text-primary"
                          : "text-ink hover:bg-muted/80"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>

          <div className="mt-6 pt-4 border-t border-border/60 grid gap-3">
            <a
              href={`tel:${clinic.contact.phoneDigits}`}
              className="btn-outline flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold"
            >
              <Phone className="h-4 w-4 text-primary" aria-hidden />
              Call {clinic.contact.phone}
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold shadow-md shadow-primary/20"
            >
              <Calendar className="h-4 w-4" aria-hidden />
              Book Appointment
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
