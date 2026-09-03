import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import { MapPin, ArrowRight } from 'lucide-react';
import destinations from '../data/destinations';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import './FeaturedCarousel.css';

import { getDestinationFallback } from '../utils/fallbackImages';

// Pick 8 featured destinations
const FEATURED = destinations.slice(0, 8);


export default function FeaturedCarousel() {
  return (
    <div className="featured-carousel">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 2.5,
          slideShadows: false,
        }}
        centeredSlides
        slidesPerView="auto"
        spaceBetween={24}
        autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation
        loop
        grabCursor
        className="featured-carousel__swiper"
      >
        {FEATURED.map((dest) => (
          <SwiperSlide key={dest.id} className="featured-carousel__slide">
            <Link to={`/destination/${dest.id}`} className="featured-carousel__card">
              <div className="featured-carousel__img-wrap">
                <img
                  src={getDestinationFallback(dest)}
                  alt={dest.name}
                  className="featured-carousel__img"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80';
                  }}
                />
                <div className="featured-carousel__img-overlay" />
              </div>


              <div className="featured-carousel__content">
                <span className="tag featured-carousel__continent">{dest.continent}</span>
                <h3 className="featured-carousel__name">{dest.name}</h3>
                <p className="featured-carousel__location">
                  <MapPin size={14} />
                  {dest.country}
                </p>
                <p className="featured-carousel__tagline">{dest.tagline}</p>
                <div className="featured-carousel__cta">
                  <span>Explore</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
