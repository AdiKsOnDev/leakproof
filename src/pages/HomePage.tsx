import { ArrowUpRight, CircleHelp, Smartphone, Unlink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LeakCheckButton } from '../components/ui/LeakCheckButton'
import { IndustryGrid } from '../components/IndustryGrid'
import { processSteps, services } from '../data/siteContent'
import { ArrowLink } from '../components/ui/ArrowLink'
import { CallToAction } from '../components/ui/CallToAction'
import { SectionHeading } from '../components/ui/SectionHeading'

export function HomePage() {
  return (
    <>
      <section className="home-hero home-hero--horizon">
        <div className="container home-hero__grid">
          <div className="home-hero__intro" data-reveal="rise">
            <h1><span>Your website is</span> <em>leaking customers.</em></h1>
          </div>

          <div className="home-hero__content" data-reveal="rise" data-reveal-delay="80">
            <div className="home-hero__actions">
              <LeakCheckButton light />
              <ArrowLink to="/services">See what we fix</ArrowLink>
            </div>
          </div>

        </div>
      </section>

      <section className="section problem-section">

        <div className="container issue-review">
          <div className="issue-review__intro">
            <h2>Common website problems</h2>
            <ArrowLink to="/about">Why Leakproof exists</ArrowLink>
          </div>
          <div>
            <div className="issue-review__status">Site is online</div>
            <ul role="list">
              <li><Unlink size={22} aria-hidden="true" /><p>Customers click "Book now" but can't complete a booking.</p></li>
              <li><Smartphone size={22} aria-hidden="true" /><p>Your site loads too slowly on phones. Customers give up and leave.</p></li>
              <li><CircleHelp size={22} aria-hidden="true" /><p>People can't find prices or what's included, so they leave without booking.</p></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container what-we-fix__layout">
          <div className="what-we-fix__intro">
            <SectionHeading
              title="Services"
              text="Some sites need replacing. Others need a faster booking flow, clearer service pages or a form that reaches the right inbox."
            />
            <ArrowLink to="/services">Explore all services</ArrowLink>
          </div>
          <div className="home-services">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Link className="home-services__card" key={service.number} to={`/services/${service.slug}`} aria-labelledby={`home-service-${service.slug}`} data-reveal="clip" data-reveal-delay={String(index * 90)}>
                  <span className="home-services__icon"><Icon size={22} aria-hidden="true" /></span>
                  <span className="home-services__arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
                  <h3 id={`home-service-${service.slug}`}>{service.title}</h3>
                  <p>{service.summary}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Industries"
            text="A patient needs treatment details and reassurance. A tourist needs timings, inclusions and a quick way to book. We build for the decision your customer is actually making."
          />
          <IndustryGrid />
        </div>
      </section>

      <section className="section process-section" aria-labelledby="process-heading">
        <div className="container process-section__layout">
          <h2 id="process-heading">Our process</h2>
          <ol className="process-path" role="list">
            {processSteps.map((step) => {
              const Icon = step.icon
              return (
                <li key={step.number}>
                  <h3>{step.title}</h3>
                  <span className="process-path__icon">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <p>{step.text}</p>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      <CallToAction centered />
    </>
  )
}
