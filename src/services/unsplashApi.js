const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const BASE_URL = 'https://api.unsplash.com';

const imageCache = new Map();

export async function searchPhotos(query, perPage = 6) {
  const cacheKey = `${query}-${perPage}`;
  const cached = imageCache.get(cacheKey);

  if (cached) {
    return cached;
  }

  if (!ACCESS_KEY || ACCESS_KEY === 'your_unsplash_access_key_here') {
    // Return placeholder images when no API key
    return generatePlaceholders(query, perPage);
  }

  try {
    const url = `${BASE_URL}/search/photos?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=landscape`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`
      }
    });

    if (!response.ok) {
      if (response.status === 403) {
        console.warn('Unsplash rate limit reached. Using placeholders.');
        return generatePlaceholders(query, perPage);
      }
      throw new Error(`Unsplash API error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      // Query was too specific. Try a simplified 2-word search
      const words = query.replace(/[^a-zA-Z0-9\s]/g, ' ').split(/\s+/).filter(w => w.length > 2);
      if (words.length > 2) {
        const simplified = words.slice(0, 2).join(' ');
        try {
          const fallbackRes = await fetch(`${BASE_URL}/search/photos?query=${encodeURIComponent(simplified)}&per_page=${perPage}&orientation=landscape`, {
            headers: { Authorization: `Client-ID ${ACCESS_KEY}` }
          });
          if (fallbackRes.ok) {
            const fallbackData = await fallbackRes.json();
            if (fallbackData.results?.length > 0) {
              const photos = fallbackData.results.map(formatPhoto);
              imageCache.set(cacheKey, photos);
              return photos;
            }
          }
        } catch {
          // ignore and fall through
        }
      }
      return generatePlaceholders(query, perPage);
    }

    const photos = data.results.map(formatPhoto);
    imageCache.set(cacheKey, photos);
    return photos;
  } catch (error) {
    console.error('Unsplash fetch error:', error);
    return generatePlaceholders(query, perPage);
  }
}

function formatPhoto(photo) {
  return {
    id: photo.id,
    url: photo.urls?.regular || photo.urls?.full,
    urlSmall: photo.urls?.small || photo.urls?.thumb,
    urlThumb: photo.urls?.thumb,
    alt: photo.alt_description || 'Travel destination',
    photographer: photo.user?.name || 'Unsplash',
    photographerUrl: photo.user?.links?.html || 'https://unsplash.com',
    blurHash: photo.blur_hash,
    color: photo.color || '#e2e2df'
  };
}

export async function getPhoto(query) {
  const photos = await searchPhotos(query, 1);
  return photos[0] || null;
}

function generatePlaceholders(query, count) {
  // Extract keywords to match theme
  const qLower = query.toLowerCase();
  let photoUrl = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80'; // default travel

  if (qLower.includes('jaipur') || qLower.includes('amber') || qLower.includes('hawa')) {
    photoUrl = 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80';
  } else if (qLower.includes('agra') || qLower.includes('taj')) {
    photoUrl = 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80';
  } else if (qLower.includes('varanasi') || qLower.includes('ganga') || qLower.includes('ghat')) {
    photoUrl = 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80';
  } else if (qLower.includes('kerala') || qLower.includes('backwater') || qLower.includes('munnar')) {
    photoUrl = 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80';
  } else if (qLower.includes('goa') || qLower.includes('beach') || qLower.includes('island')) {
    photoUrl = 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80';
  } else if (qLower.includes('mumbai') || qLower.includes('bombay')) {
    photoUrl = 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80';
  } else if (qLower.includes('temple') || qLower.includes('shrine')) {
    photoUrl = 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80';
  } else if (qLower.includes('mountain') || qLower.includes('alps') || qLower.includes('peak')) {
    photoUrl = 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80';
  } else if (qLower.includes('waterfall') || qLower.includes('lake')) {
    photoUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80';
  } else if (qLower.includes('museum') || qLower.includes('gallery')) {
    photoUrl = 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80';
  } else if (qLower.includes('palace') || qLower.includes('fort') || qLower.includes('castle')) {
    photoUrl = 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80';
  }

  const placeholders = [];
  for (let i = 0; i < count; i++) {
    placeholders.push({
      id: `fallback-${query}-${i}`,
      url: photoUrl,
      urlSmall: photoUrl,
      urlThumb: photoUrl,
      alt: `Photo related to ${query}`,
      photographer: 'Unsplash Community',
      photographerUrl: 'https://unsplash.com',
      blurHash: null,
      color: '#c4b5fd'
    });
  }
  return placeholders;
}

