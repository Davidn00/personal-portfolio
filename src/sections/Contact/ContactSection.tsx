import { ArrowUpRight, Download, Mail, MapPin } from 'lucide-react';

import { FaGithub, FaLinkedin } from 'react-icons/fa6';

import { useTranslation } from 'react-i18next';

import { profile } from '../../data/profile';

export function ContactSection() {
  const { t, i18n } = useTranslation();

  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en';

  const cvPath = `/documents/cv-${language}.pdf`;

  const cvFilename =
    language === 'es'
      ? 'Angel_David_Nunez_CV_ES.pdf'
      : 'Angel_David_Nunez_CV_EN.pdf';

  return (
    <section id="contact" className="portfolio-section">
      <div className="contact-panel">
        <div className="contact-content">
          <span className="contact-eyebrow">{t('contact.eyebrow')}</span>

          <h2>{t('contact.title')}</h2>

          <p>{t('contact.description')}</p>

          <div className="contact-location">
            <MapPin size={16} />
            {t('hero.location')}
          </div>
        </div>

        <a href={`mailto:${profile.email}`} className="button contact-button">
          {t('contact.button')}
          <ArrowUpRight size={18} />
        </a>
      </div>

      <div className="contact-links">
        <a href={cvPath} download={cvFilename}>
          <Download size={18} />
          {t('hero.downloadCv')}
        </a>

        <a href={`mailto:${profile.email}`}>
          <Mail size={18} />
          {profile.email}
        </a>

        <a
          href="https://github.com/Davidn00"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={18} />
          {t('contact.github')}
        </a>

        <a
          href="https://www.linkedin.com/in/angel-david-n%C3%BA%C3%B1ez-paredes-03918b372/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={18} />
          {t('contact.linkedin')}
        </a>
      </div>
    </section>
  );
}
