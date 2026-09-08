import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { SITE } from "@/data/siteInfo"
import { keywordsFor } from "@/data/seo"

type SeoProps = {
  /** Page-specific title. The company name is appended automatically. */
  title: string
  description: string
  /** Set on pages that must not be indexed (404, thin utility pages). */
  noindex?: boolean
  /**
   * Target terms for this URL. Omit and the route's entry in `PAGE_KEYWORDS`
   * is used, which is the normal case — passing them here is for routes
   * generated at runtime, like the five galleries.
   */
  keywords?: string | string[]
  /**
   * Social card image. Absolute URL, or a path resolved against the origin.
   * Falls back to the site-wide card set in index.html.
   */
  image?: string
  /**
   * JSON-LD for this page. Build it with the helpers in
   * `@/data/structuredData` — anything passed here replaces the previous
   * page's graph on navigation rather than stacking on top of it.
   */
  schema?: object | object[]
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

/**
 * The page's JSON-LD, carried in one script element that is reused across
 * navigations.
 *
 * It has to be *replaced*, not appended: React Router keeps the document
 * alive, so appending would leave /contact shipping the /services graph as
 * well, and two `@id`-clashing nodes in one document is how a rich result gets
 * dropped rather than doubled. The prerendered HTML shell writes its graph
 * into an element with this same id, so the first client render overwrites it
 * instead of duplicating it.
 */
const JSONLD_ID = "seo-page-jsonld"

function upsertJsonLd(schema: object | object[] | undefined) {
  const existing = document.getElementById(JSONLD_ID)
  if (!schema) {
    existing?.remove()
    return
  }
  const el = existing ?? document.createElement("script")
  if (!existing) {
    el.id = JSONLD_ID
    ;(el as HTMLScriptElement).type = "application/ld+json"
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(schema)
}

export default function Seo({
  title,
  description,
  noindex = false,
  keywords,
  image,
  schema,
}: SeoProps) {
  const { pathname } = useLocation()

  // Arrays and object literals are new on every render, so the effect is keyed
  // on their serialised form rather than the reference itself — otherwise a
  // parent re-render rewrites the whole head and the JSON-LD for no reason.
  const keywordList = Array.isArray(keywords) ? keywords.join(", ") : keywords
  const schemaJson = schema ? JSON.stringify(schema) : ""

  useEffect(() => {
    const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`
    const url = `${SITE.origin}${pathname}`
    const socialImage = image
      ? image.startsWith("http")
        ? image
        : `${SITE.origin}${image}`
      : `${SITE.origin}${SITE.ogImagePath}`

    document.title = fullTitle

    upsertMeta("name", "description", description)
    upsertMeta("property", "og:title", fullTitle)
    upsertMeta("property", "og:description", description)
    upsertMeta("property", "og:url", url)
    upsertMeta("property", "og:image", socialImage)
    upsertMeta("name", "twitter:title", fullTitle)
    upsertMeta("name", "twitter:description", description)
    upsertMeta("name", "twitter:image", socialImage)

    // Falls back to the route's entry in PAGE_KEYWORDS so that adding a page
    // to that map is enough — no page has to remember to wire it through.
    const terms = keywordList ?? keywordsFor(pathname)
    if (terms) upsertMeta("name", "keywords", terms)

    // Canonical stops the same content being indexed under a query string or a
    // trailing-slash variant.
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.rel = "canonical"
      document.head.appendChild(canonical)
    }
    canonical.href = url

    // One language, one region — but declaring it explicitly stops Google
    // serving the page against an unrelated locale, and pairs with the
    // en-IN `lang` on <html>.
    let alternate = document.head.querySelector<HTMLLinkElement>('link[rel="alternate"][hreflang="en-IN"]')
    if (!alternate) {
      alternate = document.createElement("link")
      alternate.rel = "alternate"
      alternate.hreflang = "en-IN"
      document.head.appendChild(alternate)
    }
    alternate.href = url

    upsertJsonLd(schemaJson ? (JSON.parse(schemaJson) as object) : undefined)

    // The static tag in index.html says "index, follow". A noindex page has to
    // override it while mounted and hand it back on the way out, or the next
    // route inherits the noindex.
    const robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]')
    const previousRobots = robots?.content ?? null
    if (robots) {
      robots.content = noindex
        ? "noindex, follow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    }

    return () => {
      if (robots && previousRobots !== null) robots.content = previousRobots
    }
  }, [title, description, noindex, pathname, keywordList, image, schemaJson])

  return null
}
