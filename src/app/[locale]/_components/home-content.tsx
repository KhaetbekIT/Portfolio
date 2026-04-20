import { AboutPreviewSection } from "./about-preview";
import { AdvantagesSection } from "./advantages";
import { HeroSection } from "./hero";
import { ProjectsPreviewSection } from "./projects-preview";

export const HomeContent = () => {
	return (
		<>
			<HeroSection />
			<AboutPreviewSection />
			<ProjectsPreviewSection />
			<AdvantagesSection />
		</>
	);
};
