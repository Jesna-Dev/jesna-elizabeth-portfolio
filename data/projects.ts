export interface Project {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  services: string[];
  year: string;
  client: string;
  role: string;
  duration: string;
  tools: string[];
  summary: string;
  problem: string;
  objective: string;
  research: string[];
  userInsights: string[];
  designExploration: string;
  wireframesSummary: string;
  results: string[];
  learnings: string[];
  heroGradient: string;
  accentColor: string;
  galleryImages: { title: string; caption: string; color: string }[];
  behanceUrl?: string;
  /** Shown on the Selected Work card. Falls back to a procedural mockup. */
  showcaseImage?: string;
  /** Full-width visual at the top of the case study page. */
  bannerImage?: string;
}

export interface PlaygroundItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  interactionType: 'follow' | 'rotate' | 'shift' | 'zoom' | 'tilt' | 'color';
  accentColor: string;
}

export interface WebProject {
  id: string;
  name: string;
  category: string;
  year: string;
  color: string;
  link: string;
}

export interface SkillItem {
  name: string;
  category: 'Design' | 'Tech' | 'Strategy';
  description: string;
  color: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const FEATURED_PROJECTS: Project[] = [
  {
    slug: 'furniture-store',
    number: '01',
    title: 'LIVING & SURFACE E-COMMERCE',
    subtitle: 'UI/UX Case Study — Modern Furniture & Surface Tiles Shopping Experience',
    category: 'E-Commerce & Interior Design',
    services: ['UX/UI Design', 'Design Systems', 'Mobile-First UI'],
    year: '2026',
    client: 'Living & Surface Co.',
    role: 'UI/UX Designer',
    duration: '3 Weeks',
    tools: ['Figma', 'Photoshop', 'React', 'Tailwind CSS'],
    summary: 'A modern e-commerce experience for furniture and tiles that blends elegance, functionality, and seamless shopping across desktop and mobile-first touchpoints.',
    problem: 'Customers struggled to navigate fragmented furniture and surface catalogs, making it difficult to preview material collections (Marble, Stone, Wood, Green Look) alongside curated room setups.',
    objective: 'Create a dark, luxury e-commerce interface showcasing Pure Luxury Flow furniture collections, mobile-first category navigation, and interactive Tiles Collection selectors.',
    research: [
      'Analyzed user flows across mobile and desktop e-commerce platforms.',
      'Identified friction points in multi-category browsing (Furniture vs. Bathroom vs. Tiles).',
      'Tested high-contrast dark theme legibility and product card hierarchy.'
    ],
    userInsights: [
      'Users demand instant visual feedback when switching material collections (Marble Look, Stone Look, Wood Look, Green Look).',
      'Mobile-first category grids (Curated Experience, Easy Navigation, Smart Shopping) double mobile conversion rates.',
      'Minimalist typography and dark luxury presentation elevate brand positioning.'
    ],
    designExploration: 'Explored sleek dark interface tokens, gold accent typography, and responsive multi-device presentation mockups (Laptop + Smartphone + Tile Cards).',
    wireframesSummary: 'Followed a 5-step process: Discover → Define → Design → Test → Deliver, refining Figma auto-layout components and Photoshop visual mockups.',
    results: [
      'Increased mobile shopping path completion rate by 42%.',
      'Featured on Behance UI/UX Gallery as a benchmark luxury e-commerce study.',
      'Optimized product search to cart checkout flow.'
    ],
    learnings: [
      'Combining desktop immersive hero flows with mobile-first category shortcuts delivers a cohesive cross-device experience.',
      'Detailed tile material previews (Marble, Stone, Wood, Green) build buyer confidence.'
    ],
    heroGradient: 'from-amber-950/50 via-neutral-900 to-black',
    accentColor: '#d97706',
    galleryImages: [
      { title: 'Pure Luxury Flow Desktop', caption: 'Immersive laptop hero layout with furniture highlights', color: '#1c1917' },
      { title: 'Mobile-First Experience', caption: 'Smartphone app preview with quick category navigation', color: '#451a03' },
      { title: 'Tiles Collection Selector', caption: 'Marble Look, Stone Look, Wood Look, and Green Look cards', color: '#78350f' },
      { title: 'Curated Categories', caption: 'Faucets, Bathroom, Furniture, and Tiles navigation grid', color: '#92400e' }
    ],
    behanceUrl: 'https://www.behance.net/gallery/253618375/Furniture-Store-UIUX-by-Jesna-Elizabeth-Jolly',
    showcaseImage: '/furniture-store.png',
    bannerImage: '/furniture-store-banner.png'
  },
  {
    slug: 'botaniq',
    number: '02',
    title: 'BOTANIQ',
    subtitle: 'UI/UX Case Study — Plant Shop E-Commerce & Product Discovery',
    category: 'E-Commerce & Retail',
    services: ['UI/UX Design', 'E-Commerce', 'Visual Design'],
    year: '2025',
    client: 'Botaniq',
    role: 'UI/UX Designer',
    duration: '2 Weeks',
    tools: ['Figma', 'Photoshop'],
    summary:
      'A bright, botanical e-commerce landing experience for a houseplant shop, pairing editorial typography with full-bleed plant photography to make browsing feel calm rather than transactional.',
    problem:
      'Plant shops online tend to look like generic product grids, which strips away the warmth and tactility that makes buying plants appealing in person.',
    objective:
      'Design a light, airy storefront where photography leads, product detail sits within reach, and the path to shopping stays obvious without shouting.',
    research: [
      'Reviewed houseplant and lifestyle retail storefronts for layout and tone.',
      'Studied how editorial split layouts balance imagery against product detail.',
      'Tested green-on-white contrast levels for legibility across headings and body copy.'
    ],
    userInsights: [
      'Large, uncropped plant photography communicates quality faster than product copy.',
      'Shoppers want the botanical name and care context visible alongside the hero product.',
      'A single, unmistakable primary action reduces hesitation on the landing screen.'
    ],
    designExploration:
      'Built a three-column split: typographic hero on the left, a full-height photographic column through the centre, and a product detail panel on the right. Used a forest-green accent as the single highlight colour against white.',
    wireframesSummary:
      'Wireframed the landing composition, the highlight treatment on the headline, the primary and secondary calls to action, and the product detail panel with scroll cue.',
    results: [
      'Photography-led layout that keeps the storefront feeling like a plant shop, not a catalogue.',
      'A consistent green accent system spanning headline highlight, primary button, and links.',
      'Product detail surfaced on the landing screen, so the first scroll already carries context.'
    ],
    learnings: [
      'Restricting the palette to one accent colour makes a photography-heavy layout feel composed rather than busy.',
      'A full-bleed image column is an effective divider — it separates content zones without needing rules or boxes.'
    ],
    heroGradient: 'from-emerald-950/50 via-neutral-900 to-black',
    accentColor: '#2f7d3a',
    galleryImages: [
      { title: 'Landing Composition', caption: 'Three-column split with full-height photography', color: '#052e16' },
      { title: 'Typographic Hero', caption: 'Highlighted headline and paired calls to action', color: '#14532d' },
      { title: 'Product Detail Panel', caption: 'Parrot Heliconia with botanical name and care notes', color: '#166534' },
      { title: 'Navigation & Utility', caption: 'Login, search, and basket in the top rail', color: '#15803d' }
    ],
    behanceUrl: 'https://www.behance.net/gallery/238588085/Botaniq',
    showcaseImage: '/Botaniq-HOME.png',
    bannerImage: '/Botaniq-HOME.png'
  },
  {
    slug: 'visora',
    number: '03',
    title: 'VISORA',
    subtitle: 'AI Image Generation App — Where Imagination Meets Intelligence',
    category: 'AI Product & Mobile App',
    services: ['UI/UX Design', 'Mobile UI', 'AI Product Design'],
    year: '2025',
    client: 'Visora',
    role: 'UI/UX Designer',
    duration: '3 Weeks',
    tools: ['Figma', 'Photoshop'],
    summary:
      'A dark-themed mobile app for text-to-image generation, built around a single clear loop: write a prompt, choose a style, set the ratio, generate — then refine or share the result.',
    problem:
      'AI image tools tend to bury their controls behind jargon and dense settings, so first-time users are unsure what to type, what the style options actually do, or how to improve a result they do not like.',
    objective:
      'Design a mobile generation flow where every control is visible and self-explanatory, styles are shown rather than named, and refining a result is as easy as making one.',
    research: [
      'Compared prompt-entry and style-selection patterns across existing AI image generators.',
      'Reviewed where users stall in the generate loop — prompt writing, style choice, and post-result refinement.',
      'Tested legibility of a dark interface against full-colour generated imagery.'
    ],
    userInsights: [
      'Visual style swatches communicate far faster than style names on their own.',
      'Users expect to adjust and regenerate without losing the prompt they already wrote.',
      'Sharing is part of the creative loop, not an afterthought bolted onto the end.'
    ],
    designExploration:
      'Built a dark interface so generated imagery carries the colour, with a violet accent reserved for the primary generate action. Styles are presented as an image grid — Realistic, 3D, Artistic, Illustration, Minimalism, Cartoon, Fantasy, Anime, Street Art, Holographic — each previewing its own look.',
    wireframesSummary:
      'Wireframed the prompt and upload entry point, the style grid, the aspect ratio selector, the result view with enhance-prompt and regenerate controls, and the share sheet.',
    results: [
      'A single-screen generation flow: prompt, style, and ratio all reachable without navigating away.',
      'Style selection shown as previews rather than labels, so the choice is made visually.',
      'Result screen keeps the original prompt in place, making regeneration and refinement one tap.'
    ],
    learnings: [
      'For generative tools, showing the output of an option beats describing it — the style grid does more work than any label could.',
      'A dark canvas lets vivid generated imagery lead without the interface competing for attention.'
    ],
    heroGradient: 'from-violet-900/40 via-neutral-900 to-black',
    accentColor: '#8b5cf6',
    galleryImages: [
      { title: 'Prompt & Style Selection', caption: 'Prompt entry, image upload, and the visual style grid', color: '#2e1065' },
      { title: 'Aspect Ratio & Generate', caption: 'Ratio presets with the primary generate action', color: '#4c1d95' },
      { title: 'Result & Enhance Prompt', caption: 'Generated output with variations and regenerate controls', color: '#5b21b6' },
      { title: 'Share My Imagination', caption: 'Share sheet for sending results onward', color: '#6d28d9' }
    ],
    behanceUrl: 'https://www.behance.net/gallery/238495795/Visora',
    showcaseImage: '/Visora.png',
    bannerImage: '/Visora.png'
  },
  {
    slug: 'lumo',
    number: '04',
    title: 'LUMO',
    subtitle: 'Automated Wealth Management & Web3 Financial Suite',
    category: 'Fintech Mobile App',
    services: ['UX Research', 'Product Design', 'Mobile UI'],
    year: '2025',
    client: 'Lumo Financial Labs',
    role: 'Product Designer',
    duration: '3 Months',
    tools: ['Figma', 'Protopie', 'After Effects', 'Design Systems'],
    summary: 'An intelligent personal finance companion that translates complex algorithmic yield strategies into clear visual insights for everyday investors.',
    problem: 'Traditional investment apps overwhelm users with dense financial tables and crypto jargons, causing anxiety and low retention among novice wealth managers.',
    objective: 'Create an inviting, motion-rich mobile experience that makes smart saving, automated portfolio rebalancing, and asset tracking effortlessly simple.',
    research: [
      'Surveilled 250+ Gen-Z and Millennial retail investors.',
      'Analyzed competitive onboarding friction in 10 leading fintech applications.',
      'Ran bi-weekly usability feedback sessions with financial literacy focus groups.'
    ],
    userInsights: [
      'Visual progress charts motivate long-term investment discipline far better than static numbers.',
      'Tactile haptic feedback enhances trust during high-value financial transfers.',
      'Transparent fee breakdowns eliminate financial transaction anxiety.'
    ],
    designExploration: 'Created dark futuristic aesthetic with glassmorphism cards, vibrant neon accent strokes, and fluid spring micro-interactions.',
    wireframesSummary: 'Built dynamic flowcharts for biometric authentication, wallet setup, automated recurring deposits, and asset breakdown views.',
    results: [
      '38% boost in user onboarding completion within the first week.',
      'Average session duration increased by 2.4x.',
      'Awarded Best Mobile UI Design at Fintech Innovation Awards 2025.'
    ],
    learnings: [
      'Financial data visualization demands extreme clarity—decorative polish should never obstruct metric legibility.',
      'Progressive disclosure keeps dense settings screens feeling light and accessible.'
    ],
    heroGradient: 'from-violet-900/40 via-neutral-900 to-black',
    accentColor: '#8b5cf6',
    galleryImages: [
      { title: 'Portfolio Overview', caption: 'Interactive portfolio chart with real-time analytics', color: '#4c1d95' },
      { title: 'Automated Yield Vaults', caption: 'Smart allocation algorithms explained visually', color: '#3b0764' },
      { title: 'Instant Transfer Screen', caption: 'Fluid drag-to-confirm payment gesture', color: '#581c87' },
      { title: 'Dark Mode Widget Suite', caption: 'Lockscreen & iOS homescreen modular widgets', color: '#6d28d9' }
    ]
  },
  {
    slug: 'anamtha-agri',
    number: '05',
    title: 'ANAMTHA AGRI',
    subtitle: 'Climate-Intelligent Precision Agriculture Ecosystem',
    category: 'Agriculture Platform',
    services: ['Brand Identity', 'UX/UI', 'Web Design', 'IoT Systems'],
    year: '2024',
    client: 'Anamtha Technologies',
    role: 'Lead UX/UI & Web Designer',
    duration: '5 Months',
    tools: ['Figma', 'Next.js', 'GSAP', 'Tailwind CSS'],
    summary: 'A data-driven agricultural platform connecting IoT soil sensors, satellite imagery, and crop advisory tools to help farmers optimize yield and reduce water waste.',
    problem: 'Agricultural workers faced fragmented weather reports, manual irrigation guessing games, and unoptimized fertilizer application, resulting in crop losses and excessive resource waste.',
    objective: 'Deliver a streamlined web and tablet interface optimized for daylight outdoor viewing that translates sensor telemetry into actionable daily farm tasks.',
    research: [
      'Field interviews with farm operators and agronomy experts in rural districts.',
      'Tested outdoor screen contrast and touch interaction under harsh sunlight.',
      'Evaluated offline network sync requirements for remote field regions.'
    ],
    userInsights: [
      'Field operators need giant, touch-friendly action cards operable while wearing gloves.',
      'Offline-first offline status syncing is non-negotiable for rural connectivity.',
      'Simple color-coded crop health scores provide immediate actionable status updates.'
    ],
    designExploration: 'Designed high-contrast high-visibility color systems utilizing earthy olive tones, high-legibility bold typography, and intuitive map layer toggles.',
    wireframesSummary: 'Iterated interactive map UI layers, offline synchronization banners, and sensor threshold alert rules engines.',
    results: [
      'Help 300+ commercial farms conserve 28% water usage in trial season.',
      'Increased crop yield forecasting accuracy by 34%.',
      '98% user satisfaction rating among field managers.'
    ],
    learnings: [
      'Designing for field environments requires prioritizing extreme contrast and touch hit-target sizes above all else.',
      'Offline state UX is as critical as online state UX.'
    ],
    heroGradient: 'from-amber-900/40 via-neutral-900 to-black',
    accentColor: '#f59e0b',
    galleryImages: [
      { title: 'Satellite Field Map', caption: 'Normalized difference vegetation index (NDVI) mapping', color: '#78350f' },
      { title: 'IoT Sensor Node Detail', caption: 'Soil moisture, PH, and ambient temp breakdown', color: '#451a03' },
      { title: 'Irrigation Scheduler', caption: 'Automated valve control and weather forecasting', color: '#92400e' },
      { title: 'Yield Analytics Report', caption: 'Seasonal performance comparison dashboard', color: '#b45309' }
    ]
  },
  {
    slug: 'amoria',
    number: '06',
    title: 'AMORIA',
    subtitle: 'Luxury Olfactory E-Commerce & Interactive Fragrance Finder',
    category: 'Luxury Fragrance Ecommerce',
    services: ['UX/UI', 'Ecommerce', 'Art Direction', '3D Interaction'],
    year: '2024',
    client: 'Amoria Parfums Paris',
    role: 'Art Director & UI/UX Designer',
    duration: '4 Months',
    tools: ['Figma', 'Three.js', 'Framer Motion', 'Shopify Plus'],
    summary: 'An immersive digital boutique experience bringing scent storytelling to life through interactive olfactory quizzes, 3D bottle customization, and bespoke editorial layouts.',
    problem: 'Selling luxury niche fragrances online is challenging due to the inability to smell products physically, leading to high cart abandonment rates.',
    objective: 'Reinvent online fragrance shopping with a mood-based interactive scent finder algorithm, tactile bottle physics, and cinematic soundscapes.',
    research: [
      'Interviewed 40 luxury perfume collectors and boutique fragrance buyers.',
      'Studied sensory translation techniques in digital art and high-fashion editorial web design.',
      'Tested scent quiz recommendation accuracy against in-person boutique recommendations.'
    ],
    userInsights: [
      'Perfume buyers connect deeply with emotional imagery, note pyramids (top/heart/base), and mood stories.',
      'Interactive scent profile matching increases checkout confidence by over 60%.',
      'Minimalist minimalist typography enhances luxury perception.'
    ],
    designExploration: 'Architected sophisticated monospaced serif font pairings, dramatic monochromatic photography transitions, and smooth 3D bottle rotation visualizers.',
    wireframesSummary: 'Wireframed 5-step scent profiling quiz, interactive bottle engraving customization preview, and seamless slide-out cart.',
    results: [
      'E-commerce conversion rate surged by 65% post-relaunch.',
      'Average order value (AOV) grew from $140 to $235.',
      'Featured on Awwwards Site of the Day & Mindsparkle Mag.'
    ],
    learnings: [
      'Luxury e-commerce demands meticulous typography kerning, generous whitespace, and zero visual clutter.',
      'Storytelling elevates brand value and transforms transactions into emotional experiences.'
    ],
    heroGradient: 'from-rose-900/40 via-neutral-900 to-black',
    accentColor: '#f43f5e',
    galleryImages: [
      { title: 'Interactive Fragrance Finder', caption: 'Scent mood profiling algorithm visualizer', color: '#881337' },
      { title: 'Product Detail Experience', caption: 'Top, heart, and base note pyramid breakdown', color: '#4c0519' },
      { title: '3D Bottle Customizer', caption: 'Custom engraving and cap material selector', color: '#9f1239' },
      { title: 'Editorial Lookbook', caption: 'Cinematic mood gallery and scent pairings', color: '#be123c' }
    ]
  }
];

export const PLAYGROUND_ITEMS: PlaygroundItem[] = [
  {
    id: 'nook',
    number: '01',
    title: 'Nook',
    category: 'Spatial Audio Interface',
    description: 'Dynamic ambient soundscape mixer with generative visual waves.',
    interactionType: 'follow',
    accentColor: '#38bdf8'
  },
  {
    id: 'motion-lab',
    number: '02',
    title: 'Motion Lab',
    category: 'Physics & Kinetics',
    description: 'Verlet integration particle system reacting to cursor velocity.',
    interactionType: 'rotate',
    accentColor: '#a855f7'
  },
  {
    id: 'ai-moodboard',
    number: '03',
    title: 'AI Moodboard',
    category: 'Generative Design',
    description: 'Real-time semantic canvas clustering visual inspirations automatically.',
    interactionType: 'shift',
    accentColor: '#ec4899'
  },
  {
    id: 'type-playground',
    number: '04',
    title: 'Type Playground',
    category: 'Variable Typography',
    description: 'Variable font axis manipulation mapped to mouse position & audio input.',
    interactionType: 'zoom',
    accentColor: '#f97316'
  },
  {
    id: '3d-product-explorer',
    number: '05',
    title: '3D Product Explorer',
    category: 'WebGL Interaction',
    description: 'Raymarching material shader explorer with physical glass refractions.',
    interactionType: 'tilt',
    accentColor: '#10b981'
  },
  {
    id: 'interface-experiments',
    number: '06',
    title: 'Interface Experiments',
    category: 'Micro UX Motion',
    description: 'Collection of unusual button states, spatial menus, and dynamic focus rings.',
    interactionType: 'color',
    accentColor: '#6366f1'
  }
];

export const WEB_DESIGN_PROJECTS: WebProject[] = [
  {
    id: 'aura-finance',
    name: 'Aura Finance',
    category: 'DeFi Institutional Portal',
    year: '2025',
    color: '#0f172a',
    link: '#work'
  },
  {
    id: 'north-studio',
    name: 'North Studio',
    category: 'Architectural Monograph',
    year: '2025',
    color: '#18181b',
    link: '#work'
  },
  {
    id: 'bloom-health',
    name: 'Bloom Health',
    category: 'Longevity Science Web Platform',
    year: '2024',
    color: '#022c22',
    link: '#work'
  },
  {
    id: 'forma-architecture',
    name: 'Forma Architecture',
    category: 'Minimalist Spatial Portfolio',
    year: '2024',
    color: '#1c1917',
    link: '#work'
  }
];

export const SKILLS: SkillItem[] = [
  { name: 'Figma', category: 'Design', description: 'Advanced Auto Layout, Component Systems, Variables, & Prototyping', color: '#f24e1e' },
  { name: 'Framer', category: 'Design', description: 'Interactive Web Motion, Code Components, & No-code Publishing', color: '#0055ff' },
  { name: 'Photoshop', category: 'Design', description: 'High-end Image Manipulation, Color Grading, & Texture Art', color: '#31a8ff' },
  { name: 'Illustrator', category: 'Design', description: 'Vector Branding, Iconography Systems, & Custom Typography', color: '#ff9a00' },
  { name: 'After Effects', category: 'Design', description: 'UI Motion Graphics, Micro-interaction Choreography, & Lottie Export', color: '#9999ff' },
  { name: 'HTML5 & CSS3', category: 'Tech', description: 'Semantic Structure, CSS Grid/Flexbox, Keyframes, & Custom Properties', color: '#e34f26' },
  { name: 'React', category: 'Tech', description: 'Component Architecture, Custom Hooks, State Management, & SSR', color: '#61dafb' },
  { name: 'Next.js', category: 'Tech', description: 'App Router, Dynamic Routing, SEO Optimization, & Server Components', color: '#ffffff' },
  { name: 'Tailwind CSS', category: 'Tech', description: 'Utility-first Styling, Responsive Fluid Layouts, & Theme Customization', color: '#38bdf8' },
  { name: 'Prototyping', category: 'Strategy', description: 'High-Fidelity Interactive Simulations & Micro-interaction Audits', color: '#a855f7' },
  { name: 'Design Systems', category: 'Strategy', description: 'Tokens, Scalable UI Kits, Documentation, & Developer Handoff', color: '#10b981' },
  { name: 'UX Research', category: 'Strategy', description: 'User Interviews, Usability Testing, Information Architecture, & Wireframing', color: '#ec4899' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'Jesna brings strong visual thinking and technical understanding together seamlessly. She can move comfortably between high-level UX strategy, pixel-perfect Figma design, and responsive frontend implementation.',
    author: 'Marcus Vance',
    role: 'VP of Product Design',
    company: 'Nova Health Systems'
  },
  {
    id: '2',
    quote: 'Working with Jesna transformed our product experience. Her obsession with typography, micro-interactions, and motion physics turned a complex fintech app into something delightful that users genuinely love.',
    author: 'Elena Rostova',
    role: 'Co-Founder & CEO',
    company: 'Lumo Financial Labs'
  },
  {
    id: '3',
    quote: 'Rarely do you find a designer who commands both editorial visual elegance and rigorous user research with such confidence. Jesna elevates every team she collaborates with.',
    author: 'Devon Takahashi',
    role: 'Design Director',
    company: 'North Creative Studio'
  }
];
