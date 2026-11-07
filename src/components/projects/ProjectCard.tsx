import { ArrowUpRight } from 'lucide-react';

import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import type { Project } from '../../types/portfolio';

import { Tag } from '../common/Tag';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation();

  const translationKey = `projects.items.${project.id}`;

  return (
    <article className="project-card">
      <Link
        to={`/projects/${project.slug}`}
        className="project-art"
        aria-hidden="true"
        tabIndex={-1}
      >
        <div className="project-art-decoration" />

        <div className="project-art-content">
          <span className="project-art-label">
            {project.category
              .map((category) => t(`projects.categories.${category}`))
              .join(' · ')}
          </span>

          <span className="project-art-title">{project.shortTitle}</span>
        </div>

        <ArrowUpRight size={23} />
      </Link>

      <div className="project-content">
        <div className="project-title-row">
          <h3>{project.title}</h3>

          <span className={`project-status status-${project.status}`}>
            {t(`projects.status.${project.status}`)}
          </span>
        </div>

        <p>{t(`${translationKey}.description`)}</p>

        <div className="project-tags">
          {project.technologies.slice(0, 4).map((technology) => (
            <Tag key={technology}>{technology}</Tag>
          ))}
        </div>

        <div className="project-footer">
          <span>
            {project.category
              .map((category) => t(`projects.categories.${category}`))
              .join(' · ')}
          </span>

          <Link to={`/projects/${project.slug}`}>
            {t('projects.viewDetails')}
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}
