import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Maximize2, ImageOff } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { GALLERY_ITEMS } from '../data/gallery';

/**
 * Editorial Homepage Gallery Preview for Skyfall Lounge.
 * Features an asymmetric, editorial layout highlighting key rooftop, dining,
 * cocktail, and event moments with a direct CTA to the full gallery page.
 */
export const GalleryPreview = () => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  // Select top featured items for editorial preview layout (5 items)
  const featuredAnchor = GALLERY_ITEMS[0]; // Hero nightscape
  const supportingItems = GALLERY_ITEMS.slice(1, 5);

  return (
    <section className="w-full py-20 md:py-28 bg-bg-primary border-t border-border-subtle relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gold-champagne/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          subtitle="THE SKYFALL GALLERY"
          title="NIGHTS WORTH REMEMBERING"
          description="A glimpse into the atmosphere, dining, drinks and celebrations at Skyfall Lounge."
          align="center"
          className="mb-12 md:mb-16"
        />

        {/* Asymmetric Editorial Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-12">
          
          {/* Main Visual Anchor (Large featured card) */}
          {featuredAnchor && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col group"
            >
              <Link to="/gallery" className="relative flex-grow overflow-hidden border border-border-subtle group-hover:border-gold-champagne/50 transition-colors duration-500 bg-bg-charcoal flex flex-col justify-end min-h-[360px] md:min-h-[460px]">
                {!imageErrors[featuredAnchor.id] ? (
                  <img
                    src={featuredAnchor.src}
                    alt={featuredAnchor.alt}
                    onError={() => handleImageError(featuredAnchor.id)}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-bg-charcoal">
                    <ImageOff className="w-10 h-10 text-gold-champagne/40 mb-3" />
                    <span className="text-xs uppercase tracking-widest text-text-muted">{featuredAnchor.title}</span>
                  </div>
                )}

                {/* Dark Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content Overlay */}
                <div className="relative z-10 p-6 md:p-8 flex flex-col items-start justify-end">
                  <span className="inline-block px-2.5 py-1 mb-2 bg-bg-primary/80 border border-gold-champagne/30 text-gold-champagne text-[10px] uppercase tracking-[0.25em] font-sans">
                    {featuredAnchor.category}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl text-text-primary font-light mb-1">
                    {featuredAnchor.title}
                  </h3>
                  <div className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-text-muted group-hover:text-gold-champagne transition-colors duration-300 mt-2">
                    <span>EXPLORE IN GALLERY</span>
                    <Maximize2 size={12} className="ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Supporting Images Grid (4 cards in 2x2 asymmetric layout on desktop) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {supportingItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <Link to="/gallery" className="block relative overflow-hidden border border-border-subtle group-hover:border-gold-champagne/40 transition-colors duration-300 bg-bg-charcoal aspect-[4/3] sm:aspect-square lg:aspect-[4/3]">
                  {!imageErrors[item.id] ? (
                    <img
                      src={item.src}
                      alt={item.alt}
                      onError={() => handleImageError(item.id)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-bg-charcoal">
                      <ImageOff className="w-8 h-8 text-gold-champagne/40 mb-2" />
                      <span className="text-[10px] uppercase tracking-widest text-text-muted">{item.title}</span>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                    <span className="self-start px-2 py-0.5 bg-bg-primary border border-gold-champagne/30 text-gold-champagne text-[9px] uppercase tracking-[0.2em]">
                      {item.category}
                    </span>
                    <div>
                      <h4 className="font-heading text-lg text-text-primary leading-tight">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Gallery CTA */}
        <div className="flex justify-center mt-10">
          <Link to="/gallery">
            <Button variant="primary" size="md" className="group">
              <span>VIEW FULL GALLERY</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default GalleryPreview;
