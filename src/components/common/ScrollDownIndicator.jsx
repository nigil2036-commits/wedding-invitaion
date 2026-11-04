import React from 'react';
import { motion } from 'framer-motion';

export function ScrollDownIndicator({ text = "SCROLL", href }) {
  const content = (
    <div className="flex flex-col items-center justify-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity select-none group cursor-pointer my-4">
      <span className="font-engTitle text-[11px] sm:text-xs tracking-[0.3em] uppercase text-gold-warm font-medium group-hover:text-gold transition-colors">
        {text} ↓
      </span>
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="w-1 h-3 rounded-full bg-gold/50 group-hover:bg-gold transition-colors"
      />
    </div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}

