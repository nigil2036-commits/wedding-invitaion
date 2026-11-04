import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Calendar, Heart, Sparkles, Scroll, Utensils, Music } from 'lucide-react';
import { KolamDivider } from './common/Motifs';
import { generateIcsCalendar, getGoogleCalendarUrl } from '../utils/calendar';
import { ScrollDownIndicator } from './common/ScrollDownIndicator';

export function EventsTimeline({ lang, config }) {
  const { events, couple } = config;

  const getEventIcon = (iconName, isPrimary) => {
    const sizeClass = "w-5 h-5";
    const colorClass = isPrimary ? "text-gold-light" : "text-gold-warm";

    switch (iconName) {
      case 'sparkles': return <Sparkles className={`${sizeClass} ${colorClass}`} />;
      case 'scroll': return <Scroll className={`${sizeClass} ${colorClass}`} />;
      case 'heart': return <Heart className={`${sizeClass} ${colorClass} fill-gold-warm/20`} />;
      case 'utensils': return <Utensils className={`${sizeClass} ${colorClass}`} />;
      case 'music': return <Music className={`${sizeClass} ${colorClass}`} />;
      default: return <Calendar className={`${sizeClass} ${colorClass}`} />;
    }
  };

  return (
    <section id="events" className="py-20 relative px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-tamilTitle text-2xl sm:text-3xl md:text-4xl font-bold text-gold-warm">
            {lang === 'ta' ? 'திருமண நிகழ்வுகள் நிரல்' : 'Ceremonies & Celebrations'}
          </h2>
          <p className="font-tamilBody text-xs sm:text-sm text-ivory/70 mt-2 max-w-lg mx-auto">
            {lang === 'ta'
              ? 'பாரம்பரிய சடங்குகளோடு இனிதே நிகழும் மங்கள வைபவங்கள்'
              : 'Sacred Vedic rituals and joyful gatherings celebrating eternal union'}
          </p>
          <KolamDivider className="my-4" />
        </div>

        {/* Animated Vertical Timeline */}
        <div className="relative">
          {/* Vertical Golden Spine Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-gold to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {events.map((evt, idx) => {
              const isEven = idx % 2 === 0;
              const isPrimary = evt.isPrimary;

              return (
                <motion.div
                  key={evt.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-kumkum-deep border-2 border-gold flex items-center justify-center z-20 shadow-gold-glow">
                    {getEventIcon(evt.icon, isPrimary)}
                  </div>

                  {/* Spacer for MD alignment */}
                  <div className="hidden md:block w-1/2 px-8" />

                  {/* Event Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div
                      className={`p-6 rounded-2xl border transition-all duration-300 relative group ${
                        isPrimary
                          ? 'bg-gradient-to-br from-kumkum-light/40 via-kumkum to-kumkum-deep border-gold shadow-gold-glow'
                          : 'bg-kumkum/50 backdrop-blur-sm border-gold/30 hover:border-gold shadow-lg'
                      }`}
                    >
                      {/* Auspicious Badge for Muhurtham */}
                      {isPrimary && (
                        <span className="absolute -top-3 right-4 px-3 py-0.5 rounded-full bg-gradient-to-r from-gold via-gold-warm to-gold text-kumkum-deep font-bold text-[10px] sm:text-xs font-tamilTitle uppercase tracking-wider shadow-md">
                          {config.date.subhaMuhurthamTitle[lang]}
                        </span>
                      )}

                      <span className="text-[11px] font-semibold text-turmeric uppercase tracking-wider block mb-1">
                        {evt.subtitle[lang]}
                      </span>

                      <h3 className="font-tamilTitle text-lg sm:text-xl font-bold text-ivory mb-2 group-hover:text-gold-warm transition-colors">
                        {evt.title[lang]}
                      </h3>

                      <p className="font-tamilBody text-xs sm:text-sm text-ivory/80 leading-relaxed mb-4">
                        {evt.description[lang]}
                      </p>

                      {/* Date & Time pills */}
                      <div className="space-y-2 pt-3 border-t border-gold/20 text-xs">
                        <div className="flex items-center gap-2 text-gold-warm">
                          <Calendar className="w-3.5 h-3.5 shrink-0" />
                          <span className="font-semibold">{evt.date[lang]}</span>
                        </div>
                        <div className="flex items-center gap-2 text-ivory/90">
                          <Clock className="w-3.5 h-3.5 shrink-0 text-gold-warm" />
                          <span>{evt.time[lang]}</span>
                        </div>
                        <div className="flex items-center gap-2 text-ivory/80">
                          <MapPin className="w-3.5 h-3.5 shrink-0 text-gold-warm" />
                          <span>{evt.venue[lang]}</span>
                        </div>
                      </div>

                      {/* Action: Add to Calendar (.ics) & Google Calendar */}
                      <div className="mt-5 pt-3 border-t border-gold/15 flex flex-wrap items-center gap-2.5">
                        <button
                          onClick={() => generateIcsCalendar(evt, couple)}
                          className="px-3 py-1.5 rounded-lg bg-gold/15 hover:bg-gold/25 border border-gold/40 text-gold-warm font-semibold text-xs flex items-center gap-1.5 transition-all"
                        >
                          <Calendar className="w-3 h-3" />
                          <span>{config.labels.addToCalendar[lang]}</span>
                        </button>

                        <a
                          href={getGoogleCalendarUrl(evt, couple)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-kumkum-deep/80 hover:bg-kumkum-deep border border-gold/20 text-ivory/70 hover:text-ivory text-xs transition-all"
                        >
                          Google Cal ↗
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-12 flex justify-center">
          <ScrollDownIndicator text="SCROLL" href="#venue" />
        </div>
      </div>
    </section>
  );
}

