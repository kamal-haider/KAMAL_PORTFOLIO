# Kamal Haider's Portfolio

A modern, single-page portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- **Hero Section** - Clear positioning and value proposition
- **Featured Work** - 4 detailed case studies (Marathons, Roomzy, Pop Quiz, STR Systems)
- **Other Projects** - Quick grid of additional work
- **Experience & Skills** - Professional experience and technical skills
- **About** - Personal story and what drives you
- **Contact** - Simple contact information

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Inter Font** - Modern, readable typography

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

Before deploying, update the following:

1. **Contact Information** (`components/Contact.tsx`):
   - Replace `youremail@domain.com` with your email
   - Update LinkedIn and GitHub links

2. **Resume** (`components/Hero.tsx`):
   - Add your resume PDF to the `public` folder
   - Update the link in the Hero component

3. **Experience** (`components/Experience.tsx`):
   - Add your actual work experience
   - Update company names and years

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with default settings

Or deploy to Netlify:

1. Push your code to GitHub
2. Import the repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Fixed navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── FeaturedWork.tsx # Case studies
│   ├── OtherProjects.tsx # Additional projects
│   ├── Experience.tsx  # Experience & skills
│   ├── About.tsx       # About section
│   └── Contact.tsx     # Contact section
└── public/             # Static assets (add resume.pdf here)
```
