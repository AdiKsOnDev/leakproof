import type { ReactNode } from 'react'

interface SectionHeadingProps {
  title: ReactNode
  text?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ title, text, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`} data-reveal="left">
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}
