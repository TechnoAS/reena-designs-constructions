import { useState, type ReactNode } from "react"
import { useLocation } from "react-router-dom"
import PageWrapper from "@/components/layout/PageWrapper"
import PageHeader from "@/components/ui/PageHeader"
import SubNav from "@/components/ui/SubNav"
import FilterTabs from "@/components/ui/FilterTabs"
import ProjectCard from "@/components/ui/ProjectCard"
import Seo from "@/components/Seo"
import { SITE_CONTAINER } from "@/components/layout/constants"
import { webPageSchema, pageGraph, ORG_ID } from "@/data/structuredData"

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
  title: string
  seoTitle: string
  seoDescription: string
  crumbs: { label: string; href?: string }[]
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
  title,
  seoTitle,
  seoDescription,
  crumbs,
  subNav,
  tabs,
  projects,
  intro,
  renderMeta,
}: ProjectIndexProps<T>) {
  const { pathname } = useLocation()
  const [active, setActive] = useState<string>(tabs[0] ?? "All")
  const filtered = active === "All" ? projects : projects.filter((p) => p.tag === active)

  /*
    The listing as an ItemList.

    Every project names the town it was built in, and those towns — Ghatal,
    Belda, Jhargram, Salboni — are exactly the local queries this site has no
    other page for. Emitting them as `Place` nodes rather than leaving them as
    card text is what makes the listing readable as evidence of work in each
    one. Built from the full set rather than `filtered`, because the filter is
    a client-side view and the page's content is all nine.
  */
  const listSchema = {
    "@type": "ItemList",
    "@id": `${pathname}#projects`,
    name: seoTitle,
    numberOfItems: projects.length,
    itemListElement: projects.map((project, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: project.name,
        ...(project.type ? { genre: project.type } : {}),
        image: project.img,
        creator: { "@id": ORG_ID },
        ...(project.location
          ? {
              locationCreated: {
                "@type": "Place",
                name: project.location,
                address: {
                  "@type": "PostalAddress",
                  addressLocality: project.location.split(",")[0].trim(),
                  addressRegion: "West Bengal",
                  addressCountry: "IN",
                },
              },
            }
          : {}),
      },
    })),
  }

  return (
    <PageWrapper
      cta={{
        title: "Want something like this built?",
        subtitle: "Free site visit, itemised quote, and a completion date in writing.",
        buttonText: "Start Your Project",
        buttonHref: "/contact",
      }}
    >
      <Seo
        title={seoTitle}
        description={seoDescription}
        schema={pageGraph(
          webPageSchema({
            path: pathname,
            name: seoTitle,
            description: seoDescription,
            type: "CollectionPage",
          }),
          listSchema,
        )}
      />
      <PageHeader title={title} crumbs={crumbs} backdrop />

      <section className={`${SITE_CONTAINER} pt-10`}>
        <SubNav tabs={subNav} />

        <div className="mb-9 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <p className="max-w-2xl text-sm leading-7 text-slate-500">{intro}</p>
          {/* The count tracks the filter, so it is a live answer to "how many
              of these are there" rather than a static total. */}
          <p className="flex-none text-[10.5px] uppercase tracking-[0.16em] text-slate-400">
            Showing {filtered.length} of {projects.length}
          </p>
        </div>

        <FilterTabs tabs={tabs} active={active} onSelect={setActive} />
      </section>

      {filtered.length === 0 ? (
        <p className="border-y border-hairline py-20 text-center text-sm text-slate-400">
          No projects in this category yet.
        </p>
      ) : (
        <div className="grid gap-px border-y border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p, i) => (
            <ProjectCard key={p.name} img={p.img} alt={p.name} priority={i < 4}>
              {renderMeta(p)}
            </ProjectCard>
          ))}
        </div>
      )}
    </PageWrapper>
  )
}
