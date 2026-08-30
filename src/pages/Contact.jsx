import { useEffect, useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, MessageCircle, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { clinic, web3formsKey } from "../data/clinic";
import { Reveal } from "../components/Reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  email: z.string().trim().email("Please enter a valid email address").max(120),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Only digits and + - ( ) allowed"),
  service: z.string().trim().max(80).optional(),
  message: z.string().trim().min(5, "A brief message helps us prepare for your visit").max(1000),
  botcheck: z.string().max(0).optional(),
});

export function Contact() {
  const [state, setState] = useState("idle");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    document.title = `Contact & Book — ${clinic.name}`;
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const fieldErrors = {};
      parsed.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[i.path[0]] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setState("submitting");

    try {
      // Build pre-filled WhatsApp message
      const textMessage = `Hello ${clinic.name},\n\nI would like to book an appointment.\n• Name: ${parsed.data.name}\n• Service: ${parsed.data.service || "General Consultation"}\n• Phone: ${parsed.data.phone}\n• Email: ${parsed.data.email}\n• Message: ${parsed.data.message}`;

      const waTargetUrl = `https://wa.me/${clinic.contact.whatsapp}?text=${encodeURIComponent(textMessage)}`;

      // Also submit to Web3Forms if key is provided
      if (web3formsKey && web3formsKey !== "REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY") {
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: web3formsKey,
            subject: `New Appointment Request — ${parsed.data.name}`,
            from_name: `${clinic.name} Website`,
            ...parsed.data,
          }),
        }).catch(() => {});
      }

      // Directly open WhatsApp with appointment details
      window.open(waTargetUrl, "_blank");

      setState("success");
      setMessage(`Thank you, ${parsed.data.name}! Your appointment request has been sent to WhatsApp.`);
      form.reset();
    } catch {
      setState("error");
      setMessage("Unable to open WhatsApp right now. Please try again.");
    }
  }

  return (
    <>
      <section className="hero-bg pt-32 md:pt-36 pb-10">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Book a visit — we'd love to meet you.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Choose whatever's easiest — call, WhatsApp or the form below. Same-day slots available
            for emergencies.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <form
              onSubmit={onSubmit}
              noValidate
              className="card-lux grid gap-4 p-6 sm:p-8"
              aria-label="Appointment request form"
            >
              <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

              <Field label="Full name" name="name" error={errors.name} autoComplete="name" required />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Email" name="email" type="email" error={errors.email} autoComplete="email" required />
                <Field label="Phone" name="phone" type="tel" error={errors.phone} autoComplete="tel" required />
              </div>
              <div>
                <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink">
                  Service of interest
                </label>
                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
                >
                  <option value="">General Consultation</option>
                  <option>Smile Designing & Makeover</option>
                  <option>Orthodontics (Braces & Aligners)</option>
                  <option>Fracture Tooth Restoration</option>
                  <option>Wisdom Tooth Removal</option>
                  <option>Root Canal Treatment (RCT)</option>
                  <option>Pediatric Dentistry</option>
                  <option>Painless Tooth Extraction</option>
                  <option>Fixed Partial Denture (FPD)</option>
                  <option>Dental Implants</option>
                  <option>Cyst Removal Surgery</option>
                  <option>Oral Cancer Diagnosis & Management</option>
                  <option>Face & Jaw Fracture Management</option>
                  <option>Orthognathic Surgery</option>
                  <option>Cleft Lip & Palate Repair</option>
                  <option>Teeth Whitening</option>
                  <option>Emergency Care</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  maxLength={1000}
                  aria-invalid={!!errors.message}
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
                  placeholder="Tell us briefly about your query or preferred appointment time."
                />
                {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={state === "submitting"}
                className="btn-primary mt-2 disabled:opacity-70"
              >
                {state === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Redirecting to WhatsApp...
                  </>
                ) : (
                  <>Request Appointment</>
                )}
              </button>

              {state === "success" && (
                <div className="flex items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden />
                  <span>{message}</span>
                </div>
              )}

              {state === "error" && (
                <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden /> {message}
                </div>
              )}
              <p className="text-xs text-muted-foreground">
                By submitting, you agree to be contacted about your enquiry. We respect your privacy.
              </p>
            </form>
          </Reveal>

          <div className="grid gap-4">
            <InfoCard
              icon={Phone}
              title="Call us"
              href={`tel:${clinic.contact.phoneDigits}`}
              body={<span className="font-semibold hover:text-primary">{clinic.contact.phone}</span>}
            />
            <InfoCard
              icon={MessageCircle}
              title="WhatsApp"
              href={`https://wa.me/${clinic.contact.whatsapp}?text=${encodeURIComponent(`Hello ${clinic.name}, I would like to enquire about an appointment.`)}`}
              target="_blank"
              body={<span className="font-semibold hover:text-primary">{clinic.contact.whatsappDisplay}</span>}
            />
            <InfoCard
              icon={Mail}
              title="Email Us"
              href={`mailto:${clinic.contact.email}?subject=${encodeURIComponent(`Appointment Enquiry — ${clinic.name}`)}`}
              onClick={(e) => {
                // Try mailto first, fallback to Gmail web compose for desktop browsers without default mail app
                const mailtoUrl = `mailto:${clinic.contact.email}?subject=${encodeURIComponent(`Appointment Enquiry — ${clinic.name}`)}`;
                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${clinic.contact.email}&su=${encodeURIComponent(`Appointment Enquiry — ${clinic.name}`)}`;
                window.location.href = mailtoUrl;
                setTimeout(() => {
                  window.open(gmailUrl, "_blank");
                }, 400);
              }}
              body={
                <div className="space-y-1">
                  <span className="font-semibold block hover:text-primary">{clinic.contact.email}</span>
                  <div className="flex flex-wrap gap-2 text-xs text-primary font-medium pt-1">
                    <span>Click to compose email</span>
                  </div>
                </div>
              }
            />
            <InfoCard
              icon={MapPin}
              title="Visit Us"
              body={<span>{clinic.contact.address.line1}, {clinic.contact.address.line2}</span>}
            />
            <InfoCard
              icon={Clock}
              title="Working hours"
              body={
                <ul className="text-sm">
                  {clinic.contact.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="font-medium text-ink">{h.time}</span>
                    </li>
                  ))}
                </ul>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", error, autoComplete, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && <span aria-hidden className="text-primary"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-err` : undefined}
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
      />
      {error && (
        <p id={`${name}-err`} className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function InfoCard({ icon: Icon, title, body, href, target, onClick }) {
  const content = (
    <div className="card-lux flex gap-4 p-5 h-full transition-transform duration-200 group-hover:-translate-y-0.5">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{title}</div>
        <div className="mt-1 text-sm text-ink">{body}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        onClick={onClick}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className="block group focus-visible:outline-none"
      >
        {content}
      </a>
    );
  }

  return content;
}
