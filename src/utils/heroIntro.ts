const easing = 'cubic-bezier(0.16, 1, 0.3, 1)'

export function playHeroIntro(hero: HTMLElement, backdrop: HTMLElement, onComplete: () => void) {
  const head = hero.querySelector<HTMLElement>('.home-hero__head')
  const scene = hero.querySelector<HTMLImageElement>('.home-hero__scene')
  const foot = hero.querySelector<HTMLElement>('.home-hero__foot')
  const header = document.querySelector<HTMLElement>('.site-header')
  const characters = Array.from(hero.querySelectorAll<HTMLElement>('.home-hero__character'))
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
  const animations: Animation[] = []
  const timers: number[] = []
  const overflow = document.body.style.overflow
  const lockedElements = Array.from(document.querySelectorAll<HTMLElement>('.site-header, .site-footer, main > section:not(.home-hero), .home-hero__foot'))
  const inertStates = lockedElements.map((element) => element.inert)
  let stopped = false

  const release = () => {
    stopped = true
    timers.forEach(window.clearTimeout)
    animations.forEach((animation) => animation.cancel())
    characters.forEach((character) => character.style.removeProperty('visibility'))
    hero.classList.remove('home-hero--intro-running', 'home-hero--intro-preparing')
    document.body.classList.remove('intro-running')
    document.body.style.overflow = overflow
    lockedElements.forEach((element, index) => { element.inert = inertStates[index] })
    backdrop.hidden = true
    window.removeEventListener('resize', finish)
    window.removeEventListener('keydown', onKeyDown)
    preference.removeEventListener('change', finish)
    document.removeEventListener('visibilitychange', onVisibilityChange)
    window.dispatchEvent(new Event('site-intro-complete'))
  }

  function finish() {
    if (stopped) return
    release()
    onComplete()
  }

  function onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') finish()
  }

  function onVisibilityChange() {
    if (document.hidden) finish()
  }

  const animate = (element: Element, frames: Keyframe[], options: KeyframeAnimationOptions) => {
    const animation = element.animate(frames, { fill: 'both', easing, ...options })
    animations.push(animation)
    return animation
  }

  if (!head || !scene || !foot || !header || window.scrollY > 10 || document.hidden || !characters.length || !head.animate) {
    finish()
    return { finish, cancel: release }
  }

  if (preference.matches) {
    animate(backdrop, [{ opacity: 1 }, { opacity: 0 }], { duration: 160 })
    timers.push(window.setTimeout(finish, 160))
    return { finish, cancel: release }
  }

  hero.classList.add('home-hero--intro-running', 'home-hero--intro-preparing')
  document.body.classList.add('intro-running')
  document.body.style.overflow = 'hidden'
  lockedElements.forEach((element) => { element.inert = true })
  window.addEventListener('resize', finish)
  window.addEventListener('keydown', onKeyDown)
  preference.addEventListener('change', finish)
  document.addEventListener('visibilitychange', onVisibilityChange)

  const play = () => {
    if (stopped) return
    const duration = 3000
    const revealAt = 1740
    const revealDuration = duration - revealAt
    const bounds = head.getBoundingClientRect()
    const centerOffset = window.innerHeight / 2 - bounds.top - bounds.height / 2
    const scale = window.innerWidth <= 800 ? 1 : 1.08
    const startTransform = `translate3d(0, ${centerOffset}px, 0) scale(${scale})`

    characters.forEach((character, index) => {
      character.style.visibility = 'hidden'
      timers.push(window.setTimeout(() => character.style.removeProperty('visibility'), 100 + index * 39 + (index >= 15 ? 130 : 0)))
    })

    animate(head, [
      { transform: startTransform },
      { transform: 'translate3d(0, 0, 0) scale(1)' },
    ], { delay: revealAt, duration: revealDuration })

    const sceneTransform = getComputedStyle(scene).transform
    animate(scene, [
      { opacity: 0, transform: `${sceneTransform} translateY(9%) scale(1.18)` },
      { opacity: 1, transform: sceneTransform },
    ], { delay: revealAt, duration: revealDuration })
    animate(backdrop, [{ opacity: 1 }, { opacity: 0 }], {
      delay: revealAt, duration: 180,
    })

    animate(foot, [{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'none' }], {
      delay: duration - 540, duration: 540,
    })
    animate(header, [{ opacity: 0 }, { opacity: 1 }], { delay: duration - 420, duration: 420 })
    hero.classList.remove('home-hero--intro-preparing')
    timers.push(window.setTimeout(finish, duration + 40))
  }

  // Wait briefly for the display font so the flight lands on the final text geometry.
  Promise.race([
    Promise.all([document.fonts.ready, scene.decode().catch(() => {})]),
    new Promise<void>((resolve) => { timers.push(window.setTimeout(resolve, 400)) }),
  ]).then(play).catch(finish)
  timers.push(window.setTimeout(finish, 4500))

  return { finish, cancel: () => { if (!stopped) release() } }
}
