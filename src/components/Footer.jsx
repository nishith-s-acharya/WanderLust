import { Mountain } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="Wanderlust Home">
              <Mountain size={24} strokeWidth={2.5} />
              <span className="footer__wordmark">Wanderlust</span>
            </Link>
            <p className="footer__tagline">
              Explore the world with real-time weather, curated destinations,
              and AI-powered trip planning.
            </p>
          </div>

          <div className="footer__divider-v divider-dotted-vertical" />

          <div className="footer__links-group">
            <h5 className="footer__links-title">Explore</h5>
            <nav aria-label="Footer explore links">
              <Link to="/" className="footer__link">Home</Link>
              <a href="/#destinations" className="footer__link">Destinations</a>
              <a href="/#weather" className="footer__link">Weather</a>
            </nav>
          </div>

          <div className="footer__divider-v divider-dotted-vertical" />

          <div className="footer__links-group">
            <h5 className="footer__links-title">APIs</h5>
            <nav aria-label="Footer API links">
              <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer" className="footer__link">OpenWeatherMap</a>
              <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer" className="footer__link">Unsplash</a>
              <a href="https://ai.google.dev/" target="_blank" rel="noopener noreferrer" className="footer__link">Google Gemini</a>
            </nav>
          </div>

          <div className="footer__divider-v divider-dotted-vertical" />

          <div className="footer__links-group">
            <h5 className="footer__links-title">Built With</h5>
            <nav aria-label="Footer tech links">
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="footer__link">React</a>
              <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer" className="footer__link">Vite</a>
              <a href="https://lucide.dev/" target="_blank" rel="noopener noreferrer" className="footer__link">Lucide Icons</a>
            </nav>
          </div>
        </div>

        <hr className="divider-dotted" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Wanderlust. Built as a front-end assignment.
          </p>
          <p className="footer__credit">
            Designed with the Caldera design system.
          </p>
        </div>
      </div>
    </footer>
  );
}
