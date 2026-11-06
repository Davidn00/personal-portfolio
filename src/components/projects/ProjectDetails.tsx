import {
  ArrowLeft,
  ArrowUpRight,
  Layers,
  CheckCircle2,
  Code2,
} from 'lucide-react';

import { FaGithub } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import type { Project } from '../../types/portfolio';

import { Tag } from '../common/Tag';

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <article className="project-details">
      <Link to="/#projects" className="back-link">
        <ArrowLeft size={16} />
        Back to projects
      </Link>

      <header className="project-details-header">
        <span className="section-eyebrow">FEATURED PROJECT</span>

        <div className="project-details-title-row">
          <h1>{project.title}</h1>

          <span className={`project-status status-${project.status}`}>
            {project.status.replace('-', ' ')}
          </span>
        </div>

        <p>{project.description}</p>

        <div className="project-details-actions">
          {project.repository && (
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              <FaGithub size={17} />
              Repository
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
              Live demo <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </header>

      <div className="details-grid">
        <section className="details-main">
          <div className="details-block">
            <h2>Project overview</h2>
            <p>{project.overview}</p>
          </div>

          <div className="details-block">
            <h2>The problem</h2>
            <p>{project.problem}</p>
          </div>

          <div className="details-block">
            <h2>Solution</h2>
            <p>{project.solution}</p>
          </div>

          <div className="details-block">
            <h2>Key features</h2>

            <ul className="feature-list">
              {project.features.map((feature) => (
                <li key={feature}>
                  <CheckCircle2 size={17} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="details-block">
            <h2>Architecture</h2>

            <div className="architecture-panel">
              <Layers size={21} />
              <p>{project.architecture}</p>
            </div>
          </div>
        </section>

        <aside className="details-sidebar">
          <div className="surface-card">
            <Code2 size={21} />

            <h3>Technologies</h3>

            <div className="project-tags">
              {project.technologies.map((technology) => (
                <Tag key={technology}>{technology}</Tag>
              ))}
            </div>
          </div>

          <div className="surface-card">
            <h3>Technical highlights</h3>

            <ul className="highlight-list">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
}
