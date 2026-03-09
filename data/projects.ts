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
    id: 'nexus-api',
    codename: 'NEXUS',
    title: 'NexusAPI',
    description:
      'The API platform for the agent economy. MCP-native registry, gateway, and metering infrastructure for AI agent services.',
    longDescription:
      'NexusAPI is infrastructure for the emerging agent economy — a platform where AI agents can discover, connect to, and consume APIs through the Model Context Protocol (MCP). It provides an MCP-native registry, API gateway, metering and billing infrastructure, and rate limiting. Built to solve the problem of how autonomous agents will interact with the growing ecosystem of AI services.',
    tech: ['Node.js', 'TypeScript', 'MCP', 'PostgreSQL', 'REST APIs'],
    category: 'backend',
    status: 'ALPHA',
    accent: 'neural',
    highlights: [
      'MCP-native API registry and gateway',
      'Metering and billing infrastructure for agent services',
      'Rate limiting and access control for autonomous agents',
      'Built for the Model Context Protocol ecosystem',
    ],
  },
  {
    id: 'dex',
    codename: 'FORGE',
    title: 'Dex',
    description:
      'Git-native development management built for AI agent workflows. Tasks, stories, and project metadata as version-controlled artifacts.',
    longDescription:
      'Dex reimagines project management for the age of AI-assisted development. Instead of external tools like Jira or Linear, Dex stores tasks, stories, and project metadata directly in your Git repo as version-controlled YAML artifacts. Designed specifically for agent-driven development workflows, it provides safety rails and structured context that AI agents need to work effectively. Part of the Generation28 developer tool ecosystem.',
    tech: ['Node.js', 'TypeScript', 'Commander CLI', 'YAML', 'Git'],
    category: 'devtools',
    status: 'BETA',
    accent: 'neural',
    github: 'https://github.com/kamal-haider',
    highlights: [
      'Git-native — tasks and stories live in the repo',
      'Built for AI agent development workflows',
      'CLI-first with structured YAML artifacts',
      'Safety rails for autonomous agent operations',
    ],
  },
  {
    id: 'moro',
    codename: 'SYNAPSE',
    title: 'MORO',
    description:
      'AI-powered learning platform with automated content generation. Transforms study material into intelligent flashcards and quizzes.',
    longDescription:
      'MORO uses LLMs to transform study material into structured learning experiences. Users input content and the AI generates flashcards, quizzes, and spaced repetition schedules automatically. Built with Flutter for cross-platform delivery and Python serverless functions for AI processing. Originally designed for medical students who need to memorize large volumes of clinical information efficiently.',
    tech: ['Flutter', 'OpenAI', 'Python', 'Firebase', 'Serverless'],
    category: 'ai-product',
    status: 'BETA',
    accent: 'amber',
    highlights: [
      'LLM-powered content generation from study material',
      'Spaced repetition scheduling algorithm',
      'Python serverless backend for AI processing',
      'Cross-platform — iOS, Android, and web',
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
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter((p) => p.category === category);
}
