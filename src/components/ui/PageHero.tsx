import type { ReactNode } from 'react'

interface PageHeroProps {
  title: ReactNode
  description: string
  aside?: ReactNode
  illustration?: string
  backLink?: ReactNode
  actions?: ReactNode
}

export function PageHero({ title, description, aside, illustration, backLink, actions }: PageHeroProps) {
  const sideContent = illustration ? <img className="page-hero__illustration" src={illustration} alt="" width="1200" height="900" /> : aside

  return (
    <section className="page-hero">
      <div className={`container page-hero__grid ${illustration ? 'page-hero__grid--illustrated' : ''} ${sideContent ? '' : 'page-hero__grid--single'}`}>
        <div className="page-hero__content" data-reveal="left">
          {backLink}
          <h1>{title}</h1>
          <p className="page-hero__description">{description}</p>
          {actions && <div className="page-hero__actions">{actions}</div>}
        </div>
        {sideContent && <div className="page-hero__aside" data-reveal="scale" data-reveal-delay="120">{sideContent}</div>}
      </div>
    </section>
  )
}
