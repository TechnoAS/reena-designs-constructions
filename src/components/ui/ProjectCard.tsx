import type { ReactNode } from "react"

interface ProjectCardProps {
  img: string
  alt: string
  height?: number
  children?: ReactNode
}

export default function ProjectCard({ img, alt, height = 200, children }: ProjectCardProps) {
  return (
    <div className="proj-card">
      <div style={{ height }}>
        <img src={img} alt={alt} className="w-full h-full object-cover" />
      </div>
      {children && <div className="p-4">{children}</div>}
    </div>
  )
}
