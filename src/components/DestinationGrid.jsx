import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Globe, Compass, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DestinationCard from './DestinationCard';
import { fetchDynamicDestination } from '../services/destinationFetcher.js';
import './DestinationGrid.css';

gsap.registerPlugin(ScrollTrigger);

const INITIAL_CARD_COUNT = 6;

export default function DestinationGrid({ destinations, searchQuery = '' }) {
  const navigate = useNavigate();
  const [customCity, setCustomCity] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatingCity, setGeneratingCity] = useState('');
  const [generateError, setGenerateError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_CARD_COUNT);
  const [prevFilterKey, setPrevFilterKey] = useState(() => `${searchQuery}-${destinations.length}`);

  // Reset pagination to minimal cards when search query or destination set changes
  const currentFilterKey = `${searchQuery}-${destinations.length}`;
  if (prevFilterKey !== currentFilterKey) {
    setPrevFilterKey(currentFilterKey);
    setVisibleCount(INITIAL_CARD_COUNT);
  }


  const handleDiscover = async (cityName) => {
    const target = cityName?.trim();
    if (!target) return;

    setIsGenerating(true);
    setGeneratingCity(target);
    setGenerateError(null);

    try {
      const newDest = await fetchDynamicDestination(target);
      if (newDest && newDest.id) {
        navigate(`/destination/${newDest.id}`);
      }
    } catch (err) {
      setGenerateError(err.message || 'Failed to discover destination. Please check the spelling.');
    } finally {
      setIsGenerating(false);
      setGeneratingCity('');
    }
  };

  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll('.destination-card');
    if (cards.length === 0) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.batch(cards, {
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            { opacity: 0, y: 30, scale: 0.98 },
            { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: 'power2.out', stagger: 0.06, overwrite: 'auto' }
          );
        },
        start: 'top 92%',
        once: true,
      });
    }, gridRef);

    return () => ctx.revert();
  }, [destinations, visibleCount]);


  // Zero search results view with AI Generator option
  if (!destinations || destinations.length === 0) {

    return (
      <div className="destination-grid__empty-container">
        <div className="destination-grid__empty card">
          <div className="destination-grid__empty-icon">
            <Sparkles size={40} className="destination-grid__empty-sparkle" />
          </div>
          <h3 className="destination-grid__empty-title">
            {searchQuery ? `Discover "${searchQuery}" with AI` : 'No destinations match your filters'}
          </h3>
          <p className="destination-grid__empty-text">
            {searchQuery
              ? `"${searchQuery}" isn't in our curated catalog yet. Let our AI geocode its coordinates, discover its famous landmarks, check current weather, and build a full destination guide!`
              : 'Try clearing your filters or generate any custom destination on Earth below.'}
          </p>

          {searchQuery && (
            <button
              className="btn-primary destination-grid__ai-btn"
              onClick={() => handleDiscover(searchQuery)}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <div className="destination-grid__spinner" />
                  <span>Discovering {generatingCity || searchQuery}...</span>
                </>
              ) : (
                <>
                  <Sparkles size={18} />
                  <span>Generate "{searchQuery}" with AI & Live Data</span>
                </>
              )}
            </button>
          )}

          {generateError && (
            <p className="destination-grid__error">{generateError}</p>
          )}
        </div>

        {/* Manual explorer input */}
        <div className="destination-grid__custom-bar card">
          <div className="destination-grid__custom-info">
            <Globe size={22} className="destination-grid__custom-icon" />
            <div>
              <h4 className="destination-grid__custom-title">Explore Any City on Earth</h4>
              <p className="destination-grid__custom-sub">
                Type any city or country (e.g. Vienna, Hanoi, Cusco, Berlin, Cartagena)
              </p>
            </div>
          </div>
          <form
            className="destination-grid__custom-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleDiscover(customCity);
            }}
          >
            <input
              type="text"
              className="destination-grid__custom-input input-pill"
              placeholder="Enter any destination..."
              value={customCity}
              onChange={(e) => setCustomCity(e.target.value)}
              disabled={isGenerating}
            />
            <button
              type="submit"
              className="btn-primary destination-grid__custom-btn"
              disabled={isGenerating || !customCity.trim()}
            >
              {isGenerating && generatingCity === customCity.trim() ? (
                <div className="destination-grid__spinner" />
              ) : (
                <>
                  <span>Discover</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const visibleDestinations = destinations.slice(0, visibleCount);
  const hasMore = visibleCount < destinations.length;
  const remainingCount = destinations.length - visibleCount;

  return (
    <div ref={gridRef} className="destination-grid-wrapper">
      <div className="destination-grid" role="list" aria-label="Destinations">
        {visibleDestinations.map((destination, index) => (
          <div key={destination.id} role="listitem">
            <DestinationCard destination={destination} index={index} />
          </div>
        ))}
      </div>

      {/* Minimal Cards Expansion Controls with Down Arrow */}
      {destinations.length > INITIAL_CARD_COUNT && (
        <div className="destination-grid__pagination">
          {hasMore ? (
            <button
              type="button"
              className="destination-grid__view-more-btn"
              onClick={() => setVisibleCount((prev) => Math.min(prev + 6, destinations.length))}
              aria-label="View more destination cards"
            >
              <div className="destination-grid__view-more-content">
                <span className="destination-grid__view-more-title">
                  View More Destinations
                </span>
                <span className="destination-grid__view-more-subtitle">
                  Showing {visibleCount} of {destinations.length} places (click to load {remainingCount > 6 ? 6 : remainingCount} more)
                </span>
              </div>
              <div className="destination-grid__arrow-pill">
                <ChevronDown size={20} className="destination-grid__arrow-down" />
              </div>
            </button>
          ) : (
            <button
              type="button"
              className="destination-grid__show-less-btn"
              onClick={() => {
                setVisibleCount(INITIAL_CARD_COUNT);
                document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
              }}
              aria-label="Show fewer destination cards"
            >
              <span>Show Fewer Destinations</span>
              <ChevronUp size={18} />
            </button>
          )}
        </div>
      )}


      {/* Dynamic Destination Discovery Bar at bottom of grid */}
      <div className="destination-grid__custom-bar card">
        <div className="destination-grid__custom-info">
          <Compass size={24} className="destination-grid__custom-icon" />
          <div>
            <h4 className="destination-grid__custom-title">Looking for Somewhere Else?</h4>
            <p className="destination-grid__custom-sub">
              Our AI & Live Data engine can synthesize any city in the world on demand.
            </p>
          </div>
        </div>
        <form
          className="destination-grid__custom-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleDiscover(customCity);
          }}
        >
          <input
            type="text"
            className="destination-grid__custom-input input-pill"
            placeholder="Type any city (e.g. Vienna, Berlin, Hanoi)..."
            value={customCity}
            onChange={(e) => setCustomCity(e.target.value)}
            disabled={isGenerating}
          />
          <button
            type="submit"
            className="btn-primary destination-grid__custom-btn"
            disabled={isGenerating || !customCity.trim()}
          >
            {isGenerating ? (
              <>
                <div className="destination-grid__spinner" />
                <span>Exploring {generatingCity}...</span>
              </>
            ) : (
              <>
                <Sparkles size={16} />
                <span>Discover</span>
              </>
            )}
          </button>
        </form>
        {generateError && (
          <p className="destination-grid__error">{generateError}</p>
        )}
      </div>
    </div>
  );
}
