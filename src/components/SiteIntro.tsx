import { useLayoutEffect, useRef, useState } from 'react'
import { playHeroIntro } from '../utils/heroIntro'

export function SiteIntro() {
  const [running, setRunning] = useState(true)
  const rootRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    const hero = root?.closest<HTMLElement>('.home-hero')
    if (!root || !hero) return

    setRunning(true)
    root.hidden = false
    const playback = playHeroIntro(hero, root, () => setRunning(false))
    return playback.cancel
  }, [])

  return <div className="site-intro" ref={rootRef} aria-hidden="true" hidden={!running} />
}
