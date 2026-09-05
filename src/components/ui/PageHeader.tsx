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
      style={{ background: "linear-gradient(160deg, #111a2e 0%, #1a2744 55%, #16223c 100%)" }}
    >
      {/*
        The skyline rises out of the band rather than sitting in it: anchored to
        the bottom edge and masked to transparent going up, so the crop across
        the crane tops never shows as a hard line. The artwork's own sunset does
        the lighting — there is no separate glow behind it.
      */}
      <img
        src={skyline}
        alt=""
        aria-hidden="true"
        width={1920}
        height={768}
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-full w-full select-none object-cover object-bottom"
        style={{
          maskImage: "linear-gradient(to top, #000 0%, #000 30%, transparent 92%)",
          WebkitMaskImage: "linear-gradient(to top, #000 0%, #000 30%, transparent 92%)",
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
            "linear-gradient(to right, #0d1527 0%, rgba(13,21,39,0.82) 35%, rgba(13,21,39,0.25) 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className={`${SITE_CONTAINER} relative py-16 md:py-20 lg:py-24`}>
        <Breadcrumb items={crumbs} onDark />
        <h1 className="montserrat font-900 text-3xl text-white md:text-4xl lg:text-5xl">{title}</h1>
      </div>
    </div>
  )
}
