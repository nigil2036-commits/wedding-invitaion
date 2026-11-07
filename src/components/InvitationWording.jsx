import React from 'react';
import { motion } from 'framer-motion';
import { ScrollDownIndicator } from './common/ScrollDownIndicator';

export function InvitationWording({ lang, config }) {
  const { wording, venue } = config;

  return (
    <section id="invitation" className="py-16 sm:py-24 relative px-3 sm:px-6">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        {/* Section Pill Badge */}
        <div className="text-center mb-6">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold-warm text-xs sm:text-sm font-tamilTitle tracking-wider uppercase backdrop-blur-sm"
          >
            {wording.salutation[lang]}
          </motion.span>
        </div>

        {/* The Exact Wedding Invitation Card Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.7)] border-2 sm:border-4 border-gold/60 group"
        >
          {/* Subtle Golden Glow / Ring */}
          <div className="absolute -inset-1 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-gold/40 via-transparent to-gold/40 opacity-70 pointer-events-none" />

          {/* Exact Invitation Card Image */}
          <img
            src="/images/wedding-invitation-card.jpg"
            alt="திருமண வரவேற்பு விழா அழைப்பிதழ் | Yogeshkumar & Kamali Wedding Invitation"
            className="w-full h-auto block select-none rounded-2xl sm:rounded-3xl transform transition-transform duration-500 hover:scale-[1.01]"
            loading="eager"
          />

          {/* Direct Interactive Google Maps Overlay Button directly over the venue link */}
          <div className="absolute bottom-3 sm:bottom-4 inset-x-0 flex justify-center px-4">
            <a
              href={venue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-tamilTitle font-bold text-amber-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-200 hover:to-amber-300 border border-amber-600/60 shadow-[0_4px_15px_rgba(0,0,0,0.35)] transition-all transform hover:scale-105 active:scale-95"
            >
              <span>📍 View Sindhu Mahal on Google Maps</span>
              <span className="text-amber-800">↗</span>
            </a>
          </div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <div className="mt-8 flex justify-center">
          <ScrollDownIndicator text="SCROLL" href="#couple" />
        </div>
      </div>
    </section>
  );
}
