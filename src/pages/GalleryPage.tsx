import PageWrapper from "@/components/layout/PageWrapper"
import PageHeader from "@/components/ui/PageHeader"
import GalleryGrid from "@/components/ui/GalleryGrid"
import Seo from "@/components/Seo"
import { SITE_CONTAINER } from "@/components/layout/constants"
import type { GalleryImage } from "@/data/galleryData"
import { routeSeo } from "@/data/routes"

interface GalleryPageProps {
  /** Path of the gallery's entry in `src/data/routes.ts`. */
  route: string
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

export default function GalleryPage({ route, images, intro }: GalleryPageProps) {
  const page = routeSeo(route)
  // The breadcrumb label is already written in title case ("3D Design &
  // Elevation"); lower-casing the ALL CAPS heading produced "3d Design".
  const readable = page.crumbs[page.crumbs.length - 1].label

  return (
    <PageWrapper
      cta={{
        title: "Want something like this built?",
        subtitle: "Free site visit, itemised quote, and a completion date in writing.",
        buttonText: "Start Your Project",
        buttonHref: "/contact",
      }}
    >
      {/* `ImageGallery` with a caption per photograph — built in
          `src/data/routes.ts`. Image results are a real share of the traffic a
          construction portfolio gets, and this is what attributes each
          photograph back to the business. */}
      <Seo route={route} />
      <PageHeader title={page.heading} subtitle={page.subheading} crumbs={page.crumbs} backdrop />

      <section className={`${SITE_CONTAINER} py-14 lg:py-16`}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
          <h2 className="montserrat font-800 text-xl text-navy md:text-2xl">{readable}</h2>
          <p className="text-[10.5px] uppercase tracking-[0.16em] text-slate-600">
            {images.length} {images.length === 1 ? "project" : "projects"}
          </p>
        </div>
        {intro && <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500">{intro}</p>}
      </section>

      <GalleryGrid images={images} />
    </PageWrapper>
  )
}
