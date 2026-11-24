import { services } from '../data/siteContent'
import { pageIllustrations } from '../data/illustrations'
import { ArrowLink } from './ui/ArrowLink'

export function ServiceList() {
  return (
    <div className="service-list">
      {services.map((service) => (
        <article className="service-row" key={service.slug} aria-labelledby={`service-${service.slug}`}>
          <div className="service-row__copy">
            <h3 id={`service-${service.slug}`}>{service.title}</h3>
            <p>{service.summary}</p>
            <ArrowLink to={`/services/${service.slug}`}>View service</ArrowLink>
          </div>
          <div className="service-row__image">
            <img src={pageIllustrations[service.illustration]} alt="" width="1200" height="900" loading="lazy" decoding="async" />
          </div>
        </article>
      ))}
    </div>
  )
}
