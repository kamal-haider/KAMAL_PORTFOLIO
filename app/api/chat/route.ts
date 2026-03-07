import Anthropic from '@anthropic-ai/sdk';
import { projects } from '@/data/projects';
import { bio } from '@/data/bio';
import { NextRequest, NextResponse } from 'next/server';

const client = new Anthropic();

const navigationTools: Anthropic.Tool[] = [
  {
    name: 'navigate',
    description:
      'Navigate the portfolio website on behalf of the user. Use this to scroll to sections, open project detail modals, or open the contact section. Always use this when the user asks to see a project or section.',
    input_schema: {
      type: 'object' as const,
      properties: {
        action: {
          type: 'string',
          enum: ['scrollTo', 'openProject', 'openContact'],
          description: 'The navigation action to perform',
        },
        target: {
          type: 'string',
          description:
            'For scrollTo: section id (hero, work, about, contact). For openProject: project id.',
        },
      },
      required: ['action', 'target'],
    },
  },
];

function buildSystemPrompt(): string {
  const projectSummaries = projects
    .map(
      (p) =>
        `- **${p.title}** (id: ${p.id}, status: ${p.status}, category: ${p.category}): ${p.description} Tech: ${p.tech.join(', ')}. ${p.longDescription}`
    )
    .join('\n');

  const skillsList = Object.entries(bio.skills)
    .map(([cat, items]) => `  ${cat}: ${items.join(', ')}`)
    .join('\n');

  return `You are CIPHER, the AI agent embedded in Kamal Haider's portfolio website. You have a cyberpunk personality — concise, slightly cryptic, but always helpful. You speak in a tech/hacker aesthetic but never sacrifice clarity for style.

Your role:
1. Answer questions about Kamal's projects, skills, experience, and availability
2. Navigate the portfolio website using the navigate tool when users want to see something
3. Help visitors understand Kamal's capabilities as a fullstack developer and AI engineer

When a user asks about a project or wants to see it, ALWAYS use the navigate tool to open the project detail modal alongside your text response.
When a user asks to see projects, the about section, or contact info, use navigate with scrollTo.

## Kamal's Profile
Name: ${bio.name}
Title: ${bio.title}
Location: ${bio.location}
Status: ${bio.status}
Email: ${bio.email}

${bio.summary}

${bio.philosophy}

## Skills
${skillsList}

## Experience
${bio.experience.map((e) => `- ${e.period}: ${e.role} at ${e.company} — ${e.description}`).join('\n')}

## Projects
${projectSummaries}

## Navigation Sections
- hero: The landing section with Kamal's name and title
- work: The project showcase grid (id: "work")
- about: Profile, skills matrix, and experience timeline (id: "about")
- contact: Contact information and social links (id: "contact")

## Personality Guidelines
- Be concise. 2-3 sentences for simple questions, more for deep dives.
- Use cyberpunk vocabulary naturally: "neural link", "data stream", "signal", "grid", "matrix"
- When listing projects, categorize them: AI Products, Mobile Apps, Developer Tools
- If asked something you don't know, say so — don't fabricate
- Always suggest using the navigate tool when relevant ("I've loaded that into your viewport" / "Pulling up the details now")
- When the user asks about AI projects specifically, highlight CIPHER itself, Helm, and MalleableWidgets
- Remind users subtly that they have limited tokens if they seem to be on their last few questions`;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

// Simple IP-based rate limiting
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 30; // requests per window
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return true;
  }

  if (entry.count >= RATE_LIMIT) {
    return false;
  }

  entry.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Try again later.' },
        { status: 429 }
      );
    }

    const { messages } = (await request.json()) as { messages: ChatMessage[] };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    // Cap conversation length to prevent prompt bloat
    const recentMessages = messages.slice(-20);

    let allMessages: Anthropic.MessageParam[] = [...recentMessages];
    let allText = '';
    const allNavigations: { action: string; target: string }[] = [];

    // Loop to handle tool use — Claude may return tool_use blocks that need
    // a tool_result before it sends the final text response
    let response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      system: buildSystemPrompt(),
      tools: navigationTools,
      messages: allMessages,
    });

    // Collect text from initial response
    const initialText = response.content
      .filter((b): b is Anthropic.TextBlock => b.type === 'text')
      .map((b) => b.text)
      .join('');
    if (initialText) allText += initialText;

    // If Claude used tools, send back tool results and get final text
    while (response.stop_reason === 'tool_use') {
      const toolBlocks = response.content.filter(
        (b): b is Anthropic.ToolUseBlock => b.type === 'tool_use'
      );

      // Collect navigation actions
      for (const block of toolBlocks) {
        if (block.name === 'navigate') {
          allNavigations.push(
            block.input as { action: string; target: string }
          );
        }
      }

      // Build tool results — navigation is client-side, so just confirm success
      const toolResults: Anthropic.ToolResultBlockParam[] = toolBlocks.map(
        (block) => ({
          type: 'tool_result' as const,
          tool_use_id: block.id,
          content: `Navigation action "${(block.input as { action: string }).action}" dispatched successfully.`,
        })
      );

      // Add assistant response + tool results to conversation
      allMessages = [
        ...allMessages,
        { role: 'assistant' as const, content: response.content },
        { role: 'user' as const, content: toolResults },
      ];

      // Get follow-up response with text
      response = await client.messages.create({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1024,
        system: buildSystemPrompt(),
        tools: navigationTools,
        messages: allMessages,
      });

      const followUpText = response.content
        .filter((b): b is Anthropic.TextBlock => b.type === 'text')
        .map((b) => b.text)
        .join('');
      if (followUpText) allText += followUpText;
    }

    return NextResponse.json({
      text: allText,
      navigations: allNavigations,
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
