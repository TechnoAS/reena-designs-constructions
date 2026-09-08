/**
 * Every indexable route, with the title and description it ships.
 *
 * Two build steps read this: `gen-sitemap.mjs` writes public/sitemap.xml from
 * it, and `prerender.mjs` stamps a per-route HTML shell so a deep link arrives
 * with its own title in the raw markup rather than the homepage's.
 *
 * The strings here are duplicated from the `<Seo>` call in each page
 * component, because those live in TSX that a plain Node script cannot import.
 * Duplication that nobody notices going stale is worse than no duplication at
 * all, so `verifyRoutes()` below reads each page source back and fails the
 * build if the description no longer matches. Change one, change both.
 *
 * On `changefreq` and `priority`: Google has ignored both for years. They are
 * kept because Bing and Yandex still read them, and they cost nothing.
 */
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

/** Company name, appended to every title exactly as <Seo> appends it. */
export const SITE_NAME = 'Reena Designs & Constructions'

export const ORIGIN = (process.env.VITE_SITE_URL || 'https://reenabuild.com').replace(/\/+$/, '')

/**
 * @typedef {object} Route
 * @property {string} path
 * @property {string} title      Page title, before " | {SITE_NAME}" is appended.
 * @property {string} description
 * @property {string} changefreq
 * @property {string} priority
 * @property {string} [source]   Page file to verify the description against.
 * @property {string[]} [keywords] Target terms, mirroring src/data/seo.ts.
 */

/** @type {Route[]} */
export const ROUTES = [
  {
    path: '/',
    title: 'Construction & Interior Design Company in Midnapur, West Bengal',
    description:
      'Design-led building construction, architecture, interiors and renovation in Midnapur, Paschim Midnapur. 250+ projects delivered in 15+ years, with a completion date written into the contract.',
    changefreq: 'monthly',
    priority: '1.0',
    source: 'src/pages/Home.tsx',
  },
  {
    path: '/about',
    title: 'About Us — 15+ Years of Building in Paschim Midnapur',
    description:
      'Who we are: the architects, engineers and designers behind Reena Designs & Constructions, our story, values, certifications and the team delivering every project in Midnapur and across India.',
    changefreq: 'yearly',
    priority: '0.8',
    source: 'src/pages/About.tsx',
  },
  {
    path: '/services',
    title: 'Our Services — Construction, Architecture & Interiors',
    description:
      'Eight disciplines delivered in-house: residential and commercial construction, architectural design, structural engineering, renovation, interiors, exteriors and turnkey delivery across India.',
    changefreq: 'monthly',
    priority: '0.9',
    source: 'src/pages/Services.tsx',
  },
  {
    path: '/whats-included',
    title: "What's Included — Materials, Grades & Labour in Your Quotation",
    description:
      'The nine cost heads in a Reena Designs & Constructions quotation: cement, sand, TMT bar, bricks, tiles, marble, paints, electrical goods and labour — every grade named, and a plain list of what is not included.',
    changefreq: 'monthly',
    priority: '0.8',
    source: 'src/pages/WhatsIncluded.tsx',
  },
  {
    path: '/our-work',
    title: 'Our Work — Project & Design Galleries',
    description:
      'Browse completed and ongoing work from Reena Designs & Constructions: projects, residential and commercial interiors, exteriors, architecture, 3D elevations, renovations and client testimonials.',
    changefreq: 'monthly',
    priority: '0.8',
    source: 'src/pages/OurWork.tsx',
  },
  {
    path: '/our-work/projects/successful',
    title: 'Successful Projects — Completed Builds & Handovers',
    description:
      'Completed residential, commercial, interior and renovation projects across Midnapur, Kharagpur, Ghatal, Belda and Jhargram — each delivered to the approved drawing on the contracted date.',
    changefreq: 'monthly',
    priority: '0.8',
    source: 'src/pages/ProjectsSuccessful.tsx',
  },
  {
    path: '/our-work/projects/ongoing',
    title: 'Ongoing Projects — Live Construction Sites',
    description:
      'Construction currently under way with Reena Designs & Constructions across Paschim Midnapur, with build progress and expected handover dates for each live site.',
    changefreq: 'weekly',
    priority: '0.7',
    source: 'src/pages/ProjectsOngoing.tsx',
  },
  {
    path: '/our-work/interior/residential',
    title: 'Residential Interior Design in Midnapur',
    description:
      'Living rooms, bedrooms, modular kitchens and pooja rooms designed in 3D and quoted by named material grade, executed by our own carpentry and electrical teams in Midnapur and across India.',
    changefreq: 'monthly',
    priority: '0.8',
    source: 'src/pages/InteriorResidential.tsx',
  },
  {
    path: '/our-work/interior/commercial',
    title: 'Commercial Interior Design — Offices, Retail & Hotels',
    description:
      'Office, restaurant, retail, hotel and institutional interiors delivered on commercial timelines with minimal disruption to trading, across Midnapur, Kharagpur and West Bengal.',
    changefreq: 'monthly',
    priority: '0.8',
    source: 'src/pages/InteriorCommercial.tsx',
  },

  /*
    Galleries. Their <Seo> strings are built at runtime from the gallery title
    and image count, so there is no literal in the source to verify against —
    these are reproduced by hand and marked without a `source`.
  */
  {
    path: '/our-work/exterior',
    title: 'Exterior Design — Project Gallery',
    description:
      'Exterior Design by Reena Designs & Constructions — completed work across Midnapur, Kharagpur and Paschim Midnapur, West Bengal. 6 projects.',
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    path: '/our-work/architecture',
    title: 'Architecture Gallery — Project Gallery',
    description:
      'Architecture Gallery by Reena Designs & Constructions — completed work across Midnapur, Kharagpur and Paschim Midnapur, West Bengal. 6 projects.',
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    path: '/our-work/3d-design',
    title: '3d Design & Elevation — Project Gallery',
    description:
      '3d Design & Elevation by Reena Designs & Constructions — completed work across Midnapur, Kharagpur and Paschim Midnapur, West Bengal. 4 projects.',
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    path: '/our-work/renovation',
    title: 'Renovation Projects — Project Gallery',
    description:
      'Renovation Projects by Reena Designs & Constructions — completed work across Midnapur, Kharagpur and Paschim Midnapur, West Bengal. 4 projects.',
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    path: '/our-work/before-after',
    title: 'Before & After Gallery — Project Gallery',
    description:
      'Before & After Gallery by Reena Designs & Constructions — completed work across Midnapur, Kharagpur and Paschim Midnapur, West Bengal. 4 projects.',
    changefreq: 'monthly',
    priority: '0.6',
  },

  {
    path: '/our-work/testimonials',
    title: 'Client Testimonials — What Our Clients Say',
    description:
      'Homeowners, business owners and developers on working with Reena Designs & Constructions: transparency, on-time handover and the quality of the finished build.',
    changefreq: 'monthly',
    priority: '0.7',
    source: 'src/pages/TestimonialsPage.tsx',
  },
  {
    path: '/contact',
    title: 'Contact Us — Free Site Visit & Quote in Midnapur',
    description:
      'Talk to Reena Designs & Constructions about your build. Free site visit across Paschim Midnapur, itemised quotation and a written completion date. Call +91 98765 43210.',
    changefreq: 'yearly',
    priority: '0.9',
    source: 'src/pages/Contact.tsx',
  },
  {
    /*
      The FAQ was missing from the sitemap entirely until now, which is the
      most expensive kind of omission: it is the one page on the site written
      as direct answers to the questions people actually type ("how much does
      it cost to build a house in Midnapur"), and it carries FAQPage markup
      that makes those answers eligible to appear as expandable rows.
    */
    path: '/faq',
    title: 'Frequently Asked Questions',
    description:
      'Costs, timelines, municipal approvals, materials, payment stages and warranty — straight answers to the questions we are asked before every build in Midnapur, Paschim Midnapur.',
    changefreq: 'monthly',
    priority: '0.8',
    source: 'src/pages/Faq.tsx',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy',
    description: `How ${SITE_NAME} handles the information you send through this website: what is collected, why, how long it is kept, and how to have it removed.`,
    changefreq: 'yearly',
    priority: '0.3',
  },
  {
    path: '/cookies',
    title: 'Cookie Policy',
    description: `What ${SITE_NAME} stores in your browser. This website sets no advertising or analytics cookies — only a single local record of your answer to the cookie notice.`,
    changefreq: 'yearly',
    priority: '0.3',
  },
]

/**
 * Fails the build if a route's description has drifted from the page that
 * renders it.
 *
 * Two different descriptions for one URL is not a cosmetic problem: the
 * prerendered shell is what a social crawler reads and what Google sees first,
 * and it would be advertising a page that no longer says that.
 */
export function verifyRoutes() {
  const problems = []
  for (const route of ROUTES) {
    if (!route.source) continue
    let source
    try {
      source = readFileSync(resolve(root, route.source), 'utf8')
    } catch {
      problems.push(`${route.path}: source file ${route.source} not found`)
      continue
    }
    if (!source.includes(route.description)) {
      problems.push(
        `${route.path}: description in scripts/routes.mjs is not present in ${route.source} — update whichever one is stale.`,
      )
    }
  }
  if (problems.length) {
    console.error('\nRoute metadata is out of sync:\n' + problems.map((p) => `  • ${p}`).join('\n') + '\n')
    process.exit(1)
  }
}
