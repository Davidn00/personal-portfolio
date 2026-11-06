import { useParams, Navigate } from 'react-router-dom';

import { getProjectBySlug } from '../data/projects';
import { ProjectDetails } from '../components/projects/ProjectDetails';

export function ProjectDetailsPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/" replace />;
  }

  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="page-container project-page">
      <ProjectDetails project={project} />
    </div>
  );
}
