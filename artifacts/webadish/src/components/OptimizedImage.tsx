interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

/**
 * Optimized image component with responsive sizing and lazy loading
 * Adds width/height parameters to Unsplash URLs for proper dimensions
 */
export default function OptimizedImage({ src, alt, className = "", width = 662, height = 413 }: OptimizedImageProps) {
  // Extract base Unsplash URL if it contains parameters
  const baseUrl = src.includes("?") ? src.split("?")[0] : src;

  // Build optimized Unsplash URL with correct dimensions
  // Use w and h for exact dimensions, q=80 for compression
  const optimizedUrl = `${baseUrl}?auto=format&fit=crop&q=80&w=${width}&h=${height}`;

  // Build 2x URL for high DPI screens
  const retina2xUrl = `${baseUrl}?auto=format&fit=crop&q=80&w=${width * 2}&h=${height * 2}`;

  return (
    <img
      src={optimizedUrl}
      srcSet={`${optimizedUrl} 1x, ${retina2xUrl} 2x`}
      alt={alt}
      className={className}
      loading="lazy"
      width={width}
      height={height}
    />
  );
}
