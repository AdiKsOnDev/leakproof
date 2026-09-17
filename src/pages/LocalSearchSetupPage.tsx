import {
  ArrowLeft,
  BarChart3,
  Check,
  MapPinned,
  Plus,
  Store,
  Tags,
} from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CallToAction } from '../components/ui/CallToAction'
import { LocalSearchPreview } from '../components/LocalSearchPreview'
import { LeakCheckButton } from '../components/ui/LeakCheckButton'

const setupGroups = [
  {
    icon: Store,
    title: 'Google Business Profile',
    text: 'Set up your categories, services, photos and contact details so customers can see what you offer and how to reach you.',
    items: ['Business information', 'Services and categories', 'Profile links and imagery'],
  },
  {
    icon: MapPinned,
    title: 'Service-area pages',
    text: 'Create pages that explain which services you offer in each area and answer common questions before customers contact you.',
    items: ['Area-specific questions', 'Relevant services', 'Clear contact options'],
  },
  {
    icon: Tags,
    title: 'Miscellaneous setup',
    text: 'Help search engines understand your business, keep listings consistent and set up tracking for calls and enquiry forms.',
    items: ['Keywords, titles and metadata', 'Schema, citations and reviews', 'Analytics and enquiry tracking'],
  },
]

const processSteps = [
  ['01', 'Inspect', 'Review how your business appears in search and check the profile and website for gaps.'],
  ['02', 'Correct', 'Fix missing, inconsistent or unclear business information.'],
  ['03', 'Build', 'Create location pages and set up titles, metadata and structured data.'],
  ['04', 'Measure', 'Set up tracking for calls, enquiry forms and search visits.'],
]

const measuredSignals = [
  'Search visibility for relevant services and areas',
  'Website visits from the business profile',
  'Calls and enquiry submissions',
  'Pages and locations bringing in enquiries',
]

const frequentlyAskedQuestions = [
  ['Do you guarantee first position?', 'No. Nobody can guarantee a search position. We focus on making your business information accurate and your pages relevant to what customers search for.'],
  ['Do I need continuous optimization?', 'No. The initial setup stands on its own. Ongoing work is optional when you want to review performance, improve pages or expand into additional service areas.'],
  ['Can you work with my existing website?', 'Yes. If your current site supports the changes needed, we can improve its pages and search setup without a rebuild.'],
  ['How many service-area pages do I need?', 'Only as many as your real coverage and customer demand justify. We do not create duplicate pages for places the business does not genuinely serve.'],
  ['Is Google Business Profile included?', 'Yes. Profile setup and improvement are a core part of this service.'],
]

export function LocalSearchSetupPage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  return (
    <main className="local-search-page">
      <section className="rebuild-hero">
        <div className="container">
          <Link className="back-link" to="/services"><ArrowLeft size={17} /> All services</Link>
          <h1>Help nearby customers find your business.</h1>
          <p>We set up your Google Business Profile, improve your location pages and track the enquiries they bring in.</p>
          <div className="rebuild-hero__actions">
            <LeakCheckButton />
          </div>
        </div>
      </section>

      <section className="section local-search-demo-section" aria-labelledby="search-example-title">
        <div className="container">
          <div className="local-search-demo__heading" data-reveal="left">
            <h2 id="search-example-title">The same business. A much more useful result.</h2>
          </div>

          <LocalSearchPreview />
        </div>
      </section>

      <section className="section local-search-setup-section" aria-labelledby="local-search-setup-title">
        <div className="container">
          <div className="local-search-section-heading" data-reveal="left">
            <h2 id="local-search-setup-title">What’s included.</h2>
            <p>We make your services and coverage clear on Google and your website, then set up tracking so you can see which enquiries come through.</p>
          </div>
          <div className="local-search-setup-grid">
            {setupGroups.map(({ icon: Icon, title, text, items }, index) => (
              <article key={title} data-reveal="fade" data-reveal-delay={String(index * 80)}>
                <span className="local-search-setup-card__icon"><Icon size={23} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul>{items.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section local-search-process-section" aria-labelledby="local-search-process-title">
        <div className="container">
          <div className="local-search-section-heading" data-reveal="left">
            <h2 id="local-search-process-title">How we get it set up.</h2>
          </div>
          <ol className="local-search-process">
            {processSteps.map(([number, title, text], index) => (
              <li key={number} data-reveal="fade" data-reveal-delay={String(index * 70)}>
                <span>{number}</span><h3>{title}</h3><p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section local-search-measure-section">
        <div className="container local-search-measure">
          <div data-reveal="left">
            <BarChart3 size={28} aria-hidden="true" />
            <h2>Know where your enquiries come from.</h2>
            <p>Track search visits, calls and enquiry forms—not just where a keyword ranks.</p>
          </div>
          <ul data-reveal="right">
            {measuredSignals.map((signal) => <li key={signal}><Check size={17} />{signal}</li>)}
          </ul>
        </div>
      </section>

      <section className="section local-search-continuous-section">
        <div className="container local-search-continuous">
          <div data-reveal="left">
            <h2>Keep improving after the initial setup.</h2>
          </div>
          <div data-reveal="right">
            <p>If you want ongoing support, we review performance and improve the pages that need attention. You don’t need a subscription to keep the initial setup.</p>
            <ul>
              <li>Improve pages that attract visits but not enquiries</li>
              <li>Add pages for new services or areas you cover</li>
              <li>Keep business details and contact links up to date</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section local-search-faq-section" aria-labelledby="local-search-faq-title">
        <div className="container local-search-faq">
          <h2 id="local-search-faq-title" data-reveal="left">Questions before we start.</h2>
          <div data-reveal="right">
            {frequentlyAskedQuestions.map(([question, answer], index) => (
              <div className="local-search-faq__item" key={question}>
                <button
                  type="button"
                  aria-expanded={openQuestion === index}
                  aria-controls={`local-search-answer-${index}`}
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                >
                  {question}<Plus aria-hidden="true" size={20} />
                </button>
                <div
                  className={`local-search-faq__answer ${openQuestion === index ? 'local-search-faq__answer--open' : ''}`}
                  id={`local-search-answer-${index}`}
                >
                  <div><p>{answer}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Find the first thing limiting your local visibility."
        text="Send us the link. Within one day, we will reply with one specific issue and where we would start. A call is optional."
      />
    </main>
  )
}
