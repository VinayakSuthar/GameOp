import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc?: string;
}

export default function ImageWithFallback({
  alt,
  src,
  fallbackSrc = "/images/fallback.jpg",
  ...rest
}: ImageWithFallbackProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <Image
      {...rest}
      alt={alt}
      src={imageError ? fallbackSrc : src}
      onError={() => setImageError(true)}
    />
  );
}
