'use client';

import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '@/data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Magnetic from './Magnetic';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const t = TESTIMONIALS[currentIndex];

  return (
    <section className="w-full py-32 px-6 md:px-12 bg-neutral-950 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-8">
          // Endorsements
        </span>

        <div className="relative min-h-[260px] flex flex-col justify-between">
          <Quote className="w-12 h-12 text-white/10 mb-6" />

          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-relaxed italic">
                “{t.quote}”
              </p>

              <div>
                <h4 className="text-lg font-bold text-white tracking-tight">{t.author}</h4>
                <p className="text-xs font-mono text-neutral-400">
                  {t.role} — <span className="text-emerald-400">{t.company}</span>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-12 border-t border-white/10 mt-8">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-neutral-700'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Magnetic>
                <button
                  onClick={() =>
                    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))
                  }
                  className="p-3 rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </Magnetic>
              <Magnetic>
                <button
                  onClick={() => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)}
                  className="p-3 rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
