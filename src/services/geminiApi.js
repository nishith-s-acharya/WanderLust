import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GEMINI_API_KEY) || (typeof process !== 'undefined' && process.env?.VITE_GEMINI_API_KEY);

let genAI = null;

function getGenAI() {
  if (!API_KEY || API_KEY === 'your_google_gemini_api_key_here') {
    throw new Error('Google Gemini API key not configured. Add VITE_GEMINI_API_KEY to your .env file.');
  }
  if (!genAI) {
    genAI = new GoogleGenerativeAI(API_KEY);
  }
  return genAI;
}

function getModel(modelName = 'gemini-3.5-flash-lite') {
  const client = getGenAI();
  return client.getGenerativeModel({ model: modelName });
}

const TRAVEL_SYSTEM_PROMPT = `You are Wanderlust AI, an expert travel advisor with deep knowledge of destinations worldwide. You are friendly, enthusiastic, and give practical, actionable advice.

Rules:
- Keep responses concise but informative (2-4 paragraphs max for general questions)
- Use specific recommendations, not generic advice
- Include practical tips like costs, timing, and local customs
- Be honest about potential downsides or challenges
- If asked about a destination you're unsure about, say so
- Never invent facts — if you don't know, recommend the traveller research further`;

const ITINERARY_SYSTEM_PROMPT = `You are a professional travel itinerary planner. When asked to create an itinerary, respond ONLY with a valid JSON array (no markdown, no code fences, no explanation).

Each element in the array represents one day and must have this exact structure:
{
  "day": 1,
  "title": "Short title for the day",
  "activities": [
    {
      "time": "9:00 AM",
      "activity": "Activity name",
      "description": "1-2 sentence description",
      "tip": "Optional practical tip"
    }
  ]
}

Rules:
- Include 3-4 activities per day
- Activities should flow logically (geography, time of day)
- Include meals at local restaurants with specific dish recommendations
- Mix popular sights with local hidden gems
- ONLY output the JSON array, nothing else`;

let chatSession = null;

export async function startChat(destinationContext = '') {
  const m = getModel('gemini-3.5-flash-lite');

  const systemMessage = destinationContext
    ? `${TRAVEL_SYSTEM_PROMPT}\n\nThe user is currently looking at: ${destinationContext}. Tailor your responses to this destination unless they ask about something else.`
    : TRAVEL_SYSTEM_PROMPT;

  chatSession = m.startChat({
    history: [
      {
        role: 'user',
        parts: [{ text: systemMessage }]
      },
      {
        role: 'model',
        parts: [{ text: "I understand! I'm Wanderlust AI, your travel advisor. I'm ready to help with destination tips, travel planning, and creating detailed itineraries. What would you like to know?" }]
      }
    ],
    generationConfig: {
      maxOutputTokens: 1024,
      temperature: 0.7
    }
  });

  return chatSession;
}

export async function sendMessage(message) {
  if (!chatSession) {
    await startChat();
  }

  try {
    const result = await chatSession.sendMessage(message);
    const response = result.response;
    return response.text();
  } catch (error) {
    console.warn('Chat error, attempting fallback session:', error.message);
    // If current chat model had an error, try restarting with 3.7-flash
    try {
      const fallbackModel = getModel('gemini-3.7-flash');
      const fallbackChat = fallbackModel.startChat({
        history: [{ role: 'user', parts: [{ text: TRAVEL_SYSTEM_PROMPT }] }],
        generationConfig: { maxOutputTokens: 1024, temperature: 0.7 }
      });
      const res = await fallbackChat.sendMessage(message);
      chatSession = fallbackChat;
      return res.response.text();
    } catch {
      throw new Error('Our AI is currently experiencing high demand. Please try again in a moment.');
    }
  }
}

/**
 * Creates a smart, highly detailed destination itinerary as a guaranteed fallback.
 */
function createCuratedItinerary(destination, days) {
  const places = destination.famousPlaces || [];
  const result = [];

  for (let d = 1; d <= days; d++) {
    const mainPlace = places[(d - 1) % places.length];
    const secondaryPlace = places[d % places.length];

    result.push({
      day: d,
      title: d === 1
        ? `Arrival & Iconic ${mainPlace?.name || destination.name}`
        : d === 2
        ? `Historic Quarters & Cultural Wonders`
        : d === 3
        ? `Scenic Perspectives & Local Gastronomy`
        : `Hidden Gems & Local Living in ${destination.name}`,
      activities: [
        {
          time: '9:00 AM',
          activity: `Morning at ${mainPlace?.name || destination.name}`,
          description: mainPlace?.description || `Explore the hallmark landmark of ${destination.name} at a leisurely pace.`,
          tip: mainPlace?.tip || 'Arrive early to beat the crowds and enjoy ideal morning photography lighting.'
        },
        {
          time: '12:30 PM',
          activity: `Authentic ${destination.name} Dining`,
          description: `Savor regional dishes and delicacies unique to ${destination.country}.`,
          tip: 'Look for spots filled with locals away from the main tourist strip.'
        },
        {
          time: '2:30 PM',
          activity: `Afternoon at ${secondaryPlace?.name || 'Cultural District'}`,
          description: secondaryPlace?.description || `Discover lively neighborhoods and artisan boutiques.`,
          tip: secondaryPlace?.tip || 'Wear comfortable walking shoes for cobblestone or garden pathways.'
        },
        {
          time: '6:30 PM',
          activity: `Twilight Views & Evening Dining`,
          description: `End Day ${d} taking in the sunset colors followed by a memorable dinner atmosphere.`,
          tip: 'Reserve outdoor or elevated viewpoint seating in advance for golden hour.'
        }
      ]
    });
  }

  return result;
}

export async function generateItinerary(destination, days, interests = []) {
  const candidateModels = ['gemini-3.6-flash', 'gemini-2.5-flash-lite', 'gemini-3.5-flash-lite', 'gemini-3.7-flash'];


  const prompt = `${ITINERARY_SYSTEM_PROMPT}

Create a ${days}-day itinerary for ${destination.name}, ${destination.country}.
${interests.length > 0 ? `The traveller is interested in: ${interests.join(', ')}.` : ''}
Consider the famous places: ${destination.famousPlaces.map(p => p.name).join(', ')}.
Include local food recommendations and practical tips.`;

  for (const modelName of candidateModels) {
    try {
      const m = getModel(modelName);
      const result = await m.generateContent(prompt);
      const text = result.response.text().trim();

      // Robust JSON extraction matching array brackets
      const jsonMatch = text.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (error) {
      console.warn(`Model ${modelName} itinerary attempt warning:`, error.message);
      // Continue to next candidate or fallback
    }
  }

  // Gracefully fallback to curated itinerary so the user ALWAYS gets a rich, functioning experience
  return createCuratedItinerary(destination, days);
}

export function resetChat() {
  chatSession = null;
}
