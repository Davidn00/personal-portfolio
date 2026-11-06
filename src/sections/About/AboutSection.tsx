import {
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  Languages,
} from 'lucide-react';

import { SectionHeading } from '../../components/common/SectionHeading';
import { profile } from '../../data/profile';

const information = [
  {
    label: 'Professional focus',
    value: profile.professionalFocus,
    icon: BriefcaseBusiness,
  },
  {
    label: 'Education',
    value: 'M.Sc. Electrical Engineering · Instrumentation',
    icon: GraduationCap,
  },
  {
    label: 'Location',
    value: profile.location,
    icon: MapPin,
  },
  {
    label: 'Languages',
    value: profile.languages.join(' · '),
    icon: Languages,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="portfolio-section">
      <SectionHeading
        eyebrow="A LITTLE ABOUT ME"
        title="Engineering mindset. Software-first approach."
        description="A hybrid profile built around software engineering, biomedical systems and applied research."
      />

      <div className="about-grid">
        <div className="about-copy">
          <p>{profile.about}</p>

          <p>
            My interests include backend architecture, engineering applications,
            data acquisition, instrumentation and scientific software.
          </p>
        </div>

        <div className="about-information">
          {information.map((item) => {
            const Icon = item.icon;

            return (
              <div className="info-row" key={item.label}>
                <Icon size={19} />

                <div>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
