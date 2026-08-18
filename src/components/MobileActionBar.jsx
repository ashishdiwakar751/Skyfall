import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UtensilsCrossed, Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/constants';

/**
 * Mobile-only sticky bottom action bar for Skyfall Lounge.
 * Rendered on mobile screens (< 768px).
 * Features MENU, CALL, and RESERVE actions with active state tracking
 * and automatic hiding when modal/drawer overlays lock body scrolling.
 */
export const MobileActionBar = () => {
  const location = useLocation();
  const [isHidden, setIsHidden] = useState(false);

  // Auto-hide bottom bar when mobile menu or lightbox locks body scroll
  useEffect(() => {
    const checkScrollLock = () => {
      const isLocked = document.body.style.overflow === 'hidden';
      setIsHidden(isLocked);
    };

    // Check on mount and listen to DOM attribute changes on <body>
    checkScrollLock();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          checkScrollLock();
        }
      });
    });

    observer.observe(document.body, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  if (isHidden) return null;

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 w-full bg-[#080807]/96 backdrop-blur-[12px] border-t border-border-subtle shadow-2xl transition-transform duration-300 pb-[env(safe-area-inset-bottom)]"
      role="navigation"
      aria-label="Mobile Bottom Actions"
    >
      <div className="grid grid-cols-3 h-16 items-center max-w-md mx-auto px-2">
        {/* MENU */}
        <Link
          to="/menu"
          className={`flex flex-col items-center justify-center py-2 px-1 rounded transition-colors ${
            isActive('/menu')
              ? 'text-gold-champagne'
              : 'text-text-muted hover:text-text-primary'
          }`}
          aria-label="View Menu"
        >
          <UtensilsCrossed size={18} className="mb-1" />
          <span className="text-[10px] uppercase tracking-widest font-sans font-medium">
            MENU
          </span>
        </Link>

        {/* CALL */}
        <a
          href={`tel:${BUSINESS_INFO.phoneClean}`}
          className="flex flex-col items-center justify-center py-2 px-1 text-text-muted hover:text-text-primary rounded transition-colors"
          aria-label={`Call Skyfall Lounge at ${BUSINESS_INFO.phone}`}
        >
          <Phone size={18} className="mb-1" />
          <span className="text-[10px] uppercase tracking-widest font-sans font-medium">
            CALL
          </span>
        </a>

        {/* RESERVE (Primary Gold Action) */}
        <Link
          to="/reservation"
          className={`flex flex-col items-center justify-center py-2 px-1 rounded transition-all ${
            isActive('/reservation')
              ? 'text-bg-primary bg-gold-champagne font-bold'
              : 'text-gold-champagne hover:bg-gold-champagne/10 font-semibold'
          }`}
          aria-label="Reserve a Table"
        >
          <Calendar size={18} className="mb-1" />
          <span className="text-[10px] uppercase tracking-widest font-sans">
            RESERVE
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MobileActionBar;
