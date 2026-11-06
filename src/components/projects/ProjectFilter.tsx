import { useTranslation } from 'react-i18next';

import type { ProjectCategory } from '../../types/portfolio';

export type ProjectFilterValue = 'all' | ProjectCategory;

interface ProjectFilterProps {
  selected: ProjectFilterValue;
  onChange: (category: ProjectFilterValue) => void;
}

const filters: ProjectFilterValue[] = [
  'all',
  'backend',
  'instrumentation',
  'embedded',
  'research',
];

export function ProjectFilter({ selected, onChange }: ProjectFilterProps) {
  const { t } = useTranslation();

  return (
    <div
      className="project-filters"
      role="group"
      aria-label={t('projects.filterLabel', {
        defaultValue: 'Filter projects by category',
      })}
    >
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          className={`project-filter ${selected === filter ? 'active' : ''}`}
          aria-pressed={selected === filter}
          onClick={() => onChange(filter)}
        >
          {t(`projects.filters.${filter}`)}
        </button>
      ))}
    </div>
  );
}
