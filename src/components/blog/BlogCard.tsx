import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { BlogPost } from '../../types/content'
import { BlogThumbnail } from './BlogThumbnail'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
  revealDelay?: number
}

export function BlogCard({ post, featured = false, revealDelay = 0 }: BlogCardProps) {
  return (
    <article
      className={`blog-card ${featured ? 'blog-card--featured' : ''}`}
      data-reveal="rise"
      data-reveal-delay={revealDelay || undefined}
    >
      <Link to={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
        <BlogThumbnail variant={post.thumbnail} title={post.title} />
        <div className="blog-card__content">
          <div className="blog-meta">
            <span>{post.category}</span>
            <time dateTime={post.publishedAt}>{post.publishedLabel}</time>
            <span>{post.readTime}</span>
          </div>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <span className="blog-card__link">Read article <ArrowUpRight size={17} /></span>
        </div>
      </Link>
    </article>
  )
}
