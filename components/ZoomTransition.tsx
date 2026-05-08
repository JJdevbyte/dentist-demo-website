"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function ZoomTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scale from 1 to 100 as we scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-primary">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Industrial Text */}
        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center opacity-5">
            <h2 className="text-white text-[20vw] font-serif font-black select-none tracking-tighter">ELITE</h2>
        </div>

        {/* The zooming element */}
        <motion.div
          style={{ scale }}
          className="relative w-40 h-40 bg-background rounded-sm flex items-center justify-center shadow-[0_0_100px_rgba(0,0,0,0.5)] z-10 overflow-hidden"
        >
          {/* Subtle Grain Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          
          <motion.div style={{ opacity }} className="text-primary text-center px-4 flex flex-col items-center gap-2">
            <div className="w-8 h-[1px] bg-accent mb-2" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Precision</span>
          </motion.div>
        </motion.div>

        {/* Reveal Overlay (Industrial Lines) */}
        <div className="absolute inset-0 z-5 pointer-events-none opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full bg-white" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-white" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-white" />
        </div>
      </div>
    </div>
  );
}
