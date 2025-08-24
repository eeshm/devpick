export interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export function getOptimizedImageProps(
  logoUrl: string | undefined,
  fallbackLogo: string,
  alt: string,
  size: 'small' | 'medium' | 'large' | 'hero' = 'medium',
  priority: boolean = false
): OptimizedImageProps {
  const sizeMap = {
    small: { width: 24, height: 24, sizes: '24px' },
    medium: { width: 48, height: 48, sizes: '48px' },
    large: { width: 64, height: 64, sizes: '64px' },
    hero: { width: 128, height: 128, sizes: '(max-width: 768px) 64px, 128px' }
  };

  const { width, height, sizes } = sizeMap[size];

  return {
    src: logoUrl || fallbackLogo,
    alt,
    width,
    height,
    priority,
    className: 'object-contain',
    sizes,
    placeholder: 'blur',
    blurDataURL: generateBlurDataURL(width, height)
  };
}

/**
 * Generates a simple blur placeholder to prevent layout shift
 */
function generateBlurDataURL(width: number, height: number): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f3f4f6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e5e7eb;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#gradient)" />
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}