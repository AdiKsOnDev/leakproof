import { MousePointer2 } from 'lucide-react'
import { useEffect } from 'react'
import logo from '../../assets/logo.svg'

interface SiteIntroProps {
  onComplete: () => void
}

export function SiteIntro({ onComplete }: SiteIntroProps) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onComplete()
      return
    }

    document.body.classList.add('intro-running')

    return () => document.body.classList.remove('intro-running')
  }, [onComplete])

  const finishIntro = (event: React.AnimationEvent<HTMLDivElement>) => {
    if (event.currentTarget !== event.target) {
      return
    }

    onComplete()
  }

  return (
    <div className="site-intro" aria-hidden="true" onAnimationEnd={finishIntro}>
      <div className="site-intro__click">
        <span className="site-intro__pulse" />
        <span className="site-intro__dot" />
        <MousePointer2 className="site-intro__pointer" size={34} strokeWidth={2.4} />
      </div>
      <img className="site-intro__logo" src={logo} alt="" />
    </div>
  )
}
