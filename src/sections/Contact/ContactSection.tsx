import { ArrowUpRight, Download, Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

import { profile } from '../../data/profile';

export function ContactSection() {
  return (
    <section id="contact" className="portfolio-section">
      <div className="contact-panel">
        <div className="contact-content">
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h2>Let's build something meaningful together.</h2>

          <p>
            I am interested in software engineering roles and projects involving
            backend systems, data and engineering applications.
          </p>

          <div className="contact-location">
            <MapPin size={16} />
            {profile.location}
          </div>
        </div>

        <a href={`mailto:${profile.email}`} className="button contact-button">
          Contact me
          <ArrowUpRight size={18} />
        </a>
      </div>

      <div className="contact-links">
        <a href="/documents/cv-en.pdf" download="Angel_David_Nunez_CV_EN.pdf">
          <Download size={18} />
          Download English CV
        </a>

        <a href="/documents/cv-es.pdf" download="Angel_David_Nunez_CV_ES.pdf">
          <Download size={18} />
          Descargar CV en español
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
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/angel-david-n%C3%BA%C3%B1ez-paredes-03918b372/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={18} />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
