import { GraduationCap, Calendar, Star } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export default function Education() {
  const { ref, inView } = useInView();
  return (
    <section id="education" data-testid="education-section" aria-labelledby="education-heading" className="py-16 px-5 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-xs font-mono tracking-[0.35em] uppercase mb-2.5" style={{ color: "hsl(190 100% 50%)" }}>Academic</p>
          <h2 id="education-heading" className="text-3xl sm:text-4xl font-black text-foreground mb-3">Education</h2>
          <div className="w-14 h-px mx-auto" style={{ background: "linear-gradient(90deg, transparent, hsl(190 100% 50%), transparent)" }} />
        </div>

        <div className={`transition-all duration-700 delay-150 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div
            data-testid="education-card"
            className="relative rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_20px_60px_hsl(0_0%_0%/0.4)]"
            style={{
              background: "hsl(222 47% 8%)",
              border: "1px solid hsl(190 100% 50% / 0.18)",
            }}
          >
            <div className="h-0.5" style={{ background: "linear-gradient(90deg, hsl(190 100% 50%), hsl(205 100% 58%), hsl(180 100% 50%))" }} />

            <div className="p-7 sm:p-8">
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "hsl(190 100% 50% / 0.09)",
                    border: "1px solid hsl(190 100% 50% / 0.22)",
                    boxShadow: "0 0 20px hsl(190 100% 50% / 0.1)",
                  }}
                >
                  <GraduationCap size={26} style={{ color: "hsl(190 100% 50%)" }} />
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 data-testid="education-degree" className="text-lg font-bold text-foreground mb-0.5">
                        Bachelor's Degree in Computer Science
                      </h3>
                      <p data-testid="education-institution" className="text-sm font-medium" style={{ color: "hsl(190 100% 60%)" }}>
                        Al-Shorouk Academy — CS Department
                      </p>
                    </div>
                    <span
                      data-testid="education-period"
                      className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg whitespace-nowrap"
                      style={{
                        background: "hsl(222 47% 12%)",
                        border: "1px solid hsl(217 32% 20%)",
                        color: "hsl(215 20% 60%)",
                      }}
                    >
                      <Calendar size={10} />
                      2021 – 2025
                    </span>
                  </div>

                  <div
                    data-testid="education-grade"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl"
                    style={{
                      background: "hsl(190 100% 50% / 0.08)",
                      border: "1px solid hsl(190 100% 50% / 0.2)",
                    }}
                  >
                    <Star size={13} style={{ color: "hsl(190 100% 50%)" }} />
                    <span className="text-sm font-semibold" style={{ color: "hsl(190 100% 58%)" }}>
                      Graduation Project Grade: Excellent
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
