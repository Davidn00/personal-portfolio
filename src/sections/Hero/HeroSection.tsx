import {
  ArrowDown,
  ArrowUpRight,
  Download,
  MapPin,
  Code2,
  FlaskConical,
  Languages,
} from 'lucide-react';

import { useTranslation } from 'react-i18next';

import { profile } from '../../data/profile';
import { SocialLinks } from '../../components/common/SocialLinks';
import { projects } from '../../data/projects';

export function HeroSection() {
  const { t, i18n } = useTranslation();

  const totalProjects = String(projects.length).padStart(2, '0');

  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en';

  const cvPath = `/documents/cv-${language}.pdf`;

  const cvFilename =
    language === 'es'
      ? 'Angel_David_Nunez_CV_ES.pdf'
      : 'Angel_David_Nunez_CV_EN.pdf';

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-eyebrow">{t('hero.eyebrow')}</div>

        <h1>
          {t('hero.headingStart')}
          <br />
          <span>{t('hero.headingHighlight')}</span>
          <br />
          {t('hero.headingEnd')}
        </h1>

        <p className="hero-role">{t('hero.role')}</p>

        <p className="hero-description">{t('hero.description')}</p>

        <div className="hero-actions">
          <a
            href={cvPath}
            download={cvFilename}
            className="button button-primary"
          >
            <Download size={17} />
            {t('hero.downloadCv')}
          </a>

          <a href="#projects" className="button button-secondary">
            {t('projects.title')}
            <ArrowUpRight size={17} />
          </a>

          <a href="#contact" className="button button-secondary">
            {t('hero.contact')}
          </a>
        </div>

        <SocialLinks />

        <a href="#about" className="scroll-indicator">
          <ArrowDown size={15} />
          {t('hero.scroll')}
        </a>
      </div>

      <aside className="profile-card">
        <div className="profile-card-top">
          <div className="profile-photo-container">
            <img
              src="/images/profile.webp"
              alt={profile.fullName}
              className="profile-photo"
              width="160"
              height="160"
              fetchPriority="high"
            />
          </div>

          <span className="availability">
            <span />
            {t('hero.available')}
          </span>
        </div>

        <h2>{profile.fullName}</h2>

        <div className="profile-location">
          <MapPin size={15} />
          {t('hero.location')}
        </div>

        <div className="profile-metrics">
          <div>
            <Code2 size={19} />
            <strong>{totalProjects}</strong>
            <span>{t('hero.metrics.software')}</span>
          </div>

          <div>
            <FlaskConical size={19} />
            <strong>03</strong>
            <span>{t('hero.metrics.instrumentation')}</span>
          </div>

          <div>
            <Languages size={19} />
            <strong>ES/EN</strong>
            <span>{t('hero.metrics.engineering')}</span>
          </div>
        </div>
      </aside>
    </section>
  );
}
