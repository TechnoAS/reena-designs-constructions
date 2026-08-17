import PageWrapper from "@/components/layout/PageWrapper"
import PageHeader from "@/components/ui/PageHeader"
import GalleryGrid from "@/components/ui/GalleryGrid"
import { SITE_CONTAINER } from "@/components/layout/constants"

interface GalleryPageProps {
  title: string
  crumbs: { label: string; href?: string }[]
  images: string[]
}

export default function GalleryPage({ title, crumbs, images }: GalleryPageProps) {
  return (
    <PageWrapper>
      <PageHeader title={title} crumbs={crumbs} />
      <div className={`${SITE_CONTAINER} py-12`}>
        <GalleryGrid images={images} title={title} />
      </div>
    </PageWrapper>
  )
}
