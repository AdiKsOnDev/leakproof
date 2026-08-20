import { services } from '../data/siteContent'

export function ServiceGrid() {
  return (
    <div className="service-grid">
      {services.map((service) => {
        const Icon = service.icon

        return (
          <article className="service-card" key={service.number}>
            <div className="service-card__header">
              <span>{service.number}</span>
              <Icon size={24} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.summary}</p>
            <ul>
              {service.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
          </article>
        )
      })}
    </div>
  )
}
