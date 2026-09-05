import { useState, type ReactNode } from "react"
import PageWrapper from "@/components/layout/PageWrapper"
import PageHeader from "@/components/ui/PageHeader"
import SubNav from "@/components/ui/SubNav"
import FilterTabs from "@/components/ui/FilterTabs"
import ProjectCard from "@/components/ui/ProjectCard"
import Seo from "@/components/Seo"
import { SITE_CONTAINER } from "@/components/layout/constants"

/** Every project entry needs at least these; pages add their own fields. */
export type IndexedProject = {
  name: string
  img: string
  tag: string
}

interface ProjectIndexProps<T extends IndexedProject> {
  title: string
  seoTitle: string
  seoDescription: string
  crumbs: { label: string; href?: string }[]
  subNav: { label: string; href: string }[]
  tabs: readonly string[]
  projects: readonly T[]
  cardHeight?: number
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
  title,
  seoTitle,
  seoDescription,
  crumbs,
  subNav,
  tabs,
  projects,
  cardHeight = 200,
  renderMeta,
}: ProjectIndexProps<T>) {
  const [active, setActive] = useState<string>(tabs[0] ?? "All")
  const filtered = active === "All" ? projects : projects.filter((p) => p.tag === active)

  return (
    <PageWrapper>
      <Seo title={seoTitle} description={seoDescription} />
      <PageHeader title={title} crumbs={crumbs} />

      <div className={`${SITE_CONTAINER} py-10`}>
        <SubNav tabs={subNav} />
        <FilterTabs tabs={tabs} active={active} onSelect={setActive} />

        {filtered.length === 0 ? (
          <p className="py-16 text-center text-sm text-slate-400">
            No projects in this category yet.
          </p>
        ) : (
          <div className="mb-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {filtered.map((p, i) => (
              <ProjectCard key={p.name} img={p.img} alt={p.name} height={cardHeight} priority={i < 3}>
                {renderMeta(p)}
              </ProjectCard>
            ))}
          </div>
        )}
      </div>
    </PageWrapper>
  )
}
