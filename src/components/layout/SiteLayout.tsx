import { Outlet } from 'react-router-dom'
import { ScrollReveal } from '../ScrollReveal'
import { Footer } from './Footer'
import { Header } from './Header'

export function SiteLayout() {
  return (
    <div className="site-shell">
      <ScrollReveal />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
