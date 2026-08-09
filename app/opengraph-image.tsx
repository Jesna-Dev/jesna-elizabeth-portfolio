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
const [inter400, inter500, inter600, mono500] = await Promise.all([
  readFile(join(process.cwd(), 'assets/Inter-400.ttf')),
  readFile(join(process.cwd(), 'assets/Inter-500.ttf')),
  readFile(join(process.cwd(), 'assets/Inter-600.ttf')),
  readFile(join(process.cwd(), 'assets/JetBrainsMono-500.ttf')),
]);

const logoSrc = `data:image/png;base64,${await readFile(
  join(process.cwd(), 'public/ek-logo.png'),
  'base64'
)}`;

/**
 * The backdrop: a dot field matching `.subtle-noise`, the ambient glow the Hero
 * renders under the cursor, and an orbital ring system that bleeds off the
 * right edge. Drawn as one SVG so gradients and vignettes composite cleanly.
 */
const CX = 985;
const CY = 300;

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
      <circle cx="1.6" cy="1.6" r="1.2" fill="#ffffff" fill-opacity="0.095"/>
    </pattern>

    <radialGradient id="ambient">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.085"/>
      <stop offset="45%" stop-color="#ffffff" stop-opacity="0.025"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="core">
      <stop offset="0%" stop-color="${RED}" stop-opacity="0.34"/>
      <stop offset="40%" stop-color="${RED}" stop-opacity="0.10"/>
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
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.50"/>
      <stop offset="40%" stop-color="#ffffff" stop-opacity="0.11"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.02"/>
    </linearGradient>

    <linearGradient id="ringB" x1="1" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.34"/>
      <stop offset="55%" stop-color="#ffffff" stop-opacity="0.07"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.015"/>
    </linearGradient>

    <linearGradient id="ringC" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.22"/>
      <stop offset="60%" stop-color="#ffffff" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>

    <linearGradient id="arcRed" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${RED}" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="${RED}" stop-opacity="0.15"/>
    </linearGradient>

    <linearGradient id="leftFade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${BG}" stop-opacity="0.97"/>
      <stop offset="45%" stop-color="${BG}" stop-opacity="0.72"/>
      <stop offset="100%" stop-color="${BG}" stop-opacity="0"/>
    </linearGradient>

    <linearGradient id="bottomFade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${BG}" stop-opacity="0"/>
      <stop offset="100%" stop-color="${BG}" stop-opacity="0.9"/>
    </linearGradient>

    <linearGradient id="rule" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${RED}" stop-opacity="0.9"/>
      <stop offset="18%" stop-color="#ffffff" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="${BG}"/>
  <rect width="1200" height="630" fill="url(#dots)"/>

  <!-- ambient light behind the ring system -->
  <ellipse cx="${CX}" cy="${CY}" rx="460" ry="420" fill="url(#ambient)"/>

  <!-- orbital rings, largest first so the bright inner ones sit on top -->
  <g fill="none">
    <circle cx="${CX}" cy="${CY}" r="392" stroke="url(#ringC)" stroke-width="1"/>
    <circle cx="${CX}" cy="${CY}" r="310" stroke="url(#ringB)" stroke-width="1.15"/>
    <circle cx="${CX}" cy="${CY}" r="240" stroke="url(#ringA)" stroke-width="1.3"/>
    <circle cx="${CX}" cy="${CY}" r="178" stroke="url(#ringB)" stroke-width="1.15"
            stroke-dasharray="2 9" stroke-linecap="round"/>
    <circle cx="${CX}" cy="${CY}" r="124" stroke="url(#ringA)" stroke-width="1.3"/>
    <circle cx="${CX}" cy="${CY}" r="62" stroke="#ffffff" stroke-opacity="0.14" stroke-width="1"/>

    <!-- highlighted arc segments: the "in progress" gesture -->
    <circle cx="${CX}" cy="${CY}" r="240" stroke="url(#arcRed)" stroke-width="3.2"
            stroke-linecap="round" stroke-dasharray="300 1208" stroke-dashoffset="-250"/>
    <circle cx="${CX}" cy="${CY}" r="310" stroke="#ffffff" stroke-opacity="0.6" stroke-width="2"
            stroke-linecap="round" stroke-dasharray="190 1758" stroke-dashoffset="-1160"/>
    <circle cx="${CX}" cy="${CY}" r="124" stroke="#ffffff" stroke-opacity="0.7" stroke-width="2.2"
            stroke-linecap="round" stroke-dasharray="120 659" stroke-dashoffset="-130"/>
  </g>

  <!-- glowing core -->
  <circle cx="${CX}" cy="${CY}" r="150" fill="url(#core)"/>
  <circle cx="${CX}" cy="${CY}" r="4.5" fill="${RED}"/>

  <!-- nodes riding the rings -->
  ${node(1087, 229, 5, RED, 26)}
  ${node(760, 218, 3.5, '#ffffff', 18)}
  ${node(830, 568, 3, '#ffffff', 16)}
  ${node(1074, 454, 3, '#ffffff', 16)}

  <!-- vignettes keep the type side clean and sink the bottom edge -->
  <rect x="0" y="0" width="760" height="630" fill="url(#leftFade)"/>
  <rect x="0" y="400" width="1200" height="230" fill="url(#bottomFade)"/>
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
          justifyContent: 'space-between',
          padding: '58px 72px 60px',
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

        {/* Top bar: brand mark, and where she works from */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                display: 'flex',
                width: 60,
                height: 60,
                borderRadius: 16,
                border: '1px solid rgba(255,255,255,0.12)',
                backgroundColor: '#000000',
                overflow: 'hidden',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Oversized so the mark's black padding crops away */}
              <img src={logoSrc} alt="" width={86} height={76} />
            </div>
            <div
              style={{
                display: 'flex',
                width: 1,
                height: 30,
                backgroundColor: 'rgba(255,255,255,0.14)',
                margin: '0 22px',
              }}
            />
            <div
              style={{
                fontFamily: 'JetBrains Mono',
                fontSize: 13,
                letterSpacing: '0.32em',
                color: MUTED,
              }}
            >
              PORTFOLIO
            </div>
          </div>

          <div
            style={{
              fontFamily: 'JetBrains Mono',
              fontSize: 13,
              letterSpacing: '0.32em',
              color: MUTED,
            }}
          >
            KERALA, INDIA
          </div>
        </div>

        {/* The name, set like the Hero's typewriter headline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontFamily: 'JetBrains Mono',
              fontSize: 14,
              letterSpacing: '0.3em',
              color: MUTED,
              marginBottom: 26,
            }}
          >
            UI/UX DESIGNER
            <span style={{ color: RED, margin: '0 12px' }}>·</span>
            CREATIVE TECHNOLOGIST
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 84,
              fontWeight: 500,
              letterSpacing: '-0.035em',
              lineHeight: 1.04,
              color: TEXT,
            }}
          >
            <div style={{ display: 'flex' }}>Jesna Elizabeth</div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              Jolly
              {/* the blinking caret from the Hero, frozen mid-blink */}
              <div
                style={{
                  display: 'flex',
                  width: 9,
                  height: 64,
                  marginLeft: 18,
                  marginBottom: 4,
                  borderRadius: 2,
                  backgroundColor: RED,
                  boxShadow: `0 0 34px ${RED}`,
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              width: 320,
              height: 2,
              margin: '34px 0 26px',
              background: 'linear-gradient(90deg, #F12020, rgba(255,255,255,0))',
            }}
          />

          <div
            style={{
              display: 'flex',
              maxWidth: 560,
              fontSize: 23,
              fontWeight: 400,
              lineHeight: 1.5,
              color: MUTED,
            }}
          >
            Blending creativity, technology and code into thoughtful digital
            experiences.
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
                marginRight: 12,
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
        { name: 'Inter', data: inter400, style: 'normal', weight: 400 },
        { name: 'Inter', data: inter500, style: 'normal', weight: 500 },
        { name: 'Inter', data: inter600, style: 'normal', weight: 600 },
        { name: 'JetBrains Mono', data: mono500, style: 'normal', weight: 500 },
      ],
    }
  );
}
