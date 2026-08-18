import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { EVENT_TYPES } from '../data/events';
import { ASSET_PATHS } from '../utils/constants';

/**
 * Editorial Homepage Events & Celebrations Section for Skyfall Lounge.
 * Features a visual-first composition with high-impact rooftop celebration imagery
 * and four clean category positioning cards.
 */
export const EventsSection = () => {
  return (
    <section className="w-full py-20 md:py-28 bg-bg-secondary border-t border-border-subtle relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-gold-champagne/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          subtitle="PRIVATE EVENTS & CELEBRATIONS"
          title="MAKE IT YOUR NIGHT"
          description="Celebrate birthdays, anniversaries, private gatherings and special evenings at Skyfall Lounge."
          align="center"
          className="mb-14 md:mb-20"
        />

        {/* Visual-First Editorial Composition (2-Column Grid on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Featured Visual Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative overflow-hidden rounded-none border border-border-subtle group-hover:border-gold-champagne/50 transition-colors duration-500 bg-bg-charcoal shadow-2xl">
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={ASSET_PATHS.privateCelebrationImage}
                  alt="Private Celebrations and Rooftop Events at Skyfall Lounge"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Dark Cinematic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/95 via-bg-primary/40 to-transparent" />
              </div>

              {/* Overlay Editorial Badge & Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col items-start space-y-3">
                <div className="inline-flex items-center px-3 py-1 bg-bg-primary/90 border border-gold-champagne/30 text-gold-champagne text-[10px] tracking-[0.25em] uppercase font-mono">
                  <Sparkles size={12} className="mr-1.5 text-gold-champagne" />
                  Rooftop Atmosphere
                </div>
                <h3 className="font-heading text-2xl md:text-3xl text-text-primary font-light">
                  Elevated Celebrations Above Kanpur
                </h3>
                <p className="text-xs text-text-muted font-sans leading-relaxed">
                  An atmospheric setting with panoramic views, craft cocktails, and ambient lighting.
                </p>
                <div className="pt-2">
                  <Link to="/events">
                    <Button variant="outline" size="sm" className="group/btn">
                      <span>EXPLORE EVENTS</span>
                      <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Event Category Editorial Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {EVENT_TYPES.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-bg-charcoal/60 border border-border-subtle p-6 md:p-8 hover:border-gold-champagne/40 transition-all duration-300 flex flex-col justify-between group hover:bg-bg-charcoal"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-gold-champagne/80 tracking-widest">
                      {event.number}
                    </span>
                    <span className="w-6 h-[1px] bg-gold-champagne/30 group-hover:w-10 group-hover:bg-gold-champagne transition-all duration-300" />
                  </div>

                  <h3 className="font-heading text-xl md:text-2xl text-text-primary tracking-wider uppercase mb-2 group-hover:text-gold-champagne transition-colors duration-200">
                    {event.title}
                  </h3>

                  <p className="text-xs md:text-sm text-text-muted font-sans leading-relaxed mb-6">
                    {event.shortCopy}
                  </p>
                </div>

                <div>
                  <Link
                    to="/events"
                    className="inline-flex items-center text-[11px] uppercase tracking-[0.2em] text-gold-champagne font-sans font-medium hover:text-text-primary transition-colors group/link"
                  >
                    <span>ENQUIRE NOW</span>
                    <ArrowRight size={12} className="ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Section Bottom Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-border-subtle/50 pt-10"
        >
          <Link to="/events">
            <Button variant="primary" size="md" className="min-w-[200px]">
              PLAN YOUR EVENT
            </Button>
          </Link>
          <Link to="/events">
            <Button variant="outline" size="md" className="min-w-[200px]">
              ENQUIRE NOW
            </Button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default EventsSection;
