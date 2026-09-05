import Breadcrumb from "./Breadcrumb"
import { SITE_CONTAINER } from "@/components/layout/constants"
import skyline from "@/imports/construction-skyline.jpg"

interface PageHeaderProps {
  title: string
  crumbs: { label: string; href?: string }[]
  /**
   * Renders the header as a tall dark band with the construction skyline
   * blended into it, instead of the flat grey strip. Opt-in per page.
   */
  backdrop?: boolean
}

export default function PageHeader({ title, crumbs, backdrop = false }: PageHeaderProps) {
  if (!backdrop) {
    return (
      <div className="px-6 py-10" style={{ background: "#f7f7f7", borderBottom: "1px solid #e8e8e8" }}>
        <div className={SITE_CONTAINER}>
          <Breadcrumb items={crumbs} />
          <h1 className="montserrat font-900 text-3xl text-navy md:text-4xl">{title}</h1>
        </div>
      </div>
    )
  }

  return (
    <div
      className="relative isolate overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1a2744 0%, #24365c 55%, #1e2d4e 100%)" }}
    >
      {/*
        The artwork is a wide silhouette strip, so it sits along the bottom at
        its own aspect ratio rather than being stretched to cover the band —
        `object-cover` would crop the machinery out of a strip this shallow.
        Only its upper edge is masked, which softens the cut across the building
        tops into the navy instead of leaving a hard orange line. The artwork's
        own sunset does the lighting; there is no separate glow behind it.
      */}
      <img
        src={skyline}
        alt=""
        aria-hidden="true"
        width={1983}
        height={192}
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-auto w-full select-none"
        style={{
          maskImage: "linear-gradient(to top, #000 0%, #000 62%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, #000 0%, #000 62%, transparent 100%)",
        }}
      />

      {/*
        Legibility scrim. The title sits over the excavator and the lower
        buildings, which are the darkest part of the artwork but also the
        busiest — this keeps the type crisp without dimming the skyline on the
        right, where there is nothing to read.
      */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(26,39,68,0.99) 0%, rgba(26,39,68,0.92) 26%, rgba(26,39,68,0.62) 55%, rgba(26,39,68,0.24) 80%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className={`${SITE_CONTAINER} relative py-10 md:py-12 lg:py-14`}>
        <Breadcrumb items={crumbs} onDark />
        <h1 className="montserrat font-900 text-3xl text-white md:text-4xl lg:text-5xl">{title}</h1>
      </div>
    </div>
  )
}
