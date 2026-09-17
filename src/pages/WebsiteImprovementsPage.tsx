import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ArrowLink } from '../components/ui/ArrowLink'
import { CallToAction } from '../components/ui/CallToAction'

const process = [
  ['Scope', 'Follow the customer’s path together. Agree which problem to fix, what is included and what needs to keep working.'],
  ['Change', 'Update the agreed pages or steps using the parts of your website that already work.'],
  ['Verify', 'Check the changed path on mobile and desktop, including form errors, booking links and the final confirmation.'],
]

function ImprovementsIntro() {
  return (
    <section className="rebuild-hero">
      <div className="container">
        <Link className="back-link" to="/services"><ArrowLeft size={17} aria-hidden="true" /> All services</Link>
        <h1>Your website might not need a rebuild.</h1>
        <p>If most of it works, keep it. We can fix confusing pages, difficult forms and booking steps without starting again.</p>
        <div className="rebuild-hero__actions"><Link className="button" to="/services/website-leak-check">Get a free leak check <ArrowRight size={18} aria-hidden="true" /></Link></div>
      </div>
    </section>
  )
}

export function WebsiteImprovementsPage() {
  return (
    <div className="improvements-page">
      <ImprovementsIntro />

      <section className="improvements-process" aria-labelledby="improvements-process-title">
        <div className="container">
          <h2 id="improvements-process-title">Agree the fix.<br />Then check it works.</h2>
          <ol>{process.map(([title, text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ol>
        </div>
      </section>

      <div className="container improvements-follow-up">
        <section className="improvements-rebuild" aria-labelledby="improvements-rebuild-title">
          <h2 id="improvements-rebuild-title">Sometimes a rebuild makes more sense.</h2>
          <p>If the platform blocks necessary changes, the pages no longer reflect your business or the whole booking path needs rethinking, small repairs may not be enough.</p>
          <ArrowLink to="/services/website-rebuild">When to rebuild your website</ArrowLink>
        </section>
      </div>

      <CallToAction
        title="Find out what’s worth fixing."
        text="Start with your website link. A free leak check can help you decide where to start."
        to="/services/website-leak-check"
      />
    </div>
  )
}
