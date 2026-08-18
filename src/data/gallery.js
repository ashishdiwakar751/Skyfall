import ASSETS from './assets';

/**
 * Gallery Media Data Configuration for Skyfall Lounge
 */

export const GALLERY_CATEGORIES = [
  { id: 'ALL', label: 'ALL' },
  { id: 'ROOFTOP', label: 'ROOFTOP' },
  { id: 'DINING', label: 'DINING' },
  { id: 'FOOD', label: 'FOOD' },
  { id: 'DRINKS', label: 'DRINKS' },
  { id: 'EVENTS', label: 'EVENTS' },
  { id: 'NIGHT', label: 'NIGHT' },
];

export const GALLERY_ITEMS = [
  {
    id: 'hero-nightscape',
    title: 'Skyfall Rooftop Nightscape',
    category: 'ROOFTOP',
    categories: ['ROOFTOP', 'NIGHT'],
    type: 'image',
    src: ASSETS.hero.image,
    alt: ASSETS.hero.alt,
    span: 'lg:col-span-2 lg:row-span-2',
    aspectRatio: 'aspect-[4/3] lg:aspect-auto h-full min-h-[300px] md:min-h-[420px]',
  },
  {
    id: 'rooftop-panoramic',
    title: 'Panoramic Rooftop View',
    category: 'ROOFTOP',
    categories: ['ROOFTOP', 'NIGHT'],
    type: 'image',
    src: ASSETS.rooftop.image,
    alt: ASSETS.rooftop.alt,
    span: 'lg:col-span-1 lg:row-span-1',
    aspectRatio: 'aspect-[4/3]',
  },
  {
    id: 'gourmet-dining',
    title: 'Gourmet Culinary Selection',
    category: 'DINING',
    categories: ['DINING', 'FOOD'],
    type: 'image',
    src: ASSETS.food.header,
    alt: ASSETS.food.headerAlt,
    span: 'lg:col-span-1 lg:row-span-1',
    aspectRatio: 'aspect-[4/3]',
  },
  {
    id: 'murg-makhani',
    title: 'Signature Murg Makhani',
    category: 'FOOD',
    categories: ['FOOD', 'DINING'],
    type: 'image',
    src: ASSETS.food.murgMakhani,
    alt: ASSETS.food.murgMakhaniAlt,
    span: 'lg:col-span-1 lg:row-span-1',
    aspectRatio: 'aspect-[4/3]',
  },
  {
    id: 'handcrafted-cocktails',
    title: 'Handcrafted Cocktails',
    category: 'DRINKS',
    categories: ['DRINKS', 'NIGHT'],
    type: 'image',
    src: ASSETS.drinks.main,
    alt: ASSETS.drinks.alt,
    span: 'lg:col-span-1 lg:row-span-1',
    aspectRatio: 'aspect-[4/3]',
  },
  {
    id: 'private-celebrations',
    title: 'Private Celebrations & VIP Dining',
    category: 'EVENTS',
    categories: ['EVENTS', 'NIGHT', 'DINING'],
    type: 'image',
    src: ASSETS.events.privateCelebration,
    alt: ASSETS.events.alt,
    span: 'lg:col-span-2 lg:row-span-1',
    aspectRatio: 'aspect-[16/9] lg:aspect-[21/9]',
  },
];

export default GALLERY_ITEMS;

