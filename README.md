# Jatin Srivastava — Portfolio

Personal portfolio website built with React, Framer Motion, and Tailwind CSS. Features scroll-driven animations, a sticky project card stack, parallax marquee, and a fully responsive layout across mobile, tablet, and desktop.

## Live Site

[jatin-portfolio.vercel.app](https://jatin-portfolio.vercel.app)

## Tech Stack

- **React 18** — UI framework
- **TypeScript** — type safety throughout
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — scroll animations, fade-ins, sticky card scale
- **Create React App** — build tooling

## Sections

- **Hero** — full-screen intro with magnetic portrait and smooth scroll nav
- **Marquee** — parallax scrolling project image rows
- **About** — background, bio, and full tech stack
- **Skills** — numbered service list with scroll fade-ins
- **Projects** — sticky scroll-stacking cards with live/GitHub links
- **Certifications** — credentials and achievements
- **Contact** — reach out form

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm start

# Production build
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Magnet.tsx                — mouse-following magnetic effect
│   ├── FadeIn.tsx                — scroll-triggered whileInView animation
│   ├── AnimatedText.tsx          — character-by-character scroll opacity
│   ├── ContactButton.tsx         — gradient pill button
│   ├── LiveProjectButton.tsx     — ghost outline pill button
│   ├── HeroSection.tsx           — full-viewport hero
│   ├── MarqueeSection.tsx        — scroll-driven dual-row image marquee
│   ├── AboutSection.tsx          — bio, tech stack, animated heading
│   ├── ServicesSection.tsx       — staggered numbered service items
│   ├── ProjectsSection.tsx       — sticky stacking cards with scale
│   └── CertificationsSection.tsx — credentials and achievements
├── App.tsx
├── index.tsx
└── index.css                     — Tailwind + global styles + .hero-heading
public/
├── images/
├── resume/
│   └── Srivastava_Jatin_Resume.pdf
└── index.html
```

## Deployment

Deployed on [Vercel](https://vercel.com). Every push to `main` triggers an automatic redeploy.

## License

MIT — see [LICENSE](./LICENSE)