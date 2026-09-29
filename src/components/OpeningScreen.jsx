import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MailOpen } from 'lucide-react';
import BackgroundEffects from './BackgroundEffects';

const OpeningScreen = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      onOpen();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-wedding-bg overflow-hidden"
        >
          <BackgroundEffects />

          {/* Subtle Background Flowers for the Opening Screen */}
          <div className="absolute top-0 left-0 w-64 md:w-96 opacity-80 pointer-events-none mix-blend-multiply">
            <img src="/floral_corner.png" alt="" className="w-full h-auto -scale-x-100 origin-top-left" />
          </div>
          <div className="absolute bottom-0 right-0 w-64 md:w-96 opacity-80 pointer-events-none mix-blend-multiply">
            <img src="/floral_corner.png" alt="" className="w-full h-auto rotate-180" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10 w-11/12 max-w-lg bg-[#FAF8F5] shadow-2xl p-10 md:p-14 flex flex-col items-center text-center"
          >
            {/* Corner Brackets */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-[1.5px] border-l-[1.5px] border-wedding-gold/60" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-[1.5px] border-r-[1.5px] border-wedding-gold/60" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-[1.5px] border-l-[1.5px] border-wedding-gold/60" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-wedding-gold/60" />

            <p className="font-cairo text-wedding-charcoal/60 mb-6 tracking-widest text-sm md:text-base uppercase">
              دعوة حفل زفاف
            </p>

            <h1 className="text-5xl md:text-6xl font-messiri text-wedding-charcoal mb-4 flex flex-col items-center gap-2">
              <span>محمد</span>
              <span className="text-wedding-gold font-ruqaa text-4xl">&</span>
              <span>شيماء</span>
            </h1>

            <button
              onClick={handleOpen}
              className="mt-10 px-8 py-4 bg-[#1a2130] text-wedding-gold hover:bg-[#111621] hover:shadow-xl hover:shadow-wedding-gold/20 transition-all duration-300 tracking-[0.2em] font-cairo text-xs md:text-sm uppercase flex items-center justify-center gap-3 w-full max-w-[240px]"
            >
              <MailOpen size={18} />
              <span>افتح الدعوة</span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpeningScreen;
