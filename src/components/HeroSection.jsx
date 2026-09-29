import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">


      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="z-10 w-full max-w-5xl flex flex-col items-center relative"
      >
        {/* Beautiful Ornate Frame */}
        <div className="relative w-full px-6 py-16 md:px-16 md:py-24 border border-wedding-gold/30 rounded-t-[10rem] rounded-b-[4rem] bg-white/20 backdrop-blur-sm shadow-2xl shadow-wedding-gold/5 flex flex-col items-center">
          
          {/* Corner / Top Ornaments */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-[1.5px] bg-wedding-gold/60" />
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-wedding-gold/80" />
          
          <div className="absolute top-10 left-10 w-16 h-16 border-t-[1.5px] border-l-[1.5px] border-wedding-gold/50 rounded-tl-3xl opacity-70" />
          <div className="absolute top-10 right-10 w-16 h-16 border-t-[1.5px] border-r-[1.5px] border-wedding-gold/50 rounded-tr-3xl opacity-70" />
          <div className="absolute bottom-10 left-10 w-16 h-16 border-b-[1.5px] border-l-[1.5px] border-wedding-gold/50 rounded-bl-3xl opacity-70" />
          <div className="absolute bottom-10 right-10 w-16 h-16 border-b-[1.5px] border-r-[1.5px] border-wedding-gold/50 rounded-br-3xl opacity-70" />

          {/* Subtle top decoration */}
          <div className="flex items-center gap-4 mb-12 opacity-80">
            <div className="w-12 md:w-20 h-[1px] bg-wedding-gold" />
            <p className="font-cairo text-wedding-gold-dark tracking-widest text-base font-semibold">دعوة فرحنا</p>
            <div className="w-12 md:w-20 h-[1px] bg-wedding-gold" />
          </div>

          {/* Huge Typography Names - Changed to Ruqaa for Calligraphy feel */}
          <h1 className="text-7xl sm:text-8xl md:text-[11rem] font-ruqaa text-wedding-gold-dark mb-12 leading-none flex flex-row items-center justify-center gap-4 sm:gap-6 md:gap-12 drop-shadow-md w-full">
            <span>محمد</span>
            <span className="text-wedding-charcoal/80 font-cairo text-3xl sm:text-4xl md:text-6xl -mt-4 md:-mt-8 opacity-60">و</span>
            <span>شيماء</span>
          </h1>

          {/* Date & Location elegantly boxed */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 px-8 py-5 rounded-full border-[1.5px] border-wedding-gold/40 bg-white/40 mb-12 shadow-inner text-center">
            <span className="font-cairo text-wedding-charcoal text-base md:text-lg font-medium">قاعة ميره لاند — المنوفية</span>
            <div className="w-16 h-[1px] md:w-2 md:h-2 md:rounded-full bg-wedding-gold" />
            <span className="font-cairo text-wedding-charcoal text-base md:text-lg font-medium">الأحد 4 أكتوبر 2026</span>
          </div>

          {/* Romantic quote */}
          <p className="text-2xl sm:text-3xl md:text-4xl font-ruqaa text-wedding-charcoal/90 max-w-[95%] md:max-w-3xl mx-auto leading-relaxed px-4 drop-shadow-sm">
            "في ليلةٍ كُتب فيها بداية أجمل حكاية في حياتنا..."
          </p>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-20 font-cairo text-sm text-wedding-charcoal/50 flex flex-col items-center gap-2"
        >
          <span>انزل تحت</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-wedding-charcoal/30 to-transparent" />
        </motion.div>

      </motion.div>
    </section>
  );
};

export default HeroSection;
