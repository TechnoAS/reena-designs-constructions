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
    <PageWrapper>
      <Seo
        title={`${readable} — Project Gallery`}
        description={`${readable} by Reena Designs & Constructions — completed work across Midnapur, Kharagpur and Paschim Midnapur, West Bengal. ${images.length} projects.`}
      />
      <PageHeader title={title} crumbs={crumbs} />
      <div className={`${SITE_CONTAINER} py-12`}>
        <GalleryGrid images={images} title={readable} />
      </div>
    </PageWrapper>
  )
}
