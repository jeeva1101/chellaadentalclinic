import { useEffect, useState } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { clinic } from "../data/clinic";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-40 flex justify-end px-5">
      <div className="pointer-events-auto flex flex-col items-end gap-3">
        {show && (
          <button
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white text-ink shadow-[0_10px_30px_-14px_rgba(15,23,42,0.35)] transition-transform hover:-translate-y-0.5"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}
        <a
          href={`https://wa.me/${clinic.contact.whatsapp}?text=${encodeURIComponent(
            "Hi " + clinic.name + ", I would like to book an appointment."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="group relative grid h-14 w-14 place-items-center rounded-full text-white shadow-[0_16px_40px_-14px_rgba(16,185,129,0.55)]"
          style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}
        >
          <span
            className="absolute inset-0 rounded-full"
            style={{
              background: "rgba(37,211,102,0.55)",
              animation: "pulse-ring 2.4s ease-out infinite",
            }}
            aria-hidden
          />
          <MessageCircle className="relative h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
