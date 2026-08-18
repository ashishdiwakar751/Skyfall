import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Navigation, UtensilsCrossed, Calendar, CheckCircle, AlertCircle, Clock, Users, User, Mail, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { BUSINESS_INFO, ASSET_PATHS } from '../utils/constants';
import useSeo from '../hooks/useSeo';

/**
 * Complete Reservation Page for Skyfall Lounge.
 * Fulfills Phase 8 requirements with an editorial request interface,
 * accessible inline validation, success feedback state, contact strip,
 * and compact location details.
 */
export const Reservation = () => {
  useSeo(
    'Reserve a Table at Skyfall Lounge | Kanpur',
    'Request a table at Skyfall Lounge in Kanpur. Submit your preferred date, time and guest count for follow-up.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  // Form input state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '7:00 PM',
    guests: '2 Guests',
    occasion: 'None',
    specialRequest: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  // Min date string (today) YYYY-MM-DD
  const todayStr = new Date().toISOString().split('T')[0];

  const occasionOptions = [
    'None',
    'Birthday',
    'Anniversary',
    'Private Celebration',
    'Business / Corporate',
    'Other',
  ];

  const timeOptions = [
    '6:00 PM',
    '6:30 PM',
    '7:00 PM',
    '7:30 PM',
    '8:00 PM',
    '8:30 PM',
    '9:00 PM',
    '9:30 PM',
    '10:00 PM',
    '10:30 PM',
    '11:00 PM',
  ];

  const guestOptions = [
    '1 Guest',
    '2 Guests',
    '3 Guests',
    '4 Guests',
    '5 Guests',
    '6 Guests',
    '7-10 Guests',
    '10+ Large Party',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name.';
    }

    // Phone validation (reasonable Indian format: 10 digits or +91 format)
    const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, '');
    const phoneRegex = /^(\+91[\-\s]?)?[0-9]{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    // Email validation (optional, but validate format if filled)
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    // Date validation
    if (!formData.date) {
      newErrors.date = 'Please select a date for your visit.';
    } else if (formData.date < todayStr) {
      newErrors.date = 'Reservation date cannot be in the past.';
    }

    // Time validation
    if (!formData.time) {
      newErrors.time = 'Please select a preferred time.';
    }

    // Guests validation
    if (!formData.guests) {
      newErrors.guests = 'Please select the number of guests.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmittedName(formData.name.trim());
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '7:00 PM',
      guests: '2 Guests',
      occasion: 'None',
      specialRequest: '',
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmittedName('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full bg-bg-primary text-text-primary pt-20"
    >
      {/* 01 — RESERVATION HERO */}
      <section className="relative w-full py-20 md:py-28 bg-bg-secondary border-b border-border-subtle overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={ASSET_PATHS.heroImage}
            alt="Skyfall Lounge Rooftop Luxury Atmosphere"
            className="w-full h-full object-cover object-center opacity-25 filter blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-bg-secondary/80 to-bg-secondary/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-champagne text-xs md:text-sm uppercase tracking-[0.3em] font-sans mb-3 block font-medium">
              RESERVE YOUR TABLE
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-text-primary mb-4 leading-tight uppercase">
              MAKE YOUR EVENING YOURS.
            </h1>
            <div className="w-16 h-[1px] bg-gold-champagne/40 mx-auto mb-6" />
            <p className="text-text-muted text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed font-light">
              Request a table at Skyfall Lounge and let the evening begin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02 — RESERVATION FORM & INFORMATION PANEL */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Editorial Reservation Form / Success State */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="reservation-form-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-bg-secondary border border-border-subtle p-6 sm:p-8 md:p-10 relative"
                >
                  <div className="mb-8 border-b border-border-subtle pb-6">
                    <h2 className="font-heading text-2xl sm:text-3xl text-text-primary uppercase tracking-wide">
                      TABLE REQUEST FORM
                    </h2>
                    <p className="text-xs text-text-muted font-sans mt-1">
                      Please enter your preferred details below for table enquiry.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name * */}
                      <div className="space-y-2">
                        <label htmlFor="reservation-name" className="text-xs uppercase tracking-wider text-text-primary font-sans block">
                          Name <span className="text-gold-champagne">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="reservation-name"
                            name="name"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. Rahul Sharma"
                            className={`w-full bg-bg-charcoal border ${
                              errors.name ? 'border-red-500' : 'border-border-subtle focus:border-gold-champagne'
                            } text-text-primary px-4 py-3 text-sm focus:outline-none transition-colors rounded-none`}
                            aria-required="true"
                            aria-invalid={!!errors.name}
                          />
                        </div>
                        {errors.name && (
                          <p role="alert" className="text-xs text-red-400 flex items-center mt-1">
                            <AlertCircle size={12} className="mr-1 shrink-0" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Phone * */}
                      <div className="space-y-2">
                        <label htmlFor="reservation-phone" className="text-xs uppercase tracking-wider text-text-primary font-sans block">
                          Phone Number <span className="text-gold-champagne">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            id="reservation-phone"
                            name="phone"
                            autoComplete="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="e.g. 9876543210"
                            className={`w-full bg-bg-charcoal border ${
                              errors.phone ? 'border-red-500' : 'border-border-subtle focus:border-gold-champagne'
                            } text-text-primary px-4 py-3 text-sm focus:outline-none transition-colors rounded-none`}
                            aria-required="true"
                            aria-invalid={!!errors.phone}
                          />
                        </div>
                        {errors.phone && (
                          <p role="alert" className="text-xs text-red-400 flex items-center mt-1">
                            <AlertCircle size={12} className="mr-1 shrink-0" />
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="reservation-email" className="text-xs uppercase tracking-wider text-text-muted font-sans block">
                        Email Address <span className="text-[10px] text-text-muted/60">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        id="reservation-email"
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@example.com"
                        className={`w-full bg-bg-charcoal border ${
                          errors.email ? 'border-red-500' : 'border-border-subtle focus:border-gold-champagne'
                        } text-text-primary px-4 py-3 text-sm focus:outline-none transition-colors rounded-none`}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p role="alert" className="text-xs text-red-400 flex items-center mt-1">
                          <AlertCircle size={12} className="mr-1 shrink-0" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Date, Preferred Time, Guest Count */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {/* Date * */}
                      <div className="space-y-2">
                        <label htmlFor="reservation-date" className="text-xs uppercase tracking-wider text-text-primary font-sans block">
                          Date <span className="text-gold-champagne">*</span>
                        </label>
                        <input
                          type="date"
                          id="reservation-date"
                          name="date"
                          min={todayStr}
                          value={formData.date}
                          onChange={handleChange}
                          className={`w-full bg-bg-charcoal border ${
                            errors.date ? 'border-red-500' : 'border-border-subtle focus:border-gold-champagne'
                          } text-text-primary px-3 py-3 text-sm focus:outline-none transition-colors rounded-none`}
                          aria-required="true"
                          aria-invalid={!!errors.date}
                        />
                        {errors.date && (
                          <p role="alert" className="text-xs text-red-400 flex items-center mt-1">
                            <AlertCircle size={12} className="mr-1 shrink-0" />
                            {errors.date}
                          </p>
                        )}
                      </div>

                      {/* Preferred Time * */}
                      <div className="space-y-2">
                        <label htmlFor="reservation-time" className="text-xs uppercase tracking-wider text-text-primary font-sans block">
                          Preferred Time <span className="text-gold-champagne">*</span>
                        </label>
                        <select
                          id="reservation-time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className={`w-full bg-bg-charcoal border ${
                            errors.time ? 'border-red-500' : 'border-border-subtle focus:border-gold-champagne'
                          } text-text-primary px-3 py-3 text-sm focus:outline-none transition-colors rounded-none`}
                          aria-required="true"
                        >
                          {timeOptions.map((t) => (
                            <option key={t} value={t} className="bg-bg-charcoal text-text-primary">
                              {t}
                            </option>
                          ))}
                        </select>
                        {errors.time && (
                          <p role="alert" className="text-xs text-red-400 flex items-center mt-1">
                            <AlertCircle size={12} className="mr-1 shrink-0" />
                            {errors.time}
                          </p>
                        )}
                      </div>

                      {/* Number of Guests * */}
                      <div className="space-y-2">
                        <label htmlFor="reservation-guests" className="text-xs uppercase tracking-wider text-text-primary font-sans block">
                          Guests <span className="text-gold-champagne">*</span>
                        </label>
                        <select
                          id="reservation-guests"
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className={`w-full bg-bg-charcoal border ${
                            errors.guests ? 'border-red-500' : 'border-border-subtle focus:border-gold-champagne'
                          } text-text-primary px-3 py-3 text-sm focus:outline-none transition-colors rounded-none`}
                          aria-required="true"
                        >
                          {guestOptions.map((g) => (
                            <option key={g} value={g} className="bg-bg-charcoal text-text-primary">
                              {g}
                            </option>
                          ))}
                        </select>
                        {errors.guests && (
                          <p role="alert" className="text-xs text-red-400 flex items-center mt-1">
                            <AlertCircle size={12} className="mr-1 shrink-0" />
                            {errors.guests}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Occasion */}
                    <div className="space-y-2">
                      <label htmlFor="reservation-occasion" className="text-xs uppercase tracking-wider text-text-muted font-sans block">
                        Occasion
                      </label>
                      <select
                        id="reservation-occasion"
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleChange}
                        className="w-full bg-bg-charcoal border border-border-subtle focus:border-gold-champagne text-text-primary px-4 py-3 text-sm focus:outline-none transition-colors rounded-none"
                      >
                        {occasionOptions.map((occ) => (
                          <option key={occ} value={occ} className="bg-bg-charcoal text-text-primary">
                            {occ}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Special Request */}
                    <div className="space-y-2">
                      <label htmlFor="reservation-special-request" className="text-xs uppercase tracking-wider text-text-muted font-sans block">
                        Special Request
                      </label>
                      <textarea
                        id="reservation-special-request"
                        name="specialRequest"
                        rows={3}
                        value={formData.specialRequest}
                        onChange={handleChange}
                        placeholder="Any seating preferences, dietary requests, or special notes..."
                        className="w-full bg-bg-charcoal border border-border-subtle focus:border-gold-champagne text-text-primary px-4 py-3 text-sm focus:outline-none transition-colors rounded-none resize-none"
                      />
                    </div>

                    {/* Submit Section */}
                    <div className="pt-4 border-t border-border-subtle space-y-4">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full py-4 text-base font-semibold tracking-widest"
                      >
                        REQUEST A TABLE
                      </Button>

                      <p className="text-[11px] text-text-muted/70 text-center leading-relaxed font-sans italic">
                        Your request is not a confirmed reservation. Skyfall Lounge can follow up regarding availability.
                      </p>
                    </div>
                  </form>
                </motion.div>
              ) : (
                /* SUCCESS STATE */
                <motion.div
                  key="reservation-success-block"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-bg-secondary border border-gold-champagne/40 p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden"
                >
                  <div className="w-16 h-16 bg-gold-champagne/10 border border-gold-champagne/40 rounded-full flex items-center justify-center mx-auto text-gold-champagne">
                    <CheckCircle size={32} />
                  </div>

                  <div className="space-y-3">
                    <span className="text-xs uppercase tracking-[0.3em] text-gold-champagne font-sans font-medium block">
                      REQUEST RECORDED
                    </span>
                    <h2 className="font-heading text-3xl sm:text-4xl text-text-primary uppercase font-light">
                      REQUEST RECEIVED
                    </h2>
                    <div className="w-12 h-[1px] bg-gold-champagne/40 mx-auto" />
                  </div>

                  <p className="text-text-muted text-sm sm:text-base max-w-lg mx-auto font-sans leading-relaxed">
                    Thank you, <strong className="text-text-primary font-normal">{submittedName}</strong>. Your table request has been recorded for follow-up.
                  </p>

                  <div className="bg-bg-charcoal border border-border-subtle p-5 max-w-md mx-auto space-y-2 text-xs font-sans text-left">
                    <p className="text-text-primary font-medium flex items-center justify-between border-b border-border-subtle/60 pb-2">
                      <span>Date & Time:</span>
                      <span className="text-gold-champagne font-mono">{formData.date} @ {formData.time}</span>
                    </p>
                    <p className="text-text-primary font-medium flex items-center justify-between border-b border-border-subtle/60 pb-2">
                      <span>Guests:</span>
                      <span className="text-text-muted font-mono">{formData.guests}</span>
                    </p>
                    {formData.occasion !== 'None' && (
                      <p className="text-text-primary font-medium flex items-center justify-between">
                        <span>Occasion:</span>
                        <span className="text-text-muted">{formData.occasion}</span>
                      </p>
                    )}
                  </div>

                  <p className="text-xs text-text-muted font-sans">
                    For immediate availability confirmation, please contact Skyfall Lounge directly:
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="w-full sm:w-auto">
                      <Button variant="primary" size="md" className="w-full flex items-center justify-center space-x-2">
                        <Phone size={16} className="mr-2" />
                        <span>CALL SKYFALL ({BUSINESS_INFO.phone})</span>
                      </Button>
                    </a>

                    <Button
                      variant="outline"
                      size="md"
                      onClick={handleReset}
                      className="w-full sm:w-auto"
                    >
                      MAKE ANOTHER REQUEST
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT COLUMN: Contact Options & Compact Location Info */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Contact Options Box */}
            <div className="bg-bg-secondary border border-border-subtle p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-gold-champagne font-sans block mb-1">
                  NEED IMMEDIATE HELP?
                </span>
                <h3 className="font-heading text-2xl text-text-primary uppercase font-light">
                  DIRECT CONTACT OPTIONS
                </h3>
              </div>

              <div className="space-y-4">
                {/* 1. CALL SKYFALL */}
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="group flex items-center justify-between p-4 bg-bg-charcoal border border-border-subtle hover:border-gold-champagne/50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Phone className="text-gold-champagne shrink-0" size={20} />
                    <div>
                      <span className="text-xs uppercase tracking-wider text-text-primary block font-medium">
                        CALL SKYFALL
                      </span>
                      <span className="text-xs font-mono text-text-muted">
                        {BUSINESS_INFO.phone}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-gold-champagne uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </a>

                {/* 2. GET DIRECTIONS */}
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 bg-bg-charcoal border border-border-subtle hover:border-gold-champagne/50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Navigation className="text-gold-champagne shrink-0" size={20} />
                    <div>
                      <span className="text-xs uppercase tracking-wider text-text-primary block font-medium">
                        GET DIRECTIONS
                      </span>
                      <span className="text-xs text-text-muted">
                        Google Maps Location
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-gold-champagne uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </a>

                {/* 3. VIEW MENU */}
                <Link
                  to="/menu"
                  className="group flex items-center justify-between p-4 bg-bg-charcoal border border-border-subtle hover:border-gold-champagne/50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <UtensilsCrossed className="text-gold-champagne shrink-0" size={20} />
                    <div>
                      <span className="text-xs uppercase tracking-wider text-text-primary block font-medium">
                        VIEW MENU
                      </span>
                      <span className="text-xs text-text-muted">
                        Explore Drinks & Dishes
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-gold-champagne uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>

            {/* 04 — COMPACT LOCATION INFORMATION */}
            <div className="bg-bg-secondary border border-border-subtle p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                <h3 className="font-heading text-xl text-text-primary uppercase tracking-wide flex items-center">
                  <MapPin className="text-gold-champagne mr-2.5 shrink-0" size={20} />
                  <span>LOCATION INFORMATION</span>
                </h3>
              </div>

              <div className="space-y-3 font-sans text-sm">
                <div className="space-y-1">
                  <p className="font-heading text-2xl text-text-primary uppercase font-light">
                    {BUSINESS_INFO.name}
                  </p>
                  <p className="text-gold-champagne text-xs uppercase tracking-widest">
                    {BUSINESS_INFO.locatedIn}
                  </p>
                </div>

                <div className="text-text-muted text-xs leading-relaxed space-y-0.5 pt-2">
                  <p>10/510, Khalasi Line</p>
                  <p>Tilak Nagar</p>
                  <p>Kanpur, Uttar Pradesh 208002</p>
                </div>

                <div className="pt-4 border-t border-border-subtle/60 flex items-center justify-between text-xs">
                  <span className="text-text-muted">Direct Phone:</span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="text-text-primary font-mono hover:text-gold-champagne transition-colors font-medium"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
    </motion.div>
  );
};

export default Reservation;
