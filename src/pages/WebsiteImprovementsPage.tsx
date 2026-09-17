import { ArrowLeft } from 'lucide-react'
import { LeakCheckButton } from '../components/ui/LeakCheckButton'
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
      <div className="container" data-reveal="rise">
        <Link className="back-link" to="/services"><ArrowLeft size={17} aria-hidden="true" /> All services</Link>
        <h1>Small Patches</h1>
        <p>If most of it works, keep it. We can fix confusing pages, difficult forms and booking steps without starting again.</p>
        <div className="rebuild-hero__actions"><LeakCheckButton to="/services/website-leak-check" /></div>
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
          <h2 id="improvements-process-title" data-reveal="left">Our process</h2>
          <ol>{process.map(([title, text], index) => <li key={title} data-reveal="fade" data-reveal-delay={String(index * 70)}><h3>{title}</h3><p>{text}</p></li>)}</ol>
        </div>
      </section>

      <div className="container improvements-follow-up">
        <section className="improvements-rebuild" aria-labelledby="improvements-rebuild-title" data-reveal="left">
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
