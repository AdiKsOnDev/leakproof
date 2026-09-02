import { ArrowRight, Check, CircleHelp, Search, Smartphone, Unlink, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import { IndustryGrid } from '../components/IndustryGrid'
import { industries, processSteps, services } from '../data/siteContent'
import { ArrowLink } from '../components/ui/ArrowLink'
import { CallToAction } from '../components/ui/CallToAction'
import { SectionHeading } from '../components/ui/SectionHeading'

export function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="container home-hero__grid">
          <div className="home-hero__content" data-reveal="left">
            <span className="eyebrow">Web design and development · Dubai</span>
            <h1>Your website is leaking customers</h1>
            <p>We review your website like a customer, find the biggest obstacle to booking or enquiring, and fix the part causing it.</p>
            <div className="home-hero__actions">
              <Link className="button" to="/contact">
                Get a free leak check <ArrowRight size={18} />
              </Link>
              <ArrowLink to="/services">See what we fix</ArrowLink>
            </div>
          </div>

          <div className="leak-visual" role="img" aria-label="Example analysis showing customers lost during a booking flow" data-reveal="scale" data-reveal-delay="120">
            <div className="leak-visual__top">
              <span className="leak-visual__title"><Search size={15} /> Customer journey</span>
              <span className="status-pill"><span /> Leak detected</span>
            </div>

            <div className="journey-funnel">
              <div className="journey-funnel__step journey-funnel__step--visitors">
                <div><span>01</span><strong>Visitors</strong></div>
                <div className="journey-funnel__bar"><i /></div>
                <b>128</b>
              </div>
              <div className="journey-funnel__step journey-funnel__step--service">
                <div><span>02</span><strong>Viewed a service</strong></div>
                <div className="journey-funnel__bar"><i /></div>
                <b>87</b>
              </div>
              <div className="journey-funnel__step journey-funnel__step--booking">
                <div><span>03</span><strong>Started booking</strong></div>
                <div className="journey-funnel__bar"><i /></div>
                <b>31</b>
              </div>
              <div className="journey-funnel__step journey-funnel__step--complete">
                <div><span>04</span><strong>Completed</strong></div>
                <div className="journey-funnel__bar"><i /></div>
                <b>8</b>
              </div>
            </div>

            <div className="leak-visual__recommendation">
              <span className="leak-visual__recommendation-icon"><Wrench size={18} /></span>
              <div>
                <span>Recommended fix</span>
                <p>Repair confirmation, shorten the form, and preserve the selected service.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="industry-marquee" aria-label="Industries we work with">
          <div className="industry-marquee__track">
            <div className="industry-marquee__group">
              {industries.map((industry) => <strong key={industry.slug}>{industry.name}</strong>)}
            </div>
            <div className="industry-marquee__group" aria-hidden="true">
              {industries.map((industry) => <strong key={industry.slug}>{industry.name}</strong>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section problem-section">
        <div className="container">
          <div className="problem-section__header">
            <SectionHeading
              eyebrow="Looks fine. Works badly."
              title={<>A website can load and still <em>lose the sale.</em></>}
            />
            <p className="lead" data-reveal="right" data-reveal-delay="100">
              The expensive problems are often easy to miss. The site is online, but the booking button goes nowhere useful or the service page never answers the question holding someone back.
            </p>
          </div>
          <div className="problem-diagnostic" data-reveal="scale">
            <div className="problem-diagnostic__topbar">
              <span className="problem-diagnostic__status"><span /> Site is online</span>
              <strong>3 conversion leaks found</strong>
            </div>
            <div className="problem-list">
              <article><span>01</span><i><Unlink size={21} /></i><p>A booking button sends people to the wrong place.</p></article>
              <article><span>02</span><i><Smartphone size={21} /></i><p>A slow mobile page loses an impatient buyer.</p></article>
              <article><span>03</span><i><CircleHelp size={21} /></i><p>A service page leaves the real questions unanswered.</p></article>
            </div>
            <div className="problem-diagnostic__footer"><ArrowLink to="/about">Why Leakproof exists</ArrowLink></div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container what-we-fix__layout">
          <div className="what-we-fix__intro">
            <SectionHeading
              eyebrow="What we fix"
              title="Fix what is broken. Rebuild when it makes sense."
              text="Some sites need replacing. Others need a faster booking flow, clearer service pages or a form that reaches the right inbox."
            />
            <ArrowLink to="/services">Explore all services</ArrowLink>
          </div>
          <div className="home-services">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <article key={service.number} data-reveal="clip" data-reveal-delay={String(index * 90)}>
                  <span className="home-services__icon"><Icon size={22} /></span>
                  <span className="home-services__number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Solutions by industry"
            title="A clinic and a tour operator should not have the same website."
            text="A patient needs treatment details and reassurance. A tourist needs timings, inclusions and a quick way to book. We build for the decision your customer is actually making."
          />
          <IndustryGrid />
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <SectionHeading
            eyebrow="How it works"
            title="First we find the problem. Then we fix it."
            align="center"
          />
          <div className="process-grid">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <article key={step.number} data-reveal="fade" data-reveal-delay={String(index * 100)}>
                  <div className="process-grid__top"><span>{step.number}</span><Icon size={24} /></div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
