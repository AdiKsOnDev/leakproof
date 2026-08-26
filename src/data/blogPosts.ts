import type { BlogPost } from '../types/content'

export const blogPosts: BlogPost[] = [
  {
    slug: 'website-traffic-no-enquiries',
    title: 'Why your website gets traffic but no enquiries',
    category: 'Conversion',
    excerpt: 'Traffic is only useful when the right visitor can understand the offer, trust the business and take the next step without getting stuck.',
    seoDescription: 'Find the practical reasons a business website gets traffic but few enquiries, and learn what to check before spending more on ads or SEO.',
    publishedAt: '2026-08-18',
    publishedLabel: '18 August 2026',
    readTime: '7 min read',
    thumbnail: 'diagnostic',
    intro: [
      'A quiet enquiry inbox does not automatically mean you need more traffic. It sometimes means the website is losing people who were already interested.',
      'That distinction matters. More advertising cannot fix a vague offer, a weak mobile page or a form that feels like work. It only sends more people into the same broken route.',
    ],
    sections: [
      {
        heading: 'Start with the search that brought them in',
        paragraphs: [
          'A visitor searching for an emergency AC repair has a different job to do than someone comparing annual maintenance contracts. If both land on a general services page, one of them has to hunt for an answer. Most will not.',
          'Open your highest-traffic landing pages in Search Console and compare the search terms with the first screen of each page. The page should answer the reason for the search before it introduces the company history, awards or every service you offer.',
        ],
        points: [
          'Does the heading name the service or outcome the visitor searched for?',
          'Can the visitor tell whether you serve their area?',
          'Is the next step visible without scrolling through a company introduction?',
        ],
      },
      {
        heading: 'The offer may be clear to you and vague to everyone else',
        paragraphs: [
          'Businesses live with their own terminology every day. Customers do not. Phrases such as tailored solutions, premium service and end-to-end support sound polished, but they do not tell a buyer what happens next.',
          'Replace broad claims with the facts a customer uses to decide. Name the service, location, typical turnaround, starting condition or booking process. Specific copy makes a smaller promise, which is exactly why it is easier to trust.',
        ],
      },
      {
        heading: 'Trust needs to appear beside the decision',
        paragraphs: [
          'A testimonials page hidden in the navigation does little for someone deciding whether to submit a form. Put relevant proof near the point of doubt. A contractor page needs project examples, service areas and what happens after the request.',
          'Avoid a wall of logos with no explanation. One short case example that names the problem and result can do more work than ten anonymous five-star quotes.',
        ],
      },
      {
        heading: 'Test the enquiry route on an ordinary phone',
        paragraphs: [
          'Do not test only on a new phone over office Wi-Fi. Use mobile data. Dismiss the cookie notice. Open the menu. Fill in the form with one hand. Then make a mistake and see whether the page explains it.',
          'Common losses are mundane: a phone number that is not clickable, a WhatsApp button covering the submit button, an address field that rejects a common format, or a success message that appears off-screen. These are small defects with a direct commercial cost.',
        ],
        points: [
          'Keep the first enquiry form to information you need before replying.',
          'Use a visible label for every field instead of placeholder text alone.',
          'Confirm what happens after submission and when the customer should expect a reply.',
        ],
      },
      {
        heading: 'Measure each step before the form submission',
        paragraphs: [
          'A single conversion number tells you that something went wrong, not where. Track visits to the service page, clicks on the main action, form starts, validation errors and successful submissions. For phone and WhatsApp enquiries, track those clicks too.',
          'Once you can see the drop-off, fix the narrowest point first. That is usually cheaper than redesigning the entire site, and it gives the redesign a real brief if one is needed.',
        ],
      },
    ],
    relatedSlugs: ['local-seo-website-optimization', 'website-redesign-checklist-small-business'],
  },
  {
    slug: 'local-seo-website-optimization',
    title: 'How to optimize your website for local SEO',
    category: 'Local SEO',
    excerpt: 'Local rankings depend on clear service pages, consistent business details and evidence that connects the company to the places it serves.',
    seoDescription: 'Learn how to optimize a small business website for local SEO with better service pages, location signals, internal links and technical checks.',
    publishedAt: '2026-08-24',
    publishedLabel: '24 August 2026',
    readTime: '9 min read',
    thumbnail: 'local-seo',
    intro: [
      'Local SEO helps nearby customers find a business when they search for a service, a product or a place to visit. The website is only one part of that work, but it is the part the business controls most directly.',
      'The goal is not to repeat a city name until the page sounds broken. A useful local page makes the service, coverage area and next step unmistakable. It also gives search engines enough consistent information to connect the business with the query.',
    ],
    sections: [
      {
        heading: 'Choose a real search intent for each page',
        paragraphs: [
          'Start with the services people actually search for. A company may describe its offer as property care, while customers search for AC maintenance, plumbing repair or deep cleaning. The page title and main heading should use the language of the customer when that language accurately describes the service.',
          'Do not force every keyword onto the homepage. Give important services their own pages when each service has different questions, proof or booking requirements. One strong page about a specific service in Dubai is more useful than a homepage trying to rank for twenty unrelated phrases.',
        ],
        points: [
          'Name one primary service or problem on each page.',
          'Include the main service area where it reads naturally.',
          'Match the call to action to the intent of that page.',
        ],
      },
      {
        heading: 'Put complete business details on the site',
        paragraphs: [
          'Use the same business name, address and phone number shown on the Google Business Profile. Small formatting differences are rarely a disaster, but old phone numbers and conflicting addresses create genuine confusion for customers and search engines.',
          'A business with a public location should have a contact page with the full address, opening hours, directions and a map or map link. A service-area business should state the areas it serves without pretending to have an office in each one.',
        ],
      },
      {
        heading: 'Write location pages only when the content changes',
        paragraphs: [
          'A copied page for every neighbourhood is not a local SEO strategy. Search engines and customers can see when only the place name changed. Create a location page when the business has a branch there, the service differs there or you can add useful local information.',
          'A good location page can include the services available at that branch, local contact details, opening hours, directions, nearby landmarks, staff, original photographs and reviews tied to that location. If none of those details exist, improve the main service page instead.',
        ],
      },
      {
        heading: 'Connect the Google Business Profile to the right page',
        paragraphs: [
          'The website link on the profile should usually point to the page that best represents that location. For a single-location business, that may be the homepage. For a business with several branches, each profile should link to its corresponding location page.',
          'Keep the profile categories, services, opening hours and contact details current. The website cannot compensate for a profile that says the business is closed or points to a dead page.',
        ],
      },
      {
        heading: 'Add local proof where customers need it',
        paragraphs: [
          'A bare claim that you serve Dubai is weak evidence. Show completed work, customer questions, delivery terms or service details that are specific to the area. For a home-service company, that may include the communities covered and expected arrival process. For a retailer, it may include collection and delivery options.',
          'Use original images when possible. A labelled project photograph or storefront image says more about a real local business than a stock skyline placed behind a heading.',
        ],
      },
      {
        heading: 'Make the page easy to crawl and understand',
        paragraphs: [
          'Every important service and location page should be reachable through normal links. Do not leave pages accessible only through a search box or a JavaScript filter. Link from the homepage, service overview, footer or another relevant page.',
          'Give each page a unique title and description. Use one descriptive main heading, sensible subheadings and plain link text. Add LocalBusiness structured data with accurate details, but do not expect schema markup to rescue thin content or a poor business profile.',
        ],
        points: [
          'Check that search engines can index the page.',
          'Redirect old URLs when service or location pages move.',
          'Compress large images and test loading on mobile data.',
          'Keep phone, email and WhatsApp links usable on a small screen.',
        ],
      },
      {
        heading: 'Measure leads from local search',
        paragraphs: [
          'Track calls, form submissions, direction clicks and WhatsApp clicks from organic landing pages. Rankings are useful diagnostics, but the business result is a qualified local enquiry.',
          'Review Search Console by page and query. If a page appears for the right searches but receives few clicks, check its title and description. If it receives visits but no enquiries, inspect the offer and contact route before publishing more pages.',
        ],
      },
    ],
    relatedSlugs: ['website-traffic-no-enquiries', 'website-redesign-checklist-small-business'],
  },
  {
    slug: 'website-redesign-checklist-small-business',
    title: 'A website redesign checklist for small businesses',
    category: 'Redesigns',
    excerpt: 'A redesign should preserve what already earns traffic and fix what blocks customers. Starting with colours usually creates an expensive version of the same problem.',
    seoDescription: 'Use this small business website redesign checklist to protect search traffic, clarify requirements and prevent common launch problems.',
    publishedAt: '2026-08-04',
    publishedLabel: '4 August 2026',
    readTime: '9 min read',
    thumbnail: 'checklist',
    intro: [
      'Most redesign projects begin with a visual complaint. The site looks old, a competitor launched something sharper, or the owner is tired of seeing it. Those feelings are fair, but they are a poor brief.',
      'Before anyone opens a design file, work out what the current website does well, where customers struggle and what the business needs to change. This checklist keeps the project tied to those answers.',
    ],
    sections: [
      {
        heading: 'Record the current site before replacing it',
        paragraphs: [
          'Export the pages that receive organic traffic, the search terms attached to them and the actions visitors take. Save the current title tags, descriptions and URLs. If a service page ranks and brings qualified enquiries, deleting it because the new navigation looks cleaner is not progress.',
          'Talk to the people who answer calls and messages. They know which questions customers ask before buying, what customers misunderstand and which enquiries are a poor fit. That information belongs in the site structure.',
        ],
        points: [
          'Top landing pages from analytics and Search Console',
          'Current enquiries by source and service',
          'Pages with useful backlinks',
          'Common sales questions and objections',
          'Technical problems on mobile devices',
        ],
      },
      {
        heading: 'Give every page one clear job',
        paragraphs: [
          'A homepage may need to route several types of visitor. A service page should explain one service and lead to an enquiry. A contact page should make contact easy. When every page tries to tell the full company story, the useful answer gets buried.',
          'Write the job of each page in one sentence. If the team cannot agree on that sentence, the page is not ready for design.',
        ],
      },
      {
        heading: 'Prepare real content before approving layouts',
        paragraphs: [
          'Placeholder copy hides design problems. A neat three-card row may fall apart when one service needs twice as much explanation. A hero can look balanced with six invented words and become unusable with the real offer.',
          'You do not need final punctuation before design starts, but you do need the real hierarchy, claims, proof and calls to action. Design should shape the content you have, not force it into the nearest template.',
        ],
      },
      {
        heading: 'Plan the launch as carefully as the homepage',
        paragraphs: [
          'Every changed URL needs a redirect to the closest relevant new page. Forms need real submissions, not a green success message in a preview. Analytics, consent settings, phone links and email notifications need checks on the live domain.',
          'Keep the old site available privately for a short period. It is much easier to recover a missing policy page or piece of copy when the previous version still exists.',
        ],
        points: [
          'Map old URLs to new URLs before launch day.',
          'Test forms with valid, invalid and incomplete entries.',
          'Check the site on iPhone and Android, not only a resized browser.',
          'Submit the sitemap and inspect indexing after launch.',
          'Watch enquiries and search traffic for unexpected drops.',
        ],
      },
      {
        heading: 'Judge the redesign against the original problem',
        paragraphs: [
          'A redesign is not successful because stakeholders like the reveal meeting. Check whether more suitable visitors reach the right service, whether form completion improves and whether the sales team receives better information.',
          'Visual quality matters. It signals care and affects trust. It simply cannot be the only thing the project is asked to improve.',
        ],
      },
    ],
    relatedSlugs: ['local-seo-website-optimization', 'website-traffic-no-enquiries'],
  },
]

export function getBlogPost(slug?: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRelatedBlogPosts(post: BlogPost) {
  return post.relatedSlugs
    .map((slug) => getBlogPost(slug))
    .filter((relatedPost): relatedPost is BlogPost => Boolean(relatedPost))
}
