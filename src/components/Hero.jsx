import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Play, Pause, SkipForward } from 'lucide-react';
import gsap from 'gsap';

import { getAllDestinations } from '../data/destinations';
import './Hero.css';

const HERO_VIDEOS = [
  {
    id: 'balloons',
    label: 'Cappadocia Adventure',
    url: 'https://videos.pexels.com/video-files/3015510/3015510-hd_1920_1080_24fps.mp4',
    poster: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=1920&q=80'
  },
  {
    id: 'alps',
    label: 'Alpine Fjord',
    url: 'https://videos.pexels.com/video-files/1851190/1851190-hd_1920_1080_25fps.mp4',
    poster: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&q=80'
  },
  {
    id: 'ocean',
    label: 'Ocean Cliffs & Waves',
    url: 'https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4',
    poster: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80'
  }
];

export default function Hero() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const videoWrapRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const actionsRef = useRef(null);
  const statsRef = useRef(null);
  const scrollRef = useRef(null);

  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const currentVideo = HERO_VIDEOS[activeVideoIndex];
  const totalDestinations = getAllDestinations().length;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85;
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;

      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  }, [activeVideoIndex]);

  useEffect(() => {
    // GSAP entrance timeline & parallax
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl
        .fromTo(labelRef.current,
          { opacity: 0, y: 20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, delay: 0.3 }
        )
        .fromTo(titleRef.current,
          { opacity: 0, y: 60, skewY: 2 },
          { opacity: 1, y: 0, skewY: 0, duration: 1 },
          '-=0.3'
        )
        .fromTo(subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(actionsRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(statsRef.current.children,
          { opacity: 0, y: 30, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1 },
          '-=0.3'
        )
        .fromTo(scrollRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.2'
        );

      // Parallax scroll effect on hero background video
      if (videoWrapRef.current) {
        gsap.to(videoWrapRef.current, {
          yPercent: 25,
          scale: 1.08,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);


  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const nextScene = () => {
    setIsVideoLoaded(false);
    setActiveVideoIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
  };

  const scrollToDestinations = () => {
    const el = document.getElementById('destinations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="hero" aria-label="Welcome to Wanderlust">
      {/* Background Video Layer */}
      <div ref={videoWrapRef} className="hero__video-wrap">
        <video

          key={currentVideo.id}
          ref={videoRef}
          className={`hero__video ${isVideoLoaded ? 'hero__video--loaded' : ''}`}
          autoPlay
          muted
          loop
          playsInline
          poster={currentVideo.poster}
          onLoadedData={() => setIsVideoLoaded(true)}
          aria-hidden="true"
        >
          <source src={currentVideo.url} type="video/mp4" />
        </video>
        <div className="hero__overlay" />
        <div className="hero__halftone" aria-hidden="true" />
      </div>

      {/* Floating Video Controller */}
      <div className="hero__video-controls">
        <div className="hero__video-badge">
          <span className="hero__video-dot" />
          <span className="hero__video-scene-name">{currentVideo.label}</span>
        </div>
        <button
          className="hero__video-btn"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          title={isPlaying ? 'Pause background video' : 'Play background video'}
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} />}
        </button>
        <button
          className="hero__video-btn"
          onClick={nextScene}
          aria-label="Next scene"
          title="Switch background scene"
        >
          <SkipForward size={14} />
        </button>
      </div>

      <div className="hero__content container">
        <div className="hero__text">
          <p ref={labelRef} className="hero__label tag" style={{ opacity: 0 }}>Explore the World</p>
          <h1 ref={titleRef} className="hero__title" style={{ opacity: 0 }}>
            Discover<br />
            <span className="hero__title-accent">Your Next</span><br />
            Adventure
          </h1>
          <p ref={subtitleRef} className="hero__subtitle" style={{ opacity: 0 }}>
            Explore breathtaking destinations, check real-time local weather, and plan your
            perfect journey with AI-powered itineraries.
          </p>
          <div ref={actionsRef} className="hero__actions" style={{ opacity: 0 }}>
            <button className="btn-primary hero__cta" onClick={scrollToDestinations}>
              Start Exploring
            </button>
            <a href="#weather" className="btn-secondary hero__cta-alt">
              Check Weather
            </a>
          </div>
        </div>

        <div ref={statsRef} className="hero__stats">
          <div className="hero__stat card hero__stat--ember" style={{ opacity: 0 }}>
            <span className="hero__stat-value">{totalDestinations}+</span>
            <span className="hero__stat-label">Destinations</span>
          </div>
          <div className="hero__stat card" style={{ opacity: 0 }}>
            <span className="hero__stat-value">160+</span>
            <span className="hero__stat-label">Famous Places</span>
          </div>
          <div className="hero__stat card" style={{ opacity: 0 }}>
            <span className="hero__stat-value">6</span>
            <span className="hero__stat-label">Continents</span>
          </div>
        </div>
      </div>

      <button
        ref={scrollRef}
        className="hero__scroll-indicator"
        onClick={scrollToDestinations}
        aria-label="Scroll to destinations"
        style={{ opacity: 0 }}
      >
        <span className="hero__scroll-text">Scroll to explore</span>
        <ChevronDown size={20} className="hero__scroll-icon" />
      </button>
    </section>
  );
}
