import React, { useEffect, useRef } from 'react';

/**
 * High-performance HTML5 Canvas falling light-colored flowers (Jasmine & Ivory petals).
 * Features realistic gentle drifting, fluttering 3D rotation, and wind sway.
 * Designed to cascade smoothly across the entire page background.
 */
export function FallingFlowers({ count, className = "fixed inset-0 pointer-events-none z-20" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const updateDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    // Responsive petal count: ~35 on mobile, ~55 on desktop for optimal density and 60fps
    const petalCount = count || (window.innerWidth < 640 ? 32 : 55);

    // Types of light-colored auspicious flowers:
    // 0: Elongated Jasmine Petal (Malligai Ithazh) - creamy white
    // 1: 5-Petal Jasmine Star Blossom (Malligai Malar) - white with faint golden core
    // 2: Soft Ivory/Blush Rose Petal - gentle light pink/ivory
    // 3: Delicate Light-Yellow Marigold Petal - soft pastel yellow
    const petals = Array.from({ length: petalCount }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 9 + Math.random() * 12,
      speedY: 0.5 + Math.random() * 0.8, // Slow, meditative descent
      speedX: (Math.random() - 0.5) * 0.35,
      swaySpeed: 0.012 + Math.random() * 0.018,
      swayOffset: Math.random() * Math.PI * 2,
      swayWidth: 22 + Math.random() * 30,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.018,
      type: Math.floor(Math.random() * 4),
      opacity: 0.55 + Math.random() * 0.35,
      flip: Math.random() * Math.PI,
      flipSpeed: 0.015 + Math.random() * 0.02,
    }));

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      petals.forEach((p) => {
        // Update physics
        p.y += p.speedY;
        p.swayOffset += p.swaySpeed;
        p.rotation += p.rotSpeed;
        p.flip += p.flipSpeed;

        const currentX = p.x + Math.sin(p.swayOffset) * p.swayWidth * 0.4;
        const flipScale = Math.sin(p.flip);

        // Wrap around bottom smoothly
        if (p.y > h + 25) {
          p.y = -25;
          p.x = Math.random() * w;
        }

        ctx.save();
        ctx.translate(currentX, p.y);
        ctx.rotate(p.rotation);
        ctx.scale(1, flipScale);
        ctx.globalAlpha = p.opacity;

        if (p.type === 0) {
          // Jasmine Petal: Creamy white tapered drop with gentle glow
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.bezierCurveTo(p.size * 0.55, -p.size * 0.5, p.size * 0.45, p.size * 0.6, 0, p.size);
          ctx.bezierCurveTo(-p.size * 0.45, p.size * 0.6, -p.size * 0.55, -p.size * 0.5, 0, -p.size);

          const grad = ctx.createLinearGradient(0, -p.size, 0, p.size);
          grad.addColorStop(0, '#FFFFFF');
          grad.addColorStop(0.65, '#FFFDF7');
          grad.addColorStop(1, '#FEF9C3');
          ctx.fillStyle = grad;
          ctx.fill();

          // Delicate vein
          ctx.strokeStyle = 'rgba(212, 160, 23, 0.25)';
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 0.7);
          ctx.lineTo(0, p.size * 0.7);
          ctx.stroke();

        } else if (p.type === 1) {
          // Full Jasmine Blossom (5 delicate white petals radiating)
          const petalCount = 5;
          const r = p.size * 0.6;
          for (let i = 0; i < petalCount; i++) {
            const angle = (i * Math.PI * 2) / petalCount;
            ctx.save();
            ctx.rotate(angle);
            ctx.beginPath();
            ctx.ellipse(0, -r, r * 0.4, r * 0.8, 0, 0, Math.PI * 2);
            ctx.fillStyle = '#FFFDF7';
            ctx.fill();
            ctx.restore();
          }
          // Blossom center dot
          ctx.beginPath();
          ctx.arc(0, 0, r * 0.32, 0, Math.PI * 2);
          ctx.fillStyle = '#FDE047';
          ctx.fill();

        } else if (p.type === 2) {
          // Soft Ivory / Rose Petal
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 0.8);
          ctx.bezierCurveTo(p.size * 0.7, -p.size * 0.6, p.size * 0.6, p.size * 0.7, 0, p.size * 0.9);
          ctx.bezierCurveTo(-p.size * 0.6, p.size * 0.7, -p.size * 0.7, -p.size * 0.6, 0, -p.size * 0.8);

          const grad = ctx.createRadialGradient(0, 0, 1, 0, 0, p.size);
          grad.addColorStop(0, '#FFF5F5');
          grad.addColorStop(0.7, '#FFE4E6');
          grad.addColorStop(1, '#FFFDF7');
          ctx.fillStyle = grad;
          ctx.fill();

        } else {
          // Pastel Light-Yellow Marigold Petal
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.quadraticCurveTo(p.size * 0.5, 0, 0, p.size * 0.8);
          ctx.quadraticCurveTo(-p.size * 0.5, 0, 0, -p.size);

          const grad = ctx.createLinearGradient(0, -p.size, 0, p.size);
          grad.addColorStop(0, '#FEF08A');
          grad.addColorStop(0.7, '#FDE047');
          grad.addColorStop(1, '#FBBF24');
          ctx.fillStyle = grad;
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', updateDimensions);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: '100vw', height: '100vh', pointerEvents: 'none' }}
    />
  );
}
