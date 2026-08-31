import { CheckCircle2, Code2, FolderGit2, KeyRound } from 'lucide-react'
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
        <div className="container">
          <div className="deliverables-section__grid">
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
              ].map(([title, text], index) => (
                <article key={title} data-reveal="right" data-reveal-delay={String(index * 70)}>
                  <CheckCircle2 size={21} />
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </div>

          <article className="ownership-panel" data-reveal="clip">
            <span className="ownership-panel__number" aria-hidden="true">06</span>
            <div className="ownership-panel__copy">
              <span className="eyebrow eyebrow--light">Ownership included</span>
              <h2>The website is yours. <em>So is everything behind it.</em></h2>
              <p>We hand over the complete source code, repository, deployment access, credentials and documentation. Manage it yourself, keep working with us or give it to another developer.</p>
            </div>
            <div className="ownership-panel__handover" aria-label="Items included in the handover">
              <div><Code2 aria-hidden="true" /><span>Source code</span><strong>Complete</strong></div>
              <div><FolderGit2 aria-hidden="true" /><span>Repository</span><strong>Transferred</strong></div>
              <div><KeyRound aria-hidden="true" /><span>Deployment access</span><strong>Yours</strong></div>
            </div>
          </article>
        </div>
      </section>

      <CallToAction eyebrow="Not sure what needs fixing?" title="Send us the site. We'll tell you where we would start." />
    </>
  )
}
