import { useLocation } from "react-router-dom"
import PageWrapper from "@/components/layout/PageWrapper"
import PageHeader from "@/components/ui/PageHeader"
import GalleryGrid from "@/components/ui/GalleryGrid"
import Seo from "@/components/Seo"
import { SITE_CONTAINER } from "@/components/layout/constants"
import type { GalleryImage } from "@/data/galleryData"
import { imageGallerySchema, webPageSchema, pageGraph } from "@/data/structuredData"

interface GalleryPageProps {
  title: string
  crumbs: { label: string; href?: string }[]
  images: GalleryImage[]
  /**
   * A sentence of real copy under the heading.
   *
   * A gallery page is otherwise a grid of photographs with a two-word title,
   * which gives a search engine almost no text to rank. One honest paragraph
   * naming the work and the district is the difference between the page being
   * indexed as a thin duplicate of the other four and being indexed at all.
   */
  intro?: string
}

/** Title-case the ALL CAPS heading for use in a search result. */
const titleCase = (s: string) =>
  s.toLowerCase().replace(/(^|\s|&\s)([a-z])/g, (_, p, c) => p + c.toUpperCase())

export default function GalleryPage({ title, crumbs, images, intro }: GalleryPageProps) {
  const { pathname } = useLocation()
  const readable = titleCase(title)
  const description = `${readable} by Reena Designs & Constructions — completed work across Midnapur, Kharagpur and Paschim Midnapur, West Bengal. ${images.length} projects.`

  return (
    <PageWrapper
      cta={{
        title: "Want something like this built?",
        subtitle: "Free site visit, itemised quote, and a completion date in writing.",
        buttonText: "Start Your Project",
        buttonHref: "/contact",
      }}
    >
      {/* `ImageGallery` with a caption per photograph. Image results are a real
          share of the traffic a construction portfolio gets, and this is what
          attributes each photograph back to the business rather than leaving it
          floating in Google Images unattached. */}
      <Seo
        title={`${readable} — Project Gallery`}
        description={description}
        image={images[0]?.src}
        schema={pageGraph(
          webPageSchema({
            path: pathname,
            name: `${readable} — Reena Designs & Constructions, Midnapur`,
            description,
            type: "CollectionPage",
          }),
          imageGallerySchema(pathname, readable, description, [...images]),
        )}
      />
      <PageHeader title={title} crumbs={crumbs} backdrop />

      <section className={`${SITE_CONTAINER} py-14 lg:py-16`}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
          <h2 className="montserrat font-800 text-xl text-navy md:text-2xl">{readable}</h2>
          <p className="text-[10.5px] uppercase tracking-[0.16em] text-slate-400">
            {images.length} {images.length === 1 ? "project" : "projects"}
          </p>
        </div>
        {intro && <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500">{intro}</p>}
      </section>

      <GalleryGrid images={images} />
    </PageWrapper>
  )
}
