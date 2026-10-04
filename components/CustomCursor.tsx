'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check hovered targets for data-cursor attribute
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorEl = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorEl) {
        const text = cursorEl.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
      } else {
        const isInteractive = target.closest('a, button, input, [role="button"]');
        if (isInteractive) {
          setCursorText('');
          setIsHovered(true);
        } else {
          setCursorText('');
          setIsHovered(false);
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full bg-emerald-400 text-black font-mono text-xs font-semibold uppercase tracking-wider backdrop-blur-sm"
      animate={{
        x: position.x - (cursorText ? 44 : isHovered ? 18 : 6),
        y: position.y - (cursorText ? 44 : isHovered ? 18 : 6),
        width: cursorText ? 88 : isHovered ? 36 : 12,
        height: cursorText ? 88 : isHovered ? 36 : 12,
        opacity: position.x < 0 ? 0 : 1
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 28,
        mass: 0.1
      }}
    >
      {cursorText && (
        <span className="px-2 text-center text-[10px] leading-tight font-sans tracking-widest text-black">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
}
