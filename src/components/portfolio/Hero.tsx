import { motion } from "motion/react";
import { MapPin, Briefcase, CheckCircle2, ArrowDownToLine, FolderGit2, Mail, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <div className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to Work
          </div>

          <h1 className="mt-6 font-display font-bold leading-[0.95] tracking-tight text-5xl sm:text-7xl md:text-8xl">
            <span className="text-gradient">HARISH KUMAR A</span>
          </h1>

          <div className="mt-5 flex items-center gap-3 text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary/60" />
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Full Stack Developer
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-accent/60" />
          </div>

          <p className="mt-6 max-w-3xl text-balance text-lg md:text-xl text-foreground/85">
            Building scalable <span className="text-gradient-brand font-semibold">ERP, CRM and enterprise solutions</span> Using React TypeScript, ASP.NET Core Web API & MVC and SQL Server.
          </p>
          <p className="mt-3 max-w-2xl text-sm md:text-base text-muted-foreground">
            Passionate Full Stack Developer with experience designing dynamic business applications, database-driven systems and enterprise software solutions.
          </p>

          {/* <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-95 transition">
              <FolderGit2 className="h-4 w-4" /> View Projects
            </a>
            <a href="/resume.pdf" className="glass-panel inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/40 transition">
              <ArrowDownToLine className="h-4 w-4" /> Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-foreground hover:bg-white/5 transition">
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div> */}

          <div className="mt-12 grid w-full max-w-4xl grid-cols-1 sm:grid-cols-3 gap-3">
            <StatPill icon={<Briefcase className="h-4 w-4" />} title="2.7+ Years" subtitle="Professional Experience" />
            <StatPill icon={<MapPin className="h-4 w-4" />} title="Chennai, India" subtitle="Open to OnSite / Remote / Hybrid" />
            <StatPill icon={<CheckCircle2 className="h-4 w-4" />} title="Enterprise Web App " subtitle="ERP · CRM · Dashboards" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatPill({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="glass-card glass-card-hover px-5 py-4 flex items-center gap-3 text-left">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-brand)]/20 text-primary border border-primary/30">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="font-semibold text-sm text-foreground">{title}</div>
        <div className="text-xs text-muted-foreground truncate">{subtitle}</div>
      </div>
    </div>
  );
}