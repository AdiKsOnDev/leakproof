import { CalendarCheck, Camera, Clock3, MapPin, ShieldCheck, Sparkles, TicketCheck, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { Industry } from '../types/content'

interface IndustryJourneyProps {
  industry: Industry
}

const decorativeIcons: Record<string, [LucideIcon, LucideIcon]> = {
  clinics: [CalendarCheck, ShieldCheck],
  'tour-operators': [MapPin, TicketCheck],
  wellness: [Sparkles, Clock3],
  'home-services': [Wrench, Camera],
}

function JourneyRoute({ slug }: { slug: Industry['slug'] }) {
  const paths: Record<string, string> = {
    clinics: 'M90 150 C220 150 220 420 355 420 C470 420 455 145 585 145 L630 145 L650 95 L675 210 L700 125 L725 150 C850 150 850 420 1110 420',
    'tour-operators': 'M90 130 C270 130 215 430 390 430 S555 125 720 125 S875 430 1110 430',
    wellness: 'M100 145 C330 55 520 80 760 145 C980 205 1040 300 930 390 C790 510 510 500 280 420 C120 365 65 255 100 145',
    'home-services': 'M600 35 L600 575 M600 105 L330 105 M600 255 L870 255 M600 405 L330 405 M600 555 L870 555',
  }

  return (
    <svg className="industry-journey__route" viewBox="0 0 1200 620" preserveAspectRatio="none" aria-hidden="true">
      <path d={paths[slug] ?? paths.clinics} />
    </svg>
  )
}

export function IndustryJourney({ industry }: IndustryJourneyProps) {
  const [TopIcon, BottomIcon] = decorativeIcons[industry.slug] ?? [industry.icon, CalendarCheck]

  return (
    <section className="section industry-journey">
      <TopIcon className="industry-journey__corner-icon industry-journey__corner-icon--top" size={220} strokeWidth={0.8} aria-hidden="true" />
      <BottomIcon className="industry-journey__corner-icon industry-journey__corner-icon--bottom" size={180} strokeWidth={0.8} aria-hidden="true" />
      <div className="container">
        <div className="industry-journey__heading">
          <div>
            <span className="eyebrow">Best-case customer path</span>
            <h2>{industry.journeyTitle}</h2>
          </div>
          <p>{industry.journeySummary}</p>
        </div>
        <div className="industry-journey__visual">
          <JourneyRoute slug={industry.slug} />
          <ol className="industry-journey__path">
            {industry.journey.map((step, index) => (
              <li key={step.title}>
                <span className="industry-journey__number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
