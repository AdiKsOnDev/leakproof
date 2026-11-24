import { CircleHelp, Smartphone, Unlink } from 'lucide-react'
import { ServiceList } from '../components/ServiceList'
import { SiteIntro } from '../components/SiteIntro'
import { heroHeadlineLines } from '../data/heroIntro'
import { LeakCheckButton } from '../components/ui/LeakCheckButton'
import { processSteps } from '../data/siteContent'
import { ArrowLink } from '../components/ui/ArrowLink'
import { CallToAction } from '../components/ui/CallToAction'

export function HomePage() {
  return (
    <>
      <section className="home-hero">
        <img className="home-hero__scene" src="/images/hero/leaking-aqueduct.webp" alt="" width="1672" height="941" fetchPriority="high" />
        <div className="home-hero__head">
          <h1 aria-label={heroHeadlineLines.join(' ')} tabIndex={-1}>
            {heroHeadlineLines.map((line) => (
              <span className="home-hero__line" aria-hidden="true" key={line}>
                {Array.from(line).map((character, index) => (
                  <span className="home-hero__character" key={index}>{character}</span>
                ))}
              </span>
            ))}
          </h1>
        </div>
        <div className="container home-hero__foot">
          <p>We use your site like a customer and find the pages, buttons and forms that get in the way.</p>
          <div className="home-hero__actions">
            <LeakCheckButton light />
            <ArrowLink to="/services">See what we fix</ArrowLink>
          </div>
        </div>
        <SiteIntro />
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

      <section className="section services-list-section" aria-label="Services">
        <div className="container">
          <ServiceList />
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
