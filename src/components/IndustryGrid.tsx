import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { industries } from '../data/siteContent'
import { Photo } from './ui/Photo'

export function IndustryGrid() {
  return (
    <div className="industry-grid">
      {industries.map((industry, index) => {
        const Icon = industry.icon

        return (
          <article className="industry-grid__item" key={industry.slug} data-reveal="rise" data-reveal-delay={String(index * 90)}>
            <Link className={`industry-card industry-theme industry-theme--${industry.slug}`} to={`/solutions/${industry.slug}`}>
              <div className="industry-card__photo">
                <Photo photo={industry.photo} sizes="(max-width: 800px) 100vw, (max-width: 1268px) 50vw, 600px" decorative />
              </div>
              <div className="industry-card__body">
                <div className="industry-card__top">
                  <h3>{industry.name}</h3>
                  <span className="industry-card__icon"><Icon size={24} /></span>
                </div>
                <div className="industry-card__content">
                  <p>{industry.summary}</p>
                </div>
                <span className="industry-card__link">
                  View solution <ArrowUpRight size={18} />
                </span>
              </div>
            </Link>
          </article>
        )
      })}
    </div>
  )
}
