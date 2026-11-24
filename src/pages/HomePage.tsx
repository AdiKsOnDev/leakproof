import { CraftStatement } from '../components/CraftStatement'
import { ServiceList } from '../components/ServiceList'
import { SiteIntro } from '../components/SiteIntro'
import { ProcessTimeline } from '../components/ProcessTimeline'
import { heroHeadlineLines } from '../data/heroIntro'
import { LeakCheckButton } from '../components/ui/LeakCheckButton'
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

      <CraftStatement />

      <section className="section services-list-section" aria-label="Services">
        <div className="container">
          <ServiceList />
        </div>
      </section>

      <ProcessTimeline />

      <CallToAction centered />
    </>
  )
}
