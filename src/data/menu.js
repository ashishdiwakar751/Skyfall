import ASSETS from './assets';

/**
 * Centralized Menu Data Configuration for Skyfall Lounge
 * Source of Truth: Verified Skyfall Lounge Menu Details
 */

export const MENU_CATEGORIES = [
  { id: 'all', name: 'ALL' },
  { id: 'pasta', name: 'PASTA' },
  { id: 'mad-indian-veg', name: 'MAD INDIAN — VEG' },
  { id: 'mad-indian-chicken', name: 'MAD INDIAN — CHICKEN' },
  { id: 'bar-bites', name: 'BAR BITES' },
  { id: 'breads', name: 'BREADS' },
  { id: 'biryani-rice', name: 'BIRYANI & RICE' },
  { id: 'salad-bar', name: 'SALAD BAR' },
  { id: 'sweet-cravings', name: 'SWEET CRAVINGS' },
  { id: 'wine-drinks', name: 'WINE & DRINKS' },
];

export const MENU_ITEMS = [
  // PASTA
  { id: 'veg-penne-arrabiata', name: 'Veg Penne Arrabiata', price: '₹475', category: 'pasta' },
  { id: 'chicken-penne-arrabiata', name: 'Chicken Penne Arrabiata', price: '₹545', category: 'pasta' },
  { id: 'white-sauce-penne-veg', name: 'White Sauce Penne Veg', price: '₹475', category: 'pasta' },
  { id: 'creamy-white-chicken-penne', name: 'Creamy White Chicken Penne', price: '₹545', category: 'pasta' },

  // MAD INDIAN — VEGETARIAN
  { id: 'paneer-butter-wala', name: 'Paneer Butter Wala', price: '₹495', category: 'mad-indian-veg' },
  { id: 'handi-paneer', name: 'Handi Paneer', price: '₹495', category: 'mad-indian-veg' },
  { id: 'awadhi-paneer-tikka-masala', name: 'Awadhi Paneer Tikka Masala', price: '₹495', category: 'mad-indian-veg' },
  { id: 'amritsari-kofta', name: 'Amritsari Kofta', price: '₹445', category: 'mad-indian-veg' },
  { id: 'shahi-kofta', name: 'Shahi Kofta', price: '₹445', category: 'mad-indian-veg' },
  { id: 'banjara-dum-aloo', name: 'Banjara Dum Aloo', price: '₹445', category: 'mad-indian-veg' },
  { id: 'mixed-vegetable', name: 'Mixed Vegetable', price: '₹445', category: 'mad-indian-veg' },
  { id: 'dhabe-waali-yellow-daal', name: 'Dhabe Waali Yellow Daal', price: '₹475', category: 'mad-indian-veg' },
  { id: 'smokey-daal-makhani', name: 'Smokey Daal Makhani', price: '₹495', category: 'mad-indian-veg' },

  // MAD INDIAN — CHICKEN
  {
    id: 'murg-makhani',
    name: 'Murg Makhani',
    price: '₹695',
    category: 'mad-indian-chicken',
    image: ASSETS.food.murgMakhani,
    featured: true,
    description: 'Tender chicken slow-cooked in rich velvety tomato gravy, infused with aromatic spices.',
  },
  { id: 'murg-chuzha-curry', name: 'Murg Chuzha Curry', price: '₹595', category: 'mad-indian-chicken' },
  { id: 'kadhai-chicken', name: 'Kadhai Chicken', price: '₹595', category: 'mad-indian-chicken' },
  { id: 'chicken-tikka-masala', name: 'Chicken Tikka Masala', price: '₹595', category: 'mad-indian-chicken' },
  { id: 'chicken-keema-masala', name: 'Chicken Keema Masala', price: '₹595', category: 'mad-indian-chicken' },

  // BAR BITES
  { id: 'fish-chips', name: 'Fish & Chips', price: '₹645', category: 'bar-bites' },
  { id: 'chicken-bruschetta', name: 'Chicken Bruschetta', price: '₹495', category: 'bar-bites' },
  { id: 'buffalo-crispy-chicken-wings', name: 'Buffalo Crispy Chicken Wings', price: '₹495', category: 'bar-bites' },
  { id: 'barbecue-chicken', name: 'Barbecue Chicken', price: '₹495', category: 'bar-bites' },
  { id: 'chicken-nuggets', name: 'Chicken Nuggets', price: '₹395', category: 'bar-bites' },
  { id: 'chilly-meat-balls', name: 'Chilly Meat Balls', price: '₹595', category: 'bar-bites' },
  { id: 'schezwan-chicken-sausages', name: 'Schezwan Chicken Sausages', price: '₹495', category: 'bar-bites' },
  { id: 'chicken-crispy-drums', name: 'Chicken Crispy Drums', price: '₹495', category: 'bar-bites' },
  { id: 'chilly-garlic-prawns', name: 'Chilly Garlic Prawns', price: '₹795', category: 'bar-bites' },
  { id: 'rosemary-grilled-chicken', name: 'Rosemary Grilled Chicken', price: '₹495', category: 'bar-bites' },
  { id: 'chicken-manchurian-dry', name: 'Chicken Manchurian Dry', price: '₹495', category: 'bar-bites' },
  { id: 'murg-roasted-kaali-mirch', name: 'Murg Roasted Kaali Mirch', price: '₹545', category: 'bar-bites' },
  { id: 'charcoal-smoked-chicken', name: 'Charcoal Smoked Chicken', price: '₹495', category: 'bar-bites' },
  { id: 'sofiya-murg-tikka', name: 'Sofiya Murg Tikka', price: '₹545', category: 'bar-bites' },
  { id: 'amritsari-fish-tikka', name: 'Amritsari Fish Tikka', price: '₹645', category: 'bar-bites' },
  { id: 'pan-fried-coconut-fish', name: 'Pan Fried Coconut Fish', price: '₹645', category: 'bar-bites' },
  { id: 'peelo-chino-fish', name: 'Peelo Chino Fish (Kerala Style)', price: '₹645', category: 'bar-bites' },
  { id: 'mutton-gilafi-kebab', name: 'Mutton Gilafi Kebab', price: '₹595', category: 'bar-bites' },

  // BREADS
  { id: 'tandoor-roti', name: 'Tandoor Roti', price: '₹60', category: 'breads' },
  { id: 'tawa-roti', name: 'Tawa Roti', price: '₹60', category: 'breads' },
  { id: 'butter-roti', name: 'Butter Roti', price: '₹75', category: 'breads' },
  { id: 'laccha-paratha', name: 'Laccha Paratha', price: '₹75', category: 'breads' },
  { id: 'pudina-paratha', name: 'Pudina Paratha', price: '₹75', category: 'breads' },
  { id: 'mirchi-paratha', name: 'Mirchi Paratha', price: '₹75', category: 'breads' },
  { id: 'plain-naan', name: 'Plain Naan', price: '₹99', category: 'breads' },
  { id: 'butter-naan', name: 'Butter Naan', price: '₹99', category: 'breads' },
  { id: 'garlic-naan', name: 'Garlic Naan', price: '₹99', category: 'breads' },
  { id: 'stuffed-aloo-kulcha', name: 'Stuffed Aloo Kulcha', price: '₹99', category: 'breads' },
  { id: 'paneer-kulcha', name: 'Paneer Kulcha', price: '₹99', category: 'breads' },
  { id: 'onion-kulcha', name: 'Onion Kulcha', price: '₹99', category: 'breads' },
  { id: 'mix-veg-kulcha', name: 'Mix Veg Kulcha', price: '₹99', category: 'breads' },

  // BIRYANI & RICE
  { id: 'vegetable-biryani', name: 'Vegetable Biryani', price: '₹425', category: 'biryani-rice' },
  { id: 'mutton-biryani', name: 'Mutton Biryani', price: '₹695', category: 'biryani-rice' },
  { id: 'chicken-masala-biryani', name: 'Chicken Masala Biryani', price: '₹595', category: 'biryani-rice' },
  { id: 'steamed-rice', name: 'Steamed Rice', price: '₹345', category: 'biryani-rice' },
  { id: 'jeera-rice', name: 'Jeera Rice', price: '₹345', category: 'biryani-rice' },
  { id: 'peas-pulao', name: 'Peas Pulao', price: '₹345', category: 'biryani-rice' },

  // SALAD BAR
  { id: 'classic-green-salad', name: 'Classic Green Salad', price: '₹225', category: 'salad-bar' },
  { id: 'fruit-salad', name: 'Fruit Salad', price: '₹245', category: 'salad-bar' },
  { id: 'veg-russian-salad', name: 'Veg Russian Salad', price: '₹245', category: 'salad-bar' },
  { id: 'chicken-russian-salad', name: 'Chicken Russian Salad', price: '₹295', category: 'salad-bar' },
  { id: 'modern-veggie-caesar-salad', name: 'Modern Veggie Caesar Salad', price: '₹245', category: 'salad-bar' },
  { id: 'chicken-caesar-salad', name: 'Chicken Caesar Salad', price: '₹345', category: 'salad-bar' },

  // SWEET CRAVINGS
  { id: 'heer-ki-kheer', name: 'Heer Ki Kheer', price: '₹295', category: 'sweet-cravings' },
  { id: 'gulab-jamun', name: 'Gulab Jamun', price: '₹295', category: 'sweet-cravings' },
  { id: 'flavored-ice-cream', name: 'Flavored Ice Cream', price: '₹245', category: 'sweet-cravings' },

  // WINE & DRINKS
  {
    id: 'handcrafted-cocktail',
    name: 'Skyfall Crafted Cocktail',
    category: 'wine-drinks',
    image: ASSETS.drinks.main,
    description: 'Artisanal mixology blend featuring premium spirits, botanicals, and citrus notes.',
  },
];

export const MENU_HEADER_ASSET = ASSETS.food.header;

export default {
  MENU_CATEGORIES,
  MENU_ITEMS,
  MENU_HEADER_ASSET,
};
