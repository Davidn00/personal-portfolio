import { BriefcaseBusiness, CalendarDays, MapPin } from 'lucide-react';

import { experience } from '../../data/experience';

import { SectionHeading } from '../../components/common/SectionHeading';

export function ExperienceSection() {
  return (
    <section id="experience" className="portfolio-section">
      <SectionHeading
        eyebrow="PROFESSIONAL JOURNEY"
        title="Professional Experience"
        description="My professional background combines software development, biomedical engineering, instrumentation and applied research."
      />

      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-item" key={item.id}>
            <div className="timeline-marker">
              <BriefcaseBusiness size={19} />
            </div>

            <div className="timeline-period">
              <CalendarDays size={13} />
              <span>{item.period}</span>
            </div>

            <div className="timeline-content">
              <h3>{item.position}</h3>

              <strong>{item.organization}</strong>

              <span className="timeline-location">
                <MapPin size={13} />
                {item.location}
              </span>

              <p>{item.description}</p>

              <ul className="experience-list">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
