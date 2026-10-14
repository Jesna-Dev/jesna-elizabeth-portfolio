'use client';

import React from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  {
    number: '01',
    title: 'DISCOVER',
    subtitle: 'Research & Strategy',
    description: 'Understand the users, business objectives, technical constraints, and domain problems deeply through interviews and audits.'
  },
  {
    number: '02',
    title: 'DESIGN',
    subtitle: 'System & Architecture',
    description: 'Turn insights into fluid user flows, responsive design tokens, high-contrast UI layouts, and interactive spring prototypes.'
  },
  {
    number: '03',
    title: 'DELIVER',
    subtitle: 'Engineering & Polish',
    description: 'Build polished, scalable, developer-ready frontends with clean documentation, zero-latency micro-animations, and production code.'
  }
];

export default function Process() {
  return (
    <section className="w-full py-32 px-6 md:px-12 bg-neutral-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-3">
            // Methodology
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white uppercase">
            Design Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 rounded-2xl bg-neutral-900/50 border border-white/10 flex flex-col justify-between h-[360px] hover:border-white/30 transition-colors"
            >
              <div>
                <span className="text-sm font-mono text-[#F12020] block mb-4">
                  {step.number} — {step.subtitle}
                </span>
                <h3 className="text-3xl font-bold tracking-tight text-white mb-4">
                  {step.title}
                </h3>
              </div>

              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
