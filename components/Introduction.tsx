'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RoleContent {
  id: string;
  label: string;
  headline: string;
  body: string;
  tags: string[];
}

const ROLES: RoleContent[] = [
  {
    id: 'anyone',
    label: '— For anyone',
    headline: 'Creative digital experiences built with intention.',
    body: "I’m Jesna Elizabeth Jolly, a UI/UX Designer, Creative Technologist, and Vibe Coder who enjoys turning complex ideas into simple, meaningful digital experiences.",
    tags: ['UX/UI', 'Creative Tech', 'Vibe Coding', 'Interaction']
  },
  {
    id: 'recruiters',
    label: '— Recruiters',
    headline: 'Bridging high-fidelity design & production frontend engineering.',
    body: "I’m a UI/UX designer who bridges design and development, creating thoughtful digital experiences from research and wireframes to polished interfaces and production-ready builds.",
    tags: ['Full-stack UX', 'Figma to Code', 'Design Systems', 'Next.js']
  },
  {
    id: 'designers',
    label: '— Product Designers',
    headline: 'Crafting expressive motion & resilient visual tokens.',
    body: "I turn complex problems into clear, intuitive experiences through research, interaction design, prototyping, and scalable design systems.",
    tags: ['Design Tokens', 'Micro-interactions', 'Usability Audits', 'Prototyping']
  },
  {
    id: 'managers',
    label: '— Product Managers',
    headline: 'Aligning user empathy with business goals & rapid shipping.',
    body: "I connect user needs, business goals, and technical possibilities to create products that are useful, feasible, and ready to ship.",
    tags: ['User Journeys', 'Feasibility Studies', 'Feature Prioritization', 'Metrics']
  },
  {
    id: 'engineers',
    label: '— Engineers',
    headline: 'Clean component interfaces, zero-friction handoff & CSS kinetics.',
    body: "I speak both design and code — collaborating closely with developers and turning Figma concepts into responsive, production-ready interfaces.",
    tags: ['React/Next.js', 'Tailwind CSS', 'Framer Motion', 'Semantic HTML']
  }
];

export default function Introduction() {
  const [activeRole, setActiveRole] = useState<RoleContent>(ROLES[0]);

  return (
    <section id="about" className="w-full py-28 md:py-40 px-6 md:px-12 bg-[#0D0D0F] border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Role Selector Navigation (approx 30%) */}
        <div className="lg:col-span-4 space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#A0A0A5] block mb-3">
              // A little about how I work
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F5F5] uppercase">
              Intro
            </h2>
          </div>

          {/* Interactive Role Buttons */}
          <nav className="flex flex-col gap-3">
            {ROLES.map((role) => {
              const isActive = activeRole.id === role.id;
              return (
                <button
                  key={role.id}
                  onMouseEnter={() => setActiveRole(role)}
                  onClick={() => setActiveRole(role)}
                  className="group flex items-center text-left py-2 focus:outline-none transition-all duration-300"
                >
                  {/* Dynamic Line Indicator */}
                  <span
                    className={`h-[1.5px] rounded-full transition-all duration-300 mr-3 ${
                      isActive ? 'w-8 bg-white' : 'w-4 bg-white/20 group-hover:w-6 group-hover:bg-white/50'
                    }`}
                  />

                  {/* Role Label */}
                  <span
                    className={`text-[#A0A0A5] transition-all duration-300 ${
                      isActive
                        ? 'text-white scale-105 translate-x-1 font-semibold text-lg sm:text-xl'
                        : 'text-[#A0A0A5] hover:text-[#F5F5F5] text-base sm:text-lg'
                    }`}
                  >
                    {role.label.replace('— ', '')}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right Column: Dynamic Digital Note/Card Panel (approx 70%) */}
        <div className="lg:col-span-8 relative">
          <div className="relative bg-[#141417]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 md:p-14 overflow-hidden shadow-2xl min-h-[380px] sm:min-h-[420px] flex flex-col justify-between">
            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 subtle-noise opacity-30 pointer-events-none" />

            {/* Subtle Folded Corner Effect (Top Right) */}
            <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none">
              <div className="w-0 h-0 border-t-[48px] border-t-[#0D0D0F] border-l-[48px] border-l-transparent drop-shadow-md" />
              <div className="absolute top-0 right-0 w-12 h-12 border-b border-l border-white/15 bg-white/5 rounded-bl-xl" />
            </div>

            {/* Dynamic Content Container */}
            <div className="z-10 relative space-y-6 my-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRole.id}
                  initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -15, filter: 'blur(6px)' }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6"
                >
                  <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#F12020] bg-[#F12020]/10 border border-[#F12020]/20 px-3 py-1 rounded-full">
                    Audience // {activeRole.label.replace('— ', '')}
                  </span>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-[#F5F5F5] leading-snug tracking-tight">
                    {activeRole.headline}
                  </h3>

                  <p className="text-sm sm:text-base text-[#A0A0A5] font-normal leading-relaxed max-w-2xl">
                    {activeRole.body}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {activeRole.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-neutral-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Panel Bottom Footer & Decorative Element */}
            <div className="z-10 pt-8 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#A0A0A5]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F12020] animate-pulse" />
                <span>Interactive Context Note</span>
              </div>
              <span className="text-white/40">Jesna Elizabeth Jolly // 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
