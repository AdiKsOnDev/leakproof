import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getBlogPost } from '../data/blogPosts'
import { staticPageMetadata } from '../data/pageMetadata'
import { industries } from '../data/siteContent'
import { updateDocumentMetadata } from '../utils/documentMetadata'

export function PageTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    const path = pathname === '/' ? pathname : pathname.replace(/\/+$/, '')
    const industrySlug = path.match(/^\/solutions\/([^/]+)$/)?.[1]
    const industry = industries.find(({ slug }) => slug === industrySlug)
    const postSlug = path.match(/^\/blog\/([^/]+)$/)?.[1]
    const post = getBlogPost(postSlug)

    if (post) {
      updateDocumentMetadata({
        title: `${post.title} | Leakproof`,
        description: post.seoDescription,
        path,
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
          mainEntityOfPage: `https://leakproof.me${path}/`,
        },
      })
      return
    }

    if (industry) {
      updateDocumentMetadata({
        title: `${industry.name} | Leakproof`,
        description: industry.summary,
        path,
      })
      return
    }

    const metadata = staticPageMetadata.find((metadataEntry) => metadataEntry.path === path) ?? {
      title: 'Page Not Found | Leakproof',
      description: 'The page you were looking for does not exist or has moved.',
    }

    updateDocumentMetadata({ ...metadata, path })
  }, [pathname])

  return null
}
