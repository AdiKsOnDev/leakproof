import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/ui/PageHero'
import { pageIllustrations } from '../data/illustrations'
import { newWebsite } from '../data/siteContent'

export function NewWebsitePage() {
  return (
    <PageHero
      title={newWebsite.title}
      description={newWebsite.summary}
      illustration={pageIllustrations[newWebsite.illustration]}
      backLink={<Link className="back-link" to="/services"><ArrowLeft size={17} aria-hidden="true" /> All services</Link>}
      actions={<a className="button" href="mailto:hello@leakproof.me?subject=New%20website%20enquiry">Discuss your website <ArrowRight size={18} aria-hidden="true" /></a>}
    />
  )
}
