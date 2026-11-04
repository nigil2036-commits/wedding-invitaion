import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { KolamDivider } from './common/Motifs';
import { ScrollDownIndicator } from './common/ScrollDownIndicator';

export function CountdownTimer({ lang, config }) {
  const { weddingIsoDate, countdown } = config;

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(weddingIsoDate).getTime();

    const updateTimer = () => {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [weddingIsoDate]);

  const units = [
    { value: timeLeft.days, label: countdown.days[lang] },
    { value: timeLeft.hours, label: countdown.hours[lang] },
    { value: timeLeft.minutes, label: countdown.minutes[lang] },
    { value: timeLeft.seconds, label: countdown.seconds[lang] },
  ];

  return (
    <section id="countdown" className="py-16 relative px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="font-tamilTitle text-xl sm:text-2xl font-bold text-gold-warm mb-1">
          {countdown.subTitle[lang]}
        </h3>
        <KolamDivider className="my-4" />

        {/* 4 LIVE COUNTDOWN CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto my-8">
          {units.map((unit, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-b from-kumkum-dark/90 to-kumkum-deep p-4 sm:p-5 rounded-2xl border-2 border-gold/40 shadow-xl flex flex-col items-center justify-center relative overflow-hidden group hover:border-gold transition-colors"
            >
              {/* Gold Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-warm" />

              <span className="font-engTitle text-3xl sm:text-4xl md:text-5xl font-extrabold text-gold-warm tracking-tight">
                {String(unit.value).padStart(2, '0')}
              </span>

              <span className="font-tamilTitle text-xs sm:text-sm text-ivory/80 font-semibold mt-1">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-8 flex justify-center">
          <ScrollDownIndicator text="SCROLL" href="#footer" />
        </div>
      </div>
    </section>
  );
}

