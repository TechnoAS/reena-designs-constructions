import PageWrapper from "@/components/layout/PageWrapper"
import PageHeader from "@/components/ui/PageHeader"
import GalleryGrid from "@/components/ui/GalleryGrid"
import Seo from "@/components/Seo"
import { SITE_CONTAINER } from "@/components/layout/constants"

interface GalleryPageProps {
  title: string
  crumbs: { label: string; href?: string }[]
  images: string[]
}

/** Title-case the ALL CAPS heading for use in a search result. */
const titleCase = (s: string) =>
  s.toLowerCase().replace(/(^|\s|&\s)([a-z])/g, (_, p, c) => p + c.toUpperCase())

export default function GalleryPage({ title, crumbs, images }: GalleryPageProps) {
  const readable = titleCase(title)

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
        title={`${readable} — Project Gallery`}
        description={`${readable} by Reena Designs & Constructions — completed work across Midnapur, Kharagpur and Paschim Midnapur, West Bengal. ${images.length} projects.`}
      />
      <PageHeader title={title} crumbs={crumbs} backdrop />

      <section className={`${SITE_CONTAINER} py-14 lg:py-16`}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
          <h2 className="montserrat font-800 text-xl text-navy md:text-2xl">{readable}</h2>
          <p className="text-[10.5px] uppercase tracking-[0.16em] text-slate-400">
            {images.length} {images.length === 1 ? "project" : "projects"}
          </p>
        </div>
      </section>

      <GalleryGrid images={images} title={readable} />
    </PageWrapper>
  )
}
