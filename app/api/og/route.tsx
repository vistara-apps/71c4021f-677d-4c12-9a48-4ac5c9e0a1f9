import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const view = searchParams.get('view') || 'default';
    
    // Generate SVG based on view
    let svg = '';
    
    switch (view) {
      case 'dashboard':
        svg = `
          <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#1e293b;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#0f172a;stop-opacity:1" />
              </linearGradient>
            </defs>
            <rect width="1200" height="630" fill="url(#bg)"/>
            <text x="60" y="100" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="#f1f5f9">AlphaFlow</text>
            <text x="60" y="140" font-family="Arial, sans-serif" font-size="24" fill="#94a3b8">Portfolio Dashboard</text>
            
            <rect x="60" y="180" width="280" height="120" rx="12" fill="#1e293b" stroke="#334155" stroke-width="1"/>
            <text x="80" y="210" font-family="Arial, sans-serif" font-size="16" fill="#94a3b8">Total Invested</text>
            <text x="80" y="240" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="#f1f5f9">$105K</text>
            <text x="80" y="270" font-family="Arial, sans-serif" font-size="14" fill="#10b981">+12.5%</text>
            
            <rect x="360" y="180" width="280" height="120" rx="12" fill="#1e293b" stroke="#334155" stroke-width="1"/>
            <text x="380" y="210" font-family="Arial, sans-serif" font-size="16" fill="#94a3b8">Current Value</text>
            <text x="380" y="240" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="#f1f5f9">$205K</text>
            <text x="380" y="270" font-family="Arial, sans-serif" font-size="14" fill="#10b981">+95.2%</text>
            
            <rect x="660" y="180" width="280" height="120" rx="12" fill="#1e293b" stroke="#334155" stroke-width="1"/>
            <text x="680" y="210" font-family="Arial, sans-serif" font-size="16" fill="#94a3b8">Average IRR</text>
            <text x="680" y="240" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="#f1f5f9">58.3%</text>
            <text x="680" y="270" font-family="Arial, sans-serif" font-size="14" fill="#10b981">+8.3%</text>
          </svg>
        `;
        break;
      case 'deals':
        svg = `
          <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#1e293b;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#0f172a;stop-opacity:1" />
              </linearGradient>
            </defs>
            <rect width="1200" height="630" fill="url(#bg)"/>
            <text x="60" y="100" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="#f1f5f9">AlphaFlow</text>
            <text x="60" y="140" font-family="Arial, sans-serif" font-size="24" fill="#94a3b8">AI Deal Sourcing</text>
            
            <rect x="60" y="180" width="520" height="100" rx="12" fill="#1e293b" stroke="#334155" stroke-width="1"/>
            <text x="80" y="210" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#f1f5f9">NextGen Robotics</text>
            <text x="80" y="235" font-family="Arial, sans-serif" font-size="14" fill="#94a3b8">AI-powered robotics for manufacturing</text>
            <text x="80" y="255" font-family="Arial, sans-serif" font-size="14" fill="#3b82f6">Series A • $5M Round</text>
            <text x="480" y="210" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#10b981">8.7</text>
            <text x="480" y="235" font-family="Arial, sans-serif" font-size="12" fill="#94a3b8">AI Score</text>
            
            <rect x="60" y="300" width="520" height="100" rx="12" fill="#1e293b" stroke="#334155" stroke-width="1"/>
            <text x="80" y="330" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#f1f5f9">BioMed Analytics</text>
            <text x="80" y="355" font-family="Arial, sans-serif" font-size="14" fill="#94a3b8">ML for drug discovery acceleration</text>
            <text x="80" y="375" font-family="Arial, sans-serif" font-size="14" fill="#3b82f6">Seed • $2M Round</text>
            <text x="480" y="330" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#10b981">9.2</text>
            <text x="480" y="355" font-family="Arial, sans-serif" font-size="12" fill="#94a3b8">AI Score</text>
          </svg>
        `;
        break;
      default:
        svg = `
          <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
              </linearGradient>
            </defs>
            <rect width="1200" height="630" fill="url(#bg)"/>
            <text x="60" y="200" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="white">AlphaFlow</text>
            <text x="60" y="260" font-family="Arial, sans-serif" font-size="32" fill="rgba(255,255,255,0.9)">Your AI co-pilot for smarter angel investing</text>
            <text x="60" y="320" font-family="Arial, sans-serif" font-size="24" fill="rgba(255,255,255,0.8)">• AI-powered deal sourcing & scoring</text>
            <text x="60" y="360" font-family="Arial, sans-serif" font-size="24" fill="rgba(255,255,255,0.8)">• Unified portfolio dashboard</text>
            <text x="60" y="400" font-family="Arial, sans-serif" font-size="24" fill="rgba(255,255,255,0.8)">• Automated risk analysis</text>
            <text x="60" y="440" font-family="Arial, sans-serif" font-size="24" fill="rgba(255,255,255,0.8)">• Streamlined due diligence</text>
          </svg>
        `;
    }
    
    return new NextResponse(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('OG image generation error:', error);
    return NextResponse.json({ error: 'Failed to generate image' }, { status: 500 });
  }
}
