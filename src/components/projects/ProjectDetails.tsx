import {
  ArrowLeft,
  ArrowUpRight,
  Layers,
  CheckCircle2,
  Code2,
} from 'lucide-react';

import { FaGithub } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import type { Project } from '../../types/portfolio';

import { Tag } from '../common/Tag';

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const { t } = useTranslation();

  const key = `projects.items.${project.id}`;

  const features = t(`${key}.features`, {
    returnObjects: true,
  }) as string[];

  const highlights = t(`${key}.highlights`, {
    returnObjects: true,
  }) as string[];

  return (
    <article className="project-details">
      <Link to="/#projects" className="back-link">
        <ArrowLeft size={16} />
        {t('projects.back')}
      </Link>

      <header className="project-details-header">
        <span className="section-eyebrow">{t('projects.featured')}</span>

        <div className="project-details-title-row">
          <h1>{project.title}</h1>

          <span className={`project-status status-${project.status}`}>
            {t(`projects.status.${project.status}`)}
          </span>
        </div>

        <p>{t(`${key}.description`)}</p>

        <div className="project-details-actions">
          {project.repository && (
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              <FaGithub size={17} />
              {t('projects.repository')}
              <ArrowUpRight size={15} />
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary"
            >
              {t('projects.demo')}
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </header>

      <div className="details-grid">
        <section className="details-main">
          <div className="details-block">
            <h2>{t('projects.overview')}</h2>
            <p>{t(`${key}.overview`)}</p>
          </div>

          <div className="details-block">
            <h2>{t('projects.problem')}</h2>
            <p>{t(`${key}.problem`)}</p>
          </div>

          <div className="details-block">
            <h2>{t('projects.solution')}</h2>
            <p>{t(`${key}.solution`)}</p>
          </div>

          <div className="details-block">
            <h2>{t('projects.features')}</h2>

            <ul className="feature-list">
              {features.map((feature) => (
                <li key={feature}>
                  <CheckCircle2 size={17} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="details-block">
            <h2>{t('projects.architecture')}</h2>

            <div className="architecture-panel">
              <Layers size={21} />
              <p>{t(`${key}.architecture`)}</p>
            </div>
          </div>
        </section>

        <aside className="details-sidebar">
          <div className="surface-card">
            <Code2 size={21} />

            <h3>{t('projects.technologies')}</h3>

            <div className="project-tags">
              {project.technologies.map((technology) => (
                <Tag key={technology}>{technology}</Tag>
              ))}
            </div>
          </div>

          <div className="surface-card">
            <h3>{t('projects.highlights')}</h3>

            <ul className="highlight-list">
              {highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
}
