'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FEATURED_PROJECTS, Project } from '@/data/projects';
import { SOCIAL_LINKS } from '@/data/social';
import Magnetic from './Magnetic';

const BEHANCE_PROFILE =
  SOCIAL_LINKS.find((social) => social.id === 'behance')?.href ??
  'https://www.behance.net/jesnakelizabe';

export default function SelectedWork() {
  return (
    <section id="work" className="w-full py-32 px-6 md:px-12 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-3">
              // Selected Work (2024 - 2026)
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white uppercase">
              Selected Work
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-neutral-400 font-light">
            A collection of digital products, interfaces, and expressive web experiences designed to solve meaningful human problems.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-24">
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* Full Archive Link */}
        <div className="mt-20 flex flex-col items-center gap-4 text-center">
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
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePos({ x: x * 0.1, y: y * 0.1 });
  };

  const targetUrl = project.behanceUrl || `/work/${project.slug}`;
  const isExternal = Boolean(project.behanceUrl);

  return (
    <a
      href={targetUrl}
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      data-cursor="VIEW PROJECT ↗"
      className="group block relative w-full border-b border-white/10 pb-16 transition-all"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Number & Metadata */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
            <span className="text-neutral-500">{project.number}</span>
            <span>—</span>
            <span className="uppercase text-emerald-400 font-semibold">{project.category}</span>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white group-hover:translate-x-3 transition-transform duration-300 flex items-center gap-3">
            <span>{project.title}</span>
            <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-neutral-400" />
          </h3>

          <p className="text-sm md:text-base text-neutral-400 font-light max-w-md">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.services.map((svc) => (
              <span
                key={svc}
                className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-neutral-300"
              >
                {svc}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Visual Visualizer Card with Magnetic Parallax */}
        <div className="lg:col-span-7 overflow-hidden rounded-2xl border border-white/10 relative h-[320px] sm:h-[420px] bg-neutral-900 shadow-2xl">
          <motion.div
            animate={{
              scale: isHovered ? 1.04 : 1,
              x: mousePos.x,
              y: mousePos.y,
            }}
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
            className={`w-full h-full bg-gradient-to-br ${project.heroGradient} p-8 flex flex-col justify-between relative overflow-hidden`}
          >
            {/* Abstract Decorative Graphics */}
            <div
              className="absolute -right-10 -bottom-10 w-72 h-72 rounded-full opacity-30 blur-2xl"
              style={{ backgroundColor: project.accentColor }}
            />

            <div className="flex justify-between items-start z-10">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                Case Study • {project.year}
              </span>
              <span className="text-xs font-mono text-neutral-300">
                {project.client}
              </span>
            </div>

            {project.showcaseImage ? (
              <div className="absolute inset-0 z-0 bg-[#0A0A0C] flex items-center justify-center p-2 sm:p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.showcaseImage}
                  alt={`${project.title} UI/UX showcase`}
                  className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-700 rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
              </div>
            ) : null}

            {/* Procedural UI Mockup Component */}
            {!project.showcaseImage && (
              <div className="z-10 bg-neutral-950/80 backdrop-blur-xl border border-white/15 rounded-xl p-6 shadow-2xl space-y-4 max-w-lg mx-auto w-full group-hover:border-white/30 transition-colors">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/60" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/60" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/60" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase">
                    {project.slug}.ui
                  </span>
                </div>
                <div className="space-y-2">
                  <div
                    className="h-4 rounded bg-white/20 w-3/4 animate-pulse"
                    style={{ backgroundColor: project.accentColor }}
                  />
                  <div className="h-3 rounded bg-white/10 w-full" />
                  <div className="h-3 rounded bg-white/10 w-5/6" />
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="h-12 rounded bg-white/5 border border-white/10" />
                  <div className="h-12 rounded bg-white/5 border border-white/10" />
                  <div className="h-12 rounded bg-white/5 border border-white/10" />
                </div>
              </div>
            )}

            <div className="flex justify-between items-end z-10">
              <span className="text-xs font-mono text-neutral-400">
                {project.duration} Engagement
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-1">
                {isExternal ? 'View on Behance ↗' : 'Explore Case Study →'}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </a>
  );
}
