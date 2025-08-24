'use client';

import Image from 'next/image';
import { useState } from 'react';
import { getOptimizedImageProps } from '@/lib/image-utils';

interface OptimizedTechImageProps {
  logoUrl?: string;
  fallbackLogo?: string;
  name: string;
  size?: 'small' | 'medium' | 'large' | 'hero';
  priority?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function OptimizedTechImage({
  logoUrl,
  fallbackLogo = '/default-tech-logo.svg',
  name,
  size = 'medium',
  priority = false,
  className = '',
  onClick
}: OptimizedTechImageProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const imageProps = getOptimizedImageProps(
    error ? undefined : logoUrl,
    fallbackLogo,
    `${name} logo`,
    size,
    priority
  );

  return (
    <div className={`relative ${className}`} onClick={onClick}>
      <Image
        {...imageProps}
        onLoad={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
        style={{
          transition: 'opacity 0.1s ease-in-out',
          opacity: loading ? 0 : 1
        }}
      />
      {loading && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse rounded"
          style={{ width: imageProps.width, height: imageProps.height }}
        />
      )}
    </div>
  );
}