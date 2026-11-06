import { useTranslation } from 'react-i18next';

import { SEO } from '../components/common/SEO';

import { HeroSection } from '../sections/Hero/HeroSection';
import { AboutSection } from '../sections/About/AboutSection';
import { SkillsSection } from '../sections/Skills/SkillsSection';
import { ProjectsSection } from '../sections/Projects/ProjectsSection';
import { EducationSection } from '../sections/Education/EducationSection';
import { ExperienceSection } from '../sections/Experience/ExperienceSection';
import { ResearchSection } from '../sections/Research/ResearchSection';
import { ContactSection } from '../sections/Contact/ContactSection';

export function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('seo.homeTitle')}
        description={t('seo.homeDescription')}
        path="/"
      />

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
