import { GraduationCap, CheckCircle2, Clock3 } from 'lucide-react';

import { education } from '../../data/education';
import { SectionHeading } from '../../components/common/SectionHeading';

export function EducationSection() {
  return (
    <section id="education" className="portfolio-section">
      <SectionHeading
        eyebrow="ACADEMIC BACKGROUND"
        title="Education"
        description="Engineering education supporting a multidisciplinary approach to software and instrumentation."
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
                <h3>{item.degree}</h3>

                {item.status === 'completed' ? (
                  <CheckCircle2 size={17} />
                ) : (
                  <Clock3 size={17} />
                )}
              </div>

              <strong>{item.institution}</strong>

              <span className="timeline-location">{item.location}</span>

              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
