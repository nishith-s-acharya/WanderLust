import { useState, useEffect, useRef } from 'react';
import { Search, X, Globe, Sparkles } from 'lucide-react';
import { searchWikivoyage } from '../services/wikivoyageApi';
import './SearchBar.css';

export default function SearchBar({
  value,
  onChange,
  onSelectSuggestion,
  placeholder = 'Search destinations, countries, or interests...'
}) {
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!value || value.trim().length < 2) {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const results = await searchWikivoyage(value, 5);
        setSuggestions(results);
        if (results.length > 0) {
          setIsOpen(true);
        }
      } catch {
        setSuggestions([]);
      }
    }, 280);

    return () => clearTimeout(timer);
  }, [value]);

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (cityName) => {
    onChange(cityName);
    setIsOpen(false);
    if (onSelectSuggestion) {
      onSelectSuggestion(cityName);
    }
  };

  return (
    <div className="search-bar" role="search" ref={containerRef}>
      <Search size={20} className="search-bar__icon" aria-hidden="true" />
      <input
        type="text"
        className="search-bar__input input-pill"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => {
          if (suggestions.length > 0) setIsOpen(true);
        }}
        placeholder={placeholder}
        aria-label="Search destinations"
        id="destination-search"
        autoComplete="off"
      />
      {value && (
        <button
          className="search-bar__clear"
          onClick={() => {
            onChange('');
            setSuggestions([]);
            setIsOpen(false);
          }}
          aria-label="Clear search"
          type="button"
        >
          <X size={18} />
        </button>
      )}

      {/* Wikivoyage Worldwide Autocomplete Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div className="search-bar__dropdown card" role="listbox">
          <div className="search-bar__dropdown-header">
            <Globe size={14} />
            <span>Worldwide Cities (Wikivoyage)</span>
          </div>
          <ul className="search-bar__suggestions-list">
            {suggestions.map((item) => (
              <li key={item.title}>
                <button
                  type="button"
                  className="search-bar__suggestion-item"
                  onClick={() => handleSelect(item.title)}
                >
                  <div className="search-bar__suggestion-content">
                    <span className="search-bar__suggestion-title">{item.title}</span>
                    {item.description && (
                      <span className="search-bar__suggestion-desc">{item.description}</span>
                    )}
                  </div>
                  <Sparkles size={14} className="search-bar__suggestion-sparkle" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
