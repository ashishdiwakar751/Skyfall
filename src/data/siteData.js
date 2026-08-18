import { BUSINESS_INFO, ASSET_PATHS } from '../utils/constants';
import ASSETS from './assets';
import { MENU_CATEGORIES, MENU_ITEMS } from './menu';
import { REVIEWS_SUMMARY } from './reviews';
import EVENT_TYPES from './events';
import GALLERY_ITEMS from './gallery';

export const siteConfig = {
  business: BUSINESS_INFO,
  assets: ASSET_PATHS,
  assetConfig: ASSETS,
  menu: {
    categories: MENU_CATEGORIES,
    items: MENU_ITEMS,
  },
  reviews: REVIEWS_SUMMARY,
  events: EVENT_TYPES,
  gallery: GALLERY_ITEMS,
  navLinks: [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Experience', path: '/experience' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Reservation', path: '/reservation' },
  ],
};

export default siteConfig;
