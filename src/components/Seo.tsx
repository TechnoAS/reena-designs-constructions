import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { SITE } from "@/data/siteInfo"

type SeoProps = {
  /** Page-specific title. The company name is appended automatically. */
  title: string
  description: string
  /** Set on pages that must not be indexed (404, thin utility pages). */
  noindex?: boolean
}

/**
 * Per-route document head.
 *
 * Without this every one of the site's routes shipped the single title and
 * description from `.figma/make/site.json`, so /services, /contact and eight
 * gallery pages all competed in search as the same page. A local-search site
 * cannot afford that.
 *
 * Tags are created once and then mutated by key, rather than removed and
 * re-added on every navigation — a crawler that snapshots mid-update would
 * otherwise catch a head with no canonical at all. Only `robots` is torn down
 * on unmount, because it is the one tag whose absence is the correct default.
 */
function upsertMeta(key: "name" | "property", value: string, content: string) {
  const selector = `meta[${key}="${value}"]`
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(key, value)
    document.head.appendChild(el)
  }
  el.content = content
  return el
}

export default function Seo({ title, description, noindex = false }: SeoProps) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`
    const url = `${SITE.origin}${pathname}`

    document.title = fullTitle

    upsertMeta("name", "description", description)
    upsertMeta("property", "og:title", fullTitle)
    upsertMeta("property", "og:description", description)
    upsertMeta("property", "og:url", url)
    upsertMeta("name", "twitter:title", fullTitle)
    upsertMeta("name", "twitter:description", description)

    // Canonical stops the same content being indexed under a query string or a
    // trailing-slash variant.
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.rel = "canonical"
      document.head.appendChild(canonical)
    }
    canonical.href = url

    // The static tag in index.html says "index, follow". A noindex page has to
    // override it while mounted and hand it back on the way out, or the next
    // route inherits the noindex.
    const robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]')
    const previousRobots = robots?.content ?? null
    if (robots) {
      robots.content = noindex ? "noindex, follow" : "index, follow, max-image-preview:large"
    }

    return () => {
      if (robots && previousRobots !== null) robots.content = previousRobots
    }
  }, [title, description, noindex, pathname])

  return null
}
