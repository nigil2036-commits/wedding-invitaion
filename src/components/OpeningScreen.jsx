import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { soundEngine } from '../utils/audio';
import { FallingFlowers } from './common/FallingFlowers';
import confetti from 'canvas-confetti';

export function OpeningScreen({ config, onComplete }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isZooming, setIsZooming] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Dynamically get 1st letters of Groom & Bride
  const groomName = config?.couple?.groom?.name?.en || 'Yogeshkumar';
  const brideName = config?.couple?.bride?.name?.en || 'Kamali';
  const groomInitial = groomName.trim()[0] || 'Y';
  const brideInitial = brideName.trim()[0] || 'K';
  const monogram = `${groomInitial}${brideInitial}`;

  // Mouse tilt tracking for subtle 3D lighting reflection
  useEffect(() => {
    const handlePointerMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  const handleOpen = () => {
    if (isOpen) return;

    // 1. Play temple bell sound and ambient Carnatic music
    soundEngine.playTempleBell();
    soundEngine.startMangalaVadyam(config?.audio?.backgroundTrackUrl);

    // 2. Confetti flower sparkles from center heart seal
    const colors = ['#D4A017', '#F5D061', '#FFFDF7', '#9E1C2E', '#FDE047'];
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { x: 0.5, y: 0.5 },
      colors: colors,
      scalar: 1.1,
    });

    // 3. Trigger envelope flap opening
    setIsOpen(true);

    // 4. Directly open and smoothly transition straight to the home page!
    setTimeout(() => {
      setIsZooming(true);
    }, 450);

    setTimeout(() => {
      onComplete();
    }, 950);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#1e0205] flex items-center justify-center select-none">
      {/* 🌸 GENTLE FALLING JASMINE PETALS IN BACKGROUND */}
      <FallingFlowers count={32} className="absolute inset-0 pointer-events-none z-10" />

      {/* Subtle background vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-black/70 pointer-events-none" />

      {/* 🌟 LUXURY MODERN GOLD ENVELOPE (MATCHING REFERENCE IMAGE 2) */}
      <motion.div
        animate={isZooming ? { scale: 2.8, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{
          transform: `perspective(1000px) rotateX(${mousePos.y * -3}deg) rotateY(${mousePos.x * 4}deg)`,
        }}
        className="relative w-full max-w-4xl h-[460px] sm:h-[540px] md:h-[600px] mx-4 rounded-xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] border-2 border-gold/40 flex items-center justify-center transition-transform duration-200 ease-out"
      >
        {/* ENVELOPE BASE SOLID GOLD GRADIENT (NO WHITE BOX) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E2BE78] via-[#F3DE9A] to-[#C99C44]" />

        {/* 1. GEOMETRIC FOLD FACETS (Origami Gold Envelope) */}
        {/* Left Gold Facet */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            clipPath: 'polygon(0 0, 0 100%, 50% 50%)',
            background: 'linear-gradient(135deg, #B58A35 0%, #D8AF55 50%, #9B7023 100%)',
            opacity: 0.95,
          }}
        />

        {/* Right Gold Facet */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            clipPath: 'polygon(100% 0, 100% 100%, 50% 50%)',
            background: 'linear-gradient(225deg, #DFB96C 0%, #B88E37 60%, #8E6517 100%)',
            opacity: 0.95,
          }}
        />

        {/* Bottom Gold Facet */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            clipPath: 'polygon(0 100%, 100% 100%, 50% 50%)',
            background: 'linear-gradient(180deg, #CE9F42 0%, #E6C47A 40%, #A27622 100%)',
            boxShadow: '0 -4px 15px rgba(0,0,0,0.25)',
          }}
        />

        {/* Sub-facet depth shadow lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
          <line x1="0" y1="0" x2="50%" y2="50%" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="100%" y1="0" x2="50%" y2="50%" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="0" y1="100%" x2="50%" y2="50%" stroke="#603F08" strokeWidth="2" />
          <line x1="100%" y1="100%" x2="50%" y2="50%" stroke="#603F08" strokeWidth="2" />
        </svg>

        {/* 2. TOP ENVELOPE FLAP (Opens with 3D perspective fold) */}
        <motion.div
          initial={{ rotateX: 0 }}
          animate={isOpen ? { rotateX: 180, opacity: 0 } : { rotateX: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top center' }}
          className="absolute inset-0 pointer-events-none z-20"
        >
          <div
            className="w-full h-full"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 50%)',
              background: 'linear-gradient(180deg, #F9E2A8 0%, #D8AF55 60%, #BA892B 100%)',
              boxShadow: '0 8px 25px rgba(0,0,0,0.35)',
            }}
          />
        </motion.div>

        {/* 3. 💖 CENTER HEART SEAL (TOUCH THE SEAL TO OPEN) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-auto">
          <motion.button
            onClick={handleOpen}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="group relative cursor-pointer focus:outline-none flex flex-col items-center"
            title="TOUCH THE SEAL TO OPEN"
          >
            {/* Heart Seal with Crimson Maroon fill, Gold Bevel, and Initials */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 drop-shadow-[0_10px_25px_rgba(80,8,16,0.6)] group-hover:drop-shadow-[0_14px_35px_rgba(212,160,23,0.85)] transition-all">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  {/* Rich Crimson Maroon Enamel Gradient */}
                  <radialGradient id="heartEnamel" cx="45%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#A81D2F" />
                    <stop offset="60%" stopColor="#6E0F1B" />
                    <stop offset="100%" stopColor="#3E050B" />
                  </radialGradient>
                  {/* Gold Bevel Gradient */}
                  <linearGradient id="goldEdge" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFF8D6" />
                    <stop offset="40%" stopColor="#F5D061" />
                    <stop offset="70%" stopColor="#D4A017" />
                    <stop offset="100%" stopColor="#8C650B" />
                  </linearGradient>
                </defs>

                {/* Outer Gold Bevel Edge */}
                <path
                  d="M50,88 C50,88 12,62 12,35 C12,18 25,12 37,12 C44,12 50,18 50,18 C50,18 56,12 63,12 C75,12 88,18 88,35 C88,62 50,88 50,88 Z"
                  fill="url(#goldEdge)"
                />

                {/* Inner Crimson Wax Heart */}
                <path
                  d="M50,84 C50,84 15,59 15,35 C15,20 26,15 37,15 C43,15 49,20 50,21 C51,20 57,15 63,15 C74,15 85,20 85,35 C85,59 50,84 50,84 Z"
                  fill="url(#heartEnamel)"
                />

                {/* Inner delicate gold stitched rim */}
                <path
                  d="M50,80 C50,80 18,57 18,35 C18,22 28,18 37,18 C43,18 48,22 50,24 C52,22 57,18 63,18 C72,18 82,22 82,35 C82,57 50,80 50,80 Z"
                  fill="none"
                  stroke="#F5D061"
                  strokeWidth="0.8"
                  strokeDasharray="2 1.5"
                  opacity="0.8"
                />

                {/* Couple Initials inside Heart (in bold luxury serif, matching reference image) */}
                <text
                  x="50"
                  y="53"
                  textAnchor="middle"
                  fill="#FFFDF7"
                  fontSize="23"
                  fontFamily="'Cormorant Garamond', 'Noto Serif Tamil', serif"
                  fontWeight="bold"
                  letterSpacing="1"
                  filter="drop-shadow(0 1px 2px rgba(0,0,0,0.7))"
                >
                  {monogram}
                </text>
              </svg>

              {/* Pulsing golden halo ring */}
              <div className="absolute -inset-2 rounded-full border border-gold/40 animate-ping opacity-25 pointer-events-none" />
            </div>

            {/* ONLY "TOUCH THE SEAL TO OPEN" - EXACTLY AS REQUESTED */}
            <p className="mt-5 font-engTitle text-xs sm:text-sm tracking-[0.28em] text-[#633F08] font-semibold uppercase group-hover:text-[#42060E] transition-colors">
              TOUCH THE SEAL TO OPEN
            </p>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
