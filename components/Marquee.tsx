'use client';

import React from 'react';

const ITEMS = [
  'PRODUCT DESIGN',
  '✳',
  'UX/UI DESIGN',
  '✳',
  'CREATIVE TECHNOLOGY',
  '✳',
  'WEB DESIGN',
  '✳',
  'DESIGN SYSTEMS',
  '✳',
  'PROTOTYPING',
  '✳',
  'SPATIAL INTERACTION',
  '✳',
];

export default function Marquee() {
  return (
    <section
      data-cursor="SWIPE"
      className="relative w-full py-8 bg-neutral-900 border-y border-white/10 overflow-hidden select-none"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {[...ITEMS, ...ITEMS, ...ITEMS].map((item, idx) => (
          <span
            key={idx}
            className={`mx-4 text-2xl md:text-4xl font-mono tracking-wider ${
              item === '✳' ? 'text-emerald-400 font-normal' : 'text-neutral-300 font-bold uppercase'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
