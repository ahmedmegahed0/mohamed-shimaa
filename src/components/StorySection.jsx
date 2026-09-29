import React from 'react';
import { motion } from 'framer-motion';

const StorySection = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center px-4 py-24 z-10">
      
      {/* Top Quote */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="max-w-2xl mx-auto mb-12 px-4"
      >
        <p className="text-2xl md:text-4xl font-ruqaa text-wedding-charcoal leading-loose">
          "تتلاقى الأرواح لتصنع قدراً جميلاً، وتتشابك الأيدي لتمضي في دروب الحياة معاً..."
        </p>
      </motion.div>

      {/* Main Image in an elegant frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        className="relative mb-12"
      >
        {/* Decorative background border */}
        <div className="absolute -inset-4 border border-wedding-gold/40 rounded-t-full rounded-b-3xl transform rotate-3 scale-105 opacity-50" />
        <div className="absolute -inset-4 border border-wedding-gold/40 rounded-t-full rounded-b-3xl transform -rotate-3 scale-105 opacity-50" />
        
        {/* The Image Container - Arched Window Style */}
        <div className="relative w-64 h-80 md:w-80 md:h-[26rem] rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl shadow-wedding-gold/20 border-4 border-white">
          {/* We use logo.jpeg as requested */}
          <img 
            src="/src/assets/logo.jpeg" 
            alt="العروسين" 
            className="w-full h-full object-cover"
          />
          
          {/* Soft inner shadow/overlay for elegance */}
          <div className="absolute inset-0 bg-gradient-to-t from-wedding-charcoal/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* Bottom Quote */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
        className="max-w-xl mx-auto px-4"
      >
        <p className="text-lg md:text-xl font-cairo text-wedding-charcoal/80 leading-relaxed italic">
          بكم تكتمل فرحتنا، وبحضوركم تزدان ليالينا. أنتم جزء من أجمل حكاياتنا، ونتشرف بمشاركتكم لنا هذه اللحظات.
        </p>
      </motion.div>

    </section>
  );
};

export default StorySection;
