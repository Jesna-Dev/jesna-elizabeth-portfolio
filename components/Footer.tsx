'use client';

import React from 'react';
import Magnetic from './Magnetic';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-12 px-6 md:px-12 bg-neutral-950 border-t border-white/10 text-xs font-mono text-neutral-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/ek-logo.png" alt="EK Logo" className="w-5 h-5 object-contain" />
            <span className="text-white font-bold tracking-wider uppercase">
              JESNA ELIZABETH JOLLY
            </span>
          </div>
          <span className="hidden sm:inline text-neutral-600">•</span>
          <span>UI/UX Designer · Creative Technologist</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/jesna-k-elizabeth-jolly/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.behance.net/jesnakelizabe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Behance
          </a>
          <a href="mailto:jesnakelizabethjolly@gmail.com" className="hover:text-white transition-colors">
            Email
          </a>
        </div>

        <div className="flex items-center gap-6">
          <span>© 2026 Jesna Elizabeth Jolly</span>
          <Magnetic>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-white hover:text-neutral-400 transition-colors uppercase tracking-widest"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
