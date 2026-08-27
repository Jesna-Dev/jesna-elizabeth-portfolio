'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const TITLES = [
  'Jesna Elizabeth Jolly',
  'UI/UX Designer',
  'Creative Technologist',
  'Vibe Coder'
];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Typewriter character-by-character effect with custom timings
  useEffect(() => {
    const currentTitle = TITLES[textIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < currentTitle.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      }, 85);
    } else if (!isDeleting && displayText.length === currentTitle.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length - 1));
      }, 45);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  // Subtle mouse-following glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-between pt-36 pb-12 px-6 overflow-hidden bg-[#0D0D0F] subtle-noise select-none">
      {/* Soft Ambient Mouse-Following Radial Glow */}
      <div
        className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[150px] transition-transform duration-700 ease-out"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.045) 0%, rgba(255, 255, 255, 0) 70%)',
        }}
      />

      <div className="my-auto z-10 w-full max-w-6xl text-center flex flex-col items-center justify-center">
        {/* Small Logo Mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8 relative"
        >
          <div className="relative w-12 h-12">
            <Image
              src="/ek-logo-mark.png"
              alt="EK Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* Subtle glow behind logo */}
          <div className="absolute inset-0 w-12 h-12 rounded-full bg-white/5 blur-xl -z-10" />
        </motion.div>

        {/* Editorial Typewriter Identity Headline */}
        <div className="min-h-[140px] sm:min-h-[180px] md:min-h-[220px] flex items-center justify-center px-4 w-full overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[8vw] sm:text-[6.5vw] md:text-[5.5vw] lg:text-[75px] xl:text-[90px] font-medium tracking-tight text-[#F5F5F5] leading-none inline-flex items-center justify-center whitespace-nowrap max-w-full"
          >
            <span>{displayText}</span>
            <span className="animate-cursor inline-block w-[3px] md:w-[4px] h-[0.85em] bg-[#F5F5F5] ml-2 shrink-0" />
          </motion.h1>
        </div>

        {/* Subtitle Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 sm:mt-10 max-w-2xl text-center text-sm sm:text-base text-[#A0A0A5] font-normal leading-relaxed tracking-normal"
        >
          Experienced UI/UX designer blending creativity, technology, and code to build thoughtful digital experiences.
        </motion.p>
      </div>

      {/* Subtle Minimal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="z-10 flex flex-col items-center gap-2 text-[10px] font-mono text-[#A0A0A5] tracking-[0.3em] uppercase"
      >
        <span>SCROLL</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 32, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
