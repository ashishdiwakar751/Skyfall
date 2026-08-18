import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SkyfallExperience from '../components/SkyfallExperience';
import RooftopExperience from '../components/RooftopExperience';
import HomeReservationCta from '../components/HomeReservationCta';
import useSeo from '../hooks/useSeo';

/**
 * The Skyfall Experience Page.
 * Composes approved rooftop lounge & dining sections.
 */
export const Experience = () => {
  useSeo(
    'Skyfall Lounge Experience | Rooftop Lounge & Bar in Kanpur',
    'Discover the Skyfall Lounge experience in Kanpur featuring rooftop atmosphere, luxury lounge, and skyline dining.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full bg-bg-primary text-text-primary pt-20"
    >
      {/* Page Hero Header */}
      <section className="relative w-full py-20 md:py-28 bg-bg-secondary border-b border-border-subtle overflow-hidden text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-gold-champagne text-xs md:text-sm uppercase tracking-[0.3em] font-sans font-medium mb-3 block">
            ROOFTOP NIGHTLIFE & DINING
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-light text-text-primary mb-4 leading-tight uppercase">
            THE SKYFALL EXPERIENCE
          </h1>
          <div className="w-16 h-[1px] bg-gold-champagne/40 mx-auto mb-6" />
          <p className="text-text-muted text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed font-light">
            Elevated atmosphere, ambient soundscapes, and panoramic rooftop views high above Kanpur.
          </p>
        </div>
      </section>

      {/* Core Experience Sections */}
      <SkyfallExperience />
      <RooftopExperience />
      <HomeReservationCta />
    </motion.div>
  );
};

export default Experience;
