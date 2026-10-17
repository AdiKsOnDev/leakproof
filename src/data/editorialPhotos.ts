import type { PhotoAsset } from '../types/content'

export const editorialPhotos = {
  work: {
    src: '/images/editorial/website-showcase.webp',
    srcSet: '/images/editorial/website-showcase-768.webp 768w, /images/editorial/website-showcase.webp 1536w',
    alt: 'An illustrative website showcase on a desktop monitor and phone beside printed layouts in a sunlit studio.',
    width: 1536,
    height: 1024,
    position: '65% 50%',
  },
  industries: {
    src: '/images/editorial/local-business-welcome.webp',
    srcSet: '/images/editorial/local-business-welcome-768.webp 768w, /images/editorial/local-business-welcome.webp 1536w',
    alt: 'An illustrative scene of a local business owner welcoming a customer at a sunlit storefront.',
    width: 1536,
    height: 1024,
    position: '72% 50%',
  },
  planning: {
    src: '/images/editorial/website-planning.webp',
    srcSet: '/images/editorial/website-planning-480.webp 480w, /images/editorial/website-planning.webp 960w',
    alt: 'Hands arranging paper website sketches on a sunlit desk.',
    width: 960,
    height: 960,
    position: '50% 50%',
  },
  mobile: {
    src: '/images/editorial/mobile-review.webp',
    srcSet: '/images/editorial/mobile-review-480.webp 480w, /images/editorial/mobile-review.webp 960w',
    alt: 'A person checking a booking page on a phone beside a notebook.',
    width: 960,
    height: 960,
    position: '50% 45%',
  },
  neighborhood: {
    src: '/images/editorial/dubai-neighborhood.webp',
    srcSet: '/images/editorial/dubai-neighborhood-480.webp 480w, /images/editorial/dubai-neighborhood.webp 960w',
    alt: 'An illustrative Dubai neighborhood with a shaded storefront and people walking past.',
    width: 960,
    height: 640,
    position: '55% 50%',
  },
  building: {
    src: '/images/editorial/website-building.webp',
    srcSet: '/images/editorial/website-building-480.webp 480w, /images/editorial/website-building.webp 960w',
    alt: 'A website taking shape on a laptop beside paper page sketches.',
    width: 960,
    height: 960,
    position: '50% 50%',
  },
} satisfies Record<string, PhotoAsset>
