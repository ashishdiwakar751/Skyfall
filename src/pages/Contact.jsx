import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Calendar, Send, CheckCircle2, Clock, Navigation, Check } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { BUSINESS_INFO } from '../utils/constants';
import useSeo from '../hooks/useSeo';

export const Contact = () => {
  useSeo(
    'Contact Skyfall Lounge | Kanpur Rooftop Lounge & Bar',
    'Find Skyfall Lounge at Vijay Intercontinental, Tilak Nagar, Kanpur and get directions or contact the lounge.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phoneOrEmail: '',
    inquiryType: 'General Enquiry',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full bg-bg-primary text-text-primary pt-24"
    >
      {/* 01 — CONTACT HERO */}
      <section className="relative w-full py-16 md:py-24 bg-bg-secondary border-b border-border-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <span className="text-gold-champagne text-xs md:text-sm uppercase tracking-[0.35em] font-sans font-medium">
              CONTACT SKYFALL
            </span>

            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-light text-text-primary leading-tight">
              COME UP FOR THE EVENING.
            </h1>

            <div className="w-16 h-[1px] bg-gold-champagne/50 mx-auto my-6" />

            <p className="text-text-muted text-base md:text-lg font-sans leading-relaxed">
              Find Skyfall Lounge at Vijay Intercontinental in Kanpur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02 & 03 & 04 — CONTACT INFO & ACTIONS & BUSINESS PANEL */}
      <section className="w-full py-20 bg-bg-primary border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* LEFT COLUMN: Contact Details & Primary Action Buttons */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-gold-champagne text-xs uppercase tracking-[0.25em] font-sans font-medium block mb-2">
                  DIRECT CONTACT DETAILS
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-light text-text-primary uppercase tracking-wide mb-4">
                  {BUSINESS_INFO.name}
                </h2>
                <div className="w-12 h-[1px] bg-gold-champagne/40 mb-6" />
              </div>

              {/* Address Card */}
              <div className="bg-bg-charcoal border border-border-subtle p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-gold-champagne shrink-0 mt-1" size={20} />
                  <div className="space-y-1 text-sm font-sans">
                    <span className="text-xs uppercase tracking-wider text-gold-champagne block">
                      LOCATION
                    </span>
                    <p className="text-text-primary font-medium text-base">
                      {BUSINESS_INFO.name}
                    </p>
                    <p className="text-gold-champagne text-xs uppercase tracking-wider">
                      Located in {BUSINESS_INFO.locatedIn}
                    </p>
                    <p className="text-text-muted pt-1 leading-relaxed">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Telephone Card */}
              <div className="bg-bg-charcoal border border-border-subtle p-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="text-gold-champagne shrink-0" size={20} />
                  <div className="space-y-0.5 text-sm font-sans">
                    <span className="text-xs uppercase tracking-wider text-gold-champagne block">
                      TELEPHONE ENQUIRIES
                    </span>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneClean}`}
                      className="text-text-primary hover:text-gold-champagne transition-colors font-medium text-lg tracking-wider"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Primary Contact Action Buttons */}
              <div className="space-y-3 pt-2">
                <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="block w-full">
                  <Button variant="primary" size="md" className="w-full justify-center">
                    <Phone size={16} className="mr-2" />
                    <span>CALL SKYFALL ({BUSINESS_INFO.phone})</span>
                  </Button>
                </a>

                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button variant="outline" size="md" className="w-full justify-center">
                    <Navigation size={16} className="mr-2" />
                    <span>GET DIRECTIONS</span>
                  </Button>
                </a>

                <Link to="/reservation" className="block w-full">
                  <Button variant="secondary" size="md" className="w-full justify-center">
                    <Calendar size={16} className="mr-2" />
                    <span>RESERVE A TABLE</span>
                  </Button>
                </Link>
              </div>

              {/* Business Services / Amenities Panel */}
              <div className="pt-6 border-t border-border-subtle">
                <span className="text-xs uppercase tracking-[0.2em] text-gold-champagne font-sans font-medium block mb-4">
                  VERIFIED SERVICES & ACCESSIBILITY
                </span>
                <div className="grid grid-cols-2 gap-3 text-xs text-text-muted">
                  {BUSINESS_INFO.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 bg-bg-secondary px-3 py-2 border border-border-subtle/50">
                      <CheckCircle2 size={13} className="text-gold-champagne shrink-0" />
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Frontend General Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-bg-charcoal border border-border-subtle p-8 md:p-12 relative">
                
                <div className="mb-8 space-y-2">
                  <span className="text-xs uppercase tracking-[0.25em] text-gold-champagne font-sans font-medium">
                    GENERAL ENQUIRIES
                  </span>
                  <h3 className="font-heading text-3xl font-light text-text-primary">
                    SEND AN ENQUIRY
                  </h3>
                  <p className="text-text-muted text-xs font-sans">
                    Please use this form for general questions, private event queries, or hospitality feedback. For immediate seating, please use table reservations or call us directly.
                  </p>
                </div>

                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-bg-secondary border border-gold-champagne/40 p-8 text-center space-y-4 my-8"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold-champagne/10 border border-gold-champagne flex items-center justify-center mx-auto text-gold-champagne">
                      <Check size={24} />
                    </div>
                    <h4 className="font-heading text-2xl text-text-primary">
                      ENQUIRY RECEIVED
                    </h4>
                    <p className="text-text-muted text-sm font-sans max-w-md mx-auto">
                      Thank you for contacting Skyfall Lounge. Our hospitality team will get back to you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', phoneOrEmail: '', inquiryType: 'General Enquiry', message: '' });
                      }}
                      className="text-xs uppercase tracking-widest text-gold-champagne underline pt-2 inline-block focus:outline-none"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-wider text-text-muted font-sans mb-2">
                        YOUR FULL NAME *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full bg-bg-secondary border border-border-subtle px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-gold-champagne focus:outline-none font-sans"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phoneOrEmail" className="block text-xs uppercase tracking-wider text-text-muted font-sans mb-2">
                          PHONE OR EMAIL *
                        </label>
                        <input
                          type="text"
                          id="phoneOrEmail"
                          required
                          value={formData.phoneOrEmail}
                          onChange={(e) => setFormData({ ...formData, phoneOrEmail: e.target.value })}
                          placeholder="Phone number or email"
                          className="w-full bg-bg-secondary border border-border-subtle px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-gold-champagne focus:outline-none font-sans"
                        />
                      </div>

                      <div>
                        <label htmlFor="inquiryType" className="block text-xs uppercase tracking-wider text-text-muted font-sans mb-2">
                          ENQUIRY PURPOSE
                        </label>
                        <select
                          id="inquiryType"
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full bg-bg-secondary border border-border-subtle px-4 py-3 text-sm text-text-primary focus:border-gold-champagne focus:outline-none font-sans"
                        >
                          <option value="General Enquiry">General Enquiry</option>
                          <option value="Private Event / Party">Private Event / Party</option>
                          <option value="Table Reservation Query">Table Reservation Query</option>
                          <option value="Feedback">Hospitality Feedback</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs uppercase tracking-wider text-text-muted font-sans mb-2">
                        MESSAGE *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="How can Skyfall assist you?"
                        className="w-full bg-bg-secondary border border-border-subtle px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-gold-champagne focus:outline-none font-sans resize-none"
                      />
                    </div>

                    <Button type="submit" variant="primary" size="md" className="w-full justify-center">
                      <Send size={16} className="mr-2" />
                      <span>SUBMIT ENQUIRY</span>
                    </Button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
