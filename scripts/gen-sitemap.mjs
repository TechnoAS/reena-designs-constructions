/**
 * Writes public/sitemap.xml from ROUTES below.
 *
 * Runs as part of `pnpm build`. Keeping the list here rather than hand-editing
 * XML means a new route is one line, and the file cannot silently go stale the
 * way a checked-in sitemap does.
 */
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ORIGIN = (process.env.VITE_SITE_URL || 'https://reenabuild.com').replace(/\/+$/, '')

/** [path, changefreq, priority] — redirect-only paths are deliberately absent. */
const ROUTES = [
  ['/', 'monthly', '1.0'],
  ['/about', 'yearly', '0.8'],
  ['/services', 'monthly', '0.9'],
  ['/our-work', 'monthly', '0.8'],
  ['/our-work/projects/successful', 'monthly', '0.8'],
  ['/our-work/projects/ongoing', 'weekly', '0.7'],
  ['/our-work/interior/residential', 'monthly', '0.8'],
  ['/our-work/interior/commercial', 'monthly', '0.8'],
  ['/our-work/exterior', 'monthly', '0.6'],
  ['/our-work/architecture', 'monthly', '0.6'],
  ['/our-work/3d-design', 'monthly', '0.6'],
  ['/our-work/renovation', 'monthly', '0.6'],
  ['/our-work/before-after', 'monthly', '0.6'],
  ['/our-work/testimonials', 'monthly', '0.7'],
  ['/contact', 'yearly', '0.9'],
  ['/privacy', 'yearly', '0.3'],
  ['/cookies', 'yearly', '0.3'],
]

const today = new Date().toISOString().slice(0, 10)
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  ([path, freq, priority]) => `  <url>
    <loc>${ORIGIN}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
).join('\n')}
</urlset>
`

const out = resolve(dirname(fileURLToPath(import.meta.url)), '../public/sitemap.xml')
mkdirSync(dirname(out), { recursive: true })
writeFileSync(out, xml)
console.log(`sitemap.xml — ${ROUTES.length} routes → ${ORIGIN}`)
