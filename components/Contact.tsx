'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import Magnetic from './Magnetic';
import { SOCIAL_LINKS, EMAIL } from '@/data/social';

export default function Contact() {
  return (
    <section id="contact" className="w-full py-32 px-6 md:px-12 bg-neutral-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col justify-between items-start space-y-16">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-4">
            // Start a Conversation
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white uppercase leading-[0.9]">
            Have an idea? <br />
            <span className="text-neutral-500 hover:text-white transition-colors duration-500">
              Let&apos;s make it happen.
            </span>
          </h2>
        </div>

        {/* CTA Actions Bar */}
        <div className="flex flex-wrap items-center gap-4">
          <Magnetic>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-3 px-8 py-5 rounded-full bg-white text-black font-semibold text-lg hover:bg-neutral-200 transition-colors shadow-2xl group"
            >
              <Mail className="w-5 h-5 text-black" />
              <span>Start a conversation</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </Magnetic>

          {SOCIAL_LINKS.filter((social) => social.id !== 'email').map((social) => (
            <Magnetic key={social.id}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-5 rounded-full bg-white/5 border border-white/15 text-white font-medium hover:bg-white/10 transition-colors"
              >
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
                  {social.glyph}
                </span>
                <span>{social.label}</span>
              </a>
            </Magnetic>
          ))}
        </div>

        {/* Status Line */}
        <div className="pt-8 border-t border-white/10 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-neutral-400 uppercase tracking-widest">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance & full-time opportunities
          </span>
          <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">
            Primary Email: {EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
