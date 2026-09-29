import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
  // Hanging lights configurations
  const lights = [
    { left: '10%', height: '30vh', delay: 0 },
    { left: '25%', height: '15vh', delay: 1 },
    { left: '45%', height: '40vh', delay: 2 },
    { left: '70%', height: '20vh', delay: 0.5 },
    { left: '85%', height: '35vh', delay: 1.5 },
  ];

  // 1. Falling Hearts (Faint Golden Hearts)
  const fallingHearts = Array.from({ length: 30 }).map((_, i) => ({
    id: `heart-${i}`,
    size: Math.random() * 12 + 10, // 10px to 22px
    xStart: Math.random() * 100, 
    xDrift: (Math.random() - 0.5) * 20, 
    duration: Math.random() * 20 + 15, // Slow fall
    delay: Math.random() * -30, 
  }));

  // 2. Falling Flowers/Petals (Blush & Gold)
  const fallingPetals = Array.from({ length: 25 }).map((_, i) => ({
    id: `petal-${i}`,
    size: Math.random() * 12 + 12, // 12px to 24px
    xStart: Math.random() * 100, 
    xDrift: (Math.random() - 0.5) * 30, // Sweeping drift
    duration: Math.random() * 15 + 12, 
    delay: Math.random() * -30,
    isBlush: Math.random() > 0.5 // Mix of colors
  }));

  // 3. Falling Sparks (Tiny dust)
  const fallingSparks = Array.from({ length: 45 }).map((_, i) => ({
    id: `spark-${i}`,
    size: Math.random() * 4 + 3, // 3px to 7px
    xStart: Math.random() * 100, 
    xDrift: (Math.random() - 0.5) * 15, 
    duration: Math.random() * 12 + 8, 
    delay: Math.random() * -20, 
  }));

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      
      {/* Hanging Lights */}
      {lights.map((light, i) => (
        <div key={`light-${i}`} className="absolute top-0 flex flex-col items-center" style={{ left: light.left }}>
          <div className="w-[1px] bg-gradient-to-b from-wedding-gold/50 to-wedding-gold/10" style={{ height: light.height }} />
          <motion.div
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: light.delay,
              ease: "easeInOut"
            }}
            className="w-3 h-8 bg-wedding-gold rounded-sm shadow-[0_0_15px_5px_rgba(212,175,55,0.5)]"
          />
        </div>
      ))}

      {/* Falling Faint Golden Hearts */}
      {fallingHearts.map((h) => (
        <motion.div
          key={h.id}
          initial={{ top: "-10%", left: `${h.xStart}%`, opacity: 0 }}
          animate={{
            top: ["-10%", "110%"],
            left: [`${h.xStart}%`, `${h.xStart + h.xDrift}%`, `${h.xStart}%`],
            opacity: [0, 0.25, 0.25, 0], // المخفية سيكا (Faint)
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{
            duration: h.duration,
            repeat: Infinity,
            delay: h.delay,
            ease: "linear",
          }}
          className="absolute text-wedding-gold/30"
          style={{ width: h.size, height: h.size }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </motion.div>
      ))}

      {/* Falling Flowers / Petals */}
      {fallingPetals.map((p) => (
        <motion.div
          key={p.id}
          initial={{ top: "-10%", left: `${p.xStart}%`, opacity: 0 }}
          animate={{
            top: ["-10%", "110%"],
            left: [`${p.xStart}%`, `${p.xStart + p.xDrift}%`, `${p.xStart}%`],
            opacity: [0, 0.4, 0.4, 0],
            rotate: [0, 120, -120, 360]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          className={`absolute ${p.isBlush ? 'text-wedding-blush drop-shadow-sm' : 'text-wedding-gold/40'}`}
          style={{ width: p.size, height: p.size }}
        >
          {/* Beautiful 4-petal flower SVG */}
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2C14,2 14,7 17.5,7.5C21,8 22,12 22,12C22,12 21,16 17.5,16.5C14,17 14,22 12,22C10,22 10,17 6.5,16.5C3,16 2,12 2,12C2,12 3,8 6.5,7.5C10,7 10,2 12,2Z"/>
            <circle cx="12" cy="12" r="2" fill="white" opacity="0.6"/>
          </svg>
        </motion.div>
      ))}

      {/* Falling Sparks (Dust) */}
      {fallingSparks.map((p) => (
        <motion.div
          key={p.id}
          initial={{ top: "-10%", left: `${p.xStart}%`, opacity: 0 }}
          animate={{
            top: ["-10%", "110%"],
            left: [`${p.xStart}%`, `${p.xStart + p.xDrift}%`, `${p.xStart}%`],
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          className="absolute rounded-full bg-wedding-gold shadow-[0_0_10px_2px_rgba(212,175,55,0.6)]"
          style={{ width: p.size, height: p.size }}
        />
      ))}

      {/* Soft Ambient Glowing Orbs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-wedding-gold/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-wedding-blush/20 rounded-full blur-[120px]"
      />
    </div>
  );
};

export default BackgroundEffects;
