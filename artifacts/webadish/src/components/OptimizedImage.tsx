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
  const isUnsplash = src.includes("images.unsplash.com");

  if (!isUnsplash) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        width={width}
        height={height}
      />
    );
  }

  const baseUrl = src.includes("?") ? src.split("?")[0] : src;
  const optimizedUrl = `${baseUrl}?auto=format&fit=crop&q=80&w=${width}&h=${height}`;
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
