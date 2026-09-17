import { SkillItem, ProjectItem, LabExperiment } from '../types';

export const PERSONAL_INFO = {
  name: 'Bilish Sayaju',
  title: 'BE Computer Student',
  shortIdentity: 'Creative Mind. Technical Vision.',
  location: 'Bhaktapur, Nepal',
  email: 'bilishsayaju00@gmail.com',
  instagram: '@bilish13226',
  instagramUrl: 'https://instagram.com/bilish13226',
  facebook: 'Bilish Sayaju',
  facebookUrl: 'https://www.facebook.com/bilishsayaju00',
  domain: 'bilishsayaju.com.np',
  statusBadge: 'BE Computer Student',
  headlineRole: '> BE Computer Student 🎓',
  heroDescription:
    'Exploring the intersection of creativity and technology through design, AI-powered video, programming, motion graphics, web technologies, and cybersecurity.',
  aboutHeading: 'Bridging Creativity & Technology',
  aboutParagraphs: [
    'Hello, I am Bilish Sayaju, a BE Computer student from Nepal.',
    'I’m interested in understanding both how technology works and how it can be used creatively.',
    'My journey currently combines graphic design, AI-assisted video editing, motion graphics, programming, web development, and cybersecurity fundamentals.',
    'I’m constantly refining my fundamentals through hands-on experiments, projects, and self-directed engineering labs.',
    'My goal is to combine rigorous computer science fundamentals with creative thinking to build purposeful, well-crafted technology.',
  ],
  techTags: [
    'Graphic Design',
    'AI Video',
    'Motion Graphics',
    'HTML',
    'CSS',
    'JavaScript',
    'Python',
    'C',
    'Cybersecurity',
    'Creative Technology',
  ],
  stats: [
    {
      top: 'BE Computer',
      bottom: 'Engineering Track',
      highlight: 'Undergraduate',
      code: 'DEG::BE_CE',
    },
    {
      top: 'Creative × Technical',
      bottom: 'Core Focus',
      highlight: 'Dual Mindset',
      code: 'ARCH::HYBRID',
    },
    {
      top: 'Active Practice',
      bottom: 'Continuous Growth',
      highlight: 'Daily Labs',
      code: 'CYCLE::ACTIVE',
    },
    {
      top: 'Selected Works',
      bottom: 'Interactive Demos',
      highlight: 'Projects & Lab',
      code: 'STATUS::EXPLORING',
    },
  ],
};

export const ABOUT_FEATURE_CARDS = [
  {
    number: '01',
    title: 'Creative Technology',
    description:
      'Exploring the combination of design, visual storytelling, AI tools, and technology to craft memorable interactive experiences.',
    icon: 'Sparkles',
    focus: 'Visual Composition • AI Media • Motion',
  },
  {
    number: '02',
    title: 'Computer Engineering',
    description:
      'Learning programming, web technologies, computer systems, algorithms, and engineering fundamentals from first principles.',
    icon: 'Cpu',
    focus: 'Algorithms • Systems • Web Architecture',
  },
  {
    number: '03',
    title: 'Cybersecurity',
    description:
      'Building foundational knowledge in cybersecurity, networking, Linux, and ethical security concepts through structured exploration.',
    icon: 'Shield',
    focus: 'Linux Shell • Network Protocols • Security Awareness',
  },
];

export const SKILL_CATEGORIES = [
  'Programming & Web',
  'Systems & Security',
] as const;

export const SKILLS_DATA: SkillItem[] = [
  // Programming & Web
  {
    id: 'html',
    name: 'HTML',
    category: 'Programming & Web',
    status: 'Practising',
    iconName: 'Code',
    detail: 'Semantic structure, accessible markup, modern HTML5 layouts and standards',
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'Programming & Web',
    status: 'Practising',
    iconName: 'Palette',
    detail: 'Modern CSS styling, responsive flexbox, CSS Grid layouts, and clean animations',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Programming & Web',
    status: 'Practising',
    iconName: 'FileCode',
    detail: 'DOM manipulation, ES6+ features, asynchronous logic, and interactive web UIs',
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Programming & Web',
    status: 'Learning',
    iconName: 'Terminal',
    detail: 'Algorithmic logic, scripting automation, and computational problem solving',
  },
  {
    id: 'c',
    name: 'C',
    category: 'Programming & Web',
    status: 'Learning',
    iconName: 'Binary',
    detail: 'Computer engineering coursework, memory models, pointers, and structured programming',
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'Programming & Web',
    status: 'Learning',
    iconName: 'Cpu',
    detail: 'Object-oriented programming, standard template library (STL), and algorithmic efficiency',
  },
  {
    id: 'java',
    name: 'Java',
    category: 'Programming & Web',
    status: 'Learning',
    iconName: 'Coffee',
    detail: 'Object-oriented application architecture, class structures, and robust fundamentals',
  },

  // Systems & Security
  {
    id: 'linux',
    name: 'Linux',
    category: 'Systems & Security',
    status: 'Practising',
    iconName: 'TerminalSquare',
    detail: 'Bash shell navigation, file system permissions, utilities, and process management',
  },
  {
    id: 'ethical-hacking-concepts',
    name: 'Ethical Hacking Concepts',
    category: 'Systems & Security',
    status: 'Exploring',
    iconName: 'Key',
    detail: 'Understanding vulnerability lifecycles, responsible disclosure, and cyber defense',
  },
  {
    id: 'security-exploration',
    name: 'Security Exploration',
    category: 'Systems & Security',
    status: 'Exploring',
    iconName: 'Eye',
    detail: 'Hands-on practice labs, security hygiene, network defense, and problem sets',
  },
  {
    id: 'networking-basics',
    name: 'Networking Basics',
    category: 'Systems & Security',
    status: 'Learning',
    iconName: 'Network',
    detail: 'OSI model, TCP/IP stack, DNS, routing concepts, and packet inspection fundamentals',
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'portfolio',
    number: '01',
    title: 'Personal Portfolio',
    category: 'Engineering & Web',
    status: 'Building',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description:
      'A self-built portfolio website combining engineering aesthetics, creative design, animation, and modern web development.',
    fullOverview:
      'Built from the ground up as a minimalist, professional engineering portfolio that showcases creative work and technical growth. Designed with clean typography, soft neutral palettes, responsive architecture, interactive developer CLI, and subtle interactive animations.',
    highlights: [
      'Minimalist, editorial layout with soft neutral colors and high typographic contrast',
      'Integrated Web Audio API synthesizer for interactive audio feedback',
      'Interactive developer CLI with keyboard command parsing',
      'Zero-fluff honest documentation of academic and experimental progress',
    ],
    visualType: 'portfolio',
    liveLinkText: 'Currently Viewing',
  },
  {
    id: 'graphic-design-experiments',
    number: '02',
    title: 'Graphic Design Experiments',
    category: 'Creative Design',
    status: 'Exploring',
    technologies: ['Vector Design', 'Typography'],
    description:
      'Poster layouts, visual compositions, typography studies, and creative design experiments.',
    fullOverview:
      'An exploratory playground where visual balance, typography hierarchies, and raster/vector workflows are tested. Explores how graphic design principles directly elevate software user interfaces and digital storytelling.',
    highlights: [
      'Poster design compositions exploring negative space and focal points',
      'Minimalist vector badges and iconography layouts',
      'Experimental typography layouts pairing display and monospace types',
      'Color theory studies with high-contrast cyber palettes',
    ],
    visualType: 'graphics',
  },
  {
    id: 'ai-video-experiments',
    number: '03',
    title: 'AI Video Experiments',
    category: 'Creative & AI',
    status: 'Exploring',
    technologies: ['AI Video', 'Motion Design'],
    description:
      'AI-assisted video concepts, editing experiments, short-form storytelling, transitions, and visual effects.',
    fullOverview:
      'Investigating the synergy between prompt-driven AI generative media and precision video editing. Tests the boundaries of automated creative workflows, motion rhythm, and audiovisual sequencing for engaging tech storytelling.',
    highlights: [
      'Testing generative video tools for concept visualization',
      'Rhythmic pacing, visual transitions, and sound-synced motion',
      'Exploring kinetic overlays and cyber visual effects',
      'Iterative prompt engineering for visual consistency',
    ],
    visualType: 'aivideo',
  },
  {
    id: 'web-development-experiments',
    number: '04',
    title: 'Web Development Experiments',
    category: 'Frontend Engineering',
    status: 'Learning',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Small websites and frontend experiments created while learning modern web technologies.',
    fullOverview:
      'A hands-on collection of frontend micro-sites, interactive components, responsive page prototypes, and algorithmic UI experiments developed during first-year computer engineering studies.',
    highlights: [
      'Interactive responsive DOM manipulations with vanilla JavaScript',
      'CSS Grid & Flexbox layout challenge solutions',
      'Custom animations using CSS keyframes and transitions',
      'Clean semantic markup emphasizing accessibility principles',
    ],
    visualType: 'webdev',
  },
  {
    id: 'cybersecurity-learning-lab',
    number: '05',
    title: 'Cybersecurity Learning Lab',
    category: 'Security Fundamentals',
    status: 'Learning',
    technologies: ['Linux', 'Networking'],
    description:
      'Personal experiments and notes around cybersecurity fundamentals, networking, Linux, and ethical security concepts.',
    fullOverview:
      'Documented learning journey covering Linux command-line utilities, network layer mechanics (OSI & TCP/IP), basic packet flow comprehension, and defensive digital hygiene. Always maintained strictly as an educational learning track.',
    highlights: [
      'Hands-on Linux command line navigation and permission audits',
      'Understanding fundamental network protocols (HTTP/S, DNS, TCP/UDP)',
      'Ethical security awareness notes and defensive concepts',
      'Personal cyber hygiene and system configuration practices',
    ],
    visualType: 'security',
  },
];

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    id: 'particles',
    title: 'Particle Network',
    category: 'Physics & Canvas',
    description: 'Dynamic node connection visualizer with real-time physics and mouse proximity gravity.',
  },
  {
    id: 'palette',
    title: 'Color / Gradient Generator',
    category: 'Creative Tool',
    description: 'Cyberpunk palette generator with instant HEX copy and CSS background syntax output.',
  },
  {
    id: 'terminal',
    title: 'Terminal Playground',
    category: 'Micro Sandbox',
    description: 'Interactive mini execution sandbox testing code outputs and simulated script runs.',
  },
  {
    id: 'typing',
    title: 'Typing Animation Sandbox',
    category: 'Interactive UI',
    description: 'Real-time kinetic typing simulator with customizable speed and character buffers.',
  },
  {
    id: 'logic',
    title: 'Logic Gate & Code Visualizer',
    category: 'Computer Systems',
    description: 'Interactive binary truth table and logic gate simulator for fundamental circuits (AND, OR, XOR).',
  },
];
