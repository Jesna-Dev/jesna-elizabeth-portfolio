'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Sparkles } from 'lucide-react';
import Magnetic from './Magnetic';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 overflow-hidden bg-neutral-950 noise-bg">
      {/* Background Subtle Floating Parallax Layers */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-violet-600/10 via-emerald-500/10 to-transparent rounded-full blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      />
      <motion.div
        className="absolute bottom-1/3 right-10 w-[300px] h-[300px] bg-rose-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x * -12,
          y: mousePosition.y * -12,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      />

      <div className="max-w-7xl mx-auto w-full my-auto z-10 flex flex-col justify-center">
        {/* Subtitle & Role Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            UI/UX Designer
          </span>
          <span className="text-neutral-600">•</span>
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
            Product Designer
          </span>
          <span className="text-neutral-600">•</span>
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
            Creative Technologist
          </span>
        </motion.div>

        {/* Dramatic Oversized Name Typography */}
        <div className="relative font-bold tracking-tighter uppercase text-white select-none">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            style={{
              transform: `translate3d(${mousePosition.x * 3}px, ${mousePosition.y * 3}px, 0)`,
            }}
            className="text-[13vw] sm:text-[12vw] lg:text-[10vw] leading-[0.85]"
          >
            JESNA
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            style={{
              transform: `translate3d(${mousePosition.x * 6}px, ${mousePosition.y * 6}px, 0)`,
            }}
            className="text-[13vw] sm:text-[12vw] lg:text-[10vw] leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-600"
          >
            ELIZABETH
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            style={{
              transform: `translate3d(${mousePosition.x * 12}px, ${mousePosition.y * 12}px, 0)`,
            }}
            className="text-[13vw] sm:text-[12vw] lg:text-[10vw] leading-[0.85]"
          >
            JOLLY
          </motion.div>
        </div>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 max-w-2xl text-lg md:text-2xl text-neutral-400 font-light leading-relaxed"
        >
          I design digital experiences where thoughtful UX meets expressive visual systems and technology.
        </motion.p>
      </div>

      {/* Hero Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="max-w-7xl mx-auto w-full z-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-neutral-400 uppercase tracking-wider"
      >
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-emerald-400" />
          <span>Based in Kerala, India</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Available for selected projects</span>
        </div>

        <Magnetic>
          <a
            href="#work"
            className="flex items-center gap-2 text-white hover:text-neutral-400 transition-colors py-1 group"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
        </Magnetic>
      </motion.div>
    </section>
  );
}
