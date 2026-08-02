import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import cvPath from "@assets/NaderRahomaCV_1782902897845.pdf";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        data-testid="navbar"
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[hsl(222_47%_5%/0.85)] backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_40px_hsl(222_47%_5%/0.6)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            data-testid="nav-logo"
            aria-label="Nader Rahoumah — home"
            className="flex items-center gap-1.5 group"
          >
            <span
              className="font-mono font-black text-xl tracking-widest transition-all duration-300 group-hover:opacity-80"
              style={{ color: "hsl(190 100% 50%)" }}
            >
              NR
            </span>
            <span className="font-mono text-foreground/60 text-xl font-light">.</span>
          </a>

          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    active === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-current={active === link.href ? "page" : undefined}
                >
                  {link.label}
                  {active === link.href && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-px rounded-full"
                      style={{ background: "hsl(190 100% 50%)" }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center">
            <a
              href={cvPath}
              download="Nader_Rahoumah_CV.pdf"
              data-testid="nav-download-cv"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-[0_0_20px_hsl(190_100%_50%/0.3)] hover:-translate-y-px"
              style={{
                background: "hsl(190 100% 50% / 0.1)",
                border: "1px solid hsl(190 100% 50% / 0.25)",
                color: "hsl(190 100% 60%)",
              }}
            >
              <Download size={13} />
              CV
            </a>
          </div>

          <button
            data-testid="nav-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-16 left-0 right-0 transition-all duration-300 ${
            menuOpen ? "translate-y-0" : "-translate-y-4"
          }`}
          style={{
            background: "hsl(222 47% 7%)",
            borderBottom: "1px solid hsl(217 32% 17%)",
          }}
        >
          <ul className="flex flex-col px-5 py-5 gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); setMenuOpen(false); }}
                  data-testid={`nav-mobile-link-${link.label.toLowerCase()}`}
                  className="flex items-center py-3 px-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white/5 transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3 border-t border-white/10">
              <a
                href={cvPath}
                download="Nader_Rahoumah_CV.pdf"
                data-testid="nav-mobile-download-cv"
                className="flex items-center gap-2 py-3 px-3 rounded-xl text-sm font-semibold transition-colors"
                style={{ color: "hsl(190 100% 55%)" }}
                onClick={() => setMenuOpen(false)}
              >
                <Download size={15} />
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
