import { getRelatedBlogPosts } from '../../data/blogPosts'
import type { BlogPost } from '../../types/content'
import { BlogCard } from './BlogCard'

interface RelatedBlogPostsProps {
  post: BlogPost
}

export function RelatedBlogPosts({ post }: RelatedBlogPostsProps) {
  const relatedPosts = getRelatedBlogPosts(post)

  return (
    <section className="related-posts section section--soft">
      <div className="container">
        <div className="related-posts__heading" data-reveal="left">
          <span className="eyebrow">Keep reading</span>
          <h2>Related articles</h2>
        </div>
        <div className="blog-grid">
          {relatedPosts.map((relatedPost, index) => (
            <BlogCard key={relatedPost.slug} post={relatedPost} revealDelay={index * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
