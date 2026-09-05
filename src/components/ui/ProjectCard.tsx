import type { ReactNode } from "react"

interface ProjectCardProps {
  img: string
  alt: string
  height?: number
  /** Set on the first row of a grid so the largest visible image is not deferred. */
  priority?: boolean
  children?: ReactNode
}

export default function ProjectCard({ img, alt, height = 200, priority = false, children }: ProjectCardProps) {
  return (
    <div className="proj-card">
      <div style={{ height }}>
        <img
          src={img}
          alt={alt}
          /* Intrinsic size reserves the box before the bytes arrive, so the
             page below does not jump as each card loads. `height` is the CSS
             box; the 3:2 ratio matches every source crop. */
          width={Math.round(height * 1.5)}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
      {children && <div className="p-4">{children}</div>}
    </div>
  )
}
