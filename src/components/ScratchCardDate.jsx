import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { soundEngine } from '../utils/audio';
import { KolamDivider, PillaiyarSuzhi } from './common/Motifs';
import { Sparkles, Calendar, Clock, RotateCcw } from 'lucide-react';
import { ScrollDownIndicator } from './common/ScrollDownIndicator';

export function ScratchCardDate({ lang, config }) {
  const { scratchCard, date, couple } = config;
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const [isRevealed, setIsRevealed] = useState(false);
  const [clearedPercent, setClearedPercent] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const isScratching = useRef(false);
  const lastSoundTime = useRef(0);

  // Trigger Malar Mazhai (Flower shower + fireworks confetti)
  const triggerMalarMazhai = useCallback(() => {
    soundEngine.playFlowerCelebration();

    // Multistage flower shower confetti
    const colors = ['#D4A017', '#F5D061', '#E5A93C', '#FCFCF7', '#DC2626', '#FF80AB'];
    
    // Left burst
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 65,
      origin: { x: 0.1, y: 0.6 },
      colors: colors,
      shapes: ['circle', 'square'],
      scalar: 1.2,
    });

    // Right burst
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 65,
      origin: { x: 0.9, y: 0.6 },
      colors: colors,
      shapes: ['circle', 'square'],
      scalar: 1.2,
    });

    // Center flower rain from top
    setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { x: 0.5, y: 0.3 },
        colors: colors,
        scalar: 1.4,
      });
    }, 350);
  }, []);

  // Initialize Canvas Gold Foil Layer
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    // Gold Foil Shimmer Gradient
    const grad = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    grad.addColorStop(0, '#AA7C11');
    grad.addColorStop(0.2, '#F5D061');
    grad.addColorStop(0.4, '#D4A017');
    grad.addColorStop(0.7, '#F7E7A9');
    grad.addColorStop(1, '#8C650B');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Outer Zari & Kolam Borders
    ctx.strokeStyle = '#5B0E17';
    ctx.lineWidth = 6;
    ctx.strokeRect(8, 8, rect.width - 16, rect.height - 16);

    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(14, 14, rect.width - 28, rect.height - 28);

    // Subtle Kolam dots & diamond grid
    ctx.fillStyle = 'rgba(91, 14, 23, 0.25)';
    const spacing = 32;
    for (let x = 30; x < rect.width - 20; x += spacing) {
      for (let y = 30; y < rect.height - 20; y += spacing) {
        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Scratch Prompt Text
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillStyle = '#300207';
    ctx.font = 'bold 18px "Noto Serif Tamil", serif';
    ctx.fillText(scratchCard.title[lang], rect.width / 2, rect.height / 2 - 25);

    ctx.font = '13px "Mukta Malar", sans-serif';
    ctx.fillStyle = '#45060E';
    ctx.fillText(scratchCard.hint[lang], rect.width / 2, rect.height / 2 - 3);

    setIsRevealed(false);
    setClearedPercent(0);
  }, [lang, scratchCard]);

  useEffect(() => {
    initCanvas();
    const handleResize = () => initCanvas();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initCanvas]);

  // Check cleared percentage
  const checkClearedArea = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Sample a grid of pixels for high performance
    const step = 16;
    const imgData = ctx.getImageData(0, 0, width, height);
    const data = imgData.data;
    let transparentCount = 0;
    let totalSamples = 0;

    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const index = (y * width + x) * 4;
        if (data[index + 3] < 128) {
          transparentCount++;
        }
        totalSamples++;
      }
    }

    const percent = Math.round((transparentCount / totalSamples) * 100);
    setClearedPercent(percent);

    // At ~55-60%, auto-reveal everything!
    if (percent >= 55 && !isRevealed) {
      setIsRevealed(true);
      triggerMalarMazhai();

      // Clear the rest of canvas smoothly
      const fadeStep = () => {
        ctx.clearRect(0, 0, width, height);
      };
      fadeStep();
    }
  }, [isRevealed, triggerMalarMazhai]);

  // Scratch Drawing Logic
  const scratch = (e) => {
    if (!isScratching.current || isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);

    if (!clientX || !clientY) return;

    const x = (clientX - rect.left) * dpr;
    const y = (clientY - rect.top) * dpr;

    const ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'destination-out';

    // Soft-edge circular brush
    const radius = 32 * dpr;
    const radialGrad = ctx.createRadialGradient(x, y, 0, x, y, radius);
    radialGrad.addColorStop(0, 'rgba(0,0,0,1)');
    radialGrad.addColorStop(0.7, 'rgba(0,0,0,0.8)');
    radialGrad.addColorStop(1, 'rgba(0,0,0,0)');

    ctx.fillStyle = radialGrad;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();

    // Sound throttle (every 80ms)
    const now = Date.now();
    if (now - lastSoundTime.current > 80) {
      soundEngine.playScratchSound();
      lastSoundTime.current = now;
      checkClearedArea();
    }
  };

  const handlePointerDown = (e) => {
    isScratching.current = true;
    setHasInteracted(true);
    scratch(e);
  };

  const handlePointerMove = (e) => {
    scratch(e);
  };

  const handlePointerUp = () => {
    isScratching.current = false;
    checkClearedArea();
  };

  const resetScratchCard = () => {
    initCanvas();
  };

  return (
    <section id="scratch-date" className="py-20 relative px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="font-tamilTitle text-2xl sm:text-3xl md:text-4xl font-bold text-gold-warm">
            {scratchCard.title[lang]}
          </h2>
          <p className="font-tamilBody text-xs sm:text-sm text-ivory/70 mt-1">
            {scratchCard.hint[lang]}
          </p>
          <KolamDivider className="my-4" />
        </div>

        {/* 3 BONUS TEASER TILES */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8">
          {scratchCard.teasers.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="px-3 sm:px-5 py-2 rounded-xl bg-kumkum/60 border border-gold/40 shadow-md backdrop-blur-sm"
            >
              <span className="font-tamilTitle text-xs sm:text-sm font-semibold text-gold-warm">
                {t[lang]}
              </span>
            </motion.div>
          ))}
        </div>

        {/* SCRATCH CARD CONTAINER */}
        <div
          ref={containerRef}
          className="relative w-full max-w-lg mx-auto h-[280px] sm:h-[320px] rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/60 select-none bg-gradient-to-b from-kumkum-dark to-kumkum-deep"
        >
          {/* THE SACRED DATE REVEALED CONTENT (SITS BENEATH THE CANVAS) */}
          <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center">
            {/* Background subtle kolam */}
            <div className="absolute inset-0 bg-kolam-pattern opacity-10 pointer-events-none" />

            <motion.div
              animate={isRevealed ? { scale: [0.95, 1.03, 1], opacity: 1 } : { scale: 1, opacity: 0.95 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 flex flex-col items-center space-y-2.5"
            >
              <span className="px-3 py-1 rounded-full bg-gold/20 text-gold-warm border border-gold/40 text-xs font-tamilTitle">
                {date.subhaMuhurthamTitle[lang]}
              </span>

              <h3 className="font-tamilTitle text-3xl sm:text-4xl font-extrabold text-gold-warm drop-shadow-md">
                {date.dateDisplay[lang]}
              </h3>

              <div className="flex items-center gap-2 text-ivory text-sm sm:text-base font-tamilTitle font-medium">
                <span>{date.day[lang]}</span>
                <span>•</span>
                <span className="text-turmeric">{date.tamilDate[lang]}</span>
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-ivory/80 bg-kumkum/80 px-4 py-1.5 rounded-full border border-gold/30 mt-1">
                <Clock className="w-3.5 h-3.5 text-gold-warm" />
                <span className="font-tamilBody">{date.muhurthamTime[lang]}</span>
              </div>

              <p className="text-[11px] sm:text-xs text-gold-light/90 font-tamilBody max-w-xs mt-1">
                {date.nallaNeram[lang]}
              </p>
            </motion.div>
          </div>

          {/* HTML5 CANVAS SCRATCH OVERLAY */}
          <canvas
            ref={canvasRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            className={`absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing touch-none z-20 transition-opacity duration-700 ${
              isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          />

          {/* MOVING-FINGER SCRATCH HINT (fades on first interaction) */}
          <AnimatePresence>
            {!hasInteracted && !isRevealed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-30 pointer-events-none flex flex-col items-center justify-center pt-16 sm:pt-20"
              >
                <motion.div
                  animate={{
                    x: [-40, 40, -40],
                    y: [-10, 10, -10],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.2,
                    ease: 'easeInOut',
                  }}
                  className="w-12 h-12 rounded-full bg-gold/30 backdrop-blur-sm border-2 border-gold flex items-center justify-center text-2xl shadow-gold-glow"
                >
                  👆
                </motion.div>
                <span className="mt-3 text-xs font-tamilTitle font-bold text-kumkum-deep bg-gold/90 px-3 py-1 rounded-full shadow-md">
                  {lang === 'ta' ? 'இங்கு சொரண்டவும்' : 'Scratch Here'}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Progress or Scratch Again button */}
        <div className="mt-6 flex flex-col items-center justify-center gap-3">
          {!isRevealed && clearedPercent > 0 && (
            <p className="text-xs text-gold-warm font-tamilBody">
              {lang === 'ta' ? `சொரண்டப்பட்டது: ${clearedPercent}%` : `Scratched: ${clearedPercent}%`}
            </p>
          )}

          {isRevealed && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-3"
            >
              <p className="text-sm text-gold-warm font-tamilTitle">
                🌸 {scratchCard.revealedMessage[lang]}
              </p>
              <button
                onClick={resetScratchCard}
                className="px-4 py-2 rounded-full bg-kumkum/60 border border-gold/40 hover:border-gold text-gold-warm text-xs flex items-center gap-2 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{scratchCard.scratchAgainBtn[lang]}</span>
              </button>
            </motion.div>
          )}
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-8 flex justify-center">
          <ScrollDownIndicator text="SCROLL" href="#events" />
        </div>
      </div>
    </section>
  );
}

