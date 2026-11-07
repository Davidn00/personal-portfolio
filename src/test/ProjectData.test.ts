import { describe, expect, it } from 'vitest';

import { projects, getProjectBySlug } from '../data/projects';

describe('Project data', () => {
  it('contains unique project IDs', () => {
    const ids = projects.map((project) => project.id);

    expect(new Set(ids).size).toBe(ids.length);
  });

  it('contains unique project slugs', () => {
    const slugs = projects.map((project) => project.slug);

    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('defines the required project information', () => {
    for (const project of projects) {
      expect(project.title.trim()).not.toBe('');

      expect(project.slug.trim()).not.toBe('');

      expect(project.technologies.length).toBeGreaterThan(0);

      expect(project.category.length).toBeGreaterThan(0);
    }
  });

  it('marks featured projects correctly', () => {
    const featured = projects.filter((project) => project.featured);

    expect(featured.length).toBeGreaterThan(0);
  });

  it('finds MedLab Platform by slug', () => {
    const project = getProjectBySlug('medlab-platform');

    expect(project).toBeDefined();

    expect(project?.title).toBe('MedLab Platform');
  });

  it('returns undefined for unknown projects', () => {
    expect(getProjectBySlug('unknown-project')).toBeUndefined();
  });
});
