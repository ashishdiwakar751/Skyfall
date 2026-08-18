import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Users,
  Clock,
  Phone,
  Mail,
  User,
  Sparkles,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  ChevronRight,
  Music,
  MapPin,
  Utensils,
  Wine,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { EVENT_TYPES, EVENT_EXPERIENCE_FEATURES } from '../data/events';
import { BUSINESS_INFO, ASSET_PATHS } from '../utils/constants';
import useSeo from '../hooks/useSeo';

/**
 * Premium Events & Private Dining Page for Skyfall Lounge.
 * SEO Title: Skyfall Lounge Events | Private Parties & Celebrations in Kanpur
 * H1: Make It Your Night
 */
export const Events = () => {
  useSeo(
    'Skyfall Lounge Events | Private Parties & Celebrations in Kanpur',
    'Plan birthdays, anniversaries, private parties and group gatherings at Skyfall Lounge in Kanpur.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  // Form State Management
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'birthdays',
    eventDate: '',
    guestCount: '6-10',
    preferredTime: '7:00 PM - 9:00 PM',
    specialRequirements: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.eventDate) newErrors.eventDate = 'Event date is required';
    if (!formData.eventType) newErrors.eventType = 'Please select an event type';
    if (!formData.guestCount) newErrors.guestCount = 'Guest count is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      eventType: 'birthdays',
      eventDate: '',
      guestCount: '6-10',
      preferredTime: '7:00 PM - 9:00 PM',
      specialRequirements: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const scrollToEnquiry = (typeId = null) => {
    if (typeId) {
      setFormData((prev) => ({ ...prev, eventType: typeId }));
    }
    const element = document.getElementById('event-enquiry');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featureIcons = {
    'rooftop-setting': MapPin,
    'dining-drinks': Utensils,
    'live-entertainment': Music,
    'reservations': Calendar,
    'celebrations': Sparkles,
    'group-gatherings': Users,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full bg-bg-primary text-text-primary pt-20"
    >
      {/* 01 — EVENTS HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-border-subtle">
        {/* Background Visual Asset */}
        <div className="absolute inset-0 z-0">
          <img
            src={ASSET_PATHS.privateCelebrationImage}
            alt="Private Events and Rooftop Celebrations at Skyfall Lounge"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/80 to-bg-primary/50" />
        </div>

        {/* Hero Editorial Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-bg-secondary/90 border border-gold-champagne/40 text-gold-champagne text-xs uppercase tracking-[0.3em] font-sans">
              <Sparkles size={14} />
              <span>PRIVATE EVENTS & CELEBRATIONS</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-text-primary uppercase tracking-tight leading-tight">
              MAKE IT YOUR <span className="text-gold-gradient font-normal">NIGHT</span>
            </h1>

            <p className="text-text-muted text-base md:text-xl font-sans max-w-2xl mx-auto leading-relaxed">
              Create memorable evenings at Skyfall Lounge. An atmospheric rooftop venue in Tilak Nagar, Kanpur for birthdays, anniversaries, and private gatherings.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToEnquiry()}
                className="w-full sm:w-auto min-w-[220px]"
              >
                ENQUIRE ABOUT YOUR EVENT
              </Button>
              <Link to="/reservation" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[220px]">
                  RESERVE A TABLE
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 — EVENT TYPES SECTION */}
      <section className="w-full py-20 md:py-28 bg-bg-secondary border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="CELEBRATION CATEGORIES"
            title="TAILORED FOR YOUR OCCASION"
            description="Explore our four primary event styles, created for elevated celebrations above the city lights of Kanpur."
            align="center"
            className="mb-16 md:mb-20"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {EVENT_TYPES.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-bg-charcoal border border-border-subtle hover:border-gold-champagne/50 transition-all duration-300 p-8 md:p-10 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle Background Number */}
                <div className="absolute top-4 right-6 font-mono text-6xl font-extrabold text-border-subtle/30 pointer-events-none select-none group-hover:text-gold-champagne/10 transition-colors">
                  {event.number}
                </div>

                <div>
                  <div className="inline-block px-3 py-1 bg-bg-primary/80 border border-gold-champagne/30 text-gold-champagne font-mono text-[10px] tracking-[0.2em] uppercase mb-4">
                    {event.subtitle}
                  </div>

                  <h2 className="font-heading text-3xl md:text-4xl text-text-primary uppercase tracking-wide mb-4 group-hover:text-gold-champagne transition-colors">
                    {event.title}
                  </h2>

                  <p className="text-text-muted text-sm md:text-base font-sans leading-relaxed mb-8">
                    {event.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-subtle/50 flex items-center justify-between">
                  <span className="text-xs text-text-muted uppercase tracking-widest font-mono">
                    ROOFTOP ATMOSPHERE
                  </span>
                  <button
                    onClick={() => scrollToEnquiry(event.id)}
                    className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-gold-champagne font-sans font-medium hover:text-text-primary transition-colors group/btn"
                  >
                    <span>ENQUIRE NOW</span>
                    <ChevronRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — PRIVATE DINING / EXPERIENCE FEATURES */}
      <section className="w-full py-20 md:py-28 bg-bg-primary border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="THE SKYFALL EXPERIENCE"
            title="PRIVATE MOMENTS, ELEVATED"
            description="From intimate celebrations to group gatherings, Skyfall Lounge provides an atmospheric setting for evenings worth remembering."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {EVENT_EXPERIENCE_FEATURES.map((feature, idx) => {
              const IconComponent = featureIcons[feature.id] || Sparkles;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-bg-secondary border border-border-subtle p-6 md:p-8 hover:border-gold-champagne/40 transition-colors group"
                >
                  <div className="w-12 h-12 bg-bg-charcoal border border-gold-champagne/30 flex items-center justify-center text-gold-champagne mb-6 group-hover:bg-gold-champagne group-hover:text-bg-primary transition-colors duration-300">
                    <IconComponent size={22} />
                  </div>
                  <h3 className="font-heading text-xl text-text-primary uppercase tracking-wider mb-2 font-normal">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-sm text-text-muted font-sans leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 — CELEBRATION VISUAL BANNER */}
      <section className="relative w-full py-28 md:py-36 overflow-hidden border-b border-border-subtle bg-bg-charcoal">
        <div className="absolute inset-0">
          <img
            src={ASSET_PATHS.privateCelebrationImage}
            alt="Atmospheric rooftop dining visual at Skyfall Lounge Kanpur"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/95 via-bg-primary/80 to-bg-primary/95" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
          <span className="text-gold-champagne text-xs md:text-sm uppercase tracking-[0.3em] font-sans">
            ROOFTOP ATMOSPHERE
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-light text-text-primary leading-tight uppercase">
            "AN ATMOSPHERIC ROOFTOP SETTING FOR CELEBRATIONS ABOVE THE CITY"
          </h2>
          <div className="w-16 h-[1px] bg-gold-champagne/60 mx-auto" />
          <p className="text-text-muted text-xs md:text-sm tracking-wider uppercase font-mono">
            {BUSINESS_INFO.locatedIn} • {BUSINESS_INFO.location}
          </p>
        </div>
      </section>

      {/* 05 — EVENT ENQUIRY FORM SECTION */}
      <section id="event-enquiry" className="w-full py-20 md:py-28 bg-bg-secondary border-b border-border-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="PLAN YOUR NIGHT"
            title="SEND AN EVENT ENQUIRY"
            description="Share your celebration preferences below. Our team at Skyfall Lounge will review your request and contact you regarding availability."
            align="center"
            className="mb-12"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-bg-charcoal border border-border-subtle p-6 sm:p-10 md:p-12 shadow-2xl relative"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                /* CONFIRMATION STATE */
                <motion.div
                  key="success-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="w-16 h-16 bg-gold-champagne/10 border border-gold-champagne text-gold-champagne rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>

                  <h3 className="font-heading text-3xl text-text-primary uppercase tracking-wide">
                    Enquiry Received
                  </h3>

                  <div className="space-y-2 text-text-muted text-sm max-w-lg mx-auto font-sans leading-relaxed">
                    <p className="text-text-primary font-medium">
                      Thank you, {formData.name}. Your event enquiry has been successfully received.
                    </p>
                    <p>
                      Skyfall Lounge can follow up regarding availability for your requested date ({formData.eventDate || 'Upcoming Date'}).
                    </p>
                  </div>

                  <div className="p-4 bg-bg-primary/80 border border-border-subtle text-xs text-text-muted max-w-md mx-auto font-mono">
                    <p>Contact Phone: {BUSINESS_INFO.phone}</p>
                    <p>Location: {BUSINESS_INFO.locatedIn}, Tilak Nagar, Kanpur</p>
                  </div>

                  <div className="pt-4">
                    <Button variant="outline" size="md" onClick={handleReset}>
                      SUBMIT ANOTHER ENQUIRY
                    </Button>
                  </div>
                </motion.div>
              ) : (
                /* EVENT FORM */
                <motion.form
                  key="enquiry-form"
                  initial={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-6"
                >
                  {/* Grid fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-mono">
                        Full Name <span className="text-gold-champagne">*</span>
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-3.5 top-3.5 text-text-muted/60" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          aria-required="true"
                          placeholder="Your Name"
                          className={`w-full bg-bg-primary border ${
                            errors.name ? 'border-red-500' : 'border-border-subtle focus:border-gold-champagne'
                          } text-text-primary text-sm pl-10 pr-4 py-3 focus:outline-none transition-colors`}
                        />
                      </div>
                      {errors.name && (
                        <p role="alert" className="text-red-400 text-[11px] mt-1 font-mono">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-mono">
                        Phone Number <span className="text-gold-champagne">*</span>
                      </label>
                      <div className="relative">
                        <Phone size={16} className="absolute left-3.5 top-3.5 text-text-muted/60" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          aria-required="true"
                          placeholder="0512 666 9000 or Mobile"
                          className={`w-full bg-bg-primary border ${
                            errors.phone ? 'border-red-500' : 'border-border-subtle focus:border-gold-champagne'
                          } text-text-primary text-sm pl-10 pr-4 py-3 focus:outline-none transition-colors`}
                        />
                      </div>
                      {errors.phone && (
                        <p role="alert" className="text-red-400 text-[11px] mt-1 font-mono">{errors.phone}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-mono">
                        Email Address <span className="text-gold-champagne">*</span>
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3.5 top-3.5 text-text-muted/60" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          aria-required="true"
                          placeholder="your.email@example.com"
                          className={`w-full bg-bg-primary border ${
                            errors.email ? 'border-red-500' : 'border-border-subtle focus:border-gold-champagne'
                          } text-text-primary text-sm pl-10 pr-4 py-3 focus:outline-none transition-colors`}
                        />
                      </div>
                      {errors.email && (
                        <p role="alert" className="text-red-400 text-[11px] mt-1 font-mono">{errors.email}</p>
                      )}
                    </div>

                    {/* Event Type */}
                    <div>
                      <label htmlFor="eventType" className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-mono">
                        Event Type <span className="text-gold-champagne">*</span>
                      </label>
                      <div className="relative">
                        <Sparkles size={16} className="absolute left-3.5 top-3.5 text-text-muted/60 pointer-events-none" />
                        <select
                          id="eventType"
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleInputChange}
                          aria-required="true"
                          className="w-full bg-bg-primary border border-border-subtle focus:border-gold-champagne text-text-primary text-sm pl-10 pr-4 py-3 focus:outline-none transition-colors appearance-none cursor-pointer"
                        >
                          <option value="birthdays">Birthdays</option>
                          <option value="anniversaries">Anniversaries</option>
                          <option value="private-parties">Private Parties</option>
                          <option value="corporate-gatherings">Corporate Gatherings</option>
                          <option value="other-celebration">Other Celebration</option>
                        </select>
                      </div>
                      {errors.eventType && (
                        <p role="alert" className="text-red-400 text-[11px] mt-1 font-mono">{errors.eventType}</p>
                      )}
                    </div>

                    {/* Event Date */}
                    <div>
                      <label htmlFor="eventDate" className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-mono">
                        Event Date <span className="text-gold-champagne">*</span>
                      </label>
                      <div className="relative">
                        <Calendar size={16} className="absolute left-3.5 top-3.5 text-text-muted/60" />
                        <input
                          type="date"
                          id="eventDate"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleInputChange}
                          aria-required="true"
                          className={`w-full bg-bg-primary border ${
                            errors.eventDate ? 'border-red-500' : 'border-border-subtle focus:border-gold-champagne'
                          } text-text-primary text-sm pl-10 pr-4 py-3 focus:outline-none transition-colors`}
                        />
                      </div>
                      {errors.eventDate && (
                        <p role="alert" className="text-red-400 text-[11px] mt-1 font-mono">{errors.eventDate}</p>
                      )}
                    </div>

                    {/* Number of Guests */}
                    <div>
                      <label htmlFor="guestCount" className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-mono">
                        Number of Guests <span className="text-gold-champagne">*</span>
                      </label>
                      <div className="relative">
                        <Users size={16} className="absolute left-3.5 top-3.5 text-text-muted/60 pointer-events-none" />
                        <select
                          id="guestCount"
                          name="guestCount"
                          value={formData.guestCount}
                          onChange={handleInputChange}
                          aria-required="true"
                          className="w-full bg-bg-primary border border-border-subtle focus:border-gold-champagne text-text-primary text-sm pl-10 pr-4 py-3 focus:outline-none transition-colors appearance-none cursor-pointer"
                        >
                          <option value="2-5">2 - 5 Guests</option>
                          <option value="6-10">6 - 10 Guests</option>
                          <option value="11-20">11 - 20 Guests</option>
                          <option value="20+">20+ Guests</option>
                        </select>
                      </div>
                      {errors.guestCount && (
                        <p role="alert" className="text-red-400 text-[11px] mt-1 font-mono">{errors.guestCount}</p>
                      )}
                    </div>

                  </div>

                  {/* Full width Preferred Time */}
                  <div>
                    <label htmlFor="preferredTime" className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-mono">
                      Preferred Time
                    </label>
                    <div className="relative">
                      <Clock size={16} className="absolute left-3.5 top-3.5 text-text-muted/60 pointer-events-none" />
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full bg-bg-primary border border-border-subtle focus:border-gold-champagne text-text-primary text-sm pl-10 pr-4 py-3 focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="7:00 PM - 9:00 PM">Evening (7:00 PM - 9:00 PM)</option>
                        <option value="9:00 PM Onwards">Late Night (9:00 PM onwards)</option>
                        <option value="Afternoon">Afternoon Session</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Requirements */}
                  <div>
                    <label htmlFor="specialRequirements" className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-mono">
                      Special Requirements / Notes
                    </label>
                    <div className="relative">
                      <MessageSquare size={16} className="absolute left-3.5 top-3.5 text-text-muted/60" />
                      <textarea
                        id="specialRequirements"
                        name="specialRequirements"
                        rows={4}
                        value={formData.specialRequirements}
                        onChange={handleInputChange}
                        placeholder="Tell us about seating preferences, music style, or specific event notes..."
                        className="w-full bg-bg-primary border border-border-subtle focus:border-gold-champagne text-text-primary text-sm pl-10 pr-4 py-3 focus:outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Form Submission Disclaimer & Button */}
                  <div className="pt-4 flex flex-col items-center space-y-4">
                    <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto min-w-[260px]">
                      SEND EVENT ENQUIRY
                    </Button>
                    <p className="text-[11px] text-text-muted text-center font-mono">
                      Submitting an enquiry does not guarantee table or venue confirmation. Our team will contact you.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 06 — CONTACT / PHONE CTA SECTION */}
      <section className="w-full py-16 md:py-20 bg-bg-primary text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <span className="text-gold-champagne text-xs uppercase tracking-[0.3em] font-sans">
            DIRECT CONTACT
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-text-primary uppercase font-light">
            PREFER TO SPEAK WITH US DIRECTLY?
          </h2>
          <p className="text-text-muted text-sm font-sans max-w-lg mx-auto">
            Reach out directly to the Skyfall Lounge team at Vijay Intercontinental for immediate event enquiries.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-transparent border border-gold-champagne text-gold-champagne hover:bg-gold-champagne hover:text-bg-primary uppercase tracking-widest text-sm font-medium transition-all duration-300"
            >
              <Phone size={18} />
              <span>CALL SKYFALL ({BUSINESS_INFO.phone})</span>
            </a>
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default Events;
