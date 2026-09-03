/**
 * Image Resolver Service — Multi-Tier Authentic Travel Photography Resolver
 * Guarantees that:
 * 1. Verified destination thumbnails (e.g. Wikipedia / Wikivoyage) are NEVER overwritten by generic queries.
 * 2. Famous landmarks (Taj Mahal, Eiffel Tower, Big Ben, Colosseum) are NEVER hijacked as photos for other cities.
 * 3. Specific Wikipedia / Wikimedia Commons photos are retrieved for regional landmarks and cities when Unsplash lacks them.
 * 4. Ambient, neutral category photography is used when an entity has no photographic record, avoiding false landmark attributions.
 */

import { searchPhotos } from './unsplashApi.js';
import { searchWikipediaImage } from './wikivoyageApi.js';
import { getDestinationFallback, getPlaceFallback } from '../utils/fallbackImages.js';

// In-memory resolution cache to prevent repeat requests
const imageResolutionCache = new Map();

// Known famous world monument signatures to prevent false cross-city hijack
const FAMOUS_LANDMARKS = [
  { match: /taj\s*mahal/i, allowedIn: /agra/i },
  { match: /eiffel\s*tower/i, allowedIn: /paris/i },
  { match: /colosseum|coliseo/i, allowedIn: /rome|roma/i },
  { match: /big\s*ben|tower\s*bridge/i, allowedIn: /london/i },
  { match: /statue\s*of\s*liberty|empire\s*state/i, allowedIn: /new\s*york/i },
  { match: /hawa\s*mahal|amber\s*fort/i, allowedIn: /jaipur/i },
  { match: /fushimi\s*inari|kinkaku/i, allowedIn: /kyoto/i },
  { match: /burj\s*khalifa|burj\s*al\s*arab/i, allowedIn: /dubai/i },
  { match: /machu\s*picchu/i, allowedIn: /machu\s*picchu|peru|cusco/i },
  { match: /pyramid\s*of\s*giza|great\s*sphinx/i, allowedIn: /cairo|giza|egypt/i }
];

/**
 * Checks if a candidate photo is a hijacked photo of a different famous world monument
 */
function isHijackedPhoto(photo, targetContext) {
  if (!photo) return false;
  const text = `${photo.alt || ''} ${photo.description || ''} ${photo.url || ''}`.toLowerCase();

  for (const { match, allowedIn } of FAMOUS_LANDMARKS) {
    if (match.test(text)) {
      // If the photo contains this famous landmark, verify target destination/context actually is that place
      if (!allowedIn.test(targetContext)) {
        return true; // Hijacked! Reject this photo
      }
    }
  }
  return false;
}

/**
 * Resolve the most authentic, high-resolution image for a destination
 */
export async function resolveDestinationImage(destination) {
  if (!destination) return getDestinationFallback(null);

  // 1. If destination already has an authentic verified image, prioritize it
  if (destination.wikivoyageThumbnail) {
    return {
      url: destination.wikivoyageThumbnail,
      urlSmall: destination.wikivoyageThumbnail,
      alt: `${destination.name}, ${destination.country}`,
      source: 'Wikipedia / Wikivoyage'
    };
  }

  if (destination.image) {
    return {
      url: destination.image,
      urlSmall: destination.image,
      alt: `${destination.name}, ${destination.country}`,
      source: 'Curated'
    };
  }

  const cacheKey = `dest-${destination.id || destination.name}`;
  if (imageResolutionCache.has(cacheKey)) {
    return imageResolutionCache.get(cacheKey);
  }

  // 2. Query Wikipedia / Wikimedia Commons directly for this city name
  try {
    const wikiImg = await searchWikipediaImage(destination.name);
    if (wikiImg) {
      const result = {
        url: wikiImg,
        urlSmall: wikiImg,
        alt: `${destination.name}, ${destination.country}`,
        source: 'Wikimedia Commons'
      };
      imageResolutionCache.set(cacheKey, result);
      return result;
    }
  } catch {
    // continue to next tier
  }

  // 3. Search Unsplash ONLY by city name (do NOT append "India travel landmark" or country generic tags)
  try {
    const photos = await searchPhotos(destination.name, 2);
    if (photos && photos.length > 0) {
      const candidate = photos[0];
      if (!isHijackedPhoto(candidate, destination.name)) {
        imageResolutionCache.set(cacheKey, candidate);
        return candidate;
      }
    }
  } catch {
    // continue to fallback
  }

  // 4. Safe neutral fallback
  const fallback = {
    url: getDestinationFallback(destination),
    urlSmall: getDestinationFallback(destination),
    alt: `${destination.name}, ${destination.country}`,
    source: 'Fallback'
  };
  imageResolutionCache.set(cacheKey, fallback);
  return fallback;
}

/**
 * Resolve the most authentic image for a landmark or famous place
 */
export async function resolvePlaceImage(place, destinationName = '', destinationCountry = '') {
  if (!place) return { url: getPlaceFallback(null, null), urlSmall: getPlaceFallback(null, null) };

  if (place.image) {
    return {
      url: place.image,
      urlSmall: place.image,
      alt: `${place.name} in ${destinationName}`,
      source: 'Curated'
    };
  }

  const cacheKey = `place-${place.name}-${destinationName}`;
  if (imageResolutionCache.has(cacheKey)) {
    return imageResolutionCache.get(cacheKey);
  }

  const contextStr = `${destinationName} ${destinationCountry}`.trim();

  // 1. Query Wikipedia / Wikimedia for this specific place (e.g. "Glass House Davanagere" or "Anjaneya Temple Davangere")
  try {
    const specificWikiImg = await searchWikipediaImage(`${place.name} ${destinationName}`);
    if (specificWikiImg) {
      const result = {
        url: specificWikiImg,
        urlSmall: specificWikiImg,
        alt: `${place.name} in ${destinationName}`,
        source: 'Wikimedia Commons'
      };
      imageResolutionCache.set(cacheKey, result);
      return result;
    }

    // Try place name alone
    const placeOnlyWikiImg = await searchWikipediaImage(place.name);
    if (placeOnlyWikiImg) {
      const result = {
        url: placeOnlyWikiImg,
        urlSmall: placeOnlyWikiImg,
        alt: `${place.name} in ${destinationName}`,
        source: 'Wikimedia Commons'
      };
      imageResolutionCache.set(cacheKey, result);
      return result;
    }
  } catch {
    // continue to Unsplash
  }

  // 2. Query Unsplash with place name and city
  try {
    const photos = await searchPhotos(`${place.name} ${destinationName}`, 2);
    if (photos && photos.length > 0) {
      const candidate = photos[0];
      if (!isHijackedPhoto(candidate, contextStr)) {
        imageResolutionCache.set(cacheKey, candidate);
        return candidate;
      }
    }
  } catch {
    // continue
  }

  // 3. Fall back to contextual neutral fallback
  const fallbackUrl = getPlaceFallback(place, { name: destinationName });
  const result = {
    url: fallbackUrl,
    urlSmall: fallbackUrl,
    alt: `${place.name} in ${destinationName}`,
    source: 'Category Fallback'
  };
  imageResolutionCache.set(cacheKey, result);
  return result;
}
