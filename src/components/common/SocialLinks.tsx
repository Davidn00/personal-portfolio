import { Mail, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

import { socialLinks } from '../../data/profile';

export function SocialLinks() {
  return (
    <div className="social-links">
      {socialLinks.map((link) => {
        const Icon =
          link.label === 'GitHub'
            ? FaGithub
            : link.label === 'LinkedIn'
              ? FaLinkedin
              : Mail;

        return (
          <a
            key={link.label}
            href={link.url}
            target={link.url.startsWith('mailto:') ? undefined : '_blank'}
            rel={
              link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'
            }
          >
            <Icon size={16} />
            <span>{link.label}</span>
            {link.label !== 'Email' && <ExternalLink size={12} />}
          </a>
        );
      })}
    </div>
  );
}
