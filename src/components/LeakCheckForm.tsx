import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'

export function LeakCheckForm({ emailOnly = false }: { emailOnly?: boolean }) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submissionError, setSubmissionError] = useState('')
  const [contactMethod, setContactMethod] = useState<'email' | 'phone' | 'whatsapp'>('email')
  const usesPhoneNumber = !emailOnly && contactMethod !== 'email'

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget

    setSubmitting(true)
    setSubmissionError('')

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      setSubmitted(true)
    } catch {
      setSubmissionError('We could not send your request. Try again or email hello@leakproof.me.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="contact-form-panel" data-reveal="right" data-reveal-delay="120">
      {submitted ? (
        <div className="form-success">
          <span><CheckCircle2 size={32} /></span>
          <h2>Got it.</h2>
          <p>{emailOnly ? 'We will email you a PDF report and an invitation to meet within 1–2 days.' : 'We have your details and will review the website. Expect a reply from hello@leakproof.me.'}</p>
          <Link className="button" to="/">Back to home <ArrowRight size={18} /></Link>
        </div>
      ) : (
        <form action="https://formspree.io/f/xqpkpzbq" method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value="New website leak check request" />
          <label className="form-honeypot" aria-hidden="true">
            Leave this field empty
            <input name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
          </label>
          <div className="form-heading"><h2>Tell us about the website</h2></div>
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
          {emailOnly ? (
            <input type="hidden" name="contactMethod" value="email" />
          ) : (
            <fieldset>
              <legend>Preferred contact method</legend>
              <div className="radio-group">
                <label><input type="radio" name="contactMethod" value="email" checked={contactMethod === 'email'} onChange={() => setContactMethod('email')} /><span>Email</span></label>
                <label><input type="radio" name="contactMethod" value="phone" checked={contactMethod === 'phone'} onChange={() => setContactMethod('phone')} /><span>Phone call</span></label>
                <label><input type="radio" name="contactMethod" value="whatsapp" checked={contactMethod === 'whatsapp'} onChange={() => setContactMethod('whatsapp')} /><span>WhatsApp</span></label>
              </div>
            </fieldset>
          )}
          {submissionError && <p className="form-error" role="alert">{submissionError}</p>}
          <button className="button form-submit" type="submit" disabled={submitting}>
            {submitting ? 'Sending request...' : 'Request a leak check'} {!submitting && <ArrowRight size={18} />}
          </button>
          <small>No mailing list or automated audit. You will get a reply about your website.</small>
        </form>
      )}
    </div>
  )
}
