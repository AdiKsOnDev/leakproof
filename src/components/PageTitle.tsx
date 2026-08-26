import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getBlogPost } from '../data/blogPosts'
import { industries } from '../data/siteContent'
import { updateDocumentMetadata } from '../utils/documentMetadata'

const pageMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Leakproof | Web Design and Development Dubai',
    description: 'Leakproof fixes the website problems that cost Dubai businesses bookings, enquiries and orders.',
  },
  '/services': {
    title: 'Website Services | Leakproof',
    description: 'Website design, development and conversion fixes for small businesses in Dubai.',
  },
  '/solutions': {
    title: 'Industry Website Solutions | Leakproof',
    description: 'Website solutions built around how clinic patients, travellers and local-service customers make decisions.',
  },
  '/about': {
    title: 'About | Leakproof',
    description: 'Learn how Leakproof finds and fixes the points where small-business websites lose customers.',
  },
  '/contact': {
    title: 'Free Website Leak Check | Leakproof',
    description: 'Send Leakproof your website for a free review of the route to your next booking or enquiry.',
  },
  '/blog': {
    title: 'Website Advice for Dubai Businesses | Leakproof',
    description: 'Practical articles about website costs, conversion problems, redesigns and direct bookings for Dubai businesses.',
  },
}

export function PageTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    const industrySlug = pathname.match(/^\/solutions\/([^/]+)$/)?.[1]
    const industry = industries.find(({ slug }) => slug === industrySlug)
    const postSlug = pathname.match(/^\/blog\/([^/]+)$/)?.[1]
    const post = getBlogPost(postSlug)

    if (post) {
      updateDocumentMetadata({
        title: `${post.title} | Leakproof`,
        description: post.seoDescription,
        path: pathname,
        type: 'article',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.seoDescription,
          datePublished: post.publishedAt,
          dateModified: post.publishedAt,
          author: { '@type': 'Organization', name: 'Leakproof', url: 'https://leakproof.me' },
          publisher: { '@type': 'Organization', name: 'Leakproof', url: 'https://leakproof.me' },
          mainEntityOfPage: `https://leakproof.me${pathname}`,
        },
      })
      return
    }

    if (industry) {
      updateDocumentMetadata({
        title: `${industry.name} Website Design | Leakproof`,
        description: industry.summary,
        path: pathname,
      })
      return
    }

    const metadata = pageMetadata[pathname] ?? {
      title: 'Page Not Found | Leakproof',
      description: 'The page you were looking for does not exist or has moved.',
    }

    updateDocumentMetadata({ ...metadata, path: pathname })
  }, [pathname])

  return null
}
