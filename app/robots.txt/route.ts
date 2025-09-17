import { NextResponse } from 'next/server';

export function GET() {
  const robotsContent = `User-agent: *
Allow: /

Sitemap: https://dev-pick.vercel.app/sitemap.xml`;

  return new NextResponse(robotsContent, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}