import { useMemo, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { projects } from '../../data/projects';

import { SectionHeading } from '../../components/common/SectionHeading';

import { ProjectCard } from '../../components/projects/ProjectCard';

import {
  ProjectFilter,
  type ProjectFilterValue,
} from '../../components/projects/ProjectFilter';

export function ProjectsSection() {
  const { t } = useTranslation();

  const [selectedFilter, setSelectedFilter] =
    useState<ProjectFilterValue>('all');

  const featuredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (!project.featured) {
        return false;
      }

      if (selectedFilter === 'all') {
        return true;
      }

      return project.category.includes(selectedFilter);
    });
  }, [selectedFilter]);

  return (
    <section id="projects" className="portfolio-section">
      <SectionHeading
        eyebrow={t('projects.eyebrow')}
        title={t('projects.title')}
        description={t('projects.description')}
      />

      <ProjectFilter selected={selectedFilter} onChange={setSelectedFilter} />

      <p className="project-results" aria-live="polite">
        {t('projects.showing', {
          count: featuredProjects.length,
        })}
      </p>

      {featuredProjects.length > 0 ? (
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="projects-empty">{t('projects.noResults')}</p>
      )}
    </section>
  );
}
