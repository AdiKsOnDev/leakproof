import type { LucideIcon } from 'lucide-react'

export interface Service {
  slug: string
  number: string
  title: string
  summary: string
  details: string[]
  icon: LucideIcon
}

export interface PhotoAsset {
  id: string
  src: string
  alt: string
  width: number
  height: number
  position: string
  photographer: string
  username: string
}

export interface Industry {
  slug: string
  name: string
  shortName: string
  eyebrow: string
  headline: string
  summary: string
  photo: PhotoAsset
  problems: string[]
  outcomes: string[]
  metric: string
  metricLabel: string
  icon: LucideIcon
  journeyTitle: string
  journeySummary: string
  journey: Array<{
    title: string
    text: string
  }>
  principle: string
  principleText: string
}

export type BlogThumbnailVariant = 'diagnostic' | 'local-seo' | 'checklist'

export interface BlogPostSection {
  heading: string
  paragraphs: string[]
  points?: string[]
}

export interface BlogPost {
  slug: string
  title: string
  category: string
  excerpt: string
  seoDescription: string
  publishedAt: string
  publishedLabel: string
  readTime: string
  thumbnail: BlogThumbnailVariant
  intro: string[]
  sections: BlogPostSection[]
  relatedSlugs: string[]
}
