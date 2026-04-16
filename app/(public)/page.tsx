import { HeroSection } from "@/components/sections/hero";
import { AboutPreviewSection } from "@/components/sections/about-preview";
import { ProjectsPreviewSection } from "@/components/sections/projects-preview";
import { GeneligencePreviewSection } from "@/components/sections/geneligence-preview";
import { AdvantagesSection } from "@/components/sections/advantages";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreviewSection />
      <ProjectsPreviewSection />
      <GeneligencePreviewSection />
      <AdvantagesSection />
    </>
  );
}
