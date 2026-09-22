import thumbnailUrl from '../../assets/thumbnail.png'

interface DocumentMetadata {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
  structuredData?: Record<string, unknown>
}

const siteUrl = 'https://leakproof.me'
const socialImageUrl = new URL(thumbnailUrl, siteUrl).href

function setMetaTag(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(selector)

  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, key)
    document.head.appendChild(tag)
  }

  tag.content = content
}

export function updateDocumentMetadata({
  title,
  description,
  path,
  type = 'website',
  structuredData,
}: DocumentMetadata) {
  const canonicalPath = path === '/' ? '/' : `${path.replace(/\/$/, '')}/`
  const url = `${siteUrl}${canonicalPath}`

  document.title = title
  setMetaTag('meta[name="description"]', 'name', 'description', description)
  setMetaTag('meta[property="og:title"]', 'property', 'og:title', title)
  setMetaTag('meta[property="og:description"]', 'property', 'og:description', description)
  setMetaTag('meta[property="og:type"]', 'property', 'og:type', type)
  setMetaTag('meta[property="og:url"]', 'property', 'og:url', url)
  setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'Leakproof')
  setMetaTag('meta[property="og:image"]', 'property', 'og:image', socialImageUrl)
  setMetaTag('meta[property="og:image:width"]', 'property', 'og:image:width', '1200')
  setMetaTag('meta[property="og:image:height"]', 'property', 'og:image:height', '630')
  setMetaTag('meta[property="og:image:type"]', 'property', 'og:image:type', 'image/png')
  setMetaTag('meta[property="og:image:alt"]', 'property', 'og:image:alt', 'Leakproof logo on an off-white background')
  setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
  setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', socialImageUrl)
  setMetaTag('meta[name="twitter:image:alt"]', 'name', 'twitter:image:alt', 'Leakproof logo on an off-white background')
  setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title)
  setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description)

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')

  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }

  canonical.href = url

  const currentStructuredData = document.head.querySelector<HTMLScriptElement>('#page-structured-data')

  if (!structuredData) {
    currentStructuredData?.remove()
    return
  }

  const script = currentStructuredData ?? document.createElement('script')
  script.id = 'page-structured-data'
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(structuredData)

  if (!currentStructuredData) {
    document.head.appendChild(script)
  }
}
