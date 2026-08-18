import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import useSeo from '../hooks/useSeo';

/**
 * Premium minimal 404 Page for Skyfall Lounge.
 */
export const NotFound = () => {
  useSeo(
    'Page Not Found | Skyfall Lounge',
    'The requested page could not be found. Return to Skyfall Lounge rooftop lounge and bar in Kanpur.'
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-bg-primary text-text-primary flex items-center justify-center px-4 py-24"
    >
      <div className="max-w-md w-full text-center space-y-6">
        <span className="text-gold-champagne text-xs font-mono tracking-[0.3em] uppercase block">
          404 ERROR
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-light text-text-primary uppercase tracking-tight">
          PAGE NOT FOUND
        </h1>
        <div className="w-12 h-[1px] bg-gold-champagne/40 mx-auto" />
        <p className="text-text-muted text-base font-sans leading-relaxed font-light">
          The night took a wrong turn.
        </p>
        <div className="pt-4">
          <Link to="/">
            <Button variant="primary" size="lg" className="px-8 py-4">
              RETURN HOME
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;
