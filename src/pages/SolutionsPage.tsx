import { IndustryGrid } from '../components/IndustryGrid'
import { CallToAction } from '../components/ui/CallToAction'
import { PageHero } from '../components/ui/PageHero'

export function SolutionsPage() {
  return (
    <>
      <PageHero
        title="Industries we know well"
        description="We plan your pages and booking steps around the questions your customers ask, so they can find answers and book more easily."
      />
      <section className="section section--soft solutions-grid-section">
        <div className="container">
          <IndustryGrid />
        </div>
      </section>
      <section className="section shared-needs-section">
        <div className="container shared-needs-section__grid">
          <div data-reveal="left">
            <h2>What customers need</h2>
          </div>
          <div className="shared-needs-list">
            <div data-reveal="right"><h3>Find the right service</h3><p>Plain navigation and enough detail to compare the options.</p></div>
            <div data-reveal="right" data-reveal-delay="90"><h3>Decide whether to trust you</h3><p>Reviews, credentials and real work shown where they help.</p></div>
            <div data-reveal="right" data-reveal-delay="180"><h3>Book or enquire</h3><p>No hunt for a phone number and no generic form when a booking tool would do.</p></div>
          </div>
        </div>
      </section>
      <CallToAction title="Want to know what gets in your customers' way?" />
    </>
  )
}
