import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { blogPosts } from '../src/data/blogPosts.ts'
import { staticPageMetadata } from '../src/data/pageMetadata.ts'
import { industries } from '../src/data/siteContent.ts'

const outputDirectory = join(process.cwd(), 'dist')
const siteUrl = 'https://leakproof.me'
const template = await readFile(join(outputDirectory, 'index.html'), 'utf8')

const routeMetadata = [
  ...staticPageMetadata,
  ...industries.map((industry) => ({
    path: `/solutions/${industry.slug}`,
    title: `${industry.name} | Leakproof`,
    description: industry.summary,
  })),
  ...blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    title: `${post.title} | Leakproof`,
    description: post.seoDescription,
    type: 'article',
    publishedAt: post.publishedAt,
  })),
]

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function getCanonicalUrl(path) {
  return path === '/' ? `${siteUrl}/` : `${siteUrl}${path}/`
}

function getStructuredData(route) {
  if (route.type !== 'article') {
    return null
  }

  const url = getCanonicalUrl(route.path)

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: route.title.replace(' | Leakproof', ''),
    description: route.description,
    datePublished: route.publishedAt,
    dateModified: route.publishedAt,
    author: { '@type': 'Organization', name: 'Leakproof', url: siteUrl },
    publisher: { '@type': 'Organization', name: 'Leakproof', url: siteUrl },
    mainEntityOfPage: url,
  }
}

function renderRouteHtml(route, options = {}) {
  const canonicalUrl = getCanonicalUrl(route.path)
  const title = escapeHtml(route.title)
  const description = escapeHtml(route.description)
  const structuredData = getStructuredData(route)
  const metadata = [
    `<link rel="canonical" href="${canonicalUrl}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:type" content="${route.type ?? 'website'}" />`,
    `<meta property="og:url" content="${canonicalUrl}" />`,
    '<meta name="twitter:card" content="summary" />',
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
  ]

  if (options.noIndex) {
    metadata.push('<meta name="robots" content="noindex, follow" />')
  }

  if (structuredData) {
    metadata.push(`<script id="page-structured-data" type="application/ld+json">${JSON.stringify(structuredData).replaceAll('<', '\\u003c')}</script>`)
  }

  return template
    .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
    .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/s, `<meta name="description" content="${description}" />`)
    .replace('</head>', `    ${metadata.join('\n    ')}\n  </head>`)
}

for (const route of routeMetadata) {
  const html = renderRouteHtml(route)

  if (route.path === '/') {
    await writeFile(join(outputDirectory, 'index.html'), html)
    continue
  }

  const routeDirectory = join(outputDirectory, route.path.slice(1))
  await mkdir(routeDirectory, { recursive: true })
  await writeFile(join(routeDirectory, 'index.html'), html)
}

const notFoundRoute = {
  path: '/404',
  title: 'Page Not Found | Leakproof',
  description: 'The page you were looking for does not exist or has moved.',
}

await writeFile(join(outputDirectory, '404.html'), renderRouteHtml(notFoundRoute, { noIndex: true }))

const sitemapUrls = routeMetadata
  .map((route) => {
    const lastModified = route.publishedAt ? `\n    <lastmod>${route.publishedAt}</lastmod>` : ''
    return `  <url>\n    <loc>${getCanonicalUrl(route.path)}</loc>${lastModified}\n  </url>`
  })
  .join('\n')

await writeFile(
  join(outputDirectory, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`,
)

await writeFile(
  join(outputDirectory, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
)
