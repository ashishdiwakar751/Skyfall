import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from './Button';
import { ASSET_PATHS } from '../utils/constants';

export const Hero = () => {
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

  // Framer Motion animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    },
  };

  const metadataVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.9,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative w-full h-[90vh] md:h-screen min-h-[640px] md:min-h-[720px] flex flex-col justify-between overflow-hidden bg-bg-primary">
      
      {/* Background Media Container */}
      <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none">
        {!isMobile && !videoError ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={ASSET_PATHS.heroImage}
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover object-center scale-105"
          >
            <source src={ASSET_PATHS.heroVideo} type="video/mp4" />
            <img
              src={ASSET_PATHS.heroImage}
              alt="Skyfall Rooftop Lounge & Bar Kanpur background"
              className="w-full h-full object-cover object-center"
            />
          </video>
        ) : (
          <img
            src={ASSET_PATHS.heroImage}
            alt="Skyfall Rooftop Lounge & Bar Kanpur background"
            className="w-full h-full object-cover object-center"
          />
        )}

        {/* Cinematic Overlays */}
        {/* 1. Base dark overlay */}
        <div className="absolute inset-0 bg-[#080807]/40" />

        {/* 2. Stronger left gradient for readable left-aligned text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080807]/95 via-[#080807]/75 to-transparent sm:w-4/5 md:w-3/5 lg:w-1/2" />

        {/* 3. Subtle bottom gradient for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080807] via-[#080807]/30 to-transparent" />
      </div>

      {/* Hero Content (Positioned Left) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 md:pt-40 lg:pt-44 flex-grow flex items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[650px] space-y-6 md:space-y-8"
        >
          {/* Subtle Accent Gold Line & Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-gold-champagne/60" />
            <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-gold-champagne font-medium">
              ROOFTOP LOUNGE & BAR
            </span>
          </motion.div>

          {/* Main H1 Editorial Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-text-primary leading-[1.08] tracking-tight uppercase"
          >
            Where Kanpur <br className="hidden sm:inline" />
            <span className="italic font-extralight text-text-primary/95">Meets The Night</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-text-muted text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-normal"
          >
            An elevated evening of dining, drinks and unforgettable moments.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5"
          >
            <Link to="/reservation" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto px-8 py-4">
                RESERVE A TABLE
              </Button>
            </Link>
            <Link to="/menu" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto px-8 py-4">
                EXPLORE MENU
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Bottom Editorial Metadata Strip & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8 md:pb-12">
        <motion.div
          variants={metadataVariants}
          initial="hidden"
          animate="visible"
          className="pt-6 border-t border-border-subtle/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          {/* Horizontal Experience Metadata Strip */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs tracking-[0.25em] font-sans uppercase text-text-muted/80">
            <span className="hover:text-gold-champagne transition-colors duration-200">ROOFTOP</span>
            <span className="text-border-subtle">•</span>
            <span className="hover:text-gold-champagne transition-colors duration-200">DINING</span>
            <span className="text-border-subtle">•</span>
            <span className="hover:text-gold-champagne transition-colors duration-200">LOUNGE</span>
            <span className="text-border-subtle">•</span>
            <span className="hover:text-gold-champagne transition-colors duration-200">PRIVATE EVENTS</span>
          </div>

          {/* Subtle Editorial Scroll Indicator */}
          <div className="hidden md:flex items-center space-x-3 text-xs tracking-[0.2em] font-sans text-text-muted/60 uppercase">
            <span>SCROLL</span>
            <div className="w-5 h-8 border border-border-subtle/80 rounded-full flex items-start justify-center p-1">
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-1 h-1.5 bg-gold-champagne rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
