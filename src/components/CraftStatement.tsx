import { useEffect, useRef } from 'react'
import { WebsiteOffers } from './WebsiteOffers'

function BezierStudy() {
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const curve = ref.current
    if (!curve || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(([entry]) => {
      curve.toggleAttribute('data-moving', entry.isIntersecting)
    })
    observer.observe(curve)
    return () => observer.disconnect()
  }, [])

  return (
    <svg ref={ref} className="craft-statement__curve" viewBox="0 0 480 300" aria-hidden="true">
      <g fill="none" stroke="currentColor">
        <path className="craft-statement__stroke" d="M40 228 C156 228 330 36 330 156 S404 238 444 178" strokeWidth="7" strokeLinecap="round" />
        <path d="M40 228 H156" />
        <path className="craft-statement__arm" d="M330 36 V276" />
      </g>
      <g fill="currentColor">
        <circle cx="156" cy="228" r="4" />
        <circle className="craft-statement__handle--top" cx="330" cy="36" r="4" />
        <circle className="craft-statement__handle--bottom" cx="330" cy="276" r="4" />
      </g>
      <g fill="var(--craft-paper)" stroke="currentColor" strokeWidth="2">
        <rect x="35" y="223" width="10" height="10" /><rect x="325" y="151" width="10" height="10" /><rect x="439" y="173" width="10" height="10" />
      </g>
    </svg>
  )
}

export function CraftStatement() {
  return (
    <section className="craft-statement" aria-labelledby="craft-heading">
      <div className="container craft-statement__layout" data-reveal="fade">
        <div className="craft-statement__copy">
          <h2 id="craft-heading">Building a website is an <span>art.</span></h2>
          <p>You can hand the build to AI, or spend your time finding the right freelancers and managing their work.</p>
          <p className="craft-statement__ending">Or work with Leakproof and see the difference.</p>
        </div>
        <div className="craft-statement__visual">
          <BezierStudy />
        </div>
      </div>
      <WebsiteOffers />
    </section>
  )
}
