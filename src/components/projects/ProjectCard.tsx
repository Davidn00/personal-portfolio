import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import type { Project } from '../../types/portfolio';
import { Tag } from '../common/Tag';

interface ProjectCardProps {
  project: Project;
}

const statusLabels = {
  completed: 'Completed',
  'in-progress': 'In progress',
  prototype: 'Prototype',
  research: 'Research',
};

const categoryLabels: Record<string, string> = {
  backend: 'Backend',
  instrumentation: 'Instrumentation',
  embedded: 'Embedded',
  research: 'Research',
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <Link
        to={`/projects/${project.slug}`}
        className="project-art"
        aria-label={`View ${project.title} details`}
      >
        <div className="project-art-decoration" />

        <div className="project-art-content">
          <span className="project-art-label">
            {categoryLabels[project.category[0]]}
          </span>

          <span className="project-art-title">{project.shortTitle}</span>
        </div>

        <ArrowUpRight size={23} />
      </Link>

      <div className="project-content">
        <div className="project-title-row">
          <h3>{project.title}</h3>

          <span className={`project-status status-${project.status}`}>
            {statusLabels[project.status]}
          </span>
        </div>

        <p>{project.description}</p>

        <div className="project-tags">
          {project.technologies.slice(0, 4).map((technology) => (
            <Tag key={technology}>{technology}</Tag>
          ))}
        </div>

        <div className="project-footer">
          <span>
            {project.category
              .map((category) => categoryLabels[category])
              .join(' · ')}
          </span>

          <Link to={`/projects/${project.slug}`}>
            View details <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}
