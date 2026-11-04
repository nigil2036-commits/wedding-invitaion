import React from 'react';
import { motion } from 'framer-motion';
import { KolamDivider, KolamCorner, PillaiyarSuzhi } from './common/Motifs';
import { ScrollDownIndicator } from './common/ScrollDownIndicator';

export function InvitationWording({ lang, config }) {
  const { wording, couple } = config;

  return (
    <section id="invitation" className="py-20 relative px-4">
      <div className="max-w-4xl mx-auto">
        {/* Traditional Invitation Parchment Card with Zari Border */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-b from-kumkum-dark via-kumkum to-kumkum-deep p-6 sm:p-10 md:p-14 rounded-2xl border-2 border-gold/50 shadow-2xl overflow-hidden"
        >
          {/* Decorative Corner Kolams */}
          <KolamCorner position="top-left" className="absolute top-3 left-3" />
          <KolamCorner position="top-right" className="absolute top-3 right-3" />
          <KolamCorner position="bottom-left" className="absolute bottom-3 left-3" />
          <KolamCorner position="bottom-right" className="absolute bottom-3 right-3" />

          {/* Golden Inner Framing Line */}
          <div className="absolute inset-2 sm:inset-3 border border-gold/25 rounded-xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            {/* Pillaiyar Suzhi */}
            <PillaiyarSuzhi className="w-12 h-12" />

            {/* Salutation */}
            <div>
              <h3 className="font-tamilTitle text-xl sm:text-2xl text-gold-warm font-bold tracking-wide">
                {wording.salutation[lang]}
              </h3>
              <p className="font-tamilBody text-xs sm:text-sm text-gold/80 italic mt-1">
                {wording.invitationPreamble[lang]}
              </p>
            </div>

            <KolamDivider className="my-2" />

            {/* Main traditional body paragraph */}
            <p className="font-tamilTitle text-sm sm:text-base md:text-lg leading-relaxed text-ivory/90 max-w-2xl mx-auto">
              {wording.mainInvitationText[lang]}
            </p>

            {/* Both Families Details Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 my-6 pt-4 border-t border-gold/20">
              {/* Bride's Family */}
              <div className="bg-kumkum-deep/60 p-5 rounded-xl border border-gold/30 flex flex-col items-center">
                <span className="text-xs uppercase tracking-wider text-gold font-tamilTitle font-semibold mb-2">
                  {wording.brideParents.title[lang]}
                </span>
                <h4 className="font-tamilTitle text-base sm:text-lg text-ivory font-bold leading-snug">
                  <span className="block sm:inline">{lang === 'ta' ? 'திரு. R. சரவணன்' : 'Mr. R. Saravanan'}</span>
                  <span className="hidden sm:inline"> &amp; </span>
                  <span className="block sm:inline">{lang === 'ta' ? '& திருமதி. S. செல்வமணி' : '& Mrs. S. Selvamani'}</span>
                </h4>
                <p className="font-tamilBody text-xs text-ivory/70 mt-1">
                  {wording.brideParents.familyLine[lang]}
                </p>
                <div className="mt-3 pt-3 border-t border-gold/15 w-full text-center">
                  <p className="text-xs text-gold-warm font-tamilBody">
                    {couple.bride.relation[lang]}
                  </p>
                </div>
              </div>

              {/* Groom's Family */}
              <div className="bg-kumkum-deep/60 p-5 rounded-xl border border-gold/30 flex flex-col items-center">
                <span className="text-xs uppercase tracking-wider text-gold font-tamilTitle font-semibold mb-2">
                  {wording.groomParents.title[lang]}
                </span>
                <h4 className="font-tamilTitle text-base sm:text-lg text-ivory font-bold leading-snug">
                  <span className="block sm:inline">{lang === 'ta' ? 'திரு. N. பாலுசாமி' : 'Mr. N. Balusamy'}</span>
                  <span className="hidden sm:inline"> &amp; </span>
                  <span className="block sm:inline">{lang === 'ta' ? '& திருமதி. P. ராணி' : '& Mrs. P. Rani'}</span>
                </h4>
                <p className="font-tamilBody text-xs text-ivory/70 mt-1">
                  {wording.groomParents.familyLine[lang]}
                </p>
                <div className="mt-3 pt-3 border-t border-gold/15 w-full text-center">
                  <p className="text-xs text-gold-warm font-tamilBody">
                    {couple.groom.relation[lang]}
                  </p>
                </div>
              </div>
            </div>

            {/* Traditional Blessing */}
            <div className="pt-2">
              <p className="font-tamilTitle text-base sm:text-xl text-gold-warm font-bold">
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

