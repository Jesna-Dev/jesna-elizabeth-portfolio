import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt =
  'Jesna Elizabeth Jolly — UI/UX Designer & Creative Technologist';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Palette pulled from the site (globals.css) and the "ek" brand mark.
const BG = '#0D0D0F';
const TEXT = '#F5F5F5';
const MUTED = '#A0A0A5';
const DIM = '#75757C';
const RED = '#F12020';

// Assets are read once at module scope so the image stays statically optimized.
const [inter500, mono500] = await Promise.all([
  readFile(join(process.cwd(), 'assets/Inter-500.ttf')),
  readFile(join(process.cwd(), 'assets/JetBrainsMono-500.ttf')),
]);

// ek-logo-mark.png is the brand mark with its black field removed and cropped
// tight (493x318), so it can sit over artwork without painting a black box.
const MARK_W = 300;
const MARK_H = Math.round((MARK_W * 318) / 493);
const markSrc = `data:image/png;base64,${await readFile(
  join(process.cwd(), 'public/ek-logo-mark.png'),
  'base64'
)}`;

/**
 * The backdrop: the dot field from `.subtle-noise`, the ambient glow the Hero
 * renders under the cursor, and an orbital ring system centred on the mark so
 * the logo reads as the light source. One SVG, so gradients and vignettes
 * composite cleanly.
 */
const CX = 600;
const CY = 240;

function node(x: number, y: number, r: number, color: string, halo: number) {
  return `
    <circle cx="${x}" cy="${y}" r="${halo}" fill="url(#${
      color === RED ? 'haloRed' : 'haloWhite'
    })"/>
    <circle cx="${x}" cy="${y}" r="${r}" fill="${color}"/>`;
}

const backdrop = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="1.6" cy="1.6" r="1.2" fill="#ffffff" fill-opacity="0.09"/>
    </pattern>

    <radialGradient id="ambient">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.09"/>
      <stop offset="45%" stop-color="#ffffff" stop-opacity="0.025"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="core">
      <stop offset="0%" stop-color="${RED}" stop-opacity="0.30"/>
      <stop offset="45%" stop-color="${RED}" stop-opacity="0.09"/>
      <stop offset="100%" stop-color="${RED}" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="haloRed">
      <stop offset="0%" stop-color="${RED}" stop-opacity="0.75"/>
      <stop offset="35%" stop-color="${RED}" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="${RED}" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="haloWhite">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.45"/>
      <stop offset="40%" stop-color="#ffffff" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>

    <linearGradient id="ringA" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.46"/>
      <stop offset="42%" stop-color="#ffffff" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.02"/>
    </linearGradient>

    <linearGradient id="ringB" x1="1" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.32"/>
      <stop offset="55%" stop-color="#ffffff" stop-opacity="0.07"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.015"/>
    </linearGradient>

    <linearGradient id="ringC" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.20"/>
      <stop offset="60%" stop-color="#ffffff" stop-opacity="0.045"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>

    <linearGradient id="arcRed" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${RED}" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="${RED}" stop-opacity="0.12"/>
    </linearGradient>

    <!-- sinks the lower third so the name and chips stay legible over the rings -->
    <linearGradient id="bottomFade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${BG}" stop-opacity="0"/>
      <stop offset="55%" stop-color="${BG}" stop-opacity="0.82"/>
      <stop offset="100%" stop-color="${BG}" stop-opacity="0.97"/>
    </linearGradient>

    <linearGradient id="topFade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${BG}" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="${BG}" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="${BG}"/>
  <rect width="1200" height="630" fill="url(#dots)"/>

  <!-- ambient light behind the mark -->
  <ellipse cx="${CX}" cy="${CY}" rx="470" ry="400" fill="url(#ambient)"/>

  <!-- orbital rings, widest first -->
  <g fill="none">
    <circle cx="${CX}" cy="${CY}" r="492" stroke="url(#ringC)" stroke-width="1"/>
    <circle cx="${CX}" cy="${CY}" r="402" stroke="url(#ringB)" stroke-width="1.15"/>
    <circle cx="${CX}" cy="${CY}" r="318" stroke="url(#ringA)" stroke-width="1.3"/>
    <circle cx="${CX}" cy="${CY}" r="246" stroke="url(#ringB)" stroke-width="1.15"
            stroke-dasharray="2 9" stroke-linecap="round"/>
    <circle cx="${CX}" cy="${CY}" r="188" stroke="url(#ringA)" stroke-width="1.3"/>

    <!-- highlighted arc segments -->
    <circle cx="${CX}" cy="${CY}" r="318" stroke="url(#arcRed)" stroke-width="3.2"
            stroke-linecap="round" stroke-dasharray="330 1668" stroke-dashoffset="-320"/>
    <circle cx="${CX}" cy="${CY}" r="402" stroke="#ffffff" stroke-opacity="0.55" stroke-width="2"
            stroke-linecap="round" stroke-dasharray="210 2316" stroke-dashoffset="-1520"/>
    <circle cx="${CX}" cy="${CY}" r="188" stroke="#ffffff" stroke-opacity="0.62" stroke-width="2.2"
            stroke-linecap="round" stroke-dasharray="150 1031" stroke-dashoffset="-200"/>
  </g>

  <!-- the mark's own glow -->
  <circle cx="${CX}" cy="${CY}" r="215" fill="url(#core)"/>

  <!-- nodes riding the rings, kept clear of the name and role bands -->
  ${node(721, 96, 5, RED, 26)}
  ${node(301, 131, 3.5, '#ffffff', 18)}
  ${node(823, 344, 3, '#ffffff', 16)}
  ${node(293, 500, 3, '#ffffff', 16)}

  <rect x="0" y="0" width="1200" height="120" fill="url(#topFade)"/>
  <rect x="0" y="352" width="1200" height="278" fill="url(#bottomFade)"/>
</svg>`;

const backdropSrc = `data:image/svg+xml;base64,${Buffer.from(backdrop).toString(
  'base64'
)}`;

const TAGS = [
  'PRODUCT DESIGN',
  'AI PROTOTYPING',
  'DESIGN SYSTEMS',
  'VIBE CODING',
];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '52px 64px',
          backgroundColor: BG,
          fontFamily: 'Inter',
          position: 'relative',
        }}
      >
        <img
          src={backdropSrc}
          alt=""
          width={1200}
          height={630}
          style={{ position: 'absolute', top: 0, left: 0 }}
        />

        {/* Top rail */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontFamily: 'JetBrains Mono',
            fontSize: 13,
            letterSpacing: '0.32em',
          }}
        >
          <div style={{ display: 'flex', color: MUTED }}>PORTFOLIO</div>
          <div style={{ display: 'flex', color: MUTED }}>KERALA, INDIA</div>
        </div>

        {/* The mark, sitting at the centre of the ring system */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={markSrc} alt="" width={MARK_W} height={MARK_H} />

          <div
            style={{
              display: 'flex',
              marginTop: 46,
              fontSize: 46,
              fontWeight: 500,
              letterSpacing: '0.07em',
              color: TEXT,
            }}
          >
            JESNA ELIZABETH JOLLY
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: 20,
              fontFamily: 'JetBrains Mono',
              fontSize: 15,
              letterSpacing: '0.28em',
              color: MUTED,
            }}
          >
            UI/UX DESIGNER
            <span style={{ color: RED, margin: '0 12px' }}>·</span>
            CREATIVE TECHNOLOGIST
          </div>
        </div>

        {/* Marquee vocabulary, as chips */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {TAGS.map((tag) => (
            <div
              key={tag}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: 6,
                marginRight: 6,
                padding: '9px 17px',
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.13)',
                backgroundColor: 'rgba(255,255,255,0.02)',
                fontFamily: 'JetBrains Mono',
                fontSize: 12,
                letterSpacing: '0.16em',
                color: DIM,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Inter', data: inter500, style: 'normal', weight: 500 },
        { name: 'JetBrains Mono', data: mono500, style: 'normal', weight: 500 },
      ],
    }
  );
}
