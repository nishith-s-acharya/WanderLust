import { useState, useMemo, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import LocationPicker from '../components/LocationPicker';
import WeatherWidget from '../components/WeatherWidget';
import SearchBar from '../components/SearchBar';
import FilterPills from '../components/FilterPills';
import DestinationGrid from '../components/DestinationGrid';
import FeaturedCarousel from '../components/FeaturedCarousel';
import { useLocation } from '../context/LocationContext';
import { useWeather } from '../hooks/useWeather';
import { filterDestinations, tagOptions } from '../data/destinations';
import './HomePage.css';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const [destVersion, setDestVersion] = useState(0);
  const { location } = useLocation();
  const { weather, loading: weatherLoading, error: weatherError, retry: weatherRetry } = useWeather(
    location?.lat, location?.lng
  );

  useEffect(() => {
    const handleDestAdded = () => setDestVersion(v => v + 1);
    window.addEventListener('wanderlust:destination_added', handleDestAdded);
    return () => window.removeEventListener('wanderlust:destination_added', handleDestAdded);
  }, []);

  const filteredDestinations = useMemo(() => {
    return filterDestinations(searchQuery, activeTag);
  }, [searchQuery, activeTag, destVersion]);


  // Refs for GSAP scroll animations
  const featuredTitleRef = useRef(null);
  const weatherSectionRef = useRef(null);
  const destHeaderRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Featured section title
    gsap.fromTo(featuredTitleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: {
          trigger: featuredTitleRef.current,
          start: 'top 85%',
          once: true,
        }
      }
    );

    // Weather section card reveal
    gsap.fromTo(weatherSectionRef.current?.querySelectorAll('.card'),
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.15,
        scrollTrigger: {
          trigger: weatherSectionRef.current,
          start: 'top 80%',
          once: true,
        }
      }
    );

    // Destinations heading
    gsap.fromTo(destHeaderRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: {
          trigger: destHeaderRef.current,
          start: 'top 85%',
          once: true,
        }
      }
    );

    // CTA section
    gsap.fromTo(ctaRef.current,
      { opacity: 0, scale: 0.97, y: 30 },
      {
        opacity: 1, scale: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 85%',
          once: true,
        }
      }
    );

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <main>
      <Hero />

      {/* ── Featured Destinations Carousel ── */}
      <section className="section home__featured-section">
        <div className="container">
          <div ref={featuredTitleRef} className="home__featured-header" style={{ opacity: 0 }}>
            <h2>Featured Destinations</h2>
            <p className="home__featured-subtitle">
              Handpicked places that will leave you breathless
            </p>
          </div>
        </div>
        <FeaturedCarousel />
      </section>

      {/* ── Weather & Location ── */}
      <section className="section" id="weather" ref={weatherSectionRef}>
        <div className="container">
          <div className="home__weather-section">
            <div className="home__weather-left">
              <LocationPicker />
            </div>
            <div className="home__weather-right">
              {location ? (
                <WeatherWidget
                  weather={weather}
                  loading={weatherLoading}
                  error={weatherError}
                  onRetry={weatherRetry}
                />
              ) : (
                <div className="home__weather-placeholder card">
                  <p className="home__weather-placeholder-text">
                    📍 Set your location above to see live weather conditions here.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── All Destinations ── */}
      <section className="section" id="destinations">
        <div className="container">
          <div ref={destHeaderRef} className="home__destinations-header" style={{ opacity: 0 }}>
            <h2>Explore Destinations</h2>
            <p className="home__destinations-subtitle">
              Discover {filteredDestinations.length} incredible destinations across 6 continents
            </p>
          </div>

          <div className="home__destinations-controls">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <FilterPills options={tagOptions} active={activeTag} onChange={setActiveTag} />
          </div>

          <DestinationGrid destinations={filteredDestinations} searchQuery={searchQuery} />
        </div>

      </section>

      {/* ── CTA ── */}
      <section className="home__cta-section">
        <div className="container">
          <div ref={ctaRef} className="home__cta-card" style={{ opacity: 0 }}>
            <div className="home__cta-halftone" aria-hidden="true" />
            <div className="home__cta-content">
              <h2 className="home__cta-title">Ready to Plan Your Next Adventure?</h2>
              <p className="home__cta-text">
                Click any destination above to explore famous places, check weather,
                and generate a personalized AI-powered itinerary.
              </p>
              <a href="#destinations" className="btn-primary home__cta-btn">
                Browse Destinations
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
