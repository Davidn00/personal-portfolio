import { projects } from '../../data/projects';

import { SectionHeading } from '../../components/common/SectionHeading';
import { ProjectCard } from '../../components/projects/ProjectCard';

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="portfolio-section">
      <SectionHeading
        eyebrow="SELECTED WORK"
        title="Featured projects"
        description="A selection of software and engineering projects demonstrating architecture, implementation and applied problem-solving."
      />

      <div className="projects-grid">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
