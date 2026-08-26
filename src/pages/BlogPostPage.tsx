import { ArrowLeft } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { BlogThumbnail } from '../components/blog/BlogThumbnail'
import { RelatedBlogPosts } from '../components/blog/RelatedBlogPosts'
import { CallToAction } from '../components/ui/CallToAction'
import { getBlogPost } from '../data/blogPosts'

export function BlogPostPage() {
  const { postSlug } = useParams()
  const post = getBlogPost(postSlug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  return (
    <>
      <article className="blog-article">
        <header className="blog-article__header">
          <div className="container">
            <Link className="blog-article__back" to="/blog"><ArrowLeft size={16} /> All articles</Link>
            <div className="blog-meta" data-reveal="fade">
              <span>{post.category}</span>
              <time dateTime={post.publishedAt}>{post.publishedLabel}</time>
              <span>{post.readTime}</span>
            </div>
            <h1 data-reveal="left">{post.title}</h1>
            <p className="blog-article__excerpt" data-reveal="left" data-reveal-delay="80">{post.excerpt}</p>
          </div>
        </header>

        <div className="container blog-article__thumbnail" data-reveal="scale">
          <BlogThumbnail variant={post.thumbnail} title={post.title} />
        </div>

        <div className="container blog-article__layout">
          <aside className="blog-article__aside" data-reveal="fade">
            <span>Published</span>
            <time dateTime={post.publishedAt}>{post.publishedLabel}</time>
            <span>Written by</span>
            <strong>Leakproof</strong>
          </aside>

          <div className="blog-article__body">
            <div className="blog-article__intro">
              {post.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>

            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.points && (
                  <ul>
                    {section.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </article>

      <RelatedBlogPosts post={post} />
      <CallToAction
        eyebrow="See the problem on your own site"
        title="We will trace the route to your next enquiry."
        text="Send us your website. We will show you the first place a serious customer is likely to get stuck."
      />
    </>
  )
}
