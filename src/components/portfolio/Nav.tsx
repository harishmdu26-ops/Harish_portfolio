import { useState, useEffect } from "react";
import { motion } from "motion/react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className={`glass-panel rounded-2xl px-4 py-3 flex items-center justify-center transition-all ${scrolled ? "shadow-2xl" : ""}`}>
          {/* <a href="#top" className="flex items-center gap-2 font-display font-bold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]">
              <span className="text-sm">H</span>
            </span>
            <span className="hidden sm:inline">Harish<span className="text-gradient-brand">.dev</span></span>
          </a> */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                {l.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-px scale-x-0 bg-[image:var(--gradient-brand)] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
          {/* <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-lg bg-[image:var(--gradient-brand)] px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90 transition"
          >
            Hire Me
          </a> */}
          <button onClick={() => setOpen(!open)} className="md:hidden rounded-lg border border-white/10 px-3 py-2 text-sm" aria-label="Toggle menu">
            {open ? "Close" : "Menu"}
          </button>
        </div>
        {open && (
          <div className="md:hidden glass-panel rounded-2xl mt-2 p-3 flex flex-col gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.header>
  );
}