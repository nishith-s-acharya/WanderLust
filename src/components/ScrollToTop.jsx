import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { scrollToTop } from '../hooks/useSmoothScroll';
import './ScrollToTop.css';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      if (docHeight > 0) {
        const scrolled = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
        setProgress(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const strokeDashoffset = 126 - (126 * progress) / 100;

  return (
    <button
      className={`scroll-to-top ${visible ? 'scroll-to-top--visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title={`Back to top (${Math.round(progress)}% scrolled)`}
    >
      <svg className="scroll-to-top__ring" width="46" height="46" viewBox="0 0 46 46">
        <circle
          className="scroll-to-top__ring-bg"
          cx="23"
          cy="23"
          r="20"
        />
        <circle
          className="scroll-to-top__ring-fill"
          cx="23"
          cy="23"
          r="20"
          style={{ strokeDashoffset }}
        />
      </svg>
      <span className="scroll-to-top__icon-wrap">
        <ArrowUp size={18} className="scroll-to-top__icon" />
      </span>
    </button>
  );
}
