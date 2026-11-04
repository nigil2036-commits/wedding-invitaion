import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone } from 'lucide-react';
import { ManavaraiScene } from './3d/ManavaraiScene';
import { KolamDivider } from './common/Motifs';
import { ScrollDownIndicator } from './common/ScrollDownIndicator';

export function VenueSection({ lang, config }) {
  const { venue } = config;

  return (
    <section id="venue" className="py-20 relative px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-tamilTitle text-2xl sm:text-3xl md:text-4xl font-bold text-gold-warm">
            {lang === 'ta' ? 'திருமண மண்டபம் & அமைவிடம்' : 'Wedding Venue & Directions'}
          </h2>
          <p className="font-tamilBody text-xs sm:text-sm text-ivory/70 mt-2 max-w-lg mx-auto">
            {lang === 'ta'
              ? 'சுப முகூர்த்தம் நிகழும் ஸ்ரீ பாலாஜி மகால் மணவறை'
              : 'Join us at the beautifully decorated Sri Balaji Mahal'}
          </p>
          <KolamDivider className="my-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* 3D ROTATING MANAVARAI MANDAPAM WITH BANANA TREES */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col items-center"
          >
            <div className="w-full">
              <ManavaraiScene />
            </div>
            <p className="text-xs text-gold/80 font-tamilBody mt-2 text-center">
              {lang === 'ta'
                ? '🌸 அலங்கரிக்கப்பட்ட பாரம்பரிய வாழைமர மணவறை தோற்றம்'
                : '🌸 Auspicious Manavarai with Banana Trees & Sacred Arch'}
            </p>
          </motion.div>

          {/* VENUE DETAILS & GOOGLE MAPS EMBED */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 bg-kumkum/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gold/40 shadow-xl"
          >
            <div>
              <div className="flex items-center gap-2 text-gold mb-1">
                <MapPin className="w-5 h-5 text-gold-warm shrink-0" />
                <h3 className="font-tamilTitle text-xl sm:text-2xl font-bold text-ivory">
                  {venue.name[lang]}
                </h3>
              </div>
              <p className="font-tamilBody text-sm text-ivory/80 leading-relaxed pl-7">
                {venue.address[lang]}
              </p>
              <p className="font-tamilBody text-xs text-turmeric mt-1 pl-7">
                📍 {venue.landmark[lang]}
              </p>
            </div>

            {/* Contact info */}
            <div className="flex items-center gap-2 text-xs text-ivory/70 pl-7">
              <Phone className="w-3.5 h-3.5 text-gold-warm" />
              <span>{venue.contactPhone}</span>
            </div>

            {/* Google Maps Embed iframe */}
            <div className="w-full h-48 rounded-xl overflow-hidden border border-gold/30 shadow-inner relative">
              <iframe
                title="Wedding Venue Map"
                src={venue.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[20%] contrast-110"
              />
            </div>

            {/* Get Directions Button */}
            <div className="pt-2">
              <a
                href={venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-warm text-kumkum-deep font-bold text-sm shadow-gold-glow flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>{config.labels.getDirections[lang]}</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-12 flex justify-center">
          <ScrollDownIndicator text="SCROLL" href="#countdown" />
        </div>
      </div>
    </section>
  );
}

