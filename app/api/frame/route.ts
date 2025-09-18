import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Handle frame button interactions
    const buttonIndex = body.untrustedData?.buttonIndex;
    
    let responseHtml = '';
    
    switch (buttonIndex) {
      case 1:
        // View Dashboard
        responseHtml = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta property="fc:frame" content="vNext" />
              <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/api/og?view=dashboard" />
              <meta property="fc:frame:button:1" content="Portfolio" />
              <meta property="fc:frame:button:2" content="Deal Flow" />
              <meta property="fc:frame:button:3" content="Risk Analysis" />
              <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/api/frame" />
            </head>
            <body>
              <h1>AlphaFlow Dashboard</h1>
            </body>
          </html>
        `;
        break;
      case 2:
        // Browse Deals
        responseHtml = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta property="fc:frame" content="vNext" />
              <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/api/og?view=deals" />
              <meta property="fc:frame:button:1" content="View Deal 1" />
              <meta property="fc:frame:button:2" content="View Deal 2" />
              <meta property="fc:frame:button:3" content="Back to Dashboard" />
              <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/api/frame" />
            </head>
            <body>
              <h1>AlphaFlow Deal Flow</h1>
            </body>
          </html>
        `;
        break;
      default:
        // Default response
        responseHtml = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta property="fc:frame" content="vNext" />
              <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/api/og" />
              <meta property="fc:frame:button:1" content="View Dashboard" />
              <meta property="fc:frame:button:2" content="Browse Deals" />
              <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/api/frame" />
            </head>
            <body>
              <h1>AlphaFlow - AI Angel Investing</h1>
            </body>
          </html>
        `;
    }
    
    return new NextResponse(responseHtml, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (error) {
    console.error('Frame API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  return new NextResponse(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/api/og" />
        <meta property="fc:frame:button:1" content="View Dashboard" />
        <meta property="fc:frame:button:2" content="Browse Deals" />
        <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/api/frame" />
      </head>
      <body>
        <h1>AlphaFlow - AI Angel Investing</h1>
      </body>
    </html>
  `, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
