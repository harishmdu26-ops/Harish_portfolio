import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/portfolio/AnimatedBackground";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
// import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harish Kumar A — Full Stack Developer | ERP & CRM" },
      { name: "description", content: "Full Stack Developer with 2.7+ years building scalable ERP and CRM solutions using React, ASP.NET Core and SQL Server." },
      { property: "og:title", content: "Harish Kumar A — Full Stack Developer" },
      { property: "og:description", content: "Building scalable ERP, CRM and enterprise solutions using React, ASP.NET Core and SQL Server." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}
