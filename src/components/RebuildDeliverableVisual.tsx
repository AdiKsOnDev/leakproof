import { ArrowDown, ArrowUpRight, Check, Menu, Search } from 'lucide-react'

export type RebuildDeliverable = 'pages' | 'mobile' | 'booking' | 'search'

export function RebuildDeliverableVisual({ kind }: { kind: RebuildDeliverable }) {
  if (kind === 'pages') {
    return (
      <div className="rebuild-detail-visual rebuild-detail-visual--pages" aria-hidden="true">
        <div className="rebuild-page-map">
          <span className="rebuild-page-map__root"><span className="rebuild-visual-label">Your website</span></span>
          <div className="rebuild-page-map__branches">
            <span><span className="rebuild-visual-label">Services</span><ArrowUpRight size={13} /></span>
            <span><span className="rebuild-visual-label">Location</span><ArrowUpRight size={13} /></span>
            <span><span className="rebuild-visual-label">Contact</span><ArrowUpRight size={13} /></span>
          </div>
        </div>
      </div>
    )
  }

  if (kind === 'mobile') {
    return (
      <div className="rebuild-detail-visual rebuild-detail-visual--mobile" aria-hidden="true">
        <div className="rebuild-phone">
          <div className="rebuild-phone__nav"><span>Your business</span><Menu size={13} /></div>
          <strong>Find a service.<br />Book a visit.</strong>
          <div className="rebuild-phone__lines"><span /><span /></div>
          <span className="rebuild-visual-action"><span className="rebuild-visual-label">Book a visit</span><ArrowUpRight size={13} /></span>
        </div>
      </div>
    )
  }

  if (kind === 'booking') {
    return (
      <div className="rebuild-detail-visual rebuild-detail-visual--booking" aria-hidden="true">
        <div className="rebuild-booking-path">
          <span className="rebuild-visual-action"><span className="rebuild-visual-label">Send enquiry</span><ArrowUpRight size={13} /></span>
          <ArrowDown className="rebuild-booking-path__arrow" size={23} />
          <span className="rebuild-booking-path__confirmation"><Check size={15} /><span className="rebuild-visual-label">Enquiry received</span></span>
        </div>
      </div>
    )
  }

  return (
    <div className="rebuild-detail-visual rebuild-detail-visual--search" aria-hidden="true">
      <div className="rebuild-search-result">
        <span className="rebuild-search-result__query"><Search size={13} /> Your service + area</span>
        <span className="rebuild-search-result__title">Your business</span>
        <span className="rebuild-search-result__description">What you do. Where you work.</span>
        <span className="rebuild-search-result__tracking"><Check size={13} /> Enquiry tracking</span>
      </div>
    </div>
  )
}
