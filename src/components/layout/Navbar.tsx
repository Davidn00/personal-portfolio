import { useState } from 'react';

import { Menu, X, ArrowUpRight } from 'lucide-react';

import { Link, useLocation } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { ThemeSwitcher } from '../common/ThemeSwitcher';

const navigation = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'projects', href: '#projects' },
  { key: 'research', href: '#research' },
  { key: 'education', href: '#education' },
  { key: 'experience', href: '#experience' },
  { key: 'contact', href: '#contact' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const { t } = useTranslation();

  const closeMenu = () => setMenuOpen(false);

  const getNavigationHref = (href: string) =>
    location.pathname === '/' ? href : `/${href}`;

  return (
    <header className="site-header">
      <div className="nav-container">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-mark">AD</span>

          <span>
            DAVID NÚÑEZ<span className="brand-dot">.</span>
          </span>
        </Link>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={
            menuOpen ? t('navigation.closeMenu') : t('navigation.openMenu')
          }
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}
          aria-label={t('navigation.home')}
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={getNavigationHref(item.href)}
              onClick={closeMenu}
            >
              {t(`navigation.${item.key}`)}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <LanguageSwitcher />

          <ThemeSwitcher />

          <a
            href={getNavigationHref('#contact')}
            className="nav-contact"
            onClick={closeMenu}
          >
            {t('navigation.talk')}
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </header>
  );
}
