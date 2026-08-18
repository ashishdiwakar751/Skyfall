import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

/**
 * Premium Cinematic Rooftop Navbar for Skyfall Lounge.
 */
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll detection for background transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Experience', path: '/experience' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Events', path: '/events' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080807]/88 backdrop-blur-[14px] border-b border-border-subtle py-4 shadow-lg'
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* LEFT: Brand Logo */}
        <Link to="/" className="flex flex-col group focus:outline-none">
          <span className="font-heading text-2xl sm:text-3xl tracking-[0.15em] text-text-primary uppercase font-light leading-none">
            SKYFALL<span className="text-gold-champagne font-normal text-xs align-super ml-0.5">•</span>
          </span>
          <span className="text-[9px] tracking-[0.3em] text-text-muted uppercase font-sans mt-1 group-hover:text-gold-champagne transition-colors duration-200">
            ROOFTOP LOUNGE & BAR
          </span>
        </Link>

        {/* CENTER: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-xs uppercase tracking-[0.25em] font-sans font-medium transition-colors duration-200 py-1 ${
                  active
                    ? 'text-text-primary'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {link.name}
                {active && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold-champagne"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT: Action Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <Link to="/reservation">
            <Button variant="primary" size="sm" className="px-6 py-2.5">
              RESERVE A TABLE
            </Button>
          </Link>
        </div>

        {/* MOBILE: Menu Button Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-drawer"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden text-text-primary hover:text-gold-champagne p-2 focus:outline-none transition-colors duration-200"
        >
          {mobileMenuOpen ? <X size={26} /> : <MenuIcon size={26} />}
        </button>
      </div>

      {/* MOBILE: Premium Full-width / Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-bg-secondary border-b border-border-subtle overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-border-subtle/50">
                <span className="text-xs uppercase tracking-[0.25em] text-gold-champagne font-sans">
                  NAVIGATION
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-text-muted hover:text-text-primary p-1 focus:outline-none"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="flex flex-col space-y-4 pt-2">
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-sm uppercase tracking-[0.25em] py-2 font-sans transition-colors duration-200 flex items-center justify-between border-b border-border-subtle/30 ${
                        active
                          ? 'text-gold-champagne font-medium pl-2 border-l-2 border-l-gold-champagne'
                          : 'text-text-muted hover:text-text-primary'
                      }`}
                    >
                      <span>{link.name}</span>
                      {active && <span className="w-1.5 h-1.5 bg-gold-champagne rounded-full" />}
                    </Link>
                  );
                })}
              </div>

              <div className="pt-4 flex flex-col space-y-4">
                <Link to="/reservation" onClick={() => setMobileMenuOpen(false)} className="w-full">
                  <Button variant="primary" size="md" className="w-full py-3.5">
                    RESERVE A TABLE
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
