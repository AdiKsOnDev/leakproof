import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function LeakCheckButton({ to = '/contact', light = false }: { to?: string; light?: boolean }) {
  const className = `button${light ? ' button--light' : ''}`
  const content = <>Get a free leak check <ArrowRight size={18} aria-hidden="true" /></>

  if (to.startsWith('#')) {
    return <a className={className} href={to}>{content}</a>
  }

  return <Link className={className} to={to}>{content}</Link>
}
