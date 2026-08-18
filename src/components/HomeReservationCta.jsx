import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';
import Button from './Button';
import { BUSINESS_INFO, ASSET_PATHS } from '../utils/constants';

/**
 * Editorial Final Homepage Reservation CTA for Skyfall Lounge.
 * Rendered at the conclusion of Home.jsx after Location and before Footer.
 */
export const HomeReservationCta = () => {
  return (
    <section className="relative w-full py-28 md:py-36 bg-bg-primary border-t border-border-subtle overflow-hidden">
      {/* Background visual asset with cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSET_PATHS.rooftopMainImage}
          alt="Skyfall Lounge Rooftop Night Evening Ambiance"
          className="w-full h-full object-cover object-center opacity-30 filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/85 to-bg-primary/75" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Subtitle */}
          <span className="text-gold-champagne text-xs md:text-sm uppercase tracking-[0.3em] font-sans font-medium block">
            RESERVE YOUR EVENING
          </span>

          {/* Main Heading */}
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-text-primary uppercase leading-tight tracking-tight">
            YOUR TABLE IS WAITING.
          </h2>

          <div className="w-16 h-[1px] bg-gold-champagne/40 mx-auto" />

          {/* Supporting Copy */}
          <p className="text-text-muted text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-sans leading-relaxed font-light">
            Planning a rooftop evening in Kanpur? Request your table at Skyfall Lounge.
          </p>

          {/* CTAs */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link to="/reservation">
              <Button variant="primary" size="lg" className="w-full sm:w-auto px-8 py-4 flex items-center justify-center space-x-2">
                <Calendar size={18} className="mr-2" />
                <span>RESERVE A TABLE</span>
              </Button>
            </Link>

            <a href={`tel:${BUSINESS_INFO.phoneClean}`}>
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-4 flex items-center justify-center space-x-2">
                <Phone size={18} className="mr-2" />
                <span>CALL SKYFALL</span>
              </Button>
            </a>
          </div>

          <p className="text-[11px] text-text-muted/60 uppercase tracking-widest pt-4">
            Direct Phone Enquiries: {BUSINESS_INFO.phone}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeReservationCta;
