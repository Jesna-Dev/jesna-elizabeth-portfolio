'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { BEHANCE_PROJECTS, FEATURED_PROJECTS, ShowcaseProject } from '@/data/projects';
import { SOCIAL_LINKS } from '@/data/social';
import Magnetic from './Magnetic';

const BEHANCE_PROFILE =
  SOCIAL_LINKS.find((social) => social.id === 'behance')?.href ??
  'https://www.behance.net/jesnakelizabe';

/** Featured case studies first, then the rest of the Behance work. */
const PROJECTS: ShowcaseProject[] = [...FEATURED_PROJECTS, ...BEHANCE_PROJECTS];
const COUNT = PROJECTS.length;

/** How long each project stays in front before the strip folds on, in ms. Never pauses. */
const AUTOPLAY_MS = 3200;

// Folded-strip geometry. Side cards hinge back by FOLD degrees at the edge of
// the card in front, so the row reads as one sheet bent around the centre card.
const FOLD = 70;
const COS = Math.cos((FOLD * Math.PI) / 180);
const SIN = Math.sin((FOLD * Math.PI) / 180);
/** Cards further than this from the centre are hidden. */
const VISIBLE_SIDE = 2;

const CARD_W_MAX = 380;
const DEFAULT_WIDTH = 1184; // max-w-7xl minus its md:px-12 gutters, before measuring

function projectLink(project: ShowcaseProject) {
  const href = project.liveUrl || project.behanceUrl || `/work/${project.slug}`;
  const isExternal = Boolean(project.liveUrl || project.behanceUrl);
  const label = project.liveUrl
    ? 'Visit Live Site'
    : project.behanceUrl
      ? 'View on Behance'
      : 'Explore Case Study';
  return { href, isExternal, label };
}

/** Signed distance from the active card, wrapped so the strip loops. */
function wrappedOffset(index: number, active: number) {
  let offset = (index - active) % COUNT;
  if (offset > COUNT / 2) offset -= COUNT;
  if (offset < -COUNT / 2) offset += COUNT;
  return offset;
}

/**
 * Pose for a card `offset` steps from the centre, rotating about its own
 * centre. For side cards this is the same pose as hinging about the shared
 * edge with the previous card, worked out so x/z interpolate smoothly.
 */
function pose(offset: number, cardW: number) {
  if (offset === 0) return { x: 0, z: 0, rotateY: 0, opacity: 1 };
  const side = Math.sign(offset);
  const steps = Math.abs(offset);
  return {
    x: side * cardW * (0.5 + COS * (steps - 0.5)),
    z: -cardW * SIN * (steps - 0.5),
    rotateY: side * FOLD,
    opacity: steps > VISIBLE_SIDE ? 0 : 1 - (steps - 1) * 0.35,
  };
}

export default function SelectedWork() {
  // `from` is the previously active card, kept so each move knows where cards came from.
  const [{ active, from }, setNav] = useState({ active: 0, from: 0 });

  const go = useCallback((index: number) => {
    setNav((nav) => ({ active: ((index % COUNT) + COUNT) % COUNT, from: nav.active }));
  }, []);

  // Autoplay runs continuously. Restarting the timer on every move means a
  // click, swipe or dot gives the chosen card a full turn at the front.
  useEffect(() => {
    const timer = setTimeout(() => go(active + 1), AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [active, go]);

  const stripRef = useRef<HTMLDivElement>(null);
  const [stripWidth, setStripWidth] = useState(DEFAULT_WIDTH);
  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setStripWidth(entry.contentRect.width));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const cardW = Math.min(CARD_W_MAX, Math.round(stripWidth * 0.78));

  // A card wrapping from the hidden end of one side to the other jumps there
  // instead of sweeping across the front of the strip.
  const offsets = PROJECTS.map((_, i) => wrappedOffset(i, active));
  const jumps = offsets.map((offset, i) => {
    const previous = wrappedOffset(i, from);
    return (
      Math.sign(offset) * Math.sign(previous) < 0 &&
      (Math.abs(offset) > VISIBLE_SIDE || Math.abs(previous) > VISIBLE_SIDE)
    );
  });

  const handlePanEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -50) go(active + 1);
    else if (info.offset.x > 50) go(active - 1);
  };

  return (
    <section id="work" className="w-full py-32 bg-neutral-950 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-3">
              {'// Selected Work'}
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white uppercase">
              Selected Work
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-neutral-400 font-light">
            A collection of digital products, interfaces, and expressive web experiences designed to solve meaningful human problems.
          </p>
        </div>
      </div>

      {/* Folding strip: the front card faces the viewer, the rest hinge back */}
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Selected projects"
        className="max-w-7xl mx-auto px-6 md:px-12"
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') go(active + 1);
          if (e.key === 'ArrowLeft') go(active - 1);
        }}
      >
        <motion.div
          ref={stripRef}
          onPanEnd={handlePanEnd}
          className="relative h-[540px] [perspective:1400px] touch-pan-y"
        >
          {PROJECTS.map((project, i) => {
            const offset = offsets[i];
            const isFront = offset === 0;
            return (
              <motion.div
                key={project.slug}
                className="absolute left-1/2 top-2 [transform-style:preserve-3d]"
                style={{ width: cardW, marginLeft: -cardW / 2, zIndex: 50 - Math.abs(offset) }}
                initial={false}
                animate={pose(offset, cardW)}
                transition={
                  jumps[i]
                    ? { duration: 0 }
                    : { type: 'spring', stiffness: 90, damping: 18, mass: 0.9 }
                }
              >
                <div inert={!isFront}>
                  <DeckCard project={project} />
                </div>
                {!isFront && Math.abs(offset) <= VISIBLE_SIDE && (
                  <button
                    type="button"
                    tabIndex={-1}
                    aria-label={`Show ${project.title}`}
                    onClick={() => go(i)}
                    className="absolute inset-0 rounded-2xl"
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Position dots */}
        <div className="mt-10 flex items-center justify-center gap-3">
          {PROJECTS.map((project, i) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show ${project.title}`}
              aria-current={i === active}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? 'w-8 bg-white' : 'w-1.5 bg-white/25 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Full Archive Link */}
      <div className="mt-20 px-6 flex flex-col items-center gap-4 text-center">
        <p className="text-sm text-neutral-400 font-light max-w-md">
          More case studies, explorations, and visual work live on Behance.
        </p>
        <Magnetic>
          <a
            href={BEHANCE_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="VIEW BEHANCE ↗"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors shadow-xl group"
          >
            <span>View Full Portfolio on Behance</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </Magnetic>
      </div>
    </section>
  );
}

function DeckCard({ project }: { project: ShowcaseProject }) {
  const { href, isExternal, label } = projectLink(project);

  // Styled to match the Playground cards: dark panel, accent glow, mono details.
  // Solid background so overlapping cards in the deck don't show through.
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      data-cursor={project.liveUrl ? 'VIEW LIVE SITE ↗' : 'VIEW PROJECT ↗'}
      className="group relative flex flex-col gap-5 h-[520px] rounded-2xl border border-white/10 bg-neutral-900 p-7 overflow-hidden hover:border-white/30 transition-colors duration-300 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.8)] focus:outline-none focus-visible:border-white/50"
    >
      {/* Ambient accent glow */}
      <div
        className="pointer-events-none absolute -right-12 -top-12 w-48 h-48 rounded-full blur-3xl opacity-25 group-hover:opacity-50 transition-opacity"
        style={{ backgroundColor: project.accentColor }}
      />

      {/* Card Header */}
      <div className="relative flex justify-between items-start gap-3">
        <span className="text-xs font-mono text-neutral-500">{project.number}</span>
        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full truncate max-w-[75%]">
          <Sparkles className="w-3 h-3 shrink-0 text-amber-400" />
          <span className="truncate">{project.category}</span>
        </span>
      </div>

      {/* Card Content */}
      <div className="relative space-y-2">
        <h3 className="text-2xl font-bold tracking-tight text-white group-hover:translate-x-2 transition-transform">
          {project.title}
        </h3>
        <p className="text-xs text-neutral-400 font-light leading-relaxed line-clamp-2">
          {project.subtitle}
        </p>
      </div>

      {/* Showcase */}
      <div className="relative flex-1 min-h-0 rounded-lg overflow-hidden border border-white/10 bg-[#0A0A0C]">
        {project.showcaseImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.showcaseImage}
            alt={`${project.title} UI/UX showcase`}
            loading="lazy"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${project.heroGradient}`} />
        )}
      </div>

      {/* Bottom Footer */}
      <div className="relative pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
        <span className="text-white group-hover:text-[#F12020] transition-colors">
          {label}
        </span>
        <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#F12020] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </div>
    </a>
  );
}
