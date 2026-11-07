import {
  Activity,
  ChartNoAxesCombined,
  Cloud,
  Code2,
  Cpu,
  Database,
  Layers,
  Monitor,
  Server,
  ShieldCheck,
  Workflow,
} from 'lucide-react';

import { useTranslation } from 'react-i18next';

import { skillGroups } from '../../data/skills';

import { SectionHeading } from '../../components/common/SectionHeading';
import { Tag } from '../../components/common/Tag';

const icons = {
  code: Code2,
  monitor: Monitor,
  database: Database,
  activity: Activity,
  cloud: Cloud,
  layers: Layers,
  server: Server,
  workflow: Workflow,
  'shield-check': ShieldCheck,
  'chart-no-axes-combined': ChartNoAxesCombined,
  cpu: Cpu,
};

export function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="portfolio-section">
      <SectionHeading
        eyebrow={t('skills.eyebrow')}
        title={t('skills.title')}
        description={t('skills.description')}
      />

      <div className="skills-grid">
        {skillGroups.map((group) => {
          const Icon = icons[group.icon as keyof typeof icons] ?? Code2;

          return (
            <article className="skill-card" key={group.id}>
              <div className="skill-icon">
                <Icon size={22} />
              </div>

              <h3>{t(`skills.groups.${group.id}.title`)}</h3>

              <p>{t(`skills.groups.${group.id}.description`)}</p>

              <div className="skill-tags">
                {group.technologies.map((technology) => (
                  <Tag key={technology}>{technology}</Tag>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
