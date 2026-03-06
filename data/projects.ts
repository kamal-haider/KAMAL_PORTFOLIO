export interface Project {
  id: string;
  codename: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: 'ai-product' | 'mobile' | 'web' | 'backend' | 'devtools';
  status: 'LIVE' | 'BETA' | 'ALPHA' | 'IN_DEV';
  accent: 'neural' | 'amber';
  link?: string;
  github?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: 'cipher',
    codename: 'CIPHER',
    title: 'CIPHER Agent',
    description:
      'AI-powered portfolio agent with RAG knowledge base and programmatic site navigation. The chat window you\'re using right now.',
    longDescription:
      'An embedded AI agent that serves as both a knowledge base and navigation controller for this portfolio. Built with Claude\'s tool use API, CIPHER can answer questions about any project and navigate the site on behalf of the user. Features a token economy system and cyberpunk-themed UI. This project demonstrates fullstack AI development — from prompt engineering and tool orchestration to real-time UI coordination.',
    tech: ['Next.js', 'TypeScript', 'Claude API', 'Tool Use', 'Vercel'],
    category: 'ai-product',
    status: 'LIVE',
    accent: 'neural',
    highlights: [
      'Claude tool use for programmatic site navigation',
      'Structured knowledge base — no vector DB needed',
      'Token economy with session-based rate limiting',
      'Custom event bridge between agent and UI',
    ],
  },
  {
    id: 'helm',
    codename: 'COMMAND',
    title: 'Helm',
    description:
      'AI-powered product management tool that transforms ideas into actionable documentation using Claude.',
    longDescription:
      'Helm takes rough product ideas and transforms them into structured documentation — PRDs, technical specs, user stories — using Claude as the AI backbone. Built with Next.js and Supabase, it features persistent sessions, real-time document generation, and an iterative refinement workflow. Designed for solo founders and small teams who need PM-quality docs without a PM.',
    tech: ['Next.js', 'TypeScript', 'Claude API', 'Supabase', 'Zustand'],
    category: 'ai-product',
    status: 'ALPHA',
    accent: 'neural',
    highlights: [
      'Claude-powered document generation pipeline',
      'Persistent sessions with Supabase',
      'Zustand state management with hydration patterns',
      'Iterative refinement — chat with your docs',
    ],
  },
  {
    id: 'malleable-widgets',
    codename: 'MORPH',
    title: 'MalleableWidgets',
    description:
      'Runtime widget rewriting platform using Claude. Users describe changes in natural language and widgets transform live.',
    longDescription:
      'A platform where UI widgets can be rewritten at runtime through natural language instructions. Users describe what they want changed, Claude generates new widget code, and the result renders live in a sandboxed iframe. Uses a secure postMessage bridge for parent-child communication and Babel Standalone for runtime JSX compilation. Demonstrates the concept of malleable software — interfaces that adapt to their users.',
    tech: ['Next.js', 'Claude API', 'iframe Sandbox', 'Babel', 'Tailwind'],
    category: 'ai-product',
    status: 'ALPHA',
    accent: 'amber',
    highlights: [
      'Runtime JSX compilation with Babel Standalone',
      'Secure iframe sandbox with postMessage bridge',
      'Natural language to working UI in seconds',
      'No allow-same-origin — true security isolation',
    ],
  },
  {
    id: 'apex-iq',
    codename: 'VELOCITY',
    title: 'ApexIQ',
    description:
      'Strategy-first Formula 1 intelligence companion. Explains why races unfold the way they do through real-time strategy analysis.',
    longDescription:
      'ApexIQ goes beyond lap times and positions to explain the strategy behind F1 races. It analyzes tire decisions, pit window timing, pace breakdowns, and team strategies using data from the OpenF1 API. Built with Flutter and Riverpod for clean state management, with Firebase for real-time data sync. Designed for fans who want to understand the chess match behind the racing.',
    tech: ['Flutter', 'Firebase', 'OpenF1 API', 'Riverpod'],
    category: 'mobile',
    status: 'LIVE',
    accent: 'neural',
    link: 'https://apex-iq.web.app',
    highlights: [
      'Real-time F1 strategy analysis and visualization',
      'OpenF1 API integration for live race data',
      'Clean Architecture with Riverpod state management',
      'Cross-platform — iOS, Android, and web',
    ],
  },
  {
    id: 'leaklens',
    codename: 'SENTINEL',
    title: 'LeakLens',
    description:
      'Revenue intelligence platform that detects and explains hidden revenue leakage across billing systems.',
    longDescription:
      'LeakLens helps businesses find money they\'re losing without knowing it. It connects to billing systems, analyzes transaction patterns, and surfaces discrepancies — missed charges, pricing errors, failed renewals, and more. The platform explains each leak in plain language and estimates recovery value. Built with Flutter for the client and a TypeScript backend, following clean architecture principles throughout.',
    tech: ['Flutter', 'TypeScript', 'Firebase', 'Riverpod', 'Analytics'],
    category: 'mobile',
    status: 'IN_DEV',
    accent: 'neural',
    highlights: [
      'Automated revenue discrepancy detection',
      'Plain-language leak explanations with recovery estimates',
      'Clean Architecture with comprehensive documentation',
      'TypeScript backend with Firebase integration',
    ],
  },
  {
    id: 'cost-radar',
    codename: 'RADAR',
    title: 'CostRadar',
    description:
      'AI-powered vendor spend analytics for small businesses. Categorizes, tracks, and alerts on spending patterns.',
    longDescription:
      'CostRadar gives small businesses visibility into where their money goes across vendors and subscriptions. It automatically categorizes expenses, detects spending anomalies, and sends alerts when costs spike. Features include spend dashboards, vendor comparisons, and budget tracking. Built with Flutter and Firebase with a focus on clean architecture and production-ready patterns.',
    tech: ['Flutter', 'Firebase', 'Riverpod', 'Cloud Functions'],
    category: 'mobile',
    status: 'IN_DEV',
    accent: 'amber',
    highlights: [
      'AI-powered expense categorization',
      'Anomaly detection and spend alerts',
      'Vendor comparison dashboards',
      'Cloud Functions for background processing',
    ],
  },
  {
    id: 'roomzy',
    codename: 'VISION',
    title: 'Roomzy AI',
    description:
      'AI-powered virtual staging for real estate. Transforms empty rooms into furnished spaces using generative AI.',
    longDescription:
      'Roomzy AI helps real estate agents and Airbnb hosts market their listings faster by virtually staging empty rooms. Users upload a photo of an empty space, select a style, and generative AI produces a realistically furnished version. The app handles the full workflow from photo capture to final export, with multiple style presets and customization options.',
    tech: ['Flutter', 'Firebase', 'Generative AI', 'Cloud Functions'],
    category: 'mobile',
    status: 'BETA',
    accent: 'amber',
    highlights: [
      'Generative AI for photorealistic room staging',
      'Multiple design style presets',
      'Full photo capture to export workflow',
      'Cloud Functions for AI processing pipeline',
    ],
  },
  {
    id: 'helix',
    codename: 'HELIX',
    title: 'Helix',
    description:
      'Self-maintaining software framework. Projects fix themselves via AI-driven maintenance loops.',
    longDescription:
      'Helix is a framework that enables software projects to maintain themselves autonomously. It defines maintenance routines as YAML configurations, then uses AI to detect issues, generate fixes, and submit them for review. Think of it as CI/CD for code health — but instead of just running tests, it actively repairs what\'s broken. Currently powering maintenance for several projects in the portfolio.',
    tech: ['Python', 'YAML', 'GitHub Actions', 'AI Agents'],
    category: 'devtools',
    status: 'BETA',
    accent: 'neural',
    highlights: [
      'Autonomous code maintenance via AI agents',
      'YAML-driven maintenance routine definitions',
      'GitHub Actions integration for CI/CD',
      'Currently maintaining multiple live projects',
    ],
  },
  {
    id: 'scribe',
    codename: 'CHRONICLE',
    title: 'Scribe',
    description:
      'Story-Driven Development engine. Guides teams through requirements gathering disguised as collaborative storytelling.',
    longDescription:
      'Scribe introduces Story-Driven Development (SDD) — a methodology where requirements are gathered through guided storytelling rather than traditional interviews. Users describe their product as a story, and Scribe extracts features, user flows, edge cases, and technical requirements from the narrative. Part of the Generation28 tool family (Scribe → Dex → Arc28), it bridges the gap between human creativity and software specifications.',
    tech: ['Node.js', 'TypeScript', 'React', 'TipTap', 'Commander'],
    category: 'devtools',
    status: 'IN_DEV',
    accent: 'amber',
    highlights: [
      'Novel Story-Driven Development methodology',
      'Automatic feature extraction from narratives',
      'CLI + web interface for flexibility',
      'Part of the G28 developer tool ecosystem',
    ],
  },
  {
    id: 'gigledger',
    codename: 'LEDGER',
    title: 'GigLedger',
    description:
      'All-in-one business manager for freelancers. Invoicing, expense tracking, client management, and time logging.',
    longDescription:
      'GigLedger consolidates the scattered tools freelancers use into a single workflow. It handles invoicing, expense tracking, client management, and time logging — all designed around how freelancers actually work. Features include recurring invoice templates, expense categorization, client communication logs, and financial dashboards. Built with Flutter and Firebase for cross-platform access.',
    tech: ['Flutter', 'Firebase', 'Riverpod', 'Clean Architecture'],
    category: 'mobile',
    status: 'IN_DEV',
    accent: 'amber',
    highlights: [
      'Complete freelancer business workflow',
      'Invoice generation and tracking',
      'Time logging with client attribution',
      'Financial dashboards and reporting',
    ],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter((p) => p.category === category);
}
