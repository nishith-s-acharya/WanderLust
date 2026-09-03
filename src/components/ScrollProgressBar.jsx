import { useState, useEffect } from 'react';
import './ScrollProgressBar.css';

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const scrolled = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
        setProgress(scrolled);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="scroll-progress-bar" aria-hidden="true">
      <div
        className="scroll-progress-bar__fill"
        style={{ width: `${progress}%` }}
      >
        <div className="scroll-progress-bar__glow" />
      </div>
    </div>
  );
}
