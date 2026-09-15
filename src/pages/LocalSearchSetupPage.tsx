import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Check,
  Globe2,
  MapPin,
  MapPinned,
  Navigation,
  Phone,
  Plus,
  Search,
  Store,
  Tags,
} from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CallToAction } from '../components/ui/CallToAction'

const setupGroups = [
  {
    icon: Store,
    title: 'Google Business Profile',
    text: 'Correct categories, services, business details, imagery and links so the profile gives customers a useful next step.',
    items: ['Business information', 'Services and categories', 'Profile links and imagery'],
  },
  {
    icon: MapPinned,
    title: 'Service-area pages',
    text: 'Useful location pages built around what customers in each real service area need to know before contacting you.',
    items: ['Area-specific questions', 'Relevant services', 'Clear enquiry routes'],
  },
  {
    icon: Tags,
    title: 'Miscellaneous setup',
    text: 'The supporting work that helps search engines understand the business and helps you measure what local visibility produces.',
    items: ['Keywords, titles and metadata', 'Schema, citations and reviews', 'Analytics and enquiry tracking'],
  },
]

const processSteps = [
  ['01', 'Inspect', 'Review the profile, website and current local-search route.'],
  ['02', 'Correct', 'Fix missing, inconsistent or unclear business information.'],
  ['03', 'Build', 'Create the pages and search foundations the business needs.'],
  ['04', 'Measure', 'Track calls, forms and the pages that create useful visits.'],
]

const measuredSignals = [
  'Search visibility for relevant services and areas',
  'Website visits from the business profile',
  'Calls and enquiry submissions',
  'Pages and locations producing useful demand',
]

const frequentlyAskedQuestions = [
  ['Do you guarantee first position?', 'No. Search positions change and no responsible provider can guarantee one. We focus on a complete local presence, useful pages and measurable enquiry routes.'],
  ['Do I need continuous optimization?', 'No. The initial setup stands on its own. Ongoing work is optional when you want to review performance, improve pages or expand into additional service areas.'],
  ['Can you work with my existing website?', 'Yes. We can improve the local-search foundations of an existing site without rebuilding it when the current structure is suitable.'],
  ['How many service-area pages do I need?', 'Only as many as your real coverage and customer demand justify. We do not create duplicate pages for places the business does not genuinely serve.'],
  ['Is Google Business Profile included?', 'Yes. Profile setup and improvement are a core part of this service.'],
]

export function LocalSearchSetupPage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  return (
    <main className="local-search-page">
      <section className="local-search-hero">
        <div className="container">
          <Link className="back-link" to="/services"><ArrowLeft size={17} /> All services</Link>
          <div className="local-search-hero__layout">
            <div className="local-search-hero__copy" data-reveal="left">
              <span className="eyebrow">Local search setup</span>
              <h1>Get found when nearby customers are ready to act.</h1>
              <p>We connect your business profile, service-area pages and website tracking so local searches can lead to useful calls and enquiries.</p>
              <Link className="button button--primary" to="/contact">
                Get a free leak check <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section local-search-demo-section" aria-labelledby="search-example-title">
        <div className="container">
          <div className="local-search-demo__heading" data-reveal="left">
            <p>What clearer local relevance can look like</p>
            <h2 id="search-example-title">The same business. A much more useful result.</h2>
          </div>

          <div className="search-comparison" data-reveal="clip">
            <div className="search-comparison__topbar">
              <div className="search-comparison__query"><Search size={19} aria-hidden="true" /><span>AC repair JLT</span></div>
            </div>

            <div className="search-comparison__results">
              <article className="search-result search-result--before">
                <header><span>Before</span><small>Unclear local relevance</small></header>
                <div className="search-result__browser">
                  <span className="search-result__url"><Globe2 size={15} /> northline.example</span>
                  <h3>Home | Northline Services</h3>
                  <p>Welcome to our website. We provide quality air-conditioning services and professional customer care.</p>
                </div>
                <ul>
                  <li>Location is difficult to confirm</li>
                  <li>Generic page title and description</li>
                  <li>No direct local action</li>
                </ul>
              </article>

              <div className="search-comparison__change" aria-hidden="true"><ArrowRight size={24} /></div>

              <article className="search-result search-result--after">
                <header><span>After</span><small>Clear service and area</small></header>
                <div className="search-result__profile">
                  <div className="search-result__business-mark"><span>N</span></div>
                  <div><small>Local business profile</small><h3>Northline AC Repair</h3><p><MapPin size={14} /> Serves Jumeirah Lake Towers</p></div>
                </div>
                <div className="search-result__actions" aria-label="Example actions">
                  <span><Globe2 size={16} /> Website</span>
                  <span><Phone size={16} /> Call</span>
                  <span><Navigation size={16} /> Directions</span>
                </div>
                <div className="search-result__browser">
                  <span className="search-result__url"><Globe2 size={15} /> northline.example / jlt</span>
                  <h3>AC Repair in JLT | Northline</h3>
                  <p>AC diagnostics, repair and maintenance across Jumeirah Lake Towers. Check coverage and request a visit.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section local-search-setup-section" aria-labelledby="local-search-setup-title">
        <div className="container">
          <div className="local-search-section-heading" data-reveal="left">
            <h2 id="local-search-setup-title">What we connect.</h2>
            <p>Local visibility works when the profile, website and measurement setup agree about what you offer and where you work.</p>
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
            <h2 id="local-search-process-title">From incomplete setup to a measurable route.</h2>
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
            <h2>Measure useful demand from day one.</h2>
            <p>Without fabricated rankings or vanity reports. We connect local visibility to the actions that matter to the business.</p>
          </div>
          <ul data-reveal="right">
            {measuredSignals.map((signal) => <li key={signal}><Check size={17} />{signal}</li>)}
          </ul>
        </div>
      </section>

      <section className="section local-search-continuous-section">
        <div className="container local-search-continuous">
          <div data-reveal="left">
            <span>Optional continuous optimization</span>
            <h2>Keep improving after the foundations are in place.</h2>
          </div>
          <div data-reveal="right">
            <p>Ongoing work is available when the search data points to a useful next move. It is not required to keep the initial setup.</p>
            <ul>
              <li>Improve pages that attract visits but not enquiries</li>
              <li>Expand into relevant services or genuine coverage areas</li>
              <li>Keep profile information and customer routes accurate</li>
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
        eyebrow="Start with the site you have"
        title="Find the first thing limiting your local visibility."
        text="Send us the link. Within one day, we will reply with one specific issue and where we would start. A call is optional."
      />
    </main>
  )
}
