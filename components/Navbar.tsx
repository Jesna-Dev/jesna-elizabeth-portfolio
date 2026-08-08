'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Magnetic from './Magnetic';

const NAV_ITEMS = [
  { label: 'Work', href: '#work' },
  { label: 'Playground', href: '#playground' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'py-4 bg-black/60 backdrop-blur-md border-b border-white/10' : 'py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Magnetic>
            <Link
              href="/"
              className="text-lg md:text-xl font-bold tracking-tight text-white flex items-center gap-1 group"
            >
              <span>JESNA</span>
              <span className="text-neutral-500 group-hover:text-white transition-colors duration-300">
                .JOLLY
              </span>
            </Link>
          </Magnetic>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 bg-neutral-900/60 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10 shadow-2xl">
            {NAV_ITEMS.map((item) => (
              <Magnetic key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-neutral-300 hover:text-white transition-colors relative py-1 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </Magnetic>
            ))}
          </nav>

          {/* Availability Badge */}
          <div className="hidden md:flex items-center gap-4">
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-neutral-200 bg-white/5 hover:bg-white/15 px-4 py-2 rounded-full border border-white/15 transition-all duration-300 group"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for work</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-full bg-neutral-900 border border-white/10 text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 90% 5%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 90% 5%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 90% 5%)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-neutral-950 flex flex-col justify-between p-8 md:hidden text-white"
          >
            <div className="mt-20 flex flex-col gap-6">
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-mono">
                // Navigation
              </span>
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + idx * 0.08, duration: 0.4 }}
                  className="text-4xl font-bold tracking-tight hover:text-neutral-400 transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-8 h-8 text-neutral-600" />
                </motion.a>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6 flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-mono">
                Status
              </span>
              <p className="text-sm text-neutral-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Based in Kerala, India — Open for selected opportunities
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
