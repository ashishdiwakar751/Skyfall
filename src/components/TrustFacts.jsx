import React from 'react';
import { motion } from 'framer-motion';
import { REVIEWS_SUMMARY } from '../data/reviews';

/**
 * Section 01 — TRUST / QUICK FACTS
 * Editorial trust & facts strip transitioning from Hero.
 */
export const TrustFacts = () => {
  const trustItems = [
    {
      value: `${REVIEWS_SUMMARY.rating}★`,
      label: 'GOOGLE RATING',
      subtext: 'Demo Snapshot',
    },
    {
      value: `${REVIEWS_SUMMARY.reviewCount}+`,
      label: 'REVIEWS*',
      subtext: 'Google Maps Reference',
    },
    {
      value: 'ROOFTOP',
      label: 'SEATING',
      subtext: 'Open-air Atmosphere',
    },
    {
      value: 'LIVE',
      label: 'ENTERTAINMENT',
      subtext: 'Music & Events',
    },
    {
      value: 'PRIVATE',
      label: 'CELEBRATIONS',
      subtext: 'Exclusive Gatherings',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    },
  };

  return (
    <section aria-label="Quick Facts" className="w-full bg-bg-secondary border-y border-border-subtle py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 items-center justify-between"
        >
          {trustItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col items-center text-center group py-2 md:px-2 md:border-r md:border-border-subtle/40 last:border-r-0"
            >
              {/* Subtle Champagne Gold Accent Line */}
              <span className="w-4 h-[1px] bg-gold-champagne/60 mb-2.5 group-hover:w-7 transition-all duration-300" />

              {/* Main Ivory Value / Title */}
              <span className="font-heading text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-light text-text-primary tracking-tight leading-none mb-1.5">
                {item.value}
              </span>

              {/* Small Muted Uppercase Label */}
              <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.25em] text-text-muted font-medium">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustFacts;
