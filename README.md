# AlphaFlow - AI Angel Investing Platform

Your AI co-pilot for smarter angel investing. Built as a Base Mini App with Next.js 15 and MiniKit integration.

## Features

- **Unified Portfolio Dashboard**: Track ROI, IRR, and performance metrics across all investments
- **AI-Powered Deal Sourcing**: Discover and score investment opportunities with AI
- **Automated Risk Analysis**: Get data-driven insights for portfolio optimization
- **Streamlined Due Diligence**: Automated information aggregation for faster deal evaluation

## Tech Stack

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- MiniKit (Base Mini App framework)
- OnchainKit for wallet integration
- Recharts for data visualization

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
# Add your MiniKit API key
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Base Mini App Integration

This app is designed to work seamlessly within the Base App ecosystem:

- Frame integration for social discovery
- MiniKit wallet connectivity
- Optimized for mobile-first experience
- Dark theme matching Base App design

## Project Structure

```
app/
├── layout.tsx          # Root layout with providers
├── page.tsx           # Main dashboard page
├── providers.tsx      # MiniKit provider setup
├── globals.css        # Global styles
└── api/
    ├── frame/         # Frame API endpoints
    └── og/            # Open Graph image generation

components/
├── Dashboard.tsx      # Main dashboard component
├── PortfolioOverview.tsx
├── DealFeed.tsx
├── RiskAnalysis.tsx
└── ui/               # Reusable UI components

lib/
├── types.ts          # TypeScript type definitions
└── mockData.ts       # Mock data for development
```

## Development

- All React components use `.tsx` extension
- TypeScript strict mode enabled
- Mobile-first responsive design
- Dark theme optimized for Base App

## Deployment

The app is optimized for deployment on Vercel or similar platforms that support Next.js 15.

## License

MIT License
