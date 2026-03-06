# CLAUDE.md - Portfolio Project Guide

## Project Overview

This is **Kamal Haider's personal portfolio** - a Next.js 14 static site showcasing AI Mobile Engineering work. The site uses a **Neural Interface** design theme with a distinctive cyan (#00FFE0) + magenta (#FF00AA) accent system.

## Tech Stack

- **Framework**: Next.js 14 (App Router, Static Export)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 3.4 with custom design tokens
- **Fonts**: JetBrains Mono (display/code) + Outfit (body)
- **Deployment**: GitHub Pages via static export

---

## Job Search Strategy

### Daily Rhythm

1. **Check Upwork** for new Flutter/AI jobs (sort by "Most Recent")
2. **Apply to 2-3 high-quality matches** per day (conserve connects)
3. **Monitor Arc.dev** for new opportunities
4. **Check messages** for responses from previous applications

### Platform Strategy

| Platform | Status | Approach |
|----------|--------|----------|
| Upwork | Active | Focus on Flutter + Firebase + AI jobs, $1K+ budgets |
| Arc.dev | Active | Full-time and freelance Flutter roles |
| Toptal | Waitlist | Monitor for acceptance |
| LinkedIn | SKIP | Privacy risk - employer visibility |

### Search Terms That Work

- "Flutter Firebase"
- "Flutter AI"
- "Flutter developer"
- Filter: $1K+ budget, "Less than 5 proposals"

### Application Quality Guidelines

- Always tailor cover letter to job requirements
- Highlight relevant projects: ApexIQ, Roomzy AI, Moro
- Mention specific tech stack matches (Riverpod, Firebase, etc.)
- Keep proposals concise but specific
- Match bid to client's budget range when reasonable

### Stealth Job Hunting (Privacy)

**Avoid LinkedIn** - Current employer could see activity. Safe alternatives:
- Upwork (separate ecosystem)
- Arc.dev (not connected to LinkedIn)
- Toptal (invite-only)
- We Work Remotely (if needed)
- Wellfound/AngelList (if needed)
- Direct company career pages

---

## Key Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Build for production
npm run export   # Static export to /out
npm run lint     # ESLint check
```

## Project Structure

```
app/
├── layout.tsx          # Root layout, fonts, metadata
├── page.tsx            # Single-page composition
└── globals.css         # Custom utilities/animations

components/             # React components
hooks/                  # Custom hooks (useSound, etc.)
data/                   # Static data files
```

## Design System

**Reference**: See `DESIGN_SYSTEM.md` for complete specification.

- `void`: #030303 (background)
- `neural`: #00FFE0 (primary accent - cyan)
- `synapse`: #FF00AA (secondary accent - magenta)
