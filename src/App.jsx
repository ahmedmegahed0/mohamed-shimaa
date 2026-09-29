import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Music, Pause } from 'lucide-react';
import OpeningScreen from './components/OpeningScreen';
import HeroSection from './components/HeroSection';
import EventDetails from './components/EventDetails';
import CountdownTimer from './components/CountdownTimer';
import RSVPForm from './components/RSVPForm';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import StorySection from './components/StorySection';
import AdCard from './components/AdCard';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleOpen = () => {
    setIsOpened(true);
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log("Audio autoplay prevented:", err);
      });
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-wedding-bg font-amiri text-wedding-charcoal selection:bg-wedding-gold selection:text-white relative overflow-hidden">
      
      {/* Dynamic Ambient Background Effects */}
      <BackgroundEffects />

      {/* Background Floral Decorations */}
      <div className="absolute top-0 left-0 w-64 md:w-96 opacity-70 pointer-events-none z-0 mix-blend-multiply">
        <img src="/floral_corner.png" alt="" className="w-full h-auto -scale-x-100 origin-top-left" />
      </div>
      <div className="fixed bottom-0 right-0 w-64 md:w-96 opacity-70 pointer-events-none z-0 mix-blend-multiply">
        <img src="/floral_corner.png" alt="" className="w-full h-auto rotate-180" />
      </div>
      <div className="hidden md:block fixed top-1/3 right-0 w-48 md:w-72 opacity-60 pointer-events-none z-0 mix-blend-multiply translate-x-1/2">
        <img src="/floral_side.png" alt="" className="w-full h-auto" />
      </div>
      <div className="hidden md:block fixed top-2/3 left-0 w-48 md:w-72 opacity-60 pointer-events-none z-0 mix-blend-multiply -translate-x-1/2 -scale-x-100">
        <img src="/floral_side.png" alt="" className="w-full h-auto" />
      </div>

      <div className="relative z-10">
        
        {/* Global Audio Element */}
        <audio ref={audioRef} loop>
          <source src="/music.mp3" type="audio/mpeg" />
        </audio>

        {/* Global Music Toggle */}
        {isOpened && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            onClick={toggleMusic}
            className="fixed bottom-6 right-6 z-50 p-4 bg-[#1a2130] text-wedding-gold rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
            aria-label="Toggle Background Music"
          >
            {isPlaying ? <Pause size={20} /> : <Music size={20} />}
          </motion.button>
        )}

        <OpeningScreen onOpen={handleOpen} />

        {isOpened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <HeroSection />
            <StorySection />
            <EventDetails />
            <CountdownTimer />
            <RSVPForm />
            <Footer />
            <AdCard />
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default App;
