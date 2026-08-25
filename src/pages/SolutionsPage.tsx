import { IndustryGrid } from '../components/IndustryGrid'
import { CallToAction } from '../components/ui/CallToAction'
import { PageHero } from '../components/ui/PageHero'

export function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions by industry"
        title={<>Customers do not <em>buy the same way.</em></>}
        description="We plan the pages, proof and booking route around the questions people ask in your industry. That makes the site easier to use and harder to abandon."
        aside={
          <div className="hero-stat">
            <strong>4</strong>
            <span>industries we know well</span>
            <p>Each has different questions to answer before a customer will book or enquire.</p>
          </div>
        }
      />
      <section className="section section--soft solutions-grid-section">
        <div className="container">
          <IndustryGrid />
        </div>
      </section>
      <section className="section shared-needs-section">
        <div className="container shared-needs-section__grid">
          <div>
            <span className="eyebrow">The job is still simple</span>
            <h2>Make choosing you easy.</h2>
          </div>
          <div className="shared-needs-list">
            <div><span>01</span><h3>Find the right service</h3><p>Plain navigation and enough detail to compare the options.</p></div>
            <div><span>02</span><h3>Decide whether to trust you</h3><p>Reviews, credentials and real work shown where they help.</p></div>
            <div><span>03</span><h3>Book or enquire</h3><p>No hunt for a phone number and no generic form when a booking tool would do.</p></div>
          </div>
        </div>
      </section>
      <CallToAction title="Want to know what gets in your customers' way?" />
    </>
  )
}
