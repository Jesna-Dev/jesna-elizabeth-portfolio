'use client';

import React from 'react';

const ITEMS = [
  'Product Design',
  'Creative Technology',
  'AI Prototyping',
  'UI/UX Design',
  'Vibe Coding',
  'Design Systems',
  'Interaction Design',
];

export default function Marquee() {
  return (
    <section className="relative w-full py-5 md:py-6 bg-white text-black border-y border-neutral-200 overflow-hidden select-none z-20">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS].map((item, idx) => (
          <span
            key={idx}
            className="mx-8 sm:mx-12 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-black inline-flex items-center"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
