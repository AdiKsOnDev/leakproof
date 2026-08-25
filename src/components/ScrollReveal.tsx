import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollReveal() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    const cleanupTimers: number[] = []
    let observer: IntersectionObserver | undefined
    let cancelled = false

    document.documentElement.classList.add('reveal-ready')

    const startReveals = () => {
      if (cancelled) {
        return
      }

      const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (reducedMotion) {
        elements.forEach((element) => {
          element.removeAttribute('data-reveal')
          element.removeAttribute('data-reveal-delay')
        })
        return
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return
            }

            entry.target.classList.add('is-revealed')
            observer?.unobserve(entry.target)

            const element = entry.target as HTMLElement
            const delay = Number(element.dataset.revealDelay ?? 0)
            const cleanupTimer = window.setTimeout(() => {
              element.removeAttribute('data-reveal')
              element.removeAttribute('data-reveal-delay')
              element.classList.remove('is-revealed')
              element.style.removeProperty('--reveal-delay')
            }, delay + 900)

            cleanupTimers.push(cleanupTimer)
          })
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
      )

      elements.forEach((element) => {
        const delay = element.dataset.revealDelay

        if (delay) {
          element.style.setProperty('--reveal-delay', `${delay}ms`)
        }

        observer?.observe(element)
      })
    }

    const intro = document.querySelector<HTMLElement>('.site-intro')

    if (intro && !intro.hidden) {
      window.addEventListener('site-intro-complete', startReveals, { once: true })
    } else {
      startReveals()
    }

    return () => {
      cancelled = true
      window.removeEventListener('site-intro-complete', startReveals)
      observer?.disconnect()
      cleanupTimers.forEach((timer) => window.clearTimeout(timer))
    }
  }, [pathname])

  return null
}
