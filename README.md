# ZTS Gigs Landing Page 
A modern landing page for India's premier live music gig marketplace, built with Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **URL State**: nuqs
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm 8.0 or later

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### Development

```bash
# Run linting
pnpm lint

# Run build (recommended before committing)
pnpm build
```

## Project Structure

```
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── layout/             # Layout components (navbar, footer)
│   │   └── sections/           # Landing page sections
│   └── lib/
│       ├── utils.ts            # Utility functions
│       └── logger.ts           # Centralized logger
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── next.config.mjs             # Next.js configuration
```

## Features

- 🎨 Dark theme with purple/pink accent colors
- 📱 Fully responsive design (mobile-first)
- ⚡ Server Components by default
- 🎭 Smooth animations with Framer Motion
- 🔒 TypeScript strict mode
- 📊 Centralized logging (no console.log)
- 🎯 SEO optimized

## Code Standards

- No `any` types
- No `console.log` (use logger)
- Interfaces over types for objects
- Maps instead of enums
- Server Components by default
- Minimal `use client` usage
