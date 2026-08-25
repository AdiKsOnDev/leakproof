import { services } from '../data/siteContent'

export function ServiceGrid() {
  return (
    <div className="service-grid">
      {services.map((service, index) => {
        const Icon = service.icon

        return (
          <article className="service-card" key={service.number} data-reveal="clip" data-reveal-delay={String(index * 100)}>
            <div className="service-card__header">
              <span>{service.number}</span>
              <span className="service-card__icon"><Icon size={25} /></span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.summary}</p>
            <ul>
              {service.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
            <Icon className="service-card__watermark" size={190} strokeWidth={0.7} aria-hidden="true" />
          </article>
        )
      })}
    </div>
  )
}
