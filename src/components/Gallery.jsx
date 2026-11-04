import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { KolamDivider } from './common/Motifs';

export function Gallery({ lang, config }) {
  const { gallery } = config;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-20 relative px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-tamilTitle text-2xl sm:text-3xl md:text-4xl font-bold text-gold-warm">
          {lang === 'ta' ? 'இனிய நினைவுகள்' : 'Pre-Wedding Glimpses'}
        </h2>
        <p className="font-tamilBody text-xs sm:text-sm text-ivory/70 mt-2">
          {lang === 'ta'
            ? 'அன்பும் சிரிப்பும் மலர்ந்த அழகான புகைப்படத் தொகுப்பு'
            : 'Precious glimpses captured on the journey towards oneness'}
        </p>
        <KolamDivider className="my-4" />

        {/* 3D TILT HOVER CAROUSEL */}
        <div className="relative mt-8 max-w-2xl mx-auto">
          <div className="relative h-[340px] sm:h-[420px] rounded-2xl overflow-hidden border-2 border-gold/50 shadow-2xl bg-kumkum-deep group [perspective:1000px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full relative group-hover:[transform:rotateX(3deg)_rotateY(-3deg)] transition-transform duration-500"
              >
                <img
                  src={gallery[currentIndex].url}
                  alt={gallery[currentIndex].caption[lang]}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kumkum-deep via-transparent to-transparent opacity-80" />

                {/* Caption overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="font-tamilTitle text-sm sm:text-base text-gold-warm font-semibold bg-kumkum-deep/80 backdrop-blur-md py-2 px-4 rounded-full inline-block border border-gold/30 shadow-lg">
                    {gallery[currentIndex].caption[lang]}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-kumkum-deep/80 hover:bg-kumkum border border-gold/40 text-gold-warm transition-all shadow-md z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-kumkum-deep/80 hover:bg-kumkum border border-gold/40 text-gold-warm transition-all shadow-md z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {gallery.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to image ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  idx === currentIndex ? 'w-8 bg-gold' : 'w-2.5 bg-gold/30 hover:bg-gold/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

