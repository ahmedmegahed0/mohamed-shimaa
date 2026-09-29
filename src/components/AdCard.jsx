import React from 'react';
import { motion } from 'framer-motion';

const AdCard = () => {
  return (
    <section className="py-8 px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto bg-white/90 backdrop-blur-md border border-white rounded-[2rem] p-6 md:p-8 shadow-xl shadow-wedding-gold/10 text-center"
      >
        <h3 className="text-xl md:text-2xl font-messiri text-wedding-gold-dark mb-3 flex items-center justify-center gap-2">
          اعمل دعوة فرحك زيهم <span>✨</span>
        </h3>
        
        <p className="text-sm md:text-base font-cairo text-wedding-charcoal/80 mb-5 leading-relaxed max-w-md mx-auto">
          لو عجبك التصميم وعايز تعمل إنفيتيشن زي دي لخطوبتك، فرحك، أو أي مناسبة، تواصل معنا:
        </p>
        
        <a 
          href="tel:01067688524" 
          className="block text-xl md:text-2xl font-bold font-cairo text-wedding-gold-dark hover:text-wedding-charcoal transition-colors duration-300 mb-6 flex flex-row justify-center items-center gap-2"
        >
          <span className="font-messiri font-normal text-wedding-charcoal">Ahmed Megahed</span> 
          <span dir="ltr" className="inline-block mt-1">01067688524</span>
        </a>
        
        <hr className="border-t border-dashed border-gray-200 w-2/3 mx-auto mb-6" />
        
        <div className="flex items-center justify-center gap-8 font-cairo text-base text-wedding-gold-dark">
          <a 
            href="https://www.tiktok.com/@wed.craft?_r=1&_t=ZS-98LpvLW49nJ" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-wedding-charcoal transition-colors duration-300"
          >
            تيك توك
          </a>
          <a 
            href="https://www.instagram.com/wedcraft_eg/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-wedding-charcoal transition-colors duration-300"
          >
            إنستجرام
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default AdCard;
