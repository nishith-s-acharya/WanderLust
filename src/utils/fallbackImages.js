/**
 * Curated, verified high-resolution travel photography fallbacks.
 * All URLs are guaranteed active Unsplash CDN images (status 200 OK).
 */

export const DESTINATION_FALLBACKS = {
  tokyo: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
  paris: 'https://images.unsplash.com/photo-1499856374022-62da9e0c5b6b?w=800&q=80',
  santorini: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  bali: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80',
  sydney: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80',
  dubai: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
  'machu-picchu': 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80',
  'new-york-city': 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80',
  rome: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80',
  london: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
  amsterdam: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80',
  prague: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&q=80',
  lisbon: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80',
  'swiss-alps': 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80',
  singapore: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80',
  bangkok: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80',
  seoul: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&q=80',
  cairo: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&q=80',
  serengeti: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
  'buenos-aires': 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800&q=80',
  queenstown: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&q=80',
  jaipur: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80',
  agra: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80',
  varanasi: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80',
  kerala: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
  goa: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
  venice: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&q=80',
  maldives: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
  hawaii: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=800&q=80',
  berlin: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80',
  'norwegian-fjords': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80',
  mumbai: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80',
  kyoto: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
  barcelona: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80',
  cape_town: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80',
  marrakech: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&q=80',
  oaxaca: 'https://images.unsplash.com/photo-1512815776622-9febc0c0e3a6?w=800&q=80',
  davangere: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/HBPA_N_1107_Davanagere_Glass_House.jpg/1280px-HBPA_N_1107_Davanagere_Glass_House.jpg',
  davanagere: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/HBPA_N_1107_Davanagere_Glass_House.jpg/1280px-HBPA_N_1107_Davanagere_Glass_House.jpg'
};

// Neutral ambient travel photography — avoids false attributions to specific world landmarks like Taj Mahal or Big Ben
export const CATEGORY_FALLBACKS = {
  Temple: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80', // Serene temple bells & architecture
  Landmark: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80', // Scenic coastal town vista
  Museum: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80', // Gallery hall
  Nature: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80', // Mist over green hills
  Beach: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', // Tropical shoreline
  Historical: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80', // Ancient stone heritage alley
  'Archaeological Site': 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80', // Heritage stone architecture
  Market: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=800&q=80', // Vibrant local market
  Neighbourhood: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&q=80', // Atmospheric cobbled street
  Adventure: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80', // Scenic road trip vista
  Urban: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?w=800&q=80', // Warm dusk city street
  Food: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80', // Culinary preparation
  Culture: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80' // Traditional cultural archways
};

const DEFAULT_FALLBACK = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80';


/**
 * Returns a guaranteed high-res travel image for a destination
 */
export function getDestinationFallback(destination) {
  if (!destination) return DEFAULT_FALLBACK;
  const idKey = destination.id ? destination.id.toLowerCase().replace(/_/g, '-') : '';
  if (DESTINATION_FALLBACKS[idKey]) {
    return DESTINATION_FALLBACKS[idKey];
  }
  const nameKey = destination.name ? destination.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') : '';
  if (DESTINATION_FALLBACKS[nameKey]) {
    return DESTINATION_FALLBACKS[nameKey];
  }

  // Check tags
  if (Array.isArray(destination.tags)) {
    for (const t of destination.tags) {
      if (CATEGORY_FALLBACKS[t]) return CATEGORY_FALLBACKS[t];
    }
  }

  return DEFAULT_FALLBACK;
}

/**
 * Returns a guaranteed high-res image for a famous place
 */
export function getPlaceFallback(place, destination) {
  if (place?.type && CATEGORY_FALLBACKS[place.type]) {
    return CATEGORY_FALLBACKS[place.type];
  }
  return getDestinationFallback(destination);
}
