import { ArrowLeft, Check, X } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { CallToAction } from '../components/ui/CallToAction'
import { IndustryJourney } from '../components/IndustryJourney'
import { industries } from '../data/siteContent'

export function IndustryPage() {
  const { industrySlug } = useParams()
  const industry = industries.find((item) => item.slug === industrySlug)

  if (!industry) {
    return <Navigate to="/solutions" replace />
  }

  const Icon = industry.icon

  return (
    <div className={`industry-theme industry-theme--${industry.slug}`}>
      <section className="industry-hero">
        <div className="container">
          <Link className="back-link" to="/solutions"><ArrowLeft size={17} /> All industries</Link>
          <div className="industry-hero__grid">
            <div>
              <span className="eyebrow">{industry.eyebrow}</span>
              <h1>{industry.headline}</h1>
              <p>{industry.summary}</p>
            </div>
            <div className="industry-hero__metric">
              <span><Icon size={28} /></span>
              <strong>{industry.metric}</strong>
              <p>{industry.metricLabel}</p>
              <Icon className="industry-hero__watermark" size={150} strokeWidth={1} aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <IndustryJourney industry={industry} />

      <section className="section industry-detail-section">
        <div className="container industry-detail-grid">
          <article className="industry-detail-card industry-detail-card--problem">
            <span className="eyebrow">Common leaks</span>
            <h2>What makes people give up.</h2>
            <ul>
              {industry.problems.map((problem) => (
                <li key={problem}><span><X size={16} /></span>{problem}</li>
              ))}
            </ul>
          </article>
          <article className="industry-detail-card industry-detail-card--solution">
            <span className="eyebrow">What we build</span>
            <h2>What we would put in its place.</h2>
            <ul>
              {industry.outcomes.map((outcome) => (
                <li key={outcome}><span><Check size={16} /></span>{outcome}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section industry-principle">
        <div className="container industry-principle__grid">
          <span className="eyebrow">Our rule</span>
          <blockquote>{industry.principle}</blockquote>
          <p>{industry.principleText}</p>
        </div>
      </section>

      <CallToAction
        eyebrow={`For ${industry.name.toLowerCase()}`}
        title="Find the page, button or form that is costing you customers."
      />
    </div>
  )
}
