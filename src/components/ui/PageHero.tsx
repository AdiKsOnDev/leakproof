import type { ReactNode } from 'react'

interface PageHeroProps {
  eyebrow: string
  title: ReactNode
  description: string
  aside?: ReactNode
}

export function PageHero({ eyebrow, title, description, aside }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className={`container page-hero__grid ${aside ? '' : 'page-hero__grid--single'}`}>
        <div className="page-hero__content" data-reveal="left">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p className="page-hero__description">{description}</p>
        </div>
        {aside && <div className="page-hero__aside" data-reveal="scale" data-reveal-delay="120">{aside}</div>}
      </div>
    </section>
  )
}
