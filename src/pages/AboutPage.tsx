import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CallToAction } from '../components/ui/CallToAction'
import { PageHero } from '../components/ui/PageHero'

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Leakproof"
        title={<>We fix problems that cost you <em>customers.</em></>}
        description="Leakproof is a web agency business in Dubai. Clients speak directly to the person who reviews, designs and builds their website."
      />

      <section className="section story-section">
        <div className="container">
          <span className="eyebrow story-section__eyebrow">Why Leakproof exists</span>
          <div className="story-section__grid">
            <div><h2>A site can look respectable and still lose customers every day.</h2></div>
            <div className="story-section__copy">
              <p className="lead">Small businesses pay for ads and social posts, then send the traffic to a broken booking button or an eight-second mobile page.</p>
              <p>
                Owners miss these problems because the site still appears to work. It loads. The pages exist. But a customer cannot find a treatment price, understand a tour or reach the right booking screen.
              </p>
              <p>
                Leakproof works on that gap. We remove the problems that stop a ready customer, and we leave alone the parts that already do their job.
              </p>
            </div>
          </div>
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
