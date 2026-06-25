import { useEffect, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { Box, Briefcase, Building2, CheckCircle2, Code2, Database, FormInput, Github, Layers, Layers3, Linkedin, Mail, MapPin, Sparkles, Workflow } from "lucide-react";
//#region src/components/portfolio/AnimatedBackground.tsx
var snippets = [
	"const useApp = () => {}",
	"SELECT * FROM Orders",
	"public class ErpService {}",
	"<Component />",
	"await axios.post('/api')",
	"INSERT INTO Inventory",
	"useEffect(() => {}, [])",
	"[HttpGet] IActionResult"
];
function AnimatedBackground() {
	return /* @__PURE__ */ jsxs("div", {
		"aria-hidden": true,
		className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-background" }),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" }),
			/* @__PURE__ */ jsx("div", { className: "absolute -top-40 -left-20 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,oklch(0.72_0.18_235/0.35),transparent_60%)] blur-3xl animate-blob" }),
			/* @__PURE__ */ jsx("div", {
				className: "absolute top-1/3 -right-20 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,oklch(0.66_0.22_305/0.3),transparent_60%)] blur-3xl animate-blob",
				style: { animationDelay: "-6s" }
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,oklch(0.75_0.16_180/0.22),transparent_60%)] blur-3xl animate-blob",
				style: { animationDelay: "-12s" }
			}),
			Array.from({ length: 28 }).map((_, i) => {
				const left = i * 53 % 100;
				const top = i * 37 % 100;
				const size = 2 + i * 7 % 4;
				return /* @__PURE__ */ jsx(motion.span, {
					className: "absolute rounded-full bg-primary/60",
					style: {
						left: `${left}%`,
						top: `${top}%`,
						width: size,
						height: size
					},
					animate: {
						y: [
							0,
							-30,
							0
						],
						opacity: [
							.2,
							.9,
							.2
						]
					},
					transition: {
						duration: 6 + i % 5,
						repeat: Infinity,
						delay: i * .2,
						ease: "easeInOut"
					}
				}, i);
			}),
			/* @__PURE__ */ jsxs("svg", {
				className: "absolute inset-0 h-full w-full opacity-30",
				preserveAspectRatio: "none",
				children: [
					/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
						id: "lineGrad",
						x1: "0",
						y1: "0",
						x2: "1",
						y2: "1",
						children: [/* @__PURE__ */ jsx("stop", {
							offset: "0%",
							stopColor: "oklch(0.72 0.18 235)"
						}), /* @__PURE__ */ jsx("stop", {
							offset: "100%",
							stopColor: "oklch(0.66 0.22 305)"
						})]
					}) }),
					/* @__PURE__ */ jsx("path", {
						d: "M0,200 Q400,100 800,300 T1600,200",
						stroke: "url(#lineGrad)",
						strokeWidth: "1",
						fill: "none",
						className: "animate-dash"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M0,600 Q500,400 1000,700 T2000,500",
						stroke: "url(#lineGrad)",
						strokeWidth: "1",
						fill: "none",
						className: "animate-dash",
						style: { animationDelay: "-3s" }
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M0,900 Q300,1100 700,950 T1500,1050",
						stroke: "url(#lineGrad)",
						strokeWidth: "1",
						fill: "none",
						className: "animate-dash",
						style: { animationDelay: "-1s" }
					})
				]
			}),
			snippets.map((code, i) => {
				const left = (i * 13 + 7) % 90;
				const top = (i * 23 + 5) % 90;
				return /* @__PURE__ */ jsx(motion.div, {
					className: "absolute hidden md:block font-mono text-[11px] text-primary/40 whitespace-nowrap",
					style: {
						left: `${left}%`,
						top: `${top}%`
					},
					animate: {
						y: [
							0,
							-18,
							0
						],
						opacity: [
							.25,
							.55,
							.25
						]
					},
					transition: {
						duration: 10 + i % 4,
						repeat: Infinity,
						delay: i * .6,
						ease: "easeInOut"
					},
					children: `{ ${code} }`
				}, code);
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,oklch(0.1_0.02_265/0.8)_100%)]" })
		]
	});
}
//#endregion
//#region src/components/portfolio/Nav.tsx
var links = [
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#skills",
		label: "Skills"
	},
	{
		href: "#experience",
		label: "Experience"
	},
	{
		href: "#projects",
		label: "Projects"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function Nav() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsx(motion.header, {
		initial: {
			y: -30,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .6,
			ease: "easeOut"
		},
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-4",
			children: [/* @__PURE__ */ jsxs("div", {
				className: `glass-panel rounded-2xl px-4 py-3 flex items-center justify-center transition-all ${scrolled ? "shadow-2xl" : ""}`,
				children: [/* @__PURE__ */ jsx("nav", {
					className: "hidden md:flex items-center gap-1",
					children: links.map((l) => /* @__PURE__ */ jsxs("a", {
						href: l.href,
						className: "relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group",
						children: [l.label, /* @__PURE__ */ jsx("span", { className: "absolute inset-x-3 -bottom-0.5 h-px scale-x-0 bg-[image:var(--gradient-brand)] transition-transform duration-300 group-hover:scale-x-100" })]
					}, l.href))
				}), /* @__PURE__ */ jsx("button", {
					onClick: () => setOpen(!open),
					className: "md:hidden rounded-lg border border-white/10 px-3 py-2 text-sm",
					"aria-label": "Toggle menu",
					children: open ? "Close" : "Menu"
				})]
			}), open && /* @__PURE__ */ jsx("div", {
				className: "md:hidden glass-panel rounded-2xl mt-2 p-3 flex flex-col gap-1",
				children: links.map((l) => /* @__PURE__ */ jsx("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground",
					children: l.label
				}, l.href))
			})]
		})
	});
}
//#endregion
//#region src/components/portfolio/Hero.tsx
function Hero() {
	return /* @__PURE__ */ jsx("section", {
		id: "top",
		className: "relative pt-32 md:pt-40 pb-24",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-6xl px-4",
			children: /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { duration: .6 },
				className: "flex flex-col items-center text-center",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "relative flex h-2 w-2",
							children: [/* @__PURE__ */ jsx("span", { className: "absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-emerald-400" })]
						}), "Open to Work"]
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-6 font-display font-bold leading-[0.95] tracking-tight text-5xl sm:text-7xl md:text-8xl",
						children: /* @__PURE__ */ jsx("span", {
							className: "text-gradient",
							children: "HARISH KUMAR A"
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-5 flex items-center gap-3 text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground",
						children: [
							/* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-gradient-to-r from-transparent to-primary/60" }),
							/* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5 text-primary" }),
							"Full Stack Developer",
							/* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-gradient-to-l from-transparent to-accent/60" })
						]
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "mt-6 max-w-3xl text-balance text-lg md:text-xl text-foreground/85",
						children: [
							"Building scalable ",
							/* @__PURE__ */ jsx("span", {
								className: "text-gradient-brand font-semibold",
								children: "ERP, CRM and enterprise solutions"
							}),
							" Using React TypeScript, ASP.NET Core Web API & MVC and SQL Server."
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 max-w-2xl text-sm md:text-base text-muted-foreground",
						children: "Passionate Full Stack Developer with experience designing dynamic business applications, database-driven systems and enterprise software solutions."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-12 grid w-full max-w-4xl grid-cols-1 sm:grid-cols-3 gap-3",
						children: [
							/* @__PURE__ */ jsx(StatPill, {
								icon: /* @__PURE__ */ jsx(Briefcase, { className: "h-4 w-4" }),
								title: "2.7+ Years",
								subtitle: "Professional Experience"
							}),
							/* @__PURE__ */ jsx(StatPill, {
								icon: /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }),
								title: "Chennai, India",
								subtitle: "Open to OnSite / Remote / Hybrid"
							}),
							/* @__PURE__ */ jsx(StatPill, {
								icon: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" }),
								title: "Enterprise Web App ",
								subtitle: "ERP · CRM · Dashboards"
							})
						]
					})
				]
			})
		})
	});
}
function StatPill({ icon, title, subtitle }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "glass-card glass-card-hover px-5 py-4 flex items-center gap-3 text-left",
		children: [/* @__PURE__ */ jsx("span", {
			className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-brand)]/20 text-primary border border-primary/30",
			children: icon
		}), /* @__PURE__ */ jsxs("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ jsx("div", {
				className: "font-semibold text-sm text-foreground",
				children: title
			}), /* @__PURE__ */ jsx("div", {
				className: "text-xs text-muted-foreground truncate",
				children: subtitle
			})]
		})]
	});
}
//#endregion
//#region src/components/portfolio/Section.tsx
function Section({ id, eyebrow, title, description, children }) {
	return /* @__PURE__ */ jsx("section", {
		id,
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-4",
			children: [/* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 24
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-100px"
				},
				transition: { duration: .6 },
				className: "mb-12 max-w-3xl",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-primary",
						children: [
							/* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-primary/60" }),
							" ",
							eyebrow
						]
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-4 text-4xl md:text-5xl font-bold leading-tight text-gradient",
						children: title
					}),
					description && /* @__PURE__ */ jsx("p", {
						className: "mt-4 text-base md:text-lg text-muted-foreground",
						children: description
					})
				]
			}), children]
		})
	});
}
//#endregion
//#region src/components/portfolio/About.tsx
var highlights = [
	{
		icon: Code2,
		title: "React Specialist",
		body: "Modern React + TypeScript SPAs with Redux state, hooks and component architectures."
	},
	{
		icon: Layers,
		title: "ASP.NET Core Developer",
		body: "RESTful APIs, layered services and clean controllers powering business logic."
	},
	{
		icon: Database,
		title: "SQL Server Database",
		body: "Schema design, stored procedures and query tuning for transactional workloads."
	},
	{
		icon: Building2,
		title: "ERP & CRM Engineering",
		body: "Modular ERP suites and CRM workflows for jewellery, sales and finance domains."
	},
	{
		icon: FormInput,
		title: "Dynamic Form Architectures",
		body: "Metadata-driven form engines that ship new modules without code rewrites."
	},
	{
		icon: Workflow,
		title: "Enterprise Mindset",
		body: "Performance, security and maintainability at the core of every release."
	}
];
function About() {
	return /* @__PURE__ */ jsx(Section, {
		id: "about",
		eyebrow: "About Me",
		title: /* @__PURE__ */ jsxs(Fragment, { children: [
			"Engineering enterprise software ",
			/* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
			" with craft and conviction."
		] }),
		description: "I'm a Full Stack Developer based in Chennai, focused on architecting reliable business platforms. From dynamic form engines to multi-module ERP systems, I bridge product thinking with deep technical execution across React, ASP.NET Core and SQL Server.",
		children: /* @__PURE__ */ jsx("div", {
			className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
			children: highlights.map((h, i) => /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					duration: .4,
					delay: i * .05
				},
				className: "glass-card glass-card-hover p-6",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "grid h-11 w-11 place-items-center rounded-xl bg-[image:var(--gradient-brand)]/20 border border-primary/30 text-primary",
						children: /* @__PURE__ */ jsx(h.icon, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "mt-4 font-semibold text-lg",
						children: h.title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm text-muted-foreground leading-relaxed",
						children: h.body
					})
				]
			}, h.title))
		})
	});
}
//#endregion
//#region src/components/portfolio/Skills.tsx
var groups = [
	{
		label: "Frontend",
		accent: "from-sky-400 to-blue-500",
		items: [
			{
				name: "React",
				level: 92
			},
			{
				name: "TypeScript",
				level: 92
			},
			{
				name: "JavaScript",
				level: 88
			},
			{
				name: "Redux",
				level: 82
			},
			{
				name: "HTML5",
				level: 95
			},
			{
				name: "CSS3 / Tailwind",
				level: 90
			}
		]
	},
	{
		label: "Backend",
		accent: "from-violet-400 to-fuchsia-500",
		items: [
			{
				name: "ASP.NET Core",
				level: 88
			},
			{
				name: "Node.js",
				level: 78
			},
			{
				name: "Express.js",
				level: 76
			}
		]
	},
	{
		label: "Database",
		accent: "from-emerald-400 to-teal-500",
		items: [
			{
				name: "SQL Server",
				level: 90
			},
			{
				name: "MySQL",
				level: 80
			},
			{
				name: "MongoDB",
				level: 70
			}
		]
	},
	{
		label: "Tools & Practices",
		accent: "from-amber-400 to-orange-500",
		items: [
			{
				name: "Git / GitHub",
				level: 88
			},
			{
				name: "Axios / REST",
				level: 86
			},
			{
				name: "Agile / Scrum",
				level: 82
			},
			{
				name: "Postman",
				level: 80
			}
		]
	}
];
function Skills() {
	return /* @__PURE__ */ jsx(Section, {
		id: "skills",
		eyebrow: "Tech Stack",
		title: "A toolkit forged on real production systems.",
		description: "Hands-on with the full stack — from typed React UIs to high-performance SQL Server schemas powering enterprise workloads.",
		children: /* @__PURE__ */ jsx("div", {
			className: "grid gap-5 md:grid-cols-2",
			children: groups.map((g, gi) => /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					duration: .5,
					delay: gi * .05
				},
				className: "glass-card p-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-semibold text-lg",
						children: g.label
					}), /* @__PURE__ */ jsx("span", { className: `h-2 w-16 rounded-full bg-gradient-to-r ${g.accent}` })]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-5 space-y-4",
					children: g.items.map((it, i) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between text-sm",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-medium",
							children: it.name
						}), /* @__PURE__ */ jsxs("span", {
							className: "font-mono text-xs text-muted-foreground",
							children: [it.level, "%"]
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/5",
						children: /* @__PURE__ */ jsx(motion.div, {
							initial: { width: 0 },
							whileInView: { width: `${it.level}%` },
							viewport: { once: true },
							transition: {
								duration: 1.1,
								delay: .1 + i * .06,
								ease: "easeOut"
							},
							className: `h-full rounded-full bg-gradient-to-r ${g.accent}`
						})
					})] }, it.name))
				})]
			}, g.label))
		})
	});
}
//#endregion
//#region src/components/portfolio/Experience.tsx
var roles = [
	{
		company: "RBS ALTECH Solutions",
		role: "Full Stack Developer",
		period: "Aug 2025 to Mar 2026",
		project: "Jewellery Management System - ERP",
		bullets: [
			"Architected a dynamic form generation engine driving Masters, Sales, Purchase, Inventory, Smith Management, Finance and Reports modules.",
			"Designed normalized SQL Server schemas, stored procedures and views supporting complex ERP transactions.",
			"Built React + TypeScript front-end with Redux, reusable component libraries and granular role-based UI."
		],
		modules: [
			"Masters",
			"Sales",
			"Purchase",
			"Inventory",
			"Smith Management",
			"Finance",
			"Reports",
			"Dashboard"
		]
	},
	{
		company: "Accel IT Services",
		role: "Software Developer",
		period: "July 2024 to July 2025",
		project: "Business Web Applications",
		bullets: ["Delivered full-stack features across .NET and React stacks for internal business systems.", "Worked alongside QA and product to ship iterative releases on Agile cadences."],
		modules: ["Professional Services"]
	},
	{
		company: "Bracezin Technology",
		role: "Software Trainee",
		period: "May 2023 to June 2024",
		project: "Foundations & Internship Builds",
		bullets: ["Developed a responsive front-end UI using HTML,CSS and JavaSCript.", "Simulated event creation,partcipant registration and schedule management features UI."],
		modules: ["HTML5", "CSS3"]
	}
];
function Experience() {
	return /* @__PURE__ */ jsx(Section, {
		id: "experience",
		eyebrow: "Career Timeline",
		title: "From trainee to enterprise developer.",
		description: "A focused journey through software engineering — shipping production systems and growing into ERP-scale architectures.",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/30 to-transparent" }), /* @__PURE__ */ jsx("div", {
				className: "space-y-10",
				children: roles.map((r, i) => /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .5,
						delay: i * .08
					},
					className: `relative grid md:grid-cols-2 gap-6 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`,
					children: [/* @__PURE__ */ jsxs("div", {
						className: `relative pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10 md:[direction:ltr]"}`,
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "absolute left-2 md:left-auto md:right-[-9px] top-2 md:top-3 grid h-4 w-4 place-items-center rounded-full bg-[image:var(--gradient-brand)] shadow-[var(--shadow-glow)]",
								style: i % 2 === 0 ? {} : {
									right: "auto",
									left: "-9px"
								}
							}),
							/* @__PURE__ */ jsx("div", {
								className: "text-xs font-mono uppercase tracking-[0.25em] text-primary",
								children: r.period
							}),
							/* @__PURE__ */ jsxs("h3", {
								className: "mt-2 text-xl font-semibold flex items-center gap-2 md:justify-end",
								style: i % 2 === 0 ? {} : { justifyContent: "flex-start" },
								children: [
									/* @__PURE__ */ jsx(Building2, { className: "h-4 w-4 text-muted-foreground" }),
									" ",
									r.company
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "text-sm text-muted-foreground",
								children: [
									r.role,
									" · ",
									r.project
								]
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: `pl-12 md:pl-0 ${i % 2 === 0 ? "" : "md:[direction:ltr] md:pr-10"}`,
						children: /* @__PURE__ */ jsxs("div", {
							className: "glass-card glass-card-hover p-6",
							children: [/* @__PURE__ */ jsx("ul", {
								className: "space-y-2 text-sm text-foreground/85",
								children: r.bullets.map((b) => /* @__PURE__ */ jsxs("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ jsx("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ jsx("span", { children: b })]
								}, b))
							}), /* @__PURE__ */ jsx("div", {
								className: "mt-4 flex flex-wrap gap-1.5",
								children: r.modules.map((m) => /* @__PURE__ */ jsx("span", {
									className: "rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-muted-foreground",
									children: m
								}, m))
							})]
						})
					})]
				}, r.company))
			})]
		})
	});
}
//#endregion
//#region src/components/portfolio/Projects.tsx
var projects = [
	{
		title: "Jewellery Management ERP",
		tag: "Flagship · RBS ALTECH",
		description: "End-to-end ERP for jewellery operations — masters, sales, purchase, inventory, smith management, finance and reporting on a unified dynamic-form architecture.",
		features: [
			"Dynamic form generation engine",
			"Role-based access & multi-branch support",
			"Inventory & smith reconciliation",
			"Finance ledger and tax reports"
		],
		stack: [
			"React",
			"TypeScript",
			"Redux",
			"ASP.NET Core",
			"SQL Server"
		],
		accent: "from-sky-400 to-blue-500"
	},
	{
		title: "CRM Application",
		tag: "Customer Relationship",
		description: "Lead-to-conversion CRM with pipelines, activities and analytics — built around a metadata-driven configuration model.",
		features: [
			"Pipeline & deal stages",
			"Activity & follow-up timelines",
			"Email & contact management",
			"Dashboard analytics"
		],
		stack: [
			"React",
			"ASP.NET Core",
			"SQL Server",
			"Axios"
		],
		accent: "from-violet-400 to-fuchsia-500"
	},
	{
		title: "Full Stack Business Application",
		tag: "Enterprise Toolkit",
		description: "A modular business app showcasing dynamic forms, configurable workflows and reusable React components for rapid module delivery.",
		features: [
			"Reusable component library",
			"Configurable workflows",
			"REST API integration",
			"Reporting & exports"
		],
		stack: [
			"React",
			"Node.js",
			"Express.js",
			"MongoDB"
		],
		accent: "from-emerald-400 to-teal-500"
	}
];
function Projects() {
	return /* @__PURE__ */ jsx(Section, {
		id: "projects",
		eyebrow: "Selected Work",
		title: "Production systems, not portfolio demos.",
		description: "A look at the enterprise platforms I've built and contributed to — each one shipped to real users with real business stakes.",
		children: /* @__PURE__ */ jsx("div", {
			className: "space-y-8",
			children: projects.map((p, i) => /* @__PURE__ */ jsxs(motion.article, {
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					duration: .5,
					delay: i * .05
				},
				className: "glass-card glass-card-hover p-6 md:p-10 grid lg:grid-cols-[1.1fr_1fr] gap-8",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("div", {
						className: "text-xs font-mono uppercase tracking-[0.3em] text-primary",
						children: p.tag
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "mt-3 text-2xl md:text-3xl font-bold",
						children: p.title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 text-muted-foreground leading-relaxed",
						children: p.description
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-5 grid sm:grid-cols-2 gap-2",
						children: p.features.map((f) => /* @__PURE__ */ jsxs("div", {
							className: "flex items-start gap-2 text-sm",
							children: [/* @__PURE__ */ jsx("span", { className: `mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${p.accent}` }), /* @__PURE__ */ jsx("span", {
								className: "text-foreground/85",
								children: f
							})]
						}, f))
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-5 flex flex-wrap gap-1.5",
						children: p.stack.map((s) => /* @__PURE__ */ jsx("span", {
							className: "rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-muted-foreground",
							children: s
						}, s))
					})
				] }), /* @__PURE__ */ jsx(ArchitectureDiagram, { accent: p.accent })]
			}, p.title))
		})
	});
}
function ArchitectureDiagram({ accent }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 min-h-[280px]",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid opacity-40" }),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.18_235/0.18),transparent_70%)]" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative h-full grid grid-cols-3 gap-3 items-center",
				children: [
					/* @__PURE__ */ jsx(DiagramNode, {
						icon: /* @__PURE__ */ jsx(Layers3, { className: "h-5 w-5" }),
						label: "React UI",
						sub: "TypeScript",
						accent
					}),
					/* @__PURE__ */ jsx(DiagramNode, {
						icon: /* @__PURE__ */ jsx(Box, { className: "h-5 w-5" }),
						label: "API Layer",
						sub: "ASP.NET Core",
						accent
					}),
					/* @__PURE__ */ jsx(DiagramNode, {
						icon: /* @__PURE__ */ jsx(Database, { className: "h-5 w-5" }),
						label: "Database",
						sub: "SQL Server",
						accent
					})
				]
			}),
			/* @__PURE__ */ jsx("svg", {
				className: "absolute inset-x-6 top-1/2 -translate-y-1/2 h-2 w-[calc(100%-3rem)] pointer-events-none",
				viewBox: "0 0 100 2",
				preserveAspectRatio: "none",
				children: /* @__PURE__ */ jsx("line", {
					x1: "0",
					y1: "1",
					x2: "100",
					y2: "1",
					stroke: "oklch(0.72 0.18 235 / 0.5)",
					strokeWidth: "0.4",
					strokeDasharray: "2 2",
					className: "animate-dash"
				})
			})
		]
	});
}
function DiagramNode({ icon, label, sub, accent }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "glass-panel relative z-10 flex flex-col items-center gap-1 rounded-xl px-3 py-4 text-center",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: `grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br ${accent} text-white shadow-lg`,
				children: icon
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-1 text-sm font-semibold",
				children: label
			}),
			/* @__PURE__ */ jsx("div", {
				className: "text-[10px] font-mono uppercase tracking-wider text-muted-foreground",
				children: sub
			})
		]
	});
}
//#endregion
//#region src/components/portfolio/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "border-t border-white/10 mt-12",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "font-display text-lg font-bold",
					children: "Harish Kumar A"
				}), /* @__PURE__ */ jsx("div", {
					className: "text-xs text-muted-foreground",
					children: "Full Stack Developer · Chennai, India"
				})] }),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ jsx("a", {
							href: "mailto:harishmdu26@gmail.com",
							className: "grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/40 transition",
							"aria-label": "Email",
							children: /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ jsx("a", {
							href: "https://github.com/harish-dev-mdu/",
							className: "grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/40 transition",
							"aria-label": "GitHub",
							children: /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ jsx("a", {
							href: "https://www.linkedin.com/in/harish-kumar-a-45a60a260/",
							className: "grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/40 transition",
							"aria-label": "LinkedIn",
							children: /* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4" })
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "text-xs text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Harish Kumar A. All rights reserved."
					]
				})
			]
		})
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative min-h-screen",
		children: [
			/* @__PURE__ */ jsx(AnimatedBackground, {}),
			/* @__PURE__ */ jsx(Nav, {}),
			/* @__PURE__ */ jsxs("main", { children: [
				/* @__PURE__ */ jsx(Hero, {}),
				/* @__PURE__ */ jsx(About, {}),
				/* @__PURE__ */ jsx(Skills, {}),
				/* @__PURE__ */ jsx(Experience, {}),
				/* @__PURE__ */ jsx(Projects, {})
			] }),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
