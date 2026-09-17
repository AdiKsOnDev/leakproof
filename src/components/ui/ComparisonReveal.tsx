import { MoveHorizontal } from 'lucide-react'
import { useRef, type ReactNode } from 'react'

export function ComparisonReveal({ children, describedBy }: { children: ReactNode; describedBy: string }) {
  const revealRef = useRef<HTMLDivElement>(null)

  return (
    <div className="search-preview__reveal" ref={revealRef}>
      {children}
      <div className="search-preview__divider" aria-hidden="true"><span><MoveHorizontal size={22} /></span></div>
      <input
        className="search-preview__slider"
        type="range"
        min="0"
        max="100"
        defaultValue="50"
        aria-label="Before and after reveal position"
        aria-describedby={describedBy}
        aria-valuetext="50% before, 50% after"
        onChange={(event) => {
          const position = Number(event.currentTarget.value)
          revealRef.current?.style.setProperty('--reveal-position', `${position}%`)
          event.currentTarget.setAttribute('aria-valuetext', `${position}% before, ${100 - position}% after`)
        }}
      />
    </div>
  )
}
