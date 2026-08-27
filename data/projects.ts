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
  /** Shipped site. Takes precedence over behanceUrl as the card's destination. */
  liveUrl?: string;
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
  /** Live URL. When set, the whole card becomes a link out. */
  link?: string;
  /** Build status, shown in place of the card's call to action while unshipped. */
  status?: string;
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
    slug: 'paw',
    number: '01',
    title: 'PAWS',
    subtitle: 'Landing Page — Pet Grooming & Care Shop in the UAE',
    category: 'Pet Care & Services',
    services: ['UI/UX Design', 'Landing Page', 'Visual Identity'],
    year: '2025',
    client: 'Paws Pet Care',
    role: 'UI/UX Designer',
    duration: '2 Weeks',
    tools: ['Figma', 'Photoshop'],
    summary:
      'A warm, high-energy landing page for a UAE pet grooming centre, built on a single saturated orange field, editorial serif type, and cut-out pet photography that carries the personality of the shop.',
    problem:
      'Local grooming businesses usually live on generic booking templates or social profiles alone, so nothing on screen communicates warmth, trust, or what the service actually involves before a customer calls.',
    objective:
      'Design a landing page that reads as friendly and premium at once, puts booking within immediate reach, and lets a first-time visitor understand the services and see real grooming results without hunting.',
    research: [
      'Reviewed pet grooming and veterinary sites across the UAE for tone, booking flow, and trust signals.',
      'Studied how cut-out photography behaves against flat single-colour backgrounds.',
      'Tested white-on-orange contrast across headline, body, and button states.'
    ],
    userInsights: [
      'Pet owners look for the animal first — photography sets the emotional tone before any copy is read.',
      'Booking and contacting are two different intents, so both deserve a visible action rather than one buried menu.',
      'A short, plain-language promise reassures faster than a list of service specifications.'
    ],
    designExploration:
      'Committed to one saturated orange as the whole brand field, with white reserved for type and actions so the palette never competes with the pet photography. Paired a high-contrast serif headline with a rounded paw logo mark and soft paw motifs used as background texture.',
    wireframesSummary:
      'Wireframed the hero composition and its dual call to action, the five-item navigation rail (Home, Contact, About, Service, Gallery), the service cards, and the grooming gallery grid.',
    results: [
      'A single-colour brand field that stays recognisable across every section of the page.',
      'Booking and contact placed side by side in the hero, so neither intent is a dead end.',
      'Cut-out pet photography carrying the warmth that stock grooming imagery usually flattens.'
    ],
    learnings: [
      'One committed brand colour can do the work of an entire palette when photography supplies the variation.',
      'A serif headline against a playful subject keeps a friendly brand from reading as childish.'
    ],
    heroGradient: 'from-orange-900/40 via-neutral-900 to-black',
    accentColor: '#f03c12',
    galleryImages: [
      { title: 'Hero Composition', caption: 'Serif headline, dual call to action, and cut-out pet photography', color: '#7c2d12' },
      { title: 'Navigation & Brand Mark', caption: 'Paw logo mark with the five-item top rail', color: '#9a3412' },
      { title: 'Service Cards', caption: 'Grooming, washing, and care services at a glance', color: '#c2410c' },
      { title: 'Gallery Grid', caption: 'Before and after grooming results', color: '#ea580c' }
    ],
    behanceUrl: 'https://www.behance.net/gallery/222469221/Paw-Landing-page-for-pet-care-shop',
    showcaseImage: '/paw.png',
    bannerImage: '/paw.png'
  },
  {
    slug: 'anamtha-agri',
    number: '02',
    title: 'ANAMTHA AGRI',
    subtitle: 'Live Web Experience — Sustainable Agriculture Inputs & Product Catalog',
    category: 'Agriculture & Sustainability',
    services: ['UI/UX Design', 'Web Design', 'Frontend Development'],
    year: '2024',
    client: 'Anamtha Technologies',
    role: 'UX/UI Designer & Frontend Developer',
    duration: '3 Months',
    tools: ['Figma', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    summary:
      'A live marketing site for a sustainable farming inputs company, built on a deep forest palette and full-bleed product photography that treats fertiliser granules as the hero image rather than hiding them behind stock farm imagery.',
    problem:
      'Agricultural input suppliers usually present as commodity catalogs — dense spec sheets and generic field photography — which gives farmers no way to judge product quality or company credibility before making contact.',
    objective:
      'Build a site that communicates scientific rigour and environmental care in the same breath, keeps the product catalog and brochure one click away, and works as a working sales channel rather than a brochure page.',
    research: [
      'Reviewed agri-input and agritech company sites for how they balance technical detail against trust building.',
      'Studied macro product photography as a substitute for generic farmland imagery.',
      'Tested legibility of light type across a dark green gradient at desktop and mobile widths.'
    ],
    userInsights: [
      'Farmers and distributors want the catalog and a downloadable brochure immediately — not after a contact form.',
      'Close-up product photography signals quality more convincingly than field-scale stock imagery.',
      'A direct messaging channel matters more than an enquiry form for buyers in the field.'
    ],
    designExploration:
      'Set a deep forest gradient as the base so the green granule photography reads as the single source of colour. Paired a heavy condensed display face for the headline against light body copy, with a pill navigation rail floating above the hero.',
    wireframesSummary:
      'Wireframed the announcement bar, the floating navigation with its brochure download, the split hero (supporting copy left, headline and dual call to action right), the catalog and care sections, and the persistent WhatsApp contact.',
    results: [
      'Shipped and live, serving as the company’s primary product and credibility channel.',
      'Catalog and brochure both reachable from the first screen, without a form in the way.',
      'A persistent WhatsApp channel that matches how buyers actually get in touch.'
    ],
    learnings: [
      'Committing to one deep base colour lets a single product photograph carry an entire hero without extra decoration.',
      'Designing and building the same site keeps motion and layout decisions honest — nothing was specified that could not ship.'
    ],
    heroGradient: 'from-green-950/60 via-neutral-900 to-black',
    accentColor: '#16a34a',
    galleryImages: [
      { title: 'Grow Naturally Hero', caption: 'Split hero with product macro photography and dual call to action', color: '#052e16' },
      { title: 'Floating Navigation', caption: 'Pill nav rail with inline brochure download', color: '#14532d' },
      { title: 'Product Catalog', caption: 'Natural farming inputs organised by crop application', color: '#166534' },
      { title: 'Process & Care', caption: 'Scientific research and crop care presented in sequence', color: '#15803d' }
    ],
    liveUrl: 'https://anamtha-agri.vercel.app/',
    showcaseImage: '/anamtha-agri.png',
    bannerImage: '/anamtha-agri.png'
  },
  {
    slug: 'botaniq',
    number: '03',
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
    number: '04',
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
    showcaseImage: '/visora-banner.png',
    bannerImage: '/visora-banner.png'
  },
  {
    slug: 'flex-track',
    number: '05',
    title: 'FLEX TRACK',
    subtitle: 'Fitness Application UI — Track Workouts, Set Goals, Stay Motivated',
    category: 'Fitness Mobile App',
    services: ['UI/UX Design', 'Mobile UI', 'Design Systems'],
    year: '2025',
    client: 'FlexTrack',
    role: 'UI/UX Designer',
    duration: '3 Weeks',
    tools: ['Figma', 'Photoshop'],
    summary:
      'A dark-navy fitness app built around one daily question — what am I training today? — pairing an at-a-glance activity dashboard with structured multi-week plans and a browsable workout library.',
    problem:
      'Fitness apps either bury the day’s workout under layers of navigation or flood the home screen with metrics, so users lose the thread of a plan within the first week and stop opening the app.',
    objective:
      'Design a home screen that answers today’s workout immediately, keeps progress visible without overwhelming, and makes plans feel like a course to finish rather than a list to browse.',
    research: [
      'Compared home screen hierarchies across leading workout and activity tracking apps.',
      'Reviewed where users drop off inside multi-week training programmes.',
      'Tested legibility of stat components and photographic cards on a dark navy interface.'
    ],
    userInsights: [
      'A visible day counter — Day 1 of 28 — does more for adherence than any streak badge.',
      'Steps, active minutes, and calories are checked together, so they belong in one glanceable block.',
      'Photography on workout cards communicates intensity faster than a difficulty label alone.'
    ],
    designExploration:
      'Set a deep navy canvas so exercise photography and the cyan-to-violet accent carry the energy. Built a stacked card rhythm — active plan, quick actions, activity ring stats, progress bar, recommended workouts — each block readable in a single glance.',
    wireframesSummary:
      'Wireframed the home dashboard with its active plan banner and activity ring, the My Plans library with duration and difficulty tags, the workout category browser, and the four-tab bottom navigation.',
    results: [
      'A home screen that surfaces the active plan, today’s progress, and the next workout without a single tap.',
      'Plans presented with week count and difficulty up front, so commitment is clear before starting.',
      'A consistent card system reused across plans, categories, and recommendations.'
    ],
    learnings: [
      'Progress framed as a finite programme — day 1 of 28 — motivates more reliably than an open-ended metric.',
      'On a dark interface, photography needs a consistent overlay treatment or card weight drifts screen to screen.'
    ],
    heroGradient: 'from-cyan-900/40 via-neutral-900 to-black',
    accentColor: '#22d3ee',
    galleryImages: [
      { title: 'Home Dashboard', caption: 'Active plan banner, activity ring, and recommended workouts', color: '#083344' },
      { title: 'My Plans', caption: 'Muscle & Strength, Gain Muscle, and Get Fit programmes', color: '#0e7490' },
      { title: 'Workout Categories', caption: 'Lower body, warm-up, and full body exercise browsing', color: '#155e75' },
      { title: 'Progress Tracking', caption: 'Steps, active minutes, calories, and plan completion', color: '#0891b2' }
    ],
    behanceUrl: 'https://www.behance.net/gallery/222174855/Flex-Track-Fitness-Application-User-Interface-Design',
    showcaseImage: '/flextrack.png',
    bannerImage: '/flextrack.png'
  },
  {
    slug: 'jollys-pineapple',
    number: '06',
    title: 'JOLLY’S PINEAPPLE',
    subtitle: 'Live Web Experience — Kerala Pineapple Growers & Export Brand',
    category: 'Agri Brand & Export',
    services: ['UI/UX Design', 'Web Design', 'Frontend Development'],
    year: '2026',
    client: 'Jolly’s Pineapple',
    role: 'UX/UI Designer & Frontend Developer',
    duration: '2 Weeks',
    tools: ['Figma', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    summary:
      'A live brand site for a pineapple grower and exporter out of Vazhakulam, Kerala, built on a bright white ground where the fruit itself — shot clean and centred — is the only ornament the page needs.',
    problem:
      'Produce exporters are usually invisible online or represented by a listing page, so buyers have no way to judge provenance, variety, or scale before reaching out — and the produce itself never gets to make its case.',
    objective:
      'Give the business a site that establishes origin and credibility in the first screen, lets buyers browse varieties by name, and routes every enquiry into the channel the business actually answers.',
    research: [
      'Reviewed how produce exporters and agricultural brands present provenance and scale online.',
      'Studied variety-led browsing patterns, where the product name carries the navigation.',
      'Tested green-on-white contrast for the display headline and the smaller tracked labels.'
    ],
    userInsights: [
      'Buyers look for the growing region before anything else — Vazhakulam is the credential.',
      'Varieties are the vocabulary of the trade, so they deserve to be the browsing axis rather than a filter.',
      'WhatsApp is the working channel for this market; a contact form would be a dead end.'
    ],
    designExploration:
      'Set a near-white ground so the pineapple photography supplies the only saturation, with deep forest green for type and a single bright green accent. Ran the variety name as oversized display type behind the fruit, turning the carousel into the page’s main visual event.',
    wireframesSummary:
      'Wireframed the header with its persistent WhatsApp action, the origin line above the headline, the variety carousel with the fruit overlapping its own name, and the about, services, gallery, and contact sections below.',
    results: [
      'Shipped and live as the brand’s own presence rather than a third-party listing.',
      'Variety carousel that names and shows each cultivar in a single composition.',
      'Every call to action routed to WhatsApp, matching how the business already sells.'
    ],
    learnings: [
      'Oversized type behind a cut-out subject creates depth without any additional layout machinery.',
      'When the product photographs well, the strongest design decision is to leave the space around it empty.'
    ],
    heroGradient: 'from-lime-900/40 via-neutral-900 to-black',
    accentColor: '#2f9e44',
    galleryImages: [
      { title: 'Origin Hero', caption: 'Vazhakulam credential line above the display headline', color: '#1a2e05' },
      { title: 'Variety Carousel', caption: 'Mauritius and other cultivars named in oversized type', color: '#365314' },
      { title: 'Services & Scale', caption: 'Growing, sourcing, and export capability', color: '#4d7c0f' },
      { title: 'Gallery & Contact', caption: 'Farm gallery with the persistent WhatsApp channel', color: '#65a30d' }
    ],
    liveUrl: 'https://jollys-pineapple-agency.vercel.app/',
    showcaseImage: '/jollys-pineapple.png',
    bannerImage: '/jollys-pineapple.png'
  }
];

export const PLAYGROUND_ITEMS: PlaygroundItem[] = [
  {
    id: 'leaders-of-change',
    number: '01',
    title: 'Leaders of Change',
    category: 'Live Web Experience',
    description: 'Initiative site for the UAE leadership platform — I coded the mobile design solo.',
    interactionType: 'shift',
    accentColor: '#f12020',
    link: 'https://www.leadersofchange.ae/'
  },
  {
    id: 'anamth-agri',
    number: '02',
    title: 'Anamth Agri',
    category: 'Live Web Experience',
    description: 'Agribusiness site for a sustainable farming enterprise — products, agronomy services, and farmer impact.',
    interactionType: 'follow',
    accentColor: '#16a34a',
    link: 'https://anamtha-agri.vercel.app/home'
  },
  {
    id: 'sentiment-chat',
    number: '03',
    title: 'Sentiment Chat',
    category: 'Live Web Experience',
    description: 'Account-based messaging app that reads the emotional tone of a conversation as it happens.',
    interactionType: 'rotate',
    accentColor: '#8b5cf6',
    link: 'https://sentiment-chat-dev.vercel.app/'
  },
  {
    id: 'msc-vessel-analytics',
    number: '04',
    title: 'Vessel Performance Analytics',
    category: 'Maritime Data Platform',
    description: 'Fleet performance analytics web application for MSC — voyage efficiency, fuel burn, and vessel health at a glance.',
    interactionType: 'shift',
    accentColor: '#0b3f8c',
    link: 'https://www.msc.com/'
  },
  {
    id: 'aramco',
    number: '05',
    title: 'Aramco',
    category: 'Maritime Data Platform',
    description: 'Vessel performance analytics web application delivered for Aramco — fleet efficiency and operational health across marine operations.',
    interactionType: 'zoom',
    accentColor: '#00843d',
    link: 'https://india.aramco.com/en'
  },
  {
    id: 'milaha',
    number: '06',
    title: 'Milaha',
    category: 'Maritime Data Platform',
    description: 'Vessel performance analytics web application delivered for Milaha — shipping, offshore, and marine logistics fleets in one view.',
    interactionType: 'tilt',
    accentColor: '#0e7490',
    link: 'https://www.milaha.com/en'
  },
  {
    id: 'workora',
    number: '07',
    title: 'Workora',
    category: 'Service Marketplace',
    description: 'Marketplace connecting customers with skilled workers — booking, matching, and trust built into the flow.',
    interactionType: 'color',
    accentColor: '#f59e0b',
    status: 'In Progress'
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
