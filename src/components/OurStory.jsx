import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Users } from 'lucide-react';
import { KolamDivider } from './common/Motifs';

export function OurStory({ lang, config }) {
  const { story } = config;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'sparkles': return <Sparkles className="w-5 h-5 text-gold-warm" />;
      case 'heart': return <Heart className="w-5 h-5 text-gold-warm fill-gold-warm/20" />;
      case 'users': return <Users className="w-5 h-5 text-gold-warm" />;
      default: return <Sparkles className="w-5 h-5 text-gold-warm" />;
    }
  };

  return (
    <section id="story" className="py-20 relative px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-tamilTitle text-2xl sm:text-3xl md:text-4xl font-bold text-gold-warm">
            {lang === 'ta' ? 'எங்கள் காதல் கதை' : 'Our Beautiful Journey'}
          </h2>
          <p className="font-tamilBody text-xs sm:text-sm text-ivory/70 mt-2 max-w-lg mx-auto">
            {lang === 'ta'
              ? 'விநாயகரின் திருவருளால் கை கோர்த்து இணைந்த இனிய தருணங்கள்'
              : 'Cherished milestones blessed by our elders and woven with divine grace'}
          </p>
          <KolamDivider className="my-4" />
        </div>

        {/* 3 Story Cards Sliding in on Scroll */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {story.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-kumkum/50 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border border-gold/40 shadow-xl flex flex-col justify-between relative group hover:border-gold transition-colors"
            >
              {/* Number Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center">
                  {getIcon(item.icon)}
                </div>
                <span className="font-engTitle text-2xl font-bold text-gold/40 group-hover:text-gold-warm transition-colors">
                  0{index + 1}
                </span>
              </div>

              <div>
                <span className="inline-block text-[11px] uppercase tracking-wider text-turmeric font-semibold mb-1">
                  {item.period[lang]}
                </span>
                <h3 className="font-tamilTitle text-lg sm:text-xl font-bold text-ivory mb-3">
                  {item.title[lang]}
                </h3>
                <p className="font-tamilBody text-xs sm:text-sm text-ivory/80 leading-relaxed">
                  {item.content[lang]}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="h-1 w-12 bg-gradient-to-r from-gold to-turmeric rounded-full mt-6 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

