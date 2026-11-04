import React from 'react';
import { Globe, RotateCcw } from 'lucide-react';

export function Navbar({ lang, setLang, onReplayOpening }) {
  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ta' : 'en');
  };

  return (
    <header className="fixed top-4 right-4 z-40 flex items-center gap-2">
      {/* Replay Card / Opening Button */}
      <button
        onClick={onReplayOpening}
        title={lang === 'en' ? 'Reopen Invitation Card' : 'அழைப்பிதழை மீண்டும் திறக்க'}
        className="px-3 py-1.5 rounded-full bg-kumkum-deep/85 hover:bg-kumkum-deep backdrop-blur-md border border-gold/60 hover:border-gold text-gold-warm hover:text-ivory font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-black/40 transition-all hover:scale-105 active:scale-95"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        <span>{lang === 'en' ? 'Card' : 'அழைப்பிதழ்'}</span>
      </button>

      {/* Language Toggle in the right corner */}
      <button
        onClick={toggleLanguage}
        title={lang === 'en' ? 'Switch to Tamil' : 'ஆங்கிலத்திற்கு மாற்ற'}
        className="px-3.5 py-1.5 rounded-full bg-kumkum-deep/85 hover:bg-kumkum-deep backdrop-blur-md border border-gold/60 hover:border-gold text-gold-warm hover:text-ivory font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-black/40 transition-all hover:scale-105 active:scale-95"
      >
        <Globe className="w-3.5 h-3.5" />
        <span>{lang === 'en' ? 'தமிழ்' : 'English'}</span>
      </button>
    </header>
  );
}
