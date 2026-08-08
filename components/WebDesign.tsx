'use client';

import React from 'react';
import { WEB_DESIGN_PROJECTS } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';

export default function WebDesign() {
  return (
    <section className="w-full py-32 px-6 md:px-12 bg-neutral-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-3">
              // Web Architecture & Editorial Surfaces
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white uppercase">
              Web Design
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-neutral-400 font-light">
            Digital surfaces designed to make brands clearer, more useful, and unforgettable across every viewport.
          </p>
        </div>

        <div className="space-y-4">
          {WEB_DESIGN_PROJECTS.map((item) => (
            <a
              key={item.id}
              href={item.link}
              data-cursor="EXPLORE ↗"
              className="group block w-full bg-neutral-900/40 border border-white/10 hover:border-white/30 rounded-2xl p-8 transition-all duration-300 hover:bg-neutral-900"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <span className="text-xs font-mono text-neutral-500">{item.year}</span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white group-hover:translate-x-3 transition-transform">
                    {item.name}
                  </h3>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-8">
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
