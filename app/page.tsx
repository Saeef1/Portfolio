import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { SkillsSection } from "@/components/skills-section";
import { Footer } from "@/components/footer";
import Projects from "@/components/projects";
import Qualification from "@/components/Qualification";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      
      <HeroSection />
      <SkillsSection />
      <Qualification/>
      <Projects />
      <Footer />
    </main>
  );
}