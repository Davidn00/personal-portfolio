import {
  Waves,
  ArrowUpRight,
  Microscope,
  BookOpen,
  ExternalLink,
  FileText,
} from 'lucide-react';

import { research, publications } from '../../data/research';

import { SectionHeading } from '../../components/common/SectionHeading';

import { Tag } from '../../components/common/Tag';

export function ResearchSection() {
  return (
    <section id="research" className="portfolio-section">
      <SectionHeading
        eyebrow="RESEARCH & SCIENTIFIC CONTRIBUTIONS"
        title="Research and Publications"
        description="My research interests connect biomedical instrumentation, optical sensing, experimental measurement systems and engineering applications."
      />

      {/* RESEARCH FOCUS */}

      <div className="research-grid">
        <div className="research-visual">
          <div className="research-orbit orbit-one" />

          <div className="research-orbit orbit-two" />

          <div className="research-visual-content">
            <Waves size={64} strokeWidth={1} />

            <span>FBG · OPTICAL SENSING</span>
          </div>

          <span className="research-visual-caption">
            FIBER BRAGG GRATING · OPTICAL INSTRUMENTATION
          </span>
        </div>

        <div className="research-content">
          <span className="section-eyebrow">RESEARCH FOCUS</span>

          {research.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="research-topics">
                {item.topics.map((topic) => (
                  <Tag key={topic}>{topic}</Tag>
                ))}
              </div>
            </div>
          ))}

          <a href="#publications" className="research-link">
            Explore publications
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* PUBLICATIONS */}

      <div id="publications" className="publications-section">
        <div className="publications-heading">
          <div>
            <span className="section-eyebrow">SCIENTIFIC OUTPUT</span>

            <h3>Publications</h3>

            <p>
              Scientific contributions and academic publications related to
              engineering and applied research.
            </p>
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
                <span className="publication-type">CONFERENCE PUBLICATION</span>

                <h4>{publication.title}</h4>

                <strong>{publication.event}</strong>

                <span className="publication-date">{publication.date}</span>

                <div className="publication-doi">
                  <span>DOI:</span>

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
                    Show publication
                    <ExternalLink size={15} />
                  </a>

                  <a
                    href={publication.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="publication-link secondary"
                  >
                    View DOI
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* RESEARCH NOTE */}

      <div className="research-note">
        <Microscope size={19} />

        <p>
          Research activities focus on optical instrumentation, sensor
          characterization, experimental measurements and engineering
          applications.
        </p>

        <ActivityIcon />
      </div>
    </section>
  );
}

function ActivityIcon() {
  return <Waves size={19} aria-hidden="true" />;
}
