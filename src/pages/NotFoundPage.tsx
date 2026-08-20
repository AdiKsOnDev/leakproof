import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="not-found">
      <div className="container">
        <span>404</span>
        <h1>This page has a leak.</h1>
        <p>The page you were looking for does not exist or has moved.</p>
        <Link className="button" to="/"><ArrowLeft size={18} /> Back to home</Link>
      </div>
    </section>
  )
}
