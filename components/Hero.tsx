"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center bg-primary">
      {/* Background Video - Increased visibility */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-poster.png"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      >
        <source src="/dentist_video_compress.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Cinematic Blend Overlay - Refined for visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent z-10 backdrop-blur-[2px]" />
      
      {/* Texture Overlay (Grain) to unify visual */}
      <div className="absolute inset-0 z-15 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Content - Asymmetrical Layout */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          <div className="bg-primary/20 backdrop-blur-md p-8 -ml-8 rounded-sm border-l border-accent/30">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
            >
              Elite Dental Standards
            </motion.span>
            <h1 className="font-serif text-6xl md:text-8xl text-white mb-8 leading-[1.1] tracking-tight">
              The Future of <br />
              <span className="text-neutral italic">Advanced</span> Oral Care
            </h1>
            <p className="font-sans text-lg md:text-xl text-neutral mb-10 max-w-xl leading-relaxed">
              Where industrial precision meets luxury comfort. Experience world-class dental treatments powered by state-of-the-art diagnostic technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={onBookClick}
                whileHover={{ scale: 1.02, backgroundColor: "#d97046" }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 bg-accent text-white px-10 py-5 rounded-sm text-lg font-bold transition-all shadow-2xl"
              >
                <Calendar className="w-5 h-5" />
                Book Consultation
              </motion.button>
              
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white border-b border-white/20 px-4 py-5 text-lg font-medium hover:border-accent transition-all group"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:text-accent" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Floating Glassmorphic Metric Card - The Differentiation Anchor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hidden lg:flex lg:col-span-5 justify-end"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-sm shadow-2xl relative">
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-accent" />
            <div className="space-y-8">
              <div>
                <div className="text-accent text-4xl font-serif mb-1">99.8%</div>
                <div className="text-neutral/60 text-xs tracking-widest uppercase font-bold">Patient Satisfaction</div>
              </div>
              <div className="h-px bg-white/10 w-full" />
              <div>
                <div className="text-white text-4xl font-serif mb-1">15k+</div>
                <div className="text-neutral/60 text-xs tracking-widest uppercase font-bold">Successful Procedures</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Industrial Style */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-[10px] text-neutral/40 tracking-[0.4em] uppercase font-bold rotate-90 mb-8">Scroll</span>
          <div className="w-[1px] h-24 bg-gradient-to-b from-accent to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
