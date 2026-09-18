import type { PhotoAsset } from '../../types/content'

interface PhotoProps {
  photo: PhotoAsset
  sizes: string
  decorative?: boolean
}

export function Photo({ photo, sizes, decorative = false }: PhotoProps) {
  return (
    <img
      className="photo"
      src={`${photo.src}&w=960`}
      srcSet={[400, 640, 960, 1280].map((width) => `${photo.src}&w=${width} ${width}w`).join(', ')}
      sizes={sizes}
      width={photo.width}
      height={photo.height}
      alt={decorative ? '' : photo.alt}
      loading="lazy"
      decoding="async"
      style={{ objectPosition: photo.position }}
    />
  )
}
