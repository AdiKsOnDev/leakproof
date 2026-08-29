import { BlogCard } from '../components/blog/BlogCard'
import { PageHero } from '../components/ui/PageHero'
import { blogPosts } from '../data/blogPosts'

export function BlogPage() {
  const [featuredPost, ...posts] = blogPosts

  return (
    <>
      <PageHero
        eyebrow="Leak notes"
        title={<>Websites that <em>earn.</em></>}
        description="Clear answers about website costs, conversion problems, redesigns and the details that make it easier for customers to act."
      />

      <section className="blog-index section">
        <div className="container">
          <BlogCard post={featuredPost} featured />
          <div className="blog-grid blog-index__grid">
            {posts.map((post, index) => (
              <BlogCard key={post.slug} post={post} revealDelay={(index % 2) * 80} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
