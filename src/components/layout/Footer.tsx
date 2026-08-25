import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import { industries } from '../../data/siteContent'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand" data-reveal="left">
            <img src={logo} alt="Leakproof" />
            <p>We fix the website problems that cost small businesses bookings and enquiries.</p>
          </div>
          <div className="site-footer__column" data-reveal="fade" data-reveal-delay="80">
            <span className="site-footer__label">Explore</span>
            <Link to="/services">Services</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="site-footer__column" data-reveal="fade" data-reveal-delay="160">
            <span className="site-footer__label">Industries</span>
            {industries.map((industry) => (
              <Link key={industry.slug} to={`/solutions/${industry.slug}`}>
                {industry.shortName}
              </Link>
            ))}
          </div>
          <div className="site-footer__column" data-reveal="fade" data-reveal-delay="240">
            <span className="site-footer__label">Based in</span>
            <p>Dubai, UAE</p>
            <a href="mailto:hello@leakproof.me">
              hello@leakproof.me <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
        <div className="site-footer__bottom" data-reveal="fade">
          <span>© {new Date().getFullYear()} Leakproof</span>
          <span>Web design and development in Dubai.</span>
        </div>
      </div>
    </footer>
  )
}
