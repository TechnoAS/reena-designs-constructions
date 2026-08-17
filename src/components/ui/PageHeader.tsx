import Breadcrumb from "./Breadcrumb"
import { SITE_CONTAINER } from "@/components/layout/constants"

interface PageHeaderProps {
  title: string
  crumbs: { label: string; href?: string }[]
}

export default function PageHeader({ title, crumbs }: PageHeaderProps) {
  return (
    <div className="py-10 px-6" style={{ background: "#f7f7f7", borderBottom: "1px solid #e8e8e8" }}>
      <div className={SITE_CONTAINER}>
        <Breadcrumb items={crumbs} />
        <h1 className="montserrat font-900 text-3xl md:text-4xl" style={{ color: "#1a2744" }}>{title}</h1>
      </div>
    </div>
  )
}
