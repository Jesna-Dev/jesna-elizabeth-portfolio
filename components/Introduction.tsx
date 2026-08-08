'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Introduction() {
  return (
    <section className="relative w-full py-28 md:py-40 px-6 md:px-12 bg-neutral-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 justify-between items-start">
        {/* Left Column: Targeted Audience Tag */}
        <div className="w-full md:w-1/4">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-4"
          >
            // Statement
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs font-mono text-neutral-400 space-y-2 uppercase tracking-wider border-l border-white/20 pl-4"
          >
            <p className="text-white font-semibold">For:</p>
            <p className="hover:text-white transition-colors">• Recruiters</p>
            <p className="hover:text-white transition-colors">• Founders</p>
            <p className="hover:text-white transition-colors">• Product Teams</p>
            <p className="hover:text-white transition-colors">• Creative Teams</p>
          </motion.div>
        </div>

        {/* Right Column: Oversized Editorial Statement */}
        <div className="w-full md:w-3/4 space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl font-light text-white leading-tight tracking-tight"
          >
            I turn complex ideas into <span className="font-normal italic text-neutral-300">simple</span>, <span className="font-normal italic text-neutral-300">useful</span> and <span className="font-normal italic text-neutral-300">memorable</span> digital experiences.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-3xl"
          >
            Combining structural clarity with expressive motion, my work bridges the gap between deep user empathy, modern engineering capabilities, and distinctive visual identities. Whether launching early-stage products or refining enterprise ecosystems, I design for human impact.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
