import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin } from 'lucide-react';

const EventDetails = () => {
  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4 opacity-70">
            <div className="w-12 h-[1px] bg-wedding-gold" />
            <span className="w-2 h-2 rounded-full bg-wedding-gold rotate-45" />
            <div className="w-12 h-[1px] bg-wedding-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-messiri text-wedding-charcoal">
            تفاصيل الحفل
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Date Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center bg-white/70 backdrop-blur-md border border-white rounded-[3rem] p-10 md:p-14 shadow-2xl shadow-wedding-gold/10 relative overflow-hidden group hover:bg-white/90 transition-colors duration-500"
          >
            {/* Top Corner Accents */}
            <div className="absolute top-6 left-6 w-8 h-8 border-t-[1.5px] border-l-[1.5px] border-wedding-gold/40" />
            <div className="absolute top-6 right-6 w-8 h-8 border-t-[1.5px] border-r-[1.5px] border-wedding-gold/40" />
            
            <div className="w-20 h-20 rounded-full bg-wedding-gold/5 flex items-center justify-center mb-8 text-wedding-gold-dark group-hover:scale-110 transition-transform duration-500 border border-wedding-gold/20">
              <CalendarDays size={36} strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl font-messiri text-wedding-charcoal mb-4">موعد الزفاف</h3>
            <p className="text-xl font-cairo text-wedding-charcoal/80 mb-2">الأحد، 4 أكتوبر 2026</p>
            <p className="text-lg font-cairo text-wedding-charcoal/60 mb-10">الساعة الثامنة مساءً</p>
            
            <a 
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=زفاف+محمد+وشيماء&dates=20261004T170000Z/20261004T210000Z&details=فرحتنا+مش+هتكمل+غير+بوجودكم&location=قاعة+ميره+لاند+-+الحامول" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-auto px-8 py-3.5 bg-[#1a2130] text-wedding-gold rounded-full font-cairo text-sm tracking-wide uppercase hover:bg-[#111621] hover:shadow-xl hover:shadow-[#1a2130]/20 transition-all duration-300 w-full max-w-[240px]"
            >
              إضافة إلى التقويم
            </a>
          </motion.div>

          {/* Venue Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center text-center bg-white/70 backdrop-blur-md border border-white rounded-[3rem] p-10 md:p-14 shadow-2xl shadow-wedding-gold/10 relative overflow-hidden group hover:bg-white/90 transition-colors duration-500"
          >
            {/* Top Corner Accents */}
            <div className="absolute top-6 left-6 w-8 h-8 border-t-[1.5px] border-l-[1.5px] border-wedding-gold/40" />
            <div className="absolute top-6 right-6 w-8 h-8 border-t-[1.5px] border-r-[1.5px] border-wedding-gold/40" />
            
            <div className="w-20 h-20 rounded-full bg-wedding-gold/5 flex items-center justify-center mb-8 text-wedding-gold-dark group-hover:scale-110 transition-transform duration-500 border border-wedding-gold/20">
              <MapPin size={36} strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl font-messiri text-wedding-charcoal mb-4">مكان الحفل</h3>
            <p className="text-xl font-cairo text-wedding-charcoal/80 mb-2">قاعة ميره لاند</p>
            <p className="text-lg font-cairo text-wedding-charcoal/60 mb-10">الحامول - المنوفية</p>
            
            <a 
              href="https://maps.google.com/?q=قاعة+ميره+لاند+الحامول+المنوفية" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-auto px-8 py-3.5 bg-[#1a2130] text-wedding-gold rounded-full font-cairo text-sm tracking-wide uppercase hover:bg-[#111621] hover:shadow-xl hover:shadow-[#1a2130]/20 transition-all duration-300 w-full max-w-[240px]"
            >
              الموقع على الخريطة
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EventDetails;
