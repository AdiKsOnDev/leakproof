import { ArrowDown, ArrowLeft, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { WebsiteRebuildPreview } from '../components/WebsiteRebuildPreview'
import { CallToAction } from '../components/ui/CallToAction'
import { LeakCheckButton } from '../components/ui/LeakCheckButton'

const deliverables = [
  ['Pages customers can understand', 'We put your services, location and contact options where people expect to find them. Longer background information gets its own space.'],
  ['A site that works on a phone', 'Readable text, easy-to-use menus and forms, and images that don’t make visitors wait.'],
  ['Booking and enquiry tools connected', 'Buttons lead to the right booking step or form. We check the full process, including what happens after someone submits.'],
  ['Search setup and tracking', 'Page titles, metadata and structured data, with tracking for the enquiries the site brings in.'],
]

export function WebsiteRebuildPage() {
  return (
    <div className="rebuild-page">
      <section className="rebuild-hero">
        <div className="container" data-reveal="rise">
          <Link className="back-link" to="/services"><ArrowLeft size={17} /> All services</Link>
          <h1>Make your website easier to understand. And easier to use.</h1>
          <p>If your current site is hard to update, slow or confusing, we can rebuild it around what customers need to know and do.</p>
          <div className="rebuild-hero__actions"><LeakCheckButton /><a className="arrow-link" href="#rebuild-comparison">See the difference <ArrowDown size={18} aria-hidden="true" /></a></div>
        </div>
      </section>

      <section className="section rebuild-comparison" id="rebuild-comparison" aria-labelledby="rebuild-comparison-title">
        <div className="container">
          <h2 id="rebuild-comparison-title" data-reveal="left">Same business. Less to get in the way.</h2>
          <p data-reveal="left" data-reveal-delay="80">A fictional salon, before and after a rebuild. The services haven’t changed. How you find them has.</p>
          <WebsiteRebuildPreview />
        </div>
      </section>

      <section className="section">
        <div className="container rebuild-included">
          <div data-reveal="left"><h2>More than a new look.</h2><p>We work on the content, structure and booking steps as well as the design.</p></div>
          <div>{deliverables.map(([title, description], index) => <article key={title} data-reveal="fade" data-reveal-delay={String(index * 80)}><Check size={20} aria-hidden="true" /><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
        </div>
      </section>

      <section className="section rebuild-ownership">
        <div className="container" data-reveal="left"><h2>It’s your website.<br />You decide who maintains it.</h2><p>We hand over the source code, repository, access and documentation. Keep working with us or take it to another developer.</p><Link className="arrow-link" to="/services">What’s included in our work <ArrowLeft size={17} aria-hidden="true" /></Link></div>
      </section>

      <CallToAction title="Not sure you need a rebuild?" text="Start with a free leak check. We’ll email a PDF report on the biggest issues within 1–2 days, with an invitation to meet. If a smaller fix makes more sense, we’ll say so." />
    </div>
  )
}
