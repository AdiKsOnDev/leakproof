import { processSteps } from '../data/siteContent'

export function ProcessTimeline() {
  return (
    <section className="section process-section" aria-labelledby="process-heading">
      <div className="container process-section__layout">
        <h2 id="process-heading">Our process</h2>
        <ol className="process-path" role="list">
          {processSteps.map(([title, text, Icon]) => (
            <li key={title}>
              <h3>{title}</h3>
              <span className="process-path__icon"><Icon size={24} aria-hidden="true" /></span>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
