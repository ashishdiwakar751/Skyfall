import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/constants';

/**
 * Reusable Footer foundation component.
 */
export const Footer = () => {
  return (
    <footer className="w-full bg-bg-secondary border-t border-border-subtle text-text-muted font-sans text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <h3 className="font-heading text-2xl tracking-wider text-text-primary uppercase">
              Skyfall <span className="text-gold-champagne font-normal">Lounge</span>
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Kanpur's premier rooftop lounge & bar. An extraordinary experience of luxury dining, handcrafted cocktails, and intimate nightlife above Vijay Intercontinental.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-lg text-gold-champagne tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider">
              <li><Link to="/" className="hover:text-text-primary transition-colors">Home</Link></li>
              <li><Link to="/menu" className="hover:text-text-primary transition-colors">Menu</Link></li>
              <li><Link to="/experience" className="hover:text-text-primary transition-colors">Experience</Link></li>
              <li><Link to="/events" className="hover:text-text-primary transition-colors">Events</Link></li>
              <li><Link to="/gallery" className="hover:text-text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="hover:text-text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-text-primary transition-colors">Contact</Link></li>
              <li><Link to="/reservation" className="hover:text-text-primary transition-colors">Reservation</Link></li>
            </ul>
          </div>

          {/* Business Positioning & Info */}
          <div className="space-y-3">
            <h4 className="font-heading text-lg text-gold-champagne tracking-wider uppercase">
              Experience
            </h4>
            <ul className="space-y-1.5 text-xs text-text-muted">
              {BUSINESS_INFO.positioning.map((item, idx) => (
                <li key={idx} className="capitalize flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-bronze mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-heading text-lg text-gold-champagne tracking-wider uppercase">
              Location & Contact
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start">
                <MapPin size={16} className="text-gold-champagne mr-2 shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.location}
                  <br />
                  <span className="text-text-primary">({BUSINESS_INFO.locatedIn})</span>
                </span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="text-gold-champagne mr-2 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-gold-champagne">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between text-xs text-text-muted space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p className="text-[11px] tracking-wider uppercase">
            Rooftop Luxury Dining & Lounge
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
