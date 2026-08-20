import { CheckCircle2 } from 'lucide-react'
import { ServiceGrid } from '../components/ServiceGrid'
import { CallToAction } from '../components/ui/CallToAction'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Fix the leak. <em>Skip the sales pitch.</em></>}
        description="We work on the parts of your website that decide whether someone books, enquires or leaves. What we recommend depends on what is broken, not which package costs more."
      />

      <section className="section section--soft services-list-section">
        <div className="container">
          <ServiceGrid />
        </div>
      </section>

      <section className="section deliverables-section">
        <div className="container deliverables-section__grid">
          <SectionHeading
            eyebrow="Included in every full build"
            title="You should not have to pay extra for the basics."
            text="A new website must work on a phone, load quickly and tell you whether it produces enquiries. We treat those as requirements."
          />
          <div className="deliverables-list">
            {[
              ['Works on every common screen size', 'We check the site on phones, tablets and desktop screens before launch.'],
              ['Fast pages', 'We keep page weight down so mobile visitors are not left waiting.'],
              ['Obvious next steps', 'Each important page points to the right booking, enquiry or quote action.'],
              ['Local search setup', 'Page structure, titles, metadata and local business details are set up properly.'],
              ['Tracking that answers useful questions', 'You can see which pages and routes produce bookings or enquiries.'],
              ['A clean handover', 'You know how the site works and how to handle routine updates after launch.'],
            ].map(([title, text]) => (
              <article key={title}>
                <CheckCircle2 size={21} />
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pricing-section">
        <div className="container pricing-panel">
          <div>
            <span className="eyebrow">Pricing</span>
            <h2>One price for a clear piece of work.</h2>
          </div>
          <div>
            <p>
              A broken booking flow at a busy clinic can cost far more than the same problem on a new salon's site. We quote after we understand the work, the business and what the fix could be worth.
            </p>
            <span className="pricing-panel__note">You receive the scope and price before work starts. We do not run an open-ended hourly tab.</span>
          </div>
        </div>
      </section>

      <CallToAction eyebrow="Not sure what needs fixing?" title="Send us the site. We'll tell you where we would start." />
    </>
  )
}
