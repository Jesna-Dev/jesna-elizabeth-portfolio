'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { EMAIL, SOCIAL_LINKS, isExternalSocial } from '@/data/social';

const RED = '#F12020';

// Display words the hero cycles through, each broken into staggered rows.
// `indent` is in em so the stagger scales with the type; the third row carries
// the red accent square. `scale` shrinks the five-row word to the same height
// as the four-row ones so the layout never jumps between words.
type Row = { text: string; indent: number; accent?: boolean };

const WORDS: { id: string; scale: number; rows: Row[] }[] = [
  {
    id: 'designer',
    scale: 1,
    rows: [
      { text: 'DE', indent: 0 },
      { text: 'SIG', indent: 0.5 },
      { text: 'N', indent: 1.35, accent: true },
      { text: 'ER', indent: 1.35 },
    ],
  },
  {
    id: 'vibe-coder',
    scale: 1,
    rows: [
      { text: 'VI', indent: 0 },
      { text: 'BE', indent: 0.5 },
      { text: 'CO', indent: 1.35, accent: true },
      { text: 'DER', indent: 1.35 },
    ],
  },
  {
    id: 'creative-technologist',
    scale: 0.8,
    rows: [
      { text: 'CREA', indent: 0 },
      { text: 'TIVE', indent: 0.5 },
      { text: 'TECH', indent: 1, accent: true },
      { text: 'NOLO', indent: 1 },
      { text: 'GIST', indent: 1 },
    ],
  },
];

/** How long each word stays on screen, in ms. */
const WORD_DURATION = 3200;
const ROW_EASE = [0.16, 1, 0.3, 1] as const;

const fadeIn = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1, delay },
});

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(
      () => setWordIndex((i) => (i + 1) % WORDS.length),
      WORD_DURATION
    );
    return () => clearInterval(timer);
  }, []);
  const word = WORDS[wordIndex];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0D0D0F] select-none">
      {/* Portrait, faded into the page on its left edge (bottom edge on phones) */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        className="pointer-events-none absolute inset-0 md:left-auto md:w-[58%] [mask-image:linear-gradient(to_bottom,black_45%,transparent_90%)] md:[mask-image:linear-gradient(to_right,transparent,black_35%)]"
      >
        <Image
          src="/hero-portrait.jpg"
          alt=""
          fill
          preload
          sizes="(min-width: 768px) 58vw, 100vw"
          className="object-cover object-[60%_center] grayscale brightness-[0.85] contrast-[1.05]"
        />
      </motion.div>

      <h1 className="sr-only">Jesna Elizabeth Jolly — UI/UX Designer, Vibe Coder & Creative Technologist</h1>

      <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-8 flex flex-col">
        <div className="flex-1 flex items-end md:items-center gap-10">
          {/* Left column: call to action and contact details */}
          <motion.div
            {...fadeIn(0.8)}
            className="hidden md:flex flex-col gap-6 w-52 shrink-0 text-[11px] font-mono uppercase tracking-widest"
          >
            <a href="#contact" className="inline-flex items-center gap-2 text-[#F5F5F5] hover:text-white">
              <span style={{ color: RED }}>▸</span> Hire me
            </a>
            <div className="space-y-1">
              <span className="block text-[#75757C]">Based in</span>
              <span className="block text-[#F5F5F5] normal-case tracking-normal font-sans text-sm">
                Kerala, India
              </span>
            </div>
            <div className="space-y-1">
              <span className="block text-[#75757C]">Email</span>
              <a
                href={`mailto:${EMAIL}`}
                className="block text-[#F5F5F5] normal-case tracking-normal font-sans text-sm break-all hover:underline"
              >
                {EMAIL}
              </a>
            </div>
          </motion.div>

          {/* Stacked display word */}
          <div aria-hidden className="relative">
            {/* Fixed height of four base rows, so every word occupies the same box */}
            <div
              className="relative h-[3.44em] min-w-[3.8em] text-[22vw] md:text-[12vw] lg:text-[118px] xl:text-[136px] font-bold leading-[0.86] tracking-tight text-[#F5F5F5]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={word.id}
                  className="absolute inset-x-0 bottom-0"
                  style={{ fontSize: `${word.scale}em` }}
                >
                  {word.rows.map((row, i) => (
                    <div key={row.text} className="overflow-hidden">
                      <motion.div
                        initial={{ y: '100%', opacity: 0 }}
                        animate={{
                          y: 0,
                          opacity: 1,
                          transition: { duration: 0.8, delay: 0.15 + i * 0.08, ease: ROW_EASE },
                        }}
                        exit={{
                          y: '-100%',
                          opacity: 0,
                          transition: { duration: 0.45, delay: i * 0.05, ease: 'easeIn' },
                        }}
                        className="relative flex items-center"
                        style={{ paddingLeft: `${row.indent}em` }}
                      >
                        {row.accent && (
                          <span
                            className="absolute w-[0.16em] h-[0.16em] -translate-x-[0.3em] -translate-y-[0.22em]"
                            style={{ backgroundColor: RED, left: `${row.indent}em` }}
                          />
                        )}
                        {row.text}
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right rail: section indicator */}
          <motion.div
            {...fadeIn(0.8)}
            className="hidden md:flex ml-auto flex-col items-center gap-3 text-[11px] font-mono uppercase tracking-widest text-[#A0A0A5] mix-blend-difference"
          >
            <span className="[writing-mode:vertical-rl] text-[#F5F5F5]">Home</span>
            <span>01</span>
            <div className="relative w-px h-24 bg-white/15 overflow-hidden">
              <motion.div
                animate={{ y: ['-100%', '100%'] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-x-0 h-1/2 bg-white"
              />
            </div>
            <span>02</span>
          </motion.div>
        </div>

        {/* Bottom row: socials (plus hire me on phones) */}
        <motion.div
          {...fadeIn(1)}
          className="mt-10 flex items-center justify-between md:justify-start gap-6 text-[11px] font-mono uppercase tracking-widest text-[#A0A0A5]"
        >
          <a href="#contact" className="md:hidden inline-flex items-center gap-2 text-[#F5F5F5]">
            <span style={{ color: RED }}>▸</span> Hire me
          </a>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.filter((s) => s.id !== 'email').map((social) => (
              <a
                key={social.id}
                href={social.href}
                aria-label={social.label}
                {...(isExternalSocial(social.href)
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="text-[#F5F5F5] hover:text-white normal-case text-xs"
              >
                {social.glyph}
              </a>
            ))}
            <span className="hidden sm:flex items-center gap-2">
              <span className="w-6 h-px bg-[#A0A0A5]" /> Follow
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
