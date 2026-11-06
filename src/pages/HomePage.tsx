import { HeroSection } from '../sections/Hero/HeroSection';
import { AboutSection } from '../sections/About/AboutSection';
import { SkillsSection } from '../sections/Skills/SkillsSection';
import { ProjectsSection } from '../sections/Projects/ProjectsSection';
import { EducationSection } from '../sections/Education/EducationSection';
import { ExperienceSection } from '../sections/Experience/ExperienceSection';
import { ResearchSection } from '../sections/Research/ResearchSection';
import { ContactSection } from '../sections/Contact/ContactSection';

export function HomePage() {
  return (
    <>
      <div className="page-container">
        <HeroSection />

        <AboutSection />

        <SkillsSection />

        <ProjectsSection />

        <EducationSection />

        <ExperienceSection />

        <ResearchSection />

        <ContactSection />
      </div>
    </>
  );
}
