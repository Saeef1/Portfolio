import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { SkillsSection } from "@/components/skills-section";
import { Footer } from "@/components/footer";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <Projects />
      <Footer />
    </main>
  );
}