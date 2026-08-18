import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Utensils, GlassWater, Music, PartyPopper, ChevronRight, Compass } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { BUSINESS_INFO, ASSET_PATHS } from '../utils/constants';
import useSeo from '../hooks/useSeo';

export const About = () => {
  useSeo(
    'About Skyfall Lounge | Rooftop Lounge & Bar in Kanpur',
    'Discover Skyfall Lounge, a rooftop lounge and bar at Vijay Intercontinental in Kanpur.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const experiencePillars = [
    {
      title: 'ROOFTOP DINING',
      category: 'CUISINE & AMBIANCE',
      description: 'Pan-Asian, Continental, and North Indian delicacies served under the evening skyline of Kanpur.',
      image: ASSET_PATHS.murgMakhaniImage,
      alt: 'Fine Gourmet Cuisine at Skyfall Lounge',
      icon: Utensils,
    },
    {
      title: 'LOUNGE & BAR',
      category: 'HANDCRAFTED COCKTAILS',
      description: 'Artisanal mixology, premium international spirits, and curated wines designed for high-altitude relaxing.',
      image: ASSET_PATHS.drinksMainImage,
      alt: 'Handcrafted Cocktails & Lounge Bar',
      icon: GlassWater,
    },
    {
      title: 'LIVE ENTERTAINMENT',
      category: 'MUSIC & ATMOSPHERE',
      description: 'Atmospheric lighting, curated DJ sets, and live acoustic music sessions throughout the week.',
      image: ASSET_PATHS.privateCelebrationImage,
      alt: 'Live Entertainment at Skyfall Lounge',
      icon: Music,
    },
    {
      title: 'CELEBRATIONS',
      category: 'PRIVATE EVENTS',
      description: 'Tailored VIP seating, private dining spaces, and bespoke setups for birthdays, anniversaries, and corporate gatherings.',
      image: ASSET_PATHS.rooftopMainImage,
      alt: 'Celebrations at Skyfall Lounge',
      icon: PartyPopper,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full bg-bg-primary text-text-primary pt-24"
    >
      {/* 01 — ABOUT HERO */}
      <section className="relative w-full py-20 md:py-28 overflow-hidden border-b border-border-subtle">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src={ASSET_PATHS.rooftopMainImage}
            alt="Skyfall Lounge Rooftop Atmosphere"
            className="w-full h-full object-cover filter brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <span className="text-gold-champagne text-xs md:text-sm uppercase tracking-[0.35em] font-sans font-medium">
              ABOUT SKYFALL
            </span>

            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-light text-text-primary leading-tight">
              AN EVENING ABOVE THE ORDINARY.
            </h1>

            <div className="w-16 h-[1px] bg-gold-champagne/50 mx-auto my-6" />

            <p className="text-text-muted text-base md:text-lg font-sans leading-relaxed font-light">
              Rooftop dining, drinks, atmosphere and celebrations in Kanpur.
            </p>

            <div className="pt-4 flex items-center justify-center space-x-2 text-xs uppercase tracking-widest text-gold-champagne">
              <MapPin size={14} />
              <span>Located in {BUSINESS_INFO.locatedIn}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 — THE SKYFALL ESSENCE & ESSENTIAL POSITIONING */}
      <section className="w-full py-20 bg-bg-secondary border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-gold-champagne text-xs uppercase tracking-[0.3em] font-sans font-medium">
                OUR PHILOSOPHY
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-text-primary leading-tight">
                ELEVATING KANPUR&apos;S NIGHTLIFE & DINING CULTURE.
              </h2>
              <div className="w-12 h-[1px] bg-gold-champagne/40" />
              <p className="text-text-muted text-base font-sans leading-relaxed">
                Skyfall Lounge brings together rooftop dining, drinks, atmosphere and celebrations in an elevated evening setting in Kanpur. Perched high above Vijay Intercontinental in Tilak Nagar, Skyfall offers an ambient sanctuary where urban sophistication meets culinary artistry.
              </p>
              <p className="text-text-muted text-sm font-sans leading-relaxed">
                Whether gathering for intimate conversations, raising a glass of handcrafted mixology, or celebrating life&apos;s milestones, Skyfall provides an atmosphere crafted for memorable evenings.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden border border-border-subtle aspect-[3/4]">
                  <img
                    src={ASSET_PATHS.drinksMainImage}
                    alt="Handcrafted Cocktails"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden border border-border-subtle aspect-[3/4]">
                  <img
                    src={ASSET_PATHS.murgMakhaniImage}
                    alt="Gourmet Cuisine"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 03 — EXPERIENCE PILLARS */}
      <section className="w-full py-24 bg-bg-primary border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="THE EXPERIENCE"
            title="FOUR CORNERSTONES OF SKYFALL"
            description="Designed to offer elevated rooftop experiences across every detail."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiencePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-bg-charcoal border border-border-subtle overflow-hidden flex flex-col group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={pillar.image}
                      alt={pillar.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-charcoal via-bg-charcoal/30 to-transparent" />
                    <div className="absolute top-4 left-4 bg-bg-primary/90 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest text-gold-champagne border border-border-subtle">
                      {pillar.category}
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Icon className="text-gold-champagne shrink-0" size={20} />
                        <h3 className="font-heading text-2xl text-text-primary font-light uppercase tracking-wide">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-text-muted text-sm font-sans leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 — LOCATION & VISIT CTA */}
      <section className="relative w-full py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto bg-bg-charcoal border border-border-subtle p-10 md:p-16 space-y-6">
            <Compass size={32} className="text-gold-champagne mx-auto" />
            <span className="text-gold-champagne text-xs uppercase tracking-[0.3em] font-sans font-medium block">
              VISIT SKYFALL
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-light text-text-primary">
              READY FOR AN ELEVATED EVENING?
            </h2>
            <p className="text-text-muted text-sm md:text-base font-sans max-w-xl mx-auto">
              Join us at {BUSINESS_INFO.locatedIn}, Kanpur for an extraordinary rooftop dining and lounge experience.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link to="/menu">
                <Button variant="primary" size="md">
                  EXPLORE MENU
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="md" className="flex items-center space-x-1">
                  <span>CONTACT & DIRECTIONS</span>
                  <ChevronRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
