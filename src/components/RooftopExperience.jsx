import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from './Button';
import { ASSET_PATHS } from '../utils/constants';

/**
 * Section 03 — ROOFTOP EXPERIENCE
 * Cinematic split feature section showcasing the rooftop atmosphere.
 */
export const RooftopExperience = () => {
  const [videoError, setVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const mediaVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    },
  };

  return (
    <section className="w-full bg-bg-primary py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Visual Media Area */}
          <motion.div
            variants={mediaVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-7 relative w-full h-[380px] sm:h-[480px] lg:h-[560px] overflow-hidden border border-border-subtle group"
          >
            {!isMobile && !videoError ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                poster={ASSET_PATHS.rooftopMainImage}
                onError={() => setVideoError(true)}
                className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              >
                <source src={ASSET_PATHS.rooftopExperienceVideo} type="video/mp4" />
                <img
                  src={ASSET_PATHS.rooftopMainImage}
                  alt="Skyfall Rooftop Lounge atmosphere"
                  className="w-full h-full object-cover object-center"
                />
              </video>
            ) : (
              <img
                src={ASSET_PATHS.rooftopMainImage}
                alt="Skyfall Rooftop Lounge atmosphere"
                className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            )}

            {/* Subtle Cinematic Dark Overlay */}
            <div className="absolute inset-0 bg-[#080807]/25 pointer-events-none" />

            {/* Editorial Corner Badge */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 px-3 py-1.5 bg-[#080807]/80 backdrop-blur-md border border-border-subtle text-[10px] sm:text-xs tracking-[0.25em] font-sans text-gold-champagne uppercase">
              ATMOSPHERIC VIEW
            </div>
          </motion.div>

          {/* Right Column: Dark Charcoal Content Panel */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-5 bg-bg-secondary border border-border-subtle p-8 sm:p-10 lg:p-12 flex flex-col justify-center space-y-6"
          >
            {/* Subtle Section Tag & Gold Accent Line */}
            <div className="flex items-center space-x-3">
              <span className="w-8 h-[1px] bg-gold-champagne/60" />
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold-champagne font-medium">
                ROOFTOP EXPERIENCE
              </span>
            </div>

            {/* Main Headings */}
            <div className="space-y-2">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-text-primary uppercase leading-tight tracking-tight">
                ABOVE THE CITY.
              </h2>
              <p className="font-heading text-2xl sm:text-3xl font-extralight italic text-text-muted/90 uppercase tracking-wide">
                AWAY FROM THE ORDINARY.
              </p>
            </div>

            <div className="w-12 h-[1px] bg-border-subtle" />

            {/* Description */}
            <p className="font-sans text-text-muted text-sm sm:text-base leading-relaxed font-normal">
              An atmospheric rooftop setting designed for evenings worth remembering.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Link to="/experience" className="inline-block w-full sm:w-auto">
                <Button variant="outline" size="md" className="w-full sm:w-auto px-8 py-3.5">
                  DISCOVER THE EXPERIENCE
                </Button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default RooftopExperience;
