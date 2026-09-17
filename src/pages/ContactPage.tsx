import { Mail, MapPin } from 'lucide-react'
import { LeakCheckForm } from '../components/LeakCheckForm'
import { ArrowLink } from '../components/ui/ArrowLink'

export function ContactPage() {
  return (
    <section className="contact-page">
      <div className="container contact-page__grid">
        <div className="contact-page__intro" data-reveal="left">
          <h1>Send us the site. We'll find the first leak.</h1>
          <p>
            Tell us what the website should be doing for the business. We will use it like a customer and reply with the first problem we think is worth fixing.
          </p>
          <div className="contact-details">
            <a href="mailto:hello@leakproof.me"><Mail size={19} /> hello@leakproof.me</a>
            <span><MapPin size={19} /> Dubai, UAE</span>
          </div>
          <ArrowLink to="/services/website-leak-check">What is a leak check?</ArrowLink>
        </div>

        <LeakCheckForm />
      </div>
    </section>
  )
}
