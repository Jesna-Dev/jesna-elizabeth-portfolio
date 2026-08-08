'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { FEATURED_PROJECTS } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Magnetic from '@/components/Magnetic';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Clock, Layers, User, Wrench } from 'lucide-react';

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const project = FEATURED_PROJECTS.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = FEATURED_PROJECTS.findIndex((p) => p.slug === project.slug);
  const nextProject = FEATURED_PROJECTS[(currentIndex + 1) % FEATURED_PROJECTS.length];

  return (
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-white selection:text-black">
      <Navbar />

      {/* Back to Work Link */}
      <div className="pt-32 px-6 md:px-12 max-w-7xl mx-auto">
        <Magnetic>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors py-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Selected Work</span>
          </Link>
        </Magnetic>
      </div>

      {/* Case Study Hero Section */}
      <section className="pt-8 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-xs font-mono text-emerald-400 uppercase tracking-widest">
            <span>{project.number}</span>
            <span>—</span>
            <span>{project.category}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white uppercase leading-[0.95]">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl text-neutral-300 font-light max-w-3xl leading-relaxed">
            {project.subtitle}
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10 text-xs font-mono uppercase tracking-wider">
            <div>
              <span className="text-neutral-500 block mb-1 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" /> Client
              </span>
              <span className="text-white font-semibold">{project.client}</span>
            </div>
            <div>
              <span className="text-neutral-500 block mb-1 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" /> Role
              </span>
              <span className="text-white font-semibold">{project.role}</span>
            </div>
            <div>
              <span className="text-neutral-500 block mb-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> Timeline
              </span>
              <span className="text-white font-semibold">{project.duration}</span>
            </div>
            <div>
              <span className="text-neutral-500 block mb-1 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5" /> Core Tools
              </span>
              <span className="text-white font-semibold">{project.tools.join(', ')}</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`mt-16 w-full h-[400px] sm:h-[550px] rounded-3xl bg-gradient-to-br ${project.heroGradient} border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl`}
        >
          <div className="flex justify-between items-start z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              Interactive Case Study Visualizer
            </span>
            <span className="text-xs font-mono text-neutral-400 uppercase">
              {project.year} Release
            </span>
          </div>

          <div className="z-10 max-w-2xl mx-auto w-full bg-neutral-950/90 backdrop-blur-2xl border border-white/20 rounded-2xl p-8 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-sm font-bold tracking-tight uppercase text-white">
                {project.title} — Primary Workspace Interface
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <p className="text-xs text-neutral-300 font-mono leading-relaxed">
              {project.summary}
            </p>
          </div>

          <div className="z-10 flex justify-between items-end text-xs font-mono text-neutral-400 uppercase tracking-widest">
            <span>Scroll for detailed research & architecture</span>
            <span className="text-emerald-400">Design System Verified ✓</span>
          </div>
        </motion.div>
      </section>

      {/* Case Study Core Body Sections */}
      <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto space-y-24 border-t border-white/10">
        {/* 1. Problem & Objective */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4 p-8 rounded-2xl bg-neutral-900/40 border border-white/10">
            <span className="text-xs font-mono uppercase tracking-widest text-red-400 block">
              // The Challenge
            </span>
            <h3 className="text-2xl font-bold text-white">Problem Statement</h3>
            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="space-y-4 p-8 rounded-2xl bg-neutral-900/40 border border-white/10">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block">
              // The Solution
            </span>
            <h3 className="text-2xl font-bold text-white">Core Objective</h3>
            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              {project.objective}
            </p>
          </div>
        </div>

        {/* 2. User Research & Insights */}
        <div className="space-y-8">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block">
            // Research & User Insights
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Discovering Strategic User Needs
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white font-mono">// Research Methodology</h4>
              <ul className="space-y-3">
                {project.research.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white font-mono">// Key Insights</h4>
              <ul className="space-y-3">
                {project.userInsights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 3. Horizontal Draggable Gallery */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              // Interface Gallery (Drag to explore)
            </span>
            <span className="text-xs font-mono text-emerald-400 uppercase">DRAG ↔</span>
          </div>

          <div
            data-cursor="DRAG ↔"
            className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          >
            {project.galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="shrink-0 w-[300px] sm:w-[400px] h-[300px] rounded-2xl border border-white/10 p-6 flex flex-col justify-between bg-neutral-900 snap-center shadow-xl hover:border-white/30 transition-colors"
                style={{ backgroundColor: img.color }}
              >
                <div className="flex justify-between items-start text-xs font-mono text-neutral-300">
                  <span>0{idx + 1}</span>
                  <span className="uppercase tracking-widest">UI View</span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-white tracking-tight">{img.title}</h4>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Results & Key Metrics */}
        <div className="space-y-8 p-10 rounded-3xl bg-neutral-900/60 border border-white/15">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block">
            // Impact & Key Results
          </span>
          <h3 className="text-3xl font-bold text-white tracking-tight">Measurable Outcomes</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.results.map((res, idx) => (
              <div key={idx} className="space-y-2 border-l border-white/20 pl-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <p className="text-sm text-neutral-200 font-light leading-relaxed">{res}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Next Project Nav Button */}
        <div className="pt-16 border-t border-white/10 flex flex-col items-center text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            Next Case Study
          </span>
          <Link
            href={`/work/${nextProject.slug}`}
            data-cursor="VIEW PROJECT ↗"
            className="group text-3xl sm:text-5xl font-bold text-white hover:text-neutral-400 transition-colors flex items-center gap-4 uppercase"
          >
            <span>{nextProject.title}</span>
            <ArrowUpRight className="w-10 h-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform text-emerald-400" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
