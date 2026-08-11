'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Magnetic from './Magnetic';

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
              <Magnetic>
                <a
                  href="https://www.linkedin.com/in/jesna-k-elizabeth-jolly/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs text-neutral-300 hover:bg-white/15 hover:text-white transition-all"
                >
                  in
                </a>
              </Magnetic>

              <Magnetic>
                <a
                  href="mailto:jesnakelizabethjolly@gmail.com"
                  aria-label="Email"
                  className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs text-neutral-300 hover:bg-white/15 hover:text-white transition-all"
                >
                  @
                </a>
              </Magnetic>
            </div>
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

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/jesna-k-elizabeth-jolly/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-neutral-400 hover:text-white"
              >
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center font-bold">in</span>
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:jesnakelizabethjolly@gmail.com"
                className="flex items-center gap-2 text-xs text-neutral-400 hover:text-white"
              >
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center font-bold">@</span>
                <span>Email</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
