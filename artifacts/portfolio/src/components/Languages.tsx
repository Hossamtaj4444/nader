import { useInView } from "@/hooks/useInView";

const languages = [
  { name: "Arabic", level: "Native", flag: "🇪🇬", dots: 5, filled: 5 },
  { name: "English", level: "Intermediate", flag: "🇬🇧", dots: 5, filled: 3 },
];

export default function Languages() {
  const { ref, inView } = useInView();
  return (
    <section id="languages" data-testid="languages-section" aria-labelledby="languages-heading" className="py-16 px-5 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-xs font-mono tracking-[0.35em] uppercase mb-2.5" style={{ color: "hsl(190 100% 50%)" }}>Communication</p>
          <h2 id="languages-heading" className="text-3xl sm:text-4xl font-black text-foreground mb-3">Languages</h2>
          <div className="w-14 h-px mx-auto" style={{ background: "linear-gradient(90deg, transparent, hsl(190 100% 50%), transparent)" }} />
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          {languages.map((lang, i) => (
            <div
              key={lang.name}
              data-testid={`language-card-${lang.name.toLowerCase()}`}
              className={`rounded-2xl p-6 flex items-center gap-5 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_hsl(0_0%_0%/0.3)] ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                background: "hsl(222 47% 8%)",
                border: "1px solid hsl(217 32% 16%)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div
                className="text-3xl w-12 h-12 flex items-center justify-center rounded-xl flex-shrink-0"
                style={{ background: "hsl(190 100% 50% / 0.07)", border: "1px solid hsl(190 100% 50% / 0.15)" }}
              >
                {lang.flag}
              </div>
              <div className="flex-1 space-y-2.5">
                <div className="flex items-center justify-between">
                  <p data-testid={`language-name-${lang.name.toLowerCase()}`} className="font-bold text-foreground">{lang.name}</p>
                  <span
                    data-testid={`language-level-${lang.name.toLowerCase()}`}
                    className="text-xs px-2.5 py-1 rounded-lg font-semibold"
                    style={{
                      background: "hsl(190 100% 50% / 0.08)",
                      border: "1px solid hsl(190 100% 50% / 0.18)",
                      color: "hsl(190 100% 60%)",
                    }}
                  >
                    {lang.level}
                  </span>
                </div>
                <div className="flex gap-1.5">
                  {Array.from({ length: lang.dots }, (_, j) => (
                    <div
                      key={j}
                      className="flex-1 h-1.5 rounded-full transition-all duration-700"
                      style={{
                        background: j < lang.filled
                          ? "linear-gradient(90deg, hsl(190 100% 50%), hsl(205 100% 58%))"
                          : "hsl(217 32% 17%)",
                        boxShadow: j < lang.filled ? "0 0 6px hsl(190 100% 50% / 0.4)" : "none",
                        transitionDelay: inView ? `${i * 100 + j * 80}ms` : "0ms",
                        opacity: inView ? 1 : 0.3,
                        transform: inView ? "scaleX(1)" : "scaleX(0.5)",
                        transformOrigin: "left",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
