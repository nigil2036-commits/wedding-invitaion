import React from 'react';
import { motion } from 'framer-motion';
import { ScrollDownIndicator } from './common/ScrollDownIndicator';

export function InvitationWording({ lang, config }) {
  const { wording, couple, events, venue } = config;

  return (
    <section id="invitation" className="py-16 sm:py-24 relative px-3 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section Heading Tag */}
        <div className="text-center mb-8">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold-warm text-xs sm:text-sm font-tamilTitle tracking-wider uppercase"
          >
            {wording.salutation[lang]}
          </motion.span>
        </div>

        {/* Traditional Royal South Indian Temple Invitation Card (Exact Theme of Reference) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] border-4 border-amber-300/80 bg-[#FFF8EB] text-[#2C1810]"
        >
          {/* Subtle Rich Silk / Textured Parchment Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFF9EE] via-[#FFF3DC] to-[#FCEECC] pointer-events-none" />

          {/* Golden Vintage Floral / Filigree Frame Border */}
          <div className="absolute inset-3 sm:inset-4 border-2 border-amber-600/30 rounded-2xl pointer-events-none" />
          <div className="absolute inset-4 sm:inset-5 border border-dashed border-amber-700/25 rounded-xl pointer-events-none" />

          {/* Corner Floral Ornaments in Gold */}
          <div className="absolute top-5 left-5 w-6 h-6 border-t-2 border-l-2 border-amber-600/70 pointer-events-none" />
          <div className="absolute top-5 right-5 w-6 h-6 border-t-2 border-r-2 border-amber-600/70 pointer-events-none" />
          <div className="absolute bottom-5 left-5 w-6 h-6 border-b-2 border-l-2 border-amber-600/70 pointer-events-none" />
          <div className="absolute bottom-5 right-5 w-6 h-6 border-b-2 border-r-2 border-amber-600/70 pointer-events-none" />

          {/* Background Center Subtle Floral Mandala Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none">
            <svg viewBox="0 0 400 400" className="w-[480px] h-[480px] text-[#7A1C28] fill-current">
              <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" />
              <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="200" cy="200" r="90" fill="none" stroke="currentColor" strokeWidth="1.5" />
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                <g key={deg} transform={`rotate(${deg} 200 200)`}>
                  <path d="M 200 40 C 215 90, 215 110, 200 130 C 185 110, 185 90, 200 40 Z" />
                </g>
              ))}
            </svg>
          </div>

          {/* MAIN CARD CONTENT */}
          <div className="relative z-10 px-5 sm:px-10 md:px-14 py-8 sm:py-12 flex flex-col items-center text-center">

            {/* 1. TOP HEADER: Sri Ganesha Icon with Arch & Invocations */}
            <div className="flex flex-col items-center">
              {/* Golden Ganesha Emblem */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-2 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400/30 to-amber-200/50 blur-sm" />
                <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_2px_4px_rgba(180,120,20,0.35)]">
                  {/* Decorative aura */}
                  <circle cx="50" cy="50" r="46" fill="none" stroke="#D4A017" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="41" fill="#FFF6DD" stroke="#B8860B" strokeWidth="1.8" />
                  {/* Stylized Ganesha */}
                  <path d="M 50 18 C 42 18 36 24 36 32 C 36 39 42 43 47 44 C 47 50 45 56 42 62 C 39 67 43 72 48 72 C 54 72 57 66 57 58 C 57 50 53 44 53 44 C 58 43 64 39 64 32 C 64 24 58 18 50 18 Z" fill="#991B1B" />
                  {/* Crown */}
                  <polygon points="50,12 43,20 57,20" fill="#D97706" />
                  <circle cx="50" cy="12" r="2.5" fill="#B45309" />
                  {/* Ears */}
                  <path d="M 37 26 C 29 27 26 35 34 39" fill="none" stroke="#991B1B" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 63 26 C 71 27 74 35 66 39" fill="none" stroke="#991B1B" strokeWidth="3" strokeLinecap="round" />
                  {/* Tilak / Namam */}
                  <line x1="50" y1="24" x2="50" y2="33" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="50" cy="36" r="1.5" fill="#DC2626" />
                  {/* Modak */}
                  <circle cx="61" cy="53" r="3.5" fill="#F59E0B" />
                </svg>
              </div>

              {/* Shloka: || ஸ்ரீ மகா கணபதியே நமஹ || */}
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm sm:text-base font-tamilTitle tracking-wide">
                <span className="text-amber-700">||</span>
                <span>{lang === 'ta' ? 'ஸ்ரீ மகா கணபதியே நமஹ' : 'Sri Maha Ganapathaye Namaha'}</span>
                <span className="text-amber-700">||</span>
              </div>

              {/* Invitation Subtext */}
              <p className="font-tamilBody text-xs sm:text-sm text-stone-700 max-w-md mt-1 leading-relaxed">
                {lang === 'ta'
                  ? 'எங்கள் அன்பும் ஆசீர்வாதங்களுடன் எங்கள் குடும்பத்தின் திருமணத்திற்கு உங்களை அன்புடன் அழைக்கிறோம்.'
                  : 'With loving hearts and divine blessings, our families cordially invite you to our sacred wedding celebration.'}
              </p>

              {/* Decorative Floral Divider */}
              <div className="flex items-center justify-center gap-2 my-4 text-amber-700">
                <span className="text-xs">✦</span>
                <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-amber-600" />
                <span className="text-base text-amber-700">🪷</span>
                <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-amber-600" />
                <span className="text-xs">✦</span>
              </div>
            </div>

            {/* 2. INVITATION TITLE BANNER: திருமண வரவேற்பு விழா அழைப்பிதழ் */}
            <div className="my-2">
              <h2 className="font-tamilTitle text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#7A1C28] italic tracking-wide drop-shadow-sm">
                {lang === 'ta' ? 'திருமண வரவேற்பு விழா அழைப்பிதழ்' : 'Wedding Reception & Celebration Invitation'}
              </h2>
            </div>

            {/* Little Lotus Ornament */}
            <div className="text-amber-700 my-2 text-sm">🪷</div>

            {/* 3. GROOM & BRIDE SACRED SPOTLIGHT */}
            <div className="w-full max-w-lg my-2 flex flex-col items-center">
              {/* GROOM */}
              <div className="flex flex-col items-center my-2">
                <h3 className="font-tamilTitle text-2xl sm:text-3xl font-extrabold text-[#0D382A] tracking-wider uppercase">
                  {couple.groom.name.en}
                </h3>
                <span className="font-tamilTitle text-xl sm:text-2xl font-bold text-[#7A1C28] mt-0.5">
                  {couple.groom.name.ta}
                </span>
                <p className="font-tamilBody text-xs sm:text-sm text-stone-700 mt-1 font-medium">
                  {lang === 'ta'
                    ? 'திரு. N. பாலுசாமி - திருமதி. P. ராணி தம்பதியரின் புதல்வர்'
                    : 'Son of Sri. N. Balusamy and Smt. P. Rani'}
                </p>
              </div>

              {/* Decorative & Floral Motif */}
              <div className="flex items-center justify-center gap-3 my-2 text-amber-700">
                <div className="w-10 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent to-amber-600" />
                <span className="font-serif italic text-2xl text-amber-800 font-bold px-1">&amp;</span>
                <div className="w-10 sm:w-16 h-[1.5px] bg-gradient-to-l from-transparent to-amber-600" />
              </div>

              {/* BRIDE */}
              <div className="flex flex-col items-center my-2">
                <h3 className="font-tamilTitle text-2xl sm:text-3xl font-extrabold text-[#0D382A] tracking-wider uppercase">
                  {couple.bride.name.en}
                </h3>
                <span className="font-tamilTitle text-xl sm:text-2xl font-bold text-[#7A1C28] mt-0.5">
                  {couple.bride.name.ta}
                </span>
                <p className="font-tamilBody text-xs sm:text-sm text-stone-700 mt-1 font-medium">
                  {lang === 'ta'
                    ? 'திரு. R. சரவணன் - திருமதி. S. செல்வமணி தம்பதியரின் புதல்வி'
                    : 'Daughter of Sri. R. Saravanan and Smt. S. Selvamani'}
                </p>
              </div>
            </div>

            {/* 4. POETIC LOVE QUOTE: இரு இதயங்கள் ❤ ஒரு பயணம் ❤ என்றும் ஒன்றாக */}
            <div className="my-3 flex items-center justify-center gap-2 text-[#7A1C28] font-bold text-xs sm:text-sm font-tamilTitle px-4 py-1.5 rounded-full bg-amber-100/70 border border-amber-300/60 shadow-sm">
              <span>{lang === 'ta' ? 'இரு இதயங்கள்' : 'Two Hearts'}</span>
              <span className="text-red-600 text-xs">❤</span>
              <span>{lang === 'ta' ? 'ஒரு பயணம்' : 'One Sacred Journey'}</span>
              <span className="text-red-600 text-xs">❤</span>
              <span>{lang === 'ta' ? 'என்றும் ஒன்றாக' : 'Forever United'}</span>
            </div>

            {/* Little Lotus Divider */}
            <div className="text-amber-700 my-1 text-sm">🪷</div>

            {/* 5. RECEPTION SHAPE BADGE & DATE WITH ROYAL ELEPHANTS */}
            <div className="w-full max-w-md my-3 flex flex-col items-center">
              {/* Ornate "Reception" Ribbon / Curvy Tag */}
              <div className="relative px-8 py-2 rounded-full border-2 border-amber-600 bg-gradient-to-b from-[#FFFDF8] to-[#FCEFD2] shadow-sm mb-4">
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 border-l-2 border-b-2 border-amber-600 bg-[#FFFDF8]" />
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 border-r-2 border-t-2 border-amber-600 bg-[#FFFDF8]" />
                <h4 className="font-serif italic text-2xl sm:text-3xl font-bold text-[#7A1C28] tracking-wider px-2">
                  Reception
                </h4>
              </div>

              {/* DATE BLOCK FLANKED BY GOLDEN TEMPLE ELEPHANTS */}
              <div className="w-full flex items-center justify-around sm:justify-between px-2 sm:px-6">
                {/* Left Royal Elephant (Facing Right) */}
                <div className="flex flex-col items-center">
                  <svg viewBox="0 0 100 80" className="w-16 h-14 sm:w-20 sm:h-16 drop-shadow-md">
                    {/* Golden Caparisoned Elephant */}
                    <path d="M 25 55 C 25 35, 45 25, 70 30 C 80 32, 90 40, 92 50 C 92 55, 88 65, 82 72 L 78 72 L 78 58 L 68 58 L 68 72 L 58 72 L 58 56 L 46 56 L 46 72 L 36 72 L 36 54 C 30 55, 25 58, 20 62 L 18 58 C 22 52, 25 45, 25 55 Z" fill="#D4AF37" />
                    {/* Trunk curl up */}
                    <path d="M 88 48 C 96 48, 98 40, 95 36 C 92 34, 88 38, 90 42" fill="none" stroke="#B8860B" strokeWidth="4" strokeLinecap="round" />
                    {/* Red & Gold Howdah / Nettipattam */}
                    <path d="M 45 32 C 45 32, 60 28, 70 34 L 68 50 C 58 46, 48 48, 45 50 Z" fill="#991B1B" />
                    <rect x="50" y="36" width="14" height="10" fill="#F59E0B" rx="2" />
                    {/* Ear with gold border */}
                    <path d="M 62 34 C 55 35, 52 45, 58 52 C 64 54, 68 46, 66 38 Z" fill="#B45309" stroke="#FDE68A" strokeWidth="1" />
                    {/* Tusk */}
                    <path d="M 86 52 C 92 54, 96 52, 98 48" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                    {/* Eye */}
                    <circle cx="76" cy="38" r="1.5" fill="#1C1917" />
                  </svg>
                </div>

                {/* Center Date Highlight */}
                <div className="flex flex-col items-center px-3 border-x-2 border-amber-600/40">
                  <span className="font-tamilTitle text-4xl sm:text-5xl font-black text-[#7A1C28] leading-none drop-shadow-sm">
                    22
                  </span>
                  <span className="font-tamilTitle text-xs sm:text-sm font-extrabold text-[#0D382A] tracking-wider mt-1 uppercase">
                    NOVEMBER 2026
                  </span>
                  <div className="flex items-center gap-1.5 text-amber-800 text-[11px] sm:text-xs font-bold mt-0.5">
                    <span>✦</span>
                    <span className="uppercase tracking-widest">{lang === 'ta' ? 'ஞாயிற்றுக்கிழமை' : 'SUNDAY'}</span>
                    <span>✦</span>
                  </div>
                </div>

                {/* Right Royal Elephant (Facing Left) */}
                <div className="flex flex-col items-center">
                  <svg viewBox="0 0 100 80" className="w-16 h-14 sm:w-20 sm:h-16 drop-shadow-md scale-x-[-1]">
                    {/* Golden Caparisoned Elephant */}
                    <path d="M 25 55 C 25 35, 45 25, 70 30 C 80 32, 90 40, 92 50 C 92 55, 88 65, 82 72 L 78 72 L 78 58 L 68 58 L 68 72 L 58 72 L 58 56 L 46 56 L 46 72 L 36 72 L 36 54 C 30 55, 25 58, 20 62 L 18 58 C 22 52, 25 45, 25 55 Z" fill="#D4AF37" />
                    {/* Trunk curl up */}
                    <path d="M 88 48 C 96 48, 98 40, 95 36 C 92 34, 88 38, 90 42" fill="none" stroke="#B8860B" strokeWidth="4" strokeLinecap="round" />
                    {/* Red & Gold Howdah / Nettipattam */}
                    <path d="M 45 32 C 45 32, 60 28, 70 34 L 68 50 C 58 46, 48 48, 45 50 Z" fill="#991B1B" />
                    <rect x="50" y="36" width="14" height="10" fill="#F59E0B" rx="2" />
                    {/* Ear with gold border */}
                    <path d="M 62 34 C 55 35, 52 45, 58 52 C 64 54, 68 46, 66 38 Z" fill="#B45309" stroke="#FDE68A" strokeWidth="1" />
                    {/* Tusk */}
                    <path d="M 86 52 C 92 54, 96 52, 98 48" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                    {/* Eye */}
                    <circle cx="76" cy="38" r="1.5" fill="#1C1917" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 6. TIMING BADGE */}
            <div className="w-full max-w-sm my-3 flex flex-col items-center">
              <div className="px-5 py-1.5 rounded-full border border-amber-600/70 bg-[#FFF6DE] text-amber-950 font-bold font-tamilTitle text-sm sm:text-base shadow-sm">
                {lang === 'ta' ? 'திருமண வரவேற்பு நேரம்' : 'Reception Timing'}
              </div>
              <p className="font-tamilBody text-sm sm:text-base font-extrabold text-[#7A1C28] mt-1.5">
                {lang === 'ta' ? 'காலை 08:30 மணி - 10:30 மணி' : 'Morning 08:30 AM - 10:30 AM'}
              </p>
            </div>

            {/* Little Lotus */}
            <div className="text-amber-700 my-1 text-sm">🪷</div>

            {/* 7. VENUE ADDRESS */}
            <div className="my-2 flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-red-700 font-extrabold font-tamilTitle text-base sm:text-lg">
                <span className="text-lg">📍</span>
                <span>Sindhu Mahal,</span>
              </div>
              <p className="font-tamilBody text-xs sm:text-sm font-semibold text-stone-800 mt-0.5">
                {lang === 'ta'
                  ? 'பரமத்தி வேலூர், வேலூர், நாமக்கல் மாவட்டம்.'
                  : 'Padamudipalayam, Paramathi Velur, Namakkal.'}
              </p>
              <p className="font-tamilBody text-xs text-stone-600 mt-0.5">
                சிந்து மஹால், பரமத்தி வேலூர், நாமக்கல்.
              </p>

              {/* Google Maps quick button */}
              <a
                href={venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-tamilTitle font-bold text-amber-950 bg-gradient-to-r from-amber-300 to-amber-400 hover:from-amber-400 hover:to-amber-500 border border-amber-600/40 shadow transition-all transform hover:scale-105"
              >
                <span>🗺️ View Location on Google Maps</span>
              </a>
            </div>

            {/* Traditional Blessing Closing */}
            <div className="mt-6 pt-4 border-t border-amber-600/20 w-full text-center">
              <p className="font-tamilTitle text-xs sm:text-sm font-bold text-amber-900 italic">
                {wording.blessingClosing[lang]}
              </p>
            </div>

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
