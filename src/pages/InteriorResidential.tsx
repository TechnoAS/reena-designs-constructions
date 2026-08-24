import { useEffect, useMemo, useState } from "react"
import {
  X,
  Layers,
  ListChecks,
  Ruler,
  Sparkles,
  Lightbulb,
  PencilRuler,
  Maximize2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import PageHeader from "@/components/ui/PageHeader"
import SubNav from "@/components/ui/SubNav"
import FilterTabs from "@/components/ui/FilterTabs"
import SectionTitle from "@/components/ui/SectionTitle"
import CTABanner from "@/components/ui/CTABanner"
import { SITE_CONTAINER } from "@/components/layout/constants"
import { INTERIOR_PROJECTS, ROOM_TABS, type Room } from "@/data/interiorProjects"

const APPROACH = [
  {
    Icon: PencilRuler,
    title: "Measured & drawn first",
    copy: "Every unit is drawn to your site's real dimensions before a single board is cut, so nothing is improvised on site.",
  },
  {
    Icon: Layers,
    title: "Specified materials",
    copy: "Shutters, cores, hardware and stone are named in your quote — you know the grade you are paying for.",
  },
  {
    Icon: Lightbulb,
    title: "Lighting designed in",
    copy: "Cove, task and accent circuits are planned with the joinery, not added afterwards as an afterthought.",
  },
  {
    Icon: Ruler,
    title: "Factory-finished",
    copy: "Cabinetry is machine-cut and edge-banded off site, then installed — a cleaner finish and a faster handover.",
  },
]

export default function InteriorResidential() {
  const [active, setActive] = useState<Room>("Living Room")
  const [openId, setOpenId] = useState<string | null>(null)

  const visible = useMemo(
    () => INTERIOR_PROJECTS.filter((p) => p.room === active),
    [active],
  )

  const openIndex = visible.findIndex((p) => p.id === openId)
  const openProject = openIndex >= 0 ? visible[openIndex] : null

  // Step through the projects currently in view, wrapping at both ends.
  const step = (dir: number) => {
    if (openIndex < 0) return
    setOpenId(visible[(openIndex + dir + visible.length) % visible.length].id)
  }

  // Close on Escape and drive the lightbox from the arrow keys; lock background
  // scroll while it is open so the page behind does not move.
  useEffect(() => {
    if (!openProject) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null)
      if (e.key === "ArrowRight") step(1)
      if (e.key === "ArrowLeft") step(-1)
    }
    window.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [openProject, openIndex, visible.length])

  return (
    <PageWrapper>
      <PageHeader
        title="RESIDENTIAL INTERIOR"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Our Work", href: "/our-work" },
          { label: "Interior Design" },
          { label: "Residential Interior" },
        ]}
      />

      <div className={`${SITE_CONTAINER} py-12`}>
        <SubNav
          tabs={[
            { label: "Residential Interior", href: "/our-work/interior/residential", active: true },
            { label: "Commercial Interior", href: "/our-work/interior/commercial", active: false },
          ]}
        />

        <div className="mb-10 max-w-3xl">
          <p className="montserrat font-700 mb-3 text-[11px] uppercase tracking-[0.3em] text-orange-600">
            Residential interior design in Midnapur & across India
          </p>
          <h2 className="montserrat font-800 text-2xl leading-snug md:text-3xl" style={{ color: "#1a2744" }}>
            Interiors detailed to the millimetre, built to last
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            Living rooms, bedrooms, modular kitchens and pooja rooms — designed in 3D, quoted by
            named material grade, and executed by our own carpentry and electrical teams. Browse a
            selection of completed residential interiors below, each with its full material
            specification and scope of work.
          </p>
        </div>

        <FilterTabs
          tabs={ROOM_TABS}
          active={active}
          onSelect={(t) => setActive(t as Room)}
        />

        {/* ── Project grid ─────────────────────────────────────── */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl hover:shadow-slate-900/5"
            >
              <button
                type="button"
                onClick={() => setOpenId(p.id)}
                aria-label={`View details for ${p.title}`}
                className="relative block w-full overflow-hidden"
              >
                <img
                  src={p.img}
                  alt={`${p.title} — ${p.room.toLowerCase()} interior design by Reena Designs & Constructions, Midnapur`}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <span className="montserrat font-700 absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-lg bg-white/95 px-3 py-1.5 text-[11px] text-slate-800 opacity-0 transition duration-300 group-hover:opacity-100">
                  <Maximize2 size={12} strokeWidth={2.2} aria-hidden="true" />
                  View details
                </span>
                <span className="montserrat font-700 absolute left-3 top-3 rounded-lg px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-white" style={{ background: "#FF5E00" }}>
                  {p.room}
                </span>
              </button>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="montserrat font-800 text-sm leading-snug" style={{ color: "#1a2744" }}>
                  {p.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-500">{p.summary}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.materials.slice(0, 3).map((m) => (
                    <span key={m} className="rounded-md bg-slate-50 px-2 py-1 text-[10px] font-semibold text-slate-500">
                      {m}
                    </span>
                  ))}
                  {p.materials.length > 3 && (
                    <span className="rounded-md bg-slate-50 px-2 py-1 text-[10px] font-semibold text-slate-400">
                      +{p.materials.length - 3} more
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setOpenId(p.id)}
                  className="montserrat font-700 mt-5 inline-flex items-center gap-1.5 self-start text-[12px] text-orange-600 transition hover:gap-2.5"
                >
                  Full specification
                  <ChevronRight size={13} strokeWidth={2.4} aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* ── How we work ──────────────────────────────────────── */}
        <section className="mt-20">
          <SectionTitle
            eyebrow="Our approach"
            title="HOW WE DETAIL AN INTERIOR"
            subtitle="The reason these rooms photograph well is that the decisions were made on paper, in order, before anyone arrived on site."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {APPROACH.map(({ Icon, title, copy }) => (
              <div key={title} className="svc-card flex flex-col gap-3 p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="montserrat font-800 text-sm" style={{ color: "#1a2744" }}>{title}</h3>
                <p className="text-[13px] leading-relaxed text-slate-500">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16">
          <CTABanner
            title="WANT AN INTERIOR LIKE THIS IN YOUR HOME?"
            subtitle="Share your floor plan and we will come back with a 3D concept, a named material specification and a fixed quote."
            buttonText="Book a Free Consultation"
            buttonHref="/contact"
          />
        </div>
      </div>

      {/* ── Detail lightbox ───────────────────────────────────── */}
      {openProject && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-900/70 p-4 backdrop-blur-sm sm:p-8"
          onClick={() => setOpenId(null)}
          role="dialog"
          aria-modal="true"
          aria-label={openProject.title}
        >
          <div
            className="relative my-auto w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenId(null)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-lg transition hover:bg-white hover:text-orange-600"
            >
              <X size={17} strokeWidth={2.2} aria-hidden="true" />
            </button>

            <div className="grid lg:grid-cols-2">
              <div className="relative bg-slate-100">
                <img
                  src={openProject.img}
                  alt={`${openProject.title} — ${openProject.room.toLowerCase()} interior by Reena Designs & Constructions`}
                  className="h-72 w-full object-cover lg:h-full"
                />
                {visible.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => step(-1)}
                      aria-label="Previous project"
                      className="absolute left-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-lg transition hover:bg-white hover:text-orange-600"
                    >
                      <ChevronLeft size={17} strokeWidth={2.2} aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() => step(1)}
                      aria-label="Next project"
                      className="absolute right-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-lg transition hover:bg-white hover:text-orange-600"
                    >
                      <ChevronRight size={17} strokeWidth={2.2} aria-hidden="true" />
                    </button>
                  </>
                )}
              </div>

              <div className="max-h-[70vh] overflow-y-auto p-7 lg:max-h-[80vh] lg:p-9">
                <div className="montserrat font-700 text-[10px] uppercase tracking-[0.25em] text-orange-600">
                  {openProject.room}
                </div>
                <h3 className="montserrat font-800 mt-2 text-xl leading-snug" style={{ color: "#1a2744" }}>
                  {openProject.title}
                </h3>

                <p className="mt-4 text-[13px] leading-7 text-slate-600">{openProject.detail}</p>

                <div className="mt-7">
                  <div className="montserrat font-800 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em]" style={{ color: "#1a2744" }}>
                    <Sparkles size={14} strokeWidth={2} className="text-orange-500" aria-hidden="true" />
                    Materials &amp; finishes
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {openProject.materials.map((m) => (
                      <span key={m} className="rounded-lg bg-slate-50 px-3 py-1.5 text-[11px] font-semibold text-slate-600 ring-1 ring-slate-100">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-7">
                  <div className="montserrat font-800 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em]" style={{ color: "#1a2744" }}>
                    <ListChecks size={14} strokeWidth={2} className="text-orange-500" aria-hidden="true" />
                    Scope of work
                  </div>
                  <ul className="mt-3 space-y-2.5">
                    {openProject.scope.map((s) => (
                      <li key={s} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-600">
                        <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full" style={{ background: "#FF5E00" }} aria-hidden="true" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageWrapper>
  )
}
