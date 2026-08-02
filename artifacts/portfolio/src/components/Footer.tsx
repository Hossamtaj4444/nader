import { Github, Linkedin, Mail, Phone } from "lucide-react";
import cvPath from "@assets/NaderRahomaCV_1782902897845.pdf";

const socials = [
  { icon: Mail, href: "mailto:naderrahoumah@gmail.com", label: "Email" },
  { icon: Phone, href: "tel:+201129848979", label: "Phone" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer data-testid="footer" className="border-t border-white/[0.05] py-10 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1.5">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-0.5 group"
            aria-label="Back to top"
          >
            <span className="font-mono font-black text-lg tracking-widest transition-opacity group-hover:opacity-70" style={{ color: "hsl(190 100% 50%)" }}>NR</span>
            <span className="font-mono text-foreground/40 text-lg">.</span>
          </button>
          <p className="text-xs text-muted-foreground/60">&copy; {new Date().getFullYear()} Nader Rahoumah. All rights reserved.</p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5" aria-label="Footer navigation">
          {["About", "Skills", "Projects", "Contact"].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={e => { e.preventDefault(); document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" }); }}
              data-testid={`footer-link-${item.toLowerCase()}`}
              className="text-xs text-muted-foreground/60 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href={cvPath}
            download="Nader_Rahoumah_CV.pdf"
            data-testid="footer-download-cv"
            className="text-xs font-semibold"
            style={{ color: "hsl(190 100% 55%)" }}
          >
            Download CV
          </a>
        </nav>

        <div className="flex items-center gap-2">
          {socials.map(s => {
            const Icon = s.icon;
            return (
              <a key={s.label} href={s.href} aria-label={s.label} data-testid={`footer-${s.label.toLowerCase()}`}
                className="social-icon-btn">
                <Icon size={15} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
