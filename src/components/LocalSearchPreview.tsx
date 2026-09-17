import { Globe2, Search } from 'lucide-react'
import { ComparisonReveal } from './ui/ComparisonReveal'

const results = [
  {
    state: 'before',
    label: 'Before',
    ranking: '>80',
    visibility: 'Easy to miss',
    path: 'northline.example/',
    title: 'Home | Northline Services',
    description: 'Welcome to our website. We provide quality air-conditioning services and professional customer care.',
  },
  {
    state: 'after',
    label: 'After',
    ranking: '<15',
    visibility: 'Within customers\' reach',
    path: 'northline.example/ac-repair/jlt',
    title: 'AC Repair in JLT | Northline',
    description: 'AC diagnostics, repair and maintenance across Jumeirah Lake Towers. Check coverage and request a visit.',
  },
]

export function LocalSearchPreview() {
  return (
    <div className="search-preview" data-reveal="fade" data-reveal-delay="120">
      <div className="search-preview__toolbar">
        <div className="search-preview__query"><Search size={18} aria-hidden="true" />AC repair JLT</div>
        <span id="search-preview-hint">Drag to compare</span>
      </div>

      <ComparisonReveal describedBy="search-preview-hint">
        {results.map((result) => (
          <article className={`search-preview__result search-preview__result--${result.state}`} key={result.state} aria-label={`${result.label} optimization`}>
            <span className="search-preview__state">{result.label}</span>
            <div className="search-preview__identity">
              <Globe2 size={22} aria-hidden="true" />
              <div><strong>Northline Services</strong><span>{result.path}</span></div>
            </div>
            <h3>{result.title}</h3>
            <p>{result.description}</p>
            <footer className="search-preview__ranking">
              <span>Search position</span>
              <strong>{result.ranking}</strong>
              <span>{result.visibility}</span>
            </footer>
          </article>
        ))}

      </ComparisonReveal>
      <p className="search-preview__ranking-note">Nobody can promise rankings. We focus on relevance to the searches your customers make.</p>
    </div>
  )
}
