import { ArrowRight, Check, CircleHelp, Smartphone, Unlink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { IndustryGrid } from '../components/IndustryGrid'
import { processSteps, services } from '../data/siteContent'
import { ArrowLink } from '../components/ui/ArrowLink'
import { CallToAction } from '../components/ui/CallToAction'
import { SectionHeading } from '../components/ui/SectionHeading'

export function HomePage() {
  return (
    <>
      <section className="home-hero home-hero--horizon">
        <div className="container home-hero__grid">
          <div className="home-hero__intro" data-reveal="rise">
            <h1><span>Your website is</span> <em>leaking customers.</em></h1>
          </div>

          <div className="home-hero__content" data-reveal="rise" data-reveal-delay="80">
            <div className="home-hero__actions">
              <Link className="button" to="/contact">
                Get a free leak check <ArrowRight size={18} />
              </Link>
              <ArrowLink to="/services">See what we fix</ArrowLink>
            </div>
            <span className="eyebrow home-hero__location">Web design and development · Dubai</span>
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
