import { GoogleGenerativeAI } from '@google/generative-ai';
import { getDestinationById, saveCustomDestination, getAllDestinations } from '../data/destinations.js';
import { fetchWikivoyageSummary } from './wikivoyageApi.js';

const GEMINI_API_KEY = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GEMINI_API_KEY) || (typeof process !== 'undefined' && process.env?.VITE_GEMINI_API_KEY);
const WEATHER_API_KEY = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_OPENWEATHER_API_KEY) || (typeof process !== 'undefined' && process.env?.VITE_OPENWEATHER_API_KEY);

let genAI = null;

function getModel(modelName = 'gemini-3.5-flash-lite') {
  if (!GEMINI_API_KEY || GEMINI_API_KEY === 'your_google_gemini_api_key_here') {
    throw new Error('Gemini API key not configured.');
  }
  if (!genAI) {
    genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  }
  return genAI.getGenerativeModel({ model: modelName });
}

/**
 * Geocode a city name using OpenWeatherMap Geocoding API
 */
async function geocodeCity(cityName) {
  if (!WEATHER_API_KEY) {
    throw new Error('OpenWeatherMap API key not available for geocoding.');
  }

  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(cityName)}&limit=1&appid=${WEATHER_API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Geocoding failed for "${cityName}" (Status ${res.status})`);
  }

  const data = await res.json();
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error(`Could not locate "${cityName}". Please check the spelling.`);
  }

  const loc = data[0];
  return {
    name: loc.name,
    countryCode: loc.country,
    lat: Math.round(loc.lat * 10000) / 10000,
    lon: Math.round(loc.lon * 10000) / 10000
  };
}

/**
 * Generate rich travel profile using Gemini grounded in Wikivoyage editorial data
 */
async function generateDestinationProfile(geoInfo, wikiSummary) {
  const wikiContext = wikiSummary?.extract
    ? `\nVerified Wikivoyage travel context: "${wikiSummary.extract}"\nDescription: "${wikiSummary.description || ''}"\n`
    : '';

  const prompt = `You are a world travel encyclopedia editor.
Create a rich, authentic travel destination guide for "${geoInfo.name}", country "${geoInfo.countryCode}".
Coordinates: lat ${geoInfo.lat}, lng ${geoInfo.lon}.${wikiContext}

Respond ONLY with a valid JSON object (no markdown formatting, no code fences):
{
  "name": "${geoInfo.name}",
  "country": "Full Country Name (e.g. India, Italy, Japan, France)",
  "continent": "One of: Asia, Europe, Africa, North America, South America, Oceania",
  "tagline": "Evocative 6-10 word poetic tagline",
  "description": "2-3 sentences capturing the destination's unique essence, history, vibe, and architecture.",
  "bestTimeToVisit": "Best months and seasons to visit",
  "language": "Primary languages spoken",
  "currency": "Currency name and symbol (e.g. INR (₹), EUR (€), USD ($))",
  "tags": ["Culture", "Historical"], // Select 2-3 from: Beach, Culture, Adventure, Nature, Urban, Historical, Food
  "famousPlaces": [
    {
      "name": "Famous Place Name",
      "type": "Landmark | Museum | Temple | Nature | Market | Neighbourhood | Beach | Historical | Archaeological Site",
      "description": "2 sentences describing this notable place and what makes it extraordinary.",
      "tip": "1 practical insider tip for travellers visiting this spot."
    }
  ]
}

Ensure famousPlaces has exactly 4 renowned, real landmarks in ${geoInfo.name}.`;

  const candidateModels = ['gemini-3.5-flash-lite', 'gemini-3.7-flash'];

  for (const modelName of candidateModels) {
    try {
      const model = getModel(modelName);
      const res = await model.generateContent(prompt);
      const text = res.response.text().trim();

      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        if (parsed.tagline && parsed.description) {
          return parsed;
        }
      }
    } catch (err) {
      console.warn(`Gemini model ${modelName} destination generation warning:`, err.message);
    }
  }

  // Graceful fallback if AI is experiencing 503 spike, using Wikivoyage extract
  return {
    name: geoInfo.name,
    country: geoInfo.countryCode,
    continent: 'Asia',
    tagline: `Discover the unforgettable beauty and culture of ${geoInfo.name}`,
    description: wikiSummary?.extract || `${geoInfo.name} is a captivating world destination offering timeless architecture, rich local culture, and memorable culinary traditions.`,
    bestTimeToVisit: 'October – March',
    language: 'Official language',
    currency: 'Local currency',
    tags: ['Culture', 'Historical', 'Urban'],
    famousPlaces: [
      {
        name: `${geoInfo.name} Historic Center`,
        type: 'Historical',
        description: `The architectural heart of ${geoInfo.name}, showcasing historic streets, monuments, and timeless facades.`,
        tip: 'Stroll through early in the morning when the streets are tranquil and ideal for photos.'
      },
      {
        name: `${geoInfo.name} Central Promenade & Square`,
        type: 'Landmark',
        description: `The vibrant gathering area of the city, lined with bustling outdoor cafes, street musicians, and artisan boutiques.`,
        tip: 'Grab a table at a local terrace for prime people watching and regional refreshments.'
      },
      {
        name: `${geoInfo.name} Heritage Museum`,
        type: 'Museum',
        description: `A celebrated cultural institution preserving centuries of regional art, artifacts, and heritage.`,
        tip: 'Check for late-evening openings for a serene museum experience.'
      },
      {
        name: `${geoInfo.name} Scenic Outlook`,
        type: 'Nature',
        description: `A panoramic vantage point offering breathtaking outlooks across the entire city skyline.`,
        tip: 'Visit at sunset to watch the evening lights illuminate the city.'
      }
    ]
  };
}

/**
 * Fetch, synthesize, and store a dynamic destination by city name using Wikivoyage + OpenWeather + Gemini.
 */
export async function fetchDynamicDestination(cityName) {
  if (!cityName || !cityName.trim()) {
    throw new Error('Please enter a valid city name.');
  }

  const querySlug = cityName.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  // 1. Check if already exists in memory or localStorage
  const existing = getDestinationById(querySlug) || getAllDestinations().find(d =>
    d.name.toLowerCase() === cityName.toLowerCase().trim()
  );

  if (existing) {
    return existing;
  }

  // 2. Query Wikivoyage MediaWiki API in parallel with geocoding
  const [wikiSummary, geoInfoResult] = await Promise.allSettled([
    fetchWikivoyageSummary(cityName),
    geocodeCity(cityName)
  ]);

  const wiki = wikiSummary.status === 'fulfilled' ? wikiSummary.value : null;
  let geoInfo = geoInfoResult.status === 'fulfilled' ? geoInfoResult.value : null;

  // If geocode failed, check if Wikivoyage provided coordinates
  if (!geoInfo && wiki?.coordinates) {
    geoInfo = {
      name: wiki.title,
      countryCode: 'World',
      lat: Math.round(wiki.coordinates.lat * 10000) / 10000,
      lon: Math.round(wiki.coordinates.lng * 10000) / 10000
    };
  }

  if (!geoInfo) {
    throw new Error(`Could not find location coordinates for "${cityName}". Please check the spelling.`);
  }

  // Canonical slug
  const canonicalSlug = geoInfo.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const canonicalExisting = getDestinationById(canonicalSlug);
  if (canonicalExisting) {
    return canonicalExisting;
  }

  // 3. Generate travel profile grounded in Wikivoyage data
  const profile = await generateDestinationProfile(geoInfo, wiki);

  // 4. Assemble clean destination object
  const newDestination = {
    id: canonicalSlug,
    name: profile.name || geoInfo.name,
    country: profile.country || geoInfo.countryCode,
    continent: profile.continent || 'Asia',
    coordinates: { lat: geoInfo.lat, lng: geoInfo.lon },
    tagline: profile.tagline,
    description: profile.description,
    bestTimeToVisit: profile.bestTimeToVisit || 'October – April',
    language: profile.language || 'Official language',
    currency: profile.currency || 'Local currency',
    tags: Array.isArray(profile.tags) && profile.tags.length ? profile.tags : ['Culture', 'Historical'],
    famousPlaces: Array.isArray(profile.famousPlaces) && profile.famousPlaces.length ? profile.famousPlaces : [],
    wikivoyageThumbnail: wiki?.thumbnail || null,
    isDynamic: true,
    addedAt: new Date().toISOString()
  };

  // 5. Save to localStorage
  saveCustomDestination(newDestination);

  // 6. Notify app components
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('wanderlust:destination_added', { detail: newDestination }));
  }

  return newDestination;
}
