import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

export default function ThemeToggle({ showLabel = false, className = '' }) {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      className={`theme-toggle ${isDark ? 'theme-toggle--dark' : 'theme-toggle--light'} ${className}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode (currently ${theme} mode)`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="theme-toggle__icon-track">
        <div className="theme-toggle__icon-wrap theme-toggle__icon-wrap--sun">
          <Sun size={18} className="theme-toggle__icon" />
        </div>
        <div className="theme-toggle__icon-wrap theme-toggle__icon-wrap--moon">
          <Moon size={18} className="theme-toggle__icon" />
        </div>
      </div>
      {showLabel && (
        <span className="theme-toggle__label">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
    </button>
  );
}
