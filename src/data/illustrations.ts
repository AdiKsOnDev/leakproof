import type { PhotoAsset } from '../types/content'

const illustrationPath = (name: string) => `/images/illustrations/${name}.webp`

export const pageIllustrations = {
  services: illustrationPath('services'),
  leakCheck: illustrationPath('leak-check'),
  improvements: illustrationPath('improvements'),
  rebuild: illustrationPath('rebuild'),
  newWebsite: illustrationPath('new-website'),
  about: illustrationPath('about'),
  work: illustrationPath('work'),
}

export const contactIllustration: PhotoAsset = {
  src: illustrationPath('contact'),
  alt: 'A water channel filling a basin at the open door of a small shopfront.',
  width: 1200,
  height: 900,
  position: '50% 50%',
}
