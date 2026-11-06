import { ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#home" className="brand">
            <span className="brand-mark">AD</span>
            <span>
              DAVID NÚÑEZ<span className="brand-dot">.</span>
            </span>
          </a>

          <p>Software engineering, biomedical instrumentation and research.</p>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/Davidn00"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={19} />
          </a>

          <a
            href="https://www.linkedin.com/in/angel-david-n%C3%BA%C3%B1ez-paredes-03918b372/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={19} />
          </a>

          <a href="mailto:angelnunez0008@gmail.com" aria-label="Email">
            <ArrowUpRight size={19} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Angel David Núñez Paredes.</p>
        <p>Designed &amp; developed with React and TypeScript.</p>
      </div>
    </footer>
  );
}
