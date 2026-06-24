import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-8 bg-primary/60" /> {eyebrow}
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-gradient">{title}</h2>
          {description && <p className="mt-4 text-base md:text-lg text-muted-foreground">{description}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}