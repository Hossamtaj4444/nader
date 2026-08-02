import { ExternalLink, Server, Zap, MessageSquare, Building2, Car } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const projects = [
  {
    title: "Pharmacy Management System",
    Icon: Server,
    accent: "hsl(190 100% 50%)",
    featured: true,
    description:
      "Full pharmacy lifecycle platform with JWT auth, medicine & supplier management, purchasing workflows, sales with stock validation, purchase/sales returns, and automated inventory tracking. Clean Architecture.",
    tags: ["ASP.NET Core", "EF Core", "SQL Server", "JWT Auth", "Clean Architecture", "Repository Pattern", "Specification Pattern"],
  },
  {
    title: "Talabat Clone APIs",
    Icon: Zap,
    accent: "hsl(200 100% 55%)",
    featured: true,
    description:
      "Scalable e-commerce backend from browsing to payment. Redis basket management, Stripe integration, advanced product querying, secure auth — Repository + Specification + Unit of Work patterns.",
    tags: ["ASP.NET Core", "EF Core", "SQL Server", "Redis", "Stripe", "Unit of Work", "REST API"],
  },
  {
    title: "HogwartsChat MVC",
    Icon: MessageSquare,
    accent: "hsl(180 100% 48%)",
    featured: false,
    description:
      "Real-time messaging platform with SignalR WebSockets, private group chat rooms, live presence tracking, Identity auth, and multimedia file sharing.",
    tags: ["ASP.NET Core 8", "SignalR", "WebSockets", "Identity", "MVC"],
  },
  {
    title: "ProEstate MVC",
    Icon: Building2,
    accent: "hsl(210 100% 62%)",
    featured: false,
    description:
      "Real estate management system with hierarchical database relationships, a dynamic date-based status engine, and secure transactional workflows using EF Core and SQL Server.",
    tags: ["ASP.NET Core 8", "EF Core", "SQL Server", "MVC"],
  },
  {
    title: "Car Showroom System",
    Icon: Car,
    accent: "hsl(170 100% 48%)",
    featured: false,
    description:
      "Console-based vehicle management system demonstrating OOP — inheritance, polymorphism, encapsulation, abstraction. Features inventory, search, price updates, sales tracking, and analytical reporting.",
    tags: ["C#", "OOP", "Console App", "Data Structures"],
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, inView } = useInView(0.08);
  const { Icon, accent } = project;

  return (
    <div
      ref={ref}
      data-testid={`project-card-${index}`}
      className={`group relative rounded-2xl p-5 flex flex-col gap-3.5 transition-all duration-500 hover:-translate-y-1.5 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        background: project.featured
          ? "linear-gradient(145deg, hsl(222 47% 9.5%), hsl(222 47% 8.5%))"
          : "hsl(222 47% 8%)",
        border: `1px solid ${project.featured ? accent + "30" : "hsl(217 32% 16%)"}`,
        transitionDelay: `${index * 65}ms`,
      }}
    >
      {/* Hover glow border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `0 16px 48px ${accent}1a`, border: `1px solid ${accent}35` }}
        aria-hidden="true"
      />

      <div className="flex items-start justify-between">
        <div
          className="p-2.5 rounded-xl"
          style={{ background: `${accent}14`, border: `1px solid ${accent}25` }}
        >
          <Icon size={18} style={{ color: accent }} />
        </div>
        <div className="flex items-center gap-2">
          {project.featured && (
            <span
              className="px-2 py-0.5 text-[10px] rounded font-bold uppercase tracking-wide"
              style={{ background: `${accent}18`, color: accent }}
            >
              Featured
            </span>
          )}
          <a
            href="#"
            data-testid={`project-link-${index}`}
            aria-label={`View ${project.title}`}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors hover:bg-white/5"
          >
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <div className="flex-1">
        <h3
          data-testid={`project-title-${index}`}
          className="text-sm font-bold text-foreground mb-1.5"
        >
          {project.title}
        </h3>
        <p
          data-testid={`project-desc-${index}`}
          className="text-xs text-muted-foreground leading-relaxed"
        >
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.05]">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[10px] rounded-md font-medium"
            style={{
              background: `${accent}0d`,
              border: `1px solid ${accent}28`,
              color: accent,
              opacity: 0.9,
            }}
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span
            className="px-2 py-0.5 text-[10px] rounded-md text-muted-foreground"
            style={{ background: "hsl(222 47% 12%)" }}
          >
            +{project.tags.length - 4}
          </span>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section
      id="projects"
      data-testid="projects-section"
      aria-labelledby="projects-heading"
      className="py-16 px-5 sm:px-8"
    >
      <div className="max-w-6xl mx-auto">
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
            What I've built
          </p>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl font-black text-foreground mb-3"
          >
            Projects
          </h2>
          <div
            className="w-14 h-px mx-auto"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(190 100% 50%), transparent)",
            }}
          />
          <p className="text-sm text-muted-foreground mt-3 max-w-sm mx-auto leading-relaxed">
            Backend systems built with clean architecture and modern .NET technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
