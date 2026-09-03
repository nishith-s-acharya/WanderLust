import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { searchPhotos } from '../services/unsplashApi';
import { getDestinationFallback } from '../utils/fallbackImages';
import './DestinationCard.css';

export default function DestinationCard({ destination, index = 0 }) {
  const fallbackUrl = destination.wikivoyageThumbnail || getDestinationFallback(destination);
  const [image, setImage] = useState(() => ({ urlSmall: fallbackUrl }));
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    searchPhotos(`${destination.name} ${destination.country} travel landmark`, 1)
      .then(photos => {
        if (photos.length > 0) {
          setImage(photos[0]);
        } else {
          setImage({ urlSmall: fallbackUrl });
        }
      })
      .catch(() => {
        setImage({ urlSmall: fallbackUrl });
      });
  }, [destination.name, destination.country, fallbackUrl]);

  return (
    <Link
      to={`/destination/${destination.id}`}
      className="destination-card card"
      style={{ animationDelay: `${index * 80}ms` }}
      id={`destination-${destination.id}`}
    >
      <div className="destination-card__image-wrap">
        <img
          src={image?.urlSmall || fallbackUrl}
          alt={image?.alt || `${destination.name}, ${destination.country}`}
          className={`destination-card__image ${imageLoaded ? 'destination-card__image--loaded' : ''}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = fallbackUrl;
            setImageLoaded(true);
          }}
        />
        <div className="destination-card__image-overlay" />
      </div>


      <div className="destination-card__body">
        <div className="destination-card__tags">
          <span className="tag">{destination.continent}</span>
          {destination.tags.slice(0, 2).map(tag => (
            <span key={tag} className="destination-card__tag-sm">{tag}</span>
          ))}
        </div>

        <h4 className="destination-card__name">{destination.name}</h4>

        <p className="destination-card__location">
          <MapPin size={14} />
          {destination.country}
        </p>

        <p className="destination-card__tagline">{destination.tagline}</p>

        <div className="destination-card__footer">
          <span className="destination-card__places-count">
            {destination.famousPlaces.length} famous places
          </span>
          <span className="destination-card__arrow">
            <ArrowRight size={18} />
          </span>
        </div>
      </div>
    </Link>
  );
}
