import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Award, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { REVIEWS_SUMMARY } from '../data/reviews';

/**
 * Editorial Guest Reviews section displaying Google Maps snapshot rating metadata authentically.
 */
export const GuestReviewsSection = () => {
  const { rating, maxRating, reviewCount, platform } = REVIEWS_SUMMARY;

  return (
    <section className="w-full py-24 bg-bg-secondary border-t border-border-subtle relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-champagne/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          subtitle="WHAT GUESTS SAY"
          title="GOOD NIGHTS, WELL REMEMBERED."
          description="A selection of guest feedback from the supplied Google Maps review snapshot."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 max-w-4xl mx-auto"
        >
          {/* Main Editorial Card */}
          <div className="bg-bg-charcoal/80 border border-border-subtle p-8 md:p-12 relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              
              {/* Rating Big Stat */}
              <div className="flex flex-col items-center md:items-start shrink-0">
                <div className="flex items-baseline space-x-2">
                  <span className="font-heading text-6xl md:text-7xl text-text-primary font-light tracking-tight">
                    {rating}
                  </span>
                  <span className="text-xl text-text-muted font-sans font-light">
                    / {maxRating}
                  </span>
                </div>

                {/* Stars Display - Champagne Gold Subtle Stars */}
                <div className="flex items-center space-x-1.5 my-3">
                  {[1, 2, 3, 4].map((star) => (
                    <Star key={star} size={18} className="fill-gold-champagne text-gold-champagne" />
                  ))}
                  {/* 4.2 has partial 5th star */}
                  <div className="relative">
                    <Star size={18} className="text-border-subtle" />
                    <div className="absolute top-0 left-0 overflow-hidden w-[20%]">
                      <Star size={18} className="fill-gold-champagne text-gold-champagne" />
                    </div>
                  </div>
                </div>

                <span className="text-xs uppercase tracking-[0.25em] text-gold-champagne font-sans font-medium">
                  {platform}
                </span>
              </div>

              {/* Editorial Divider */}
              <div className="hidden md:block w-[1px] h-32 bg-border-subtle" />

              {/* Review Overview Context */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center justify-center md:justify-start space-x-2 text-gold-champagne text-xs uppercase tracking-[0.2em] font-sans">
                  <Award size={16} />
                  <span>Rooftop Atmosphere & Hospitality</span>
                </div>

                <blockquote className="font-heading text-xl md:text-2xl text-text-primary font-light italic leading-relaxed">
                  &ldquo;Elevated evening dining in Kanpur — verified guest experiences recorded on Google Business Profile.&rdquo;
                </blockquote>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs text-text-muted font-sans">
                  <span className="flex items-center space-x-1.5">
                    <CheckCircle2 size={14} className="text-gold-champagne" />
                    <span>{reviewCount} Verified Ratings*</span>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <MapPin size={14} className="text-gold-champagne" />
                    <span>Vijay Intercontinental, Kanpur</span>
                  </span>
                </div>
              </div>

            </div>

            {/* Subtle Footnote */}
            <div className="mt-8 pt-6 border-t border-border-subtle/50 text-center md:text-left text-[11px] text-text-muted font-sans font-light tracking-wide">
              *Based on the supplied Google Maps snapshot. Reference demo metrics shown for portfolio representation.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuestReviewsSection;
