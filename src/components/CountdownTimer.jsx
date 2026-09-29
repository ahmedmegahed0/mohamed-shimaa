import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    // Target date: October 4, 2026
    const targetDate = new Date('2026-10-04T00:00:00');
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeUnits = [
    { label: 'يوم', value: timeLeft.days },
    { label: 'ساعة', value: timeLeft.hours },
    { label: 'دقيقة', value: timeLeft.minutes },
    { label: 'ثانية', value: timeLeft.seconds },
  ];

  return (
    <section className="py-24 px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="mb-16">
          <p className="text-base md:text-xl font-cairo text-wedding-gold-dark mb-4 flex items-center justify-center gap-3 tracking-widest font-semibold">
            <span>✦</span> بنعد الأيام <span>✦</span>
          </p>
          <h2 className="text-7xl md:text-8xl font-messiri text-wedding-gold-dark mb-8 drop-shadow-[0_2px_4px_rgba(212,175,55,0.3)]">
            هانت خلاص
          </h2>
          <div className="w-32 h-[1.5px] bg-gradient-to-r from-transparent via-wedding-gold/60 to-transparent mx-auto mb-6" />
          <p className="text-2xl md:text-3xl font-ruqaa text-wedding-charcoal/80 mt-6">
            لحد ما تبدأ أجمل ليلة في عمرنا
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-10" dir="ltr">
          {timeUnits.map((unit, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-wedding-gold/40 flex items-center justify-center bg-white/60 backdrop-blur-md shadow-xl shadow-wedding-gold/10 mb-4 hover:scale-105 transition-transform duration-300">
                <span className="text-3xl md:text-4xl font-messiri font-bold text-wedding-gold-dark">
                  {String(unit.value).padStart(2, '0')}
                </span>
              </div>
              <span className="text-lg md:text-xl font-cairo text-wedding-charcoal/80 font-medium">{unit.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CountdownTimer;
