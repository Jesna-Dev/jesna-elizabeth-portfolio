'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="w-full py-32 px-6 md:px-12 bg-neutral-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column Heading */}
        <div className="lg:col-span-5 space-y-6">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-widest text-neutral-500 block"
          >
            // Background & Vision
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight uppercase"
          >
            Designer. <br />
            Builder. <br />
            Problem Solver.
          </motion.h2>
        </div>

        {/* Right Column Narrative */}
        <div className="lg:col-span-7 space-y-8 text-neutral-300 text-lg md:text-xl font-light leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            My journey began in frontend engineering, crafting pixel-perfect web interfaces and dissecting DOM interactions. However, I soon realized that code without deep user understanding is only half the equation.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Transitioning full-time into UI/UX and product design allowed me to synthesize quantitative analytical rigor with expressive typography, spatial motion, and structured design systems. Today, I build scalable digital experiences that look elevated and feel physical.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 text-xs font-mono uppercase tracking-wider text-neutral-400"
          >
            <div>
              <span className="text-white font-bold block mb-1">01. Research</span>
              Usability Testing & Journey Maps
            </div>
            <div>
              <span className="text-white font-bold block mb-1">02. Design</span>
              Figma Systems & Micro-Motion
            </div>
            <div>
              <span className="text-white font-bold block mb-1">03. Code</span>
              Next.js, React, & CSS Kinetics
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
