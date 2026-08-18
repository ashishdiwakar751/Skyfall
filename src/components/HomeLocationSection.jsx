import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Compass, CheckCircle2, Navigation } from 'lucide-react';
import Button from './Button';
import SectionHeading from './SectionHeading';
import { BUSINESS_INFO } from '../utils/constants';

/**
 * Premium Location / Contact section for Homepage.
 */
export const HomeLocationSection = () => {
  return (
    <section className="w-full py-24 bg-bg-secondary border-t border-border-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          subtitle="FIND SKYFALL"
          title="MEET US AT VIJAY INTERCONTINENTAL."
          description={`Located in ${BUSINESS_INFO.locatedIn}, Kanpur.`}
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* LEFT: Address, Phone, CTAs & Verified Business Facts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <div className="bg-bg-charcoal border border-border-subtle p-6 space-y-4">
                <h3 className="font-heading text-2xl text-text-primary uppercase tracking-wide flex items-center">
                  <MapPin className="text-gold-champagne mr-3 shrink-0" size={22} />
                  <span>Address & Location</span>
                </h3>
                <p className="text-text-muted text-sm font-sans leading-relaxed pl-8">
                  <strong className="text-text-primary block font-normal text-base mb-1">
                    {BUSINESS_INFO.name}
                  </strong>
                  Located in {BUSINESS_INFO.locatedIn}
                  <br />
                  {BUSINESS_INFO.address}
                </p>
              </div>

              <div className="bg-bg-charcoal border border-border-subtle p-6 space-y-2">
                <h3 className="font-heading text-xl text-text-primary uppercase tracking-wide flex items-center">
                  <Phone className="text-gold-champagne mr-3 shrink-0" size={20} />
                  <span>Direct Telephone</span>
                </h3>
                <p className="pl-8 text-base font-sans">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="text-text-primary hover:text-gold-champagne transition-colors font-medium tracking-wider"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="primary" size="md" className="flex items-center space-x-2">
                  <Navigation size={16} className="mr-2" />
                  <span>GET DIRECTIONS</span>
                </Button>
              </a>

              <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="inline-block">
                <Button variant="outline" size="md" className="flex items-center space-x-2">
                  <Phone size={16} className="mr-2" />
                  <span>CALL SKYFALL</span>
                </Button>
              </a>
            </div>

            {/* Verified Business Facts */}
            <div className="pt-6 border-t border-border-subtle/60">
              <span className="text-xs uppercase tracking-[0.2em] text-gold-champagne font-sans font-medium block mb-3">
                VERIFIED AMENITIES & SERVICES
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-text-muted">
                {BUSINESS_INFO.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 bg-bg-primary/50 px-3 py-2 border border-border-subtle/40">
                    <CheckCircle2 size={13} className="text-gold-champagne shrink-0" />
                    <span className="truncate">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* RIGHT: Editorial Visual Location Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex"
          >
            <div className="w-full bg-bg-charcoal border border-border-subtle p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group">
              {/* Subtle Map Line Grid Graphic Effect */}
              <div className="absolute inset-0 bg-[radial-gradient(#2A2823_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-gold-champagne font-sans font-medium">
                    LOCATION SPOTLIGHT
                  </span>
                  <Compass className="text-gold-champagne animate-pulse" size={20} />
                </div>

                <div className="space-y-4 pt-4">
                  <h4 className="font-heading text-3xl md:text-4xl text-text-primary font-light">
                    {BUSINESS_INFO.name.toUpperCase()}
                  </h4>
                  <p className="text-gold-champagne font-sans text-xs uppercase tracking-[0.25em]">
                    {BUSINESS_INFO.locatedIn}
                  </p>
                  <p className="text-text-muted text-sm font-sans leading-relaxed pt-2">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              {/* Bottom Interactive Trigger Area */}
              <div className="relative z-10 pt-12 mt-8 border-t border-border-subtle/60 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-text-muted block">
                    PHONE ENQUIRIES
                  </span>
                  <span className="text-text-primary text-sm font-mono tracking-widest">
                    {BUSINESS_INFO.phone}
                  </span>
                </div>
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest text-gold-champagne hover:underline flex items-center space-x-1"
                >
                  <span>Open in Maps</span>
                  <span>&rarr;</span>
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HomeLocationSection;
