import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, Maximize2, ImageOff, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/gallery';
import ASSETS from '../data/assets';
import useSeo from '../hooks/useSeo';

/**
 * Editorial Gallery Page for Skyfall Lounge.
 * Features a cinematic hero, responsive horizontally scrollable category filters,
 * asymmetric editorial grid, interactive lightbox with full keyboard navigation,
 * body scroll locking, image fallback states, and an end CTA.
 */
export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  useSeo(
    'Skyfall Lounge Gallery | Rooftop Dining & Nightlife in Kanpur',
    'Explore the Skyfall Lounge gallery featuring rooftop dining, food, drinks, atmosphere and celebrations.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  // Filter items matching active category
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'ALL') return true;
    if (item.category === activeCategory) return true;
    if (item.categories && item.categories.includes(activeCategory)) return true;
    return false;
  });

  const activeLightboxItem = selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

  // Navigation handlers for Lightbox
  const handlePrev = useCallback(() => {
    if (selectedImageIndex === null || filteredItems.length === 0) return;
    setSelectedImageIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  }, [selectedImageIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (selectedImageIndex === null || filteredItems.length === 0) return;
    setSelectedImageIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  }, [selectedImageIndex, filteredItems.length]);

  const handleClose = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  // Keyboard navigation & body scroll locking for Lightbox
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') handleClose();
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'ArrowRight') handleNext();
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedImageIndex, handleClose, handlePrev, handleNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full bg-bg-primary text-text-primary pt-20"
    >
      {/* 01 — GALLERY PAGE HERO */}
      <section className="relative w-full py-20 md:py-28 bg-bg-secondary border-b border-border-subtle overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={ASSETS.hero.image}
            alt="Skyfall Lounge Rooftop Night Ambiance"
            className="w-full h-full object-cover object-center opacity-25 filter blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-bg-secondary/80 to-bg-secondary/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-champagne text-xs md:text-sm uppercase tracking-[0.3em] font-sans mb-3 block">
              THE SKYFALL GALLERY
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-text-primary mb-4 leading-tight uppercase">
              NIGHTS WORTH REMEMBERING
            </h1>
            <div className="w-16 h-[1px] bg-gold-champagne/40 mx-auto mb-6" />
            <p className="text-text-muted text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              Explore moments of rooftop dining, drinks, atmosphere and celebrations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02 — CATEGORY FILTER */}
      <section className="sticky top-16 md:top-20 z-30 w-full bg-bg-primary/95 backdrop-blur-md border-b border-border-subtle py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar space-x-6 sm:space-x-8 py-2">
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative text-xs sm:text-sm uppercase tracking-[0.2em] font-sans font-medium transition-colors duration-200 whitespace-nowrap pb-1 focus:outline-none ${
                    isActive ? 'text-gold-champagne' : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  {cat.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeCategoryUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold-champagne"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 03 — EDITORIAL GALLERY GRID */}
      <section className="w-full py-12 md:py-20 min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedImageIndex(index)}
              >
                <div className="relative overflow-hidden border border-border-subtle group-hover:border-gold-champagne/50 transition-colors duration-500 bg-bg-charcoal aspect-[4/3] w-full">
                  {!imageErrors[item.id] ? (
                    <img
                      src={item.src}
                      alt={item.alt}
                      onError={() => handleImageError(item.id)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-bg-charcoal">
                      <ImageOff className="w-10 h-10 text-gold-champagne/40 mb-2" />
                      <span className="text-xs uppercase tracking-widest text-text-muted">{item.title}</span>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                    <div className="flex justify-between items-start">
                      <span className="px-2.5 py-1 bg-bg-primary/90 border border-gold-champagne/30 text-gold-champagne text-[10px] uppercase tracking-[0.25em] font-sans">
                        {item.category}
                      </span>
                      <span className="p-2 bg-bg-primary/80 text-gold-champagne rounded-full border border-gold-champagne/30">
                        <Maximize2 size={14} />
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading text-xl text-text-primary font-light mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-text-muted font-sans uppercase tracking-wider">
                        VIEW FULLSCREEN
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        </div>
      </section>

      {/* 04 — LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImageIndex !== null && activeLightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 w-screen h-screen bg-[#080807]/96 backdrop-blur-lg flex flex-col justify-between p-4 sm:p-6 md:p-8"
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery Image Lightbox"
          >
            {/* Lightbox Header */}
            <div
              className="flex items-center justify-between z-10 w-full max-w-7xl mx-auto pb-4 border-b border-border-subtle/50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center space-x-3">
                <span className="px-2.5 py-1 bg-bg-secondary border border-gold-champagne/30 text-gold-champagne text-[10px] uppercase tracking-[0.25em] font-sans">
                  {activeLightboxItem.category}
                </span>
                <span className="text-xs uppercase tracking-widest text-text-muted font-mono">
                  {String(selectedImageIndex + 1).padStart(2, '0')} / {String(filteredItems.length).padStart(2, '0')}
                </span>
              </div>

              <button
                onClick={handleClose}
                className="p-2 text-text-muted hover:text-gold-champagne focus:outline-none transition-colors"
                aria-label="Close lightbox"
              >
                <X size={26} />
              </button>
            </div>

            {/* Lightbox Media Container */}
            <div
              className="relative flex-grow flex items-center justify-center my-4 px-2 sm:px-12 max-w-6xl mx-auto w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 p-3 bg-bg-secondary/80 border border-border-subtle text-text-primary hover:text-gold-champagne hover:border-gold-champagne/50 focus:outline-none transition-all duration-200 z-20 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Active Image */}
              <div className="relative max-h-[70vh] md:max-h-[78vh] max-w-full flex flex-col items-center justify-center overflow-hidden border border-border-subtle/40 bg-bg-charcoal shadow-2xl">
                {!imageErrors[activeLightboxItem.id] ? (
                  <img
                    src={activeLightboxItem.src}
                    alt={activeLightboxItem.alt}
                    onError={() => handleImageError(activeLightboxItem.id)}
                    className="max-h-[70vh] md:max-h-[78vh] w-auto max-w-full object-contain"
                  />
                ) : (
                  <div className="p-12 text-center flex flex-col items-center justify-center">
                    <ImageOff className="w-12 h-12 text-gold-champagne/40 mb-3" />
                    <span className="text-sm uppercase tracking-widest text-text-muted">{activeLightboxItem.title}</span>
                  </div>
                )}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 p-3 bg-bg-secondary/80 border border-border-subtle text-text-primary hover:text-gold-champagne hover:border-gold-champagne/50 focus:outline-none transition-all duration-200 z-20 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Lightbox Footer Caption */}
            <div
              className="z-10 w-full max-w-7xl mx-auto pt-3 border-t border-border-subtle/50 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <h4 className="font-heading text-lg sm:text-xl text-text-primary font-light">
                  {activeLightboxItem.title}
                </h4>
                <p className="text-xs text-text-muted font-sans">
                  {activeLightboxItem.alt}
                </p>
              </div>

              <div className="text-[10px] uppercase tracking-widest text-text-muted font-mono">
                Press ESC to close • Left / Right arrows to navigate
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 05 — GALLERY CTA */}
      <section className="relative w-full py-20 md:py-28 bg-bg-secondary border-t border-border-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionHeading
            subtitle="EXPERIENCE SKYFALL LOUNGE"
            title="SEE YOUR EVENING HERE"
            description="Planning a celebration or evening at Skyfall Lounge?"
            align="center"
            className="mb-10"
          />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/events">
              <Button variant="primary" size="md" className="min-w-[200px] group">
                <span>PLAN YOUR EVENT</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/reservation">
              <Button variant="outline" size="md" className="min-w-[200px]">
                RESERVE A TABLE
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Gallery;
