import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const location = useLocation();
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
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={getNavigationHref(item.href)}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav-contact">
          Let's talk <ArrowUpRight size={15} />
        </a>
      </div>
    </header>
  );
}
