/**
 * Writes public/sitemap.xml from the shared route table.
 *
 * Runs as part of `pnpm build`. Keeping the list in `routes.mjs` rather than
 * hand-editing XML means a new route is one entry, shared with the prerender
 * step, and the file cannot silently go stale the way a checked-in sitemap
 * does. Redirect-only paths (/our-work/projects, /our-work/interior) are
 * deliberately absent — a sitemap listing a URL that 301s wastes crawl budget
 * and tells Google the destination is not the canonical one.
 */
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { ROUTES, ORIGIN, verifyRoutes } from './routes.mjs'

verifyRoutes()

const today = new Date().toISOString().slice(0, 10)

/** & < > in a URL would make the XML unparseable and the sitemap rejected. */
const escapeXml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  ({ path, changefreq, priority }) => `  <url>
    <loc>${escapeXml(ORIGIN + path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
).join('\n')}
</urlset>
`

const out = resolve(dirname(fileURLToPath(import.meta.url)), '../public/sitemap.xml')
mkdirSync(dirname(out), { recursive: true })
writeFileSync(out, xml)
console.log(`sitemap.xml — ${ROUTES.length} routes → ${ORIGIN}`)
