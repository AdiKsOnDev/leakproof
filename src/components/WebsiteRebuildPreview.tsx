import { ArrowUpRight, Flower2, LockKeyhole, Scissors, Sparkles } from 'lucide-react'
import { ComparisonReveal } from './ui/ComparisonReveal'

export function WebsiteRebuildPreview() {
  return (
    <div className="rebuild-preview" data-reveal="fade" data-reveal-delay="120">
      <div className="rebuild-preview__bar"><span><LockKeyhole size={14} aria-hidden="true" />willow.example</span><span id="rebuild-preview-hint">Drag to compare</span></div>
      <ComparisonReveal describedBy="rebuild-preview-hint">
        <article className="rebuild-mock rebuild-mock--before" aria-label="Before rebuild: cluttered fictional salon website">
          <div className="rebuild-mock__label">Before</div>
          <div className="old-site">
            <div className="old-site__masthead"><Flower2 size={35} aria-hidden="true" /><strong>Willow Salon</strong><small>YOUR BEAUTY. OUR PASSION.</small></div>
            <div className="old-site__nav">HOME &nbsp; | &nbsp; ABOUT US &nbsp; | &nbsp; OUR STORY &nbsp; | &nbsp; SERVICES &nbsp; | &nbsp; GALLERY &nbsp; | &nbsp; CONTACT</div>
            <div className="old-site__banner">WELCOME TO OUR WEBSITE!</div>
            <div className="old-site__columns">
              <aside><b>Our services</b><span>Cut &amp; finish</span><span>Colour</span><span>Treatments</span><b>Opening hours</b><span>Tue–Sun<br />10am–7pm</span><b>Latest news</b><span>Visit our gallery</span></aside>
              <div><h3>Welcome to Willow Salon</h3><p>We would like to take this opportunity to welcome you to our website. At Willow Salon, we are passionate about providing a wide range of quality services for all of our valued customers.</p><p>Our dedicated team is committed to making every visit a special experience. Please take some time to explore our website and discover everything we have to offer.</p><div className="old-site__services"><span><Scissors aria-hidden="true" />Cut &amp; finish</span><span><Sparkles aria-hidden="true" />Colour</span><span><Flower2 aria-hidden="true" />Treatments</span></div><small>For appointments, please visit our contact page.</small></div>
            </div>
          </div>
        </article>

        <article className="rebuild-mock rebuild-mock--after" aria-label="After rebuild: clear fictional salon website">
          <div className="rebuild-mock__label">After</div>
          <div className="new-site">
            <div className="new-site__nav"><strong><Flower2 size={21} aria-hidden="true" />Willow</strong><span>Services &nbsp; About &nbsp; Contact</span></div>
            <div className="new-site__hero"><div><small>WILLOW SALON</small><h3>A good hair day<br />starts here.</h3><p>Cuts, colour and treatments.<br />Tuesday–Sunday, 10am–7pm.</p><span className="new-site__booking">Book an appointment <ArrowUpRight size={17} aria-hidden="true" /></span></div><div className="new-site__art" aria-hidden="true"><Flower2 strokeWidth={0.7} /></div></div>
            <div className="new-site__services"><span><Scissors size={20} aria-hidden="true" />Cut &amp; finish</span><span><Sparkles size={20} aria-hidden="true" />Colour</span><span><Flower2 size={20} aria-hidden="true" />Treatments</span></div>
            <div className="new-site__footer">Your next appointment, without the search.<ArrowUpRight size={18} aria-hidden="true" /></div>
          </div>
        </article>
      </ComparisonReveal>
    </div>
  )
}
