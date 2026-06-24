import { motion } from "motion/react";
import { Section } from "./Section";
import { Code2, Database, Layers, Building2, FormInput, Workflow } from "lucide-react";

const highlights = [
  { icon: Code2, title: "React Specialist", body: "Modern React + TypeScript SPAs with Redux state, hooks and component architectures." },
  { icon: Layers, title: "ASP.NET Core Developer", body: "RESTful APIs, layered services and clean controllers powering business logic." },
  { icon: Database, title: "SQL Server Database", body: "Schema design, stored procedures and query tuning for transactional workloads." },
  { icon: Building2, title: "ERP & CRM Engineering", body: "Modular ERP suites and CRM workflows for jewellery, sales and finance domains." },
  { icon: FormInput, title: "Dynamic Form Architectures", body: "Metadata-driven form engines that ship new modules without code rewrites." },
  { icon: Workflow, title: "Enterprise Mindset", body: "Performance, security and maintainability at the core of every release." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title={<>Engineering enterprise software <br className="hidden md:block" /> with craft and conviction.</>}
      description="I'm a Full Stack Developer based in Chennai, focused on architecting reliable business platforms. From dynamic form engines to multi-module ERP systems, I bridge product thinking with deep technical execution across React, ASP.NET Core and SQL Server."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass-card glass-card-hover p-6"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-[image:var(--gradient-brand)]/20 border border-primary/30 text-primary">
              <h.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-semibold text-lg">{h.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{h.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}