import {
  Activity,
  CalendarCheck,
  ChartNoAxesCombined,
  Compass,
  Hammer,
  HeartPulse,
  House,
  Search,
  Sparkles,
  Wrench,
} from 'lucide-react'
import type { Industry, Service } from '../types/content'

export const services: Service[] = [
  {
    number: '01',
    title: 'Website leak check',
    summary: 'We use the site like a customer and find the pages, buttons and forms that get in the way.',
    details: ['Booking or enquiry route', 'Mobile speed and usability', 'Fixes ranked by importance'],
    icon: Search,
  },
  {
    number: '02',
    title: 'Website rebuild',
    summary: 'A new site for businesses whose current one is too slow, hard to use or costly to repair.',
    details: ['Pages planned around customer questions', 'Fast build for phones and desktops', 'Booking or enquiry system connected'],
    icon: Hammer,
  },
  {
    number: '03',
    title: 'Website improvements',
    summary: 'Specific repairs for a site that does not need replacing from top to bottom.',
    details: ['Landing page changes', 'Booking flow repairs', 'Rewritten pages and navigation'],
    icon: Wrench,
  },
  {
    number: '04',
    title: 'Local search setup',
    summary: 'The page structure and business information Google needs to understand where you work and what you offer.',
    details: ['Pages for real service areas', 'Titles, metadata and schema', 'Analytics and enquiry tracking'],
    icon: ChartNoAxesCombined,
  },
]

export const industries: Industry[] = [
  {
    slug: 'clinics',
    name: 'Dental and aesthetic clinics',
    shortName: 'Clinics',
    eyebrow: 'Dental and aesthetic clinics',
    headline: 'Turn patient research into booked consultations.',
    summary:
      'Patients compare treatments, prices, practitioners and recovery details before they call. Your site should answer those questions and lead straight to the right consultation.',
    problems: [
      'Treatment pages that do not explain outcomes or next steps',
      'Booking buttons that lead to generic contact forms',
      'Practitioner credentials and patient proof hidden away',
    ],
    outcomes: [
      'A useful page for each important treatment',
      'Consultation buttons that open the right booking step',
      'Practitioner credentials and patient proof on treatment pages',
    ],
    metric: '24/7',
    metricLabel: 'access to treatment information',
    icon: HeartPulse,
  },
  {
    slug: 'tour-operators',
    name: 'Tours and experiences',
    shortName: 'Tour operators',
    eyebrow: 'Tours and experiences',
    headline: 'Help travellers choose and book before they land.',
    summary:
      'Tourists often choose from a phone before they reach Dubai. They need to know the timings, meeting point, inclusions and cancellation terms without digging through the site.',
    problems: [
      'Important trip details buried across several pages',
      'Slow mobile pages and confusing booking handoffs',
      'Generic copy that makes every tour look the same',
    ],
    outcomes: ['One complete page for each experience', 'Fast mobile pages with direct booking', 'Timings, inclusions and policies in plain view'],
    metric: '<3s',
    metricLabel: 'target mobile load time',
    icon: Compass,
  },
  {
    slug: 'wellness',
    name: 'Salons, spas and med spas',
    shortName: 'Spa & Wellness',
    eyebrow: 'Salons, spas and med spas',
    headline: 'Make every treatment easy to understand and book.',
    summary:
      'A long treatment menu is hard to use when names sound similar and prices or durations are missing. We organise the services around what customers need and connect each one to the right booking step.',
    problems: [
      'Long service menus with no guidance',
      'Prices, duration and suitability missing from pages',
      'Booking tools that make customers search for the treatment again',
    ],
    outcomes: ['Services grouped in a way customers understand', 'Price, duration and suitability on the page', 'Each service linked to the correct booking option'],
    metric: '1 tap',
    metricLabel: 'from service to booking',
    icon: Sparkles,
  },
  {
    slug: 'home-services',
    name: 'Home-service businesses',
    shortName: 'Home services',
    eyebrow: 'Home-service businesses',
    headline: 'Turn urgent searches into useful quote requests.',
    summary:
      'Someone with a leak, broken AC or damaged roof wants to know whether you cover their area, when you can come and whether your work can be trusted. The site should answer all three quickly.',
    problems: [
      'Unclear coverage areas and availability',
      'Contact forms that collect too little useful detail',
      'No proof of workmanship or local experience',
    ],
    outcomes: ['Useful pages for the areas you actually serve', 'Quote forms that collect job details and photos', 'Recent work, reviews and response times shown clearly'],
    metric: '24h',
    metricLabel: 'response expectation',
    icon: House,
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Find the leaks',
    text: 'We open the site on a phone and follow the main route to a booking or enquiry.',
    icon: Activity,
  },
  {
    number: '02',
    title: 'Set the priorities',
    text: 'We rank the problems by how many customers they affect and what those customers are worth.',
    icon: CalendarCheck,
  },
  {
    number: '03',
    title: 'Build and measure',
    text: 'We make the agreed changes and track whether more people reach the booking or enquiry.',
    icon: ChartNoAxesCombined,
  },
]
