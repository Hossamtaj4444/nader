import { Calendar, BookOpen } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const experiences = [
  {
    title: "Route Academy — ASP.NET Core Diploma",
    period: "04/2024 – 10/2024",
    type: "Diploma",
    highlight: true,
    description:
      "Covered key backend development topics: C# fundamentals, OOP and SOLID principles, Design Patterns, LINQ and Entity Framework Core, ASP.NET Core MVC and ASP.NET Core APIs.",
    tags: ["C#", "OOP", "SOLID", "Design Patterns", "LINQ", "EF Core", "ASP.NET Core MVC", "REST APIs"],
  },
  {
    title: "Coatch Academy — Problem Solving Training",
    period: "01/2024 – 03/2024",
    type: "Training",
    highlight: false,
    description:
      "Core problem solving concepts and programming fundamentals using C++. Applied algorithms and logical thinking techniques through coding exercises.",
    tags: ["C++", "Algorithms", "Problem Solving", "Data Structures"],
  },
];

function ExperienceItem({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const { ref, inView } = useInView(0.1);
  return (
    <div
      ref={ref}
      data-testid={`experience-item-${index}`}
      className={`relative sm:pl-14 transition-all duration-600 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Timeline dot */}
      <div
        className="absolute left-[11px] top-6 w-4 h-4 rounded-full border-2 hidden sm:block z-10"
        style={{
          background: exp.highlight ? "hsl(190 100% 50%)" : "hsl(222 47% 12%)",
          borderColor: "hsl(190 100% 50%)",
          boxShadow: exp.highlight ? "0 0 14px hsl(190 100% 50% / 0.6)" : "none",
        }}
        aria-hidden="true"
      />

      <div
        className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_hsl(0_0%_0%/0.3)]"
        style={{
          background: exp.highlight
            ? "linear-gradient(135deg, hsl(222 47% 9%), hsl(190 100% 50% / 0.03))"
            : "hsl(222 47% 8%)",
          border: `1px solid ${exp.highlight ? "hsl(190 100% 50% / 0.2)" : "hsl(217 32% 16%)"}`,
        }}
      >
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <BookOpen size={14} style={{ color: "hsl(190 100% 50%)" }} />
            <h3
              data-testid={`experience-title-${index}`}
              className="text-sm font-bold text-foreground"
            >
              {exp.title}
            </h3>
            <span
              className="px-2 py-0.5 text-[10px] rounded font-bold uppercase tracking-wide"
              style={{
                background: "hsl(190 100% 50% / 0.1)",
                color: "hsl(190 100% 60%)",
              }}
            >
              {exp.type}
            </span>
          </div>
          <span
            data-testid={`experience-period-${index}`}
            className="flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-lg whitespace-nowrap"
            style={{
              background: "hsl(222 47% 12%)",
              border: "1px solid hsl(217 32% 20%)",
              color: "hsl(215 20% 55%)",
            }}
          >
            <Calendar size={10} />
            {exp.period}
          </span>
        </div>

        <p
          data-testid={`experience-desc-${index}`}
          className="text-sm text-muted-foreground leading-relaxed mb-3"
        >
          {exp.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs rounded-lg font-medium"
              style={{
                background: "hsl(222 47% 12%)",
                border: "1px solid hsl(217 32% 20%)",
                color: "hsl(215 20% 68%)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section
      id="experience"
      data-testid="experience-section"
      aria-labelledby="experience-heading"
      className="py-16 px-5 sm:px-8"
    >
      <div className="max-w-4xl mx-auto">
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
            My Journey
          </p>
          <h2
            id="experience-heading"
            className="text-3xl sm:text-4xl font-black text-foreground mb-3"
          >
            Experience
          </h2>
          <div
            className="w-14 h-px mx-auto"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(190 100% 50%), transparent)",
            }}
          />
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-[19px] top-6 bottom-4 w-px hidden sm:block"
            style={{
              background:
                "linear-gradient(to bottom, hsl(190 100% 50% / 0.7), hsl(190 100% 50% / 0.08))",
            }}
            aria-hidden="true"
          />
          <div className="space-y-5">
            {experiences.map((exp, i) => (
              <ExperienceItem key={exp.title} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
