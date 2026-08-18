import ASSETS from './assets';

/**
 * Events & Private Celebrations Data Model
 * Central source of truth for event categories and capabilities.
 */

export const EVENT_TYPES = [
  {
    id: 'birthdays',
    number: '01',
    title: 'BIRTHDAYS',
    subtitle: 'Elevated Birthday Celebrations',
    shortCopy: 'An elevated setting for memorable birthday celebrations.',
    description: 'Celebrate your milestone day above the city with panoramic rooftop views, handcrafted cocktails, and an ambient atmosphere crafted for special moments.',
    image: ASSETS.events.privateCelebration,
  },
  {
    id: 'anniversaries',
    number: '02',
    title: 'ANNIVERSARIES',
    subtitle: 'Refined Milestone Evenings',
    shortCopy: 'A refined evening for meaningful moments together.',
    description: 'Mark your special anniversary in an intimate, sophisticated rooftop environment with fine food, hand-mixed drinks, and an atmospheric backdrop.',
    image: ASSETS.events.privateCelebration,
  },
  {
    id: 'private-parties',
    number: '03',
    title: 'PRIVATE PARTIES',
    subtitle: 'Exclusive Rooftop Gatherings',
    shortCopy: 'A premium rooftop setting for private gatherings.',
    description: 'Gather your inner circle high above Kanpur for private parties, celebrations, and memorable group evenings with outdoor seating and vibrant lounge energy.',
    image: ASSETS.events.privateCelebration,
  },
  {
    id: 'corporate-gatherings',
    number: '04',
    title: 'CORPORATE GATHERINGS',
    subtitle: 'Atmospheric Professional Events',
    shortCopy: 'An atmospheric setting for team gatherings and professional celebrations.',
    description: 'Host team achievements, client dinners, and professional milestone celebrations in a modern rooftop lounge setting.',
    image: ASSETS.events.privateCelebration,
  },
];

export const EVENT_EXPERIENCE_FEATURES = [
  {
    id: 'rooftop-setting',
    title: 'ROOFTOP SETTING',
    description: 'Open-air elevation with panoramic city views and ambient evening lighting.',
  },
  {
    id: 'dining-drinks',
    title: 'DINING & DRINKS',
    description: 'Curated culinary selections paired with handcrafted cocktails and fine beverages.',
  },
  {
    id: 'live-entertainment',
    title: 'LIVE ENTERTAINMENT',
    description: 'Curated musical acoustics and evening DJ soundscapes to set the celebration mood.',
  },
  {
    id: 'reservations',
    title: 'RESERVATIONS',
    description: 'Streamlined table and group reservation arrangements for your party.',
  },
  {
    id: 'celebrations',
    title: 'CELEBRATIONS',
    description: 'A stylish, high-energy environment for marking life’s special milestones.',
  },
  {
    id: 'group-gatherings',
    title: 'GROUP GATHERINGS',
    description: 'Flexible lounge arrangements suited for intimate pairs or larger groups.',
  },
];

export default EVENT_TYPES;
