import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Nong2kCaseStudy } from "@/components/sections/Nong2kCaseStudy";
import { SeoPlanningShowcase } from "@/components/sections/SeoPlanningShowcase";
import { WebsiteBuild } from "@/components/sections/WebsiteBuild";
import { ShopeeShowcase } from "@/components/sections/ShopeeShowcase";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Nong2kCaseStudy />
        <SeoPlanningShowcase />
        <WebsiteBuild />
        <ShopeeShowcase />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
