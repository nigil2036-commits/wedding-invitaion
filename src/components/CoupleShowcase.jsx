import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Repeat, GraduationCap } from 'lucide-react';
import { KolamDivider, PillaiyarSuzhi } from './common/Motifs';
import { ScrollDownIndicator } from './common/ScrollDownIndicator';

export function CoupleShowcase({ lang, config }) {
  const { couple } = config;
  const [activePerson, setActivePerson] = useState('bride');
  const [isAutoSwap, setIsAutoSwap] = useState(true);

  // Auto swap every 5.5 seconds unless user interacted
  useEffect(() => {
    if (!isAutoSwap) return;
    const timer = setInterval(() => {
      setActivePerson((prev) => (prev === 'bride' ? 'groom' : 'bride'));
    }, 5500);
    return () => clearInterval(timer);
  }, [isAutoSwap]);

  const toggleSwap = () => {
    setActivePerson((prev) => (prev === 'bride' ? 'groom' : 'bride'));
  };

  const current = activePerson === 'bride' ? couple.bride : couple.groom;
  const partner = activePerson === 'bride' ? couple.groom : couple.bride;
  const currentKey = activePerson;
  const partnerKey = activePerson === 'bride' ? 'groom' : 'bride';

  return (
    <section id="couple" className="py-20 relative px-4 overflow-hidden bg-gradient-to-b from-kumkum-deep via-kumkum to-kumkum-deep">
      {/* Background Kolam texture */}
      <div className="absolute inset-0 bg-kolam-pattern opacity-10 pointer-events-none" />

      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-tamilTitle text-3xl sm:text-4xl md:text-5xl font-extrabold text-gold-warm drop-shadow-md">
            {lang === 'ta' ? 'மணமக்கள் அறிமுகம்' : 'The Sacred Couple'}
          </h2>
          <p className="font-tamilBody text-xs sm:text-sm text-ivory/80 mt-2 max-w-md mx-auto">
            {lang === 'ta'
              ? 'இரு மனங்கள் இணைந்து மலரும் இனிமையான புதிய தொடக்கம்'
              : 'Two souls united by destiny, blessed by tradition and eternal love'}
          </p>
          <KolamDivider className="my-4" />
        </div>

        {/* TOGGLE & SWAP CONTROLS */}
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => {
              setActivePerson('bride');
              setIsAutoSwap(false);
            }}
            className={`px-5 py-2 rounded-full font-tamilTitle text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 border ${
              activePerson === 'bride'
                ? 'bg-gradient-to-r from-gold-dark via-gold to-gold-warm text-kumkum-deep border-gold-light shadow-gold-glow scale-105'
                : 'bg-kumkum/60 text-ivory/70 border-gold/30 hover:border-gold hover:text-ivory'
            }`}
          >
            <span>🌸</span>
            <span>{couple.bride.role[lang]} ({couple.bride.name[lang]})</span>
          </button>

          <button
            onClick={() => {
              toggleSwap();
              setIsAutoSwap(false);
            }}
            title={lang === 'ta' ? 'மாற்றிப் பார்க்க' : 'Swap photo'}
            className="p-2.5 rounded-full bg-gold/20 hover:bg-gold/30 border-2 border-gold text-gold-warm hover:text-ivory shadow-gold-glow transition-all active:scale-95 group"
          >
            <Repeat className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
          </button>

          <button
            onClick={() => {
              setActivePerson('groom');
              setIsAutoSwap(false);
            }}
            className={`px-5 py-2 rounded-full font-tamilTitle text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 border ${
              activePerson === 'groom'
                ? 'bg-gradient-to-r from-gold-dark via-gold to-gold-warm text-kumkum-deep border-gold-light shadow-gold-glow scale-105'
                : 'bg-kumkum/60 text-ivory/70 border-gold/30 hover:border-gold hover:text-ivory'
            }`}
          >
            <span>🪔</span>
            <span>{couple.groom.role[lang]} ({couple.groom.name[lang]})</span>
          </button>
        </div>

        {/* 🌟 LUXURY ARCHED PHOTO FRAME (MATCHING REFERENCE IMAGE 1) */}
        <div className="relative w-full max-w-sm sm:max-w-md flex flex-col items-center">
          
          {/* BACKGROUND LAYER (Preview of partner, tap to swap) */}
          <div
            onClick={toggleSwap}
            className="absolute top-2 w-[92%] h-[420px] rounded-t-[140px] rounded-b-2xl border-2 border-gold/30 opacity-40 grayscale-[40%] overflow-hidden cursor-pointer hover:opacity-60 transition-opacity"
            style={{ transform: 'scale(0.95) translateY(-8px)' }}
          >
            <img src={partner.photo} alt={partner.name[lang]} className="w-full h-full object-cover object-top" />
          </div>

          {/* FRONT ARCHED CARD */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`arch-${currentKey}`}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -20 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="relative w-full flex flex-col items-center z-10"
            >
              {/* The Gold Arched Frame */}
              <div className="relative w-[300px] sm:w-[340px] h-[400px] sm:h-[450px] p-2.5 rounded-t-[170px] rounded-b-2xl bg-gradient-to-b from-[#F5D061] via-[#D4A017] to-[#8C650B] shadow-[0_15px_45px_rgba(212,160,23,0.35)]">
                {/* Inner Arch Window */}
                <div className="w-full h-full rounded-t-[160px] rounded-b-xl overflow-hidden bg-[#45060E] relative border border-[#FFFDF7]/30">
                  <img
                    src={current.photo}
                    alt={current.name[lang]}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-kumkum-deep/80 via-transparent to-transparent pointer-events-none" />

                  {/* Tap to swap badge */}
                  <button
                    onClick={toggleSwap}
                    className="absolute bottom-3 right-3 p-2 rounded-full bg-gold/90 hover:bg-gold text-kumkum-deep shadow-md transition-transform hover:scale-110 active:scale-95"
                    title={lang === 'ta' ? 'புகைப்படம் மாற்ற' : 'Swap photo'}
                  >
                    <Repeat className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* COUPLE NAME BELOW ARCH (Stylized matching reference image) */}
              <div className="mt-5 text-center space-y-1">
                <span className="text-[11px] font-tamilTitle text-gold uppercase tracking-widest block">
                  {current.role[lang]}
                </span>
                <h3 className="font-tamilTitle text-2xl sm:text-3xl font-extrabold text-gold-warm tracking-wider drop-shadow-md">
                  {current.name[lang]}
                </h3>
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gold/15 text-gold-light border border-gold/30 text-xs font-tamilBody mt-0.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>{current.degree[lang]}</span>
                </div>
                <p className="font-tamilBody text-xs text-ivory/80 mt-1 max-w-xs mx-auto">
                  {current.relation[lang]}
                </p>
                <p className="font-tamilTitle text-xs italic text-gold-light/90 max-w-sm mx-auto mt-2 px-2">
                  “{current.quote[lang]}”
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-8">
          <ScrollDownIndicator text="SCROLL" href="#scratch-date" />
        </div>
      </div>
    </section>
  );
}
