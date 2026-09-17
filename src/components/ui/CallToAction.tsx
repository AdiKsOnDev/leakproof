import { LeakCheckButton } from './LeakCheckButton'

interface CallToActionProps {
  centered?: boolean
  title?: string
  text?: string
  to?: string
}

export function CallToAction({
  centered = false,
  title = 'Find the part of your website that is costing you customers.',
  text = 'Send us the link. We will follow the route to a booking or enquiry and tell you where it breaks down.',
  to = '/contact',
}: CallToActionProps) {
  return (
    <section className="cta-section">
      <div className="container">
        <div className={`cta-panel ${centered ? 'cta-panel--centered' : ''}`} data-reveal="fade">
          <div>
            <h2>{title}</h2>
          </div>
          <div className="cta-panel__action">
            <p>{text}</p>
            <LeakCheckButton to={to} light />
          </div>
        </div>
      </div>
    </section>
  )
}
