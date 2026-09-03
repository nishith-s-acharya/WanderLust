import { Mountain } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">
        <div className="footer__left">
          <Link to="/" className="footer__logo" aria-label="Wanderlust Home">
            <Mountain size={20} strokeWidth={2.5} className="footer__icon" />
            <span className="footer__wordmark">Wanderlust</span>
          </Link>
          <span className="footer__dot">•</span>
          <p className="footer__copyright">
            © {new Date().getFullYear()} Wanderlust
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <Link to="/" className="footer__link">Home</Link>
          <a href="/#destinations" className="footer__link">Destinations</a>
          <a href="/#weather" className="footer__link">Weather</a>
        </nav>

        <div className="footer__right">
          <span className="footer__credit">
            Crafted with Caldera Design System
          </span>
        </div>
      </div>
    </footer>
  );
}
