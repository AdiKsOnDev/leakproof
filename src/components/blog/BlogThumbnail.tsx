import { Check, MapPin, Search } from 'lucide-react'
import type { BlogThumbnailVariant } from '../../types/content'

interface BlogThumbnailProps {
  variant: BlogThumbnailVariant
  title: string
}

const thumbnailLabels: Record<BlogThumbnailVariant, string> = {
  diagnostic: 'Enquiry route',
  'local-seo': 'Local search',
  checklist: 'Redesign plan',
}

export function BlogThumbnail({ variant, title }: BlogThumbnailProps) {
  return (
    <div className={`blog-thumbnail blog-thumbnail--${variant}`} role="img" aria-label={`Illustration for ${title}`}>
      <span className="blog-thumbnail__label">{thumbnailLabels[variant]}</span>

      {variant === 'diagnostic' && (
        <div className="blog-thumbnail__diagnostic">
          <div className="blog-thumbnail__metric blog-thumbnail__metric--traffic">
            <span>Visits</span>
            <strong>2,481</strong>
          </div>
          <svg viewBox="0 0 600 260" fill="none" aria-hidden="true">
            <path className="blog-thumbnail__route-solid" d="M38 38C176 36 180 114 302 118" />
            <path className="blog-thumbnail__route-broken" d="M302 118C430 120 404 220 558 218" />
            <circle cx="302" cy="118" r="8" />
          </svg>
          <span className="blog-thumbnail__rate">0.36% action rate</span>
          <div className="blog-thumbnail__metric blog-thumbnail__metric--enquiries">
            <span>Enquiries</span>
            <strong>09</strong>
          </div>
        </div>
      )}

      {variant === 'local-seo' && (
        <div className="blog-thumbnail__local-seo">
          <div className="blog-thumbnail__search"><Search aria-hidden="true" /><span>Service Near Me</span></div>
          <div className="blog-thumbnail__map">
            <i /><i /><i />
            <MapPin aria-hidden="true" />
          </div>
        </div>
      )}

      {variant === 'checklist' && (
        <div className="blog-thumbnail__checklist">
          {[0, 1, 2, 3].map((item) => (
            <div key={item}><span><Check aria-hidden="true" /></span><i /></div>
          ))}
        </div>
      )}

    </div>
  )
}
