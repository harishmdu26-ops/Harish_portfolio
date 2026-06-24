import { motion } from "motion/react";
import { Section } from "./Section";
import { ArrowUpRight, Github, Database, Layers3, Box } from "lucide-react";

const projects = [
  {
    title: "Jewellery Management ERP",
    tag: "Flagship · RBS ALTECH",
    description: "End-to-end ERP for jewellery operations — masters, sales, purchase, inventory, smith management, finance and reporting on a unified dynamic-form architecture.",
    features: ["Dynamic form generation engine", "Role-based access & multi-branch support", "Inventory & smith reconciliation", "Finance ledger and tax reports"],
    stack: ["React", "TypeScript", "Redux", "ASP.NET Core", "SQL Server"],
    accent: "from-sky-400 to-blue-500",
  },
  {
    title: "CRM Application",
    tag: "Customer Relationship",
    description: "Lead-to-conversion CRM with pipelines, activities and analytics — built around a metadata-driven configuration model.",
    features: ["Pipeline & deal stages", "Activity & follow-up timelines", "Email & contact management", "Dashboard analytics"],
    stack: ["React", "ASP.NET Core", "SQL Server", "Axios"],
    accent: "from-violet-400 to-fuchsia-500",
  },
  {
    title: "Full Stack Business Application",
    tag: "Enterprise Toolkit",
    description: "A modular business app showcasing dynamic forms, configurable workflows and reusable React components for rapid module delivery.",
    features: ["Reusable component library", "Configurable workflows", "REST API integration", "Reporting & exports"],
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    accent: "from-emerald-400 to-teal-500",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Production systems, not portfolio demos."
      description="A look at the enterprise platforms I've built and contributed to — each one shipped to real users with real business stakes."
    >
      <div className="space-y-8">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass-card glass-card-hover p-6 md:p-10 grid lg:grid-cols-[1.1fr_1fr] gap-8"
          >
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.3em] text-primary">{p.tag}</div>
              <h3 className="mt-3 text-2xl md:text-3xl font-bold">{p.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.description}</p>

              <div className="mt-5 grid sm:grid-cols-2 gap-2">
                {p.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm">
                    <span className={`mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${p.accent}`} />
                    <span className="text-foreground/85">{f}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-muted-foreground">{s}</span>
                ))}
              </div>

              {/* <div className="mt-6 flex flex-wrap gap-2">
                <a href="#" className="inline-flex items-center gap-1.5 rounded-lg bg-[image:var(--gradient-brand)] px-4 py-2 text-xs font-semibold text-primary-foreground hover:opacity-90 transition">
                  Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a href="#" className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-4 py-2 text-xs font-semibold hover:bg-white/5 transition">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              </div> */}
            </div>

            <ArchitectureDiagram accent={p.accent} />
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function ArchitectureDiagram({ accent }: { accent: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 min-h-[280px]">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.18_235/0.18),transparent_70%)]" />
      <div className="relative h-full grid grid-cols-3 gap-3 items-center">
        <DiagramNode icon={<Layers3 className="h-5 w-5" />} label="React UI" sub="TypeScript" accent={accent} />
        <DiagramNode icon={<Box className="h-5 w-5" />} label="API Layer" sub="ASP.NET Core" accent={accent} />
        <DiagramNode icon={<Database className="h-5 w-5" />} label="Database" sub="SQL Server" accent={accent} />
      </div>
      <svg className="absolute inset-x-6 top-1/2 -translate-y-1/2 h-2 w-[calc(100%-3rem)] pointer-events-none" viewBox="0 0 100 2" preserveAspectRatio="none">
        <line x1="0" y1="1" x2="100" y2="1" stroke="oklch(0.72 0.18 235 / 0.5)" strokeWidth="0.4" strokeDasharray="2 2" className="animate-dash" />
      </svg>
      {/* <div className="relative mt-4 text-[11px] font-mono text-muted-foreground/80 text-center">
        Screenshots & demo available on request
      </div> */}
    </div>
  );
}

function DiagramNode({ icon, label, sub, accent }: { icon: React.ReactNode; label: string; sub: string; accent: string }) {
  return (
    <div className="glass-panel relative z-10 flex flex-col items-center gap-1 rounded-xl px-3 py-4 text-center">
      <span className={`grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br ${accent} text-white shadow-lg`}>{icon}</span>
      <div className="mt-1 text-sm font-semibold">{label}</div>
      <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{sub}</div>
    </div>
  );
}