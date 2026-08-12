'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PLAYGROUND_ITEMS, PlaygroundItem } from '@/data/projects';
import { Sparkles, Terminal } from 'lucide-react';

export default function Playground() {
  return (
    <section id="playground" className="w-full py-32 px-6 md:px-12 bg-neutral-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-3">
              // Experimental Motion & Code
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white uppercase">
              Playground
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-neutral-400 font-light">
            Small experiments, prototypes, spatial soundscapes, and interactive concepts built out of pure curiosity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PLAYGROUND_ITEMS.map((item) => (
            <PlaygroundCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlaygroundCard({ item }: { item: PlaygroundItem }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePos({ x: x * 0.15, y: y * 0.15 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      data-cursor={item.link ? 'VISIT ↗' : 'DRAG ↔'}
      className="group relative rounded-2xl border border-white/10 bg-neutral-900/60 p-6 flex flex-col justify-between h-[340px] overflow-hidden hover:border-white/30 transition-all duration-300 shadow-xl"
    >
      {/* Whole card links out when the experiment has a live URL */}
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${item.title} in a new tab`}
          className="absolute inset-0 z-20"
        />
      )}

      {/* Background Interactive Ambient Motion */}
      <motion.div
        animate={{
          x: item.interactionType === 'shift' && isHovered ? mousePos.x * 2 : 0,
          y: item.interactionType === 'shift' && isHovered ? mousePos.y * 2 : 0,
          rotate: item.interactionType === 'rotate' && isHovered ? 12 : 0,
          scale: item.interactionType === 'zoom' && isHovered ? 1.15 : 1,
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 15 }}
        className="absolute inset-0 p-6 flex items-center justify-center pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity"
      >
        <div
          className="w-44 h-44 rounded-full blur-2xl opacity-50"
          style={{ backgroundColor: item.accentColor }}
        />
        <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-neutral-500">
          <Terminal className="w-16 h-16 text-white/10 group-hover:text-white/20 transition-colors" />
        </div>
      </motion.div>

      {/* Card Header */}
      <div className="flex justify-between items-start z-10">
        <span className="text-xs font-mono text-neutral-500">{item.number}</span>
        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
          <Sparkles className="w-3 h-3 text-amber-400" />
          {item.category}
        </span>
      </div>

      {/* Card Content */}
      <div className="z-10 space-y-2">
        <h3 className="text-2xl font-bold tracking-tight text-white group-hover:translate-x-2 transition-transform">
          {item.title}
        </h3>
        <p className="text-xs text-neutral-400 font-light leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Bottom Footer */}
      <div className="z-10 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
        <span>Interaction: {item.interactionType}</span>
        {item.status && !item.link ? (
          <span className="inline-flex items-center gap-2 text-amber-400">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            {item.status}
          </span>
        ) : (
          <span className="text-white group-hover:text-emerald-400 transition-colors">
            {item.link ? 'Visit Site ↗' : 'View Demo ↗'}
          </span>
        )}
      </div>
    </motion.div>
  );
}
