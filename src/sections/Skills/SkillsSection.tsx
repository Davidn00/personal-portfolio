import {
  Code2,
  Monitor,
  Database,
  Activity,
  Cloud,
  Layers,
} from 'lucide-react';

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
};

export function SkillsSection() {
  return (
    <section id="skills" className="portfolio-section">
      <SectionHeading
        eyebrow="WHAT I WORK WITH"
        title="Technical skills"
        description="Technologies grouped by the engineering problems I use them to solve — not percentage ratings."
      />

      <div className="skills-grid">
        {skillGroups.map((group) => {
          const Icon = icons[group.icon as keyof typeof icons];

          return (
            <article className="skill-card" key={group.id}>
              <div className="skill-icon">
                <Icon size={22} />
              </div>

              <h3>{group.title}</h3>

              <p>{group.description}</p>

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
