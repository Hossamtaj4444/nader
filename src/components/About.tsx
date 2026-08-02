import { Code2, Layers, Zap, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useInView } from "@/hooks/useInView";
import profilePhoto from "@assets/IMG_٢٠٢٦٠٧٠١_١٤٠٥٣٥_1782903964992.jpg";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const { ref, inView } = useInView(0.4);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let n = 0;
    const frames = 60;
    const step = target / frames;
    const timer = setInterval(() => {
      n = Math.min(n + step, target);
      setCount(Math.round(n));
      if (Math.round(n) >= target) clearInterval(timer);
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { icon: Code2, value: 5, suffix: "+", label: "Projects" },
  { icon: Layers, value: 2, suffix: "", label: "Trainings" },
  { icon: Zap, value: 15, suffix: "+", label: "Technologies" },
  { icon: Globe, value: 2, suffix: "", label: "Languages" },
];

const pillars = [
  "Clean Architecture",
  "Repository & Specification Patterns",
  "SOLID Principles",
  "RESTful API Design",
  "JWT Authentication",
  "EF Core & SQL Server",
];

export default function About() {
  const { ref, inView } = useInView();
  return (
    <section id="about" data-testid="about-section" aria-labelledby="about-heading" className="py-16 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="text-center mb-10">
            <p className="text-xs font-mono tracking-[0.35em] uppercase mb-2.5" style={{ color: "hsl(190 100% 50%)" }}>Who I am</p>
            <h2 id="about-heading" className="text-3xl sm:text-4xl font-black text-foreground mb-3">About Me</h2>
            <div className="w-14 h-px mx-auto" style={{ background: "linear-gradient(90deg, transparent, hsl(190 100% 50%), transparent)" }} />
          </div>

          <div className="grid lg:grid-cols-[260px_1fr] gap-10 items-start">
            {/* Photo */}
            <div className="hidden lg:block">
              <div
                className="rounded-2xl overflow-hidden aspect-[3/4]"
                style={{
                  boxShadow: "0 0 0 1px hsl(190 100% 50% / 0.15), 0 20px 60px hsl(222 47% 3% / 0.7)",
                  border: "1px solid hsl(190 100% 50% / 0.12)",
                }}
              >
                <img
                  src={profilePhoto}
                  alt="Nader Rahoumah"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 8%" }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <p data-testid="about-summary" className="text-base text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-semibold">.NET Developer</span> based in
                Cairo, Egypt, proficient in ASP.NET Core, C#, and Entity Framework Core. Dedicated to
                providing scalable backend solutions and playing a key role in innovative projects.
                Skilled in tackling complex architectural challenges and committed to delivering
                high-quality, maintainable software.
              </p>

              {/* Tech pillars */}
              <div className="flex flex-wrap gap-2">
                {pillars.map(p => (
                  <span
                    key={p}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-[1.03]"
                    style={{
                      background: "hsl(190 100% 50% / 0.07)",
                      border: "1px solid hsl(190 100% 50% / 0.18)",
                      color: "hsl(190 100% 65%)",
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {stats.map(s => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.label}
                      data-testid={`stat-${s.label.toLowerCase()}`}
                      className="flex flex-col items-center gap-1.5 p-4 rounded-xl text-center"
                      style={{
                        background: "hsl(222 47% 9%)",
                        border: "1px solid hsl(217 32% 17%)",
                      }}
                    >
                      <Icon size={15} style={{ color: "hsl(190 100% 50%)" }} />
                      <p className="text-2xl font-black font-mono leading-none" style={{ color: "hsl(190 100% 50%)" }}>
                        <Counter target={s.value} suffix={s.suffix} />
                      </p>
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
