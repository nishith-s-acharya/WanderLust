import { useState, useEffect } from 'react';
import { Lightbulb } from 'lucide-react';
import { resolvePlaceImage } from '../services/imageResolver';
import { getPlaceFallback } from '../utils/fallbackImages';
import './FamousPlaceCard.css';

export default function FamousPlaceCard({ place, destinationName, index = 0 }) {
  const fallbackUrl = place?.image || getPlaceFallback(place, { name: destinationName });
  const [image, setImage] = useState(() => ({
    urlSmall: fallbackUrl,
    alt: `${place.name} in ${destinationName}`
  }));
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (place?.image) {
      setImage({
        urlSmall: place.image,
        alt: `${place.name} in ${destinationName}`
      });
      return;
    }

    let isMounted = true;
    resolvePlaceImage(place, destinationName)
      .then(resolved => {
        if (isMounted && resolved) {
          setImage(resolved);
        }
      })
      .catch(() => {
        if (isMounted) {
          setImage({ urlSmall: fallbackUrl, alt: `${place.name} in ${destinationName}` });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [place, destinationName, fallbackUrl]);


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
