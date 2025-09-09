# CLAUDE.md - Project Context for RückbauPRO Website

## Project Overview
This is a Next.js-based website for RückbauPRO, a professional demolition and deconstruction company operating across multiple German cities. The website serves as the primary lead generation and information platform for customers needing demolition and deconstruction services.

## Tech Stack
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Static/SSG with dynamic routes
- **Key Libraries**: React, next/image, next/font

## Project Structure
```
app/
├── components/          # Shared React components
├── standorte/[stadt]/  # Dynamic city pages
├── kontakt/            # Contact forms
├── preise/             # Pricing/calculator
└── leistungen/         # Services overview
```

## Critical Business Features
1. **Contact**: Must be immediately accessible
2. **Cost Calculator**: Calculator component for quotes
3. **Location Pages**: SEO-optimized for each service city
4. **Trust Elements**: Certifications, reviews
5. **Video Content**: Hero videos demonstrating professionalism

## Performance Requirements
- Mobile PageSpeed Score > 90 (construction site access)
- Desktop PageSpeed Score > 95
- Contact button interactive < 2 seconds
- Videos must not block initial page load

## Custom Agents Available
1. **rueckbau-frontend-specialist**: For UI/UX improvements specific to demolition services
2. **rueckbau-test-specialist**: For testing calculators, forms, and location features
3. **rueckbau-performance-optimizer**: For video and mobile optimization

## Development Commands
```bash
# Development
npm run dev

# Build
npm run build

# Type checking (if available)
npm run typecheck

# Linting (if available)
npm run lint
```

## Key Considerations
- **Trust Factor**: Users need reliable demolition services - UI must be professional and trustworthy
- **Mobile First**: Many users access from construction sites with poor connectivity
- **Local SEO**: Each city page must be optimized for local search
- **Compliance**: Must display all required certifications and legal information
- **Conversion**: Primary goals are phone calls and contact form submissions

## Common Tasks
- Adding new city pages under /standorte/
- Optimizing video loading performance
- Updating pricing calculator logic
- Improving mobile contact accessibility
- Adding customer testimonials/reviews

## Testing Focus Areas
- Calculator accuracy for different scenarios
- Contact form delivery reliability
- Mobile responsive design
- Video playback across devices
- City page routing and content

## Known Patterns
- City pages use dynamic routing with [stadt] parameter
- Videos stored in public/videos/
- Images use Next.js Image component for optimization
- Components follow React functional component patterns

Remember: This is a professional demolition service website where performance and reliability directly impact business outcomes.