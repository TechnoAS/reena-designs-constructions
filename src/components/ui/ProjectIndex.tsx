import { useState, type ReactNode } from "react"
import PageWrapper from "@/components/layout/PageWrapper"
import PageHeader from "@/components/ui/PageHeader"
import SubNav from "@/components/ui/SubNav"
import FilterTabs from "@/components/ui/FilterTabs"
import ProjectCard from "@/components/ui/ProjectCard"
import Seo from "@/components/Seo"
import { SITE_CONTAINER } from "@/components/layout/constants"
import { routeSeo } from "@/data/routes"
import { srcSetFor, CARD_SIZES } from "@/data/images"

/** Candidates for a listing card, derived from the URL the page already built. */
const cardSrcSet = (src: string) => {
  const id = src.split("/").pop()?.split("?")[0]
  return id ? srcSetFor(id, { w: 640, h: 480 }) : undefined
}

/** Every project entry needs at least these; pages add their own fields. */
export type IndexedProject = {
  name: string
  img: string
  tag: string
  /** "Kharagpur, West Bengal". Present on both listings; used to place each
   *  project in the structured data so the town it was built in is indexable
   *  and not just readable. */
  location?: string
  type?: string
}

interface ProjectIndexProps<T extends IndexedProject> {
  /** Path of the listing's entry in `src/data/routes.ts` — title, heading,
   *  breadcrumbs and the project ItemList schema all come from there. */
  route: string
  subNav: { label: string; href: string }[]
  tabs: readonly string[]
  projects: readonly T[]
  /** Sentence under the heading, describing what this listing contains. */
  intro: string
  /** The part of the card that differs between the two pages. */
  renderMeta: (project: T) => ReactNode
}

/**
 * Shared shell for the Successful and Ongoing project listings.
 *
 * The two pages were near-identical: same header, sub-nav, tag filter and card
 * grid, differing only in the metadata block inside each card (completion date
 * versus a progress bar). Everything but that block lives here now, so a fix to
 * the filtering or the grid cannot land on one page and miss the other.
 */
export default function ProjectIndex<T extends IndexedProject>({
  route,
  subNav,
  tabs,
  projects,
  intro,
  renderMeta,
}: ProjectIndexProps<T>) {
  const page = routeSeo(route)
  const [active, setActive] = useState<string>(tabs[0] ?? "All")
  const filtered = active === "All" ? projects : projects.filter((p) => p.tag === active)

  return (
    <PageWrapper
      cta={{
        title: "Want something like this built?",
        subtitle: "Free site visit, itemised quote, and a completion date in writing.",
        buttonText: "Start Your Project",
        buttonHref: "/contact",
      }}
    >
      <Seo route={route} />
      <PageHeader title={page.heading} subtitle={page.subheading} crumbs={page.crumbs} backdrop />

      <section className={`${SITE_CONTAINER} pt-10`}>
        <SubNav tabs={subNav} />

        <div className="mb-9 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <p className="max-w-2xl text-sm leading-7 text-slate-500">{intro}</p>
          {/* The count tracks the filter, so it is a live answer to "how many
              of these are there" rather than a static total. */}
          <p className="flex-none text-[10.5px] uppercase tracking-[0.16em] text-slate-600">
            Showing {filtered.length} of {projects.length}
          </p>
        </div>

        <FilterTabs tabs={tabs} active={active} onSelect={setActive} />
      </section>

      {filtered.length === 0 ? (
        <p className="border-y border-hairline py-20 text-center text-sm text-slate-500">
          No projects in this category yet.
        </p>
      ) : (
        <div className="grid gap-px border-y border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* The alt text was the project name alone, which is printed in full
              directly beneath the photograph — so a screen-reader user heard
              "Sunrise Villa" twice and learned nothing about the building.
              Naming the type and the town instead describes the image and
              carries the local detail the caption does not repeat. */}
          {filtered.map((p, i) => (
            <ProjectCard
              key={p.name}
              img={p.img}
              srcSet={cardSrcSet(p.img)}
              sizes={CARD_SIZES}
              alt={
                p.type && p.location
                  ? `${p.name} — ${p.type.toLowerCase()} project in ${p.location}`
                  : `${p.name}, completed by Reena Designs & Constructions`
              }
              priority={i < 4}
            >
              {renderMeta(p)}
            </ProjectCard>
          ))}
        </div>
      )}
    </PageWrapper>
  )
}
