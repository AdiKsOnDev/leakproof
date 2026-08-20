import { ArrowRight, CheckCircle2, Mail, MapPin } from 'lucide-react'
import { FormEvent, useState } from 'react'

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [contactMethod, setContactMethod] = useState<'email' | 'phone' | 'whatsapp'>('email')
  const usesPhoneNumber = contactMethod !== 'email'

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="contact-page">
      <div className="container contact-page__grid">
        <div className="contact-page__intro">
          <span className="eyebrow">Free website leak check</span>
          <h1>Send us the site. We'll find the first leak.</h1>
          <p>
            Tell us what the website should be doing for the business. We will use it like a customer and reply with the first problem we think is worth fixing.
          </p>
          <div className="contact-details">
            <a href="mailto:hello@leakproof.me"><Mail size={19} /> hello@leakproof.me</a>
            <span><MapPin size={19} /> Dubai, UAE</span>
          </div>
          <div className="contact-expectation">
            <span>What happens next</span>
            <ol>
              <li><i>1</i><p>We follow the main route to a booking, quote or order.</p></li>
              <li><i>2</i><p>We reply with one specific problem and explain what it may be costing you.</p></li>
              <li><i>3</i><p>If the finding is useful, we book a short call and go through the rest.</p></li>
            </ol>
          </div>
        </div>

        <div className="contact-form-panel">
          {submitted ? (
            <div className="form-success">
              <span><CheckCircle2 size={32} /></span>
              <h2>Got it.</h2>
              <p>One last step. Email these details to hello@leakproof.me and we can start the review.</p>
              <a className="button" href="mailto:hello@leakproof.me">Open email <ArrowRight size={18} /></a>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-heading"><span>01</span><h2>Tell us about the website</h2></div>
              <div className="form-row">
                <label>First name<input name="firstName" type="text" autoComplete="given-name" required placeholder="Your name" /></label>
                <label>Business name<input name="businessName" type="text" autoComplete="organization" required placeholder="Company name" /></label>
              </div>
              <label>
                {usesPhoneNumber ? 'Phone number' : 'Work email'}
                <input
                  name={usesPhoneNumber ? 'phone' : 'email'}
                  type={usesPhoneNumber ? 'tel' : 'email'}
                  autoComplete={usesPhoneNumber ? 'tel' : 'email'}
                  required
                  placeholder={usesPhoneNumber ? '+971 50 123 4567' : 'you@company.com'}
                />
              </label>
              <label>Website URL<input name="website" type="url" required placeholder="https://yourwebsite.com" /></label>
              <label>
                What should the website do better?
                <textarea name="message" rows={5} placeholder="More bookings, better enquiries, clearer services..." />
              </label>
              <fieldset>
                <legend>How would you prefer to hear back?</legend>
                <div className="radio-group">
                  <label><input type="radio" name="contactMethod" value="email" checked={contactMethod === 'email'} onChange={() => setContactMethod('email')} /><span>Email</span></label>
                  <label><input type="radio" name="contactMethod" value="phone" checked={contactMethod === 'phone'} onChange={() => setContactMethod('phone')} /><span>Phone call</span></label>
                  <label><input type="radio" name="contactMethod" value="whatsapp" checked={contactMethod === 'whatsapp'} onChange={() => setContactMethod('whatsapp')} /><span>WhatsApp</span></label>
                </div>
              </fieldset>
              <button className="button form-submit" type="submit">Request a leak check <ArrowRight size={18} /></button>
              <small>No mailing list or automated audit. You will get a reply about your website.</small>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
