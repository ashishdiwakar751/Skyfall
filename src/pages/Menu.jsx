import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import { BUSINESS_INFO, ASSET_PATHS } from '../utils/constants';
import { MENU_CATEGORIES, MENU_ITEMS, MENU_HEADER_ASSET } from '../data/menu';
import useSeo from '../hooks/useSeo';

/**
 * Editorial Menu Page Component for Skyfall Lounge — Phase 4
 * Visual direction: Dark, luxurious, editorial, minimal, easy to scan.
 * Data source: src/data/menu.js
 */
export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  useSeo(
    'Skyfall Lounge Menu | Rooftop Lounge & Bar in Kanpur',
    'Explore the Skyfall Lounge menu in Kanpur, featuring food, bar bites, breads, biryani, salads, desserts and drinks.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    if (categoryId !== 'all') {
      const element = document.getElementById(`category-${categoryId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Find featured dish from menu items data
  const featuredDish = MENU_ITEMS.find((item) => item.id === 'murg-makhani') || MENU_ITEMS[0];

  // Derive categories that have items or exist in data
  const categoriesToRender = MENU_CATEGORIES.filter((cat) => cat.id !== 'all');

  return (
    <div className="min-h-screen w-full bg-bg-primary text-text-primary">
      
      {/* 01 — MENU HERO */}
      <section className="relative w-full h-[55vh] md:h-[60vh] max-h-[620px] min-h-[420px] flex items-center justify-center overflow-hidden bg-bg-primary">
        {/* Editorial Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={ASSET_PATHS.menuHeaderImage || MENU_HEADER_ASSET}
            alt="Skyfall Lounge Culinary Selection Header"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/75 to-bg-primary/45" />
          <div className="absolute inset-0 bg-bg-primary/25" />
        </div>

        {/* Hero Copy */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            <span className="text-gold-champagne text-xs sm:text-sm uppercase tracking-[0.3em] font-sans font-medium mb-3">
              THE SKYFALL MENU
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-text-primary mb-4 leading-tight">
              A TASTE WORTH STAYING FOR
            </h1>
            <div className="w-16 h-[1px] bg-gold-champagne/60 my-3" />
            <p className="text-text-muted text-sm sm:text-base max-w-xl font-sans leading-relaxed">
              Explore the food and drinks served at Skyfall Lounge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02 — MENU CATEGORY NAVIGATION */}
      <section className="sticky top-[72px] sm:top-[76px] z-40 w-full bg-[#080807]/95 backdrop-blur-md border-b border-border-subtle py-3 sm:py-4 px-4 sm:px-6 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar py-1 space-x-2 sm:space-x-4">
          {MENU_CATEGORIES.map((cat) => {
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryClick(cat.id)}
                className={`relative text-xs uppercase tracking-[0.2em] font-sans font-medium px-4 py-2 whitespace-nowrap transition-colors duration-200 focus:outline-none ${
                  active
                    ? 'text-gold-champagne font-semibold'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {cat.name}
                {active && (
                  <motion.div
                    layoutId="activeCategoryIndicator"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-gold-champagne"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* 03 — MENU CONTENT */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24">
        
        {/* Render Category Sections */}
        {categoriesToRender.map((category) => {
          const categoryItems = MENU_ITEMS.filter((item) => item.category === category.id);
          
          // Skip category if activeCategory filter is set and does not match, or if no items exist
          if (activeCategory !== 'all' && activeCategory !== category.id) {
            return null;
          }

          return (
            <motion.section
              key={category.id}
              id={`category-${category.id}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-36 md:scroll-mt-40 space-y-8 w-full"
            >
              {/* Category Header */}
              <div className="border-b border-border-subtle pb-4">
                <span className="text-gold-champagne text-[11px] uppercase tracking-[0.3em] font-sans font-medium block mb-1">
                  CATEGORY
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl text-text-primary font-light uppercase tracking-wide">
                  {category.name}
                </h2>
              </div>

              {/* Items List (2-column on desktop, 1-column on mobile) */}
              {categoryItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {categoryItems.map((item) => (
                    <div
                      key={item.id}
                      className="group border-b border-border-subtle/40 pb-6 pt-2 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-baseline justify-between gap-4 mb-2">
                          <h3 className="font-heading text-xl sm:text-2xl text-text-primary font-normal tracking-wide group-hover:text-gold-champagne transition-colors duration-200">
                            {item.name}
                          </h3>
                          {item.price && (
                            <span className="font-heading text-xl sm:text-2xl text-gold-champagne font-light shrink-0">
                              {item.price}
                            </span>
                          )}
                        </div>

                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-2">
                            {item.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="text-[10px] uppercase tracking-wider px-2 py-0.5 border border-gold-champagne/30 text-gold-champagne font-sans font-medium bg-gold-champagne/5"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {item.description && (
                          <p className="text-text-muted text-xs sm:text-sm font-sans leading-relaxed max-w-xl mt-1">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center text-text-muted text-sm font-sans">
                  No items listed under this category.
                </div>
              )}
            </motion.section>
          );
        })}

        {/* FEATURED FOOD SELECTION */}
        {(activeCategory === 'all' || activeCategory === 'mad-indian-chicken' || activeCategory === 'signatures') && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="my-16 md:my-24 bg-bg-secondary border border-border-subtle p-6 sm:p-8 md:p-12 relative overflow-hidden w-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* Image Left */}
              <div className="lg:col-span-5 relative group overflow-hidden">
                <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] w-full overflow-hidden border border-border-subtle">
                  <img
                    src={ASSET_PATHS.murgMakhaniImage}
                    alt={featuredDish?.name || 'Murg Makhani'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="absolute inset-0 border border-gold-champagne/20 pointer-events-none" />
              </div>

              {/* Text Right */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="text-gold-champagne text-xs uppercase tracking-[0.3em] font-sans font-medium">
                    FROM THE KITCHEN
                  </span>
                  <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl text-text-primary font-light leading-tight">
                    {featuredDish?.name || 'Signature Murg Makhani'}
                  </h3>
                </div>

                {featuredDish?.tags && featuredDish.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {featuredDish.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs uppercase tracking-widest px-3 py-1 border border-gold-champagne/40 text-gold-champagne font-sans font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {featuredDish?.description && (
                  <p className="text-text-muted text-sm sm:text-base font-sans leading-relaxed">
                    {featuredDish.description}
                  </p>
                )}

                <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Link to="/reservation">
                    <Button variant="primary" size="md" className="px-8 py-3.5">
                      RESERVE A TABLE
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </div>

      {/* 04 — MENU CTA / RESERVATION */}
      <section className="w-full py-16 md:py-24 bg-bg-charcoal/60 border-t border-border-subtle text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <SectionHeading
            subtitle="JOIN US TONIGHT"
            title="READY FOR YOUR EVENING?"
            description="Reserve your table at Skyfall Lounge."
            align="center"
          />
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/reservation" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto px-8">
                RESERVE A TABLE
              </Button>
            </Link>
            <a href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-8">
                <Phone size={16} className="mr-2.5 text-gold-champagne" />
                CALL US ({BUSINESS_INFO.phone})
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
