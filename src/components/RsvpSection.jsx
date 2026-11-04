import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { soundEngine } from '../utils/audio';
import { KolamDivider, PillaiyarSuzhi } from './common/Motifs';
import { CheckCircle2, Send, Users, Heart } from 'lucide-react';

export function RsvpSection({ lang, config }) {
  const { rsvp } = config;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    attending: 'yes',
    guests: '2',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Play joyful celebration sound
      soundEngine.playFlowerCelebration();

      // Trigger Malar Mazhai (Flower shower confetti)
      const colors = ['#D4A017', '#F5D061', '#E5A93C', '#FCFCF7', '#DC2626', '#FF69B4'];
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: colors,
        shapes: ['circle', 'square'],
        scalar: 1.3,
      });

      setTimeout(() => {
        confetti({
          particleCount: 70,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.7 },
          colors: colors,
        });
        confetti({
          particleCount: 70,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.7 },
          colors: colors,
        });
      }, 300);
    }, 600);
  };

  return (
    <section id="rsvp" className="py-20 relative px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <PillaiyarSuzhi className="w-12 h-12 mb-2" />
          <h2 className="font-tamilTitle text-2xl sm:text-3xl md:text-4xl font-bold text-gold-warm">
            {rsvp.title[lang]}
          </h2>
          <p className="font-tamilBody text-xs sm:text-sm text-ivory/70 mt-2 max-w-lg mx-auto">
            {rsvp.description[lang]}
          </p>
          <KolamDivider className="my-4" />
        </div>

        <div className="bg-gradient-to-b from-kumkum-dark/90 via-kumkum/70 to-kumkum-deep p-6 sm:p-10 rounded-2xl border-2 border-gold/40 shadow-2xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-gold-warm uppercase tracking-wider mb-2 font-tamilBody">
                    {rsvp.nameLabel[lang]} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={lang === 'ta' ? 'எ.கா: மு. செந்தில்குமார்' : 'e.g. M. Senthil Kumar'}
                    className="w-full px-4 py-3 rounded-xl bg-kumkum-deep/80 border border-gold/30 text-ivory placeholder-ivory/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm font-tamilBody"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-gold-warm uppercase tracking-wider mb-2 font-tamilBody">
                    {rsvp.phoneLabel[lang]}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98400 00000"
                    className="w-full px-4 py-3 rounded-xl bg-kumkum-deep/80 border border-gold/30 text-ivory placeholder-ivory/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm font-tamilBody"
                  />
                </div>

                {/* Attending Radio Options */}
                <div>
                  <label className="block text-xs font-semibold text-gold-warm uppercase tracking-wider mb-2 font-tamilBody">
                    {rsvp.attendingLabel[lang]}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label
                      className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                        formData.attending === 'yes'
                          ? 'bg-gold/20 border-gold text-gold-warm shadow-md'
                          : 'bg-kumkum-deep/60 border-gold/20 text-ivory/70 hover:border-gold/40'
                      }`}
                    >
                      <input
                        type="radio"
                        name="attending"
                        value="yes"
                        checked={formData.attending === 'yes'}
                        onChange={() => setFormData({ ...formData, attending: 'yes' })}
                        className="sr-only"
                      />
                      <Heart className="w-4 h-4 text-gold-warm shrink-0" />
                      <span className="text-xs font-tamilBody font-medium">
                        {rsvp.options.yes[lang]}
                      </span>
                    </label>

                    <label
                      className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                        formData.attending === 'no'
                          ? 'bg-gold/20 border-gold text-gold-warm shadow-md'
                          : 'bg-kumkum-deep/60 border-gold/20 text-ivory/70 hover:border-gold/40'
                      }`}
                    >
                      <input
                        type="radio"
                        name="attending"
                        value="no"
                        checked={formData.attending === 'no'}
                        onChange={() => setFormData({ ...formData, attending: 'no' })}
                        className="sr-only"
                      />
                      <span className="text-xs">🙏</span>
                      <span className="text-xs font-tamilBody font-medium">
                        {rsvp.options.no[lang]}
                      </span>
                    </label>
                  </div>
                </div>

                {/* Number of Guests */}
                {formData.attending === 'yes' && (
                  <div>
                    <label className="block text-xs font-semibold text-gold-warm uppercase tracking-wider mb-2 font-tamilBody">
                      {rsvp.guestsLabel[lang]}
                    </label>
                    <div className="relative">
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-kumkum-deep/80 border border-gold/30 text-ivory focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm font-tamilBody appearance-none cursor-pointer"
                      >
                        <option value="1">1 {lang === 'ta' ? 'நபர்' : 'Guest'}</option>
                        <option value="2">2 {lang === 'ta' ? 'நபர்கள்' : 'Guests'}</option>
                        <option value="3">3 {lang === 'ta' ? 'நபர்கள்' : 'Guests'}</option>
                        <option value="4">4 {lang === 'ta' ? 'நபர்கள்' : 'Guests'}</option>
                        <option value="5+">5+ {lang === 'ta' ? 'குடும்பத்தினர்' : 'Family'}</option>
                      </select>
                      <Users className="w-4 h-4 text-gold-warm absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                )}

                {/* Blessings / Message for the Couple */}
                <div>
                  <label className="block text-xs font-semibold text-gold-warm uppercase tracking-wider mb-2 font-tamilBody">
                    {rsvp.messageLabel[lang]}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      lang === 'ta'
                        ? 'மணமக்கள் பல்லாண்டு வாழ்க என வாழ்த்துகிறேன்...'
                        : 'Wishing the couple eternal joy, health, and harmony...'
                    }
                    className="w-full px-4 py-3 rounded-xl bg-kumkum-deep/80 border border-gold/30 text-ivory placeholder-ivory/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm font-tamilBody resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-warm text-kumkum-deep font-bold text-sm shadow-gold-glow flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{rsvp.submitBtn[lang]}</span>
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center text-gold-warm shadow-gold-glow">
                  <CheckCircle2 className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-tamilTitle text-xl sm:text-2xl font-bold text-gold-warm">
                  {lang === 'ta' ? 'பதிவு வெற்றிகரமாக முடிந்தது!' : 'RSVP Received With Joy!'}
                </h3>
                <p className="font-tamilBody text-sm text-ivory/90 max-w-md">
                  {rsvp.successMessage[lang]}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-full bg-kumkum/60 border border-gold/40 text-gold-warm text-xs hover:border-gold transition-colors"
                >
                  {lang === 'ta' ? 'மீண்டும் திருத்த' : 'Update RSVP'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

