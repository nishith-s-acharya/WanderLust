import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Globe, Coins, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getDestinationById } from '../data/destinations';
import { fetchDynamicDestination } from '../services/destinationFetcher';
import { useWeather } from '../hooks/useWeather';
import { searchPhotos } from '../services/unsplashApi';
import { getDestinationFallback } from '../utils/fallbackImages';

import WeatherWidget from '../components/WeatherWidget';
import FamousPlaceCard from '../components/FamousPlaceCard';
import ItineraryView from '../components/ItineraryView';
import ChatBot from '../components/ChatBot';
import './DestinationPage.css';

gsap.registerPlugin(ScrollTrigger);

export default function DestinationPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [destination, setDestination] = useState(() => getDestinationById(id));
  const [destLoading, setDestLoading] = useState(false);

  const [heroImage, setHeroImage] = useState(() => destination ? { url: destination.wikivoyageThumbnail || getDestinationFallback(destination) } : null);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [itinerary, setItinerary] = useState(null);
  const [itineraryLoading, setItineraryLoading] = useState(false);
  const [itineraryError, setItineraryError] = useState(null);
  const [days, setDays] = useState(3);

  useEffect(() => {
    const existing = getDestinationById(id);
    if (existing) {
      setDestination(existing);
    } else if (id) {
      setDestLoading(true);
      fetchDynamicDestination(id)
        .then(newDest => {
          if (newDest) setDestination(newDest);
        })
        .catch(() => {})
        .finally(() => setDestLoading(false));
    }
  }, [id]);

  const { weather, loading: weatherLoading, error: weatherError, retry: weatherRetry } = useWeather(
    destination?.coordinates?.lat,
    destination?.coordinates?.lng
  );

  // Refs for GSAP scroll animations
  const overviewRef = useRef(null);
  const placesGridRef = useRef(null);
  const itineraryRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (destination) {
      const fallbackUrl = destination.wikivoyageThumbnail || getDestinationFallback(destination);
      setHeroImage({ url: fallbackUrl });

      searchPhotos(`${destination.name} ${destination.country} travel landmark`, 1)
        .then(photos => {
          if (photos.length > 0) {
            setHeroImage(photos[0]);
          }
        })
        .catch(() => {});
    }
  }, [destination]);


  // GSAP scroll animations — run after destination loads
  useEffect(() => {
    if (!destination) return;

    const ctx = gsap.context(() => {
      // Overview section
      if (overviewRef.current) {
        gsap.fromTo(overviewRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.15,
            scrollTrigger: { trigger: overviewRef.current, start: 'top 82%', once: true }
          }
        );
      }

      // Famous places cards stagger
      if (placesGridRef.current) {
        gsap.fromTo(placesGridRef.current.querySelectorAll('.famous-place-card'),
          { opacity: 0, y: 50, scale: 0.96 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.65, ease: 'power3.out', stagger: 0.12,
            scrollTrigger: { trigger: placesGridRef.current, start: 'top 82%', once: true }
          }
        );
      }

      // Itinerary section
      if (itineraryRef.current) {
        gsap.fromTo(itineraryRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: itineraryRef.current, start: 'top 85%', once: true }
          }
        );
      }
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [destination]);

  if (destLoading) {
    return (
      <main className="destination-page__not-found">
        <div className="container">
          <div className="card" style={{ textAlign: 'center', padding: '100px 40px', marginTop: '120px' }}>
            <div className="destination-grid__spinner" style={{ width: '44px', height: '44px', margin: '0 auto 24px', borderWidth: '3px', borderTopColor: 'var(--color-ember)' }} />
            <h2>Synthesizing Destination with AI</h2>
            <p style={{ color: 'var(--color-obsidian-60)', margin: '16px 0 0' }}>
              Resolving coordinates, discovering landmarks, and pulling real-time weather for {id?.replace(/-/g, ' ')}...
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (!destination) {
    return (
      <main className="destination-page__not-found">
        <div className="container">
          <div className="card" style={{ textAlign: 'center', padding: '80px 40px', marginTop: '120px' }}>
            <h2>Destination Not Found</h2>
            <p style={{ color: 'var(--color-obsidian-50)', margin: '16px 0 32px' }}>
              We couldn't find the destination you're looking for.
            </p>
            <Link to="/" className="btn-primary">Back to Home</Link>
          </div>
        </div>
      </main>
    );
  }


  const handleGenerateItinerary = async () => {
    setItineraryLoading(true);
    setItineraryError(null);
    try {
      const result = await generateItinerary(destination, days, destination.tags);
      setItinerary(result);
    } catch (err) {
      setItineraryError(err.message);
    } finally {
      setItineraryLoading(false);
    }
  };

  return (
    <main className="destination-page">
      {/* Hero Banner */}
      <section className="destination-page__hero">
        <div className="destination-page__hero-bg">
          <img
            src={heroImage?.url || destination.wikivoyageThumbnail || getDestinationFallback(destination)}
            alt={`${destination.name}, ${destination.country}`}
            className={`destination-page__hero-image ${heroLoaded ? 'destination-page__hero-image--loaded' : ''}`}
            onLoad={() => setHeroLoaded(true)}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = getDestinationFallback(destination);
              setHeroLoaded(true);
            }}
          />
          <div className="destination-page__hero-overlay" />
          <div className="destination-page__hero-halftone" aria-hidden="true" />
        </div>


        <div className="destination-page__hero-content container">
          <button className="destination-page__back" onClick={() => navigate(-1)}>
            <ArrowLeft size={20} /> Back
          </button>

          <div className="destination-page__hero-text">
            <span className="tag">{destination.continent}</span>
            <h1 className="destination-page__title">{destination.name}</h1>
            <p className="destination-page__country">
              <MapPin size={18} /> {destination.country}
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container">
          <div ref={overviewRef} className="destination-page__overview">
            <div className="destination-page__info">
              <p className="destination-page__tagline">{destination.tagline}</p>
              <p className="destination-page__description">{destination.description}</p>

              <div className="destination-page__facts">
                <div className="destination-page__fact card">
                  <Calendar size={20} className="destination-page__fact-icon" />
                  <div>
                    <span className="destination-page__fact-label">Best Time to Visit</span>
                    <span className="destination-page__fact-value">{destination.bestTimeToVisit}</span>
                  </div>
                </div>
                <div className="destination-page__fact card">
                  <Globe size={20} className="destination-page__fact-icon" />
                  <div>
                    <span className="destination-page__fact-label">Language</span>
                    <span className="destination-page__fact-value">{destination.language}</span>
                  </div>
                </div>
                <div className="destination-page__fact card">
                  <Coins size={20} className="destination-page__fact-icon" />
                  <div>
                    <span className="destination-page__fact-label">Currency</span>
                    <span className="destination-page__fact-value">{destination.currency}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="destination-page__weather-col">
              <WeatherWidget
                weather={weather}
                loading={weatherLoading}
                error={weatherError}
                onRetry={weatherRetry}
                compact
                cityOverride={destination.name}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Famous Places */}
      <section className="section">
        <div className="container">
          <h2 className="destination-page__section-title">
            Famous Places in {destination.name}
          </h2>
          <p className="destination-page__section-subtitle">
            {destination.famousPlaces.length} must-visit landmarks and experiences
          </p>

          <div ref={placesGridRef} className="destination-page__places-grid">
            {destination.famousPlaces.map((place, index) => (
              <FamousPlaceCard
                key={place.name}
                place={place}
                destinationName={destination.name}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary Planner */}
      <section className="section" id="itinerary-section" ref={itineraryRef}>
        <div className="container">
          <div className="destination-page__itinerary-header">
            <div>
              <h2 className="destination-page__section-title">
                Plan Your Trip
              </h2>
              <p className="destination-page__section-subtitle">
                Generate a personalized day-by-day itinerary with AI
              </p>
            </div>

            <div className="destination-page__itinerary-controls">
              <div className="destination-page__days-selector">
                <label htmlFor="days-select" className="destination-page__days-label">Days:</label>
                <select
                  id="days-select"
                  className="destination-page__days-input"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                >
                  {[1, 2, 3, 4, 5, 6, 7].map(d => (
                    <option key={d} value={d}>{d} {d === 1 ? 'day' : 'days'}</option>
                  ))}
                </select>
              </div>

              <button
                className="btn-primary destination-page__generate-btn"
                onClick={handleGenerateItinerary}
                disabled={itineraryLoading}
              >
                <Sparkles size={18} />
                {itineraryLoading ? 'Generating...' : 'Generate Itinerary'}
              </button>
            </div>
          </div>

          <ItineraryView
            itinerary={itinerary}
            destination={destination}
            loading={itineraryLoading}
            error={itineraryError}
            onRetry={handleGenerateItinerary}
          />
        </div>
      </section>

      <ChatBot destinationContext={`${destination.name}, ${destination.country}`} />
    </main>
  );
}
