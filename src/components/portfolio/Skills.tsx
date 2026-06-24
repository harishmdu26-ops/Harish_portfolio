import { motion } from "motion/react";
import { Section } from "./Section";

const groups = [
  {
    label: "Frontend",
    accent: "from-sky-400 to-blue-500",
    items: [
      { name: "React", level: 92 },
      { name: "TypeScript", level: 92 },
      { name: "JavaScript", level: 88 },
      { name: "Redux", level: 82 },
      { name: "HTML5", level: 95 },
      { name: "CSS3 / Tailwind", level: 90 },
    ],
  },
  {
    label: "Backend",
    accent: "from-violet-400 to-fuchsia-500",
    items: [
      { name: "ASP.NET Core", level: 88 },
      { name: "Node.js", level: 78 },
      { name: "Express.js", level: 76 },
    ],
  },
  {
    label: "Database",
    accent: "from-emerald-400 to-teal-500",
    items: [
      { name: "SQL Server", level: 90 },
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    label: "Tools & Practices",
    accent: "from-amber-400 to-orange-500",
    items: [
      { name: "Git / GitHub", level: 88 },
      { name: "Axios / REST", level: 86 },
      { name: "Agile / Scrum", level: 82 },
      { name: "Postman", level: 80 },
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Tech Stack"
      title="A toolkit forged on real production systems."
      description="Hands-on with the full stack — from typed React UIs to high-performance SQL Server schemas powering enterprise workloads."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {groups.map((g, gi) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.05 }}
            className="glass-card p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">{g.label}</h3>
              <span className={`h-2 w-16 rounded-full bg-gradient-to-r ${g.accent}`} />
            </div>
            <div className="mt-5 space-y-4">
              {g.items.map((it, i) => (
                <div key={it.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{it.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">{it.level}%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${it.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.1 + i * 0.06, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${g.accent}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}