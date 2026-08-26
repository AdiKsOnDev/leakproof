interface DocumentMetadata {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
  structuredData?: Record<string, unknown>
}

const siteUrl = 'https://leakproof.me'

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
  const url = `${siteUrl}${path}`

  document.title = title
  setMetaTag('meta[name="description"]', 'name', 'description', description)
  setMetaTag('meta[property="og:title"]', 'property', 'og:title', title)
  setMetaTag('meta[property="og:description"]', 'property', 'og:description', description)
  setMetaTag('meta[property="og:type"]', 'property', 'og:type', type)
  setMetaTag('meta[property="og:url"]', 'property', 'og:url', url)
  setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary')
  setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title)
  setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description)

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
