import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface CallToActionProps {
  eyebrow?: string
  title?: string
  text?: string
}

export function CallToAction({
  eyebrow = 'Start with the site you have',
  title = 'Find the part of your website that is costing you customers.',
  text = 'Send us the link. We will follow the route to a booking or enquiry and tell you where it breaks down.',
}: CallToActionProps) {
  return (
    <section className="cta-section section">
      <div className="container">
        <div className={`cta-panel ${eyebrow ? '' : 'cta-panel--centered'}`} data-reveal="scale">
          <div>
            {eyebrow && <span className="eyebrow eyebrow--light">{eyebrow}</span>}
            <h2>{title}</h2>
          </div>
          <div className="cta-panel__action">
            <p>{text}</p>
            <Link className="button button--light" to="/contact">
              Get a free leak check <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
