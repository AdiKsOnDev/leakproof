import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CallToAction } from '../components/ui/CallToAction'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Leakproof"
        title={<>We fix problems that cost you <em>customers.</em></>}
        description="Leakproof is a web agency in Dubai. Clients speak directly to the person who reviews, designs and builds their website."
      />

      <section className="section evidence-section">
        <div className="container">
          <SectionHeading
            eyebrow="Why Leakproof exists"
            title="We focus on problems with evidence behind them."
            text="Speed, form length and response time all affect whether an interested visitor becomes a lead. That is where we start."
          />
          <div className="evidence-grid">
            <article>
              <strong>10.1%</strong>
              <h3>More travel conversions</h3>
              <p>A 0.1-second improvement in mobile speed produced a 10.1% increase across 7.4 million travel sessions.</p>
              <a href="https://www.deloitte.com/ie/en/services/consulting/research/milliseconds-make-millions.html" target="_blank" rel="noreferrer">
                Google and Deloitte, 2020 <ArrowUpRight size={14} />
              </a>
            </article>
            <article>
              <strong>1 in 5</strong>
              <h3>Abandon a complicated checkout</h3>
              <p>Baymard found that roughly one in five checkout abandonments stem from a process that is too long or complicated.</p>
              <a href="https://baymard.com/lists/cart-abandonment-rate" target="_blank" rel="noreferrer">
                Baymard Institute <ArrowUpRight size={14} />
              </a>
            </article>
            <article>
              <strong>~7×</strong>
              <h3>More likely to qualify a lead</h3>
              <p>Businesses replying within an hour were nearly seven times more likely to qualify a lead than those waiting another hour.</p>
              <a href="https://hbr.org/2011/03/the-short-life-of-online-sales-leads" target="_blank" rel="noreferrer">
                Harvard Business Review, 2011 <ArrowUpRight size={14} />
              </a>
            </article>
          </div>
          <p className="evidence-section__note">
            These studies show that the problems are real. They do not guarantee the result of an individual project.
          </p>
        </div>
      </section>

      <section className="section section--soft values-section">
        <div className="container">
          <div className="values-grid">
            <article><span>01</span><h3>The site has a job</h3><p>Design choices should help someone understand the offer, trust the business or take action.</p></article>
            <article><span>02</span><h3>We point to a real problem</h3><p>We would rather show you one broken step on your site than send a polished list of vague promises.</p></article>
            <article><span>03</span><h3>We label the work honestly</h3><p>Client work is shown as client work. Uncommissioned redesigns are clearly marked as concepts.</p></article>
            <article><span>04</span><h3>The person on the call does the work</h3><p>Questions do not travel through an account manager before reaching the designer or developer.</p></article>
          </div>
        </div>
      </section>

      <section className="section fit-section">
        <div className="container fit-section__grid">
          <div>
            <span className="eyebrow">A good fit</span>
            <h2>Best for small businesses without a web team.</h2>
          </div>
          <div>
            <p>
              We are a good fit when the website should produce bookings, quotes or orders, there is a clear problem to fix and nobody in-house has the time or skills to fix it.
            </p>
            <Link className="button button--outline" to="/solutions">See industry solutions <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <CallToAction eyebrow="" title="Send the website. We'll start with one specific problem." />
    </>
  )
}
