import { MousePointer2 } from 'lucide-react'
import { useLayoutEffect, useRef } from 'react'
import logo from '../../assets/logo.svg'

const MARK_CENTER_X = 10.39
const MARK_CENTER_Y = 48.37
const EASING = 'cubic-bezier(0.22, 1, 0.36, 1)'

export function SiteIntro() {
  const rootRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const clickRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLSpanElement>(null)
  const pulseRef = useRef<HTMLSpanElement>(null)
  const pointerRef = useRef<SVGSVGElement>(null)
  const lockupRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLImageElement>(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    const backdrop = backdropRef.current
    const click = clickRef.current
    const dot = dotRef.current
    const pulse = pulseRef.current
    const pointer = pointerRef.current
    const lockup = lockupRef.current
    const logoImage = logoRef.current
    const headerLogo = document.querySelector<HTMLImageElement>('.site-header .brand img')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!root || !backdrop || !click || !dot || !pulse || !pointer || !lockup || !logoImage || !headerLogo || reducedMotion) {
      root?.setAttribute('hidden', '')
      return undefined
    }

    let cancelled = false
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.body.classList.add('intro-running')

    const play = async () => {
      try {
        await logoImage.decode()
      } catch {
        if (cancelled) return
      }

      if (cancelled) return

      await pointer.animate(
        [
          { opacity: 0, transform: 'translate(58px, 62px) rotate(-8deg)' },
          { opacity: 1, offset: 0.25 },
          { opacity: 1, transform: 'translate(6px, 8px) rotate(-8deg)' },
        ],
        { duration: 520, easing: EASING, fill: 'forwards' },
      ).finished

      if (cancelled) return

      const pointerPress = pointer.animate(
        [
          { opacity: 1, transform: 'translate(6px, 8px) rotate(-8deg) scale(1)' },
          { opacity: 0, transform: 'translate(10px, 12px) rotate(-8deg) scale(0.9)' },
        ],
        { duration: 300, easing: EASING, fill: 'forwards' },
      )
      const dotPress = dot.animate(
        [
          { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
          { opacity: 1, transform: 'translate(-50%, -50%) scale(0.82)', offset: 0.45 },
          { opacity: 0, transform: 'translate(-50%, -50%) scale(1.08)' },
        ],
        { duration: 360, easing: EASING, fill: 'forwards' },
      )
      pulse.animate(
        [
          { opacity: 0.45, transform: 'translate(-50%, -50%) scale(0.8)' },
          { opacity: 0, transform: 'translate(-50%, -50%) scale(2.25)' },
        ],
        { duration: 500, easing: 'ease-out', fill: 'forwards' },
      )

      await Promise.all([pointerPress.finished, dotPress.finished])

      if (cancelled) return

      click.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        easing: 'ease-out',
        fill: 'forwards',
      })
      lockup.style.opacity = '1'

      const revealAnimation = logoImage.animate(
        [
          { clipPath: `circle(0 at ${MARK_CENTER_X}% ${MARK_CENTER_Y}%)` },
          { clipPath: `circle(150% at ${MARK_CENTER_X}% ${MARK_CENTER_Y}%)` },
        ],
        { duration: 720, easing: EASING, fill: 'forwards' },
      )
      const centeringAnimation = lockup.animate(
        [
          { transform: `translate3d(-${MARK_CENTER_X}%, -${MARK_CENTER_Y}%, 0)` },
          { transform: 'translate3d(-50%, -50%, 0)' },
        ],
        { duration: 720, easing: EASING, fill: 'forwards' },
      )

      await Promise.all([revealAnimation.finished, centeringAnimation.finished])

      if (cancelled) return

      const start = lockup.getBoundingClientRect()
      const target = headerLogo.getBoundingClientRect()
      const targetScale = target.width / start.width
      const targetX = target.left - start.left
      const targetY = target.top - start.top

      centeringAnimation.cancel()
      lockup.style.top = `${start.top}px`
      lockup.style.left = `${start.left}px`
      lockup.style.width = `${start.width}px`
      lockup.style.transform = 'none'
      lockup.style.transformOrigin = 'top left'

      const backdropReveal = backdrop.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 700,
        easing: 'ease-out',
        fill: 'forwards',
      })
      const flightAnimation = lockup.animate(
        [
          { transform: 'translate3d(0, 0, 0) scale(1)' },
          { transform: `translate3d(${targetX}px, ${targetY}px, 0) scale(${targetScale})` },
        ],
        { duration: 700, easing: EASING, fill: 'forwards' },
      )

      await Promise.all([backdropReveal.finished, flightAnimation.finished])

      if (cancelled) return

      root.setAttribute('hidden', '')
      document.body.classList.remove('intro-running')
      document.body.style.overflow = previousOverflow
    }

    play().catch(() => {})

    return () => {
      cancelled = true
      root.getAnimations({ subtree: true }).forEach((animation) => animation.cancel())
      document.body.classList.remove('intro-running')
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return (
    <div className="site-intro" ref={rootRef} aria-hidden="true">
      <div className="site-intro__backdrop" ref={backdropRef} />
      <div className="site-intro__click" ref={clickRef}>
        <span className="site-intro__pulse" ref={pulseRef} />
        <span className="site-intro__dot" ref={dotRef} />
        <MousePointer2 ref={pointerRef} className="site-intro__pointer" size={34} strokeWidth={2.4} />
      </div>
      <div className="site-intro__lockup" ref={lockupRef}>
        <img
          className="site-intro__logo"
          ref={logoRef}
          src={logo}
          alt=""
          width="3188"
          height="749"
          decoding="sync"
        />
      </div>
    </div>
  )
}
