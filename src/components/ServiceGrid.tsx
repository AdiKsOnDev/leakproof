import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../data/siteContent'

export function ServiceGrid() {
  return (
    <div className="service-grid">
      {services.map((service, index) => {
        const Icon = service.icon

        return (
          <Link className="service-card" key={service.number} to={`/services/${service.slug}`} aria-labelledby={`service-${service.slug}`} data-reveal="fade" data-reveal-delay={String(index * 100)}>
            <div className="service-card__header">
              <h3 id={`service-${service.slug}`}>{service.title}</h3>
              <span className="service-card__icon" aria-hidden="true">
                <Icon className="service-card__symbol" size={25} />
                <ArrowUpRight className="service-card__arrow" size={25} />
              </span>
            </div>
            <p>{service.summary}</p>
            <ul>
              {service.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
            <Icon className="service-card__watermark" size={190} strokeWidth={0.7} aria-hidden="true" />
          </Link>
        )
      })}
    </div>
  )
}
