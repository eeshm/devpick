// app/sitemap.xml/route.ts - Fixed Sitemap
import { NextResponse } from 'next/server';
import { getAllCategories, getTechStacksByCategory } from '@/lib/database';

export async function GET() {
  const baseUrl = 'https://dev-pick.vercel.app'; // Your domain
  
  try {
    // Get all categories using the database function directly
    const { data: categories} = await getAllCategories();
    
    if (!categories) {
      throw new Error('Failed to fetch categories');
    }
    
    // Get all tech stacks
    const allTechStacks = [];
    for (const category of categories) {
      try {
        const { data: stacks } = await getTechStacksByCategory(
          category.slug, 
        );
        
        if (stacks) {
          allTechStacks.push(...stacks);
        }
      } catch (error) {
        console.warn(`Failed to fetch stacks for category ${category.slug}:`, error);
        // Continue with other categories even if one fails
      }
    }

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  ${categories.map(category => `
  <url>
    <loc>${baseUrl}/category/${category.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
  
  ${allTechStacks.map(stack => `
  <url>
    <loc>${baseUrl}/tech-stack/${stack.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`;

    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=86400'
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    // Return a basic sitemap even if data fetching fails
    const basicSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

    return new NextResponse(basicSitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=3600' // Shorter cache on error
      },
    });
  }
}