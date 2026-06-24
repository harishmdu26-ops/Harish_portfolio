// import { motion } from "motion/react";
// import { Section } from "./Section";
// import { Mail, Linkedin, Github, ArrowDownToLine } from "lucide-react";

// const contacts = [
//   { icon: Mail, label: "Email", value: "harishmdu26@gmail.com", href: "mailto:harishmdu26@gmail.com" },
//   { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/harish-kumar-a-45a60a260", href: "https://www.linkedin.com/in/harish-kumar-a-45a60a260/" },
//   { icon: Github, label: "GitHub", value: "github.com/harish-dev-mdu", href: "https://github.com/harish-dev-mdu/" },
// ];

// export function Contact() {
//   return (
//     <Section
//       id="contact"
//       eyebrow="Get In Touch"
//       title="Let's build something enterprise-grade."
//       description="Available for full-time roles, contract engagements and consulting on ERP, CRM and enterprise application work."
//     >
//       <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="glass-panel relative overflow-hidden rounded-2xl p-8 md:p-10"
//         >
//           <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[radial-gradient(circle,oklch(0.66_0.22_305/0.4),transparent_70%)] blur-2xl" />
//           <h3 className="relative text-2xl md:text-3xl font-bold">Download the full resume.</h3>
//           <p className="relative mt-3 text-muted-foreground max-w-md">
//             Detailed experience, project breakdowns and a complete technical inventory — exportable PDF.
//           </p>
//           <div className="relative mt-6 flex flex-wrap gap-3">
//             <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-95 transition">
//               <ArrowDownToLine className="h-4 w-4" /> Download Resume
//             </a>
//             <a href="mailto:harishmdu26@gmail.com" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold hover:bg-white/5 transition">
//               <Mail className="h-4 w-4" /> Email Me
//             </a>
//           </div>
//         </motion.div>

//         <div className="grid sm:grid-cols-2 gap-4">
//           {contacts.map((c, i) => (
//             <motion.a
//               key={c.label}
//               href={c.href}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: i * 0.05 }}
//               className="glass-card glass-card-hover p-5 flex items-center gap-4 group"
//             >
//               <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-brand)]/20 border border-primary/30 text-primary">
//                 <c.icon className="h-5 w-5" />
//               </span>
//               <div className="min-w-0">
//                 <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{c.label}</div>
//                 <div className="text-sm font-medium truncate group-hover:text-primary transition-colors">{c.value}</div>
//               </div>
//             </motion.a>
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// }