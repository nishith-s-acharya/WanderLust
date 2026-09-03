import { useState, useEffect } from 'react';
import { Link, useLocation as useRouterLocation } from 'react-router-dom';
import { Mountain, Menu, X } from 'lucide-react';
import { getLenis } from '../hooks/useSmoothScroll';
import ThemeToggle from './ThemeToggle';

import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const routerLocation = useRouterLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [routerLocation]);

  const handleNavClick = (e, targetId) => {
    if (routerLocation.pathname === '/' || routerLocation.pathname === '') {
      e.preventDefault();
      setMenuOpen(false);
      const el = document.getElementById(targetId);
      if (el) {
        const lenis = getLenis();
        if (lenis) {
          lenis.scrollTo(el, { offset: -90, duration: 1.1 });
        } else {
          const y = el.getBoundingClientRect().top + window.scrollY - 90;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <nav className="navbar__inner container" aria-label="Main navigation">
        <Link to="/" className="navbar__logo" aria-label="Wanderlust Home">
          <Mountain size={24} strokeWidth={2.5} />
          <span className="navbar__wordmark">Wanderlust</span>
        </Link>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <Link to="/" className="navbar__link btn-ghost">Home</Link>
          <a
            href="/#destinations"
            onClick={(e) => handleNavClick(e, 'destinations')}
            className="navbar__link btn-ghost"
          >
            Explore
          </a>
          <a
            href="/#weather"
            onClick={(e) => handleNavClick(e, 'weather')}
            className="navbar__link btn-ghost"
          >
            Weather
          </a>
        </div>

        <div className="navbar__actions">
          <ThemeToggle />
          <a
            href="/#destinations"
            onClick={(e) => handleNavClick(e, 'destinations')}
            className="btn-primary navbar__cta"
          >
            Plan a Trip
          </a>
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="navbar__mobile-menu">
          <Link to="/" className="navbar__mobile-link">Home</Link>
          <a
            href="/#destinations"
            onClick={(e) => handleNavClick(e, 'destinations')}
            className="navbar__mobile-link"
          >
            Explore
          </a>
          <a
            href="/#weather"
            onClick={(e) => handleNavClick(e, 'weather')}
            className="navbar__mobile-link"
          >
            Weather
          </a>
          <ThemeToggle showLabel className="theme-toggle--with-label" />
          <a
            href="/#destinations"
            onClick={(e) => handleNavClick(e, 'destinations')}
            className="btn-primary navbar__mobile-cta"
          >
            Plan a Trip
          </a>
        </div>
      )}
    </header>
  );
}

