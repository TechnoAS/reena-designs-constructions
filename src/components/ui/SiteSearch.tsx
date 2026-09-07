import { useEffect, useId, useMemo, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Search, ArrowRight, CornerDownLeft } from "lucide-react"

/**
 * Hero search.
 *
 * A real index of the site rather than a decorative input: every entry resolves
 * to a route that exists, so pressing Enter always lands somewhere useful. It
 * is a combobox, which means it owes the keyboard everything the mouse gets —
 * arrows to move, Enter to open, Escape to dismiss — and it owes a screen
 * reader `aria-activedescendant`, because moving a visual highlight is not the
 * same as moving focus.
 *
 * `keys` exists because visitors do not search for page titles. Someone wanting
 * a kitchen types "modular kitchen", not "Residential Interior"; someone
 * costing a build types "rate" or "per sq ft", not "What's Included".
 */
type Entry = {
  label: string
  href: string
  kind: string
  keys: string[]
}

const INDEX: Entry[] = [
  {
    label: "Get a free quote",
    href: "/contact",
    kind: "Enquiry",
    keys: ["quote", "quotation", "estimate", "cost", "price", "rate", "per sq ft", "budget", "enquiry", "contact", "call", "phone"],
  },
  {
    label: "What's Included",
    href: "/whats-included",
    kind: "Costs",
    keys: ["cement", "sand", "tmt", "steel", "bar", "bricks", "labour", "material", "materials", "grade", "included", "cost heads", "exclusions"],
  },
  {
    label: "Building Construction",
    href: "/services",
    kind: "Service",
    keys: ["construction", "build", "house", "home", "residential", "commercial", "structure", "rcc", "frame", "civil"],
  },
  {
    label: "Architectural Design",
    href: "/services",
    kind: "Service",
    keys: ["architect", "architecture", "drawing", "plan", "planning", "sanction", "approval", "elevation", "design"],
  },
  {
    label: "Structural Engineering",
    href: "/services",
    kind: "Service",
    keys: ["structural", "engineer", "load", "seismic", "column", "beam", "foundation", "footing"],
  },
  {
    label: "Renovation & Remodeling",
    href: "/our-work/renovation",
    kind: "Service",
    keys: ["renovation", "remodel", "remodeling", "retrofit", "makeover", "repair", "old house"],
  },
  {
    label: "Residential Interior",
    href: "/our-work/interior/residential",
    kind: "Interiors",
    keys: ["interior", "interiors", "modular kitchen", "kitchen", "bedroom", "wardrobe", "living room", "pooja", "false ceiling"],
  },
  {
    label: "Commercial Interior",
    href: "/our-work/interior/commercial",
    kind: "Interiors",
    keys: ["office", "commercial", "showroom", "retail", "workspace", "shop"],
  },
  {
    label: "3D Design & Elevation",
    href: "/our-work/3d-design",
    kind: "Gallery",
    keys: ["3d", "render", "rendering", "elevation", "visualisation", "visualization", "front design"],
  },
  {
    label: "Completed Projects",
    href: "/our-work/projects/successful",
    kind: "Work",
    keys: ["projects", "completed", "portfolio", "work", "done", "delivered", "gallery"],
  },
  {
    label: "Ongoing Projects",
    href: "/our-work/projects/ongoing",
    kind: "Work",
    keys: ["ongoing", "current", "in progress", "live site", "under construction"],
  },
  {
    label: "Client Testimonials",
    href: "/our-work/testimonials",
    kind: "Trust",
    keys: ["testimonial", "review", "reviews", "client", "rating", "feedback"],
  },
  {
    label: "Common Questions",
    href: "/faq",
    kind: "Help",
    keys: ["faq", "question", "questions", "how long", "timeline", "warranty", "payment", "emi"],
  },
  {
    label: "About Us",
    href: "/about",
    kind: "Company",
    keys: ["about", "who", "team", "company", "experience", "years", "certification", "iso"],
  },
]

/**
 * Rank by where the hit lands, not just whether there was one.
 *
 * A prefix on the label beats a prefix on a keyword, which beats a substring
 * anywhere — otherwise "co" surfaces "Common Questions" ahead of "Completed
 * Projects" purely by array order, and the list feels arbitrary.
 */
function score(entry: Entry, q: string): number {
  const label = entry.label.toLowerCase()
  if (label.startsWith(q)) return 100 - label.length
  if (entry.keys.some((k) => k === q)) return 90
  if (entry.keys.some((k) => k.startsWith(q))) return 80
  if (label.includes(q)) return 60
  if (entry.keys.some((k) => k.includes(q))) return 45
  return 0
}

const SUGGESTED = ["Modular kitchen", "Cost per sq ft", "3D elevation", "Ongoing projects"]

export default function SiteSearch() {
  const navigate = useNavigate()
  const listId = useId()
  const [q, setQ] = useState("")
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const wrap = useRef<HTMLDivElement>(null)

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase()
    if (needle.length < 2) return []
    return INDEX.map((e) => ({ e, s: score(e, needle) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 6)
      .map((r) => r.e)
  }, [q])

  // A click outside dismisses the list. Without it the panel stays open over
  // the hero after the visitor has moved on.
  useEffect(() => {
    if (!open) return
    const onDown = (e: PointerEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("pointerdown", onDown)
    return () => document.removeEventListener("pointerdown", onDown)
  }, [open])

  useEffect(() => setActive(0), [q])

  const go = (entry?: Entry) => {
    const target = entry ?? results[active]
    if (target) {
      setOpen(false)
      setQ("")
      navigate(target.href)
      return
    }
    // Nothing matched: hand the words to the enquiry form rather than dropping
    // them, so the visitor does not have to type the question twice.
    if (q.trim()) navigate(`/contact?project=${encodeURIComponent(q.trim())}`)
  }

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      if (!results.length) return
      e.preventDefault()
      setOpen(true)
      setActive((i) => (e.key === "ArrowDown" ? (i + 1) % results.length : (i - 1 + results.length) % results.length))
      return
    }
    if (e.key === "Enter") {
      e.preventDefault()
      go()
      return
    }
    if (e.key === "Escape") setOpen(false)
  }

  const showList = open && results.length > 0

  return (
    <div ref={wrap} className="relative w-full max-w-md">
      <div
        className="flex items-center gap-3 border border-slate-300 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-sm transition focus-within:border-brand focus-within:ring-2 focus-within:ring-orange-500/20"
        role="combobox"
        aria-expanded={showList}
        aria-owns={listId}
        aria-haspopup="listbox"
      >
        <Search size={17} strokeWidth={2.2} className="flex-none text-slate-400" aria-hidden="true" />
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKey}
          type="text"
          /* 16px on a phone: anything smaller makes iOS Safari zoom the
             viewport in on focus and never zoom back out. */
          className="min-w-0 flex-1 bg-transparent text-base text-navy outline-none placeholder:text-slate-400 sm:text-sm"
          placeholder="Search — kitchen, cost per sq ft, 3D elevation…"
          aria-label="Search the site"
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={showList ? `${listId}-${active}` : undefined}
          autoComplete="off"
        />
        <button
          type="button"
          onClick={() => go()}
          aria-label="Search"
          className="btn-orange montserrat font-700 flex-none px-3.5 py-2 text-[12px]"
        >
          <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
        </button>
      </div>

      {showList && (
        <ul
          id={listId}
          role="listbox"
          aria-label="Search results"
          className="absolute top-full left-0 z-50 mt-2 w-full overflow-hidden border border-slate-200 bg-white py-1.5 shadow-2xl"
        >
          {results.map((r, i) => (
            <li key={`${r.label}-${r.href}`} id={`${listId}-${i}`} role="option" aria-selected={i === active}>
              <button
                type="button"
                /* `onMouseDown` rather than `onClick`: the input's blur fires
                   first and would close the list out from under the click. */
                onMouseDown={(e) => {
                  e.preventDefault()
                  go(r)
                }}
                onMouseEnter={() => setActive(i)}
                className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                  i === active ? "bg-orange-50" : "bg-white"
                }`}
              >
                <span className="montserrat font-700 min-w-0 flex-1 truncate text-[13px] text-navy">
                  {r.label}
                </span>
                <span className="flex-none text-[10px] uppercase tracking-[0.16em] text-slate-400">
                  {r.kind}
                </span>
                {i === active && (
                  <CornerDownLeft size={13} strokeWidth={2.2} className="flex-none text-brand" aria-hidden="true" />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Openers, so the field is not a blank box the visitor has to guess at. */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {SUGGESTED.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => {
              setQ(s)
              setOpen(true)
            }}
            className="border border-slate-300/80 bg-white/60 px-2.5 py-1 text-[11px] text-slate-500 backdrop-blur-sm transition hover:border-brand hover:text-brand"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  )
}
