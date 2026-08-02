import { useInView } from "@/hooks/useInView";

// All skills extracted verbatim from CV — no inventions, no omissions
const skillGroups = [
  {
    label: "Programming Languages",
    accent: "hsl(190 100% 50%)",
    featured: ["C#"],
    skills: ["C#", "SQL", "Python", "C++", "HTML"],
  },
  {
    label: ".NET & Frameworks",
    accent: "hsl(200 100% 55%)",
    featured: ["ASP.NET Core", "Entity Framework Core"],
    skills: [
      "ASP.NET Core",
      "Entity Framework Core",
      "ASP.NET Core Web API",
      "ASP.NET Core MVC",
      "Bootstrap",
    ],
  },
  {
    label: "Database",
    accent: "hsl(180 100% 48%)",
    featured: ["SQL Server"],
    skills: ["SQL Server", "LINQ", "Database Design", "Stored Procedures"],
  },
  {
    label: "API Development",
    accent: "hsl(210 100% 62%)",
    featured: ["RESTful APIs", "Swagger / OpenAPI"],
    skills: [
      "RESTful APIs",
      "Swagger / OpenAPI",
      "JWT Authentication",
      "AutoMapper",
      "API Versioning",
    ],
  },
  {
    label: "Architecture & Patterns",
    accent: "hsl(170 100% 48%)",
    featured: ["Clean Architecture", "SOLID Principles"],
    skills: [
      "Clean Architecture",
      "SOLID Principles",
      "Repository Pattern",
      "Specification Pattern",
      "Unit of Work Pattern",
      "Dependency Injection",
      "Design Patterns",
    ],
  },
  {
    label: "Real-Time & Cloud",
    accent: "hsl(215 100% 65%)",
    featured: ["SignalR", "Redis"],
    skills: ["SignalR", "WebSockets", "Redis"],
  },
  {
    label: "Dev Tools",
    accent: "hsl(220 100% 65%)",
    featured: ["Git & GitHub", "Visual Studio"],
    skills: ["Git & GitHub", "Visual Studio", "Postman", "VS Code"],
  },
  {
    label: "CS Fundamentals",
    accent: "hsl(195 100% 52%)",
    featured: ["Data Structures & Algorithms", "Problem Solving"],
    skills: [
      "Data Structures & Algorithms",
      "Problem Solving",
      "OOP",
      "Unit Testing",
      "Agile Methodology",
    ],
  },
  {
    label: "Soft Skills",
    accent: "hsl(185 80% 50%)",
    featured: ["Team Collaboration"],
    skills: [
      "Team Collaboration",
      "Communication",
      "Attention to Detail",
      "Continuous Learning",
      "Time Management",
    ],
  },
];

function SkillBadge({
  name,
  accent,
  featured,
}: {
  name: string;
  accent: string;
  featured: boolean;
}) {
  if (featured) {
    return (
      <span
        data-testid={`skill-featured-${name.toLowerCase().replace(/[\s/]+/g, "-")}`}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:scale-[1.04] cursor-default select-none"
        style={{
          background: `${accent}18`,
          border: `1px solid ${accent}50`,
          color: accent,
          boxShadow: `0 0 12px ${accent}20`,
        }}
      >
        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: accent }} />
        {name}
      </span>
    );
  }
  return (
    <span
      data-testid={`skill-tag-${name.toLowerCase().replace(/[\s/]+/g, "-")}`}
      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground transition-all duration-200 hover:text-foreground hover:scale-[1.03] cursor-default select-none"
      style={{
        background: "hsl(222 47% 12%)",
        border: "1px solid hsl(217 32% 20%)",
      }}
    >
      {name}
    </span>
  );
}

function SkillCard({ group, index }: { group: (typeof skillGroups)[0]; index: number }) {
  const { ref, inView } = useInView(0.08);

  return (
    <div
      ref={ref}
      data-testid={`skill-group-${group.label.toLowerCase().replace(/\s+/g, "-")}`}
      className={`rounded-2xl p-5 flex flex-col gap-3 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_48px_hsl(0_0%_0%/0.35)] ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{
        background: "hsl(222 47% 8%)",
        border: "1px solid hsl(217 32% 16%)",
        transitionDelay: `${index * 50}ms`,
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = `${group.accent}28`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = "hsl(217 32% 16%)";
      }}
    >
      {/* Category header */}
      <div className="flex items-center gap-2 pb-2.5 border-b border-white/[0.05]">
        <div
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ background: group.accent, boxShadow: `0 0 7px ${group.accent}` }}
        />
        <h3
          className="text-[10px] font-bold uppercase tracking-[0.16em] leading-none"
          style={{ color: group.accent }}
        >
          {group.label}
        </h3>
      </div>
      {/* Skill badges */}
      <div className="flex flex-wrap gap-2">
        {group.skills.map(skill => (
          <SkillBadge
            key={skill}
            name={skill}
            accent={group.accent}
            featured={group.featured.includes(skill)}
          />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section
      id="skills"
      data-testid="skills-section"
      aria-labelledby="skills-heading"
      className="py-16 px-5 sm:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          ref={ref}
          className={`text-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p
            className="text-xs font-mono tracking-[0.35em] uppercase mb-2.5"
            style={{ color: "hsl(190 100% 50%)" }}
          >
            What I know
          </p>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-black text-foreground mb-3"
          >
            Skills & Abilities
          </h2>
          <div
            className="w-14 h-px mx-auto"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsl(190 100% 50%), transparent)",
            }}
          />
          <p className="text-sm text-muted-foreground mt-3 max-w-sm mx-auto leading-relaxed">
            A comprehensive backend skill set built through real projects and focused training.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {skillGroups.map((g, i) => (
            <SkillCard key={g.label} group={g} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
