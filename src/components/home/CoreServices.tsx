import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { SITE_CONTAINER } from "@/components/layout/constants"

const stock = (id: string) => `https://images.unsplash.com/${id}?w=800&h=1000&fit=crop&auto=format`

const SERVICES = [
  {
    title: "Building Construction",
    href: "/services",
    copy: "Structurally engineered residential and commercial builds, executed to IS-code standards with third-party tested materials.",
    img: stock("photo-1503387762-592deb58ef4e"),
    imgAlt: "Structural frame under construction",
  },
  {
    title: "Architectural Design",
    href: "/services",
    copy: "Site-responsive planning, working drawings and municipal-ready documentation — sanctioned faster, built cleaner.",
    img: stock("photo-1487958449943-2429e8be8625"),
    imgAlt: "Architectural facade detail",
  },
  {
    title: "Interior Design",
    href: "/our-work/interior/residential",
    copy: "Bespoke residential and workspace interiors, detailed down to the joinery, lighting layer and material palette.",
    img: stock("photo-1586023492125-27b2c045efd7"),
    imgAlt: "Styled living room with accent chair and floor lamp",
  },
  {
    title: "Renovation & Remodeling",
    href: "/our-work/renovation",
    copy: "Structural retrofits and full-home makeovers that modernise ageing property without compromising its frame.",
    img: stock("photo-1646987916641-1f3c8992daa2"),
    imgAlt: "Interior mid-renovation",
  },
  {
    title: "Turnkey Solutions",
    href: "/contact",
    copy: "One accountable contract from drawing board to handover — a single team, one timeline, one fixed cost.",
    // A contract being signed, not a finished building: the service being sold
    // here is the single accountable agreement, and every other panel already
    // shows built work.
    img: stock("photo-1450101499163-c8848c66ca85"),
    imgAlt: "Client and contractor signing a project agreement",
  },
]

export default function CoreServices() {
  return (
    <section id="services" className="relative bg-surface pt-16 md:pt-20">
      {/* Centered Heading */}
      <div className={`${SITE_CONTAINER} relative z-10 pb-10 md:pb-14 text-center`}>
        <h2 className="montserrat font-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider text-navy uppercase drop-shadow-xs">
          OUR CORE SERVICES
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-4 md:mt-5 max-w-2xl text-sm sm:text-base md:text-lg font-normal leading-relaxed text-slate-600">
          Five disciplines under one roof — construction, architecture, interiors, renovation and turnkey delivery.
        </p>
      </div>

      {/*
        Full-bleed strip: five photographs blended into one another, with the
        copy sitting on top. Deliberately outside SITE_CONTAINER so it runs
        edge to edge.

        There is no background colour here. A flat dark band behind the images
        read as a slab dropped onto the page; instead the photographs fade up
        into the section colour at their top edge (see .svc-blend) and are
        weighted down only where the captions sit. The dark is a property of
        the imagery, not a box around it.

        Images and text are separate layers rather than nested per panel. The
        panels overlap by design — that is what produces the blend — and if the
        photographs lived inside each panel, a panel's image would paint over
        its neighbour's text. Splitting them means the artwork can overlap
        freely while every caption stays clear of it.
      */}
      {/*
        `overflow-hidden` matters here. Each panel's photograph is drawn 2.5rem
        wider than its slot on both sides so neighbours can overlap and blend —
        but on the last panel that overhang has no neighbour to land on, so it
        spilled 40px past the right edge of the page and gave the whole site a
        horizontal scrollbar. Clipping at the strip's own bounds kills the
        spill without touching the panel-to-panel overlap, which happens
        entirely inside this box.
      */}
      <div className="relative isolate overflow-hidden md:h-[27rem]">
        {/* Layer 1 — the photography. */}
        <div className="absolute inset-0 flex flex-col md:flex-row" aria-hidden="true">
          {SERVICES.map(({ title, img }) => (
            <div key={title} className="relative min-h-[9rem] flex-1 overflow-hidden md:min-h-0 md:overflow-visible">
              {/*
                The overhang lives on this wrapper, not on the image.

                Setting both `-left-10` and `-right-10` on a plain element
                stretches it to the panel's width plus 5rem — no calc needed.
                It cannot be done on the <img> directly: for a replaced
                element, `width: auto` resolves to the image's intrinsic width
                rather than to the inset box, so the insets are ignored. The
                calc() this replaces was silently dead anyway (CSS needs
                whitespace around `+`, and Tailwind never emitted the utility),
                which is what left a 2.5rem strip of bare navy down the right
                of every panel on mobile.
              */}
              <span className="absolute inset-y-0 -left-10 -right-10 block">
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  /* `max-w-none` is required: index.css caps every image at
                     100% by default, which would undo the overhang. */
                  className="svc-blend h-full w-full max-w-none object-cover"
                />
              </span>
            </div>
          ))}
        </div>

        {/* Layer 2 — the copy, each panel carrying its own legibility wash. */}
        <div className="relative flex h-full flex-col md:flex-row">
          {SERVICES.map(({ title, href, copy, imgAlt }) => (
            <Link
              key={title}
              to={href}
              aria-label={`${title} — ${imgAlt}`}
              className="group relative flex flex-1 flex-col justify-end gap-3 p-7 transition duration-500 md:p-6 md:pb-8 md:first:pl-9 md:last:pr-9 lg:first:pl-14 lg:last:pr-14"
            >
              {/*
                Legibility wash, per panel rather than one across the strip.

                A single strip-wide gradient was wrong once the panels stack:
                on mobile it ran top-to-bottom across all five bands, so the
                first was washed out and the last nearly black. Per panel it
                behaves identically in a row and in a column.

                It also eases straight from the bottom edge rather than
                holding a flat colour for its first quarter — that flat run was
                a solid navy band under the captions, which is the slab look
                the imagery is meant to replace. Now only the last pixel is
                full strength and the photograph reads through everywhere else.
                Hover lifts it further.
              */}
              <span
                className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent transition duration-500 group-hover:from-navy/85 group-hover:via-navy/40"
                aria-hidden="true"
              />

              {/* Hairline seams. Subtle enough not to fight the blend, but they
                  stop the five panels reading as one undivided photograph. */}
              <span
                className="absolute inset-y-6 left-0 hidden w-px bg-white/12 group-first:hidden md:block"
                aria-hidden="true"
              />

              <span className="relative flex flex-col gap-3">
                {/* A short rule in place of the icon badge — enough to anchor
                    the title without putting a symbol back. */}
                <span
                  className="h-0.5 w-9 rounded-full bg-brand transition-all duration-500 group-hover:w-14"
                  aria-hidden="true"
                />

                <h3 className="montserrat font-800 text-[15px] leading-snug text-white">{title}</h3>

                {/*
                  The copy block is pinned to exactly five lines: `min-h` sets
                  the floor, `line-clamp` the ceiling. With the panels bottom
                  aligned, copy of differing length otherwise put the five
                  titles on five different baselines, and a bare `min-h` only
                  held until a narrower viewport rewrapped the text past it.
                */}
                <p className="text-[13px] leading-relaxed text-white/70 md:line-clamp-5 md:min-h-[7rem]">
                  {copy}
                </p>

                <span className="montserrat font-700 inline-flex items-center gap-1 text-[12px] text-orange-300 transition duration-500 md:translate-y-1 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  Explore
                  <ArrowUpRight size={13} strokeWidth={2.4} aria-hidden="true" />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
