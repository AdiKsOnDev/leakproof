import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ArrowLinkProps {
  to: string
  children: ReactNode
}

export function ArrowLink({ to, children }: ArrowLinkProps) {
  return (
    <Link className="arrow-link" to={to}>
      {children}
      <ArrowUpRight size={18} />
    </Link>
  )
}
