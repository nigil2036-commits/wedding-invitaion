import React from 'react';

/**
 * Auspicious Pillaiyar Suzhi (உ) in gold with radiant halo
 */
export function PillaiyarSuzhi({ className = "w-14 h-14" }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_12px_rgba(212,160,23,0.7)]">
        <circle cx="50" cy="50" r="46" fill="none" stroke="#D4A017" strokeWidth="2.5" strokeDasharray="4 2" />
        <circle cx="50" cy="50" r="41" fill="none" stroke="#F5D061" strokeWidth="1.2" />
        {/* Ray flourishes */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <line
            key={i}
            x1="50"
            y1="4"
            x2="50"
            y2="8"
            stroke="#D4A017"
            strokeWidth="2"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}
        {/* Tamil 'உ' character stylized */}
        <text
          x="50"
          y="69"
          textAnchor="middle"
          fill="#FFFDF7"
          fontSize="56"
          fontFamily="'Noto Serif Tamil', serif"
          fontWeight="bold"
          filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))"
        >
          உ
        </text>
      </svg>
    </div>
  );
}

/**
 * Traditional Kolam / Rangoli symmetrical divider
 */
export function KolamDivider({ className = "my-6" }) {
  return (
    <div className={`flex items-center justify-center gap-3 w-full max-w-lg mx-auto ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold to-gold-warm" />
      <svg width="42" height="42" viewBox="0 0 60 60" className="shrink-0 text-gold-warm">
        {/* Diamond / Sikku Kolam motif */}
        <path
          d="M30 4 L56 30 L30 56 L4 30 Z"
          fill="none"
          stroke="#D4A017"
          strokeWidth="1.8"
        />
        <circle cx="30" cy="30" r="6" fill="#F5D061" />
        <circle cx="30" cy="18" r="2.5" fill="#D4A017" />
        <circle cx="30" cy="42" r="2.5" fill="#D4A017" />
        <circle cx="18" cy="30" r="2.5" fill="#D4A017" />
        <circle cx="42" cy="30" r="2.5" fill="#D4A017" />
        {/* Curved petals */}
        <path
          d="M30 18 Q38 24 42 30 Q38 36 30 42 Q22 36 18 30 Q22 24 30 18"
          fill="none"
          stroke="#F5D061"
          strokeWidth="1.2"
        />
      </svg>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold to-gold-warm" />
    </div>
  );
}

/**
 * Traditional Corner Kolam flourish
 */
export function KolamCorner({ className = "", position = "top-left" }) {
  const getRotation = () => {
    switch (position) {
      case 'top-right': return 'rotate-90';
      case 'bottom-right': return 'rotate-180';
      case 'bottom-left': return '-rotate-90';
      default: return '';
    }
  };

  return (
    <div className={`pointer-events-none select-none text-gold/60 ${getRotation()} ${className}`}>
      <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
        <path d="M4 4 H32 C48 4 60 16 60 32 V60" stroke="#D4A017" strokeWidth="2" strokeDasharray="3 3" />
        <path d="M8 8 H28 C42 8 52 18 52 32 V52" stroke="#F5D061" strokeWidth="1.2" />
        <circle cx="12" cy="12" r="4" fill="#D4A017" />
        <circle cx="28" cy="12" r="2.5" fill="#F5D061" />
        <circle cx="12" cy="28" r="2.5" fill="#F5D061" />
        <circle cx="24" cy="24" r="3" fill="#E5A93C" />
      </svg>
    </div>
  );
}

/**
 * Mango-leaf and Marigold garland Toranam across the top of sections
 */
export function ToranamHeader() {
  return (
    <div className="w-full overflow-hidden h-9 relative pointer-events-none select-none">
      <div className="flex w-[200%] sm:w-full justify-between items-start">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center flex-1">
            {/* Mango leaf */}
            <svg viewBox="0 0 32 26" className="w-7 h-6 drop-shadow-md">
              <path
                d="M1 0 C8 16 16 26 16 26 C16 26 24 16 31 0 Z"
                fill="#2E6F40"
                stroke="#D4A017"
                strokeWidth="0.8"
              />
              <line x1="16" y1="0" x2="16" y2="22" stroke="#E5A93C" strokeWidth="0.8" opacity="0.8" />
            </svg>
            {/* Marigold flower bud */}
            {i % 2 === 0 && (
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-sm border border-amber-300 -mt-1" />
            )}
            {i % 2 === 1 && (
              <div className="w-2 h-2 rounded-full bg-ivory shadow-sm border border-amber-200 -mt-1" />
            )}
          </div>
        ))}
      </div>
      {/* Golden holding string */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold/40 via-gold to-gold/40 shadow-sm" />
    </div>
  );
}

/**
 * Kuthuvilakku (Brass Lamp) with flickering flame SVG
 */
export function KuthuvilakkuIcon({ className = "w-10 h-20" }) {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* Flickering Flame */}
      <div className="absolute -top-3 w-4 h-6 animate-flicker">
        <svg viewBox="0 0 20 30" className="w-full h-full">
          <path
            d="M10 0 C6 10 2 18 2 24 C2 28 6 30 10 30 C14 30 18 28 18 24 C18 18 14 10 10 0 Z"
            fill="url(#flameGradient)"
          />
          <defs>
            <radialGradient id="flameGradient" cx="50%" cy="70%" r="60%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="35%" stopColor="#FDE047" />
              <stop offset="70%" stopColor="#F97316" />
              <stop offset="100%" stopColor="#DC2626" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Brass Lamp Body */}
      <svg viewBox="0 0 60 120" className="w-full h-full drop-shadow-lg">
        {/* Top wick dish */}
        <ellipse cx="30" cy="22" rx="20" ry="6" fill="#F5D061" stroke="#AA7C11" strokeWidth="1.5" />
        <ellipse cx="30" cy="21" rx="14" ry="4" fill="#D4A017" />
        
        {/* Lamp neck and rings */}
        <rect x="27" y="24" width="6" height="12" fill="#D4A017" />
        <ellipse cx="30" cy="38" rx="10" ry="3.5" fill="#F5D061" />
        <ellipse cx="30" cy="44" rx="14" ry="4" fill="#D4A017" stroke="#AA7C11" strokeWidth="1" />
        
        {/* Main column */}
        <path d="M26 46 L24 85 L36 85 L34 46 Z" fill="url(#brassShine)" />
        <ellipse cx="30" cy="65" rx="8" ry="2.5" fill="#F5D061" />
        <ellipse cx="30" cy="85" rx="16" ry="5" fill="#D4A017" stroke="#AA7C11" strokeWidth="1" />
        
        {/* Pedestal Base */}
        <path d="M22 88 L12 112 C20 115 40 115 48 112 L38 88 Z" fill="url(#brassShine)" stroke="#AA7C11" strokeWidth="1" />
        <ellipse cx="30" cy="113" rx="24" ry="6" fill="#F5D061" stroke="#8C650B" strokeWidth="1.5" />

        <defs>
          <linearGradient id="brassShine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#AA7C11" />
            <stop offset="35%" stopColor="#F5D061" />
            <stop offset="70%" stopColor="#FFFDF7" />
            <stop offset="90%" stopColor="#D4A017" />
            <stop offset="100%" stopColor="#8C650B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/**
 * Temple Gopuram silhouette backdrop for Hero
 */
export function GopuramBackdrop({ className = "opacity-10" }) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="none">
        {/* Tiered Gopuram levels */}
        <polygon points="200,20 185,50 215,50" fill="#D4A017" />
        <polygon points="200,10 196,20 204,20" fill="#F5D061" />
        
        {/* Kalasams at the summit */}
        <circle cx="192" cy="18" r="2.5" fill="#F5D061" />
        <circle cx="200" cy="16" r="3.2" fill="#F5D061" />
        <circle cx="208" cy="18" r="2.5" fill="#F5D061" />

        {/* Tiers */}
        <polygon points="180,50 220,50 230,85 170,85" fill="#D4A017" />
        <polygon points="166,85 234,85 246,125 154,125" fill="#D4A017" />
        <polygon points="150,125 250,125 264,170 136,170" fill="#D4A017" />
        <polygon points="132,170 268,170 284,220 116,220" fill="#D4A017" />
        <polygon points="112,220 288,220 306,280 94,280" fill="#D4A017" />
        
        {/* Temple Doorway Arch */}
        <path d="M170 280 V230 C170 210 230 210 230 230 V280 Z" fill="#300207" opacity="0.6" />
      </svg>
    </div>
  );
}

