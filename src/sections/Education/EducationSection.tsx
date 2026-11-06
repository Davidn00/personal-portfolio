import { GraduationCap, CheckCircle2, Clock3 } from 'lucide-react';

import { useTranslation } from 'react-i18next';

import { education } from '../../data/education';

import { SectionHeading } from '../../components/common/SectionHeading';

export function EducationSection() {
  const { t } = useTranslation();

  return (
    <section id="education" className="portfolio-section">
      <SectionHeading
        eyebrow={t('education.eyebrow')}
        title={t('education.title')}
        description={t('education.description')}
      />

      <div className="timeline">
        {education.map((item) => (
          <article className="timeline-item" key={item.id}>
            <div className="timeline-marker">
              <GraduationCap size={20} />
            </div>

            <div className="timeline-period">{item.period}</div>

            <div className="timeline-content">
              <div className="timeline-title-row">
                <h3>{t(`education.items.${item.id}.degree`)}</h3>

                {item.status === 'completed' ? (
                  <CheckCircle2 size={17} />
                ) : (
                  <Clock3 size={17} />
                )}
              </div>

              <strong>{item.institution}</strong>

              <span className="timeline-location">{item.location}</span>

              <p>{t(`education.items.${item.id}.description`)}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
