'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Download } from 'lucide-react';
import Magnetic from './Magnetic';
import { RESUME_URL } from '@/data/social';

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  isCurrent?: boolean;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'Fegno Technologies',
    role: 'UX UI Designer',
    location: 'Kochi, Kerala',
    period: 'Jan 2026 — Present',
    description:
      'Designed modern interfaces for websites and applications while creating engaging digital visuals for marketing and branding. Collaborated with clients to deliver clean, intuitive, and user-focused design solutions.',
    isCurrent: true,
  },
  {
    company: 'Freelance',
    role: 'UX UI Designer',
    location: 'Kochi, Kerala',
    period: 'Jan 2025 — Present',
    description:
      'Created modern design themes for websites, apps, and marketing materials. Designed digital graphics and promotional visuals for client campaigns while closely collaborating with clients to deliver clean, user-focused UI designs.',
    isCurrent: true,
  },
  {
    company: 'Tower Ideas',
    role: 'Product Designer',
    location: 'Dubai, UAE',
    period: 'May 2024 — Dec 2024',
    description:
      'Created intuitive web and app interfaces with modern design systems. Collaborated with teams to produce user-focused layouts and interactive prototypes. Improved usability by refining flows based on client feedback.',
  },
  {
    company: 'Global Invisions',
    role: 'Frontend Developer',
    location: 'Kochi, Kerala',
    period: 'Jun 2023 — Mar 2024',
    description:
      'Developed the "Leaders of Change" mobile application to engage UAE volunteers in sustainability initiatives through training and interactive activities. Collaborated with the team to deliver a high-quality, seamless product experience.',
  },
  {
    company: 'Navalt',
    role: 'UI UX Designer',
    location: 'Kochi, Kerala',
    period: 'Aug 2020 — Jun 2023',
    description:
      'Developed and designed multiple web applications for a Vessel Analytics Platform used across the marine industry. Built solutions that improved vessel performance monitoring and provided actionable operational insights.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full py-32 px-6 md:px-12 bg-neutral-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-3">
              // Career Trajectory
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase">
              Employment <br className="hidden sm:block" /> Experience
            </h2>
          </div>
          <div className="max-w-md space-y-6">
            <p className="text-neutral-400 text-sm md:text-base font-light">
              UI/UX & Product Designer with 5+ years of experience designing intuitive web and mobile experiences. Skilled in user research, wireframing, prototyping, design systems, responsive design, and frontend development.
            </p>

            <Magnetic>
              <a
                href={RESUME_URL}
                download
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors shadow-xl group"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Experience List */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-8 rounded-2xl bg-neutral-900/40 border border-white/10 hover:border-white/30 hover:bg-neutral-900/70 transition-all duration-300 relative overflow-hidden"
            >
              {/* Active Pill Badge for Current Roles */}
              {exp.isCurrent && (
                <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active Role
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Period & Location */}
                <div className="lg:col-span-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                    <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                    <MapPin className="w-3.5 h-3.5 text-neutral-600" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Right Role & Description */}
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                      {exp.company}
                    </h3>
                    <span className="text-neutral-500 font-mono text-sm">—</span>
                    <span className="text-base font-semibold text-neutral-300 font-mono">
                      {exp.role}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
