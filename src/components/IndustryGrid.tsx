import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { industries } from '../data/siteContent'

export function IndustryGrid() {
  return (
    <div className="industry-grid">
      {industries.map((industry, index) => {
        const Icon = industry.icon

        return (
          <Link className={`industry-card industry-theme industry-theme--${industry.slug}`} key={industry.slug} to={`/solutions/${industry.slug}`}>
            <div className="industry-card__top">
              <span className="industry-card__number">0{index + 1}</span>
              <span className="industry-card__icon"><Icon size={24} /></span>
            </div>
            <div className="industry-card__content">
              <span>{industry.eyebrow}</span>
              <h3>{industry.name}</h3>
              <p>{industry.summary}</p>
            </div>
            <span className="industry-card__link">
              View solution <ArrowUpRight size={18} />
            </span>
          </Link>
        )
      })}
    </div>
  )
}
