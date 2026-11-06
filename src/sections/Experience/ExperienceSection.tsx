import { BriefcaseBusiness, CalendarDays, MapPin } from 'lucide-react';

import { useTranslation } from 'react-i18next';

import { experience } from '../../data/experience';

import { SectionHeading } from '../../components/common/SectionHeading';

export function ExperienceSection() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="portfolio-section">
      <SectionHeading
        eyebrow={t('experience.eyebrow')}
        title={t('experience.title')}
        description={t('experience.description')}
      />

      <div className="timeline">
        {experience.map((item) => {
          const key = `experience.items.${item.id}`;

          const responsibilities = t(`${key}.responsibilities`, {
            returnObjects: true,
          }) as string[];

          return (
            <article className="timeline-item" key={item.id}>
              <div className="timeline-marker">
                <BriefcaseBusiness size={19} />
              </div>

              <div className="timeline-period">
                <CalendarDays size={13} />
                <span>{item.period}</span>
              </div>

              <div className="timeline-content">
                <h3>{t(`${key}.position`)}</h3>

                <strong>{item.organization}</strong>

                <span className="timeline-location">
                  <MapPin size={13} />
                  {item.location}
                </span>

                <p>{t(`${key}.description`)}</p>

                <ul className="experience-list">
                  {responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
