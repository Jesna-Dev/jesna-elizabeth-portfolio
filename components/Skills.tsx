'use client';

import React, { useState } from 'react';
import { SKILLS, SkillItem } from '@/data/projects';
import { motion, AnimatePresence } from 'framer-motion';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);

  return (
    <section className="w-full py-32 px-6 md:px-12 bg-neutral-950 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-3">
            // Toolkit & Capabilities
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white uppercase">
            Tools & Skills
          </h2>
        </div>

        {/* Interactive Typography Wall */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          {SKILLS.map((skill) => (
            <button
              key={skill.name}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-500 hover:text-white transition-colors duration-200 focus:outline-none"
            >
              <span className="hover:scale-105 inline-block transition-transform">
                {skill.name}
              </span>
              <span className="ml-6 text-neutral-800 font-normal">/</span>
            </button>
          ))}
        </div>

        {/* Floating Visual Skill Preview Tooltip Card */}
        <AnimatePresence>
          {hoveredSkill && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="mt-12 p-6 rounded-2xl bg-neutral-900 border border-white/20 max-w-md shadow-2xl flex items-start gap-4"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold font-mono text-lg shrink-0 shadow-lg"
                style={{ backgroundColor: hoveredSkill.color }}
              >
                {hoveredSkill.name.substring(0, 2).toUpperCase()}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-lg font-bold text-white">{hoveredSkill.name}</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-neutral-300">
                    {hoveredSkill.category}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mt-1 font-light leading-relaxed">
                  {hoveredSkill.description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
