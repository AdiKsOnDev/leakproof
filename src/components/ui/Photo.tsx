import type { PhotoAsset } from '../../types/content'

interface PhotoProps {
  photo: PhotoAsset
  sizes: string
  decorative?: boolean
  className?: string
  priority?: boolean
}

export function Photo({ photo, sizes, decorative = false, className = '', priority = false }: PhotoProps) {
  const isUnsplash = photo.src.startsWith('https://images.unsplash.com/')

  return (
    <img
      className={`photo ${className}`}
      src={isUnsplash ? `${photo.src}&w=960` : photo.src}
      srcSet={isUnsplash ? [400, 640, 960, 1280].map((width) => `${photo.src}&w=${width} ${width}w`).join(', ') : photo.srcSet}
      sizes={sizes}
      width={photo.width}
      height={photo.height}
      alt={decorative ? '' : photo.alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      style={{ objectPosition: photo.position }}
    />
  )
}
