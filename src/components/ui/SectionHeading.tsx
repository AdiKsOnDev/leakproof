import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  text?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, text, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`} data-reveal="left">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}
