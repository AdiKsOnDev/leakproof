import { ArrowUpRight } from 'lucide-react'
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

      <section className="section limits-section">
        <div className="container">
          <SectionHeading
            eyebrow="When we will not help"
            title="Sometimes the website is not the problem."
            text="We will say so when another part of the business needs attention first."
          />
          <div className="limits-grid">
            <article>
              <span>01</span>
              <div><h3>The offer is the problem</h3><p>If customers reject the service, price or terms across every channel, rebuilding the website will not create demand.</p></div>
            </article>
            <article>
              <span>02</span>
              <div><h3>Reviews stop the sale</h3><p>Fewer than 20 reviews or a rating below 4.0 can put customers off before they reach the website.</p></div>
            </article>
            <article>
              <span>03</span>
              <div><h3>Enquiries sit unanswered</h3><p>If replies take hours or days, fixing WhatsApp and lead routing will probably do more than a redesign.</p></div>
            </article>
            <article>
              <span>04</span>
              <div><h3>The website already converts well</h3><p>Above roughly 4% to 5%, the offer or traffic source may have more room for improvement than the site.</p></div>
            </article>
          </div>
          <div className="limits-section__closing">
            <span>Promise</span>
            <p>We would rather be honest and point you to the right problem than sell a website that cannot fix it.</p>
          </div>
        </div>
      </section>

      <CallToAction eyebrow="" title="Send the website. We'll start with one specific problem." />
    </>
  )
}
