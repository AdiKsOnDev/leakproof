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
    journeyTitle: 'From treatment research to a confirmed consultation.',
    journeySummary: 'Patients should be able to answer their clinical and practical questions before the booking form asks for their details.',
    journey: [
      { title: 'Find the treatment', text: 'A focused page matches the concern or outcome they are researching.' },
      { title: 'Build confidence', text: 'Credentials, realistic outcomes, recovery details and patient proof answer the main doubts.' },
      { title: 'Choose a consultation', text: 'The treatment page opens the correct practitioner or consultation type.' },
      { title: 'Receive confirmation', text: 'The patient gets the date, location and preparation details immediately.' },
    ],
    principle: 'A patient should not need to call reception just to understand whether a treatment may suit them.',
    principleText: 'Explain the treatment clearly, place practitioner proof beside the decision and connect the page to the right consultation.',
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
    metric: '<2s',
    metricLabel: 'target mobile load time',
    icon: Compass,
    journeyTitle: 'From holiday planning to a paid booking.',
    journeySummary: 'A traveller may be comparing several tabs on a phone. The route to a decision has to carry every practical detail with it.',
    journey: [
      { title: 'Discover the experience', text: 'Search and landing pages make the location and type of tour clear.' },
      { title: 'Check the details', text: 'Timings, meeting point, inclusions, age limits and cancellation terms sit together.' },
      { title: 'Pick a date', text: 'Live availability appears without sending the traveller through another search.' },
      { title: 'Book and prepare', text: 'Payment confirmation includes directions and what to bring.' },
    ],
    principle: 'A traveller should know exactly what they are booking before leaving the experience page.',
    principleText: 'Keep the itinerary, logistics, availability and booking action in one continuous mobile journey.',
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
    journeyTitle: 'From a treatment goal to the right appointment.',
    journeySummary: 'Customers often know the result they want, not the internal name used in a salon menu. The website should translate between the two.',
    journey: [
      { title: 'Start with the goal', text: 'Customers browse by need, result or body area instead of decoding a long menu.' },
      { title: 'Compare treatments', text: 'Price, duration, suitability and aftercare make similar options easier to separate.' },
      { title: 'Open the right slot', text: 'The chosen treatment carries through to the correct booking category.' },
      { title: 'Confirm and remind', text: 'The booking message covers preparation, location and rescheduling.' },
    ],
    principle: 'A customer should never have to search for the same treatment twice.',
    principleText: 'Organise the menu around customer goals and preserve their selection when the booking tool opens.',
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
    metric: '30m',
    metricLabel: 'response expectation',
    icon: House,
    journeyTitle: 'From an urgent search to a useful job request.',
    journeySummary: 'Home-service leads are time-sensitive. The site should qualify the location and problem without making the customer write an essay.',
    journey: [
      { title: 'Confirm service coverage', text: 'The page immediately states the areas served and the type of work accepted.' },
      { title: 'Show relevant proof', text: 'Recent local jobs, reviews and licences reduce the risk of contacting an unknown contractor.' },
      { title: 'Capture the problem', text: 'A short quote form collects the address area, urgency, job details and photos.' },
      { title: 'Set the next step', text: 'The confirmation states when and how the business will respond.' },
    ],
    principle: 'An urgent customer should know whether you can help before they spend time filling in a form.',
    principleText: 'Confirm coverage and availability early, then collect enough detail for a useful first response.',
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
