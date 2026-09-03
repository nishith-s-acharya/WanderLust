/**
 * Wikivoyage Travel MediaWiki API Service
 * Accesses hundreds of thousands of open-source city travel guides worldwide.
 * Free, open, no API key required.
 */

const USER_AGENT = 'WanderlustTravelApp/1.0 (https://wanderlust.travel)';

/**
 * Search Wikivoyage for destinations matching user input
 */
export async function searchWikivoyage(query, limit = 6) {
  if (!query || query.trim().length < 2) return [];

  const q = encodeURIComponent(query.trim());
  const url = `https://en.wikivoyage.org/w/api.php?action=opensearch&search=${q}&limit=${limit * 2}&format=json&origin=*`;

  try {
    const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
    if (!res.ok) return [];

    const [, titles, descriptions, links] = await res.json();
    if (!Array.isArray(titles)) return [];

    const results = [];
    for (let i = 0; i < titles.length && results.length < limit; i++) {
      const title = titles[i];
      // Filter out sub-districts (e.g. "Paris/1st arrondissement") and meta pages
      if (
        !title.includes('/') &&
        !title.includes(':') &&
        !title.toLowerCase().includes('itinerary') &&
        !title.toLowerCase().includes('airport') &&
        !title.toLowerCase().includes('phrasebook')
      ) {
        results.push({
          title,
          description: descriptions[i] || '',
          url: links[i] || `https://en.wikivoyage.org/wiki/${encodeURIComponent(title)}`
        });
      }
    }
    return results;
  } catch (error) {
    console.warn('Wikivoyage search error:', error.message);
    return [];
  }
}

/**
 * Fetch verified destination summary, coordinates, and thumbnail from Wikivoyage
 */
export async function fetchWikivoyageSummary(title) {
  if (!title) return null;

  const url = `https://en.wikivoyage.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;

  try {
    const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
    if (!res.ok) {
      // Fallback to Wikipedia summary if not on Wikivoyage
      const wikiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
      const wikiRes = await fetch(wikiUrl, { headers: { 'User-Agent': USER_AGENT } });
      if (!wikiRes.ok) return null;
      const wikiData = await wikiRes.json();
      return {
        title: wikiData.title,
        description: wikiData.description || '',
        extract: wikiData.extract || '',
        coordinates: wikiData.coordinates ? { lat: wikiData.coordinates.lat, lng: wikiData.coordinates.lon } : null,
        thumbnail: wikiData.thumbnail?.source || null,
        source: 'Wikipedia'
      };
    }

    const data = await res.json();
    return {
      title: data.title,
      description: data.description || '',
      extract: data.extract || '',
      coordinates: data.coordinates ? { lat: data.coordinates.lat, lng: data.coordinates.lon } : null,
      thumbnail: data.thumbnail?.source || null,
      source: 'Wikivoyage'
    };
  } catch (error) {
    console.warn('Wikivoyage summary fetch error:', error.message);
    return null;
  }
}

/**
 * Search Wikipedia Pageimages for any place, landmark, temple, or city
 * Returns direct high-res image URL or null if no page/image exists
 */
export async function searchWikipediaImage(query) {
  if (!query || !query.trim()) return null;
  const q = encodeURIComponent(query.trim());
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&piprop=original|thumbnail&pithumbsize=1200&generator=search&gsrsearch=${q}&gsrlimit=1&origin=*`;

  try {
    const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
    if (!res.ok) return null;
    const data = await res.json();
    const pages = data.query?.pages;
    if (!pages) return null;
    const page = Object.values(pages)[0];
    return page?.thumbnail?.source || page?.original?.source || null;
  } catch (err) {
    console.warn('Wikipedia image search error:', err.message);
    return null;
  }
}

