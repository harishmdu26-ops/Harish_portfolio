import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-12">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-display text-lg font-bold">
            Harish Kumar A
          </div>
          <div className="text-xs text-muted-foreground">Full Stack Developer · Chennai, India</div>
        </div>
        <div className="flex items-center gap-3">
          <a href="mailto:harishmdu26@gmail.com" className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/40 transition" aria-label="Email"><Mail className="h-4 w-4" /></a>
          <a href="https://github.com/harish-dev-mdu/" className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/40 transition" aria-label="GitHub"><Github className="h-4 w-4" /></a>
          <a href="https://www.linkedin.com/in/harish-kumar-a-45a60a260/" className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/40 transition" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
        </div>
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Harish Kumar A. All rights reserved.</div>
      </div>
    </footer>
  );
}