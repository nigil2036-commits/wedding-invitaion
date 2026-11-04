import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PillaiyarSuzhi, KolamDivider, ToranamHeader, GopuramBackdrop, KolamCorner } from './common/Motifs';
import { Calendar, MapPin, Sparkles, Heart } from 'lucide-react';
import { ScrollDownIndicator } from './common/ScrollDownIndicator';

export function Hero({ lang, config }) {
  const { couple, date, venue } = config;
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-20 pb-16 flex flex-col items-center justify-center overflow-hidden">
      {/* Mango Leaf Toranam across the top */}
      <div className="absolute top-14 sm:top-16 left-0 right-0 z-20">
        <ToranamHeader />
      </div>

      {/* Subtle Gopuram silhouette background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <GopuramBackdrop className="w-full max-w-3xl opacity-15" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 w-full flex flex-col items-center text-center mt-4">
        {/* Sacred Pillaiyar Suzhi */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-2"
        >
          <PillaiyarSuzhi className="w-12 h-12 sm:w-14 sm:h-14" />
          <p className="font-tamilTitle text-xs sm:text-sm text-gold tracking-widest uppercase mt-1">
            {lang === 'ta' ? 'ஓம் நமச்சிவாய • சுபமஸ்து' : 'Om Namah Shivaya • Subhamastu'}
          </p>
        </motion.div>

        {/* 🌟 UNIQUE ARTISTIC WEDDING ILLUSTRATION CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
            transition: 'transform 0.15s ease-out',
          }}
          className="relative w-full max-w-xl my-4 sm:my-6 rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-kumkum-dark/90 via-kumkum/70 to-kumkum-deep border-2 border-gold/60 shadow-[0_20px_50px_rgba(212,160,23,0.35)] group"
        >
          {/* Decorative Corner Kolams */}
          <KolamCorner position="top-left" className="absolute top-2 left-2 z-20" />
          <KolamCorner position="top-right" className="absolute top-2 right-2 z-20" />
          <KolamCorner position="bottom-left" className="absolute bottom-2 left-2 z-20" />
          <KolamCorner position="bottom-right" className="absolute bottom-2 right-2 z-20" />

          {/* Golden Arched Picture Frame */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-gold/50 shadow-inner">
            <img
              src="/images/tamil-wedding-hero.jpg"
              alt="Traditional Tamil Wedding Ceremony"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Subtle festive warm gradient overlay at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-kumkum-deep/80 via-transparent to-transparent pointer-events-none" />

            {/* Sacred Ritual Pill Badge */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-kumkum-deep/85 backdrop-blur-md border border-gold/60 text-gold-warm font-tamilTitle text-xs sm:text-sm font-bold shadow-lg flex items-center gap-1.5 whitespace-nowrap">
              <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400 animate-pulse" />
              <span>
                {lang === 'ta'
                  ? 'சுபமுகூர்த்த மாங்கல்ய தாரணம்'
                  : 'Sacred Vivaha Ceremony'}
              </span>
            </div>
          </div>
        </motion.div>

        {/* COUPLE NAMES - BALANCED & CENTERED WITH RESPECT TO THE PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="space-y-3 w-full max-w-xl mx-auto"
        >
          <h2 className="text-xs sm:text-sm uppercase tracking-widest text-gold-warm font-tamilTitle text-center">
            {lang === 'ta' ? 'மங்களகரமான சுபமுகூர்த்தத் திருமணம்' : 'Solemnization of Sacred Holy Matrimony'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center justify-center gap-2 sm:gap-4 my-2 w-full text-center">
            {/* Bride */}
            <div className="flex flex-col items-center sm:items-end">
              <h1 className="font-tamilTitle text-3xl sm:text-4xl md:text-5xl font-extrabold text-gold-warm drop-shadow-md">
                {couple.bride.name[lang]}
              </h1>
              <p className="text-xs text-ivory/70 font-tamilBody mt-0.5">
                {couple.bride.degree[lang]}
              </p>
            </div>

            {/* weds */}
            <div className="flex items-center justify-center gap-2 px-3 py-1">
              <span className="h-[1px] w-6 bg-gold/50 hidden md:inline-block" />
              <span className="font-engTitle italic text-xl sm:text-2xl text-gold-light">
                weds
              </span>
              <span className="h-[1px] w-6 bg-gold/50 hidden md:inline-block" />
            </div>

            {/* Groom */}
            <div className="flex flex-col items-center sm:items-start sm:text-right w-full">
              <h1 className="font-tamilTitle text-3xl sm:text-4xl md:text-5xl font-extrabold text-gold-warm drop-shadow-md">
                {couple.groom.name[lang]}
              </h1>
              <p className="text-xs text-ivory/70 font-tamilBody mt-0.5 sm:self-end">
                {couple.groom.degree[lang]}
              </p>
            </div>
          </div>
        </motion.div>

        <KolamDivider className="my-5" />

        {/* DATE & VENUE HIGHLIGHT CAPSULES - CENTERED ACCORDING TO THE PHOTO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-3 w-full max-w-xl mx-auto"
        >
          {/* Date Capsule */}
          <div className="w-full flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full bg-kumkum/60 border border-gold/40 backdrop-blur-sm shadow-md text-center">
            <Calendar className="w-4 h-4 text-gold-warm shrink-0" />
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
              <span className="font-tamilTitle text-xs sm:text-sm font-bold text-gold-warm">
                {date.dateDisplay[lang]} ({date.day[lang]})
              </span>
              <span className="text-ivory/40 hidden sm:inline">•</span>
              <span className="font-tamilBody text-xs text-ivory/80">
                {date.tamilDate[lang]}
              </span>
            </div>
          </div>

          {/* Venue Capsule */}
          <div className="w-full flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full bg-kumkum/60 border border-gold/40 backdrop-blur-sm shadow-md text-center">
            <MapPin className="w-4 h-4 text-gold-warm shrink-0" />
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
              <span className="font-tamilTitle text-xs sm:text-sm font-bold text-gold-warm">
                {venue.name[lang]}
              </span>
              <span className="text-ivory/40 hidden sm:inline">•</span>
              <span className="font-tamilBody text-xs text-turmeric">
                {venue.landmark[lang]}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Quick action pill buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#scratch-date"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-warm text-kumkum-deep font-bold text-xs sm:text-sm flex items-center gap-2 shadow-gold-glow hover:scale-105 transition-transform"
          >
            <Sparkles className="w-4 h-4" />
            <span>{config.scratchCard.title[lang]}</span>
          </a>

          <a
            href="#events"
            className="px-5 py-2.5 rounded-full bg-kumkum/70 hover:bg-kumkum border border-gold/50 text-gold-warm font-semibold text-xs sm:text-sm transition-all"
          >
            {lang === 'ta' ? 'நிகழ்வுகள் நிரல்' : 'View Schedule'}
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-6">
          <ScrollDownIndicator text="SCROLL" href="#invitation" />
        </div>
      </div>
    </section>
  );
}
