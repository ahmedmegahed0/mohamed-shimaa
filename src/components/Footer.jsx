import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 text-center border-t border-wedding-gold/20 relative">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-wedding-gold to-transparent opacity-50" />
      
      <p className="text-2xl font-messiri text-wedding-charcoal mb-4">
        محمد <Heart size={20} className="inline-block mx-2 text-wedding-gold fill-current" /> شيماء
      </p>
      
      <p className="text-lg font-cairo text-wedding-charcoal/70 mb-8">
        بانتظاركم لنكتمل بكم فرحتنا
      </p>

      <p className="text-sm font-cairo text-wedding-charcoal/40">
        صُنع بحب © 2026
      </p>
    </footer>
  );
};

export default Footer;
