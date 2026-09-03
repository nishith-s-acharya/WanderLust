import { useState, useEffect } from 'react';
import { Lightbulb } from 'lucide-react';
import { searchPhotos } from '../services/unsplashApi';
import { getPlaceFallback } from '../utils/fallbackImages';
import './FamousPlaceCard.css';

export default function FamousPlaceCard({ place, destinationName, index = 0 }) {
  const fallbackUrl = getPlaceFallback(place, { name: destinationName });
  const [image, setImage] = useState(() => ({ urlSmall: fallbackUrl }));
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    searchPhotos(`${place.name} ${destinationName}`, 1)
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
  }, [place.name, destinationName, fallbackUrl]);

  return (
    <article
      className="famous-place-card card"
      style={{ animationDelay: `${index * 100}ms` }}
      id={`place-${place.name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="famous-place-card__image-wrap">
        <img
          src={image?.urlSmall || fallbackUrl}
          alt={`${place.name} in ${destinationName}`}
          className={`famous-place-card__image ${imageLoaded ? 'famous-place-card__image--loaded' : ''}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = fallbackUrl;
            setImageLoaded(true);
          }}
        />
      </div>


      <div className="famous-place-card__body">
        <div className="famous-place-card__header">
          <span className="tag">{place.type}</span>
        </div>

        <h4 className="famous-place-card__name">{place.name}</h4>
        <p className="famous-place-card__description">{place.description}</p>

        {place.tip && (
          <div className="famous-place-card__tip">
            <Lightbulb size={16} className="famous-place-card__tip-icon" />
            <p className="famous-place-card__tip-text">{place.tip}</p>
          </div>
        )}
      </div>

      {image && image.photographer !== 'Unsplash' && (
        <div className="famous-place-card__credit">
          Photo by{' '}
          <a href={`${image.photographerUrl}?utm_source=wanderlust&utm_medium=referral`} target="_blank" rel="noopener noreferrer">
            {image.photographer}
          </a>
          {' '}on Unsplash
        </div>
      )}
    </article>
  );
}
