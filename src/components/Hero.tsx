import { useEffect, useState, useRef } from "react";
import { MapPin, Mail, Phone, Download, MessageCircle } from "lucide-react";
import cvPath from "@assets/NaderRahomaCV_1782902897845.pdf";
import profilePhoto from "@assets/IMG_٢٠٢٦٠٧٠١_١٤٠٥٣٥_1782903964992.jpg";

const ROLES = [".NET Developer", "Backend Engineer", "ASP.NET Core Expert", "C# Specialist"];

function useTypewriter(words: string[]) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const word = words[idx];
    if (paused) {
      timer.current = setTimeout(() => { setPaused(false); setDeleting(true); }, 2200);
      return;
    }
    if (!deleting) {
      if (text.length < word.length) {
        timer.current = setTimeout(() => setText(word.slice(0, text.length + 1)), 68);
      } else setPaused(true);
    } else {
      if (text.length > 0) {
        timer.current = setTimeout(() => setText(text.slice(0, -1)), 36);
      } else {
        setDeleting(false);
        setIdx(i => (i + 1) % words.length);
      }
    }
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [text, deleting, paused, idx, words]);

  return text;
}

const socials = [
  {
    label: "Email",
    href: "mailto:naderrahoumah@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Phone",
    href: "tel:+201129848979",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/201129848979",
    target: "_blank",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L0 24l6.335-1.508A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.007-1.372l-.359-.214-3.724.886.926-3.621-.234-.372A9.818 9.818 0 0 1 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
      </svg>
    ),
  },
  {
    label: "Location",
    href: "https://maps.google.com/?q=Cairo,Egypt",
    target: "_blank",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function Hero() {
  const displayed = useTypewriter(ROLES);

  return (
    <section
      id="hero"
      data-testid="hero-section"
      aria-label="Hero — Nader Rahoumah"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Ambient background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(190 100% 50% / 0.04) 1px, transparent 1px), linear-gradient(90deg, hsl(190 100% 50% / 0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Top-center glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[340px] rounded-full blur-[100px] opacity-[0.12]"
          style={{ background: "hsl(190 100% 50%)" }}
        />
        {/* Bottom-right accent */}
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full blur-[120px] opacity-[0.06]"
          style={{ background: "hsl(220 80% 60%)" }}
        />
        {/* Bottom-left accent */}
        <div
          className="absolute bottom-0 left-0 w-[350px] h-[250px] rounded-full blur-[100px] opacity-[0.05]"
          style={{ background: "hsl(190 100% 50%)" }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-xl mx-auto px-6 pt-28 pb-16 flex flex-col items-center text-center gap-0">

        {/* ── 1. Circular profile photo ── */}
        <div className="relative animate-float mb-5" data-testid="hero-avatar-wrapper">
          {/* Spinning gradient ring */}
          <div
            aria-hidden="true"
            className="absolute -inset-[5px] rounded-full animate-spin-slow opacity-80"
            style={{
              background:
                "conic-gradient(from 0deg, hsl(190 100% 50%), hsl(210 100% 65%), hsl(180 100% 45%), transparent 60%, hsl(190 100% 50%))",
              borderRadius: "50%",
              filter: "blur(1px)",
            }}
          />
          {/* Static border ring */}
          <div
            aria-hidden="true"
            className="absolute -inset-[3px] rounded-full"
            style={{
              background:
                "linear-gradient(135deg, hsl(190 100% 50% / 0.6), hsl(205 100% 56% / 0.25), hsl(190 100% 50% / 0.5))",
              borderRadius: "50%",
            }}
          />
          {/* Outer glow */}
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-full blur-xl opacity-40"
            style={{ background: "hsl(190 100% 50%)" }}
          />
          {/* Photo */}
          <div
            data-testid="hero-avatar"
            className="relative rounded-full overflow-hidden"
            style={{
              width: "clamp(200px, 34vw, 272px)",
              height: "clamp(200px, 34vw, 272px)",
              boxShadow:
                "0 0 0 3px hsl(190 100% 50% / 0.28), 0 24px 80px hsl(222 47% 3% / 0.9)",
            }}
          >
            <img
              src={profilePhoto}
              alt="Nader Rahoumah — .NET Developer"
              className="w-full h-full object-cover"
              style={{ objectPosition: "50% 6%" }}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>

        {/* ── 2. Education glass card ── */}
        <div
          data-testid="hero-education-badge"
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-7 backdrop-blur-md"
          style={{
            background: "hsl(222 47% 10% / 0.75)",
            border: "1px solid hsl(190 100% 50% / 0.22)",
            boxShadow: "0 4px 24px hsl(222 47% 3% / 0.5), 0 0 0 1px hsl(190 100% 50% / 0.08)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: "hsl(190 100% 50%)", boxShadow: "0 0 6px hsl(190 100% 50%)" }}
            aria-hidden="true"
          />
          <span className="text-[11px] font-semibold tracking-wide" style={{ color: "hsl(190 100% 65%)" }}>
            Al-Shorouk Academy
          </span>
          <span className="w-px h-3 bg-white/10 flex-shrink-0" aria-hidden="true" />
          <span className="text-[11px] font-medium text-muted-foreground">
            CS Graduate · <span className="text-foreground/80 font-semibold">Grade: Excellent</span>
          </span>
        </div>

        {/* ── 3. Name ── */}
        <h1
          data-testid="hero-name"
          className="font-black tracking-tight leading-[1.0] mb-4 select-none"
          style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)" }}
        >
          <span className="block text-foreground">Nader</span>
          <span
            className="block"
            style={{
              background:
                "linear-gradient(130deg, hsl(190 100% 55%) 0%, hsl(196 100% 60%) 45%, hsl(210 100% 68%) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Rahoumah
          </span>
        </h1>

        {/* ── 4. Typewriter title ── */}
        <div className="h-8 flex items-center justify-center mb-2">
          <h2
            data-testid="hero-title"
            className="text-base sm:text-lg font-mono flex items-center gap-1.5 text-muted-foreground"
            aria-live="polite"
          >
            <span style={{ color: "hsl(190 100% 50%)" }} aria-hidden="true">&gt;</span>
            {displayed}
            <span
              className="inline-block w-[2px] h-4 rounded-full animate-blink"
              style={{ background: "hsl(190 100% 50%)" }}
              aria-hidden="true"
            />
          </h2>
        </div>

        {/* ── Location chip ── */}
        <p
          data-testid="hero-location"
          className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground/70 mb-8"
        >
          <MapPin size={11} style={{ color: "hsl(190 100% 50%)" }} aria-hidden="true" />
          Cairo, Egypt
        </p>

        {/* ── 5. Social icons ── */}
        <div
          className="flex items-center justify-center gap-2.5 mb-7"
          role="list"
          aria-label="Contact and social links"
        >
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              target={s.target ?? undefined}
              rel={s.target === "_blank" ? "noopener noreferrer" : undefined}
              aria-label={s.label}
              data-testid={`hero-social-${s.label.toLowerCase()}`}
              role="listitem"
              className="group flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_0_20px_hsl(190_100%_50%/0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              style={{
                background: "hsl(222 47% 11%)",
                border: "1px solid hsl(217 32% 19%)",
                color: "hsl(215 20% 58%)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "hsl(190 100% 50% / 0.45)";
                (e.currentTarget as HTMLElement).style.color = "hsl(190 100% 55%)";
                (e.currentTarget as HTMLElement).style.background = "hsl(190 100% 50% / 0.08)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "hsl(217 32% 19%)";
                (e.currentTarget as HTMLElement).style.color = "hsl(215 20% 58%)";
                (e.currentTarget as HTMLElement).style.background = "hsl(222 47% 11%)";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* ── 6. CTA buttons ── */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={cvPath}
            download="Nader_Rahoumah_CV.pdf"
            data-testid="hero-download-cv"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_hsl(190_100%_50%/0.45)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            style={{
              background: "linear-gradient(135deg, hsl(190 100% 50%), hsl(205 100% 56%))",
              color: "hsl(222 47% 4%)",
              boxShadow: "0 0 20px hsl(190 100% 50% / 0.25)",
            }}
          >
            <Download size={14} strokeWidth={2.5} aria-hidden="true" />
            Download CV
          </a>
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            data-testid="hero-contact-cta"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            style={{
              background: "hsl(222 47% 11%)",
              border: "1px solid hsl(217 32% 20%)",
              color: "hsl(215 20% 75%)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "hsl(190 100% 50% / 0.35)";
              (e.currentTarget as HTMLElement).style.color = "hsl(190 100% 60%)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "hsl(217 32% 20%)";
              (e.currentTarget as HTMLElement).style.color = "hsl(215 20% 75%)";
            }}
          >
            <MessageCircle size={14} aria-hidden="true" />
            Contact Me
          </a>
        </div>

        {/* ── Contact details (text, not icons) ── */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-xs text-muted-foreground/55">
          <a
            href="mailto:naderrahoumah@gmail.com"
            data-testid="hero-email"
            className="flex items-center gap-1.5 transition-colors hover:text-muted-foreground"
          >
            <Mail size={11} style={{ color: "hsl(190 100% 50%)" }} aria-hidden="true" />
            naderrahoumah@gmail.com
          </a>
          <a
            href="tel:+201129848979"
            data-testid="hero-phone"
            className="flex items-center gap-1.5 transition-colors hover:text-muted-foreground"
          >
            <Phone size={11} style={{ color: "hsl(190 100% 50%)" }} aria-hidden="true" />
            +20 112 984 8979
          </a>
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{ color: "hsl(215 20% 35%)" }}
        aria-hidden="true"
      >
        <span className="text-[9px] font-mono tracking-[0.4em] uppercase">Scroll</span>
        <div className="w-px h-9 relative overflow-hidden rounded-full bg-white/5">
          <div
            className="absolute inset-0 animate-scroll-line"
            style={{
              background: "linear-gradient(to bottom, transparent, hsl(190 100% 50% / 0.8), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
