const destinations = [
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    continent: 'Asia',
    coordinates: { lat: 35.6762, lng: 139.6503 },
    tagline: 'Where tradition meets the future',
    description: 'Tokyo dazzles with its blend of ultramodern skyscrapers and historic temples. From the neon-lit streets of Shibuya to the serene gardens of the Imperial Palace, every neighbourhood tells a different story. The city is a masterclass in contrasts — ancient shrines sit beside cutting-edge architecture, and Michelin-starred restaurants share blocks with tiny ramen counters.',
    bestTimeToVisit: 'March – May (cherry blossom) or Oct – Nov (autumn foliage)',
    language: 'Japanese',
    currency: 'JPY (¥)',
    tags: ['Culture', 'Urban', 'Food'],
    famousPlaces: [
      { name: 'Senso-ji Temple', description: 'Tokyo\'s oldest and most significant Buddhist temple, dating to 645 AD. The Thunder Gate entrance with its massive red lantern is one of Japan\'s most photographed landmarks.', type: 'Temple', tip: 'Visit before 7am to avoid crowds and see the morning rituals.' },
      { name: 'Shibuya Crossing', description: 'The world\'s busiest pedestrian intersection, where up to 3,000 people cross simultaneously. It\'s a living symbol of Tokyo\'s organised chaos and electric energy.', type: 'Landmark', tip: 'Watch from the Starbucks on the second floor of the Tsutaya building for the best overhead view.' },
      { name: 'Meiji Shrine', description: 'A Shinto shrine surrounded by 170 acres of evergreen forest in the heart of the city. Dedicated to Emperor Meiji and Empress Shoken, it offers a rare pocket of tranquillity.', type: 'Temple', tip: 'Write a wish on an ema (wooden plaque) and hang it at the shrine.' },
      { name: 'Tsukiji Outer Market', description: 'Though the inner wholesale market moved to Toyosu, the outer market remains a food paradise with over 400 stalls selling the freshest sushi, tamagoyaki, and street food.', type: 'Market', tip: 'Go hungry. Start with a tuna sashimi bowl and end with a tamagoyaki on a stick.' },
      { name: 'TeamLab Borderless', description: 'An immersive digital art museum where rooms of light, colour and sound dissolve the boundary between artwork and visitor. Installations shift and respond to movement.', type: 'Museum', tip: 'Wear white clothing — the projections look stunning reflected on you.' }
    ]
  },
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    continent: 'Europe',
    coordinates: { lat: 48.8566, lng: 2.3522 },
    tagline: 'The city that invented romance',
    description: 'Paris is a living museum — a city where every boulevard, café, and bridge carries centuries of history and beauty. From the grandeur of Haussmann architecture to the intimate charm of Montmartre\'s cobblestone streets, Paris rewards slow exploration. The city\'s cultural influence on art, fashion, food, and philosophy is unmatched.',
    bestTimeToVisit: 'April – June or September – October',
    language: 'French',
    currency: 'EUR (€)',
    tags: ['Culture', 'Historical', 'Food'],
    famousPlaces: [
      { name: 'Eiffel Tower', description: 'The iron lattice tower that defines the Paris skyline. Built for the 1889 World\'s Fair, it was meant to be temporary but became the world\'s most visited paid monument.', type: 'Landmark', tip: 'Book the summit ticket online weeks in advance. The sparkling lights at night run for 5 minutes every hour on the hour.' },
      { name: 'Louvre Museum', description: 'The world\'s largest art museum and home to over 380,000 objects, including the Mona Lisa, Winged Victory, and Venus de Milo. The glass pyramid entrance is itself an icon.', type: 'Museum', tip: 'Enter through the Carrousel du Louvre underground entrance to skip the pyramid queue.' },
      { name: 'Montmartre & Sacré-Cœur', description: 'The hilltop village of Montmartre retains a bohemian spirit that once drew Picasso, Monet, and Renoir. The white-domed Sacré-Cœur basilica offers panoramic views over the entire city.', type: 'Neighbourhood', tip: 'Take the funicular up, then walk down through the winding streets. Visit Place du Tertre to see artists painting.' },
      { name: 'Musée d\'Orsay', description: 'Housed in a stunning Beaux-Arts railway station, this museum holds the world\'s finest collection of Impressionist and Post-Impressionist masterpieces by Monet, Degas, Van Gogh, and Renoir.', type: 'Museum', tip: 'Visit on Thursday evenings when it stays open late and is far less crowded.' },
      { name: 'Notre-Dame Cathedral', description: 'A masterpiece of French Gothic architecture dating to 1163. After the devastating 2019 fire, a painstaking restoration has brought the cathedral back to stunning glory.', type: 'Landmark', tip: 'Walk along the Seine at sunset for the most beautiful view of the cathedral\'s silhouette.' }
    ]
  },
  {
    id: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    continent: 'Europe',
    coordinates: { lat: 36.3932, lng: 25.4615 },
    tagline: 'Blue domes and volcanic sunsets',
    description: 'Santorini is a crescent-shaped volcanic island in the Aegean Sea, famous for its dramatic cliffside villages of whitewashed buildings with blue-domed churches. The caldera views are some of the most photographed in the world, and the island\'s unique terroir produces exceptional wines from ancient vines grown in volcanic soil.',
    bestTimeToVisit: 'Late April – early June or September – October',
    language: 'Greek',
    currency: 'EUR (€)',
    tags: ['Beach', 'Nature', 'Culture'],
    famousPlaces: [
      { name: 'Oia Village', description: 'The postcard-perfect village perched on the caldera\'s edge, famous worldwide for its sunset views. The blue-domed churches against white walls and the deep blue sea create an unforgettable tableau.', type: 'Village', tip: 'Find your sunset spot at the castle ruins at least an hour early — every traveller on the island will be here.' },
      { name: 'Red Beach', description: 'A surreal beach surrounded by towering red volcanic cliffs. The crimson and black sand against the turquoise water creates a landscape that looks almost Martian.', type: 'Beach', tip: 'The cliff path can be unstable. Take a water taxi from Akrotiri port instead.' },
      { name: 'Akrotiri Archaeological Site', description: 'A Minoan Bronze Age settlement preserved under volcanic ash from the eruption of 1627 BC — often called the "Pompeii of the Aegean". Multi-story buildings and frescoes remain remarkably intact.', type: 'Archaeological Site', tip: 'Hire a guide — the ruins are far more meaningful with context about this advanced ancient civilisation.' },
      { name: 'Fira to Oia Hike', description: 'A 10km cliffside trail connecting the island\'s two main villages, offering uninterrupted caldera views the entire way. It passes through Firostefani, Imerovigli, and several hidden churches.', type: 'Trail', tip: 'Start from Fira heading north so the caldera is on your left. Bring water and sunscreen — there\'s minimal shade.' }
    ]
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    continent: 'Asia',
    coordinates: { lat: -8.3405, lng: 115.092 },
    tagline: 'Island of gods and emerald rice terraces',
    description: 'Bali is a tropical paradise that blends spiritual culture with natural beauty. Ancient Hindu temples sit amid lush jungle, tiered rice paddies cascade down volcanic hillsides, and warm waters lap at black-sand beaches. The island\'s artistic traditions — from stone carving to gamelan music — are woven into daily life.',
    bestTimeToVisit: 'April – October (dry season)',
    language: 'Indonesian, Balinese',
    currency: 'IDR (Rp)',
    tags: ['Beach', 'Nature', 'Culture'],
    famousPlaces: [
      { name: 'Tegallalang Rice Terraces', description: 'Dramatic tiered paddies carved into a steep river valley north of Ubud. The subak irrigation system used here dates back to the 9th century and is a UNESCO-recognised practice.', type: 'Nature', tip: 'Arrive at 7am when the morning light catches the water in the paddies and tourist buses haven\'t arrived.' },
      { name: 'Uluwatu Temple', description: 'A clifftop sea temple perched 70 metres above the Indian Ocean on a sheer limestone precipice. At sunset, a Kecak fire dance performance unfolds against the ocean backdrop.', type: 'Temple', tip: 'Watch your belongings — the resident macaque monkeys are skilled thieves. The Kecak dance starts at 6pm; arrive by 5pm for a good seat.' },
      { name: 'Sacred Monkey Forest', description: 'A nature reserve and temple complex in Ubud that is home to over 1,200 long-tailed macaques. Ancient banyan trees with hanging roots create a cathedral-like canopy.', type: 'Nature', tip: 'Don\'t bring any food or loose items. The monkeys will investigate anything dangling — including earrings and sunglasses.' },
      { name: 'Tirta Empul Temple', description: 'A water temple where Balinese Hindus come for ritual purification. Visitors can participate in the cleansing ritual, passing through a series of fountains fed by a sacred spring.', type: 'Temple', tip: 'Wear a sarong (available to rent at the entrance) and follow the local worshippers\' lead through each fountain left to right.' }
    ]
  },
  {
    id: 'new-york',
    name: 'New York',
    country: 'United States',
    continent: 'North America',
    coordinates: { lat: 40.7128, lng: -74.006 },
    tagline: 'The city that never sleeps',
    description: 'New York City is the cultural and financial capital of the world — a dense, electric metropolis where 8 million stories unfold simultaneously. From the glittering lights of Times Square to the quiet paths of Central Park, the city offers infinite variety. Its skyline is the most recognisable on Earth, and every neighbourhood — from Harlem to Chinatown — has its own distinct identity.',
    bestTimeToVisit: 'April – June or September – November',
    language: 'English',
    currency: 'USD ($)',
    tags: ['Urban', 'Culture', 'Food'],
    famousPlaces: [
      { name: 'Central Park', description: 'An 843-acre green oasis in the heart of Manhattan, designed by Frederick Law Olmsted and Calvert Vaux. It contains lakes, theatres, ice rinks, and some of the most valuable real estate views in the world.', type: 'Park', tip: 'Rent a rowboat on the Lake and look south for the skyline framed by trees — a quintessential New York moment.' },
      { name: 'Statue of Liberty', description: 'A gift from France in 1886, Lady Liberty stands 93 metres tall on Liberty Island. Her torch has welcomed millions of immigrants arriving by sea and remains a universal symbol of freedom.', type: 'Landmark', tip: 'Book crown access tickets months in advance — only 240 people per day can climb the 377 steps.' },
      { name: 'The Metropolitan Museum of Art', description: 'One of the world\'s greatest art museums, spanning 5,000 years of art across 2 million square feet. The rooftop garden offers stunning views over Central Park.', type: 'Museum', tip: 'The suggested admission is just that — suggested. Pay what you wish if you\'re a New York State resident.' },
      { name: 'Brooklyn Bridge', description: 'Completed in 1883, this Gothic-towered suspension bridge connects Manhattan and Brooklyn across the East River. Walking its 1.1-mile span is one of the city\'s great free experiences.', type: 'Landmark', tip: 'Walk from Brooklyn to Manhattan for the best skyline view. Go at sunrise to have the boardwalk nearly to yourself.' },
      { name: 'The High Line', description: 'A 1.45-mile elevated park built on a disused freight rail line on Manhattan\'s West Side. Landscape architecture, public art, and city views blend into an urban garden unlike anywhere else.', type: 'Park', tip: 'Enter at the Gansevoort Street entrance and walk north. Stop at the viewing platform at 10th Avenue for a frame of the streets below.' }
    ]
  },
  {
    id: 'marrakech',
    name: 'Marrakech',
    country: 'Morocco',
    continent: 'Africa',
    coordinates: { lat: 31.6295, lng: -7.9811 },
    tagline: 'A sensory storm of colour and spice',
    description: 'Marrakech assaults the senses in the best possible way. The ancient medina is a labyrinth of souks overflowing with spices, textiles, and lanterns. Riads — traditional courtyard houses — hide serene gardens behind unassuming walls. The city is framed by the snow-capped Atlas Mountains and suffused with the scent of orange blossom and cedar.',
    bestTimeToVisit: 'March – May or September – November',
    language: 'Arabic, French, Berber',
    currency: 'MAD (د.م.)',
    tags: ['Culture', 'Historical', 'Food'],
    famousPlaces: [
      { name: 'Jemaa el-Fnaa', description: 'The beating heart of Marrakech — a vast medieval square that transforms throughout the day. By night it becomes an open-air theatre of storytellers, musicians, acrobats, and dozens of food stalls.', type: 'Square', tip: 'Eat at the food stalls numbered 1 and 14 — locals know which ones have the best harira soup and grilled meats.' },
      { name: 'Bahia Palace', description: 'A 19th-century palace built for a grand vizier, featuring 150 rooms adorned with painted cedar ceilings, zellige tilework, and sculpted stucco. The gardens are equally intricate.', type: 'Palace', tip: 'Go in the morning when sunlight pours through the courtyard arches and illuminates the tilework.' },
      { name: 'Majorelle Garden', description: 'A two-acre botanical garden designed by French artist Jacques Majorelle and later restored by Yves Saint Laurent. The cobalt blue villa — now called "Majorelle Blue" — is an icon.', type: 'Garden', tip: 'Buy tickets online to skip the queue. The on-site Berber Museum is small but beautifully curated.' },
      { name: 'The Souks', description: 'Miles of covered market streets radiating from Jemaa el-Fnaa, organised by craft: leatherworkers, metalworkers, dyers, carpet sellers. Navigating them is half the adventure.', type: 'Market', tip: 'Always negotiate — start at one-third of the quoted price and settle around half. It\'s expected and part of the experience.' }
    ]
  },
  {
    id: 'cape-town',
    name: 'Cape Town',
    country: 'South Africa',
    continent: 'Africa',
    coordinates: { lat: -33.9249, lng: 18.4241 },
    tagline: 'Where mountains meet the ocean',
    description: 'Cape Town is one of the most dramatically situated cities on Earth — built between the iconic flat-topped Table Mountain and the meeting point of the Atlantic and Indian Oceans. The city blends natural grandeur with vibrant culture, world-class wine regions, and a complex history that shapes its evolving identity.',
    bestTimeToVisit: 'November – March (Southern Hemisphere summer)',
    language: 'English, Afrikaans, Xhosa',
    currency: 'ZAR (R)',
    tags: ['Nature', 'Adventure', 'Beach'],
    famousPlaces: [
      { name: 'Table Mountain', description: 'A flat-topped mountain and UNESCO World Heritage Site that dominates the city skyline. The summit offers 360-degree views over the city, harbour, and ocean stretching to the horizon.', type: 'Nature', tip: 'Take the rotating cable car up and hike down via Platteklip Gorge. Check the webcam — cloud cover ("the tablecloth") can obscure everything.' },
      { name: 'Cape of Good Hope', description: 'The southwestern tip of Africa, where dramatic cliffs plunge into the wild Southern Ocean. Part of the Table Mountain National Park, the area is home to baboons, ostriches, and endemic fynbos vegetation.', type: 'Nature', tip: 'Drive the scenic Chapman\'s Peak route to get there. Visit the old lighthouse for the most dramatic views.' },
      { name: 'Bo-Kaap', description: 'A historic neighbourhood of brightly painted houses on the slopes of Signal Hill. Home to the Cape Malay community since the 1760s, its cobbled streets are among the most photographed in Africa.', type: 'Neighbourhood', tip: 'Book a Cape Malay cooking class to learn bobotie and koeksisters from local families.' },
      { name: 'Kirstenbosch Botanical Gardens', description: 'One of the great botanical gardens of the world, set against Table Mountain\'s eastern slopes. The Tree Canopy Walkway — a curved steel-and-wood bridge — offers an eagle\'s-eye view of the forest.', type: 'Garden', tip: 'Bring a picnic for the Sunday sunset concerts in summer — locals spread blankets across the lawn.' }
    ]
  },
  {
    id: 'machu-picchu',
    name: 'Machu Picchu',
    country: 'Peru',
    continent: 'South America',
    coordinates: { lat: -13.1631, lng: -72.545 },
    tagline: 'Lost city above the clouds',
    description: 'Machu Picchu is a 15th-century Incan citadel set impossibly high in the Andes Mountains, shrouded in mist and mystery. Built as a royal estate for Emperor Pachacuti, it was abandoned during the Spanish conquest and remained unknown to the outside world until 1911. Its dry-stone walls, terraced fields, and astronomical alignments reveal extraordinary engineering.',
    bestTimeToVisit: 'May – September (dry season)',
    language: 'Spanish, Quechua',
    currency: 'PEN (S/.)',
    tags: ['Historical', 'Adventure', 'Nature'],
    famousPlaces: [
      { name: 'The Citadel', description: 'The main archaeological complex of over 200 stone structures including temples, residences, and ceremonial platforms. The precision of the stonework — no mortar, yet earthquake-resistant — is staggering.', type: 'Archaeological Site', tip: 'Enter at opening (6am) and head to the Intihuatana stone first — it gets roped off by mid-morning.' },
      { name: 'Huayna Picchu', description: 'The steep granite peak that rises behind the citadel in every iconic photo. The 45-minute climb rewards with views looking down over the ruins and the Urubamba River valley far below.', type: 'Trail', tip: 'Only 400 permits per day, split into two time slots. Book months ahead. The stairs near the top are near-vertical — not for those afraid of heights.' },
      { name: 'Sun Gate (Inti Punku)', description: 'The ancient entrance to Machu Picchu for those arriving via the Inca Trail. The first glimpse of the citadel from here — emerging from the cloud forest — is one of travel\'s most emotional moments.', type: 'Trail', tip: 'Even without hiking the full Inca Trail, you can walk to the Sun Gate from the citadel in about an hour.' },
      { name: 'Temple of the Sun', description: 'A semi-circular tower with precisely cut stonework that aligns with the sunrise during the winter solstice. It sits above a natural cave that may have served as a royal tomb.', type: 'Temple', tip: 'You can\'t enter the temple, but the best viewing angle is from the terraces just below and to the east.' }
    ]
  },
  {
    id: 'iceland',
    name: 'Reykjavik',
    country: 'Iceland',
    continent: 'Europe',
    coordinates: { lat: 64.1466, lng: -21.9426 },
    tagline: 'Fire and ice at the edge of the world',
    description: 'Iceland is a geological wonderland of glaciers, geysers, volcanoes, and hot springs. The world\'s northernmost capital, Reykjavik, is a colourful, creative city that serves as the gateway to otherworldly landscapes. The Golden Circle, the Northern Lights, and the midnight sun make Iceland one of the most unique destinations on Earth.',
    bestTimeToVisit: 'June – August (midnight sun) or Sept – March (Northern Lights)',
    language: 'Icelandic',
    currency: 'ISK (kr)',
    tags: ['Nature', 'Adventure'],
    famousPlaces: [
      { name: 'Blue Lagoon', description: 'A geothermal spa set in a lava field on the Reykjanes Peninsula. The milky-blue water, rich in silica and minerals, stays at 37–40°C year-round. Steam rises against black volcanic rock.', type: 'Nature', tip: 'Book the Retreat Spa for a less crowded, more premium experience. Visit in winter for a chance to soak under the Northern Lights.' },
      { name: 'Golden Circle', description: 'A 300km loop from Reykjavik covering three iconic sites: Þingvellir (where tectonic plates meet), Geysir (the original geyser), and Gullfoss (a thundering two-tiered waterfall).', type: 'Nature', tip: 'Self-drive to control your pace. Arrive at Þingvellir at dawn to walk between the continental plates in near silence.' },
      { name: 'Jökulsárlón Glacier Lagoon', description: 'A surreal lagoon where icebergs calved from Breiðamerkurjökull glacier float toward the sea. Nearby Diamond Beach is littered with ice chunks that sparkle like jewels on black sand.', type: 'Nature', tip: 'Take the amphibian boat tour to sail among the icebergs. In winter, seals haul out on the ice.' },
      { name: 'Hallgrímskirkja', description: 'Reykjavik\'s landmark church, its concrete facade inspired by basalt column formations found across Iceland. The 73-metre tower offers panoramic views over the colourful rooftops.', type: 'Landmark', tip: 'Take the elevator to the top for the best view in Reykjavik. The church organ has 5,275 pipes.' }
    ]
  },
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'United Arab Emirates',
    continent: 'Asia',
    coordinates: { lat: 25.2048, lng: 55.2708 },
    tagline: 'Ambition built on sand',
    description: 'Dubai is a city of superlatives — the tallest building, the largest mall, the most ambitious engineering. Rising from the desert in just a few decades, it has become a global hub for luxury, architecture, and innovation. Yet beyond the glass towers, traditional souks, desert dunes, and the historic Creek tell the story of a trading village transformed.',
    bestTimeToVisit: 'November – March (cooler weather)',
    language: 'Arabic, English',
    currency: 'AED (د.إ)',
    tags: ['Urban', 'Adventure'],
    famousPlaces: [
      { name: 'Burj Khalifa', description: 'The tallest building in the world at 828 metres. The observation decks on floors 124–125 and 148 offer views extending 80km on clear days. The building\'s design is inspired by a desert flower.', type: 'Landmark', tip: 'Book the "At the Top SKY" ticket for floor 148 — smaller crowds and a dedicated lounge. Visit at sunset for the most dramatic light.' },
      { name: 'Dubai Desert Safari', description: 'An evening adventure into the red dunes outside the city. Dune bashing in 4x4s, camel rides, sandboarding, and a Bedouin-style camp dinner under the stars with live entertainment.', type: 'Adventure', tip: 'Book a private tour to avoid the large group buses. The best operators include falconry demonstrations and stargazing.' },
      { name: 'Dubai Creek & Old Souks', description: 'The historic heart of Dubai. Wooden abra boats cross the creek between the Gold Souk (dazzling window displays) and the Spice Souk (mountains of saffron, frankincense, and dried rose petals).', type: 'Market', tip: 'Take the 1-dirham abra crossing — it\'s the cheapest and most atmospheric ride in Dubai.' },
      { name: 'Palm Jumeirah', description: 'The world\'s largest artificial island, shaped like a palm tree. Home to Atlantis The Royal, luxury residences, and a monorail that runs along the trunk offering views of the fronds.', type: 'Landmark', tip: 'For the best aerial view, book the helicopter tour from Dubai Marina. The scale is only truly understood from above.' }
    ]
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    country: 'Spain',
    continent: 'Europe',
    coordinates: { lat: 41.3874, lng: 2.1686 },
    tagline: 'Gaudí\'s living canvas by the sea',
    description: 'Barcelona is where Gothic grandeur meets modernist imagination. Antoni Gaudí\'s fantastical buildings — the Sagrada Família, Casa Batlló, Park Güell — are unlike anything else on Earth. The city hugs the Mediterranean coast, offering sandy beaches within walking distance of medieval alleyways, tapas bars, and some of Europe\'s best nightlife.',
    bestTimeToVisit: 'May – June or September – October',
    language: 'Catalan, Spanish',
    currency: 'EUR (€)',
    tags: ['Culture', 'Beach', 'Food'],
    famousPlaces: [
      { name: 'Sagrada Família', description: 'Gaudí\'s unfinished masterpiece, under construction since 1882. The basilica\'s organic forms — inspired by trees, bones, and geometry — create interiors flooded with kaleidoscopic light from stained glass.', type: 'Landmark', tip: 'Book the tower access ticket for the Nativity Facade — the spiral staircase down offers vertigo-inducing views through stone lacework.' },
      { name: 'Park Güell', description: 'A public park of mosaic-covered structures, undulating benches, and gingerbread-like gatehouses designed by Gaudí. The terrace offers a panoramic view over Barcelona to the sea.', type: 'Park', tip: 'The ticketed Monumental Zone (Gaudí\'s main works) requires timed entry. Book the first slot for the best light and fewest people.' },
      { name: 'La Boqueria Market', description: 'Barcelona\'s most famous food market, on La Rambla since 1217. Stalls overflow with tropical fruit, Ibérico ham, fresh seafood, and smoothies in every colour imaginable.', type: 'Market', tip: 'Walk past the tourist-heavy front stalls and head deeper in for better prices and more authentic vendors.' },
      { name: 'Gothic Quarter', description: 'A maze of narrow medieval streets, hidden plazas, and Roman ruins in the heart of the old city. The Barcelona Cathedral and Plaça del Rei anchor the neighbourhood.', type: 'Neighbourhood', tip: 'Get deliberately lost — the best discoveries in the Gothic Quarter are unplanned. Look up for gargoyles and iron balconies.' }
    ]
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    country: 'Japan',
    continent: 'Asia',
    coordinates: { lat: 35.0116, lng: 135.7681 },
    tagline: 'A thousand temples in every shade of green',
    description: 'Kyoto was Japan\'s imperial capital for over a millennium, and its 2,000 temples, 200 shrines, and preserved geisha districts make it the country\'s cultural heartland. The city moves at a slower pace than Tokyo — bamboo groves rustle, tea ceremonies unfold in centuries-old houses, and cherry blossoms fall on moss-covered stone gardens.',
    bestTimeToVisit: 'Late March – April (cherry blossom) or November (autumn leaves)',
    language: 'Japanese',
    currency: 'JPY (¥)',
    tags: ['Culture', 'Historical', 'Nature'],
    famousPlaces: [
      { name: 'Fushimi Inari Shrine', description: 'Famous for its thousands of vermillion torii gates winding up Mount Inari. The 4km trail through the gates, flanked by stone fox statues, is one of Japan\'s most iconic spiritual walks.', type: 'Temple', tip: 'Most tourists turn back after the first few hundred gates. Keep climbing — the further you go, the more solitary and atmospheric it becomes.' },
      { name: 'Arashiyama Bamboo Grove', description: 'A towering forest of swaying bamboo stalks that filter the sunlight into an otherworldly green glow. The sound of wind through the bamboo has been voted one of Japan\'s most beautiful sounds.', type: 'Nature', tip: 'Arrive before 8am. By mid-morning the narrow path is shoulder-to-shoulder. Combine with a visit to nearby Tenryu-ji temple garden.' },
      { name: 'Kinkaku-ji (Golden Pavilion)', description: 'A Zen temple whose top two floors are entirely covered in gold leaf, reflected perfectly in the surrounding mirror pond. Originally a shogun\'s retirement villa, it was rebuilt after an infamous arson in 1950.', type: 'Temple', tip: 'Visit on a windless morning for the clearest reflection in the pond. The matcha tea at the garden exit is excellent.' },
      { name: 'Gion District', description: 'Kyoto\'s most famous geisha district, where traditional wooden machiya townhouses line atmospheric streets. In the evening, you may spot a geiko (geisha) or maiko (apprentice) hurrying to an appointment.', type: 'Neighbourhood', tip: 'Walk Hanamikoji Street at dusk. Be respectful — photographing geisha without permission is discouraged and rude.' }
    ]
  },
  {
    id: 'sydney',
    name: 'Sydney',
    country: 'Australia',
    continent: 'Oceania',
    coordinates: { lat: -33.8688, lng: 151.2093 },
    tagline: 'Harbour city under an endless sky',
    description: 'Sydney wraps around one of the world\'s most beautiful natural harbours, its iconic Opera House and Harbour Bridge framing a glittering waterscape. The city offers world-class beaches — Bondi, Manly, Bronte — within minutes of a sophisticated urban core. The blend of outdoor lifestyle, multicultural dining, and natural beauty makes it consistently rank among the world\'s most liveable cities.',
    bestTimeToVisit: 'September – November or March – May',
    language: 'English',
    currency: 'AUD ($)',
    tags: ['Beach', 'Urban', 'Nature'],
    famousPlaces: [
      { name: 'Sydney Opera House', description: 'Jørn Utzon\'s sculptural masterpiece on Bennelong Point, with its interlocking shell-shaped roofs, is the most recognisable building in the Southern Hemisphere. A UNESCO World Heritage Site since 2007.', type: 'Landmark', tip: 'Book a backstage tour to see areas the public never visits, including under the stage. Catch a performance if you can — the acoustics are as dramatic as the architecture.' },
      { name: 'Bondi to Coogee Walk', description: 'A 6km coastal trail carved into sandstone cliffs, connecting some of Sydney\'s best beaches. The path winds past rock pools, Aboriginal rock carvings, and the famous Bondi Icebergs ocean pool.', type: 'Trail', tip: 'Start at Bondi heading south. Stop at Bronte for a swim and flat white at one of the cafés overlooking the beach.' },
      { name: 'Sydney Harbour Bridge', description: 'The "Coathanger" — the world\'s largest steel arch bridge. Opened in 1932, it carries eight lanes of traffic, two rail lines, a cycleway, and a pedestrian walkway.', type: 'Landmark', tip: 'The BridgeClimb is worth every dollar. The dawn climb offers the best light and cooler temperatures.' },
      { name: 'Taronga Zoo', description: 'Set on a hillside overlooking the harbour, this conservation zoo houses over 4,000 animals. The views of the city skyline behind the giraffe and elephant enclosures are uniquely Sydney.', type: 'Nature', tip: 'Take the ferry from Circular Quay — arriving by water with the zoo and harbour bridge in view is part of the experience.' }
    ]
  },
  {
    id: 'rio-de-janeiro',
    name: 'Rio de Janeiro',
    country: 'Brazil',
    continent: 'South America',
    coordinates: { lat: -22.9068, lng: -43.1729 },
    tagline: 'Carnival rhythms and Christ\'s open arms',
    description: 'Rio de Janeiro is a city of dramatic geography and infectious energy. Granite peaks erupt from tropical forest, sweeping white-sand beaches curve between mountains, and the colossal Christ the Redeemer statue watches over it all. The city\'s samba rhythms, vibrant favela culture, and year-round outdoor lifestyle make it unlike anywhere else on Earth.',
    bestTimeToVisit: 'December – March (summer + Carnival)',
    language: 'Portuguese',
    currency: 'BRL (R$)',
    tags: ['Beach', 'Culture', 'Adventure'],
    famousPlaces: [
      { name: 'Christ the Redeemer', description: 'The 30-metre Art Deco statue of Jesus atop Corcovado mountain, arms outstretched over the city. Completed in 1931, it\'s one of the New Seven Wonders of the World.', type: 'Landmark', tip: 'Take the cog train up through the Tijuca Forest. Go early morning to avoid clouds wrapping around the summit.' },
      { name: 'Sugarloaf Mountain', description: 'A granite peak rising 396 metres from the mouth of Guanabara Bay. Two cable car rides reach the summit, offering 360-degree views of the city, beaches, and surrounding mountains.', type: 'Nature', tip: 'Take the last cable car up for sunset — watching Rio light up as darkness falls is magical. The first car goes to Morro da Urca, which has a restaurant and bar.' },
      { name: 'Copacabana Beach', description: 'A 4km arc of white sand and crashing Atlantic waves, lined with the famous black-and-white wave-patterned promenade. The beach is Rio\'s living room — football, volleyball, and samba happen here daily.', type: 'Beach', tip: 'Post up near Posto 6 (lifeguard station 6) for a more local, less touristy experience. Try fresh açaí from the beach vendors.' },
      { name: 'Escadaria Selarón', description: 'A world-famous set of 215 steps covered in over 2,000 colourful tiles collected from 60 countries. Created by Chilean artist Jorge Selarón, who called it his "tribute to the Brazilian people".', type: 'Landmark', tip: 'Visit in the morning for the best light and fewer crowds. The steps connect Lapa and Santa Teresa neighbourhoods.' }
    ]
  },
  {
    id: 'istanbul',
    name: 'Istanbul',
    country: 'Turkey',
    continent: 'Europe',
    coordinates: { lat: 41.0082, lng: 28.9784 },
    tagline: 'Where continents collide across the Bosphorus',
    description: 'Istanbul is the only city in the world that straddles two continents, and that duality defines everything about it. Roman hippodromes, Byzantine mosaics, Ottoman mosques, and modern galleries share the same skyline. The Bosphorus strait glitters between Europe and Asia, and the city\'s food — from street-side simit to elaborate Ottoman cuisine — is among the world\'s most underrated.',
    bestTimeToVisit: 'April – May or September – November',
    language: 'Turkish',
    currency: 'TRY (₺)',
    tags: ['Culture', 'Historical', 'Food'],
    famousPlaces: [
      { name: 'Hagia Sophia', description: 'Originally a Byzantine cathedral (537 AD), then an Ottoman mosque, then a museum, and now a mosque again. Its massive dome — an engineering miracle for its era — seems to float on a halo of light from 40 windows.', type: 'Landmark', tip: 'Enter through the main western door for the most dramatic first impression of the interior. Visit outside of prayer times for full access.' },
      { name: 'Blue Mosque', description: 'Sultan Ahmed Mosque, known for its six minarets and interior covered in over 20,000 handmade İznik tiles in blue floral patterns. It\'s one of the few mosques to rival Hagia Sophia in scale.', type: 'Temple', tip: 'The mosque is open to visitors between prayer times. Remove shoes, cover shoulders and legs. Early morning offers the most peace.' },
      { name: 'Grand Bazaar', description: 'One of the world\'s oldest and largest covered markets, with over 4,000 shops spread across 61 covered streets. Since 1461, it has sold everything from carpets and ceramics to gold and leather.', type: 'Market', tip: 'Enter from the Beyazıt Gate and head to the inner lanes. The tourist-facing shops are around the edges — the best artisan workshops are buried deep inside.' },
      { name: 'Bosphorus Cruise', description: 'A ferry ride along the strait dividing Europe and Asia, passing Ottoman palaces, wooden mansions (yalıs), medieval fortresses, and fishing villages. The water is busy with tankers, ferries, and fishermen.', type: 'Experience', tip: 'Take the public ferry from Eminönü (much cheaper than tourist boats). Sit on the right side heading north for the European shore views.' }
    ]
  },
  {
    id: 'banff',
    name: 'Banff',
    country: 'Canada',
    continent: 'North America',
    coordinates: { lat: 51.1784, lng: -115.5708 },
    tagline: 'Turquoise lakes in the Canadian Rockies',
    description: 'Banff National Park is Canada\'s oldest national park and the jewel of the Canadian Rockies. Turquoise glacial lakes, jagged peaks, dense pine forests, and abundant wildlife create landscapes so vivid they look digitally enhanced. The charming town of Banff sits within the park, offering mountain culture alongside world-class skiing, hiking, and hot springs.',
    bestTimeToVisit: 'June – September (hiking) or December – March (skiing)',
    language: 'English, French',
    currency: 'CAD ($)',
    tags: ['Nature', 'Adventure'],
    famousPlaces: [
      { name: 'Lake Louise', description: 'A glacial lake of impossible turquoise, backed by the Victoria Glacier and the historic Fairmont Chateau. The colour comes from rock flour — finely ground glacial sediment suspended in the water.', type: 'Nature', tip: 'Rent a canoe at dawn before the tour buses arrive. The lake is a mirror at sunrise. In winter, it freezes into a natural skating rink.' },
      { name: 'Moraine Lake', description: 'A glacially-fed lake in the Valley of the Ten Peaks, often considered the most beautiful lake in the world. Its vivid blue colour intensifies in June as glacial meltwater flows in.', type: 'Nature', tip: 'The road to Moraine Lake opens late May/early June depending on snow. Parks Canada now requires a shuttle reservation — book well ahead.' },
      { name: 'Johnston Canyon', description: 'A 5.4km trail through a limestone canyon with catwalks bolted to the cliff face above a rushing creek. The Lower Falls (1.1km in) and Upper Falls (2.7km) are both spectacular.', type: 'Trail', tip: 'In winter, the frozen waterfall is even more dramatic. Guided ice walk tours provide crampons and take you behind the frozen curtain.' },
      { name: 'Banff Upper Hot Springs', description: 'Natural mineral hot springs at the base of Sulphur Mountain, heated to 37–40°C. Soaking in steaming water surrounded by snow-covered peaks is quintessential Canadian Rockies.', type: 'Nature', tip: 'Visit after a day of hiking for maximum appreciation. The last hour before closing is the quietest time.' }
    ]
  },
  {
    id: 'amalfi-coast',
    name: 'Amalfi Coast',
    country: 'Italy',
    continent: 'Europe',
    coordinates: { lat: 40.6333, lng: 14.6029 },
    tagline: 'Cliffside villages above the Mediterranean',
    description: 'The Amalfi Coast is a 50km stretch of Italian coastline so beautiful it was declared a UNESCO World Heritage Site. Pastel-coloured villages cling to steep cliffs above cobalt waters, connected by a narrow, winding road that is itself an adventure. Lemon groves cascade down terraces, fishing boats dot tiny harbours, and every meal includes views that rival the food.',
    bestTimeToVisit: 'May – June or September – October',
    language: 'Italian',
    currency: 'EUR (€)',
    tags: ['Beach', 'Culture', 'Food'],
    famousPlaces: [
      { name: 'Positano', description: 'The most photographed village on the coast — a cascade of pastel buildings tumbling down a cliff to a crescent beach. Bougainvillea spills over every balcony, and boutiques sell handmade sandals and linen.', type: 'Village', tip: 'Stay at least one night. Day-trippers leave by 5pm and the village transforms into something intimate and magical.' },
      { name: 'Path of the Gods', description: 'A spectacular high-altitude hiking trail connecting Agerola to Nocelle (above Positano), offering jaw-dropping views of the coastline, Capri, and the open Mediterranean from 500 metres up.', type: 'Trail', tip: 'Hike from Agerola to Nocelle (mostly downhill). Start early to avoid midday heat. The path is narrow and exposed — wear proper shoes.' },
      { name: 'Ravello', description: 'A hilltop town perched 350 metres above the sea, known for its stunning gardens and classical music festival. Villa Rufolo and Villa Cimbrone offer terraces with some of the most famous views in Italy.', type: 'Village', tip: 'Villa Cimbrone\'s Terrace of Infinity is worth the walk through the gardens alone. Time your visit for late afternoon light.' },
      { name: 'Amalfi Cathedral', description: 'A 9th-century cathedral in Arab-Norman style with a striking striped facade and a Cloister of Paradise featuring 120 slender columns. The town of Amalfi was once a powerful maritime republic.', type: 'Landmark', tip: 'Visit the Cloister of Paradise — it\'s a separate ticket but the most beautiful part of the complex.' }
    ]
  },
  {
    id: 'petra',
    name: 'Petra',
    country: 'Jordan',
    continent: 'Asia',
    coordinates: { lat: 30.3285, lng: 35.4444 },
    tagline: 'A rose-red city half as old as time',
    description: 'Petra is an ancient Nabataean city carved directly into rose-red sandstone cliffs in the Jordanian desert. A UNESCO World Heritage Site and one of the New Seven Wonders, it was the capital of a trading empire that controlled incense routes across Arabia. The narrow Siq canyon leading to the Treasury is one of the most dramatic entrances to any archaeological site on Earth.',
    bestTimeToVisit: 'March – May or September – November',
    language: 'Arabic',
    currency: 'JOD (د.ا)',
    tags: ['Historical', 'Adventure'],
    famousPlaces: [
      { name: 'The Treasury (Al-Khazneh)', description: 'Petra\'s most famous monument — a Hellenistic facade carved into the cliff face, standing 40 metres tall. Made world-famous by Indiana Jones, the intricate carvings emerge dramatically as you exit the narrow Siq canyon.', type: 'Archaeological Site', tip: 'Visit at 7am when the first sunlight hits the facade and turns it golden-pink. "Petra by Night" (Monday, Wednesday, Saturday) illuminates it with 1,500 candles.' },
      { name: 'The Monastery (Ad-Deir)', description: 'An even larger carved facade than the Treasury (50m wide, 45m tall), reached by climbing 800 rock-cut steps. The effort rewards with one of Petra\'s most awe-inspiring monuments and sweeping desert views.', type: 'Archaeological Site', tip: 'Start the climb before 8am to avoid the heat. A Bedouin tea stall at the top offers the perfect recovery spot with a view.' },
      { name: 'The Siq', description: 'A 1.2km narrow gorge with walls rising 80 metres on either side, serving as the main entrance to Petra. The sandstone walls display natural colour bands — red, pink, orange, yellow — sculpted by water over millennia.', type: 'Nature', tip: 'Walk slowly and look at the walls, not just ahead. Ancient water channels and carved niches are cut into the rock. The play of light changes dramatically throughout the day.' },
      { name: 'Royal Tombs', description: 'A row of massive carved facades on the eastern cliff face, including the Urn Tomb, Silk Tomb, and Palace Tomb. Their scale rivals the Treasury and they receive beautiful afternoon light.', type: 'Archaeological Site', tip: 'Visit in late afternoon when the western sun illuminates the facades and turns them brilliant rose-gold.' }
    ]
  },
  {
    id: 'rome',
    name: 'Rome',
    country: 'Italy',
    continent: 'Europe',
    coordinates: { lat: 41.9028, lng: 12.4964 },
    tagline: 'The eternal city of empire, marble, and dolce vita',
    description: 'Rome is a magnificent open-air museum where three millennia of history unfold on every cobblestone corner. From the towering arches of the Colosseum to the Baroque splendour of Piazza Navona and the quiet alleys of Trastevere, the Italian capital marries monumental antiquities with passionate culinary traditions and vibrant contemporary street life.',
    bestTimeToVisit: 'April – May or September – October',
    language: 'Italian',
    currency: 'EUR (€)',
    tags: ['Culture', 'Historical', 'Food'],
    famousPlaces: [
      { name: 'The Colosseum & Roman Forum', description: 'The grandest amphitheatre of antiquity, capable of holding 50,000 spectators for gladiatorial spectacles, flanked by the sprawling civic ruins of the Roman Forum.', type: 'Archaeological Site', tip: 'Book a full arena floor or underground tour early in the morning to beat midday Mediterranean heat.' },
      { name: 'Vatican Museums & Sistine Chapel', description: 'Home to Michelangelo\'s breathtaking fresco ceiling and centuries of papal art collections, culminating in St. Peter\'s Basilica.', type: 'Museum', tip: 'Reserve early-access tickets at 8:00 AM before the main galleries fill.' },
      { name: 'The Pantheon', description: 'The best-preserved ancient monument in Rome, famous for its 2,000-year-old unreinforced concrete dome and magnificent open oculus.', type: 'Temple', tip: 'Step inside around noon when the sunlight pours directly through the oculus onto the marble floor.' },
      { name: 'Trevi Fountain & Spanish Steps', description: 'Rome\'s premier Baroque fountain where coin tosses guarantee a return to the city, framed by the grand staircase of Trinità dei Monti.', type: 'Landmark', tip: 'Visit after 11:00 PM when the fountain is illuminated and daytime tour crowds have dispersed.' }
    ]
  },
  {
    id: 'london',
    name: 'London',
    country: 'United Kingdom',
    continent: 'Europe',
    coordinates: { lat: 51.5074, lng: -0.1278 },
    tagline: 'Royal heritage, global culture, and timeless riverbanks',
    description: 'London is an electric global capital seamlessly weaving thousand-year-old royal traditions with avant-garde arts, Michelin-starred gastropubs, and lush royal parks. From the ancient Tower of London to modern architectural icons like The Shard along the winding River Thames, every borough offers a distinct world of discovery.',
    bestTimeToVisit: 'May – September for mild weather and long daylight hours',
    language: 'English',
    currency: 'GBP (£)',
    tags: ['Culture', 'Historical', 'Urban'],
    famousPlaces: [
      { name: 'Tower of London & Tower Bridge', description: 'A fortress with a dark 900-year history housing the dazzling Crown Jewels, positioned right beside London\'s iconic Victorian bascule bridge.', type: 'Landmark', tip: 'Join a free Yeoman Warder (Beefeater) tour included with admission for brilliant storytelling.' },
      { name: 'The British Museum', description: 'A treasure house of human history containing over 8 million artifacts, including the Rosetta Stone, Parthenon Sculptures, and Egyptian mummies.', type: 'Museum', tip: 'Admission is free. Head straight to Room 4 (Egyptian Sculpture) first thing in the morning.' },
      { name: 'Westminster Abbey & Big Ben', description: 'The coronation church of British monarchs since 1066, standing proudly across Parliament Square from the resonant Elizabeth Tower (Big Ben).', type: 'Historical', tip: 'Attend Choral Evensong at Westminster Abbey at 5:00 PM for a sublime, free musical experience.' },
      { name: 'Borough Market', description: 'London\'s oldest food market, brimming with artisanal cheeses, freshly shucked oysters, gourmet sausage rolls, and street food stalls from around the globe.', type: 'Market', tip: 'Go on Wednesday or Thursday morning for a full selection with fewer weekend crowds.' }
    ]
  },
  {
    id: 'amsterdam',
    name: 'Amsterdam',
    country: 'Netherlands',
    continent: 'Europe',
    coordinates: { lat: 52.3676, lng: 4.9041 },
    tagline: 'Canals, golden age masterworks, and pedal-powered charm',
    description: 'Amsterdam is celebrated for its UNESCO-protected canal ring, elegant gabled merchant townhouses, and relaxed, progressive urban culture. With more bicycles than residents and world-class museums dedicated to Rembrandt, Vermeer, and Van Gogh, the Dutch capital charms visitors through both serene water views and vibrant cafe culture.',
    bestTimeToVisit: 'April – May for tulip season or September – October for golden canal views',
    language: 'Dutch (English widely spoken)',
    currency: 'EUR (€)',
    tags: ['Culture', 'Urban', 'Historical'],
    famousPlaces: [
      { name: 'Rijksmuseum', description: 'The national museum of the Netherlands, displaying Dutch Golden Age masterpieces including Rembrandt\'s The Night Watch and Vermeer\'s The Milkmaid.', type: 'Museum', tip: 'Book the first morning slot and take the passage under the museum on foot or bicycle.' },
      { name: 'Anne Frank House', description: 'The historic canal annex where Anne Frank hid during WWII and penned her world-famous diary, maintained as a moving and solemn memorial.', type: 'Museum', tip: 'Tickets are released strictly online weeks in advance and sell out in minutes.' },
      { name: 'Jordaan & Canal Ring', description: 'A picturesque 17th-century district of narrow streets, artisan boutiques, flower-lined canal bridges, and cosy brown cafes.', type: 'Neighbourhood', tip: 'Rent a bicycle or take an open-air electric boat tour at sunset for the most atmospheric perspective.' },
      { name: 'Van Gogh Museum', description: 'The world\'s largest collection of paintings, drawings, and personal letters by Vincent van Gogh, tracing his artistic evolution from Paris to Provence.', type: 'Museum', tip: 'Download the museum audio tour on your phone for intimate insights into Van Gogh’s mental journey.' }
    ]
  },
  {
    id: 'prague',
    name: 'Prague',
    country: 'Czechia',
    continent: 'Europe',
    coordinates: { lat: 50.0755, lng: 14.4378 },
    tagline: 'The city of a hundred golden spires and fairy-tale bridges',
    description: 'Prague is one of Europe\'s best-preserved gothic, renaissance, and baroque jewels, largely untouched by the destruction of World War II. Towering castle ramparts, atmospheric gas-lit alleys, world-famous pilsner cellars, and the graceful Charles Bridge over the Vltava River make it feel like walking through a living historic fairy tale.',
    bestTimeToVisit: 'May – June or September – October',
    language: 'Czech',
    currency: 'CZK (Kč)',
    tags: ['Historical', 'Culture', 'Urban'],
    famousPlaces: [
      { name: 'Charles Bridge', description: 'A 14th-century stone arch bridge adorned with 30 baroque statues of saints, connecting the Old Town with the Castle district across the Vltava.', type: 'Landmark', tip: 'Cross at sunrise when morning mist wraps around the statues and the bridge is virtually empty.' },
      { name: 'Prague Castle & St. Vitus Cathedral', description: 'The largest ancient castle complex in the world, featuring the soaring gothic spires and stained-glass beauty of St. Vitus Cathedral.', type: 'Historical', tip: 'Climb the South Tower of St. Vitus for panoramic views spanning all of Prague\'s red-tiled rooftops.' },
      { name: 'Old Town Square & Astronomical Clock', description: 'Prague\'s beating heart, famous for the medieval Orloj clock that performs a mechanical parade of the Apostles on the hour.', type: 'Landmark', tip: 'Grab a table at a rooftop terrace overlooking the square 10 minutes before the top of the hour.' },
      { name: 'Vyšehrad Fortress', description: 'A tranquil hilltop historic fort offering sweeping river vistas, gothic cemetery monuments, and peaceful gardens far from tourist crowds.', type: 'Historical', tip: 'A perfect afternoon picnic spot with panoramic views of the river bridges.' }
    ]
  },
  {
    id: 'lisbon',
    name: 'Lisbon',
    country: 'Portugal',
    continent: 'Europe',
    coordinates: { lat: 38.7223, lng: -9.1393 },
    tagline: 'Sun-drenched hills, azulejo tiles, and soulful fado melodies',
    description: 'Lisbon captivates with pastel-hued buildings, intricate ceramic tiles (azulejos), yellow vintage trams rattling up steep inclines, and sweeping viewpoint terraces (miradouros) over the Tagus River estuary. With irresistible pasteis de nata, freshly caught seafood, and warm Atlantic breezes, it is Europe’s coolest coastal capital.',
    bestTimeToVisit: 'March – May or September – November',
    language: 'Portuguese',
    currency: 'EUR (€)',
    tags: ['Culture', 'Food', 'Historical'],
    famousPlaces: [
      { name: 'Belém Tower & Jerónimos Monastery', description: 'Manueline architectural wonders celebrating Portugal\'s Age of Discovery, decorated with stone carved ropes and maritime motifs.', type: 'Historical', tip: 'Walk 5 minutes down the avenue to Fábrica dos Pastéis de Belém for warm custard tarts dusted with cinnamon.' },
      { name: 'Alfama Old Quarter', description: 'Lisbon\'s oldest neighborhood, a labyrinth of cobbled alleys, drying laundry, hidden fado taverns, and medieval houses leading to Castelo de São Jorge.', type: 'Neighbourhood', tip: 'Visit a traditional Tasca in Alfama around 9:00 PM for spontaneous live acoustic fado singing.' },
      { name: 'Miradouro de Santa Luzia & Senhora do Monte', description: 'Terraced lookout points offering panoramic views across red roofs, church domes, and cruise ships sailing the Tagus River.', type: 'Landmark', tip: 'Head to Senhora do Monte for sunset with a cold Vinho Verde as street musicians play.' },
      { name: 'Tram 28 Scenic Route', description: 'The iconic yellow 1930s Remodelado tram navigating impossibly tight curves and steep hills between Martim Moniz and Campo de Ourique.', type: 'Landmark', tip: 'Board at the first or last stop early in the morning to secure a coveted window seat.' }
    ]
  },
  {
    id: 'swiss-alps',
    name: 'Swiss Alps',
    country: 'Switzerland',
    continent: 'Europe',
    coordinates: { lat: 46.5592, lng: 7.9856 },
    tagline: 'Majestic jagged peaks, crystalline glacial lakes, and alpine wonder',
    description: 'The Swiss Alps represent the pinnacle of dramatic mountain topography, pristine alpine meadows, and timeless chalet villages. From the sheer pyramid of the Matterhorn to the thundering waterfalls of Lauterbrunnen and world-class ski trails, it is an awe-inspiring sanctuary for outdoor adventurers and nature enthusiasts.',
    bestTimeToVisit: 'June – September for alpine hiking or Dec – March for winter sports',
    language: 'German, French, Italian, Romansh',
    currency: 'CHF (Fr.)',
    tags: ['Adventure', 'Nature'],
    famousPlaces: [
      { name: 'Jungfraujoch (Top of Europe)', description: 'The highest railway station in Europe at 3,454 metres, providing panoramic views across the colossal Aletsch Glacier and ice palace tunnels.', type: 'Nature', tip: 'Check the live summit webcam before boarding the mountain cogwheel train to ensure clear skies.' },
      { name: 'The Matterhorn & Zermatt', description: 'The legendary jagged peak that inspired the Toblerone logo, towering above the car-free mountain resort village of Zermatt.', type: 'Nature', tip: 'Take the Gornergrat cog railway up to 3,089m for the classic reflection of the Matterhorn in Riffelsee lake.' },
      { name: 'Lauterbrunnen Valley', description: 'A dramatic glacial trough valley framed by 72 plunging waterfalls, sheer limestone cliffs, and traditional wooden farmhouses.', type: 'Nature', tip: 'Walk behind the roaring Staubbach Falls spray along the cliffside path.' },
      { name: 'Lake Oeschinen', description: 'A turquoise glacial lake surrounded by sheer 500m rock walls, accessible via scenic mountain coaster and panoramic hiking trails.', type: 'Nature', tip: 'Rent a wooden rowboat on the lake for an unforgettable perspective of the turquoise waters.' }
    ]
  },
  {
    id: 'singapore',
    name: 'Singapore',
    country: 'Singapore',
    continent: 'Asia',
    coordinates: { lat: 1.3521, lng: 103.8198 },
    tagline: 'A futuristic garden metropolis where cultures converge',
    description: 'Singapore is a dazzling city-state known as the "City in a Garden" — where futuristic Supertree vertical gardens meet UNESCO-recognized hawker centers, historic shophouses, and tranquil tropical rainforests. It is ultra-clean, remarkably green, and one of the world\'s greatest melting pots of Chinese, Malay, Indian, and Peranakan traditions.',
    bestTimeToVisit: 'Year-round tropical climate; November – January has festive lights',
    language: 'English, Mandarin, Malay, Tamil',
    currency: 'SGD ($)',
    tags: ['Urban', 'Food', 'Nature'],
    famousPlaces: [
      { name: 'Gardens by the Bay & Supertrees', description: 'A 250-acre horticultural park featuring massive tree-like vertical gardens, the world\'s largest glass greenhouse, and an indoor mist-shrouded cloud forest waterfall.', type: 'Nature', tip: 'Catch the Garden Rhapsody light and sound show twice nightly at 7:45 PM and 8:45 PM for free.' },
      { name: 'Marina Bay Sands SkyPark', description: 'The world-famous three-tower resort topped with a cantilevered SkyPark, offering panoramic 360-degree views of the Singapore Strait and skyline.', type: 'Landmark', tip: 'Visit the observation deck at twilight to watch the city lights illuminate across Marina Bay.' },
      { name: 'Chinatown & Maxwell Food Centre', description: 'Historic colorful shophouses, ornate Buddhist and Hindu temples, and world-renowned street food like Tian Tian Hainanese Chicken Rice.', type: 'Market', tip: 'Try the chicken rice, laksa, and freshly squeezed sugarcane juice with lime.' },
      { name: 'Jewel Changi HSBC Rain Vortex', description: 'The world\'s tallest indoor waterfall cascading 40 metres through the center of a glass dome surrounded by a lush indoor forest valley.', type: 'Landmark', tip: 'Located inside the airport public area — easily visited upon arrival or departure.' }
    ]
  },
  {
    id: 'bangkok',
    name: 'Bangkok',
    country: 'Thailand',
    continent: 'Asia',
    coordinates: { lat: 13.7563, lng: 100.5018 },
    tagline: 'Golden spire temples, lively river canals, and legendary street feasts',
    description: 'Bangkok is a sensory explosion of sound, color, and flavor. Magnificent Buddhist temples glisten along the Chao Phraya River, neon-lit tuk-tuks zip through vibrant night markets, and street food carts serve world-class Pad Thai and Tom Yum. The city balances sacred Thai heritage with buzzing modern shopping districts and rooftop sky bars.',
    bestTimeToVisit: 'November – February (cooler and drier months)',
    language: 'Thai',
    currency: 'THB (฿)',
    tags: ['Culture', 'Food', 'Historical'],
    famousPlaces: [
      { name: 'The Grand Palace & Wat Phra Kaew', description: 'The ceremonial residence of the Kings of Siam since 1782, housing the deeply revered Emerald Buddha carved from a single block of jade.', type: 'Temple', tip: 'Strict dress code enforced: shoulders and knees must be fully covered. No transparent fabrics.' },
      { name: 'Wat Arun (Temple of Dawn)', description: 'A majestic Buddhist temple on the Thonburi bank of the Chao Phraya, covered in intricate colored porcelain mosaics and seashells.', type: 'Temple', tip: 'Take a cross-river ferry for just 5 Baht from Tha Tien pier. The temple is stunning at sunset.' },
      { name: 'Chatuchak Weekend Market', description: 'One of the largest outdoor markets in the world, with over 15,000 stalls selling fashion, handcrafted ceramics, vintage goods, and Thai desserts.', type: 'Market', tip: 'Grab an iced Thai milk tea and download an offline map of the market sections.' },
      { name: 'Chao Phraya River & Klong Canals', description: 'The bustling arterial river of Bangkok, home to longtail canal boats, floating vendors, and luxury evening dining cruises.', type: 'Landmark', tip: 'Hop on the Chao Phraya Express Boat (Orange flag) for an authentic, cheap scenic commute.' }
    ]
  },
  {
    id: 'seoul',
    name: 'Seoul',
    country: 'South Korea',
    continent: 'Asia',
    coordinates: { lat: 37.5665, lng: 126.9780 },
    tagline: 'Joseon dynasty palaces, cutting-edge tech, and vibrant K-culture',
    description: 'Seoul is an exhilarating powerhouse where 600-year-old royal palaces stand in harmony with futuristic architectural marvels, ultra-fast tech, and trendsetting music and fashion. From steaming bowls of bibimbap in century-old markets to the neon nightlife of Hongdae and tranquil mountain trails, Seoul never stops reinventing itself.',
    bestTimeToVisit: 'September – November (crisp autumn days) or April – May (spring blooms)',
    language: 'Korean',
    currency: 'KRW (₩)',
    tags: ['Urban', 'Culture', 'Food'],
    famousPlaces: [
      { name: 'Gyeongbokgung Palace', description: 'The main royal palace of the Joseon dynasty, framed by Mount Bugak, famous for its grand Gwanghwamun gate and the royal guard changing ceremony.', type: 'Historical', tip: 'Rent a traditional Hanbok dress nearby to gain completely free admission to the palace grounds.' },
      { name: 'Bukchon Hanok Village', description: 'A hillside residential neighborhood preserved with hundreds of traditional Korean tiled-roof houses (hanok) dating back centuries.', type: 'Neighbourhood', tip: 'Remember this is an active residential area — maintain quiet voice levels while taking photos.' },
      { name: 'N Seoul Tower (Namsan)', description: 'A communications tower perched atop Mount Namsan offering 360-degree vistas of the Seoul metropolis and fences laden with thousands of love locks.', type: 'Landmark', tip: 'Hike up the leafy mountain path or take the Namsan Cable Car right before dusk.' },
      { name: 'Gwangjang Market', description: 'One of Korea\'s oldest traditional street food markets, famous for bindaetteok (mung bean pancakes), mayak gimbap, and hand-cut kalguksu noodles.', type: 'Market', tip: 'Sit directly at the wooden benches in front of the food stall ajummas for the true market experience.' }
    ]
  },
  {
    id: 'cairo',
    name: 'Cairo',
    country: 'Egypt',
    continent: 'Africa',
    coordinates: { lat: 30.0444, lng: 31.2357 },
    tagline: 'Cradle of civilization along the timeless banks of the Nile',
    description: 'Cairo is a captivating, chaotic, and ancient metropolis where millennia of pharaonic, Roman, Coptic, and Islamic heritage intersect. Home to the legendary Great Pyramids of Giza, bustling medieval souks perfumed with saffron and frankincense, and graceful felucca sailboats drifting on the Nile, it is the beating cultural heart of the Arab world.',
    bestTimeToVisit: 'October – April for pleasant daytime temperatures',
    language: 'Arabic',
    currency: 'EGP (E£)',
    tags: ['Historical', 'Culture', 'Adventure'],
    famousPlaces: [
      { name: 'The Great Pyramids of Giza & Sphinx', description: 'The sole surviving wonder of the ancient world, erected over 4,500 years ago as tombs for Pharaohs Khufu, Khafre, and Menkaure, guarded by the enigmatic Great Sphinx.', type: 'Archaeological Site', tip: 'Book an early morning camel or horseback ride across the Giza plateau for panoramic desert vistas.' },
      { name: 'Grand Egyptian Museum (GEM)', description: 'A state-of-the-art museum complex displaying Egypt\'s archaeological riches, including the complete Tutankhamun treasure collection.', type: 'Museum', tip: 'Book advance timed-entry slots online and admire the colossal statue of Ramesses II in the atrium.' },
      { name: 'Khan el-Khalili Bazaar', description: 'A historic medieval marketplace dating back to the 14th century, famous for brass lanterns, spices, perfume oils, and silver jewelry.', type: 'Market', tip: 'Stop at El Fishawy, Cairo’s oldest cafe, for fresh mint tea and conversation.' },
      { name: 'The Citadel of Saladin & Mosque of Muhammad Ali', description: 'A medieval Islamic fortification on Mokattam Hill featuring the alabaster domes of the Muhammad Ali Mosque and commanding views over Cairo.', type: 'Historical', tip: 'On a clear day, look out from the Citadel ramparts to spot the Giza Pyramids on the distant horizon.' }
    ]
  },
  {
    id: 'serengeti',
    name: 'Serengeti',
    country: 'Tanzania',
    continent: 'Africa',
    coordinates: { lat: -2.3333, lng: 34.8333 },
    tagline: 'Endless golden plains and the world\'s greatest wildlife migration',
    description: 'The Serengeti is an iconic wilderness expanse whose Maasai name means "the place where the land moves on forever." Renowned for hosting the Great Migration — where millions of wildebeest, zebras, and gazelles brave crocodile-infested rivers and predatory lions — it is the ultimate African safari destination.',
    bestTimeToVisit: 'June – October (dry season, river crossings) or Jan – March (calving season)',
    language: 'Swahili, English',
    currency: 'TZS (TSh) / USD ($)',
    tags: ['Adventure', 'Nature'],
    famousPlaces: [
      { name: 'The Great Migration River Crossings', description: 'The heart-stopping spectacle of hundreds of thousands of wildebeest plunging across the Mara River, contending with river currents and giant Nile crocodiles.', type: 'Nature', tip: 'Visit Northern Serengeti between July and September for front-row river crossing action.' },
      { name: 'Ngorongoro Crater', description: 'The world\'s largest intact volcanic caldera, forming a natural wildlife amphitheatre home to black rhinos, giant tuskers, and dense lion prides.', type: 'Nature', tip: 'Descend into the crater at dawn when animal activity is highest and golden mist clings to the rim.' },
      { name: 'Seronera Valley Safari Drive', description: 'The central predator corridor of the Serengeti, boasting year-round water sources that attract leopards lounging in acacia trees and cheetahs stalking game.', type: 'Nature', tip: 'Bring high-quality binoculars and follow experienced safari driver-guides for big cat tracking.' },
      { name: 'Sunrise Hot Air Balloon Safari', description: 'A dawn aerial expedition gliding silently over the savannah plains as herds awaken, followed by a champagne bush breakfast.', type: 'Adventure', tip: 'Book well in advance as balloon basket spaces are strictly limited each morning.' }
    ]
  },
  {
    id: 'oaxaca',
    name: 'Oaxaca',
    country: 'Mexico',
    continent: 'North America',
    coordinates: { lat: 17.0732, lng: -96.7266 },
    tagline: 'Indigenous heritage, artisanal mezcal, and the culinary soul of Mexico',
    description: 'Oaxaca is the cultural, artistic, and gastronomic jewel of Mexico. Framed by the Sierra Madre mountains, it is world-renowned for its complex mole sauces, artisanal smoky mezcal, colorful Day of the Dead traditions, and indigenous Zapotec and Mixtec textile artistry in surrounding mountain pueblos.',
    bestTimeToVisit: 'October – April (Day of the Dead celebrations in late October/early November)',
    language: 'Spanish, Zapotec, Mixtec',
    currency: 'MXN ($)',
    tags: ['Culture', 'Food', 'Historical'],
    famousPlaces: [
      { name: 'Monte Albán Archaeological Zone', description: 'An ancient Zapotec capital leveled into a mountain summit 400m above the valley floor, featuring stone plazas, ball courts, and carved stelae.', type: 'Archaeological Site', tip: 'Arrive at 8:00 AM opening to watch the morning fog rise off the valley floor.' },
      { name: 'Templo de Santo Domingo de Guzmán', description: 'A breathtaking 16th-century Dominican church and monastery featuring an interior coated in ornate gilded baroque plasterwork.', type: 'Historical', tip: 'Visit the adjacent Jardín Etnobotánico to admire centuries-old cacti and endemic Oaxaca flora.' },
      { name: 'Hierve el Agua Petrified Waterfalls', description: 'Surreal white mineral-calcified waterfall formations over sheer cliff precipices with natural infinity spring pools overlooking the mountains.', type: 'Nature', tip: 'Pack a swimsuit to soak in the mineral-rich cliffside pools while admiring the view.' },
      { name: 'Mercado 20 de Noviembre & Pasillo de Humo', description: 'The legendary "Smoke Alley" food hall where fresh tasajo and cecina meats are grilled to order over live charcoal embers with tortillas and avocado.', type: 'Market', tip: 'Point to the cuts you want, buy a side of grilled scallions and fresh tortillas, and enjoy.' }
    ]
  },
  {
    id: 'buenos-aires',
    name: 'Buenos Aires',
    country: 'Argentina',
    continent: 'South America',
    coordinates: { lat: -34.6037, lng: -58.3816 },
    tagline: 'Tango passion, belle époque grandeur, and legendary asado steakhouses',
    description: 'Buenos Aires, the "Paris of South America," seduces with grand leafy boulevards, neoclassical palaces, historic bohemian cafes, and intimate milonga tango salons. Argentines take life passionately — from late-night steak dinners washed down with Malbec to fierce football rivalries and poetic literary bookshops.',
    bestTimeToVisit: 'March – May (fall) or September – November (spring jacaranda blooms)',
    language: 'Spanish',
    currency: 'ARS ($)',
    tags: ['Culture', 'Urban', 'Food'],
    famousPlaces: [
      { name: 'Teatro Colón', description: 'One of the world\'s top opera houses, celebrated globally alongside La Scala and Vienna State Opera for its near-perfect acoustics and opulent marble interiors.', type: 'Landmark', tip: 'Book a guided architectural tour or buy standing-room tickets for an unforgettable performance.' },
      { name: 'La Boca & Caminito', description: 'A colourful harbor neighborhood built by Italian immigrants, known for vibrant corrugated iron houses, open-air tango buskers, and Boca Juniors football lore.', type: 'Neighbourhood', tip: 'Stick to the well-patrolled Caminito pedestrian street and visit during daylight hours.' },
      { name: 'Recoleta Cemetery', description: 'A miniature city of ornate marble mausoleums, art deco vaults, and angel sculptures, including the final resting place of Eva Perón (Evita).', type: 'Historical', tip: 'Pick up a map at the gate to navigate the labyrinthine alleys of famous historic crypts.' },
      { name: 'San Telmo Sunday Antique Market', description: 'A bustling street fair along Calle Defensa featuring antique brassware, tango dancers in Plaza Dorrego, and fresh empanada stands.', type: 'Market', tip: 'Arrive around noon on Sunday and find a terrace cafe in Plaza Dorrego to watch the dancers.' }
    ]
  },
  {
    id: 'queenstown',
    name: 'Queenstown',
    country: 'New Zealand',
    continent: 'Oceania',
    coordinates: { lat: -45.0312, lng: 168.6626 },
    tagline: 'The world adventure capital nestled beside Lake Wakatipu',
    description: 'Queenstown is situated on the shores of crystal-clear Lake Wakatipu, framed by the jagged peaks of the Remarkables mountain range. The birthplace of commercial bungy jumping, it is New Zealand\'s adventure mecca for jet boating, skydiving, heli-skiing, and exploring the fjordland wilderness of nearby Milford Sound.',
    bestTimeToVisit: 'December – February for summer lake hikes or June – August for ski season',
    language: 'English, Māori',
    currency: 'NZD ($)',
    tags: ['Adventure', 'Nature'],
    famousPlaces: [
      { name: 'Milford Sound Fjord', description: 'Rudyard Kipling called it the "Eighth Wonder of the World" — a dramatic glacier-carved fjord with vertical granite cliffs rising 1,200m above dark waters and crashing waterfalls.', type: 'Nature', tip: 'Take a boat cruise; standing under the spray of Stirling Falls is an exhilarating highlight.' },
      { name: 'Skyline Gondola & Luge', description: 'The steepest cable car lift in the Southern Hemisphere climbing Bob\'s Peak, offering panoramic alpine views and gravity-fueled downhill luge tracks.', type: 'Adventure', tip: 'Buy a multi-ride luge pass — one lap down the scenic track is never enough!' },
      { name: 'Lake Wakatipu & TSS Earnslaw', description: 'A dramatic lightning-bolt shaped alpine lake sailed by the historic 1912 vintage steamship TSS Earnslaw across to Walter Peak High Country Farm.', type: 'Landmark', tip: 'Grab a famous Fergburger in town and enjoy it on the lakefront pebble beach.' },
      { name: 'Kawarau Gorge Suspension Bridge', description: 'The historic 43m stone and timber suspension bridge above the turquoise Kawarau River where AJ Hackett launched the world\'s first commercial bungy jump.', type: 'Adventure', tip: 'Even if you don\'t jump yourself, the viewing platforms provide fantastic action viewing.' }
    ]
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    country: 'India',
    continent: 'Asia',
    coordinates: { lat: 26.9124, lng: 75.7873 },
    tagline: 'The royal Pink City of Rajput fortresses, royal palaces, and jewel bazaars',
    description: 'Jaipur, the flamboyant capital of Rajasthan, is painted in warm terracotta-pink hues welcoming royalty and visitors alike. Founded in 1727 by Maharaja Sawai Jai Singh II, it is a treasure trove of monumental Rajput architecture — from the honeycomb balconies of Hawa Mahal to the colossal hilltop battlements of Amber Fort, bustling spice markets, and hand-block textile craft.',
    bestTimeToVisit: 'October – March for comfortable winter weather',
    language: 'Hindi, Rajasthani, English',
    currency: 'INR (₹)',
    tags: ['Culture', 'Historical', 'Food'],
    famousPlaces: [
      { name: 'Amber Fort & Palace', description: 'A magnificent hilltop fortress blending Rajput and Mughal architecture, featuring the dazzling Sheesh Mahal (Mirror Palace) where thousands of convex mirrors glitter with a single candle.', type: 'Historical', tip: 'Arrive at 8:30 AM to beat tour groups and walk up the rampart path for majestic views over Maota Lake.' },
      { name: 'Hawa Mahal (Palace of Winds)', description: 'A five-story pink sandstone honeycomb facade with 953 intricately carved jharokha windows built so royal ladies could observe street life without being seen.', type: 'Landmark', tip: 'Cross the street to the rooftop cafes directly opposite for the best viewpoint and photography angles.' },
      { name: 'City Palace & Jantar Mantar', description: 'The sprawling royal residence still home to the Maharaja of Jaipur, sitting adjacent to the world\'s largest stone astronomical observatory built in the 18th century.', type: 'Historical', tip: 'Book the royal grandeur tour to access the breathtaking private blue-and-gold suites of Chandra Mahal.' },
      { name: 'Nahargarh Fort Sunset View', description: 'Perched on the edge of the rugged Aravalli Hills, this fortress offers dramatic 360-degree views as golden hour bathes the entire pink city in twilight glow.', type: 'Nature', tip: 'Grab a table at the open-air fort restaurant for sunset drinks overlooking the city.' }
    ]
  },
  {
    id: 'agra',
    name: 'Agra',
    country: 'India',
    continent: 'Asia',
    coordinates: { lat: 27.1767, lng: 78.0081 },
    tagline: 'Eternal marble poetry and the grandeur of the Mughal Empire',
    description: 'Agra sits on the banks of the sacred Yamuna River, immortalized as the seat of the Mughal Empire at its peak. The city is home to the Taj Mahal — universally recognized as the greatest monument to love ever created — alongside monumental red sandstone fortresses and palatial gardens that transport visitors into an era of grand imperial history.',
    bestTimeToVisit: 'October – March (clear skies and pleasant temperatures)',
    language: 'Hindi, Urdu, English',
    currency: 'INR (₹)',
    tags: ['Historical', 'Culture'],
    famousPlaces: [
      { name: 'The Taj Mahal', description: 'A pristine white marble mausoleum commissioned in 1632 by Emperor Shah Jahan for his beloved wife Mumtaz Mahal. A UNESCO World Heritage masterpiece of symmetrical Islamic architecture.', type: 'Landmark', tip: 'Enter through the East Gate at sunrise (opens 30 min before dawn) to witness the white marble turn soft rose and gold.' },
      { name: 'Agra Fort', description: 'A colossal 16th-century red sandstone fortress that served as the main imperial residence of Mughal emperors, containing palatial courtyards and mosques.', type: 'Historical', tip: 'Visit the Musamman Burj tower where Shah Jahan spent his final years gazing across the river at the Taj Mahal.' },
      { name: 'Fatehpur Sikri', description: 'A remarkably preserved ghost city of red sandstone palaces founded by Emperor Akbar in 1571, featuring the monumental 54m Buland Darwaza (Gate of Magnificence).', type: 'Archaeological Site', tip: 'Hire an authorized ASI guide to understand the fascinating stories behind the Diwan-i-Khas pillar.' },
      { name: 'Mehtab Bagh (Moonlight Garden)', description: 'A charbagh garden complex on the opposite bank of the Yamuna River, offering tranquil, crowd-free views of the Taj Mahal reflecting in the water.', type: 'Nature', tip: 'Head here an hour before sunset for breathtaking reflections without the main complex crowds.' }
    ]
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    country: 'India',
    continent: 'Asia',
    coordinates: { lat: 25.3176, lng: 82.9739 },
    tagline: 'The spiritual soul of India on the sacred banks of the Ganges',
    description: 'Varanasi, or Kashi (the City of Light), is one of the world\'s oldest continuously inhabited cities. Hugging the holy Ganges River, it is the spiritual epicenter of Hinduism — a mystical place where life, death, devotion, and rebirth converge along stone steps (ghats), labyrinthine medieval alleyways, and the resonant chant of ancient mantras.',
    bestTimeToVisit: 'November – February for cool morning boat rides and festivals',
    language: 'Hindi, Bhojpuri, English',
    currency: 'INR (₹)',
    tags: ['Culture', 'Historical'],
    famousPlaces: [
      { name: 'Dashashwamedh Ghat & Ganga Aarti', description: 'The most vibrant ghat in Varanasi, where priests perform the spectacular evening Ganga Aarti ritual with multi-tiered brass oil lamps, bells, and incense.', type: 'Landmark', tip: 'Hire a wooden boat to watch the Aarti ceremony from the water for an unobstructed view.' },
      { name: 'Dawn Boat Ride on the Ganges', description: 'A sunrise rowing journey from Assi Ghat to Manikarnika Ghat as pilgrims perform morning surya namaskar prayers in the sacred waters.', type: 'Nature', tip: 'Start rowing at 5:30 AM to catch the golden morning mist rising over the river ghats.' },
      { name: 'Kashi Vishwanath Temple (Golden Temple)', description: 'One of the twelve sacred Jyotirlinga shrines dedicated to Lord Shiva, capped with a spire coated in pure gold, recently expanded with a grand river corridor.', type: 'Temple', tip: 'Visit early in the morning and carry a passport for the security check.' },
      { name: 'Sarnath Deer Park', description: 'Located 10km northeast, this tranquil park is where Gautama Buddha delivered his first sermon after attaining enlightenment, featuring the Dhamek Stupa.', type: 'Archaeological Site', tip: 'Visit the Sarnath Archaeological Museum to view the original 3rd-century BC Lion Capital of Ashoka.' }
    ]
  },
  {
    id: 'kerala',
    name: 'Kerala',
    country: 'India',
    continent: 'Asia',
    coordinates: { lat: 9.9312, lng: 76.2673 },
    tagline: 'God\'s own country of tranquil backwaters, spice hills, and coconut lagoons',
    description: 'Kerala is a tropical paradise stretching along India\'s southwest Malabar Coast. Famed for its peaceful palm-fringed backwater canals, misty Western Ghats tea plantations, Ayurvedic wellness sanctuaries, and Kathakali classical dance dramas, it is celebrated as one of the most serene and ecologically rich regions on Earth.',
    bestTimeToVisit: 'September – March for pleasant backwater cruising',
    language: 'Malayalam, English',
    currency: 'INR (₹)',
    tags: ['Nature', 'Beach', 'Culture'],
    famousPlaces: [
      { name: 'Alleppey (Alappuzha) Backwaters', description: 'An intricate network of interconnected brackish lagoons, rivers, and canals sailed by traditional thatched Kettuvallam houseboats.', type: 'Nature', tip: 'Book an overnight houseboat cruise with an onboard chef who prepares fresh Karimeen fish curry.' },
      { name: 'Munnar Tea Plantations', description: 'A hill station perched 1,600m above sea level, blanketed in rolling emerald tea gardens, mountain waterfalls, and cool misty peaks.', type: 'Nature', tip: 'Hike to Top Station at dawn for breathtaking views of clouds rolling over the Tamil Nadu valley.' },
      { name: 'Fort Kochi & Chinese Fishing Nets', description: 'A historic port town blending Portuguese churches, Dutch palaces, Jewish synagogues, and iconic cantilevered shore-operated fishing nets.', type: 'Neighbourhood', tip: 'Stroll along the Vasco da Gama promenade around sunset as fishermen lower the giant wooden nets.' },
      { name: 'Periyar National Park (Thekkady)', description: 'A wildlife sanctuary centered around a reservoir lake in the Cardamom Hills, home to wild elephant herds, tigers, and fragrant spice spice plantations.', type: 'Nature', tip: 'Take an early morning bamboo rafting and jungle trek led by tribal community guides.' }
    ]
  },
  {
    id: 'goa',
    name: 'Goa',
    country: 'India',
    continent: 'Asia',
    coordinates: { lat: 15.2993, lng: 74.1240 },
    tagline: 'Golden Arabian Sea shores, Portuguese heritage, and susegad coastal bliss',
    description: 'Goa blends warm tropical sunshine with 450 years of Portuguese colonial history. From quiet palm-lined crescent bays in the south to vibrant beach shacks serving fiery prawn balchão and chilled feni in the north, Goa embodies "susegad" — a relaxed, joyful appreciation of life by the sea.',
    bestTimeToVisit: 'November – February for sunny beach weather and festivals',
    language: 'Konkani, English, Hindi, Portuguese',
    currency: 'INR (₹)',
    tags: ['Beach', 'Culture', 'Food'],
    famousPlaces: [
      { name: 'Palolem & Butterfly Beach', description: 'A serene semi-circular bay in South Goa bordered by towering coconut palms, gentle turquoise surf, and dolphin-spotting boat trips.', type: 'Beach', tip: 'Rent a sea kayak in the morning to paddle over to the secluded Butterfly Beach.' },
      { name: 'Basilica of Bom Jesus', description: 'A 16th-century UNESCO World Heritage baroque basilica in Old Goa holding the sacred mortal remains of Saint Francis Xavier.', type: 'Historical', tip: 'Combine with a visit to the monumental Se Cathedral directly across the courtyard.' },
      { name: 'Fontainhas Latin Quarter', description: 'Asia\'s only Latin Quarter, characterized by narrow cobbled streets, tiled roof villas painted in vivid canary yellow, olive green, and cobalt blue.', type: 'Neighbourhood', tip: 'Stop by a traditional heritage bakery like Confeitaria 31 De Janeiro for fresh bebinca pastry.' },
      { name: 'Dudhsagar Waterfalls', description: 'A four-tiered waterfall cascading 310 metres down the sheer Western Ghats cliff face, resembling a sea of milk pouring through the dense jungle.', type: 'Nature', tip: 'Take an open-top 4x4 jeep safari through the Bhagwan Mahavir Wildlife Sanctuary to reach the pool.' }
    ]
  },
  {
    id: 'venice',
    name: 'Venice',
    country: 'Italy',
    continent: 'Europe',
    coordinates: { lat: 45.4408, lng: 12.3155 },
    tagline: 'The floating city of romantic gondolas and Venetian Gothic marble',
    description: 'Venice is an architectural marvel built upon 118 small islands connected by more than 400 stone bridges across shimmering canals. With no cars or roads, the city moves to the rhythm of gentle ripples, historic waterbuses (vaporetti), and graceful black gondolas gliding past Byzantine and Gothic marble palazzi.',
    bestTimeToVisit: 'April – May or September – October for ideal temperatures',
    language: 'Italian',
    currency: 'EUR (€)',
    tags: ['Culture', 'Historical', 'Urban'],
    famousPlaces: [
      { name: 'St. Mark\'s Basilica & Piazza San Marco', description: 'Napoleon called it "the drawing room of Europe" — an iconic piazza dominated by the glittering gold-leaf Byzantine mosaics of St. Mark\'s.', type: 'Historical', tip: 'Visit late at night when the orchestras at Caffè Florian play under the arches and the piazza is quiet.' },
      { name: 'The Grand Canal & Rialto Bridge', description: 'The bustling main water artery of Venice, spanned by the elegant 16th-century stone arch of the Rialto Bridge.', type: 'Landmark', tip: 'Ride Vaporetto Line 1 from Santa Lucia station to San Marco at sunset for an unforgettable tour.' },
      { name: 'Doge\'s Palace & Bridge of Sighs', description: 'The seat of Venetian political power for centuries, featuring grand gilded council chambers and the enclosed white limestone Bridge of Sighs.', type: 'Museum', tip: 'Book the "Secret Itineraries" tour to visit Casanova\'s attic prison cells.' },
      { name: 'Burano Island', description: 'A vibrant fishing island in the northern lagoon famous for century-old lacemaking and rainbow-colored houses reflecting in emerald canals.', type: 'Neighbourhood', tip: 'Take Vaporetto Line 12 from Fondamente Nove; try the traditional bussolà butter cookies.' }
    ]
  },
  {
    id: 'maldives',
    name: 'Maldives',
    country: 'Maldives',
    continent: 'Asia',
    coordinates: { lat: 3.2028, lng: 73.2207 },
    tagline: 'Overwater luxury villas floating above crystalline coral atolls',
    description: 'The Maldives is an archipelago of 1,192 coral islands grouped into 26 natural atolls in the Indian Ocean. Renowned for turquoise lagoons, pristine powdery white sands, vibrant coral reefs teeming with manta rays and sea turtles, and iconic thatched overwater bungalows, it is the world\'s premier tropical paradise.',
    bestTimeToVisit: 'November – April (dry monsoon season with calm seas)',
    language: 'Dhivehi, English',
    currency: 'MVR (Rf) / USD ($)',
    tags: ['Beach', 'Nature'],
    famousPlaces: [
      { name: 'North Malé Atoll Coral Lagoons', description: 'Crystal-clear turquoise waters teeming with live coral gardens, clownfish, reef sharks, and world-class scuba diving drift passages.', type: 'Nature', tip: 'Snorkel directly off the overwater villa boardwalks during high tide for incredible marine encounters.' },
      { name: 'Baa Atoll UNESCO Biosphere Reserve', description: 'A globally celebrated sanctuary, home to Hanifaru Bay where hundreds of giant manta rays and whale sharks gather to feed on plankton.', type: 'Nature', tip: 'Visit between June and November during full moon tidal surges for mass manta feeding spectacles.' },
      { name: 'Vaadhoo Island (Sea of Stars)', description: 'A natural phenomenon where bioluminescent phytoplankton illuminate the nighttime waves with glowing neon-blue sparkles upon disturbance.', type: 'Nature', tip: 'Best observed on moonless nights in late summer when water movement triggers the brilliant blue glow.' },
      { name: 'Maafushi Island Local Experience', description: 'A charming inhabited island offering guesthouses, sandbank picnics, and watersports that let travellers experience authentic Maldivian island culture.', type: 'Beach', tip: 'Book a sunset sandbank picnic excursion to relax on an uninhabited spit of sand surrounded by ocean.' }
    ]
  },
  {
    id: 'hawaii',
    name: 'Hawaii',
    country: 'United States',
    continent: 'North America',
    coordinates: { lat: 21.3069, lng: -157.8583 },
    tagline: 'Aloha spirit, dramatic volcanic pinnacles, and Pacific surf breaks',
    description: 'Hawaii is an isolated volcanic archipelago in the central Pacific, where lush rainforest valleys plunge into cobalt ocean depths, active volcanoes forge new land, and rich Polynesian heritage infuses daily life. From the high-energy surf breaks of Oahu to the emerald sea cliffs of Kauai, the islands exude natural majesty and warm Aloha.',
    bestTimeToVisit: 'April – May or September – November for pleasant trade winds',
    language: 'English, Hawaiian',
    currency: 'USD ($)',
    tags: ['Beach', 'Nature', 'Adventure'],
    famousPlaces: [
      { name: 'Waikiki Beach & Diamond Head', description: 'The historic birthplace of modern surfing framed by the volcanic crater of Diamond Head (Leahi) and gentle rolling Pacific rollers.', type: 'Beach', tip: 'Hike up Diamond Head summit trail at 6:00 AM for sunrise views over Honolulu.' },
      { name: 'Na Pali Coast (Kauai)', description: 'A 16-mile coastline of razor-sharp emerald fluted cliffs soaring 1,200m straight out of the crashing Pacific surf.', type: 'Nature', tip: 'Take a catamaran sailing tour or helicopter expedition; no roads penetrate this sheer wilderness.' },
      { name: 'Hawaii Volcanoes National Park', description: 'Home to Kilauea and Mauna Loa — two of the world\'s most active volcanoes — featuring steaming caldera craters and lava tubes.', type: 'Nature', tip: 'Walk through the lush Nahuku (Thurston) Lava Tube early in the morning.' },
      { name: 'Road to Hana (Maui)', description: 'A legendary 64-mile coastal highway crossing 59 bridges past plunging waterfalls, black-sand beaches, and rainforest bamboo groves.', type: 'Adventure', tip: 'Start by 7:00 AM and stop at Waiʻanapanapa State Park for the famous volcanic black-sand cove.' }
    ]
  },
  {
    id: 'berlin',
    name: 'Berlin',
    country: 'Germany',
    continent: 'Europe',
    coordinates: { lat: 52.5200, lng: 13.4050 },
    tagline: 'Reinvented history, avant-garde creativity, and pulsing urban freedom',
    description: 'Berlin is a magnetic city shaped by 20th-century tumult that transformed into Europe\'s capital of youth culture, electronic music, and open-minded artistic reinvention. From the neoclassical Brandenburg Gate and solemn Berlin Wall memorials to cutting-edge techno clubs and leafy canals in Kreuzberg, Berlin never stops evolving.',
    bestTimeToVisit: 'May – September for outdoor beer gardens and open-air canal festivals',
    language: 'German (English widely spoken)',
    currency: 'EUR (€)',
    tags: ['Urban', 'Historical', 'Culture'],
    famousPlaces: [
      { name: 'Brandenburg Gate & Unter den Linden', description: 'The neoclassical triumphal arch that once marked the Cold War division between East and West, now a global symbol of European unity.', type: 'Landmark', tip: 'Visit early in the morning or illuminated at midnight for a peaceful, evocative atmosphere.' },
      { name: 'East Side Gallery (Berlin Wall)', description: 'A 1.3km surviving section of the Berlin Wall along the Spree River, converted into the longest open-air mural gallery in the world.', type: 'Historical', tip: 'Walk from Warschauer Straße toward Ostbahnhof, stopping by the iconic "Fraternal Kiss" mural.' },
      { name: 'Museum Island (Museumsinsel)', description: 'A UNESCO World Heritage complex on the Spree housing five internationally renowned museums, including the bust of Nefertiti in the Neues Museum.', type: 'Museum', tip: 'Purchase a Museum Island day pass to explore both the Neues Museum and the Alte Nationalgalerie.' },
      { name: 'Reichstag Building & Glass Dome', description: 'The seat of the German parliament featuring Norman Foster\'s transparent glass dome offering panoramic views and vistas over the debating chamber below.', type: 'Historical', tip: 'Book your free dome admission online at least 3 weeks ahead of your trip.' }
    ]
  },
  {
    id: 'norwegian-fjords',
    name: 'Norwegian Fjords',
    country: 'Norway',
    continent: 'Europe',
    coordinates: { lat: 60.3913, lng: 5.3221 },
    tagline: 'Colossal glaciated fjord valleys, thundering waterfalls, and Nordic serenity',
    description: 'Norway\'s western fjord region is nature sculpted on a monumental scale. Formed by glaciers during the ice ages, deep saltwater fjords cut between near-vertical mountain walls hundreds of metres high, where roaring waterfalls plunge into emerald depths and colorful wooden fishing villages nestle along tranquil shores.',
    bestTimeToVisit: 'June – August for long daylight hours and hiking, or winter for Northern Lights',
    language: 'Norwegian, English',
    currency: 'NOK (kr)',
    tags: ['Nature', 'Adventure'],
    famousPlaces: [
      { name: 'Geirangerfjord & Nærøyfjord', description: 'UNESCO World Heritage fjords with sheer granite cliffs rising 1,400m above deep waters, adorned with the legendary "Seven Sisters" waterfalls.', type: 'Nature', tip: 'Take an electric zero-emission passenger catamaran cruise through the narrow passages for pure quiet.' },
      { name: 'Bryggen Historic Wharf (Bergen)', description: 'A series of vibrant wooden Hanseatic heritage commercial buildings lining the eastern harbor of Bergen, Norway\'s gateway to the fjords.', type: 'Historical', tip: 'Wander the narrow wooden alleys behind the facades to find artisan textile and leather workshops.' },
      { name: 'The Flåm Railway (Flåmsbana)', description: 'One of the steepest standard-gauge railway lines in the world, descending 866m through 20 tunnels from high mountain tundra to the edge of Aurlandsfjord.', type: 'Adventure', tip: 'Sit on the right side when departing Myrdal for the best waterfall vistas.' },
      { name: 'Preikestolen (Pulpit Rock)', description: 'A massive natural flat-topped granite cliff suspended 604 metres sheer above the sparkling blue waters of the Lysefjord.', type: 'Nature', tip: 'Start the 4-hour return hike early in the morning to beat tour groups and enjoy quiet cliff-edge views.' }
    ]
  }
];

export const continents = ['All', 'Asia', 'Europe', 'Africa', 'North America', 'South America', 'Oceania'];


export const tagOptions = ['All', 'Beach', 'Culture', 'Adventure', 'Nature', 'Urban', 'Historical', 'Food'];

export function getCustomDestinations() {
  try {
    if (typeof localStorage === 'undefined') return [];
    const raw = localStorage.getItem('wanderlust_custom_destinations');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCustomDestination(newDest) {
  try {
    if (typeof localStorage === 'undefined') return [newDest];
    const existing = getCustomDestinations();
    const filtered = existing.filter(d => d.id.toLowerCase() !== newDest.id.toLowerCase());
    const updated = [newDest, ...filtered];
    localStorage.setItem('wanderlust_custom_destinations', JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error('Failed to save custom destination:', err);
    return [];
  }
}

export function getAllDestinations() {
  const custom = getCustomDestinations();
  const builtInIds = new Set(destinations.map(d => d.id.toLowerCase()));
  const extra = custom.filter(c => !builtInIds.has(c.id.toLowerCase()));
  return [...destinations, ...extra];
}

export function getDestinationById(id) {
  if (!id) return null;
  const all = getAllDestinations();
  return all.find(d => d.id.toLowerCase() === id.toLowerCase()) || null;
}

export function searchDestinations(query) {
  const q = query.toLowerCase().trim();
  const all = getAllDestinations();
  if (!q) return all;
  return all.filter(d =>
    d.name.toLowerCase().includes(q) ||
    d.country.toLowerCase().includes(q) ||
    d.tagline.toLowerCase().includes(q) ||
    d.tags.some(t => t.toLowerCase().includes(q))
  );
}

export function filterByContinent(continent) {
  const all = getAllDestinations();
  if (!continent || continent === 'All') return all;
  return all.filter(d => d.continent === continent);
}

export function filterByTag(tag) {
  const all = getAllDestinations();
  if (!tag || tag === 'All') return all;
  return all.filter(d => d.tags.includes(tag));
}

export function filterDestinations(query, tag) {
  let results = getAllDestinations();
  if (query && query.trim()) {
    const q = query.toLowerCase().trim();
    results = results.filter(d =>
      d.name.toLowerCase().includes(q) ||
      d.country.toLowerCase().includes(q) ||
      d.tagline.toLowerCase().includes(q) ||
      d.tags.some(t => t.toLowerCase().includes(q))
    );
  }
  if (tag && tag !== 'All') {
    results = results.filter(d => d.tags.includes(tag));
  }
  return results;
}

export default destinations;

