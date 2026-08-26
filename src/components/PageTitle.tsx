import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { industries } from '../data/siteContent'

const pageTitles: Record<string, string> = {
  '/': 'Leakproof | Web Design and Development Dubai',
  '/services': 'Website Services | Leakproof',
  '/solutions': 'Industry Website Solutions | Leakproof',
  '/about': 'About | Leakproof',
  '/contact': 'Free Website Leak Check | Leakproof',
}

export function PageTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    const industrySlug = pathname.match(/^\/solutions\/([^/]+)$/)?.[1]
    const industry = industries.find(({ slug }) => slug === industrySlug)

    document.title = industry
      ? `${industry.name} Website Design | Leakproof`
      : pageTitles[pathname] ?? 'Page Not Found | Leakproof'
  }, [pathname])

  return null
}
