import type { ReactNode } from 'react'
import type { PhotoAsset } from '../../types/content'
import { Photo } from './Photo'

interface PageHeroProps {
  title: ReactNode
  description: string
  aside?: ReactNode
  photo?: PhotoAsset
  backLink?: ReactNode
  actions?: ReactNode
}

export function PageHero({ title, description, aside, photo, backLink, actions }: PageHeroProps) {
  if (photo) {
    return (
      <section className="photo-hero">
        <div className="photo-hero__body">
          <div className="photo-hero__copy">
            {backLink}
            <h1>{title}</h1>
            <p className="page-hero__description">{description}</p>
            {actions && <div className="page-hero__actions">{actions}</div>}
          </div>
          <Photo photo={photo} sizes="100vw" className="photo-hero__photo" priority />
        </div>
      </section>
    )
  }

  return (
    <section className="page-hero">
      <div className={`container page-hero__grid ${aside ? '' : 'page-hero__grid--single'}`}>
        <div className="page-hero__content" data-reveal="left">
          {backLink}
          <h1>{title}</h1>
          <p className="page-hero__description">{description}</p>
          {actions && <div className="page-hero__actions">{actions}</div>}
        </div>
        {aside && <div className="page-hero__aside" data-reveal="scale" data-reveal-delay="120">{aside}</div>}
      </div>
    </section>
  )
}
