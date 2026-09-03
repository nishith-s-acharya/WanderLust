import { useState, useEffect } from 'react';
import { Link, useLocation as useRouterLocation } from 'react-router-dom';
import { Mountain, Menu, X } from 'lucide-react';
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

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <nav className="navbar__inner container" aria-label="Main navigation">
        <Link to="/" className="navbar__logo" aria-label="Wanderlust Home">
          <Mountain size={24} strokeWidth={2.5} />
          <span className="navbar__wordmark">Wanderlust</span>
        </Link>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <Link to="/" className="navbar__link btn-ghost">Home</Link>
          <a href="/#destinations" className="navbar__link btn-ghost">Explore</a>
          <a href="/#weather" className="navbar__link btn-ghost">Weather</a>
        </div>

        <div className="navbar__actions">
          <ThemeToggle />
          <a href="/#destinations" className="btn-primary navbar__cta">
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
          <a href="/#destinations" className="navbar__mobile-link">Explore</a>
          <a href="/#weather" className="navbar__mobile-link">Weather</a>
          <ThemeToggle showLabel className="theme-toggle--with-label" />
          <a href="/#destinations" className="btn-primary navbar__mobile-cta">Plan a Trip</a>
        </div>
      )}
    </header>
  );
}
