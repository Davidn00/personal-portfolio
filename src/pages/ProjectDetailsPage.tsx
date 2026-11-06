import { useParams, Navigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { getProjectBySlug } from '../data/projects';

import { ProjectDetails } from '../components/projects/ProjectDetails';

import { SEO } from '../components/common/SEO';

export function ProjectDetailsPage() {
  const { slug } = useParams<{ slug: string }>();

  const { t } = useTranslation();

  if (!slug) {
    return <Navigate to="/" replace />;
  }

  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <SEO
        title={t('seo.projectTitle', {
          project: project.title,
        })}
        description={t(`seo.projectDescription`, { project: project.title })}
        path={`/projects/${project.slug}`}
      />

      <div className="page-container project-page">
        <ProjectDetails project={project} />
      </div>
    </>
  );
}
