import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */


const nextConfig :NextConfig= {
  images: {
    // Allowed external image domains
    domains: [
      'cdn.jsdelivr.net',
      'raw.githubusercontent.com',
      'upload.wikimedia.org',
      'logos-world.net',
      'seeklogo.com',
      'jenfcbtlwioirmvvsvur.supabase.co' // Supabase project domain
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 24, 32, 48, 64, 96, 128, 256],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy:
      "default-src 'self'; script-src 'none'; sandbox; img-src 'self' data: https:;",
    minimumCacheTTL: 60 * 60 * 24 * 365, //cached for 1 year
    loader: 'default',
  },
  compress: true,
}

export default nextConfig
