import React from 'react';
import { Share2, Heart, RotateCcw } from 'lucide-react';
import { Monogram3D } from './3d/Monogram3D';
import { PillaiyarSuzhi, KolamDivider } from './common/Motifs';

export function Footer({ lang, config, onReplayOpening }) {
  const { labels, whatsapp, couple } = config;

  const handleShare = () => {
    const encoded = whatsapp.shareMessage(lang);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  };

  return (
    <footer id="footer" className="relative pt-16 pb-12 px-4 border-t border-gold/30 bg-kumkum-deep overflow-hidden">
      {/* Background subtle kolam */}
      <div className="absolute inset-0 bg-kolam-pattern opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10 space-y-6">
        {/* 3D Rotating Monogram Medallion */}
        <div className="my-2">
          <Monogram3D monogram={couple.monogram} />
        </div>

        {/* Grand Blessing: வாழ்க வளமுடன் */}
        <div>
          <h2 className="font-tamilTitle text-2xl sm:text-3xl font-extrabold text-gold-warm tracking-wider drop-shadow-md">
            {labels.valgaValamudan[lang]}
          </h2>
          <p className="font-tamilBody text-xs sm:text-sm text-ivory/70 mt-1">
            {labels.footerLine[lang]}
          </p>
        </div>

        <KolamDivider className="my-4" />

        {/* Action Buttons: WhatsApp Share & Replay Opening */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          {/* WhatsApp Share Button */}
          <button
            onClick={handleShare}
            className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            <Share2 className="w-4 h-4" />
            <span>{whatsapp.buttonText[lang]}</span>
          </button>

          {/* Replay Opening Card Button */}
          <button
            onClick={onReplayOpening}
            className="px-5 py-3 rounded-full bg-kumkum/80 hover:bg-kumkum border border-gold/50 text-gold-warm font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{labels.replayOpening[lang]}</span>
          </button>
        </div>

        {/* Copyright & Traditional Note */}
        <div className="pt-8 text-center text-xs text-ivory/50 font-tamilBody">
          <p className="flex items-center justify-center gap-1">
            <span>Crafted with devotion & traditional Tamil elegance</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
          </p>
          <p className="mt-1 text-[11px] text-ivory/40">
            {couple.bride.name.en} & {couple.groom.name.en} • September 2027
          </p>
        </div>
      </div>
    </footer>
  );
}

