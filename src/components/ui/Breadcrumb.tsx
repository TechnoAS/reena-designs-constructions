import { useEffect } from "react"
import { Link } from "react-router-dom"
import { SITE } from "@/data/siteInfo"

interface BreadcrumbItem {
  label: string
  href?: string
}

/**
 * Page trail.
 *
 * Also emits BreadcrumbList structured data while mounted. The gallery routes
 * are four levels deep (/our-work/interior/residential), and without this a
 * search result shows the bare URL rather than the readable
 * "Home › Our Work › Interior Design" trail.
 */
export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  useEffect(() => {
    if (items.length < 2) return

    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.label,
        ...(item.href ? { item: `${SITE.origin}${item.href}` } : {}),
      })),
    })
    document.head.appendChild(script)
    return () => script.remove()
  }, [items])

  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-slate-400">
      {items.map((item, i) => {
        const isLast = i === items.length - 1
        return (
          <span key={`${item.label}-${i}`} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.href && !isLast ? (
              <Link to={item.href} className="text-slate-600 hover:underline">
                {item.label}
              </Link>
            ) : (
              <span
                aria-current={isLast ? "page" : undefined}
                className={isLast ? "font-600 text-navy" : "text-slate-600"}
              >
                {item.label}
              </span>
            )}
          </span>
        )
      })}
    </nav>
  )
}
