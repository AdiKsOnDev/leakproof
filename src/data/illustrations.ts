import type { PhotoAsset } from '../types/content'

const illustrationPath = (name: string) => `/images/illustrations/${name}.webp`

const sceneIllustration = (name: string, alt: string): PhotoAsset => ({
  src: illustrationPath(name),
  alt,
  width: 1600,
  height: 800,
  position: '50% 50%',
})

export const pageIllustrations = {
  services: illustrationPath('services'),
  leakCheck: illustrationPath('leak-check'),
  improvements: illustrationPath('improvements'),
  rebuild: illustrationPath('rebuild'),
  localSearch: illustrationPath('local-search'),
  solutions: illustrationPath('solutions'),
  about: illustrationPath('about'),
  work: illustrationPath('work'),
}

export const industryIllustrations = {
  clinics: sceneIllustration('clinics', 'A water channel running to a dental treatment chair.'),
  tours: sceneIllustration('tours', 'A water channel crossing sand dunes beside a four-wheel-drive vehicle.'),
  wellness: sceneIllustration('wellness', 'A water channel running to a salon chair and round mirror.'),
  homeServices: sceneIllustration('home-services', 'A water channel running to the door of a small house, with a toolbox and drill.'),
}

export const contactIllustration: PhotoAsset = {
  src: illustrationPath('contact'),
  alt: 'A water channel filling a basin at the open door of a small shopfront.',
  width: 1200,
  height: 900,
  position: '50% 50%',
}
