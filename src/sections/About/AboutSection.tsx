import {
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  Languages,
} from 'lucide-react';

import { useTranslation } from 'react-i18next';

import { SectionHeading } from '../../components/common/SectionHeading';

export function AboutSection() {
  const { t } = useTranslation();

  const information = [
    {
      label: t('about.focusLabel'),
      value: t('about.focusValue'),
      icon: BriefcaseBusiness,
    },
    {
      label: t('about.educationLabel'),
      value: t('about.educationValue'),
      icon: GraduationCap,
    },
    {
      label: t('about.locationLabel'),
      value: t('about.locationValue'),
      icon: MapPin,
    },
    {
      label: t('about.languagesLabel'),
      value: t('about.languagesValue'),
      icon: Languages,
    },
  ];

  return (
    <section id="about" className="portfolio-section">
      <SectionHeading
        eyebrow={t('about.eyebrow')}
        title={t('about.title')}
        description={t('about.description')}
      />

      <div className="about-grid">
        <div className="about-copy">
          <p>{t('about.paragraph1')}</p>

          <p>{t('about.paragraph2')}</p>
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
