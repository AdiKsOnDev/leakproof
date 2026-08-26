import type { LucideIcon } from 'lucide-react'

export interface Service {
  number: string
  title: string
  summary: string
  details: string[]
  icon: LucideIcon
}

export interface Industry {
  slug: string
  name: string
  shortName: string
  eyebrow: string
  headline: string
  summary: string
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
