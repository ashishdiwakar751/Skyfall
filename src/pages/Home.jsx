import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import TrustFacts from '../components/TrustFacts';
import SkyfallExperience from '../components/SkyfallExperience';
import RooftopExperience from '../components/RooftopExperience';
import EventsSection from '../components/EventsSection';
import GalleryPreview from '../components/GalleryPreview';
import GuestReviewsSection from '../components/GuestReviewsSection';
import HomeAboutSection from '../components/HomeAboutSection';
import HomeLocationSection from '../components/HomeLocationSection';
import HomeReservationCta from '../components/HomeReservationCta';
import useSeo from '../hooks/useSeo';

export const Home = () => {
  useSeo(
    'Skyfall Lounge | Rooftop Lounge & Bar in Kanpur',
    'Skyfall Lounge is a rooftop lounge and bar at Vijay Intercontinental in Kanpur, offering dining, drinks, live entertainment and celebrations.'
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
      className="min-h-screen w-full bg-bg-primary text-text-primary"
    >
      {/* Phase 2: Hero Section */}
      <Hero />

      {/* Phase 3: Section 01 — Trust / Quick Facts */}
      <TrustFacts />

      {/* Phase 3: Section 02 — Skyfall Experience */}
      <SkyfallExperience />

      {/* Phase 3: Section 03 — Rooftop Experience */}
      <RooftopExperience />

      {/* Phase 5: Section 04 — Events & Celebrations */}
      <EventsSection />

      {/* Phase 6: Section 05 — Gallery Preview */}
      <GalleryPreview />

      {/* Phase 7: Section 06 — Guest Reviews */}
      <GuestReviewsSection />

      {/* Phase 7: Section 07 — About Skyfall */}
      <HomeAboutSection />

      {/* Phase 7: Section 08 — Location & Contact */}
      <HomeLocationSection />

      {/* Phase 8: Section 09 — Final Reservation CTA */}
      <HomeReservationCta />
    </motion.div>
  );
};

export default Home;


