import { useState } from "react";
import { Mail, Phone, MapPin, Download, Check, Copy, MessageCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import cvPath from "@assets/NaderRahomaCV_1782902897845.pdf";

function CopyBtn({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); } catch { /* ignore */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      aria-label={`Copy ${label}`}
      className="ml-auto flex-shrink-0 p-1.5 rounded-lg text-muted-foreground hover:text-primary transition-all duration-200 opacity-0 group-hover:opacity-100 hover:bg-white/5"
    >
      {copied
        ? <Check size={12} style={{ color: "hsl(190 100% 50%)" }} />
        : <Copy size={12} />}
    </button>
  );
}

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "naderrahoumah@gmail.com",
    display: "naderrahoumah@gmail.com",
    href: "mailto:naderrahoumah@gmail.com",
    external: false,
    copyable: true,
    accent: "hsl(190 100% 50%)",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+201129848979",
    display: "+20 112 984 8979",
    href: "tel:+201129848979",
    external: false,
    copyable: true,
    accent: "hsl(200 100% 55%)",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+20 112 984 8979",
    display: "+20 112 984 8979",
    href: "https://wa.me/201129848979",
    external: true,
    copyable: false,
    accent: "hsl(142 70% 49%)",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Cairo, Egypt",
    display: "Cairo, Egypt",
    href: "https://maps.google.com/?q=Cairo,Egypt",
    external: true,
    copyable: false,
    accent: "hsl(180 100% 48%)",
  },
];

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <section
      id="contact"
      data-testid="contact-section"
      aria-labelledby="contact-heading"
      className="py-16 px-5 sm:px-8"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-10 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p
            className="text-xs font-mono tracking-[0.35em] uppercase mb-2.5"
            style={{ color: "hsl(190 100% 50%)" }}
          >
            Get in touch
          </p>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-black text-foreground mb-3"
          >
            Contact Me
          </h2>
          <div
            className="w-14 h-px mx-auto"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(190 100% 50%), transparent)",
            }}
          />
          <p className="text-sm text-muted-foreground mt-3 max-w-xs mx-auto leading-relaxed">
            Available for opportunities — feel free to reach out through any of the channels below.
          </p>
        </div>

        {/* Contact cards grid */}
        <div className="grid sm:grid-cols-2 gap-3 mb-5">
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                data-testid={`contact-${item.label.toLowerCase()}`}
                className={`group flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_hsl(0_0%_0%/0.35)] ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{
                  background: "hsl(222 47% 8%)",
                  border: "1px solid hsl(217 32% 16%)",
                  transitionDelay: `${i * 80}ms`,
                  textDecoration: "none",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${item.accent}40`;
                  (e.currentTarget as HTMLElement).style.background = `${item.accent}07`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "hsl(217 32% 16%)";
                  (e.currentTarget as HTMLElement).style.background = "hsl(222 47% 8%)";
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-[1.08]"
                  style={{
                    background: `${item.accent}14`,
                    border: `1px solid ${item.accent}30`,
                  }}
                >
                  <Icon size={18} style={{ color: item.accent }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-sm font-bold text-foreground truncate">
                    {item.display}
                  </p>
                </div>
                {item.copyable && (
                  <CopyBtn text={item.value} label={item.label} />
                )}
              </a>
            );
          })}
        </div>

        {/* Download CV — full-width CTA */}
        <a
          href={cvPath}
          download="Nader_Rahoumah_CV.pdf"
          data-testid="contact-download-cv"
          className="flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_36px_hsl(190_100%_50%/0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          style={{
            background: "linear-gradient(135deg, hsl(190 100% 50%), hsl(205 100% 56%))",
            color: "hsl(222 47% 4%)",
            boxShadow: "0 0 20px hsl(190 100% 50% / 0.2)",
          }}
        >
          <Download size={15} strokeWidth={2.5} aria-hidden="true" />
          Download CV — Nader Rahoumah
        </a>
      </div>
    </section>
  );
}
