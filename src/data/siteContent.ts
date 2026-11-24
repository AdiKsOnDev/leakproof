import {
  PanelsTopLeft,
  Hammer,
  Layers,
  MessageCircle,
  Pencil,
  Server,
  Search,
  Wrench,
} from 'lucide-react'
import type { PhotoAsset, Service } from '../types/content'

// Stands in for a client's own photography inside the website rebuild mock-up
export const salonPhoto: PhotoAsset = {
  id: 'jsuWg7IXx1k',
  src: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=max&q=80',
  alt: 'Black salon chairs beneath circular mirrors against a deep green wall.',
  width: 5761,
  height: 4000,
  position: '25% 55%',
  photographer: 'Greg Trowman',
  username: 'gregtrow',
}

export const newWebsite: Service = {
  slug: 'new-website',
  number: '01',
  title: 'New Website',
  illustration: 'newWebsite',
  summary: 'Starting from scratch? We plan, design and build your first website around your brand and what your customers need to do.',
  details: ['Page planning and copy', 'Design and development', 'Launch on your hosting'],
  icon: PanelsTopLeft,
}

export const services: Service[] = [
  newWebsite,
  {
    slug: 'website-rebuild',
    number: '02',
    title: 'Website rebuild',
    illustration: 'rebuild',
    summary: 'A new site for businesses whose current one is too slow, hard to use or costly to repair.',
    details: ['Pages planned around customer questions', 'Fast build for phones and desktops', 'Booking or enquiry system connected'],
    icon: Hammer,
  },
  {
    slug: 'website-improvements',
    number: '03',
    title: 'Website improvements',
    illustration: 'improvements',
    summary: 'Specific repairs for a site that does not need replacing from top to bottom.',
    details: ['Landing page changes', 'Booking flow repairs', 'Rewritten pages and navigation'],
    icon: Wrench,
  },
  {
    slug: 'website-leak-check',
    number: '04',
    title: 'Website leak check',
    illustration: 'leakCheck',
    summary: 'We use the site like a customer and find the pages, buttons and forms that get in the way.',
    details: ['Booking or enquiry route', 'Mobile speed and usability', 'Fixes ranked by importance'],
    icon: Search,
  },
]

export const processSteps = [
  ['Talk it through', 'Tell us about your business, your customers and what your site needs to do.', MessageCircle],
  ['Compare mockups', 'We send you a few designs. You tell us what you like and what you’d change.', Layers],
  ['Refine the design', 'Together we revise the layout and copy until you’re ready to sign off.', Pencil],
  ['Go live', 'We build the approved site and launch it on your infrastructure. You keep control of hosting and access.', Server],
  ['Keep it running', 'After launch, we maintain the site, apply updates and fix issues.', Wrench],
] as const
