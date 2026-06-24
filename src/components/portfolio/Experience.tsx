import { motion } from "motion/react";
import { Section } from "./Section";
import { Building2 } from "lucide-react";

const roles = [
  {
    company: "RBS ALTECH Solutions",
    role: "Full Stack Developer",
    period: "Aug 2025 to Mar 2026",
    project: "Jewellery Management System - ERP",
    bullets: [
      "Architected a dynamic form generation engine driving Masters, Sales, Purchase, Inventory, Smith Management, Finance and Reports modules.",
      "Designed normalized SQL Server schemas, stored procedures and views supporting complex ERP transactions.",
      "Built React + TypeScript front-end with Redux, reusable component libraries and granular role-based UI.",
    ],
    modules: ["Masters", "Sales", "Purchase", "Inventory", "Smith Management", "Finance", "Reports", "Dashboard"],
  },
  {
    company: "Accel IT Services",
    role: "Software Developer",
    period: "July 2024 to July 2025",
    project: "Business Web Applications",
    bullets: [
      "Delivered full-stack features across .NET and React stacks for internal business systems.",
      "Worked alongside QA and product to ship iterative releases on Agile cadences.",
    ],
    modules: ["Professional Services"],
  },
  {
    company: "Bracezin Technology",
    role: "Software Trainee",
    period: "May 2023 to June 2024",
    project: "Foundations & Internship Builds",
    bullets: [
      "Developed a responsive front-end UI using HTML,CSS and JavaSCript.",
      "Simulated event creation,partcipant registration and schedule management features UI.",
    ],
    modules: ["HTML5", "CSS3"],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Career Timeline"
      title="From trainee to enterprise developer."
      description="A focused journey through software engineering — shipping production systems and growing into ERP-scale architectures."
    >
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/30 to-transparent" />
        <div className="space-y-10">
          {roles.map((r, i) => (
            <motion.div
              key={r.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative grid md:grid-cols-2 gap-6 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}
            >
              <div className={`relative pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10 md:[direction:ltr]"}`}>
                <span className="absolute left-2 md:left-auto md:right-[-9px] top-2 md:top-3 grid h-4 w-4 place-items-center rounded-full bg-[image:var(--gradient-brand)] shadow-[var(--shadow-glow)]" style={i % 2 === 0 ? {} : { right: "auto", left: "-9px" }} />
                <div className="text-xs font-mono uppercase tracking-[0.25em] text-primary">{r.period}</div>
                <h3 className="mt-2 text-xl font-semibold flex items-center gap-2 md:justify-end" style={i % 2 === 0 ? {} : { justifyContent: "flex-start" }}>
                  <Building2 className="h-4 w-4 text-muted-foreground" /> {r.company}
                </h3>
                <div className="text-sm text-muted-foreground">{r.role} · {r.project}</div>
              </div>
              <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "" : "md:[direction:ltr] md:pr-10"}`}>
                <div className="glass-card glass-card-hover p-6">
                  <ul className="space-y-2 text-sm text-foreground/85">
                    {r.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {r.modules.map((m) => (
                      <span key={m} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-muted-foreground">{m}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}