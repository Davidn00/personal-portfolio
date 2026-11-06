import {
  Waves,
  ArrowUpRight,
  Microscope,
  BookOpen,
  ExternalLink,
  FileText,
} from 'lucide-react';

import { useTranslation } from 'react-i18next';

import { research, publications } from '../../data/research';

import { SectionHeading } from '../../components/common/SectionHeading';

import { Tag } from '../../components/common/Tag';

export function ResearchSection() {
  const { t } = useTranslation();

  return (
    <section id="research" className="portfolio-section">
      <SectionHeading
        eyebrow={t('research.eyebrow')}
        title={t('research.title')}
        description={t('research.description')}
      />

      <div className="research-grid">
        <div className="research-visual">
          <div className="research-orbit orbit-one" />
          <div className="research-orbit orbit-two" />

          <div className="research-visual-content">
            <Waves size={64} strokeWidth={1} />
            <span>{t('research.visualLabel')}</span>
          </div>

          <span className="research-visual-caption">
            {t('research.visualCaption')}
          </span>
        </div>

        <div className="research-content">
          <span className="section-eyebrow">{t('research.researchFocus')}</span>

          {research.map((item) => {
            const key = `research.items.${item.id}`;

            const topics = t(`${key}.topics`, {
              returnObjects: true,
            }) as string[];

            return (
              <div key={item.id}>
                <h3>{t(`${key}.title`)}</h3>

                <p>{t(`${key}.description`)}</p>

                <div className="research-topics">
                  {topics.map((topic) => (
                    <Tag key={topic}>{topic}</Tag>
                  ))}
                </div>
              </div>
            );
          })}

          <a href="#publications" className="research-link">
            {t('research.explore')}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div id="publications" className="publications-section">
        <div className="publications-heading">
          <div>
            <span className="section-eyebrow">
              {t('research.scientificOutput')}
            </span>

            <h3>{t('research.publications')}</h3>

            <p>{t('research.publicationDescription')}</p>
          </div>

          <BookOpen size={27} />
        </div>

        <div className="publications-list">
          {publications.map((publication) => (
            <article key={publication.id} className="publication-card">
              <div className="publication-icon">
                <FileText size={22} />
              </div>

              <div className="publication-content">
                <span className="publication-type">
                  {t('research.publicationType')}
                </span>

                <h4>{t('research.publication.title')}</h4>

                <strong>{t('research.publication.event')}</strong>

                <span className="publication-date">
                  {t('research.publication.date')}
                </span>

                <div className="publication-doi">
                  <span>{t('research.doi')}:</span>

                  <a
                    href={publication.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {publication.doi}
                  </a>
                </div>

                <div className="publication-actions">
                  <a
                    href={publication.publicationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="publication-link"
                  >
                    {t('research.viewPublication')}
                    <ExternalLink size={15} />
                  </a>

                  <a
                    href={publication.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="publication-link secondary"
                  >
                    {t('research.viewDoi')}
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="research-note">
        <Microscope size={19} />

        <p>{t('research.researchNote')}</p>

        <Waves size={19} aria-hidden="true" />
      </div>
    </section>
  );
}
