'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Gamepad2, X } from 'lucide-react';

const RED = '#F12020';

/** Paper colours for the four flaps, as in a folded fortune teller. */
const FLAPS = [
  { name: 'ROSE', color: '#B47A82' },
  { name: 'OLIVE', color: '#9DA85C' },
  { name: 'CORAL', color: '#E2675D' },
  { name: 'PEACH', color: '#E8975C' },
];

// Petal shape per quadrant (TL, TR, BL, BR): the outer corner is the soft point.
const PETAL_RADIUS = [
  '55% 14% 6% 14%',
  '14% 55% 14% 6%',
  '14% 6% 14% 55%',
  '6% 14% 55% 14%',
];

// Inner flaps carry numbers; which four show depends on how the counting ended.
const NUMBERS_EVEN = [1, 2, 5, 6];
const NUMBERS_ODD = [3, 4, 7, 8];

const FORTUNES: Record<number, string> = {
  1: 'You’ll soon work with a designer who also writes the code. (She’s right here.)',
  2: 'A pixel-perfect handoff is in your near future.',
  3: 'Your next project ships sooner than you think.',
  4: 'Lucky colour: #F12020. Lucky font: anything bold.',
  5: 'Someone will say “ooh, that micro-interaction” about your product.',
  6: 'Fun fact: Jesna wrote frontend code before she fell for design.',
  7: 'A great email is about to be sent: from you, to Jesna.',
  8: 'Lucky tool: Figma. Luckier tool: Figma + Next.js.',
};

/** Time per open/close while counting, in ms. */
const STEP_MS = 340;

type Stage = 'colour' | 'counting' | 'number' | 'reveal';
type Pose = 'closed' | 'h' | 'v' | 'open';

/** Offset for flap `i` (TL, TR, BL, BR) in a given pose, in px. */
function flapOffset(i: number, pose: Pose) {
  const left = i % 2 === 0;
  const top = i < 2;
  switch (pose) {
    case 'h':
      return { x: left ? -10 : 10, y: 0, rotate: 0, scale: 1 };
    case 'v':
      return { x: 0, y: top ? -10 : 10, rotate: 0, scale: 1 };
    case 'open':
      return { x: left ? -44 : 44, y: top ? -40 : 40, rotate: left === top ? -12 : 12, scale: 0.82 };
    default:
      return { x: 0, y: 0, rotate: 0, scale: 1 };
  }
}

export default function FortuneGame() {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState<Stage>('colour');
  const [pose, setPose] = useState<Pose>('closed');
  const [numbers, setNumbers] = useState(NUMBERS_EVEN);
  const [fortune, setFortune] = useState<number | null>(null);
  // Once a colour is chosen the flaps show numbers, through the second count too.
  const [showNumbers, setShowNumbers] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const reset = useCallback(() => {
    clearTimers();
    setStage('colour');
    setPose('closed');
    setFortune(null);
    setShowNumbers(false);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    reset();
  }, [reset]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close]);

  useEffect(() => clearTimers, []);

  /** Open and close `count` times, alternating direction, then call `done`. */
  const count = (times: number, done: () => void) => {
    setStage('counting');
    for (let step = 0; step < times; step++) {
      timers.current.push(setTimeout(() => setPose(step % 2 === 0 ? 'h' : 'v'), step * STEP_MS));
    }
    timers.current.push(setTimeout(done, times * STEP_MS));
  };

  const pickColour = (name: string) => {
    count(name.length, () => {
      setNumbers(name.length % 2 === 0 ? NUMBERS_EVEN : NUMBERS_ODD);
      setShowNumbers(true);
      setStage('number');
    });
  };

  const pickNumber = (n: number) => {
    count(n, () => {
      setPose('open');
      setFortune(n);
      setStage('reveal');
    });
  };

  const prompt =
    stage === 'colour'
      ? 'Pick a colour'
      : stage === 'number'
        ? 'Now pick a number'
        : stage === 'counting'
          ? 'Counting…'
          : 'Your fortune';

  return (
    <>
      {/* Trigger: red tab on the right edge (round button on phones) with a
          periodic nudge so it's spotted quickly */}
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        data-cursor="PLAY ↗"
        animate={open ? { x: 0 } : { x: [0, -8, 0, -5, 0] }}
        transition={{ duration: 0.7, ease: 'easeInOut', repeat: Infinity, repeatDelay: 3.5 }}
        className="fixed z-40 right-4 bottom-6 md:right-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 flex items-center gap-2.5 rounded-full md:rounded-r-none md:rounded-l-2xl text-white shadow-xl p-4 md:py-5 md:px-3 group"
        style={{ backgroundColor: RED }}
      >
        <Gamepad2 className="relative w-6 h-6 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
        <span className="relative hidden md:block [writing-mode:vertical-rl] rotate-180 text-xs font-mono font-bold uppercase tracking-widest">
          Let&apos;s play a game
        </span>
        <span className="sr-only md:hidden">Let&apos;s play a game</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            data-lenis-prevent
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="fortune-title"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-2xl border border-white/10 bg-neutral-900 p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 w-56 h-56 rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: RED }}
              />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">
                    {'// Fortune teller'}
                  </span>
                  <h2 id="fortune-title" className="text-2xl font-bold tracking-tight text-white">
                    {prompt}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close game"
                  className="w-9 h-9 shrink-0 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* The fortune teller */}
              <div className="relative mx-auto my-8 w-60 h-60 sm:w-64 sm:h-64">
                {/* Fortune revealed in the middle once the flaps open */}
                <AnimatePresence>
                  {stage === 'reveal' && fortune !== null && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.25, type: 'spring', stiffness: 220, damping: 20 }}
                      className="absolute inset-4 z-10 rounded-xl border border-white/10 bg-[#0D0D0F] p-5 flex flex-col items-center justify-center text-center gap-3"
                    >
                      <span className="text-xs font-mono" style={{ color: RED }}>
                        No. {fortune}
                      </span>
                      <p className="text-sm text-[#F5F5F5] leading-relaxed">{FORTUNES[fortune]}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1.5">
                  {FLAPS.map((flap, i) => {
                    const value = numbers[i];
                    const clickable = stage === 'colour' || stage === 'number';
                    return (
                      <motion.button
                        key={flap.name}
                        type="button"
                        disabled={!clickable}
                        onClick={() => (stage === 'colour' ? pickColour(flap.name) : pickNumber(value))}
                        animate={{
                          ...flapOffset(i, pose),
                          opacity: stage === 'reveal' ? 0.25 : 1,
                        }}
                        transition={{ type: 'spring', stiffness: 380, damping: 22 }}
                        whileHover={clickable ? { scale: 1.05 } : undefined}
                        whileTap={clickable ? { scale: 0.95 } : undefined}
                        className="relative flex items-center justify-center shadow-[inset_0_-12px_24px_rgba(0,0,0,0.18),0_10px_24px_-8px_rgba(0,0,0,0.6)] disabled:cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        style={{ backgroundColor: flap.color, borderRadius: PETAL_RADIUS[i] }}
                        aria-label={showNumbers ? `Number ${value}` : flap.name}
                      >
                        <span
                          className={`text-white font-bold tracking-wider drop-shadow ${
                            showNumbers ? 'text-2xl' : 'text-sm sm:text-base'
                          }`}
                          style={{ transform: showNumbers ? undefined : `rotate(${[-35, 35, 35, -35][i]}deg)` }}
                        >
                          {showNumbers ? value : flap.name}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Footer actions */}
              <div className="relative pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-neutral-500 min-h-[44px]">
                {stage === 'reveal' ? (
                  <>
                    <button type="button" onClick={reset} className="uppercase tracking-widest text-white hover:text-[#F12020] transition-colors">
                      ↺ Play again
                    </button>
                    <a href="#contact" onClick={close} className="text-white hover:text-[#F12020] transition-colors">
                      Say hello ↗
                    </a>
                  </>
                ) : (
                  <span>
                    {stage === 'colour' && 'Tap a flap to start'}
                    {stage === 'number' && 'Tap a number'}
                    {stage === 'counting' && 'Open, close, open…'}
                  </span>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
