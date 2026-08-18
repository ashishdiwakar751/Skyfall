import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from './Button';
import { ASSET_PATHS, BUSINESS_INFO } from '../utils/constants';

/**
 * Editorial About Skyfall homepage section.
 */
export const HomeAboutSection = () => {
  return (
    <section className="w-full py-24 bg-bg-primary border-t border-border-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Image Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative overflow-hidden aspect-[4/3] border border-border-subtle group">
              <img
                src={ASSET_PATHS.rooftopMainImage}
                alt="Skyfall Lounge Rooftop Atmosphere"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent" />
            </div>

            {/* Subtle Gold Frame Detail */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border border-gold-champagne/20 -z-10 pointer-events-none" />
          </motion.div>

          {/* RIGHT: Editorial Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col items-start space-y-6"
          >
            <span className="text-gold-champagne text-xs uppercase tracking-[0.3em] font-sans font-medium">
              ABOUT SKYFALL
            </span>

            <h2 className="font-heading text-3xl md:text-5xl font-light text-text-primary leading-tight">
              AN EVENING ABOVE THE ORDINARY.
            </h2>

            <div className="w-12 h-[1px] bg-gold-champagne/40" />

            <p className="text-text-muted text-base font-sans leading-relaxed">
              Skyfall Lounge brings together rooftop dining, drinks, atmosphere and celebrations in an elevated evening setting in Kanpur.
            </p>

            <p className="text-text-muted text-sm font-sans leading-relaxed">
              Situated above {BUSINESS_INFO.locatedIn}, Skyfall invites guests to experience unmatched skyline views, refined cuisine, and handcrafted beverages in an atmosphere designed for memorable moments.
            </p>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link to="/about">
                <Button variant="primary" size="md">
                  DISCOVER SKYFALL
                </Button>
              </Link>
              <Link to="/gallery">
                <Button variant="outline" size="md">
                  VIEW THE GALLERY
                </Button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;
