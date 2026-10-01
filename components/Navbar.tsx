'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Download, Menu, X } from 'lucide-react';
import Magnetic from './Magnetic';
import { HEADER_SOCIAL_LINKS, RESUME_URL, isExternalSocial } from '@/data/social';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Resources', href: '#playground', external: true },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Floating Glass Container */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl">
        <div className="bg-[#0D0D0F]/80 backdrop-blur-xl border border-white/10 rounded-full px-5 py-3 shadow-2xl flex items-center justify-between transition-all">
          {/* Left Brand Area */}
          <Magnetic>
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 group-hover:border-white/50 transition-colors">
                <Image
                  src="/IMG_3730.PNG"
                  alt="Jesna Elizabeth Jolly Profile Picture"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm font-medium text-[#F5F5F5] tracking-tight group-hover:text-white transition-colors">
                Jesna Elizabeth Jolly
              </span>
            </Link>
          </Magnetic>

          {/* Right Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Magnetic key={link.label}>
                <a
                  href={link.href}
                  className="text-xs font-medium text-[#A0A0A5] hover:text-[#F5F5F5] transition-colors relative py-1 flex items-center gap-0.5 group"
                >
                  <span>{link.label}</span>
                  {link.external && (
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </Magnetic>
            ))}

            <div className="w-[1px] h-4 bg-white/10 mx-1" />

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {HEADER_SOCIAL_LINKS.map((social) => (
                <Magnetic key={social.id}>
                  <a
                    href={social.href}
                    {...(isExternalSocial(social.href)
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    aria-label={social.label}
                    className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs text-neutral-300 hover:bg-white/15 hover:text-white transition-all"
                  >
                    {social.id === 'github' ? <GithubIcon className="w-3.5 h-3.5" /> : social.glyph}
                  </a>
                </Magnetic>
              ))}
            </div>

            {/* Resume Download */}
            <Magnetic>
              <a
                href={RESUME_URL}
                download
                className="inline-flex items-center gap-1.5 pl-3.5 pr-4 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors group"
              >
                <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                <span>Resume</span>
              </a>
            </Magnetic>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-neutral-300 hover:text-white p-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Glass Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-6xl bg-[#0D0D0F]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 flex flex-col gap-4 text-sm font-medium text-[#F5F5F5] md:hidden shadow-2xl"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/5 flex items-center justify-between text-neutral-300 hover:text-white"
              >
                <span>{link.label}</span>
                {link.external && <ArrowUpRight className="w-4 h-4 text-neutral-400" />}
              </a>
            ))}

            <div className="flex flex-wrap items-center gap-4 pt-2">
              {HEADER_SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  {...(isExternalSocial(social.href)
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-xs text-neutral-400 hover:text-white"
                >
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center font-bold">
                    {social.id === 'github' ? <GithubIcon className="w-3.5 h-3.5" /> : social.glyph}
                  </span>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>

            <a
              href={RESUME_URL}
              download
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
