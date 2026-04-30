# DevMotors - Professional Services Website

![App Preview](https://imgix.cosmicjs.com/6817ffe0-44c7-11f1-9747-51b5996215f2-autopilot-photo-1519085360753-af0119f7cbe7-1777575866070.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, professional company website built with Next.js 16 and Cosmic CMS. Features dynamic content management for services, team members, case studies, and client testimonials.

## Features

- 🏠 Beautiful homepage with hero, featured services, team, and testimonials
- 🛠️ Services pages with detailed descriptions
- 👥 Team member profiles with bios and contact info
- 📊 Case studies showcasing client work and results
- 💬 Client testimonials with photos
- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Fast performance with Next.js Server Components
- 🖼️ Optimized images via imgix

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69f3a75a34c6abdfea2ba4a8&clone_repository=69f3a86b34c6abdfea2ba4e3)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a professional services company with services offered, team members (including photos and bios), case studies, and client testimonials.
> 
> User instructions: A company website with services, team members, case studies, and testimonials"

### Code Generation Prompt

> Build a Next.js application for a company website called "DevMotors". The content is managed in Cosmic CMS with the following object types: services, team-members, case-studies, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
> 
> User instructions: A company website with services, team members, case studies, and testimonials

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) - React framework
- [React 19](https://react.dev) - UI library
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Cosmic SDK](https://www.cosmicjs.com/docs) - Content management
- [Bun](https://bun.sh) - Package manager and runtime

## Getting Started

### Prerequisites

- Bun installed
- A Cosmic account with the required content types

### Installation

1. Clone the repository
2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file with your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun run dev
```

## Cosmic SDK Examples

### Fetching Services
```typescript
const response = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a Single Case Study
```typescript
const response = await cosmic.objects
  .findOne({ type: 'case-studies', slug })
  .depth(1)
```

## Cosmic CMS Integration

This app uses your existing Cosmic content types:
- **services**: Company services with descriptions and images
- **team-members**: Team profiles with photos and bios
- **case-studies**: Project case studies with related content
- **testimonials**: Client testimonials with photos

## Deployment Options

Deploy to [Vercel](https://vercel.com) or [Netlify](https://netlify.com). Set the environment variables in your hosting dashboard.

<!-- README_END -->