import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Wine, Music2, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';

/**
 * Section 02 — SKYFALL EXPERIENCE
 * Four minimal, editorial experience cards showcasing core offerings.
 */
export const SkyfallExperience = () => {
  const experiences = [
    {
      number: '01',
      title: 'ROOFTOP DINING',
      description: 'Elevated open-air evenings.',
      icon: Building2,
    },
    {
      number: '02',
      title: 'LOUNGE & BAR',
      description: 'Premium drinks and relaxed evenings.',
      icon: Wine,
    },
    {
      number: '03',
      title: 'LIVE ENTERTAINMENT',
      description: 'Music and live performances.',
      icon: Music2,
    },
    {
      number: '04',
      title: 'PRIVATE CELEBRATIONS',
      description: 'Birthdays, anniversaries and gatherings.',
      icon: Sparkles,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    },
  };

  return (
    <section className="w-full bg-bg-primary py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          subtitle="THE SKYFALL EXPERIENCE"
          title="More Than Dinner."
          align="center"
          className="mb-14 md:mb-20"
        />

        {/* Experience Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {experiences.map((exp) => {
            const IconComponent = exp.icon;
            return (
              <motion.div
                key={exp.number}
                variants={cardVariants}
                className="group relative bg-bg-secondary border border-border-subtle p-8 md:p-9 flex flex-col justify-between transition-all duration-300 hover:border-gold-champagne/40 hover:bg-bg-charcoal/70"
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-border-subtle/50 group-hover:border-gold-champagne/20 transition-colors duration-300">
                    <span className="font-heading text-xl md:text-2xl text-gold-champagne font-light tracking-wider">
                      {exp.number}
                    </span>
                    <div className="p-2 rounded-full bg-bg-primary border border-border-subtle group-hover:border-gold-champagne/30 text-gold-champagne group-hover:scale-110 transition-all duration-300">
                      <IconComponent size={20} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Heading */}
                  <h3 className="font-heading text-2xl lg:text-2xl font-light text-text-primary uppercase tracking-wide mb-3 leading-snug group-hover:text-gold-champagne transition-colors duration-200">
                    {exp.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-text-muted text-sm leading-relaxed font-normal">
                    {exp.description}
                  </p>
                </div>

                {/* Subtle Accent Line at bottom of card */}
                <div className="w-full h-[1px] bg-gradient-to-r from-gold-champagne/0 via-gold-champagne/0 to-gold-champagne/0 group-hover:via-gold-champagne/30 transition-all duration-500 mt-8" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkyfallExperience;
