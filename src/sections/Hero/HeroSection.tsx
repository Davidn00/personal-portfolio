import {
  ArrowDown,
  ArrowUpRight,
  Download,
  MapPin,
  Code2,
  FlaskConical,
  Languages,
} from 'lucide-react';

import { profile } from '../../data/profile';
import { SocialLinks } from '../../components/common/SocialLinks';

export function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-eyebrow">SOFTWARE · ENGINEERING · RESEARCH</div>

        <h1>
          Building software
          <br />
          for <span>real-world</span>
          <br />
          engineering.
        </h1>

        <p className="hero-role">{profile.role}</p>

        <p className="hero-description">{profile.introduction}</p>

        <div className="hero-actions">
          <a
            href="/documents/cv-en.pdf"
            download="Angel_David_Nunez_CV_EN.pdf"
            className="button button-primary"
          >
            <Download size={17} />
            Download CV
          </a>

          <a
            href="/documents/cv-es.pdf"
            download="Angel_David_Nunez_CV_ES.pdf"
            className="button button-secondary"
          >
            <Download size={17} />
            CV en español
          </a>
          <a href="#projects" className="button button-primary">
            Explore projects
            <ArrowUpRight size={17} />
          </a>

          <a href="#contact" className="button button-secondary">
            Get in touch
          </a>
        </div>

        <SocialLinks />

        <a href="#about" className="scroll-indicator">
          <ArrowDown size={15} />
          Scroll to explore
        </a>
      </div>

      <aside className="profile-card">
        <div className="profile-card-top">
          <div className="profile-photo-container">
            <img
              src="/images/profile.webp"
              alt="Professional portrait of Angel David Núñez Paredes"
              className="profile-photo"
              width="160"
              height="160"
              fetchPriority="high"
            />
          </div>
          {/* <div className="avatar">ADN</div> */}

          <span className="availability">
            <span />
            {profile.availability}
          </span>
        </div>

        <h2>{profile.fullName}</h2>

        <div className="profile-location">
          <MapPin size={15} />
          {profile.location}
        </div>

        <div className="profile-metrics">
          <div>
            <Code2 size={19} />
            <strong>02</strong>
            <span>Featured platforms</span>
          </div>

          <div>
            <FlaskConical size={19} />
            <strong>03</strong>
            <span>Engineering areas</span>
          </div>

          <div>
            <Languages size={19} />
            <strong>ES/EN</strong>
            <span>Languages</span>
          </div>
        </div>
      </aside>
    </section>
  );
}
